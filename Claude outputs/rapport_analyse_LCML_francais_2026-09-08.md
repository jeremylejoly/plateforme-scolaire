# Rapport d'analyse LCML — Catégorie Français

**Date :** 8 septembre 2026
**Périmètre :** 33 fichiers HTML de la catégorie Français (exercices indépendants insérés sur le site), analysés en lecture seule — aucun fichier n'a été modifié.
**Méthode :** vérification syntaxique JavaScript (`node --check`), détection des appels à des fonctions non définies, et surtout **vérification manuelle et programmatique de chaque règle de grammaire/conjugaison/orthographe/vocabulaire** appliquée dans le code, contre les règles réelles du français.

**Résultat global :** aucune erreur de syntaxe JavaScript détectée sur les 33 fichiers, aucun gestionnaire d'événement cassé. **11 bugs confirmés** (détaillés ci-dessous), essentiellement des erreurs de contenu — deux d'entre elles (le moteur de conjugaison "Bescherelle" et la grille de mots cachés) rendent une fonctionnalité concrètement inutilisable pour certains cas.

---

## Bugs confirmés

### 1. `bescherelle_nouvelle_orthographe.html` — moteur de conjugaison, verbe "traire" (et dérivés)
Ligne 1383 : `if (info.model === "traire") return v.slice(0, -2) + "yant";`
Le participe présent généré pour *traire* est **"traiyant"** au lieu de **"trayant"**. Même défaut pour *extraire* ("extraiyant" au lieu de extrayant), *distraire* et *soustraire*. Vérifié en exécutant réellement le moteur de conjugaison extrait dans Node.js.

### 2. `bescherelle_nouvelle_orthographe.html` — moteur de conjugaison, verbe "suffire"/"confire"
Ligne 2494 : `const p = v.slice(0, -4); // suff, conf` — le commentaire dit "suff"/"conf" mais le code ne retire que 4 caractères d'un mot de 7 lettres ("suffire"), produisant la racine **"suf"** au lieu de **"suff"**. Résultat : toutes les formes simples de *suffire* sont fausses — présent "**sufis**" au lieu de suffis, imparfait "sufisais" au lieu de suffisais, futur "sufirai" au lieu de suffirai, subjonctif "sufise" au lieu de suffise, participe présent "sufisant" au lieu de suffisant (ligne 1389, même défaut). Seuls les temps composés (chemin de code séparé) affichent correctement "suffi". Le même défaut touche *confire* ("conis" au lieu de confis). Ces verbes sont atteignables via la recherche libre de l'outil, donc réellement rencontrables par un élève, bien que peu fréquents à ce niveau.

### 3. `mots-caches.html` — thème "Géométrie et formes" injouable
Ligne 455 : le mot **PARALLELOGRAMME** (15 lettres) est inclus dans la liste de mots du thème géométrie, mais la grille de la classe `WordSearchGenerator` (ligne 547) utilise une taille par défaut de **14×14** (`new WordSearchGenerator()` sans argument, ligne 773) — jamais ajustée pour ce thème. Un mot de 15 lettres ne peut jamais tenir dans une grille de 14 cases de côté. Après 50 tentatives de placement, le générateur échoue et une alerte d'erreur s'affiche au lieu de la grille : **ce thème ne se charge jamais, à aucun des 4 niveaux**.

### 4. `determinant_tri.html` (données dans `exercices_francais.js`, ligne 10788) — faute d'élision
*« Le chat a dormi tout le après-midi au soleil. »* — "le" doit s'élider devant une voyelle : devrait être **« tout l'après-midi »**. Erreur visible directement dans l'énoncé lu par l'élève.

### 5. `types_de_phrases.html` — coquille répétée « C's't »
Lignes 304 et 369 : le texte d'explication commence par **« C's't une interrogation... »** / **« C's't une injonction... »** au lieu de « C'est ». Coquille visible par l'élève dans le retour pédagogique.

