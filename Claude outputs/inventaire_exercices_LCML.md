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

### 06/10 — Quadrilatères — Reconnais la forme (`quadrilateres_reconnaître`, index › startShapeExercise + exercices_maths.js) — sw.js v596, exercices_maths.js ?v=20261006a
- Contenu : les 24 formes recalculées (côtés, angles, parallélisme) → toutes bien nommées.
- **Résultat enregistré sous `quadrilateres_forme`**, id inconnu du menu et du plan (exercice jamais coché) → `quadrilateres_reconnaître` (+ alias pour les anciens résultats) ; l'évaluation, qui passe par le même code, enregistre maintenant sous `quadrilateres_evaluation`.
- **La couleur trahissait la réponse** (rose = parallélogramme, violet = trapèze isocèle, jaune = rectangle…) → même couleur pour toutes les formes.
- Propositions jamais mélangées (bonne réponse A 10 fois, B 7, C 7, toujours à la même place pour une forme) → Fisher–Yates à chaque série (≈ 33 % par position sur 3 000 séries), évaluation comprise.
- Formes ambiguës à l'œil : parallélogrammes q10/q11 aux côtés 110/104 (proposition « losange » possible), q8 72/81 → côtés 120/81 et 110/86 ; quadrilatères quelconques q22-q24 avec des côtés presque parallèles (6° d'écart) ou des angles de 89-90° → nouveaux sommets (≥ 16° d'écart au parallélisme, aucun angle à moins de 8° de l'angle droit).
- Double clic sur « Valider » passait aussitôt à la question suivante → garde 600 ms (et sur « Terminer ») ; alert « Veuillez sélectionner… » → message dans la page, sans rien compter.
- Correction : « Bonne réponse » en bleu.
- Tests : jsdom (moteur extrait : positions, 0 erreur, message sans choix, double clic, 7/10 → 1 saveResult `quadrilateres_reconnaître`, évaluation → `quadrilateres_evaluation`), node --check 6/6 + exercices_maths.js, planche Playwright des 24 formes.
- Remarque pour l'évaluation (à revoir à son tour) : le menu annonce « 5 formes + 5 vrai/faux » mais seules 5 formes sont posées (`evaluation_vf` n'est pas utilisé).

