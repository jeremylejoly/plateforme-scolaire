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

- **Nouvelle orthographe (1990), et elle seule** :
  - pas de circonflexe sur i et u (maitre, boite, connait, gout), sauf dû, mûr, sûr, jeûne et les terminaisons verbales ;
  - -eler / -eter s'écrivent avec è (il ruissèle, il étiquète) ; seuls appeler, jeter, interpeler et leurs dérivés doublent la consonne ;
  - pour les verbes en -ayer, accepter les deux formes (paie / paye).
- **Grammaire** : on dit CDV et CIV, jamais COD ou COI.
- ⚠️ `exercices_francais.js` (≈ 180 mots) et `index.html` (≈ 215) contiennent encore des circonflexes de l'ancienne orthographe. On les corrige exercice par exercice, sans toucher aux noms de fonctions du code.

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

- **05/10 — Vocabulaire › L'Atelier des mots** (fiche + 2 copies) :
  - 38 mots étaient écrits sans accent (BONTE, FORET, CHATEAU…). Ils ont maintenant leurs accents (BONTÉ, FORÊT, CHÂTEAU…).
  - Le score enregistré était toujours de 10/10. Il compte maintenant les mots trouvés sans indice.
  - Après la réussite d'un mot, on ne peut plus retirer de lettre.
  - Définitions et exemples corrigés : rivière, cathédrale, infirmière, « écrivaine », se brosser les dents deux fois par jour.

- **05/10 — Vocabulaire › Le Défi des registres** (fiche + 2 copies) :
  - Le score était toujours de 15/15, car l'élève recommence jusqu'à trouver. Il compte maintenant les expressions classées du premier coup.
  - Cinq expressions soutenues n'étaient pas de vrais synonymes et ont été remplacées :
    - « gendarme » (un autre métier) → « agent de la force publique » ;
    - « descendant » → « progéniture » ;
    - « demeure » ne correspondait pas à « chambre » : la série devient baraque / maison / demeure ;
    - « véhicule » → « automobile » ;
    - « larmoyer » → « verser des larmes ».

- **05/10 — Vocabulaire › Chasse aux verbes ternes** (fiche + 2 copies) :
  - Le score était toujours de 10/10. Il compte maintenant les verbes trouvés du premier coup.
  - 6 phrases avaient 2 réponses possibles. Le distracteur défendable a été remplacé : provoque (un bruit), dresse (les verres), rangent (les sacs), annonce (son avis), raconte (sa faute), étudie (le karaté).
  - « Proteste sa colère » est incorrect : la réponse attendue devient « crie sa colère ».

- **05/10 — Vocabulaire › Le Chasseur d'intrus** (fiche + 2 copies) :
  - Le score était toujours de 10/10. Il compte maintenant les intrus trouvés du premier coup.
  - Séries précisées :
    - « fatigué » ne figure plus dans la série « synonymes de fatigué » (remplacé par « las ») ;
    - « savant », « hâtif » et « rivaliser » n'étaient pas de vrais synonymes : remplacés par « malin », « vif » et « se battre » ;
    - « maillot » est devenu « maillot de bain » (un maillot de corps se porte aussi en hiver) ;
    - l'explication sur les fleurs disait que la rose est une plante herbacée, ce qui est faux : corrigée ;
    - « Synonymes d'INTELLIGENT ».

- **05/10 — Vocabulaire › La Fabrique de mots** (fiche + 2 copies) :
  - Le score était toujours de 10/10. Il compte maintenant les mots assemblés du premier coup.
  - Le montage im + mang + able donnait « immangable ». Le radical est devenu « mange », et l'assemblage donne bien « immangeable ».
  - « Redivision » (mot très rare) remplacé par « imprévisible ».
  - Contrôle : préfixe + radical + suffixe donne bien le mot attendu pour les 20 mots.

- **05/10 — Vocabulaire › Relations lexicales** (fiche + 2 copies) :
  - La bonne réponse était toujours la 1re proposition, dans les 30 questions de la version en ligne. Les propositions sont maintenant mélangées équitablement.
  - Un double clic ne compte plus deux points.
  - Synonymes : 5 questions avaient une 2e réponse correcte (« raide », « recherche », « joli », « gentillesse », « frousse »). Ces propositions ont été remplacées par des réponses clairement fausses.
  - « Le vert, couleur primaire » : erreur corrigée.

- **05/10 — Conjugaison › Un peu de tout › Tableau des 3 temps** :
  - Le résultat n'était jamais enregistré, ni dans les résultats ni dans le plan de travail. C'est corrigé (`conj_tableau_3_temps`).
  - ⚠️ 15 autres fiches de conjugaison n'enregistrent pas non plus de résultat : seules cond_pqpf, passe_simple et subj_imp le font. À corriger au fil des fiches.
  - Faute corrigée : « navigaient » devient « naviguaient ».
  - Copernic n'a pas « démontré », il a « affirmé ».
  - « La Belgique faisait partie de l'Empire romain » devient « notre région ».
  - Le mélange est maintenant équitable.

- **05/10 — Conjugaison › Un peu de tout › Tableau des 3 temps simples** :
  - Le résultat n'était jamais enregistré. Il l'est maintenant sous `conj_trois_temps_simples`.
  - Mêmes erreurs que dans le Tableau des 3 temps, corrigées de la même façon : « navigaient », Copernic qui « démontrait », « la Belgique » dans l'Empire romain.
  - Le mélange est maintenant équitable.

- **05/10 — Conjugaison › Un peu de tout › Repère le bon verbe** :
  - Le résultat n'était jamais enregistré. Il l'est maintenant (`conj_repere_verbe`).
  - La réponse attendue était mal orthographiée : « navigaient » au lieu de « naviguaient ».
  - Un distracteur contenait une faute de frappe : « débodaient ».
  - Corrections de faits :
    - Jules César n'a jamais régné sur l'Empire ;
    - Galilée n'a pas « démontré » l'héliocentrisme ;
    - le bambou ne pousse pas d'un mètre par jour « en moyenne » ;
    - l'eau ne bout pas « plus rapidement » en altitude.
  - Le mélange est maintenant équitable.

- **05/10 — Conjugaison › Indicatif présent › Entraînement QCM** (QCM du site + fiche du plan de travail) :
  - 3 questions avaient 2 bonnes réponses, mais une seule était acceptée :
    - « tu payes » et « tu paies » sont tous les deux corrects : le distracteur devient « paye » ;
    - « elle balaye » et « elle balaie » aussi : le distracteur devient « balais » ;
    - « ruisselle » et « ruissèle » (nouvelle orthographe) aussi : la question est remplacée par « Elles appellent leur chat ».
  - La fiche du plan de travail n'enregistrait jamais le résultat. C'est corrigé (`conj_present_qcm`).
  - Dans la fiche, les points de progression étaient toujours verts. Le mélange y est maintenant équitable.
  - Les cartes affichaient « 50 questions questions » : corrigé en « 52 questions » (présent, imparfait) et « 50 questions » (futur).
  - ⚠️ À voir dans Phrases à trous : seule la réponse « balaie » est acceptée, alors que « balaye » est juste aussi (verbes en -ayer).

- **05/10 — Nouvelle orthographe** : les fiches vérifiées aujourd'hui ont été mises en NO :
  - maitre, entrainement, apparait, ile, abime, dégout, gouter, chaine, flute, boite, connaitras…
  - fiches concernées : Atelier des mots, Expressions et proverbes, Registres, Chasseur d'intrus, Fabrique de mots, Relations lexicales, Repère le bon verbe (3 copies chaque fois).

- **05/10 — Conjugaison › Indicatif présent › Phrases à trous** (site, 6 niveaux, et fiche du plan de travail) :
  - Les verbes en -ayer n'acceptaient qu'une seule forme. « Paye », « balaye », « essaye »… sont maintenant acceptés, et la correction affiche « paie (ou paye) ».
  - Le moteur est commun : la correction vaut aussi pour le futur (je paierai / payerai) et les autres temps.
  - Les 634 phrases sont conformes à la nouvelle orthographe : aucun circonflexe sur i/u, et -eler/-eter s'écrivent avec è.
  - La fiche du plan de travail n'enregistrait jamais le résultat. C'est corrigé (`conj_present_ecriture`, avec le niveau).
  - Le mélange est maintenant équitable.