### 6. `types_de_phrases.html` — syntaxe Markdown affichée littéralement
Lignes 411, 441, 446, 451, 471, 481 : six explications utilisent `**gras**` (et un backtick autour d'un `!`) au lieu des balises `<strong>` utilisées partout ailleurs dans le fichier. Comme ces textes sont injectés via `innerHTML`, les astérisques et le backtick **s'affichent tels quels à l'écran** au lieu de mettre le mot en gras.

### 7. `fabrique-mots.html` — incohérence préfixe/radical/suffixe
Lignes 350-353 : l'entrée « dé- + pollu + -ation » est présentée comme formant "dépollution", mais l'assemblage littéral des morceaux affichés (dé + pollu + ation) donne "dépolluation" (mot inexistant) — le mot final affiché ne correspond pas à la construction montrée à l'élève.

### 8. `fabrique-mots.html` — faute d'orthographe
Ligne 377 : « recongelation » sans accent, devrait être **« recongélation »**.

### 9. `mots-croises.html` — définitions mal formées
Ligne 661 : définition de SYMÉTRIE — « Propriété de deux figures se superposent par pliage » — pronom relatif manquant, devrait être « ...qui se superposent... ». Ligne 701 : définition de MALVEILLANT contient un artefact typographique « au-trui » au lieu de « autrui ».

### 10. `registres-tri.html` — erreur sémantique de registre
Vers les lignes 340-342 : le triplet familier/courant/soutenu associe « Je me marre. » (familier) / « Je ris. » (courant) / **« Je souris. » (soutenu)** — or sourire n'est pas un synonyme plus soutenu de rire, c'est une action différente et moins intense. Deux autres triplets sont plus discutables sans être clairement faux : « flic »/« policier »/« gendarme » (un gendarme appartient à un corps différent, pas un simple synonyme soutenu de policier) et « gosse »/« enfant »/« descendant » (descendant relève de la filiation, pas un synonyme général d'enfant) — signalés comme à vérifier plutôt que comme erreurs certaines.

### 11. `detecteur_referents.html` — phrase-exemple incohérente
« Mon vélo bleu est cassé, je vais donc utiliser celui-ci. » — le pronom "celui-ci" y est présenté comme renvoyant au vélo bleu cassé lui-même, alors que le sens de la phrase implique logiquement un *autre* vélo (non mentionné dans le texte), puisqu'on ne peut pas "utiliser" un vélo qu'on vient de dire cassé.

---

## Problèmes possibles (à vérifier, pas des erreurs certaines)

- **`phrases_transfo.html`** — pour « Tu pleures souvent. », les deux réponses acceptées « tu ne pleures pas souvent » et « tu ne pleures jamais » n'ont pas rigoureusement le même sens (« pas souvent » ≠ « jamais »).
- **`detecteur_referents.html`** — « De toutes les histoires de monstres, celle-ci est ma préférée. » : l'antécédent marqué correct est le groupe pluriel complet, alors que "celle-ci" est singulier (structure partitive standard, mais accord discutable pour un exercice ciblant justement l'accord pronom/antécédent).
- **`tri_mots.html`** — au niveau 3 (mots isolés sans contexte), « court » est classé uniquement comme verbe, alors qu'il est aussi un adjectif courant (opposé à "long"), ambigu sans phrase.
- **`verbes-ternes.html`** — « Le citoyen mécontent dit sa colère devant la mairie » → réponse attendue "proteste" : la construction "protester sa colère" est grammaticalement discutable ("protester" est normalement intransitif).
- **`vocabulaire-jeu.html`** — « Cette écrivain célèbre » : accord épicène incohérent (devrait être "cet écrivain" ou "cette écrivaine") — détail mineur.

---

## Fichiers vérifiés sans erreur

`accord_participe.html` (24 phrases), `adverbe_exercice.html` (30+ phrases), `conjugaison_cond_pqpf.html` (30 items), `conjugaison_imparfait_QCM.html`, `conjugaison_imparfait_ecriture.html`, `conjugaison_present_QCM.html`, `conjugaison_present_ecriture.html`, `conjugaison_subj_imp.html` (30 items), `orthographe_adjectifs_couleur.html`, `orthographe_pluriels_particuliers.html`, `determinant_exercice.html` (40 phrases), `grammaire_attribut_cdn.html` (30 exemples), `grammaire_mots_liaison.html` (30 connecteurs), `grammaire_phrase_simple_complexe.html`, `grammaire_voix_passive.html`, `phrases_affirm_neg.html`, `quelle_question.html` (51 items), `expressions-proverbes.html` (48 associations), `remplacant_pronom.html` (37 exercices), `savoir_ecouter.html`, `disque_vocabulaire.html`.

Pour `bescherelle_nouvelle_orthographe.html`, en dehors des deux modèles verbaux défectueux ci-dessus, le moteur a été testé sur environ 95 verbes × 12 temps (plus de 1 100 formes générées et comparées à la conjugaison réelle, y compris des irréguliers difficiles : résoudre/absoudre, mouvoir, croître/accroître, vaincre, clore, choir, falloir/pleuvoir) sans autre erreur détectée.

---

## Limites de l'analyse

- Le contenu audio de `savoir_ecouter.html` n'a pas pu être vérifié directement (seul le texte/transcript accessible dans le fichier a été contrôlé).
- Les grilles de mots croisés/cachés ont été vérifiées programmatiquement pour la présence et le bon placement des mots, mais pas visuellement rendues dans un navigateur.
- Les nuances de synonymie/registre de langue comportent une part de jugement ; les items classés "à vérifier" plutôt que "confirmés" reflètent cette incertitude plutôt qu'une conclusion tranchée.

---

## Tableau récapitulatif

| # | Fichier | Type de bug | Gravité |
|---|---------|-------------|---------|
| 1 | bescherelle_nouvelle_orthographe.html | Contenu — participe présent "traire" faux | Moyenne |
| 2 | bescherelle_nouvelle_orthographe.html | Contenu — toutes les formes simples de "suffire"/"confire" fausses | **Élevée** (verbe cassé à presque tous les temps) |
| 3 | mots-caches.html | Code/contenu — thème géométrie totalement injouable | **Élevée** |
| 4 | determinant_tri.html (exercices_francais.js) | Contenu — faute d'élision dans l'énoncé | Faible |
| 5 | types_de_phrases.html | Contenu — coquille "C's't" (×2) | Faible |
| 6 | types_de_phrases.html | Affichage — Markdown non converti, astérisques visibles | Faible |
| 7 | fabrique-mots.html | Contenu — incohérence construction du mot | Moyenne |
| 8 | fabrique-mots.html | Contenu — faute d'orthographe (accent manquant) | Faible |
| 9 | mots-croises.html | Contenu — définitions mal formées (×2) | Faible |
| 10 | registres-tri.html | Contenu — erreur sémantique de registre | Faible-Moyenne |
| 11 | detecteur_referents.html | Contenu — phrase-exemple incohérente | Moyenne |

---

*Prochaine étape suggérée : poursuivre avec la catégorie Éveil/Sciences (~20 fichiers), puis Géo/Histoire (~15 fichiers), et enfin les 19 gros fichiers questionnaire/correctif.*
