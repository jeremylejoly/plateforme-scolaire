# Revérification de tous les exercices LCML — liste de suivi

Commencée le 5 octobre 2026. Ce document est mis à jour à chaque séance.

## Méthode (décidée avec Jérémy)

1. **Inventaire** : la liste complète ci-dessous (412 entrées, menus exclus), avec les signaux d'un balayage automatique du code. Ces signaux ne sont que des **pistes**. Un exercice sans signal n'est pas garanti sans erreur : seule la vérification une par une compte.
2. **Un exercice à la fois** : lecture du code et du contenu, correction, puis test automatique dans Chromium (Playwright), joué des dizaines de fois :
   - bonnes réponses → 100 % ;
   - mauvaises réponses → refusées ;
   - position de la bonne réponse répartie ;
   - « Recommencer » → nouvelle série ;
   - réponses équivalentes acceptées (majuscules, accents, espaces, 02 = 2…).
3. **Un commit par exercice, fait par Claude** (liste de suivi comprise), avec `VERSION` de `sw.js` augmentée à chaque fois (sinon les tablettes gardent l'ancienne version). Claude ne peut pas pousser sur GitHub depuis la session : **Jérémy fait le push**.
4. Statut dans la colonne de gauche : ⬜ à vérifier · 🔧 en cours · ✅ vérifié/corrigé (date + commit).

**Points d'attention pour chaque exercice :**

- Beaucoup de fiches mélangent avec `sort(() => Math.random() - .5)`. Ce mélange est biaisé : certaines positions reviennent plus souvent. À remplacer par un vrai mélange (Fisher-Yates) au passage.
- Les banques de `exercices_maths.js`, `exercices_francais.js` et `exercices_eveil.js` n'ont pas été balayées automatiquement : à vérifier avec les exercices qui les utilisent.
- Rapports du 8/09 (`Claude outputs/rapport_analyse_LCML_*`) : certains bugs y sont listés (boutons Quadrilatères, Longueurs QCM, ¼ dl = 25 ml dans capacites_QCM, V/F quadrilatères contradictoires…). Il faut vérifier s'ils ont été corrigés depuis.

## Signalements des élèves

| Signalement | Exercice | Cause trouvée | Statut |
|---|---|---|---|
| QCM Peste noire : toujours la réponse 1 | `moyen_age_doc` | Propositions jamais mélangées, bonne réponse en 1re position dans les 5 QCM | ✅ ac366c8 |
| Vrai/Faux Moyen Âge : V F V F… | `moyen_age_doc` | Affirmations dans l'ordre fixe V F V F V | ✅ ac366c8 |
| Valeur d'un chiffre : 2 réponses possibles refusées | `num_decimaux_relier` | Les chiffres de remplissage rendaient parfois une autre phrase vraie (ex. 4 832,51 et « le 3 représente les dizaines ») | ✅ 9d2364e |
| Donner l'heure : bonne réponse refusée | `grandeur_durees_heure_secondes` (+ durées) | Horloge : 15 h refusé pour 3 h, 00 h refusé pour 12 h, impossible de saisir 20 h et plus. Durées : « 03 » refusé pour 3, « 00 » refusé pour 0 | ✅ 6d5a2ec |

## Journal des séances

- **05/10 — Français › Lecture narrative › Contes** (199a1f7) :
  - Chat Botté : ordre attendu faux dans la partie 4, et « Recommencer » ne marchait pas.
  - Les deux contes : rien n'était mélangé (le bon résumé était toujours le 1er) ; le résultat n'était enregistré qu'en validant la partie 4 ; trois formulations ont été précisées.

- **05/10 — Français › Lecture narrative › Poèmes** (a286c36) :
  - Vrai/Faux toujours dans l'ordre F puis V, et bonne réponse presque toujours en 2e position.
  - Page d'écriture : la réponse attendue pour la craie était fausse (« un oiseau » au lieu de « falaise »).
  - Le Cancre : deux réponses défendables dans la partie 3.
  - Drôle de bonne femme : le poème est de Marie Aubinais, pas de Carême.
  - Dormeur du val : coquille.

- **05/10 — Français › Lecture › Lecture rapide, niveaux 1 à 6** (ae6db01) :
  - Bonne réponse toujours en 2e ou 3e position.
  - Le plan de travail ne voyait jamais l'exercice comme fait, et le niveau 6 n'y figurait pas.
  - 6 corrections de contenu.

- **05/10 — Lecture informative › La Baleine bleue** (9976a57) :
  - Propositions jamais mélangées.
  - Distance Waimes-Paris fausse (≈ 320 km, pas 270 km) et question posée à l'envers.
  - La carte du menu restait toujours sur « Non fait » (mauvais identifiant).
  - Moteur commun `ficheQCMAfficher`/`ficheQCMValider` créé : les 9 autres fiches ont le même code à migrer.

- **05/10 — Lecture informative › L'écureuil** (a52284d) :
  - Passé sur le moteur commun.
  - « Drey » (mot anglais) remplacé par « hutte » ; une question reformulée ; deux petites corrections de contenu.

- **05/10 — Lecture informative › Le loup** (8c01793) :
  - Passé sur le moteur commun.
  - Dates du retour du loup corrigées (2016 / 2018, Limbourg et Hautes Fagnes).
  - « Alpha » remplacé par « couple de parents ».
  - Calculs faux dans les mauvaises réponses de la question 4.

- **05/10 — Lecture informative › L'éléphant** (a5c005b) :
  - Passé sur le moteur commun.
  - Nombre d'espèces nuancé (3 selon les scientifiques) ; « ils peuvent pleurer » reformulé.

- **05/10 — Lecture informative › Léonard de Vinci** (aafff46) :
  - Passé sur le moteur commun.
  - Nombre de pages des carnets corrigé ; écriture en miroir et sommeil présentés comme des hypothèses.

- **05/10 — Lecture informative › Charlemagne** (0e1523d) :
  - Passé sur le moteur commun.
  - Aix-la-Chapelle est à 40 km de Waimes, pas 80 (texte et question 4).
  - Date de naissance incertaine ; deux précisions.

- **05/10 — Lecture informative › Albert Einstein** :
  - Passé sur le moteur commun.
  - « Élève ordinaire » est une légende : il était très bon en maths et en physique (texte et question 4 corrigés).
  - « QI estimé à 160-190 » retiré (jamais mesuré).

- **05/10 — Lecture informative › La tour Eiffel** :
  - Passé sur le moteur commun.
  - Contenu exact ; un distracteur de la question 4 était historiquement vrai (crainte d'effondrement) et a été remplacé.

- **05/10 — Lecture informative › L'Atomium** :
  - Passé sur le moteur commun.
  - « Molécule de fer » remplacé par « cristal de fer ».
  - Durée de construction corrigée (1956-1958) ; phrase sur le tube central corrigée.
  - Distracteur « restaurant » remplacé (il y a vraiment un restaurant au sommet).

- **05/10 — Lecture informative › Le Taj Mahal** :
  - Passé sur le moteur commun.
  - Contenu exact ; un distracteur en partie vrai (crues de la Yamuna) a été remplacé.
  - **Les 10 fiches de lecture informative sont terminées.**

- **05/10 — Lecture descriptive › Le vieux libraire** :
  - Moteur des 3 textes descriptifs corrigé : propositions et questions mélangées (la bonne réponse était en 2e position dans 2 questions sur 4), bonne réponse montrée.
  - Contenu du libraire correct.
  - La forêt et le renard profitent déjà de la correction du moteur ; leur contenu reste à relire.

- **05/10 — Lecture descriptive › La forêt en hiver** :
  - Question 3 « le seul bruit décrit » ambiguë (le ruisseau murmure aussi) ; reformulée.

- **05/10 — Lecture descriptive › Le renard** :
  - « Blanc sur le bout des pattes » corrigé : le renard roux a les pattes noires et le blanc sur la gorge et le ventre (texte et question 1).
  - **Les 3 textes descriptifs sont terminés.**

- **05/10 — Lecture argumentative › Faut-il supprimer les devoirs ?** :
  - Moteur des 7 textes argumentatifs corrigé. Avant, la bonne réponse des QCM était toujours en 2e position, et les arguments à classer suivaient presque toujours le même ordre (Pour, Pour, Contre, Pas dans le texte, Pour). Maintenant, tout est mélangé, la bonne réponse est montrée, et le résultat est enregistré quand les 2 parties sont faites.
  - Devoirs : l'argument « consolider les apprentissages » devait être classé « Contre », alors qu'il n'apparaissait pas dans le texte. Il y est maintenant, comme concession.
  - Les 6 autres textes ont la même structure de classement : leur contenu reste à relire.

- **05/10 — Lecture argumentative › Les écrans** :
  - Même piège que les devoirs : « Les écrans permettent d'apprendre et de découvrir le monde » devait être classé « pas dangereux » sans être dans le texte. Il est ajouté comme concession.

- **05/10 — Lecture argumentative › Végétarien** :
  - Classement cohérent avec le texte.
  - Question 1 précisée par « Selon le texte » (l'oxyde d'azote des déjections, proposé comme mauvaise réponse, est aussi un vrai gaz à effet de serre).

- **05/10 — Lecture argumentative › L'uniforme** :
  - Rien à corriger dans le contenu. Le classement est cohérent : l'argument contre, l'expression de la personnalité, figure bien dans le texte.
  - Le mélange vient du moteur commun.

- **05/10 — Lecture argumentative › L'importance de lire** :
  - Même piège que les devoirs : « Lire est ennuyeux et démotive » devait être classé « Contre » alors qu'il n'était pas dans le texte. Ajouté comme concession.
  - Question 3 : la mauvaise réponse « reconnaître les différentes cultures » était presque dans le texte. Remplacée.

- **05/10 — Lecture argumentative › Bien manger** :
  - Même piège que les devoirs : l'argument « coûte trop cher pour certaines familles » devait être classé « Contre », alors qu'il n'était pas dans le texte. Je l'ai ajouté comme concession.

- **05/10 — Lecture argumentative › Les réseaux sociaux** :
  - Le classement est cohérent : avantages et inconvénients sont tous les deux dans le texte.
  - Question 3 reformulée pour coller au texte.
  - **Les 7 textes argumentatifs sont terminés.**

- **05/10 — Lecture dialoguée › Les écrans à l'école** :
  - Moteur des 4 dialogues « anciens » (écrans, bio, voiture, animal) corrigé :
    - la bonne réponse était presque toujours en 2e position ; propositions, intentions et répliques à attribuer sont maintenant mélangées ;
    - la bonne réponse est montrée ;
    - le résultat est enregistré quand les 3 parties sont faites.
  - Contenu des écrans correct.
  - Les 3 dialogues « nouveaux » (Armstrong, conseil, marché) ont un autre moteur, pas encore vérifié.

- **05/10 — Lecture dialoguée › Manger bio** :
  - Le contenu est cohérent.
  - Petite précision : « pesticides chimiques **de synthèse** » (le bio autorise certains pesticides naturels).

- **05/10 — Lecture dialoguée › La voiture en ville** :
  - Le contenu est cohérent.
  - Amsterdam et Copenhague n'ont pas interdit la voiture : elles l'ont fortement réduite dans leur centre. Le texte et l'intention 3 ont été corrigés.

- **05/10 — Lecture dialoguée › Animal de compagnie** :
  - Dernier argument de Noah : « laisser les animaux vivre librement dans la nature » ne tient pas pour des chiens et des chats, et cela revient à un abandon, ce que Noah condamne lui-même. Reformulé en « pas faits pour vivre enfermés dans un appartement » (réplique et question 4).
  - **Les 4 dialogues à 3 parties sont terminés.** Restent Armstrong, le conseil et le marché, qui ont un autre moteur.

- **05/10 — Lecture dialoguée › Interview de Neil Armstrong** :
  - Moteur des 3 nouveaux dialogues (Armstrong, conseil, marché) : rien n'était mélangé (bonne réponse souvent en 2e position). Les questions, les propositions, les répliques à attribuer et les intentions sont maintenant mélangées.
  - Le contenu est exact (Apollo 11 en 1969, rochers évités, environ 30 s de carburant, 400 000 personnes).

- **05/10 — Lecture dialoguée › Le grand désaccord** :
  - Rien à corriger : la scène, les 4 questions, les attributions (4 personnages) et les intentions sont cohérentes.
  - Le mélange vient du moteur des nouveaux dialogues.

- **05/10 — Lecture dialoguée › Une affaire en or !** :
  - 4 didascalies s'affichaient avec des astérisques visibles (« *(à Renaud)* ») : elles sont maintenant en italique.
  - Faute corrigée : « Ton décoction » devient « Ta décoction ».
  - Intention 2 : la mauvaise réponse « Protéger Renaud d'une arnaque » se défendait. Elle est remplacée par « … sans rien lui demander en échange ».
  - **Les 7 dialogues sont terminés.**

- **05/10 — Vocabulaire › Expressions et proverbes** (fiche + 2 copies) :
  - Les 2 jeux d'association et les 16 QCM étaient toujours dans le même ordre. Ils sont maintenant mélangés à chaque ouverture et à chaque « Recommencer ».
  - La bonne réponse est maintenant montrée.
  - Le résultat était enregistré à chaque partie vérifiée, avec un score partiel (par exemple 12/40). Il ne l'est plus que lorsque les 4 parties ont été vérifiées.
  - Origines historiques corrigées :
    - « L'habit ne fait pas le moine » : vient du latin « cucullus non facit monachum » (l'histoire des brigands déguisés était inventée) ;
    - « Donner sa langue au chat » : XVIIe puis XIXe siècle ;
    - dates incertaines retirées ;
    - coquille « générésité » corrigée.

## Défauts déjà confirmés à la main (à traiter en priorité)

| Exercice | Défaut |
|---|---|
| `vocabulaire_pc_avoir_accord_qcm` (Accords avec Avoir, QCM) | Bonne réponse en 1re position dans 40/40 questions, propositions non mélangées |
| `vocabulaire_pc_mix_qcm` (Bilan Avoir & Être, QCM) | Bonne réponse en 1re position dans 50/50 questions, non mélangées |
| `vocabulaire_pc_avoir_qcm` (PP avec Avoir, QCM) | Bonne réponse en 1re position dans 30/40 questions, non mélangées |
| `vocabulaire_pc_etre_qcm` (PP avec Être, QCM) | Bonne réponse en 1re position dans 24/40 questions, non mélangées |
| `vocabulaire_relations_lexicales` | Bonne réponse = 1re proposition dans 30/30 questions, non mélangées |
| ~~Fiches de lecture (Baleine, Vinci, Eiffel, Charlemagne, Einstein, Atomium, Taj Mahal, Écureuil, Loup, Éléphant)~~ | ✅ corrigées le 05/10 |
| `hist_ligne_du_temps` | Bonne réponse en 2e position dans 10/10 questions, aucun mélange |
| `hist_grand_voyage_temps` | Bonne réponse en 1re position dans 5/5 questions, aucun mélange |
| `qvgdm_antiquite`, `qvgdm_moyen_age`, `qvgdm_prehistoire` (Qui veut gagner des millions) | Propositions jamais mélangées, toujours la même partie. Antiquité : bonne réponse en 3e position dans 9/15 questions. L'ordre croissant de difficulté des questions est voulu |

## Liste complète

### 📖 Français — 📚 Lecture — Narrative

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 05/10 (199a1f7) | Le Chat Botté | `conte_chatbotte` | index › renderConteChatBotte |  |
| ✅ 05/10 (199a1f7) | Les Musiciens de Brême | `conte_breme` | index › renderConteBreme |  |
| ✅ 05/10 (a286c36) | Le Cancre (Prévert) | `poeme_cancre` | index › renderPoemeCancre |  |
| ✅ 05/10 (a286c36) | Page d'écriture (Prévert) | `poeme_ecriture` | index › renderPoemeEcriture |  |
| ✅ 05/10 (a286c36) | Le Dormeur du val (Rimbaud) | `poeme_dormeur` | index › renderPoemeDormeur |  |
| ✅ 05/10 (a286c36) | Drôle de bonne femme (Aubinais) | `poeme_sorciere` | index › renderPoemeSorciere |  |

### 📖 Français — 📰 Lecture — Informative

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 05/10 (9976a57) | La Baleine Bleue | `fiche_baleine` | index › renderFicheBaleine | QCM: bonne réponse en position 2 dans 3/5 questions, options non mélangées ; Aucun hasard : mêmes questions, même ordre à chaque partie |
| ✅ 05/10 (aafff46) | Léonard de Vinci | `fiche_vinci` | index › renderFicheVinci | QCM: bonne réponse en position 2 dans 4/5 questions, options non mélangées ; Aucun hasard : mêmes questions, même ordre à chaque partie |
| ✅ 05/10 | La Tour Eiffel | `fiche_eiffel` | index › renderFicheEiffel | QCM: bonne réponse en position 1 dans 3/5 questions, options non mélangées ; Aucun hasard : mêmes questions, même ordre à chaque partie |
| ✅ 05/10 (0e1523d) | Charlemagne | `fiche_charlemagne` | index › renderFicheCharlemagne | Aucun hasard : mêmes questions, même ordre à chaque partie |
| ✅ 05/10 | Albert Einstein | `fiche_einstein` | index › renderFicheEinstein | Aucun hasard : mêmes questions, même ordre à chaque partie |
| ✅ 05/10 | L'Atomium | `fiche_atomium` | index › renderFicheAtomium | Aucun hasard : mêmes questions, même ordre à chaque partie |
| ✅ 05/10 | Le Taj Mahal | `fiche_tajmahal` | index › renderFicheTajMahal | Aucun hasard : mêmes questions, même ordre à chaque partie |
| ✅ 05/10 (a52284d) | L'Écureuil roux | `fiche_ecureuil` | index › renderFicheEcureuil | Aucun hasard : mêmes questions, même ordre à chaque partie |
| ✅ 05/10 (8c01793) | Le Loup gris | `fiche_loup` | index › renderFicheLoup | QCM: bonne réponse en position 3 dans 3/5 questions, options non mélangées ; Aucun hasard : mêmes questions, même ordre à chaque partie |
| ✅ 05/10 (a5c005b) | L'Éléphant d'Afrique | `fiche_elephant` | index › renderFicheElephant | Aucun hasard : mêmes questions, même ordre à chaque partie |

### 📖 Français — 🖼️ Lecture — Descriptive

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 05/10 | La librairie enchantée | `desc_libraire` | index › renderDescLibraire |  |
| ✅ 05/10 | La forêt en hiver | `desc_foret` | index › renderDescForet |  |
| ✅ 05/10 | Le vieux renard | `desc_renard` | index › renderDescRenard |  |

### 📖 Français — 💬 Lecture — Argumentative

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 05/10 | Faut-il supprimer les devoirs ? | `arg_devoirs` | index › renderArgDevoirs |  |
| ✅ 05/10 | Les écrans sont-ils dangereux ? | `arg_ecrans` | index › renderArgEcrans |  |
| ✅ 05/10 | Doit-on devenir végétarien ? | `arg_vegetarien` | index › renderArgVegetarien |  |
| ✅ 05/10 | Faut-il porter un uniforme ? | `arg_uniforme` | index › renderArgUniforme |  |
| ✅ 05/10 | L'importance de lire | `arg_lecture` | index › renderArgLecture |  |
| ✅ 05/10 | Bien manger pour bien grandir | `arg_alimentation` | index › renderArgAlimentation |  |
| ✅ 05/10 | Les réseaux sociaux | `arg_reseaux` | index › renderArgReseaux |  |

### 📖 Français — 🎭 Lecture — Dialoguée

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 05/10 | Les écrans à l'école | `dial_ecrans` | index › renderDialEcrans |  |
| ✅ 05/10 | Manger bio, est-ce utile ? | `dial_bio` | index › renderDialBio |  |
| ✅ 05/10 | La voiture en ville | `dial_voiture` | index › renderDialVoiture |  |
| ✅ 05/10 | Avoir un animal de compagnie | `dial_animal` | index › renderDialAnimal |  |
| ✅ 05/10 | Interview de Neil Armstrong | `dial_armstrong` | index › renderDialArmstrong |  |
| ✅ 05/10 | Le grand désaccord | `dial_conseil` | index › renderDialConseil |  |
| ✅ 05/10 | Une affaire en or ! | `dial_marche` | index › renderDialMarche |  |

### 📖 Français — ⚡ Lecture — Lecture rapide

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 05/10 (ae6db01) | Lecture rapide — Niveau 1 | `lr_niveau_1` | index › renderLectureRapideNiveau |  |
| ✅ 05/10 (ae6db01) | Lecture rapide — Niveau 2 | `lr_niveau_2` | index › renderLectureRapideNiveau |  |
| ✅ 05/10 (ae6db01) | Lecture rapide — Niveau 3 | `lr_niveau_3` | index › renderLectureRapideNiveau |  |
| ✅ 05/10 (ae6db01) | Lecture rapide — Niveau 4 | `lr_niveau_4` | index › renderLectureRapideNiveau |  |
| ✅ 05/10 (ae6db01) | Lecture rapide — Niveau 5 | `lr_niveau_5` | index › renderLectureRapideNiveau |  |
| ✅ 05/10 (ae6db01) | Lecture rapide — Niveau 6 | `lr_niveau_6` | index › renderLectureRapideNiveau | (ajouté au plan de travail) |

### 📖 Français — ✏️ Grammaire — Classes de mots

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Le nom — Identifier les noms | `gram_nom_identifier` | index › startNomExercise |  |
| ⬜ | Le nom — Est-ce un nom ? | `gram_nom_reconnaître` | index › startNomReconnaîtreExercise |  |
| ⬜ | Le déterminant | `gram_determinant` | index › (?) | (code à localiser) |
| ⬜ | Le déterminant — Reconnaître les déterminants | `gram_determinant_reconnaitre` | index › startDeterminantExercise |  |
| ⬜ | Le déterminant — Le tri des déterminants | `gram_determinant_tri` | index › startTriExercise |  |
| ⬜ | Le déterminant (Exercices) | `gram_determinant_ex` | fiches/determinant_exercice.html |  |
| ⬜ | L'adjectif — Identifier les adjectifs | `gram_adjectif_identifier` | index › startAdjectifExercise |  |
| ⬜ | L'adjectif — Accords de l'adjectif | `gram_adjectif_accord` | index › startAdjectifAccordExercise |  |
| ⬜ | L'adjectif — Épithète ou attribut ? | `gram_adjectif_fonction` | index › startAdjectifFonctionExercise |  |
| ⬜ | L'adjectif — Retrouver le nom qualifié | `gram_adjectif_nom` | index › startAdjectifNomExercise |  |
| ⬜ | Le verbe — Identifier les verbes | `gram_verbe_identifier` | index › startVerbeClassExercise |  |
| ⬜ | Le pronom | `gram_pronom` | index › (?) | (code à localiser) |
| ⬜ | Le pronom — Déterminant ou pronom ? | `gram_pronom_piege` | index › startPronomPiegeExercise |  |
| ⬜ | Le pronom — Le détecteur de référents | `gram_pronom_referents` | fiches/detecteur_referents.html |  |
| ⬜ | Le pronom — Le remplaçant | `gram_pronom_remplacant` | fiches/remplacant_pronom.html |  |
| ⬜ | Le pronom — La chasse aux répétitions | `gram_pronom_repetitions` | fiches/chasse_repetitions.html |  |
| ⬜ | L'adverbe | `gram_adverbe` | index › (?) | (code à localiser) |
| ⬜ | L'adverbe — Reconnaître les adverbes | `gram_adverbe_reconnaitre` | fiches/adverbe_exercice.html |  |
| ⬜ | L'adverbe — Adjectif ou adverbe ? | `gram_adverbe_accord` | fiches/adverbe_accord_exercice.html |  |
| ⬜ | Le complément du nom | `gram_complement_nom` | index › (?) | (code à localiser) |
| ⬜ | Le tri des mots | `gram_tri_mots` | fiches/tri_mots.html |  |
| ⬜ | Les mots de liaison | `gram_mots_liaison` | fiches/grammaire_mots_liaison.html |  |

### 📖 Français — ✏️ Grammaire — Fonctions des mots

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Le sujet — Repérer le sujet | `sujet_phrase` | index › startSujetExercise |  |
| ⬜ | Le sujet — Reconstituer les textes | `gram_sujet_texte` | index › startSujetTextesExercise |  |
| ⬜ | Le sujet — Les 4 classes du sujet | `gram_classes_sujet` | index › startSujetClassesExercise |  |
| ⬜ | Le verbe (fonction) — Repérer le verbe | `verbe_phrase` | index › startVerbeExercise |  |
| ⬜ | Le verbe (fonction) — Infinitif et groupe | `gram_verbe_groupe` | index › startVerbeGroupeExercise |  |
| ⬜ | Le verbe (fonction) — Trouver l'infinitif | `gram_verbe_infinitif` | index › startVerbeInfinitifExercise |  |
| ⬜ | Le verbe (fonction) — Reconstituer les textes | `gram_verbe_texte` | index › startVerbeTextesExercise |  |
| ⬜ | L'attribut du sujet | `gram_attribut` | index › (?) | (code à localiser) |
| ⬜ | Attribut & Complément du nom | `gram_attribut_cdn` | fiches/grammaire_attribut_cdn.html |  |
| ⬜ | Le complément d'agent | `gram_agent` | index › (?) | (code à localiser) |
| ⬜ | Analyse de phrases | `gram_analyse_phrase` | index › startAnalyseGlobale |  |

### 📖 Français — ✏️ Grammaire — Types et formes de phrases

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Les types de phrases | `gram_types_phrases` | fiches/types_de_phrases.html |  |
| ⬜ | QCM - Affirmative ou négative | `gram_affirm_neg_qcm` | fiches/phrases_affirm_neg.html |  |
| ⬜ | Transformation de phrases | `gram_affirm_neg_transfo` | fiches/phrases_transfo.html |  |
| ⬜ | Passives ou actives ? | `gram_pass_act` | index › (?) | (code à localiser) |
| ⬜ | Phrase simple / complexe | `gram_phrase_simple_complexe` | fiches/grammaire_phrase_simple_complexe.html |  |

### 📖 Français — ⏰ Conjugaison — Les temps

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Indicatif présent | `present` | index › goToConjugaison |  |
| ⬜ | Indicatif imparfait | `imparfait` | index › goToConjugaison |  |
| ⬜ | Indicatif futur simple | `futur` | index › goToConjugaison |  |
| ⬜ | Indicatif passé composé | `passe_compose` | index › goToConjugaison |  |
| ⬜ | Passé simple (Lecture) | `conj_passe_simple` | fiches/conjugaison_passe_simple.html |  |
| ⬜ | Subjonctif & Impératif | `conj_subj_imp` | fiches/conjugaison_subj_imp.html |  |
| ⬜ | Conditionnel & Plus-que-parfait | `conj_cond_pqpf` | fiches/conjugaison_cond_pqpf.html |  |

### 📖 Français — 🔀 Conjugaison — Un peu de tout

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Présent de l'indicatif (QCM) | `conj_present_qcm` | fiches/conjugaison_present_QCM.html |  |
| ⬜ | Présent de l'indicatif (Écriture) | `conj_present_ecriture` | fiches/conjugaison_present_ecriture.html |  |
| ⬜ | Imparfait de l'indicatif (QCM) | `conj_imparfait_qcm` | fiches/conjugaison_imparfait_QCM.html |  |
| ⬜ | Imparfait de l'indicatif (Écriture) | `conj_imparfait_ecriture` | fiches/conjugaison_imparfait_ecriture.html |  |
| ⬜ | 1. Tableau des 3 temps | `conj_tableau_3_temps` | fiches/conjugaison_tableau_3_temps.html |  |
| ⬜ | 2. Tableau des 3 temps simples | `conj_trois_temps_simples` | fiches/conjugaison_trois_temps_simples.html |  |
| ⬜ | 3. Repère le bon verbe | `conj_repere_verbe` | fiches/conjugaison_repere_verbe.html |  |

### 📖 Français — 📄 Conjugaison — Fiches du passé composé

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Passé composé ou pas ? | `vocabulaire_pc_identifier` | fiches/conjugaison_pc_identifier.html |  |
| ⬜ | Participe passé avec Avoir (QCM) | `vocabulaire_pc_avoir_qcm` | fiches/conjugaison_pc_avoir_qcm.html | QCM: bonne réponse en position 1 dans 30/40 questions, options non mélangées |
| ⬜ | Participe passé avec Avoir (Écriture) | `vocabulaire_pc_avoir_trous` | fiches/conjugaison_pc_avoir_trous.html |  |
| ⬜ | Participe passé avec Être (QCM) | `vocabulaire_pc_etre_qcm` | fiches/conjugaison_pc_etre_qcm.html | QCM: bonne réponse en position 1 dans 24/40 questions, options non mélangées |
| ⬜ | Participe passé avec Être (Écriture) | `vocabulaire_pc_etre_trous` | fiches/conjugaison_pc_etre_trous.html |  |
| ⬜ | Accords avec Avoir (QCM) | `vocabulaire_pc_avoir_accord_qcm` | fiches/conjugaison_pc_avoir_accord_qcm.html | QCM: bonne réponse en position 1 dans 40/40 questions, options non mélangées |
| ⬜ | Accords avec Avoir (Écriture) | `vocabulaire_pc_avoir_accord_trous` | fiches/conjugaison_pc_avoir_accord_trous.html |  |
| ⬜ | Bilan Avoir & Être (QCM) | `vocabulaire_pc_mix_qcm` | fiches/conjugaison_pc_mix_qcm.html | QCM: bonne réponse en position 1 dans 50/50 questions, options non mélangées |
| ⬜ | Bilan Avoir & Être (Texte) | `vocabulaire_pc_mix_texte` | fiches/conjugaison_pc_mix_texte.html |  |

### 📖 Français — ✏️ Orthographe — Homophones

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | a / as / à | `homo_a` | index › renderHomoASynthesis |  |
| ⬜ | ou / où | `homo_ou` | index › renderHomoOuSynthesis |  |
| ⬜ | son / sont | `homo_son` | index › renderHomoSonSynthesis |  |
| ⬜ | se / ce / s' / c' | `homo_ce` | index › renderHomoCeSynthesis |  |
| ⬜ | on / ont | `homo_on` | index › renderHomoOnSynthesis |  |
| ⬜ | la / là / l'a / l'as | `homo_la` | index › renderHomoLaSynthesis |  |
| ⬜ | ces / ses / c'est / s'est / sais / sait | `homo_ces` | index › renderHomoCesSynthesis |  |
| ⬜ | leur / leurs | `homo_leur` | index › renderHomoLeurSynthesis |  |
| ⬜ | peu / peux / peut | `homo_peu` | index › renderHomoPeuSynthesis |  |
| ⬜ | sans / s'en / cent / sang | `homo_sans` | index › renderHomoSansSynthesis |  |
| ⬜ | Les homophones complexes | `homo_complexes` | fiches/homophones_complexes.html |  |

### 📖 Français — ✏️ Orthographe — Règles & Accords

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Détective des participes | `ortho_participe_texte` | fiches/orthographe_participe_passe_texte.html |  |
| ⬜ | Transformation à l'infini | `ortho_participe_infinitif` | fiches/orthographe_participe_passe_infinitif.html |  |
| ⬜ | PP employé seul | `ortho_participe_seul` | fiches/orthographe_participe_passe_seul.html |  |
| ⬜ | PP avec Être | `ortho_participe_etre` | fiches/orthographe_participe_passe_etre.html |  |
| ⬜ | PP avec Avoir | `ortho_participe_avoir` | fiches/orthographe_participe_passe_avoir.html |  |
| ⬜ | L'Accord parfait (Participe passé) | `ortho_participe_accord` | fiches/accord_participe.html |  |
| ⬜ | Les pluriels particuliers | `ortho_pluriels` | fiches/orthographe_pluriels_particuliers.html |  |
| ⬜ | Accord des adjectifs de couleur | `ortho_adjectifs_couleur` | fiches/orthographe_adjectifs_couleur.html |  |

### 📖 Français — ✍️ Expression écrite

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Connecteurs logiques | `connecteurs` | index › renderConnecteurs |  |
| ⬜ | Synonymes | `synonymes` | index › renderSynonymes |  |
| ⬜ | Antonymes | `antonymes` | index › renderAntonymes |  |
| ⬜ | Mes écrits — Atelier Plume | `mes_ecrits` | index › (?) | (code à localiser) |
| ⬜ | Les substituts du nom | `lecture_substituts` | fiches/lecture_substituts.html |  |

### 📖 Français — 📚 Vocabulaire

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 05/10 | Expressions & Proverbes | `vocabulaire_proverbes` | fiches/expressions-proverbes.html |  |
| ⬜ | L'Atelier des Mots | `vocabulaire_atelier_mots` | fiches/vocabulaire-jeu.html |  |
| ⬜ | Le Défi des Registres | `vocabulaire_registres` | fiches/registres-tri.html |  |
| ⬜ | Chasse aux Verbes Ternes | `vocabulaire_verbes_ternes` | fiches/verbes-ternes.html |  |
| ⬜ | Le Chasseur d'Intrus | `vocabulaire_chasseur_intrus` | fiches/chasseur-intrus.html |  |
| ⬜ | La Fabrique de Mots | `vocabulaire_fabrique_mots` | fiches/fabrique-mots.html |  |
| ⬜ | Relations lexicales | `vocabulaire_relations_lexicales` | fiches/vocabulaire_relations_lexicales.html | QCM: la bonne réponse est la 1re option dans 30/30 questions, options non mélangées |

### 📖 Français — 🎧 Savoir écouter

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Savoir écouter - Soignes | `savoir_ecouter_1` | index › startSavoirEcouter |  |
| ⬜ | Savoir écouter - Bruges | `savoir_ecouter_2` | index › startSavoirEcouter |  |
| ⬜ | Savoir écouter - Fourmi | `savoir_ecouter_3` | index › startSavoirEcouter |  |
| ⬜ | Savoir écouter - Pain perdu | `savoir_ecouter_4` | index › startSavoirEcouter |  |
| ⬜ | Savoir écouter - Hautes Fagnes | `savoir_ecouter_5` | index › startSavoirEcouter |  |
| ⬜ | Savoir écouter - L'atelier de Sandy | `savoir_ecouter_6` | index › startSavoirEcouter |  |
| ⬜ | Savoir écouter - Au club d'échecs | `savoir_ecouter_7` | index › startSavoirEcouter |  |
| ⬜ | Savoir écouter - Notice de l'étagère Lyra | `savoir_ecouter_8` | index › startSavoirEcouter |  |

### 🔢 Mathématiques — 🔢 Numération

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Lire un nombre | `num_lire` | index › renderNumLire |  |
| ⬜ | Écrire un nombre | `num_ecrire` | index › renderNumEcrire |  |
| ⬜ | Décomposer un nombre | `num_decomposer` | index › renderNumDecomposer |  |
| ⬜ | Classer des nombres | `num_classer` | index › renderNumClasser |  |
| ⬜ | Décimaux — L'abaque des décimaux | `num_decimaux_abaque` | index › renderAbaqueDecimaux |  |
| ⬜ | Décimaux — Devinettes décimales | `num_decimaux_devinettes` | index › renderDevinettesDecimaux |  |
| ✅ 05/10 (9d2364e) | Décimaux — Valeur d'un chiffre | `num_decimaux_relier` | index › renderRelierDecimaux |  |
| ⬜ | Décimaux — Écrire en chiffres | `num_decimaux_ecriture` | index › renderDecimauxEcriture |  |
| ⬜ | Décimaux — Droites numériques | `num_decimaux_droite` | index › renderDecimauxDroite |  |
| ⬜ | Décimaux — Le bon nombre | `num_decimaux_le_bon_nombre` | index › renderDecimauxLeBonNombre | Aucun hasard : mêmes questions, même ordre à chaque partie |
| ⬜ | Décimaux — Entre deux nombres | `num_decimaux_entre` | index › renderDecimauxEntre |  |
| ⬜ | Décimaux — Opérations devinettes | `num_decimaux_op_devinettes` | index › renderDecimauxOpDevinettes |  |
| ⬜ | Sélectionne le bon chiffre | `num_entiers_decimaux_abaque` | fiches/abaque.html |  |
| ⬜ | Comparaison de nombres | `num_entiers_decimaux_comparaison` | fiches/comparaison.html |  |
| ⬜ | Fractions simples | `num_fractions_simples` | index › renderFractionsSimples |  |
| ⬜ | Fractions complexes | `num_fractions_complexes` | index › renderFractionsExercice |  |
| ⬜ | La balance des fractions | `num_balance_fractions` | fiches/balance_fractions.html |  |
| ⬜ | Colorie les fractions | `num_fractions_colorie` | fiches/colorie_les_fractions.html |  |
| ⬜ | Opérations de fractions | `num_fractions_operations` | fiches/calculs_fractions.html |  |
| ⬜ | La fraction d'une quantité | `num_fraction_quantite` | fiches/fraction_quantite.html |  |
| ⬜ | Les nombres mixtes | `num_nombres_mixtes` | fiches/numeration_nombres_mixtes.html |  |
| ⬜ | Les pourcentages | `num_pourcentages` | index › (?) | (code à localiser) |
| ⬜ | Arrondir les décimaux | `num_decimaux_arrondir` | index › renderDecimauxArrondir |  |
| ⬜ | Diviseurs & Nombres premiers | `num_diviseurs_premiers` | fiches/nombres_diviseurs.html |  |
| ⬜ | Un peu de tout (numération) | `num_tout` | index › (?) | (code à localiser) |

### 🔢 Mathématiques — ➕ Opérations — Vocabulaire

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Vocabulaire des opérations (Définitions) | `op_vocabulaire_def` | fiches/vocabulaire_operations.html |  |
| ⬜ | Vocabulaire des opérations (Parties d'un calcul) | `op_vocabulaire_calc` | fiches/parties_calcul.html |  |
| ⬜ | Vocabulaire des opérations (Résolution de problèmes) | `op_vocabulaire_prob` | fiches/problemes_operations.html |  |

### 🔢 Mathématiques — ➕ Opérations — Calculs & Techniques

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Additions et soustractions | `op_add_sous` | index › (?) | (code à localiser) |
| ⬜ | Additions et soustractions — Jusque 100 | `op_add_sous_100` | index › startCalcExercise |  |
| ⬜ | Additions et soustractions — Jusque 1 000 | `op_add_sous_1000` | index › startCalcExercise |  |
| ⬜ | Additions et soustractions — Jusque 10 000 | `op_add_sous_10000` | index › startCalcExercise |  |
| ⬜ | Additions et soustractions — Jusque 100 000 | `op_add_sous_100000` | index › startCalcExercise |  |
| ⬜ | Additions et soustractions — Jusque 1 000 000 | `op_add_sous_1000000` | index › startCalcExercise |  |
| ⬜ | Fléchettes — Calcule le score | `op_add_sous_flechettes_calcule` | fiches/flechettes_calcule_le_score.html |  |
| ⬜ | Fléchettes — Atteins le score | `op_add_sous_flechettes_atteins` | fiches/flechettes_atteins_le_score.html |  |
| ⬜ | Multiplications et divisions | `op_mult_div` | index › (?) | (code à localiser) |
| ⬜ | Multiplications et divisions — Tables de multiplication | `op_mult_div_tables` | index › startMultDivExercise |  |
| ⬜ | Les 4 opérations | `op_4_operations` | index › render4OperationsScreen |  |
| ⬜ | Les 4 opérations mélangées | `op_4_operations_melangees` | index › start4OpExercise |  |
| ⬜ | Le compte est bon | `op_add_sous_compte_est_bon` | fiches/compte_est_bon.html |  |
| ⬜ | Fiche d'entraînement (Calculs) | `op_4_operations_calculs` | fiches/calculs.html |  |
| ⬜ | Calculs lacunaires | `op_4_operations_lacunaires` | fiches/calculs-4-operations.html |  |
| ⬜ | Les tables étendues | `op_tables` | index › startOpTablesExercise |  |
| ⬜ | × et ÷ par 0,1 — 10 — 100 — 1000 | `op_x10` | index › startOpX10Exercise |  |
| ⬜ | × et ÷ par 0,5 — 5 — 50 — 500 | `op_x5` | index › startOpX5Exercise |  |
| ⬜ | × par 9 — 90 — 99 — 9,9 | `op_x9` | index › startOpX9Exercise |  |
| ⬜ | × par 11 — 101 — 110 — 1,1 | `op_x11` | index › (?) | (code à localiser) |
| ⬜ | Caractères de divisibilité | `op_divisibilite` | fiches/divisibilite.html |  |
| ⬜ | La compensation | `op_compensation` | index › (?) | (code à localiser) |
| ⬜ | Calcul écrit | `op_calcul_ecrit` | index › (?) | (code à localiser) |
| ⬜ | Calcul écrit — Additions écrites | `op_calcul_ecrit_addition` | fiches/calcul-ecrit-addition.html |  |
| ⬜ | Calcul écrit — Soustractions écrites | `op_calcul_ecrit_soustraction` | fiches/calcul-ecrit-soustraction.html |  |
| ⬜ | Calcul écrit — Multiplications écrites | `op_calcul_ecrit_multiplication` | fiches/calcul-ecrit-multiplication.html |  |
| ⬜ | Calcul écrit — Divisions écrites | `op_calcul_ecrit_division` | fiches/calcul-ecrit-division.html |  |
| ⬜ | L'ordre des opérations | `op_ordre` | index › (?) | (code à localiser) |
| ⬜ | L'ordre des opérations — Mission PEMDAS | `op_ordre_pemdas` | fiches/mission_pemdas.html |  |
| ⬜ | L'ordre des opérations — Défi PEMDAS | `op_ordre_defi` | fiches/defi_pemdas.html |  |

### 🔢 Mathématiques — 📐 Grandeurs — Mesures de base

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Conversions de masses (QCM) | `grandeur_masses_qcm` | index › renderMassesQCM |  |
| ⬜ | Conversions & Abaque (QCM) | `grandeur_masses_qcm_abaque` | fiches/masses_QCM_abaque.html |  |
| ⬜ | Conversions de capacités (QCM) | `grandeur_capacites_qcm` | index › renderCapacitesQCM |  |
| ⬜ | Conversions de capacités (QCM — Bis) | `grandeur_capacites_qcm_sup` | fiches/capacites_QCM.html |  |
| ⬜ | Conversions de longueurs (QCM) | `grandeur_longueurs_qcm` | index › renderLongueursQCM |  |
| ⬜ | Conversions de longueurs (QCM — Bis) | `grandeur_longueurs_qcm_sup` | fiches/longueurs_QCM.html |  |

### 🔢 Mathématiques — 📐 Grandeurs — Périmètre, Aire & Volume

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Périmètre — Calcul | `grandeur_perimetre_calcul` | index › renderPerimetreCalcul |  |
| ⬜ | Périmètre — Problèmes | `grandeur_perimetre_problemes` | index › renderPerimetreProblemes |  |
| ⬜ | Périmètre du cercle — Le labo de la circonférence | `grandeur_perimetre_cercle_labo` | fiches/perimetre_cercle.html |  |
| ⬜ | Périmètre du cercle — Le rayon et diamètre cachés | `grandeur_perimetre_cercle_inverse` | fiches/perimetre_cercle_inverse.html |  |
| ⬜ | Périmètre du cercle — Figures complexes | `grandeur_perimetre_cercle_compose` | fiches/perimetre_cercle_compose.html |  |
| ⬜ | L'Enquêteur Royal (Situations d'Aire) | `grandeur_aire_situations` | fiches/aire_situations.html |  |
| ⬜ | Le Géomètre des Carreaux (Quadrillage) | `grandeur_aire_quadrillage` | fiches/aire_quadrillage.html |  |
| ⬜ | L'Arpenteur Impérial (Conversions d'Aire) | `grandeur_aire_conversions` | fiches/aire_conversions.html |  |
| ⬜ | Mesures Agraires & Superficies | `grandeur_aire_agraire` | fiches/aire_agraire.html |  |
| ⬜ | L'Arpenteur du Château (Formules d'aire) | `grandeur_aire_formules` | fiches/aire_formules.html |  |
| ⬜ | Le Calcul d'Aires Composées | `grandeur_aire_composee` | fiches/aire_composee.html |  |
| ⬜ | Le Bâtisseur de Cubes (Volume 3D) | `grandeur_volume_cubes` | fiches/volume_cubes.html |  |
| ⬜ | L'Architecte des Pavés (Formules) | `grandeur_volume_architecte` | fiches/volume_formules.html |  |
| ⬜ | Le Laboratoire des Liquides | `grandeur_volume_liquides` | fiches/volume_conversions.html |  |

