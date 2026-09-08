# Rapport d'analyse LCML — Catégorie Mathématiques

**Date :** 8 septembre 2026
**Périmètre :** 65 fichiers HTML de la catégorie Mathématiques (exercices indépendants insérés sur le site), analysés en lecture seule — aucun fichier n'a été modifié.
**Méthode :** vérification syntaxique JavaScript (`node --check` sur tous les scripts extraits), détection des appels à des fonctions non définies (gestionnaires `onclick`/`onchange`/`addEventListener`), et surtout **recalcul programmatique ou manuel de chaque bonne réponse** stockée dans le code, pour les bancs de questions fixes comme pour les générateurs aléatoires.

**Résultat global :** aucune erreur de syntaxe JavaScript détectée sur les 65 fichiers. **8 bugs confirmés** (détaillés ci-dessous), de gravité variable — du vrai risque pédagogique (une comparaison mal étiquetée) à de simples défauts d'affichage CSS.

---

## Bugs confirmés

### 1. `comparaison.html` — décomposition mal étiquetée, réponse pédagogiquement fausse
Lignes ~445-446, dans le banc `BANK` (54 items, dont 10 tirés par partie) :

```js
{ left:{html:'3 dizaines de mille + 2 milliers + 4 centaines + 0 dizaine + 5 unités + 6 dixièmes', value:324005.6}, right:{html:"324 005,6", value:324005.6} },
{ left:{html:'3 dizaines de mille + 2 milliers + 4 centaines + 0 dizaine + 5 unités + 6 centièmes', value:324005.06}, right:{html:"324 005,6", value:324005.6} },
```

En lisant littéralement la décomposition ("3 dizaines de mille + 2 milliers + 4 centaines + 0 dizaine + 5 unités + 6 dixièmes"), le résultat correct est **32 405,6**, pas 324 005,6 — chaque étiquette de position est décalée d'un ordre de grandeur (le "3" devrait être en "centaines de mille", pas "dizaines de mille"). Comme la fonction `correctSign()` compare directement les champs `value` codés en dur (sans jamais recalculer la valeur à partir du texte), l'application validera un signe "=" (ou "<") entre une décomposition mal écrite et 324 005,6 — ce qui enseigne une équivalence fausse à l'élève. Ces 2 items sur 54 sont les seuls avec ce défaut (vérifié en reparsant programmatiquement les 54 entrées).

**Impact :** chaque partie tire 10 items sur 54, donc environ 18-37% de chances qu'un des deux items apparaisse dans une session donnée.

### 2. `sudoku.html` — écouteur clavier dupliqué à chaque nouvelle grille
`loadPuzzle()` (ligne 939) appelle `initKeyboardEvents()` (ligne 1138) à chaque fois qu'une grille est chargée — au premier lancement, mais aussi à chaque sélection d'une nouvelle grille depuis le menu et à chaque clic sur "Rejouer" (`replayGame()` → `loadPuzzle()`). `initKeyboardEvents()` ajoute un `document.addEventListener('keydown', ...)` sans jamais retirer le précédent. Après une deuxième grille jouée dans la même session de page, deux écouteurs sont actifs simultanément ; comme `onNumberInput()` désactive une case si le même chiffre est retapé, deux écouteurs empilés font qu'une frappe clavier physique semble ne rien faire (le chiffre est posé puis immédiatement retiré par le second écouteur), et les flèches déplacent le curseur de plusieurs cases au lieu d'une seule. Le pavé numérique à l'écran n'est pas affecté (il utilise des `onclick` statiques). **Seule la saisie au clavier physique est cassée, et seulement après la première grille.**

### 3. `volume_cubes.html` — explication contredit la réponse correcte
Forme "Les Tours Jumelles" (grille `[[3,1,3],[1,1,1],[0,0,0]]`) : le volume réellement calculé par `calculateVolume()` — et donné comme bonne réponse à l'élève — est **10 cm³** (3+1+3+1+1+1+0+0+0). Mais le texte explicatif associé affirme : *"Deux tours de 3 cubes, reliées par des blocs de 1 cube de haut. Total : 3 + 3 + 3 = **9 cubes**."* Un élève qui répond correctement 10 lira ensuite une explication qui annonce 9 — contradiction directe et source de confusion.

