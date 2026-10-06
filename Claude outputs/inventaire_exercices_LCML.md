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

- **05/10 — Grammaire › Types et formes › Les types de phrases** (2 niveaux de 30 phrases : assertion, interrogation, injonction ; 10 par partie) :
  - **Incohérence au niveau 2.** Pour « Pourrais-tu fermer la fenêtre ? », la fiche explique que c'est la **structure** qui compte (→ interrogation). Pourtant, 4 phrases au futur de l'indicatif terminées par un point (« Tu rangeras ta chambre… », « Vous sortirez par la porte de secours »…) étaient classées injonction d'après leur **valeur**. Un élève qui appliquait la règle répondait « assertion » et était compté faux. Ces 4 phrases sont remplacées par des injonctions sans ambigüité (infinitif ou phrase sans verbe) :
    - « Bien mélanger la pâte… » ;
    - « Attention à la marche ! » ;
    - « Ne pas déranger. » ;
    - « Défense de fumer dans le bâtiment. »
  - **Le résultat n'était jamais enregistré.** Il est maintenant enregistré par niveau (`gram_types_phrases_n1` / `_n2`), et le plan de travail le reconnait.
  - Le mélange utilise maintenant la méthode Fisher–Yates.
  - Nouvelle orthographe : coute, boite, plait, maitre, gouter, gouts, maitrise, entrainer, connaitre.
  - Les 3 copies de la fiche sont identiques (la copie public/ affichait « *sois* » avec des astérisques).

