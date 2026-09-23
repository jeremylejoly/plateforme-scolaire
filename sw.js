/* Service Worker – Classe de Mr Lejoly
 *
 * Refonte perf (sept. 2026) :
 *  - Avant : 277 fichiers (≈151 Mo) mis en cache à l'installation sur CHAQUE appareil,
 *    et tout le cache effacé à chaque nouvelle version.
 *  - Maintenant :
 *    1. CORE  (versionné)  : seulement le « squelette » de l'appli (≈ 4 Mo).
 *    2. PAGES (versionné)  : pages HTML / JS / CSS mises en cache au fur et à mesure qu'elles sont ouvertes.
 *    3. MEDIA (permanent)  : images, polices… mises en cache à la première utilisation
 *       et CONSERVÉES d'une version à l'autre (revérifiées au plus une fois par semaine).
 *
 *  ➜ Pour publier une mise à jour du site : incrémenter VERSION ci-dessous (comme avant).
 *  ➜ Si vous remplacez une image en gardant le même nom et voulez forcer la mise à jour
 *    immédiate sur les tablettes : incrémenter MEDIA_VERSION.
 */
const VERSION = 'v344';
const MEDIA_VERSION = 'm2';

const CORE_CACHE  = 'lcml-core-'  + VERSION;
const PAGES_CACHE = 'lcml-pages-' + VERSION;
const MEDIA_CACHE = 'lcml-media-' + MEDIA_VERSION;
const KEEP = [CORE_CACHE, PAGES_CACHE, MEDIA_CACHE];

const MEDIA_MAX_AGE_MS = 7 * 24 * 3600 * 1000; // revalidation des médias : 1 fois / semaine max

// Squelette minimal indispensable au démarrage (et hors-ligne)
const CORE_ASSETS = [
  './',
  'index.html',
  'manifest.json',
  'livres.js',
  'exercices_francais.js',
  'exercices_maths.js',
  'exercices_eveil.js',
  'logo.svg',
  'icon-192.png',
  'icon-512.png',
  'KGElephantHiccups.ttf',
  'KGHaventSleptShadow.ttf'
];

const MEDIA_EXT = /\.(png|jpe?g|gif|webp|avif|svg|ico|ttf|otf|woff2?)$/i;

// ---------- INSTALL ----------
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CORE_CACHE).then((cache) =>
      Promise.allSettled(CORE_ASSETS.map((url) => cache.add(url).catch(() => {})))
    )
  );
  self.skipWaiting();
});

// ---------- ACTIVATE : supprime les anciens caches (dont l'ancien cache de 151 Mo) ----------
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => !KEEP.includes(k)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// ---------- Outils ----------
function stampResponse(response) {
  // Ajoute la date de mise en cache (pour la revalidation hebdomadaire des médias)
  return response.blob().then((body) => {
    const headers = new Headers(response.headers);
    headers.set('sw-cached-at', String(Date.now()));
    return new Response(body, { status: response.status, statusText: response.statusText, headers });
  });
}

function fetchAndStore(request, cacheName, stamp) {
  return fetch(request).then((res) => {
    if (res && res.status === 200 && res.type === 'basic') {
      const copy = res.clone();
      (stamp ? stampResponse(copy) : Promise.resolve(copy))
        .then((toStore) => caches.open(cacheName).then((c) => c.put(request, toStore)))
        .catch(() => {});
    }
    return res;
  });
}

// ---------- FETCH ----------
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Autres domaines (Firebase, Google Fonts, Tailwind…) : gestion normale par le navigateur
  if (url.origin !== self.location.origin) return;
  // Audio / vidéo (requêtes « Range ») : laisser le navigateur gérer (évite des bugs de lecture sur iPad)
  if (req.headers.has('range') || req.destination === 'audio' || req.destination === 'video') return;

  const isMedia = MEDIA_EXT.test(url.pathname) || req.destination === 'image' || req.destination === 'font';

  if (isMedia) {
    // Cache d'abord ; revérifie en arrière-plan au plus 1 fois par semaine
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) {
          const at = Number(cached.headers.get('sw-cached-at') || 0);
          if (Date.now() - at > MEDIA_MAX_AGE_MS) {
            event.waitUntil(fetchAndStore(req, MEDIA_CACHE, true).catch(() => {}));
          }
          return cached;
        }
        return fetchAndStore(req, MEDIA_CACHE, true);
      })
    );
    return;
  }

  // Pages, scripts, styles : réponse immédiate depuis le cache + mise à jour en arrière-plan
  // (la revérification passe par le cache HTTP du navigateur : le plus souvent une simple réponse 304)
  const isCore = CORE_ASSETS.some((a) => a !== './' && url.pathname.endsWith('/' + a)) || url.pathname.endsWith('/');
  const target = isCore ? CORE_CACHE : PAGES_CACHE;

  event.respondWith(
    caches.match(req, { ignoreSearch: false }).then((cached) => {
      const network = fetchAndStore(req, target, false);
      if (cached) {
        event.waitUntil(network.catch(() => {}));
        return cached;
      }
      return network.catch(() => {
        // Hors-ligne : seule la page principale retombe sur l'accueil (pas les exercices en iframe)
        if (req.mode === 'navigate' && req.destination === 'document') {
          return caches.match('index.html');
        }
        return Response.error();
      });
    })
  );
});