### 06/10 — Quadrilatères — Vrai ou Faux (`quadrilateres_vf`, index › startVFExercise + exercices_maths.js) — sw.js v597, exercices_maths.js ?v=20261006b
- **Décision de Jérémy : définition inclusive du trapèze (au moins une paire de côtés parallèles ; le parallélogramme est un trapèze particulier).** Le fichier disait l'inverse : « Un trapèze a exactement une paire de côtés parallèles » = VRAI et « Un parallélogramme est un trapèze » = FAUX → « Un trapèze a au moins une paire de côtés parallèles » (V), « Un parallélogramme est un trapèze particulier » (V), « Un trapèze a toujours deux paires de côtés parallèles » (F).
- Affirmation fausse en soi : « Un trapèze quelconque peut avoir 2 côtés isométriques » = FAUX (alors que c'est possible, ex. petite base = un côté oblique) → « … a ses deux côtés non parallèles de même longueur » (F).
- Doublons : « Un carré est un parallélogramme » 2 fois ; « Un rectangle est un parallélogramme » = « Tout rectangle est un parallélogramme » → remplacés.
- Banque 19 V / 11 F → 15 V / 15 F ; chaque série = 5 V + 5 F, sans deux affirmations sur la même notion (ex. « Un losange est un parallélogramme » et « Un parallélogramme est toujours un losange ») — 0 conflit sur 3 000 séries.
- Double clic sur « Valider » passait à la suite → garde 600 ms (et sur « Terminer ») ; alert → message dans la page ; « Bonne réponse » en bleu dans la correction ; nouvelle orthographe « non parallèles ».
- Tests : jsdom (moteur extrait), node --check 6/6 + exercices_maths.js. Autres textes du site vérifiés : aucune autre définition « exactement une paire ».

### 06/10 — Quadrilatères — Caractéristiques (`quadrilateres_caracteristiques`, index › startCharsExercise + exercices_maths.js) — sw.js v598, exercices_maths.js ?v=20261006c
- Contenu : les 24 figures × 5 caractéristiques recalculées depuis le dessin (côtés, parallélisme, angles, diagonales, médianes).
  - Le 2e « carré » n'était pas un carré (côtés 106/87, angles 90/76/118/76 : un cerf-volant) → vrai carré posé sur la pointe.
  - Trapèze rectangle (côtés 70/108/110/100) : « 4 côtés de longueurs différentes » vrai mais non coché ; un autre trapèze rectangle redessiné l'est aussi → réponses recalculées.
  - 11 figures avec des côtés presque égaux à l'œil (parallélogrammes 110/104 et 78/82 → « losange ? », trapèzes isocèles dont la base ≈ les côtés obliques, trapèzes rectangles 108/110, trapèzes quelconques 90/89, quadrilatère quelconque) → redessinées : deux côtés sont soit égaux, soit différents d'au moins 14 % ; un losange touchait le bord du cadre.
- La couleur trahissait la forme (bleu = carré, jaune = rectangle…) → même couleur pour toutes.
- Série : 8 figures tirées au hasard (parfois 3 parallélogrammes) → une figure de chaque sorte ; caractéristiques dans un ordre fixe → mélangées (Fisher–Yates, bonnes cases réparties ≈ 20 % par position).
- Valider sans rien cocher comptait faux → message, rien n'est compté. Double clic sur « Valider » passait à la suite → garde 600 ms (et sur « Terminer »).
- Correction : cases oubliées en bleu (au lieu d'orange) dans l'exercice et dans le récapitulatif.
- Tests : jsdom (moteur extrait : 3 000 séries, 8 sortes différentes, bonnes réponses suivies au mélange ; message ; double clic ; 6/8 → 1 saveResult), node --check 6/6 + exercices_maths.js, planche Playwright des 24 figures ; Reconnais la forme toujours juste (même fichier).

### 06/10 — Quadrilatères — Médianes & Diagonales (`quadrilateres_diagonales_medianes`, fiches/quadrilateres_diagonales_medianes.html) — sw.js v599
- Contenu : 27 questions et la fiche mémo vérifiées (propriétés des diagonales et des médianes).
  - Mémo, trapèze isocèle : médianes « Non isométriques » (pas toujours vrai) et perpendicularité oubliée → « Perpendiculaires, 1 médiane est axe de symétrie, se coupent en leur milieu ».
  - Devinette « diagonales isométriques non perpendiculaires, médianes perpendiculaires → rectangle » : le trapèze isocèle répond aussi → ajout « se coupent en leur milieu ».
  - « Seul le carré a des diagonales perpendiculaires ET isométriques » (faux sans « se coupent en leur milieu ») → explication précisée. Médianes perpendiculaires : mention du trapèze isocèle dans l'explication.
  - Définitions : les figures « Diagonales (violettes) » / « Médianes (oranges) » affichées pendant la question donnaient la réponse → montrées seulement à la correction ; question « le segment orange relie les milieux… C'est… » qui contenait la définition → reformulée.
- Bonne réponse la plus longue avec de gros écarts (« Non, elles sont non isométriques (une grande et une petite diagonale) », « Faux (cela peut être un losange ou un cerf-volant) », « Perpendiculaires, isométriques et qui se coupent en leur milieu »…) → distracteurs de même forme ; plus aucun écart de plus de 6 caractères.
- Entrainement complet : questions qui se donnaient la réponse (définition + reconnaissance de la même notion, propriété + devinette correspondante) → notions par question, 0 conflit sur 2 000 séries (3 définitions, 3 diagonales, 2 médianes, 2 devinettes conservés).
- Enregistrement unique (try/catch) ; « Question suivante » protégé (600 ms) ; Entrée ; bonne réponse du bilan en bleu.
- Orthographe : Entraine-toi, Entrainement complet, entrainement, maitrises.
- Tests : jsdom (2 000 séries, 4 thèmes, double clic, 8/10 → 1 saveResult, figure de définition cachée pendant la question), node --check OK, rendu des figures (Playwright).

### 06/10 — Polyèdre ou non-polyèdre (`polyedres_reconnaitre`, fiches/polyedres_reconnaitre.html) — sw.js v600
- Contenu : 15 solides dessinés vérifiés (dessins conformes, polyèdre / non-polyèdre juste).
- Distracteurs qui étaient aussi de bonnes réponses : « Parallélépipède rectangle » pour le cube (un cube en est un), « Prisme droit » pour le pavé (c'en est un) ; « Prisme droit » comme nom du prisme à base triangulaire alors que les prismes pentagonal et hexagonal sont aussi des prismes droits → « Prisme triangulaire » ; distracteurs revus (prismes entre eux, cône / cône tronqué / cylindre…).
- « Cylindre couché » proposé comme nom d'un solide (et « Cylindre » absent des choix) → nom « Cylindre » ; les deux cylindres ne sont jamais dans la même série. « Tore (donut) » → « Tore ».
- Mélange biaisé sort(random) (tirage et noms) → Fisher–Yates.
- Score arrondi (15 étapes réussies sur 20 → « 8 / 10 ») → score exact sur 20 (1 point par étape) ; enregistrement unique avec try/catch.
- « Solide suivant » protégé (600 ms) ; étape 2 impossible avant l'étape 1 ; Entrée ; orthographe « entrainement ».
- Tests : jsdom (3 000 séries, distracteurs tous connus et différents de la réponse, double clic, 18/20 → 1 saveResult), node --check 7 OK, planche des 15 solides et capture 390 px (Playwright).

### 06/10 — Patrons de solides (`polyedres_patrons`, fiches/patrons_solides.html) — sw.js v601
- **La vue 3D (pliage du solide, complet ou avec la face qui se superpose) était accessible avant de répondre** et les couleurs des faces du patron 2D montraient où chaque face arrive → onglet 3D désactivé et faces neutres jusqu'à la réponse, puis 3D affichée automatiquement.
- Banque de 10 patrons pour 10 questions : toujours les mêmes (6 corrects, 4 incorrects), seul l'ordre changeait → 5 patrons de cube ajoutés (2 corrects : 1-4-1 décalé, 2-3-1 ; 3 incorrects : 5 carrés alignés, « U », escalier), validité vérifiée par un programme de pliage du cube ; série = 5 corrects + 5 incorrects parmi 15.
- Patron du cylindre déclaré correct mais rectangle de 110 px pour des disques de rayon 30 (périmètre 188) → rectangle de 176 = 2 × π × 28.
- Mélange biaisé sort(random) → Fisher–Yates ; libellés « un Cube », « un Prisme droit » → « un cube », « un prisme droit à base triangulaire »…
- « Question suivante » protégé (600 ms), Entrée, enregistrement unique (try/catch).
- Tests : jsdom (2 000 séries 5/5, 3D bloquée avant réponse, faces neutres, double clic, 7/10 → 1 saveResult), node --check 7 OK, planche des patrons et capture 390 px (Playwright).

### 06/10 — Trouve le bon solide (`polyedres_definitions`, fiches/polyedres_definitions.html) — sw.js v602
- **Résultat jamais enregistré correctement** : `saveResult('polyedres_definitions', score)` (deux arguments au lieu d'un objet) → objet complet {activity, bookTitle, score, total, pct, date, time}, une seule fois, try/catch.
- **Score toujours 8/8** : essais illimités et point accordé même après des erreurs (la pastille passait au vert) → point au 1er essai seulement ; après 2 erreurs, la bonne réponse est montrée (en bleu) et le solide révélé.
- Ambiguïté cube / pavé : les 3 indices du pavé convenaient aussi au cube (un cube est un parallélépipède rectangle) → indice « mes arêtes n'ont pas toutes la même longueur » ; « parallélépipède rectangle » retiré des propositions pour le cube.
- Modèle 3D du pavé faux (face de droite construite avec y = x : face tordue) → corrigé.
- Mélanges sort(random) → Fisher–Yates ; 8 solides tirés parmi 11.
- « Question suivante » protégé (600 ms), Entrée ; « Entrainement terminé ! ».
- Tests : jsdom (2 erreurs → réponse montrée, 2e essai sans point, double clic, 6/8 → 1 saveResult au bon format), node --check 7 OK, capture 390 px (Playwright).

### 06/10 — Trouve les caractéristiques (`polyedres_caracteristiques`, fiches/polyedres_caracteristiques.html) — sw.js v603
- Contenu : 11 solides × 7 affirmations vérifiées, toutes justes.
- **Résultat jamais enregistré correctement** : `saveResult('polyedres_caracteristiques', score)` → objet complet, une seule fois, try/catch.
- **L'étiquette « Polyèdre / Non-polyèdre » affichée au-dessus du solide donnait la réponse** à l'affirmation « Je suis un polyèdre / Je ne suis pas un polyèdre » à cocher → étiquette cachée jusqu'à la validation.
- Valider sans rien cocher comptait faux → message, rien n'est compté.
- Mélanges sort(random) → Fisher–Yates ; 8 solides tirés parmi 11. Cases oubliées en bleu (au lieu d'orange).
- « Solide suivant » protégé (600 ms), Entrée ; titre « Solide proposé : … » qui se cassait sur 3 lignes à 390 px → retour à la ligne propre.
- Orthographe : maitrises, Entraine-toi.
- Tests : jsdom (étiquette cachée puis visible, rien coché → message, double clic, 6/8 → 1 saveResult au bon format), node --check 7 OK, capture 390 px (Playwright).

### 06/10 — Reconnaître les angles (`angles_reconnaitre`, fiches/angles_reconnaitre.html) — sw.js v604
- Contenu : 30 angles (aigu, obtus, droit, nul, plat, rentrant, plein) dessinés et vérifiés (planche Playwright) ; Fisher–Yates déjà en place.
- **Aucun résultat enregistré** → saveResult `angles_reconnaitre`, une fois par série, try/catch.
- Angle droit dessiné avec un arc alors que l'explication parle du « symbole carré » → petit carré au sommet.
- Correction affichée avec des astérisques « **Excellent !** » (markdown non interprété) → texte en gras.
- « Inférieur à l'alignement droit » → « plus petit qu'un angle plat (180°) ».
- « Question suivante » protégé (600 ms), Entrée ; orthographe « Entraine-toi ».
- Tests : jsdom (correction sans astérisques, double clic, 8/10 → 1 saveResult), node --check 7 OK, planche des 30 angles.

### 06/10 — Estimation des angles (`angles_estimation`, fiches/angles_estimation.html) — sw.js v605
- Contenu : 30 angles, 4 propositions chacun (bonne mesure toujours présente, aucun doublon). Le signal « saisie libre comparée strictement » de l'inventaire ne s'applique plus : l'exercice est un QCM.
- **Aucun résultat enregistré** → saveResult `angles_estimation`, une fois par série, try/catch.
- Propositions rangées dans l'ordre croissant et jamais mélangées dans fiches/ (bonne réponse en 3e position 18 fois sur 30 ; les copies racine/public mélangeaient, elles) → mélange Fisher–Yates partout (≈ 25 % par position sur 5 000 questions), 3 copies de nouveau identiques.
- Correction affichée avec des astérisques (markdown) → gras ; « dépasse d'un sixième l'alignement droit » → « dépasse l'angle plat (180°) de 30° ».
- « Question suivante » protégé (600 ms), Entrée ; orthographe « entrainer ».
- L'angle droit garde volontairement un arc (sinon le carré donnerait 90°).
- Tests : jsdom (positions, double clic, 8/10 → 1 saveResult), node --check 7 OK.

### 06/10 — Mesurer les angles (`angles_mesurer`, fiches/angles_mesurer.html) — sw.js v606
- Contenu : équerre Aristo vérifiée (double graduation : l'échelle intérieure donne la mesure quand le côté de départ est à gauche ; contrôle visuel après le recalage automatique), 5 angles tirés au hasard (15°–85° et 95°–165°), barème 3 / 2 / 1 / 0 point selon l'écart (0°, 1°, 2°, plus).
- **Aucun résultat enregistré** → saveResult `angles_mesurer` sur 15 points, une seule fois, try/catch.
- Un côté de l'angle sortait souvent du cadre (orientation 20°–260° : côté vers le bas coupé, cadre de 260 de haut pour des côtés de 130) → orientation choisie pour que les deux côtés restent visibles (0 sur 10 000 angles).
- Saisie : champ « number » + parseInt (« 45.5 » lu 45) et alert → lecture stricte (entier 0–180, « ° » et espaces tolérés), message dans la page, rien n'est compté.
- « Question suivante » protégé (600 ms), Entrée passe à la suite ; orthographe « maitrises », « Entraine-toi ».
- Tests : jsdom (vide / 45.5 / 12abc refusés, double clic, partie 3+2+1+0+3 = 9/15 → 1 saveResult), node --check 7 OK, captures Playwright de l'équerre recalée.

### 06/10 — Mathématiques → Solides et figures → Les angles → Calcul d'angles manquants (`geometrie_angles_manquants`) — sw.js v607
- **Figures fausses** : les sommets étaient fixés à la main sans rapport avec les angles annoncés (« 110° » écrit dans un coin de 25° aux triangles #7, #11, #15 ; « équilatéral » de la leçon dessiné 50/50/80 ; quadrilatères faux jusqu'à 20°). → Sommets recalculés à partir des angles (loi des sinus pour les triangles, fermeture du polygone pour les quadrilatères, cerfs-volants à côtés adjacents égaux), cadrage automatique. Écart max dessin/valeur : 0,5°, aucun sommet hors cadre.
- **Double Entrée dans la fenêtre de correction sautait une question** (`feedbackReady` jamais remis à faux). → Garde `enCorrection` + remise à zéro à la fermeture.
- Mélange `sort(random)` biaisé et séries déséquilibrées. → Fisher–Yates, 5 triangles + 5 quadrilatères.
- Sous-types avec parenthèses imbriquées (« quelconque (scalène) ») → « scalène », « scalène obtusangle ».
- Enregistrement sans garde unique ni try/catch → corrigé (`saveResult` format objet, une seule fois). Saisie : 1 à 3 chiffres uniquement.
- Orthographe : maitrises, entrainer.
- Tests : jsdom (série 5+5, double Entrée sans saut, score 8/10 enregistré une fois). 2 copies identiques (md5).

### 06/10 — Mathématiques → Solides et figures → Les axes de symétrie (`solide_symetrie`, `fiches/solide_symetrie.html` + copies public et racine) — sw.js v608
- 45 figures (15 par axe : vertical, horizontal, oblique) vérifiées par programme : symétriques justes, tout dans la grille, figure donnée toujours du bon côté de l'axe.
- **Tracé juste compté faux** : la vérification comparait les segments tels quels. Un élève qui cliquait sur les nœuds intermédiaires d'un côté (ex. côté de 8 carreaux tracé en 8 clics) avait « faux » ; 43 figures sur 45 concernées. → Chaque trait est découpé de nœud en nœud avant la comparaison.
- **Aucun score, aucun enregistrement** (exercice jamais validé dans le plan de travail). → Choix de Jeremy : onglet « 🎯 Série notée » (par défaut) de 10 figures (4 verticales, 3 horizontales, 3 obliques, jamais deux fois la même forme, ordre Fisher–Yates, fond au hasard). 1 point si juste au 1er « Vérifier » ; 2 essais ; après 2 échecs la solution s'affiche en bleu (#1f5fbf). Résultat enregistré une fois (`saveResult`, format objet). Les 3 onglets d'entrainement libre restent.
- En série, pas de bouton Solution ni de morceaux manquants en orange (ils donnaient la réponse). Garde de 600 ms : double Entrée ne saute rien ; Entrée = Vérifier / Figure suivante. Tracé verrouillé une fois la figure finie.
- Solution libre en bleu (était verte, confondue avec « correct ») ; légende « Solution » ajoutée.
- Tests jsdom : 2 000 séries (4/3/3, 0 doublon), vide non compté, tracé nœud par nœud accepté, 2 échecs → solution bleue, 2e essai juste = 0 point, partie 8/10 → 1 sauvegarde, double Entrée sans saut. Capture 390 px sans défilement horizontal.

### 06/10 — Mathématiques → Solides et figures → Le labo des transformations (`solide_transformations_labo`, `fiches/transformations_labo.html` + copies public et racine) — sw.js v609
- 20 figures (10 translations, 10 rotations ¼ de tour à droite / à gauche et ½ tour) recalculées : images justes, sens de rotation correct à l'écran, tout dans la grille.
- **Tracé juste compté faux** si l'élève cliquait les nœuds intermédiaires d'un côté (19 figures sur 20 ont des côtés de plus d'une case) → comparaison de nœud en nœud.
- **À partir de la 2e question, plus aucun message après « Vérifier »** (la fiche cachait la carte en style direct au passage à la suite, et ne la réaffichait plus) → corrigé.
- **Double clic sur « Suivant » sautait une question** ; sur la dernière, il enregistrait deux fois → garde de 600 ms, fin de série et enregistrement une seule fois, dans un try/catch (`.then` plantait si `saveResult` ne renvoyait pas de promesse).
- Un seul essai, et la réponse s'affichait (en vert) dès la 1re erreur → 2 essais : au 1er échec, côtés justes en vert, mal placés en rouge, sans la réponse ; point seulement au 1er essai ; après 2 échecs, la bonne figure en bleu (#1f5fbf) avec les flèches / arcs. Légende « Solution ».
- Séries déséquilibrées (10 tirées sur 20 au hasard, jusqu'à 8 translations) → 5 translations + 5 rotations, mélangées (Fisher–Yates).
- Moins de 3 sommets : message, pas compté. Figure oubliée ouverte : fermée automatiquement. Entrée = Vérifier puis Suivant.
- Consignes à l'impératif (« Fais glisser la figure de… ») ; titre qui se cassait mal à 390 px ; nouvelle orthographe (maitrises, entrainement, Continue de t'entrainer ; menu « S'entrainer aux translations… »).
- Tests jsdom : 2 000 séries 5+5, vide non compté, tracé nœud par nœud accepté, 2 échecs → solution bleue, 2e essai juste = 0 point, double Entrée sans saut, partie 8/10 → 1 sauvegarde, Recommencer OK. Capture 390 px sans défilement horizontal.

### 06/10 — Mathématiques → Solides et figures → Les vues 3D et empilements (`solide_projections_cubes`, `fiches/solides_projections.html` + copie public) — sw.js v610
- **Points de vue non indiqués et « vue de face » prise depuis l'arrière** : rien sur le dessin ne disait d'où regarder ; la « face » du programme correspondait au côté caché (arrière-gauche), et la vue de haut n'avait pas d'orientation. → Flèches jaunes sur le dessin (Face = avant-gauche, Profil droit = avant-droite, Profil gauche = arrière-gauche, Dessus), vues recalculées pour ces points de vue (vérifié sur capture : la tour haute de l'exemple apparait bien à gauche dans la vue de face) ; vue de dessus « côté Face en bas ».
- **Distracteurs ambigus** : une option pouvait être la bonne vue retournée ou tournée (fausse seulement par l'orientation) → exclue (12 000 QCM générés : toujours 4 options, 1 seule bonne, bonne réponse répartie 25 % par position).
- **Comptage impossible à trancher sur 3 formes** (vérifié pixel par pixel en changeant chaque colonne) : Lettre U, Bloc creux et Trident avaient un trou caché où 1 cube de plus ne changeait rien au dessin → formes modifiées (U 11 cubes, Bloc creux 13, « Le Diapason » 8) ; les 15 formes sont maintenant sans ambiguïté.
- **Corrections fausses** : Tours jumelles annoncées 6 + 3 = 9 cubes alors qu'il y en a 10 → explication corrigée. Tour simple de 4 cubes impossible à montrer dans les vues 3 × 3 → 3 cubes.
- Vues tirées au hasard (une série pouvait n'avoir que des vues de face) → les 4 vues au moins une fois sur les 5 questions, ordre mélangé.
- Un seul essai → 2 essais : au 1er échec, l'option choisie passe en rouge et ne peut plus être reprise, sans la réponse ; point seulement au 1er essai ; après 2 échecs, bonne option et explication en bleu (#1f5fbf).
- Saisie : « 12abc » lu comme 12 et fenêtre `alert` → lecture stricte (1 à 3 chiffres), message dans la page, rien n'est compté.
- **Double Entrée sautait la correction ; Entrée sur l'écran final réenregistrait le score** → garde de 600 ms, enregistrement une seule fois (try/catch).
- Question mal mise en page (texte coupé en colonnes) → corrigée. Nouvelle orthographe : Entraine-toi, maitrises.
- Tests jsdom : 2 000 séries, vide/« 12abc » non comptés, 2 échecs → réponse bleue, 2e essai juste = 0 point, double Entrée sans saut, partie 7/10 → 1 sauvegarde, Recommencer OK. Capture 390 px sans défilement horizontal.

### 06/10 — Mathématiques → Solides et figures → Le vocabulaire géométrique (`solide_vocabulaire`, `fiches/vocabulaire_solides.html` + copies public et racine) — sw.js v611
- **Aucun résultat enregistré** (condition `window.parent.state`, une des 6 fiches repérées) → `saveResult` au format objet, une seule fois, try/catch.
- 100 questions relues (solides, patrons, polygones, angles, triangles, quadrilatères, cercle, symétrie) : réponses justes. Corrections : patron du cylindre « un rectangle et deux cercles » → deux **disques** ; « 6 faces carrées : le cube / le pavé droit » (un cube est un pavé) → autres distracteurs ; triangle « acutangle / équilatéral » (un équilatéral est aussi acutangle) → « rectangle » ; axes du rectangle « médiatrices des côtés » → « ses médianes » (terme du site) ; « circommérence » → circonférence ; « d = 2 x r » → ×.
- **La bonne réponse était la plus longue dans 63 % des questions** (phrases de définition complètes contre distracteurs courts) → 60 questions réécrites : distracteurs de même longueur, précisions entre parenthèses retirées des bonnes réponses. Plus longue : 17 % (3 000 séries).
- **Questions qui se donnaient la réponse** (ex. « faces d'un prisme triangulaire ? 5 » et « 2 triangles + 3 rectangles = ? » ; formule d'Euler et ses 2 calculs ; rayon / diamètre / corde ; carré-rectangle-losange…) → 17 familles, jamais deux d'une famille dans la même série (3 000 séries : 0).
- Mélange biaisé sort(random) → Fisher–Yates (≈ 33 % par position).
- Bonne réponse montrée en bleu (#1f5fbf) après une erreur (vert si juste) ; pastilles rouges pour les erreurs ; « Question suivante » protégé (600 ms), Entrée ; score final une seule fois.
- Tests jsdom : 3 000 séries de 20 questions, partie 16/20 → 1 sauvegarde, Entrée juste après un clic sans saut, Recommencer OK. Capture 390 px sans défilement horizontal.

### 06/10 — Mathématiques → Solides et figures → Le cercle et le disque → Le vocabulaire (`disque_vocabulaire`, `fiches/disque_vocabulaire.html` + copies public et racine) — sw.js v612
- **Aucun résultat enregistré** (aucun appel à `saveResult`) → enregistrement unique, format objet, try/catch.
- **Même image pour deux questions** : 7 dessins pour 14 questions, 10 tirées → la même figure revenait souvent dans une série, juste après sa correction ; certaines séries n'avaient pas les 7 notions. → Figures dessinées par le programme (SVG), orientation différente à chaque fois ; série = les 7 notions avec une figure + 3 questions de définition (3 notions différentes), ordre mélangé (Fisher–Yates).
- **Diamètre / corde** : un diamètre est aussi une corde (l'autre fiche de vocabulaire dit « la plus longue corde = le diamètre ») → consigne « Choisis le nom le plus précis », cordes dessinées loin du centre (51 à 123 px pour un rayon de 150), explications cohérentes. Questions qui décrivaient l'élément (« ce point… au milieu », « reliant le centre à la frontière ») → consigne neutre pour les figures, définitions précises pour les questions sans figure. Coquille « le diamètre que, lui, passe ».
- Bonne réponse en bleu (#1f5fbf) après une erreur ; « Question suivante » protégé (600 ms), Entrée ; orthographe : Entraine-toi, maitrises. Les images PNG de `assets/disque/` ne sont plus utilisées par cette fiche (les images compas restent utilisées ailleurs).
- Tests jsdom : 3 000 séries (7 notions + 3 définitions différentes), partie 7/10 → 1 sauvegarde, Entrée juste après un clic sans saut, Recommencer OK. Planche des 7 figures et capture 390 px sans défilement horizontal.

### 06/10 — Mathématiques → Solides et figures → Le cercle et le disque → Le laboratoire (`disque_laboratoire`, `fiches/disque_laboratoire.html` + copies public et racine) — sw.js v613
- Les 14 calculs d'origine (rayon ↔ diamètre, conversions) étaient justes.
- **Aucun résultat enregistré** → `saveResult` au format objet, une seule fois, try/catch.
- **Questions qui se donnaient la réponse** (rayon 4,5 dm → 9 dm et diamètre 9 cm → 4,5 cm ; rayon 3,5 cm et diamètre 7 cm) et séries presque identiques (10 sur 14) → questions générées, nouveaux nombres à chaque série : 3 entiers, 3 décimaux, 2 avec conversion (cm→mm, dm→cm, m→dm, m→cm), 2 décimaux + conversion, du plus simple au plus difficile ; 5 « rayon → diamètre » et 5 « diamètre → rayon » mélangés ; jamais deux fois le même cercle. 30 000 questions relues par un programme indépendant (énoncé → calcul) : 0 erreur.
- Comparaison exacte du texte : « 18,0 » refusé pour 18, « 7, » accepté comme réponse → comparaison numérique, nombre incomplet ou vide : message, rien n'est compté.
- Un seul essai → 2 essais (rappel de la règle au 1er échec, sans la réponse) ; point au 1er essai ; après 2 échecs, réponse en bleu (#1f5fbf) avec le calcul. Signe ÷ au lieu de « / » ; grands nombres avec espace (1 300 cm).
- **Entrée inutilisable après la réponse et double clic sur « Question suivante » qui sautait une question** → Entrée = Valider puis Suivant, garde de 600 ms. Figure générée (orientation au hasard) au lieu des 2 images fixes. Orthographe : Entraine-toi, maitrises.
- Tests jsdom : 3 000 séries, vide / « 7, » non comptés, « 18,0 » accepté, 2 échecs → réponse bleue, double Entrée sans saut, partie 9/10 → 1 sauvegarde, Recommencer OK. Capture 390 px sans défilement horizontal.

### 06/10 — Mathématiques → Solides et figures → Le cercle et le disque → L'enquête du compas (`disque_compas`, `fiches/disque_compas.html` + copies public et racine) — sw.js v614
- **Aucun résultat enregistré** → `saveResult` au format objet, une seule fois, try/catch.
- **Toujours les 10 mêmes questions** (banque de 10, toutes posées) et **les propositions jamais mélangées dans la copie affichée** (fiches/ ; seules les copies public/ et racine avaient un mélange, biaisé) → bonne réponse toujours au même endroit pour chaque question.
- **Questions qui se donnaient la réponse** (même figure 2 ou 3 fois : « rayon 4 cm » dans l'explication de la largeur, « rayon = AB » dans la largeur des cercles sécants, rayon 6 cm puis diamètre 12 cm du yin-yang) ; **réponse écrite sur le dessin** (« 4 cm » sur le rayon du cercle orange demandé) ; questions confuses (« le diamètre total de cette double figure reliant A à B plus leurs rayons », « pétale courbé vers le bas… au point opposé A, c'est-à-dire le point C ») ; option « Toutes ces réponses ».
- → Figures dessinées par le programme et 9 sortes de questions générées (centre d'un pétale de rosace, écartement du pétale, cercles qui se touchent : écartement et largeur, cercles qui passent par le centre de l'autre : écartement et largeur, « yin-yang » : demi-cercle, grand rayon, diamètre) ; nouvelles mesures et lettres mélangées à chaque série ; série = les 9 sortes + 1 pétale, ordre Fisher–Yates ; 4 propositions mélangées (≈ 25 % par position).
- Vérification indépendante sur 30 000 questions (calcul refait à partir de l'énoncé : 0 erreur ; 2 000 rosaces : l'arc est toujours centré sur la lettre attendue et passe par O).
- Bonne réponse en bleu (#1f5fbf) après une erreur ; « Question suivante » protégé (600 ms), Entrée ; orthographe : Entraine-toi.
- Tests jsdom : partie 7/10 → 1 sauvegarde, Entrée juste après un clic sans saut, Recommencer OK. Planche des 9 figures et capture 390 px sans défilement horizontal.
- Les 4 images `assets/disque/compas_*.png` ne sont plus utilisées (comme les 7 autres images de `assets/disque/`).

### 06/10 — Ménage : dossier `assets/disque/` supprimé (11 images) — sw.js v615
- Plus aucune page ne l'utilisait après la refonte des 3 fiches « Le cercle et le disque » (figures générées). Seuls des scripts de génération dans `scratch/` et d'anciens rapports le citaient. Accord de Jeremy (06/10) : supprimer ce qui n'est plus utilisé quand c'est certain.

### 06/10 — Mathématiques → Traitement de données → Lire un tableau (`td_tableau`, index › renderTDTableau + exercices_maths.js › genTDTableau) — sw.js v615
- Contenu d'origine (4 tableaux, 20 questions) : réponses justes, mais **seulement 4 tableaux aux questions fixes**, et **bonne réponse toujours à la même place** pour chaque question (propositions jamais mélangées) ; deux questions identiques dans le tableau des températures (« étendue » et « de combien Liège dépasse Waimes » : 26 − 21 deux fois) ; titre « Résultats sportifs » pour un tableau de sports pratiqués.
- → Tableaux générés : 6 thèmes de tableaux simples (animaux, températures, fruits, vélo, quiz, piscine) et 4 thèmes à double entrée (livres, sports, trajet vers l'école, collation) avec totaux calculés ; nouvelles valeurs à chaque fois, simple et double entrée en alternance ; 5 questions (simple : le plus, le moins + 3 parmi écart, seuil, total, somme, lecture ; double : 2 lectures de cases, le plus / le moins au total, total général, différence dans une ligne) ; propositions mélangées (Fisher–Yates), distracteurs plausibles (autres cases, somme au lieu de différence…). Le tableau statique `TD_TABLEAUX` est supprimé.
- Vérification indépendante : 5 000 tableaux / 25 000 questions recalculés à partir du tableau affiché (totaux, cases, max/min, écarts, seuils) : 0 erreur ; bonne réponse ≈ 25 % par position ; jamais deux propositions identiques.
- **Questions sans réponse comptées fausses** → message « Réponds d'abord à la question… », rien n'est compté. Bonne réponse montrée en bleu (#1f5fbf) avec l'explication ; signe −. « Nouveau tableau » protégé (600 ms). Enregistrement : une fois par tableau (déjà en place).
- Tests jsdom : parcours (vide → message, 4/5 → message, 3/5 → 1 sauvegarde `td_tableau`, 2 bonnes réponses en bleu), syntaxe 6 fichiers OK. `exercices_maths.js?v=20261006d`.
- À noter pour « Moyenne et étendue » (`TD_MOYENNES`) : la question « Combien de matchs Lucas a-t-il marqué plus que sa moyenne ? » a pour réponse « 3 matchs » alors que l'explication en compte 4 ; moyennes arrondies (16,3 → 16 ; 11,5 → 11).

### 06/10 — Mathématiques → Traitement de données → Lire un graphique (`td_graphique`, index › renderTDGraphique + exercices_maths.js › genTDGraphique) — sw.js v616
- Contenu d'origine (3 graphiques, 15 questions) : réponses justes, mais seulement 3 graphiques aux questions fixes et **bonne réponse toujours à la même place** (propositions jamais mélangées) ; « Combien de livres a-t-on lu » (→ lus).
- **Graduations fausses** : 5 étiquettes arrondies placées à des hauteurs non arrondies (ex. max 12 : « 2 » dessiné à 2,4, « 7 » à 7,2) → l'échelle ne correspondait pas au dessin. **Chaque valeur était écrite au-dessus de la barre ou du point** : rien à lire sur l'échelle.
- → Graphiques générés : 3 diagrammes à barres (livres lus par mois, sport préféré, buts par équipe) et 3 graphiques en ligne brisée (températures à Waimes, croissance d'un plant de tomate, visiteurs de la bibliothèque) ; quadrillage d'une ligne par pas (1, 2, 5 ou 10), chaque valeur tombe pile sur une ligne, valeurs non écrites (on les lit sur l'échelle) ; 5 questions (le plus, le moins, une lecture, puis écart, seuil, total, évolution « augmenté / diminué », plus forte pousse…) ; propositions mélangées, distracteurs sur le quadrillage ; jamais deux fois le même graphique de suite.
- Vérification indépendante sur 3 000 graphiques : valeurs relues sur le dessin (hauteur → échelle) = données, étiquettes de l'échelle justes, aucune valeur écrite, 15 000 réponses recalculées : 0 erreur.
- Questions sans réponse comptées fausses → message, rien n'est compté. Bonne réponse en bleu (#1f5fbf) avec l'explication ; « Nouveau graphique » protégé (600 ms) ; textes du graphique agrandis pour le téléphone. Enregistrement : une fois par graphique (déjà en place). `exercices_maths.js?v=20261006e`.
- Tests jsdom : parcours (vide → message, 3/5 → 1 sauvegarde `td_graphique`, réponses en bleu), planche de 6 graphiques (Playwright), syntaxe 6 fichiers OK.

### 06/10 — Mathématiques → Traitement de données → La moyenne (menu `td_la_moyenne_menu` : QCM `td_moyenne_qcm` + Moyenne et étendue `td_moyenne`) — sw.js v617
- **QCM (5 défis)** : calculs revérifiés (sommes 120, 310, 1 200, 1 800, 205 ; moyennes 20, 77,5, 240, 300, 41), réponses justes.
  - Mélange des propositions sort(random) biaisé → Fisher–Yates (≈ 25 % par position sur 2 000 défis).
  - **Double clic sur « Suivant » sautait une question ; après la 5e, il enregistrait le score deux fois** → garde de 600 ms, fin de défi et enregistrement une seule fois ; Entrée = Valider puis Suivant.
  - Bonne réponse montrée en bleu (#1f5fbf) avec « La bonne réponse est … » (elle était en vert, comme une réussite).
  - Verger d'Aubel : valeurs du graphique affichées « 42.5 kg » (point) → « 42,5 kg » ; « 7,0 kg », « 38,0 » → 7 kg, 38. Coquille « and » → « et » ; signes − ; « entrainement » ; « Ne te décourage pas ».
- **Moyenne et étendue** (4 séries fixes) : **réponses fausses** — Lucas : moyenne 11,5 donnée « 11 points » et « 3 matchs au-dessus de la moyenne » alors que l'explication en compte 4 ; notes : bonne réponse « 14 » alors que « 14,3 » était aussi proposé ; températures : 16,3 « ≈ 16 » ; musée : « visiteurs (en centaines) » pour 320, 450… visiteurs.
  - → Séries générées (6 thèmes : températures, basket, notes, musée, pages lues, tournesols), moyenne toujours entière (pas d'arrondi à deviner), au moins une valeur au-dessus et au-dessous ; 5 questions (max, min, étendue, moyenne, combien au-dessus / en dessous de la moyenne, avec la valeur égale à la moyenne expliquée) ; distracteurs plausibles (somme au lieu de la moyenne, max + min au lieu de l'étendue…) ; propositions mélangées ; jamais deux fois le même thème de suite. `TD_MOYENNES` supprimé, `genTDMoyenne()` dans exercices_maths.js (`?v=20261006f`).
  - Questions sans réponse → message, rien n'est compté ; bonne réponse en bleu ; « Nouvelle série » protégé (600 ms).
- Tests jsdom : 3 000 séries (valeurs affichées = données, 15 000 réponses recalculées : 0 erreur, jamais deux propositions de même valeur), parcours (vide → message, 4/5 → 1 sauvegarde `td_moyenne`) ; QCM : faux → bleu, Suivant immédiat ignoré, 4/5 → 1 sauvegarde `td_moyenne_qcm`.
- Reste dans « La moyenne » : la fiche « Calcul de la moyenne (Exercices) » (`td_moyenne_exercices`, accessible par le plan de travail).

### 06/10 — Mathématiques → Traitement de données → L'arbre dichotomique (`td_arbre_dichotomique`, `qcm_arbre_feuilles.html` à la racine, chargé par l'iframe + copies fiches/ et public/fiches/) — sw.js v618
- **Erreur dans l'arbre (image)** : question 4 « Les folioles partent-elles toutes du même point (palmées) ? » → OUI palmée (marronnier), NON trifoliée (trèfle). Or les 3 folioles du trèfle partent du même point : en suivant l'arbre, le trèfle arrivait à « palmée », alors que la question 4 du QCM attendait « trifoliée » (et son explication disait l'inverse de l'arbre). → Case 4 de l'image réécrite : « La feuille a-t-elle plus de 3 folioles ? » (marronnier 5 à 7 : OUI → palmée ; trèfle 3 : NON → trifoliée) ; explications des questions 3 et 4 adaptées. Image passée en WebP (290 Ko → 222 Ko).
- 10 questions vérifiées sur l'arbre (chemins, nombre de types = 8, chemin le plus long = 4 questions, foliole terminale → nombre impair) : justes.
- **Bonne réponse toujours en 2e ou 3e position** (jamais en 1re ni en 4e) et **souvent la plus longue** (pin, laurier, Tom : phrases complètes contre distracteurs courts) → propositions mélangées à chaque partie (Fisher–Yates, ≈ 25 % par position), distracteurs réécrits à longueur égale (plus longue : 3/10, dont la lecture de la question 1 de l'arbre).
- **« Corriger » cliqué deux fois enregistrait deux fois** ; questions sans réponse comptées fausses → message « Réponds d'abord à la question… », enregistrement unique (try/catch).
- Bonne réponse en bleu (#1f5fbf) quand l'élève s'est trompé (elle était en vert) ; « Tu maitrises » ; « Relis les explications en rouge » → « sous tes erreurs ».
- Tests jsdom : vide → message, 9/10 → message, 8/10 → 1 sauvegarde, 2 réponses en bleu ; capture 390 px sans défilement horizontal.

### 06/10 — Mathématiques → Traitement de données → Choisir la bonne question (`td_quelle_question`, `quelle_question.html` à la racine, chargé par l'iframe + copies fiches/ et public/fiches/) — sw.js v619
- 51 situations relues : la bonne question est toujours celle qui utilise les données du problème ; les distracteurs demandent une donnée déjà écrite.
- **Distracteurs qui étaient aussi de « bonnes » questions** (calcul intermédiaire qu'on peut vraiment se poser) : pains sortis du four (8 × 18), aire du terrain, billes de Tom en tout (3 × 24), sièges de la salle (15 × 22), heures de fuite (3 jours), kWh par mois, élèves des classes de 18, pages par chapitre, litres mis dans le réservoir ; Léo : « économisé en tout » (77 €) → remplacés par des questions dont la réponse est dans l'énoncé. Léo : « Lui manque-t-il de l'argent ? » (il ne lui manque rien : 77 € pour 59 €) → « Combien d'argent restera-t-il… ». Piscine « contient 1 200 l… on la remplit » → « Une piscine vide peut contenir… ».
- **La bonne question était la plus longue dans 59 % des cas** → 37 propositions réécrites à longueur comparable : plus longue dans 2 / 51.
- Mélanges sort(random) → Fisher–Yates (≈ 33 % par position).
- **Double clic sur « Question suivante » sautait une question ; après la 10e, il enregistrait deux fois** → garde de 600 ms, enregistrement unique (try/catch) ; Entrée = question suivante.
- Bonne question montrée en bleu (#1f5fbf) après une erreur. Orthographe : boite, entraineur, entrainements ; « la recette prévoie-t-elle » → « est-elle prévue » ; « 4 amis partagent » → « partage » ; « boîtes … reçu » → « reçues » ; « kilos » → « kilogrammes ».
- Tests jsdom : 1 000 séries, faux → bleu, Entrée immédiate ignorée, double Entrée sans saut, 9/10 → 1 sauvegarde ; capture 390 px sans défilement horizontal.

### 06/10 — Mathématiques → Traitement de données → Le décodeur de camemberts (`td_donnees_circulaires`, `fiches/donnees_circulaires.html` + copies public et racine) — sw.js v620
- 10 questions vérifiées par programme (tableau ↔ diagramme, pourcentages affichés, calculs de 1/2, 1/4, 3/4, 1/10, 15 %) : justes.
- **Bonne réponse toujours au même endroit dans la copie affichée** (fiches/ : propositions jamais mélangées ; seules les copies public/ et racine les mélangeaient, avec un tri biaisé) : le bon diagramme était toujours « Option A », le bon tableau toujours « Tableau A » → propositions mélangées (Fisher–Yates) et renommées A, B, C après le mélange (≈ 25 % / 33 % par position).
- Football : groupe de 150 enfants → secteurs de 37,5 et 22,5 enfants → groupe de 160 (80, 40, 24, 16 : effectifs entiers).
- **Double clic sur « Valider » passait aussitôt à la question suivante (correction jamais vue) ; après la 10e, il pouvait enregistrer deux fois** → garde de 600 ms, fin et enregistrement une seule fois (try/catch) ; Entrée = Valider puis Suivant.
- Bonne réponse encadrée en bleu (#1f5fbf) après une erreur (elle était en vert). Orthographe : maitrisé, Entraine-toi.
- Tests jsdom (CDN Tailwind retiré) : contenu 0 erreur, 1 000 séries (positions équilibrées), faux → bleu, double clic sans saut, 9/10 → 1 sauvegarde. Pas de capture : Tailwind ne se charge pas dans l'environnement de test.

### 06/10 — Mathématiques → Traitement de données → Le défi logique (Venn & Carroll) (`td_logique_tri`, `fiches/logique_tri.html` + copies public et racine) — sw.js v621
- **Diagramme de Venn faux sur téléphone** : cercles placés en pixels depuis la gauche ET depuis la droite ; sous ~700 px de large, le cercle « droit » passait à gauche du cercle « gauche » (capture 390 px : « Nombres pairs » à gauche, « Multiples de 3 » à droite), alors que les zones de dépôt restaient à leur place → un nombre posé dans le cercle « Multiples de 3 » était compté dans « pairs ». Page plus large que l'écran (457 px). → Diagramme à taille fixe (700 px) qui défile dans son cadre, centré sur l'intersection, avec une aide « ↔ Fais glisser le diagramme » ; tableau de Carroll resserré sur petit écran. Plus de défilement de la page à 390 px.
- **Étiquettes ambiguës** (classement inclusif) : « Rectangle » (un carré est un rectangle), « Parallélogramme », « Triangle rectangle », « Trapèze », « Triangle isocèle » (un équilatéral est isocèle) → « Rectangle (pas carré) », « Parallélogramme quelconque », « Triangle rectangle scalène », « Trapèze quelconque », « Triangle isocèle (pas équilatéral) » ; « Cercle » dans « côtés non tous égaux » (il n'a pas de côtés) → « Hexagone régulier ».
- **Toujours les mêmes étiquettes, dans le même ordre** → les 6 niveaux de nombres sont générés à chaque partie (multiples de 3 / pairs, diviseurs de deux nombres choisis au hasard, > 50 / multiples de 5, Carroll pair-impair / multiples de 3, > 100 / multiples de 10, multiples de 2 / de 5) : 8 nombres, chaque case occupée (1 à 3 nombres), explications générées ; ordre des étiquettes mélangé dans tous les niveaux. Vérification indépendante : 12 000 niveaux, 0 erreur de case.
- Valider avec des étiquettes non placées comptait faux → message « Place d'abord les … étiquettes ». Étiquettes mal placées déplacées vers la bonne case **en bleu** (#1f5fbf) avec « étiquette en bleu sur le diagramme » dans l'explication.
- **Double clic sur « Continuer » sautait un niveau ; à la fin, double enregistrement possible** → garde de 600 ms, enregistrement unique (try/catch), pourcentage arrondi. Orthographe : maitrise, entrainer.
- Tests jsdom : parcours (rien placé → message, 1 erreur → bleu, double clic sans saut, 9/10 → 1 sauvegarde) ; captures 390 px (Venn et Carroll).

### 06/10 — Mathématiques → Grandeurs → Les masses → Conversions & Abaque (QCM) (`grandeur_masses_qcm_abaque`, `fiches/masses_QCM_abaque.html` + copies public et racine) — sw.js v622
- Vérification complète (le 05/10, seuls les doublons de valeur et le double clic avaient été corrigés) : 50 conversions relues par programme (chaque proposition convertie en mg) : la bonne réponse est toujours égale, les deux autres toujours différentes (0 erreur). Mélange Fisher–Yates déjà en place (≈ 33 % par position sur 2 000 séries), enregistrement unique déjà en place, abaque t → mg correct (colonne « 10 kg »).
- Bonne réponse en bleu (#1f5fbf) après une erreur (elle était en vert) ; Entrée = question suivante / score final (pas depuis une case de l'abaque).
- Tests jsdom : faux → bleu, double Entrée sans saut, 9/10 → 1 sauvegarde ; capture 390 px sans défilement horizontal.

### 06/10 — Mathématiques → Solides et figures → Les quadrilatères → Évaluation (`quadrilateres_evaluation`, index › startShapeEvaluation + exercices_maths.js) — sw.js v623
- **Le menu annonçait « 5 formes + 5 vrai/faux » mais seules les 5 formes étaient posées** (`evaluation_vf` jamais utilisé) → les 5 affirmations vrai / faux suivent les 5 formes (score sur 10).
- **Formes de l'évaluation mal choisies** : 2 parallélogrammes, pas de losange → carré, rectangle, parallélogramme, losange, trapèze isocèle (5 noms différents) ; ordre des formes et des affirmations mélangé, propositions mélangées (déjà en place).
- Évaluation déjà passée : fenêtre `alert` → message dans la page. Bonne réponse en bleu (#1f5fbf) après une erreur ; correction finale avec le texte des affirmations. « Nouvel entrainement » (8 boutons du site).
- Tests jsdom : 10 questions (5 formes, 5 VF), 2 erreurs → bleu, doubles clics sans saut, 8/10 → 1 sauvegarde, 2e tentative → message. `exercices_maths.js?v=20261006g`.

### 06/10 — Ménage Mathématiques : cases vides et doublon supprimés (accord de Jeremy) — sw.js v624
- **Cases « 🚧 Les exercices arrivent bientôt ! » retirées du site** (menu, écran, plan de travail, liste des activités, carte des menus) : Numération → Les pourcentages ; Numération → Un peu de tout ; Opérations → La compensation ; Solides et figures → Points, lignes et droites. Logos devenus inutiles supprimés (`assets/logos/num_pourcentages.png`, `num_tout.png`, `solide_points.png`).
- **Ancien menu « Traitement de données »** (écrans `screen-traitement`, `screen-teacher-traitement`, « Les graphiques », « La règle de 3 », « Résolution de problèmes », tous 🚧 et inaccessibles depuis l'accueil, plus `TRAITEMENT_ITEMS` / `renderTraitementScreen`) supprimé ; `goToMathsSection('traitement')` ouvre maintenant le vrai menu Traitement de données. Entrées du plan de travail retirées.
- **« Calcul de la moyenne (Exercices) »** (`td_moyenne_exercices`, accessible seulement par le plan de travail) : copie ancienne des 5 défis de « La moyenne → QCM », sans enregistrement → supprimée (fiche en 3 copies + entrée du plan) ; le contenu reste dans La moyenne → QCM (corrigé le 06/10).
- Menus parents (Additions et soustractions, Multiplications et divisions, Les 4 opérations, Calcul écrit, L'ordre des opérations, Les durées, Le périmètre) marqués « menu » : tous leurs exercices sont vérifiés.
- Contrôles : plus aucune référence aux identifiants supprimés dans index.html / exercices_*.js (hors sauvegardes et `public/index.html`, ancienne copie non publiée) ; index chargé dans Chromium : menus Numération, Opérations, Solides rendus sans les cases supprimées, aucune nouvelle erreur JavaScript ; syntaxe 6 fichiers OK.

### 06/10 — Éveil → Histoire → La Préhistoire → Qui veut gagner des millions ? (`qvgdm_prehistoire`, index › renderQVGDMPrehistoire / QVGDM_Q) — sw.js v625
- **Propositions jamais mélangées, toujours la même partie** (bonne réponse en B dans 8/15 questions, jamais en D sauf une fois) → banque de **30 questions, 2 par niveau** (l'ordre croissant de difficulté est gardé) : une question tirée par niveau à chaque partie, propositions mélangées (Fisher–Yates ; 50/50 aussi). Bonne réponse strictement la plus longue dans 7/30 questions seulement.
- **Contenu revu** : « outil fabriqué en premier = couteau en silex » (faux) → « galets aménagés » ; « vivaient dans des grottes » (idée reçue) supprimée ; « chassant et cueillant » → « nomades chasseurs-cueilleurs » (la question donnait la réponse) → « se déplacent sans cesse… » ; Lucy (« ancêtre de l'homme moderne » douteux) → « squelette d'australopithèque découvert en Éthiopie en 1974 » ; « a provoqué la disparition » → « a contribué » ; premiers villages → « Proche-Orient ». Nouvelles questions : fin de la Préhistoire, dinosaures, pierre, peintures rupestres, Lascaux (animaux), élevage, hache polie, poteries, Afrique, Homo sapiens, Néandertal (Spy), agriculture en Belgique (≈ 7 000 ans), Mésolithique, biface, cuivre, mégalithes (Wéris). Nouvelle orthographe (maitrise, apparait). Espace insécable avant « ? ».
- **Message de fin cassé** : le texte affichait les balises `<br>` et `<strong>` en clair (textContent) → affichage correct, bonne réponse en bleu (#1f5fbf). Après une erreur, la bonne proposition est en bleu (elle était en vert).
- **Minuteurs** : quitter / rejouer pendant le délai de 1,5–2 s faisait avancer ou terminer la nouvelle partie → minuteurs liés à la partie. La barre des paliers défile jusqu'au palier en cours.
- Tests Chromium : 150 parties gagnées (30 questions vues, texte affiché = question, bonne réponse cliquable, double clic sans effet, 1 sauvegarde 15/15 par partie), répartition A/B/C/D 545/546/571/588 ; partie perdue à la question 7 → bleu + 1 sauvegarde 6/15 ; relance pendant le délai sans effet ; captures 390 px sans débordement.

### 06/10 — Éveil → Histoire → La Préhistoire → Termes et définitions (`prehistoire_assoc`, index › PREHISTOIRE_ASSOC / renderPrehistoireAssoc) — sw.js v626
- **Termes et cases décalés** : les deux colonnes étaient indépendantes ; dès qu'une définition prenait plusieurs lignes (toujours à 390 px), les termes ne se trouvaient plus en face de leur case → une ligne de grille par paire (alignement vérifié).
- **« Vérifier » pouvait être cliqué plusieurs fois** (un enregistrement et une correction ajoutée à chaque clic), les cases vides comptaient faux et on pouvait encore déplacer après la correction → message dans la page s'il reste des définitions, garde de 600 ms, correction unique, enregistrement unique (try/catch), exercice verrouillé ensuite.
- Correction en bleu (#1f5fbf) sous la définition fausse (elle était en vert) ; ajout du placement par toucher : toucher une définition, puis la case (utile sur tablette, la réserve est sous les cases).
- **Contenu (29 paires relues)** : Préhistoire « premiers hominidés (3,5 millions av. J.-C.) » → « premiers hommes (il y a environ 3 millions d'années) … écriture (vers 3 300 av. J.-C.) » ; « Homo sapiens sapiens » → « Homo sapiens » ; silex « pierre dure taillée » → « roche très dure que l'on taille » ; biface « taillé sur ses deux faces » ; roue « fin du Néolithique (vers 3 500 av. J.-C.) » ; feu « sa maitrise permet… » ; sagaie / propulseur précisés ; évènements, guillemets « ». Nombres et « av. J.-C. » insécables. Termes et définitions tous distincts, aucun terme répété dans sa définition.
- Tests Chromium : 300 tirages (29 termes vus, définitions bien mélangées), vide → message sans enregistrement, clic définition + case → placée, re-clic → retirée, 6/8 → bleu + 1 seul enregistrement malgré 3 clics, verrouillage ; captures 390 px sans débordement.

### 06/10 — Éveil → Histoire → La Préhistoire → Un campement du Paléolithique (`prehistoire_doc`, index › PREHISTOIRE_DOC_TEXTE / renderPrehistoireDoc / pdocValider) — sw.js v627
- **La bonne réponse était presque toujours la plus longue** (souvent de loin : « Parce qu'ils n'avaient pas d'allumettes ni de briquet — faire du feu demandait… ») et les 2 autres propositions étaient absurdes (palais souterrains, fusils, grandes villes) → 13 questions à 4 propositions plausibles et de longueur voisine (bonne réponse strictement la plus longue : 3/13) : 9 de compréhension + 4 d'inférence (section séparée, comme le Moyen Âge), ordre des questions et des propositions mélangé (Fisher–Yates).
- **Texte corrigé** : « il y a 30 000 ans » avec harpons et propulseurs (anachroniques à cette date) → « il y a environ 15 000 ans » ; « ils choisissent toujours un abri naturel » puis « certains construisent des huttes » (contradictoire) → « ils cherchent un abri » ; explication confuse de la fumée → « la fumée s'échappe à l'air libre au lieu d'envahir l'abri » ; « les femmes et les enfants restent cueillir » (répartition non établie par l'archéologie) → « d'autres membres du groupe cueillent » ; citation « chacun avait un rôle » alignée sur le texte (présent). La question « pourquoi était-il si difficile de faire du feu ? » (réponse absente du texte) est remplacée par une inférence fondée sur le texte.
- **Validation** : questions sans réponse comptées fausses → message dans la page (numéros des questions manquantes) ; réponses encore modifiables après validation → verrouillées ; garde 600 ms ; enregistrement unique (try/catch). Bonne réponse en bleu (#1f5fbf, classe `reveal`) après une erreur (elle était en vert) ; message « les réponses vertes sont correctes » adapté.
- Tests Chromium : 400 parties (bonne réponse en A/B/C/D 1330/1291/1316/1263, 9 premières questions différentes), vide → message, 12/13 répondues → « Réponds d'abord à la question 13 », 1 erreur → bleu + rouge, 1 seul enregistrement 12/13 malgré les clics répétés, réponses verrouillées ; capture 390 px sans débordement.

### 06/10 — Éveil → Histoire → L'Antiquité → Qui veut gagner des millions ? (`qvgdm_antiquite`, index › QVGDM_ANTIQUITE_Q / renderQVGDMAntiquite) — sw.js v628
- **Propositions jamais mélangées, toujours la même partie** (bonne réponse en C dans 9/15 questions) → même moteur que le quiz Préhistoire : **30 questions, 2 par niveau** (difficulté croissante gardée), une tirée par niveau, propositions mélangées (Fisher–Yates ; 50/50 aussi). Bonne réponse strictement la plus longue : 7/30.
- **Contenu** : « oppidum » demandé deux fois (Q4 donnait Q10) → une seule fois ; « mélange des cultures gauloise et romaine » acceptait aussi « la romanisation » → « la civilisation née du mélange… » (gallo-romaine / gréco-romaine / celtique / égyptienne) ; « province romaine appelée Gallia » (la Gaule comptait plusieurs provinces) → « la Gaule Belgique » ; « Pax Romana » : la bonne réponse n'est plus la seule longue ; « le gaulois écrit » retiré. Nouvelles questions (dont plusieurs belges) : Rome, latin, amphithéâtre, thermes, forum, villa, druides, Belges, Ambiorix et les Éburons, Tongres, voies romaines, Auguste premier empereur, Francs, 476, « les plus braves de tous les Gaulois », durée de la conquête, assassinat de César.
- **Fin de partie** : carte de fin imbriquée dans une autre carte, réponse en jaune → une seule carte, bonne réponse en bleu (#1f5fbf) ; après une erreur, la bonne proposition est en bleu (elle était en vert). Minuteurs liés à la partie (rejouer / quitter pendant le délai n'avance plus la nouvelle partie) ; paliers qui défilent jusqu'au palier en cours ; espaces insécables (« ? », « av. J.-C. ») ; enregistrement dans un try/catch.
- Tests Chromium : 60 parties gagnées (30 questions vues, 1 sauvegarde 15/15 par partie, double clic sans effet), répartition A/B/C/D 253/213/210/224 ; partie perdue à la question 7 → bleu + 1 sauvegarde 6/15 ; relance pendant le délai sans effet ; captures 390 px sans débordement.

### 06/10 — Éveil → Histoire → L'Antiquité → Termes et définitions (`antiquite_assoc`, index › ANTIQUITE_ASSOC / renderAntiquiteAssoc) — sw.js v629
- Même moteur que Préhistoire → Termes et définitions, avec les mêmes défauts (termes décalés par rapport à leur case dès qu'une définition fait plusieurs lignes ; « Vérifier » cliquable plusieurs fois → plusieurs enregistrements ; cases vides comptées fausses ; déplacements encore possibles après la correction ; correction en vert) → moteur corrigé de la Préhistoire repris tel quel (une ligne de grille par paire, message s'il reste des définitions, garde 600 ms, correction et enregistrement uniques, verrouillage, correction en bleu #1f5fbf, placement par toucher, nombres et « av. J.-C. » insécables).
- **Contenu (27 paires relues)** : la Gaule « correspondant à la France actuelle » → « la France, la Belgique et la Suisse actuelles » ; oppidum « village » → « ville gauloise fortifiée, souvent sur une hauteur » ; César « entre 58 et 52 » → « à partir de 58 av. J.-C. » (la conquête s'achève en 51) ; moissonneuse « invention gauloise… mécaniquement » → « machine gallo-romaine poussée par un animal » ; hypocauste « inventé par les Romains » → « utilisé par les Romains » ; Gaulois « peuples celtes… dont nos régions » ; villa « grand domaine agricole » ; légionnaire (la définition répétait « légion ») ; civilisation gallo-romaine (la définition répétait « civilisation ») ; évènements, guillemets « ».
- Tests Chromium : 300 tirages (27 termes vus), vide → message sans enregistrement, clic définition + case → placée, 6/8 → bleu + 1 seul enregistrement, verrouillage, alignement termes / cases vérifié ; capture 390 px sans débordement.

### 06/10 — Éveil → Histoire → L'Antiquité → Document historique : la bataille d'Alésia (`antiquite_doc`, index › ANTIQUITE_DOC_TEXTE / renderAntiquiteDoc / antDocValider) — sw.js v630
- Même moteur que Préhistoire → Campement, mêmes défauts : 8 questions à 3 propositions, bonne réponse le plus souvent la plus longue (« De la dignité — il se rend courageusement pour épargner son peuple »), questions sans réponse comptées fausses, réponses modifiables après validation, correction en vert → moteur corrigé repris (13 questions à 4 propositions : 9 de compréhension + 4 d'inférence, mélange Fisher–Yates, message s'il manque des réponses, verrouillage, garde 600 ms, enregistrement unique, bonne réponse en bleu). Bonne réponse strictement la plus longue : 1/13.
- **Texte et questions corrigés** : « deux lignes de fortifications en bois » et la question qui en découlait (« un mur en pierre et un fossé rempli d'eau » en mauvaise réponse, alors que César décrit des fossés remplis d'eau) → « fossés, palissades et tours » ; « les murs sont trop solides » → « ville perchée sur une colline aux pentes raides, trop bien protégée » ; « Vercingétorix chasse les femmes, les enfants et les vieillards » → « les chefs gaulois chassent les habitants, avec les femmes et les enfants » ; reddition en armure présentée comme un récit écrit plus tard ; « la Gaule devient une province romaine » → « passe sous la domination romaine » ; inférence « moins nombreuse mais mieux entrainée » (le nombre n'est pas dans le texte) → « bien entrainés et bien commandés ».
- Tests Chromium : 400 parties (bonne réponse en A/B/C/D 1292/1283/1278/1347), vide → message, 12/13 → « Réponds d'abord à la question 13 », erreur → rouge + bleu, 1 seul enregistrement 12/13, réponses verrouillées ; 390 px sans débordement.

### 06/10 — Éveil → Histoire → Le Moyen Âge → Qui veut gagner des millions ? (`qvgdm_moyen_age`, index › QVGDM_MOYEN_AGE_Q / renderQVGDMMoyenAge) — sw.js v631
- **Propositions jamais mélangées, toujours la même partie** ; moteur à part (styles intégrés, ancienne présentation), mêmes défauts que les deux autres quiz (50/50 biaisé, minuteurs non liés à la partie, bonne réponse en vert, enregistrement sans try/catch) → moteur du quiz Antiquité repris (présentation commune aux 3 quiz d'histoire), **30 questions, 2 par niveau**, propositions mélangées. Bonne réponse strictement la plus longue : 5/30 (avant : très souvent, ex. « L'espace extérieur entourant le château où vivaient les gens »).
- **Contenu** : fin du Moyen Âge avec 1453 (chute de Constantinople, date aussi enseignée) en mauvaise réponse à côté de 1492 → 1453 retiré des propositions, question « dans de nombreux manuels » ; « le seigneur qui possédait des terres… → un seigneur féodal » (la question donnait la réponse) retirée ; basse-cour « espace extérieur où vivaient les gens » → « cour fermée avec écuries et ateliers » ; « cérémonie où le seigneur accorde des terres → l'hommage » (c'est l'investiture) → « cérémonie où le vassal jure fidélité » ; croisades : « pèlerinages organisés par le pape » (en partie vrai) retiré des mauvaises réponses ; « Le baptême féodal » (inventé) retiré. Nouvelles questions : château fort, chevalier, donjon, pont-levis, trois ordres, fief, corvée, dîme, Godefroy de Bouillon, Charlemagne, Clovis, Bruges et le drap, gothique, roman, Éperons d'or (1302), imprimerie. Nouvelle orthographe (apparait).
- Tests Chromium : 60 parties gagnées (30 questions vues, 1 sauvegarde 15/15 par partie), répartition A/B/C/D 221/231/239/209 ; partie perdue à la question 7 → bleu + 1 sauvegarde 6/15 ; relance pendant le délai sans effet ; captures 390 px sans débordement.

### 06/10 — Éveil → Histoire → Le Moyen Âge → Termes et définitions (`moyen_age_assoc`, index › MOYEN_AGE_ASSOC_DATA / renderMoyenAgeAssoc) — sw.js v632
- Moteur à part en **3 colonnes** (terme / case / définition, ≈ 110 px chacune à 390 px), avec les mêmes défauts que Préhistoire et Antiquité (« Vérifier » cliquable plusieurs fois → plusieurs enregistrements, cases vides comptées fausses, déplacements possibles après correction, correction en vert) → moteur corrigé commun repris (terme + case sur une ligne, réserve de définitions en dessous, message s'il en reste, garde 600 ms, correction et enregistrement uniques, verrouillage, correction en bleu, placement par toucher).
- **Contenu** : « Motte » et « Château à motte » avaient presque la même définition (indiscernables s'ils tombaient ensemble) → « Motte » retirée, château à motte « une tour en bois au sommet d'une butte de terre » ; basse-cour « espace extérieur où vivaient les gens » → « cour fermée avec écuries, ateliers et logements des serviteurs » ; peste noire « population européenne » ; banalités payées par « les paysans » (pas seulement les serfs). 23 paires, termes et définitions distincts.
- Tests Chromium : 300 tirages (23 termes vus), vide → message, clic définition + case → placée, 6/8 → bleu + 1 seul enregistrement, verrouillage, alignement vérifié ; 390 px sans débordement.

### 06/10 — Éveil → Histoire → Le Moyen Âge → La Peste Noire (`moyen_age_doc`, index › MOYEN_AGE_DOC_* / renderMoyenAgeDoc / validateMoyenAgeDoc) — revérification complète — sw.js v633
- Le 05/10 (ac366c8), seuls le mélange des QCM et l'ordre des vrai/faux avaient été corrigés (signalement d'élève) ; toujours en place (bonne réponse en A/B/C/D 889/888/894/929 sur 400 parties, 10 suites V/F différentes).
- **Anachronisme** : « les médecins portaient des masques en forme de bec d'oiseau remplis de plantes » (costume apparu au XVIIe siècle, pas en 1347) et la question d'inférence qui s'y rapportait → « les médecins ne savaient pas d'où venait le mal ; beaucoup pensaient qu'il se transmettait par l'air empesté » + inférence « Pourquoi les médecins ne parvenaient-ils pas à arrêter la maladie ? ».
- **Bonne réponse la plus longue** (inférences surtout : « Parce qu'ils ne comprenaient pas comment Dieu pouvait laisser mourir autant d'innocents » contre 3 réponses courtes et absurdes) → propositions réécrites, de longueur voisine, sans « Parce que » répétitif ; QCM rééquilibrés (« 1/4 » → « Environ 1/4 », etc.). V/F « inébranlée » → « La Peste n'affaiblit pas du tout l'Église » (faux).
- **Validation** : questions sans réponse comptées fausses → message dans la page (nombre de réponses manquantes) ; garde 600 ms ; enregistrement dans un try/catch ; bonne réponse en bleu (#1f5fbf, ➜) quand l'élève s'est trompé, en vert quand il a juste (QCM, V/F et inférences) ; la page ne remonte plus en haut à chaque clic.
- Tests Chromium : vide → « il en reste 14 », 13/14 → « Il te reste une question sans réponse », 2 erreurs → 2 réponses en bleu, 1 seul enregistrement 12/14 malgré les clics répétés, réponses verrouillées ; 390 px sans débordement.

### 06/10 — Éveil → Histoire → Le Moyen Âge → Texte lacunaire (`moyen_age_texte_trous`, `fiches/moyen_age_texte_trous.html`, 3 copies) — sw.js v634
- **Résultat sans valeur** : enregistré seulement quand les 3 textes étaient parfaits, toujours « 24/24 », après autant d'essais que voulu (la correction « ✗ (mot) » s'affichait dès la 1re vérification : il suffisait de la recopier) → chaque texte n'est vérifié qu'**une fois** (trous verrouillés), score au premier essai, enregistrement unique du vrai score /24 quand les 3 textes sont vérifiés (try/catch, `window.parent !== window`).
- Vérifier avec des trous vides comptait faux → message « Complète d'abord les N trous restants », rien de compté ; garde 600 ms. Correction en **bleu** (« ➜ mot », elle était rouge) ; onglet = score du texte (ex. 6/8) ; bouton « Texte suivant » ; « Réinitialiser » → « Effacer mes choix » (avant vérification seulement) ; finale avec le score réel.
- **Liens « Retour à l'accueil » / « Retour aux activités »** dans la fiche : ils chargeaient tout le site à l'intérieur du cadre → retirés (le bouton Retour du site suffit).
- **Contenu** : serfs « qui appartiennent au seigneur et sont vendus avec la terre » → « attachés à la terre du seigneur, ne peuvent pas la quitter » ; corvées « lorsqu'ils ne peuvent pas payer en monnaie » (faux : la corvée est due en plus) → « ils doivent effectuer des corvées » ; « Cette cérémonie » sans antécédent → « La cérémonie ». Banques de mots et définitions relues (cens / taille, séculier / régulier distingués par le texte).
- Tests Chromium (fiche dans un cadre) : vide → message, 6/8 → 2 réponses en bleu + trous verrouillés, double clic sans effet, 3 textes → 1 seule sauvegarde 22/24 (92 %), « Recommencer » remet tout à zéro ; 390 px sans débordement.

### 06/10 — Éveil → Histoire → Le Moyen Âge → Je relie (`moyen_age_vocabulaire`, `fiches/moyen_age_vocabulaire.html`, 3 copies) — sw.js v635
- **Résultat sans valeur** (même défaut que le texte lacunaire) : enregistré seulement à 24/24, après autant d'essais que voulu ; après « Valider », la correction « Bon mot : … » restait affichée et un clic rouvrait la série pour la corriger → chaque série n'est validée qu'**une fois** (verrouillée), score au premier essai, vrai score /24 enregistré une fois quand les 3 séries sont validées (try/catch, `window.parent !== window`).
- `alert()` si rien n'était relié, et validation possible avec des paires manquantes (comptées fausses) → message dans la page « il reste N paires à former », rien de compté ; garde 600 ms. Bon mot en **bleu** (« ➜ mot », il était rouge) ; onglet = score de la série ; « Série suivante » mène à la première série non validée ; « Recommencer cette série » → « Tout délier » (avant validation seulement) ; finale avec le score réel.
- Liens « Retour à l'accueil » / « Retour aux activités » (chargeaient le site dans le cadre) retirés.
- **Contenu** : serf « appartient au seigneur et est vendu avec la terre » → « attaché à la terre de son seigneur, qu'il ne peut pas quitter » ; « Clergé régulier » et « Moine » avaient presque la même définition (indiscernables) → « Moine » remplacé par « Monastère » (« ensemble de bâtiments où vivent des moines ou des moniales »), clergé régulier « religieux qui vivent à l'écart du monde en suivant une règle ».
- Tests Chromium (fiche dans un cadre) : vide → message (pas d'alert), 6/8 → 2 bons mots en bleu, série verrouillée (clics et ✕ sans effet), double clic sans effet, 3 séries → 1 seule sauvegarde 22/24 (92 %) ; colonnes mélangées indépendamment (0/200 ordres identiques) ; 390 px sans débordement.

### 06/10 — Éveil → Histoire → Les Temps modernes / L'Époque contemporaine (`hist_temps_modernes`, `hist_contemporaine`)
- Cases encore vides, **gardées à la demande de Jeremy** (des exercices y seront ajoutés plus tard). Aucun changement. À noter : elles figurent aussi dans le catalogue du plan de travail (`PLAN_CATALOGUE`) ; si on les place dans un plan, l'élève ne pourra pas les terminer tant qu'elles sont vides.

### 06/10 — Éveil → Histoire → Les grandes périodes = La frise chronologique (`hist_grandes_periodes` et `fiche_frise`, `fiches/frise-chronologique-histoire.html`, 3 copies) — sw.js v636
- Leçon interactive (pas de score). **Décision de Jeremy** : fin de la Préhistoire = invention de l'écriture (vers 3 300 av. J.-C.) dans le monde ; dans nos régions, jusqu'à la conquête romaine (52 av. J.-C.) — les deux sont expliquées. La frise garde ses blocs « de nos régions » et le dit (badge, description de la Préhistoire et de l'Antiquité) ; écriture, pyramides et démocratie athénienne (placées dans l'Antiquité alors qu'elles précèdent 52 av. J.-C.) marquées « Ailleurs dans le monde » ; l'écriture « marque la fin de la Préhistoire » → « dans ces régions du monde… et chez nous ? ». Quiz Préhistoire (« Dans le monde, quel évènement… ») et Termes et définitions (« ; dans nos régions, jusqu'à la conquête romaine ») alignés.
- **Dates des sous-périodes incohérentes** (dates du Proche-Orient sur une frise de nos régions, alors que le texte disait « agriculture en Belgique vers 5 000 ») → dates de nos régions : Mésolithique jusqu'à 5 300, Néolithique 5 300–2 100, Bronze 2 100–800, Fer 800–52 av. J.-C. (frise principale, frise zoomée, repères) ; Âge du Fer daté ~800 (au lieu de 1 200).
- **Erreurs corrigées** : naissance de Jésus en « an 0 » (il n'y a pas d'année 0 ; naissance réelle quelques années plus tôt) ; Magellan « prouve que la Terre est ronde » (on le savait depuis l'Antiquité) ; Louis XIV « sa devise : L'État, c'est moi » (phrase apocryphe ; sa devise est autre) et « villes belges (Lille…) » → villes des Pays-Bas espagnols ; « Pays-Bas espagnols et naissance de la Belgique » → « (nos régions) » ; « -58 … av. J.-C. » (double notation) ; Godefroid « né à Baisy » → « probablement » ; peste « Belgique durement touchée, villes décimées » nuancé ; 6e réforme de l'État « 2011 » → 2012-2014 ; inondations 2021 « 42 morts » → « des dizaines de morts » ; légende « équipement réel » d'un Gaulois à casque à cornes → précisé ; « à Étiolles » retiré (huttes en os de mammouth) ; Lune (1969) remise avant la fédéralisation (1970). Nouvelle orthographe : maitrise, apparait, traineaux, voute, naitre, entrainent, brulée, aout, ile, évènement(s).
- **390 px** : les deux frises étaient illisibles (étiquettes superposées) → défilement horizontal (largeur minimale 760 px) avec « ↔ Fais glisser la frise » ; plus de débordement de la page. Illustrations vérifiées (9 images, légendes conformes aux images malgré des noms de fichiers trompeurs).
- Tests Chromium à 390 et 1024 px : repères de la frise croissants (0 → 100 %), aucune erreur JavaScript, aucune image manquante.

### 06/10 — Éveil → Histoire → Le grand voyage du Temps (`hist_grand_voyage_temps`, `fiches/lecon_frise_historique.html`, 3 copies) — sw.js v637
- **Résultat jamais enregistré** (aucun `saveResult`) → enregistré une fois quand les 5 quiz sont terminés : score du premier passage /54 (try/catch, `window.parent !== window`) ; bilan affiché dans la Synthèse ; « Recommencer ce quiz » possible sans nouvel enregistrement.
- **Bug bloquant** : Temps modernes Q5, l'explication contenait des guillemets droits ("America") qui cassaient l'attribut `onclick` → la bonne réponse ne réagissait pas et le quiz ne pouvait jamais se terminer. Quiz désormais générés depuis des données (plus d'`onclick` avec texte).
- **Propositions jamais mélangées** (ordre fixe des 50 questions, bonne réponse souvent la plus longue, ex. « Les chariots à bœufs sur les chaussées romaines pavées, et les barques plates tirées par halage sur les fleuves ») → mélange Fisher–Yates à chaque affichage (A/B/C 3725/3537/3538 sur 200 affichages), propositions réécrites de longueur voisine (bonne réponse strictement la plus longue : 13/54). Bonne réponse en bleu après une erreur (elle était en vert), explication ensuite.
- **Périodes (accord de Jeremy)** : l'onglet « Temps modernes (Explorations & Révolution industrielle) » contenait la révolution industrielle (XIXe s.) et l'onglet contemporain commençait en 1945, alors que la frise place 1789 comme rupture ; le jeu d'association reliait « Temps modernes ↔ révolution industrielle » → Temps modernes (1492-1789) : grandes découvertes, Renaissance et imprimerie, Réforme, Charles Quint (né à Gand), Pays-Bas espagnols, Vésale, Mercator, Bruegel, Plantin + 4 nouvelles questions ; Époque contemporaine (1789 → aujourd'hui) : révolution industrielle, conditions ouvrières, luttes (déplacées) puis après-guerre, 14 questions, illustrations A-B-C ; jeu d'association corrigé et mélangé.
- **Fin de la Préhistoire** (convention du 06/10) : titres et chapeaux « dans nos régions » / « dans le monde » ; âges des métaux datés pour nos régions (2 100, 800 av. J.-C.).
- **Contenu corrigé** : « D'après le texte historique de Jean le Long » (texte absent de la page) → « d'après le texte de cette page » ; question sur la charte d'Albert de Cuyck (1196) sans support → phrase ajoutée au texte ; Tongres et Arlon « reliées par une chaussée » → sur de grandes chaussées (Bavay–Tongres–Cologne) ; question « deux plus anciennes villes » (Namur et Tournai ont aussi des origines romaines) → « la plus ancienne : Tongres » ; Watt « invente » → « améliore » la machine à vapeur ; Van Gogh « à Cuesmes en 1881 » → Borinage vers 1880 ; CO2 « ont doublé » → « plus que doublé » ; Indice Planète Vivante 69 % → 73 % (WWF 2024) ; « in 1973 » → en ; Clovis : « Bruxelles » proposé comme roi → Godefroid de Bouillon. Markdown resté dans le HTML (« **5 grandes périodes** », *pilum*, *oratores*…) → gras / italique. Nouvelle orthographe (connaitre, maitre, maitrise, nait, voutes, apparait, entrainant, évènement).
- Tests Chromium (fiche dans un cadre) : 54 questions, réponses justes sauf 1 par quiz → bleu + rouge, double clic sans effet, 1 seule sauvegarde 49/54 (91 %), quiz recommencé sans 2e sauvegarde, 9 images chargées ; 390 px sans débordement.

### 06/10 — Éveil → Histoire → La ligne du temps (`hist_ligne_du_temps`, `fiches/ligne-du-temps_5.html`, 3 copies) — sw.js v638
- **Résultat jamais pris en compte** : `saveResult(score, total, temps, 'ligne_du_temps_5')` (arguments séparés, mauvais identifiant) → objet `{activity:'hist_ligne_du_temps', bookTitle, score, total, pct, date, time}`, une fois par partie terminée, try/catch, `window.parent !== window`.
- **Quiz : bonne réponse toujours en B** (10/10, propositions jamais mélangées) et souvent la plus longue → propositions mélangées (Fisher–Yates ; A/B/C 681/661/658 sur 200 parties) et réécrites de longueur voisine ; bonne réponse en bleu après une erreur (elle était en vert) ; textes insérés sans `innerHTML`.
- **« L'an 0 »** présenté comme origine du calendrier (il n'y a pas d'année 0) → « point de départ : la naissance (supposée) de Jésus-Christ ; on passe de l'an 1 av. J.-C. à l'an 1 apr. J.-C. » ; repère « naissance de J.-C. » ; objectif enseignant adapté.
- **Fin de la Préhistoire** (convention du 06/10) : « jusqu'à l'écriture (≈ −3300) ; dans nos régions, jusqu'à la conquête romaine (−52) » dans la théorie et la synthèse ; Néolithique « ≈ −8000 au Proche-Orient (−5300 chez nous) ».
- **Contenu** : statuettes « représentent la déesse mère » (hypothèse) → « on pense qu'elles étaient liées à la fertilité » ; Constitution de 1831 « séparation de l'Église et de l'État » → « indépendance des cultes vis-à-vis de l'État » ; Q10 précise que le vote des femmes n'arrive qu'en 1948. Markdown resté dans le HTML (« **5 grandes périodes** », *Niveau P5*…) → gras / italique. Nouvelle orthographe (entrainons, entrainer, maitre, maitrises, renait, évènement…).
- Étiquettes des défis de manipulation toujours dans le même ordre → mélangées au départ et à chaque « Recommencer » (24 ordres différents sur 30). Frise du calendrier : légendes « avant / après J.-C. » superposées à 390 px → réduites et sur deux lignes.
- Tests Chromium (fiche dans un cadre) : 10 questions, 1 erreur → rouge + bleu, double clic sans effet, 1 sauvegarde 9/10 (90 %) par partie ; 390 px sans débordement.

### 06/10 — Éveil → Histoire → L'Œil du Temps, jeu de Kim (`kim_histoire`, `kim_histoire.html` + `kim_histoire_data.js` ; `fiches/kim_histoire.html` = simple redirection) — sw.js v639
- **Aucun résultat enregistré** (le plan de travail ne pouvait jamais valider l'exercice) → `saveResult` au format objet (`activity:'kim_histoire'`) : une fois par scène en mode libre (/4), une fois à la fin du Grand Voyage (/20) ; try/catch, `window.parent !== window`.
- **Contenu revérifié image par image (90 questions, 10 images)** ; corrections encore nécessaires depuis l'analyse du 29/09 : amphores **7** (le jeu disait 5, 7 était une mauvaise réponse) ; grenades (6-7, impossible à compter) → « qui tient l'ombrelle ? » ; colonnes du temple (7 en façade + côtés, ambigu) → « que voit-on au sommet du fronton ? » ; pots de laurier (4 + palmiers, ambigu) → forme de l'arcade du fond ; « robe (stola) bleue » (elle est blanche, c'est la palla qui est bleue ; « blanche » était une mauvaise réponse) → manteau (palla) ; coupe dorée sur le plateau du serviteur (elle est dans la main du maitre) ; tonneaux « au total » (9 visibles) → les 6 empilés au sol ; café (anachronique, arrive au XVIIe s.) → cacao ; faucon « chaperonné » (pas de chaperon) ; livres « sur l'étagère » (sur la table) ; squelette « miniature » ; « Étincelant devant un âtre » → « Étendues » ; femme « sur un tronc d'arbre » (assise au sol) ; panier « d'écorce » (osier) ; rivière « gelée » ; tenue « et cravate » (tous n'en ont pas) ; trajectoire « en 8 » ; Santa María « caravelle » ; « premier pays du continent » → première ligne voyageurs (1835). Périodes : fin de la Préhistoire selon la convention (monde / nos régions). Nouvelle orthographe (maitre, boite, nénufars, fut, disparaitra, entrainer).
- **Bonne réponse souvent la plus longue** (34/90, ex. « Des ailes et des éclairs (la foudre de Jupiter) ») → propositions raccourcies ou rééquilibrées : 13/90.
- **Moteur** : tirage des questions et mélange des propositions par `sort(() => 0.5 - Math.random())` → Fisher–Yates ; verrou contre le double tap visant un id inexistant (`question-options-grid`) et 350 ms → bon id, 600 ms ; bonne réponse du débriefing en bleu (#1f5fbf, elle était verte) ; `alert()` de fin du Grand Voyage → message dans l'accueil avec le score ; Grand Voyage toujours sur la 1re scène de chaque époque → scène tirée au hasard ; « ⭐ 0 / 40 ⭐ » (étoile doublée) ; `border-3` inexistant ; image limitée à la largeur de l'écran.
- Tests Chromium (jeu dans un cadre) : double tap → 4 réponses (pas 8), 1 sauvegarde /4 par scène, Grand Voyage de 5 scènes différentes → 1 seule sauvegarde /20 + message d'accueil, aucune fenêtre `alert`, bonne réponse en bleu ; positions de la bonne réponse 65/73/83/79 sur 300 tirages ; 390 px sans débordement.

### 06/10 — Éveil → Sciences → L'appareil respiratoire → Le schéma (`sci_resp_schema`, index › SCI_RESP_SCHEMA_DATA / renderSciRespSchema / validateSciRespSchema) — sw.js v640
- Schéma `appareil_respiratoire.png` vérifié : les 9 numéros correspondent aux légendes (1 bouche, 2 nez, 3 poumon, 4 trachée, 5 bronches, 6 bronchioles, 7 alvéoles, 8 diaphragme, 9 cœur). « Trachée artère » (forme vieillie) → « Trachée » ; « Coeur » → « Cœur ».
- **Validation** : « Valider » cliquable plusieurs fois → plusieurs enregistrements ; cases vides comptées fausses (et remplies d'office en rouge) ; une étiquette mal placée n'était **jamais corrigée** ; étiquettes encore déplaçables après validation → message dans la page s'il reste des étiquettes, rien de compté ; garde 600 ms ; validation unique et verrouillage ; bonne légende en bleu (« ➜ … ») sous chaque erreur ; enregistrement unique (try/catch) ; bouton « Recommencer ».
- **Tablette / téléphone** : seul le glisser était possible → ajout du placement par toucher (étiquette puis case) ; aide tactile commune (case visée sous le doigt, défilement automatique près du bord) ; schéma et tableau côte à côte même à 390 px (schéma de 170 px) → passage sur une colonne quand l'écran est étroit.
- Tests Chromium (390 px, tactile) : vide → « il en reste 9 », placement par toucher, 2 inversions → 7/9 + 2 corrections en bleu, 1 seul enregistrement malgré 3 clics, verrouillage ; pas de débordement.

### 06/10 — Éveil → Sciences → L'appareil respiratoire → Le trajet de l'air (`sci_resp_texte`, index › SCI_RESP_TEXTES / renderSciRespTexteIdx / validateSciRespTexte) — sw.js v641
- Mêmes défauts que le schéma : « Valider » cliquable plusieurs fois (plusieurs enregistrements), trous vides comptés faux, mot mal placé jamais corrigé, mots encore déplaçables après validation, glisser seulement → message s'il reste des trous (rien de compté), garde 600 ms, validation et enregistrement uniques (try/catch, titre du texte dans l'enregistrement), verrouillage, bon mot en bleu (« ➜ … »), placement par toucher, aide tactile commune (case sous le doigt, défilement près du bord), boutons « Recommencer » et « ➜ autre texte ».
- **Contenu** : « trachée artère » → « trachée » (2 textes) ; expiration « les poumons se dégonflent grâce au diaphragme qui remonte » → « se vident de leur air quand le diaphragme remonte » ; l'air sort « par le nez ou la bouche ». Les 16 trous relus (articles et ordre bronchioles → bronches cohérents).
- Tests Chromium (390 px, tactile) : vide → « il en reste 8 », nez / bouche inversés → 6/8 + correction en bleu, 1 seul enregistrement malgré 3 clics, verrouillage, 2e texte : 8 trous ; pas de débordement.

### 06/10 — Éveil → Sciences → L'appareil respiratoire → QCM (`sci_resp_qcm`, index › renderSciRespQCM / validateSciRespQCM, exercices_eveil.js › SCI_RESP_QCM_DATA) — sw.js v642
- Données réécrites : 30 questions (correct:0, mélangées à l'affichage), 21 familles `k` → 10 questions tirées, jamais deux de la même famille (une question ne donne plus la réponse d'une autre).
- Contenu : « Trachée », « œsophage », « cœur » (nouvelle orthographe), question CO2 reformulée (produit par notre corps), poils du nez, poumon gauche plus petit (place du cœur), tabac, nouvelle question « Pourquoi respire-t-on plus vite quand on court ? », option absurde « D'air et de sang » supprimée. Biais « plus longue = bonne » : 4/30.
- Moteur : message dans la page si des questions sont sans réponse (plus de validation incomplète comptée fausse), garde 600 ms, correction en bleu #1f5fbf (plus de vert pour une réponse non choisie), sauvegarde unique en try/catch, scroll conservé.
- Tests Playwright 390 px : 300 tirages sans doublon de famille, bonne réponse répartie ~25 % par position, message « il en reste 10 », 1 erreur → 1 bonne réponse en bleu, 1 seule sauvegarde malgré 3 clics, pas de débordement. exercices_eveil.js?v=20261006a.

### 06/10 — Éveil → Sciences → L'appareil respiratoire → Termes et définitions (`sci_resp_assoc`, index › SCI_RESP_ASSOC_DATA / renderSciRespAssoc / validateSciRespAssoc) — sw.js v643
- Ancien moteur à 3 colonnes (débordait à 390 px, pas de toucher-placer, validation possible à vide/plusieurs fois, sauvegarde sans try/catch, pas de correction) remplacé par le moteur commun corrigé (Préhistoire/Antiquité/Moyen Âge) : ligne terme ↔ case, banque de définitions, glisser ou toucher puis case, message « il en reste N », garde 600 ms, bonne définition en bleu sous une case fausse, sauvegarde unique en try/catch.
- Contenu : « Trachée » (au lieu de « Trachée artère »), « Cœur » ; définitions précisées pour éviter les ambiguïtés (oxygène/dioxyde de carbone : on expire aussi de l'oxygène ; diaphragme ; cage thoracique ; cœur = muscle qui pompe le sang) ; ajout « Fosses nasales ». 15 paires, 8 tirées.
- Tests Playwright 390 px (toucher) : message à vide, placement par clic définition → case, 2 inversées → 6/8 avec 2 corrections bleues, 1 seule sauvegarde malgré 3 clics, pas de débordement.

### 06/10 — Éveil → Sciences → L'appareil respiratoire → Remettre de l'ordre (`sci_resp_ordre`, fiche trajet_de_lair.html + copies racine et public/fiches) — sw.js v644
- Contenu : deux étapes simultanées étaient à ordonner (« l'oxygène passe dans le sang » / « le CO₂ passe du sang vers les alvéoles ») → fusionnées en une seule étape d'échanges ; « trachée artère » → « trachée » ; gorge = pharynx puis larynx ; étapes formulées du point de vue de l'air. 8 étapes à ordonner (+ la 1re donnée).
- Mécanique : vérification une seule fois (avant : clic répété = sauvegardes multiples et nouvelle chance), garde 600 ms, après erreur la bonne étape s'affiche en bleu sous chaque case rouge, bouton Recommencer, Entrée = vérifier/recommencer ; sauvegarde unique en try/catch avec `window.parent !== window` ; total calculé (plus de 9 codé en dur) ; mélange Fisher–Yates qui laisse au plus 3 étapes déjà à leur place ; écouteurs du conteneur plus empilés à chaque rendu ; toucher : glisser ou toucher une étape puis l'endroit (sélection orange) ; mise en page resserrée sous 480 px.
- Tests Playwright 390 px (toucher réel CDP) : 2000 mélanges ≤ 3 étapes en place, placement par toucher jusqu'à l'ordre parfait, glisser au doigt déplace l'étape, 2 inversées → 6/8 + 2 corrections bleues, 1 seule sauvegarde malgré 3 clics, Entrée relance, pas de débordement.

### 06/10 — Éveil → Sciences → L'appareil digestif → Le schéma (`sci_dig_schema`, index › SCI_DIG_SCHEMA_DATA / renderSciDigSchema / validateSciDigSchema, image appareil_digestif.png) — sw.js v645
- Numéros 1–10 vérifiés sur l'image : bouche, glandes salivaires, œsophage, estomac, foie, pancréas, intestin grêle, gros intestin, anus (9), rectum (10) — tous corrects. « Oesophage » → « Œsophage ».
- Moteur remplacé par celui déjà corrigé du schéma respiratoire : 2 colonnes fixes → grille auto (image puis tableau sur téléphone), toucher une étiquette puis la case, message « il en reste N » au lieu d'une validation à vide, garde 600 ms, validation unique (avant : clics répétés = sauvegardes multiples), bonne légende en bleu sous chaque case fausse (avant : rien si la case était remplie), sauvegarde unique en try/catch.
- Tests Playwright 390 px (toucher) : message à vide, placement par toucher, bouche/anus inversés → 8/10 + 2 corrections bleues, 1 seule sauvegarde malgré 3 clics, pas de débordement.

### 06/10 — Éveil → Sciences → L'appareil digestif → Le trajet des aliments (`sci_dig_texte`, index › SCI_DIG_TEXTES / renderSciDigTexteIdx / validateSciDigTexte) — sw.js v646
- Contenu : « oesophage » → « œsophage » ; « le foie et le pancréas déversent leurs sucs » (foie et pancréas interchangeables, et le foie ne fait pas de suc) → « le foie déverse la bile et le pancréas son suc » ; bouillie formée dans l'estomac ; nutriments qui traversent la paroi de l'intestin grêle ; « aux sucs gastriques » → « au suc gastrique ». Mots de chaque texte = trous (vérifié).
- Moteur remplacé par celui du trajet de l'air (toucher un mot puis le trou, message « il en reste N », garde 600 ms, validation unique, bon mot en bleu, sauvegarde unique try/catch avec le titre du texte, bouton vers le texte suivant).
- Correctif aussi pour `sci_resp_texte` (v641) : la validation comptait tous les `.resp-blank` du document (aussi ceux du Tour du monde et du digestif) → requêtes limitées à son écran ; bouton « texte suivant » = suivant au lieu du premier différent.
- Tests Playwright 390 px (toucher), 3 textes : message à vide, 2 mots inversés → 2 corrections bleues, 1 sauvegarde par texte malgré 3 clics, pas de débordement ; respiratoire validé correctement avec le digestif affiché en parallèle.

### 06/10 — Éveil → Sciences → L'appareil digestif → QCM (`sci_dig_qcm`, index › renderSciDigQCM / validateSciDigQCM, exercices_eveil.js › SCI_DIG_QCM_DATA) — sw.js v647
- Données réécrites : 31 questions (correct:0, mélangées à l'affichage), 20 familles `k` → 10 questions tirées, jamais deux de la même famille (avant : doublons bol alimentaire ×2, bile ×2, œsophage ×2, suc gastrique ×2, absorption ×3 pouvaient sortir ensemble et se trahir).
- Contenu : « Quel organe filtre le sang… ? → le foie » supprimé (les reins filtrent le sang : ambigu) ; « glande digestive et endocrine » → « suc digestif et l'insuline » ; « Quel organe produit le suc pancréatique ? » (réponse dans la question) → « Où le pancréas déverse-t-il son suc ? » ; « nutriment principalement digéré dans la bouche » → « aliments que la salive commence à digérer : les féculents » ; ajouts : rôle de la bile, rôle du gros intestin, anus, dents de lait ; dents adulte « (dents de sagesse comprises) ». Biais « plus longue = bonne » : 4/31 (avant : très fréquent).
- Moteur remplacé par celui du QCM respiratoire : message si questions sans réponse, garde 600 ms, bonne réponse manquée en bleu (avant : verte), sauvegarde unique try/catch (avant : sans garde, total 10 en dur), scroll conservé.
- Tests Playwright 390 px : 300 tirages sans doublon de famille, bonne réponse ~25 % par position, message « il en reste 10 », 1 erreur → 1 bleu, 1 sauvegarde malgré 3 clics, pas de débordement. exercices_eveil.js?v=20261006b.

### 06/10 — Éveil → Sciences → L'appareil digestif → Termes et définitions (`sci_dig_assoc`, index › SCI_DIG_ASSOC_DATA / renderSciDigAssoc / validateSciDigAssoc) — sw.js v648
- Ancien moteur à 3 colonnes remplacé par le moteur commun corrigé (comme respiratoire v643) : terme ↔ case, banque de définitions, glisser ou toucher puis case, message « il en reste N », garde 600 ms, validation unique, bonne définition en bleu, sauvegarde unique try/catch.
- Contenu : définitions ambiguës levées — Estomac (« mélange les aliments avec les sucs ») ≈ Brassage → « poche qui produit le suc gastrique » ; Côlon (« partie du gros intestin qui absorbe l'eau ») ≈ Gros intestin (« absorbe l'eau et forme les selles ») → paire Côlon retirée (synonyme) ; Pancréas « enzymes » → « un suc digestif et l'insuline » ; Foie ≠ Bile reformulés ; sucs pancréatique/intestinal distingués ; « Oesophage » → « Œsophage ». 19 paires, 8 tirées.
- Tests Playwright 390 px (toucher) : message à vide, placement par toucher, 2 inversées → 6/8 + 2 bleus, 1 sauvegarde malgré 3 clics, pas de débordement.

### 06/10 — Éveil → Sciences → L'appareil digestif → Remettre de l'ordre (`sci_dig_ordre`, fiche trajet_de_la_nourriture.html + copies racine et public/fiches) — sw.js v649
- Même gabarit que trajet_de_lair.html → reconstruit à partir de la version corrigée (v644) : vérification unique, garde 600 ms, bonne étape en bleu, Recommencer, Entrée, sauvegarde unique try/catch `window.parent !== window`, total calculé (avant 9 en dur), mélange ≤ 2 étapes déjà en place, toucher-placer, mise en page < 480 px.
- Contenu : étapes simultanées fusionnées (mastication + salive → étape donnée « Dans la bouche, les dents mâchent les aliments et la salive les ramollit » ; « la bouillie passe dans l'intestin grêle » + « le foie et le pancréas déversent leurs sucs » → une étape) ; « sucs gastriques » → « suc gastrique » ; déglutition = « On avale » ; nutriments qui traversent la paroi de l'intestin grêle. 7 étapes à ordonner (+ la 1re donnée).
- Tests Playwright 390 px (toucher réel CDP) : 2000 mélanges ≤ 2 étapes en place, ordre complet par toucher, glisser au doigt, rectum/anus inversés → 5/7 + 2 bleus, 1 sauvegarde malgré 3 clics, Entrée relance, pas de débordement.

### 06/10 — Éveil → Sciences → L'appareil circulatoire → Le schéma du cœur (`sci_coeur`, index › SCI_COEUR_DATA / renderSciCoeurScreen / validateSciCoeur, image schema_vierge_coeur.png) — sw.js v650
- Numéros 1–10 vérifiés sur l'image : artère pulmonaire, veine cave, oreillette droite, ventricule droit, muscle cardiaque (paroi de la pointe), artère aorte, veines pulmonaires, oreillette gauche, ventricule gauche, cloison — tous corrects.
- Image chargée depuis l'URL GitHub Pages absolue → fichier local `schema_vierge_coeur.png` (même dépôt ; fonctionne hors ligne et en test local).
- Moteur remplacé par celui des schémas respiratoire/digestif : grille auto (image puis tableau sur téléphone, avant 2 colonnes serrées), toucher une étiquette puis la case, message « il en reste N », garde 600 ms, validation unique (avant : clics répétés = sauvegardes multiples), bonne légende en bleu sous chaque case fausse (avant : seulement rouge), sauvegarde unique try/catch, total calculé (avant 10 en dur).
- Tests Playwright 390 px (toucher) : message à vide, placement par toucher, 1/9 inversés → 8/10 + 2 bleus, 1 sauvegarde malgré 3 clics, pas de débordement.

### 06/10 — Éveil → Sciences → L'appareil circulatoire → Le trajet du sang (`sci_trajet_sang`, index › renderSciTrajetSangIdx / trajetVerifier, exercices_eveil.js › SCI_TRAJET_SANG_TEXTES) — sw.js v651
- Moteur réécrit : onglets pour choisir l'un des 4 textes (avant : rotation imposée A→B→C→D), mélange Fisher–Yates (avant `sort(() => Math.random()-0.5)`), toucher un mot puis le trou (avant : glisser seulement ; le toucher sur un mot ne permettait aucun choix), message « il en reste N » au lieu d'une validation à vide, garde 600 ms, validation unique (avant : clics répétés = sauvegardes multiples), bon mot en bleu dans chaque trou faux (avant : rien si le trou était rempli), sauvegarde unique try/catch, boutons Recommencer / texte suivant.
- Groupes (les 2 oreillettes, les 2 ventricules) : ordre libre conservé, mais notation par trou (avant : un seul mot faux dans le groupe rendait les deux trous faux).
- Contenu : « les veines ramènent le sang des organes vers le cœur » → « des organes et des poumons » (texte A) ; « par la veine cave » → « par les veines caves » (texte C). Mots de chaque texte = trous (vérifié). exercices_eveil.js?v=20261006c.
- Tests Playwright 390 px (toucher) : 4 textes, message à vide, oreillettes inversées comptées justes, 2 erreurs → 2 bleus, 1 sauvegarde par texte malgré 3 clics, glisser au doigt (CDP) place le mot, pas de débordement.

### 06/10 — Éveil → Sciences → L'appareil circulatoire → QCM (`sci_circulatoire_qcm`, index › renderSciCirculatoireQCM / validerSciCircQCM, exercices_eveil.js › SCI_CIRCULATOIRE_QCM) — sw.js v652
- Réponses ambiguës : « trajet entre le cœur et les poumons » proposait « la circulation pulmonaire » (synonyme juste !) et « …et les organes » proposait « la circulation générale » (synonyme juste) → distracteurs remplacés ; « les cellules reçoivent… du sang artériel » remplacé ; « plus grand vaisseau » → « plus grande artère » ; « veine cave » → « veines caves » (cohérent avec le trajet du sang).
- Données réécrites : 30 questions à 3 propositions (correct:0, mélangées), 13 familles `k` → 10 questions sans doublon de famille (avant : cavités ×2, petite/grande circulation ×4, capillaires ×3, aorte ×3, veine cave ×3… se trahissaient). Biais « plus longue = bonne » : 7/30 (hasard ≈ 10). Ajout : battements au repos.
- Moteur remplacé par celui des QCM respiratoire/digestif (avant : boutons radio, validation possible à vide, sauvegarde sans try/catch, bonne réponse en vert) : message si incomplet, garde 600 ms, bleu, sauvegarde unique, scroll conservé.
- Tests Playwright 390 px : 300 tirages sans doublon de famille, bonne réponse ~1/3 par position, message « il en reste 10 », 1 erreur → 1 bleu, 1 sauvegarde malgré 3 clics, pas de débordement. exercices_eveil.js?v=20261006d.

### 06/10 — Éveil → Sciences → L'appareil circulatoire → Termes et définitions (`sci_circulatoire_assoc`, index › SCI_CIRCULATOIRE_ASSOC / renderSciCirculatoireAssoc / validerSciAssoc) — sw.js v653
- Ancien moteur à 3 colonnes remplacé par le moteur commun corrigé (comme respiratoire/digestif) : terme ↔ case, banque, glisser ou toucher puis case, message « il en reste N », garde 600 ms, validation unique, bonne définition en bleu, sauvegarde unique try/catch.
- Ambiguïtés levées : la définition générale d'« une artère » convient aussi à l'artère pulmonaire et à l'aorte (idem « une veine » / veines pulmonaires / veines caves) → familles `k` : jamais le terme général et un terme précis de la même famille dans la même série ; paire « Une pompe » retirée (sa définition convenait aussi au cœur). « La veine cave » → « Les veines caves » ; aorte « plus grand vaisseau » → « plus grande artère » ; cage thoracique précisée. 19 paires, 8 tirées.
- Tests Playwright 390 px (toucher) : message à vide, placement par toucher, 2 inversées → 6/8 + 2 bleus, 1 sauvegarde malgré 3 clics, 500 tirages sans conflit de famille, pas de débordement.

### 06/10 — Éveil → Sciences → Le squelette → Le schéma du squelette (`sci_sq_schema`, fiche squelette_schema.html + fiches/ et public/fiches/ (chemin ../photos/), image photos/schema_squelette.jpg) — sw.js v654
- 15 numéros vérifiés sur l'image (pastilles agrandies) : crâne, mandibule, clavicule, omoplate, sternum, côte, colonne, humérus, radius (côté pouce), cubitus, bassin, fémur, rotule, tibia (côté intérieur), péroné (côté extérieur) — tous corrects.
- « Mode Calibrage » (outil de développement pour déplacer les pastilles) visible par les élèves → bouton, zone et code retirés.
- Mécanique : validation possible avec des menus vides → message « il en reste N » ; validation unique (menus verrouillés, bouton masqué ; avant : clics répétés = sauvegardes multiples) ; garde 600 ms ; bon nom en bleu sous chaque menu faux (avant : seulement rouge) ; sauvegarde unique try/catch avec `window.parent !== window` ; Entrée = vérifier / recommencer.
- Mise en page sans dépendre de Tailwind (CDN) : image à 100 % de son cadre (sans Tailwind elle débordait et les pastilles étaient décalées), grille 1 colonne sur téléphone / 2 colonnes ≥ 768 px.
- Tests Playwright 390 px : message à vide, radius/cubitus inversés → 13/15 + 2 bleus, menus verrouillés, 1 sauvegarde malgré 3 clics, Entrée relance, plus de bouton de calibrage, pas de débordement.

### 06/10 — Éveil → Sciences → L'appareil circulatoire → Remettre de l'ordre (`sci_circ_ordre` = page à 3 onglets `sci_circ_petite` / `sci_circ_grande` / `sci_circ_ensemble`, fiche trajet_du_sang_ordre.html + copies racine et public/fiches) — sw.js v655
- Contenu : « Le trajet général » commençait par « Le cœur se contracte » puis mêlait ventricule droit et gauche (qui se contractent en même temps) → départ ambigu, l'ordre « organes d'abord » était aussi juste. Nouvelle 1re étape donnée « Le sang chargé en gaz carbonique arrive au cœur, dans l'oreillette droite » ; « Le cycle recommence » (étape triviale) fusionné avec le retour par les veines caves ; 6 étapes précises (artère pulmonaire, veines pulmonaires, aorte, veines caves). Grande circulation : « via les artères » → « Les artères distribuent le sang à tous les organes », « vers la veine cave » → « jusqu'aux veines caves ».
- Mécanique (comme trajet_de_lair v644) : vérification unique, garde 600 ms, bonne étape en bleu, Recommencer, Entrée, sauvegarde unique try/catch `window.parent !== window` (avant : à chaque clic), mélange ≤ 2 étapes en place, toucher-placer, conteneur reconstruit (plus d'écouteurs empilés), onglets qui passent à la ligne, mise en page < 480 px. Verrouillage par onglet (isActivityLocked) et onglet par #ancre conservés.
- Tests Playwright 390 px (toucher) : ouverture sur #ensemble, 3 onglets remis en ordre par toucher puis 2 inversées → 4/6, 5/7, 4/6 + 2 bleus chacun, 1 sauvegarde par onglet, onglet verrouillé 🔒 désactivé, 3000 mélanges ≤ 2 en place, pas de débordement.

### 06/10 — Éveil → Sciences → Le squelette → Le fonctionnement du mouvement (`sci_sq_texte`, fiche squelette_mouvement.html + fiches/ et public/fiches/ (chemin ../photos/), image photos/mecanique_bras.jpg) — sw.js v656
- `alert()` si cases vides (et les cases étaient déjà colorées avant l'alerte) → message dans la page « il en reste N », rien n'est corrigé tant que tout n'est pas rempli.
- « l'action combinée des ___, des ___ et des ___ » : muscles / os / articulations interchangeables mais un seul ordre accepté → ordre libre (notation par case comme les oreillettes du trajet du sang).
- Mécanique : validation unique (avant : clics répétés = sauvegardes multiples), garde 600 ms, cases verrouillées, bon mot en bleu dans chaque case rouge, sauvegarde unique try/catch `window.parent !== window`, Entrée = vérifier / recommencer, toucher un mot puis la case (avant : glisser seulement), mélange Fisher–Yates, cases à hauteur variable (la correction tient dedans), image et grille sans dépendre de Tailwind.
- Contenu : « bandes élastiques solides » (ligaments) → « bandes solides ». Image vérifiée : flexion = biceps contracté (foncé, gonflé), extension = triceps contracté ; le dessin « extension » montre le bras encore à 90° (mouvement en cours) — signalé à Jeremy.
- Tests Playwright 390 px (toucher) : message à vide, aucun dialogue, muscles/os/articulations permutés comptés justes, biceps/triceps inversés → 8/10 + 2 bleus, 1 sauvegarde malgré 3 clics, pas de débordement.

### 06/10 — Éveil → Sciences → Le squelette → QCM (`sci_sq_qcm`, fiche squelette_qcm.html + fiches/ et public/fiches/) — sw.js v657
- `alert()` si question sans réponse → message dans la page « il en reste N ». La copie `fiches/` ne mélangeait même pas les propositions (divergente) → les 3 copies identiques.
- Banque réécrite : 49 questions (correct:0, mélangées), 32 familles `k` → 10 questions sans doublon de famille (avant : fémur ×2, flexion/extension ×5, entorse/fracture/luxation ×4, calcium ×4, moelle épinière ×2, sternum ×2, types d'os ×3, radius-cubitus/tibia-péroné… se donnaient la réponse). Biais « plus longue = bonne » : 6/49 (avant : très fréquent).
- Contenu : « 24 vertèbres » proposé à côté de 33 (24 = vertèbres mobiles, aussi juste) → 60 ; « Solder les os » → « souder » ; « muscles squelettiques » simplifié ; formulations raccourcies ; « déboîtée » → « déboitée ». Menu : « parmi 50 » → « parmi 49 » (index.html).
- Mécanique : garde 600 ms, validation unique, bonne réponse manquée en bleu (avant : verte), sauvegarde unique try/catch `window.parent !== window` (avant : sans garde), total calculé, scroll conservé, Entrée.
- Tests Playwright 390 px : 300 tirages sans doublon, bonne réponse ~25 % par position, message à vide, aucun dialogue, 1 erreur → 1 bleu, 1 sauvegarde malgré 3 clics, pas de débordement.

### 06/10 — Éveil → Sciences → Le squelette → Chasseur d'intrus (`sci_sq_intrus`, fiche squelette_intrus.html + fiches/ et public/fiches/) — sw.js v658
- Intrus ambigus corrigés : « Vertèbre, Clavicule, Omoplate, Sternum » (la clavicule est un os long, pas plat : 2 intrus possibles) → « Vertèbre, Fémur, Humérus, Tibia » (os court / os longs) ; « Rotule, Coude, Hanche, Nerf » (la rotule est un os, coude et hanche des articulations) → « Genou, Coude, Hanche, Nerf » ; « Se contracter, Gonfler, Se durcir, S'allonger » (« se contracter » = la catégorie elle-même) → « Raccourcir… » ; explication « crâne, bassin, cage thoracique protègent… la moelle » corrigée (cerveau ; cœur et poumons ; organes du bas du ventre) ; « muscle squelettique » simplifié.
- Mécanique : plusieurs essais par groupe (on cliquait jusqu'à trouver) → un seul essai, l'intrus est montré en bleu après une erreur + explication ; familles `k` (les 2 groupes bras/jambe jamais ensemble) ; garde 600 ms sur « Groupe suivant » (double clic sautait un groupe) ; sauvegarde unique try/catch `window.parent !== window` ; Entrée = suivant / recommencer ; « Round 1/5 » → « Groupe 1/5 » ; grille 2×2 sans dépendre de Tailwind.
- Tests Playwright 390 px : 300 tirages sans conflit de famille, 1 erreur → boutons verrouillés + intrus en bleu, double « suivant » ne saute pas de groupe, 4/5, 1 sauvegarde, pas de débordement.

### 06/10 — Éveil → Sciences → Le squelette → Vrai ou faux ? (`sci_sq_vrai_faux`, fiche squelette_vrai_faux.html + fiches/ et public/fiches/) — sw.js v659
- Couleurs trompeuses : le bouton FAUX devenait toujours rouge et VRAI toujours vert, même quand l'élève avait juste (« FAUX » choisi à raison = bouton rouge) → le bouton choisi est vert si juste, rouge si faux, et la bonne réponse est en bleu après une erreur ; message « La bonne réponse était : VRAI/FAUX ».
- Familles `k` (ligament/tendon ×2, biceps-triceps ×3, cage thoracique ×2, calcium/vitamine D ×4, synovie ×2, entorse/luxation ×3, commande ×2, articulations ×2) → 10 affirmations jamais de la même famille. Banque : 15 vraies / 15 fausses (≈ 4,9 vraies par série).
- Contenu : « la cage thoracique protège… l'estomac » → FAUX discutable (l'estomac est en partie sous les côtes basses) → « nos intestins » ; « ligaments articulations » → « d'une articulation » ; « 640 muscles squelettiques volontaires » → « plus de 600 muscles attachés au squelette » ; nouvelle orthographe (déboité, boite, entraine).
- Mécanique : garde 600 ms sur « Continuer » (double clic sautait une affirmation), sauvegarde unique try/catch `window.parent !== window`, Entrée = continuer / recommencer, total calculé, « Question 1/10 » → « Affirmation 1/10 », grille sans Tailwind.
- Tests Playwright 390 px : 300 tirages sans doublon de famille, erreur → rouge + bleu (vérifié après la transition CSS), bonne réponse → vert sans bleu, double « Continuer » ne saute rien, 9/10, 1 sauvegarde, pas de débordement.

### 06/10 — Éveil → Sciences → Le monde végétal → L'anatomie de la fleur (`sci_plantes_fleur`, fiches/sci_plantes_fleur.html + public/fiches/) — sw.js v660
- Mise en page : les 9 cases « Déposer ici » étaient posées sur le dessin → sur ordinateur elles cachaient le style et le haut des pétales, la case « Pistil » était coupée à gauche et « Étamine » débordait à droite ; sur téléphone (390 px) les cases se chevauchaient et la page débordait (441 px). → Numéros 1–9 sur le dessin (au départ de chaque trait) + tableau de 9 cases sous le dessin, comme les autres schémas du site ; dessin recadré, « Organe femelle / mâle » lisibles.
- Mécanique : chaque validation enregistrait un résultat et les étiquettes fausses repartaient seules dans la réserve → on revalidait jusqu'au 9/9 (score gonflé). Maintenant : une validation par partie, cases verrouillées, bonne étiquette en bleu sous chaque case rouge, sauvegarde unique try/catch `window.parent !== window`, garde 600 ms, Entrée = valider / recommencer. Étiquettes mélangées (avant : toujours dans le même ordre). Confettis protégés si la bibliothèque ne se charge pas.
- Contenu : 9 traits vérifiés sur le dessin (stigmate, style, ovaire, sépale, pollen = grains au-dessus de l'anthère, filet, pétale ; accolades pistil et étamine) ; consigne « nommer les organes reproducteurs » (faux pour sépale/pétale) → « les parties » ; descriptions en minuscules (« Le Pistil » → « Le pistil »).
- Tests Playwright 390 px (toucher) : 20 ordres d'étiquettes différents, placement par toucher, style/filet inversés → 7/9 + 2 bleus, 1 sauvegarde malgré 3 validations, Entrée relance, pas de débordement ; capture ordinateur 1100 px vérifiée.

### 06/10 — Éveil → Sciences → Le monde végétal → Reproduction et germination (`sci_plantes_germination`, fiches/sci_plantes_germination.html + public/fiches/) — sw.js v661
- Enregistrement : le résultat n'était enregistré QUE si l'élève réussissait 7/7 puis 5/5, et toujours « 12/12 » ; l'exercice 2 n'était accessible (bouton) qu'après un 7/7 et chaque erreur imposait de recommencer jusqu'à la perfection → le plan de travail ne voyait jamais un élève en difficulté. Maintenant : une validation par exercice, l'exercice 2 est toujours accessible, le vrai score (exercice 1 /7 + exercice 2 /5 = /12, au premier essai) est enregistré une seule fois quand les deux sont validés (try/catch, `window.parent !== window`) ; « Tout recommencer » relance une nouvelle tentative.
- `alert()` ×2 si cartes non placées → message dans la page « il en reste N ».
- Correction : « Devrait être : … » en rouge → « ➜ … » en bleu sous chaque case fausse ; pour les facteurs : « ➜ Indispensable / Non indispensable. » + explication en bleu.
- Toucher : toucher une colonne déjà garnie tombait sur une carte rangée et changeait la sélection au lieu de ranger la carte choisie (le 3e facteur ne se plaçait plus) → la carte choisie est rangée là. Titre « Facteurs à trier » / « Cartes des étapes à trier » affiché deux fois → une fois. Onglets qui passent à la ligne (le 3e était coupé à 390 px).
- Contenu (leçon) : pollinisation « vers le pistil d'une autre fleur » → « de la même fleur ou d'une autre fleur » ; fécondation « le grain de pollen descend le long d'un tube » → « forme un long tube qui descend jusqu'à l'ovule » ; « l'ovule » → « les ovules » ; « maîtrisé » → « maitrisé ».
- Tests Playwright 390 px (toucher) : messages à vide, aucun dialogue, croissance/floraison inversées → 5/7 + 2 bleus et « Continuer » visible, lumière mal classée → 4/5 + bleu, total 9/12 enregistré une fois (rien avant la 2e validation), double validation sans effet, Tout recommencer remet à zéro, pas de débordement.

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

## À revoir à la fin (décisions de Jeremy)

| Exercice | Point à revoir |
|---|---|
| `sci_sq_texte` (Le fonctionnement du mouvement) — image `photos/mecanique_bras.jpg` | Le dessin « Extension (triceps contracté) » montre le bras encore plié à 90° et non tendu. Jeremy : « on verra ça à la fin » (remplacer l'image ou adapter la légende). |

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
| 🗑️ 06/10 supprimé | Les pourcentages| `num_pourcentages` | index › (?) | (code à localiser) |
| ✅ 05/10 | Arrondir les décimaux | `num_decimaux_arrondir` | index › renderDecimauxArrondir |  |
| ✅ 05/10 | Diviseurs & Nombres premiers | `num_diviseurs_premiers` | fiches/nombres_diviseurs.html |  |
| 🗑️ 06/10 supprimé | Un peu de tout (numération)| `num_tout` | index › (?) | (code à localiser) |

### 🔢 Mathématiques — ➕ Opérations — Vocabulaire

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 05/10 | Vocabulaire des opérations (Définitions) | `op_vocabulaire_def` | fiches/vocabulaire_operations.html |  |
| ✅ 05/10 | Vocabulaire des opérations (Parties d'un calcul) | `op_vocabulaire_calc` | fiches/parties_calcul.html |  |
| ✅ 05/10 | Vocabulaire des opérations (Résolution de problèmes) | `op_vocabulaire_prob` | fiches/problemes_operations.html |  |

### 🔢 Mathématiques — ➕ Opérations — Calculs & Techniques

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 06/10 (menu) | Additions et soustractions| `op_add_sous` | index › (?) | (code à localiser) |
| ✅ 05/10 | Additions et soustractions — Jusque 100 | `op_add_sous_100` | index › startCalcExercise |  |
| ✅ 05/10 | Additions et soustractions — Jusque 1 000 | `op_add_sous_1000` | index › startCalcExercise |  |
| ✅ 05/10 | Additions et soustractions — Jusque 10 000 | `op_add_sous_10000` | index › startCalcExercise |  |
| ✅ 05/10 | Additions et soustractions — Jusque 100 000 | `op_add_sous_100000` | index › startCalcExercise |  |
| ✅ 05/10 | Additions et soustractions — Jusque 1 000 000 | `op_add_sous_1000000` | index › startCalcExercise |  |
| ✅ 05/10 | Fléchettes — Calcule le score | `op_add_sous_flechettes_calcule` | fiches/flechettes_calcule_le_score.html |  |
| ✅ 05/10 | Fléchettes — Atteins le score | `op_add_sous_flechettes_atteins` | fiches/flechettes_atteins_le_score.html |  |
| ✅ 06/10 (menu) | Multiplications et divisions| `op_mult_div` | index › (?) | (code à localiser) |
| ✅ 05/10 | Multiplications et divisions — Tables de multiplication | `op_mult_div_tables` | index › startMultDivExercise |  |
| ✅ 06/10 (menu) | Les 4 opérations| `op_4_operations` | index › render4OperationsScreen |  |
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
| 🗑️ 06/10 supprimé | La compensation| `op_compensation` | index › (?) | (code à localiser) |
| ✅ 06/10 (menu) | Calcul écrit| `op_calcul_ecrit` | index › (?) | (code à localiser) |
| ✅ 05/10 | Calcul écrit — Additions écrites | `op_calcul_ecrit_addition` | fiches/calcul-ecrit-addition.html |  |
| ✅ 05/10 | Calcul écrit — Soustractions écrites | `op_calcul_ecrit_soustraction` | fiches/calcul-ecrit-soustraction.html |  |
| ✅ 05/10 | Calcul écrit — Multiplications écrites | `op_calcul_ecrit_multiplication` | fiches/calcul-ecrit-multiplication.html |  |
| ✅ 05/10 | Calcul écrit — Divisions écrites | `op_calcul_ecrit_division` | fiches/calcul-ecrit-division.html |  |
| ✅ 06/10 (menu) | L'ordre des opérations| `op_ordre` | index › (?) | (code à localiser) |
| ✅ 05/10 | L'ordre des opérations — Mission PEMDAS | `op_ordre_pemdas` | fiches/mission_pemdas.html |  |
| ✅ 05/10 | L'ordre des opérations — Défi PEMDAS | `op_ordre_defi` | fiches/defi_pemdas.html |  |

### 🔢 Mathématiques — 📐 Grandeurs — Mesures de base

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 05/10 | Conversions de masses (QCM) | `grandeur_masses_qcm` | index › renderMassesQCM |  |
| ✅ 06/10 | Conversions & Abaque (QCM) | `grandeur_masses_qcm_abaque` | fiches/masses_QCM_abaque.html |  |
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
| ✅ 06/10 (menu) | Les durées| `grandeur_durees` | index › renderGrandeurDurees | QCM: bonne réponse en position 2 dans 39/65 questions, options non mélangées |
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
| ✅ 06/10 | Lire un tableau | `td_tableau` | index › renderTDTableau |  |
| ✅ 06/10 | Lire un graphique | `td_graphique` | index › renderTDGraphique |  |
| ✅ 06/10 | La moyenne (QCM) | `td_moyenne_qcm` | index › renderTDMoyenneQCM |  |
| ✅ 06/10 | Moyenne et étendue | `td_moyenne` | index › renderTDMoyenne |  |
| 🗑️ 06/10 supprimé | Calcul de la moyenne (Exercices)| `td_moyenne_exercices` | fiches/moyenne_exercices.html | Aucun hasard : mêmes questions, même ordre à chaque partie |
| ✅ 06/10 | Le décodeur de camemberts | `td_donnees_circulaires` | index › renderDonneesCirculaires |  |
| ✅ 06/10 | L'arbre dichotomique | `td_arbre_dichotomique` | index › renderArbreDichotomique |  |
| ✅ 06/10 | Le tri logique (Venn & Carroll) | `td_logique_tri` | index › renderTDLogiqueTri |  |
| ✅ 06/10 | Choisir la bonne question | `td_quelle_question` | index › renderQuelleQuestion |  |
| 🗑️ 06/10 supprimé | Les graphiques de synthèse| `trait_graphiques` | index › (?) | (code à localiser) |
| 🗑️ 06/10 supprimé | La règle de trois| `trait_regle3` | index › (?) | (code à localiser) |
| 🗑️ 06/10 supprimé | Résolution de problèmes| `trait_problemes` | index › (?) | (code à localiser) |

### 🔢 Mathématiques — 🔷 Solides & Figures — Notions & Polygones

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| 🗑️ 06/10 supprimé | Points, lignes et droites| `solide_points` | index › (?) | (code à localiser) |
| ✅ 06/10 | Identifier les polygones | `polygones_reconnaitre` | fiches/polygones_reconnaitre.html |  |
| ✅ 06/10 | Caractéristiques des polygones | `polygones_caracteristiques` | fiches/polygones_caracteristiques.html |  |

### 🔢 Mathématiques — 🔷 Solides & Figures — Triangles & Angles

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 06/10 | Identifier les triangles | `triangles_qcm` | fiches/triangles_QCM.html |  |
| ✅ 06/10 | Caractéristiques des triangles | `triangles_caracteristiques` | fiches/triangles_caracteristiques.html |  |
| ✅ 06/10 | Les hauteurs du triangle | `solide_triangles_hauteurs` | fiches/triangles_hauteurs.html |  |
| ✅ 06/10 | Reconnaître les angles | `angles_reconnaitre` | fiches/angles_reconnaitre.html |  |
| ✅ 06/10 | Estimation des angles | `angles_estimation` | fiches/angles_estimation.html | Saisie libre comparée strictement |
| ✅ 06/10 | Mesurer les angles | `angles_mesurer` | fiches/angles_mesurer.html |  |
| ✅ 06/10 | Calcul d'angles manquants | `geometrie_angles_manquants` | fiches/geometrie_angles_manquants.html |  |

### 🔢 Mathématiques — 🔷 Solides & Figures — Quadrilatères & Cercle

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 06/10 | Quadrilatères — Reconnaître la forme | `quadrilateres_reconnaître` | index › startShapeExercise |  |
| ✅ 06/10 | Quadrilatères — Vrai ou Faux | `quadrilateres_vf` | index › startVFExercise |  |
| ✅ 06/10 | Quadrilatères — Caractéristiques | `quadrilateres_caracteristiques` | index › startCharsExercise |  |
| ✅ 06/10 | Quadrilatères — Médianes & Diagonales | `quadrilateres_diagonales_medianes` | fiches/quadrilateres_diagonales_medianes.html |  |
| ✅ 06/10 | Quadrilatères — Évaluation | `quadrilateres_evaluation` | index › startShapeEvaluation |  |
| ✅ 06/10 | Le cercle et le disque — Le vocabulaire | `disque_vocabulaire` | fiches/disque_vocabulaire.html |  |
| ✅ 06/10 | Le cercle et le disque — Le laboratoire | `disque_laboratoire` | fiches/disque_laboratoire.html |  |
| ✅ 06/10 | Le cercle et le disque — L'enquête du compas | `disque_compas` | fiches/disque_compas.html |  |

### 🔢 Mathématiques — 🔷 Solides & Figures — Polyèdres, Symétrie & 3D

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 06/10 | Polyèdre ou non-polyèdre | `polyedres_reconnaitre` | fiches/polyedres_reconnaitre.html |  |
| ✅ 06/10 | Patrons de solides | `polyedres_patrons` | fiches/patrons_solides.html |  |
| ✅ 06/10 | Trouve le bon solide (Définitions) | `polyedres_definitions` | fiches/polyedres_definitions.html |  |
| ✅ 06/10 | Trouve les caractéristiques (Définitions) | `polyedres_caracteristiques` | fiches/polyedres_caracteristiques.html |  |
| ✅ 06/10 | Les axes de symétrie | `solide_symetrie` | fiches/solide_symetrie.html |  |
| ✅ 06/10 | Le labo des transformations | `solide_transformations_labo` | fiches/transformations_labo.html |  |
| ✅ 06/10 | Projections de cubes (Solides 3D) | `solide_projections_cubes` | fiches/solides_projections.html |  |
| ✅ 06/10 | Le vocabulaire géométrique | `solide_vocabulaire` | fiches/vocabulaire_solides.html |  |

### 🌍 Éveil — 📜 Histoire

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 06/10 | L'Œil du Temps — Jeu de Kim (Mémoire visuelle) | `kim_histoire` | fiches/kim_histoire.html |  |
| ✅ 06/10 | La frise chronologique (Interactive) | `fiche_frise` | fiches/frise-chronologique-histoire.html |  |
| ✅ 06/10 | Le grand voyage du Temps (Carnet d'investigation) | `hist_grand_voyage_temps` | fiches/lecon_frise_historique.html | QCM: bonne réponse en position 1 dans 5/5 questions, options non mélangées ; Aucun hasard : mêmes questions, même ordre à chaque partie |
| ✅ 06/10 | La ligne du temps (Séquence P5–P6) | `hist_ligne_du_temps` | fiches/ligne-du-temps_5.html | QCM: bonne réponse en position 2 dans 10/10 questions, options non mélangées ; Aucun hasard : mêmes questions, même ordre à chaque partie |
| ✅ 06/10 | Les grandes périodes de l'Histoire | `hist_grandes_periodes` | fiches/frise-chronologique-histoire.html |  |
| ✅ 06/10 | Quiz Préhistoire | `qvgdm_prehistoire` | index › renderQVGDMPrehistoire |  |
| ✅ 06/10 | Préhistoire — Termes et définitions | `prehistoire_assoc` | index › renderPrehistoireAssoc |  |
| ✅ 06/10 | Préhistoire — Campement du Paléolithique | `prehistoire_doc` | index › renderPrehistoireDoc |  |
| ✅ 06/10 | Quiz L'Antiquité | `qvgdm_antiquite` | index › renderQVGDMAntiquite | QCM: bonne réponse en position 3 dans 9/15 questions, options non mélangées |
| ✅ 06/10 | Antiquité — Termes et définitions | `antiquite_assoc` | index › renderAntiquiteAssoc |  |
| ✅ 06/10 | Antiquité — Document historique | `antiquite_doc` | index › renderAntiquiteDoc |  |
| ✅ 06/10 | Quiz Moyen Âge | `qvgdm_moyen_age` | index › renderQVGDMMoyenAge |  |
| ✅ 06/10 | Moyen Âge — Termes et définitions | `moyen_age_assoc` | index › renderMoyenAgeAssoc |  |
| ✅ 05/10 (ac366c8) + 06/10 | Moyen Âge — La Peste Noire | `moyen_age_doc` | index › renderMoyenAgeDoc |  |
| ✅ 06/10 | Moyen Âge — Texte lacunaire | `moyen_age_texte_trous` | fiches/moyen_age_texte_trous.html | Saisie libre comparée strictement |
| ✅ 06/10 | Moyen Âge — Je relie (Vocabulaire) | `moyen_age_vocabulaire` | fiches/moyen_age_vocabulaire.html |  |
| ⏸️ case vide gardée (06/10) | Les Temps Modernes | `hist_temps_modernes` | index › (?) | (code à localiser) |
| ⏸️ case vide gardée (06/10) | L'Époque Contemporaine | `hist_contemporaine` | index › (?) | (code à localiser) |

### 🌍 Éveil — 🔬 Sciences — Corps humain & Santé

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 06/10 | Le squelette — Le schéma | `sci_sq_schema` | index › renderSciSqSchema |  |
| ✅ 06/10 | Le squelette — Le fonctionnement du mouvement | `sci_sq_texte` | index › renderSciSqTexte |  |
| ✅ 06/10 | Le squelette — QCM | `sci_sq_qcm` | index › renderSciSqQCM |  |
| ✅ 06/10 | Le squelette — Chasseur d'intrus | `sci_sq_intrus` | index › renderSciSqIntrus |  |
| ✅ 06/10 | Le squelette — Vrai ou faux ? | `sci_sq_vrai_faux` | index › renderSciSqVraiFaux |  |
| ⬜ | Appareil respiratoire — La leçon | `fiche_respiratoire` | fiches/appareil-respiratoire.html |  |
| ✅ 06/10 | Appareil respiratoire — Le schéma | `sci_resp_schema` | index › renderSciRespSchema |  |
| ✅ 06/10 | Appareil respiratoire — Trajet de l'air | `sci_resp_texte` | index › renderSciRespTexte |  |
| ✅ 06/10 | Appareil respiratoire — QCM | `sci_resp_qcm` | index › renderSciRespQCM |  |
| ✅ 06/10 | Appareil respiratoire — Termes et définitions | `sci_resp_assoc` | index › renderSciRespAssoc |  |
| ✅ 06/10 | Appareil respiratoire — Remettre de l'ordre | `sci_resp_ordre` | index › renderSciRespOrdre |  |
| ⬜ | Appareil digestif — La leçon | `fiche_digestif` | fiches/appareil-digestif.html |  |
| ✅ 06/10 | Appareil digestif — Le schéma | `sci_dig_schema` | index › renderSciDigSchema |  |
| ✅ 06/10 | Appareil digestif — Trajet des aliments | `sci_dig_texte` | index › renderSciDigTexte |  |
| ✅ 06/10 | Appareil digestif — QCM | `sci_dig_qcm` | index › renderSciDigQCM |  |
| ✅ 06/10 | Appareil digestif — Termes et définitions | `sci_dig_assoc` | index › renderSciDigAssoc |  |
| ✅ 06/10 | Appareil digestif — Remettre de l'ordre | `sci_dig_ordre` | index › renderSciDigOrdre |  |
| ⬜ | Système circulatoire — La leçon | `fiche_circulatoire` | fiches/systeme-circulatoire.html |  |
| ✅ 06/10 | Appareil circulatoire — Le cœur | `sci_coeur` | index › renderSciCoeurScreen |  |
| ✅ 06/10 | Appareil circulatoire — Le trajet du sang | `sci_trajet_sang` | index › renderSciTrajetSangScreen |  |
| ✅ 06/10 | Appareil circulatoire — QCM | `sci_circulatoire_qcm` | index › renderSciCirculatoireQCM |  |
| ✅ 06/10 | Appareil circulatoire — Termes et définitions | `sci_circulatoire_assoc` | index › renderSciCirculatoireAssoc |  |
| ✅ 06/10 | La petite circulation (Ordre) | `sci_circ_petite` | index › renderSciCircOrdrePetite |  |
| ✅ 06/10 | La grande circulation (Ordre) | `sci_circ_grande` | index › renderSciCircOrdreGrande |  |
| ✅ 06/10 | Le trajet du sang (Ordre complet) | `sci_circ_ensemble` | index › renderSciCircOrdreEnsemble |  |

### 🌍 Éveil — 🔬 Sciences — Monde vivant & Matière

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ⬜ | Le Soleil, la Terre et la Lune (Leçon) | `fiche_lune` | fiches/soleil-terre-lune.html |  |
| ⬜ | La classification phylogénétique (Leçon) | `fiche_classification` | fiches/classification-phylogenetique.html |  |
| ⬜ | Le système solaire | `sci_systeme_solaire` | index › (?) | (code à localiser) |
| ⬜ | Planètes — Ordre et distance | `sci_planetes_ordre` | index › (?) | (code à localiser) |
| ⬜ | Planètes — Informations & Caractéristiques | `sci_planetes_infos` | index › (?) | (code à localiser) |
| ⬜ | Système solaire — QCM | `sci_planetes_qcm` | index › renderSciPlanetesInfosScreen |  |
| ✅ 06/10 | L'anatomie de la fleur | `sci_plantes_fleur` | fiches/sci_plantes_fleur.html |  |
| ✅ 06/10 | Reproduction & Germination | `sci_plantes_germination` | fiches/sci_plantes_germination.html |  |
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
| ✅ 06/10 | Remettre de l'ordre | `sci_circ_ordre` | index › renderSciCircOrdre |  |

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
| ✅ 06/10 (menu) | Le vocabulaire des opérations | `op_vocabulaire` | index › (?) | (code à localiser) |

### ? — (menu renderNumerationScreen)

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 06/10 (menu) | Les angles | `solide_angles` | index › (?) | (code à localiser) |
| ✅ 06/10 (menu) | Le cercle et le disque | `solide_disque` | index › (?) | (code à localiser) |

### 🔢 Mathématiques — 🔷 Solides & Figures — Quadrilatères & Cercle › Les quadrilatères (Menu)

| Statut | Exercice | id | Source | Signal automatique |
|---|---|---|---|---|
| ✅ 06/10 (menu) | Le périmètre| `grandeur_perimetre` | index › (?) | (code à localiser) |