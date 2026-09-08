# Rapport d'analyse LCML — Catégorie Géographie/Histoire

**Date :** 8 septembre 2026
**Périmètre :** 19 fichiers HTML de la catégorie Géographie/Histoire (exercices indépendants insérés sur le site), analysés en lecture seule — aucun fichier n'a été modifié.
**Méthode :** vérification syntaxique JavaScript (`node --check`), détection des appels à des fonctions non définies, et vérification de chaque affirmation/étiquette/réponse contre les faits géographiques et historiques réels (Belgique, Europe, monde).

**Résultat global :** aucune erreur de syntaxe JavaScript détectée sur les 19 fichiers, aucun gestionnaire d'événement cassé. **8 bugs confirmés**, principalement des erreurs de contenu — deux d'entre elles sont pédagogiquement significatives : une inversion de l'ordre chronologique dans un corrigé, et une section entière qui classe des événements du XIXe siècle dans la mauvaise période historique.

---

## Bugs confirmés

### 1. `lecon_frise_historique.html` — Révolution industrielle classée dans la mauvaise période historique
La section « 04 Les Temps Modernes (Explorations & Révolution Industrielle) » range la Révolution industrielle, les usines Cockerill (fondées en 1817), la fusillade de Roux (1886), Van Gogh à Cuesmes (1881), l'Hôtel Solvay, etc. dans les « Temps Modernes » — alors que la frise de ce même fichier situe la fin des Temps Modernes en 1789. Tous ces événements sont donc postérieurs à la période dans laquelle ils sont enseignés à l'élève ; ils appartiennent en réalité à l'Époque contemporaine (ce que confirment d'ailleurs les autres fichiers du site, notamment `frise-chronologique-histoire.html`). Le jeu d'association reproduit cette erreur en liant "Révolution industrielle" à `data-right="modernes"`.

### 2. `frise-chronologique-histoire.html` — ordre d'affichage chronologique inversé
Dans la liste des événements de l'« Époque contemporaine » (tableau `events`, lignes 1026-1027), l'événement **e36 « Indépendance de la Belgique » (1830)** est placé avant **e37 « Révolution industrielle » (1760-1870)** dans le code. Confirmé en lisant le rendu (`filteredEvents.forEach`, ligne 1428) : les événements sont affichés dans l'ordre du tableau sans tri par date. Résultat : l'élève voit "Indépendance de la Belgique" (1830) apparaître avant "Révolution industrielle" (débutée dès 1760), une inversion chronologique visible dans la frise interactive.

### 3. `frise-chronologique-histoire.html` — illustrations mal associées
Les illustrations affichées pour la période « Temps Modernes » (1492-1789) montrent des scènes de la Révolution industrielle du XIXe siècle (« usine sidérurgique Cockerill », « charbonnage belge »), qui appartiennent en réalité à l'Époque contemporaine (événement e37 du même fichier).

### 4. `questionnaire-histoire-correctif -LCML.html` — inversion Charlemagne/Colomb dans le corrigé
Exercice 12 (« Classe ces événements du plus ancien au plus récent »), vérifié ligne par ligne : le corrigé attribue le rang **4** au « Couronnement de Charlemagne à Rome » (an 800) et le rang **3** à la « Découverte de l'Amérique par Christophe Colomb » (1492). Charlemagne précède pourtant Colomb de près de 700 ans — l'ordre correct serait Charlemagne=3, Colomb=4. Les autres classements (préhistoire=1, écriture=2, Lune=5, chute du Mur=6) et le reste du corrigé (vrai/faux, QCM, textes à trous, associations) sont corrects.

### 5. `europe_relief_fleuves.html` — couleur CSS corrompue
Ligne 17 : `--danger-light: #fee2fee2;` — valeur hexadécimale invalide, probablement issue d'un copier-coller dupliqué (attendu : `#fee2e2`). Utilisée aux lignes 243 et 348 pour le fond des réponses incorrectes : le rendu affichera une teinte rose-magenta translucide au lieu du rouge pâle attendu. Défaut purement visuel, sans impact fonctionnel. Le reste du contenu (embouchures des 9 fleuves européens, quiz relief, fiches d'exploration) est exact.

### 6. `formation-economique-sociale.html` — faute de frappe qui change le sens
Ligne 831 : la définition d'« Impôt » contient *« Une somme d'**art** prélévée obligatoirement sur les revenus... »* — devrait être *« une somme d'**argent** prélevée... »*. Coquille visible directement dans la définition présentée à l'élève.

### 7. `questionnaire-histoire-correctif -LCML.html` — attribution possiblement erronée (à vérifier)
Exercice 7 : le corrigé attribue la fondation de l'usine sidérurgique de Seraing (1817) à « William Cockerill » ; c'est habituellement à son fils **John Cockerill** que cette fondation est attribuée dans les sources historiques belges. `lecon_frise_historique.html` du même site dit d'ailleurs « John Cockerill » — incohérence entre fichiers du site, à confirmer avec un historien/l'équipe pédagogique avant correction.