### 🔢 Mathématiques — 📐 Grandeurs — Durées, Monnaie & Vitesse

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Les durées | `grandeur_durees` | index › renderGrandeurDurees | QCM: bonne réponse en position 2 dans 39/65 questions, options non mélangées |
| ✅ 05/10 (6d5a2ec) | Les durées — Conversions | `grandeur_durees_conversions` | index › startDureesExercise |  |
| ✅ 05/10 (6d5a2ec) | Les durées — Durée entre 2 heures | `grandeur_durees_entre` | index › startDureesExercise |  |
| ✅ 05/10 (6d5a2ec) | Quelle heure est-il ? (avec secondes) | `grandeur_durees_heure_secondes` | fiches/heure_secondes.html |  |
| ⬜ | Le Labo des Durées | `grandeur_durees_situations` | fiches/durees_situations.html |  |
| ⬜ | Paie le commerçant | `grandeur_monnaie_payer` | fiches/payer_le_commercant.html |  |
| ⬜ | Rends la monnaie | `grandeur_monnaie_rendre` | fiches/rendre_la_monnaie.html |  |
| ⬜ | Deux objets — Rends la monnaie | `grandeur_monnaie_deux_objets` | fiches/deux_objets_monnaie.html |  |
| ⬜ | Recettes | `grandeur_proportionnalite_exercice` | fiches/proportionnalite.html |  |
| ⬜ | Le rallye des bolides | `grandeur_proportionnalite_rallye_bolides` | fiches/rallye_bolides.html |  |
| ⬜ | Le supermarché malin | `grandeur_proportionnalite_supermarche_malin` | fiches/supermarche_malin.html |  |
| ⬜ | QCM de vitesse horaire | `grandeur_vitesse_horaire_qcm` | fiches/vitesse_situations.html |  |
| ⬜ | L'échelle | `grandeur_echelle` | fiches/grandeurs_echelle.html |  |

