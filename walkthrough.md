# Intégration du module "Le cercle et le disque" & "Périmètre du cercle" (P5-P6)

Ce document résume le travail réalisé pour implémenter le 9e cadre de géométrie "Le cercle et le disque", ainsi que le nouveau cadre "Le cercle" dans la section "Grandeurs / Périmètre" avec les deux activités interactives associées.

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
Un nouveau sous-menu "Le cercle" contenant 2 activités adaptées à P5-P6 et conformes au programme FWB (valeur de $\pi = 3,14$ exclusively) :

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

---

## 3. Modifications du Dashboard Principal & Navigation

Les fichiers [index.html](file:///Users/jeremy/antigravity/LCML/index.html) (racine) et [fiches/index.html](file:///Users/jeremy/antigravity/LCML/fiches/index.html) ont été mis à jour de manière identique :
1. **Périmètre - Sous-menu** : Ajout d'un 3e cadre "Le cercle" dans la section périmètre.
2. **Création des Écrans HTML** :
   * `screen-perimetre-cercle` : Sous-menu du cercle pour le périmètre (contenant les 2 activités).
   * `screen-perimetre-cercle-calcul` : Charge `perimetre_cercle.html`.
   * `screen-perimetre-cercle-inverse` : Charge `perimetre_cercle_inverse.html`.
3. **Mise à jour du tracker d'activité** : Enregistrement de tous ces nouveaux écrans dans `getActivityLabel` pour le tableau de bord enseignant.
4. **Système de verrouillage** : Ajout des relations parents/enfants dans `ACTIVITY_PARENTS`.

---

## Validation & Tests
* Les deux exercices s'ouvrent de manière fluide sans erreur de script.
* Les émojis contextuels s'affichent à côté des cercles SVG dans une mise en page Flex Row harmonieuse.
* La navigation via les boutons retour du dashboard est pleinement fonctionnelle.