- **05/10 — Conjugaison › Indicatif présent › Évaluation** :
  - La règle « une seule tentative » ne fonctionnait pas : l'élève pouvait refaire l'évaluation à l'infini. Le site vérifiait une marque sur l'appareil, mais cette marque n'était jamais écrite.
  - Le site regarde maintenant l'appareil et aussi les résultats déjà enregistrés en ligne. L'évaluation est donc bloquée même sur un autre appareil. L'enseignant peut toujours l'ouvrir.
  - Le moteur est commun : la correction vaut aussi pour les évaluations du futur, de l'imparfait et du passé composé.
  - Le contenu a été vérifié : 5 QCM et 5 phrases à trous, justes et en nouvelle orthographe. Les propositions et l'ordre des questions sont mélangés.

- **05/10 — Conjugaison › Indicatif imparfait › Entraînement QCM** (QCM du site + fiche du plan de travail) :
  - Les 52 questions ont été relues. Toutes les bonnes réponses sont justes.
  - Phrases bizarres réécrites :
    - « Nous appuyions nos amis » → « Nous appuyions sur le bouton… » ;
    - « Il rejetait ses clés par la fenêtre » → « Le gardien rejetait le ballon… » ;
    - « Nous criions nos amis » → « nous criions de joie… » ;
    - « Vous vous fiiez de vos parents » → « à vos parents » ;
    - « Nous craignions l'orage arriver » → « nous craignions les orages » ;
    - « nous lancions dans la rivière » → « nous lancions des cailloux dans la rivière ».
  - Certains pièges étaient eux aussi corrects dans la phrase : « Tu écrivis une lettre », « Elle recevrait un colis », « Nous voyons très bien »… Ces phrases ont reçu un repère d'habitude passée (autrefois, à cette époque, l'an dernier, chaque semaine…), pour que seul l'imparfait convienne.
  - Nouvelle orthographe : « diner » au lieu de « dîner ».
  - La fiche du plan de travail n'enregistrait jamais le résultat. C'est corrigé (`conj_imparfait_qcm`). Son mélange est maintenant équitable, et elle a les mêmes phrases corrigées.
- **05/10 — Nouvelle orthographe dans tout exercices_francais.js** : 178 accents circonflexes retirés sur i/u. Exemples : maitre, maitresse, fraiche, plait, coute, parait, connait, reconnaitre, entrainement, diner, boite, ile, gout, bruler, abimer…
  - Les exceptions sont conservées : sûr, dû, mûr.
  - Les noms de fonctions du code n'ont pas été touchés.
  - Les exercices concernés sont surtout les dialogues, les textes, les CC et le QCM du futur.
- **05/10 — Grammaire › Le verbe › Trouver l'infinitif** (repéré en passant) : la phrase « Nous lisons un livre intéressant » était classée à l'imparfait avec le verbe « lisions », absent de la phrase. Elle est corrigée en « Nous lisions… ».

- **05/10 — Conjugaison › Indicatif imparfait › Phrases à trous** (site + fiche du plan de travail, 50 phrases) :
  - Toutes les réponses attendues sont justes et en nouvelle orthographe.
  - Phrases corrigées :
    - « Ils lançaient leurs adversaires » → « Ils lançaient le ballon très loin » ;
    - « J'amenais mes affaires » → « J'amenais mon petit frère à l'école » (on amène une personne, on apporte une chose) ;
    - « Nous criions nos amis » → « Nous criions de joie à chaque but » ;
    - « Tu étais très timide quand tu étais petit » → « … à l'école maternelle » (la phrase donnait la réponse).
  - « Se fier » : la phrase est maintenant « Vous vous … entièrement à votre professeur » et l'élève tape « fiiez ». Avant, il fallait deviner qu'il fallait écrire « vous fiiez », et la préposition « de » était fausse.
  - La fiche du plan de travail n'enregistrait jamais le résultat. C'est corrigé (`conj_imparfait_ecriture`). Son mélange est maintenant équitable, et elle tolère les espaces doubles et les apostrophes courbes.

- **05/10 — Conjugaison › Indicatif imparfait › Évaluation** (5 QCM + 5 phrases à trous) :
  - « Une seule tentative » est maintenant réellement appliquée, grâce à la correction du 05/10 sur le moteur commun.
  - Dans deux QCM, un piège était aussi correct : « Tu courrais très vite » (conditionnel) et « Nous avons un grand jardin » (présent). On a ajouté « À cette époque, » pour que seul l'imparfait convienne.
  - « Tu … très timide quand tu étais petit » donnait la réponse. La phrase devient « … à l'école maternelle ».
  - Les autres réponses sont justes et en nouvelle orthographe. Les propositions et l'ordre des questions sont mélangés.

