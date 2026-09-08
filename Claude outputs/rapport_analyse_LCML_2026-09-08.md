# Rapport d'analyse — LCML (fichiers récents)

**Date :** 8 septembre 2026
**Périmètre analysé :** les 21 fichiers modifiés au cours des 3 derniers jours (17 pages HTML + 4 fichiers JS : `exercices_maths.js`, `exercices_francais.js`, `exercices_eveil.js`, `sw.js`), dont le portail `index.html` (44 209 lignes).
**Méthode :** vérification de syntaxe JS automatisée (`node --check` sur chaque script, y compris les scripts inline extraits des pages HTML), recherche de références à des fonctions non définies, et vérification manuelle/programmatique du contenu pédagogique (recalcul des réponses attendues pour les exercices de maths, vérification grammaticale pour le français).
**Aucun fichier n'a été modifié** — analyse en lecture seule uniquement.

---

## 1. Bugs de code confirmés

### 🔴 Critique — `abaque_conversions.html` : le script ne peut pas s'exécuter du tout

Le fichier contient **deux déclarations `let currentMode`** dans le même `<script>` (portée globale) :

- ligne 944 : `let currentMode = 'hub'; // 'hub', 'grandeurs', 'numeration'`
- ligne 966 : `let currentMode = 'hub';`

En JavaScript, une double déclaration `let` dans la même portée est une **erreur de syntaxe** (`SyntaxError: Identifier 'currentMode' has already been declared`), vérifiée avec `node --check`. Conséquence : **le script entier refuse de s'exécuter dans le navigateur**, donc toute la page (abaques, sons, navigation) est actuellement non fonctionnelle. C'est le fichier le plus modifié de ces 3 derniers jours (hier 18h08).

**Correctif :** supprimer une des deux déclarations (garder celle de la ligne 966, qui est suivie de `window.currentMode = 'hub'`).

### 🟠 Élevé — `index.html` : trois boutons "Valider" cassés dans le module Solides/Quadrilatères

Dans le portail, les écrans Chars / Shape (QCM) / Vrai-Faux du module « Quadrilatères » ont des boutons dont le `onclick` appelle des fonctions qui n'existent nulle part dans le fichier :

| Bouton (ligne) | Fonction appelée (inexistante) | Fonction réellement définie |
|---|---|---|
| `chars-validate-btn` (l. 5870) | `validateCharsExercise()` | `validateCurrentCharsQuestion` (l. 11769) |
| `vf-validate-btn` (l. 5891) | `validateVFExercise()` | `validateCurrentVFQuestion` (l. 11984) |
| `shape-validate-btn` (l. 5912) | `validateShapeExercise()` | `validateCurrentShapeQuestion` (l. 12229) |

Il s'agit visiblement d'un renommage de fonctions (ajout de « Current ») effectué sans mettre à jour les 3 boutons correspondants. **Cliquer sur « ✓ Valider mes réponses » dans ces 3 exercices ne fait rien** (erreur JS silencieuse dans la console).

### 🟠 Élevé — `index.html` : le mini-jeu « Longueurs QCM » du portail plante dès la première réponse

À la ligne 25924 : `btnSuivant.onclick = isLast ? afficherLongueursQcmScoreFinal : suivantLongueursQcm;`

Ni `afficherLongueursQcmScoreFinal` ni `suivantLongueursQcm` ne sont définies nulle part dans le fichier (seule la fonction `choisirLongueursQcm`, `demarrerLongueursQcm` et `afficherLongueursQcmQuestion` existent). Cette ligne s'exécute **dès qu'un élève clique sur une réponse** (dans `choisirLongueursQcm`, appelée par chaque bouton d'option), ce qui provoque un `ReferenceError` et bloque l'exercice — impossible de passer à la question suivante ou de voir son score.

*Remarque :* la version autonome `longueurs_QCM.html` (fichier séparé) est, elle, indépendante et fonctionne correctement — seule la version intégrée au portail est affectée.

### 🟡 Mineur — `index.html` : bouton mort dans l'exercice des durées

`onclick="nextDureesQuestion()"` (l. 6274) référence une fonction inexistante, mais le bouton reste toujours `display:none` et n'est jamais affiché ailleurs dans le code (`validateDureesExercise` corrige les 10 questions d'un coup, sans étape « suivant »). Code mort sans impact utilisateur — à nettoyer par cohérence.

