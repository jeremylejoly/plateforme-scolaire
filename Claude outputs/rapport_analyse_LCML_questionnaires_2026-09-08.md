# Rapport d'analyse LCML — Questionnaires et corrigés imprimables

**Date :** 8 septembre 2026
**Périmètre :** 15 fichiers HTML volumineux (~1,3 Mo chacun) — le gabarit générique et 7 paires questionnaire/corrigé imprimables (circulatoire, classification, cycle de l'eau, digestif, planisphère, respiratoire, Soleil-Terre-Lune), analysés en lecture seule — aucun fichier n'a été modifié.
**Méthode :** ces fichiers sont presque entièrement constitués de polices/images encodées en base64 sur 1-2 lignes géantes (jusqu'à 911 000 caractères) ; le contenu réel tient en quelques centaines de lignes. Chaque fichier a été filtré (exclusion des lignes de plus de 2000-10 000 caractères) avant lecture. Confirmé : aucun des 15 fichiers ne contient de JavaScript — ce sont tous des documents statiques imprimables (HTML/CSS pur). La vérification a porté sur la correspondance mot-à-mot entre chaque questionnaire et son corrigé, et sur l'exactitude scientifique/géographique de chaque réponse.

**Résultat global : le problème le plus important de tout ce lot n'est pas une simple coquille — deux corrigés sur sept ne correspondent pas du tout à leur questionnaire.**

---

## Bug majeur confirmé — désynchronisation totale questionnaire/corrigé (2 paires sur 7)

### `questionnaire-circulatoire-LCML.html` vs `questionnaire-circulatoire-correctif-LCML.html`
Le questionnaire contient **6 exercices** : *1. L'anatomie du cœur, 2. Le trajet du sang et la double circulation, 3. Les types de vaisseaux sanguins, 4. Les échanges gazeux et la chimie cellulaire, 5. Santé, hygiène et chiffres records, 6. Le cycle cardiaque*.
Le corrigé contient **7 exercices différents**, avec d'autres titres, d'autres formats et un exercice supplémentaire : *1. L'anatomie du cœur, 2. Les vaisseaux sanguins de l'organisme, 3. L'observation des schémas de la circulation, 4. La respiration cellulaire, 5. Vrai ou Faux ?, 6. Santé et comportements cardiovasculaires, 7. Le voyage d'un globule rouge*.
Vérifié directement dans les deux fichiers : au-delà de l'exercice 1 (qui partage le même titre mais un format différent — QCM/VF dans le questionnaire, exercice "relier" dans le corrigé), aucune question ne correspond, ni par le numéro, ni par l'énoncé. **Un enseignant ne peut pas utiliser ce corrigé pour corriger ce questionnaire.**

### `questionnaire-classification-LCML.html` vs `questionnaire-classification-correctif-LCML.html`
Même problème exact. Le questionnaire contient **4 exercices** : *1. Concepts clés de la classification, 2. Attributs et parenté des espèces, 3. Liens de parenté et évolution, 4. L'arbre de vie et la biodiversité*.
Le corrigé contient **6 exercices différents** : *1. La notion d'espèce en sciences, 2. L'observation des attributs physiques, 3. Trier ou classer les êtres vivants ?, 4. Les ensembles emboîtés et l'arbre de parenté, 5. L'histoire de la Vie et ses embranchements, 6. Les chiffres de la biodiversité et son équilibre*.
Aucune correspondance entre les deux versions.

**Ces deux corrigés correspondent vraisemblablement à une version antérieure ou différente de l'évaluation** — à remplacer par le bon fichier de corrigé, ou à régénérer le questionnaire pour qu'il corresponde au corrigé existant.

*(Les 5 autres paires — cycle de l'eau, digestif, planisphère, respiratoire, Soleil-Terre-Lune — ont été vérifiées correspondre mot pour mot entre questionnaire et corrigé, avec la même numérotation et les mêmes énoncés partout.)*

---

## Autres bugs confirmés

### `questionnaire-classification-correctif-LCML.html` — erreur factuelle sur le croisement cheval/âne
Ligne 272 : *« Le cheval et l'ânesse peuvent se reproduire pour donner naissance au mulet. »* — c'est inversé. Le croisement **cheval (mâle) × ânesse (femelle)** donne un **bardot**, pas un mulet. Le **mulet** est le produit d'un **âne (mâle) × jument (femelle)**. Le reste du raisonnement (mulet stérile, cheval et âne pas de la même espèce car pas de descendants féconds) reste pédagogiquement valable, mais l'exemple donné est factuellement inversé.

### `questionnaire-circulatoire-correctif-LCML.html` — images cassées
Exercice 3 : deux images (`photos/schema_coeur_vierge.png`, `photos/double_circulation.png`) sont référencées par un chemin relatif externe, alors que toutes les autres images du site sont encodées en base64 directement dans le fichier. Ce fichier étant autonome (pas de dossier `photos/` qui l'accompagne), ces deux images ne s'afficheront ni à l'écran ni à l'impression.

### `questionnaire-circulatoire-LCML.html` — fragment CSS résiduel
Un artefact de copier-coller déjà rencontré ailleurs sur le site : la règle `.note{...color:var(--matiere-f)}` est suivie d'un fragment cassé `r(--matiere-f)}`. Sans effet visuel (règle simplement ignorée par le navigateur), mais révélateur d'une corruption mineure du fichier source.

---

## Points à vérifier (pas des erreurs certaines)

- **`questionnaire-planisphere-correctif-LCML.html`** — le sommet le plus haut d'Océanie est donné comme "Mont Wilhelm (4 509 m, Papouasie-Nouvelle-Guinée)". Selon la convention géographique retenue, si l'Océanie inclut la Nouvelle-Guinée occidentale (indonésienne), le point culminant réel serait plutôt le Puncak Jaya (4 884 m). Question de convention selon la source pédagogique de référence, pas une erreur flagrante.
- **`questionnaire-respiratoire-correctif-LCML.html`** — le corrigé décrit le sang pauvre en oxygène comme "bleu-violet". C'est une simplification pédagogique très répandue mais scientifiquement inexacte : le sang humain n'est jamais bleu (même désoxygéné, il reste rouge, plus foncé) — le bleu vu à travers la peau est un effet optique de la peau elle-même. À juger selon le niveau d'exigence scientifique souhaité pour le primaire.

---

## Fichiers vérifiés sans erreur

- **`gabarit-questionnaire-LCML.html`** — gabarit générique multi-matières (Français/Maths/Éveil) avec des placeholders clairement signalés par des commentaires "MODÈLE" (pas de Lorem ipsum ni de TODO oublié). Les exemples pédagogiques insérés sont eux-mêmes exacts.
- **`questionnaire-cycle-eau-LCML.html` / corrigé** — les 5 affirmations vrai/faux, l'association captage/stockage, le QCM sur potabilisation/épuration, les 4 changements d'état, le tableau de répartition de l'eau (97%/2%/1%, calcul cohérent) et la dilatation de l'eau en gelant sont tous exacts.
- **`questionnaire-digestif-LCML.html` / corrigé** — organe hors tube digestif, épiglotte, associations organe/action, durée dans l'estomac, associations suc digestif/rôle, texte à trous villosités, chiffres records : tout est exact.
- **`questionnaire-planisphere-LCML.html` / corrigé** — vocabulaire parallèles/méridiens, proportions terre/eau, continents/océans, population par continent (calculs vérifiés), pièges bien construits (requin-baleine non dangereux, narval en eaux froides), associations océan/particularité : tout est exact.
- **`questionnaire-respiratoire-LCML.html` / corrigé** — trajet de l'air, mécanique inspiration/expiration, chimie de la respiration cellulaire, vrai/faux (dont l'asthme correctement décrit comme rétrécissant les bronches), chiffres records : tout est exact (voir point à vérifier ci-dessus sur la couleur du sang).
- **`questionnaire-soleil-terre-lune-LCML.html` / corrigé** — associations astre/description, vrai/faux (révolution 365j6h, vitesse de la lumière ~8min, la Lune ne produit pas sa propre lumière), QCM de modélisation, texte à trous : le piège classique des saisons (inclinaison de l'axe, pas la distance) est bien évité partout.

---

## Limites de l'analyse

- Les images/schémas eux-mêmes (encodés en base64 ou externes) n'ont pas été jugés visuellement — seule la cohérence textuelle a été vérifiée.
- Les deux points "à vérifier" (sommet d'Océanie, couleur du sang désoxygéné) relèvent de simplifications pédagogiques ou de conventions variables selon les sources, plutôt que d'erreurs strictement fausses.
- La désynchronisation questionnaire/corrigé (circulatoire, classification) est le constat le plus actionnable de ce rapport : il mérite une vérification manuelle immédiate de ta part pour confirmer quelle version (questionnaire ou corrigé) est la bonne, avant tout usage en classe.

---

## Tableau récapitulatif

| # | Fichier(s) | Type de problème | Gravité |
|---|------------|-------------------|---------|
| 1 | questionnaire-circulatoire-LCML.html + correctif | **Corrigé totalement désynchronisé du questionnaire** | **Critique** |
| 2 | questionnaire-classification-LCML.html + correctif | **Corrigé totalement désynchronisé du questionnaire** | **Critique** |
| 3 | questionnaire-classification-correctif-LCML.html | Contenu — erreur factuelle mulet/bardot | Moyenne |
| 4 | questionnaire-circulatoire-correctif-LCML.html | Code — 2 images cassées (chemin externe manquant) | Moyenne |
| 5 | questionnaire-circulatoire-LCML.html | Code — fragment CSS résiduel | Faible (invisible) |
| 6 | questionnaire-planisphere-correctif-LCML.html | Contenu — sommet d'Océanie, question de convention | Faible |
| 7 | questionnaire-respiratoire-correctif-LCML.html | Contenu — simplification "sang bleu" | Faible |

---

## Bilan de l'ensemble de l'analyse LCML

Ce rapport clôt le plan d'analyse convenu : les 21 fichiers récemment modifiés, puis les 65 fichiers de Mathématiques, les 33 de Français, les 20 d'Éveil/Sciences, les 19 de Géographie/Histoire, et enfin ces 15 questionnaires/corrigés — soit la quasi-totalité des exercices indépendants du site, analysés en lecture seule sans aucune modification.
