# Rapport d'analyse LCML — index.html : "Liste des activités" et "Plan de travail"

**Date :** 8 septembre 2026
**Périmètre :** `index.html` (portail du site, ~44 700 lignes) et sa relation avec le dossier `fiches/` (223 fichiers d'exercices), analysés en lecture seule — aucun fichier n'a été modifié.

**Découverte préalable importante :** tous les exercices du site (y compris tous ceux analysés dans mes rapports précédents) sont en réalité chargés depuis un sous-dossier `fiches/` à la racine du projet, via la fonction `openFiche()` (`iframe.src = 'fiches/' + filename`) ou des `<iframe src="fiches/...">` codés en dur. Les copies à la racine du dossier LCML que j'avais analysées jusqu'ici sont des **doublons synchronisés, byte pour byte identiques** aux fichiers de `fiches/` (vérifié sur plusieurs exemples) — mes conclusions précédentes restent donc valables. Mais le dossier `fiches/` contient aussi une **cinquantaine de fichiers qui n'existent qu'à cet endroit** (jamais vus dans mes rapports précédents car absents de la racine) : toute une série sur le passé composé (`conjugaison_pc_*`, 11 fichiers), toute une série de sciences (`sci_*` : électricité, engrenages, éclipses, ombres et lumière, états de la matière, réseaux trophiques, etc., 15 fichiers), plus des corrigés et gabarits supplémentaires. Cette découverte répond en partie à ta question : une partie du contenu du site n'a simplement jamais été passée en revue faute d'être visible depuis la racine du dossier partagé.

---

## Question 1 — "Liste des activités" : tous les exercices y sont-ils présents ?

**Non — 17 exercices interactifs sont totalement absents et inaccessibles depuis le site, nulle part.**

### Méthode
J'ai reconstitué la liste exhaustive des 223 fichiers présents dans `fiches/` (le dossier réellement servi), puis j'ai cherché chaque nom de fichier dans l'intégralité d'`index.html` (tous les mécanismes confondus : `PLAN_CATALOGUE`, le tableau `DEFAULT_FICHES` utilisé par le menu "Fiches pédagogiques", les sous-menus internes comme celui du squelette). J'ai aussi vérifié, pour chaque fichier apparemment orphelin, qu'aucun **autre** fichier de `fiches/` ne le référence en interne (ex. `grandeurs_echelle.html` sert de page-menu et pointe vers `grandeurs_echelle_activite1-4.html` : ces 4 fichiers sont donc bien accessibles en 2 clics, même sans être cités dans `index.html`).

### Résultat détaillé

**206 fichiers sur 223 sont correctement accessibles**, via l'un de ces mécanismes :
- 291 entrées directes dans `PLAN_CATALOGUE` (le catalogue principal du site) ;
- le tableau `DEFAULT_FICHES` (15 fiches scientifiques/géo/vocabulaire, ex. l'appareil digestif, le système circulatoire, la classification phylogénétique) affiché dans un menu "Fiches pédagogiques" séparé ;
- des sous-menus internes à certains exercices (le squelette se décline en 5 sous-activités chargées dynamiquement, `grandeurs_echelle.html` sert de hub vers 4 activités).

**17 fichiers d'exercices interactifs réels ne sont référencés absolument nulle part** — ni dans `index.html`, ni dans aucun autre fichier de `fiches/`. Un élève ne peut les atteindre par aucun chemin de navigation sur le site :

| Fichier | Sujet apparent |
|---|---|
| `cartes-europe.html` | Carte interactive de l'Europe (probablement remplacée par `europe_cartes.html`, qui lui est bien référencé) |
| `cartes-planisphere.html` | Carte interactive du monde (probablement remplacée par `planisphere-interactif.html`, bien référencé) |
| `conjugaison_imparfait_QCM.html` | QCM conjugaison à l'imparfait |
| `conjugaison_imparfait_ecriture.html` | Exercice d'écriture à l'imparfait |
| `conjugaison_present_QCM.html` | QCM conjugaison au présent |
| `conjugaison_present_ecriture.html` | Exercice d'écriture au présent |
| `determinant_exercice.html` | Exercice sur les déterminants |
| `determinant_tri.html` | Tri de déterminants (à ne pas confondre avec les données `EXERCICES_DETERMINANT_TRI` utilisées ailleurs — voir note ci-dessous) |
| `exercice_heure_secondes.html` | Conversion heures/secondes (probablement remplacé par `heure_secondes.html`, bien référencé) |
| `formation-economique-sociale.html` | Leçon d'économie/société |
| `globe-terrestre.html` | Globe 3D interactif (Three.js) |
| `lecon_frise_historique.html` | Leçon sur la frise historique (probablement remplacée par `frise-chronologique-histoire.html`, bien référencé) |
| `ligne-du-temps_5.html` | Frise chronologique exploratoire |
| `moyenne_exercices.html` | Exercices sur la moyenne |
| `reproduction_plantes.html` | Leçon sur la reproduction des plantes |
| `squelette.html` | Ancienne version complète de la leçon squelette (remplacée par le sous-menu en 5 activités) |
| `transformations-physiques-chimiques.html` | Leçon sur les transformations physiques/chimiques (**la vraie leçon de chimie** — voir note) |

**Note importante sur `determinant_tri.html`** : les données `EXERCICES_DETERMINANT_TRI` (celles où j'avais trouvé la faute d'élision "tout le après-midi" dans le rapport Français) sont utilisées ailleurs sur le site via une logique différente — le fichier `determinant_tri.html` en tant que fiche autonome, lui, n'est jamais ouvert. Cette erreur reste donc bien vivante sur le site, juste par un autre chemin que celui que j'imaginais.

**Note sur `transformations-physiques-chimiques.html`** : dans mon rapport Éveil/Sciences, j'avais signalé que `transformations_labo.html` (référencé, lui) traitait en réalité de géométrie (translations/rotations) et non de chimie. Je confirme maintenant que ce n'est pas une erreur de classement côté site : `index.html` catalogue bien `transformations_labo.html` sous l'identifiant `solide_transformations_labo`, dans la catégorie mathématiques — c'est cohérent. Mais cela signifie que **la vraie leçon de chimie (`transformations-physiques-chimiques.html`) n'a, elle, aucun point d'entrée sur le site**, alors que son contenu (triangle du feu, distinction physique/chimique, test à l'eau de chaux) avait été vérifié correct dans mon rapport précédent.

### Fichiers absents du catalogue mais volontairement (pas un bug)

**44 fichiers de type "questionnaire", "correctif" ou "gabarit"** ne sont jamais référencés dans `index.html` — c'est normal et attendu : ce sont des documents imprimables statiques (pas de JavaScript), destinés à être imprimés par l'enseignant, pas à être ouverts dans le site interactif.

Cela dit, en dressant cette liste je remarque un problème de **rangement/doublons** dans le dossier `fiches/`, indépendant d'`index.html` : certains sujets ont accumulé jusqu'à **5 variantes de noms** pour ce qui semble être le même document (ex. pour "circulatoire" : `questionnaire-circulatoire.html`, `questionnaire-circulatoire-LCML.html`, `questionnaire-circulatoire-LCML-correctif.html`, `questionnaire-circulatoire-correctif-LCML.html`, `questionnaire-circulatoire-correctif.html`). Même chose pour "planisphère" (5 variantes) et "respiratoire" (5 variantes). Sans savoir laquelle est la version actuellement utilisée pour l'impression, il y a un vrai risque qu'un enseignant imprime par erreur une version périmée. Un nettoyage de ce dossier serait utile, indépendamment de tout bug de code.

---

## Question 2 — "Plan de travail" : tous les exercices y sont-ils présents ?

**Non, et de façon plus systématique que pour la Liste des activités — le Plan de travail est structurellement plus restreint.**

### Cause du problème (confirmée dans le code)

- **"Liste des activités"** (gérée par la fonction `getActivitiesMasterRegistry()`) est construite à partir de `PLAN_CATALOGUE` **PLUS 3 ajouts automatiques** : les livres "Récits Express", les 8 jeux éducatifs, et les fiches du tableau `DEFAULT_FICHES` non déjà présentes ailleurs.
- **"Plan de travail"** (fonction `_renderPlanTravailInto()`, ligne 30240) lit **directement et uniquement `PLAN_CATALOGUE`** — sans jamais passer par `getActivitiesMasterRegistry()`. Le code va même jusqu'à filtrer explicitement les identifiants qui ne sont pas dans `PLAN_CATALOGUE` ("Nettoyer les identifiants obsolètes (qui n'existent plus dans PLAN_CATALOGUE)").

Conséquence directe, vérifiée un par un dans le code : **tout ce que "Liste des activités" ajoute automatiquement est invisible et non assignable dans "Plan de travail"** :

**1. Les 8 jeux éducatifs — aucun assignable via le Plan de travail :**
Tables de multiplication, Memory Calcul, Tetris, Rush Hour, Le Robot (Labyrinthe), Mots croisés, Mots cachés, Sudoku.

**2. Les livres "Récits Express" — non assignables** (gérés dynamiquement, absents de `PLAN_CATALOGUE`).

**3. 15 fiches pédagogiques du tableau `DEFAULT_FICHES` — non assignables**, alors qu'elles sont bien visibles et activables/désactivables dans la Liste des activités :

| Titre | Fichier |
|---|---|
| La frise chronologique | frise-chronologique-histoire.html |
| Le planisphère | planisphere-interactif.html |
| Expressions et proverbes | expressions-proverbes.html |
| L'Atelier des Mots | vocabulaire-jeu.html |
| Le Défi des Registres | registres-tri.html |
| Chasse aux Verbes Ternes | verbes-ternes.html |
| Le Chasseur d'Intrus | chasseur-intrus.html |
| La Fabrique de Mots | fabrique-mots.html |
| Relief et hydrographie | relief-hydrographie.html |
| Régions et Communautés | regions_communautes_belgique.html |
| L'appareil respiratoire | appareil-respiratoire.html |
| L'appareil digestif | appareil-digestif.html |
| Le système circulatoire | systeme-circulatoire.html |
| Le Soleil, la Terre et la Lune | soleil-terre-lune.html |
| La classification phylogénétique | classification-phylogenetique.html |

**Concrètement :** un enseignant qui veut assigner "L'appareil digestif" ou "La frise chronologique" à un élève (ou à toute la classe) via l'écran "Plan de travail" ne peut pas le faire — ces éléments n'apparaissent tout simplement pas dans la liste à cocher, alors qu'ils sont bien visibles et gérables (activer/masquer) dans la "Liste des activités". C'est incohérent pour l'utilisateur : ce qu'on peut gérer dans un écran, on s'attend à pouvoir l'assigner dans l'autre.

**Nuance à considérer** : pour les 8 jeux (Sudoku, Tetris, etc.), il est possible que ce soit un choix délibéré — un enseignant n'assigne généralement pas "jouer à Tetris" comme travail à faire. Mais pour les 15 fiches pédagogiques (appareil digestif, planisphère, frise chronologique, etc.), ce sont clairement des contenus de leçon que l'enseignant voudrait pouvoir assigner comme les autres exercices — leur absence du Plan de travail ressemble bien à un oubli plutôt qu'à un choix voulu.

**Remarque annexe** : le fait que ces 15 fiches utilisent le préfixe `fiche_` (ex. `fiche_digestif`) alors que d'autres contenus scientifiques très proches utilisent le préfixe `sci_` (ex. `sci_matiere_etats`, qui LUI est bien dans `PLAN_CATALOGUE` et donc assignable) suggère que le site a deux systèmes de fiches qui se sont développés en parallèle sans être unifiés — c'est probablement la source du problème.

---

## Résumé

| Question | Réponse | Détail |
|---|---|---|
| Tous les exercices sont-ils dans la Liste des activités ? | **Non** | 17 exercices interactifs orphelins, inaccessibles depuis n'importe où sur le site (hors les 44 documents imprimables, absents à raison) |
| Tous les exercices sont-ils dans le Plan de travail ? | **Non, plus largement** | 15 fiches pédagogiques + 8 jeux + les livres "Récits Express" sont gérables dans la Liste des activités mais non assignables dans le Plan de travail, car celui-ci lit directement `PLAN_CATALOGUE` sans passer par le registre étendu |

---

## Limites de l'analyse

- Cette analyse porte sur le code source statique d'`index.html` ; je n'ai pas testé le site dans un navigateur réel pour confirmer visuellement chaque écran.
- Le tableau `fiches` (utilisé par le menu "Fiches pédagogiques") peut être modifié dynamiquement par l'enseignant via `addFicheSubmit`/`deleteFiche` et sauvegardé (Firebase/localStorage) : mon analyse porte sur `DEFAULT_FICHES`, la valeur par défaut telle que livrée dans le code — l'état réellement enregistré sur ton site peut différer si des fiches personnalisées ont été ajoutées ou supprimées depuis l'interface enseignant.
- Je n'ai pas vérifié le contenu pédagogique des ~50 fichiers de `fiches/` découverts dans le cadre de cette analyse (la série `conjugaison_pc_*` sur le passé composé, la série `sci_*` sur l'électricité/mécanique/éclipses/etc.) — ce travail reste à faire si tu le souhaites, en plus de corriger les problèmes d'accès identifiés ici.
