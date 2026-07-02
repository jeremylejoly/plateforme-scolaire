# Intégration du module "Le cercle et le disque" & "Périmètre du cercle" (P5-P6)

Ce document résume le travail réalisé pour implémenter le 9e cadre de géométrie "Le cercle et le disque", ainsi que le nouveau cadre "Le cercle" dans la section "Grandeurs / Périmètre" avec l'activité interactive sur le calcul de circonférence.

---

## 1. Géométrie : Le cercle et le disque
Trois exercices interactifs (sans calcul d'aire ou de périmètre) :

### 🎯 Exercice 1 : Le vocabulaire géométrique
* **Fichier créé** : [disque_vocabulaire.html](file:///Users/jeremy/antigravity/LCML/disque_vocabulaire.html).
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

## 2. Grandeurs / Périmètre : Le cercle (Circonférence)
Un nouveau sous-menu et une nouvelle activité de calcul de périmètre de cercles :

### 🧮 Activité : Le labo de la circonférence
* **Fichier créé** : [perimetre_cercle.html](file:///Users/jeremy/antigravity/LCML/perimetre_cercle.html).
* **Concept** : Exercice progressif de 10 questions sur le calcul du périmètre d'un cercle (circonférence) à partir de son rayon ou son diamètre, adapté à P5-P6.
* **Approximations de $\pi$** : Apprend à utiliser $\pi \approx 3$ (calcul mental rapide) ou $\pi \approx 3,14$ selon l'énoncé.
* **Problèmes concrets** : Intègre des questions contextualisées conformes au référentiel FWB (roue de vélo, tronc d'arbre, piste de cirque, étiquette de boîte de conserve).
* **Aide visuelle** : Un graphique SVG interactif qui trace le cercle et affiche dynamiquement le rayon ou le diamètre en couleur orange.
* **Interface** : Clavier virtuel tactile, prise en charge du clavier physique, normalisation des décimaux (virgule et point) et rétroaction sonore (succès/échec).

---

## 3. Modifications du Dashboard Principal & Navigation

Les fichiers [index.html](file:///Users/jeremy/antigravity/LCML/index.html) (racine) et [fiches/index.html](file:///Users/jeremy/antigravity/LCML/fiches/index.html) ont été mis à jour de manière identique :
1. **Géométrie - Menu principal** : Référencement du menu "Le cercle et le disque" (`solide_disque`) et de ses 3 écrans.
2. **Grandeurs / Périmètre - Sous-menu** : Ajout d'un 3e cadre "Le cercle" dans la section périmètre.
3. **Création des Écrans HTML** :
   * `screen-perimetre-cercle` : Sous-menu du cercle pour le périmètre.
   * `screen-perimetre-cercle-calcul` : Écran iframe chargeant `perimetre_cercle.html`.
4. **Mise à jour du tracker d'activité** : Enregistrement de `screen-perimetre-cercle` et `screen-perimetre-cercle-calcul` dans `getActivityLabel` pour le tableau de bord enseignant.
5. **Système de verrouillage** : Ajout des relations parents/enfants dans `ACTIVITY_PARENTS`.

---

## Validation & Tests
* Les exercices s'ouvrent de manière fluide sans erreur de script.
* Les effets sonores fonctionnent à l'aide de l'API Web Audio native du navigateur.
* La navigation via les boutons retour du dashboard est fonctionnelle.
