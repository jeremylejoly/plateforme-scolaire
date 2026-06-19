const CACHE_NAME = 'classe-mr-lejoly-cache-v146';
const CORE_ASSETS = [
  './',
  'index.html',
  'cartes-planisphere.html',
  'cartes-europe.html',
  'europe-shaded-relief.jpg',
  'manifest.json',
  'exercices_francais.js',
  'exercices_maths.js',
  'exercices_eveil.js',
  'livres.js',
  'KGElephantHiccups.ttf',
  'KGHaventSleptShadow.ttf',
  'icon-192.png',
  'icon-512.png',
  'savoir_ecouter.html',
  'audio/soignes_audio.m4a',
  'audio/bruges_audio.m4a',
  'audio/fourmi_audio.m4a',
  'audio/pain_perdu_audio.m4a',
  'audio/fagnes_audio.m4a',
  'audio/atelier_audio.m4a',
  'audio/echecs_audio.m4a',
  'audio/notice_audio.m4a',
  'abaque.html',
  'colorie_les_fractions.html',
  'vocabulaire_solides.html',
  'solide_symetrie.html',
  'compte_est_bon.html',
  'flechettes_calcule_le_score.html',
  'flechettes_atteins_le_score.html',
  'deux_objets_monnaie.html',
  'payer_le_commercant.html',
  'rendre_la_monnaie.html',
  'heure_secondes.html',
  'calculs.html',
  'calculs-4-operations.html',
  'comparaison.html',
  'proportionnalite.html',
  'globe-terrestre.html',
  'ne_110m_admin_0_countries.js',
  'earth-blue-marble.jpg',
  'world-time-zones-cropped.png'
];

// Installe le Service Worker et met en cache les ressources de base
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching core assets');
      return cache.addAll(CORE_ASSETS);
    })
  );
  self.skipWaiting();
});

// Active le Service Worker et nettoie les anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Intercepte les requêtes réseau (Stratégie Stale-While-Revalidate)
self.addEventListener('fetch', (event) => {
  // Ignorer les requêtes non-GET et les appels Firebase en direct
  if (event.request.method !== 'GET') return;
  if (event.request.url.includes('firebasejs') || event.request.url.includes('firebasedatabase.app')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Renvoie la version en cache immédiatement
        // Et met à jour le cache en arrière-plan s'il y a du réseau
        fetch(event.request).then((networkResponse) => {
          if (networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse);
            });
          }
        }).catch(() => {/* Ignore les échecs réseau en arrière-plan */});
        
        return cachedResponse;
      }

      // Si pas en cache, récupère sur le réseau et met en cache pour la suite
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      }).catch((err) => {
        // Si complètement hors-ligne et que l'utilisateur navigue, renvoyer index.html
        if (event.request.mode === 'navigate') {
          return caches.match('index.html');
        }
        throw err;
      });
    })
  );
});