- **05/10 — Conjugaison › Futur simple › Entraînement QCM** (50 questions, pas de fiche au plan de travail) :
  - Toutes les bonnes réponses sont justes et en nouvelle orthographe (appellerez, jetteront, achèterai, naitra…).
  - « je irai » et « je achèterai » s'affichaient sans élision. C'est corrigé en « j'… ».
  - Dans environ 20 phrases, le piège au conditionnel était aussi correct : « Il viendrait nous aider demain », « Elle voudrait un cadeau »… Ces phrases commencent maintenant par « Si + présent » (« S'il a le temps, il … »), qui impose le futur.
  - Phrases réécrites :
    - « Je haïrai attendre » → « Si tu me trahis, je te haïrai ! » ;
    - « Tu naitras sous une bonne étoile » (on ne nait qu'une fois…) → « Le bébé naitra au printemps prochain ».

- **05/10 — Conjugaison › Futur simple › Phrases à trous** (50 phrases) :
  - Toutes les réponses attendues sont justes et en nouvelle orthographe :
    - ruissèlera, jetteras, appellera ;
    - emploiera, ennuiera, essuierez (i obligatoire pour -oyer/-uyer).
  - « je enverrai » s'affichait sans élision. C'est corrigé en « j'… ».
  - « Le soleil … sur la montagne » attendait « se lèvera » sans le dire. Le « se » est maintenant écrit avant le trou, et l'élève tape « lèvera ».
  - Moteur commun à tous les temps :
    - quand un pronom est déjà écrit avant le trou, l'élève peut aussi le recopier sans être compté faux ;
    - les apostrophes courbes (’) sont acceptées.

- **05/10 — Conjugaison › Futur simple › Évaluation** (5 QCM + 5 phrases à trous) :
  - « Une seule tentative » est maintenant réellement appliquée, grâce à la correction du moteur commun.
  - « Demain, je … (aller) » s'affichait sans élision. C'est corrigé en « j'… ».
  - Dans trois QCM, le piège au conditionnel était aussi correct : irais, pourraient, voudrait. On a ajouté « Si + présent » en début de phrase, comme dans l'entrainement.
  - Les autres réponses sont justes et en nouvelle orthographe. Les propositions et l'ordre des questions sont mélangés.

- **05/10 — Conjugaison › Passé composé › 1. Passé composé ou pas ?** (100 phrases, 10 tirées au hasard) :
  - Le résultat n'était jamais enregistré. La fiche envoyait un message que le site n'écoute pas. Elle appelle maintenant `saveResult` (`vocabulaire_pc_identifier`, le même identifiant que le plan de travail).
  - Le même défaut touche les 8 autres fiches du passé composé (2 à 9). Il sera corrigé au fur et à mesure.
  - Les 100 phrases sont justes et les explications cohérentes. L'ordre est mélangé à chaque partie (Fisher–Yates), donc il n'y a pas de schéma oui/non fixe.
  - Nouvelle orthographe : maitresse, gouter, entrainement.

- **05/10 — Conjugaison › Passé composé › 2. Participe avec Avoir (QCM)** (40 questions) :
  - La bonne réponse était en A dans 30 questions sur 40, car les propositions n'étaient pas mélangées. C'est corrigé : sur 3 000 tirages, la bonne réponse tombe environ un tiers des fois sur chaque position.
  - Le résultat n'était jamais enregistré (même défaut que la fiche 1). C'est corrigé (`vocabulaire_pc_avoir_qcm`).
  - « Verbe : grandi » est devenu « grandir », et l'explication a été corrigée.
  - « la clé à double tour » est devenu « la clé dans la serrure ».
  - Les mots en gras des explications (**s**, **t**, **-é**) s'affichaient mal. C'est corrigé.
  - Nouvelle orthographe : diner, maitrises, entraine-toi. « dû » garde son accent.
  - Les copies fiches/ et public/fiches/ sont maintenant identiques.

- **05/10 — Conjugaison › Passé composé › 3. Participe avec Avoir (Écriture)** (30 phrases) :
  - Les 30 réponses attendues sont justes (as dû garde son accent).
  - Le résultat n'était jamais enregistré. C'est corrigé (`vocabulaire_pc_avoir_trous`).
  - Réponses justes qui étaient refusées :
    - un élève qui recopiait le sujet (« j'ai mangé », « tu as fini ») ;
    - une apostrophe courbe (’).
    Les deux sont maintenant acceptés.
  - Affichage : « J' [?] » s'écrit maintenant « J'[?] », sans espace.
  - Les mots en gras des explications s'affichent correctement.
  - Nouvelle orthographe : entrainer.

- **05/10 — Conjugaison › Passé composé › 4. Participe avec Être (QCM)** (40 questions) :
  - Les propositions n'étaient pas mélangées : la bonne réponse était le plus souvent la A. Elles sont maintenant mélangées au hasard à chaque question.
  - Le résultat n'était jamais enregistré. C'est corrigé (`vocabulaire_pc_etre_qcm`).
  - Cinq phrases n'étaient pas au passé composé : c'étaient des formes passives ou des participes adjectifs. Leurs verbes se conjuguent avec *avoir* au passé composé.
    - Ces phrases étaient : la tarte est cuite, la bouteille est cassée, les clés sont retrouvées, la vitre est brisée, les jouets sont rangés.
    - Elles sont remplacées par de vrais verbes avec être : sortie, montée, revenues, née, restés.
  - Les mots en gras des explications s'affichent correctement.
  - Nouvelle orthographe : entrainement, boite, maitrisé.

- **05/10 — Conjugaison › Passé composé › 5. Participe avec Être (Écriture)** (30 phrases) :
  - Le résultat n'était jamais enregistré. C'est corrigé (`vocabulaire_pc_etre_trous`).
  - Trois phrases n'étaient pas au passé composé : c'étaient des formes passives.
    - « La tarte est cuite » est remplacée par « La tarte est sortie du four ».
    - « Les clés sont retrouvées » est remplacée par « Les hirondelles sont revenues ».
    - « La bouteille est cassée » devient le pronominal « La bouteille s'est cassée ».
  - Réponses justes qui étaient refusées, maintenant acceptées :
    - l'élève qui recopie le pronom ou le sujet déjà écrit (« se sont promenés », « nous sommes venues ») ;
    - l'apostrophe courbe (’).
  - Affichage :
    - « s'[?] » s'affiche sans espace après l'apostrophe ;
    - le gras des explications s'affiche correctement.
  - Les 27 autres réponses sont justes. « mûres » garde son accent (exception de la nouvelle orthographe).

- **05/10 — Conjugaison › Passé composé › 6. Accords avec Avoir (QCM)** (40 questions) :
  - La bonne réponse était **toujours la A** (40/40). Les propositions sont maintenant mélangées : sur 3 000 tirages, environ un tiers tombe sur chaque lettre.
  - L'indice « CDV : les pommes…, placé avant » s'affichait sous la phrase et donnait la réponse. Or l'élève doit justement repérer le CDV. L'indice apparait maintenant dans la correction.
  - Le résultat n'était jamais enregistré. C'est corrigé (`vocabulaire_pc_avoir_accord_qcm`).
  - Phrases incohérentes corrigées :
    - « la leçon difficile… était pourtant simple » ;
    - « les superbes photos… sont floues » ;
    - « les clés que tu as perdues sont sur le meuble ».
  - « réparer des fiches » est devenu « préparer des fiches ».
  - Le gras des explications s'affiche correctement.
  - Nouvelle orthographe : fraiche, maitrisé.

- **05/10 — Conjugaison › Passé composé › 7. Accords avec Avoir (Écriture)** (30 phrases) :
  - Comme dans la fiche 6, l'indice « CDV : …, placé avant/après » donnait la réponse. Il apparait maintenant dans la correction ; Jeremy a validé ce choix.
  - Le résultat n'était jamais enregistré. C'est corrigé (`vocabulaire_pc_avoir_accord_trous`).
  - Phrases incohérentes corrigées :
    - « la règle difficile… en fait aisée » ;
    - « les clés perdues que tu as perdues sont sur ton lit » ;
    - « les valises lourdes… sont lourdes ».
  - Réponses justes qui étaient refusées, maintenant acceptées :
    - le sujet recopié : « j'ai mangées », « elles ont chantées » ;
    - l'apostrophe courbe (’).
  - Affichage : « J'[?] » s'affiche sans espace.
  - Les 30 réponses sont justes. Nouvelle orthographe : entrainantes, fraiche ; mûres reste.

- **05/10 — Conjugaison › Passé composé › 8. Bilan Avoir & Être (QCM)** (50 questions) :
  - La bonne réponse était **toujours la A** (50/50). Les propositions sont maintenant mélangées.
  - L'indice « Auxiliaire : … · Règle : CDV avant (…) » donnait la réponse. Il s'affiche maintenant dans la correction.
  - Le résultat n'était jamais enregistré. C'est corrigé (`vocabulaire_pc_mix_qcm`).
  - Phrases corrigées :
    - « La montre a été retrouvée », au passif, devient « La petite chatte s'est cachée sous le lit ».
    - « les clés qu'elle a perdues sont sur la commode » devient « … étaient dans son sac ».
  - Nouvelle orthographe : muri, murir, fraiche, maitre.
- **05/10 — NO, correction d'une erreur de ma part** : surement, murement et murir perdent l'accent en nouvelle orthographe. Seuls les adjectifs dû, mûr, sûr et le mot jeûne le gardent.
  - Les formes à corriger étaient dans exercices_francais.js (dialogue alimentation, futur QCM et phrases à trous, évaluation), dans les fiches Adverbes et Germination et dans un mot des antonymes. Elles sont corrigées.

- **05/10 — Conjugaison › Passé composé › 9. Bilan Avoir & Être (Texte)** (5 histoires de 10 verbes) :
  - Les 50 réponses et leurs explications sont justes.
  - Le résultat n'était jamais enregistré. C'est corrigé : un résultat par histoire, `vocabulaire_pc_mix_texte_1` à `_5`, que le plan de travail reconnait.
  - La fiche s'ouvrait toujours sur l'histoire 1. Elle s'ouvre maintenant sur une histoire au hasard, et l'élève peut toujours choisir dans la liste.
  - Phrases corrigées :
    - « La souris qu'il a attrapée hier s'était déjà échappée » était illogique. Elle est réécrite.
    - « classe verte à la mer » devient « classe de mer ».
  - Le gras des explications s'affiche correctement, et l'apostrophe courbe est acceptée.
  - Nouvelle orthographe : maitresse, fraiche.
  - **Toute la rubrique Passé composé (fiches 1 à 9) est vérifiée.** Plus aucune fiche n'utilise l'ancien envoi `fiche_result`, que le site ne recevait pas.

- **05/10 — Conjugaison › Conditionnel & Plus-que-parfait** (30 questions : 15 au conditionnel, 15 au plus-que-parfait ; 5 + 5 tirées par partie) :
  - Les accents n'étaient pas vérifiés : « etaient tombees » ou « ecrits » étaient comptés justes. Ils comptent maintenant.
  - Bonnes réponses qui étaient refusées, maintenant acceptées :
    - le pronom recopié (« j'aurais », « nous finirions », « il avait écrits ») ;
    - l'apostrophe courbe (’).
  - Terminologie : « complément d'objet direct » devient « CDV ». La coquille « with » devient « avec ».
  - Concordance des temps : « étaient sorties dès que la pluie s'est calmée » devient « … s'était calmée ».
  - Affichage : « j'[ ] » et « m'[ ] » s'affichent sans espace après l'apostrophe.
  - Nouvelle orthographe : gouter, maitrises, maitrise.
  - Le résultat était déjà enregistré (`conj_cond_pqpf`). Le mélange se fait déjà selon la méthode Fisher–Yates. Les 30 réponses sont justes.
  - Les 3 copies de la fiche ont été corrigées : fiches/, public/fiches/ et la racine.

- **05/10 — Conjugaison › Subjonctif & Impératif** (30 questions : 15 au subjonctif, 15 à l'impératif ; 5 + 5 tirées par partie) :
  - Les accents n'étaient pas vérifiés. Ils comptent maintenant.
  - Réponses acceptées en plus :
    - le pronom recopié (« tu sois », « elle ait », « j'aille ») ;
    - l'apostrophe courbe ;
    - les espaces ou les tirets typographiques dans « vas-y », « manges-en ».
  - Phrases corrigées :
    - « Il exige que je aille » devient « que j'aille » (élision).
    - « Il faut que tu doives faire tes devoirs » (pléonasme) devient « Je ne crois pas que tu doives partir si tôt ».
    - « Il est nécessaire qu'ils veuillent apprendre » devient « Je doute qu'ils veuillent venir avec nous ».
    - « Il se peut que nous puissions » devient « Je ne suis pas certain que nous puissions ».
  - Affichage : « j'[ ] » s'affiche sans espace.
  - Nouvelle orthographe : entrainer, maitrises, maitrise.
  - Le résultat était déjà enregistré (`conj_subj_imp`). Les 30 réponses sont justes. Les 3 copies de la fiche sont corrigées.

- **05/10 — Conjugaison › Le passé simple (Lecture)** (30 questions ; 3 par catégorie + 1 tirée au hasard par partie) :
  - La copie réellement affichée (fiches/) ne mélangeait pas les propositions des QCM. La bonne réponse était toujours en 1re ou en 2e position, jamais en 3e ni en 4e. Les propositions sont maintenant mélangées. Les copies public/ et racine les mélangeaient déjà.
  - Les accents n'étaient pas vérifiés dans les réponses tapées. Ils comptent maintenant.
  - Réponses tapées précédées du pronom sujet (« il commence », « ils mettent ») : elles sont maintenant acceptées.
  - Les 30 réponses et leurs explications sont justes.
  - Le résultat était déjà enregistré (`conj_passe_simple`).
  - Nouvelle orthographe : reconnaitre, entraine-toi.

- **05/10 — Grammaire › Le nom › Identifier les noms** (50 phrases, 10 par partie) :
  - Le résultat était enregistré sous `gram_nom`. Or le plan de travail cherche `gram_nom_identifier` : l'exercice n'y était jamais coché. L'identifiant enregistré est maintenant `gram_nom_identifier`. L'élément « Le nom » (thème entier) le reconnait toujours.
  - Le mélange des phrases utilisait le tri aléatoire biaisé. Il utilise maintenant la méthode Fisher–Yates.
  - Données :
    - « Chaque soir, maman raconte… » : « maman » employé sans déterminant pouvait passer pour un nom propre. La phrase devient « ma maman ».
    - « l'Egypte » devient « l'Égypte » (accent sur la majuscule).
  - Les 50 phrases ont été relues : tous les noms communs et propres sont bien marqués.
  - Nouvelle orthographe : entrainer, maitrise, entraine-toi (menu et résultats du nom).

- **05/10 — Grammaire › Le nom › Est-ce un nom ?** (banque de mots isolés, 20 par partie) :
  - La refonte du 29/09 était toujours en place : tirage Fisher–Yates, 10 noms et 10 autres mots, correction après chaque mot, récapitulatif des erreurs, résultat enregistré (`gram_nom_reconnaître`).
  - J'ai retiré 8 mots qui étaient comptés « pas un nom », alors qu'ils sont aussi des noms courants. Il reste 267 mots.
    - **sous** (des sous) ;
    - **vers** (un vers, des vers de terre) ;
    - **ensemble** (un ensemble) ;
    - **rien** (un rien) ;
    - **minuscule** (une minuscule) ;
    - **curieux**, **timide**, **peureux** (les curieux, un timide, un peureux).
  - J'ai vérifié 2 000 tirages : toujours 20 mots différents, dont exactement 10 noms.
  - Nouvelle orthographe : entrainer, entraine-toi, « Reconnaitre un nom » dans le titre affiché. L'identifiant technique ne change pas.

- **05/10 — Grammaire › Le déterminant › Reconnaitre les déterminants** (50 phrases, 10 par partie) :
  - Le résultat était enregistré sous `gram_determinant`, que le plan de travail ne reconnait pas : l'exercice n'y était jamais coché. Il est maintenant enregistré sous `gram_determinant_reconnaitre`.
  - Le mélange utilisait le tri aléatoire biaisé. Il utilise maintenant la méthode Fisher–Yates.
  - Les 50 phrases ont été relues : tous les déterminants sont bien marqués, y compris les numéraux, « chaque », « quelques », « certains », « plusieurs » et l'exclamatif « quel ».
  - Nouvelle orthographe : maitrise, entrainer, entraine-toi, « Reconnaitre » dans le libellé du plan de travail.

- **05/10 — Grammaire › L'adjectif › Identifier les adjectifs** (50 phrases, 10 par partie) :
  - Les 50 phrases ont été relues. Tous les adjectifs sont bien marqués, y compris les attributs (« est moelleux et savoureux ») et les participes employés comme adjectifs (mouillée, abandonnée, fatigués, ouvert). Les participes des formes verbales restent des verbes (est tombée, est servie).
  - Le résultat était déjà enregistré sous le bon identifiant (`gram_adjectif_identifier`).
  - Le mélange utilisait le tri aléatoire biaisé. Il utilise maintenant la méthode Fisher–Yates.
  - Nouvelle orthographe : maitrise, entrainer, entraine-toi.

- **05/10 — Grammaire › Le déterminant › Le tri des déterminants** (100 phrases, 10 par partie, 4 catégories : article, possessif, démonstratif, autre) :
  - Les 100 classements et leurs explications sont justes, y compris les partitifs, les contractés (au, aux), les numéraux, les indéfinis (tout, nul, certains), les interrogatifs et les exclamatifs.
  - « La plante a besoin **de l'**eau » : ici, « de » est une préposition (avoir besoin de), donc ce n'est pas un article partitif. La phrase devient « Le jardinier verse **de l'**eau sur les plantes ».
  - Une coquille dans l'explication de « quelques » est corrigée (« un petit nom de quantité » devient « une petite quantité »).
  - Le résultat était déjà enregistré sous le bon identifiant (`gram_determinant_tri`).
  - Le mélange utilisait le tri aléatoire biaisé. Il utilise maintenant la méthode Fisher–Yates.
  - Les 4 boutons gardent un ordre fixe, ce qui est normal pour un classement.
  - Nouvelle orthographe : entrainer, maitriser.

- **05/10 — Grammaire › L'adjectif › Accords de l'adjectif** (40 phrases, 10 par partie, saisie libre) :
  - Les 40 réponses attendues et leurs explications sont justes : neuve, creuses, fraiches, vieille, nouvelles, longue, fausse, sèche(s), blanche, douce(s), belle, grosse… « mûres » garde son accent.
  - Une coquille est corrigée dans une explication (« on s'accorde » devient « on accorde »).
  - Mécanique :
    - La comparaison est maintenant tolérante aux espaces en trop et aux variantes Unicode des accents. Les accents comptent toujours.
    - Une réponse contenant un guillemet ne casse plus l'affichage.
    - Le mélange utilise maintenant la méthode Fisher–Yates.
  - Le résultat était déjà enregistré sous le bon identifiant (`gram_adjectif_accord`).
  - Nouvelle orthographe : entraine-toi.

- **05/10 — Grammaire › L'adjectif › Épithète ou attribut ?** (10 phrases par partie) :
  - **L'écran de fin affichait du code** au lieu du score : « ${congratsTitle} », « ${score} sur ${total} ». Une barre oblique en trop empêchait le remplacement. C'est corrigé.
  - La banque ne comptait que 15 phrases, et aucune n'utilisait le verbe « être », pourtant le cas le plus courant. Chaque partie en tirant 10, les élèves revoyaient vite les mêmes. La banque passe à 30 phrases (14 épithètes, 16 attributs avec être, devenir et rester).
  - Le cas « Les spectateurs, ravis, applaudissent » (épithète détachée entre virgules) était trop subtil. Il est remplacé par la même phrase sans virgules.
  - Le mélange utilise maintenant la méthode Fisher–Yates.
  - Nouvelle orthographe : entrainement, maitrises.
  - Le résultat était déjà enregistré (`gram_adjectif_fonction`).

- **05/10 — Grammaire › L'adjectif › Retrouver le nom qualifié** (10 phrases par partie) :
  - Dans les 25 phrases, le nom qualifié était toujours **juste à côté** de l'adjectif. Il suffisait de cliquer sur le mot voisin, sans réfléchir à l'accord.
  - 15 phrases plus exigeantes ont été ajoutées (banque : 40 phrases).
    - L'adjectif est attribut, relié au nom par être, sembler, paraitre, rester ou devenir.
    - Un complément du nom sert de piège : « Le chat de ma voisine est **noir** », « Une odeur de pain **chaud** ».
    - L'accord permet de trancher. L'explication le montre (« pour voisine, on écrirait noire »).
  - « L'histoire » formait un seul mot cliquable. L'article et le nom sont maintenant séparés.
  - Le mélange utilise maintenant la méthode Fisher–Yates.
  - Nouvelle orthographe : entrainement, maitrise.
  - Le résultat était déjà enregistré (`gram_adjectif_nom`).
  - **Toute la rubrique L'adjectif est vérifiée.**

- **05/10 — Grammaire › Le verbe › Identifier les verbes** (50 phrases, 10 par partie ; verbes conjugués et infinitifs) :
  - Le résultat était enregistré sous `gram_verbe`, que le plan de travail (`gram_verbe_identifier`) ne reconnaissait pas. C'est corrigé.
  - **Trois phrases comptaient un participe passé comme infinitif** (« après avoir **fini** », « pour avoir **sauvé** », « être **invité** »). L'élève devait donc marquer « fini » comme infinitif pour réussir. Ces phrases sont réécrites sans infinitif passé :
    - « quand tu auras rangé ta chambre » ;
    - « parce qu'il a sauvé le petit chat » ;
    - « espère recevoir une invitation ».
  - « parler espagnol » : « espagnol » était classé adjectif. Il est maintenant classé nom.
  - Les autres phrases ont été relues : verbes conjugués (formes composées et passives comprises) et infinitifs corrects.
  - Le mélange utilise maintenant la méthode Fisher–Yates.
  - Nouvelle orthographe : maitrise, entrainer, entraine-toi.

- **05/10 — Grammaire › Classes de mots › Le verbe › 2. Infinitif et groupes** (= exercice `gram_verbe_groupe`, 50 phrases, 10 par partie) :
  - Dans « Classes de mots › Le verbe », la carte 2 était **grisée** (« Bientôt disponible ! »), alors que l'exercice existait déjà dans « Fonctions › Le verbe ». Elle ouvre maintenant ce même exercice. Le verrouillage par l'enseignant fonctionne aussi sur cette carte.
  - Les 50 phrases ont été relues : chaque verbe a le bon infinitif et le bon groupe. Aller est classé au 3e groupe.
  - Le résultat était déjà enregistré (`gram_verbe_groupe`).
  - Le mélange utilise maintenant la méthode Fisher–Yates.
  - Nouvelle orthographe : maitrise, entrainer, entraine-toi.

- **05/10 — Grammaire › Le pronom › Déterminant ou pronom ?** (36 phrases : 18 déterminants, 18 pronoms ; 10 par partie) :
  - **Faute de français dans une phrase** : « Chaque élève range **leur** matériel » (il faudrait « son »). Elle devient « Les élèves rangent **leur** matériel de dessin ».
  - L'explication de « sur **l'**immense piste » disait que « l' » accompagne l'adjectif. Elle dit maintenant qu'il accompagne le nom « piste », l'adjectif étant placé entre les deux.
  - « Elle **la** lave car elle était très sale » était ambigu : on ne savait pas ce que « la » remplace. La phrase devient « Sa voiture était très sale : elle **la** lave ».
  - Le rappel de fin disait qu'« un pronom est placé devant un verbe », ce qui est trop absolu. Il devient : « un déterminant accompagne un nom ; un pronom remplace un nom et se trouve souvent devant le verbe ».
  - Le mélange utilise maintenant la méthode Fisher–Yates.
  - Nouvelle orthographe : maitre, entrainer.
  - Le résultat était déjà enregistré (`gram_pronom_piege`).

- **05/10 — Grammaire › Le pronom › Le détecteur de référents** (24 phrases, 10 par partie ; cliquer sur le groupe que remplace le pronom) :
  - **Le résultat n'était jamais enregistré.** C'est corrigé (`gram_pronom_referents`).
  - **Réponses justes refusées.** Seule la sélection exacte du groupe entier était acceptée : pour « les », il fallait cliquer « de magnifiques fleurs ». Cliquer « fleurs » ou « magnifiques fleurs » était compté faux. Maintenant, toute sélection qui contient le nom noyau et ne déborde pas du groupe est acceptée. C'est valable aussi pour « Lucas » sans « à », et pour « Léa et moi » (« Léa » et « moi » sont alors obligatoires).
  - **Élève bloqué.** En cas d'erreur, l'élève devait recommencer sans fin, sans jamais voir la réponse. Après 2 essais ratés, la réponse et l'explication s'affichent maintenant. Le point reste réservé à la réussite du premier coup.
  - Les 24 phrases et leurs explications ont été relues : les référents sont justes.
  - Nouvelle orthographe : maitre, entrainer, maitriser. « sûr » reste.
  - Les 3 copies de la fiche sont identiques.

- **05/10 — Grammaire › Le pronom › Le remplaçant** (35 phrases, 10 par partie ; placer le, la, les, lui, leur, y, en devant le verbe) :
  - **Faute de français dans 3 phrases** : la réponse attendue était « la y » (« Le garçon **la y** jette »). L'élision donne « l'y », et ce mot n'existe pas dans les choix. Les phrases sont passées au pluriel (« les pierres », « les voitures », « les tartes »), et la réponse devient **les y**.
  - « Elle pose **une question** à la maitresse » demandait « Elle lui en pose ». C'est incorrect : il faudrait « lui en pose **une** ». La phrase devient « Elle pose **des questions** à la maitresse » → « Elle lui en pose ».
  - **Le résultat n'était jamais enregistré.** C'est corrigé (`gram_pronom_remplacant`).
  - **L'élève pouvait rester bloqué** : il devait réessayer sans fin, sans jamais voir la réponse. Après 2 essais ratés, la réponse et l'explication s'affichent maintenant. Le point reste réservé à la réussite du premier coup.
  - Les autres phrases ont été relues : ordre des pronoms (le lui, les leur, leur en, les y) et négations corrects.
  - Nouvelle orthographe : fraiche, maitresse, maitrises, entrainer.
  - Les 3 copies de la fiche sont identiques.

- **05/10 — Grammaire › Le pronom › La chasse aux répétitions** (12 textes, 6 par partie, 3 répétitions par texte à remplacer par un pronom relatif, possessif ou démonstratif) :
  - **Le résultat n'était jamais enregistré.** C'est corrigé (`gram_pronom_repetitions`).
  - **Score trop sévère.** Un texte ne rapportait 1 point que si les 3 remplacements étaient justes du premier coup (score sur 6). Maintenant, chaque remplacement juste du premier coup rapporte 1 point, soit un score sur 18.
  - **Élève bloqué.** Après 2 essais ratés, la réponse et l'explication s'affichent maintenant.
  - Terminologie : « pronom relatif COD » devient « CDV » (4 explications).
  - « élèves de CM2 » (terme français) devient « élèves de 6e primaire ».
  - Les 36 remplacements ont été relus et sont justes (qui, que, dont, où ; le mien, la sienne, les leurs… ; celui-ci, celles-là…).
  - Nouvelle orthographe : maitresse, fraiche, boite. « mûrs » reste.
  - **Toute la rubrique Le pronom est vérifiée.**

- **05/10 — Grammaire › L'adverbe › Reconnaitre les adverbes** (niveau 1 : 30 phrases, 10 par partie ; niveau 2 : 15 petits textes, 5 par partie) :
  - **Le résultat n'était jamais enregistré.** Il est maintenant enregistré par niveau (`gram_adverbe_reconnaitre_n1` / `_n2`), et le plan de travail le reconnait.
  - La fiche **vouvoyait** l'élève (« Sélectionnez », « Vous avez oublié », « Entraînez-vous »), contrairement au reste du site. Elle le tutoie maintenant.
  - « la tempête s'est calmée **bientôt** » était maladroit. La phrase devient « … s'est calmée **rapidement** ».
  - « des salades » : « des » était classé préposition. Il est maintenant classé déterminant (visible seulement dans la correction).
  - Les 45 phrases et textes ont été relus. Tous les adverbes sont bien marqués, y compris ne… pas, ne… jamais, « très bien », « sentir bon », « faire mal » et « devant ».
  - Le mélange utilise maintenant la méthode Fisher–Yates.
  - Nouvelle orthographe : maitresse, disparait, entrainement, entraine-toi. « surement » était déjà en nouvelle orthographe.

- **05/10 — Grammaire › L'adverbe › Adjectif ou adverbe ?** (2 parties de 10 questions : « Compléter les phrases », banque de 30 ; « Identifier la classe », banque de 30) :
  - **Faute d'accord dans une question** : « Ces montres en or massif sont extrêmement **chers** » est devenu « **chères** ». L'explication est corrigée aussi.
  - « un retard **tardif** » (pléonasme) devient « un repas **tardif** après le spectacle ».
  - « s'arrêter **court** », expression rare et peu connue des élèves, devient « s'arrêter **net** » (2 questions).
  - Dans « Compléter », les propositions **n'étaient pas mélangées** dans la fiche affichée : la forme de base venait toujours en premier. Elles le sont maintenant.
  - Le mélange des questions utilise maintenant la méthode Fisher–Yates.
  - **Le résultat n'était jamais enregistré.** Il est maintenant enregistré pour chaque partie (`gram_adverbe_accord_completer` / `_classe`), et le plan de travail le reconnait.
  - Nouvelle orthographe : coutent, maitrise, entraine-toi.
  - Les 3 copies de la fiche sont identiques.
  - **Toute la rubrique L'adverbe est vérifiée.**

- **05/10 — Grammaire › Le complément du nom › Le défi de l'attribut et du complément du nom** (30 phrases ; par partie : 4 épithètes, 3 compléments du nom, 3 attributs) :
  - Les 30 phrases et leurs explications ont été relues et sont justes. Un nom attribut est inclus (« est devenu médecin »).
  - La fiche était déjà en bon état : tirage Fisher–Yates équilibré par catégorie et résultat enregistré (`gram_attribut_cdn`). Les 3 boutons gardent un ordre fixe, ce qui est normal pour un classement.
  - La copie public/ avait une coquille (« les sépara »). Les copies sont maintenant identiques ; la copie racine garde son bouton Retour.
  - Nouvelle orthographe : paraitre, parait, fraiche, maitresse, maitrise, entrainement.

- **05/10 — Grammaire › Classes de mots › Le tri des mots** (7 niveaux, 10 mots tirés par niveau) :
  - **Mots ambigus retirés** (une réponse juste pouvait être comptée fausse), surtout pour les mots isolés des niveaux 2 à 4 :
    - « la » et « les », comptés comme déterminants alors que le bac « Pronom » existe au même niveau 3, deviennent « cette » et « mes » ;
    - « son » (aussi un nom : le son) devient « quelques » ;
    - « court », compté comme verbe alors que c'est aussi un adjectif, devient « parle » ;
    - « neuf » (aussi un nombre) devient « bruyant » ;
    - « écrit » (aussi un nom) devient « lisent » ;
    - « calme », « rouge » et « jeune » (aussi des noms) deviennent « gentil », « lourd » et « léger » ;
    - « personne » et « rien », comptés comme pronoms alors que ce sont aussi des noms (une personne, un rien), deviennent « ceux-ci » et « la mienne » ;
    - « plusieurs » (aussi un pronom) devient « ces ».
  - **Le résultat n'était jamais enregistré.** Il est maintenant enregistré par niveau (`gram_tri_mots_n1` à `_n7`), et le plan de travail le reconnait.
  - Le mélange utilise maintenant la méthode Fisher–Yates.
  - Nouvelle orthographe : maitre, plait, maitriser, maitrise, entraine-toi.
  - Les niveaux 6 et 7 (mots en contexte) ont été relus : ils sont justes.

- **05/10 — Grammaire › Classes de mots › Les mots de liaison** (30 phrases : 10 prépositions, 10 conjonctions de coordination, 10 de subordination ; 10 par partie) :
  - Terminologie : « complément d'objet indirect (COI) » devient « CIV », et « complétive objet direct (COD) » devient « CDV ».
  - Explications précisées :
    - « devenir astronaute » est un groupe infinitif, pas une « proposition infinitive » ;
    - « sans faire » : l'explication ne parle plus de « verbe de la principale », la phrase n'ayant pas de subordonnée.
  - Les 30 réponses sont justes.
  - Le résultat était déjà enregistré (`gram_mots_liaison`).
  - Le mélange utilise maintenant la méthode Fisher–Yates.
  - Nouvelle orthographe : maitrises, entrainer.

- **05/10 — Grammaire › Fonctions › Le sujet › Repérer le sujet** (42 phrases, 10 par partie, réparties entre GN avec complément du nom ou relative, nom seul, pronom, infinitif, et sujets inversés ou après un CC) :
  - **Score gonflé.** Une réponse juste à la seconde chance rapportait le point comme une réponse juste du premier coup. Le point n'est maintenant compté qu'au premier essai. La seconde chance reste disponible pour apprendre.
  - **Consigne ambigüe.** Avec des phrases comme « La maison **où j'ai habité** a été vendue », un élève pouvait cliquer « j' », qui est le sujet du verbe de la relative. La consigne précise maintenant : « le sujet du verbe principal (le groupe sujet en entier, avec ses compléments) ».
  - Les 42 phrases ont été relues : les sujets sont justes, y compris les relatives, les sujets inversés et les CC placés en tête avec virgule.
  - Le résultat était déjà enregistré (`sujet_phrase`).
  - Le mélange utilise maintenant la méthode Fisher–Yates.
  - Nouvelle orthographe : maitrises, entrainement.

- **05/10 — Grammaire › Fonctions › Le sujet › Reconstituer les textes** (5 textes documentaires de 10 sujets à replacer) :
  - **Score toujours à 10/10 possible.** Après « Corriger », l'élève pouvait déplacer les étiquettes fausses et recliquer. Chaque essai était enregistré, le dernier souvent à 10/10. Seule la **première correction** de chaque texte est maintenant enregistrée.
  - **Réponses justes refusées.** Deux paires d'étiquettes peuvent s'échanger sans erreur. Les deux placements sont maintenant acceptés :
    - « Elle » / « Ce précieux travail » (abeilles) ;
    - « Elle » / « Cette nouvelle société » (Révolution).
  - **Majuscule en milieu de phrase.** Deux étiquettes s'affichaient avec une majuscule au milieu d'une phrase : « C'est pourquoi **Nous** devons… » et « Le 14 juillet 1789, **Des** milliers de Parisiens… ». Les deux phrases sont réécrites pour que le sujet soit en tête.
  - Les 50 sujets ont été relus et sont justes.
  - Le mélange des étiquettes utilise maintenant la méthode Fisher–Yates.
  - Nouvelle orthographe : croute, iles, maitrises.
  - **Toute la rubrique Le sujet est vérifiée.**

- **05/10 — Grammaire › Fonctions › Le sujet › Les 4 classes du sujet** (39 phrases ; par partie : 4 GN, 2 noms propres, 2 infinitifs, 2 pronoms ; repérer le sujet puis choisir sa classe) :
  - **Score gonflé.** Une réponse juste à la seconde chance rapportait le point. Le point n'est maintenant compté qu'au premier essai, comme dans « Repérer le sujet ».
  - Les 39 phrases et explications ont été relues et sont justes. On y trouve des sujets inversés, des sujets coordonnés (« Tintin et Milou ») et des groupes infinitifs.
  - Le résultat était déjà enregistré (`gram_classes_sujet`).
  - Le mélange utilise maintenant la méthode Fisher–Yates.
  - Nouvelle orthographe : maitrises, entrainement.

- **05/10 — Grammaire › Fonctions › Le verbe › Repérer le verbe de la phrase** (32 phrases, 10 par partie ; verbes simples, composés et passifs, sujets inversés, négations et adverbes intercalés) :
  - **Score gonflé.** Une réponse juste à la seconde chance rapportait le point. Le point n'est maintenant compté qu'au premier essai.
  - Phrases rendues plus naturelles :
    - « Le roi **eut lu** le message » (passé antérieur seul, peu naturel) devient « **avait lu** » ;
    - « avait **rapidement** été réparée » devient « avait été **rapidement** réparée » ;
    - « a **brillamment** été remporté » devient « a été **brillamment** remporté ».
  - Les 32 phrases ont été relues : les verbes principaux sont justes. Les verbes des relatives ne sont pas à cliquer, comme le dit la consigne.
  - Le résultat était déjà enregistré (`verbe_phrase`).
  - Le mélange utilise maintenant la méthode Fisher–Yates.
  - Nouvelle orthographe : maitrises, entrainement.

- **05/10 — Grammaire › Fonctions › Le verbe › Trouver l'infinitif** (100 phrases : 30 au présent, 30 à l'imparfait, 30 au futur, 10 au passé composé ; 3 + 3 + 3 + 1 par partie ; saisie de l'infinitif) :
  - **Même phrase plusieurs fois dans une partie.** La banque reprend les 30 mêmes phrases à chaque temps. Une partie pouvait donc proposer « Noah mange sa tartine » puis « Noah mangeait sa tartine ». Le tirage évite maintenant deux fois le même verbe dans une partie (vérifié sur 2 000 tirages).
  - La saisie tolère maintenant les espaces en trop et les variantes Unicode des accents. Les accents comptent toujours.
  - La réponse de l'élève est affichée de façon sûre dans la correction.
  - Les 100 infinitifs ont été relus et sont justes. La phrase « Nous lisons / lisions », corrigée plus tôt dans la banque partagée, est maintenant juste.
  - Le résultat était déjà enregistré (`gram_verbe_infinitif`).
  - Le mélange utilise maintenant la méthode Fisher–Yates.
  - Nouvelle orthographe : maitrises, entrainer, entraine-toi.

- **05/10 — Grammaire › Fonctions › Le verbe › Reconstituer les textes** (5 textes documentaires de 10 verbes à replacer) :
  - **Fautes dans les réponses attendues :**
    - « une météorite géante **s'est écrasé** » (accord) devient « **s'est écrasée** » ;
    - « Jules César et ses légions romaines **envahit** » (sujet pluriel) devient « **achevèrent** la conquête de toute la Gaule ». C'est aussi plus juste historiquement, puisque 52 av. J.-C. est l'année d'Alésia.
  - « Beaucoup de dinosaures **possédaient** des œufs » n'avait pas de sens : la phrase devient « **pondaient** des œufs ».
  - **10/10 garanti** : comme dans l'exercice sur le sujet, chaque nouvelle correction était enregistrée. Seule la première correction de chaque texte compte maintenant.
  - Les autres verbes ont été relus et sont justes.
  - Le mélange des étiquettes utilise maintenant la méthode Fisher–Yates.
  - Nouvelle orthographe : maitrisaient, connaitre.
  - **Toute la rubrique Le verbe (fonction) est vérifiée.**

- **05/10 — Grammaire › Fonctions › Le prédicat › Repérer le prédicat** (40 phrases : 8 par type — verbe seul, verbe + CDV, verbe + CIV, verbe + CDV + CIV, verbe + attribut ; 2 de chaque par partie) :
  - **Plan de travail.** Le résultat était enregistré sous `predicat_phrase`, que l'élément « Le prédicat » du plan (`gram_predicat`) ne reconnaissait pas. Il est maintenant enregistré sous `gram_predicat_phrase`.
  - **Score gonflé.** Une réponse juste à la seconde chance rapportait le point. Le point n'est maintenant compté qu'au premier essai.
  - Coquille corrigée : « l'artist » devient « l'artiste ».
  - Les 40 phrases ont été relues. Les prédicats sont justes, et les CC placés en tête ne sont pas à cliquer, comme le dit la consigne.
  - Le mélange utilise maintenant la méthode Fisher–Yates.
  - Nouvelle orthographe : maitrises, entrainement.

- **05/10 — Grammaire › Fonctions › Le CDV et le CIV › Repérer le CDV et le CIV** (40 phrases, 5 types : CDV seul, CIV seul, CDV + CIV, pronoms, pronom CDV + CIV complet ; 2 de chaque par partie) :
  - **Plan de travail.** Le résultat était enregistré sous `cdv_civ_phrase`, que l'élément du plan (`gram_cdv_civ`) ne reconnaissait pas. Il est maintenant enregistré sous `gram_cdv_civ_phrase`.
  - **Score gonflé.** Une réponse juste à la seconde chance rapportait le point. Le point n'est maintenant compté qu'au premier essai.
  - Les 40 phrases ont été relues et sont justes, y compris les pronoms le, la, les (CDV) et lui, leur (CIV), et les CIV introduits par « en ».
  - Le mélange utilise maintenant la méthode Fisher–Yates.
  - Nouvelle orthographe : maitrises, entrainer.

- **05/10 — Grammaire › Fonctions › Le complément circonstanciel › Repérer et classer les CC** (40 phrases ; 7 CC de lieu, temps ou manière et 3 de condition, cause ou but par partie) :
  - **Faux CC.** Dans « Les clés perdues **se trouvaient** derrière le buffet », le complément ne peut pas être supprimé (« se trouver » exige un lieu) : ce n'est donc pas un CC. La phrase devient « J'ai **retrouvé** les clés perdues derrière le lourd buffet en chêne », et l'explication rappelle le test de suppression.
  - **Plan de travail.** Le résultat était enregistré sous `cc_phrase`, que l'élément du plan (`gram_cc`) ne reconnaissait pas. Il est maintenant enregistré sous `gram_cc_phrase`.
  - **Score gonflé.** Une réponse juste à la seconde chance rapportait le point. Le point n'est maintenant compté qu'au premier essai.
  - Les 40 phrases ont été relues : CC et virgules après un CC placé en tête sont justes.
  - Le mélange utilise maintenant la méthode Fisher–Yates.
  - Nouvelle orthographe : entrainer, maitrises.
  - La carte « 2. Identifier la question » est toujours grisée (« Bientôt disponible »). Aucun exercice n'existe derrière.

- **05/10 — Grammaire › Fonctions › Analyse de phrases** (6 niveaux : sujet/verbe, sujet/prédicat, + CDV/CIV, + CC, + attribut, + complément d'agent ; 5 phrases par partie) :
  - **La même partie revenait à chaque fois.** Chaque niveau ne contenait que 5 phrases (4 au niveau 6), et chaque partie en tirait 5 : l'élève retrouvait toujours les mêmes, seul l'ordre changeait. Chaque niveau compte maintenant **12 phrases** (39 nouvelles au total, avec CDV, CIV, attributs, CC en tête suivis d'une virgule, et passifs avec « par saint Nicolas »).
  - **Erreur dans le niveau 2 (prédicat).** « Le chat noir dort **sur le canapé** » et « Ce vieux monsieur marche **lentement** » mettaient un CC dans le prédicat, ce qui contredit le niveau 4 et l'exercice « Repérer le prédicat ». Ces phrases sont remplacées par « Le chat noir attrape une souris » et « Ce vieux monsieur lit le journal ».
  - **Plan de travail.** Le résultat était enregistré sous `analyse_phrase`, que l'élément du plan (`gram_analyse_phrase`) ne reconnaissait pas. Il est maintenant enregistré par niveau (`gram_analyse_phrase_n1` à `_n6`).
  - Les messages de débogage de la console ont été retirés.
  - Nouvelle orthographe : maitrises, entrainement.
- **05/10 — Plan de travail** : « Le complément d'agent » est retiré de la liste. L'écran ne contient pas encore d'exercice. Décision de Jeremy : on ne crée rien pour le moment.

## Défauts déjà confirmés à la main (à traiter en priorité)

| Exercice | Défaut |
|---|---|
| `vocabulaire_pc_avoir_accord_qcm` (Accords avec Avoir, QCM) | Bonne réponse en 1re position dans 40/40 questions, propositions non mélangées | ✅ 05/10 |
| `vocabulaire_pc_mix_qcm` (Bilan Avoir & Être, QCM) | Bonne réponse en 1re position dans 50/50 questions, non mélangées | ✅ 05/10 |
| `vocabulaire_pc_avoir_qcm` (PP avec Avoir, QCM) | Bonne réponse en 1re position dans 30/40 questions, non mélangées | ✅ 05/10 |
| `vocabulaire_pc_etre_qcm` (PP avec Être, QCM) | Bonne réponse en 1re position dans 24/40 questions, non mélangées |
| ~~`vocabulaire_relations_lexicales`~~ | ✅ corrigé le 05/10 |
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
| ✅ 05/10 | Le nom — Identifier les noms | `gram_nom_identifier` | index › startNomExercise |  |
| ✅ 05/10 | Le nom — Est-ce un nom ? | `gram_nom_reconnaître` | index › startNomReconnaîtreExercise |  |
| ⬜ | Le déterminant | `gram_determinant` | index › (?) | (code à localiser) |
| ✅ 05/10 | Le déterminant — Reconnaître les déterminants | `gram_determinant_reconnaitre` | index › startDeterminantExercise |  |
| ✅ 05/10 | Le déterminant — Le tri des déterminants | `gram_determinant_tri` | index › startTriExercise |  |
| ⬜ | Le déterminant (Exercices) | `gram_determinant_ex` | fiches/determinant_exercice.html |  |
| ✅ 05/10 | L'adjectif — Identifier les adjectifs | `gram_adjectif_identifier` | index › startAdjectifExercise |  |
| ✅ 05/10 | L'adjectif — Accords de l'adjectif | `gram_adjectif_accord` | index › startAdjectifAccordExercise |  |
| ✅ 05/10 | L'adjectif — Épithète ou attribut ? | `gram_adjectif_fonction` | index › startAdjectifFonctionExercise |  |
| ✅ 05/10 | L'adjectif — Retrouver le nom qualifié | `gram_adjectif_nom` | index › startAdjectifNomExercise |  |
| ✅ 05/10 | Le verbe — Identifier les verbes | `gram_verbe_identifier` | index › startVerbeClassExercise |  |
| ⬜ | Le pronom | `gram_pronom` | index › (?) | (code à localiser) |
| ✅ 05/10 | Le pronom — Déterminant ou pronom ? | `gram_pronom_piege` | index › startPronomPiegeExercise |  |
| ✅ 05/10 | Le pronom — Le détecteur de référents | `gram_pronom_referents` | fiches/detecteur_referents.html |  |
| ✅ 05/10 | Le pronom — Le remplaçant | `gram_pronom_remplacant` | fiches/remplacant_pronom.html |  |
| ✅ 05/10 | Le pronom — La chasse aux répétitions | `gram_pronom_repetitions` | fiches/chasse_repetitions.html |  |
| ⬜ | L'adverbe | `gram_adverbe` | index › (?) | (code à localiser) |
| ✅ 05/10 | L'adverbe — Reconnaître les adverbes | `gram_adverbe_reconnaitre` | fiches/adverbe_exercice.html |  |
| ✅ 05/10 | L'adverbe — Adjectif ou adverbe ? | `gram_adverbe_accord` | fiches/adverbe_accord_exercice.html |  |
| ⬜ | Le complément du nom | `gram_complement_nom` | index › (?) | (code à localiser) |
| ✅ 05/10 | Le tri des mots | `gram_tri_mots` | fiches/tri_mots.html |  |
| ✅ 05/10 | Les mots de liaison | `gram_mots_liaison` | fiches/grammaire_mots_liaison.html |  |

### 📖 Français — ✏️ Grammaire — Fonctions des mots

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 05/10 | Le sujet — Repérer le sujet | `sujet_phrase` | index › startSujetExercise |  |
| ✅ 05/10 | Le sujet — Reconstituer les textes | `gram_sujet_texte` | index › startSujetTextesExercise |  |
| ✅ 05/10 | Le sujet — Les 4 classes du sujet | `gram_classes_sujet` | index › startSujetClassesExercise |  |
| ✅ 05/10 | Le verbe (fonction) — Repérer le verbe | `verbe_phrase` | index › startVerbeExercise |  |
| ✅ 05/10 | Le verbe (fonction) — Infinitif et groupe | `gram_verbe_groupe` | index › startVerbeGroupeExercise |  |
| ✅ 05/10 | Le verbe (fonction) — Trouver l'infinitif | `gram_verbe_infinitif` | index › startVerbeInfinitifExercise |  |
| ✅ 05/10 | Le verbe (fonction) — Reconstituer les textes | `gram_verbe_texte` | index › startVerbeTextesExercise |  |
| ⬜ | L'attribut du sujet | `gram_attribut` | index › (?) | (code à localiser) |
| ✅ 05/10 | Attribut & Complément du nom | `gram_attribut_cdn` | fiches/grammaire_attribut_cdn.html |  |
| ➖ 05/10 | Le complément d'agent | `gram_agent` | index › (?) | (code à localiser) |
| ✅ 05/10 | Analyse de phrases | `gram_analyse_phrase` | index › startAnalyseGlobale |  |

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
| ✅ 05/10 | Indicatif présent | `present` | index › goToConjugaison |  |
| ✅ 05/10 | Indicatif imparfait | `imparfait` | index › goToConjugaison |  |
| ✅ 05/10 | Indicatif futur simple | `futur` | index › goToConjugaison |  |
| ⬜ | Indicatif passé composé | `passe_compose` | index › goToConjugaison |  |
| ✅ 05/10 | Passé simple (Lecture) | `conj_passe_simple` | fiches/conjugaison_passe_simple.html |  |
| ✅ 05/10 | Subjonctif & Impératif | `conj_subj_imp` | fiches/conjugaison_subj_imp.html |  |
| ✅ 05/10 | Conditionnel & Plus-que-parfait | `conj_cond_pqpf` | fiches/conjugaison_cond_pqpf.html |  |

### 📖 Français — 🔀 Conjugaison — Un peu de tout

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 05/10 | Présent de l'indicatif (QCM) | `conj_present_qcm` | fiches/conjugaison_present_QCM.html |  |
| ✅ 05/10 | Présent de l'indicatif (Écriture) | `conj_present_ecriture` | fiches/conjugaison_present_ecriture.html |  |
| ✅ 05/10 | Imparfait de l'indicatif (QCM) | `conj_imparfait_qcm` | fiches/conjugaison_imparfait_QCM.html |  |
| ✅ 05/10 | Imparfait de l'indicatif (Écriture) | `conj_imparfait_ecriture` | fiches/conjugaison_imparfait_ecriture.html |  |
| ✅ 05/10 | 1. Tableau des 3 temps | `conj_tableau_3_temps` | fiches/conjugaison_tableau_3_temps.html |  |
| ✅ 05/10 | 2. Tableau des 3 temps simples | `conj_trois_temps_simples` | fiches/conjugaison_trois_temps_simples.html |  |
| ✅ 05/10 | 3. Repère le bon verbe | `conj_repere_verbe` | fiches/conjugaison_repere_verbe.html |  |

### 📖 Français — 📄 Conjugaison — Fiches du passé composé

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 05/10 | Passé composé ou pas ? | `vocabulaire_pc_identifier` | fiches/conjugaison_pc_identifier.html |  |
| ✅ 05/10 | Participe passé avec Avoir (QCM) | `vocabulaire_pc_avoir_qcm` | fiches/conjugaison_pc_avoir_qcm.html | QCM: bonne réponse en position 1 dans 30/40 questions, options non mélangées |
| ✅ 05/10 | Participe passé avec Avoir (Écriture) | `vocabulaire_pc_avoir_trous` | fiches/conjugaison_pc_avoir_trous.html |  |
| ✅ 05/10 | Participe passé avec Être (QCM) | `vocabulaire_pc_etre_qcm` | fiches/conjugaison_pc_etre_qcm.html | QCM: bonne réponse en position 1 dans 24/40 questions, options non mélangées |
| ✅ 05/10 | Participe passé avec Être (Écriture) | `vocabulaire_pc_etre_trous` | fiches/conjugaison_pc_etre_trous.html |  |
| ✅ 05/10 | Accords avec Avoir (QCM) | `vocabulaire_pc_avoir_accord_qcm` | fiches/conjugaison_pc_avoir_accord_qcm.html | QCM: bonne réponse en position 1 dans 40/40 questions, options non mélangées |
| ✅ 05/10 | Accords avec Avoir (Écriture) | `vocabulaire_pc_avoir_accord_trous` | fiches/conjugaison_pc_avoir_accord_trous.html |  |
| ✅ 05/10 | Bilan Avoir & Être (QCM) | `vocabulaire_pc_mix_qcm` | fiches/conjugaison_pc_mix_qcm.html | QCM: bonne réponse en position 1 dans 50/50 questions, options non mélangées (corrigé) |
| ✅ 05/10 | Bilan Avoir & Être (Texte) | `vocabulaire_pc_mix_texte` | fiches/conjugaison_pc_mix_texte.html |  |

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
| ✅ 05/10 | L'Atelier des Mots | `vocabulaire_atelier_mots` | fiches/vocabulaire-jeu.html |  |
| ✅ 05/10 | Le Défi des Registres | `vocabulaire_registres` | fiches/registres-tri.html |  |
| ✅ 05/10 | Chasse aux Verbes Ternes | `vocabulaire_verbes_ternes` | fiches/verbes-ternes.html |  |
| ✅ 05/10 | Le Chasseur d'Intrus | `vocabulaire_chasseur_intrus` | fiches/chasseur-intrus.html |  |
| ✅ 05/10 | La Fabrique de Mots | `vocabulaire_fabrique_mots` | fiches/fabrique-mots.html |  |
| ✅ 05/10 | Relations lexicales | `vocabulaire_relations_lexicales` | fiches/vocabulaire_relations_lexicales.html | QCM: la bonne réponse est la 1re option dans 30/30 questions, options non mélangées |

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