### 4. `grandeurs_echelle_activite4.html` — description des niveaux ne correspond pas au code
L'écran de sélection annonce : *"Niveau 1 : Échelles rondes (1:10 000 000 ou 1:20 000 000), 1 cm = 100 ou 200 km"* et *"Niveau 2 : Échelles plus complexes (1:15 000 000 ou 1:25 000 000), 1 cm = 150 ou 250 km"*. En réalité, le code fixe une seule échelle par niveau (`kmPerCm = 100` pour le niveau 1, `kmPerCm = 166` pour le niveau 2) — le niveau 2 (166 km/cm, soit 1:16 600 000) ne correspond à aucune des deux valeurs annoncées (150 ou 250). Les calculs internes restent cohérents avec la valeur réellement utilisée ; c'est le texte descriptif qui est trompeur.

### 5. `durees_situations.html` — étape de calcul affichée incohérente (cas limite)
Pour les questions de type durée où l'heure de début et l'heure de fin tombent dans **la même heure d'horloge** (environ 2,5% des questions générées, ex. 14h05 → 14h58, durée 53 min), la construction du tableau d'étapes saute les branches de "passage à l'heure suivante" et utilise par erreur la minute d'arrivée brute au lieu de la durée écoulée dans le libellé affiché. L'élève voit alors un calcul du type *"Calcul : 58 min = 53 min"*, incohérent en apparence — mais **la réponse numérique demandée à l'élève reste correctement calculée et évaluée** ; seul le texte explicatif ("correction affichée") est fautif.

### 6. `vocabulaire_operations.html` — propriété CSS mal orthographiée
Lignes 80, 87, 105 : `grid-template-cols` au lieu de `grid-template-columns` (règle de base + deux surcharges `@media`). Propriété CSS invalide, donc ignorée par le navigateur : la zone `.matching-area` reste en `display:grid` mais sans colonnes définies, et la mise en page en deux colonnes (termes de vocabulaire à gauche, définitions mélangées à droite) s'effondre en une seule colonne au lieu du layout prévu.

### 7. `problemes_operations.html` — même typo CSS
Ligne 186 : `.keypad { grid-template-cols: repeat(3, 1fr); ... }` — même erreur que ci-dessus. Le pavé numérique de 12 boutons (1-9, effacer, 0, OK) ne s'affiche pas en grille à 3 colonnes comme prévu ; les boutons s'empilent verticalement.

### 8. `aire_formules.html` — risque latent (non actif actuellement)
`submitAnswer()` utilise `parseFloat()` sans convertir la virgule décimale française en point, contrairement à la plupart des autres fichiers du site qui gèrent bien ce cas. **Ce n'est pas un bug actif aujourd'hui** car les valeurs de base sont toujours choisies pour que les aires générées (carré, rectangle, triangle, parallélogramme, trapèze) soient des entiers — mais si des réponses décimales étaient un jour introduites, un élève tapant "12,5" verrait sa réponse jugée fausse (`parseFloat("12,5")` = 12). Signalé par précaution.

---

## Fichiers vérifiés sans erreur (57 / 65)

Les fichiers suivants ont été analysés en profondeur (recalcul des bancs de questions fixes, ou relecture + simulation de la logique de génération/validation pour les exercices aléatoires) et **aucune erreur de contenu ou de code n'y a été trouvée** :