### 🔢 Mathématiques — 📊 Traitement de données

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Lire un tableau | `td_tableau` | index › renderTDTableau |  |
| ⬜ | Lire un graphique | `td_graphique` | index › renderTDGraphique |  |
| ⬜ | La moyenne (QCM) | `td_moyenne_qcm` | index › renderTDMoyenneQCM |  |
| ⬜ | Moyenne et étendue | `td_moyenne` | index › renderTDMoyenne |  |
| ⬜ | Calcul de la moyenne (Exercices) | `td_moyenne_exercices` | fiches/moyenne_exercices.html | Aucun hasard : mêmes questions, même ordre à chaque partie |
| ⬜ | Le décodeur de camemberts | `td_donnees_circulaires` | index › renderDonneesCirculaires |  |
| ⬜ | L'arbre dichotomique | `td_arbre_dichotomique` | index › renderArbreDichotomique |  |
| ⬜ | Le tri logique (Venn & Carroll) | `td_logique_tri` | index › renderTDLogiqueTri |  |
| ⬜ | Choisir la bonne question | `td_quelle_question` | index › renderQuelleQuestion |  |
| ⬜ | Les graphiques de synthèse | `trait_graphiques` | index › (?) | (code à localiser) |
| ⬜ | La règle de trois | `trait_regle3` | index › (?) | (code à localiser) |
| ⬜ | Résolution de problèmes | `trait_problemes` | index › (?) | (code à localiser) |

