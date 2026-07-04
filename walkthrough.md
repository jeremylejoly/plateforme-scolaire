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