### 🟡 Mineur — `europe_climats.html` : couleur CSS invalide

Ligne 17 : `--danger-light: #fee2fee2;` — il s'agit visiblement d'une coquille de copier-coller (le nom de la variable est dupliqué dans la valeur). Le code est syntaxiquement valide (hex 8 chiffres avec canal alpha) mais produit une teinte rose/magenta semi-transparente au lieu du rouge clair attendu pour le style « incorrect ». Valeur correcte probable : `#fee2e2`.

---

## 2. Erreurs de contenu pédagogique confirmées

### `capacites_QCM.html` — une réponse marquée « correcte » est mathématiquement fausse

Question « ¼ dl, c'est la même chose que… » → réponse marquée correcte : **« 2,5 ml »**.
Or ¼ dl = 2,5 cl = **25 ml** (option présente dans la liste, non retenue). L'erreur est d'un facteur 10. Un élève qui répond correctement (25 ml) serait compté faux, et celui qui recopie la « bonne réponse » du site apprendrait une conversion erronée.

### `exercices_maths.js` (banque Vrai/Faux « quadrilatères », utilisée dans `index.html`) — deux affirmations contradictoires marquées vraies toutes les deux

- « Un trapèze a **exactement** une paire de côtés parallèles. » → `true`
- « Un parallélogramme est un trapèze. » → `true`

Ces deux réponses ne peuvent pas être vraies simultanément : un parallélogramme a **deux** paires de côtés parallèles, donc si un trapèze doit avoir *exactement* une paire, un parallélogramme ne peut pas être un trapèze. Selon la convention adoptée (exclusive vs inclusive), c'est l'une des deux réponses qui doit changer — soit remplacer « exactement » par « au moins », soit repasser la deuxième affirmation à `false`.

---

## 3. Ambiguïtés à vérifier (plusieurs réponses valides)

Dans les trois QCM de conversion (`capacites_QCM.html`, `longueurs_QCM.html`, `masses_QCM_abaque.html`), plusieurs questions proposent **deux options numériquement équivalentes** sans que ce soit voulu — un élève choisissant l'option non « officielle » mais tout aussi correcte serait compté faux :

| Fichier | Question | Options concernées |
|---|---|---|
| `capacites_QCM.html` | 500 ml | « 50 cl » et « 0,5 l » sont toutes deux correctes (seule « 0,5 l » est acceptée) |
| `capacites_QCM.html` | 1 dl | « 100 ml » et « 10 cl » sont toutes deux correctes (seule « 10 cl » est acceptée) |
| `longueurs_QCM.html` | 734 m | « 0,734 km » et « 73,4 dam » sont toutes deux correctes (seule la 1ʳᵉ est acceptée) |
| `longueurs_QCM.html` | ¾ m | « 75 cm » et « 7,5 dm » sont toutes deux correctes (seule la 1ʳᵉ est acceptée) |
| `masses_QCM_abaque.html` | 500 g | « 5 kg » et « 50 dag » : en fait 50 dag = 500 g (correct) et 5 kg aussi (correct), deux bonnes options |
| `masses_QCM_abaque.html` | 3500 g | « 3,5 kg » et « 350 dag » sont toutes deux correctes |
| `masses_QCM_abaque.html` | 7500 g | « 7,5 kg » et « 750 dag » sont toutes deux correctes |
| `masses_QCM_abaque.html` | 1250 g | « 1,25 kg » et « 125 dag » sont toutes deux correctes |