### 🔢 Mathématiques — 🔷 Solides & Figures — Notions & Polygones

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Points, lignes et droites | `solide_points` | index › (?) | (code à localiser) |
| ⬜ | Identifier les polygones | `polygones_reconnaitre` | fiches/polygones_reconnaitre.html |  |
| ⬜ | Caractéristiques des polygones | `polygones_caracteristiques` | fiches/polygones_caracteristiques.html |  |

### 🔢 Mathématiques — 🔷 Solides & Figures — Triangles & Angles

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Identifier les triangles | `triangles_qcm` | fiches/triangles_QCM.html |  |
| ⬜ | Caractéristiques des triangles | `triangles_caracteristiques` | fiches/triangles_caracteristiques.html |  |
| ⬜ | Les hauteurs du triangle | `solide_triangles_hauteurs` | fiches/triangles_hauteurs.html |  |
| ⬜ | Reconnaître les angles | `angles_reconnaitre` | fiches/angles_reconnaitre.html |  |
| ⬜ | Estimation des angles | `angles_estimation` | fiches/angles_estimation.html | Saisie libre comparée strictement |
| ⬜ | Mesurer les angles | `angles_mesurer` | fiches/angles_mesurer.html |  |
| ⬜ | Calcul d'angles manquants | `geometrie_angles_manquants` | fiches/geometrie_angles_manquants.html |  |