- **05/10 — Grammaire › Types et formes › Affirmatives ou négatives ?** (2 fiches, 2 niveaux de 30 phrases chacune) :
  - **Les résultats n'étaient jamais enregistrés** dans les deux fiches. Ils le sont maintenant par niveau : `gram_affirm_neg_qcm_n1`/`_n2` et `gram_affirm_neg_transfo_n1`/`_n2`.
  - **Transforme les phrases — réponses justes refusées :**
    - Seul « ne … pas » était accepté. « Le soleil ne brille plus » ou « Le soleil ne brille jamais » étaient comptés faux, alors que ce sont des formes négatives correctes. Ils sont maintenant acceptés, sauf pour les phrases-pièges (encore → plus, toujours → jamais, quelqu'un → personne…).
    - « Nous ne lisons pas **d'**histoire intéressante » (la forme la plus correcte) est maintenant acceptée.
    - « Elle ne mange pas de pomme » (au singulier) est maintenant acceptée.
    - La saisie tolère maintenant les variantes Unicode des accents.
  - « cookies » (anglicisme) devient « biscuits ».
  - **QCM :**
    - Des astérisques s'affichaient dans deux explications (« (*ne... pas*) »). C'est corrigé.
    - « double négation » (terme trompeur pour « n'… pas ») devient « négation ».
    - « ne sert guère à grand-chose » (lourd) devient « ne sert guère ».
    - Les tournures restrictives « ne … que », le « ne » explétif et « personne » employé comme nom restent classés comme affirmatifs, avec leur explication : choix de la fiche conservé.
  - Le mélange utilise maintenant la méthode Fisher–Yates dans les deux fiches.
  - Nouvelle orthographe : maitre, maitresse, maitrisé, gout, plait, entrainer, entrainement. « mûrs » reste.
  - La réponse de l'élève est affichée de façon sûre.

### 05/10 — Passives ou actives ? (`fiches/grammaire_voix_passive.html`, 3 copies) — sw.js v481
- Tirage refait : 10 phrases distinctes (avant, « La souris est poursuivie par le chat » pouvait sortir deux fois), au moins 2 par catégorie + 1 piège, répartition variable (avant toujours 4/3/3).
- Ajout de 3 pièges actifs au passé composé avec être (sont arrivés, est née, sont reparties) + 2 passifs sans complément d'agent ; encadré « Attention aux pièges » dans la synthèse.
- Double-clic neutralisé (verrou `answered`).
- Explication corrigée (« écrire/résoudre », « ('d'') ») ; « CM2 » → « sixième » ; maitrises, Entraine-toi.

### 05/10 — Simple ou complexe ? (`fiches/grammaire_phrase_simple_complexe.html`, 3 copies) — sw.js v482
- Mélange `sort(random)` → Fisher-Yates.
- Répartition variable : 4 à 6 phrases simples (avant toujours 5/5), 1 ou 2 pièges de chaque sorte.
- Double-clic neutralisé (verrou `answered`).
- « faites silence s'il vous plaît » : « plait » est aussi un verbe conjugué → phrase ambigüe, expression retirée.
- « Ayant terminé est au participe passé » → « est un participe (il n'est pas conjugué) » ; « gronde and cherchent » → « et ».
- Nouvelle orthographe : connaitre, s'entraine, s'entrainer.

### 05/10 — Homophones a / as / à (`homo_a`, index › HOMO_A_BANQUE / validerHomoA) — sw.js v483
- Le bouton « Valider » restait actif après correction → on pouvait revalider et enregistrer plusieurs résultats. Verrou `submitted` + bouton masqué.
- Correction : la bonne réponse s'affiche désormais à côté de chaque menu faux (avant, seulement rouge).
- « Il ___ froid dehors » (on attend « il fait froid ») → « Il ___ froid aux mains ce matin ».
- Nouvelle orthographe : gouter, diner.
- Tirage (Fisher-Yates, 10 trous) et banque (40 phrases équilibrées) OK.
- À vérifier pour les autres homophones : même moteur copié (10 fonctions `validerHomo*`).

### 05/10 — Homophones ou / où (`homo_ou`, index › HOMO_OU_BANQUE / validerHomoOu) — sw.js v484
- Biais : toutes les questions (« … ? ») attendaient « ou », aucune « où » → 4 questions avec « où » ajoutées, 3 « Tu … ou … ? » transformées en phrases déclaratives (banque 44).
- Validation unique (verrou `submitted`, bouton masqué) ; bonne réponse affichée à côté des menus faux.
- Nouvelle orthographe : connait, fraiche.

### 05/10 — Homophones son / sont (`homo_son`, index › HOMO_SON_BANQUE / validerHomoSon) — sw.js v485
- Biais : toutes les phrases « sont » commençaient par « Les … », toutes les « son » par « Il / Elle … » → banque réécrite (40 phrases, 2 à double trou) : sujets variés (Ils, Elles, Mes cousins, Ton frère et ta sœur, Où sont…), « son » après des sujets pluriels.
- Validation unique (verrou + bouton masqué) ; bonne réponse affichée à côté des menus faux.
- Nouvelle orthographe : gouter, s'il vous plait (« mûres » conservé).

### 05/10 — Homophones se / ce / s' / c' (`homo_ce`, index › HOMO_CE_BANQUE / validerHomoCe) — sw.js v486
- Biais majeur : trou en début de phrase = toujours Ce/C' (le menu proposait « Ce » et « C' » mais ni « Se » ni « S' »), trou après le sujet = toujours se/s'. Banque réécrite (41 phrases, 2 à double trou) : « Se lever tôt… », « S'amuser… », « Je n'aime pas ce film », « Je crois que c'est… », « Tout ce qui brille… ».
- Menu adapté à la position : Se/Ce/S'/C' en début de phrase, se/ce/s'/c' ailleurs (4 choix au lieu de 6).
- Synthèse : se devant un infinitif ; ce pronom devant qui/que ; « ce sont, ce fut » (la règle disait que ce devient toujours c' devant être).
- Validation unique (verrou + bouton masqué) ; bonne réponse affichée à côté des menus faux.

### 05/10 — Homophones on / ont (`homo_on`, index › HOMO_ON_BANQUE / validerHomoOn) — sw.js v487
- Biais total : trou en début de phrase = toujours « On » (seule majuscule du menu), trou après « Les … / Mes … » = toujours « ont ». Banque réécrite (34 phrases, 4 à double trou) : « Demain, on… », « Quand on…, on… », « Ils ont faim », « Ont-ils fini ? »…
- Menu adapté à la position : On/Ont en début de phrase, on/ont ailleurs.
- Synthèse : exemple « On chante tous ensemble » (→ « Il chante tous ensemble » bancal) remplacé par « On chante une chanson ».
- Validation unique (verrou + bouton masqué) ; bonne réponse affichée à côté des menus faux.

### 05/10 — Homophones la / là / l'a / l'as (`homo_la`, index › HOMO_LA_BANQUE / validerHomoLa) — sw.js v488
- Phrases agrammaticales corrigées : « Le livre que tu l'as prêté » (que + l' en double), « Ce secret, tu l'as promis de le garder », « Tu l'as échappée de peu » (accord fautif).
- Autres retouches : « Ce chien est perdu… l'a retrouvé » → « était perdu » ; « là -bas » → « là-bas » ; virgule dans « Tu l'as méritée, cette… » ; « prépare la cuisson » → « surveille la cuisson ».
- Biais : « tu ___ » = toujours l'as → ajout de « tu la connais / tu la vois », « Tu es là ? », « Tu restes là », + « je la trouve », « on l'a attendue », 2 phrases à double trou (banque 58).
- Synthèse : le pronom « la » se remplace par « le » (et non « lui »).
- Validation unique (verrou + bouton masqué) ; bonne réponse affichée à côté des menus faux.
- Nouvelle orthographe : traine, maitre, maitresse, boite.

### 05/10 — Homophones ces / ses / c'est / s'est / sais / sait (`homo_ces`, index › HOMO_CES_BANQUE / validerHomoCes) — sw.js v489
- Faute d'accord dans la banque : « La fillette s'est tordue la cheville » → « tordu » (CDV placé après).
- Phrases ambigües ces/ses (les deux possibles) : « Le directeur dit que ___ élèves… », « Le jardinier ramasse ___ feuilles », « Regarde ___ jolies fleurs » → reformulées avec « -là » ; « dans la bibliothèque » → « dans sa bibliothèque ».
- Synthèse : astuces fausses (« remplacer ces par ceux-là », « ses par les siens ») → singulier ce/cet/cette ou ajout de « -là » ; singulier son/sa ou ajout de « à lui / à elle ».
- Validation unique (verrou + bouton masqué) ; bonne réponse affichée à côté des menus faux.
- Nouvelle orthographe : parait, maitre, maitresse.

### 05/10 — Homophones leur / leurs (`homo_leur`, index › HOMO_LEUR_BANQUE / validerHomoLeur) — sw.js v490
- Phrase affichée aux élèves avec un mot anglais : « nos games de société » (+ commentaire de développement) → « jeux ».
- Phrase illogique : « Le chat court après les oiseaux mais il leur échappe » → « Mes cousins arrivent : je leur ouvre la porte ».
- Équilibre : 16 « leurs » sur 50 → 8 phrases ajoutées dont 3 à double trou (« Je leur ai rendu leurs crayons ») ; banque 58 (37 leur / 24 leurs).
- Validation unique (verrou + bouton masqué) ; bonne réponse affichée à côté des menus faux.
- Nouvelle orthographe : maitre, gouter, entraineur.

### 05/10 — Homophones peu / peux / peut (`homo_peu`, index › HOMO_PEU_BANQUE / validerHomoPeu) — sw.js v491
- Contenu juste. Ajout de pièges : « peu » juste après « Il / Tu / Je » (Il mange peu, Tu dors trop peu, Je suis un peu triste) + 2 phrases à double trou (banque 55).
- Synthèse : astuce « remplacer peu par un peu » retirée (beaucoup / très, en précisant que le sens change).
- Validation unique (verrou + bouton masqué) ; bonne réponse affichée à côté des menus faux.
- Nouvelle orthographe : plait, t'entraines, maitresse.

### 05/10 — Homophones sans / s'en / cent / sang (`homo_sans`, index › HOMO_SANS_BANQUE / validerHomoSans) — sw.js v492
- « La maitresse s'en réjouit de voir vos résultats » (double complément) → « Vos résultats sont excellents : la maitresse s'en réjouit. »
- « du sang froid » → « son sang-froid » (trait d'union) ; « chien de pur-sang » → « cheval pur-sang » ; « la blessure ne contient plus de sang » → « une petite tache de sang ».
- Ajouts : « il est temps de s'en aller » (s'en devant un infinitif) + 2 phrases à double trou (banque 53, équilibrée).
- Validation unique (verrou + bouton masqué) ; bonne réponse affichée à côté des menus faux.
- Nouvelle orthographe : maitresse, boite.

### 05/10 — Homophones complexes (`fiches/homophones_complexes.html`, 3 copies) — sw.js v493
- Copies désynchronisées : la copie `fiches/` (celle qu'ouvre index.html) n'avait PAS le mélange des 4 boutons de réponse → toujours le même ordre (tout/tous/toute/toutes). Mélange ajouté, 3 copies alignées. Simulation : bonne réponse répartie ~25 % sur chaque position.
- Faute dans la banque : « Les enfants ont tout compris la consigne » attendu « tout » (agrammatical avec un CDV) → réponse « tous » (pronom), explication réécrite.
- Ambigüité : « Ces livres sont tous / tout intéressants » (les deux possibles) → « J'ai invité mes cousins : ils sont tous venus. »
- Double clic neutralisé (verrou `answered`) — avant, un double clic pouvait compter 2 points ou sauter une question.
- Nouvelle orthographe : entrainement, Entraine-toi, fraiches, maitrises ; coquille « is » → « est » (copie public).

### 05/10 — Détective des participes (`fiches/orthographe_participe_passe_texte.html`, copie unique) — sw.js v494
- AUCUN résultat n'était enregistré (pas de saveResult) → le plan de travail ne voyait jamais l'exercice fait. Ajout d'un score : sur la 1re validation de chaque texte, participes trouvés − mots cliqués à tort (min. 0), total = 60 participes ; enregistré une seule fois sous `ortho_participe_texte`.
- Les 5 textes passaient toujours dans le même ordre → ordre tiré au hasard ; bouton « Recommencer » en fin de partie (nouvel ordre).
- Sélection bloquée une fois le texte corrigé.
- Contenu des 5 textes vérifié (60 participes, explications justes). Nouvelle orthographe : déchainé, ile, entrainement.

### 05/10 — Transformation à l'infini…tif (`fiches/orthographe_participe_passe_infinitif.html`, copie unique) — sw.js v495
- AUCUN résultat enregistré → score sur 10 (1 point par verbe réussi du premier coup), enregistré une fois sous `ortho_participe_infinitif`, affiché en fin de partie.
- Mélange `sort(random)` → Fisher-Yates ; tirage équilibré 2 verbes du 1er groupe / 3 du 2e / 5 du 3e (avant : ~80 % de 3e groupe, dont des verbes très rares).
- Verbes hors niveau retirés : moudre, croitre (crû), acquérir, conquérir, concevoir, taire, extraire, exclure, rompre (banque 98).
- Saisie : NFC + espaces ; réponse vide refusée sans compter d'essai.
- Nouvelle orthographe : naitre, connaitre, paraitre, disparaitre, assoir (« dû » conservé).

### 05/10 — PP employé seul (`fiches/orthographe_participe_passe_seul.html`, copie unique) — sw.js v496
- AUCUN résultat enregistré → score sur 10 (1 point par phrase réussie du premier coup), enregistré une fois sous `ortho_participe_seul`, affiché en fin de partie.
- Mélange `sort(random)` → Fisher-Yates.
- Saisie : NFC + espaces ; réponse vide refusée sans compter d'essai (majuscule non exigée, comme avant).
- Contenu : 25 phrases justes. Nouvelle orthographe : couté.

### 05/10 — PP avec être (`fiches/orthographe_participe_passe_etre.html`, copie unique) — sw.js v497
- AUCUN résultat enregistré → score sur 10 (1 point par phrase réussie du premier coup), enregistré une fois sous `ortho_participe_etre`.
- Mélange `sort(random)` → Fisher-Yates ; saisie NFC + espaces, réponse vide refusée sans compter d'essai.
- Contenu : 25 phrases justes. Nouvelle orthographe : apparaitre, naitre.

### 05/10 — PP avec avoir (`fiches/orthographe_participe_passe_avoir.html`, copie unique) — sw.js v498
- AUCUN résultat enregistré → score sur 10 (1 point par phrase réussie du premier coup), enregistré une fois sous `ortho_participe_avoir`.
- Mélange `sort(random)` → Fisher-Yates ; saisie NFC + espaces, réponse vide refusée sans compter d'essai.
- Contenu : 26 phrases (13 paires CDV après / CDV avant) justes.

### 05/10 — L'Accord parfait (`fiches/accord_participe.html`, 3 copies) — sw.js v499
- Réponse corrompue : « Les aventures que nous avons (vivre) » attendait « v��cues » (caractères cassés) → impossible à réussir. Corrigé en « vécues ».
- 22 parenthèses fermantes manquaient après la case (« (vivre [case] resteront… ») → ajoutées partout.
- Pas de sortie après erreurs (il fallait trouver la bonne réponse coute que coute) → après 2 essais ratés, réponse affichée + explication, 0 point.
- AUCUN résultat enregistré → score /10 (1 point au 1er essai) enregistré une fois sous `ortho_participe_accord`.
- « en toute confidence » → « en confidence » ; « *avoir* » (astérisques visibles) → italique ; consigne reformulée ; description du menu (« synthèse interactive » inexistante) corrigée.
- Saisie NFC + espaces. Nouvelle orthographe : maitre, entraine, maitrises, maitriser, entrainer.

### 05/10 — Les pluriels particuliers (`fiches/orthographe_pluriels_particuliers.html`, 3 copies) — sw.js v500
- L'indice donnait la réponse : « Nom en -ou (exception) », « (régulier) », « (double pluriel) » → l'indice ne garde que la famille (« Nom en -ou ») ; la mention complète apparait dans la correction. Adjectifs : « écris le masculin pluriel » précisé.
- Double validation : Valider / Entrée plusieurs fois comptait plusieurs points, et « Suivant » cliqué deux fois en fin de partie enregistrait 2 résultats → verrou `answered`.
- Mélange `sort(random)` → Fisher-Yates ; tirage équilibré 3 -ou / 2 -al / 2 -ail / 3 adjectifs.
- Saisie NFC + espaces (« des » toujours accepté). Contenu des 30 mots juste.
- Nouvelle orthographe : maitrise(s), entrainement (fiche + menu).

### 05/10 — Accord des adjectifs de couleur (`fiches/orthographe_adjectifs_couleur.html`, 3 copies) — sw.js v501
- L'indice donnait la réponse (« Nom employé comme adjectif », « Adjectif composé » = invariable ; « (féminin pluriel) »…) → indice neutre ; la catégorie apparait dans la correction.
- Double validation (clic/Entrée répétés = plusieurs points ; double « Suivant » = 2 résultats enregistrés) → verrou `answered`.
- Répartition toujours 5 accords / 5 invariables → 4 à 6 accords, mélange Fisher-Yates.
- 2 phrases où la couleur était un nom après « en » (« peints en chocolat », « peint la barrière en bleu marine ») → « Les murs de la cuisine sont chocolat », « des pulls bleu marine ».
- Saisie NFC + espaces. Nouvelle orthographe : maitrise(s).

### 05/10 — Connecteurs logiques (`connecteurs`, index › renderConnecteurs + exercices_francais.js › CONNECTEURS_POOL) — sw.js v502, ?v=20261005zj
- Bonne réponse en 3e position dans 21 phrases sur 40 (jamais mélangée) → propositions mélangées à chaque partie (simulation : ~25 % par position). Phrases : `sort(random)` → Fisher-Yates.
- « La météo était mauvaise. De plus le match a été annulé » (c'est une conséquence, pas un ajout) → « De plus le terrain de football était inondé ».
- « Malgré la fatigue, pourtant les joueurs continuèrent » (double opposition) → « Les joueurs étaient épuisés. Pourtant ils continuèrent… ».
- « Puisque il… » (élision impossible) ×2 → « Comme il avait oublié son parapluie… » et « Puisque tu as soif, bois… ».
- Nouvelle orthographe : maitrises, entrainer.

### 05/10 — Synonymes (`synonymes`, index › buildVocabExercice + exercices_francais.js › SYNONYMES_POOL) — sw.js v503, ?v=20261005zk
- Plusieurs bonnes réponses possibles (un 2e synonyme parmi les « mauvaises » propositions) dans 10 items : observait (guettait), déroba (prit), galopait (courait), demeure (propriété), dévalait (descendait), exigeant (sévère), vive (terrible), répandit (circula), frissonnait (grelottait), contemplait (admirait, observait) → distracteurs remplacés par des mots clairement faux.
- « mystérieuse » = « inquiétante » (pas un synonyme) → « énigmatique ».
- « La nouvelle se ___ » + option « se propagea » donnait « se se propagea » → « La nouvelle ___ » avec « se répandit ».
- Mélanges `sort(random)` (phrases et propositions) → Fisher-Yates. Nouvelle orthographe : maitrises, entrainer (moteur partagé avec Antonymes).

### 05/10 — Antonymes (`antonymes`, index › buildVocabExercice + exercices_francais.js › ANTONYMES_POOL) — sw.js v504, ?v=20261005zl
- Moteur déjà corrigé avec Synonymes (Fisher-Yates phrases + propositions, ~25 % par position).
- « agile » : « lent » était aussi un antonyme acceptable → remplacé par « grand ».
- Faute d'orthographe dans une proposition : « s'assèchait » → « s'asséchait ».
- Phrase contradictoire « Le savant avait une grande ignorance du sujet » → « L'apprenti avoua sa grande ignorance du sujet ».
- Les 32 autres items sont justes.

### 05/10 — Les substituts du nom (`fiches/lecture_substituts.html` + copie public) — sw.js v505
- Phrase illogique : « J'ai prêté mon dictionnaire à Sophie. Elle lui a rendu son livre » (« lui » ne pouvait pas être Sophie) → « J'ai croisé Sophie à la bibliothèque. Je lui ai rendu son livre. »
- « Voici mon dessin et voici le sien. Celui de Thomas… » (référent après le pronom) → « Thomas a terminé son dessin. Voici le mien, et voici le sien. »
- « Ces pommes sont mûres, mais celles-ci sont vertes » (réponse « ces pommes-ci ») → « Ces pommes-là sont mûres, mais celles-ci… » ; réponse « d'autres pommes », piège « les pommes mûres ».
- Synthèse : « **…** » affichés tels quels → gras.
- Double clic (réponse / suivant) neutralisé ; correction indique la bonne réponse ; mélanges Fisher-Yates.
- Nouvelle orthographe : maitre, plait, maitrises, s'entrainer.

### 05/10 — Savoir écouter : Le secret de la forêt de Soignes (`savoir_ecouter_1`, moteur `savoir_ecouter.html` + copie fiches/, données exercices_francais.js) — sw.js v506
- MOTEUR COMMUN (les 8 « Savoir écouter ») : AUCUN résultat n'était jamais enregistré. La fiche appelait `saveResult(score, total, temps, 'savoir_ecouter_soignes')` alors que saveResult attend un objet → rejet silencieux ; en plus l'identifiant était toujours celui de Soignes. Corrigé : objet complet avec `activity` = identifiant de l'exercice ouvert (savoir_ecouter_1…8).
- MOTEUR COMMUN : propositions des QCM jamais mélangées (Soignes : bonne réponse en B pour 5 questions sur 7) → mélange Fisher-Yates à chaque partie (V/F gardés dans l'ordre). Simulation : ~25 % par lettre.
- Validation impossible tant que toutes les questions n'ont pas de réponse (double sécurité). Entraine-toi.
- Contenu Soignes : questions cohérentes avec les faits connus (blaireau nocturne, omnivore, terriers à plusieurs dizaines d'entrées, lumière rouge, « cathédrale verte »). ⚠️ Audio NON réécouté : la transcription automatique est impossible ici (modèles bloqués par le réseau) → à confirmer à l'écoute si un doute existe.

### 05/10 — Savoir écouter : Le mystère du carillon de Bruges (`savoir_ecouter_2`, exercices_francais.js) — sw.js v507, ?v=20261005zm
- Moteur déjà corrigé avec Soignes (enregistrement du résultat + propositions mélangées).
- Q7 absurde : « Que peut-on déduire du fait que la tour se rétrécit ? » → bonne réponse « La forme de la tour se rétrécit » (simple répétition) → « Que peut-on en déduire pour l'escalier ? » → « Il devient de plus en plus étroit en montant ».
- Q2 : « Combien de cloches compose » → « composent ».
- Faits vérifiés (366 marches, 47 cloches, carillonneur, clavier frappé du poing, grosse cloche > 6 t, concerts gratuits, UNESCO). ⚠️ Audio non réécouté (transcription impossible ici).

### 05/10 — Savoir écouter : La fourmi superstar (`savoir_ecouter_3`, exercices_francais.js) — sw.js v508, ?v=20261005zn
- Moteur déjà corrigé (enregistrement + mélange).
- Q2 « carapace rigide » : « Le squelette externe » (= définition d'exosquelette) et « La cuticule » (la matière de l'exosquelette) étaient aussi justes → remplacés par « La coquille » et « Le pelage ».
- Autres questions cohérentes (50 fois son poids ↔ humain de 40 kg et 2 tonnes, phéromones, reine pondeuse, colonies nombreuses). ⚠️ Audio non réécouté.

### 05/10 — Savoir écouter : La recette du pain perdu (`savoir_ecouter_4`, exercices_francais.js) — sw.js v509, ?v=20261005zo
- Moteur déjà corrigé (enregistrement + mélange).
- Q5 : proposition agrammaticale « S'il faut acheter beaucoup d'ingrédients » → « Parce qu'il faut… ».
- Remarque (non modifiée) : Q1 et Q5 ont la même bonne réponse (pain rassis qu'on aurait jeté).
- Autres questions cohérentes (lait/œufs/sucre/cannelle, 30 s, beurre qui mousse, 2-3 min par face, garnitures). ⚠️ Audio non réécouté.

### 05/10 — Savoir écouter : Les Hautes Fagnes (`savoir_ecouter_5`, exercices_francais.js) — sw.js v510, ?v=20261005zp
- Moteur déjà corrigé (enregistrement + mélange).
- Q7 : réponse attendue fausse sur le plan scientifique (« l'absence de grands prédateurs rend ce milieu sûr pour nicher au sol » : renards, rapaces… ; et la pie-grièche grise niche dans les buissons, pas au sol) → « Ces oiseaux sont adaptés à un paysage ouvert, avec peu de grands arbres ». ⚠️ À confirmer par Jeremy si l'audio dit autre chose.
- Autres questions justes (frontière allemande, tourbe-éponge, caillebotis, brame en automne, Botrange, bruyères, neige qui tient plus longtemps). ⚠️ Audio non réécouté.

### 05/10 — Savoir écouter : Dans l'atelier de Sandy (`savoir_ecouter_6`) — aucun changement de contenu
- Moteur déjà corrigé avec Soignes (enregistrement + mélange).
- 10 questions cohérentes entre elles (1 semaine par page × 48 pages ≈ 1 an ; scénario → crayonné → encre → couleur numérique). Rien à corriger.
- Remarque (non modifiée) : Q8 (V/F « la première étape est le dessin à l'encre ») redonne la réponse de Q2. ⚠️ Audio non réécouté.

### 05/10 — Savoir écouter : Au club d'échecs (`savoir_ecouter_7`) — aucun changement de contenu
- Moteur déjà corrigé avec Soignes (enregistrement + mélange).
- Règles d'échecs exactes (contrôle des 4 cases centrales, petit roque, danger de sortir la dame trop tôt). Questions cohérentes entre elles. ⚠️ Audio non réécouté.

### 05/10 — Savoir écouter : Notice de l'étagère Lyra (`savoir_ecouter_8`) — aucun changement de contenu
- Moteur déjà corrigé avec Soignes (enregistrement + mélange).
- Questions cohérentes entre elles (charge max 5 kg ↔ pas de piles de gros livres ; vis pas serrées à fond pour ajuster ; aide pour la fixation murale). ⚠️ Audio non réécouté. Les 8 « Savoir écouter » sont maintenant vérifiés.

### 05/10 — Maths › Grands nombres › Lire un nombre (`num_lire`, index › renderNumLire + exercices_maths.js › NUM_LIRE_BANQUE) — sw.js v511, exercices_maths.js?v=20261005a
- Les 30 lectures attendues vérifiées par programme (convertisseur belge : septante, nonante, quatre-vingt(s), cent(s), et-un) : toutes justes, aucune mauvaise proposition identique à la bonne.
- Nouvelle orthographe appliquée aux 120 propositions : traits d'union entre tous les numéraux (quarante-trois, cinq-cents, vingt-et-un, six-cent-cinquante-quatre-mille) ; « million(s) » reste séparé par des espaces (nom, pas numéral).
- Mélanges `sort(random)` → Fisher-Yates (questions et propositions). Entrainer.

### 05/10 — Maths › Grands nombres › Écrire un nombre (`num_ecrire`, index › renderNumEcrire + exercices_maths.js › NUM_ECRIRE_BANQUE) — sw.js v512, exercices_maths.js?v=20261005b
- 30 nombres vérifiés par programme : 1 faute d'accord dans l'énoncé, « Deux millions trois cent mille quatre-vingt » → « quatre-vingts » (en fin de nombre).
- Nouvelle orthographe : traits d'union dans les 30 énoncés (million(s) séparé par des espaces, comme Lire un nombre).
- Mélanges `sort(random)` → Fisher-Yates.

### 05/10 — Maths › Grands nombres › Décomposer un nombre (`num_decomposer`, index › renderNumDecomposer + exercices_maths.js › NUM_DECOMPOSER_BANQUE) — sw.js v513, exercices_maths.js?v=20261005c
- 120 décompositions recalculées par programme : 2 erreurs.
  - 55 505 055 : la « bonne » réponse oubliait « 5 mille » (valait 55 500 055) ; et une mauvaise proposition (« 5 millions + 5 dizaines de millions… ») avait la même valeur que la bonne. Corrigé (les 4 propositions incluent « 5 mille », une seule vaut le nombre).
  - 317 080 317 : la réponse attendue disait « 8 mille » (= 317 008 317) alors que la bonne proposition (« 8 dizaines de mille ») était comptée fausse. Réponse corrigée.
- Mélanges `sort(random)` → Fisher-Yates. Entrainer.

### 05/10 — Maths › Grands nombres › Classer des nombres (`num_classer`, index › renderNumClasser, banques dans index) — sw.js v514
- 20 séries (10 croissantes, 10 décroissantes) vérifiées par programme : ordres justes, aucun doublon.
- Le mélange pouvait afficher la série déjà dans le bon ordre (point gratuit ; une série de la banque est même stockée dans l'ordre) → Fisher-Yates qui refuse l'ordre correct.
- Déplacements (souris et tactile) bloqués après validation (la correction ne pouvait plus être modifiée visuellement).
- Entrainer.

### 05/10 — Maths › Décimaux › L'abaque des décimaux (`num_decimaux_abaque`, index › ABQUE_DECIMAUX_BANQUE / renderAbaqueDecimaux) — sw.js v515
- Réponse fausse : « Cinq cent mille unités et nonante centièmes » attendait 5 en DM (= 50 000,90) → 5 en CM (500 000,90). Un élève juste était compté faux.
- 19 autres nombres vérifiés : justes (y compris « cent-vingt-huit dixièmes » = 12,8 et les zéros finaux facultatifs).
- Nouvelle orthographe : traits d'union dans les 20 énoncés (million séparé).
- Mélange `sort(random)` → Fisher-Yates.

### 05/10 — Maths › Décimaux › Devinettes décimales (`num_decimaux_devinettes`, exercices_maths.js › DEVINETTES_DECIMAUX_BANQUE) — sw.js v516, exercices_maths.js?v=20261005d
- 10 devinettes vérifiées une à une (chaque indice, chaque proposition) : une seule bonne réponse partout.
- Énoncé mathématiquement faux : « Ma partie entière est le double de ma partie décimale » (70,35 : la partie décimale vaut 0,35, pas 35) → « Le nombre formé par mes deux chiffres après la virgule est la moitié de ma partie entière » ; explication réécrite.
- Mélanges `sort(random)` → Fisher-Yates. Coquille d'identifiant « num_decinaux_devinettes » dans la liste des activités corrigée.

### 05/10 — Maths › Décimaux › Valeur d'un chiffre (`num_decimaux_relier`, index › relDecGenererSerie / validerRelier) — sw.js v517
- Moteur déjà refait (nombres générés, étiquettes mélangées, réponse jugée sur le nombre). 20 000 séries simulées : chiffre toujours au bon rang, aucune 2e étiquette vraie pour un même nombre, pas de zéro inutile.
- On pouvait encore glisser des étiquettes dans les cases après la correction → bloqué.
- Variables globales du glisser-déposer déclarées proprement.

### 05/10 — Maths › Décimaux › Écrire en chiffres (`num_decimaux_ecriture`, index › DECIMAUX_ECRITURE_BANQUE / validerDecEcr) — sw.js v518
- 23 réponses attendues vérifiées : justes (y compris « deux-mille-trois-cent-trois millièmes » = 2,303).
- Saisie : « 45,30 » était refusé pour 45,3 → zéros finaux inutiles acceptés (pas d'autre valeur) ; réponse vide ignorée au lieu d'être comptée fausse. Le point « . » reste accepté comme virgule, les espaces aussi.
- Nouvelle orthographe : traits d'union dans les 23 énoncés (million séparé).
- Mélange `sort(random)` → Fisher-Yates.

### 05/10 — Maths › Décimaux › Droites numériques (`num_decimaux_droite`, index › genDecDrtData / validerDecDrt) — sw.js v519
- Générateur vérifié sur 20 000 droites : pas réguliers, aucune erreur d'arrondi, valeurs bien formatées. Zéros finaux déjà acceptés.
- 4 petites graduations décoratives entre deux nombres, quel que soit le pas (0,1 ; 0,25 ; 0,05…), suggéraient un pas de 1/5 qui n'existe pas → retirées.
- Case vide : plus comptée fausse (on attend que les 2 cases soient remplies) ; espaces ignorés dans la saisie.

### 05/10 — Maths › Décimaux › Le bon nombre (`num_decimaux_le_bon_nombre`, index › DECIMAUX_LE_BON_NOMBRE_SERIES) — sw.js v520
- 12 réponses recalculées par programme (toutes les combinaisons des 5 chiffres). Les 4 « plus petit nombre » n'étaient justes QUE si l'on s'arrête aux millièmes (sinon 2,3945 < 23,495 ; 7,1345 < 17,345 ; 1,5347 < 13,547 ; 1,6278 < 12,678) : un élève logique pouvait être compté faux. Consigne complétée : « avec au maximum 3 chiffres après la virgule (jusqu'aux millièmes) ». Avec cette règle, les 12 réponses sont justes.

### 05/10 — Maths › Décimaux › Entre deux nombres (`num_decimaux_entre`, index › DECIMAUX_ENTRE_BANQUE) — sw.js v521
- 15 réponses VRAI/FAUX recalculées : justes.
- Raccourci possible : presque tous les FAUX avaient un nombre plus « court » que les bornes (2,7 entre 2,71 et 2,79), presque tous les VRAI un nombre plus « long » → 4 pièges ajoutés (6,5 entre 6,49 et 6,51 : VRAI ; 3,849 entre 3,85 et 3,9 : FAUX…). Banque : 19.
- Mélange `sort(random)` → Fisher-Yates.

### 05/10 — Maths › Décimaux › Opérations devinettes (`num_decimaux_op_devinettes`, index › DECIMAUX_OP_DEVINETTES_BANQUE / validerDecOp) — sw.js v522
- 15 calculs vérifiés par programme : justes.
- « 8,205 − 5 millièmes » attendait « 8,2 » et refusait « 8,200 » ; « 1,01 − 1 centième » refusait « 1,00 » → zéros finaux inutiles acceptés. Réponse vide ignorée.
- Mélange `sort(random)` → Fisher-Yates.

### 05/10 — Maths › Décimaux › Arrondir les nombres (`num_decimaux_arrondir`, `fiches/decimaux_arrondir.html`, 3 copies) — sw.js v523
- Générateur vérifié (3 000 parties) : réponses et placements toujours justes.
- Écriture des arrondis : « arrondi au dixième » affichait « 18 » au lieu de « 18,0 », « au centième » « 3,6 » au lieu de « 3,60 » (boutons, repères, explications) → nombre de décimales fixé selon la précision demandée.
- Bouton Valider sans choix / double clic : verrou ; comparaison des valeurs tolérante aux arrondis machine.
- Retour dans l'exercice : la fiche est toujours rechargée (avant : l'écran de fin de la partie précédente restait affiché).
- Nouvelle orthographe : maitrises, Entraine-toi.

### 05/10 — Maths › Entiers et décimaux › Sélectionne le bon chiffre (`num_entiers_decimaux_abaque`, `fiches/abaque.html`, 3 copies) — sw.js v524
- AUCUN résultat n'était enregistré → score /10 enregistré une fois par partie (titre avec le niveau).
- Générateur vérifié (9 000 nombres, 3 niveaux) : le rang demandé existe toujours, pas de zéro en tête. Ajout : pas de zéro inutile en fin de partie décimale.
- Nouvelle orthographe : maitrises, entrainer.

### 05/10 — Maths › Entiers et décimaux › Comparaison de nombres (`num_entiers_decimaux_comparaison`, `fiches/comparaison.html`, 3 copies) — sw.js v525
- 108 écritures (54 comparaisons) recalculées par programme : toutes les valeurs justes, signes bien répartis (23 =, 17 <, 14 >). Tirage Fisher-Yates et enregistrement déjà en place.
- Nouvelle orthographe seulement : maitrises, entraine-toi, entrainer.

### 05/10 — Maths › Fractions › Les fractions simples (`num_fractions_simples`, index › FRACTIONS_SIMPLES_BANQUE / validerFractSimple) — sw.js v526
- 23 figures vérifiées (parts égales : disques, bandes, grilles 2×2, 3×3, 4×3) ; distracteurs jamais équivalents à la bonne fraction ; propositions et figures mélangées (Fisher-Yates).
- « Valider » sans réponse cochée comptait une erreur → ignoré.

### 05/10 — Maths › Fractions › Les fractions complexes (`num_fractions_complexes`, index › genererPropositions / validerFraction) — sw.js v527
- BUG de clic : cliquer sur le TEXTE d'une proposition (et non sur la case) inversait l'état mémorisé → la réponse comptée n'était pas celle affichée. La validation lit maintenant directement les cases cochées.
- Pour 1/2, 1/3… les 4 propositions étaient toutes justes (1/2, 2/4, 3/6, 4/8) : il suffisait de tout cocher. Maintenant 5 propositions : 1 à 3 bonnes (originale, simplifiée, + une équivalente au hasard) et au moins 2 mauvaises, dont des pièges « presque équivalents » (5/8 pour 1/2). Vérifié sur 115 000 tirages : toute fraction équivalente est comptée juste, aucune mauvaise n'est équivalente.
- « Valider » sans case cochée : ignoré (avant : erreur comptée).

### 05/10 — Maths › Fractions › La balance des fractions (`num_balance_fractions`, `fiches/balance_fractions.html`, 3 copies) — sw.js v528
- AUCUN résultat enregistré → enregistré une fois quand le niveau 5 est réussi : 1 point par niveau équilibré à la première vérification (/5).
- Astuce du niveau 1 donnait la réponse (« Trouve le poids qui indique 3/4 ») → règle générale sans la réponse.
- 5 niveaux vérifiés : sommes justes, outils permettant d'équilibrer. Nouvelle orthographe : boite.

### 05/10 — Maths › Fractions › Colorie les fractions (`num_fractions_colorie`, `fiches/colorie_les_fractions.html`, 3 copies) — sw.js v529
- AUCUN résultat enregistré → score /10 enregistré à la fin (titre avec le niveau).
- Score toujours 10/10 : on recommençait jusqu'à réussir et chaque réussite donnait le point → point au premier essai seulement ; après 2 essais ratés, une bonne réponse est coloriée et on passe à la suite. « Vérifier » sans case coloriée n'est plus compté comme un essai.
- 84 items vérifiés (nombre de cases à colorier toujours entier). Nouvelle orthographe : maitrises, entrainement, entrainant.

### 05/10 — Maths › Fractions › Opérations de fractions (`num_fractions_operations`, `fiches/calculs_fractions.html`, 3 copies) — sw.js v530
- AUCUN résultat enregistré → score /5 enregistré à la fin de chaque niveau.
- Score toujours parfait : on pouvait réessayer à l'infini et le point était donné quand même → point au premier essai sans aide ; après 2 essais ratés, correction affichée et bouton « Question suivante ». Case vide : pas comptée comme essai.
- Pastilles de progression : toutes les questions passées redevenaient vertes → couleur réelle (juste / aidé / raté).
- Multiplication de deux fractions : seule la forme non simplifiée était acceptée (6/12) → toute fraction égale acceptée (1/2, 3/6…).
- Titre du niveau 3 : « Multiplications » → « Nombres mixtes et multiplications ». Nouvelle orthographe : maitrise(s), entrainer, Entraine-toi.

### 05/10 — Maths › Fractions › La fraction d'une quantité (`num_fraction_quantite`, `fiches/fraction_quantite.html`, 3 copies) — sw.js v531
- Déjà bon : point au 1er essai sans aide, enregistrement en place. Générateur vérifié (50 000 questions : divisions toujours exactes).
- On pouvait cliquer « Continuer » juste après une erreur (sans voir la solution) ou réessayer à l'infini → après 1 erreur, on réessaie ; après 2, la solution s'affiche (division puis multiplication) et on passe à la suite.
- Nouvelle orthographe : maitrise, entrainer.

### 05/10 — Maths › Fractions › Les nombres mixtes (`num_nombres_mixtes`, `fiches/numeration_nombres_mixtes.html` + copie public) — sw.js v532
- 30 conversions vérifiées par programme : justes. Tirage 5 + 5 Fisher-Yates et enregistrement déjà en place.
- Réponses égales refusées : 14/4 = 3 + 2/4 refusait « 3 + 1/2 » ; 4 + 2/3 refusait « 28/6 » → toute forme égale acceptée (la partie fraction du nombre mixte doit rester < 1).
- Nouvelle orthographe : entrainer, maitrises.

### 05/10 — Maths › Numération › Diviseurs & nombres premiers (`num_diviseurs_premiers`, `fiches/nombres_diviseurs.html` + copie public) — sw.js v533
- **Versions désynchronisées** : la version en ligne (`fiches/`) contenait encore l'arbre de facteurs premiers retiré le 14/08 ; la version simplifiée (`public/fiches/`, 5 diviseurs + 5 grilles) avait une accolade manquante (page cassée). Corrigé, puis copié dans `fiches/`.
- Diviseurs : le nombre de cases « ? » ne révèle plus combien il y a de diviseurs ; bouton « J'ai fini » ; point seulement si liste complète sans nombre faux ; correction auto au 3e nombre faux (fin des essais infinis) ; saisie bloquée après correction (avant : on pouvait encore compléter et gagner le point) ; message « X n'est pas un diviseur de N » ; correction avec diviseurs oubliés, reste des divisions fausses et paires.
- Grilles : 1 ajouté comme piège (+ explication), clic bloqué après correction, validation vide ignorée, « e.g. » → « : ».
- Fisher–Yates partout ; double-clic sur Continuer sans effet ; sauvegarde une seule fois ; retour visuel d'erreur (CSS manquant) ; textes de fin sans « arbres de facteurs » ; maitrises / Entraine-toi.
- Tests jsdom : parfait 10/10, une erreur par liste 5/10, partiel 0/10, faux 0/10, 4 sauvegardes ; 3 000 séries : tous les diviseurs et statuts premiers exacts, aucun doublon, nombres premiers répartis uniformément sur les 8 positions.

### 05/10 — Maths › Opérations › Vocabulaire › Associer mot et définition (`op_vocabulaire_def`, `fiches/vocabulaire_operations.html` + copies public et racine) — sw.js v534
- Contenu (10 mots/définitions) : juste.
- **Aucun résultat enregistré** : la fiche exigeait `window.parent.state.student`, or `state` est déclaré avec `let` dans index → invisible via `window.parent` → jamais de sauvegarde. Appel direct à `saveResult` (index complète élève/classe).
- ⚠️ Même condition bloquante dans 10 autres fiches, à corriger quand on y arrivera : ~~problemes_operations~~ (corrigé v536), ~~flechettes_atteins_le_score~~ (corrigé v539), ~~flechettes_calcule_le_score~~ (corrigé v538), mots-croises, sudoku, ~~parties_calcul~~ (corrigé v535), vocabulaire_solides, mots-caches, trajet_du_sang_ordre, sci_plantes_fleur.
- La correction disparaissait après 1,5 s (remplacée par le score) : elle reste maintenant visible, avec la bonne définition sous chaque mot mal associé.
- Mots de gauche aussi mélangés (ordre fixe avant) ; double validation bloquée ; maitrises.
- Tests jsdom : parfait 10/10, 2 inversés 8/10 avec 2 corrections, sauvegarde OK.

### 05/10 — Maths › Opérations › Vocabulaire › Parties d'un calcul (`op_vocabulaire_calc`, `fiches/parties_calcul.html` + copies public et racine) — sw.js v535
- **Aucun résultat enregistré** (même condition `window.parent.state` que la fiche Définitions) → corrigé ; double clic sur « Voir mon score » ne sauvegarde plus deux fois.
- **Essais infinis** : on pouvait cliquer jusqu'à tomber sur la bonne réponse → après 2 erreurs, la bonne réponse est montrée (« La bonne réponse était … ») et on passe.
- **Toujours les 5 mêmes calculs** (14 + 32, 75 − 20, 6 × 8, 35 : 5, 162 × 38) → nombres tirés au hasard à chaque question (aucun nombre répété dans un calcul), explications adaptées.
- Signes typographiques × et − ; « Quelle opération ce signe représente-t-il ? ».
- Point à confirmer par Jeremy : multiplicande = 1er facteur, multiplicateur = 2e (convention de la fiche, l'usage varie).
- Tests jsdom : parfait 10/10, tout faux 0/10, 10 questions, calculs exacts, sauvegarde unique.

### 05/10 — Maths › Opérations › Vocabulaire › Résolution de problèmes (`op_vocabulaire_prob`, `fiches/problemes_operations.html` + copies public et racine) — sw.js v536
- 12 devinettes fixes vérifiées (calculs justes) ; mais 10 tirées sur 12 → séries quasi identiques. Remplacées par 12 modèles générés (nouveaux nombres à chaque série, dont 2 nouveaux : différence entre a et la somme de b et c ; produit d'une différence par un facteur).
- **Aucun résultat enregistré** (condition `window.parent.state`) → corrigé ; double Entrée/clic sur « Voir mon score » ne sauvegarde plus deux fois.
- **Essais infinis** → après 2 erreurs, la réponse est montrée (« La bonne réponse était … ») et on passe.
- « 077 » accepté pour 77 ; Entrée sur un bouton ayant le focus ne valide plus deux fois ; signes × et − ; maitrise.
- Tests jsdom : 300 séries, toutes les réponses recalculées depuis l'explication = justes, ≤ 5 chiffres ; parfait 10/10, faux 0/10, 1 sauvegarde par série.

### 05/10 — Maths › Opérations › Additions et soustractions › Jusque 100 (`op_add_sous_100`, moteur commun `startCalcExercise` / `validateCalcExercise` dans index.html) — sw.js v537
- Contenu : 5 000 séries simulées → additions toujours avec passage à la dizaine (≤ 99), soustractions toujours avec emprunt (> 0), résultats justes.
- Tirage à pile ou face (parfois 8 additions sur 10) → toujours 5 additions + 5 soustractions, mélangées ; 23 + 48 et 48 + 23 comptent comme doublon.
- MOTEUR COMMUN (concerne aussi 1 000 → 1 000 000, tables, ×10, ×5, ×9, ×11, tables étendues) :
  - résultat enregistré sous `calc_add_sous_100` (non reconnu par le plan de travail) → `op_add_sous_100` (`calcActivityId` : add_sous_* → op_…, mult_div → op_mult_div_tables, op_* inchangé) ; titre lisible au lieu de « add_sous_100 » ;
  - `getPlanItemScore` : correspondance à frontière de mot (sinon le score « Jusque 1 000 » se serait affiché sur « Jusque 100 ») + anciens résultats `calc_…` toujours reconnus ;
  - lecture stricte : « 45abc » n'est plus accepté comme 45 (espaces de milliers acceptés) ;
  - validation : tout vide → ignorée ; calculs vides → avertissement, 2e clic = corriger quand même ; double validation bloquée.
- Tests node : 5 000 séries OK ; flux vide / partiel / sauvegarde unique vérifiés ; index : 6 / 7 scripts OK (module attendu).

### 05/10 — Maths › Opérations › Additions et soustractions › Jusque 1 000 (`op_add_sous_1000`, moteur commun) — aucun changement de code
- 5 000 séries simulées : nombres en dizaines entières (unités = 0, voulu : « passages à la centaine »), additions toujours avec passage à la centaine (≤ 990), soustractions toujours avec emprunt sur les dizaines (> 0), résultats justes, 5 + 5, aucun doublon, 1 855 calculs différents.
- Corrections du moteur commun déjà en place depuis v537 (identifiant `op_add_sous_1000` reconnu par le plan, saisie stricte, réponses vides, double validation).

### 05/10 — Maths › Opérations › Additions et soustractions › Jusque 10 000 (`op_add_sous_10000`, moteur commun) — aucun changement de code
- 5 000 séries simulées : nombres en centaines entières (voulu : « passages au millier »), additions toujours avec passage au millier (≤ 9 900), soustractions toujours avec emprunt sur les centaines (> 0), résultats justes, 5 + 5, aucun doublon, 1 856 calculs différents.
- Affichage « 2 200 » ; réponses « 2200 » et « 2 200 » acceptées. Corrections du moteur commun (v537) déjà en place.

### 05/10 — Maths › Opérations › Additions et soustractions › Jusque 100 000 (`op_add_sous_100000`, moteur commun) — aucun changement de code
- 5 000 séries simulées : nombres en milliers entiers (voulu : « passages à la dizaine de mille »), additions toujours avec passage (≤ 99 000), soustractions toujours avec emprunt sur les milliers (> 0), résultats justes, 5 + 5, aucun doublon, 1 856 calculs différents.
- Corrections du moteur commun (v537) déjà en place. (Pré-contrôle « Jusque 1 000 000 » : mêmes vérifications OK.)

### 05/10 — Maths › Opérations › Additions et soustractions › Jusque 1 000 000 (`op_add_sous_1000000`, moteur commun) — aucun changement de code
- 5 000 séries simulées : nombres en dizaines de mille entières (voulu : « passages à la centaine de mille »), additions toujours avec passage (≤ 990 000), soustractions toujours avec emprunt (> 0), résultats justes, 5 + 5, aucun doublon, 1 855 calculs différents.
- Corrections du moteur commun (v537) déjà en place ; réponses « 740000 » et « 740 000 » acceptées.

### 05/10 — Maths › Opérations › Additions et soustractions › Fléchettes : Calcule le score (`op_add_sous_flechettes_calcule`, `fiches/flechettes_calcule_le_score.html` + copies public et racine) — sw.js v538
- **Aucun résultat enregistré** (condition `window.parent.state`) → corrigé, avec un titre lisible.
- Cohérence image/calcul : 8 000 fléchettes simulées, la pointe tombe toujours dans la zone comptée (somme recalculée depuis le dessin = somme attendue).
- **Fléchettes cachant les nombres** : 1 243 recouvrements sur 8 000 (valeurs écrites en haut et au centre) → aucune fléchette dans un couloir de ±26° sous les valeurs, zone centrale éloignée du nombre central → 0 recouvrement.
- Saisie stricte (« 12,5 » ou « 12abc » refusés avec message, pas comptés faux) ; affichage initial « Lancer 1 / 30 » → « 1 / 10 ».
- Déjà correct : un seul essai par lancer, réponse vide ignorée, correction détaillée, nouvelle série à chaque recommencement.

### 05/10 — Maths › Opérations › Additions et soustractions › Fléchettes : Atteins le score (`op_add_sous_flechettes_atteins`, `fiches/flechettes_atteins_le_score.html` + copies public et racine) — sw.js v539
- **Aucun résultat enregistré** (condition `window.parent.state`) → corrigé, titre lisible.
- **Score gonflé** : après un défi réussi, « Annuler » rouvrait le défi ; replanter la même fléchette recomptait le point (plus de 10/10 possible). → défi verrouillé une fois terminé.
- **Essais infinis** (annuler/effacer à volonté) → point seulement si le 1er essai complet est juste ; 2e essai permis sans point ; après 2 essais ratés, une solution est montrée (« Une solution : 10 + 5 + 5 = 20 »).
- Double clic sur « Nouveau défi » sautait un défi → ignoré ; bouton « Passer ce défi → » / « Défi suivant → » selon l'état.
- Tous les objectifs sont atteignables (générés à partir d'une combinaison réelle) ; vérifié par recherche exhaustive sur 30 défis simulés.
- Tests jsdom : parfait 10/10, réussite au 2e essai = 0 point, échec → solution affichée et défi verrouillé, 1 sauvegarde par série.

### 05/10 — Maths › Opérations › Multiplications et divisions › Tables de multiplication (`op_mult_div_tables`, index › generateMultDivQuestions + moteur commun) — sw.js v540
- 20 000 séries simulées : toujours 5 × + 5 ÷, toutes justes, divisions exactes ; tables 4 à 9 majoritaires (1, 2 rares ; 3, 10 peu), quotients 1 à 10 équilibrés ; mélange Fisher–Yates.
- 7 × 3 et 3 × 7 pouvaient tomber dans la même série → doublon évité.
- Titre enregistré lisible (« Tables de multiplication et de division » au lieu de « mult_div ») ; identifiant `op_mult_div_tables` (reconnu par le plan) déjà corrigé dans le moteur commun v537, avec saisie stricte et gestion des réponses vides.
- Signe de division : Jeremy garde « ÷ » (comme sur la calculatrice, pas de confusion avec les deux-points).

### 05/10 — Maths › Opérations › Multiplications et divisions › Les tables étendues (`op_tables`, OP_TABLES_BANQUE dans exercices_maths.js + generateOpTablesQuestions dans index) — sw.js v541
- 100 calculs (50 ×, 50 ÷, dont 10 décimaux) recalculés par programme : tous justes, aucun doublon.
- 44 multiplications ont leur division inverse dans la banque (60 × 80 = 4 800 / 4 800 ÷ 80) : les deux pouvaient tomber dans la même série et se donner la réponse → exclu.
- Tirage libre (parfois 8 × sur 10) → toujours 5 × + 5 ÷, mélangés ; environ 1 calcul décimal par série.
- Moteur commun (v537) : identifiant `op_tables` déjà correct, saisie stricte (virgule acceptée), réponses vides gérées.
- Tests : 20 000 séries, 0 paire inverse, 0 doublon.

### 05/10 — Maths › Opérations › Multiplications et divisions › × et ÷ par 0,1 — 10 — 100 — 1000 (`op_x10`, OP_X10_BANQUE dans exercices_maths.js) — sw.js v542, ?v=20261005e
- 100 calculs recalculés par programme : **1 faux** → « 7,2 ÷ 0,1 = 7,2 » corrigé en **72**. Aucun doublon.
- Les 15 divisions par 0,1 sont exactement les inverses des multiplications par 0,1 (8 × 0,1 = 0,8 / 0,8 ÷ 0,1 = 8) : elles pouvaient se donner la réponse dans la même série → exclu.
- Tirage libre → toujours 5 × + 5 ÷ ; fonction commune `pickBalancedNoInverse` (aussi utilisée par les tables étendues).
- Moteur commun (v537) : identifiant `op_x10` correct, réponses décimales avec virgule acceptées, réponses vides gérées.
- Tests : 20 000 séries, 0 erreur, 0 paire inverse.

### 05/10 — Maths › Opérations › Multiplications et divisions › × et ÷ par 0,5 — 5 — 50 — 500 (`op_x5`, OP_X5_BANQUE dans exercices_maths.js) — sw.js v543
- 40 calculs recalculés par programme : tous justes, aucun doublon ; répartition équilibrée entre 5, 50, 500 et 0,5 (× et ÷).
- 3 paires inverses (16 × 5 = 80 / 80 ÷ 5 = 16…) pouvaient tomber ensemble → exclu ; toujours 5 × + 5 ÷ (`pickBalancedNoInverse`).
- Banque agrandie à 100 calculs le 05/10 (accord de Jeremy, v545) : +60 calculs (12-13 par type : × et ÷ par 5, 50, 500, 0,5), menu « parmi 100 ».
- Tests : 20 000 séries, 0 paire inverse, les 40 calculs utilisés.

### 05/10 — Maths › Opérations › Multiplications et divisions › × par 9 — 90 — 99 — 9,9 (`op_x9`, OP_X9_BANQUE dans exercices_maths.js) — sw.js v544
- 100 calculs (25 par multiplicateur) recalculés par programme : tous justes, aucun doublon.
- Tirage libre (pouvait donner 6 calculs × 9,9 et aucun × 90) → `pickStratifiedByB` : 2 ou 3 calculs de chaque multiplicateur, mélangés.
- Moteur commun (v537) : identifiant `op_x9` correct, virgule acceptée (19,8), réponses vides gérées.
- Tests : 20 000 séries, toujours les 4 multiplicateurs (2 ou 3 chacun), 100 calculs utilisés.

### 05/10 — Maths › Opérations › × et ÷ par 0,5 — 5 — 50 — 500 : banque agrandie (`op_x5`) — sw.js v545, ?v=20261005f
- 60 calculs ajoutés (calculés en décimal exact) → 100 : × 5 : 13, ÷ 5 : 13, × 50 : 13, ÷ 50 : 13, × 500 : 12, ÷ 500 : 12, × 0,5 : 12, ÷ 0,5 : 12 ; aucun doublon ; tous justes. Menu : « parmi 100 ».
- 20 000 séries : 5 × + 5 ÷, 0 paire inverse, les 100 calculs utilisés.

### 05/10 — Maths › Opérations › Multiplications et divisions › × par 11 — 101 — 110 — 1,1 (`op_x11`, OP_X11_BANQUE) — sw.js v545
- **Exercice inaccessible** : le menu et le plan de travail ouvraient un écran « 🚧 Les exercices arrivent bientôt ! », alors que l'exercice (100 calculs + `startOpX11Exercise`) existait → menu et plan relient maintenant l'exercice ; description « 10 calculs aléatoires parmi 100 ».
- 100 calculs (25 par multiplicateur) recalculés : tous justes, aucun doublon.
- Tirage réparti : 2 ou 3 calculs de chaque multiplicateur (`pickStratifiedByB`).
- Moteur commun (v537) : identifiant `op_x11`, virgule acceptée, réponses vides gérées.
- L'ancien écran `screen-op-x11` (vide) reste dans le HTML mais n'est plus relié.

### 05/10 — Maths › Opérations › Multiplications et divisions › Les caractères de divisibilité (`op_divisibilite`, `fiches/divisibilite.html` + copies public et racine, 4 mini-jeux) — sw.js v546
- **Aucun résultat enregistré, jeux sans fin** → séries limitées avec enregistrement sous `op_divisibilite` (titre par jeu) : Usine 10 nombres, Coffre-fort 5 coffres, Labyrinthe 5 couloirs (réussi ou raté = 1 manche), Tableau = 1 tableau (cases justes / 25). Badge « Nombre 3 / 10 »… ; bouton « Nouvelle série » en fin de série.
- Usine : validation sans rien cocher ignorée (comptait faux) ; explication « par 8 » affichait « 123 ÷ 8 = 15.375 » → « 15 reste 3 ».
- Coffre-fort : mélange Fisher–Yates ; message de réussite sans « (ou une valeur valide comme 47) » redondant ; 300 énigmes simulées → solution toujours unique dans l'intervalle.
- Labyrinthe : chemin toujours praticable (seules les dalles du chemin sont divisibles) ; un écran quitté ne relance plus de labyrinthe en arrière-plan.
- Tableau : colonnes tirées parmi les critères actifs (avant : toujours les 5 premiers, « par 10 » jamais présent) ; consigne « si un nombre n'a aucun diviseur » (faux : tout nombre a des diviseurs) → « n'est divisible par aucun d'eux » ; bouton « Aide » visible seulement après correction (déjà le cas).
- Nouvelle orthographe : entrainement.
- Tests jsdom : 4 jeux joués de bout en bout, 4 sauvegardes correctes, aucune erreur JS.

### 05/10 — Maths › Opérations › Les 4 opérations › Le compte est bon (`op_add_sous_compte_est_bon`, `fiches/compte_est_bon.html` + copies public et racine) — sw.js v547
- Génération vérifiée (150 grilles facile/moyen, 60 difficile) : toujours résolubles, avec le nombre minimal de calculs voulu par niveau ; génération rapide (≤ 0,13 s).
- **Aucun résultat enregistré, parties sans fin** → série de 5 défis : point si la cible est atteinte sans joker ; joker = pas de point ; « Nouveau jeu » devient « Passer ce défi » (non réussi, solution montrée) ; fin de série → enregistrement « Le compte est bon — niveau … » (x / 5) et « Nouvelle série ». Changer de niveau = nouvelle série.
- « Recommencer » après une victoire permettait de rejouer le même défi et de regagner le point → bloqué.
- Joker : montrait une solution inutilement longue (5 calculs pour une cible atteignable en 2) → solution la plus courte (parcours en largeur).
- Tests jsdom : série gagné / joker / passé / gagné / gagné → 3 / 5, 1 sauvegarde, aucune erreur.

### 05/10 — Maths › Opérations › Les 4 opérations › Les 4 opérations mélangées (`op_4_operations_melangees`, index › generate4OpQuestions + moteur commun) — sw.js v548
- **« Nouveaux calculs » changeait d'exercice** : le type `4_operations` n'était pas prévu dans `restartCalcExercise` → la 2e série était faite d'additions/soustractions jusque 100. Corrigé.
- **Score non reconnu par le plan** : enregistré sous `calc_4_operations` puis `op_4_operations` → type = `op_4_operations_melangees` (identifiant du menu et du plan) ; anciens résultats toujours reconnus ; titre lisible.
- Composition : 10 générateurs tirés parmi 15 (≈ 1 série sur 10 sans division) → toujours 3 +, 3 −, 2 ×, 2 ÷ ; divisions par 1 supprimées (diviseur et quotient de 2 à 10) ; doublons +/− évités.
- Tests : 20 000 séries, calculs justes, composition exacte, aucun doublon ; index : 6 / 7 scripts OK.

### 05/10 — Maths › Opérations › Les 4 opérations › Fiche d'entrainement (`op_4_operations_calculs`, `fiches/calculs.html` + copies public et racine) — sw.js v549
- Génération vérifiée (5 000 fiches) : toujours 5 +, 5 −, 5 ×, 5 ÷, tous les résultats entre 1 et 99, justes, aucun doublon ; 3 additions et 3 soustractions avec passage par fiche.
- **Aucun résultat enregistré** → enregistrement au premier « Vérifier » (une seule fois par fiche ; les vérifications suivantes après correction ne changent pas le score), avec le temps si chrono ; « Voir les réponses » avant correction enregistre ce qui était déjà juste.
- « Vérifier » sur une fiche vide affichait 0 / 20 et arrêtait le chrono → message « Écris d'abord tes réponses », rien n'est arrêté.
- Saisie stricte (« 1x » n'est plus lu comme juste par Number()).
- Nouvelle orthographe : « Fiche d'entrainement » (menu, titre, plan).
- Tests jsdom : fiche vide ignorée, 15/20 enregistré une fois, double vérification sans doublon.

### 05/10 — Maths › Opérations › Les 4 opérations › Calculs lacunaires (`op_4_operations_lacunaires`, `fiches/calculs-4-operations.html` + copies public et racine) — sw.js v550
- 103 calculs vérifiés par programme : tous justes. Enregistrement du résultat déjà en place.
- **Entrée validait toute la fiche** dès le 1er calcul (les 9 autres comptés faux) → Entrée passe au calcul suivant, valide seulement sur le dernier.
- Validation : fiche vide ignorée ; calculs vides → avertissement puis 2e clic ; une seule correction/sauvegarde par fiche (Entrée ou clic répétés ne réenregistrent plus).
- **Réponses données par un autre calcul** : 19 groupes de nombres apparaissent plusieurs fois (9 × 7 = ?, 7 × ? = 63, 63 ÷ 9 = ?…) et pouvaient tomber ensemble → jamais deux calculs avec les mêmes nombres.
- Tirage libre (parfois sans division) → toujours 3 +, 3 −, 2 ×, 2 ÷, mélangés.
- Signe « - » → « − » ; saisie stricte (« 12abc » refusé) ; entrainement.
- Tests : 20 000 tirages (composition exacte, 0 groupe partagé), parcours jsdom (Entrée, partiel, 9/10, 1 sauvegarde).

### 05/10 — Maths › Opérations › Calcul écrit › Additions écrites (`op_calcul_ecrit_addition`, `fiches/calcul-ecrit-addition.html` + copies public et racine) — sw.js v551
- 5 niveaux × 3 000 additions simulées : sommes justes (décimaux compris), retenues cohérentes (1,5 à 2,7 reports par calcul selon le niveau) ; niveau lacunaire : 3 ou 4 cases cachées, une seule par colonne (solution unique).
- Correctif « Voir la correction » du matin (v385) toujours en place.
- **Aucun résultat enregistré** → enregistrement au premier « Vérifier » (calculs entièrement justes / 6, niveau et chrono dans le titre) ; les vérifications suivantes après correction affichent « Score enregistré au premier contrôle : x / 6 ».
- « Vérifier » sur une fiche vide affichait 0 / 6 et arrêtait le chrono → message, rien n'est arrêté.
- Nouvelle orthographe : entrainer, entraine-toi, entrainement.
- Tests jsdom : niveaux 1, 4, 5 — fiche vide ignorée, 5 calculs justes → 5 / 6 enregistré une fois.

### 05/10 — Maths › Opérations › Calcul écrit › Soustractions écrites (`op_calcul_ecrit_soustraction`, `fiches/calcul-ecrit-soustraction.html` + copies public et racine) — sw.js v552
- 5 niveaux × 3 000 soustractions simulées : différences justes et positives ; emprunts (+10 en haut / +1 en bas, méthode par compensation) cohérents colonne par colonne ; lacunaire : une case cachée par colonne.
- **Niveau 3 (zéros consécutifs)** : le nombre du bas était complété par des zéros devant (« 5002 − 0345 ») dans environ 1 calcul sur 5 → plus de zéro inutile.
- Retenue du haut : « 1 » écrit devant le chiffre accepté comme « 10 » (les deux notations).
- **Aucun résultat enregistré** → enregistrement au premier « Vérifier » (x / 6, niveau et chrono) ; vérifications suivantes : rappel du score enregistré ; fiche vide ignorée (chrono non arrêté). Correctif « Voir la correction » (v385) toujours en place.
- Nouvelle orthographe : entrainer, entraine-toi.
- Tests jsdom : niveaux 1, 3, 4, 5 → 5 / 6 enregistré une fois, fiche vide ignorée.

### 05/10 — Maths › Opérations › Calcul écrit › Multiplications écrites (`op_calcul_ecrit_multiplication`, `fiches/calcul-ecrit-multiplication.html` + copies public et racine) — sw.js v553
- 5 niveaux × 1 500-2 000 multiplications simulées : produits justes (décimaux compris), produits partiels (avec le 0 de décalage) dont la somme = produit.
- **« Voir la correction »** (même défaut que celui corrigé ce matin pour + et −) : utilisable sans avoir vérifié, mettait tout en vert (tout paraissait juste) et effaçait le score → même correctif : bouton actif seulement après « Vérifier », réponses justes en vert, corrections en bleu, score conservé, fiche verrouillée ensuite.
- **Niveau lacunaire ambigu** : ~2 % des calculs admettaient plusieurs réponses justes (ex. 194 × 5 avec le 1 caché) → vérification par essai de tous les chiffres, seuls les calculs à solution unique sont gardés (0 / 1 500 ambigu).
- **Aucun résultat enregistré** → enregistrement au premier « Vérifier » (x / 6, niveau, chrono) ; fiche vide ignorée ; nouvelle orthographe (entrainer).
- Tests jsdom : 5 niveaux → 5 / 6 enregistré une fois, correction en bleu, « Vérifier » bloqué après correction.

### 05/10 — Maths › Opérations › Calcul écrit › Divisions écrites (`op_calcul_ecrit_division`, `fiches/calcul-ecrit-division.html` + copies public et racine) — sw.js v554
- 6 niveaux × 3 000 divisions simulées : quotient × diviseur + reste = dividende, reste < diviseur, divisions exactes aux niveaux 1, 2, 3, 5 (dividende décimal), reste non nul au niveau 4 ; chaque étape (produit soustrait, reste) cohérente ; aucun zéro inutile en tête du quotient.
- **« Voir la correction »** : même défaut que + − × (utilisable sans vérifier, tout en vert, score effacé) → même correctif (bouton actif après « Vérifier », corrections en bleu, score conservé, fiche verrouillée) ; les 0 corrigés (quotient, reste) s'affichent bien.
- **Aucun résultat enregistré** → enregistrement au premier « Vérifier » (x / 6, niveau, chrono) ; fiche vide ignorée.
- Tests jsdom : 6 niveaux → 5 / 6 enregistré une fois, correction en bleu, « Vérifier » bloqué après correction.

### 05/10 — Maths › Opérations › L'ordre des opérations › Mission PEMDAS (`op_ordre_pemdas`, `fiches/mission_pemdas.html` + copies public et racine) — sw.js v555
- 60 expressions (3 niveaux × 20) vérifiées : divisions exactes, aucune étape négative, résultats entiers ; réduction pas à pas simulée sur les 3 niveaux (dernière étape = valeur de l'expression).
- **Aucun résultat enregistré** → enregistrement en fin de mission (questions réussies du premier coup / 5, niveau dans le titre).
- Signe de division « : » → « ÷ » (convention du site) : expressions, affichage, rappels et théorie.
- Double clic pendant l'animation (300 ms) : l'opération était réduite deux fois / l'étape dupliquée → clic ignoré pendant l'animation.
- Mélange Fisher–Yates ; nouvelle orthographe (maitrises, entraine-toi).
- Décision de Jeremy (05/10, v556) : on garde la règle « de gauche à droite », mais deux calculs indépendants de même priorité (« 3 × 5 + 4 × 2 », « (4 + 5) × (10 − 8) ») sont acceptés dans les deux ordres, avec le message « Accepté ! … la règle, c'est de gauche à droite ». Les chaînes dépendantes (16 − 8 ÷ 4 × 3) restent strictes.

### 05/10 — Maths › Opérations › L'ordre des opérations › Défi PEMDAS (`op_ordre_defi`, `fiches/defi_pemdas.html` + copies public et racine) — sw.js v556
- 80 questions (3 niveaux QCM + saisie libre) vérifiées par programme : réponses justes, chaque étape de la résolution égale au résultat, propositions distinctes.
- **Bonne réponse toujours en 1re position dans la banque** + mélange par tri aléatoire biaisé → Fisher–Yates (3 000 tirages : ≈ 1/3 par position). Questions aussi tirées par Fisher–Yates.
- **Aucun résultat enregistré** → enregistrement en fin de défi (réussies du premier coup / 5, niveau).
- Après une mauvaise réponse, la résolution pas à pas (qui donne la réponse) s'affichait et l'élève devait recliquer jusqu'à trouver → la question s'arrête : bonne réponse montrée (« La bonne réponse était … »), bouton « Question suivante ».
- Signe « : » → « ÷ » (expressions, étapes, rappels) ; saisie stricte au niveau 4 ; maitrises, entraine-toi.
- Tests jsdom : 4 niveaux, erreur → correction + passage, 4 / 5 enregistré une fois.

### 05/10 — Maths › Grandeurs › Les masses › Conversions de masses QCM (`grandeur_masses_qcm`, MASSES_QCM_BANQUE dans exercices_maths.js + index › demarrerMassesQcm) — sw.js v557
- 50 questions recalculées par programme (t, q, kg, hg, dag, g, dg, cg, mg ; ¼ ½ ¾ ⅛) : une seule proposition juste à chaque fois, et c'est bien celle attendue. Enregistrement déjà en place.
- **Bonne réponse prévisible** : en 3e position dans 28 questions sur 50 de la banque et mélange par tri aléatoire biaisé → Fisher–Yates (20 000 séries : 33 % par position) ; questions aussi tirées par Fisher–Yates.
- Pastilles de progression toujours vertes, même après une erreur → vert / rouge selon la réponse.
- Double clic sur « Voir mon score final » : un seul enregistrement.

### 05/10 — Maths › Grandeurs › Les capacités › Conversions de capacités QCM (`grandeur_capacites_qcm`, CAPACITES_QCM_BANQUE dans exercices_maths.js + index › demarrerCapacitesQcm) — sw.js v559
- 50 questions recalculées par programme (ml, cl, dl, l, dal, hl, m³ ; ¼ ½ ¾ ⅛) : une seule proposition juste à chaque fois, et c'est bien celle attendue (¼ dl = 25 ml et 1 dl = 10 cl justes). Enregistrement déjà en place.
- **Bonne réponse prévisible** : en 3e position dans 28 questions sur 50 de la banque et mélange par tri aléatoire biaisé → Fisher–Yates (20 000 séries : 33 % par position) ; questions aussi tirées par Fisher–Yates.
- **Questions qui se donnaient la réponse** : 9 groupes de questions de même valeur (« 3,5 l → 3500 ml » et « 3500 ml → 3,5 l » ; ¼ l, 250 ml, 0,25 l ; ½ m³, 5 hl, 0,5 m³…) pouvaient tomber dans la même série → jamais deux questions de même valeur (20 000 séries : 0).
- Pastilles de progression toujours vertes → vert / rouge selon la réponse.
- Double clic sur « Voir mon score final » : un seul enregistrement ; double clic sur « Question suivante » ne saute pas de question.
- Tests jsdom : partie 7 / 10 avec doubles clics → 1 sauvegarde (`grandeur_capacites_qcm`, 7 / 10) ; index : 6 / 7 scripts OK.
- Même défaut de valeurs répétées dans la banque des masses : corrigé en v560 (voir ci-dessous).

### 05/10 — Maths › Grandeurs › Les masses : QCM et Conversions & abaque, questions de même valeur (`grandeur_masses_qcm`, `grandeur_masses_qcm_abaque`) — sw.js v560
- Repéré en vérifiant les capacités : 9 groupes de questions de même valeur dans la banque des masses (250 mg / ¼ g ; 0,1 kg / 1 hg ; ¼ kg / 0,25 kg ; 500 g / ½ kg / 5 hg ; 750 g / ¾ kg / 0,75 kg ; 3,5 kg / 3500 g ; ¼ t / 2,5 q ; ½ t / 5 q / 0,5 t ; 1 t / 10 q) pouvaient tomber dans la même série et se donner la réponse → jamais deux questions de même valeur (index + fiche, 3 copies identiques).
- Double clic sur « Question suivante » : plus de question sautée (index + fiche).
- Tests : 20 000 séries (index) et 5 000 (fiche) → 0 valeur répétée, ≈ 33 % par position ; parties jsdom 7 / 10 et 8 / 10 avec doubles clics → 1 sauvegarde chacune.

### 05/10 — Maths › Grandeurs › Les capacités › Conversions de capacités QCM bis → « Conversions de capacités & abaque » (`grandeur_capacites_qcm_sup`, `fiches/capacites_QCM.html` + copies public et racine) — sw.js v561
- **Pas « un autre exercice »** : les 50 questions étaient exactement celles du QCM principal. Choix de Jeremy : même principe que les masses → abaque interactif des capacités ajouté au-dessus des propositions : m³ (= 1 000 l) | hl | dal | l | dl | cl | ml, 2 lignes de brouillon (un chiffre par case, passage automatique à la case suivante), virgule par double-clic, « Effacer l'abaque », vidé à chaque question ; capture 390 px sans défilement horizontal. Menu et plan : « Conversions de capacités & abaque (QCM) ».
- Contenu : mêmes 50 questions, déjà recalculées (toutes justes).
- **Copies désynchronisées** : la version en ligne (`fiches/`) ne mélangeait pas les propositions (réponse C dans 28 questions sur 50) ; public/racine les mélangeaient avec un tri biaisé → Fisher–Yates partout (5 000 séries : ≈ 33 % par position) ; 3 copies identiques.
- Jamais deux questions de même valeur dans une série (même règle que le QCM principal).
- **Aucun résultat enregistré** → enregistrement unique en fin de série (`grandeur_capacites_qcm_sup`) ; double clic sur une proposition (comptait 2 réponses) ou sur « Question suivante » bloqué ; pastilles vert / rouge.
- Tests jsdom : partie 8 / 10 avec doubles clics → 1 sauvegarde ; abaque (saisie, passage de case, virgule, vidage) ; syntaxe OK.
- « Conversions de longueurs (QCM — Bis) » avait le même doublon : traité en v563.

### 05/10 — Maths › Grandeurs › Les longueurs › Conversions de longueurs QCM (`grandeur_longueurs_qcm`, LONGUEURS_QCM_BANQUE dans exercices_maths.js + index › demarrerLongueursQcm) — sw.js v562
- 50 questions recalculées par programme (mm, cm, dm, m, dam, hm, km ; ¼ ½ ¾ ⅛) : une seule proposition juste à chaque fois, et c'est bien celle attendue.
- **Aucun résultat enregistré** → enregistrement unique en fin de série (`grandeur_longueurs_qcm`, identifiant du menu et du plan).
- **Bonne réponse prévisible** : en 3e position dans 25 questions sur 50 de la banque et mélange par tri aléatoire biaisé → Fisher–Yates (20 000 séries : 33 % par position).
- **Questions qui se donnaient la réponse** : 11 groupes de même valeur (2,5 km / 2500 m ; ½ km / 5 hm / 0,5 km ; 3,5 m / 3500 mm…) → jamais deux questions de même valeur dans une série.
- Pastilles toujours vertes → vert / rouge ; double clic sur « Question suivante » / « Voir mon score final » sans effet.
- Tests jsdom : partie 7 / 10 avec doubles clics → 1 sauvegarde ; index : 6 / 7 scripts OK.

### 05/10 — Maths › Grandeurs › Les longueurs › Conversions de longueurs QCM bis → « Conversions de longueurs & abaque » (`grandeur_longueurs_qcm_sup`, `fiches/longueurs_QCM.html` + copies public et racine) — sw.js v563
- **Pas « un autre exercice »** : les 50 questions étaient exactement celles du QCM principal. Comme pour les masses et les capacités (choix de Jeremy) → abaque interactif ajouté : km | hm | dam | m | dm | cm | mm, 2 lignes de brouillon, passage automatique à la case suivante, virgule par double-clic, « Effacer l'abaque », vidé à chaque question ; capture 390 px sans défilement horizontal. Menu et plan : « Conversions de longueurs & abaque (QCM) ».
- Contenu : mêmes 50 questions, déjà recalculées (toutes justes).
- **Copies désynchronisées** : la version en ligne (`fiches/`) ne mélangeait pas les propositions (réponse C dans 25 questions sur 50) ; public/racine avec tri biaisé → Fisher–Yates partout (5 000 séries : ≈ 33 % par position) ; 3 copies identiques.
- Jamais deux questions de même valeur dans une série.
- **Aucun résultat enregistré** → enregistrement unique en fin de série (`grandeur_longueurs_qcm_sup`) ; double clic sur une proposition (comptait 2 réponses) ou sur « Question suivante » bloqué ; pastilles vert / rouge.
- Tests jsdom : partie 8 / 10 avec doubles clics → 1 sauvegarde ; abaque (saisie, passage de case, virgule, vidage) ; syntaxe OK.

### 05/10 — Maths › Grandeurs › Le périmètre › Calcul du périmètre (`grandeur_perimetre_calcul`, PERIMETRE_GENERATEURS dans exercices_maths.js + index › renderPerimetreCalcul / validerPerimetre) — sw.js v564, exercices_maths.js?v=20261005g
- **Figures impossibles** : le triangle isocèle (21 % des tirages : ex. base 12 m, côtés 5 m), le triangle quelconque (15 % : inégalité triangulaire non respectée) et le trapèze (40 % : petite base parfois plus longue que la grande, côtés incompatibles) pouvaient avoir des mesures qui ne forment aucune figure → mesures toujours constructibles (vérifié sur 3 000 tirages par figure).
- Périmètre attendu = somme des côtés affichés pour les 10 figures (3 000 tirages chacune : 0 écart).
- **Réponses justes refusées** : seules « 24 m » / « 24m » étaient acceptées ; « 24 », « 24,0 m », « 24.5 m », « 24 mètres » comptées fausses → tout nombre égal accepté, avec ou sans « m ». Autre unité (cm…) ou saisie illisible (« 12abc ») : message, rien n'est compté. **Réponse vide** : comptée fausse → ignorée.
- **Double validation** : un 2e clic sur « Valider » recomptait le point (score > 5 possible) et ajoutait un 2e bouton → bloqué ; double clic sur « Suivant » / « Voir les résultats » : pas de figure sautée, un seul enregistrement.
- Tirage : la même figure pouvait sortir deux fois, le pentagone et l'hexagone jamais → 5 figures différentes, triangles et quadrilatères toujours favorisés (2 000 séries : 0 doublon).
- Tests jsdom : vide / « 12abc » / « 5 cm » non comptés ; « 24 », « 24,50 mètres », « 24.5m » acceptés ; partie 4 / 5 → 1 sauvegarde ; syntaxe OK.
- Décision de Jeremy (05/10, v565) : l'unité est obligatoire. « 24 » sans unité → message « N'oublie pas l'unité : écris par exemple 24 m. », rien n'est compté.

### 05/10 — Maths › Grandeurs › Le périmètre › Problèmes (`grandeur_perimetre_problemes`, index › PERIMETRE_PROBLEMES / validerPerimetreProbl) — sw.js v566
- Les 10 problèmes d'origine recalculés : réponses justes (146 m, 328 m, 3,6 m, 16 piquets, 4 €, 3,3 km, 4 rouleaux, 150 m, 31 m, 752,50 €).
- **Toujours les mêmes problèmes avec les mêmes nombres** (« Recommencer » redonnait la même série) → 10 modèles générés, mêmes situations et même progression de niveau 1 à 3, nouveaux nombres à chaque série (5 000 séries toutes différentes ; réponses recalculées depuis l'énoncé : 0 écart). Contraintes : longueur > largeur, piquets en nombre entier, toit constructible, rouleaux à arrondir vraiment, prix au centime.
- **Réponses justes refusées** (comparaison de texte exacte) : « 752,5 € », « 146 mètres », « 4 euros », « 3.3 km »… → tout nombre égal accepté avec son unité (m/mètres, km, €/euros, piquets, rouleaux). Unité obligatoire (comme le calcul du périmètre) : sans unité, autre unité ou saisie illisible → message, rien n'est compté. **Réponse vide** comptée fausse → ignorée.
- **Double validation** (2e clic sur « Valider » = point compté deux fois, 2e bouton) → bloquée ; double clic sur « Suivant » / « Voir les résultats » : pas de problème sauté, un seul enregistrement.
- En cas d'erreur, la correction affiche aussi la méthode (indice). Nouvelle orthographe : coute, couter, cout.
- Tests jsdom : messages vide / sans unité / cm / « 12abc » sans compter ; partie 9 / 10 avec doubles clics → 1 sauvegarde ; « Nouveaux problèmes » → nouvelle série 10 / 10 ; syntaxe OK.

### 05/10 — Maths › Grandeurs › Le périmètre › Le cercle › Le labo de la circonférence (`grandeur_perimetre_cercle_labo`, `fiches/perimetre_cercle.html` + copies public et racine) — sw.js v567
- Les 12 questions d'origine recalculées (π = 3,14) : réponses justes.
- **Presque toujours les mêmes questions** (10 tirées sur 12, tri aléatoire biaisé) → série générée : 2 calculs avec le diamètre, 2 avec le rayon (cm, dm ou m) et les 6 situations (roue, tronc, piste de cirque, table, boite de conserve, rond-point) avec de nouvelles mesures réalistes à chaque série ; ordre mélangé (Fisher–Yates) ; jamais deux fois la même réponse dans une série. 5 000 séries toutes différentes, réponses = 3,14 × diamètre (0 écart), mesure de l'énoncé = mesure du dessin.
- **Valeur de π jamais donnée avant de répondre** (seulement dans la correction) : un élève qui utilisait 3,1416 ou la touche π était compté faux → « Utilise π = 3,14 » affiché sous la question (la formule n'est pas affichée : doubler le rayon fait partie de l'exercice).
- « 31,40 » refusé pour 31,4 (comparaison exacte de nombres à virgule) → comparaison tolérante, zéros finaux acceptés.
- **Aucun résultat enregistré** → enregistrement unique en fin de série. Double clic sur « Question suivante » sautait une question → bloqué.
- Nouvelle orthographe : maitrises, Entraine-toi, boite. Capture 390 px sans défilement horizontal.
- Tests jsdom : partie 7 / 10 avec doubles clics (validation et suivant) → 1 sauvegarde ; « Recommencer » → nouvelle série ; syntaxe OK.

### 05/10 — Maths › Grandeurs › Le périmètre › Le cercle › Le rayon et le diamètre cachés (`grandeur_perimetre_cercle_inverse`, `fiches/perimetre_cercle_inverse.html` + copies public et racine) — sw.js v568
- Les 14 questions d'origine recalculées (D = P ÷ 3,14, r = D ÷ 2) : réponses justes.
- **Questions qui se donnaient la réponse** : 6 paires avec le même périmètre (31,4 cm → diamètre puis 31,4 cm → rayon ; 62,8 m ; 314 dm ; 9,42 cm ; 12,56 m ; 188,4 cm) pouvaient tomber dans la même série. **Presque toujours les mêmes questions** (10 sur 14, tri biaisé).
- → Série générée : 3 diamètres, 3 rayons (cm, dm ou m) et 4 situations sur 6 (roue, tronc, boite de conserve, bassin, couvercle, piste de cirque), nouveaux nombres à chaque série, ordre Fisher–Yates, jamais deux fois le même périmètre. 5 000 séries toutes différentes, 0 écart entre l'énoncé, le dessin et la réponse.
- Contenu : « un prisme a une base circulaire » (un prisme n'a pas de base ronde) → remplacé par le couvercle ; étiquette de boite de 25,12 dm (2,5 m !) → mesures en cm réalistes.
- Signe « / » → « ÷ » dans les explications et le message de fin.
- « 1,50 » refusé pour 1,5 → comparaison tolérante. **Aucun résultat enregistré** → enregistrement unique en fin de série. Double clic sur « Question suivante » → plus de question sautée.
- Nouvelle orthographe : maitrises, Entraine-toi, boite. Capture 390 px sans défilement horizontal.
- Tests jsdom : partie 8 / 10 avec doubles clics → 1 sauvegarde ; « Recommencer » → nouvelle série ; syntaxe OK.

### 05/10 — Maths › Grandeurs › Le périmètre › Le cercle › Figures complexes (`grandeur_perimetre_cercle_compose`, `fiches/perimetre_cercle_compose.html` + copies public et racine) — sw.js v569
- Les 8 figures d'origine recalculées (π = 3,14) : réponses justes (demi-disque, quart de disque, piste, arche, vague, maison à toit arrondi, trèfle, plaque).
- **Toujours les mêmes mesures** (« Recommencer » ne changeait que l'ordre) → les 8 figures gardées, nouvelles mesures à chaque série, affichées sur les dessins ; ordre Fisher–Yates. 3 000 séries toutes différentes ; réponse recalculée depuis les cotes du dessin = réponse attendue = total de l'explication (0 écart).
- Plaque : l'explication parlait de quarts de cercle « évidés » alors que le dessin montre des coins arrondis → « coins arrondis », largeur indiquée dans la consigne. Maison : « un carré surmonté d'un demi-cercle » précisé. Vague : « les deux petits demi-cercles du bas » (l'un est en haut) corrigé.
- Dessins : cote du diamètre de la piste coupée au bord gauche → placée à l'intérieur ; cote de la vague cachée par le petit demi-cercle → placée sous la figure.
- Signe « / » → « ÷ » dans les explications. « 25,70 » refusé pour 25,7 → comparaison tolérante.
- **Aucun résultat enregistré** → enregistrement unique en fin de série (x / 8). Double clic sur « Question suivante » → plus de figure sautée.
- Nouvelle orthographe : entrainement. Captures 390 px vérifiées (8 figures, pas de défilement horizontal).
- Tests jsdom : partie 6 / 8 avec doubles clics → 1 sauvegarde ; syntaxe OK.

### 05/10 — Maths › Grandeurs › L'aire › L'Enquêteur Royal (`grandeur_aire_situations`, `fiches/aire_situations.html` + copies public et racine) — sw.js v570
- 51 situations relues (26 d'aire, 25 non) : classements justes.
- **Aucun résultat enregistré** : la fiche appelait `window.parent.handleActivityScore`, fonction qui n'existe pas → `saveResult` (une seule fois par série).
- **Le mot donnait la réponse** : 9 situations VRAI contenaient « surface » ou « superficie » dans l'énoncé (surface habitable, même surface, toute la surface, surface à poncer…) → reformulées sans ces mots (place au sol, tout l'intérieur, couvrir tout le sol…). « Rideaux de sol » (n'existe pas) → tapis de danse ; tournesol et panneau solaire reformulés.
- Tirage libre (parfois 8 VRAI sur 10) → 4 à 6 situations d'aire par série (5 000 séries : 4 / 5 / 6 à parts égales), mélange Fisher–Yates déjà en place.
- Double clic sur « Situation suivante » sautait une situation → bloqué ; un seul enregistrement en fin de série.
- Nouvelle orthographe : iles, boite, maitrises.
- Tests jsdom : partie 7 / 10 avec doubles clics → 1 sauvegarde ; « Recommencer » remet à zéro ; syntaxe OK.
- ⚠️ Même appel inexistant `handleActivityScore` (donc aucun résultat enregistré) dans 6 autres fiches, à corriger quand on y arrivera : ~~aire_quadrillage~~ (v571), ~~aire_conversions~~ (v572), ~~aire_formules~~ (v574), ~~volume_cubes~~ (v576), ~~volume_formules~~ (v577), ~~volume_conversions~~ (v578). **Les 7 fiches concernées sont corrigées.**

### 05/10 — Maths › Grandeurs › L'aire › Le Géomètre des Carreaux (`grandeur_aire_quadrillage`, `fiches/aire_quadrillage.html` + copies public et racine) — sw.js v571
- 51 figures recalculées par la formule du lacet : toutes les aires justes, aucun polygone croisé, toutes dans la grille.
- **Aucun résultat enregistré** (appel à `handleActivityScore`, fonction inexistante) → `saveResult`, une seule fois par série.
- **Figures en double / perdue** : la figure 50 était identique à la figure 43, le « losange fin vertical » identique au « petit losange », et un correctif écrasait par erreur le mini-hexagone → mini-hexagone rétabli, doublons remplacés (pentagone maison 27 cm², losange couché).
- **Noms faux** : « trapèze rectangle » sans côté vertical (sommets corrigés) ; « double escalier — monte puis descend » qui ne fait que descendre ; « hexagone » à 8 côtés → « octogone allongé » ; « bouclier » pointe en haut → « grange » ; « 6 côtés réguliers » (non réguliers).
- **Indices qui donnaient les mesures pendant la question** (« Côté 5 », « Base 6, hauteur 4 », « Diagonales 4 et 6 », « 2 colonnes × 3 rangées »…) → méthode seulement ; les mesures apparaissent dans la correction.
- Correction : formule avec les vraies mesures pour chaque type (trapèze, parallélogramme et losange n'avaient que l'aire ; le mini-hexagone était expliqué comme un rectangle « 6 × 4 = 16 ») — 51 explications vérifiées.
- Saisie vide : fenêtre `alert()` bloquante → message dans la page, rien n'est compté. Double clic sur « Figure suivante » → plus de figure sautée.
- Nouvelle orthographe : maitrises, entrainer. Capture 390 px OK.
- Tests jsdom : vide non compté, partie 7 / 10 avec doubles clics → 1 sauvegarde ; syntaxe OK.

### 05/10 — Maths › Grandeurs › L'aire › L'Arpenteur Impérial (`grandeur_aire_conversions`, `fiches/aire_conversions.html` + copies public et racine) — sw.js v572
- 51 conversions recalculées (km², hm² = ha, dam² = a, m² = ca, dm², cm², mm²) : toutes justes.
- **Aucun résultat enregistré** (`handleActivityScore` inexistante) → `saveResult`, une seule fois par série.
- **Mauvaises réponses acceptées** : tolérance de 0,1 % → « 1 000 500 » accepté pour 1 000 000 → tolérance limitée aux arrondis machine.
- **Bonnes réponses refusées** : champ numérique → « 10 000 » (avec espace) illisible, fenêtre `alert()` → champ texte, espaces de milliers et virgule acceptés, « 12abc » refusé ; vide ou illisible : message, rien n'est compté.
- Affichage « 5,00×10^10 » (notation scientifique) → nombres avec espaces de milliers ; la question 5 km² → cm² (50 milliards) remplacée par 5 km² → a.
- Doublon exact (1 km² → m² deux fois) → 2 km² → m². Questions sur la même quantité (1 ha → m² / 10 000 m² → ha ; 500 a → ha / 5 ha → a…) : jamais ensemble dans une série (5 000 séries : 0).
- Astuce « la France fait ±55 M ha » → Belgique ≈ 30 700 km² ≈ 3 millions d'hectares.
- Double clic sur « Question suivante » → plus de question sautée. Nouvelle orthographe : maitrisées, maitrises, entrainer.
- Tests jsdom : vide et « 12abc » non comptés, « 40 000 » accepté, réponse à 0,05 % près refusée, partie 7 / 10 → 1 sauvegarde ; syntaxe OK.

### 05/10 — Maths › Grandeurs › L'aire › Mesures agraires & superficies (`grandeur_aire_agraire`, `fiches/aire_agraire.html` + copies public et racine) — sw.js v573
- 10 conversions et 10 problèmes recalculés : réponses justes. Données irréalistes corrigées : vigne à 800 L de vin par are (≈ 16 fois la réalité) → 50 L/are (réponse 6 000 L) ; terrain boisé à 15 €/m² → terrain agricole à 3 €/ca (15 000 €, réponse inchangée : 50 a).
- **« 12abc » accepté comme 12**, réponse vide → fenêtre `alert()` → lecture stricte, message dans la page, rien n'est compté. Espaces de milliers acceptés (déjà le cas).
- **Entrée sur la dernière question** passait à une 11e question inexistante (erreur) → Entrée affiche le résultat. Double clic sur « Question suivante » → plus de question sautée ; un seul enregistrement (il y en avait un par clic).
- **Abaque** : la virgule se plaçait sur la case suivante (vide) → « 3,5 » s'affichait « 35, » → virgule après le dernier chiffre écrit, une seule par ligne ; abaque vidé à chaque question (les chiffres de la question précédente restaient).
- Problèmes : l'unité attendue (ha, a, ca, m², litres, parcelles, rouleaux) est maintenant affichée à côté de la réponse, comme pour les conversions.
- Message de fin affichant du code LaTeX brut (« $1\\text{ ha} = 1\\text{ hm}^2$ ») → « 1 ha = 1 hm² ». Signe « − » dans les explications. Nouvelle orthographe : maraichères, maraicher, maitrises, entrainer.
- Tests jsdom : abaque « 3,5 », vide/« 12abc » non comptés, « 6 000 » accepté, partie 8 / 10 avec doubles clics et doubles Entrée → 1 sauvegarde ; capture 390 px ; syntaxe OK.

### 05/10 — Maths › Grandeurs › L'aire › L'Arpenteur du Château (`grandeur_aire_formules`, `fiches/aire_formules.html` + copies public et racine) — sw.js v574
- 50 situations générées (carrés, rectangles, triangles, parallélogrammes, trapèzes) : sur 2 000 séries, l'aire attendue = formule appliquée aux cotes du dessin (0 écart), toujours entière, grande base > petite base.
- **Aucun résultat enregistré** (`handleActivityScore` inexistante) → `saveResult`, une seule fois par série.
- **Nom du lieu jamais affiché** (le code cherchait le nom dans la phrase, où il n'est pas) → nom et forme en titre de chaque mission.
- **Double clic sur « Vérifier »** : le 2e clic tombait sur « Continuer » et sautait la correction → ignoré pendant 0,6 s ; un seul enregistrement. Entrée : Vérifier puis Continuer (ne faisait rien avant).
- Saisie : champ numérique + fenêtre `alert()` → champ texte, virgule et espaces acceptés, vide/illisible : message, rien n'est compté.
- Tirage : 10 parmi 50 au hasard (parfois aucun carré) → 2 figures de chaque type. Rectangles aux côtés égaux (≈ 4 %) → évités.
- « Pavillon … toiture de chaume … surface au sol » → nouveau plancher. Score « Restauration » coupé à 390 px → marges réduites sur téléphone (capture vérifiée).
- Nouvelle orthographe : entrainement, Entraine-toi.
- Tests jsdom : vide/« 12abc » non comptés, double clic sans saut, partie 7 / 10 → 1 sauvegarde ; syntaxe OK.

### 05/10 — Maths › Grandeurs › L'aire › Le calcul d'aires composées (`grandeur_aire_composee`, `fiches/aire_composee.html` + copie public) — sw.js v575
- 10 figures générées (maison, cadre, L, plaque à encoche, flocon, carré évidé, scène, pelouse et bassin, flèche, triangle troué) : sur 2 000 séries, l'aire recalculée depuis les cotes du dessin (ou les paramètres) = réponse attendue = total de la correction. Enregistrement du résultat déjà en place (doublé par un double clic → une seule fois).
- **Plaque à encoche** : l'énoncé faisait du diamètre de l'encoche la largeur de la plaque, alors que le dessin montre une encoche plus étroite → largeur = diamètre + 2 à 4 unités (cotes différentes, comme sur le dessin).
- **Mauvaises réponses acceptées** : tolérance de 0,01 → « 85,88 » accepté pour 85,87 → tolérance limitée aux arrondis machine. « 12, » (virgule sans décimale) n'est plus validé.
- Double clic sur « Question suivante » → plus de question sautée.
- Cotes coupées au bord du dessin (« 12 dm » à gauche du triangle, hauteur du L à droite) → zone de dessin élargie (captures 390 px vérifiées).
- Signes « ÷ » et « − » dans les corrections (« / 2 », « - »). Nouvelle orthographe : maitrises, entrainement.
- Tests jsdom : « 12, » non compté, réponse fausse d'un centième refusée, partie 7 / 10 avec doubles clics → 1 sauvegarde ; syntaxe OK.

### 06/10 — Maths › Grandeurs › Le volume › Le Bâtisseur de cubes (`grandeur_volume_cubes`, `fiches/volume_cubes.html` + copies public et racine) — sw.js v576
- 15 structures : total = somme des colonnes de la grille, égal au total de chaque explication.
- **Cubes invisibles** : analyse par rendu (Chromium, chaque colonne ± 1 cube comparée pixel par pixel) → dans 9 dessins, une case du fond est entièrement cachée par une colonne de devant. Elle est vide dans 8 cas, mais la **Petite Pyramide** comptait un cube de coin totalement invisible (réponse 11 impossible à trouver sur le dessin). → Règle affichée sous chaque dessin : « aucun cube ne flotte ; les seuls cubes cachés sont ceux qui en portent d'autres (ou ceux que l'indice signale) » ; indice de la pyramide : « la base est un carré complet de 3 × 3 cubes ».
- **« Le Pont »** : « il y a un trou sous le pont » était faux (le creux est derrière, et invisible) et l'explication inversait devant / derrière → « Le Mur et ses deux tours », indice et explication corrigés.
- **Aucun résultat enregistré** (`handleActivityScore` inexistante) → `saveResult`, une seule fois par série.
- Saisie : `parseInt` (« 12abc » = 12) + fenêtre `alert()` → lecture stricte, message dans la page, rien n'est compté.
- Double clic sur « Structure suivante » → plus de structure sautée ; Entrée passe à la suite (pas sur un double Entrée).
- Tests jsdom : vide/« 12abc » non comptés, double Entrée sans saut, partie 7 / 10 → 1 sauvegarde ; capture 390 px ; syntaxe OK.

### 06/10 — Maths › Grandeurs › Le volume › L'Architecte des pavés (`fiches/volume_formules.html` + copies public et racine) — sw.js v577
- Solides générés (cubes de 2 à 6 cm, pavés jusqu'à 8 × 5 × 6 cm) : sur 3 000 séries, les cotes du dessin = mesures du calcul, et le volume de l'explication = L × l × h.
- **Aucun résultat enregistré** (`handleActivityScore` inexistante) → `saveResult` sous `grandeur_volume_architecte` (identifiant du menu et du plan de travail ; l'ancien nom de la fiche, `grandeur_volume_formules`, n'aurait pas été reconnu), une seule fois par série.
- Tirage : 35 % de chances de cube à chaque question (parfois aucun cube, parfois 7) et mêmes mesures possibles deux fois → 3 cubes + 7 pavés par série, mélangés, jamais deux fois les mêmes mesures ; un « pavé » aux trois mesures égales (un cube) est évité.
- Cote de la hauteur placée sur la face de droite, à côté de la profondeur (confusion) → à gauche de l'arête avant, hors du solide (captures 390 px vérifiées).
- Saisie : `parseInt` (« 12abc » = 12) + fenêtre `alert()` → lecture stricte, espaces de milliers acceptés, message, rien n'est compté. Double clic sur « Solide suivant » → plus de solide sauté ; Entrée passe à la suite (pas sur un double Entrée).
- Nouvelle orthographe : maitrisée.
- Tests jsdom : vide/« 12abc » non comptés, double Entrée sans saut, partie 7 / 10 → 1 sauvegarde ; syntaxe OK.

### 06/10 — Maths › Grandeurs › Le volume › Le Laboratoire des liquides (`grandeur_volume_liquides`, `fiches/volume_conversions.html` + copies public et racine) — sw.js v578
- Conversions générées (m³, dm³, cm³ ↔ l, dl…) : sur 3 000 séries, réponse = calcul exact, explication cohérente, jamais de conversion capacité → capacité (choix de Jeremy noté dans le code).
- **Aucun résultat enregistré** : `handleActivityScore` inexistante, et avec l'ancien identifiant `grandeur_volume_conversions` → `saveResult` sous `grandeur_volume_liquides` (identifiant du menu et du plan), une seule fois par série.
- Saisie : « 12abc » lu comme 12, fenêtre `alert()` → lecture stricte (espaces de milliers et virgule acceptés), message, rien n'est compté ; comparaison tolérante aux arrondis machine.
- Même quantité deux fois dans une série (ex. 2 dm³ → cm³ puis 2 000 cm³ → dm³) → évité. Double clic sur « Conversion suivante » → plus de question sautée ; Entrée passe à la suite (pas sur un double Entrée).
- Symboles de capacité en minuscules comme dans le reste du site (ml, cl, dl, l, dal, hl ; avant mL, L, kL…) ; le kilolitre (peu utilisé en primaire) n'est plus demandé, l'abaque indique « m³ = 1 000 l ». Nombres affichés avec espaces de milliers.
- Nouvelle orthographe : maitrises, entrainer. Capture 390 px OK.
- Tests jsdom : vide/« 12abc » non comptés, « 2 500 » accepté, double Entrée sans saut, partie 7 / 10 → 1 sauvegarde ; syntaxe OK.

### 06/10 — Maths › Grandeurs › Les durées › Conversions (`grandeur_durees_conversions`, index › CONVERSIONS_BANK / validateDureesExercise) — sw.js v579
- 41 conversions vérifiées par programme (h, min, s, jours, semaines, an ; ½, ¼, ¾, 1/10) : toutes justes. Correctif du 05/10 (« 03 » = 3, « 00 » = 0) toujours en place.
- **Résultat jamais reconnu** : enregistré sous « durées_conversions », alors que le menu et le plan de travail cherchent `grandeur_durees_conversions` → bon identifiant ; les anciens résultats restent reconnus (table `RESULT_ID_ALIASES`, aussi prévue pour « durées_entre2heures »).
- **Questions qui se donnaient la réponse** : 11 paires (« 1h30 = ? min » / « 90 min = ? h ? min », « 2 jours = ? h » / « 48 h = ? j ? h »…) pouvaient tomber dans la même série → jamais ensemble (5 000 séries : 0).
- **Cases vides comptées fausses sans prévenir** → fiche vide ignorée ; cases vides : avertissement, le 2e clic corrige quand même. Double validation bloquée (un seul enregistrement).
- Symbole des secondes : « sec » → « s ».
- Tests node/jsdom : clé de quantité lue pour les 41 questions, vide ignoré, avertissement puis correction, 7 / 10 enregistré une fois ; index : 6 / 7 scripts OK.

### 06/10 — Maths › Grandeurs › Les durées › Durée entre 2 heures (`grandeur_durees_entre`, index › DUREE_ENTRE_BANK / checkDureeEntre) — sw.js v580
- 20 durées recalculées par programme (y compris les 4 qui passent minuit) : toutes justes, aucun doublon.
- **Résultat jamais reconnu** : enregistré sous « durées_entre2heures » → `grandeur_durees_entre` (anciens résultats reconnus via `RESULT_ID_ALIASES`).
- **Point compté au 2e essai** → seulement au premier essai (message « correct au 2e essai, pas de point »).
- **Case vide = essai perdu** → message, rien n'est compté. **Double clic** sur Valider consommait les 2 essais d'un coup → un essai à la fois.
- **« Recommencer » pendant le passage automatique** faisait sauter la 1re question de la nouvelle partie → passages en attente annulés.
- Passages de minuit : « (le lendemain) » ajouté à l'énoncé et sous l'heure d'arrivée (« De 20h50 à 6h07 » était ambigu). Entrée : passe aux minutes, puis valide.
- Tests jsdom : vide sans essai, double clic = 1 essai, juste au 2e essai = 0 point, Recommencer sans saut, partie 4 / 5 → 1 sauvegarde ; index : 6 / 7 scripts OK.

### 06/10 — Maths › Grandeurs › Les durées › Quelle heure est-il ? (avec secondes) (`grandeur_durees_heure_secondes`, `fiches/heure_secondes.html` + copies public et racine) — sw.js v581
- Correctif du 05/10 toujours en place (15 h accepté pour 3 h, 00 h pour 12 h, saisie jusqu'à 23 h). Aiguilles vérifiées : position exacte des 3 aiguilles pour l'heure demandée.
- **Aucun résultat enregistré** → `saveResult` en fin de parcours, une seule fois.
- **Score toujours parfait** : le parcours se termine à 5 bonnes réponses ; une erreur ne faisait que retirer un cœur → score = horloges lues juste / horloges proposées (ex. 5 / 6), aussi affiché en fin de parcours.
- **« Recommencer » pendant le délai** après une réponse : la question ou l'écran de fin de l'ancien parcours s'affichait dans le nouveau → suites en attente annulées.
- L'aiguille des heures tient maintenant compte des secondes (avant : avançait par minute seulement).
- La copie racine garde son propre chemin d'image (`assets/…` au lieu de `../assets/…`) ; le reste est identique aux 2 autres copies.
- Tests jsdom : aiguilles exactes, 15 h accepté pour 3 h, double clic sans double comptage, Recommencer sans fuite, parcours 5 / 6 → 1 sauvegarde ; syntaxe OK.

### 06/10 — Maths › Grandeurs › Les durées › Le Labo des durées (`grandeur_durees_situations`, `fiches/durees_situations.html` + copies public et racine) — sw.js v582
- 10 situations générées (durée, heure d'arrivée, heure de départ ; train, cinéma, four, école, voiture) : sur 2 000 tirages de chacune, réponse = écart réel entre les deux heures, heures valides (pas de passage de minuit).
- **Schéma de correction faux pour l'heure de départ** (3 situations sur 10) : le premier bond était étiqueté avec les minutes de l'heure de départ au lieu du complément à l'heure (« 8h15 → 9h00 : −15 min » au lieu de −45 min) → corrigé ; chaque bond du schéma recalculé (12 000 schémas : 0 erreur). Signe « − » dans les calculs.
- **Réponse vide comptée** comme « 0 h 00 » (donc fausse) → message, rien n'est compté ; pour une durée, heures vides = 0 (« 45 min »). Lecture stricte des cases.
- **Double Entrée** sautait la correction ; Entrée après la dernière question réenregistrait le résultat → correction affichée au moins 0,6 s, un seul enregistrement.
- Libellé « Durée du trajet » aussi pour le cinéma, le four, l'école → « Durée ».
- Nouvelle orthographe : Entraine-toi, maitrises, entrainer, Entrainement terminé.
- Tests jsdom : vide non compté, double Entrée sans saut, partie 7 / 10 (les 3 types) → 1 sauvegarde ; capture 390 px du schéma de départ ; syntaxe OK.

### 06/10 — Maths › Grandeurs › La monnaie › Paie le commerçant (`grandeur_monnaie_payer`, `fiches/payer_le_commercant.html` + copies public et racine) — sw.js v583
- 20 articles (0,95 € à 149,90 €) : chaque prix peut être payé exactement avec au plus 5 pièces ou billets de chaque sorte (vérifié par recherche exhaustive). Résultat déjà enregistré sous le bon identifiant.
- **Double clic sur « Valider »** avec la bonne somme : l'achat était compté deux fois et l'article suivant sauté → « Valider » ignoré pendant le message.
- **Score toujours 5 / 5** (l'élève recommence le même article jusqu'à réussir ; une erreur ne retirait qu'un cœur) → score = paiements justes / essais (ex. 5 / 6), même règle que « Quelle heure est-il ? » ; écran de fin adapté.
- **Plusieurs enregistrements** possibles en fin de partie (clics pendant le délai) → un seul. **« Recommencer » pendant un message** : l'ancien message faisait avancer la nouvelle partie → annulé.
- Nouvelle orthographe : boite.
- Pièces de 1 et 2 cents : on garde (décision de Jeremy, 06/10), même si les paiements en espèces sont arrondis à 5 cents en Belgique.
- Tests jsdom : cadre vide sans cœur perdu, double clic = 1 achat, Recommencer sans saut, partie 5 / 6 → 1 sauvegarde ; syntaxe OK.

### 06/10 — Maths › Grandeurs › La monnaie › Rends la monnaie (`grandeur_monnaie_rendre`, `fiches/rendre_la_monnaie.html` + copies public et racine) — sw.js v584
- 20 achats (1,15 € à 35,90 €, payés avec un billet de 5 à 50 €) : billet toujours supérieur au prix, et chaque monnaie à rendre est faisable avec au plus 5 pièces ou billets de chaque sorte (recherche exhaustive). Résultat déjà enregistré sous le bon identifiant.
- Même moteur que « Paie le commerçant », mêmes défauts et mêmes corrections : double clic sur « Valider » = client compté deux fois et suivant sauté ; score toujours 5 / 5 → score = monnaies rendues juste / essais ; plusieurs enregistrements possibles → un seul ; « Recommencer » pendant un message → plus d'effet sur la nouvelle partie.
- Nouvelle orthographe : boite.
- Tests jsdom : cadre vide sans cœur perdu, double clic = 1 client, Recommencer sans saut, partie 5 / 6 → 1 sauvegarde ; syntaxe OK.

### 06/10 — Maths › Grandeurs › La monnaie › Deux objets — Rends la monnaie (`grandeur_monnaie_deux_objets`, `fiches/deux_objets_monnaie.html` + copies public et racine) — sw.js v585
- 20 paires d'objets (prix cohérents avec les deux autres fiches de monnaie, aucune paire en double) : billet toujours supérieur au total, monnaie à rendre faisable avec au plus 5 pièces ou billets de chaque sorte (recherche exhaustive). Résultat déjà enregistré sous le bon identifiant.
- Même moteur que « Paie le commerçant » et « Rends la monnaie », mêmes corrections : double clic sur « Valider » = client compté deux fois → ignoré pendant le message ; score toujours 5 / 5 → monnaies rendues juste / essais ; un seul enregistrement ; « Recommencer » pendant un message sans effet sur la nouvelle partie.
- Nouvelle orthographe : boite.
- Tests jsdom : cadre vide sans cœur perdu, double clic = 1 client, Recommencer sans saut, partie 5 / 6 → 1 sauvegarde ; syntaxe OK. **Les 3 fiches de monnaie sont vérifiées.**

### 06/10 — Recettes (`grandeur_proportionnalite_exercice`, fiches/proportionnalite.html) — sw.js v586
- Contenu : 30 situations vérifiées, toutes les réponses entières (max 625).
- Le nombre de cases de réponse révélait le nombre de chiffres → toujours 3 cases.
- Pastilles « personnes » affichées pour des sachets, étagères… → boites neutres pour les unités non humaines.
- Double Entrée sautait la correction ; Entrée après la dernière question pouvait enregistrer plusieurs fois → garde 600 ms + un seul enregistrement (try/catch).
- Entrée après validation ne faisait rien (champs désactivés) → Entrée passe à l'exercice suivant.
- Débordement à 390 px (pastilles de progression à 440 px) → media query téléphone.
- Orthographe : œufs, boites, maitrises, entrainement, entrainer.
- Tests : jsdom (3 cases, réponse vide non comptée, double Entrée, partie 4/5 → 1 seul saveResult), node --check 7 OK, Playwright 390 px (scrollWidth 390).

### 06/10 — Le rallye des bolides (`grandeur_proportionnalite_rallye_bolides`, fiches/rallye_bolides.html) — sw.js v587
- Contenu : 13 véhicules, rapports vérifiés. « Le TGV relie Bruxelles à Paris » avec 1 000 km en 4 h était faux → contexte neutre (ligne à grande vitesse).
- Tableaux figés (toujours les mêmes 3 colonnes, toujours distance/temps/distance cachés) → colonnes tirées au hasard parmi les multiples du rapport (½, 1½, 2, 2½, 3, 4, 5 fois la référence et l'unité), dans un ordre aléatoire, cases cachées variées (au moins une distance et un temps). 300 tirages × 13 : aucune erreur.
- Dessins inadaptés : marcheur et poney sur un vélo, camion en voiture, skateur en trottinette → 4 nouveaux dessins (camion, marcheur, poney, skate).
- Saisie : parseInt acceptait 12,5 → 12 ; champs number refusaient « 3 200 » → champ texte numérique, lecture stricte, espaces acceptés, message sans compter l'essai.
- Correction « Rép: 60 » en vert → « Réponse : 60 » en bleu ; grands nombres affichés avec espace (1 600, 8 000).
- Aucune touche Entrée → Entrée valide puis passe à la suite (garde 600 ms) ; Suivant protégé contre le double clic.
- Enregistrement : un seul, try/catch, drapeau remis à zéro au redémarrage. Bulles : minuteries annulées (plus de bulle effacée trop tôt).
- Téléphone : tableau qui défilait horizontalement et barre du haut trop large → media query (tableau 328/328 px, page 390 px).
- Orthographe : s'entraine, maitrises, Entraine-toi.
- Tests : jsdom (vide et « 12abc » non comptés, « 4 000 » accepté, double Entrée bloquée, partie 4/5 → 1 seul saveResult, redémarrage), node --check 7 OK, Playwright 390 px.

### 06/10 — Le supermarché malin (`grandeur_proportionnalite_supermarche_malin`, fiches/supermarche_malin.html) — sw.js v588
- Contenu : 7 produits, prix unitaires justes. Mais 7 exercices pour 5 par partie, toujours dans la même disposition → 2 variantes par produit (14 comparaisons, prix unitaires exacts au cent, 7 fois le grand paquet gagne, 7 fois le petit), une variante tirée au hasard, paquets placés au hasard en A ou B (A meilleur 50,8 % sur 4 000 parties), 5 produits différents par partie.
- Correction trop tolérante : marge de 0,011 € → 1,01 € accepté pour 1,00 € → comparaison exacte au cent.
- Saisie : champ « number » (une virgule vidait le champ dans certains navigateurs, « 1,8abc » accepté par parseFloat) → champ texte décimal, lecture stricte (« 1,8 », « 1,80 », « 1.80 », « 1,80 € » acceptés ; 3 décimales ou lettres → message, essai non compté).
- Correction : « Réponse : 1,50 € » en bleu sous chaque case fausse (en plus du message).
- Libellés : « Prix au kg (pour 1 kg) » → « Prix au kg » ; « Prix à l'unité » → « Prix d'un œuf ».
- Entrée valide puis passe à la suite (garde 600 ms) ; Suivant protégé ; un seul enregistrement (try/catch), drapeaux remis à zéro au redémarrage.
- Téléphone : barre du haut à 411 px → media query (390 px).
- Orthographe : Entraine-toi. Copie racine : chemin d'images `assets/` (GitHub Pages sert la racine), fiches/ et public/fiches/ identiques.
- Tests : jsdom (données vérifiées, vide / « 1,8abc » / « 1,234 » non comptés, +1 cent refusé avec correction bleue, double Entrée bloquée, partie 4/5 → 1 seul saveResult, redémarrage), node --check 7 OK, Playwright 390 px et 1 100 px.

### 06/10 — QCM de vitesse horaire (`grandeur_vitesse_horaire_qcm`, fiches/vitesse_situations.html) — sw.js v589
- Contenu : 50 situations (niveau 1 : 30, niveau 2 : 20) recalculées par programme → toutes justes, 4 options distinctes. Le poney (15 km en 30 min) refaisait le calcul de l'adolescent en scooter → 12 km en 30 min (24 km/h).
- **Aucun résultat n'était enregistré** → saveResult (`grandeur_vitesse_horaire_qcm`, « QCM niveau 1/2 »), une fois par série, try/catch.
- Bonne réponse non mélangée dans fiches/ (position B 19/30 au niveau 1, A 19/20 au niveau 2) ; les copies racine/public mélangeaient avec sort(random) → Fisher–Yates partout, options mélangées en suivant la bonne (≈ 25 % par position sur 3 000 séries). Les 3 copies sont de nouveau identiques.
- Plusieurs questions d'une série avaient la même réponse (niveau 2 : cinq fois 80 km/h dans la banque) → jamais deux fois la même réponse dans une série.
- Double clic sur « Question suivante » sautait une question → garde 600 ms ; Entrée passe à la suite après réponse ; retour au menu coupe la série.
- Orthographe : s'entraine (×2), Entrainement, Entraine-toi, entrainement, « Maitre de la règle de trois ».
- Tests : jsdom (positions, doublons, double clic, Entrée, niveaux 1 et 2 → 1 saveResult chacun), node --check 7 OK, Playwright 390 px (menu et jeu).

### 06/10 — L'échelle (`grandeur_echelle`, fiches/grandeurs_echelle.html + activités 1 à 4) — sw.js v590
Défauts communs aux 4 activités :
- **Aucun résultat enregistré** → saveResult `grandeur_echelle` une fois par partie, try/catch, titre « L'échelle — <activité> (Niveau N) ».
- Score toujours 100/100 (10 pts dès qu'on finissait par trouver, essais infinis) → une question compte seulement sans erreur ; 2 essais par étape, puis la réponse s'affiche en bleu et on continue. Affichage « Réussies : x » et « x / 10 » (« x / 5 » pour l'architecte).
- Champs « number » (virgule refusée selon le navigateur, parseFloat laxiste) → champs texte décimaux, lecture stricte, vide ou lettres = message sans compter l'essai ; nombres affichés avec virgule et espaces (1 400 cm, 4,45 km).
- Tolérances trop larges (± 1 m, ± 5 km) → résultat exact (au niveau 4 : exact ou arrondi au km).
- Pas de garde sur « Question suivante » ; Entrée ajoutée (valide l'étape en cours puis passe à la suite, 600 ms).
- Mise en page : carte 800 × 600 écrasée à 1 100 px (un lieu sortait du cadre) et débordement à 390 px (587 à 643 px) → la carte est réduite proportionnellement (règle comprise) et les coordonnées du glisser-déposer sont recalculées ; testé à la souris dans Chromium à 390, 768 et 1 100 px (erreur de placement < 2 px). Page à 390 px.
- Orthographe : entrainement, entrainer, Entraine-toi, maitre d'œuvre.
Spécifique :
- 1 Arpenteur des Ardennes : paires de lieux tirées sans remise (10 paires différentes sur 15).
- 2 Architecte : meubles dans un ordre aléatoire ; « Hauteur » → « Profondeur » (plan vu du dessus) ; « bureau du maître » → « bureau de l'enseignant » ; après 2 tailles fausses les curseurs se règlent seuls.
- 3 Convertisseur : situations irréalistes (camion de pompiers de 20 cm, acarien de 10 mm, distance de 20 m entre deux abbayes, tache de coccinelle de 3 cm) et nombres à rallonge (0,30000000000000004) → 24 situations avec longueurs réelles plausibles, valeurs « rondes », thèmes en rotation, jamais deux fois la même situation (0 doublon sur 1 000 séries, sens plan→réel / réel→plan ≈ 50/50). Description du menu corrigée (« 40 scénarios » faux).
- 4 Messager d'Europe : toutes les paires de capitales avant répétition, jamais deux fois de suite la même.
- Tests : jsdom pour les 4 activités (vide / lettres non comptés, 2 erreurs → réponse bleue et point perdu, double clic, fin → 1 seul saveResult), node --check 7 OK ×4, Playwright (glisser-tourner la règle) et captures 390 / 768 / 1 100 px. Copies racine = fiches avec `assets/` (comme avant).

### 06/10 — Identifier les polygones (`polygones_reconnaitre`, fiches/polygones_reconnaitre.html) — sw.js v591
- **Aucun résultat enregistré** → saveResult `polygones_reconnaitre`, une fois par série, try/catch.
- Mélange biaisé sort(random) (options et tirage) → Fisher–Yates (bonne réponse A/B/C ≈ 33 % chacune sur 2 000 séries).
- Distracteurs tirés n'importe où (« un dodécagone ? un triangle ? un quadrilatère ? ») alors que le commentaire annonçait des voisins → 2 distracteurs à 1 ou 2 côtés près.
- Formes irrégulières figées (7 graines) et peu lisibles : octogone, décagone et dodécagone irréguliers avec des sommets presque plats (6° d'écart) et des côtés de 10 px → irréguliers tirés au hasard avec rejet (angle ≥ 14° du plat, côté ≥ 24 px), réguliers avec rotation au hasard, points visibles aux sommets.
- Série : les 8 types + 2 en plus, jamais deux fois le même type de suite.
- Pastilles de progression vertes même après une erreur → rouges pour les erreurs.
- « Forme suivante » protégé (600 ms) ; Entrée passe à la suite après réponse.
- Tests : jsdom (2 000 séries : positions, distracteurs voisins, 0 forme illisible, 0 doublon consécutif ; partie 7/10 → 1 seul saveResult ; double clic), node --check 7 OK, Playwright 390 px + planche de 10 formes irrégulières.

### 06/10 — Caractéristiques des polygones (`polygones_caracteristiques`, fiches/polygones_caracteristiques.html) — sw.js v592
- Contenu : 30 questions, toutes justes.
- **Aucun résultat enregistré** → saveResult `polygones_caracteristiques`, une fois par série, try/catch.
- Mélange biaisé sort(random) (dans la banque, la bonne réponse était en C 23 fois sur 30) → Fisher–Yates (≈ 33 % par position sur 3 000 séries).
- Questions qui se donnaient la réponse dans une même série (« 6 côtés → hexagone » et « un hexagone a… 6 côtés », « un hexagone régulier… 120° » et « … pentagone 108° », etc.) → chaque question porte ses notions, une série n'en contient jamais deux qui partagent une notion (0 sur 3 000 séries).
- Bonne réponse repérable car la plus longue (polygone régulier, triangle équilatéral, définition du polygone, rectangle) → distracteurs de même longueur et de même forme ; « le moins grand nombre » → « le plus petit nombre » ; distracteurs plus proches (décagone/dodécagone, 45°/60°/90°).
- Pastilles vertes même après une erreur → rouges ; « Question suivante » protégé (600 ms) ; Entrée passe à la suite.
- Tests : jsdom (positions, notions, double clic, partie 8/10 → 1 seul saveResult), node --check 7 OK, Playwright 390 px.

### 06/10 — Identifier les triangles (`triangles_qcm`, fiches/triangles_QCM.html) — sw.js v593
- Contenu : les 12 triangles dessinés étaient bien classés (côtés et angles recalculés). Mais la banque de 25 n'en comptait que 12 différents → le même triangle revenait souvent 2 fois dans une série ; base toujours horizontale, sommet de l'isocèle toujours au milieu.
- **Aucun résultat enregistré** → saveResult `triangles_qcm`, une fois par série, try/catch.
- Égalité de côtés à deviner à l'œil (scalène 132,7 / 150 / 162,8 ; isocèle 55-55-70 presque équilatéral) → codage : petits traits sur les côtés de même longueur (en plus du carré de l'angle droit) + phrase d'aide.
- Triangles construits au hasard (loi des sinus), tournés dans tous les sens : scalène = côtés différents d'au moins 15 %, acutangle ≤ 80°, obtusangle ≥ 105°. Série = les 7 sortes + 3, jamais deux fois la même de suite.
- Distracteurs au hasard → un distracteur garde les mêmes côtés, l'autre la même sorte d'angles (il faut juger les deux).
- Mélange biaisé sort(random) → Fisher–Yates (≈ 33 % par position) ; pastilles rouges pour les erreurs ; « Triangle suivant » protégé (600 ms) ; Entrée passe à la suite.
- Tests : jsdom (2 000 séries : classement recalculé depuis le dessin 0 erreur, codage 0 erreur, rien hors cadre ; partie 6/10 → 1 seul saveResult ; double clic), node --check 7 OK, Playwright 390 px + planche des 7 sortes.

### 06/10 — Caractéristiques des triangles (`triangles_caracteristiques`, fiches/triangles_caracteristiques.html) — sw.js v594
- Contenu : 30 questions justes, mais 3 options ambiguës (un équilatéral est aussi isocèle) : « Un triangle isocèle possède… 3 côtés égaux » (distracteur) → « 2 angles droits » ; « Un équilatéral possède… 2 côtés égaux » → « seulement 2 côtés égaux » ; « 3 côtés égaux, je suis forcément… un isocèle acutangle » → « un isocèle rectangle ».
- **Aucun résultat enregistré** → saveResult `triangles_caracteristiques`, une fois par série, try/catch.
- Mélange biaisé sort(random) (bonne réponse en C 29 fois sur 30 dans la banque) → Fisher–Yates (≈ 33 % par position).
- Questions qui se donnaient la réponse dans une même série (équilatéral : 7 questions ; rectangle : « 1 angle droit » et « 2 angles droits impossible », etc.) → notions par question, jamais deux fois la même notion dans une série (0 sur 3 000).
- Bonne réponse nettement la plus longue (« 1 angle de 90° et 2 angles aigus », « 3 angles de 60° et 3 côtés isométriques », « peut être acutangle, rectangle ou obtusangle »…) → distracteurs de même forme et de même longueur.
- Pastilles rouges pour les erreurs ; « Question suivante » protégé (600 ms) ; Entrée ; espace insécable avant « ? » (le point d'interrogation partait seul à la ligne à 390 px, corrigé aussi dans Caractéristiques des polygones).
- Tests : jsdom (positions, notions, double clic, partie 8/10 → 1 seul saveResult), node --check 7 OK, Playwright 390 px.

### 06/10 — Les hauteurs du triangle (`solide_triangles_hauteurs`, fiches/triangles_hauteurs.html) — sw.js v595
- **La bonne réponse était toujours « La droite verte »** (couleur fixée par type : hauteur verte, médiane bleue, piège violet ; seul l'ordre des boutons changeait) → couleurs tirées au hasard (verte / bleue / violette ≈ 1/3 chacune sur 4 000 questions).
- **Orthocentre placé au hasard** (point dessiné à `(P_AB.x, P_BC.y − 28)`, pas sur les hauteurs) → H calculé exactement (intersection des hauteurs, vérifiée sur les 3).
- Hauteur et médiane parfois confondues à l'œil (sommet C au-dessus du milieu de la base) → pied de la hauteur à au moins 18 % de la base du milieu et du « piège » ; triangles acutangles nets (angles 40°–80°).
- Triangles rectangle et obtusangle toujours identiques (mêmes coordonnées pour 3 questions chacun) → tirés au hasard (obtus 110°–140° en A, tout reste dans le cadre). Les deux questions « rectangle en A, hauteur relative à [AB] » et « … à [AC] » dans la même série se donnaient la réponse → une seule des deux ; série = 4 acutangles, 2 rectangles, 3 obtusangles, 1 orthocentre.
- Mélanges sort(random) → Fisher–Yates. Après une erreur, la bonne réponse est montrée (✅ + contour vert, hauteur épaissie).
- « Continuer » protégé (600 ms), Entrée ; enregistrement unique avec try/catch.
- Orthographe : maitrise, entrainer.
- Tests : jsdom (500 séries : 0 triangle manquant, couleurs équilibrées, écart P/M/S ≥ 18 %, orthocentre juste ; partie 7/10 → 1 seul saveResult ; double clic), node --check OK, rendus Playwright (géométrie ; Tailwind non chargé dans l'environnement de test, mise en page inchangée).

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
| ✅ 05/10 | Les types de phrases | `gram_types_phrases` | fiches/types_de_phrases.html |  |
| ✅ 05/10 | QCM - Affirmative ou négative | `gram_affirm_neg_qcm` | fiches/phrases_affirm_neg.html |  |
| ✅ 05/10 | Transformation de phrases | `gram_affirm_neg_transfo` | fiches/phrases_transfo.html |  |
| ✅ 05/10 | Passives ou actives ? | `gram_pass_act` | index › (?) | (code à localiser) |
| ✅ 05/10 | Phrase simple / complexe | `gram_phrase_simple_complexe` | fiches/grammaire_phrase_simple_complexe.html |  |

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
| ✅ 05/10 | a / as / à | `homo_a` | index › renderHomoASynthesis |  |
| ✅ 05/10 | ou / où | `homo_ou` | index › renderHomoOuSynthesis |  |
| ✅ 05/10 | son / sont | `homo_son` | index › renderHomoSonSynthesis |  |
| ✅ 05/10 | se / ce / s' / c' | `homo_ce` | index › renderHomoCeSynthesis |  |
| ✅ 05/10 | on / ont | `homo_on` | index › renderHomoOnSynthesis |  |
| ✅ 05/10 | la / là / l'a / l'as | `homo_la` | index › renderHomoLaSynthesis |  |
| ✅ 05/10 | ces / ses / c'est / s'est / sais / sait | `homo_ces` | index › renderHomoCesSynthesis |  |
| ✅ 05/10 | leur / leurs | `homo_leur` | index › renderHomoLeurSynthesis |  |
| ✅ 05/10 | peu / peux / peut | `homo_peu` | index › renderHomoPeuSynthesis |  |
| ✅ 05/10 | sans / s'en / cent / sang | `homo_sans` | index › renderHomoSansSynthesis |  |
| ✅ 05/10 | Les homophones complexes | `homo_complexes` | fiches/homophones_complexes.html |  |

### 📖 Français — ✏️ Orthographe — Règles & Accords

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 05/10 | Détective des participes | `ortho_participe_texte` | fiches/orthographe_participe_passe_texte.html |  |
| ✅ 05/10 | Transformation à l'infini | `ortho_participe_infinitif` | fiches/orthographe_participe_passe_infinitif.html |  |
| ✅ 05/10 | PP employé seul | `ortho_participe_seul` | fiches/orthographe_participe_passe_seul.html |  |
| ✅ 05/10 | PP avec Être | `ortho_participe_etre` | fiches/orthographe_participe_passe_etre.html |  |
| ✅ 05/10 | PP avec Avoir | `ortho_participe_avoir` | fiches/orthographe_participe_passe_avoir.html |  |
| ✅ 05/10 | L'Accord parfait (Participe passé) | `ortho_participe_accord` | fiches/accord_participe.html |  |
| ✅ 05/10 | Les pluriels particuliers | `ortho_pluriels` | fiches/orthographe_pluriels_particuliers.html |  |
| ✅ 05/10 | Accord des adjectifs de couleur | `ortho_adjectifs_couleur` | fiches/orthographe_adjectifs_couleur.html |  |

### 📖 Français — ✍️ Expression écrite

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 05/10 | Connecteurs logiques | `connecteurs` | index › renderConnecteurs |  |
| ✅ 05/10 | Synonymes | `synonymes` | index › renderSynonymes |  |
| ✅ 05/10 | Antonymes | `antonymes` | index › renderAntonymes |  |
| ⬜ | Mes écrits — Atelier Plume | `mes_ecrits` | index › (?) | (code à localiser) |
| ✅ 05/10 | Les substituts du nom | `lecture_substituts` | fiches/lecture_substituts.html |  |

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
| ✅ 05/10 | Savoir écouter - Soignes | `savoir_ecouter_1` | index › startSavoirEcouter |  |
| ✅ 05/10 | Savoir écouter - Bruges | `savoir_ecouter_2` | index › startSavoirEcouter |  |
| ✅ 05/10 | Savoir écouter - Fourmi | `savoir_ecouter_3` | index › startSavoirEcouter |  |
| ✅ 05/10 | Savoir écouter - Pain perdu | `savoir_ecouter_4` | index › startSavoirEcouter |  |
| ✅ 05/10 | Savoir écouter - Hautes Fagnes | `savoir_ecouter_5` | index › startSavoirEcouter |  |
| ✅ 05/10 | Savoir écouter - L'atelier de Sandy | `savoir_ecouter_6` | index › startSavoirEcouter |  |
| ✅ 05/10 | Savoir écouter - Au club d'échecs | `savoir_ecouter_7` | index › startSavoirEcouter |  |
| ✅ 05/10 | Savoir écouter - Notice de l'étagère Lyra | `savoir_ecouter_8` | index › startSavoirEcouter |  |

### 🔢 Mathématiques — 🔢 Numération

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 05/10 | Lire un nombre | `num_lire` | index › renderNumLire |  |
| ✅ 05/10 | Écrire un nombre | `num_ecrire` | index › renderNumEcrire |  |
| ✅ 05/10 | Décomposer un nombre | `num_decomposer` | index › renderNumDecomposer |  |
| ✅ 05/10 | Classer des nombres | `num_classer` | index › renderNumClasser |  |
| ✅ 05/10 | Décimaux — L'abaque des décimaux | `num_decimaux_abaque` | index › renderAbaqueDecimaux |  |
| ✅ 05/10 | Décimaux — Devinettes décimales | `num_decimaux_devinettes` | index › renderDevinettesDecimaux |  |
| ✅ 05/10 (9d2364e) | Décimaux — Valeur d'un chiffre | `num_decimaux_relier` | index › renderRelierDecimaux |  |
| ✅ 05/10 | Décimaux — Écrire en chiffres | `num_decimaux_ecriture` | index › renderDecimauxEcriture |  |
| ✅ 05/10 | Décimaux — Droites numériques | `num_decimaux_droite` | index › renderDecimauxDroite |  |
| ✅ 05/10 | Décimaux — Le bon nombre | `num_decimaux_le_bon_nombre` | index › renderDecimauxLeBonNombre | Aucun hasard : mêmes questions, même ordre à chaque partie |
| ✅ 05/10 | Décimaux — Entre deux nombres | `num_decimaux_entre` | index › renderDecimauxEntre |  |
| ✅ 05/10 | Décimaux — Opérations devinettes | `num_decimaux_op_devinettes` | index › renderDecimauxOpDevinettes |  |
| ✅ 05/10 | Sélectionne le bon chiffre | `num_entiers_decimaux_abaque` | fiches/abaque.html |  |
| ✅ 05/10 | Comparaison de nombres | `num_entiers_decimaux_comparaison` | fiches/comparaison.html |  |
| ✅ 05/10 | Fractions simples | `num_fractions_simples` | index › renderFractionsSimples |  |
| ✅ 05/10 | Fractions complexes | `num_fractions_complexes` | index › renderFractionsExercice |  |
| ✅ 05/10 | La balance des fractions | `num_balance_fractions` | fiches/balance_fractions.html |  |
| ✅ 05/10 | Colorie les fractions | `num_fractions_colorie` | fiches/colorie_les_fractions.html |  |
| ✅ 05/10 | Opérations de fractions | `num_fractions_operations` | fiches/calculs_fractions.html |  |
| ✅ 05/10 | La fraction d'une quantité | `num_fraction_quantite` | fiches/fraction_quantite.html |  |
| ✅ 05/10 | Les nombres mixtes | `num_nombres_mixtes` | fiches/numeration_nombres_mixtes.html |  |
| ⬜ | Les pourcentages | `num_pourcentages` | index › (?) | (code à localiser) |
| ✅ 05/10 | Arrondir les décimaux | `num_decimaux_arrondir` | index › renderDecimauxArrondir |  |
| ✅ 05/10 | Diviseurs & Nombres premiers | `num_diviseurs_premiers` | fiches/nombres_diviseurs.html |  |
| ⬜ | Un peu de tout (numération) | `num_tout` | index › (?) | (code à localiser) |

### 🔢 Mathématiques — ➕ Opérations — Vocabulaire

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 05/10 | Vocabulaire des opérations (Définitions) | `op_vocabulaire_def` | fiches/vocabulaire_operations.html |  |
| ✅ 05/10 | Vocabulaire des opérations (Parties d'un calcul) | `op_vocabulaire_calc` | fiches/parties_calcul.html |  |
| ✅ 05/10 | Vocabulaire des opérations (Résolution de problèmes) | `op_vocabulaire_prob` | fiches/problemes_operations.html |  |

### 🔢 Mathématiques — ➕ Opérations — Calculs & Techniques

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Additions et soustractions | `op_add_sous` | index › (?) | (code à localiser) |
| ✅ 05/10 | Additions et soustractions — Jusque 100 | `op_add_sous_100` | index › startCalcExercise |  |
| ✅ 05/10 | Additions et soustractions — Jusque 1 000 | `op_add_sous_1000` | index › startCalcExercise |  |
| ✅ 05/10 | Additions et soustractions — Jusque 10 000 | `op_add_sous_10000` | index › startCalcExercise |  |
| ✅ 05/10 | Additions et soustractions — Jusque 100 000 | `op_add_sous_100000` | index › startCalcExercise |  |
| ✅ 05/10 | Additions et soustractions — Jusque 1 000 000 | `op_add_sous_1000000` | index › startCalcExercise |  |
| ✅ 05/10 | Fléchettes — Calcule le score | `op_add_sous_flechettes_calcule` | fiches/flechettes_calcule_le_score.html |  |
| ✅ 05/10 | Fléchettes — Atteins le score | `op_add_sous_flechettes_atteins` | fiches/flechettes_atteins_le_score.html |  |
| ⬜ | Multiplications et divisions | `op_mult_div` | index › (?) | (code à localiser) |
| ✅ 05/10 | Multiplications et divisions — Tables de multiplication | `op_mult_div_tables` | index › startMultDivExercise |  |
| ⬜ | Les 4 opérations | `op_4_operations` | index › render4OperationsScreen |  |
| ✅ 05/10 | Les 4 opérations mélangées | `op_4_operations_melangees` | index › start4OpExercise |  |
| ✅ 05/10 | Le compte est bon | `op_add_sous_compte_est_bon` | fiches/compte_est_bon.html |  |
| ✅ 05/10 | Fiche d'entraînement (Calculs) | `op_4_operations_calculs` | fiches/calculs.html |  |
| ✅ 05/10 | Calculs lacunaires | `op_4_operations_lacunaires` | fiches/calculs-4-operations.html |  |
| ✅ 05/10 | Les tables étendues | `op_tables` | index › startOpTablesExercise |  |
| ✅ 05/10 | × et ÷ par 0,1 — 10 — 100 — 1000 | `op_x10` | index › startOpX10Exercise |  |
| ✅ 05/10 | × et ÷ par 0,5 — 5 — 50 — 500 | `op_x5` | index › startOpX5Exercise |  |
| ✅ 05/10 | × par 9 — 90 — 99 — 9,9 | `op_x9` | index › startOpX9Exercise |  |
| ✅ 05/10 | × par 11 — 101 — 110 — 1,1 | `op_x11` | index › (?) | (code à localiser) |
| ✅ 05/10 | Caractères de divisibilité | `op_divisibilite` | fiches/divisibilite.html |  |
| ⬜ | La compensation | `op_compensation` | index › (?) | (code à localiser) |
| ⬜ | Calcul écrit | `op_calcul_ecrit` | index › (?) | (code à localiser) |
| ✅ 05/10 | Calcul écrit — Additions écrites | `op_calcul_ecrit_addition` | fiches/calcul-ecrit-addition.html |  |
| ✅ 05/10 | Calcul écrit — Soustractions écrites | `op_calcul_ecrit_soustraction` | fiches/calcul-ecrit-soustraction.html |  |
| ✅ 05/10 | Calcul écrit — Multiplications écrites | `op_calcul_ecrit_multiplication` | fiches/calcul-ecrit-multiplication.html |  |
| ✅ 05/10 | Calcul écrit — Divisions écrites | `op_calcul_ecrit_division` | fiches/calcul-ecrit-division.html |  |
| ⬜ | L'ordre des opérations | `op_ordre` | index › (?) | (code à localiser) |
| ✅ 05/10 | L'ordre des opérations — Mission PEMDAS | `op_ordre_pemdas` | fiches/mission_pemdas.html |  |
| ✅ 05/10 | L'ordre des opérations — Défi PEMDAS | `op_ordre_defi` | fiches/defi_pemdas.html |  |

### 🔢 Mathématiques — 📐 Grandeurs — Mesures de base

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 05/10 | Conversions de masses (QCM) | `grandeur_masses_qcm` | index › renderMassesQCM |  |
| ⬜ | Conversions & Abaque (QCM) | `grandeur_masses_qcm_abaque` | fiches/masses_QCM_abaque.html |  |
| ✅ 05/10 | Conversions de capacités (QCM) | `grandeur_capacites_qcm` | index › renderCapacitesQCM |  |
| ✅ 05/10 | Conversions de capacités & abaque (QCM) | `grandeur_capacites_qcm_sup` | fiches/capacites_QCM.html |  |
| ✅ 05/10 | Conversions de longueurs (QCM) | `grandeur_longueurs_qcm` | index › renderLongueursQCM |  |
| ✅ 05/10 | Conversions de longueurs & abaque (QCM) | `grandeur_longueurs_qcm_sup` | fiches/longueurs_QCM.html |  |

### 🔢 Mathématiques — 📐 Grandeurs — Périmètre, Aire & Volume

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 05/10 | Périmètre — Calcul | `grandeur_perimetre_calcul` | index › renderPerimetreCalcul |  |
| ✅ 05/10 | Périmètre — Problèmes | `grandeur_perimetre_problemes` | index › renderPerimetreProblemes |  |
| ✅ 05/10 | Périmètre du cercle — Le labo de la circonférence | `grandeur_perimetre_cercle_labo` | fiches/perimetre_cercle.html |  |
| ✅ 05/10 | Périmètre du cercle — Le rayon et diamètre cachés | `grandeur_perimetre_cercle_inverse` | fiches/perimetre_cercle_inverse.html |  |
| ✅ 05/10 | Périmètre du cercle — Figures complexes | `grandeur_perimetre_cercle_compose` | fiches/perimetre_cercle_compose.html |  |
| ✅ 05/10 | L'Enquêteur Royal (Situations d'Aire) | `grandeur_aire_situations` | fiches/aire_situations.html |  |
| ✅ 05/10 | Le Géomètre des Carreaux (Quadrillage) | `grandeur_aire_quadrillage` | fiches/aire_quadrillage.html |  |
| ✅ 05/10 | L'Arpenteur Impérial (Conversions d'Aire) | `grandeur_aire_conversions` | fiches/aire_conversions.html |  |
| ✅ 05/10 | Mesures Agraires & Superficies | `grandeur_aire_agraire` | fiches/aire_agraire.html |  |
| ✅ 05/10 | L'Arpenteur du Château (Formules d'aire) | `grandeur_aire_formules` | fiches/aire_formules.html |  |
| ✅ 05/10 | Le Calcul d'Aires Composées | `grandeur_aire_composee` | fiches/aire_composee.html |  |
| ✅ 06/10 | Le Bâtisseur de Cubes (Volume 3D) | `grandeur_volume_cubes` | fiches/volume_cubes.html |  |
| ✅ 06/10 | L'Architecte des Pavés (Formules) | `grandeur_volume_architecte` | fiches/volume_formules.html |  |
| ✅ 06/10 | Le Laboratoire des Liquides | `grandeur_volume_liquides` | fiches/volume_conversions.html |  |

### 🔢 Mathématiques — 📐 Grandeurs — Durées, Monnaie & Vitesse

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Les durées | `grandeur_durees` | index › renderGrandeurDurees | QCM: bonne réponse en position 2 dans 39/65 questions, options non mélangées |
| ✅ 06/10 | Les durées — Conversions | `grandeur_durees_conversions` | index › startDureesExercise |  |
| ✅ 06/10 | Les durées — Durée entre 2 heures | `grandeur_durees_entre` | index › startDureesExercise |  |
| ✅ 06/10 | Quelle heure est-il ? (avec secondes) | `grandeur_durees_heure_secondes` | fiches/heure_secondes.html |  |
| ✅ 06/10 | Le Labo des Durées | `grandeur_durees_situations` | fiches/durees_situations.html |  |
| ✅ 06/10 | Paie le commerçant | `grandeur_monnaie_payer` | fiches/payer_le_commercant.html |  |
| ✅ 06/10 | Rends la monnaie | `grandeur_monnaie_rendre` | fiches/rendre_la_monnaie.html |  |
| ✅ 06/10 | Deux objets — Rends la monnaie | `grandeur_monnaie_deux_objets` | fiches/deux_objets_monnaie.html |  |
| ✅ 06/10 | Recettes | `grandeur_proportionnalite_exercice` | fiches/proportionnalite.html |  |
| ✅ 06/10 | Le rallye des bolides | `grandeur_proportionnalite_rallye_bolides` | fiches/rallye_bolides.html |  |
| ✅ 06/10 | Le supermarché malin | `grandeur_proportionnalite_supermarche_malin` | fiches/supermarche_malin.html |  |
| ✅ 06/10 | QCM de vitesse horaire | `grandeur_vitesse_horaire_qcm` | fiches/vitesse_situations.html |  |
| ✅ 06/10 | L'échelle | `grandeur_echelle` | fiches/grandeurs_echelle.html |  |

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
| ✅ 06/10 | Identifier les polygones | `polygones_reconnaitre` | fiches/polygones_reconnaitre.html |  |
| ✅ 06/10 | Caractéristiques des polygones | `polygones_caracteristiques` | fiches/polygones_caracteristiques.html |  |

### 🔢 Mathématiques — 🔷 Solides & Figures — Triangles & Angles

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 06/10 | Identifier les triangles | `triangles_qcm` | fiches/triangles_QCM.html |  |
| ✅ 06/10 | Caractéristiques des triangles | `triangles_caracteristiques` | fiches/triangles_caracteristiques.html |  |
| ✅ 06/10 | Les hauteurs du triangle | `solide_triangles_hauteurs` | fiches/triangles_hauteurs.html |  |
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