**Générateurs/calcul :** `abaque.html`, `aire_agraire.html` (20 conversions vérifiées), `aire_quadrillage.html` (50 aires vérifiées par la formule du lacet), `aire_situations.html` (40 classifications), `angles_mesurer.html`, `angles_reconnaitre.html` (30 angles), `balance_fractions.html` (5 niveaux), `calcul-ecrit-addition/soustraction/multiplication/division.html` (algorithmes en colonnes simulés sur 20 000+ essais chacun), `calculs-4-operations.html` (104 entrées), `calculs.html`, `calculs_fractions.html` (simulé sur 15 000 essais), `colorie_les_fractions.html` (69 items), `compte_est_bon.html`, `decimaux_arrondir.html` (simulé 5 000×, convention d'arrondi FWB respectée), `defi_pemdas.html` (80 expressions recalculées avec priorité des opérations correcte), `mission_pemdas.html` (60 expressions, moteur de réduction réimplémenté et comparé).

**Situations/monnaie/temps/échelle :** `deux_objets_monnaie.html`, `payer_le_commercant.html`, `rendre_la_monnaie.html`, `supermarche_malin.html`, `divisibilite.html`, `exercice_heure_secondes.html`, `heure_secondes.html`, `flechettes_atteins_le_score.html`, `flechettes_calcule_le_score.html`, `fraction_quantite.html`, `grandeurs_echelle.html`, `grandeurs_echelle_activite1/2/3.html`, `logique_tri.html` (~80 items de classification Venn/Carroll), `parties_calcul.html`, `patrons_solides.html`.

**Solides/géométrie/vocabulaire :** `polyedres_caracteristiques.html`, `polyedres_definitions.html`, `polyedres_reconnaitre.html` (formule d'Euler vérifiée), `polygones_caracteristiques.html`, `polygones_reconnaitre.html`, `triangles_QCM.html` (coordonnées SVG re-dérivées par trigonométrie), `triangles_caracteristiques.html` (30 questions), `triangles_hauteurs.html`, `vocabulaire_solides.html` (100 questions), `solide_symetrie.html` (réponse garantie correcte par construction), `volume_formules.html`, `rallye_bolides.html` (13 entrées, proportionnalité vérifiée), `proportionnalite.html` (30 entrées), `test_aire_agraire.html` (20 items), `Labyrinthe.html` (10 niveaux, géométrie de déplacement vérifiée).

**Déjà vérifiés lors de l'analyse précédente (regroupement céréales "périmètre du cercle") :**
- `perimetre_cercle.html` — 12 questions, toutes correctes.
- `perimetre_cercle_compose.html` — 8 questions, toutes correctes.
- `perimetre_cercle_inverse.html` — 14 questions (vérification complétée depuis la dernière session), toutes correctes.
- `aire_conversions.html` — **2 erreurs déjà signalées dans le rapport précédent** (voir rapport du 8/9 sur les fichiers récents) : conversion dam²→dm² (200 000 au lieu de 20 000) et km²→dm² (2e10 au lieu de 2e8).
- `volume_conversions.html` — génération dynamique, aucune erreur, bien implémenté.

---

## Limites de l'analyse

- Les puzzles visuels dépendant fortement d'une image (formes dans `Labyrinthe.html`, certaines cases de `sudoku.html`) n'ont pas été résolus exhaustivement à la main ; seule leur cohérence logique/structurelle a été vérifiée.
- Le contenu français dans `chasse_repetitions.html` (site "mathématiques" par dossier mais contenu grammatical — pronoms) a été vérifié grammaticalement, sans erreur trouvée.
- La détection des "gestionnaires non définis" repose sur une recherche automatique suivie d'une relecture manuelle de chaque cas suspect ; il reste une possibilité résiduelle qu'un cas très rare échappe à cette méthode.
- Cette analyse ne teste pas le rendu visuel réel dans un navigateur (mise en page, responsive) au-delà de la lecture du code CSS/HTML — les deux bugs `grid-template-cols` ont été confirmés par lecture du code, pas par capture d'écran.

---

## Tableau récapitulatif

| # | Fichier | Type de bug | Gravité |
|---|---------|-------------|---------|
| 1 | comparaison.html | Contenu — décomposition mal étiquetée, réponse pédagogiquement fausse | **Élevée** |
| 2 | sudoku.html | Code — écouteurs clavier dupliqués | Moyenne |
| 3 | volume_cubes.html | Contenu — explication contredit la bonne réponse | Moyenne |
| 4 | grandeurs_echelle_activite4.html | Contenu — texte descriptif incohérent avec le code | Faible |
| 5 | durees_situations.html | Affichage — étape de calcul incohérente (cas limite ~2,5%) | Faible |
| 6 | vocabulaire_operations.html | Code — CSS `grid-template-cols` invalide | Faible (visuel) |
| 7 | problemes_operations.html | Code — CSS `grid-template-cols` invalide | Faible (visuel) |
| 8 | aire_formules.html | Code — risque latent, pas de bug actif | Très faible |

---

*Prochaine étape suggérée : poursuivre l'analyse avec la catégorie Français (~25 fichiers), puis Éveil/Sciences (~20 fichiers), puis Géo/Histoire (~15 fichiers), et enfin les 19 gros fichiers questionnaire/correctif, selon le plan convenu.*