### 🔢 Mathématiques — 🔷 Solides & Figures — Quadrilatères & Cercle

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Quadrilatères — Reconnaître la forme | `quadrilateres_reconnaître` | index › startShapeExercise |  |
| ⬜ | Quadrilatères — Vrai ou Faux | `quadrilateres_vf` | index › startVFExercise |  |
| ⬜ | Quadrilatères — Caractéristiques | `quadrilateres_caracteristiques` | index › startCharsExercise |  |
| ⬜ | Quadrilatères — Médianes & Diagonales | `quadrilateres_diagonales_medianes` | fiches/quadrilateres_diagonales_medianes.html |  |
| ⬜ | Quadrilatères — Évaluation | `quadrilateres_evaluation` | index › startShapeEvaluation |  |
| ⬜ | Le cercle et le disque — Le vocabulaire | `disque_vocabulaire` | fiches/disque_vocabulaire.html |  |
| ⬜ | Le cercle et le disque — Le laboratoire | `disque_laboratoire` | fiches/disque_laboratoire.html |  |
| ⬜ | Le cercle et le disque — L'enquête du compas | `disque_compas` | fiches/disque_compas.html |  |

### 🔢 Mathématiques — 🔷 Solides & Figures — Polyèdres, Symétrie & 3D

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Polyèdre ou non-polyèdre | `polyedres_reconnaitre` | fiches/polyedres_reconnaitre.html |  |
| ⬜ | Patrons de solides | `polyedres_patrons` | fiches/patrons_solides.html |  |
| ⬜ | Trouve le bon solide (Définitions) | `polyedres_definitions` | fiches/polyedres_definitions.html |  |
| ⬜ | Trouve les caractéristiques (Définitions) | `polyedres_caracteristiques` | fiches/polyedres_caracteristiques.html |  |
| ⬜ | Les axes de symétrie | `solide_symetrie` | fiches/solide_symetrie.html |  |
| ⬜ | Le labo des transformations | `solide_transformations_labo` | fiches/transformations_labo.html |  |
| ⬜ | Projections de cubes (Solides 3D) | `solide_projections_cubes` | fiches/solides_projections.html |  |
| ⬜ | Le vocabulaire géométrique | `solide_vocabulaire` | fiches/vocabulaire_solides.html |  |

