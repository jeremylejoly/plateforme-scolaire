# Rapport d'analyse LCML — Catégorie Éveil/Sciences

**Date :** 8 septembre 2026
**Périmètre :** 20 fichiers HTML de la catégorie Éveil/Sciences (exercices indépendants insérés sur le site), analysés en lecture seule — aucun fichier n'a été modifié.
**Méthode :** vérification syntaxique JavaScript (`node --check`), détection des appels à des fonctions non définies, et vérification de chaque affirmation/étiquette/réponse contre les faits scientifiques réels adaptés au niveau primaire (anatomie, cycle de l'eau, reproduction végétale, astronomie, classification du vivant, transformations physiques/chimiques).

**Résultat global :** aucune erreur de syntaxe JavaScript détectée sur les 20 fichiers. **7 bugs/anomalies confirmés**, dont deux constats structurels importants : deux fichiers de ce lot ne correspondent pas du tout au sujet scientifique attendu (ce sont en réalité des exercices de mathématiques mal classés). Les deux pièges scientifiques classiques du niveau primaire — saisons attribuées à la distance Terre-Soleil, phases de la Lune attribuées à une "ombre de la Terre" — sont bien évités partout où le sujet est abordé.

---

## Bugs et anomalies confirmés

### 1. `disque_laboratoire.html` et `transformations_labo.html` — fichiers hors-sujet dans cette catégorie
Ces deux fichiers portent le mot "laboratoire"/"transformations" dans leur nom, ce qui laisse penser à du contenu scientifique (matériel de labo, transformations physiques/chimiques), mais leur contenu réel est **entièrement mathématique** :
- `disque_laboratoire.html` — titre réel : *« Le laboratoire du cercle — Rayon ⇄ Diamètre »* — exercice de conversions cm/dm/mm et relations rayon/diamètre. Aucune mention de matériel de laboratoire scientifique.
- `transformations_labo.html` — titre réel : *« Le Laboratoire des Transformations — Translations & Rotations »* — exercice de géométrie (translations/rotations de figures sur quadrillage). Le mot "transformations" y désigne la notion mathématique, pas les transformations physiques/chimiques de la matière.

Le code de ces deux fichiers est propre et son contenu mathématique a été vérifié correct (14 conversions justes dans le premier, formules de rotation/translation justes dans le second) — ce n'est donc pas un bug de code, mais **un problème de classification/nommage** : soit ces fichiers doivent être déplacés vers la catégorie Mathématiques, soit les vrais fichiers de contenu scientifique attendus sous ces noms sont absents ou mal nommés.

### 2. `appareil-digestif.html` — fuite d'animation (variable non déclarée)
Ligne 1578/1581 : `brassageAnimId = requestAnimationFrame(updateFrame);` — cette variable n'est **jamais déclarée** (`let`/`const`/`var`) dans le fichier, contrairement à `peristalsisAnimId` et `deglutitionAnimId` qui sont bien déclarées ligne 1259-1260 et correctement annulées dans `clearAllTimers()`. Résultat : quand un élève lance l'animation « Le Brassage », la boucle `requestAnimationFrame` ne peut jamais être arrêtée par `clearAllTimers()` (qui ne connaît pas `brassageAnimId`) — elle continue de tourner indéfiniment en arrière-plan, même en changeant d'onglet ou en relançant une autre animation. Fuite de performance cumulative en cas d'utilisation répétée. Ce n'est pas une erreur de syntaxe, donc invisible à `node --check`, mais confirmé par lecture du code.

### 3. `squelette_vrai_faux.html` — chiffre probablement inexact
Ligne 281 : l'explication d'une question dit que les bébés naissent avec environ **350 os** temporaires. Le chiffre le plus couramment cité dans les sources scientifiques et pédagogiques francophones est plutôt **300 os** à la naissance (qui fusionnent ensuite pour donner les 206 os de l'adulte). Le verdict Vrai/Faux de la question elle-même reste correct ; c'est le chiffre donné dans l'explication qui est probablement erroné. Signalé avec un degré de confiance modéré (variations possibles selon les sources), à vérifier.

### 4. `qcm_arbre_feuilles.html` — contradiction entre énoncé et explication (Q4/trèfle)
La question sur la feuille de trèfle énonce : *« Une feuille de trèfle est composée de 3 folioles qui partent toutes du même point »* — mais l'explication de la réponse jugée correcte affirme l'inverse : *« elles ne partent pas toutes du même point comme le marronnier »*. L'énoncé et sa propre explication se contredisent directement sur le même fait.

### 5. `qcm_arbre_feuilles.html` — explication confuse (Q10, nombre de questions du chemin le plus long)
La réponse marquée correcte est « 3 questions », justifiée par : *« Q1 (NON) → Q5 (OUI) → Q6 (NON) → Q8 (NON) → résultat [...] il faut donc au maximum 3 questions (+ la Q5 intermédiaire = 3 étapes de décision) »*. Le chemin décrit énumère pourtant 4 nœuds de décision distincts (Q1, Q5, Q6, Q8) — l'explication elle-même est en contradiction avec le décompte qu'elle propose, ce qui rend le raisonnement confus pour l'élève, même si le verdict final n'est pas absurde.

### 6. `correctif-jour-nuit-LCML.html` — CSS corrompu (2 endroits)
Fichier de corrigé statique (pas de JavaScript), contenu scientifique 100% correct, mais deux fragments de CSS corrompus, probablement issus d'un copier-coller :
- La règle `.tbl{...;break-` est tronquée et fusionnée avec le sélecteur suivant (`.tbl th,.tbl td{...}`), ce qui invalide la propriété `break-inside:avoid` et pourrait affecter l'affichage des bordures du tableau.
- La règle `.note{...color:var(--matiere-f)}` est suivie d'un fragment résiduel `r(--matiere-f)}` sans effet visuel mais révélateur d'une corruption du fichier source.

### 7. Points mineurs à vérifier (pas des erreurs confirmées)
- **`appareil-respiratoire.html`** — le Cœur est listé parmi les « 11 organes respiratoires » explorés dans le schéma d'anatomie ; le texte explique correctement qu'il n'est pas un organe respiratoire, mais son inclusion dans cette liste est pédagogiquement discutable.
- **`squelette_intrus.html`** — une série qualifie la clavicule d'« os plat » pour justifier l'intrus ; anatomiquement, la clavicule est généralement classée comme un os long atypique. La réponse finale (l'intrus) reste correcte, seule la justification intermédiaire est imprécise.
- **`squelette_schema.html`** — le mode « Calibrage » référence deux variables CSS (`--os-clair`, `--os`) jamais définies dans ce fichier, donc le bouton ne change pas visuellement d'état activé. Outil réservé à l'enseignant/développeur, sans impact sur l'exercice vu par l'élève.
- **`classification-phylogenetique.html`** — un nœud de l'arbre partage le même identifiant de mise en évidence que la racine « Êtres vivants » ; possiblement voulu en l'absence de boîte dédiée aux invertébrés dans le modèle.

---

## Fichiers vérifiés sans erreur

`correctif-digestif.html` (22 questions, cohérent avec appareil-digestif.html), `systeme-circulatoire.html` (petite et grande circulation vérifiées), `trajet_de_la_nourriture.html`, `trajet_de_lair.html`, `trajet_du_sang_ordre.html` (ordres anatomiques vérifiés), `squelette_mouvement.html`, `cycle-eau.html`, `reproduction_plantes.html`, `soleil-terre-lune.html` (les deux pièges classiques — saisons/distance et phases lunaires/ombre — bien évités, chiffres cohérents avec correctif-jour-nuit-LCML.html), `transformations-physiques-chimiques.html` (triangle du feu, distinction physique/chimique, test à l'eau de chaux, sécurité incendie tous corrects).

---

## Limites de l'analyse

- Les images encodées en base64 (feuilles d'arbre dans `qcm_arbre_feuilles.html`, illustrations diverses) n'ont pas été jugées visuellement — seule la cohérence textuelle du contenu a été vérifiée.
- Le chiffre "300 vs 350 os à la naissance" (point 3) repose sur les connaissances générales de l'agent d'analyse plutôt qu'une recherche web dédiée ; à confirmer si une correction est envisagée.
- Le classement anatomique de la clavicule (os long atypique vs os plat) fait l'objet de nuances selon les sources ; signalé par prudence plutôt que comme erreur certaine.

---

## Tableau récapitulatif

| # | Fichier | Type de problème | Gravité |
|---|---------|-------------------|---------|
| 1 | disque_laboratoire.html / transformations_labo.html | Classification — contenu mathématique dans la catégorie Sciences | **Structurel** (à trier) |
| 2 | appareil-digestif.html | Code — fuite requestAnimationFrame (variable non déclarée) | Moyenne |
| 3 | squelette_vrai_faux.html | Contenu — chiffre probablement inexact (350 vs 300 os) | Faible |
| 4 | qcm_arbre_feuilles.html | Contenu — contradiction énoncé/explication (Q4 trèfle) | Moyenne |
| 5 | qcm_arbre_feuilles.html | Contenu — explication confuse (Q10) | Faible |
| 6 | correctif-jour-nuit-LCML.html | Code — CSS corrompu (2 endroits) | Faible (visuel) |
| 7 | appareil-respiratoire.html, squelette_intrus.html, squelette_schema.html, classification-phylogenetique.html | Divers points mineurs à vérifier | Très faible |

---

*Prochaine étape suggérée : poursuivre avec la catégorie Géo/Histoire (~15 fichiers), et enfin les 19 gros fichiers questionnaire/correctif.*
