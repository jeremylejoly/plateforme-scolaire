const CACHE_NAME = 'classe-mr-lejoly-cache-v286';
const CORE_ASSETS = [
  './',
  'index.html',
  'Labyrinthe.html',
  'fiches/Labyrinthe.html',
  'planisphere-interactif.html',
  'cartes-planisphere.html',
  'cartes-europe.html',
  'europe-shaded-relief.jpg',
  'manifest.json',
  'exercices_francais.js',
  'exercices_maths.js',
  'exercices_eveil.js',
  'trajet_de_lair.html',
  'trajet_de_la_nourriture.html',
  'trajet_du_sang_ordre.html',
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
  'vocabulaire_operations.html',
  'fiches/vocabulaire_operations.html',
  'parties_calcul.html',
  'fiches/parties_calcul.html',
  'problemes_operations.html',
  'fiches/problemes_operations.html',
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
  'soleil-terre-lune.html',
  'fiches/soleil-terre-lune.html',
  'fiches/questionnaire-jour-nuit-LCML.html',
  'correctif-jour-nuit-LCML.html',
  'fiches/correctif-jour-nuit-LCML.html',
  'classification-phylogenetique.html',
  'fiches/classification-phylogenetique.html',
  'appareil-respiratoire.html',
  'fiches/appareil-respiratoire.html',
  'fiches/questionnaire-respiratoire.html',
  'fiches/questionnaire-respiratoire-correctif.html',
  'questionnaire-respiratoire-LCML.html',
  'fiches/questionnaire-respiratoire-LCML.html',
  'fiches/questionnaire-respiratoire-LCML-correctif.html',
  'appareil-digestif.html',
  'fiches/appareil-digestif.html',
  'correctif-digestif.html',
  'fiches/correctif-digestif.html',
  'fiches/questionnaire-digestif.html',
  'questionnaire-digestif-LCML.html',
  'fiches/questionnaire-digestif-LCML.html',
  'systeme-circulatoire.html',
  'fiches/systeme-circulatoire.html',
  'fiches/questionnaire-circulatoire.html',
  'fiches/questionnaire-circulatoire-correctif.html',
  'fiches/questionnaire-circulatoire-LCML.html',
  'expressions-proverbes.html',
  'fiches/expressions-proverbes.html',
  'vocabulaire-jeu.html',
  'fiches/vocabulaire-jeu.html',
  'registres-tri.html',
  'fiches/registres-tri.html',
  'verbes-ternes.html',
  'fiches/verbes-ternes.html',
  'assets/logos/sub_verbes_ternes.png',
  'chasseur-intrus.html',
  'fiches/chasseur-intrus.html',
  'assets/logos/sub_chasseur_intrus.png',
  'fabrique-mots.html',
  'fiches/fabrique-mots.html',
  'assets/logos/sub_fabrique_mots.png',
  'assets/logos/registre_familier.png',
  'assets/logos/registre_courant.png',
  'assets/logos/registre_soutenu.png',
  'assets/logos/sub_registres.png',
  'assets/logos/subject_vocabulaire.png',
  'assets/logos/sub_proverbes.png',
  'assets/logos/sub_atelier_mots.png',
  'assets/logos/theme_sentiments.png',
  'assets/logos/theme_actions.png',
  'assets/logos/theme_nature.png',
  'assets/logos/theme_objets.png',
  'assets/logos/theme_metiers.png',
  'assets/logos/theme_melange.png',
  'photos/l_habit_moine.png',
  'photos/vole_oeuf_boeuf.png',
  'photos/charrue_boeufs.png',
  'fiches/relief-hydrographie.html',
  'photos/classification_banniere.png',
  'photos/classification_biodiversite.png',
  'photos/classification_comparaison_fond.png',
  'photos/classification_arbre_vie.png',
  'photos/classification_arbre_3d.png',
  'frise-chronologique-histoire.html',
  'lecon_frise_historique.html',
  'ligne-du-temps_5.html',
  'ne_110m_admin_0_countries.js',
  'earth-blue-marble.jpg',
  'world-time-zones-cropped.png',
  'photos/comparaison_soleil_terre.png',
  'photos/modelisation_lampe_globe.png',
  'photos/globe_jour_nuit.png',
  'photos/schema_soleil_terre_lune.png',
  'photos/carte_du_monde_rotation.png',
  'photos/doc_etiolles.png',
  'photos/doc_paladru.png',
  'photos/doc_villa_romaine.png',
  'photos/doc_voie_romaine.png',
  'photos/doc_charrue.png',
  'photos/doc_sceaux_corporations.png',
  'photos/doc_reglement_cockerill.png',
  'photos/doc_fusillade_roux.png',
  'photos/doc_biodiversite.png',
  'photos/europe_illustration.png',
  'photos/asia_illustration.png',
  'photos/africa_illustration.png',
  'photos/north_america_illustration.png',
  'photos/south_america_illustration.png',
  'photos/oceania_illustration.png',
  'photos/antarctica_illustration.png',
  'photos/pacifique_illustration.png',
  'photos/atlantique_illustration.png',
  'photos/indien_illustration.png',
  'photos/arctique_illustration.png',
  'photos/austral_illustration.png',
  'photos/europe_animals.png',
  'photos/asia_animals.png',
  'photos/africa_animals.png',
  'photos/north_america_animals.png',
  'photos/south_america_animals.png',
  'photos/oceania_animals.png',
  'photos/antarctica_animals.png',
  'photos/pacifique_animals.png',
  'photos/atlantique_animals.png',
  'photos/indien_animals.png',
  'photos/arctique_animals.png',
  'photos/austral_animals.png',
  'photos/europe_icon.png',
  'photos/asia_icon.png',
  'photos/africa_icon.png',
  'photos/north_america_icon.png',
  'photos/south_america_icon.png',
  'photos/oceania_icon.png',
  'photos/antarctica_icon.png',
  'photos/pacifique_icon.png',
  'photos/atlantique_icon.png',
  'photos/indien_icon.png',
  'photos/arctique_icon.png',
  'photos/austral_icon.png',
  'qcm_arbre_feuilles.html',
  'quelle_question.html',
  'relief-hydrographie.html',
  'photos/lexique_relief.png',
  'photos/relief_belgique.png',
  'photos/lexique_hydrographie.png',
  'photos/detail_glacier.png',
  'photos/detail_montagne.png',
  'photos/detail_col.png',
  'photos/detail_vallee.png',
  'photos/detail_colline.png',
  'photos/detail_plaine.png',
  'photos/detail_plateau.png',
  'photos/detail_source_montagne.png',
  'photos/detail_source_plateau.png',
  'photos/detail_affluent.png',
  'photos/detail_confluent.png',
  'photos/detail_meandre.png',
  'photos/detail_fleuve.png',
  'photos/detail_estuaire.png',
  'photos/detail_delta.png',
  'photos/detail_embouchure.png',
  'photos/detail_mer.png',
  'photos/carte_cours_eau_belgique.png',
  'photos/carte_fond_cours_eau.png',
  'photos/carte_relief_hydrographie_belgique.png',
  'photos/riviere_regions.png'
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