### 🌍 Éveil — 📜 Histoire

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | L'Œil du Temps — Jeu de Kim (Mémoire visuelle) | `kim_histoire` | fiches/kim_histoire.html |  |
| ⬜ | La frise chronologique (Interactive) | `fiche_frise` | fiches/frise-chronologique-histoire.html |  |
| ⬜ | Le grand voyage du Temps (Carnet d'investigation) | `hist_grand_voyage_temps` | fiches/lecon_frise_historique.html | QCM: bonne réponse en position 1 dans 5/5 questions, options non mélangées ; Aucun hasard : mêmes questions, même ordre à chaque partie |
| ⬜ | La ligne du temps (Séquence P5–P6) | `hist_ligne_du_temps` | fiches/ligne-du-temps_5.html | QCM: bonne réponse en position 2 dans 10/10 questions, options non mélangées ; Aucun hasard : mêmes questions, même ordre à chaque partie |
| ⬜ | Les grandes périodes de l'Histoire | `hist_grandes_periodes` | fiches/frise-chronologique-histoire.html |  |
| ⬜ | Quiz Préhistoire | `qvgdm_prehistoire` | index › renderQVGDMPrehistoire |  |
| ⬜ | Préhistoire — Termes et définitions | `prehistoire_assoc` | index › renderPrehistoireAssoc |  |
| ⬜ | Préhistoire — Campement du Paléolithique | `prehistoire_doc` | index › renderPrehistoireDoc |  |
| ⬜ | Quiz L'Antiquité | `qvgdm_antiquite` | index › renderQVGDMAntiquite | QCM: bonne réponse en position 3 dans 9/15 questions, options non mélangées |
| ⬜ | Antiquité — Termes et définitions | `antiquite_assoc` | index › renderAntiquiteAssoc |  |
| ⬜ | Antiquité — Document historique | `antiquite_doc` | index › renderAntiquiteDoc |  |
| ⬜ | Quiz Moyen Âge | `qvgdm_moyen_age` | index › renderQVGDMMoyenAge |  |
| ⬜ | Moyen Âge — Termes et définitions | `moyen_age_assoc` | index › renderMoyenAgeAssoc |  |
| ✅ 05/10 (ac366c8) | Moyen Âge — La Peste Noire | `moyen_age_doc` | index › renderMoyenAgeDoc |  |
| ⬜ | Moyen Âge — Texte lacunaire | `moyen_age_texte_trous` | fiches/moyen_age_texte_trous.html | Saisie libre comparée strictement |
| ⬜ | Moyen Âge — Je relie (Vocabulaire) | `moyen_age_vocabulaire` | fiches/moyen_age_vocabulaire.html |  |
| ⬜ | Les Temps Modernes | `hist_temps_modernes` | index › (?) | (code à localiser) |
| ⬜ | L'Époque Contemporaine | `hist_contemporaine` | index › (?) | (code à localiser) |

### 🌍 Éveil — 🔬 Sciences — Corps humain & Santé

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Le squelette — Le schéma | `sci_sq_schema` | index › renderSciSqSchema |  |
| ⬜ | Le squelette — Le fonctionnement du mouvement | `sci_sq_texte` | index › renderSciSqTexte |  |
| ⬜ | Le squelette — QCM | `sci_sq_qcm` | index › renderSciSqQCM |  |
| ⬜ | Le squelette — Chasseur d'intrus | `sci_sq_intrus` | index › renderSciSqIntrus |  |
| ⬜ | Le squelette — Vrai ou faux ? | `sci_sq_vrai_faux` | index › renderSciSqVraiFaux |  |
| ⬜ | Appareil respiratoire — La leçon | `fiche_respiratoire` | fiches/appareil-respiratoire.html |  |
| ⬜ | Appareil respiratoire — Le schéma | `sci_resp_schema` | index › renderSciRespSchema |  |
| ⬜ | Appareil respiratoire — Trajet de l'air | `sci_resp_texte` | index › renderSciRespTexte |  |
| ⬜ | Appareil respiratoire — QCM | `sci_resp_qcm` | index › renderSciRespQCM |  |
| ⬜ | Appareil respiratoire — Termes et définitions | `sci_resp_assoc` | index › renderSciRespAssoc |  |
| ⬜ | Appareil respiratoire — Remettre de l'ordre | `sci_resp_ordre` | index › renderSciRespOrdre |  |
| ⬜ | Appareil digestif — La leçon | `fiche_digestif` | fiches/appareil-digestif.html |  |
| ⬜ | Appareil digestif — Le schéma | `sci_dig_schema` | index › renderSciDigSchema |  |
| ⬜ | Appareil digestif — Trajet des aliments | `sci_dig_texte` | index › renderSciDigTexte |  |
| ⬜ | Appareil digestif — QCM | `sci_dig_qcm` | index › renderSciDigQCM |  |
| ⬜ | Appareil digestif — Termes et définitions | `sci_dig_assoc` | index › renderSciDigAssoc |  |
| ⬜ | Appareil digestif — Remettre de l'ordre | `sci_dig_ordre` | index › renderSciDigOrdre |  |
| ⬜ | Système circulatoire — La leçon | `fiche_circulatoire` | fiches/systeme-circulatoire.html |  |
| ⬜ | Appareil circulatoire — Le cœur | `sci_coeur` | index › renderSciCoeurScreen |  |
| ⬜ | Appareil circulatoire — Le trajet du sang | `sci_trajet_sang` | index › renderSciTrajetSangScreen |  |
| ⬜ | Appareil circulatoire — QCM | `sci_circulatoire_qcm` | index › renderSciCirculatoireQCM |  |
| ⬜ | Appareil circulatoire — Termes et définitions | `sci_circulatoire_assoc` | index › renderSciCirculatoireAssoc |  |
| ⬜ | La petite circulation (Ordre) | `sci_circ_petite` | index › renderSciCircOrdrePetite |  |
| ⬜ | La grande circulation (Ordre) | `sci_circ_grande` | index › renderSciCircOrdreGrande |  |
| ⬜ | Le trajet du sang (Ordre complet) | `sci_circ_ensemble` | index › renderSciCircOrdreEnsemble |  |

### 🌍 Éveil — 🔬 Sciences — Monde vivant & Matière

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Le Soleil, la Terre et la Lune (Leçon) | `fiche_lune` | fiches/soleil-terre-lune.html |  |
| ⬜ | La classification phylogénétique (Leçon) | `fiche_classification` | fiches/classification-phylogenetique.html |  |
| ⬜ | Le système solaire | `sci_systeme_solaire` | index › (?) | (code à localiser) |
| ⬜ | Planètes — Ordre et distance | `sci_planetes_ordre` | index › (?) | (code à localiser) |
| ⬜ | Planètes — Informations & Caractéristiques | `sci_planetes_infos` | index › (?) | (code à localiser) |
| ⬜ | Système solaire — QCM | `sci_planetes_qcm` | index › renderSciPlanetesInfosScreen |  |
| ⬜ | L'anatomie de la fleur | `sci_plantes_fleur` | fiches/sci_plantes_fleur.html |  |
| ⬜ | Reproduction & Germination | `sci_plantes_germination` | fiches/sci_plantes_germination.html |  |
| ⬜ | La reproduction des plantes (Leçon) | `sci_reproduction_plantes` | fiches/reproduction_plantes.html |  |
| ⬜ | États et propriétés de la matière | `sci_matiere_etats` | fiches/sci_matiere_etats.html |  |
| ⬜ | Les changements d'état | `sci_matiere_changements` | fiches/sci_matiere_changements.html |  |
| ⬜ | Transformations physiques et chimiques | `sci_transformations_chimiques` | fiches/transformations-physiques-chimiques.html |  |
| ⬜ | Mélanges et séparations | `sci_melanges_qcm` | fiches/sci_melanges_qcm.html |  |
| ⬜ | Le cycle de l'eau (QCM) | `fiche_cycle_eau` | fiches/cycle-eau.html |  |
| ⬜ | Le cycle de l'eau (Schéma) | `sci_cycle_eau_schema` | fiches/sci_cycle_eau_schema.html |  |
| ⬜ | Les réseaux trophiques | `sci_reseaux_trophiques` | fiches/sci_reseaux_trophiques.html |  |
| ⬜ | Les énergies (Tri & conversions) | `sci_energie_tri` | fiches/sci_energie_tri.html |  |
| ⬜ | Laboratoire d'Électricité | `sci_electricite_labo` | fiches/sci_electricite_labo.html |  |
| ⬜ | Ombres & Lumière | `sci_lumiere_ombres` | fiches/sci_lumiere_ombres.html |  |
| ⬜ | Les éclipses | `sci_eclipses` | index › renderSciEclipses |  |
| ⬜ | Les engrenages | `sci_engrenages` | fiches/sci_mecanique_engrenages.html |  |
| ⬜ | Leviers et balances | `sci_mecanique_leviers` | index › renderSciMecaniqueLeviers |  |

### 🌍 Éveil — 🌍 Géographie

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Le globe terrestre 3D | `geo_globe_3d` | fiches/globe-terrestre.html |  |
| ⬜ | Les provinces de Belgique | `geo_belgique_provinces` | index › renderGeoBelgiqueScreen |  |
| ⬜ | Les cours d'eau de Belgique | `geo_belgique_hydro` | index › renderGeoHydroScreen |  |
| ⬜ | Les communes de notre région | `geo_belgique_communes` | index › renderGeoCommunesScreen |  |
| ⬜ | Régions et Communautés (Quiz) | `geo_belgique_regions_communautes` | index › renderGeoBelgiqueRegionsCommunautes |  |
| ⬜ | La Belgique — QCM | `geo_belgique_qcm` | index › renderGeoBelgiqueQCM |  |
| ⬜ | Le planisphère interactif (Quiz) | `geo_planisphere_interactif` | fiches/planisphere-interactif.html |  |
| ⬜ | Les planisphères | `geo_planispheres` | index › renderGeoPlanispheres |  |
| ⬜ | QCM — Continents et océans | `geo_continents_qcm` | index › renderGeoContinentsQCM |  |
| ⬜ | Le tour du monde | `geo_tour_monde` | index › renderGeoTourMonde |  |
| ⬜ | Les océans et continents | `geo_oceans` | index › (?) | (code à localiser) |
| ⬜ | L'Europe — Cartes interactives | `geo_europe_cartes` | fiches/europe_cartes.html |  |
| ⬜ | L'Europe — Climats et climagrammes | `geo_europe_climats` | fiches/europe_climats.html | Aucun hasard : mêmes questions, même ordre à chaque partie |
| ⬜ | L'Europe — Relief et Fleuves | `geo_europe_relief_fleuves` | fiches/europe_relief_fleuves.html |  |
| ⬜ | L'Europe — Villes, Population et Mégalopole | `geo_europe_villes_pop` | fiches/europe_villes_population.html | QCM: bonne réponse en position 2 dans 3/5 questions, options non mélangées |
| ⬜ | Les paysages : la vallée | `geo_paysages_vallee` | index › (?) | (code à localiser) |
| ⬜ | Les paysages : le littoral | `geo_paysages_littoral` | index › (?) | (code à localiser) |
| ⬜ | Les types de paysages | `geo_paysages_types` | index › (?) | (code à localiser) |
| ⬜ | Le schéma du cours d'eau | `geo_hydro_schema` | index › (?) | (code à localiser) |
| ⬜ | Vocabulaire hydrographique (Définitions) | `geo_hydro_definitions` | index › (?) | (code à localiser) |
| ⬜ | Relief et hydrographie de Belgique | `geo_hydro_belgique` | index › (?) | (code à localiser) |
| ⬜ | Les cartes et les plans | `geo_cartes` | index › (?) | (code à localiser) |

### 🌍 Éveil — 💶 Économie — Formation économique et sociale

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | La formation économique et sociale (Carnet d'investigation) | `eco_formation_economique_sociale` | fiches/formation-economique-sociale.html |  |

### 🎓 CEB — 🔬 Sciences

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | CEB Sciences 2026 | `ceb_sci_2026` | index › openCEB |  |
| ⬜ | CEB Sciences 2025 | `ceb_sci_2025` | index › openCEB |  |
| ⬜ | CEB Sciences 2024 | `ceb_sci_2024` | index › openCEB |  |
| ⬜ | CEB Sciences 2023 | `ceb_sci_2023` | index › openCEB |  |
| ⬜ | CEB Sciences 2022 | `ceb_sci_2022` | index › openCEB |  |
| ⬜ | CEB Sciences 2021 | `ceb_sci_2021` | index › openCEB |  |
| ⬜ | CEB Sciences 2019 | `ceb_sci_2019` | index › openCEB |  |
| ⬜ | CEB Sciences 2016 | `ceb_sci_2016` | index › openCEB |  |
| ⬜ | CEB Sciences 2013 | `ceb_sci_2013` | index › openCEB |  |

### 🎓 CEB — 🌍 Histoire / Géographie

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | CEB Histoire/Géo 2026 | `ceb_hg_2026` | index › openCEB |  |
| ⬜ | CEB Histoire/Géo 2025 | `ceb_hg_2025` | index › openCEB |  |
| ⬜ | CEB Histoire/Géo 2024 | `ceb_hg_2024` | index › openCEB |  |
| ⬜ | CEB Histoire/Géo 2023 | `ceb_hg_2023` | index › openCEB |  |
| ⬜ | CEB Histoire/Géo 2022 | `ceb_hg_2022` | index › openCEB |  |
| ⬜ | CEB Histoire/Géo 2021 | `ceb_hg_2021` | index › openCEB |  |
| ⬜ | CEB Histoire/Géo 2019 | `ceb_hg_2019` | index › openCEB |  |
| ⬜ | CEB Histoire/Géo 2016 | `ceb_hg_2016` | index › openCEB |  |
| ⬜ | CEB Histoire/Géo 2013 | `ceb_hg_2013` | index › openCEB |  |

### ? — (menu renderConjugaisonScreen)

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Les classes de mots | `gram_classes` | index › (?) | (code à localiser) |
| ⬜ | Les fonctions des mots | `gram_fonctions` | index › (?) | (code à localiser) |
| ⬜ | Les types et formes de phrases | `gram_types` | index › (?) | (code à localiser) |
| ⬜ | Affirmatives ou négatives ? | `gram_affirm_neg` | index › renderGramAffirmNegScreen |  |

### ? — (menu renderJeuxMenu)

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Tables de multiplication | `jeu_tables` | index › renderJeuTables |  |
| ⬜ | Memory Calcul | `jeu_memory` | index › renderJeuMemory |  |
| ⬜ | Tetris | `jeu_tetris` | index › renderJeuTetris |  |
| ⬜ | Rush Hour | `jeu_rushhour` | index › renderJeuRushHour |  |
| ⬜ | Le robot | `jeu_robot` | fiches/Labyrinthe.html |  |
| ⬜ | Mots croisés | `jeu_mots_croises` | fiches/mots-croises.html |  |
| ⬜ | Mots cachés | `jeu_mots_caches` | fiches/mots-caches.html |  |
| ⬜ | Sudoku | `jeu_sudoku` | fiches/sudoku.html |  |
| ⬜ | Flux Connecté | `jeu_flux` | index › (?) | (code à localiser) |
| ⬜ | Le Code Secret | `jeu_code_secret` | index › (?) | (code à localiser) |
| ⬜ | Le Pendu des Mots | `jeu_pendu` | index › (?) | (code à localiser) |
| ⬜ | Les Pentominos | `jeu_pentomino` | index › (?) | (code à localiser) |
| ⬜ | Le Nonogram | `jeu_nonogram` | index › (?) | (code à localiser) |
| ⬜ | 2048 | `jeu_2048` | index › (?) | (code à localiser) |
| ⬜ | Motus | `jeu_motus` | index › (?) | (code à localiser) |
| ⬜ | Le Tangram | `jeu_tangram` | index › (?) | (code à localiser) |
| ⬜ | Le Démineur | `jeu_demineur` | index › (?) | (code à localiser) |
| ⬜ | La Pipopipette | `jeu_pipopipette` | index › (?) | (code à localiser) |

### ? — (menu renderLectureNarrativeMenu)

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Récits Express | `recits_express` | index › goToRecitsExpress |  |

### ? — (menu renderSciCirculatoireMenu)

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Remettre de l'ordre | `sci_circ_ordre` | index › renderSciCircOrdre |  |

### ? — (menu validerGeoBelgiqueQCM)

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | L'Europe | `geo_europe` | index › (?) | (code à localiser) |
| ⬜ | La Belgique | `geo_belgique` | index › (?) | (code à localiser) |

### ? — (menu renderGeographieScreen)

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | L'appareil respiratoire | `sci_respiratoire` | index › (?) | (code à localiser) |
| ⬜ | L'appareil digestif | `sci_digestif` | index › (?) | (code à localiser) |
| ⬜ | L'appareil circulatoire | `sci_circulatoire` | index › (?) | (code à localiser) |
| ⬜ | Le monde végétal | `sci_plantes` | index › (?) | (code à localiser) |
| ⬜ | La matière | `sci_matiere` | index › (?) | (code à localiser) |
| ⬜ | Les mélanges | `sci_melanges` | fiches/sci_melanges_qcm.html |  |
| ⬜ | Le cycle de l'eau | `sci_cycle_eau_cat` | index › (?) | (code à localiser) |
| ⬜ | Les énergies | `sci_energie` | fiches/sci_energie_tri.html |  |
| ⬜ | L'électricité | `sci_electricite` | index › (?) | (code à localiser) |

### ? — (menu renderTraitementScreen)

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Le vocabulaire des opérations | `op_vocabulaire` | index › (?) | (code à localiser) |

### ? — (menu renderNumerationScreen)

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Les angles | `solide_angles` | index › (?) | (code à localiser) |
| ⬜ | Le cercle et le disque | `solide_disque` | index › (?) | (code à localiser) |

### 🔢 Mathématiques — 🔷 Solides & Figures — Quadrilatères & Cercle › Les quadrilatères (Menu)

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Le périmètre | `grandeur_perimetre` | index › (?) | (code à localiser) |