### 8. Doublons d'identifiants SVG et métadonnées de continent (sans impact visible actuellement)
Dans `cartes-europe.html`, `cartes-planisphere.html` et `planisphere-interactif.html` : l'identifiant `id="c--99"` est utilisé trois fois (Kosovo, Chypre du Nord, Somaliland — un artefact du jeu de données cartographiques d'origine, faute de code ISO). HTML techniquement invalide, mais **sans conséquence visible** puisque le code ne fait jamais de `getElementById('c--99')` — chaque tracé reste identifié par sa propre référence DOM. Par ailleurs, Trinité-et-Tobago (`c-TTO`) est classé "Amérique du Sud" au lieu d'Amérique du Nord/Caraïbes dans `cartes-planisphere.html` et `planisphere-interactif.html` — également **sans impact actuel** car le code fusionne systématiquement Amérique du Nord et du Sud sous une seule étiquette "Amérique" à l'affichage. Signalé par souci de propreté des données plutôt que comme bug fonctionnel actif.

---

## Points mineurs à vérifier (pas des erreurs certaines)

- **`frise-chronologique-histoire.html`** — l'événement « Découverte du bronze » (−3300) est rattaché à une sous-période qui ne commence qu'en −3000 ; l'événement précède donc légèrement le début de sa propre période.
- **`lecon_frise_historique.html`** — la maîtrise du feu par Homo erectus y est datée « environ 400 000 ans », contre « ~300 000 av. J.-C. » dans `frise-chronologique-histoire.html` et le questionnaire — incohérence de datation entre fichiers du site.
- **`europe_cartes.html`** — les cartes de fond sont des images externes hébergées sur le site (non incluses dans le HTML) ; la correspondance numéro↔pays/capitale affichée sur ces images n'a pas pu être vérifiée visuellement et mériterait un contrôle manuel.

---

## Fichiers vérifiés sans erreur

`analyse_paysage_littoral.html`, `analyse_paysages.html`, `analyse_types_paysages.html`, `relief-hydrographie.html` (paliers de relief belges, fleuves Meuse/Escaut/Yser et affluents vérifiés en détail), `globe-terrestre.html` (équateur, tropiques, cercles polaires, méridien de Greenwich), `questionnaire-relief-hydrographie.html` (fiche statique, contenu vérifié cohérent avec relief-hydrographie.html), `cartes-europe.html` (41 associations pays/capitale vérifiées, dont les cas sensibles Macédoine du Nord, Kosovo, Malte), `europe_villes_population.html`, `ligne-du-temps_5.html` (frise exploratoire sans quiz), `regions_communautes_belgique.html` (distinction Régions/Communautés correctement traitée, y compris les pièges classiques du programme belge), `questionnaire-histoire-LCML.html` (questions).

---

## Limites de l'analyse

- Les fichiers `questionnaire-relief-hydrographie.html`, `questionnaire-histoire-LCML.html` et `questionnaire-histoire-correctif -LCML.html` (environ 1,3 Mo chacun) contiennent essentiellement des images encodées en base64 sur quelques lignes géantes ; l'analyse s'est concentrée sur le contenu textuel/structurel réel (quelques centaines de lignes utiles), sans jugement visuel des images elles-mêmes.
- Les cartes de `europe_cartes.html` reposent sur des images externes non vérifiables visuellement dans le cadre de cette analyse.
- L'attribution Cockerill père/fils (point 7) repose sur les connaissances générales de l'agent d'analyse et une incohérence relevée entre fichiers du site, pas sur une recherche historique approfondie — à confirmer.

---

## Tableau récapitulatif

| # | Fichier | Type de bug | Gravité |
|---|---------|-------------|---------|
| 1 | lecon_frise_historique.html | Contenu — événements du XIXe siècle classés "Temps Modernes" | **Élevée** |
| 2 | frise-chronologique-histoire.html | Affichage — ordre chronologique inversé (1830 avant 1760) | Moyenne |
| 3 | frise-chronologique-histoire.html | Contenu — illustrations d'une autre époque | Moyenne |
| 4 | questionnaire-histoire-correctif -LCML.html | Contenu — Charlemagne/Colomb inversés dans le corrigé | **Élevée** |
| 5 | europe_relief_fleuves.html | Code — couleur CSS corrompue | Faible (visuel) |
| 6 | formation-economique-sociale.html | Contenu — faute de frappe ("somme d'art") | Faible |
| 7 | questionnaire-histoire-correctif -LCML.html | Contenu — attribution William/John Cockerill à vérifier | Faible-Moyenne |
| 8 | cartes-europe.html / cartes-planisphere.html / planisphere-interactif.html | Code/données — id SVG dupliqués, Trinité-et-Tobago mal classée | Très faible (sans impact actuel) |

---

*Prochaine étape suggérée : les 19 gros fichiers questionnaire/correctif restants (gabarit-questionnaire-LCML.html et les paires circulatoire/classification/cycle-eau/digestif/planisphère/respiratoire/soleil-terre-lune), avec la même approche allégée utilisée ici pour les fichiers volumineux à base64.*