Cause probable : l'unité « dag »/« dam » (déca-) a été ajoutée comme distracteur sans vérifier qu'elle ne coïncidait pas numériquement avec la bonne réponse.

### `index.html` — exercice « Décimaux : le bon nombre »

Le format de réponse attendu (nombre de chiffres avant/après la virgule) n'est pas cohérent d'une série à l'autre pour une même position nommée : « unités » donne un nombre à 4 chiffres + 1 décimale dans la Série 1, mais 2 chiffres + 3 décimales dans la Série 2. Comme la consigne ne précise pas ce format et que la correction est une comparaison de texte exacte, un élève qui applique une autre répartition valide (mathématiquement plus petite/grande) serait compté faux. *(Le bug déjà signalé en commentaire dans le code — 13,457 → 13,547 — a bien été corrigé et est désormais correct, vérifié.)*

### `europe_climats.html` — nuance mineure

Sous-question Chamonix : « Les précipitations restent-elles importantes (supérieures à 100 mm) tout au long de l'année ? » → réponse « Oui, chaque mois ». Or avril et septembre sont exactement à 100 mm (pas strictement supérieurs). Détail mineur, sans impact réel sur la compréhension.

---

## 4. Fichiers vérifiés sans erreur détectée

Contenu intégralement recalculé/vérifié et conforme :
- `vitesse_situations.html` (50 situations, niveaux 1 et 2 — toutes les vitesses recalculées correctement)
- `moyenne_exercices.html` (25 questions sur 5 contextes — moyennes, étendues, projections, toutes exactes)
- `donnees_circulaires.html` (10 diagrammes circulaires — proportions et calculs tous exacts)
- `disque_compas.html` (10 questions — cohérence interne des mesures vérifiée)
- `angles_estimation.html` (30 angles — cohérence type/valeur/explication vérifiée)
- `conjugaison_passe_simple.html` (30 verbes — conjugaisons et infinitifs vérifiés)
- `homophones_complexes.html` (30 phrases « tout/tous/toute/toutes » et « quelque/quel que » — règles avancées vérifiées correctes, y compris les cas de h aspiré/muet)
- `adverbe_accord_exercice.html` (30 phrases adverbe/adjectif vérifiées)
- `vocabulaire_relations_lexicales.html` (échantillon vérifié : synonymes et homonymes)
- `squelette.html` / `squelette_qcm.html` (ce sont les pages de la leçon et du QCM sur le squelette humain — pas des fichiers "modèles" comme leur nom pourrait le suggérer ; 50 questions vérifiées factuellement correctes)
- `sw.js` (service worker : logique de cache stale-while-revalidate saine, aucun bug relevé)

---

## 5. Limites de cette analyse

- Seuls les **21 fichiers modifiés dans les 3 derniers jours** ont été analysés, pas l'ensemble du site (170+ pages d'exercices au total).
- `index.html` fait 44 209 lignes (dont ~41 000 lignes de JavaScript) : le contrôle de syntaxe couvre l'intégralité du fichier, mais la vérification pédagogique détaillée n'a porté que sur les sections directement liées aux fichiers récents (durées, décimaux, quadrilatères, longueurs QCM) — pas sur l'exhaustivité du catalogue d'exercices qu'il contient.
- Les niveaux 2 de `vitesse_situations.html` n'ont été vérifiés que partiellement (les 30 premières questions sur 50, motif de cohérence de méthode confirmé).
- Les questions reposant sur des images (`disque_compas.html`) ont été vérifiées pour leur cohérence numérique interne, pas visuellement (je n'ai pas ouvert les fichiers `assets/disque/*.png`).

---

## Résumé

| Gravité | Nombre |
|---|---|
| 🔴 Bug bloquant (page entière cassée) | 1 |
| 🟠 Bug élevé (fonctionnalité cassée) | 2 |
| 🟡 Bug mineur / code mort | 2 |
| Erreur de contenu confirmée | 2 |
| Ambiguïté de contenu (plusieurs bonnes réponses) | 9 |
