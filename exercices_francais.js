// ===================================================
// EXERCICES DE FRANÇAIS
// Structure : EXERCICES_FRANCAIS[matiere][temps]
// ===================================================

window.EXERCICES_FRANCAIS = {

  conjugaison: {

    futur: {
      // Banque de 50 questions QCM
      qcm_bank: [
        {text:"Demain, je ___ (aller) chez le médecin.", options:["irai","allerai","irais"], answer:0},
        {text:"L'année prochaine, tu ___ (avoir) douze ans.", options:["avoiras","auras","aurais"], answer:1},
        {text:"Ce soir, il ___ (être) en retard.", options:["sera","serat","serait"], answer:0},
        {text:"Nous ___ (faire) un gâteau pour l'anniversaire.", options:["fairons","ferrons","ferons"], answer:2},
        {text:"Vous ___ (venir) nous rendre visite dimanche.", options:["venirez","viendrez","viendriez"], answer:1},
        {text:"Ils ___ (pouvoir) partir dès demain.", options:["pourront","pouveront","pourraient"], answer:0},
        {text:"Elle ___ (vouloir) sûrement un cadeau.", options:["voudrait","vouloira","voudra"], answer:2},
        {text:"Je ___ (savoir) nager l'été prochain.", options:["savrai","saurai","savoirai"], answer:1},
        {text:"Tu ___ (voir) tes amis ce week-end.", options:["verras","voiras","voieras"], answer:0},
        {text:"Il ___ (venir) nous aider demain matin.", options:["venira","viendrait","viendra"], answer:2},
        {text:"Nous ___ (devoir) travailler plus dur.", options:["devrons","devoirons","devoirerons"], answer:0},
        {text:"Vous ___ (savoir) la vérité bientôt.", options:["savoirez","saurez","sauriez"], answer:1},
        {text:"Elles ___ (tenir) leur promesse.", options:["teniront","tiendriont","tiendront"], answer:2},
        {text:"Je ___ (recevoir) mon cadeau demain.", options:["recevrai","recevrais","recevoirai"], answer:0},
        {text:"Tu ___ (mourir) de rire en voyant ça !", options:["mouriras","mourras","mourriras"], answer:1},
        {text:"Il ___ (courir) le marathon l'an prochain.", options:["courra","courera","courirait"], answer:0},
        {text:"Nous ___ (envoyer) une lettre à nos grands-parents.", options:["envoierons","envoyerons","enverrons"], answer:2},
        {text:"Vous ___ (appeler) le médecin si nécessaire.", options:["appelerez","appellerez","appèlerez"], answer:1},
        {text:"Elles ___ (jeter) leurs vieux jouets.", options:["jetteront","jèteront","jeteront"], answer:0},
        {text:"Je ___ (acheter) du pain ce soir.", options:["achètterai","achetterai","achèterai"], answer:2},
        {text:"Tu ___ (se lever) tôt demain matin.", options:["te levereas","te lèveras","te levras"], answer:1},
        {text:"Il ___ (falloir) travailler davantage.", options:["faudra","faudrait","falloira"], answer:0},
        {text:"Nous ___ (valoir) mieux que ça !", options:["valerons","vaudriont","vaudrons"], answer:2},
        {text:"Vous ___ (cueillir) des fruits dans le jardin.", options:["cueillirez","cueillerez","cueillrez"], answer:1},
        {text:"Elles ___ (acquérir) de l'expérience.", options:["acquerront","acquériront","acquerriront"], answer:0},
        {text:"Je ___ (mettre) ma veste s'il pleut.", options:["mettrerai","metterai","mettrai"], answer:2},
        {text:"Il ___ (pleuvoir) demain selon la météo.", options:["pleuvroira","pleuvra","pleuvera"], answer:1},
        {text:"Grâce à la météo, les plantes ___ (grandir) vite.", options:["grandiront","grandisseront","grandirront"], answer:0},
        {text:"Vous me ___ (dire) la vérité.", options:["diterez","direrez","direz"], answer:2},
        {text:"Elles ___ (fuir) si elles ont peur.", options:["fuieront","fuiront","fuirront"], answer:1},
        {text:"Je ___ (haïr) attendre, mais je patienterai.", options:["haïrai","hairai","haierat"], answer:0},
        {text:"Tu ___ (bouillir) d'impatience en attendant les résultats.", options:["bouiliras","bouillirais","bouilliras"], answer:2},
        {text:"Il ___ (dormir) mieux après cette journée.", options:["dormerat","dormira","dormirait"], answer:1},
        {text:"Nous ne ___ (mentir) pas — nous dirons la vérité.", options:["mentirons","mentironts","mentirions"], answer:0},
        {text:"Vous ___ (partir) en vacances la semaine prochaine.", options:["partirerez","partirez","partiriez"], answer:1},
        {text:"Elles ___ (sentir) bon après ce bain de fleurs.", options:["sentironts","sentiront","sentiraient"], answer:1},
        {text:"Je ___ (sortir) dès que j'aurai fini.", options:["sortirai","sortirais","sortirrai"], answer:0},
        {text:"Tu ___ (servir) les invités avec plaisir.", options:["servireras","serviras","servirais"], answer:1},
        {text:"Il ___ (ouvrir) la fenêtre pour aérer.", options:["ouvrera","ouvrira","ouvrirait"], answer:1},
        {text:"Nous ___ (offrir) un cadeau à notre professeur.", options:["offrironts","offrirons","offririons"], answer:1},
        {text:"Vous ___ (souffrir) moins avec ce médicament.", options:["souffrirerez","souffrirez","souffririez"], answer:1},
        {text:"Elles ___ (coudre) les costumes pour le spectacle.", options:["couderont","coudreront","coudront"], answer:2},
        {text:"Je ___ (conduire) prudemment sur cette route.", options:["conduirais","conduirai","conduierat"], answer:1},
        {text:"Tu ___ (écrire) une lettre à ton correspondant.", options:["écrirait","écriras","écrieras"], answer:1},
        {text:"Il ___ (lire) ce livre en une journée.", options:["lirait","lira","lirerat"], answer:1},
        {text:"Nous ___ (rire) bien en regardant ce film.", options:["rirons","rirerons","rirrons"], answer:0},
        {text:"Vous ___ (suivre) le guide pendant la visite.", options:["suivrerez","suivrez","suivriez"], answer:1},
        {text:"Elles ___ (vivre) à l'étranger après leurs études.", options:["viveront","vivreront","vivront"], answer:2},
        {text:"Je ___ (résoudre) ce problème rapidement.", options:["résoudrais","résolverai","résoudrai"], answer:2},
        {text:"Tu ___ (naître) sous une bonne étoile !", options:["naîtrais","naîtras","naîtera"], answer:1},
      ],

      // Banque de 50 phrases à trous
      trous_bank: [
        {before:"La semaine prochaine, nous", after:"un contrôle de mathématiques.", verb:"avoir", answer:"aurons"},
        {before:"Demain matin, tu", after:"le premier arrivé en classe.", verb:"être", answer:"seras"},
        {before:"Dans deux ans, elle", after:"ses études primaires.", verb:"finir", answer:"finira"},
        {before:"Ce soir, ils", after:"leurs forces pour déplacer le meuble.", verb:"unir", answer:"uniront"},
        {before:"Bientôt, je", after:"jouer de la guitare.", verb:"savoir", answer:"saurai"},
        {before:"L'année prochaine, vous", after:"participer au voyage scolaire.", verb:"pouvoir", answer:"pourrez"},
        {before:"Demain, elle", after:"un nouveau cartable pour la rentrée.", verb:"acheter", answer:"achètera"},
        {before:"À la fin de l'année, tu", after:"tes vieux cahiers.", verb:"jeter", answer:"jetteras"},
        {before:"Ce soir, il", after:"ses grands-parents pour leur anniversaire.", verb:"appeler", answer:"appellera"},
        {before:"Au printemps, l'eau", after:"le long des chemins de montagne.", verb:"ruisseler", answer:"ruissèlera"},
        {before:"Demain, nous", after:"les enfants au parc d'attractions.", verb:"emmener", answer:"emmènerons"},
        {before:"Chaque matin, tu", after:"la main pour répondre aux questions.", verb:"lever", answer:"lèveras"},
        {before:"Ce film long", after:"les plus jeunes spectateurs.", verb:"ennuyer", answer:"ennuiera"},
        {before:"L'entreprise", after:"cinquante personnes supplémentaires l'an prochain.", verb:"employer", answer:"emploiera"},
        {before:"La semaine prochaine, je", after:"ma lettre au père Noël.", verb:"envoyer", answer:"enverrai"},
        {before:"Après le repas, vous", after:"la vaisselle ensemble.", verb:"essuyer", answer:"essuierez"},
        {before:"Dans quelques semaines, il", after:"complètement de sa blessure.", verb:"guérir", answer:"guérira"},
        {before:"Cet été, tu", after:"au moins trois romans.", verb:"lire", answer:"liras"},
        {before:"Demain, nous", after:"une lettre à notre correspondant belge.", verb:"écrire", answer:"écrirons"},
        {before:"Ce soir, elle", after:"sa plus belle robe pour la fête.", verb:"mettre", answer:"mettra"},
        {before:"Quand tu seras grand, tu", after:"la vérité en toutes circonstances.", verb:"dire", answer:"diras"},
        {before:"Ce week-end, nous", after:"une randonnée en forêt.", verb:"faire", answer:"ferons"},
        {before:"À la fête, les enfants", after:"du jus de fruits.", verb:"boire", answer:"boiront"},
        {before:"L'artiste", after:"un grand tableau pour l'exposition.", verb:"peindre", answer:"peindra"},
        {before:"Je ne", after:"jamais à mes parents.", verb:"mentir", answer:"mentirai"},
        {before:"Tu", after:"ta promesse, j'en suis sûr.", verb:"tenir", answer:"tiendras"},
        {before:"Le directeur", after:"les nouveaux élèves à la rentrée.", verb:"accueillir", answer:"accueillera"},
        {before:"Ce soir, vous", after:"sûrement regarder un film.", verb:"vouloir", answer:"voudrez"},
        {before:"L'été prochain, nous", after:"en vacances en Italie.", verb:"aller", answer:"irons"},
        {before:"Dans une semaine, tu", after:"ta commande par la poste.", verb:"recevoir", answer:"recevras"},
        {before:"Bientôt, elle", after:"de son voyage au Canada.", verb:"revenir", answer:"reviendra"},
        {before:"L'année prochaine, vous", after:"travailler encore plus dur.", verb:"devoir", answer:"devrez"},
        {before:"Demain, ils", after:"leur père pour la première fois depuis un mois.", verb:"voir", answer:"verront"},
        {before:"Il", after:"partir tôt pour éviter les embouteillages.", verb:"falloir", answer:"faudra"},
        {before:"Ensemble, nous", after:"ce problème difficile.", verb:"résoudre", answer:"résoudrons"},
        {before:"Après l'école, tu", after:"tes amis au parc.", verb:"rejoindre", answer:"rejoindras"},
        {before:"Ce soir, il", after:"son chien chez le vétérinaire.", verb:"amener", answer:"amènera"},
        {before:"En voyant cette araignée, elle", after:"de s'approcher.", verb:"craindre", answer:"craindra"},
        {before:"La semaine prochaine, je", after:"mon premier semi-marathon.", verb:"courir", answer:"courrai"},
        {before:"Tes cousins", after:"te rendre visite pendant les vacances.", verb:"venir", answer:"viendront"},
        {before:"Sans soins, cette plante", after:"rapidement.", verb:"mourir", answer:"mourra"},
        {before:"Grand-mère", after:"les costumes pour le spectacle de fin d'année.", verb:"coudre", answer:"coudra"},
        {before:"Dans dix ans, ils", after:"peut-être à l'étranger.", verb:"vivre", answer:"vivront"},
        {before:"Tu", after:"prudemment quand tu auras ton permis.", verb:"conduire", answer:"conduiras"},
        {before:"Nous", after:"bien en regardant cette comédie ce soir.", verb:"rire", answer:"rirons"},
        {before:"Vous", after:"le guide tout au long de la visite du musée.", verb:"suivre", answer:"suivrez"},
        {before:"Demain, il", after:"son nouveau magasin en centre-ville.", verb:"ouvrir", answer:"ouvrira"},
        {before:"Pour Noël, nous", after:"un livre à chacun de nos amis.", verb:"offrir", answer:"offrirons"},
        {before:"Dès que tu auras fini tes devoirs, tu", after:"jouer dehors.", verb:"sortir", answer:"sortiras"},
        {before:"Dans quelques minutes, le soleil", after:"sur la montagne.", verb:"se lever", answer:"se lèvera"},
      ],

      // Évaluation fixe (une seule tentative)
      evaluation: {
        qcm: [
          {text:"Demain, je ___ (aller) chez le médecin.", options:["irai","allerai","irais"], answer:0},
          {text:"L'année prochaine, tu ___ (avoir) douze ans.", options:["avoiras","auras","aurais"], answer:1},
          {text:"Ils ___ (pouvoir) partir dès demain.", options:["pourront","pouveront","pourraient"], answer:0},
          {text:"Elle ___ (vouloir) sûrement un cadeau.", options:["voudrait","vouloira","voudra"], answer:2},
          {text:"Nous ___ (envoyer) une lettre à nos grands-parents.", options:["envoierons","envoyerons","enverrons"], answer:2},
        ],
        trous: [
          {before:"Dans deux ans, elle", after:"ses études primaires.", verb:"finir", answer:"finira"},
          {before:"Demain, elle", after:"un nouveau cartable pour la rentrée.", verb:"acheter", answer:"achètera"},
          {before:"Ce soir, il", after:"ses grands-parents pour leur anniversaire.", verb:"appeler", answer:"appellera"},
          {before:"L'artiste", after:"un grand tableau pour l'exposition.", verb:"peindre", answer:"peindra"},
          {before:"Sans soins, cette plante", after:"rapidement.", verb:"mourir", answer:"mourra"},
        ]
      }
    }


    ,present: {
      qcm_bank: [
        {text:"En ce moment, je ___ (aller) à l'école à pied.", options:["vais","vas","alle"], answer:0},
        {text:"Tu ___ (avoir) l'air fatigué ce matin.", options:["aies","as","avait"], answer:1},
        {text:"Il ___ (être) très content de ses résultats.", options:["est","es","ait"], answer:0},
        {text:"Nous ___ (finir) notre travail avant midi.", options:["finisons","finirons","finissons"], answer:2},
        {text:"Vous ___ (unir) vos efforts pour réussir.", options:["unissiez","unissez","uniez"], answer:1},
        {text:"Ils ___ (savoir) déjà leurs tables de multiplication.", options:["savent","saves","savoirent"], answer:0},
        {text:"Elle ___ (pouvoir) venir demain si elle veut.", options:["peud","peuve","peut"], answer:2},
        {text:"Je ___ (acheter) mes légumes au marché chaque samedi.", options:["achètte","achète","achette"], answer:1},
        {text:"Tu ___ (jeter) toujours tes affaires par terre.", options:["jettes","jètes","jetes"], answer:0},
        {text:"Il ___ (appeler) ses amis tous les soirs.", options:["appèle","apelle","appelle"], answer:2},
        {text:"L'eau ___ (ruisseler) le long des rochers après la pluie.", options:["ruissèle","ruissèlle","ruisele"], answer:0},
        {text:"Elle ___ (emmener) ses enfants à l'école chaque matin.", options:["emmenne","emmène","emmènne"], answer:1},
        {text:"Je ___ (lever) la main pour répondre.", options:["lèves","leve","lève"], answer:2},
        {text:"Ce long discours ___ (ennuyer) tout le monde.", options:["ennuie","ennuye","ennuiet"], answer:0},
        {text:"L'entreprise ___ (employer) deux cents personnes.", options:["employe","emploie","emploiet"], answer:1},
        {text:"Je ___ (envoyer) un message à mes parents.", options:["envoye","envoiet","envoie"], answer:2},
        {text:"Tu ___ (essuyer) la table après le repas.", options:["essuies","essuyies","essuyes"], answer:0},
        {text:"Elle ___ (guérir) rapidement grâce aux médicaments.", options:["guèrit","guériit","guérit"], answer:2},
        {text:"Je ___ (lire) un livre passionnant en ce moment.", options:["lis","li","lie"], answer:0},
        {text:"Nous ___ (écrire) une lettre à notre correspondant.", options:["écrirons","écrivons","écrivont"], answer:1},
        {text:"Tu ___ (mettre) ton manteau avant de sortir.", options:["mes","mais","mets"], answer:2},
        {text:"Il ___ (dire) toujours la vérité.", options:["dit","dis","di"], answer:0},
        {text:"Nous ___ (faire) du sport chaque mercredi.", options:["fesons","faisons","fezons"], answer:1},
        {text:"Les enfants ___ (boire) du lait chaque matin.", options:["buvent","boirent","boivent"], answer:2},
        {text:"L'artiste ___ (peindre) un magnifique tableau.", options:["peint","peind","peindt"], answer:0},
        {text:"Tu ne ___ (mentir) jamais à tes parents.", options:["ments","mens","mentes"], answer:1},
        {text:"Elle ___ (tenir) la main de son petit frère.", options:["tienne","tiend","tient"], answer:2},
        {text:"Le directeur ___ (accueillir) les visiteurs avec le sourire.", options:["accueille","acueillit","accueilles"], answer:0},
        {text:"Je ___ (vouloir) un verre d'eau, s'il te plaît.", options:["veus","veux","voule"], answer:1},
        {text:"Nous ___ (aller) au cinéma ce soir.", options:["alions","alons","allons"], answer:2},
        {text:"Tu ___ (recevoir) beaucoup de cadeaux pour ton anniversaire.", options:["reçois","recois","recevois"], answer:0},
        {text:"Elle ___ (revenir) de vacances la semaine prochaine.", options:["reviend","revient","revienne"], answer:1},
        {text:"Nous ___ (devoir) ranger nos affaires avant de partir.", options:["doivons","devions","devons"], answer:2},
        {text:"Il ___ (voir) très bien sans lunettes.", options:["voit","voie","vois"], answer:0},
        {text:"Il ___ (falloir) travailler régulièrement pour progresser.", options:["falloit","faut","faloit"], answer:1},
        {text:"Elle ___ (résoudre) tous les problèmes facilement.", options:["résoud","résoudt","résout"], answer:2},
        {text:"Tu ___ (rejoindre) tes amis après l'école.", options:["rejoins","rejoinds","rejoint"], answer:0},
        {text:"Il ___ (amener) son chien partout avec lui.", options:["amènet","amène","amenne"], answer:1},
        {text:"Elle ___ (craindre) les araignées.", options:["craind","craindt","craint"], answer:2},
        {text:"Je ___ (courir) tous les matins avant d'aller à l'école.", options:["cours","courre","coure"], answer:0},
        {text:"Tu ___ (venir) souvent nous rendre visite.", options:["vien","viens","vienne"], answer:1},
        {text:"Cette vieille plante ___ (mourir) faute d'eau.", options:["mourre","mourt","meurt"], answer:2},
        {text:"Grand-mère ___ (coudre) les vêtements abîmés.", options:["coud","cout","coudt"], answer:0},
        {text:"Il ___ (vivre) à la campagne depuis dix ans.", options:["vive","vit","vis"], answer:1},
        {text:"Tu ___ (conduire) prudemment en ville.", options:["conduits","conduies","conduis"], answer:2},
        {text:"Nous ___ (rire) beaucoup en regardant ce film.", options:["rirons","rions","rieons"], answer:1},
        {text:"Vous ___ (suivre) le guide pendant la visite.", options:["suivrez","suivez","suiviez"], answer:1},
        {text:"Il ___ (ouvrir) la fenêtre chaque matin.", options:["ouvret","ouvrt","ouvre"], answer:2},
        {text:"Nous ___ (offrir) un cadeau à notre maîtresse.", options:["ofrrons","offrons","offront"], answer:1},
        {text:"Je ___ (sortir) après avoir fini mes devoirs.", options:["sore","sors","sores"], answer:1},
      ],

      trous_bank: [
        {before:"En ce moment, nous", after:"le contour de notre dessin au crayon.", verb:"tracer", answer:"traçons"},
        {before:"Chaque soir, nous", after:"tous ensemble autour de la grande table.", verb:"manger", answer:"mangeons"},
        {before:"Ce matin, vous", after:"vos affaires dans votre nouveau casier.", verb:"placer", answer:"placez"},
        {before:"Les enfants", after:"comme des poissons depuis leur plus jeune âge.", verb:"nager", answer:"nagent"},
        {before:"En ce moment, il", after:"beaucoup de travail pour préparer ses examens.", verb:"avoir", answer:"a"},
        {before:"Tu", after:"le meilleur ami que j'aie jamais eu.", verb:"être", answer:"es"},
        {before:"Nous", after:"notre dessin avant la fin de la leçon.", verb:"finir", answer:"finissons"},
        {before:"Ils", after:"leurs voix pour chanter la chanson de fin d'année.", verb:"unir", answer:"unissent"},
        {before:"Elle", after:"exactement ce qu'elle veut faire plus tard dans la vie.", verb:"savoir", answer:"sait"},
        {before:"Vous", after:"partir dès que vous avez terminé votre travail.", verb:"pouvoir", answer:"pouvez"},
        {before:"Elle", after:"toujours ses vêtements dans la même boutique du centre-ville.", verb:"acheter", answer:"achète"},
        {before:"Nous", after:"les déchets dans la bonne poubelle pour trier correctement.", verb:"jeter", answer:"jetons"},
        {before:"Vous", after:"vos grands-parents chaque dimanche pour prendre de leurs nouvelles.", verb:"appeler", answer:"appelez"},
        {before:"Le torrent", after:"entre les rochers avec un bruit apaisant.", verb:"ruisseler", answer:"ruissèle"},
        {before:"Il", after:"sa fille à son cours de danse chaque mercredi soir.", verb:"emmener", answer:"emmène"},
        {before:"Nous", after:"le camp dès l'aube pour éviter la chaleur de la journée.", verb:"lever", answer:"levons"},
        {before:"Cette longue attente", after:"les enfants qui s'agitent sur leurs chaises.", verb:"ennuyer", answer:"ennuie"},
        {before:"Notre école", after:"une nouvelle assistante depuis la rentrée.", verb:"employer", answer:"emploie"},
        {before:"Vous", after:"vos travaux par mail à votre professeur chaque semaine.", verb:"envoyer", answer:"envoyez"},
        {before:"Ils", after:"le tableau noir avant chaque nouvelle leçon.", verb:"essuyer", answer:"essuient"},
        {before:"Le blessé", after:"bien grâce aux soins attentifs de l'infirmière.", verb:"guérir", answer:"guérit"},
        {before:"Elle", after:"le journal chaque matin en prenant son petit-déjeuner.", verb:"lire", answer:"lit"},
        {before:"Vous", after:"vos réponses en lettres majuscules pour plus de lisibilité.", verb:"écrire", answer:"écrivez"},
        {before:"Nous", after:"nos manteaux car il fait très froid dehors.", verb:"mettre", answer:"mettons"},
        {before:"Ils", after:"toujours bonjour en entrant dans une pièce.", verb:"dire", answer:"disent"},
        {before:"Vous", after:"la vaisselle à tour de rôle dans votre famille.", verb:"faire", answer:"faites"},
        {before:"Il", after:"beaucoup d'eau pendant ses entraînements de sport.", verb:"boire", answer:"boit"},
        {before:"Elle", after:"de magnifiques aquarelles dans son atelier du grenier.", verb:"peindre", answer:"peint"},
        {before:"Nous ne", after:"jamais quand nous savons que c'est important.", verb:"mentir", answer:"mentons"},
        {before:"Ils", after:"leurs cahiers avec beaucoup de soin et de propreté.", verb:"tenir", answer:"tiennent"},
        {before:"Vous", after:"vos invités avec beaucoup de chaleur et de gentillesse.", verb:"accueillir", answer:"accueillez"},
        {before:"Elle", after:"toujours tout faire parfaitement dans les moindres détails.", verb:"vouloir", answer:"veut"},
        {before:"Nous", after:"chercher le pain frais chaque matin à la boulangerie.", verb:"aller", answer:"allons"},
        {before:"Il", after:"chaque semaine un colis de sa grand-mère qui habite loin.", verb:"recevoir", answer:"reçoit"},
        {before:"Ils", after:"toujours les mains pleines de cadeaux après leurs voyages.", verb:"revenir", answer:"reviennent"},
        {before:"Vous", after:"rendre votre devoir avant la fin de la semaine.", verb:"devoir", answer:"devez"},
        {before:"Nous", after:"nos grands-parents chaque dimanche pour le repas en famille.", verb:"voir", answer:"voyons"},
        {before:"Il", after:"arriver à l'heure pour ne pas déranger toute la classe.", verb:"falloir", answer:"faut"},
        {before:"Ils", after:"les problèmes difficiles en travaillant en équipe.", verb:"résoudre", answer:"résolvent"},
        {before:"Vous", after:"vos amis au parc dès la sortie de l'école.", verb:"rejoindre", answer:"rejoignez"},
        {before:"Elle", after:"son chien chez le vétérinaire pour son contrôle annuel.", verb:"amener", answer:"amène"},
        {before:"Nous", after:"que le mauvais temps ne gâche notre pique-nique de demain.", verb:"craindre", answer:"craignons"},
        {before:"Ils", after:"chaque matin pour rester en bonne santé.", verb:"courir", answer:"courent"},
        {before:"Elle", after:"nous aider chaque fois qu'on en a besoin.", verb:"venir", answer:"vient"},
        {before:"Ces vieilles fleurs", after:"faute d'eau et de lumière suffisante.", verb:"mourir", answer:"meurent"},
        {before:"Vous", after:"ensemble les morceaux de tissu pour fabriquer un coussin.", verb:"coudre", answer:"cousez"},
        {before:"Ils", after:"dans un petit appartement en attendant leur nouvelle maison.", verb:"vivre", answer:"vivent"},
        {before:"Nous", after:"prudemment sur cette route très fréquentée.", verb:"conduire", answer:"conduisons"},
        {before:"Vous", after:"les fenêtres chaque matin pour aérer les salles de classe.", verb:"ouvrir", answer:"ouvrez"},
        {before:"Ils", after:"chaque année des fleurs à leur institutrice pour la fête des maîtresses.", verb:"offrir", answer:"offrent"},
      ],

      evaluation: {
        qcm: [
          {text:"En ce moment, je ___ (aller) à l'école à pied.", options:["vais","vas","alle"], answer:0},
          {text:"Nous ___ (finir) notre travail avant midi.", options:["finisons","finirons","finissons"], answer:2},
          {text:"Je ___ (acheter) mes légumes au marché chaque samedi.", options:["achètte","achète","achette"], answer:1},
          {text:"Elle ___ (tenir) la main de son petit frère.", options:["tienne","tiend","tient"], answer:2},
          {text:"Tu ___ (recevoir) beaucoup de cadeaux pour ton anniversaire.", options:["reçois","recois","recevois"], answer:0},
        ],
        trous: [
          {before:"Chaque midi, nous", after:"à la cantine avec nos amis.", verb:"manger", answer:"mangeons"},
          {before:"Tu", after:"tes vieux cahiers à la fin de chaque année scolaire.", verb:"jeter", answer:"jettes"},
          {before:"Elle", after:"rapidement grâce aux médicaments du médecin.", verb:"guérir", answer:"guérit"},
          {before:"Il", after:"toujours la vérité à ses parents et à ses professeurs.", verb:"dire", answer:"dit"},
          {before:"Cette vieille plante", after:"faute d'eau et de lumière.", verb:"mourir", answer:"meurt"},
        ]
      }
    }
    ,imparfait: {
      qcm_bank: [
        {text:"Quand j'étais petit, j' ___ (aller) souvent chez mes grands-parents.", options:["allais","alais","allait"], answer:0},
        {text:"Avant, tu ___ (avoir) les cheveux longs.", options:["avait","avais","avaies"], answer:1},
        {text:"Il ___ (être) toujours à l'heure en classe.", options:["étais","êtait","était"], answer:2},
        {text:"Nous ___ (finir) toujours nos devoirs avant le dîner.", options:["finisions","finissions","finissaient"], answer:1},
        {text:"Vous ___ (unir) vos forces pour déplacer les meubles.", options:["unisiez","unissiez","unissaient"], answer:1},
        {text:"Ils ___ (savoir) déjà lire à quatre ans.", options:["savaient","savoiraient","savait"], answer:0},
        {text:"Elle ___ (pouvoir) courir très vite quand elle était jeune.", options:["pouvrait","pouvait","pouvaient"], answer:1},
        {text:"J' ___ (acheter) mes légumes au marché chaque samedi.", options:["achettais","achetais","achétais"], answer:1},
        {text:"Tu ___ (jeter) toujours tes affaires par terre.", options:["jetais","jettais","jètais"], answer:0},
        {text:"Il ___ (appeler) ses amis tous les soirs.", options:["appelait","appellait","apelait"], answer:0},
        {text:"L'eau ___ (ruisseler) le long des rochers après la pluie.", options:["ruisslait","ruisselait","ruissellait"], answer:1},
        {text:"Elle ___ (emmener) ses enfants à l'école chaque matin.", options:["emmennait","emmènait","emmenait"], answer:2},
        {text:"Je ___ (lever) la main pour répondre.", options:["levais","lèvais","lévais"], answer:0},
        {text:"Ce film ___ (ennuyer) tout le monde.", options:["ennuiait","ennuyait","ennuieait"], answer:1},
        {text:"L'usine ___ (employer) deux cents personnes.", options:["emploiait","emploieait","employait"], answer:2},
        {text:"J' ___ (envoyer) un message à mes parents.", options:["envoyais","envoiais","envoyeais"], answer:0},
        {text:"Tu ___ (essuyer) la table après le repas.", options:["essuiais","essuyais","essuieais"], answer:1},
        {text:"Elle ___ (guérir) rapidement grâce aux médicaments.", options:["guérisait","guériait","guérissait"], answer:2},
        {text:"Je ___ (lire) un livre chaque soir avant de dormir.", options:["lisais","lisait","lissais"], answer:0},
        {text:"Nous ___ (écrire) une lettre à notre correspondant.", options:["écrivons","écrivions","écririons"], answer:1},
        {text:"Tu ___ (mettre) ton manteau avant de sortir.", options:["metais","mèttais","mettais"], answer:2},
        {text:"Il ___ (dire) toujours la vérité.", options:["disait","diçait","dissait"], answer:0},
        {text:"Nous ___ (faire) du sport chaque mercredi.", options:["fesions","faisions","fairions"], answer:1},
        {text:"Les enfants ___ (boire) du lait chaque matin.", options:["buvais","boivaient","buvaient"], answer:2},
        {text:"L'artiste ___ (peindre) un magnifique tableau.", options:["peignait","peindait","peingnait"], answer:0},
        {text:"Tu ne ___ (mentir) jamais à tes parents.", options:["mentait","mentais","mentai"], answer:1},
        {text:"Elle ___ (tenir) la main de son petit frère.", options:["tiendait","tenirait","tenait"], answer:2},
        {text:"Le directeur ___ (accueillir) les visiteurs avec le sourire.", options:["accueillait","accueillais","accueillaient"], answer:0},
        {text:"Je ___ (vouloir) toujours un dessert après le repas.", options:["voulait","voulais","vouloirais"], answer:1},
        {text:"Nous ___ (aller) au cinéma chaque vendredi soir.", options:["allerions","allons","allions"], answer:2},
        {text:"Tu ___ (recevoir) beaucoup de lettres de ton correspondant.", options:["recevais","reçevais","ressevais"], answer:0},
        {text:"Elle ___ (revenir) toujours en retard de l'école.", options:["revenais","revenait","revenirait"], answer:1},
        {text:"Nous ___ (devoir) ranger nos affaires avant de partir.", options:["doivions","devions","devons"], answer:2},
        {text:"Il ___ (voir) très bien sans lunettes.", options:["voyait","voirait","voyais"], answer:0},
        {text:"Il ___ (falloir) travailler régulièrement pour progresser.", options:["falloirait","fallait","fallais"], answer:1},
        {text:"Elle ___ (résoudre) tous les problèmes facilement.", options:["résoudait","résolverait","résolvait"], answer:2},
        {text:"Tu ___ (rejoindre) tes amis au parc après l'école.", options:["rejoignais","rejoindais","rejoingnais"], answer:0},
        {text:"Il ___ (amener) son chien partout avec lui.", options:["amenais","amenait","amènait"], answer:1},
        {text:"Elle ___ (craindre) les araignées depuis toute petite.", options:["craindait","craingnait","craignait"], answer:2},
        {text:"Je ___ (courir) tous les matins avant l'école.", options:["courais","courrais","courait"], answer:0},
        {text:"Tu ___ (venir) souvent nous rendre visite le week-end.", options:["viendais","venais","venait"], answer:1},
        {text:"Cette plante ___ (mourir) faute d'eau.", options:["mourrait","mourais","mourait"], answer:2},
        {text:"Grand-mère ___ (coudre) les vêtements abîmés.", options:["cousait","coudait","couserait"], answer:0},
        {text:"Il ___ (vivre) à la campagne quand il était jeune.", options:["vivais","vivait","vivrait"], answer:1},
        {text:"Tu ___ (conduire) prudemment en ville.", options:["conduisait","conduissais","conduisais"], answer:2},
        {text:"Nous ___ (rire) beaucoup en regardant ce film.", options:["riions","rions","ryons"], answer:0},
        {text:"Vous ___ (suivre) le guide pendant la visite.", options:["suivez","suiviez","suivriez"], answer:1},
        {text:"Il ___ (ouvrir) la fenêtre chaque matin.", options:["ouvrais","ouvriait","ouvrait"], answer:2},
        {text:"Nous ___ (offrir) un cadeau à notre maîtresse.", options:["offrions","offrons","ofrions"], answer:0},
        {text:"Je ___ (sortir) après avoir fini mes devoirs.", options:["sortait","sortais","sortirais"], answer:1},
        {text:"À Noël, vous ___ (crier) de joie en découvrant vos cadeaux.", options:["criez","cririez","criiez"], answer:2},
        {text:"Avant, nous ___ (se fier) toujours à ses conseils.", options:["nous fions","fiions","nous fiions"], answer:2},
      ],

      trous_bank: [
        {before:"Quand nous étions petits, nous", after:"à la piscine chaque samedi matin.", verb:"aller", answer:"allions"},
        {before:"Avant, il", after:"peur du noir mais il a grandi depuis.", verb:"avoir", answer:"avait"},
        {before:"Quand vous étiez enfants, vous", after:"très sages à table.", verb:"être", answer:"étiez"},
        {before:"Elle", after:"toujours son assiette même quand elle n'avait plus faim.", verb:"finir", answer:"finissait"},
        {before:"Ils", after:"leurs voix pour chanter la chanson de fin d'année scolaire.", verb:"unir", answer:"unissaient"},
        {before:"Je", after:"déjà faire du vélo sans les petites roues à cinq ans.", verb:"savoir", answer:"savais"},
        {before:"Vous", after:"rester dehors jusqu'à la nuit tombée pendant les étés de votre enfance.", verb:"pouvoir", answer:"pouviez"},
        {before:"Elle", after:"ses fruits et légumes au même marché depuis trente ans.", verb:"acheter", answer:"achetait"},
        {before:"Nous", after:"les vieux journaux dans le bac de recyclage chaque semaine.", verb:"jeter", answer:"jetions"},
        {before:"Vous", after:"vos amis dès que vous aviez une bonne nouvelle à partager.", verb:"appeler", answer:"appeliez"},
        {before:"Le petit ruisseau", after:"doucement entre les pierres mousseuses du jardin.", verb:"ruisseler", answer:"ruisselait"},
        {before:"Tu", after:"toujours ton petit frère au parc le mercredi après-midi.", verb:"emmener", answer:"emmenais"},
        {before:"Elle", after:"les yeux au ciel chaque fois qu'on lui posait cette question.", verb:"lever", answer:"levait"},
        {before:"Ce devoir trop long", after:"même les élèves les plus patients de la classe.", verb:"ennuyer", answer:"ennuyait"},
        {before:"Vous", after:"toujours les mêmes expressions pour expliquer les choses.", verb:"employer", answer:"employiez"},
        {before:"Nous", after:"des vœux manuscrits à toute la famille pour chaque occasion.", verb:"envoyer", answer:"envoyions"},
        {before:"Il", after:"soigneusement ses pieds sur le paillasson avant d'entrer.", verb:"essuyer", answer:"essuyait"},
        {before:"Vous", after:"toujours vite grâce aux bons soins de votre médecin de famille.", verb:"guérir", answer:"guérissiez"},
        {before:"Elle", after:"des histoires à ses enfants chaque soir avant de les coucher.", verb:"lire", answer:"lisait"},
        {before:"Vous", after:"vos réponses au crayon pour pouvoir les corriger facilement.", verb:"écrire", answer:"écriviez"},
        {before:"Nous", after:"la table ensemble chaque soir avant l'arrivée de papa.", verb:"mettre", answer:"mettions"},
        {before:"Vous", after:"toujours merci et s'il vous plaît depuis votre plus jeune âge.", verb:"dire", answer:"disiez"},
        {before:"Ils", after:"la vaisselle à tour de rôle après chaque repas en famille.", verb:"faire", answer:"faisaient"},
        {before:"Je", after:"un grand verre de lait chaud chaque matin avant de partir à l'école.", verb:"boire", answer:"buvais"},
        {before:"Nous", after:"les murs de la maison chaque printemps avec toute la famille.", verb:"peindre", answer:"peignions"},
        {before:"Il", after:"parfois pour éviter d'avoir des ennuis avec ses parents.", verb:"mentir", answer:"mentait"},
        {before:"Vous", after:"vos cahiers avec beaucoup de soin et de propreté tout au long de l'année.", verb:"tenir", answer:"teniez"},
        {before:"Ils", after:"leurs invités avec beaucoup de chaleur et de bonne humeur.", verb:"accueillir", answer:"accueillaient"},
        {before:"Elle", after:"toujours être la première à répondre aux questions du professeur.", verb:"vouloir", answer:"voulait"},
        {before:"Vous", after:"chercher le pain frais chaque matin avant le petit-déjeuner.", verb:"aller", answer:"alliez"},
        {before:"Nous", after:"chaque année la visite de nos cousins pendant les grandes vacances.", verb:"recevoir", answer:"recevions"},
        {before:"Il", after:"toujours les mains pleines de cadeaux après ses longs voyages.", verb:"revenir", answer:"revenait"},
        {before:"Ils", after:"rentrer avant la nuit tombée sans aucune exception possible.", verb:"devoir", answer:"devaient"},
        {before:"Nous", after:"nos grands-parents chaque dimanche pour le grand repas de famille.", verb:"voir", answer:"voyions"},
        {before:"Il", after:"partir très tôt le matin pour éviter les bouchons sur la route.", verb:"falloir", answer:"fallait"},
        {before:"Nous", after:"toujours les problèmes difficiles en travaillant ensemble.", verb:"résoudre", answer:"résolvions"},
        {before:"Elle", after:"ses amies au café après les cours chaque jeudi après-midi.", verb:"rejoindre", answer:"rejoignait"},
        {before:"Vous", after:"toujours vos enfants à l'école à pied quand il faisait beau.", verb:"amener", answer:"ameniez"},
        {before:"Ils", after:"les orages depuis le grand orage qui avait détruit leur grange.", verb:"craindre", answer:"craignaient"},
        {before:"Elle", after:"chaque soir le long de la rivière pour garder la forme.", verb:"courir", answer:"courait"},
        {before:"Nous", after:"toujours en avance aux réunions importantes de l'école.", verb:"venir", answer:"venions"},
        {before:"Les fleurs du jardin", after:"chaque hiver avant de renaître au printemps.", verb:"mourir", answer:"mouraient"},
        {before:"Vous", after:"vos propres vêtements pour faire des économies sur le budget familial.", verb:"coudre", answer:"cousiez"},
        {before:"Nous", after:"dans une grande maison avec un immense jardin plein d'arbres fruitiers.", verb:"vivre", answer:"vivions"},
        {before:"Ils", after:"prudemment sur les routes de montagne enneigées en hiver.", verb:"conduire", answer:"conduisaient"},
        {before:"Vous", after:"aux éclats chaque fois qu'il racontait ses histoires drôles du travail.", verb:"rire", answer:"riiez"},
        {before:"Ils", after:"attentivement les conseils de leur entraîneur de football chaque semaine.", verb:"suivre", answer:"suivaient"},
        {before:"Nous", after:"les cadeaux de Noël tous ensemble le matin du 25 décembre.", verb:"ouvrir", answer:"ouvrions"},
        {before:"Ils", after:"chaque année des fleurs à leur institutrice pour la fête des maîtresses.", verb:"offrir", answer:"offraient"},
        {before:"Je", after:"toujours par la petite porte du fond pour éviter la foule.", verb:"sortir", answer:"sortais"},
        {before:"À Noël, vous", after:"de joie en découvrant vos cadeaux sous le sapin.", verb:"crier", answer:"criiez"},
        {before:"Avant, nous", after:"toujours à ses conseils avant de prendre une décision.", verb:"se fier", answer:"nous fiions"},
      ],

      evaluation: {
        qcm: [
          {text:"Quand j'étais petit, j' ___ (aller) souvent chez mes grands-parents.", options:["allais","alais","allait"], answer:0},
          {text:"Nous ___ (finir) toujours nos devoirs avant le dîner.", options:["finisions","finissions","finissaient"], answer:1},
          {text:"Il ___ (appeler) ses amis tous les soirs.", options:["appelait","appellait","apelait"], answer:0},
          {text:"Elle ___ (tenir) la main de son petit frère.", options:["tiendait","tenirait","tenait"], answer:2},
          {text:"À Noël, vous ___ (crier) de joie en découvrant vos cadeaux.", options:["criez","cririez","criiez"], answer:2},
        ],
        trous: [
          {before:"Quand nous étions petits, nous", after:"à la piscine chaque samedi matin.", verb:"aller", answer:"allions"},
          {before:"Elle", after:"des histoires à ses enfants chaque soir avant de les coucher.", verb:"lire", answer:"lisait"},
          {before:"Vous", after:"vos réponses au crayon pour pouvoir les corriger facilement.", verb:"écrire", answer:"écriviez"},
          {before:"Ils", after:"la vaisselle à tour de rôle après chaque repas en famille.", verb:"faire", answer:"faisaient"},
          {before:"Avant, nous", after:"toujours à ses conseils avant de prendre une décision.", verb:"se fier", answer:"nous fiions"},
        ]
      }
    }
    ,passe_compose: {
      qcm_bank: [
        {text:"Hier, je ___ (aller) chez le médecin.", options:["suis allés","suis allé(e)","ai allé"], answer:1}
        {text:"Ce matin, tu ___ (avoir) une bonne surprise.", options:["a eu","as eu","as eut"], answer:1}
        {text:"Il ___ (être) très courageux pendant l'opération.", options:["est allé","a été","as été"], answer:1}
        {text:"Nous ___ (finir) nos devoirs avant le dîner.", options:["avons fini","avons finis","sommes finis"], answer:0}
        {text:"Vous ___ (unir) vos forces pour déplacer les meubles.", options:["avez uni","êtes unis","avez unis"], answer:0}
        {text:"Elle ___ (savoir) la réponse immédiatement.", options:["a sue","a sut","a su"], answer:2}
        {text:"Ils ___ (pouvoir) partir à l'heure grâce au train.", options:["ont put","ont pu","sont pu"], answer:1}
        {text:"J' ___ (acheter) un nouveau cartable pour la rentrée.", options:["ai acheté","ai achetée","ai acheter"], answer:0}
        {text:"Tu ___ (jeter) tes vieux cahiers à la fin de l'année.", options:["as jeter","as jeté","as jetté"], answer:1}
        {text:"Il ___ (appeler) ses parents dès son arrivée.", options:["a appelé","a appellé","as appelé"], answer:0}
        {text:"Nous ___ (emmener) les enfants au parc ce matin.", options:["avons emmenés","avons emmené","sommes emmenés"], answer:1}
        {text:"Elle ___ (lever) la main pour répondre à la question.", options:["a levée","a levé","as levé"], answer:1}
        {text:"Vous ___ (envoyer) le colis hier matin.", options:["avez envoyé","avez envoié","êtes envoyé"], answer:0}
        {text:"Tu ___ (essuyer) la vaisselle après le repas.", options:["as essuyé","as essuié","a essuyé"], answer:0}
        {text:"Il ___ (guérir) rapidement grâce aux médicaments.", options:["a guérit","a guérie","a guéri"], answer:2}
        {text:"Je ___ (lire) ce roman en une seule journée.", options:["ai lut","ai lus","ai lu"], answer:2}
        {text:"Nous ___ (écrire) une lettre à notre correspondant.", options:["avons écrit","avons écri","avons écris"], answer:0}
        {text:"Elle ___ (mettre) son manteau avant de sortir.", options:["a mi","a mis","a mit"], answer:1}
        {text:"Tu ___ (dire) la vérité à tes parents.", options:["as dis","as di","as dit"], answer:2}
        {text:"Ils ___ (faire) une randonnée en montagne ce week-end.", options:["ont fait","ont fais","ont faient"], answer:0}
        {text:"J' ___ (boire) un grand verre d'eau après le sport.", options:["ai but","ai bus","ai bu"], answer:2}
        {text:"Elle ___ (peindre) un magnifique tableau pour l'exposition.", options:["a peind","a peint","a pein"], answer:1}
        {text:"Nous ___ (mentir) et nous le regrettons.", options:["avons mentis","avons menti","avons mentit"], answer:1}
        {text:"Il ___ (tenir) sa promesse jusqu'au bout.", options:["a tenus","a tenut","a tenu"], answer:2}
        {text:"Le directeur ___ (accueillir) les nouveaux élèves ce matin.", options:["a accueillit","a accueillut","a accueilli"], answer:2}
        {text:"Je ___ (vouloir) lui dire la vérité mais je n'ai pas osé.", options:["ai voulut","ai voulu","ai voulus"], answer:1}
        {text:"Nous ___ (aller) au cinéma vendredi soir.", options:["sommes allé","sommes allés","sommes aller"], answer:1}
        {text:"Tu ___ (recevoir) un beau cadeau pour ton anniversaire.", options:["as reçut","as reçu","as reçus"], answer:1}
        {text:"Elle ___ (revenir) de vacances hier soir.", options:["est revenu","est revenue","est revenut"], answer:1}
        {text:"Vous ___ (devoir) travailler très dur pour réussir.", options:["avez du","avez dut","avez dû"], answer:2}
        {text:"Il ___ (voir) un film magnifique au cinéma.", options:["a vut","a vus","a vu"], answer:2}
        {text:"Il ___ (falloir) partir très tôt ce matin.", options:["a fallut","a fallue","a fallu"], answer:2}
        {text:"Elle ___ (résoudre) ce problème difficile en cinq minutes.", options:["a résolue","a résolu","a résolut"], answer:1}
        {text:"Tu ___ (rejoindre) tes amis au parc après l'école.", options:["as rejoind","as rejoins","as rejoint"], answer:2}
        {text:"Il ___ (amener) son chien chez le vétérinaire hier.", options:["a amené","a amenés","a amener"], answer:0}
        {text:"Elle ___ (craindre) le pire mais tout s'est bien passé.", options:["a crainte","a craind","a craint"], answer:2}
        {text:"Je ___ (courir) dix kilomètres ce matin.", options:["ai courrus","ai courri","ai couru"], answer:2}
        {text:"Tu ___ (venir) nous rendre visite la semaine dernière.", options:["es venu(e)","es venut","es venus"], answer:0}
        {text:"Cette plante ___ (mourir) faute d'eau pendant les vacances.", options:["est mort","est morte","est mourru"], answer:1}
        {text:"Grand-mère ___ (coudre) les costumes pour le spectacle.", options:["a cousue","a cousut","a cousu"], answer:2}
        {text:"Il ___ (vivre) dix ans en Australie avant de rentrer.", options:["a vécu","a vécut","a vit"], answer:0}
        {text:"Tu ___ (conduire) prudemment sur cette route dangereuse.", options:["as condui","as conduis","as conduit"], answer:2}
        {text:"Nous ___ (rire) beaucoup en regardant ce film comique.", options:["avons ri","avons rit","avons ris"], answer:0}
        {text:"Vous ___ (suivre) attentivement les conseils du guide.", options:["avez suivi","avez suivit","avez suivis"], answer:0}
        {text:"Il ___ (ouvrir) la fenêtre pour aérer la pièce.", options:["a ouvert","a ouvers","a ouvèrt"], answer:0}
        {text:"Nous ___ (offrir) un cadeau à notre maîtresse pour Noël.", options:["avons offert","avons offerts","avons offrit"], answer:0}
        {text:"Je ___ (sortir) après avoir fini tous mes devoirs.", options:["suis sortis","suis sorti(e)","ai sorti"], answer:1}
        {text:"Elle ___ (partir) sans dire au revoir à personne.", options:["est partie","est partite","est partit"], answer:0}
        {text:"Nous ___ (naître) dans la même ville tous les deux.", options:["sommes nés","sommes né","avons né"], answer:0}
        {text:"Ils ___ (prendre) le train de sept heures ce matin.", options:["ont prit","ont pri","ont pris"], answer:2},
      ],

      trous_bank: [
        {before:"Hier soir, nous", after:"au restaurant avec toute la famille.", verb:"aller", answer:"sommes allés"},
        {before:"Ce matin, il", after:"beaucoup de chance au jeu.", verb:"avoir", answer:"a eu"},
        {before:"Elle", after:"très malade pendant toute une semaine.", verb:"être", answer:"a été"},
        {before:"Vous", after:"votre travail bien avant l'heure prévue.", verb:"finir", answer:"avez fini"},
        {before:"Ils", after:"leurs ressources pour construire cette cabane.", verb:"unir", answer:"ont uni"},
        {before:"Je", after:"enfin comment résoudre ce problème.", verb:"savoir", answer:"ai su"},
        {before:"Nous", after:"partir avant la fin de la réunion.", verb:"pouvoir", answer:"avons pu"},
        {before:"Elle", after:"de nouvelles chaussures pour la rentrée.", verb:"acheter", answer:"a acheté"},
        {before:"Vous", after:"vos vieilles affaires avant de déménager.", verb:"jeter", answer:"avez jeté"},
        {before:"Nous", after:"le plombier pour réparer la fuite.", verb:"appeler", answer:"avons appelé"},
        {before:"Il", after:"sa sœur à la gare ce matin.", verb:"emmener", answer:"a emmené"},
        {before:"Vous", after:"vos valises dès le matin pour partir à l'heure.", verb:"lever", answer:"avez levé"},
        {before:"Ils", after:"leur candidature par mail hier soir.", verb:"envoyer", answer:"ont envoyé"},
        {before:"Nous", after:"le tableau après la leçon de mathématiques.", verb:"essuyer", answer:"avons essuyé"},
        {before:"Elle", after:"complètement après sa longue maladie.", verb:"guérir", answer:"a guéri"},
        {before:"Vous", after:"tous les documents avant la réunion.", verb:"lire", answer:"avez lu"},
        {before:"Ils", after:"leurs noms sur la feuille de présence.", verb:"écrire", answer:"ont écrit"},
        {before:"Je", after:"mes affaires dans mon sac avant de partir.", verb:"mettre", answer:"ai mis"},
        {before:"Nous", after:"au revoir à nos amis avant de partir.", verb:"dire", answer:"avons dit"},
        {before:"Elle", after:"ses devoirs en moins d'une heure.", verb:"faire", answer:"a fait"},
        {before:"Ils", after:"toute l'eau qu'ils avaient emportée.", verb:"boire", answer:"ont bu"},
        {before:"Nous", after:"les murs du salon en vert clair.", verb:"peindre", answer:"avons peint"},
        {before:"Il", after:"sans réfléchir et il le regrette.", verb:"mentir", answer:"a menti"},
        {before:"Vous", after:"votre engagement malgré les difficultés.", verb:"tenir", answer:"avez tenu"},
        {before:"Ils", after:"chaleureusement leurs nouveaux voisins.", verb:"accueillir", answer:"ont accueilli"},
        {before:"Elle", after:"rester mais elle n'a pas pu.", verb:"vouloir", answer:"a voulu"},
        {before:"Vous", after:"en vacances à la montagne cet été.", verb:"aller", answer:"êtes allés"},
        {before:"Nous", after:"enfin les résultats de notre évaluation.", verb:"recevoir", answer:"avons reçu"},
        {before:"Il", after:"chez lui après plusieurs mois d'absence.", verb:"revenir", answer:"est revenu"},
        {before:"Elles", after:"partir tôt pour attraper leur train.", verb:"devoir", answer:"ont dû"},
        {before:"Nous", after:"les aurores boréales depuis notre fenêtre.", verb:"voir", answer:"avons vu"},
        {before:"Il", after:"travailler ce dimanche car c'était urgent.", verb:"falloir", answer:"a fallu"},
        {before:"Nous", after:"ensemble ce problème en moins d'une heure.", verb:"résoudre", answer:"avons résolu"},
        {before:"Vous", after:"votre groupe d'amis après le spectacle.", verb:"rejoindre", answer:"avez rejoint"},
        {before:"Elle", after:"ses enfants à leur cours de natation.", verb:"amener", answer:"a amené"},
        {before:"Nous", after:"le pire mais tout s'est bien terminé.", verb:"craindre", answer:"avons craint"},
        {before:"Vous", after:"le marathon en moins de quatre heures.", verb:"courir", answer:"avez couru"},
        {before:"Ils", after:"nous voir pendant les vacances de Pâques.", verb:"venir", answer:"sont venus"},
        {before:"Cette belle fleur", after:"après quelques jours sans eau.", verb:"mourir", answer:"est morte"},
        {before:"Elle", after:"une magnifique robe pour le spectacle.", verb:"coudre", answer:"a cousu"},
        {before:"Nous", after:"dans ce pays pendant dix longues années.", verb:"vivre", answer:"avons vécu"},
        {before:"Ils", after:"toute la nuit pour rentrer à temps.", verb:"conduire", answer:"ont conduit"},
        {before:"Vous", after:"de bon cœur en entendant cette histoire drôle.", verb:"rire", answer:"avez ri"},
        {before:"Nous", after:"un cours de cuisine pendant les vacances.", verb:"suivre", answer:"avons suivi"},
        {before:"Ils", after:"le magasin deux heures avant la fermeture.", verb:"ouvrir", answer:"ont ouvert"},
        {before:"Elle", after:"un magnifique bouquet de fleurs à sa mère.", verb:"offrir", answer:"a offert"},
        {before:"Nous", after:"par la grande porte pour éviter la foule.", verb:"sortir", answer:"sommes sortis"},
        {before:"Il", after:"en voyage sans prévenir sa famille.", verb:"partir", answer:"est parti"},
        {before:"Elles", after:"dans ce pays à quelques années d'intervalle.", verb:"naître", answer:"sont nées"},
        {before:"Vous", after:"votre repas en terrasse malgré le froid.", verb:"prendre", answer:"avez pris"},
      ],

      evaluation: {
        qcm: [
          {text:"Hier, je ___ (aller) chez le médecin.", options:["suis allés","suis allé(e)","ai allé"], answer:1},
          {text:"Nous ___ (finir) nos devoirs avant le dîner.", options:["avons fini","avons finis","sommes finis"], answer:0},
          {text:"Il ___ (appeler) ses parents dès son arrivée.", options:["a appellé","a appelé","as appelé"], answer:1},
          {text:"Nous ___ (aller) au cinéma vendredi soir.", options:["sommes allé","sommes aller","sommes allés"], answer:2},
          {text:"Elle ___ (partir) sans dire au revoir à personne.", options:["est partite","est partie","est partit"], answer:1},
        ],
        trous: [
          {before:"Hier soir, nous", after:"au restaurant avec toute la famille.", verb:"aller", answer:"sommes allés"},
          {before:"Elle", after:"complètement après sa longue maladie.", verb:"guérir", answer:"a guéri"},
          {before:"Il", after:"sans réfléchir et il le regrette.", verb:"mentir", answer:"a menti"},
          {before:"Vous", after:"le marathon en moins de quatre heures.", verb:"courir", answer:"avez couru"},
          {before:"Elles", after:"dans ce pays à quelques années d'intervalle.", verb:"naître", answer:"sont nées"},
        ]
      }
    }

    // Ajouter ici les autres temps
    // ,present: { qcm_bank: [...], trous_bank: [...], evaluation: {...} }
    // ,imparfait: { qcm_bank: [...], trous_bank: [...], evaluation: {...} }
    // ,passe_compose: { qcm_bank: [...], trous_bank: [...], evaluation: {...} }
  }

  // Ajouter ici les autres sections
  // ,grammaire: { ... }
  // ,orthographe: { ... }
};
