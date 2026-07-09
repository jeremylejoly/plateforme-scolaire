# Intégration du module "Le cercle et le disque" & "Périmètre du cercle" (P5-P6)

Ce document résume le travail réalisé pour implémenter le 9e cadre de géométrie "Le cercle et le disque", ainsi que le nouveau cadre "Le cercle" dans la section "Grandeurs / Périmètre" avec les trois activités interactives associées.

---

## 1. Géométrie : Le cercle et le disque
Trois exercices interactifs (sans calcul d'aire ou de périmètre) :

### 🎯 Exercice 1 : Le vocabulaire géométrique
* **Fichier créé** : [disque_vocabulaire.html](file:///Users/jeremy/antigraine/LCML/disque_vocabulaire.html).
* **Concept** : QCM d'identification visuelle (rayon, diamètre, corde, arc de cercle, centre, cercle, disque) basé sur 14 questions.
* **Aide visuelle** : 7 diagrammes vectoriels sur mesure avec **mise en valeur orange vif** sur fond ardoise neutre pour un repérage immédiat.
* **Dossier des schémas** : [assets/disque/](file:///Users/jeremy/antigravity/LCML/assets/disque/).

### 🧮 Exercice 2 : Le laboratoire Rayon ⇄ Diamètre
* **Fichier créé** : [disque_laboratoire.html](file:///Users/jeremy/antigravity/LCML/disque_laboratoire.html).
* **Concept** : Laboratoire de calcul mental sur la relation $D = 2r$ et $r = D/2$ avec conversions d'unités de longueurs (ex. mm, cm, dm, m) basé sur 14 questions progressives.
* **Interface premium** : Clavier numérique virtuel intégré pour une saisie tactile simplifiée. Normalisation des réponses (accepte la virgule `,` et le point `.`).

### 🧭 Exercice 3 : L'enquête du compas (Tracés géométriques)
* **Fichier créé** : [disque_compas.html](file:///Users/jeremy/antigravity/LCML/disque_compas.html).
* **Concept** : QCM d'analyse de constructions au compas (rosaces, yinyang, cercles tangents/sécants). Les élèves doivent identifier le centre de tracé (pointe sèche) et l'écartement (rayon).
* **Aide visuelle** : 4 diagrammes complexes de tracés avec mise en valeur de l'arc ou du cercle concerné en orange. Les schémas respectent la propriété d'intersection où chaque cercle passe exactement par le centre de l'autre (*vesica piscis*).

---

## 2. Grandeurs / Périmètre : Le cercle (Circonférence & Calculs Inverses)
Un sous-menu "Le cercle" contenant 3 activités adaptées à P5-P6 et conformes au programme FWB (valeur de $\pi = 3,14$ exclusivement) :

### 🧮 Activité 1 : Le labo de la circonférence
* **Fichier créé** : [perimetre_cercle.html](file:///Users/jeremy/antigravity/LCML/perimetre_cercle.html).
* **Concept** : Calculer le périmètre d'un cercle (circonférence) à partir de son rayon ou son diamètre.
* **Problèmes concrets** : Roue de vélo, tronc d'arbre, table ronde, étiquette de boîte de conserve, piste de cirque.
* **Aide visuelle** : Graphique SVG dynamique (cercle + rayon/diamètre en orange dashed + émoji correspondant affiché à côté du schéma dans une disposition Flex Row premium pour une lisibilité maximale).
* **Contrainte pédagogique** : Pas de formule rappelée à l'écran. L'élève doit la connaître par cœur. $\pi = 3,14$ exclusivement.

### 🔍 Activité 2 : Le rayon et le diamètre cachés (Calcul Inverse)
* **Fichier créé** : [perimetre_cercle_inverse.html](file:///Users/jeremy/antigravity/LCML/perimetre_cercle_inverse.html).
* **Concept** : Retrouver la longueur du rayon ou du diamètre à partir d'un périmètre donné en le divisant par $3,14$ (et en divisant par 2 pour le rayon).
* **Aide visuelle** : Schéma SVG avec le périmètre affiché (ex. $P = 31,4\text{ cm}$) et la ligne recherchée marquée d'un point d'interrogation **?** bleu vif.
* **Contour pédagogique** : Idéal pour travailler les équations simples et le sens des opérations inverses avec calculatrice.

### 🧩 Activité 3 : Figures complexes (Périmètres Composés)
* **Fichier créé** : [perimetre_cercle_compose.html](file:///Users/jeremy/antigravity/LCML/perimetre_cercle_compose.html).
* **Concept** : Calculer le contour extérieur (périmètre) de figures composées incluant des segments droits et des arcs circulaires (demi-cercles ou quarts de cercle).
* **Figures incluses (8 questions)** :
  1. Demi-disque (arc + diamètre).
  2. Quart de disque (arc + 2 rayons).
  3. Piste d'athlétisme / Stade (2 longueurs droites + 2 demi-cercles).
  4. Arche / Pont (2 arcs concentriques + 2 largeurs horizontales).
  5. Vague en S (grand demi-cercle + 2 petits demi-cercles inverses).
  6. Maison-dôme (3 côtés droits de carré + toit en demi-cercle).
  7. Trèfle à 4 feuilles (4 demi-cercles extérieurs, pas de côtés de carré intérieur).
  8. Plaque métallique découpée (la forme de la capture d'écran, avec 4 coins arrondis de rayon 2 m et côtés verticaux évidés).
* **Contour pédagogique** : Force l'élève à distinguer les lignes intérieures (non comptées) des lignes extérieures et à diviser les calculs en sous-parties (courbes vs droites).

## 4. Activité 5 : « L'Accord parfait » (Déplacée en Orthographe > Participe passé)
Cette activité entraîne l'élève à l'accord du participe passé employé avec l'auxiliaire avoir lorsqu'il est précédé d'un pronom complément direct (CDV), tout en évitant les pièges des CIV (compléments indirects) et du pronom *en*.

### Modifications apportées
*   **[accord_participe.html](file:///Users/jeremy/antigravity/LCML/accord_participe.html)** : Création d'un fichier HTML/JS/CSS autonome d'accord de participe passé avec inputs interactifs insérés directement dans les phrases (également copié dans **[fiches/accord_participe.html](file:///Users/jeremy/antigravity/LCML/fiches/accord_participe.html)**).
*   **Orthographe > Participe passé** :
    *   Création d'une nouvelle catégorie « Participe passé » sous la section « Orthographe » dans **[index.html](file:///Users/jeremy/antigravity/LCML/index.html)** et **[fiches/index.html](file:///Users/jeremy/antigravity/LCML/fiches/index.html)**.
    *   Génération de l'icône de logo associée (`assets/logos/subject_participe_passe.png`).
    *   Création de la fonction `renderParticipePasseMenu()` pour afficher le sous-menu de cette section.
    *   Déplacement du jeu « L'Accord parfait » dans ce nouveau menu sous l'identifiant d'activité `ortho_participe_accord`.
    *   Gestion du masquage/réactivation de l'activité par l'enseignant via le système de verrous locaux et Firebase (`toggleActivity()`).

### Caractéristiques du jeu
*   **Système Interactive Fill-in-the-blank :**
    *   L'élève voit la phrase d'exercice avec le verbe à l'infinitif affiché en indice (ex : `(cueillir)`) et un champ de saisie (`<input>`) à côté.
    *   L'élève doit écrire l'accord correct du participe passé directement dans le champ (ex : `cueillies`).
    *   Une validation manuelle avec effets sonores, retours visuels (champ illuminé en vert s'il est correct ou en rouge s'il est erroné) et secousses de la carte en cas d'erreur.
    *   Une explication grammaticale détaillée et claire s'affiche après chaque validation réussie (pourquoi on accorde ou pas, rappel des règles CDV, CIV ou pronom *en*).
    *   **10 phrases par session** choisies aléatoirement dans une banque de **24 phrases** soigneusement rédigées et diversifiées.
*   **Rendus sonores et animations :** Sons 8-bit rétro pour chaque lettre tapée (tick), validation réussie ou erreur, et effet confettis en fin de partie.

## Vérification
*   Ouvrir localement [index.html](file:///Users/jeremy/antigravity/LCML/index.html) et tester l'ensemble du cycle de jeu sous Orthographe > Participe passé.
*   Valider que l'exercice s'ouvre correctement dans les iFrames de [index.html](file:///Users/jeremy/antigravity/LCML/index.html) and [fiches/index.html](file:///Users/jeremy/antigravity/LCML/fiches/index.html).
*   Vérifier le bon fonctionnement des verrous de masquage (Espace enseignant) sur le cadre « Participe passé » ainsi que sur l'exercice « L'Accord parfait » à l'intérieur.

---

## 3. Modifications du Dashboard Principal & Navigation

Les fichiers [index.html](file:///Users/jeremy/antigravity/LCML/index.html) (racine) et [fiches/index.html](file:///Users/jeremy/antigravity/LCML/fiches/index.html) ont été mis à jour de manière identique :
1. **Périmètre - Sous-menu** : Ajout d'un 3e cadre "Le cercle" dans la section périmètre.
2. **Création des Écrans HTML** :
   * `screen-perimetre-cercle` : Sous-menu du cercle pour le périmètre (contenant les 3 activités).
   * `screen-perimetre-cercle-calcul` : Charge `perimetre_cercle.html`.
   * `screen-perimetre-cercle-inverse` : Charge `perimetre_cercle_inverse.html`.
   * `screen-perimetre-cercle-compose` : Charge `perimetre_cercle_compose.html`.
3. **Mise à jour du tracker d'activité** : Enregistrement de tous ces nouveaux écrans dans `getActivityLabel` pour le tableau de bord enseignant.
4. **Système de verrouillage** : Ajout des relations parents/enfants dans `ACTIVITY_PARENTS`.

---

## Validation & Tests
* Les trois exercices s'ouvrent de manière fluide sans erreur de script.
* Les émojis contextuels et schémas SVG s'affichent correctement côte à côte dans une mise en page Flex Row harmonieuse.
* La navigation via les boutons retour du dashboard est pleinement fonctionnelle.

---

## 4. Grammaire : Le déterminant (Classes de mots)

Le module temporaire (marqué par un émoji 🚧) a été remplacé par un système d'exercice interactif dynamique et complet, disponible dans les dashboards élève et enseignant (`index.html` et `fiches/index.html`).

### 🎯 Exercice interactif : Reconnaître les déterminants
* **Concept** : Identifier et cliquer sur tous les déterminants (articles définis/indéfinis/partitifs, possessifs, démonstratifs, numéraux, indéfinis, interrogatifs/exclamatifs) dans une phrase tirée aléatoirement.
* **Base de données** : 40 phrases variées et étiquetées (catégorie `det` par rapport aux autres classes grammaticales comme `nc`, `v`, `adj`, etc.), déjà disponibles sous `window.EXERCICES_DETERMINANT` dans [exercices_francais.js](file:///Users/jeremy/antigravity/LCML/exercices_francais.js).
* **Interface premium** :
  * Interaction fluide : Sélection des mots au clic (colorisation ambre/jaune) avec possibilité de désélection.
  * Validation immédiate des réponses avec retour visuel (badges vert pour correct, rouge pour incorrect, orange pour manquant).
  * Panneau d'explications détaillé justifiant la classe grammaticale des mots erronés (ex. *« Le mot "fleur" est un nom commun, ce n'est pas un déterminant »*).
  * Système de progression (10 phrases par session tirées au sort, barre de progression visuelle).
  * Écran de résultats final adapté au score avec effets de confettis festifs en cas de sans-faute (10/10).
  * Enregistrement automatique des résultats et du score via `saveResult` pour le suivi enseignant.
* **Intégration technique** :
  * Remplacement des conteneurs statiques temporaires `#screen-gram-determinant`.
  * Raccordement au menu principal via la fonction globale `renderDeterminantMenu`.
  * Exposition des variables d'état et des fonctions interactives au scope global (`window.renderDeterminantMenu`, `window.startDeterminantExercise`, etc.) dans les deux applications.

---

## 5. Grandeurs : La vitesse horaire (P5-P6)

Un nouveau sous-module complet sur **la vitesse horaire** a été ajouté pour les élèves de P5 et P6 :

### 🎯 Fichier créé : [vitesse_situations.html](file:///Users/jeremy/antigravity/LCML/vitesse_situations.html)
* **Concept** : 10 questions de QCM contextualisées avec des situations concrètes et variées (train, cycliste, escargot, avion, guépard, navette spatiale, piéton, etc.).
* **Compétences évaluées** :
  * Calcul de la vitesse moyenne ($V = D/T$)
  * Calcul de la distance parcourue ($D = V \times T$)
  * Calcul de la durée du trajet ($T = D/V$), avec conversions simples d'heures et minutes (ex. 1h30 ⇄ 1,5h).
* **Interface Premium** :
  * Disposition responsive moderne en Flex-Row (schéma vectoriel dynamique ou illustration thématique à gauche, QCM interactif à droite).
  * Système de progression (10 questions avec barre de progression).
  * Feedback instantané et explications pédagogiques détaillées pour chaque réponse.
  * Score et enregistrement automatiques dans la base Firebase/Dashboard enseignant via `saveResult`.

### 🗂️ Intégration dans le Dashboard & la Navigation
* **Mise à jour des menus principaux** ([index.html](file:///Users/jeremy/antigravity/LCML/index.html) et [fiches/index.html](file:///Users/jeremy/antigravity/LCML/fiches/index.html)) :
  * Ajout d'un bouton d'accès direct dans la section **Grandeurs** (avec icône premium de compteur de vitesse ⏱️ / ⚡).
  * Création des écrans d'affichage `screen-grandeurs-vitesse-horaire` (sous-menu) et `screen-grandeurs-vitesse-horaire-qcm` (chargement de l'activité).
  * Enregistrement des labels de suivi dans le dictionnaire des activités (`getActivityLabel`).
  * Enregistrement dans la liste des activités verrouillables par défaut (`getLockedActivities`).
  * Configuration de l'héritage de statut parent/enfant (`ACTIVITY_PARENTS`).
