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
      // Banque de 52 questions QCM
      qcm_bank: [
        {text:"Mon cousin ___ la vaisselle.", options:["essuie", "essuye", "essuyie"], answer:0},
        {text:"Tu ___ tes achats en ligne.", options:["paies", "payes", "payies"], answer:0},
        {text:"Il ___ une lettre à ses parents.", options:["envoie", "envoye", "envoyie"], answer:0},
        {text:"Ils ___ le carrelage après le repas.", options:["nettoient", "nettoyent", "nettoyient"], answer:0},
        {text:"Nous ___ l'addition au restaurant.", options:["payons", "paions", "paieons"], answer:0},
        {text:"Tu ___ fort sur le bouton rouge.", options:["appuies", "appuyes", "appuyies"], answer:0},
        {text:"Elle ___ le couloir chaque matin.", options:["balaie", "balaye", "balayie"], answer:0},
        {text:"Vous ___ vos chaussures avant d'entrer.", options:["nettoyez", "nettoiez", "nettoyiez"], answer:0},
        {text:"Nous ___ la leçon depuis le début.", options:["recommençons", "recommenceons", "recomençons"], answer:0},
        {text:"Nous ___ le ballon vers le but.", options:["lançons", "lanceons", "lançeons"], answer:0},
        {text:"Nous ___ les assiettes sur la table.", options:["plaçons", "placeons", "plaçeons"], answer:0},
        {text:"Nous ___ des pâtes ce soir.", options:["mangeons", "mangons", "manjons"], answer:0},
        {text:"Nous ___ les tables avant le repas.", options:["rangeons", "rangons", "ranjons"], answer:0},
        {text:"Nous ___ dans la mer en été.", options:["nageons", "nagons", "nageon"], answer:0},
        {text:"Elle ___ ses amis pour son anniversaire.", options:["appelle", "appèle", "appele"], answer:0},
        {text:"Je ___ la balle trop loin.", options:["jette", "jète", "jete"], answer:0},
        {text:"Tu ___ doucement ton ami.", options:["rappelles", "rapèles", "rappèles"], answer:0},
        {text:"Il ___ ses clés par la fenêtre.", options:["rejette", "rejète", "rejete"], answer:0},
        {text:"J'___ mes parents à la gare.", options:["amène", "amene", "ammène"], answer:0},
        {text:"Elle ___ les yeux vers le ciel.", options:["lève", "leve", "lèvet"], answer:0},
        {text:"Il ___ un kilo de pommes.", options:["achète", "achette", "achètte"], answer:0},
        {text:"L'eau ___ sur les rochers.", options:["ruissèle", "ruisselle", "ruissèlle"], answer:0},
        {text:"Tu ___ ton chien dans le parc.", options:["promènes", "promenes", "prommènes"], answer:0},
        {text:"Je ___ doucement la boîte.", options:["soulève", "souleve", "soullève"], answer:0},
        {text:"Nous ___ contents de te voir.", options:["sommes", "somme", "sommons"], answer:0},
        {text:"Il ___ un grand frère très gentil.", options:["a", "as", "ont"], answer:0},
        {text:"Vous ___ en retard aujourd'hui.", options:["êtes", "êtez", "ètes"], answer:0},
        {text:"Elles ___ beaucoup de courage.", options:["ont", "sont", "avent"], answer:0},
        {text:"Nous ___ en voiture ce matin.", options:["venons", "viendons", "venions"], answer:0},
        {text:"Tu ___ très vite !", options:["cours", "coures", "courres"], answer:0},
        {text:"Ils ___ à minuit.", options:["partent", "partes", "partirent"], answer:0},
        {text:"Elle ___ la porte doucement.", options:["ouvre", "ouvrit", "ouvres"], answer:0},
        {text:"Vous ___ bien cette nuit.", options:["dormez", "dormissez", "dormiez"], answer:0},
        {text:"Il ___ un cadeau à sa maman.", options:["offre", "offrit", "offres"], answer:0},
        {text:"Nous ___ à nos promesses.", options:["tenons", "teneons", "tiendons"], answer:0},
        {text:"Vous ne ___ pas la vérité.", options:["dites", "disez", "ditez"], answer:0},
        {text:"Nous ___ nos devoirs.", options:["faisons", "faiseons", "fesons"], answer:0},
        {text:"Il ___ un livre passionnant.", options:["lit", "lite", "lise"], answer:0},
        {text:"Tu ___ une lettre à ta mamie.", options:["écris", "écrits", "écrit"], answer:0},
        {text:"Ils ___ le problème ensemble.", options:["prennent", "prenent", "prendent"], answer:0},
        {text:"Elle ___ ses affaires dans sa chambre.", options:["met", "mets", "mette"], answer:0},
        {text:"Nous ___ en France.", options:["vivons", "viveons", "vivez"], answer:0},
        {text:"Je ___ un beau film ce soir.", options:["vois", "voit", "voie"], answer:0},
        {text:"Ils ___ partir tôt demain.", options:["doivent", "doivont", "devoient"], answer:0},
        {text:"Tu ___ la réponse !", options:["sais", "saies", "sait"], answer:0},
        {text:"Nous ___ finir ce travail.", options:["pouvons", "pouveons", "pouvez"], answer:0},
        {text:"Elle ___ un colis ce matin.", options:["reçoit", "recoit", "reçoie"], answer:0},
        {text:"Vous ___ aller au cinéma.", options:["voulez", "voulissez", "vouliez"], answer:0},
        {text:"Il ___ son chemin dans la forêt.", options:["voit", "voie", "voits"], answer:0},
        {text:"Nous ___ nos leçons chaque soir.", options:["savons", "saveons", "savez"], answer:0},
        {text:"Vous ne ___ jamais ce qu'il raconte.", options:["croyez", "croivez", "croiez"], answer:0},
        {text:"Nous ___ très bien avec nos nouvelles lunettes.", options:["voyons", "voirions", "voyions"], answer:0},
      ],

      // Banque de 50 phrases à trous
      trous_bank: [
        {before:"Ma sœur ", after:" le sol de la cuisine.", verb:"essuyer (elle)", answer:"essuie"},
        {before:"Nous ", after:" toujours nos dettes.", verb:"payer (nous)", answer:"payons"},
        {before:"Ils ", after:" leurs baskets avant d'entrer.", verb:"essuyer (ils)", answer:"essuient"},
        {before:"J'", after:" un message à mon ami.", verb:"envoyer (je)", answer:"envoie"},
        {before:"Vous ", after:" la salle de bain chaque semaine.", verb:"nettoyer (vous)", answer:"nettoyez"},
        {before:"Elle ", after:" sur l'interrupteur.", verb:"appuyer (elle)", answer:"appuie"},
        {before:"Tu ", after:" les marches de l'escalier.", verb:"balayer (tu)", answer:"balaies"},
        {before:"Ils ", after:" leurs parents régulièrement.", verb:"appuyer (ils)", answer:"appuient"},
        {before:"Nous ", after:" notre voyage demain.", verb:"commencer (nous)", answer:"commençons"},
        {before:"Je ", after:" mes chaussettes dans le tiroir.", verb:"placer (je)", answer:"place"},
        {before:"Nous ", after:" notre discours par une blague.", verb:"lancer (nous)", answer:"lançons"},
        {before:"Nous ", after:" souvent des légumes.", verb:"manger (nous)", answer:"mangeons"},
        {before:"Je ", after:" ma chambre avant le dîner.", verb:"ranger (je)", answer:"range"},
        {before:"Nous ", after:" partager nos affaires.", verb:"partager (nous)", answer:"partageons"},
        {before:"Tu ", after:" ton frère pour lui demander de l'aide.", verb:"appeler (tu)", answer:"appelles"},
        {before:"Je ", after:" mon stylo dans la corbeille.", verb:"jeter (je)", answer:"jette"},
        {before:"Elle ", after:" ses feuilles de brouillon.", verb:"rejeter (elle)", answer:"rejette"},
        {before:"Il ", after:" souvent ses amis le soir.", verb:"rappeler (il)", answer:"rappelle"},
        {before:"Nous ", after:" nos affaires à l'école.", verb:"amener (nous)", answer:"amenons"},
        {before:"Je ", after:" la tête pour répondre.", verb:"lever (je)", answer:"lève"},
        {before:"Tu ", after:" toujours des bonbons au marché.", verb:"acheter (tu)", answer:"achètes"},
        {before:"La rivière ", after:" après la pluie.", verb:"ruisseler (elle)", answer:"ruissèle"},
        {before:"Nous ", after:" le chien tous les matins.", verb:"promener (nous)", answer:"promenons"},
        {before:"Il ", after:" le couvercle de la boîte.", verb:"soulever (il)", answer:"soulève"},
        {before:"Tu ", after:" un bon ami pour tout le monde.", verb:"être (tu)", answer:"es"},
        {before:"Nous ", after:" deux chats à la maison.", verb:"avoir (nous)", answer:"avons"},
        {before:"Ils ", after:" souvent en retard le matin.", verb:"être (ils)", answer:"sont"},
        {before:"Elle ", after:" mal à la tête depuis ce matin.", verb:"avoir (elle)", answer:"a"},
        {before:"Je ", after:" te rendre visite demain.", verb:"venir (je)", answer:"viens"},
        {before:"Nous ", after:" en avion pour les vacances.", verb:"partir (nous)", answer:"partons"},
        {before:"Tu ", after:" vite quand tu es en retard.", verb:"courir (tu)", answer:"cours"},
        {before:"Ils ", after:" la fenêtre pour aérer.", verb:"ouvrir (ils)", answer:"ouvrent"},
        {before:"Je ", after:" profondément la nuit.", verb:"dormir (je)", answer:"dors"},
        {before:"Nous ", after:" à notre parole.", verb:"tenir (nous)", answer:"tenons"},
        {before:"Elle ", after:" un livre à son ami.", verb:"offrir (elle)", answer:"offre"},
        {before:"Vous ", after:" toujours n'importe quoi !", verb:"dire (vous)", answer:"dites"},
        {before:"Je ", after:" de la natation le mercredi.", verb:"faire (je)", answer:"fais"},
        {before:"Nous ", after:" un roman en classe.", verb:"lire (nous)", answer:"lisons"},
        {before:"Tu ", after:" une carte postale à ta famille.", verb:"écrire (tu)", answer:"écris"},
        {before:"Ils ", after:" le bus devant l'école.", verb:"prendre (ils)", answer:"prennent"},
        {before:"Je ", after:" mes chaussures devant la porte.", verb:"mettre (je)", answer:"mets"},
        {before:"Nous ", after:" une belle vie à la campagne.", verb:"vivre (nous)", answer:"vivons"},
        {before:"Tu ", after:" tout ce qui se passe dans la rue.", verb:"voir (tu)", answer:"vois"},
        {before:"Je ", after:" finir mes devoirs avant de jouer.", verb:"devoir (je)", answer:"dois"},
        {before:"Nous ", after:" la réponse à cette question.", verb:"savoir (nous)", answer:"savons"},
        {before:"Ils ", after:" venir mais ils sont fatigués.", verb:"vouloir (ils)", answer:"veulent"},
        {before:"Tu ", after:" partir quand tu veux.", verb:"pouvoir (tu)", answer:"peux"},
        {before:"Elle ", after:" un beau cadeau pour son anniversaire.", verb:"recevoir (elle)", answer:"reçoit"},
        {before:"Vous ", after:" la vérité maintenant.", verb:"savoir (vous)", answer:"savez"},
        {before:"Nous ", after:" nos amis chaque dimanche.", verb:"voir (nous)", answer:"voyons"},
      ],

      // Évaluation
      evaluation: {
        qcm: [
          {text:"Je ___ la balle trop loin.", options:["jette", "jète", "jete"], answer:0},
          {text:"Il ___ un grand frère très gentil.", options:["a", "as", "ont"], answer:0},
          {text:"Tu ___ très vite !", options:["cours", "coures", "courres"], answer:0},
          {text:"Nous ___ la leçon depuis le début.", options:["recommençons", "recommenceons", "recomençons"], answer:0},
          {text:"Elle ___ un colis ce matin.", options:["reçoit", "recoit", "reçoie"], answer:0},
        ],
        trous: [
          {before:"Ma sœur ", after:" le sol de la cuisine.", verb:"essuyer (elle)", answer:"essuie"},
          {before:"Nous ", after:" notre voyage demain.", verb:"commencer (nous)", answer:"commençons"},
          {before:"Tu ", after:" toujours des bonbons au marché.", verb:"acheter (tu)", answer:"achètes"},
          {before:"Je ", after:" te rendre visite demain.", verb:"venir (je)", answer:"viens"},
          {before:"Ils ", after:" le bus devant l'école.", verb:"prendre (ils)", answer:"prennent"},
        ]
      }
    }

    ,imparfait: {
      // Banque de 52 questions QCM
      qcm_bank: [
        {text:"Chaque été, nous ___ dans la rivière.", options:["lancions", "lançions", "lançeons"], answer:0},
        {text:"Il ___ toujours ses affaires sur la table.", options:["plaçait", "placait", "plaçet"], answer:0},
        {text:"Ils ___ le match depuis le début.", options:["commençaient", "commencaient", "comencaient"], answer:0},
        {text:"Nous ___ chez nos grands-parents le dimanche.", options:["mangions", "mangeions", "mangeons"], answer:0},
        {text:"Elle ___ toujours sa chambre avant le dîner.", options:["rangeait", "rangait", "rangaient"], answer:0},
        {text:"Ils ___ souvent dans la piscine.", options:["nageaient", "nagaient", "nageraient"], answer:0},
        {text:"Tu ___ toujours tes achats comptant.", options:["payais", "paiais", "payiais"], answer:0},
        {text:"Elle ___ le sol après le repas.", options:["essuyait", "essuiait", "essuyiait"], answer:0},
        {text:"Nous ___ nos amis chaque week-end.", options:["appuyions", "appuiions", "appuyiions"], answer:0},
        {text:"Ils ___ le couloir chaque matin.", options:["balayaient", "balaïaient", "balaiaient"], answer:0},
        {text:"Tu ___ souvent ta mère depuis l'école.", options:["appelais", "appellais", "appèlais"], answer:0},
        {text:"Je ___ mes vieux jouets chaque année.", options:["jetais", "jettais", "jètais"], answer:0},
        {text:"Il ___ ses clés par la fenêtre.", options:["rejetait", "rejettait", "rejètait"], answer:0},
        {text:"Elle ___ ses amis pour leur anniversaire.", options:["rappelait", "rappellait", "rappèlait"], answer:0},
        {text:"J'___ mes parents à la gare.", options:["amenais", "amènais", "ammènais"], answer:0},
        {text:"Tu ___ la main pour répondre.", options:["levais", "lèvais", "levvais"], answer:0},
        {text:"Il ___ des fruits au marché.", options:["achetait", "achètait", "achettait"], answer:0},
        {text:"Nous ___ le chien chaque matin.", options:["promenions", "promènions", "promeneons"], answer:0},
        {text:"Elle ___ doucement le couvercle.", options:["soulevait", "soulèvait", "soulevvait"], answer:0},
        {text:"La rivière ___ après chaque pluie.", options:["ruisselait", "ruissèlait", "ruissellait"], answer:0},
        {text:"Nous ___ nos amis au parc.", options:["criions", "crions", "crïions"], answer:0},
        {text:"Vous ___ entièrement de vos parents.", options:["vous fiiez", "vous fiez", "vous fïiez"], answer:0},
        {text:"Nous ___ à la même école.", options:["étudiions", "étudions", "étudïions"], answer:0},
        {text:"Vous ___ souvent ensemble avant le repas.", options:["priiez", "priez", "prïiez"], answer:0},
        {text:"Tu ___ très courageux à cette époque.", options:["étais", "étes", "était"], answer:0},
        {text:"Nous ___ un grand jardin.", options:["avions", "avons", "aviions"], answer:0},
        {text:"Ils ___ toujours en retard.", options:["étaient", "étaients", "étiaient"], answer:0},
        {text:"Elle ___ peur du noir.", options:["avait", "avais", "aviait"], answer:0},
        {text:"Nous ___ en voiture chaque été.", options:["venions", "vienions", "veneons"], answer:0},
        {text:"Tu ___ très vite sur la piste.", options:["courais", "courrais", "courait"], answer:0},
        {text:"Ils ___ tôt chaque matin.", options:["partaient", "partirent", "partissaient"], answer:0},
        {text:"Elle ___ la fenêtre chaque matin.", options:["ouvrait", "ouvrit", "ouvrais"], answer:0},
        {text:"Je ___ profondément toutes les nuits.", options:["dormais", "dormit", "dormait"], answer:0},
        {text:"Nous ___ toujours nos promesses.", options:["tenions", "tienions", "teneons"], answer:0},
        {text:"Il ___ souvent des cadeaux à sa famille.", options:["offrait", "offrit", "offrais"], answer:0},
        {text:"Nous ___ un film chaque vendredi.", options:["voyions", "voions", "veyions"], answer:0},
        {text:"Je ___ de la natation le mercredi.", options:["faisais", "fesais", "faisait"], answer:0},
        {text:"Tu ___ une lettre à ta mamie.", options:["écrivais", "écrivis", "écrivait"], answer:0},
        {text:"Ils ___ le problème ensemble.", options:["résolvaient", "résoudaient", "résolvient"], answer:0},
        {text:"Nous ___ le sel dans l'eau.", options:["dissolvions", "dissoudions", "dissolveons"], answer:0},
        {text:"Je ___ toujours en lui.", options:["croyais", "croiais", "croyait"], answer:0},
        {text:"Ils ___ devant le danger.", options:["fuyaient", "fuiaient", "fuiyaient"], answer:0},
        {text:"Tu ___ les murs de ta chambre.", options:["peignais", "peindais", "peingnais"], answer:0},
        {text:"Nous ___ l'orage arriver.", options:["craignions", "craindions", "craigneons"], answer:0},
        {text:"Ils ___ leurs amis après l'école.", options:["rejoignaient", "rejoingnaient", "rejondaient"], answer:0},
        {text:"Vous ___ toujours n'importe quoi !", options:["disiez", "diziez", "dites"], answer:0},
        {text:"Je ___ finir mes devoirs avant de jouer.", options:["devais", "devait", "devrais"], answer:0},
        {text:"Nous ___ la réponse.", options:["savions", "saveons", "saviions"], answer:0},
        {text:"Tu ___ partir quand tu voulais.", options:["pouvais", "pouvait", "pourrais"], answer:0},
        {text:"Elle ___ un colis chaque semaine.", options:["recevait", "reçevait", "recevrait"], answer:0},
        {text:"Vous ___ aller au cinéma le samedi.", options:["vouliez", "vouliéez", "voulez"], answer:0},
        {text:"Nous ___ très bien sans lunettes.", options:["voyions", "voions", "voyons"], answer:0},
      ],

      // Banque de 50 phrases à trous
      trous_bank: [
        {before:"Chaque hiver, nous ", after:" à faire du ski.", verb:"commencer (nous)", answer:"commencions"},
        {before:"Il ", after:" toujours ses affaires au bon endroit.", verb:"placer (il)", answer:"plaçait"},
        {before:"Ils ", after:" leurs adversaires depuis le début.", verb:"lancer (ils)", answer:"lançaient"},
        {before:"Nous ", after:" souvent des crêpes le dimanche.", verb:"manger (nous)", answer:"mangions"},
        {before:"Elle ", after:" toujours ses jouets après avoir joué.", verb:"ranger (elle)", answer:"rangeait"},
        {before:"Nous ", after:" ensemble dans le lac.", verb:"nager (nous)", answer:"nagions"},
        {before:"Tu ", after:" toujours par carte bancaire.", verb:"payer (tu)", answer:"payais"},
        {before:"Elle ", after:" les vitres chaque samedi.", verb:"essuyer (elle)", answer:"essuyait"},
        {before:"Nous ", after:" sur la sonnette.", verb:"appuyer (nous)", answer:"appuyions"},
        {before:"Ils ", after:" l'entrée chaque matin.", verb:"balayer (ils)", answer:"balayaient"},
        {before:"Tu ", after:" ta mère dès que tu arrivais.", verb:"appeler (tu)", answer:"appelais"},
        {before:"Je ", after:" mes vieux cahiers en fin d'année.", verb:"jeter (je)", answer:"jetais"},
        {before:"Il ", after:" souvent la balle trop loin.", verb:"rejeter (il)", answer:"rejetait"},
        {before:"Elle ", after:" ses amis pour chaque anniversaire.", verb:"rappeler (elle)", answer:"rappelait"},
        {before:"J'", after:" toujours mes affaires à l'école.", verb:"amener (je)", answer:"amenais"},
        {before:"Tu ", after:" le bras pour répondre.", verb:"lever (tu)", answer:"levais"},
        {before:"Il ", after:" ses légumes au marché du village.", verb:"acheter (il)", answer:"achetait"},
        {before:"Nous ", after:" le chien deux fois par jour.", verb:"promener (nous)", answer:"promenions"},
        {before:"Elle ", after:" doucement le rideau.", verb:"soulever (elle)", answer:"soulevait"},
        {before:"L'eau ", after:" sur les pierres du ruisseau.", verb:"ruisseler (elle)", answer:"ruisselait"},
        {before:"Nous ", after:" nos amis depuis la fenêtre.", verb:"crier (nous)", answer:"criions"},
        {before:"Vous ", after:" entièrement de votre professeur.", verb:"se fier (vous)", answer:"vous fiiez"},
        {before:"Nous ", after:" nos leçons tous les soirs.", verb:"étudier (nous)", answer:"étudiions"},
        {before:"Vous ", after:" souvent ensemble avant le repas.", verb:"prier (vous)", answer:"priiez"},
        {before:"Tu ", after:" très timide quand tu étais petit.", verb:"être (tu)", answer:"étais"},
        {before:"Nous ", after:" un chien et deux chats.", verb:"avoir (nous)", answer:"avions"},
        {before:"Ils ", after:" toujours à l'heure.", verb:"être (ils)", answer:"étaient"},
        {before:"Elle ", after:" peur des araignées.", verb:"avoir (elle)", answer:"avait"},
        {before:"Nous ", after:" chez nos cousins chaque été.", verb:"venir (nous)", answer:"venions"},
        {before:"Tu ", after:" très vite sur le terrain.", verb:"courir (tu)", answer:"courais"},
        {before:"Ils ", after:" tôt pour attraper le train.", verb:"partir (ils)", answer:"partaient"},
        {before:"Elle ", after:" la fenêtre pour aérer la pièce.", verb:"ouvrir (elle)", answer:"ouvrait"},
        {before:"Je ", after:" bien toutes les nuits.", verb:"dormir (je)", answer:"dormais"},
        {before:"Nous ", after:" toujours nos engagements.", verb:"tenir (nous)", answer:"tenions"},
        {before:"Il ", after:" souvent des fleurs à sa maman.", verb:"offrir (il)", answer:"offrait"},
        {before:"Nous ", after:" un film ensemble chaque vendredi.", verb:"voir (nous)", answer:"voyions"},
        {before:"Je ", after:" du sport tous les matins.", verb:"faire (je)", answer:"faisais"},
        {before:"Tu ", after:" une lettre à ta correspondante.", verb:"écrire (tu)", answer:"écrivais"},
        {before:"Ils ", after:" les problèmes un par un.", verb:"résoudre (ils)", answer:"résolvaient"},
        {before:"Nous ", after:" le sucre dans l'eau chaude.", verb:"dissoudre (nous)", answer:"dissolvions"},
        {before:"Je ", after:" tout ce qu'il me disait.", verb:"croire (je)", answer:"croyais"},
        {before:"Ils ", after:" dès qu'ils avaient peur.", verb:"fuir (ils)", answer:"fuyaient"},
        {before:"Tu ", after:" les murs de ta chambre en bleu.", verb:"peindre (tu)", answer:"peignais"},
        {before:"Nous ", after:" toujours le pire.", verb:"craindre (nous)", answer:"craignions"},
        {before:"Ils ", after:" leurs amis après les cours.", verb:"rejoindre (ils)", answer:"rejoignaient"},
        {before:"Vous ", after:" toujours la vérité.", verb:"dire (vous)", answer:"disiez"},
        {before:"Je ", after:" rentrer avant la nuit.", verb:"devoir (je)", answer:"devais"},
        {before:"Nous ", after:" déjà la réponse.", verb:"savoir (nous)", answer:"savions"},
        {before:"Tu ", after:" venir quand tu voulais.", verb:"pouvoir (tu)", answer:"pouvais"},
        {before:"Elle ", after:" une lettre chaque semaine.", verb:"recevoir (elle)", answer:"recevait"},
      ],

      // Évaluation
      evaluation: {
        qcm: [
          {text:"Il ___ toujours ses affaires sur la table.", options:["plaçait", "placait", "plaçet"], answer:0},
          {text:"Tu ___ très vite sur la piste.", options:["courais", "courrais", "courait"], answer:0},
          {text:"Nous ___ un grand jardin.", options:["avions", "avons", "aviions"], answer:0},
          {text:"Elle ___ peur du noir.", options:["avait", "avais", "aviait"], answer:0},
          {text:"Ils ___ leurs amis après l'école.", options:["rejoignaient", "rejoingnaient", "rejondaient"], answer:0},
        ],
        trous: [
          {before:"Nous ", after:" souvent des crêpes le dimanche.", verb:"manger (nous)", answer:"mangions"},
          {before:"Elle ", after:" les vitres chaque samedi.", verb:"essuyer (elle)", answer:"essuyait"},
          {before:"Tu ", after:" ta mère dès que tu arrivais.", verb:"appeler (tu)", answer:"appelais"},
          {before:"Tu ", after:" très timide quand tu étais petit.", verb:"être (tu)", answer:"étais"},
          {before:"Nous ", after:" chez nos cousins chaque été.", verb:"venir (nous)", answer:"venions"},
        ]
      }
    }

    ,passe_compose: {
      qcm_bank: [
        {text:"Hier, je ___ (aller) chez le médecin.", options:["suis allés","suis allé(e)","ai allé"], answer:1},
        {text:"Ce matin, tu ___ (avoir) une bonne surprise.", options:["a eu","as eu","as eut"], answer:1},
        {text:"Il ___ (être) très courageux pendant l'opération.", options:["est allé","a été","as été"], answer:1},
        {text:"Nous ___ (finir) nos devoirs avant le dîner.", options:["avons fini","avons finis","sommes finis"], answer:0},
        {text:"Vous ___ (unir) vos forces pour déplacer les meubles.", options:["avez uni","êtes unis","avez unis"], answer:0},
        {text:"Elle ___ (savoir) la réponse immédiatement.", options:["a sue","a sut","a su"], answer:2},
        {text:"Ils ___ (pouvoir) partir à l'heure grâce au train.", options:["ont put","ont pu","sont pu"], answer:1},
        {text:"J' ___ (acheter) un nouveau cartable pour la rentrée.", options:["ai acheté","ai achetée","ai acheter"], answer:0},
        {text:"Tu ___ (jeter) tes vieux cahiers à la fin de l'année.", options:["as jeter","as jeté","as jetté"], answer:1},
        {text:"Il ___ (appeler) ses parents dès son arrivée.", options:["a appelé","a appellé","as appelé"], answer:0},
        {text:"Nous ___ (emmener) les enfants au parc ce matin.", options:["avons emmenés","avons emmené","sommes emmenés"], answer:1},
        {text:"Elle ___ (lever) la main pour répondre à la question.", options:["a levée","a levé","as levé"], answer:1},
        {text:"Vous ___ (envoyer) le colis hier matin.", options:["avez envoyé","avez envoié","êtes envoyé"], answer:0},
        {text:"Tu ___ (essuyer) la vaisselle après le repas.", options:["as essuyé","as essuié","a essuyé"], answer:0},
        {text:"Il ___ (guérir) rapidement grâce aux médicaments.", options:["a guérit","a guérie","a guéri"], answer:2},
        {text:"Je ___ (lire) ce roman en une seule journée.", options:["ai lut","ai lus","ai lu"], answer:2},
        {text:"Nous ___ (écrire) une lettre à notre correspondant.", options:["avons écrit","avons écri","avons écris"], answer:0},
        {text:"Elle ___ (mettre) son manteau avant de sortir.", options:["a mi","a mis","a mit"], answer:1},
        {text:"Tu ___ (dire) la vérité à tes parents.", options:["as dis","as di","as dit"], answer:2},
        {text:"Ils ___ (faire) une randonnée en montagne ce week-end.", options:["ont fait","ont fais","ont faient"], answer:0},
        {text:"J' ___ (boire) un grand verre d'eau après le sport.", options:["ai but","ai bus","ai bu"], answer:2},
        {text:"Elle ___ (peindre) un magnifique tableau pour l'exposition.", options:["a peind","a peint","a pein"], answer:1},
        {text:"Nous ___ (mentir) et nous le regrettons.", options:["avons mentis","avons menti","avons mentit"], answer:1},
        {text:"Il ___ (tenir) sa promesse jusqu'au bout.", options:["a tenus","a tenut","a tenu"], answer:2},
        {text:"Le directeur ___ (accueillir) les nouveaux élèves ce matin.", options:["a accueillit","a accueillut","a accueilli"], answer:2},
        {text:"Je ___ (vouloir) lui dire la vérité mais je n'ai pas osé.", options:["ai voulut","ai voulu","ai voulus"], answer:1},
        {text:"Nous ___ (aller) au cinéma vendredi soir.", options:["sommes allé","sommes allés","sommes aller"], answer:1},
        {text:"Tu ___ (recevoir) un beau cadeau pour ton anniversaire.", options:["as reçut","as reçu","as reçus"], answer:1},
        {text:"Elle ___ (revenir) de vacances hier soir.", options:["est revenu","est revenue","est revenut"], answer:1},
        {text:"Vous ___ (devoir) travailler très dur pour réussir.", options:["avez du","avez dut","avez dû"], answer:2},
        {text:"Il ___ (voir) un film magnifique au cinéma.", options:["a vut","a vus","a vu"], answer:2},
        {text:"Il ___ (falloir) partir très tôt ce matin.", options:["a fallut","a fallue","a fallu"], answer:2},
        {text:"Elle ___ (résoudre) ce problème difficile en cinq minutes.", options:["a résolue","a résolu","a résolut"], answer:1},
        {text:"Tu ___ (rejoindre) tes amis au parc après l'école.", options:["as rejoind","as rejoins","as rejoint"], answer:2},
        {text:"Il ___ (amener) son chien chez le vétérinaire hier.", options:["a amené","a amenés","a amener"], answer:0},
        {text:"Elle ___ (craindre) le pire mais tout s'est bien passé.", options:["a crainte","a craind","a craint"], answer:2},
        {text:"Je ___ (courir) dix kilomètres ce matin.", options:["ai courrus","ai courri","ai couru"], answer:2},
        {text:"Tu ___ (venir) nous rendre visite la semaine dernière.", options:["es venu(e)","es venut","es venus"], answer:0},
        {text:"Cette plante ___ (mourir) faute d'eau pendant les vacances.", options:["est mort","est morte","est mourru"], answer:1},
        {text:"Grand-mère ___ (coudre) les costumes pour le spectacle.", options:["a cousue","a cousut","a cousu"], answer:2},
        {text:"Il ___ (vivre) dix ans en Australie avant de rentrer.", options:["a vécu","a vécut","a vit"], answer:0},
        {text:"Tu ___ (conduire) prudemment sur cette route dangereuse.", options:["as condui","as conduis","as conduit"], answer:2},
        {text:"Nous ___ (rire) beaucoup en regardant ce film comique.", options:["avons ri","avons rit","avons ris"], answer:0},
        {text:"Vous ___ (suivre) attentivement les conseils du guide.", options:["avez suivi","avez suivit","avez suivis"], answer:0},
        {text:"Il ___ (ouvrir) la fenêtre pour aérer la pièce.", options:["a ouvert","a ouvers","a ouvèrt"], answer:0},
        {text:"Nous ___ (offrir) un cadeau à notre maîtresse pour Noël.", options:["avons offert","avons offerts","avons offrit"], answer:0},
        {text:"Je ___ (sortir) après avoir fini tous mes devoirs.", options:["suis sortis","suis sorti(e)","ai sorti"], answer:1},
        {text:"Elle ___ (partir) sans dire au revoir à personne.", options:["est partie","est partite","est partit"], answer:0},
        {text:"Nous ___ (naître) dans la même ville tous les deux.", options:["sommes nés","sommes né","avons né"], answer:0},
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

window.EXERCICES_ANALYSE = [
  // Niveau 1 : Groupe sujet (bleu) et verbe (rouge)
  [
    {
      text: "Le professeur patient explique .",
      tokens: [
        { text: "Le", sujet: true },
        { text: "professeur", sujet: true },
        { text: "patient", sujet: true },
        { text: "explique", verbe: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Le professeur patient » est le groupe sujet. « explique » est le verbe."
    },
    {
      text: "Les élèves attentifs écrivent la leçon .",
      tokens: [
        { text: "Les", sujet: true },
        { text: "élèves", sujet: true },
        { text: "attentifs", sujet: true },
        { text: "écrivent", verbe: true },
        { text: "la", other: true },
        { text: "leçon", other: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Les élèves attentifs » est le groupe sujet. « écrivent » est le verbe."
    },
    {
      text: "Mon petit frère mange une pomme rouge .",
      tokens: [
        { text: "Mon", sujet: true },
        { text: "petit", sujet: true },
        { text: "frère", sujet: true },
        { text: "mange", verbe: true },
        { text: "une", other: true },
        { text: "pomme", other: true },
        { text: "rouge", other: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Mon petit frère » est le groupe sujet. « mange » est le verbe."
    },
    {
      text: "Le grand chien noir aboie dehors .",
      tokens: [
        { text: "Le", sujet: true },
        { text: "grand", sujet: true },
        { text: "chien", sujet: true },
        { text: "noir", sujet: true },
        { text: "aboie", verbe: true },
        { text: "dehors", other: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Le grand chien noir » est le groupe sujet. « aboie » est le verbe."
    },
    {
      text: "Les oiseaux migrateurs volent vers le sud .",
      tokens: [
        { text: "Les", sujet: true },
        { text: "oiseaux", sujet: true },
        { text: "migrateurs", sujet: true },
        { text: "volent", verbe: true },
        { text: "vers", other: true },
        { text: "le", other: true },
        { text: "sud", other: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Les oiseaux migrateurs » est le groupe sujet. « volent » est le verbe."
    }
  ],
  // Niveau 2 : Groupe sujet (bleu) et prédicat (rouge)
  [
    {
      text: "Le professeur patient explique la leçon .",
      tokens: [
        { text: "Le", sujet: true },
        { text: "professeur", sujet: true },
        { text: "patient", sujet: true },
        { text: "explique", predicat: true },
        { text: "la", predicat: true },
        { text: "leçon", predicat: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Le professeur patient » est le groupe sujet. « explique la leçon » est le prédicat (ce qu'on dit du sujet)."
    },
    {
      text: "Le chat noir dort sur le canapé .",
      tokens: [
        { text: "Le", sujet: true },
        { text: "chat", sujet: true },
        { text: "noir", sujet: true },
        { text: "dort", predicat: true },
        { text: "sur", predicat: true },
        { text: "le", predicat: true },
        { text: "canapé", predicat: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Le chat noir » est le groupe sujet. « dort sur le canapé » est le prédicat."
    },
    {
      text: "Les enfants fatigués regardent un film .",
      tokens: [
        { text: "Les", sujet: true },
        { text: "enfants", sujet: true },
        { text: "fatigués", sujet: true },
        { text: "regardent", predicat: true },
        { text: "un", predicat: true },
        { text: "film", predicat: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Les enfants fatigués » est le groupe sujet. « regardent un film » est le prédicat."
    },
    {
      text: "Le jardinier arrose les jolies fleurs .",
      tokens: [
        { text: "Le", sujet: true },
        { text: "jardinier", sujet: true },
        { text: "arrose", predicat: true },
        { text: "les", predicat: true },
        { text: "jolies", predicat: true },
        { text: "fleurs", predicat: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Le jardinier » est le groupe sujet. « arrose les jolies fleurs » est le prédicat."
    },
    {
      text: "Ce vieux monsieur marche lentement .",
      tokens: [
        { text: "Ce", sujet: true },
        { text: "vieux", sujet: true },
        { text: "monsieur", sujet: true },
        { text: "marche", predicat: true },
        { text: "lentement", predicat: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Ce vieux monsieur » est le groupe sujet. « marche lentement » est le prédicat."
    }
  ],
  // Niveau 3 : Groupe sujet (bleu), verbe (rouge), CDV (rose) et CIV (mauve)
  [
    {
      text: "Le professeur explique la leçon aux élèves .",
      tokens: [
        { text: "Le", sujet: true },
        { text: "professeur", sujet: true },
        { text: "explique", verbe: true },
        { text: "la", cdv: true },
        { text: "leçon", cdv: true },
        { text: "aux", civ: true },
        { text: "élèves", civ: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Le professeur » (sujet), « explique » (verbe), « la leçon » (CDV - explique quoi ?), « aux élèves » (CIV - explique à qui ?)."
    },
    {
      text: "Julie donne un livre à son frère .",
      tokens: [
        { text: "Julie", sujet: true },
        { text: "donne", verbe: true },
        { text: "un", cdv: true },
        { text: "livre", cdv: true },
        { text: "à", civ: true },
        { text: "son", civ: true },
        { text: "frère", civ: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Julie » (sujet), « donne » (verbe), « un livre » (CDV - donne quoi ?), « à son frère » (CIV - donne à qui ?)."
    },
    {
      text: "Le témoin raconte l' histoire au policier .",
      tokens: [
        { text: "Le", sujet: true },
        { text: "témoin", sujet: true },
        { text: "raconte", verbe: true },
        { text: "l'", cdv: true },
        { text: "histoire", cdv: true },
        { text: "au", civ: true },
        { text: "policier", civ: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Le témoin » (sujet), « raconte » (verbe), « l'histoire » (CDV), « au policier » (CIV)."
    },
    {
      text: "Les parents offrent un cadeau à leur fille .",
      tokens: [
        { text: "Les", sujet: true },
        { text: "parents", sujet: true },
        { text: "offrent", verbe: true },
        { text: "un", cdv: true },
        { text: "cadeau", cdv: true },
        { text: "à", civ: true },
        { text: "leur", civ: true },
        { text: "fille", civ: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Les parents » (sujet), « offrent » (verbe), « un cadeau » (CDV), « à leur fille » (CIV)."
    },
    {
      text: "Nous demandons une explication au guide .",
      tokens: [
        { text: "Nous", sujet: true },
        { text: "demandons", verbe: true },
        { text: "une", cdv: true },
        { text: "explication", cdv: true },
        { text: "au", civ: true },
        { text: "guide", civ: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Nous » (sujet), « demandons » (verbe), « une explication » (CDV), « au guide » (CIV)."
    }
  ],
  // Niveau 4 : Groupe sujet (bleu), prédicat (rouge) et CC (vert)
  [
    {
      text: "Dans la salle , le professeur explique la leçon .",
      tokens: [
        { text: "Dans", cc: true },
        { text: "la", cc: true },
        { text: "salle", cc: true, punctuation: "," },
        { text: "le", sujet: true },
        { text: "professeur", sujet: true },
        { text: "explique", predicat: true },
        { text: "la", predicat: true },
        { text: "leçon", predicat: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Dans la salle » est un CC de lieu. « le professeur » est le sujet. « explique la leçon » est le prédicat."
    },
    {
      text: "Demain matin , les élèves feront une dictée .",
      tokens: [
        { text: "Demain", cc: true },
        { text: "matin", cc: true, punctuation: "," },
        { text: "les", sujet: true },
        { text: "élèves", sujet: true },
        { text: "feront", predicat: true },
        { text: "une", predicat: true },
        { text: "dictée", predicat: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Demain matin » est un CC de temps. « les élèves » est le sujet. « feront une dictée » est le prédicat."
    },
    {
      text: "Le garçon mange une glace dans le parc .",
      tokens: [
        { text: "Le", sujet: true },
        { text: "garçon", sujet: true },
        { text: "mange", predicat: true },
        { text: "une", predicat: true },
        { text: "glace", predicat: true },
        { text: "dans", cc: true },
        { text: "le", cc: true },
        { text: "parc", cc: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Le garçon » est le sujet. « mange une glace » est le prédicat. « dans le parc » est un CC de lieu."
    },
    {
      text: "Avec courage , le pompier éteint l' incendie .",
      tokens: [
        { text: "Avec", cc: true },
        { text: "courage", cc: true, punctuation: "," },
        { text: "le", sujet: true },
        { text: "pompier", sujet: true },
        { text: "éteint", predicat: true },
        { text: "l'", predicat: true },
        { text: "incendie", predicat: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Avec courage » est un CC de manière. « le pompier » est le sujet. « éteint l'incendie » est le prédicat."
    },
    {
      text: "Les oiseaux chantent dans les arbres .",
      tokens: [
        { text: "Les", sujet: true },
        { text: "oiseaux", sujet: true },
        { text: "chantent", predicat: true },
        { text: "dans", cc: true },
        { text: "les", cc: true },
        { text: "arbres", cc: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Les oiseaux » est le sujet. « chantent » est le prédicat. « dans les arbres » est un CC de lieu."
    }
  ],
  // Niveau 5 : Groupe sujet (bleu), verbe (rouge) et attribut du sujet (noir)
  [
    {
      text: "Ce jeune professeur semble patient .",
      tokens: [
        { text: "Ce", sujet: true },
        { text: "jeune", sujet: true },
        { text: "professeur", sujet: true },
        { text: "semble", verbe: true },
        { text: "patient", attribut: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Ce jeune professeur » (sujet), « semble » (verbe d'état), « patient » (attribut du sujet - qualifie le sujet)."
    },
    {
      text: "Le chat de ma tante est magnifique .",
      tokens: [
        { text: "Le", sujet: true },
        { text: "chat", sujet: true },
        { text: "de", sujet: true },
        { text: "ma", sujet: true },
        { text: "tante", sujet: true },
        { text: "est", verbe: true },
        { text: "magnifique", attribut: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Le chat de ma tante » (sujet), « est » (verbe d'état), « magnifique » (attribut du sujet)."
    },
    {
      text: "Ces élèves deviendront des scientifiques .",
      tokens: [
        { text: "Ces", sujet: true },
        { text: "élèves", sujet: true },
        { text: "deviendront", verbe: true },
        { text: "des", attribut: true },
        { text: "scientifiques", attribut: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Ces élèves » (sujet), « deviendront » (verbe d'état), « des scientifiques » (attribut du sujet)."
    },
    {
      text: "La mer paraît calme ce matin .",
      tokens: [
        { text: "La", sujet: true },
        { text: "mer", sujet: true },
        { text: "paraît", verbe: true },
        { text: "calme", attribut: true },
        { text: "ce", other: true },
        { text: "matin", other: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« La mer » (sujet), « paraît » (verbe d'état), « calme » (attribut du sujet). « ce matin » est un CC (non recherché ici)."
    },
    {
      text: "Le chocolat chaud reste sa boisson préférée .",
      tokens: [
        { text: "Le", sujet: true },
        { text: "chocolat", sujet: true },
        { text: "chaud", sujet: true },
        { text: "reste", verbe: true },
        { text: "sa", attribut: true },
        { text: "boisson", attribut: true },
        { text: "préférée", attribut: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Le chocolat chaud » (sujet), « reste » (verbe d'état), « sa boisson préférée » (attribut du sujet)."
    }
  ],
  // Niveau 6 : Groupe sujet (bleu), verbe (rouge) et complément d'agent (brun)
  [
    {
      text: "La leçon est expliquée par le professeur .",
      tokens: [
        { text: "La", sujet: true },
        { text: "leçon", sujet: true },
        { text: "est", verbe: true },
        { text: "expliquée", verbe: true },
        { text: "par", agent: true },
        { text: "le", agent: true },
        { text: "professeur", agent: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« La leçon » (sujet), « est expliquée » (verbe conjugué au passif), « par le professeur » (complément d'agent - celui qui fait l'action dans une phrase passive)."
    },
    {
      text: "La souris est poursuivie par le chat noir .",
      tokens: [
        { text: "La", sujet: true },
        { text: "souris", sujet: true },
        { text: "est", verbe: true },
        { text: "poursuivie", verbe: true },
        { text: "par", agent: true },
        { text: "le", agent: true },
        { text: "chat", agent: true },
        { text: "noir", agent: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« La souris » (sujet), « est poursuivie » (verbe au passif), « par le chat noir » (complément d'agent)."
    },
    {
      text: "Cette chanson fut écrite par un poète .",
      tokens: [
        { text: "Cette", sujet: true },
        { text: "chanson", sujet: true },
        { text: "fut", verbe: true },
        { text: "écrite", verbe: true },
        { text: "par", agent: true },
        { text: "un", agent: true },
        { text: "poète", agent: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Cette chanson » (sujet), « fut écrite » (verbe au passif), « par un poète » (complément d'agent)."
    },
    {
      text: "La maison a été construite par les maçons .",
      tokens: [
        { text: "La", sujet: true },
        { text: "maison", sujet: true },
        { text: "a", verbe: true },
        { text: "été", verbe: true },
        { text: "construite", verbe: true },
        { text: "par", agent: true },
        { text: "les", agent: true },
        { text: "maçons", agent: true },
        { text: ".", punctuation: true }
      ],
      explanation: "« Les arbres » (sujet), « furent déracinés » (verbe au passif), « par la tempête » (complément d'agent)."
    }
  ]
];

window.EXERCICES_SUJET = [
  {
    text: "Il partira demain matin .",
    cat: "pronoun",
    position: "standard",
    tokens: [
      { text: "Il", sujet: true },
      { text: "partira" },
      { text: "demain" },
      { text: "matin" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le pronom « Il »."
  },
  {
    text: "Julie adore écouter de la musique .",
    cat: "noun",
    position: "standard",
    tokens: [
      { text: "Julie", sujet: true },
      { text: "adore" },
      { text: "écouter" },
      { text: "de" },
      { text: "la" },
      { text: "musique" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le nom propre « Julie »."
  },
  {
    text: "Les enfants jouent dans la cour .",
    cat: "noun",
    position: "standard",
    tokens: [
      { text: "Les", sujet: true },
      { text: "enfants", sujet: true },
      { text: "jouent" },
      { text: "dans" },
      { text: "la" },
      { text: "cour" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le groupe nominal « Les enfants »."
  },
  {
    text: "Le camion de mon oncle transporte du sable .",
    cat: "cdn_rel",
    position: "standard",
    tokens: [
      { text: "Le", sujet: true },
      { text: "camion", sujet: true },
      { text: "de", sujet: true },
      { text: "mon", sujet: true },
      { text: "oncle", sujet: true },
      { text: "transporte" },
      { text: "du" },
      { text: "sable" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le groupe nominal avec complément du nom « Le camion de mon oncle »."
  },
  {
    text: "La maison où j' ai habité a été vendue .",
    cat: "cdn_rel",
    position: "standard",
    tokens: [
      { text: "La", sujet: true },
      { text: "maison", sujet: true },
      { text: "où", sujet: true },
      { text: "j'", sujet: true },
      { text: "ai", sujet: true },
      { text: "habité", sujet: true },
      { text: "a" },
      { text: "été" },
      { text: "vendue" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le groupe nominal avec proposition relative « La maison où j'ai habité »."
  },
  {
    text: "Le cadeau que je t' ai offert te plaît ?",
    cat: "cdn_rel",
    position: "standard",
    tokens: [
      { text: "Le", sujet: true },
      { text: "cadeau", sujet: true },
      { text: "que", sujet: true },
      { text: "je", sujet: true },
      { text: "t'", sujet: true },
      { text: "ai", sujet: true },
      { text: "offert", sujet: true },
      { text: "te" },
      { text: "plaît" },
      { text: "?", punctuation: true }
    ],
    explanation: "Le sujet est le groupe nominal avec proposition relative « Le cadeau que je t'ai offert »."
  },
  {
    text: "Fumer est mauvais pour la santé .",
    cat: "infinitive",
    position: "standard",
    tokens: [
      { text: "Fumer", sujet: true },
      { text: "est" },
      { text: "mauvais" },
      { text: "pour" },
      { text: "la" },
      { text: "santé" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le verbe à l'infinitif « Fumer »."
  },
  {
    text: "Étudier est nécessaire pour réussir .",
    cat: "infinitive",
    position: "standard",
    tokens: [
      { text: "Étudier", sujet: true },
      { text: "est" },
      { text: "nécessaire" },
      { text: "pour" },
      { text: "réussir" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le verbe à l'infinitif « Étudier »."
  },
  {
    text: "Dans cet arbre vit un écureuil .",
    cat: "noun",
    position: "inverted",
    tokens: [
      { text: "Dans" },
      { text: "cet" },
      { text: "arbre" },
      { text: "vit" },
      { text: "un", sujet: true },
      { text: "écureuil", sujet: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « un écureuil », inversé après le verbe « vit »."
  },
  {
    text: "Dans le ciel brillent des milliers d' étoiles .",
    cat: "cdn_rel",
    position: "inverted",
    tokens: [
      { text: "Dans" },
      { text: "le" },
      { text: "ciel" },
      { text: "brillent" },
      { text: "des", sujet: true },
      { text: "milliers", sujet: true },
      { text: "d'", sujet: true },
      { text: "étoiles", sujet: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « des milliers d'étoiles », inversé après le verbe « brillent »."
  },
  {
    text: "Sur la table traînent plusieurs livres .",
    cat: "noun",
    position: "inverted",
    tokens: [
      { text: "Sur" },
      { text: "la" },
      { text: "table" },
      { text: "traînent" },
      { text: "plusieurs", sujet: true },
      { text: "livres", sujet: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « plusieurs livres », inversé après le verbe « traînent »."
  },
  {
    text: "Derrière la maison coule une petite rivière .",
    cat: "noun",
    position: "inverted",
    tokens: [
      { text: "Derrière" },
      { text: "la" },
      { text: "maison" },
      { text: "coule" },
      { text: "une", sujet: true },
      { text: "petite", sujet: true },
      { text: "rivière", sujet: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « une petite rivière », inversé après le verbe « coule »."
  },
  {
    text: "Le tien est plus grand que le mien .",
    cat: "pronoun",
    position: "standard",
    tokens: [
      { text: "Le", sujet: true },
      { text: "tien", sujet: true },
      { text: "est" },
      { text: "plus" },
      { text: "grand" },
      { text: "que" },
      { text: "le" },
      { text: "mien" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le pronom possessif « Le tien »."
  },
  {
    text: "Ce dernier arriva en retard .",
    cat: "pronoun",
    position: "standard",
    tokens: [
      { text: "Ce", sujet: true },
      { text: "dernier", sujet: true },
      { text: "arriva" },
      { text: "en" },
      { text: "retard" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le pronom démonstratif « Ce dernier »."
  },
  {
    text: "Jules prépare un délicieux gâteau .",
    cat: "noun",
    position: "standard",
    tokens: [
      { text: "Jules", sujet: true },
      { text: "prépare" },
      { text: "un" },
      { text: "délicieux" },
      { text: "gâteau" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le nom propre « Jules »."
  },
  {
    text: "Le grand livre rouge est posé sur l' étagère .",
    cat: "noun",
    position: "standard",
    tokens: [
      { text: "Le", sujet: true },
      { text: "grand", sujet: true },
      { text: "livre", sujet: true },
      { text: "rouge", sujet: true },
      { text: "est" },
      { text: "posé" },
      { text: "sur" },
      { text: "l'" },
      { text: "étagère" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le groupe nominal « Le grand livre rouge »."
  },
  {
    text: "Les fleurs du jardin sentent très bon .",
    cat: "cdn_rel",
    position: "standard",
    tokens: [
      { text: "Les", sujet: true },
      { text: "fleurs", sujet: true },
      { text: "du", sujet: true },
      { text: "jardin", sujet: true },
      { text: "sentent" },
      { text: "très" },
      { text: "bon" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le groupe nominal avec complément du nom « Les fleurs du jardin »."
  },
  {
    text: "La tarte aux pommes de grand-mère refroidit .",
    cat: "cdn_rel",
    position: "standard",
    tokens: [
      { text: "La", sujet: true },
      { text: "tarte", sujet: true },
      { text: "aux", sujet: true },
      { text: "pommes", sujet: true },
      { text: "de", sujet: true },
      { text: "grand-mère", sujet: true },
      { text: "refroidit" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le groupe nominal complexe « La tarte aux pommes de grand-mère »."
  },
  {
    text: "Le chien de ma voisine aboie souvent .",
    cat: "cdn_rel",
    position: "standard",
    tokens: [
      { text: "Le", sujet: true },
      { text: "chien", sujet: true },
      { text: "de", sujet: true },
      { text: "ma", sujet: true },
      { text: "voisine", sujet: true },
      { text: "aboie" },
      { text: "souvent" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le groupe nominal avec complément du nom « Le chien de ma voisine »."
  },
  {
    text: "Le cartable de mon petit frère est très lourd .",
    cat: "cdn_rel",
    position: "standard",
    tokens: [
      { text: "Le", sujet: true },
      { text: "cartable", sujet: true },
      { text: "de", sujet: true },
      { text: "mon", sujet: true },
      { text: "petit", sujet: true },
      { text: "frère", sujet: true },
      { text: "est" },
      { text: "très" },
      { text: "lourd" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le groupe nominal complexe « Le cartable de mon petit frère »."
  },
  {
    text: "L' arbre qui pousse dans la cour est un chêne .",
    cat: "cdn_rel",
    position: "standard",
    tokens: [
      { text: "L'", sujet: true },
      { text: "arbre", sujet: true },
      { text: "qui", sujet: true },
      { text: "pousse", sujet: true },
      { text: "dans", sujet: true },
      { text: "la", sujet: true },
      { text: "cour", sujet: true },
      { text: "est" },
      { text: "un" },
      { text: "chêne" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le groupe nominal avec proposition relative « L'arbre qui pousse dans la cour »."
  },
  {
    text: "Le gâteau au chocolat que tu as préparé est délicieux .",
    cat: "cdn_rel",
    position: "standard",
    tokens: [
      { text: "Le", sujet: true },
      { text: "gâteau", sujet: true },
      { text: "au", sujet: true },
      { text: "chocolat", sujet: true },
      { text: "que", sujet: true },
      { text: "tu", sujet: true },
      { text: "as", sujet: true },
      { text: "préparé", sujet: true },
      { text: "est" },
      { text: "délicieux" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le groupe nominal complexe « Le gâteau au chocolat que tu as préparé »."
  },
  {
    text: "Le train en provenance de Paris entre en gare .",
    cat: "cdn_rel",
    position: "standard",
    tokens: [
      { text: "Le", sujet: true },
      { text: "train", sujet: true },
      { text: "en", sujet: true },
      { text: "provenance", sujet: true },
      { text: "de", sujet: true },
      { text: "Paris", sujet: true },
      { text: "entre" },
      { text: "en" },
      { text: "gare" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le groupe nominal avec complément du nom « Le train en provenance de Paris »."
  },
  {
    text: "Les élèves de cette classe sont très sages .",
    cat: "cdn_rel",
    position: "standard",
    tokens: [
      { text: "Les", sujet: true },
      { text: "élèves", sujet: true },
      { text: "de", sujet: true },
      { text: "cette", sujet: true },
      { text: "classe", sujet: true },
      { text: "sont" },
      { text: "très" },
      { text: "sages" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le groupe nominal avec complément du nom « Les élèves de cette classe »."
  },
  {
    text: "Le rire de cet enfant est communicatif .",
    cat: "cdn_rel",
    position: "standard",
    tokens: [
      { text: "Le", sujet: true },
      { text: "rire", sujet: true },
      { text: "de", sujet: true },
      { text: "cet", sujet: true },
      { text: "enfant", sujet: true },
      { text: "est" },
      { text: "communicatif" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le groupe nominal avec complément du nom « Le rire de cet enfant »."
  },
  {
    text: "La clé de la voiture se trouve sur le meuble .",
    cat: "cdn_rel",
    position: "standard",
    tokens: [
      { text: "La", sujet: true },
      { text: "clé", sujet: true },
      { text: "de", sujet: true },
      { text: "la", sujet: true },
      { text: "voiture", sujet: true },
      { text: "se" },
      { text: "trouve" },
      { text: "sur" },
      { text: "le" },
      { text: "meuble" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le groupe nominal avec complément du nom « La clé de la voiture »."
  },
  {
    text: "Le livre que j' ai emprunté est passionnant .",
    cat: "cdn_rel",
    position: "standard",
    tokens: [
      { text: "Le", sujet: true },
      { text: "livre", sujet: true },
      { text: "que", sujet: true },
      { text: "j'", sujet: true },
      { text: "ai", sujet: true },
      { text: "emprunté", sujet: true },
      { text: "est" },
      { text: "passionnant" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le groupe nominal avec proposition relative « Le livre que j'ai emprunté »."
  },
  {
    text: "Rêver adoucit le quotidien .",
    cat: "infinitive",
    position: "standard",
    tokens: [
      { text: "Rêver", sujet: true },
      { text: "adoucit" },
      { text: "le" },
      { text: "quotidien" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le verbe à l'infinitif « Rêver »."
  },
  {
    text: "Mentir détruit la confiance .",
    cat: "infinitive",
    position: "standard",
    tokens: [
      { text: "Mentir", sujet: true },
      { text: "détruit" },
      { text: "la" },
      { text: "confiance" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le verbe à l'infinitif « Mentir »."
  },
  {
    text: "Courir demande de l' endurance .",
    cat: "infinitive",
    position: "standard",
    tokens: [
      { text: "Courir", sujet: true },
      { text: "demande" },
      { text: "de" },
      { text: "l'" },
      { text: "endurance" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le verbe à l'infinitif « Courir »."
  },
  {
    text: "Lire enrichit le vocabulaire .",
    cat: "infinitive",
    position: "standard",
    tokens: [
      { text: "Lire", sujet: true },
      { text: "enrichit" },
      { text: "le" },
      { text: "vocabulaire" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le verbe à l'infinitif « Lire »."
  },
  {
    text: "Sous la pluie battante , les piétons pressent le pas .",
    cat: "noun",
    position: "cc_first",
    tokens: [
      { text: "Sous" },
      { text: "la" },
      { text: "pluie" },
      { text: "battante", punctuation: "," },
      { text: "les", sujet: true },
      { text: "piétons", sujet: true },
      { text: "pressent" },
      { text: "le" },
      { text: "pas" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le groupe nominal « les piétons », placé après le complément circonstanciel."
  },
  {
    text: "Depuis ce matin , Julie travaille sur son ordinateur .",
    cat: "noun",
    position: "cc_first",
    tokens: [
      { text: "Depuis" },
      { text: "ce" },
      { text: "matin", punctuation: "," },
      { text: "Julie", sujet: true },
      { text: "travaille" },
      { text: "sur" },
      { text: "son" },
      { text: "ordinateur" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le nom propre « Julie », placé après le complément circonstanciel."
  },
  {
    text: "Dans la forêt , un vieux chêne se dresse fièrement .",
    cat: "noun",
    position: "cc_first",
    tokens: [
      { text: "Dans" },
      { text: "la" },
      { text: "forêt", punctuation: "," },
      { text: "un", sujet: true },
      { text: "vieux", sujet: true },
      { text: "chêne", sujet: true },
      { text: "se" },
      { text: "dresse" },
      { text: "fièrement" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le groupe nominal « un vieux chêne », placé après le complément circonstanciel."
  },
  {
    text: "Ceux-ci coûtent plus cher .",
    cat: "pronoun",
    position: "standard",
    tokens: [
      { text: "Ceux-ci", sujet: true },
      { text: "coûtent" },
      { text: "plus" },
      { text: "cher" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le pronom démonstratif « Ceux-ci »."
  },
  {
    text: "Bruxelles est une très belle ville .",
    cat: "noun",
    position: "standard",
    tokens: [
      { text: "Bruxelles", sujet: true },
      { text: "est" },
      { text: "une" },
      { text: "très" },
      { text: "belle" },
      { text: "ville" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le nom propre « Bruxelles »."
  },
  {
    text: "La fille de ma tante joue du piano .",
    cat: "cdn_rel",
    position: "standard",
    tokens: [
      { text: "La", sujet: true },
      { text: "fille", sujet: true },
      { text: "de", sujet: true },
      { text: "ma", sujet: true },
      { text: "tante", sujet: true },
      { text: "joue" },
      { text: "du" },
      { text: "piano" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le groupe nominal avec complément du nom « La fille de ma tante »."
  },
  {
    text: "L' eau de la source est pure .",
    cat: "cdn_rel",
    position: "standard",
    tokens: [
      { text: "L'", sujet: true },
      { text: "eau", sujet: true },
      { text: "de", sujet: true },
      { text: "la", sujet: true },
      { text: "source", sujet: true },
      { text: "est" },
      { text: "pure" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le groupe nominal avec complément du nom « L'eau de la source »."
  },
  {
    text: "Le tiroir du bureau renferme des secrets .",
    cat: "cdn_rel",
    position: "standard",
    tokens: [
      { text: "Le", sujet: true },
      { text: "tiroir", sujet: true },
      { text: "du", sujet: true },
      { text: "bureau", sujet: true },
      { text: "renferme" },
      { text: "des" },
      { text: "secrets" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le groupe nominal avec complément du nom « Le tiroir du bureau »."
  },
  {
    text: "La lettre que le facteur a apportée vient d' Italie .",
    cat: "cdn_rel",
    position: "standard",
    tokens: [
      { text: "La", sujet: true },
      { text: "lettre", sujet: true },
      { text: "que", sujet: true },
      { text: "le", sujet: true },
      { text: "facteur", sujet: true },
      { text: "a", sujet: true },
      { text: "apportée", sujet: true },
      { text: "vient" },
      { text: "d'" },
      { text: "Italie" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le groupe nominal avec proposition relative « La lettre que le facteur a apportée »."
  },
  {
    text: "Le dessin que tu as colorié est très beau .",
    cat: "cdn_rel",
    position: "standard",
    tokens: [
      { text: "Le", sujet: true },
      { text: "dessin", sujet: true },
      { text: "que", sujet: true },
      { text: "tu", sujet: true },
      { text: "as", sujet: true },
      { text: "colorié", sujet: true },
      { text: "est" },
      { text: "très" },
      { text: "beau" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est le groupe nominal avec proposition relative « Le dessin que tu as colorié »."
  },
  {
    text: "Dans le port attend un magnifique bateau .",
    cat: "noun",
    position: "inverted",
    tokens: [
      { text: "Dans" },
      { text: "le" },
      { text: "port" },
      { text: "attend" },
      { text: "un", sujet: true },
      { text: "magnifique", sujet: true },
      { text: "bateau", sujet: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « un magnifique bateau », inversé après le verbe « attend »."
  }
];

window.EXERCICES_VERBE = [
  {
    text: "Le petit garçon mange une pomme rouge .",
    words: 1,
    separated: false,
    subject_pos: "before",
    tokens: [
      { text: "Le" },
      { text: "petit" },
      { text: "garçon" },
      { text: "mange", verbe: true },
      { text: "une" },
      { text: "pomme" },
      { text: "rouge" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal conjugué de la phrase est « mange » (verbe manger)."
  },
  {
    text: "Les oiseaux chantent joyeusement dans le jardin .",
    words: 1,
    separated: false,
    subject_pos: "before",
    tokens: [
      { text: "Les" },
      { text: "oiseaux" },
      { text: "chantent", verbe: true },
      { text: "joyeusement" },
      { text: "dans" },
      { text: "le" },
      { text: "jardin" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal conjugué de la phrase est « chantent » (verbe chanter)."
  },
  {
    text: "Dans ce grand arbre vit un petit écureuil .",
    words: 1,
    separated: false,
    subject_pos: "after",
    tokens: [
      { text: "Dans" },
      { text: "ce" },
      { text: "grand" },
      { text: "arbre" },
      { text: "vit", verbe: true },
      { text: "un" },
      { text: "petit" },
      { text: "écureuil" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal conjugué de la phrase est « vit » (verbe vivre)."
  },
  {
    text: "Dans la vallée coule une large rivière calme .",
    words: 1,
    separated: false,
    subject_pos: "after",
    tokens: [
      { text: "Dans" },
      { text: "la" },
      { text: "vallée" },
      { text: "coule", verbe: true },
      { text: "une" },
      { text: "large" },
      { text: "rivière" },
      { text: "calme" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal conjugué de la phrase est « coule » (verbe couler)."
  },
  {
    text: "Les feuilles tombaient doucement des branches en automne .",
    words: 1,
    separated: false,
    subject_pos: "before",
    tokens: [
      { text: "Les" },
      { text: "feuilles" },
      { text: "tombaient", verbe: true },
      { text: "doucement" },
      { text: "des" },
      { text: "branches" },
      { text: "en" },
      { text: "automne" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal conjugué de la phrase est « tombaient » (verbe tomber)."
  },
  {
    text: "Chaque matin , mon frère lit un livre intéressant .",
    words: 1,
    separated: false,
    subject_pos: "before",
    tokens: [
      { text: "Chaque" },
      { text: "matin", punctuation: "," },
      { text: "mon" },
      { text: "frère" },
      { text: "lit", verbe: true },
      { text: "un" },
      { text: "livre" },
      { text: "intéressant" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal conjugué de la phrase est « lit » (verbe lire)."
  },
  {
    text: "Le chat qui dort sur le canapé ronronne doucement .",
    words: 1,
    separated: false,
    subject_pos: "before",
    tokens: [
      { text: "Le" },
      { text: "chat" },
      { text: "qui" },
      { text: "dort" },
      { text: "sur" },
      { text: "le" },
      { text: "canapé" },
      { text: "ronronne", verbe: true },
      { text: "doucement" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal conjugué de la phrase est « ronronne » (verbe ronronner). Le verbe « dort » fait partie d'une proposition relative (complément du nom « chat ») et ne doit pas être sélectionné."
  },
  {
    text: "Le chien que tu as adopté aboie toute la journée .",
    words: 1,
    separated: false,
    subject_pos: "before",
    tokens: [
      { text: "Le" },
      { text: "chien" },
      { text: "que" },
      { text: "tu" },
      { text: "as" },
      { text: "adopté" },
      { text: "aboie", verbe: true },
      { text: "toute" },
      { text: "la" },
      { text: "journée" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal conjugué de la phrase est « aboie » (verbe aboyer). Le verbe composé « as adopté » fait partie d'une proposition relative (complément du nom « chien ») et ne doit pas être sélectionné."
  },
  {
    text: "La fille de la voisine qui joue du piano habite ici .",
    words: 1,
    separated: false,
    subject_pos: "before",
    tokens: [
      { text: "La" },
      { text: "fille" },
      { text: "de" },
      { text: "la" },
      { text: "voisine" },
      { text: "qui" },
      { text: "joue" },
      { text: "du" },
      { text: "piano" },
      { text: "habite", verbe: true },
      { text: "ici" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal conjugué de la phrase est « habite » (verbe habiter). Le verbe « joue » fait partie d'une proposition relative (complément du nom « voisine ») et ne doit pas être sélectionné."
  },
  {
    text: "Les enfants qui finissent leurs devoirs recevront une récompense .",
    words: 1,
    separated: false,
    subject_pos: "before",
    tokens: [
      { text: "Les" },
      { text: "enfants" },
      { text: "qui" },
      { text: "finissent" },
      { text: "leurs" },
      { text: "devoirs" },
      { text: "recevront", verbe: true },
      { text: "une" },
      { text: "récompense" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal conjugué de la phrase est « recevront » (verbe recevoir). Le verbe « finissent » fait partie d'une proposition relative (complément du nom « enfants ») et ne doit pas être sélectionné."
  },
  {
    text: "Sur la colline brille un grand phare blanc .",
    words: 1,
    separated: false,
    subject_pos: "after",
    tokens: [
      { text: "Sur" },
      { text: "la" },
      { text: "colline" },
      { text: "brille", verbe: true },
      { text: "un" },
      { text: "grand" },
      { text: "phare" },
      { text: "blanc" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal conjugué de la phrase est « brille » (verbe briller)."
  },
  {
    text: "Demain , nous crierons notre joie sous le préau .",
    words: 1,
    separated: false,
    subject_pos: "before",
    tokens: [
      { text: "Demain", punctuation: "," },
      { text: "nous" },
      { text: "crierons", verbe: true },
      { text: "notre" },
      { text: "joie" },
      { text: "sous" },
      { text: "le" },
      { text: "préau" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal conjugué de la phrase est « crierons » (verbe crier)."
  },
  {
    text: "La voiture que conduit mon oncle roule très vite .",
    words: 1,
    separated: false,
    subject_pos: "before",
    tokens: [
      { text: "La" },
      { text: "voiture" },
      { text: "que" },
      { text: "conduit" },
      { text: "mon" },
      { text: "oncle" },
      { text: "roule", verbe: true },
      { text: "très" },
      { text: "vite" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal conjugué de la phrase est « roule » (verbe rouler). Le verbe « conduit » fait partie d'une proposition relative (complément du nom « voiture ») et ne doit pas être sélectionné."
  },
  {
    text: "Le gâteau que tu prépares sent drôlement bon .",
    words: 1,
    separated: false,
    subject_pos: "before",
    tokens: [
      { text: "Le" },
      { text: "gâteau" },
      { text: "que" },
      { text: "tu" },
      { text: "prépares" },
      { text: "sent", verbe: true },
      { text: "drôlement" },
      { text: "bon" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal conjugué de la phrase est « sent » (verbe sentir). Le verbe « prépares » fait partie d'une proposition relative (complément du nom « gâteau ») et ne doit pas être sélectionné."
  },
  {
    text: "Les enfants sont allés au cinéma hier après-midi .",
    words: 2,
    separated: false,
    subject_pos: "before",
    tokens: [
      { text: "Les" },
      { text: "enfants" },
      { text: "sont", verbe: true },
      { text: "allés", verbe: true },
      { text: "au" },
      { text: "cinéma" },
      { text: "hier" },
      { text: "après-midi" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal est le verbe composé « sont allés » (verbe aller au passé composé). Il faut sélectionner l'auxiliaire « sont » et le participe passé « allés »."
  },
  {
    text: "Julie avait reçu une belle lettre de son amie .",
    words: 2,
    separated: false,
    subject_pos: "before",
    tokens: [
      { text: "Julie" },
      { text: "avait", verbe: true },
      { text: "reçu", verbe: true },
      { text: "une" },
      { text: "belle" },
      { text: "lettre" },
      { text: "de" },
      { text: "son" },
      { text: "amie" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal est le verbe composé « avait reçu » (verbe recevoir au plus-que-parfait). Il faut sélectionner l'auxiliaire « avait » et le participe passé « reçu »."
  },
  {
    text: "Le roi eut lu le message secret dans sa chambre .",
    words: 2,
    separated: false,
    subject_pos: "before",
    tokens: [
      { text: "Le" },
      { text: "roi" },
      { text: "eut", verbe: true },
      { text: "lu", verbe: true },
      { text: "le" },
      { text: "message" },
      { text: "secret" },
      { text: "dans" },
      { text: "sa" },
      { text: "chambre" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal est le verbe composé « eut lu » (verbe lire au passé antérieur). Il faut sélectionner l'auxiliaire « eut » et le participe passé « lu »."
  },
  {
    text: "Dans la cour sont entrés deux grands camions de livraison .",
    words: 2,
    separated: false,
    subject_pos: "after",
    tokens: [
      { text: "Dans" },
      { text: "la" },
      { text: "cour" },
      { text: "sont", verbe: true },
      { text: "entrés", verbe: true },
      { text: "deux" },
      { text: "grands" },
      { text: "camions" },
      { text: "de" },
      { text: "livraison" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal est le verbe composé « sont entrés » (verbe entrer au passé composé), inversé avant son sujet. Il faut sélectionner « sont » et « entrés »."
  },
  {
    text: "Sous la tente ont dormi quatre jeunes campeurs fatigués .",
    words: 2,
    separated: false,
    subject_pos: "after",
    tokens: [
      { text: "Sous" },
      { text: "la" },
      { text: "tente" },
      { text: "ont", verbe: true },
      { text: "dormi", verbe: true },
      { text: "quatre" },
      { text: "jeunes" },
      { text: "campeurs" },
      { text: "fatigués" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal est le verbe composé « ont dormi » (verbe dormir au passé composé), inversé avant son sujet. Il faut sélectionner « ont » et « dormi »."
  },
  {
    text: "Ils n' ont pas reçu leur colis ce matin .",
    words: 2,
    separated: true,
    subject_pos: "before",
    tokens: [
      { text: "Ils" },
      { text: "n'" },
      { text: "ont", verbe: true },
      { text: "pas" },
      { text: "reçu", verbe: true },
      { text: "leur" },
      { text: "colis" },
      { text: "ce" },
      { text: "matin" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal est le verbe composé « ont reçu » (verbe recevoir au passé composé). Les mots de la négation « n' » et « pas » encadrent l'auxiliaire mais ne font pas partie du verbe."
  },
  {
    text: "Les invités sont calmement allés vers la salle à manger .",
    words: 2,
    separated: true,
    subject_pos: "before",
    tokens: [
      { text: "Les" },
      { text: "invités" },
      { text: "sont", verbe: true },
      { text: "calmement" },
      { text: "allés", verbe: true },
      { text: "vers" },
      { text: "la" },
      { text: "salle" },
      { text: "à" },
      { text: "manger" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal est le verbe composé « sont allés » (verbe aller au passé composé). L'adverbe « calmement » sépare l'auxiliaire du participe mais ne fait pas partie du verbe. Le verbe « manger » est dans un complément du nom et n'est pas le verbe de la phrase."
  },
  {
    text: "Nous avons rapidement compris la consigne de l' exercice .",
    words: 2,
    separated: true,
    subject_pos: "before",
    tokens: [
      { text: "Nous" },
      { text: "avons", verbe: true },
      { text: "rapidement" },
      { text: "compris", verbe: true },
      { text: "la" },
      { text: "consigne" },
      { text: "de" },
      { text: "l'" },
      { text: "exercice" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal est le verbe composé « avons compris » (verbe comprendre au passé composé). L'adverbe « rapidement » ne fait pas partie du verbe."
  },
  {
    text: "La fillette n' avait jamais vu un si grand éléphant .",
    words: 2,
    separated: true,
    subject_pos: "before",
    tokens: [
      { text: "La" },
      { text: "fillette" },
      { text: "n'" },
      { text: "avait", verbe: true },
      { text: "jamais" },
      { text: "vu", verbe: true },
      { text: "un" },
      { text: "si" },
      { text: "grand" },
      { text: "éléphant" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal est le verbe composé « avait vu » (verbe voir au plus-que-parfait). Les mots de la négation « n' » et « jamais » ne font pas partie du verbe."
  },
  {
    text: "Le chat a discrètement attrapé la petite souris grise .",
    words: 2,
    separated: true,
    subject_pos: "before",
    tokens: [
      { text: "Le" },
      { text: "chat" },
      { text: "a", verbe: true },
      { text: "discrètement" },
      { text: "attrapé", verbe: true },
      { text: "la" },
      { text: "petite" },
      { text: "souris" },
      { text: "grise" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal est le verbe composé « a attrapé » (verbe attraper au passé composé). L'adverbe « discrètement » ne fait pas partie du verbe."
  },
  {
    text: "Le gâteau que tu as préparé a ravi tous les convives .",
    words: 2,
    separated: false,
    subject_pos: "before",
    tokens: [
      { text: "Le" },
      { text: "gâteau" },
      { text: "que" },
      { text: "tu" },
      { text: "as" },
      { text: "préparé" },
      { text: "a", verbe: true },
      { text: "ravi", verbe: true },
      { text: "tous" },
      { text: "les" },
      { text: "convives" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal conjugué de la phrase est « a ravi » (verbe ravir au passé composé). Le verbe composé « as préparé » fait partie d'une proposition relative (complément du nom « gâteau ») et ne doit pas être sélectionné."
  },
  {
    text: "La lettre que le facteur avait apportée est arrivée ce matin .",
    words: 2,
    separated: false,
    subject_pos: "before",
    tokens: [
      { text: "La" },
      { text: "lettre" },
      { text: "que" },
      { text: "le" },
      { text: "facteur" },
      { text: "avait" },
      { text: "apportée" },
      { text: "est", verbe: true },
      { text: "arrivée", verbe: true },
      { text: "ce" },
      { text: "matin" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal conjugué de la phrase est « est arrivée » (verbe arriver au passé composé). Le verbe composé « avait apportée » fait partie d'une proposition relative (complément du nom « lettre ») et ne doit pas être sélectionné."
  },
  {
    text: "Tous les colis ont été reçus par les clients .",
    words: 3,
    separated: false,
    subject_pos: "before",
    tokens: [
      { text: "Tous" },
      { text: "les" },
      { text: "colis" },
      { text: "ont", verbe: true },
      { text: "été", verbe: true },
      { text: "reçus", verbe: true },
      { text: "par" },
      { text: "les" },
      { text: "clients" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal est le verbe composé passif « ont été reçus » (verbe recevoir au passé composé passif). Il faut bien sélectionner les trois mots formant le bloc verbal."
  },
  {
    text: "Ce magnifique tableau avait été créé par un artiste local .",
    words: 3,
    separated: false,
    subject_pos: "before",
    tokens: [
      { text: "Ce" },
      { text: "magnifique" },
      { text: "tableau" },
      { text: "avait", verbe: true },
      { text: "été", verbe: true },
      { text: "créé", verbe: true },
      { text: "par" },
      { text: "un" },
      { text: "artiste" },
      { text: "local" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal est le verbe composé passif « avait été créé » (verbe créer au plus-que-parfait passif). Il faut bien sélectionner les trois mots formant le bloc verbal."
  },
  {
    text: "Dans cette usine ont été fabriquées des milliers de voitures .",
    words: 3,
    separated: false,
    subject_pos: "after",
    tokens: [
      { text: "Dans" },
      { text: "cette" },
      { text: "usine" },
      { text: "ont", verbe: true },
      { text: "été", verbe: true },
      { text: "fabriquées", verbe: true },
      { text: "des" },
      { text: "milliers" },
      { text: "de" },
      { text: "voitures" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal est le verbe composé passif « ont été fabriquées » (verbe fabriquer au passé composé passif), inversé avant son sujet. Il faut sélectionner les trois mots du verbe."
  },
  {
    text: "Le nouveau pont n' a pas été construit par cette entreprise .",
    words: 3,
    separated: true,
    subject_pos: "before",
    tokens: [
      { text: "Le" },
      { text: "nouveau" },
      { text: "pont" },
      { text: "n'" },
      { text: "a", verbe: true },
      { text: "pas" },
      { text: "été", verbe: true },
      { text: "construit", verbe: true },
      { text: "par" },
      { text: "cette" },
      { text: "entreprise" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal est le verbe composé passif « a été construit » (verbe construire au passé composé passif). Les mots de la négation « n' » et « pas » ne font pas partie du verbe."
  },
  {
    text: "La verrière avait rapidement été réparée après la tempête .",
    words: 3,
    separated: true,
    subject_pos: "before",
    tokens: [
      { text: "La" },
      { text: "verrière" },
      { text: "avait", verbe: true },
      { text: "rapidement" },
      { text: "été", verbe: true },
      { text: "réparée", verbe: true },
      { text: "après" },
      { text: "la" },
      { text: "tempête" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal est le verbe composé passif « avait été réparée » (verbe réparer au plus-que-parfait passif). L'adverbe « rapidement » ne fait pas partie du verbe."
  },
  {
    text: "Le trophée a brillamment été remporté par notre école .",
    words: 3,
    separated: true,
    subject_pos: "before",
    tokens: [
      { text: "Le" },
      { text: "trophée" },
      { text: "a", verbe: true },
      { text: "brillamment" },
      { text: "été", verbe: true },
      { text: "remporté", verbe: true },
      { text: "par" },
      { text: "notre" },
      { text: "école" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le verbe principal est le verbe composé passif « a été remporté » (verbe remporter au passé composé passif). L'adverbe « brillamment » ne fait pas partie du verbe."
  }
];

window.EXERCICES_PREDICAT = [
  // --- VERB_ONLY (8 phrases) ---
  {
    text: "Depuis ce matin , Julie travaille .",
    cat: "verb_only",
    tokens: [
      { text: "Depuis" },
      { text: "ce" },
      { text: "matin", punctuation: "," },
      { text: "Julie" },
      { text: "travaille", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Julie » et le complément de phrase est « Depuis ce matin ». Le prédicat est composé du verbe seul « travaille »."
  },
  {
    text: "Sous la pluie , les piétons courent .",
    cat: "verb_only",
    tokens: [
      { text: "Sous" },
      { text: "la" },
      { text: "pluie", punctuation: "," },
      { text: "les" },
      { text: "piétons" },
      { text: "courent", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « les piétons » et le complément de phrase est « Sous la pluie ». Le prédicat est composé du verbe seul « courent »."
  },
  {
    text: "Demain matin , nous partirons .",
    cat: "verb_only",
    tokens: [
      { text: "Demain" },
      { text: "matin", punctuation: "," },
      { text: "nous" },
      { text: "partirons", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « nous » et le complément de phrase est « Demain matin ». Le prédicat est composé du verbe seul « partirons »."
  },
  {
    text: "Dans la cour , les enfants jouent .",
    cat: "verb_only",
    tokens: [
      { text: "Dans" },
      { text: "la" },
      { text: "cour", punctuation: "," },
      { text: "les" },
      { text: "enfants" },
      { text: "jouent", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « les enfants » et le complément de phrase est « Dans la cour ». Le prédicat est composé du verbe seul « jouent »."
  },
  {
    text: "Sans hésiter , le lion a bondi .",
    cat: "verb_only",
    tokens: [
      { text: "Sans" },
      { text: "hésiter", punctuation: "," },
      { text: "le" },
      { text: "lion" },
      { text: "a", predicat: true },
      { text: "bondi", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « le lion » et le complément de phrase est « Sans hésiter ». Le prédicat est le verbe composé « a bondi »."
  },
  {
    text: "Dans le nid , les oisillons chantaient .",
    cat: "verb_only",
    tokens: [
      { text: "Dans" },
      { text: "le" },
      { text: "nid", punctuation: "," },
      { text: "les" },
      { text: "oisillons" },
      { text: "chantaient", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « les oisillons » et le complément de phrase est « Dans le nid ». Le prédicat est composé du verbe seul « chantaient »."
  },
  {
    text: "Depuis deux jours , la neige est tombée .",
    cat: "verb_only",
    tokens: [
      { text: "Depuis" },
      { text: "deux" },
      { text: "jours", punctuation: "," },
      { text: "la" },
      { text: "neige" },
      { text: "est", predicat: true },
      { text: "tombée", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « la neige » et le complément de phrase est « Depuis deux jours ». Le prédicat est le verbe composé « est tombée »."
  },
  {
    text: "Malgré le froid , le randonneur marchait .",
    cat: "verb_only",
    tokens: [
      { text: "Malgré" },
      { text: "le" },
      { text: "froid", punctuation: "," },
      { text: "le" },
      { text: "randonneur" },
      { text: "marchait", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « le randonneur » et le complément de phrase est « Malgré le froid ». Le prédicat est composé du verbe seul « marchait »."
  },

  // --- CDV (8 phrases) ---
  {
    text: "Chaque matin , mon frère lit le journal .",
    cat: "cdv",
    tokens: [
      { text: "Chaque" },
      { text: "matin", punctuation: "," },
      { text: "mon" },
      { text: "frère" },
      { text: "lit", predicat: true },
      { text: "le", predicat: true },
      { text: "journal", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « mon frère » et le complément de phrase est « Chaque matin ». Le prédicat est « lit le journal » (verbe + son complément direct du verbe CDV)."
  },
  {
    text: "Dans la cuisine , maman prépare une tarte .",
    cat: "cdv",
    tokens: [
      { text: "Dans" },
      { text: "la" },
      { text: "cuisine", punctuation: "," },
      { text: "maman" },
      { text: "prépare", predicat: true },
      { text: "une", predicat: true },
      { text: "tarte", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « maman » et le complément de phrase est « Dans la cuisine ». Le prédicat est « prépare une tarte » (verbe + son complément direct du verbe CDV)."
  },
  {
    text: "Hier soir , les élèves ont fini leurs devoirs .",
    cat: "cdv",
    tokens: [
      { text: "Hier" },
      { text: "soir", punctuation: "," },
      { text: "les" },
      { text: "élèves" },
      { text: "ont", predicat: true },
      { text: "fini", predicat: true },
      { text: "leurs", predicat: true },
      { text: "devoirs", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « les élèves » et le complément de phrase est « Hier soir ». Le prédicat est « ont fini leurs devoirs » (verbe composé + son complément direct du verbe CDV)."
  },
  {
    text: "Sur la table , le chat mange sa pâtée .",
    cat: "cdv",
    tokens: [
      { text: "Sur" },
      { text: "la" },
      { text: "table", punctuation: "," },
      { text: "le" },
      { text: "chat" },
      { text: "mange", predicat: true },
      { text: "sa", predicat: true },
      { text: "pâtée", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « le chat » et le complément de phrase est « Sur la table ». Le prédicat est « mange sa pâtée » (verbe + son complément direct du verbe CDV)."
  },
  {
    text: "Avec soin , l' artist dessine un portrait .",
    cat: "cdv",
    tokens: [
      { text: "Avec" },
      { text: "soin", punctuation: "," },
      { text: "l'" },
      { text: "artist" },
      { text: "dessine", predicat: true },
      { text: "un", predicat: true },
      { text: "portrait", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « l'artiste » et le complément de phrase est « Avec soin ». Le prédicat est « dessine un portrait » (verbe + son complément direct du verbe CDV)."
  },
  {
    text: "Dans le garage , mon père répare la voiture .",
    cat: "cdv",
    tokens: [
      { text: "Dans" },
      { text: "le" },
      { text: "garage", punctuation: "," },
      { text: "mon" },
      { text: "père" },
      { text: "répare", predicat: true },
      { text: "la", predicat: true },
      { text: "voiture", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « mon père » et le complément de phrase est « Dans le garage ». Le prédicat est « répare la voiture » (verbe + son complément direct du verbe CDV)."
  },
  {
    text: "Depuis midi , la pluie bat les vitres .",
    cat: "cdv",
    tokens: [
      { text: "Depuis" },
      { text: "midi", punctuation: "," },
      { text: "la" },
      { text: "pluie" },
      { text: "bat", predicat: true },
      { text: "les", predicat: true },
      { text: "vitres", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « la pluie » et le complément de phrase est « Depuis midi ». Le prédicat est « bat les vitres » (verbe + son complément direct du verbe CDV)."
  },
  {
    text: "Pendant les vacances , Julie a visité un musée .",
    cat: "cdv",
    tokens: [
      { text: "Pendant" },
      { text: "les" },
      { text: "vacances", punctuation: "," },
      { text: "Julie" },
      { text: "a", predicat: true },
      { text: "visité", predicat: true },
      { text: "un", predicat: true },
      { text: "musée", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Julie » et le complément de phrase est « Pendant les vacances ». Le prédicat est « a visité un musée » (verbe composé + son complément direct du verbe CDV)."
  },

  // --- CIV (8 phrases) ---
  {
    text: "Depuis une heure , le bébé sourit à sa mère .",
    cat: "civ",
    tokens: [
      { text: "Depuis" },
      { text: "une" },
      { text: "heure", punctuation: "," },
      { text: "le" },
      { text: "bébé" },
      { text: "sourit", predicat: true },
      { text: "à", predicat: true },
      { text: "sa", predicat: true },
      { text: "mère", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « le bébé » et le complément de phrase est « Depuis une heure ». Le prédicat est « sourit à sa mère » (verbe + son complément indirect du verbe CIV)."
  },
  {
    text: "Chaque dimanche , les enfants téléphonent à leurs grands-parents .",
    cat: "civ",
    tokens: [
      { text: "Chaque" },
      { text: "dimanche", punctuation: "," },
      { text: "les" },
      { text: "enfants" },
      { text: "téléphonent", predicat: true },
      { text: "à", predicat: true },
      { text: "leurs", predicat: true },
      { text: "grands-parents", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « les enfants » et le complément de phrase est « Chaque dimanche ». Le prédicat est « téléphonent à leurs grands-parents » (verbe + son complément indirect du verbe CIV)."
  },
  {
    text: "À la récréation , Paul parle à son ami .",
    cat: "civ",
    tokens: [
      { text: "À" },
      { text: "la" },
      { text: "récréation", punctuation: "," },
      { text: "Paul" },
      { text: "parle", predicat: true },
      { text: "à", predicat: true },
      { text: "son", predicat: true },
      { text: "ami", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Paul » et le complément de phrase est « À la récréation ». Le prédicat est « parle à son ami » (verbe + son complément indirect du verbe CIV)."
  },
  {
    text: "Dans sa lettre , elle pense à ses vacances .",
    cat: "civ",
    tokens: [
      { text: "Dans" },
      { text: "sa" },
      { text: "lettre", punctuation: "," },
      { text: "elle" },
      { text: "pense", predicat: true },
      { text: "à", predicat: true },
      { text: "ses", predicat: true },
      { text: "vacances", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « elle » et le complément de phrase est « Dans sa lettre ». Le prédicat est « pense à ses vacances » (verbe + son complément indirect du verbe CIV)."
  },
  {
    text: "Pendant le cours , l' élève répond aux questions .",
    cat: "civ",
    tokens: [
      { text: "Pendant" },
      { text: "le" },
      { text: "cours", punctuation: "," },
      { text: "l'" },
      { text: "élève" },
      { text: "répond", predicat: true },
      { text: "aux", predicat: true },
      { text: "questions", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « l'élève » et le complément de phrase est « Pendant le cours ». Le prédicat est « répond aux questions » (verbe + son complément indirect du verbe CIV)."
  },
  {
    text: "Malgré les conseils , le garçon désobéit à ses parents .",
    cat: "civ",
    tokens: [
      { text: "Malgré" },
      { text: "les" },
      { text: "conseils", punctuation: "," },
      { text: "le" },
      { text: "garçon" },
      { text: "désobéit", predicat: true },
      { text: "à", predicat: true },
      { text: "ses", predicat: true },
      { text: "parents", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « le garçon » et le complément de phrase est « Malgré les conseils ». Le prédicat est « désobéit à ses parents » (verbe + son complément indirect du verbe CIV)."
  },
  {
    text: "À la plage , les touristes nuisent aux dunes .",
    cat: "civ",
    tokens: [
      { text: "À" },
      { text: "la" },
      { text: "plage", punctuation: "," },
      { text: "les" },
      { text: "touristes" },
      { text: "nuisent", predicat: true },
      { text: "aux", predicat: true },
      { text: "dunes", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « les touristes » et le complément de phrase est « À la plage ». Le prédicat est « nuisent aux dunes » (verbe + son complément indirect du verbe CIV)."
  },
  {
    text: "Depuis son départ , Marc manque à ses collègues .",
    cat: "civ",
    tokens: [
      { text: "Depuis" },
      { text: "son" },
      { text: "départ", punctuation: "," },
      { text: "Marc" },
      { text: "manque", predicat: true },
      { text: "à", predicat: true },
      { text: "ses", predicat: true },
      { text: "collègues", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Marc » et le complément de phrase est « Depuis son départ ». Le prédicat est « manque à ses collègues » (verbe + son complément indirect du verbe CIV)."
  },

  // --- CDV_CIV (8 phrases) ---
  {
    text: "Le matin , le maître distribue les cahiers aux élèves .",
    cat: "cdv_civ",
    tokens: [
      { text: "Le" },
      { text: "matin", punctuation: "," },
      { text: "le" },
      { text: "maître" },
      { text: "distribue", predicat: true },
      { text: "les", predicat: true },
      { text: "cahiers", predicat: true },
      { text: "aux", predicat: true },
      { text: "élèves", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « le maître » et le complément de phrase est « Le matin ». Le prédicat est « distribue les cahiers aux élèves » (verbe + CDV + CIV)."
  },
  {
    text: "Dans la boutique , la vendeuse propose une écharpe au client .",
    cat: "cdv_civ",
    tokens: [
      { text: "Dans" },
      { text: "la" },
      { text: "boutique", punctuation: "," },
      { text: "la" },
      { text: "vendeuse" },
      { text: "propose", predicat: true },
      { text: "une", predicat: true },
      { text: "écharpe", predicat: true },
      { text: "au", predicat: true },
      { text: "client", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « la vendeuse » et le complément de phrase est « Dans la boutique ». Le prédicat est « propose une écharpe au client » (verbe + CDV + CIV)."
  },
  {
    text: "Pendant la fête , Jules offre des fleurs à sa maman .",
    cat: "cdv_civ",
    tokens: [
      { text: "Pendant" },
      { text: "la" },
      { text: "fête", punctuation: "," },
      { text: "Jules" },
      { text: "offre", predicat: true },
      { text: "des", predicat: true },
      { text: "fleurs", predicat: true },
      { text: "à", predicat: true },
      { text: "sa", predicat: true },
      { text: "maman", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Jules » et le complément de phrase est « Pendant la fête ». Le prédicat est « offre des fleurs à sa maman » (verbe + CDV + CIV)."
  },
  {
    text: "Sur scène , le magicien montre un tour au public .",
    cat: "cdv_civ",
    tokens: [
      { text: "Sur" },
      { text: "scène", punctuation: "," },
      { text: "le" },
      { text: "magicien" },
      { text: "montre", predicat: true },
      { text: "un", predicat: true },
      { text: "tour", predicat: true },
      { text: "au", predicat: true },
      { text: "public", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « le magicien » et le complément de phrase est « Sur scène ». Le prédicat est « montre un tour au public » (verbe + CDV + CIV)."
  },
  {
    text: "Devant le guichet , le voyageur demande un billet à l' employé .",
    cat: "cdv_civ",
    tokens: [
      { text: "Devant" },
      { text: "le" },
      { text: "guichet", punctuation: "," },
      { text: "le" },
      { text: "voyageur" },
      { text: "demande", predicat: true },
      { text: "un", predicat: true },
      { text: "billet", predicat: true },
      { text: "à", predicat: true },
      { text: "l'", predicat: true },
      { text: "employé", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « le voyageur » et le complément de phrase est « Devant le guichet ». Le prédicat est « demande un billet à l'employé » (verbe + CDV + CIV)."
  },
  {
    text: "Hier après-midi , Julie a raconté une histoire à son frère .",
    cat: "cdv_civ",
    tokens: [
      { text: "Hier" },
      { text: "après-midi", punctuation: "," },
      { text: "Julie" },
      { text: "a", predicat: true },
      { text: "raconté", predicat: true },
      { text: "une", predicat: true },
      { text: "histoire", predicat: true },
      { text: "à", predicat: true },
      { text: "son", predicat: true },
      { text: "frère", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Julie » et le complément de phrase est « Hier après-midi ». Le prédicat est « a raconté une histoire à son frère » (verbe composé + CDV + CIV)."
  },
  {
    text: "Avec gentillesse , le garçon prête son vélo à son cousin .",
    cat: "cdv_civ",
    tokens: [
      { text: "Avec" },
      { text: "gentillesse", punctuation: "," },
      { text: "le" },
      { text: "garçon" },
      { text: "prête", predicat: true },
      { text: "son", predicat: true },
      { text: "vélo", predicat: true },
      { text: "à", predicat: true },
      { text: "son", predicat: true },
      { text: "cousin", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « le garçon » et le complément de phrase est « Avec gentillesse ». Le prédicat est « prête son vélo à son cousin » (verbe + CDV + CIV)."
  },
  {
    text: "Au tableau , le professeur explique la règle aux enfants .",
    cat: "cdv_civ",
    tokens: [
      { text: "Au" },
      { text: "tableau", punctuation: "," },
      { text: "le" },
      { text: "professeur" },
      { text: "explique", predicat: true },
      { text: "la", predicat: true },
      { text: "règle", predicat: true },
      { text: "aux", predicat: true },
      { text: "enfants", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « le professeur » et le complément de phrase est « Au tableau ». Le prédicat est « explique la règle aux enfants » (verbe + CDV + CIV)."
  },

  // --- ATTRIBUT (8 phrases) ---
  {
    text: "Depuis hier , ce chat semble malade .",
    cat: "attribut",
    tokens: [
      { text: "Depuis" },
      { text: "hier", punctuation: "," },
      { text: "ce" },
      { text: "chat" },
      { text: "semble", predicat: true },
      { text: "malade", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « ce chat » et le complément de phrase est « Depuis hier ». Le prédicat est « semble malade » (verbe d'état + attribut du sujet)."
  },
  {
    text: "Sous le soleil , le sable devient chaud .",
    cat: "attribut",
    tokens: [
      { text: "Sous" },
      { text: "le" },
      { text: "soleil", punctuation: "," },
      { text: "le" },
      { text: "sable" },
      { text: "devient", predicat: true },
      { text: "chaud", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « le sable » et le complément de phrase est « Sous le soleil ». Le prédicat est « devient chaud » (verbe d'état + attribut du sujet)."
  },
  {
    text: "Dans ce costume , l' acteur paraît immense .",
    cat: "attribut",
    tokens: [
      { text: "Dans" },
      { text: "ce" },
      { text: "costume", punctuation: "," },
      { text: "l'" },
      { text: "acteur" },
      { text: "paraît", predicat: true },
      { text: "immense", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « l'acteur » et le complément de phrase est « Dans ce costume ». Le prédicat est « paraît immense » (verbe d'état + attribut du sujet)."
  },
  {
    text: "Malgré l' âge , ce vieux chêne reste solide .",
    cat: "attribut",
    tokens: [
      { text: "Malgré" },
      { text: "l'" },
      { text: "âge", punctuation: "," },
      { text: "ce" },
      { text: "vieux" },
      { text: "chêne" },
      { text: "reste", predicat: true },
      { text: "solide", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « ce vieux chêne » et le complément de phrase est « Malgré l'âge ». Le prédicat est « reste solide » (verbe d'état + attribut du sujet)."
  },
  {
    text: "Après l' effort , le coureur est épuisé .",
    cat: "attribut",
    tokens: [
      { text: "Après" },
      { text: "l'" },
      { text: "effort", punctuation: "," },
      { text: "le" },
      { text: "coureur" },
      { text: "est", predicat: true },
      { text: "épuisé", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « le coureur » et le complément de phrase est « Après l'effort ». Le prédicat est « est épuisé » (verbe d'état + attribut du sujet)."
  },
  {
    text: "Dans la vitrine , les bijoux semblent précieux .",
    cat: "attribut",
    tokens: [
      { text: "Dans" },
      { text: "la" },
      { text: "vitrine", punctuation: "," },
      { text: "les" },
      { text: "bijoux" },
      { text: "semblent", predicat: true },
      { text: "précieux", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « les bijoux » et le complément de phrase est « Dans la vitrine ». Le prédicat est « semblent précieux » (verbe d'état + attribut du sujet)."
  },
  {
    text: "À la fin du match , les joueurs étaient heureux .",
    cat: "attribut",
    tokens: [
      { text: "À" },
      { text: "la" },
      { text: "fin" },
      { text: "du" },
      { text: "match", punctuation: "," },
      { text: "les" },
      { text: "joueurs" },
      { text: "étaient", predicat: true },
      { text: "heureux", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « les joueurs » et le complément de phrase est « À la fin du match ». Le prédicat est « étaient heureux » (verbe d'état + attribut du sujet)."
  },
  {
    text: "Malgré la tempête , la mer demeure calme .",
    cat: "attribut",
    tokens: [
      { text: "Malgré" },
      { text: "la" },
      { text: "tempête", punctuation: "," },
      { text: "la" },
      { text: "mer" },
      { text: "demeure", predicat: true },
      { text: "calme", predicat: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « la mer » et le complément de phrase est « Malgré la tempête ». Le prédicat est « demeure calme » (verbe d'état + attribut du sujet)."
  }
];

window.EXERCICES_CDV_CIV = [
  // --- ONLY_CDV (8 phrases) ---
  {
    text: "Le jardinier arrose les fleurs .",
    cat: "only_cdv",
    tokens: [
      { text: "Le" },
      { text: "jardinier" },
      { text: "arrose" },
      { text: "les", cdv: true },
      { text: "fleurs", cdv: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Le jardinier » et le verbe est « arrose ». Le groupe nominal « les fleurs » est le Complément Direct du Verbe (CDV) car il répond à la question : Le jardinier arrose quoi ?"
  },
  {
    text: "Le boulanger prépare le pain .",
    cat: "only_cdv",
    tokens: [
      { text: "Le" },
      { text: "boulanger" },
      { text: "prépare" },
      { text: "le", cdv: true },
      { text: "pain", cdv: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Le boulanger » et le verbe est « prépare ». Le groupe nominal « le pain » est le Complément Direct du Verbe (CDV) car il répond à la question : Le boulanger prépare quoi ?"
  },
  {
    text: "Les enfants écoutent une histoire .",
    cat: "only_cdv",
    tokens: [
      { text: "Les" },
      { text: "enfants" },
      { text: "écoutent" },
      { text: "une", cdv: true },
      { text: "histoire", cdv: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Les enfants » et le verbe est « écoutent ». Le groupe nominal « une histoire » est le Complément Direct du Verbe (CDV) car il répond à la question : Les enfants écoutent quoi ?"
  },
  {
    text: "Le détective cherche la vérité .",
    cat: "only_cdv",
    tokens: [
      { text: "Le" },
      { text: "détective" },
      { text: "cherche" },
      { text: "la", cdv: true },
      { text: "vérité", cdv: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Le détective » et le verbe est « cherche ». Le groupe nominal « la vérité » est le Complément Direct du Verbe (CDV) car il répond à la question : Le détective cherche quoi ?"
  },
  {
    text: "Le vent secoue les branches .",
    cat: "only_cdv",
    tokens: [
      { text: "Le" },
      { text: "vent" },
      { text: "secoue" },
      { text: "les", cdv: true },
      { text: "branches", cdv: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Le vent » et le verbe est « secoue ». Le groupe nominal « les branches » est le Complément Direct du Verbe (CDV) car il répond à la question : Le vent secoue quoi ?"
  },
  {
    text: "L' élève écrit un poème .",
    cat: "only_cdv",
    tokens: [
      { text: "L'" },
      { text: "élève" },
      { text: "écrit" },
      { text: "un", cdv: true },
      { text: "poème", cdv: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « L'élève » et le verbe est « écrit ». Le groupe nominal « un poème » est le Complément Direct du Verbe (CDV) car il répond à la question : L'élève écrit quoi ?"
  },
  {
    text: "Le photographe prend une photo .",
    cat: "only_cdv",
    tokens: [
      { text: "Le" },
      { text: "photographe" },
      { text: "prend" },
      { text: "une", cdv: true },
      { text: "photo", cdv: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Le photographe » et le verbe est « prend ». Le groupe nominal « une photo » est le Complément Direct du Verbe (CDV) car il répond à la question : Le photographe prend quoi ?"
  },
  {
    text: "Le garagiste répare le moteur .",
    cat: "only_cdv",
    tokens: [
      { text: "Le" },
      { text: "garagiste" },
      { text: "répare" },
      { text: "le", cdv: true },
      { text: "moteur", cdv: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Le garagiste » et le verbe est « répare ». Le groupe nominal « le moteur » est le Complément Direct du Verbe (CDV) car il répond à la question : Le garagiste répare quoi ?"
  },

  // --- ONLY_CIV (8 phrases) ---
  {
    text: "Le patient obéit au médecin .",
    cat: "only_civ",
    tokens: [
      { text: "Le" },
      { text: "patient" },
      { text: "obéit" },
      { text: "au", civ: true },
      { text: "médecin", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Le patient » et le verbe est « obéit ». Le groupe prépositionnel « au médecin » est le Complément Indirect du Verbe (CIV) car il répond à la question : Le patient obéit à qui ?"
  },
  {
    text: "Julie téléphone à sa tante .",
    cat: "only_civ",
    tokens: [
      { text: "Julie" },
      { text: "téléphone" },
      { text: "à", civ: true },
      { text: "sa", civ: true },
      { text: "tante", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Julie » et le verbe est « téléphone ». Le groupe prépositionnel « à sa tante » est le Complément Indirect du Verbe (CIV) car il répond à la question : Julie téléphone à qui ?"
  },
  {
    text: "Le garçon parle à son voisin .",
    cat: "only_civ",
    tokens: [
      { text: "Le" },
      { text: "garçon" },
      { text: "parle" },
      { text: "à", civ: true },
      { text: "son", civ: true },
      { text: "voisin", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Le garçon » et le verbe est « parle ». Le groupe prépositionnel « à son voisin » est le Complément Indirect du Verbe (CIV) car il répond à la question : Le garçon parle à qui ?"
  },
  {
    text: "Marc pense à son avenir .",
    cat: "only_civ",
    tokens: [
      { text: "Marc" },
      { text: "pense" },
      { text: "à", civ: true },
      { text: "son", civ: true },
      { text: "avenir", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Marc » et le verbe est « pense ». Le groupe prépositionnel « à son avenir » est le Complément Indirect du Verbe (CIV) car il répond à la question : Marc pense à quoi ?"
  },
  {
    text: "Le fils ressemble à son père .",
    cat: "only_civ",
    tokens: [
      { text: "Le" },
      { text: "fils" },
      { text: "ressemble" },
      { text: "à", civ: true },
      { text: "son", civ: true },
      { text: "père", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Le fils » et le verbe est « ressemble ». Le groupe prépositionnel « à son père » est le Complément Indirect du Verbe (CIV) car il répond à la question : Le fils ressemble à qui ?"
  },
  {
    text: "L' enfant croit au Père Noël .",
    cat: "only_civ",
    tokens: [
      { text: "L'" },
      { text: "enfant" },
      { text: "croit" },
      { text: "au", civ: true },
      { text: "Père", civ: true },
      { text: "Noël", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « L'enfant » et le verbe est « croit ». Le groupe prépositionnel « au Père Noël » est le Complément Indirect du Verbe (CIV) car il répond à la question : L'enfant croit en qui ?"
  },
  {
    text: "Les citoyens croient en la justice .",
    cat: "only_civ",
    tokens: [
      { text: "Les" },
      { text: "citoyens" },
      { text: "croient" },
      { text: "en", civ: true },
      { text: "la", civ: true },
      { text: "justice", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Les citoyens » et le verbe est « croient ». Le groupe prépositionnel « en la justice » est le Complément Indirect du Verbe (CIV) car il répond à la question : Les citoyens croient en quoi ?"
  },
  {
    text: "Ce projet plaît aux enseignants .",
    cat: "only_civ",
    tokens: [
      { text: "Ce" },
      { text: "projet" },
      { text: "plaît" },
      { text: "aux", civ: true },
      { text: "enseignants", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Ce projet » et le verbe est « plaît ». Le groupe prépositionnel « aux enseignants » est le Complément Indirect du Verbe (CIV) car il répond à la question : Ce projet plaît à qui ?"
  },

  // --- BOTH (8 phrases) ---
  {
    text: "Le maître donne un livre à l' élève .",
    cat: "both",
    tokens: [
      { text: "Le" },
      { text: "maître" },
      { text: "donne" },
      { text: "un", cdv: true },
      { text: "livre", cdv: true },
      { text: "à", civ: true },
      { text: "l'", civ: true },
      { text: "élève", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Le maître » et le verbe est « donne ». « un livre » est le CDV (donne quoi ?) et « à l'élève » est le CIV (donne à qui ?)."
  },
  {
    text: "Jules offre un cadeau à sa sœur .",
    cat: "both",
    tokens: [
      { text: "Jules" },
      { text: "offre" },
      { text: "un", cdv: true },
      { text: "cadeau", cdv: true },
      { text: "à", civ: true },
      { text: "sa", civ: true },
      { text: "sœur", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Jules » et le verbe est « offre ». « un cadeau » est le CDV (offre quoi ?) et « à sa sœur » est le CIV (offre à qui ?)."
  },
  {
    text: "La secrétaire envoie un courriel au directeur .",
    cat: "both",
    tokens: [
      { text: "La" },
      { text: "secrétaire" },
      { text: "envoie" },
      { text: "un", cdv: true },
      { text: "courriel", cdv: true },
      { text: "au", civ: true },
      { text: "directeur", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « La secrétaire » et le verbe est « envoie ». « un courriel » est le CDV (envoie quoi ?) et « au directeur » est le CIV (envoie à qui ?)."
  },
  {
    text: "Le guide montre le chemin aux randonneurs .",
    cat: "both",
    tokens: [
      { text: "Le" },
      { text: "guide" },
      { text: "montre" },
      { text: "le", cdv: true },
      { text: "chemin", cdv: true },
      { text: "aux", civ: true },
      { text: "randonneurs", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Le guide » et le verbe est « montre ». « le chemin » est le CDV (montre quoi ?) et « aux randonneurs » est le CIV (montre à qui ?)."
  },
  {
    text: "Le grand-père raconte une blague à ses petits-enfants .",
    cat: "both",
    tokens: [
      { text: "Le" },
      { text: "grand-père" },
      { text: "raconte" },
      { text: "une", cdv: true },
      { text: "blague", cdv: true },
      { text: "à", civ: true },
      { text: "ses", civ: true },
      { text: "petits-enfants", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Le grand-père » et le verbe est « raconte ». « une blague » est le CDV (raconte quoi ?) et « à ses petits-enfants » est le CIV (raconte à qui ?)."
  },
  {
    text: "Le cuisinier sert le repas aux invités .",
    cat: "both",
    tokens: [
      { text: "Le" },
      { text: "cuisinier" },
      { text: "sert" },
      { text: "le", cdv: true },
      { text: "repas", cdv: true },
      { text: "aux", civ: true },
      { text: "invités", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Le cuisinier » et le verbe est « sert ». « le repas » est le CDV (sert quoi ?) et « aux invités » est le CIV (sert à qui ?)."
  },
  {
    text: "La maman lit un conte à son fils .",
    cat: "both",
    tokens: [
      { text: "La" },
      { text: "maman" },
      { text: "lit" },
      { text: "un", cdv: true },
      { text: "conte", cdv: true },
      { text: "à", civ: true },
      { text: "son", civ: true },
      { text: "fils", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « La maman » et le verbe est « lit ». « un conte » est le CDV (lit quoi ?) et « à son fils » est le CIV (lit à qui ?)."
  },
  {
    text: "Le vendeur conseille un ordinateur au client .",
    cat: "both",
    tokens: [
      { text: "Le" },
      { text: "vendeur" },
      { text: "conseille" },
      { text: "un", cdv: true },
      { text: "ordinateur", cdv: true },
      { text: "au", civ: true },
      { text: "client", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le sujet est « Le vendeur » et le verbe est « conseille ». « un ordinateur » est le CDV (conseille quoi ?) et « au client » est le CIV (conseille à qui ?)."
  },

  // --- PRONOMINALIZED (8 phrases) ---
  {
    text: "Le jardinier les arrose .",
    cat: "pronominalized",
    tokens: [
      { text: "Le" },
      { text: "jardinier" },
      { text: "les", cdv: true },
      { text: "arrose" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le pronom « les » remplace un groupe nominal CDV (il répond à la question : Le jardinier arrose qui ? -> les)."
  },
  {
    text: "Le boulanger le prépare .",
    cat: "pronominalized",
    tokens: [
      { text: "Le" },
      { text: "boulanger" },
      { text: "le", cdv: true },
      { text: "prépare" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le pronom « le » remplace un groupe nominal CDV (il répond à la question : Le boulanger prépare quoi ? -> le)."
  },
  {
    text: "Julie lui téléphone .",
    cat: "pronominalized",
    tokens: [
      { text: "Julie" },
      { text: "lui", civ: true },
      { text: "téléphone" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le pronom « lui » remplace un groupe prépositionnel CIV (il répond à la question : Julie téléphone à qui ? -> lui)."
  },
  {
    text: "Le fils lui ressemble .",
    cat: "pronominalized",
    tokens: [
      { text: "Le" },
      { text: "fils" },
      { text: "lui", civ: true },
      { text: "ressemble" },
      { text: ".", punctuation: true }
    ],
    explanation: "Le pronom « lui » remplace un groupe prépositionnel CIV (il répond à la question : Le fils ressemble à qui ? -> lui)."
  },
  {
    text: "Le maître le lui donne .",
    cat: "pronominalized",
    tokens: [
      { text: "Le" },
      { text: "maître" },
      { text: "le", cdv: true },
      { text: "lui", civ: true },
      { text: "donne" },
      { text: ".", punctuation: true }
    ],
    explanation: "« le » est le pronom CDV (donne quoi ? -> le) et « lui » est le pronom CIV (donne à qui ? -> lui)."
  },
  {
    text: "Jules le leur offre .",
    cat: "pronominalized",
    tokens: [
      { text: "Jules" },
      { text: "le", cdv: true },
      { text: "leur", civ: true },
      { text: "offre" },
      { text: ".", punctuation: true }
    ],
    explanation: "« le » est le pronom CDV (offre quoi ? -> le) et « leur » est le pronom CIV (offre à qui ? -> leur)."
  },
  {
    text: "La secrétaire le lui envoie .",
    cat: "pronominalized",
    tokens: [
      { text: "La" },
      { text: "secrétaire" },
      { text: "le", cdv: true },
      { text: "lui", civ: true },
      { text: "envoie" },
      { text: ".", punctuation: true }
    ],
    explanation: "« le » est le pronom CDV (envoie quoi ? -> le) et « lui » est le pronom CIV (envoie à qui ? -> lui)."
  },
  {
    text: "Le guide le leur montre .",
    cat: "pronominalized",
    tokens: [
      { text: "Le" },
      { text: "guide" },
      { text: "le", cdv: true },
      { text: "leur", civ: true },
      { text: "montre" },
      { text: ".", punctuation: true }
    ],
    explanation: "« le » est le pronom CDV (montre quoi ? -> le) et « leur » est le pronom CIV (montre à qui ? -> leur)."
  },

  // --- PRONOM_CDV_COMPLETE_CIV (8 phrases) ---
  {
    text: "Le maître le donne à l' élève .",
    cat: "pronom_cdv_complete_civ",
    tokens: [
      { text: "Le" },
      { text: "maître" },
      { text: "le", cdv: true },
      { text: "donne" },
      { text: "à", civ: true },
      { text: "l'", civ: true },
      { text: "élève", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le pronom « le » est le CDV (donne quoi ? -> le) tandis que le groupe prépositionnel complet « à l'élève » est le CIV (donne à qui ?)."
  },
  {
    text: "Jules l' offre à sa sœur .",
    cat: "pronom_cdv_complete_civ",
    tokens: [
      { text: "Jules" },
      { text: "l'", cdv: true },
      { text: "offre" },
      { text: "à", civ: true },
      { text: "sa", civ: true },
      { text: "sœur", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le pronom « l' » est le CDV (offre quoi ? -> l') tandis que le groupe prépositionnel complet « à sa sœur » est le CIV (offre à qui ?)."
  },
  {
    text: "La secrétaire l' envoie au directeur .",
    cat: "pronom_cdv_complete_civ",
    tokens: [
      { text: "La" },
      { text: "secrétaire" },
      { text: "l'", cdv: true },
      { text: "envoie" },
      { text: "au", civ: true },
      { text: "directeur", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le pronom « l' » est le CDV (envoie quoi ? -> l') tandis que le groupe prépositionnel complet « au directeur » est le CIV (envoie à qui ?)."
  },
  {
    text: "Le guide le montre aux randonneurs .",
    cat: "pronom_cdv_complete_civ",
    tokens: [
      { text: "Le" },
      { text: "guide" },
      { text: "le", cdv: true },
      { text: "montre" },
      { text: "aux", civ: true },
      { text: "randonneurs", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le pronom « le » est le CDV (montre quoi ? -> le) tandis que le groupe prépositionnel complet « aux randonneurs » est le CIV (montre à qui ?)."
  },
  {
    text: "Le cuisinier le sert aux invités .",
    cat: "pronom_cdv_complete_civ",
    tokens: [
      { text: "Le" },
      { text: "cuisinier" },
      { text: "le", cdv: true },
      { text: "sert" },
      { text: "aux", civ: true },
      { text: "invités", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le pronom « le » est le CDV (sert quoi ? -> le) tandis que le groupe prépositionnel complet « aux invités » est le CIV (sert à qui ?)."
  },
  {
    text: "La maman le lit à son fils .",
    cat: "pronom_cdv_complete_civ",
    tokens: [
      { text: "La" },
      { text: "maman" },
      { text: "le", cdv: true },
      { text: "lit" },
      { text: "à", civ: true },
      { text: "son", civ: true },
      { text: "fils", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le pronom « le » est le CDV (lit quoi ? -> le) tandis que le groupe prépositionnel complet « à son fils » est le CIV (lit à qui ?)."
  },
  {
    text: "Le vendeur le conseille au client .",
    cat: "pronom_cdv_complete_civ",
    tokens: [
      { text: "Le" },
      { text: "vendeur" },
      { text: "le", cdv: true },
      { text: "conseille" },
      { text: "au", civ: true },
      { text: "client", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le pronom « le » est le CDV (conseille quoi ? -> le) tandis que le groupe prépositionnel complet « au client » est le CIV (conseille à qui ?)."
  },
  {
    text: "Le professeur les explique aux élèves .",
    cat: "pronom_cdv_complete_civ",
    tokens: [
      { text: "Le" },
      { text: "professeur" },
      { text: "les", cdv: true },
      { text: "explique" },
      { text: "aux", civ: true },
      { text: "élèves", civ: true },
      { text: ".", punctuation: true }
    ],
    explanation: "Le pronom « les » est le CDV (explique quoi ? -> les) tandis que le groupe prépositionnel complet « aux élèves » est le CIV (explique à qui ?)."
  }
];

window.EXERCICES_CC = [
  // --- 1. LIEU (10 phrases) ---
  {
    text: "Le petit chat noir dort paisiblement sur le fauteuil du salon .",
    cat: "lieu",
    tokens: [
      { text: "Le" },
      { text: "petit" },
      { text: "chat" },
      { text: "noir" },
      { text: "dort" },
      { text: "paisiblement", cc: "maniere" },
      { text: "sur", cc: "lieu" },
      { text: "le", cc: "lieu" },
      { text: "fauteuil", cc: "lieu" },
      { text: "du", cc: "lieu" },
      { text: "salon", cc: "lieu" },
      { text: ".", punctuation: true }
    ],
    explanation: "« sur le fauteuil du salon » est un complément circonstanciel de lieu (dort où ?). « paisiblement » est un complément circonstanciel de manière (dort comment ?)."
  },
  {
    text: "Nous irons pique-niquer près de la jolie cascade demain .",
    cat: "lieu",
    tokens: [
      { text: "Nous" },
      { text: "irons" },
      { text: "pique-niquer" },
      { text: "près", cc: "lieu" },
      { text: "de", cc: "lieu" },
      { text: "la", cc: "lieu" },
      { text: "jolie", cc: "lieu" },
      { text: "cascade", cc: "lieu" },
      { text: "demain", cc: "temps" },
      { text: ".", punctuation: true }
    ],
    explanation: "« près de la jolie cascade » est le CC de lieu (pique-niquer où ?). « demain » est le CC de temps (irons quand ?)."
  },
  {
    text: "Les enfants jouent joyeusement dans la cour de récréation .",
    cat: "lieu",
    tokens: [
      { text: "Les" },
      { text: "enfants" },
      { text: "jouent" },
      { text: "joyeusement", cc: "maniere" },
      { text: "dans", cc: "lieu" },
      { text: "la", cc: "lieu" },
      { text: "cour", cc: "lieu" },
      { text: "de", cc: "lieu" },
      { text: "récréation", cc: "lieu" },
      { text: ".", punctuation: true }
    ],
    explanation: "« dans la cour de récréation » est le CC de lieu (jouent où ?). « joyeusement » est le CC de manière (jouent comment ?)."
  },
  {
    text: "Dans la forêt profonde , les oiseaux chantent le matin .",
    cat: "lieu",
    tokens: [
      { text: "Dans", cc: "lieu" },
      { text: "la", cc: "lieu" },
      { text: "forêt", cc: "lieu" },
      { text: "profonde", cc: "lieu", punctuation: "," },
      { text: "les" },
      { text: "oiseaux" },
      { text: "chantent" },
      { text: "le", cc: "temps" },
      { text: "matin", cc: "temps" },
      { text: ".", punctuation: true }
    ],
    explanation: "« Dans la forêt profonde » est le CC de lieu (chantent où ?). « le matin » est le CC de temps (chantent quand ?)."
  },
  {
    text: "Mon père range ses outils de jardinage dans le grand abri en bois .",
    cat: "lieu",
    tokens: [
      { text: "Mon" },
      { text: "père" },
      { text: "range" },
      { text: "ses" },
      { text: "outils" },
      { text: "de" },
      { text: "jardinage" },
      { text: "dans", cc: "lieu" },
      { text: "le", cc: "lieu" },
      { text: "grand", cc: "lieu" },
      { text: "abri", cc: "lieu" },
      { text: "en", cc: "lieu" },
      { text: "bois", cc: "lieu" },
      { text: ".", punctuation: true }
    ],
    explanation: "« dans le grand abri en bois » est le CC de lieu (range ses outils où ?)."
  },
  {
    text: "Sous les pavés de la rue , les ouvriers cherchent une conduite d' eau .",
    cat: "lieu",
    tokens: [
      { text: "Sous", cc: "lieu" },
      { text: "les", cc: "lieu" },
      { text: "pavés", cc: "lieu" },
      { text: "de", cc: "lieu" },
      { text: "la", cc: "lieu" },
      { text: "rue", cc: "lieu", punctuation: "," },
      { text: "les" },
      { text: "ouvriers" },
      { text: "cherchent" },
      { text: "une" },
      { text: "conduite" },
      { text: "d'" },
      { text: "eau" },
      { text: ".", punctuation: true }
    ],
    explanation: "« Sous les pavés de la rue » est le CC de lieu (cherchent où ?)."
  },
  {
    text: "Les randonneurs fatigués ont installé leur campement au sommet de la montagne .",
    cat: "lieu",
    tokens: [
      { text: "Les" },
      { text: "randonneurs" },
      { text: "fatigués" },
      { text: "ont" },
      { text: "installé" },
      { text: "leur" },
      { text: "campement" },
      { text: "au", cc: "lieu" },
      { text: "sommet", cc: "lieu" },
      { text: "de", cc: "lieu" },
      { text: "la", cc: "lieu" },
      { text: "montagne", cc: "lieu" },
      { text: ".", punctuation: true }
    ],
    explanation: "« au sommet de la montagne » est le CC de lieu (ont installé leur campement où ?)."
  },
  {
    text: "Le navire a jeté l' ancre au milieu de la baie tranquille .",
    cat: "lieu",
    tokens: [
      { text: "Le" },
      { text: "navire" },
      { text: "a" },
      { text: "jeté" },
      { text: "l'" },
      { text: "ancre" },
      { text: "au", cc: "lieu" },
      { text: "milieu", cc: "lieu" },
      { text: "de", cc: "lieu" },
      { text: "la", cc: "lieu" },
      { text: "baie", cc: "lieu" },
      { text: "tranquille", cc: "lieu" },
      { text: ".", punctuation: true }
    ],
    explanation: "« au milieu de la baie tranquille » est le CC de lieu (a jeté l'ancre où ?)."
  },
  {
    text: "Dans sa chambre mansardée , la jeune fille écrit son journal intime .",
    cat: "lieu",
    tokens: [
      { text: "Dans", cc: "lieu" },
      { text: "sa", cc: "lieu" },
      { text: "chambre", cc: "lieu" },
      { text: "mansardée", cc: "lieu", punctuation: "," },
      { text: "la" },
      { text: "jeune" },
      { text: "fille" },
      { text: "écrit" },
      { text: "son" },
      { text: "journal" },
      { text: "intime" },
      { text: ".", punctuation: true }
    ],
    explanation: "« Dans sa chambre mansardée » est le CC de lieu (écrit son journal où ?)."
  },
  {
    text: "Les clés perdues se trouvaient derrière le lourd buffet en chêne .",
    cat: "lieu",
    tokens: [
      { text: "Les" },
      { text: "clés" },
      { text: "perdues" },
      { text: "se" },
      { text: "trouvaient" },
      { text: "derrière", cc: "lieu" },
      { text: "le", cc: "lieu" },
      { text: "lourd", cc: "lieu" },
      { text: "buffet", cc: "lieu" },
      { text: "en", cc: "lieu" },
      { text: "chêne", cc: "lieu" },
      { text: ".", punctuation: true }
    ],
    explanation: "« derrière le lourd buffet en chêne » est le CC de lieu (se trouvaient où ?)."
  },

  // --- 2. TEMPS (10 phrases) ---
  {
    text: "Ce matin , le soleil se lève doucement derrière la colline .",
    cat: "temps",
    tokens: [
      { text: "Ce", cc: "temps" },
      { text: "matin", cc: "temps", punctuation: "," },
      { text: "le" },
      { text: "soleil" },
      { text: "se" },
      { text: "lève" },
      { text: "doucement", cc: "maniere" },
      { text: "derrière", cc: "lieu" },
      { text: "la", cc: "lieu" },
      { text: "colline", cc: "lieu" },
      { text: ".", punctuation: true }
    ],
    explanation: "« Ce matin » est le CC de temps (quand ?). « doucement » est le CC de manière (comment ?). « derrière la colline » est le CC de lieu (où ?)."
  },
  {
    text: "Les hirondelles s' envolent vers le sud dès l' arrivée de l' automne .",
    cat: "temps",
    tokens: [
      { text: "Les" },
      { text: "hirondelles" },
      { text: "s'" },
      { text: "envolent" },
      { text: "vers", cc: "lieu" },
      { text: "le", cc: "lieu" },
      { text: "sud", cc: "lieu" },
      { text: "dès", cc: "temps" },
      { text: "l'", cc: "temps" },
      { text: "arrivée", cc: "temps" },
      { text: "de", cc: "temps" },
      { text: "l'", cc: "temps" },
      { text: "automne", cc: "temps" },
      { text: ".", punctuation: true }
    ],
    explanation: "« dès l'arrivée de l'automne » est le CC de temps (quand ?). « vers le sud » est le CC de lieu (où ?)."
  },
  {
    text: "Pendant toute la nuit , la pluie est tombée sans s' arrêter .",
    cat: "temps",
    tokens: [
      { text: "Pendant", cc: "temps" },
      { text: "toute", cc: "temps" },
      { text: "la", cc: "temps" },
      { text: "nuit", cc: "temps", punctuation: "," },
      { text: "la" },
      { text: "pluie" },
      { text: "est" },
      { text: "tombée" },
      { text: "sans" },
      { text: "s'" },
      { text: "arrêter" },
      { text: ".", punctuation: true }
    ],
    explanation: "« Pendant toute la nuit » est le CC de temps (pendant combien de temps ?)."
  },
  {
    text: "Nous terminerons ce travail difficile avant le coucher du soleil .",
    cat: "temps",
    tokens: [
      { text: "Nous" },
      { text: "terminerons" },
      { text: "ce" },
      { text: "travail" },
      { text: "difficile" },
      { text: "avant", cc: "temps" },
      { text: "le", cc: "temps" },
      { text: "coucher", cc: "temps" },
      { text: "du", cc: "temps" },
      { text: "soleil", cc: "temps" },
      { text: ".", punctuation: true }
    ],
    explanation: "« avant le coucher du soleil » est le CC de temps (quand ?)."
  },
  {
    text: "Hier soir , la foudre a frappé le vieux chêne centenaire .",
    cat: "temps",
    tokens: [
      { text: "Hier", cc: "temps" },
      { text: "soir", cc: "temps", punctuation: "," },
      { text: "la" },
      { text: "foudre" },
      { text: "a" },
      { text: "frappé" },
      { text: "le" },
      { text: "vieux" },
      { text: "chêne" },
      { text: "centenaire" },
      { text: ".", punctuation: true }
    ],
    explanation: "« Hier soir » est le CC de temps (quand ?)."
  },
  {
    text: "Chaque dimanche , ma grand-mère cuisine un délicieux rôti de bœuf .",
    cat: "temps",
    tokens: [
      { text: "Chaque", cc: "temps" },
      { text: "dimanche", cc: "temps", punctuation: "," },
      { text: "ma" },
      { text: "grand-mère" },
      { text: "cuisine" },
      { text: "un" },
      { text: "délicieux" },
      { text: "rôti" },
      { text: "de" },
      { text: "bœuf" },
      { text: ".", punctuation: true }
    ],
    explanation: "« Chaque dimanche » est le CC de temps (quand ?)."
  },
  {
    text: "Les coureurs s' élancent sur la piste dès le coup de pistolet .",
    cat: "temps",
    tokens: [
      { text: "Les" },
      { text: "coureurs" },
      { text: "s'" },
      { text: "élancent" },
      { text: "sur", cc: "lieu" },
      { text: "la", cc: "lieu" },
      { text: "piste", cc: "lieu" },
      { text: "dès", cc: "temps" },
      { text: "le", cc: "temps" },
      { text: "coup", cc: "temps" },
      { text: "de", cc: "temps" },
      { text: "pistolet", cc: "temps" },
      { text: ".", punctuation: true }
    ],
    explanation: "« dès le coup de pistolet » est le CC de temps (quand ?). « sur la piste » est le CC de lieu (où ?)."
  },
  {
    text: "Depuis plusieurs jours , le vent souffle avec une grande violence .",
    cat: "temps",
    tokens: [
      { text: "Depuis", cc: "temps" },
      { text: "plusieurs", cc: "temps" },
      { text: "jours", cc: "temps", punctuation: "," },
      { text: "le" },
      { text: "vent" },
      { text: "souffle" },
      { text: "avec", cc: "maniere" },
      { text: "une", cc: "maniere" },
      { text: "grande", cc: "maniere" },
      { text: "violence", cc: "maniere" },
      { text: ".", punctuation: true }
    ],
    explanation: "« Depuis plusieurs jours » est le CC de temps (depuis quand ?). « avec une grande violence » est le CC de manière (comment ?)."
  },
  {
    text: "Autrefois , les habitants puisaient l' eau au puits du village .",
    cat: "temps",
    tokens: [
      { text: "Autrefois", cc: "temps", punctuation: "," },
      { text: "les" },
      { text: "habitants" },
      { text: "puisaient" },
      { text: "l'" },
      { text: "eau" },
      { text: "au", cc: "lieu" },
      { text: "puits", cc: "lieu" },
      { text: "du", cc: "lieu" },
      { text: "village", cc: "lieu" },
      { text: ".", punctuation: true }
    ],
    explanation: "« Autrefois » est le CC de temps (quand ?). « au puits du village » est le CC de lieu (où ?)."
  },
  {
    text: "Soudain , un cri perçant a résonné dans la vallée silencieuse .",
    cat: "temps",
    tokens: [
      { text: "Soudain", cc: "temps", punctuation: "," },
      { text: "un" },
      { text: "cri" },
      { text: "perçant" },
      { text: "a" },
      { text: "résonné" },
      { text: "dans", cc: "lieu" },
      { text: "la", cc: "lieu" },
      { text: "vallée", cc: "lieu" },
      { text: "silencieuse", cc: "lieu" },
      { text: ".", punctuation: true }
    ],
    explanation: "« Soudain » est le CC de temps (quand ?). « dans la vallée silencieuse » est le CC de lieu (où ?)."
  },

  // --- 3. MANIERE (8 phrases) ---
  {
    text: "Le vieux monsieur traverse la rue à petits pas lents .",
    cat: "maniere",
    tokens: [
      { text: "Le" },
      { text: "vieux" },
      { text: "monsieur" },
      { text: "traverse" },
      { text: "la" },
      { text: "rue" },
      { text: "à", cc: "maniere" },
      { text: "petits", cc: "maniere" },
      { text: "pas", cc: "maniere" },
      { text: "lents", cc: "maniere" },
      { text: ".", punctuation: true }
    ],
    explanation: "« à petits pas lents » est le CC de manière (traverse comment ?)."
  },
  {
    text: "Elle a résolu ce problème de mathématiques avec une grande facilité .",
    cat: "maniere",
    tokens: [
      { text: "Elle" },
      { text: "a" },
      { text: "résolu" },
      { text: "ce" },
      { text: "problème" },
      { text: "de" },
      { text: "mathématiques" },
      { text: "avec", cc: "maniere" },
      { text: "une", cc: "maniere" },
      { text: "grande", cc: "maniere" },
      { text: "facilité", cc: "maniere" },
      { text: ".", punctuation: true }
    ],
    explanation: "« avec une grande facilité » est le CC de manière (a résolu comment ?)."
  },
  {
    text: "Le pianiste joue cette mélodie avec beaucoup de délicatesse .",
    cat: "maniere",
    tokens: [
      { text: "Le" },
      { text: "pianiste" },
      { text: "joue" },
      { text: "cette" },
      { text: "mélodie" },
      { text: "avec", cc: "maniere" },
      { text: "beaucoup", cc: "maniere" },
      { text: "de", cc: "maniere" },
      { text: "délicatesse", cc: "maniere" },
      { text: ".", punctuation: true }
    ],
    explanation: "« avec beaucoup de délicatesse » est le CC de manière (joue comment ?)."
  },
  {
    text: "Les soldats marchaient courageusement vers la ligne de front .",
    cat: "maniere",
    tokens: [
      { text: "Les" },
      { text: "soldats" },
      { text: "marchaient" },
      { text: "courageusement", cc: "maniere" },
      { text: "vers", cc: "lieu" },
      { text: "la", cc: "lieu" },
      { text: "ligne", cc: "lieu" },
      { text: "de", cc: "lieu" },
      { text: "front", cc: "lieu" },
      { text: ".", punctuation: true }
    ],
    explanation: "« courageusement » est le CC de manière (marchaient comment ?). « vers la ligne de front » est le CC de lieu (marchaient où ?)."
  },
  {
    text: "L' artisan travaille le bois précieux avec une infinie patience .",
    cat: "maniere",
    tokens: [
      { text: "L'" },
      { text: "artisan" },
      { text: "travaille" },
      { text: "le" },
      { text: "bois" },
      { text: "précieux" },
      { text: "avec", cc: "maniere" },
      { text: "une", cc: "maniere" },
      { text: "infinie", cc: "maniere" },
      { text: "patience", cc: "maniere" },
      { text: ".", punctuation: true }
    ],
    explanation: "« avec une infinie patience » est le CC de manière (travaille comment ?)."
  },
  {
    text: "Le chat s' approche de l' oiseau en silence .",
    cat: "maniere",
    tokens: [
      { text: "Le" },
      { text: "chat" },
      { text: "s'" },
      { text: "approche" },
      { text: "de" },
      { text: "l'" },
      { text: "oiseau" },
      { text: "en", cc: "maniere" },
      { text: "silence", cc: "maniere" },
      { text: ".", punctuation: true }
    ],
    explanation: "« en silence » est le CC de manière (s'approche comment ?)."
  },
  {
    text: "Il a répondu à l' inspecteur de manière très polie .",
    cat: "maniere",
    tokens: [
      { text: "Il" },
      { text: "a" },
      { text: "répondu" },
      { text: "à" },
      { text: "l'" },
      { text: "inspecteur" },
      { text: "de", cc: "maniere" },
      { text: "manière", cc: "maniere" },
      { text: "très", cc: "maniere" },
      { text: "polie", cc: "maniere" },
      { text: ".", punctuation: true }
    ],
    explanation: "« de manière très polie » est le CC de manière (a répondu comment ?)."
  },
  {
    text: "Le fleuve coule paisiblement vers l' océan Atlantique .",
    cat: "maniere",
    tokens: [
      { text: "Le" },
      { text: "fleuve" },
      { text: "coule" },
      { text: "paisiblement", cc: "maniere" },
      { text: "vers", cc: "lieu" },
      { text: "l'", cc: "lieu" },
      { text: "océan", cc: "lieu" },
      { text: "Atlantique", cc: "lieu" },
      { text: ".", punctuation: true }
    ],
    explanation: "« paisiblement » est le CC de manière (coule comment ?). « vers l'océan Atlantique » est le CC de lieu (coule où ?)."
  },

  // --- 4. CONDITION (4 phrases) ---
  {
    text: "En cas de tempête , les navires rentrent immédiatement au port .",
    cat: "condition",
    tokens: [
      { text: "En", cc: "condition" },
      { text: "cas", cc: "condition" },
      { text: "de", cc: "condition" },
      { text: "tempête", cc: "condition", punctuation: "," },
      { text: "les" },
      { text: "navires" },
      { text: "rentrent" },
      { text: "immédiatement", cc: "maniere" },
      { text: "au", cc: "lieu" },
      { text: "port", cc: "lieu" },
      { text: ".", punctuation: true }
    ],
    explanation: "« En cas de tempête » est le CC de condition (à quelle condition rentrent-ils ?). « au port » est le CC de lieu (où ?) et « immédiatement » est le CC de manière."
  },
  {
    text: "Avec de la persévérance , tu vaincras toutes les difficultés .",
    cat: "condition",
    tokens: [
      { text: "Avec", cc: "condition" },
      { text: "de", cc: "condition" },
      { text: "la", cc: "condition" },
      { text: "persévérance", cc: "condition", punctuation: "," },
      { text: "tu" },
      { text: "vaincras" },
      { text: "toutes" },
      { text: "les" },
      { text: "difficultés" },
      { text: ".", punctuation: true }
    ],
    explanation: "« Avec de la persévérance » est le CC de condition (à quelle condition vaincras-tu ? = si tu as de la persévérance)."
  },
  {
    text: "Sans ton aide précieuse , je n' aurais pas terminé à temps .",
    cat: "condition",
    tokens: [
      { text: "Sans", cc: "condition" },
      { text: "ton", cc: "condition" },
      { text: "aide", cc: "condition" },
      { text: "précieuse", cc: "condition", punctuation: "," },
      { text: "je" },
      { text: "n'" },
      { text: "aurais" },
      { text: "pas" },
      { text: "terminé" },
      { text: "à", cc: "temps" },
      { text: "temps", cc: "temps" },
      { text: ".", punctuation: true }
    ],
    explanation: "« Sans ton aide précieuse » est le CC de condition (à quelle condition ? = si je n'avais pas eu ton aide). « à temps » est le CC de temps."
  },
  {
    text: "En travaillant régulièrement , vous obtiendrez de brillants résultats .",
    cat: "condition",
    tokens: [
      { text: "En", cc: "condition" },
      { text: "travaillant", cc: "condition" },
      { text: "régulièrement", cc: "condition", punctuation: "," },
      { text: "vous" },
      { text: "obtiendrez" },
      { text: "de" },
      { text: "brillants" },
      { text: "résultats" },
      { text: ".", punctuation: true }
    ],
    explanation: "« En travaillant régulièrement » est le CC de condition (à quelle condition obtiendrez-vous ? = si vous travaillez régulièrement)."
  },

  // --- 5. CAUSE (4 phrases) ---
  {
    text: "À cause du brouillard épais , le match de football a été annulé .",
    cat: "cause",
    tokens: [
      { text: "À", cc: "cause" },
      { text: "cause", cc: "cause" },
      { text: "du", cc: "cause" },
      { text: "brouillard", cc: "cause" },
      { text: "épais", cc: "cause", punctuation: "," },
      { text: "le" },
      { text: "match" },
      { text: "de" },
      { text: "football" },
      { text: "a" },
      { text: "été" },
      { text: "annulé" },
      { text: ".", punctuation: true }
    ],
    explanation: "« À cause du brouillard épais » est le CC de cause (pour quelle raison le match a-t-il été annulé ?)."
  },
  {
    text: "Par manque d' entraînement , il a abandonné la course au milieu .",
    cat: "cause",
    tokens: [
      { text: "Par", cc: "cause" },
      { text: "manque", cc: "cause" },
      { text: "d'", cc: "cause" },
      { text: "entraînement", cc: "cause", punctuation: "," },
      { text: "il" },
      { text: "a" },
      { text: "abandonné" },
      { text: "la" },
      { text: "course" },
      { text: "au", cc: "lieu" },
      { text: "milieu", cc: "lieu" },
      { text: ".", punctuation: true }
    ],
    explanation: "« Par manque d'entraînement » est le CC de cause (pourquoi a-t-il abandonné ?). « au milieu » est le CC de lieu (où ?)."
  },
  {
    text: "Grâce à ton soutien financier , l' association a pu réparer le toit .",
    cat: "cause",
    tokens: [
      { text: "Grâce", cc: "cause" },
      { text: "à", cc: "cause" },
      { text: "ton", cc: "cause" },
      { text: "soutien", cc: "cause" },
      { text: "financier", cc: "cause", punctuation: "," },
      { text: "l'" },
      { text: "association" },
      { text: "a" },
      { text: "pu" },
      { text: "réparer" },
      { text: "le" },
      { text: "toit" },
      { text: ".", punctuation: true }
    ],
    explanation: "« Grâce à ton soutien financier » est le CC de cause (grâce à quelle cause l'association a-t-elle pu réparer ?)."
  },
  {
    text: "Elle tremble de peur devant ce gros chien agressif .",
    cat: "cause",
    tokens: [
      { text: "Elle" },
      { text: "tremble" },
      { text: "de", cc: "cause" },
      { text: "peur", cc: "cause" },
      { text: "devant", cc: "lieu" },
      { text: "ce", cc: "lieu" },
      { text: "gros", cc: "lieu" },
      { text: "chien", cc: "lieu" },
      { text: "agressif", cc: "lieu" },
      { text: ".", punctuation: true }
    ],
    explanation: "« de peur » est le CC de cause (pourquoi tremble-t-elle ? = à cause de la peur). « devant ce gros chien agressif » est le CC de lieu (où ?)."
  },

  // --- 6. BUT (4 phrases) ---
  {
    text: "Les élèves révisent leurs leçons pour réussir les examens de fin d' année .",
    cat: "but",
    tokens: [
      { text: "Les" },
      { text: "élèves" },
      { text: "révisent" },
      { text: "leurs" },
      { text: "leçons" },
      { text: "pour", cc: "but" },
      { text: "réussir", cc: "but" },
      { text: "les", cc: "but" },
      { text: "examens", cc: "but" },
      { text: "de", cc: "but" },
      { text: "fin", cc: "but" },
      { text: "d'", cc: "but" },
      { text: "année", cc: "but" },
      { text: ".", punctuation: true }
    ],
    explanation: "« pour réussir les examens de fin d'année » est le CC de but (dans quel but révisent-ils ?)."
  },
  {
    text: "Le jardinier arrose les jeunes pousses afin d' assurer leur croissance .",
    cat: "but",
    tokens: [
      { text: "Le" },
      { text: "jardinier" },
      { text: "arrose" },
      { text: "les" },
      { text: "jeunes" },
      { text: "pousses" },
      { text: "afin", cc: "but" },
      { text: "d'", cc: "but" },
      { text: "assurer", cc: "but" },
      { text: "leur", cc: "but" },
      { text: "croissance", cc: "but" },
      { text: ".", punctuation: true }
    ],
    explanation: "« afin d'assurer leur croissance » est le CC de but (dans quel but arrose-t-il ?)."
  },
  {
    text: "Il s' entraîne tous les jours dans le but d' améliorer son record .",
    cat: "but",
    tokens: [
      { text: "Il" },
      { text: "s'" },
      { text: "entraîne" },
      { text: "tous", cc: "temps" },
      { text: "les", cc: "temps" },
      { text: "jours", cc: "temps" },
      { text: "dans", cc: "but" },
      { text: "le", cc: "but" },
      { text: "but", cc: "but" },
      { text: "d'", cc: "but" },
      { text: "améliorer", cc: "but" },
      { text: "son", cc: "but" },
      { text: "record", cc: "but" },
      { text: ".", punctuation: true }
    ],
    explanation: "« dans le but d'améliorer son record » est le CC de but (dans quel but s'entraîne-t-il ?). « tous les jours » est le CC de temps (quand ?)."
  },
  {
    text: "Nous portons des casques de protection pour éviter les blessures graves .",
    cat: "but",
    tokens: [
      { text: "Nous" },
      { text: "portons" },
      { text: "des" },
      { text: "casques" },
      { text: "de" },
      { text: "protection" },
      { text: "pour", cc: "but" },
      { text: "éviter", cc: "but" },
      { text: "les", cc: "but" },
      { text: "blessures", cc: "but" },
      { text: "graves", cc: "but" },
      { text: ".", punctuation: true }
    ],
    explanation: "« pour éviter les blessures graves » est le CC de but (dans quel but portons-nous des casques ?)."
  }
];

// ===================================================
// BANQUES DE DONNÉES DE FRANÇAIS EXTRAITES D'INDEX.HTML
// ===================================================

window.LECTURE_RAPIDE_DATA = {
  6: {
    label: 'Niveau 6', vitesse: 160, couleur: '#607D8B',
    textes: [
      {
        id: 'n6t1', titre: 'La démocratie',
        texte: "La démocratie est un système politique dans lequel le pouvoir appartient au peuple. Dans une démocratie représentative, les citoyens élisent des représentants chargés de prendre des décisions en leur nom. Ce système repose sur plusieurs principes essentiels : la liberté d'expression, l'égalité des droits de tous les citoyens et l'indépendance de la justice. La démocratie ne se limite pas au simple droit de vote : elle implique aussi la possibilité de critiquer le gouvernement et d'accéder à une information libre et variée. Cependant, ce système n'est pas parfait. Certains lui reprochent de favoriser les intérêts des plus puissants ou de produire des décisions dictées uniquement par les prochaines élections. D'autres soulignent que de moins en moins de citoyens participent aux votes, ce qui affaiblit sa légitimité. Malgré ces défauts, la démocratie reste considérée par beaucoup comme le système qui protège le mieux les libertés de chacun.",
        questions: [
          {
            q: "Sur quels principes repose la démocratie selon le texte ?",
            options: ["La richesse économique, la puissance militaire et la stabilité du gouvernement", "La liberté d'expression, l'égalité des droits et l'indépendance de la justice", "L'autorité d'un chef élu, la discipline des citoyens et le respect des lois", "Le droit de vote, la majorité absolue et le contrôle de l'information par l'État"],
            correct: 1
          },
          {
            q: "Quelle critique est formulée contre la démocratie dans le texte ?",
            options: ["Elle donne trop de pouvoir aux juges au détriment des représentants élus", "Elle empêche les citoyens de participer directement aux décisions importantes", "Elle peut favoriser les plus puissants et produire des décisions à court terme", "Elle est trop lente pour répondre efficacement aux crises et aux urgences"],
            correct: 2
          },
          {
            q: "Qu'est-ce qui affaiblit la légitimité de la démocratie selon le texte ?",
            options: ["La multiplication des partis politiques qui divisent les citoyens", "Le fait que de moins en moins de citoyens participent aux votes", "L'influence trop importante des médias sur les décisions politiques", "Le manque de formation civique des jeunes générations dans les écoles"],
            correct: 1
          },
          {
            q: "Que signifie avoir accès à une information libre selon le texte ?",
            options: ["Pouvoir regarder gratuitement toutes les chaînes de télévision du pays", "Avoir la possibilité de lire des journaux sans payer d'abonnement mensuel", "Pouvoir accéder à des informations variées sans que l'État les contrôle", "Recevoir automatiquement les décisions du gouvernement par courrier postal"],
            correct: 2
          },
          {
            q: "Pourquoi la démocratie est-elle considérée comme imparfaite selon le texte ?",
            options: ["Parce qu'elle donne trop de pouvoir aux citoyens qui manquent d'expérience", "Parce qu'elle peut favoriser les puissants et que peu de citoyens votent", "Parce qu'elle oblige les représentants à prendre des décisions impopulaires", "Parce qu'elle ne permet pas aux citoyens de changer rapidement de gouvernement"],
            correct: 1
          }
        ]
      },
      {
        id: 'n6t2', titre: 'La forêt amazonienne',
        texte: "La forêt amazonienne est la plus grande forêt tropicale du monde. Elle s'étend sur environ 5,5 millions de kilomètres carrés, principalement au Brésil, mais aussi en Colombie, au Pérou et dans plusieurs autres pays d'Amérique du Sud. Elle abrite une biodiversité exceptionnelle : on y recense des millions d'espèces animales et végétales, dont beaucoup ne se trouvent nulle part ailleurs sur Terre. L'Amazonie joue un rôle crucial pour le climat de toute la planète. Elle absorbe d'énormes quantités de dioxyde de carbone et produit de l'oxygène, ce qui lui a valu le surnom de poumon de la Terre. Elle régule également le cycle de l'eau en rejetant de la vapeur d'eau dans l'atmosphère. Malheureusement, la déforestation liée à l'agriculture, à l'élevage et à l'exploitation du bois menace gravement cet écosystème fragile. Chaque année, des millions d'hectares disparaissent, mettant en danger des milliers d'espèces et aggravant le réchauffement climatique mondial.",
        questions: [
          {
            q: "Pourquoi l'Amazonie est-elle surnommée le poumon de la Terre ?",
            options: ["Parce qu'elle abrite des millions d'espèces animales qui respirent l'air pur", "Parce qu'elle absorbe du dioxyde de carbone et produit de l'oxygène", "Parce qu'elle régule la température des océans grâce à son humidité", "Parce qu'elle est si grande qu'elle influence la météo de toute la planète"],
            correct: 1
          },
          {
            q: "Quelles activités humaines menacent la forêt amazonienne selon le texte ?",
            options: ["Le tourisme de masse et la construction de routes à travers la forêt", "La pêche intensive dans les rivières et la chasse aux espèces rares", "L'agriculture, l'élevage et l'exploitation du bois qui provoquent la déforestation", "L'extraction de pétrole et l'installation de centrales électriques en forêt"],
            correct: 2
          },
          {
            q: "Quel rôle joue l'Amazonie dans le cycle de l'eau ?",
            options: ["Elle purifie l'eau des rivières en filtrant les polluants à travers ses racines", "Elle stocke d'immenses réserves d'eau douce dans ses nappes souterraines", "Elle rejette de la vapeur d'eau dans l'atmosphère et régule ainsi le cycle de l'eau", "Elle alimente en eau potable des millions de personnes dans toute l'Amérique du Sud"],
            correct: 2
          },
          {
            q: "Dans quels pays se trouve principalement la forêt amazonienne ?",
            options: ["Principalement en Argentine et au Venezuela, avec une partie au Brésil", "Uniquement au Brésil, qui possède la totalité de la forêt amazonienne", "Principalement au Brésil, mais aussi en Colombie, au Pérou et d'autres pays", "Principalement en Colombie et en Équateur, avec une petite partie au Brésil"],
            correct: 2
          },
          {
            q: "Quelle conséquence la déforestation a-t-elle sur le réchauffement climatique ?",
            options: ["Elle le ralentit car les terres déboisées réfléchissent mieux la chaleur du soleil", "Elle n'a pas d'impact direct car d'autres forêts compensent la perte de l'Amazonie", "Elle l'aggrave car des millions d'hectares qui absorbaient le CO2 disparaissent", "Elle le stabilise car les nouvelles cultures agricoles absorbent aussi du carbone"],
            correct: 2
          }
        ]
      },
      {
        id: 'n6t3', titre: 'Le système solaire',
        texte: "Notre système solaire est composé du Soleil et de l'ensemble des corps célestes qui gravitent autour de lui. On y trouve huit planètes, dont la Terre, mais aussi des dizaines de lunes, des millions d'astéroïdes et des comètes. Le Soleil représente à lui seul plus de 99% de la masse totale du système solaire. Les quatre planètes les plus proches du Soleil — Mercure, Vénus, la Terre et Mars — sont des planètes rocheuses relativement petites. Les quatre planètes extérieures — Jupiter, Saturne, Uranus et Neptune — sont des géantes gazeuses ou glacées, beaucoup plus grandes. La distance entre les planètes est difficile à imaginer : la lumière met environ huit minutes pour parcourir la distance entre le Soleil et la Terre, et plus de quatre heures pour atteindre Neptune. La Terre est jusqu'à présent la seule planète connue à abriter la vie, grâce à la présence d'eau liquide, d'une atmosphère protectrice et d'une température adaptée.",
        questions: [
          {
            q: "Que représente le Soleil par rapport à l'ensemble du système solaire ?",
            options: ["Environ la moitié de la masse totale, les planètes représentant l'autre moitié", "Plus de 99% de la masse totale du système solaire", "Environ 75% de la masse, les géantes gazeuses représentant le reste", "Une petite partie de la masse, car les planètes sont bien plus nombreuses"],
            correct: 1
          },
          {
            q: "Quelle différence le texte établit-il entre les planètes intérieures et extérieures ?",
            options: ["Les planètes intérieures sont gazeuses tandis que les extérieures sont rocheuses", "Les planètes intérieures sont plus froides car elles reçoivent moins de lumière", "Les planètes intérieures sont rocheuses et petites, les extérieures sont des géantes", "Les planètes intérieures tournent plus lentement que les planètes extérieures"],
            correct: 2
          },
          {
            q: "Pourquoi la Terre est-elle la seule planète connue à abriter la vie ?",
            options: ["Parce qu'elle est la plus proche du Soleil et reçoit donc le plus d'énergie", "Parce qu'elle possède de l'eau liquide, une atmosphère protectrice et une température adaptée", "Parce qu'elle est entourée de la Lune qui la protège des météorites et des rayons", "Parce qu'elle est la seule planète à posséder un champ magnétique suffisamment fort"],
            correct: 1
          },
          {
            q: "Combien de temps la lumière met-elle pour aller du Soleil à Neptune ?",
            options: ["Environ huit minutes, comme pour aller du Soleil à la Terre", "Environ deux heures, soit quinze fois la distance Terre-Soleil", "Plus de quatre heures, ce qui donne une idée des immenses distances", "Environ une journée entière, car Neptune est très éloignée du Soleil"],
            correct: 2
          },
          {
            q: "Combien de planètes compte notre système solaire ?",
            options: ["Neuf planètes, dont Pluton qui fut reclassée récemment", "Huit planètes, dont quatre rocheuses et quatre géantes", "Dix planètes, certaines encore peu connues aux confins du système", "Six planètes, les autres corps célestes étant classés comme astéroïdes"],
            correct: 1
          }
        ]
      }
    ]
  },
  5: {
    label: 'Niveau 5', vitesse: 140, couleur: '#9C27B0',
    textes: [
      {
        id: 'n5t1', titre: 'Les volcans',
        texte: "Un volcan est une ouverture dans la croûte terrestre par laquelle du magma, des gaz et des cendres peuvent s'échapper vers la surface. Lorsqu'un volcan entre en éruption, le magma, qui prend alors le nom de lave, peut couler sur des dizaines de kilomètres et atteindre des températures supérieures à mille degrés. Les éruptions peuvent être explosives et projeter des roches et des cendres très haut dans l'atmosphère, ou effusives, avec des coulées de lave lentes mais continues. Les volcans se forment principalement aux endroits où les plaques tectoniques se rencontrent ou s'écartent. Bien que dangereux, ils jouent un rôle important : ils créent de nouvelles terres, enrichissent les sols en minéraux et régulent en partie le climat de la planète. Certaines régions très peuplées vivent à proximité de volcans actifs, car leurs sols fertiles permettent une agriculture très productive.",
        questions: [
          {
            q: "Que devient le magma lorsqu'il atteint la surface lors d'une éruption ?",
            options: ["Il se transforme en gaz et monte dans l'atmosphère sous forme de nuage", "Il prend le nom de lave et peut couler sur des dizaines de kilomètres", "Il durcit immédiatement au contact de l'air et forme des roches volcaniques", "Il se mélange à l'eau des rivières et crée des sources chaudes naturelles"],
            correct: 1
          },
          {
            q: "Où se forment principalement les volcans ?",
            options: ["Au fond des océans, là où la pression de l'eau est la plus forte", "Dans les régions désertiques où la chaleur du sol est très intense", "Aux endroits où les plaques tectoniques se rencontrent ou s'écartent", "Dans les zones montagneuses où l'altitude favorise les éruptions"],
            correct: 2
          },
          {
            q: "Pourquoi certaines populations vivent-elles près des volcans malgré le danger ?",
            options: ["Parce que les volcans protègent les habitants des séismes et des tsunamis", "Parce que les sols volcaniques sont très fertiles et permettent une bonne agriculture", "Parce que la chaleur dégagée par les volcans réchauffe les maisons en hiver", "Parce que les éruptions sont toujours prévisibles et n'arrivent que rarement"],
            correct: 1
          },
          {
            q: "Quels sont les deux types d'éruptions volcaniques décrits dans le texte ?",
            options: ["Les éruptions souterraines et les éruptions sous-marines près des côtes", "Les éruptions explosives qui projettent des cendres et les éruptions effusives avec des coulées de lave", "Les petites éruptions locales et les grandes éruptions qui affectent tout un continent", "Les éruptions diurnes qui se produisent le jour et les éruptions nocturnes plus dangereuses"],
            correct: 1
          },
          {
            q: "Quel rôle positif jouent les volcans pour la planète selon le texte ?",
            options: ["Ils réchauffent les régions froides grâce à la chaleur qu'ils dégagent", "Ils créent de nouvelles terres, enrichissent les sols et régulent en partie le climat", "Ils fournissent de l'énergie géothermique pour chauffer les habitations", "Ils attirent les touristes et génèrent des revenus importants pour les pays concernés"],
            correct: 1
          }
        ]
      },
      {
        id: 'n5t2', titre: 'Le recyclage',
        texte: "Chaque année, des milliards de tonnes de déchets sont produites dans le monde. Face à ce problème, le recyclage est devenu une nécessité. Recycler, c'est transformer des objets usagés en nouvelles matières premières qui serviront à fabriquer d'autres produits. Le papier, le verre, le plastique et les métaux peuvent tous être recyclés, mais pas de la même façon ni un nombre illimité de fois. Le verre, par exemple, peut être recyclé indéfiniment sans perdre ses qualités. Le recyclage présente de nombreux avantages : il réduit la quantité de déchets envoyés dans les décharges, limite l'extraction de nouvelles matières premières et diminue la consommation d'énergie nécessaire à la production. Cependant, recycler ne suffit pas. Les spécialistes insistent sur l'importance de réduire d'abord sa consommation et de réutiliser les objets avant de les jeter. Ces trois actions — réduire, réutiliser, recycler — forment ensemble la meilleure stratégie pour protéger notre environnement.",
        questions: [
          {
            q: "Quelle matière peut être recyclée indéfiniment sans perdre ses qualités ?",
            options: ["Le plastique, qui peut être fondu et remodelé un grand nombre de fois", "Le papier, qui conserve toutes ses propriétés après plusieurs recyclages", "Le verre, qui peut être recyclé indéfiniment sans perdre ses qualités", "Les métaux, qui deviennent plus solides à chaque nouveau recyclage"],
            correct: 2
          },
          {
            q: "Quel avantage du recyclage est mentionné dans le texte ?",
            options: ["Il permet de créer de nombreux emplois dans les usines de traitement des déchets", "Il réduit les déchets en décharge, limite l'extraction de matières premières et économise l'énergie", "Il supprime complètement la nécessité d'extraire de nouvelles matières premières dans la nature", "Il permet aux entreprises de produire des objets de meilleure qualité à moindre coût"],
            correct: 1
          },
          {
            q: "Selon les spécialistes, quelle est la meilleure stratégie pour protéger l'environnement ?",
            options: ["Recycler tous les déchets produits sans exception grâce à des technologies modernes", "Remplacer tous les objets en plastique par des objets en matériaux naturels biodégradables", "Réduire sa consommation, réutiliser les objets et recycler les déchets restants", "Créer davantage de décharges modernes pour stocker les déchets de façon sécurisée"],
            correct: 2
          },
          {
            q: "Combien de fois le plastique peut-il être recyclé selon le texte ?",
            options: ["Indéfiniment, comme le verre, car il garde toutes ses propriétés", "Une seule fois, après quoi il doit obligatoirement être mis en décharge", "Pas un nombre illimité de fois, contrairement au verre", "Trois à cinq fois maximum avant de perdre complètement ses qualités"],
            correct: 2
          },
          {
            q: "Que signifie réduire dans la stratégie des trois R selon le texte ?",
            options: ["Réduire la taille des déchets pour qu'ils prennent moins de place en décharge", "Diminuer sa consommation avant même de penser à recycler ou réutiliser", "Réduire le nombre de matières recyclables pour simplifier le tri sélectif", "Réduire les émissions de gaz produits lors de la fabrication des objets neufs"],
            correct: 1
          }
        ]
      },
      {
        id: 'n5t3', titre: 'Les séismes',
        texte: "Un séisme, aussi appelé tremblement de terre, est une secousse brutale du sol causée par une libération soudaine d'énergie dans la croûte terrestre. Cette énergie se propage sous forme d'ondes sismiques qui peuvent être ressenties à des centaines de kilomètres du point d'origine, appelé foyer. La magnitude d'un séisme mesure la quantité d'énergie libérée et s'exprime sur l'échelle de Richter. Un séisme de magnitude 5 est dix fois plus puissant qu'un séisme de magnitude 4. Les régions les plus touchées sont situées le long des frontières des plaques tectoniques, comme le Japon, la Turquie ou le Chili. Si les séismes eux-mêmes durent rarement plus de quelques minutes, leurs conséquences peuvent être catastrophiques : effondrements de bâtiments, glissements de terrain et tsunamis. Des systèmes d'alerte précoce ont été développés dans les pays les plus exposés pour donner aux habitants quelques secondes précieuses pour se mettre à l'abri.",
        questions: [
          {
            q: "Qu'est-ce que le foyer d'un séisme ?",
            options: ["La zone en surface où les dégâts causés par le séisme sont les plus importants", "Le point d'origine du séisme dans la croûte terrestre d'où partent les ondes", "L'appareil utilisé par les scientifiques pour mesurer la magnitude des séismes", "La région géographique la plus souvent touchée par les tremblements de terre"],
            correct: 1
          },
          {
            q: "Que signifie une différence d'un point sur l'échelle de Richter ?",
            options: ["Le séisme est cent fois plus puissant que celui du niveau inférieur", "Le séisme dure dix fois plus longtemps que celui du niveau inférieur", "Le séisme est dix fois plus puissant que celui du niveau inférieur", "Le séisme touche une surface dix fois plus grande que celui du niveau inférieur"],
            correct: 2
          },
          {
            q: "Pourquoi des systèmes d'alerte précoce ont-ils été développés ?",
            options: ["Pour prédire avec précision la date et le lieu des prochains séismes majeurs", "Pour donner aux habitants quelques secondes pour se mettre à l'abri", "Pour mesurer automatiquement la magnitude des séismes dès qu'ils se produisent", "Pour avertir les secours afin qu'ils interviennent le plus rapidement possible"],
            correct: 1
          },
          {
            q: "Dans quelles régions du monde les séismes sont-ils les plus fréquents ?",
            options: ["Dans les régions désertiques où le sol est très sec et fragile", "Dans les zones côtières exposées aux tempêtes et aux vagues géantes", "Le long des frontières des plaques tectoniques comme au Japon ou en Turquie", "Dans les régions montagneuses où l'érosion fragilise les roches en profondeur"],
            correct: 2
          },
          {
            q: "Combien de temps durent généralement les séismes eux-mêmes ?",
            options: ["Plusieurs heures, selon la puissance et la profondeur du foyer sismique", "Rarement plus de quelques minutes, même si les conséquences durent longtemps", "Entre trente minutes et une heure pour les séismes de forte magnitude", "Quelques jours, avec des répliques qui s'espacent progressivement"],
            correct: 1
          }
        ]
      }
    ]
  },
  4: {
    label: 'Niveau 4', vitesse: 120, couleur: '#F44336',
    textes: [
      {
        id: 'n4t1', titre: 'La photosynthèse',
        texte: "Les plantes sont les seuls êtres vivants capables de fabriquer eux-mêmes leur propre nourriture grâce à un processus remarquable appelé photosynthèse. Pour cela, elles ont besoin de trois éléments essentiels : la lumière du soleil, le dioxyde de carbone présent dans l'air et l'eau puisée dans le sol par leurs racines. La chlorophylle, le pigment vert contenu dans les feuilles, capte l'énergie lumineuse et permet de transformer ces éléments en glucose, une forme de sucre qui nourrit la plante. En échange, la plante rejette de l'oxygène dans l'atmosphère, ce qui est indispensable à la respiration de la quasi-totalité des êtres vivants. Sans photosynthèse, il n'y aurait ni oxygène dans l'air, ni nourriture disponible pour les animaux et les humains. Ce processus est donc à la base de presque toutes les chaînes alimentaires sur Terre.",
        questions: [
          {
            q: "De quoi la plante a-t-elle besoin pour réaliser la photosynthèse ?",
            options: ["De lumière, d'oxygène et de minéraux puisés dans le sol", "De lumière, de dioxyde de carbone et d'eau", "De chaleur, d'eau et de glucose produit par ses racines", "De lumière, d'azote et de sels minéraux dissous dans l'eau"],
            correct: 1
          },
          {
            q: "Quel est le rôle de la chlorophylle dans la photosynthèse ?",
            options: ["Elle stocke le glucose produit dans les tiges de la plante", "Elle transporte l'eau des racines jusqu'aux feuilles", "Elle capte l'énergie lumineuse pour transformer les éléments en glucose", "Elle rejette le dioxyde de carbone en dehors de la feuille"],
            correct: 2
          },
          {
            q: "Pourquoi la photosynthèse est-elle essentielle pour les animaux ?",
            options: ["Elle réchauffe l'atmosphère et régule le climat de la planète", "Elle produit de l'oxygène et constitue la base des chaînes alimentaires", "Elle permet aux plantes de se reproduire et de coloniser de nouveaux milieux", "Elle purifie l'eau des rivières en absorbant les substances toxiques"],
            correct: 1
          },
          {
            q: "Qu'est-ce que le glucose produit par la photosynthèse ?",
            options: ["Un gaz rejeté par la plante dans l'atmosphère après la digestion", "Une forme de sucre qui sert de nourriture à la plante", "Un pigment vert qui donne sa couleur aux feuilles des plantes", "Une substance qui permet à la plante de puiser l'eau dans le sol"],
            correct: 1
          },
          {
            q: "Que se passerait-il s'il n'y avait plus de photosynthèse sur Terre ?",
            options: ["Les plantes continueraient à vivre grâce aux minéraux du sol", "Les animaux s'adapteraient en se nourrissant uniquement de champignons", "Il n'y aurait plus d'oxygène ni de nourriture pour les animaux et les humains", "Le climat se réchaufferait légèrement mais la vie continuerait normalement"],
            correct: 2
          }
        ]
      },
      {
        id: 'n4t2', titre: "L'exploration spatiale",
        texte: "Depuis le premier vol habité de Youri Gagarine en 1961, l'humanité n'a cessé d'explorer l'espace. En 1969, Neil Armstrong fut le premier être humain à poser le pied sur la Lune, lors de la mission Apollo 11. Depuis lors, des centaines d'astronautes ont séjourné dans l'espace, notamment à bord de la Station spatiale internationale, où des équipages multinationaux se relaient en permanence depuis l'an 2000. L'exploration spatiale a permis de nombreuses découvertes scientifiques et a conduit à des innovations technologiques qui améliorent notre quotidien, comme les panneaux solaires, les systèmes GPS ou certains matériaux utilisés en médecine. Aujourd'hui, de nouvelles ambitions émergent : retourner sur la Lune, envoyer des humains sur Mars et explorer plus loin encore notre système solaire. Ces projets soulèvent cependant des questions éthiques et environnementales importantes sur le coût et l'impact de ces aventures.",
        questions: [
          {
            q: "Quelle fut la première mission à envoyer un homme sur la Lune ?",
            options: ["La mission Soyouz, qui transporta Youri Gagarine en 1961", "La mission Apollo 11, lors de laquelle Neil Armstrong marcha sur la Lune", "La mission Apollo 13, qui fut interrompue à cause d'une panne technique", "La mission Gemini, qui prépara les premiers pas sur la Lune en 1969"],
            correct: 1
          },
          {
            q: "Depuis quand des équipages séjournent-ils en permanence dans la Station spatiale internationale ?",
            options: ["Depuis 1969, juste après le premier alunissage de la mission Apollo", "Depuis 1990, après la fin de la guerre froide entre les États-Unis et l'URSS", "Depuis l'an 2000, avec des équipages multinationaux qui se relaient", "Depuis 2010, quand la station fut entièrement assemblée en orbite"],
            correct: 2
          },
          {
            q: "Quelle innovation du quotidien est issue de l'exploration spatiale ?",
            options: ["L'invention d'internet, qui permettait aux astronautes de communiquer", "Le développement des téléphones mobiles pour les communications longue distance", "Les systèmes GPS, les panneaux solaires et certains matériaux médicaux", "La création des avions supersoniques utilisés pour les vols intercontinentaux"],
            correct: 2
          },
          {
            q: "Quel fut le premier être humain à voyager dans l'espace ?",
            options: ["Neil Armstrong, qui orbita autour de la Terre avant d'aller sur la Lune", "Buzz Aldrin, qui accompagnait Armstrong lors de la mission Apollo 11", "Youri Gagarine, premier Russe à avoir voyagé dans l'espace", "John Glenn, qui fut le premier Américain à faire le tour de la Terre"],
            correct: 2
          },
          {
            q: "Quelles nouvelles ambitions spatiales sont évoquées dans le texte ?",
            options: ["Construire une station spatiale permanente autour de la Lune", "Retourner sur la Lune et envoyer des humains sur Mars", "Explorer les astéroïdes pour y extraire des minerais précieux", "Envoyer des sondes robotiques vers les étoiles les plus proches"],
            correct: 1
          }
        ]
      },
      {
        id: 'n4t3', titre: 'Les énergies renouvelables',
        texte: "Face au réchauffement climatique causé par l'utilisation massive des combustibles fossiles, de nombreux pays cherchent à développer des sources d'énergie renouvelables. Contrairement au pétrole, au charbon et au gaz naturel, qui sont des ressources limitées et polluantes, les énergies renouvelables sont inépuisables et produisent peu ou pas de gaz à effet de serre. L'énergie solaire capte la chaleur et la lumière du soleil grâce à des panneaux photovoltaïques. L'énergie éolienne utilise la force du vent pour faire tourner des turbines et produire de l'électricité. L'énergie hydraulique exploite la puissance des rivières et des barrages. Malgré leurs avantages, ces sources d'énergie présentent aussi des limites : elles dépendent des conditions météorologiques, nécessitent des installations coûteuses et leur stockage reste un défi technologique majeur. La transition vers ces nouvelles énergies est indispensable mais demande des investissements considérables et une adaptation profonde de nos modes de consommation.",
        questions: [
          {
            q: "Quelle est la principale différence entre les énergies fossiles et les énergies renouvelables ?",
            options: ["Les énergies fossiles sont plus efficaces mais plus dangereuses à transporter", "Les énergies renouvelables sont inépuisables et produisent peu de gaz à effet de serre", "Les énergies fossiles sont moins chères à installer mais plus difficiles à stocker", "Les énergies renouvelables nécessitent moins d'entretien que les centrales à charbon"],
            correct: 1
          },
          {
            q: "Quel est le principal défi technologique lié aux énergies renouvelables ?",
            options: ["La fabrication de panneaux solaires suffisamment résistants aux intempéries", "La formation de techniciens capables d'entretenir les éoliennes en mer", "Le stockage de l'énergie produite, qui reste une difficulté majeure", "La connexion des installations renouvelables aux réseaux électriques existants"],
            correct: 2
          },
          {
            q: "Pourquoi la transition énergétique est-elle difficile à réaliser rapidement ?",
            options: ["Parce que les gouvernements refusent de financer les nouvelles technologies", "Parce qu'elle demande des investissements importants et une adaptation de nos habitudes", "Parce que les énergies renouvelables ne peuvent pas alimenter les grandes villes", "Parce que les pays producteurs de pétrole bloquent le développement des alternatives"],
            correct: 1
          },
          {
            q: "Comment l'énergie éolienne produit-elle de l'électricité ?",
            options: ["En captant la chaleur du sol grâce à des capteurs enterrés profondément", "En utilisant la force du vent pour faire tourner des turbines", "En exploitant la différence de température entre l'air et l'eau des rivières", "En transformant la lumière du soleil en courant électrique continu"],
            correct: 1
          },
          {
            q: "De quoi dépendent les énergies renouvelables selon le texte ?",
            options: ["Du niveau de développement technologique de chaque pays producteur", "Du prix des matières premières nécessaires à la fabrication des installations", "Des conditions météorologiques, ce qui limite leur production régulière", "Du nombre d'ingénieurs formés pour installer et entretenir les équipements"],
            correct: 2
          }
        ]
      }
    ]
  },
  3: {
    label: 'Niveau 3', vitesse: 100, couleur: '#FF9800',
    textes: [
      {
        id: 'n3t1', titre: 'La vie des abeilles',
        texte: "Dans une ruche, chaque abeille a un rôle bien précis. La reine, unique dans la colonie, pond jusqu'à deux mille œufs par jour. Les ouvrières, qui sont toutes des femelles, accomplissent des tâches variées selon leur âge : elles nettoient les cellules, nourrissent les larves, produisent de la cire et gardent l'entrée de la ruche. Ce n'est qu'à partir de trois semaines qu'elles deviennent butineuses et partent collecter le nectar des fleurs. Les faux-bourdons, les seuls mâles de la ruche, n'ont qu'une seule mission : s'accoupler avec la reine. Une fois cette tâche accomplie, ils sont chassés de la ruche avant l'hiver. Les abeilles communiquent entre elles grâce à une danse particulière qui indique aux autres butineuses la direction et la distance des fleurs. Sans les abeilles, la pollinisation de nombreuses plantes serait impossible, menaçant gravement notre alimentation.",
        questions: [
          {
            q: "À partir de quel âge les ouvrières deviennent-elles butineuses ?",
            options: ["Dès leur naissance, car c'est leur rôle principal dans la ruche", "À partir d'une semaine, après avoir appris la danse des abeilles", "À partir de trois semaines, après avoir accompli d'autres tâches", "À partir de deux mois, quand la saison des fleurs commence"],
            correct: 2
          },
          {
            q: "Quel est le rôle des faux-bourdons dans la ruche ?",
            options: ["Ils produisent le miel en transformant le nectar des fleurs", "Ils gardent l'entrée de la ruche contre les prédateurs", "Ils s'accouplent avec la reine, puis sont chassés avant l'hiver", "Ils nourrissent les larves pendant les premiers jours de leur vie"],
            correct: 2
          },
          {
            q: "Comment les abeilles indiquent-elles où trouver des fleurs ?",
            options: ["En déposant une trace odorante sur le chemin à suivre", "En émettant des sons particuliers audibles par toute la colonie", "Grâce à une danse qui indique la direction et la distance", "En guidant personnellement chaque butineuse jusqu'aux fleurs"],
            correct: 2
          },
          {
            q: "Combien d'œufs la reine peut-elle pondre par jour ?",
            options: ["Jusqu'à cinq cents œufs, ce qui suffit à maintenir la colonie", "Jusqu'à mille œufs, répartis dans toutes les cellules de la ruche", "Jusqu'à deux mille œufs par jour", "Jusqu'à dix mille œufs lors des périodes de forte activité"],
            correct: 2
          },
          {
            q: "Que se passerait-il sans les abeilles selon le texte ?",
            options: ["Les fleurs ne pourraient plus produire de nectar pour se reproduire", "La pollinisation de nombreuses plantes serait impossible, menaçant notre alimentation", "Les autres insectes disparaîtraient également car ils se nourrissent de miel", "Les forêts disparaîtraient car les arbres ont besoin des abeilles pour grandir"],
            correct: 1
          }
        ]
      },
      {
        id: 'n3t2', titre: 'La révolution industrielle',
        texte: "Au XIXe siècle, l'invention de la machine à vapeur a profondément transformé les sociétés européennes. Les usines ont remplacé les ateliers artisanaux, et des millions de paysans ont quitté les campagnes pour travailler dans les villes. Cette période, qu'on appelle la révolution industrielle, a permis de produire des biens en grande quantité et à moindre coût. Cependant, les conditions de travail étaient souvent très difficiles : les journées duraient douze à quinze heures, les salaires étaient bas et même les enfants travaillaient dans les mines ou les usines. Face à ces injustices, les ouvriers ont commencé à s'organiser en syndicats pour défendre leurs droits. Progressivement, des lois ont été adoptées pour limiter le travail des enfants et améliorer les conditions de travail. La révolution industrielle a donc apporté à la fois des progrès considérables et de profondes inégalités sociales.",
        questions: [
          {
            q: "Quelle invention est à l'origine de la révolution industrielle ?",
            options: ["L'invention de l'électricité, qui a permis d'éclairer les usines", "L'invention de la machine à vapeur, qui a transformé la production", "L'invention du chemin de fer, qui a facilité le transport des marchandises", "L'invention de l'imprimerie, qui a diffusé les nouvelles idées en Europe"],
            correct: 1
          },
          {
            q: "Pourquoi les ouvriers se sont-ils organisés en syndicats ?",
            options: ["Pour produire davantage et augmenter les bénéfices des usines", "Pour apprendre un métier et trouver plus facilement du travail", "Pour défendre leurs droits face aux mauvaises conditions de travail", "Pour remplacer les artisans qui avaient perdu leur emploi"],
            correct: 2
          },
          {
            q: "Qu'est-ce qui caractérisait les conditions de travail à cette époque ?",
            options: ["Des journées courtes mais des tâches très physiquement exigeantes", "De longues journées, des salaires bas et le travail des enfants", "Des salaires élevés mais des conditions de sécurité insuffisantes", "Un travail varié mais sans possibilité d'évolution professionnelle"],
            correct: 1
          },
          {
            q: "Qui a remplacé les ateliers artisanaux pendant la révolution industrielle ?",
            options: ["Les coopératives d'ouvriers qui produisaient collectivement les marchandises", "Les grandes fermes agricoles qui fournissaient les matières premières", "Les usines qui permettaient de produire en grande quantité", "Les marchands ambulants qui vendaient les produits fabriqués à la main"],
            correct: 2
          },
          {
            q: "Qu'ont adopté progressivement les gouvernements face aux conditions de travail ?",
            options: ["Des aides financières pour permettre aux ouvriers de quitter les usines", "Des lois pour limiter le travail des enfants et améliorer les conditions de travail", "Des règlements obligeant les usines à fermer le dimanche pour se reposer", "Des taxes sur les profits des usines pour financer les hôpitaux ouvriers"],
            correct: 1
          }
        ]
      },
      {
        id: 'n3t3', titre: 'Le désert du Sahara',
        texte: "Le Sahara est le plus grand désert chaud du monde. Il s'étend sur environ 9 millions de kilomètres carrés, couvrant une grande partie du nord de l'Afrique. Contrairement à ce que l'on imagine souvent, le Sahara n'est pas uniquement composé de dunes de sable. On y trouve aussi des plateaux rocheux, des montagnes et même des oasis, où l'eau souterraine permet à des végétaux de pousser. Les températures y sont extrêmes : elles peuvent dépasser 50°C le jour et descendre en dessous de 0°C la nuit dans certaines régions. Malgré ces conditions hostiles, des populations comme les Touaregs y vivent depuis des siècles en s'adaptant remarquablement à leur environnement. Ils se déplacent à dos de dromadaire et connaissent parfaitement les rares points d'eau du désert. Le Sahara abrite également une faune surprenante : fennecs, scorpions, vipères des sables et même gazelles ont trouvé des stratégies pour survivre dans cet environnement extrême.",
        questions: [
          {
            q: "Quelle est la superficie approximative du Sahara ?",
            options: ["Environ 3 millions de km², soit la taille de l'Europe occidentale", "Environ 6 millions de km², couvrant la moitié de l'Afrique", "Environ 9 millions de km², couvrant une grande partie du nord de l'Afrique", "Environ 12 millions de km², ce qui en fait le plus grand désert du monde"],
            correct: 2
          },
          {
            q: "Qu'est-ce qu'une oasis dans le désert ?",
            options: ["Une zone de dunes particulièrement hautes où le vent est plus fort", "Un endroit où l'eau souterraine permet à des végétaux de pousser", "Un campement temporaire utilisé par les Touaregs lors de leurs voyages", "Une région rocheuse où les températures sont moins extrêmes"],
            correct: 1
          },
          {
            q: "Comment les Touaregs se sont-ils adaptés à la vie dans le Sahara ?",
            options: ["En construisant des villages souterrains pour échapper à la chaleur", "En cultivant des céréales résistantes à la sécheresse dans les oasis", "En se déplaçant à dos de dromadaire et en connaissant les points d'eau", "En migrant vers les côtes chaque été pour fuir les grandes chaleurs"],
            correct: 2
          },
          {
            q: "Quelles sont les températures extrêmes que peut connaître le Sahara ?",
            options: ["Entre 20°C la nuit et 40°C le jour dans les régions les plus chaudes", "Plus de 50°C le jour et en dessous de 0°C la nuit dans certaines régions", "Entre 30°C et 60°C selon les saisons et les régions du désert", "Toujours entre 35°C et 45°C, avec peu de variations entre le jour et la nuit"],
            correct: 1
          },
          {
            q: "Quels animaux vivent dans le Sahara selon le texte ?",
            options: ["Des lions, des éléphants et des girafes adaptés à la chaleur intense", "Des fennecs, des scorpions, des vipères des sables et des gazelles", "Des chameaux, des cobras et des aigles qui chassent la nuit", "Des hyènes, des serpents et des lézards géants résistants à la sécheresse"],
            correct: 1
          }
        ]
      }
    ]
  },
  2: {
    label: 'Niveau 2', vitesse: 80, couleur: '#2196F3',
    textes: [
      {
        id: 'n2t1', titre: 'La migration des oiseaux',
        texte: "Chaque année, à l'approche de l'automne, des millions d'oiseaux quittent l'Europe pour rejoindre l'Afrique. Ce voyage extraordinaire peut durer plusieurs semaines et couvrir des milliers de kilomètres. Les oiseaux s'orientent grâce au soleil, aux étoiles et au champ magnétique de la Terre. Ils voyagent souvent en groupe pour économiser leur énergie, chacun profitant du sillage de celui qui le précède. Certaines espèces, comme la cigogne blanche, suivent toujours le même itinéraire d'une année à l'autre. D'autres, comme les hirondelles, peuvent modifier leur route selon les conditions météorologiques. Ces longs voyages sont épuisants et dangereux : les oiseaux doivent traverser des mers, des déserts et éviter les tempêtes. Beaucoup ne survivent pas au voyage. Pourtant, chaque printemps, les survivants reviennent fidèlement vers leurs lieux de nidification en Europe, parfois jusqu'au même nid que l'année précédente.",
        questions: [
          {
            q: "Comment les oiseaux s'orientent-ils durant leur migration ?",
            options: ["Grâce aux rivières et aux montagnes qu'ils survolent", "Grâce au soleil, aux étoiles et au champ magnétique terrestre", "En suivant les bateaux qui traversent les mers", "En mémorisant les villes qu'ils survolent chaque année"],
            correct: 1
          },
          {
            q: "Pourquoi les oiseaux voyagent-ils souvent en groupe ?",
            options: ["Pour se protéger des prédateurs qui les attaquent en vol", "Pour mieux repérer les zones où trouver de la nourriture", "Pour économiser leur énergie grâce au sillage des autres", "Pour ne pas se perdre en cas de mauvais temps"],
            correct: 2
          },
          {
            q: "Que font les oiseaux survivants chaque printemps ?",
            options: ["Ils restent en Afrique jusqu'à l'été suivant", "Ils reviennent vers leurs lieux de nidification en Europe", "Ils cherchent de nouveaux territoires en Asie", "Ils attendent que d'autres oiseaux leur montrent le chemin"],
            correct: 1
          },
          {
            q: "Quels oiseaux suivent toujours le même itinéraire d'une année à l'autre ?",
            options: ["Les hirondelles, qui modifient leur route selon la météo", "Les cigognes blanches, qui suivent toujours le même trajet", "Les merles, qui restent en Europe toute l'année", "Les mouettes, qui longent toujours les côtes maritimes"],
            correct: 1
          },
          {
            q: "Que risquent les oiseaux durant leur long voyage migratoire ?",
            options: ["De se perdre car ils ne peuvent pas voir les étoiles en journée", "De manquer de nourriture car les insectes disparaissent en hiver", "De ne pas survivre car le voyage est épuisant et dangereux", "D'être capturés par des chasseurs dans les pays qu'ils traversent"],
            correct: 2
          }
        ]
      },
      {
        id: 'n2t2', titre: "L'eau sur Terre",
        texte: "L'eau est indispensable à toute forme de vie sur notre planète. Elle recouvre environ 71% de la surface de la Terre, mais la grande majorité est salée et se trouve dans les océans. Seulement 3% de l'eau terrestre est douce, et une grande partie de cette eau douce est emprisonnée dans les glaciers et les calottes polaires. L'eau disponible pour les humains, les animaux et les plantes ne représente donc qu'une infime partie de l'eau totale. Elle se trouve dans les rivières, les lacs et les nappes souterraines. Le cycle de l'eau permet à cette ressource de se renouveler en permanence : l'eau s'évapore, forme des nuages, puis retombe sous forme de pluie ou de neige. Malgré ce cycle, l'eau douce reste une ressource précieuse et inégalement répartie dans le monde. Des millions de personnes n'ont pas accès à une eau potable de qualité.",
        questions: [
          {
            q: "Quelle proportion de l'eau terrestre est douce ?",
            options: ["Environ 71%, soit la majorité de l'eau sur Terre", "Environ 50%, répartie entre océans et rivières", "Seulement 3%, dont une grande partie est dans les glaciers", "Environ 10%, principalement dans les nappes souterraines"],
            correct: 2
          },
          {
            q: "Où se trouve la majeure partie de l'eau douce de la planète ?",
            options: ["Dans les rivières et les lacs accessibles aux humains", "Dans les glaciers et les calottes polaires", "Dans les nuages et l'atmosphère terrestre", "Dans les nappes souterraines profondes"],
            correct: 1
          },
          {
            q: "Quel est le rôle principal du cycle de l'eau ?",
            options: ["Il refroidit l'atmosphère en créant des nuages protecteurs", "Il transporte l'eau des océans vers les déserts", "Il permet à l'eau de se renouveler en permanence", "Il transforme l'eau salée en eau douce progressivement"],
            correct: 2
          },
          {
            q: "Où trouve-t-on l'eau douce accessible aux humains, animaux et plantes ?",
            options: ["Uniquement dans les glaciers des pôles Nord et Sud", "Dans les rivières, les lacs et les nappes souterraines", "Principalement dans les nuages et les précipitations", "Dans les océans après traitement par des usines de dessalement"],
            correct: 1
          },
          {
            q: "Sous quelle forme l'eau retombe-t-elle après s'être évaporée ?",
            options: ["Sous forme de brouillard qui se dépose sur les plantes et les sols", "Sous forme de rosée qui s'accumule la nuit sur les surfaces froides", "Sous forme de pluie ou de neige après avoir formé des nuages", "Sous forme de vapeur invisible qui s'infiltre directement dans le sol"],
            correct: 2
          }
        ]
      },
      {
        id: 'n2t3', titre: 'Le marché du samedi',
        texte: "Tous les samedis matin, la place centrale du village se transforme en marché animé. Les producteurs locaux installent leurs étals dès l'aube pour proposer leurs fruits, légumes, fromages et pains frais. Les habitants du village et des environs s'y retrouvent pour faire leurs courses, mais aussi pour discuter et se retrouver entre voisins. Madame Collin, maraîchère depuis trente ans, vend ses légumes bios cultivés dans sa ferme à deux kilomètres du village. Elle connaît chacun de ses clients et leur conseille des recettes selon les saisons. À côté d'elle, un jeune apiculteur propose différentes variétés de miel et explique aux curieux comment fonctionnent ses ruches. Vers midi, les étals se vident progressivement et les vendeurs commencent à ranger leurs affaires. Le marché du samedi est bien plus qu'un simple lieu de commerce : c'est un moment de lien social précieux pour toute la communauté.",
        questions: [
          {
            q: "Depuis combien de temps Madame Collin vend-elle ses légumes au marché ?",
            options: ["Depuis dix ans, après avoir quitté son emploi en ville", "Depuis trente ans, avec des légumes cultivés près du village", "Depuis vingt ans, avec des légumes achetés en gros", "Depuis cinq ans, après avoir repris la ferme familiale"],
            correct: 1
          },
          {
            q: "Que propose le jeune apiculteur en plus de son miel ?",
            options: ["Des cours de jardinage pour les habitants du village", "Des démonstrations de fabrication de bougies en cire", "Des explications sur le fonctionnement de ses ruches", "Des visites guidées de sa ferme le week-end"],
            correct: 2
          },
          {
            q: "Selon le texte, pourquoi le marché du samedi est-il important ?",
            options: ["Parce qu'il permet aux producteurs de gagner beaucoup d'argent", "Parce qu'il attire des touristes venus de toute la région", "Parce qu'il crée du lien social précieux pour la communauté", "Parce qu'il propose des produits moins chers que les supermarchés"],
            correct: 2
          },
          {
            q: "Où Madame Collin cultive-t-elle ses légumes ?",
            options: ["Dans une grande serre industrielle à la sortie du village", "Dans sa ferme située à deux kilomètres du village", "Dans son jardin personnel derrière sa maison au centre du village", "Dans des champs loués à plusieurs agriculteurs de la région"],
            correct: 1
          },
          {
            q: "À quel moment les vendeurs commencent-ils à ranger leurs affaires ?",
            options: ["Dès dix heures, quand la plupart des clients sont déjà repartis", "Vers midi, quand les étals se vident progressivement", "En début d'après-midi, après une courte pause déjeuner", "Vers quatorze heures, quand les autorités ferment officiellement le marché"],
            correct: 1
          }
        ]
      }
    ]
  },
  1: {
    label: 'Niveau 1', vitesse: 60, couleur: '#4CAF50',
    textes: [
      {
        id: 'n1t1', titre: 'Le chat',
        texte: "Milo est un chat roux qui vit dans une petite maison à la campagne. Chaque matin, il se lève avant tout le monde et file dans le jardin pour chasser les papillons. Il ne les attrape jamais, mais cela ne l'empêche pas d'essayer. L'après-midi, il s'installe sur le rebord de la fenêtre et observe les oiseaux qui volent dans le ciel. Quand il pleut, Milo reste à l'intérieur et se love dans son panier en osier, près du radiateur. Sa maîtresse, Emma, lui prépare chaque soir une gamelle de croquettes. Milo mange lentement, puis vient se frotter contre les jambes d'Emma pour la remercier. Le soir, il saute sur le lit et s'endort en ronronnant doucement. C'est un chat heureux, qui profite de chaque moment de sa journée.",
        questions: [
          {
            q: "Que fait Milo le matin dans le jardin ?",
            options: ["Il dort au soleil", "Il chasse les papillons sans jamais les attraper", "Il mange ses croquettes dehors", "Il joue avec Emma"],
            correct: 1
          },
          {
            q: "Où se place Milo quand il pleut ?",
            options: ["Sous un arbre dans le jardin", "Dans la cuisine avec Emma", "Dans son panier près du radiateur", "Sur le lit d'Emma"],
            correct: 2
          },
          {
            q: "Comment Milo remercie-t-il Emma après le repas ?",
            options: ["Il ronronne très fort", "Il retourne dans le jardin", "Il se frotte contre ses jambes", "Il saute sur la fenêtre"],
            correct: 2
          },
          {
            q: "Où Milo passe-t-il ses après-midis ?",
            options: ["Dans le jardin à chasser les oiseaux", "Sur le rebord de la fenêtre à observer les oiseaux", "Dans son panier en osier près du radiateur", "Sur le lit de sa maîtresse Emma"],
            correct: 1
          },
          {
            q: "Comment Milo s'endort-il le soir ?",
            options: ["En regardant par la fenêtre les étoiles dans le ciel", "Dans son panier après avoir mangé ses croquettes", "Sur le lit en ronronnant doucement", "Contre les jambes d'Emma dans le salon"],
            correct: 2
          }
        ]
      },
      {
        id: 'n1t2', titre: 'La forêt en automne',
        texte: "En automne, la forêt change de visage. Les feuilles des arbres passent du vert au jaune, puis à l'orange et au rouge avant de tomber doucement sur le sol. Le vent les emporte parfois très loin. Les écureuils sont très occupés en cette saison. Ils ramassent des noisettes et des glands qu'ils cachent sous la terre ou dans les creux des arbres pour se nourrir pendant l'hiver. Les oiseaux migrateurs, comme les hirondelles, quittent la forêt pour voler vers des pays plus chauds. Seuls les merles et les mésanges restent. Le sol de la forêt est recouvert d'un épais tapis de feuilles mortes qui craquent sous les pieds. Les champignons poussent à l'ombre des grands arbres. C'est une saison pleine de couleurs et de changements, que beaucoup de promeneurs aiment découvrir.",
        questions: [
          {
            q: "Pourquoi les écureuils sont-ils très occupés en automne ?",
            options: ["Ils construisent un nouveau nid dans les arbres", "Ils cherchent des baies pour les donner aux oiseaux", "Ils cachent de la nourriture pour survivre en hiver", "Ils migrent vers des forêts plus chaudes"],
            correct: 2
          },
          {
            q: "Quels oiseaux restent dans la forêt en automne ?",
            options: ["Les hirondelles et les cigognes", "Les merles et les mésanges", "Les perroquets et les pinsons", "Les hirondelles et les merles"],
            correct: 1
          },
          {
            q: "Que trouve-t-on sur le sol de la forêt en automne ?",
            options: ["Des fleurs sauvages et de l'herbe verte", "De la neige et des glaçons", "Des feuilles mortes et des champignons", "Des glands et des nids d'oiseaux"],
            correct: 2
          },
          {
            q: "Que font les oiseaux migrateurs comme les hirondelles en automne ?",
            options: ["Ils restent dans la forêt et se cachent sous les feuilles mortes", "Ils construisent de nouveaux nids pour passer l'hiver au chaud", "Ils quittent la forêt pour voler vers des pays plus chauds", "Ils descendent vers le sol pour chercher des graines sous les feuilles"],
            correct: 2
          },
          {
            q: "Qui aime se promener dans la forêt en automne selon le texte ?",
            options: ["Les écureuils qui cherchent leurs réserves de nourriture cachées", "Les chasseurs qui profitent de la saison pour trouver du gibier", "Les enfants qui ramassent les feuilles colorées pour les collections", "Les promeneurs qui apprécient les couleurs et les changements de saison"],
            correct: 3
          }
        ]
      },
      {
        id: 'n1t3', titre: 'La boulangerie du village',
        texte: "Chaque matin, Monsieur Dupont se lève à quatre heures pour préparer le pain de son village. Il allume son four, pèse la farine et mélange les ingrédients avec soin. La pâte doit reposer longtemps avant d'être enfournée. Vers sept heures, les premières baguettes dorées sortent du four. Une odeur délicieuse envahit toute la rue. Les habitants font la queue devant la boulangerie avant même qu'elle n'ouvre. Madame Bernard achète toujours deux baguettes et des croissants pour ses enfants. Le boulanger connaît les habitudes de chacun. Il garde de côté le pain de seigle pour le vieux Monsieur Henri, qui arrive toujours en retard. À midi, presque tout est vendu. Monsieur Dupont nettoie son fournil et prépare déjà les pâtes pour le lendemain. Son travail est fatigant, mais il est fier de régaler tout son village chaque jour.",
        questions: [
          {
            q: "À quelle heure Monsieur Dupont se lève-t-il ?",
            options: ["À six heures, quand la boulangerie ouvre", "À cinq heures, avant les livraisons", "À quatre heures, pour préparer le pain", "À trois heures, pour chauffer le four toute la nuit"],
            correct: 2
          },
          {
            q: "Pourquoi Monsieur Dupont met-il du pain de seigle de côté ?",
            options: ["C'est le pain qu'il préfère manger lui-même", "Monsieur Henri arrive toujours en retard et le commande", "Madame Bernard en veut chaque matin pour ses enfants", "Ce pain se vend mieux l'après-midi que le matin"],
            correct: 1
          },
          {
            q: "Que fait le boulanger après la fermeture du midi ?",
            options: ["Il se repose et regarde la télévision", "Il livre le pain restant aux habitants du village", "Il nettoie et prépare les pâtes pour le lendemain", "Il commande de la farine pour la semaine suivante"],
            correct: 2
          },
          {
            q: "Que fait la queue de clients devant la boulangerie le matin ?",
            options: ["Ils attendent que Monsieur Dupont finisse de pétrir la pâte", "Ils arrivent avant même que la boulangerie n'ouvre ses portes", "Ils commandent leur pain la veille pour être servis en priorité", "Ils discutent en attendant que les croissants sortent du four"],
            correct: 1
          },
          {
            q: "Comment Monsieur Dupont décrit-il son travail à la fin du texte ?",
            options: ["Il trouve son travail passionnant mais peu rentable financièrement", "Il pense que son travail est trop dur et qu'il aimerait changer de métier", "Il trouve son travail fatigant mais est fier de régaler tout son village", "Il considère que son travail est facile grâce à ses machines modernes"],
            correct: 2
          }
        ]
      }
    ]
  }
};

window.DIALOGUES_DATA = {
  ecrans:{
    id:'ecrans', titre:'Les écrans à l\'école', emoji:'📱',
    couleur:'linear-gradient(135deg,#1a237e,#3949ab)', bordure:'#3949ab',
    intervenants:['Lucas','Manon'],
    tagA:'🖥️ Lucas — Pour les écrans', tagB:'✏️ Manon — Pour le papier',
    repliques:[
      {nom:'Animateur', texte:'Bonjour à tous ! Aujourd\'hui, Lucas et Manon vont débattre d\'un sujet qui vous concerne directement : faut-il utiliser des écrans à l\'école à la place du papier et du crayon ? Lucas, tu commences.', anim:true},
      {nom:'Lucas', texte:'Merci ! Je pense que les écrans sont vraiment utiles à l\'école. Avec une tablette, on peut accéder à des milliers de livres, de vidéos et d\'exercices en quelques secondes. C\'est beaucoup plus rapide qu\'un manuel scolaire !', couleur:'#3949ab'},
      {nom:'Manon', texte:'Je ne suis pas d\'accord. Écrire à la main, c\'est essentiel pour apprendre. Des études montrent que les élèves qui écrivent à la main retiennent mieux les informations que ceux qui tapent sur un clavier.', couleur:'#c2185b'},
      {nom:'Lucas', texte:'C\'est vrai, mais les écrans permettent aussi de corriger ses erreurs instantanément. Quand on écrit sur papier et qu\'on fait une faute, on doit tout recommencer ou effacer. Sur tablette, c\'est beaucoup plus simple !', couleur:'#3949ab'},
      {nom:'Manon', texte:'Peut-être, mais les écrans sont une source de distraction énorme. Quand un élève a une tablette devant lui, il est tenté d\'aller sur des jeux ou des vidéos au lieu de travailler. Le papier, lui, ne distrait pas !', couleur:'#c2185b'},
      {nom:'Lucas', texte:'On pourrait simplement bloquer l\'accès aux sites non éducatifs. Et puis, les écrans préparent les élèves au monde de demain. Presque tous les métiers utilisent des ordinateurs aujourd\'hui !', couleur:'#3949ab'},
      {nom:'Manon', texte:'Je préfère qu\'on apprenne d\'abord à bien écrire et à bien lire avant de passer aux écrans. Les bases sont importantes. Et puis, les écrans coûtent cher — tout le monde n\'a pas les mêmes moyens.', couleur:'#c2185b'},
      {nom:'Animateur', texte:'Merci à tous les deux pour ce débat passionné !', anim:true},
    ],
    questions:[
      {q:"Quel est le sujet du débat ?", options:["Faut-il supprimer les devoirs à la maison ?","Faut-il utiliser des écrans à l\'école à la place du papier et du crayon ?","Faut-il interdire les jeux vidéo aux enfants ?"], correct:1},
      {q:"Selon Lucas, quel est l\'avantage principal des écrans ?", options:["Ils permettent de corriger ses erreurs et d\'accéder à de nombreuses ressources","Ils sont moins chers que les livres et les cahiers scolaires","Ils permettent aux élèves de travailler plus vite que leurs camarades"], correct:0},
      {q:"Quel argument Manon utilise-t-elle concernant l\'écriture à la main ?", options:["L\'écriture à la main est plus rapide que de taper sur un clavier","Les élèves qui écrivent à la main retiennent mieux les informations","L\'écriture à la main évite les problèmes de vue liés aux écrans"], correct:1},
      {q:"Comment Lucas répond-il à l\'argument de Manon sur la distraction ?", options:["Il dit que les élèves sont aussi distraits avec leurs cahiers","Il propose de bloquer l\'accès aux sites non éducatifs","Il affirme que les professeurs peuvent surveiller les tablettes en permanence"], correct:1},
    ],
    attrib:{
      noms:['Lucas','Manon'],
      items:[
        {arg:"Grâce aux tablettes, les élèves peuvent trouver des informations bien plus rapidement qu\'avec un livre.", correct:0, type:'A'},
        {arg:"Un enfant qui a une tablette devant lui aura du mal à rester concentré sur son travail.", correct:1, type:'A'},
        {arg:"Apprendre à bien maîtriser l\'écriture est une étape fondamentale avant de passer aux outils numériques.", correct:1, type:'A'},
        {arg:"Si l\'élève est trop exposé aux écrans, il risque d\'avoir des maux de tête et des problèmes de vue.", correct:1, type:'B'},
        {arg:"Les élèves pourraient partager leurs travaux et collaborer plus facilement grâce aux outils numériques.", correct:0, type:'B'},
      ]
    },
    intentions:[
      {rep:"\"Je ne suis pas d\'accord.\" (Manon)", options:["S\'excuser","Exprimer son désaccord","Encourager Lucas"], correct:1},
      {rep:"\"On pourrait simplement bloquer l\'accès aux sites non éducatifs.\" (Lucas)", options:["Menacer Manon","Proposer une solution","Abandonner son point de vue"], correct:1},
      {rep:"\"Merci à tous les deux pour ce débat passionné !\" (l\'animateur)", options:["Critiquer les deux intervenants","Interrompre le débat brutalement","Clore le débat en remerciant les participants"], correct:2},
      {rep:"\"Les bases sont importantes.\" (Manon)", options:["Insister sur l\'importance des fondamentaux","Reconnaître que Lucas a raison","Changer de sujet pour éviter la discussion"], correct:0},
    ]
  },
  bio:{
    id:'bio', titre:'Manger bio, est-ce vraiment utile ?', emoji:'🌿',
    couleur:'linear-gradient(135deg,#33691e,#7cb342)', bordure:'#7cb342',
    intervenants:['Sofia','Tom'],
    tagA:'🌱 Sofia — Pour le bio', tagB:'🛒 Tom — Contre le bio',
    repliques:[
      {nom:'Animateur', texte:'Bonjour à tous ! Aujourd\'hui, Sofia et Tom débattent d\'un sujet qui concerne nos assiettes : faut-il manger bio ? Sofia, tu commences.', anim:true},
      {nom:'Sofia', texte:'Oui ! Les aliments bio sont cultivés sans pesticides chimiques. Ces produits sont donc meilleurs pour notre santé et pour l\'environnement. Quand on mange bio, on protège aussi les abeilles et les insectes utiles.', couleur:'#388e3c'},
      {nom:'Tom', texte:'Je comprends l\'idée, mais les produits bio coûtent beaucoup plus cher que les produits normaux. Toutes les familles n\'ont pas les moyens de manger bio. Ce n\'est pas juste de demander ça à tout le monde.', couleur:'#f57c00'},
      {nom:'Sofia', texte:'C\'est vrai que c\'est plus cher, mais on peut faire des choix. Acheter des fruits et légumes bio de saison dans les marchés locaux, c\'est souvent moins cher que dans les supermarchés. Et puis, si on mange mieux, on tombe moins malade !', couleur:'#388e3c'},
      {nom:'Tom', texte:'Mais les aliments bio ne sont pas forcément plus nutritifs que les autres. Des études scientifiques montrent que la différence sur la santé est très faible. Et si tout le monde mangeait bio, on ne pourrait pas nourrir toute la planète — l\'agriculture bio produit moins.', couleur:'#f57c00'},
      {nom:'Sofia', texte:'L\'agriculture intensive, elle, détruit les sols et pollue les rivières avec ses engrais chimiques. Sur le long terme, c\'est bien plus dangereux. Il faut penser à la planète que l\'on va laisser aux générations futures.', couleur:'#388e3c'},
      {nom:'Tom', texte:'Je préfère qu\'on améliore les techniques agricoles modernes plutôt que de revenir en arrière. La science peut nous aider à produire suffisamment tout en réduisant les produits chimiques.', couleur:'#f57c00'},
      {nom:'Animateur', texte:'Merci Sofia et Tom pour ce débat très instructif !', anim:true},
    ],
    questions:[
      {q:"Quel est le sujet du débat ?", options:["Faut-il supprimer les fast-foods dans les villes ?","Faut-il manger bio ?","Faut-il devenir végétarien pour sauver la planète ?"], correct:1},
      {q:"Selon Sofia, pourquoi les produits bio sont-ils meilleurs pour l\'environnement ?", options:["Parce qu\'ils sont produits localement et ne nécessitent pas de transport","Parce qu\'ils sont cultivés sans pesticides chimiques et protègent les insectes","Parce qu\'ils utilisent moins d\'eau que l\'agriculture traditionnelle"], correct:1},
      {q:"Quel argument Tom utilise-t-il contre le bio ?", options:["Les produits bio ont mauvais goût comparés aux produits traditionnels","Les produits bio coûtent plus cher et ne sont pas accessibles à toutes les familles","Les produits bio se conservent moins longtemps que les produits normaux"], correct:1},
      {q:"Quel est l\'argument final de Sofia pour défendre le bio ?", options:["Le bio est de plus en plus présent dans les grandes surfaces","L\'agriculture intensive détruit les sols et pollue les rivières","Les médecins recommandent de manger bio au moins trois fois par semaine"], correct:1},
    ],
    attrib:{
      noms:['Sofia','Tom'],
      items:[
        {arg:"Les pesticides utilisés dans l\'agriculture classique sont nocifs pour les abeilles et les autres insectes.", correct:0, type:'A'},
        {arg:"Il serait impossible de nourrir toute la population mondiale uniquement avec des aliments biologiques.", correct:1, type:'A'},
        {arg:"En achetant des produits de saison au marché local, on peut manger bio sans dépenser trop.", correct:0, type:'A'},
        {arg:"Les agriculteurs bio gagnent moins d\'argent car ils produisent moins et leurs coûts sont plus élevés.", correct:1, type:'B'},
        {arg:"En mangeant bio, on soutient les petits producteurs locaux plutôt que les grandes industries alimentaires.", correct:0, type:'B'},
      ]
    },
    intentions:[
      {rep:"\"C\'est vrai que c\'est plus cher, mais on peut faire des choix.\" (Sofia)", options:["Abandonner son point de vue face à l\'argument de Tom","Reconnaître un point faible tout en maintenant sa position","Changer de sujet pour éviter la discussion"], correct:1},
      {rep:"\"La science peut nous aider à produire suffisamment tout en réduisant les produits chimiques.\" (Tom)", options:["Proposer une alternative à l\'agriculture bio","Admettre que Sofia a entièrement raison","Menacer Sofia de mettre fin au débat"], correct:0},
      {rep:"\"Il faut penser à la planète que l\'on va laisser aux générations futures.\" (Sofia)", options:["Critiquer le mode de vie de Tom","Appeler à la responsabilité environnementale","Demander à l\'animateur d\'intervenir"], correct:1},
      {rep:"\"Merci Sofia et Tom pour ce débat très instructif !\" (l\'animateur)", options:["Exprimer sa préférence pour l\'un des deux intervenants","Clore le débat en valorisant les deux participants","Inviter le public à voter pour le meilleur argument"], correct:1},
    ]
  },
  voiture:{
    id:'voiture', titre:'La voiture en ville, faut-il l\'interdire ?', emoji:'🚗',
    couleur:'linear-gradient(135deg,#880e4f,#c2185b)', bordure:'#c2185b',
    intervenants:['Léa','Maxime'],
    tagA:'🚲 Léa — Pour interdire', tagB:'🚗 Maxime — Contre l\'interdiction',
    repliques:[
      {nom:'Animateur', texte:'Bonjour à tous ! Aujourd\'hui, Léa et Maxime débattent d\'un sujet brûlant : faut-il interdire les voitures dans les villes ? Léa, à toi !', anim:true},
      {nom:'Léa', texte:'Je pense qu\'il faudrait interdire les voitures dans les centres-villes. La pollution due aux voitures est responsable de nombreuses maladies respiratoires, surtout chez les enfants. Des villes comme Amsterdam ou Copenhague ont montré que c\'est possible !', couleur:'#c2185b'},
      {nom:'Maxime', texte:'Mais comment les gens feraient-ils pour aller travailler, faire leurs courses ou emmener leurs enfants à l\'école ? Tout le monde n\'habite pas près d\'une gare ou d\'un arrêt de bus. La voiture est indispensable pour beaucoup de personnes.', couleur:'#1565c0'},
      {nom:'Léa', texte:'On pourrait développer les transports en commun et les pistes cyclables. Si les bus et les vélos sont plus pratiques et moins chers, les gens laisseront naturellement leur voiture au garage.', couleur:'#c2185b'},
      {nom:'Maxime', texte:'Développer les transports en commun, ça coûte très cher et ça prend des années. En attendant, les gens ont besoin de leurs voitures maintenant. Et dans les zones rurales comme la nôtre, il n\'y a souvent aucune alternative.', couleur:'#1565c0'},
      {nom:'Léa', texte:'C\'est vrai pour les zones rurales, mais dans les villes, on pourrait commencer par des zones sans voitures dans les centres. Les commerces bénéficieraient même de plus de passages de piétons et de cyclistes !', couleur:'#c2185b'},
      {nom:'Maxime', texte:'Certains commerçants pensent au contraire que supprimer les voitures ferait fuir leurs clients. Et les personnes âgées ou handicapées ont souvent besoin de la voiture pour se déplacer. On ne peut pas les oublier.', couleur:'#1565c0'},
      {nom:'Animateur', texte:'Voilà un débat qui nous touche tous ! Merci Léa et Maxime !', anim:true},
    ],
    questions:[
      {q:"Quel est le sujet du débat ?", options:["Faut-il construire plus de routes dans les villes ?","Faut-il interdire les voitures dans les villes ?","Faut-il rendre les transports en commun gratuits ?"], correct:1},
      {q:"Quel argument Léa utilise-t-elle pour justifier l\'interdiction des voitures ?", options:["Les voitures provoquent trop d\'accidents mortels dans les centres-villes","La pollution des voitures est responsable de maladies respiratoires","Les voitures font trop de bruit et empêchent les habitants de dormir"], correct:1},
      {q:"Pourquoi Maxime pense-t-il que la voiture est indispensable ?", options:["Parce que les voitures électriques ne polluent pas et sont donc acceptables","Parce que tout le monde n\'habite pas près des transports en commun","Parce que les pistes cyclables sont dangereuses pour les enfants"], correct:1},
      {q:"Quel avantage Léa voit-elle pour les commerces sans voitures ?", options:["Les commerces pourraient agrandir leurs terrasses sur les anciennes routes","Les commerces bénéficieraient de plus de passages de piétons et cyclistes","Les commerces économiseraient sur leurs livraisons sans embouteillages"], correct:1},
    ],
    attrib:{
      noms:['Léa','Maxime'],
      items:[
        {arg:"Les émissions de voitures causent des problèmes de santé graves, notamment chez les plus jeunes.", correct:0, type:'A'},
        {arg:"Les personnes âgées et les personnes handicapées ne peuvent pas toujours utiliser les transports en commun.", correct:1, type:'A'},
        {arg:"Si on rend les vélos et les bus plus pratiques, les automobilistes changeront spontanément leurs habitudes.", correct:0, type:'A'},
        {arg:"Interdire les voitures réduirait le bruit dans les villes et améliorerait la qualité de vie des habitants.", correct:0, type:'B'},
        {arg:"Un livreur qui doit approvisionner les magasins du centre-ville ne peut pas le faire à vélo.", correct:1, type:'B'},
      ]
    },
    intentions:[
      {rep:"\"C\'est vrai pour les zones rurales, mais dans les villes, on pourrait commencer par des zones sans voitures.\" (Léa)", options:["Abandonner complètement son point de vue","Nuancer sa position en reconnaissant une limite","Accuser Maxime de ne pas comprendre le problème"], correct:1},
      {rep:"\"Comment les gens feraient-ils pour aller travailler ?\" (Maxime)", options:["Remettre en question la faisabilité de la proposition de Léa","Proposer une solution alternative aux voitures","Approuver l\'idée de Léa tout en exprimant des doutes"], correct:0},
      {rep:"\"Des villes comme Amsterdam ou Copenhague ont montré que c\'est possible !\" (Léa)", options:["Se moquer des villes qui n\'ont pas encore interdit les voitures","Appuyer son argument avec des exemples concrets","Admettre qu\'elle n\'est pas sûre de sa position"], correct:1},
      {rep:"\"On ne peut pas les oublier.\" (Maxime, en parlant des personnes âgées)", options:["Exprimer son inquiétude pour les personnes vulnérables","Critiquer Léa pour ne pas penser aux autres","Demander à l\'animateur de changer de sujet"], correct:0},
    ]
  },
  animal:{
    id:'animal', titre:'Faut-il avoir un animal de compagnie ?', emoji:'🐾',
    couleur:'linear-gradient(135deg,#bf360c,#e64a19)', bordure:'#e64a19',
    intervenants:['Camille','Noah'],
    tagA:'🐕 Camille — Pour', tagB:'🚫 Noah — Contre',
    repliques:[
      {nom:'Animateur', texte:'Bonjour à tous ! Aujourd\'hui, Camille et Noah débattent d\'un sujet qui fait battre le cœur de beaucoup d\'entre vous : faut-il avoir un animal de compagnie ? Camille, tu commences.', anim:true},
      {nom:'Camille', texte:'J\'adore les animaux et je pense qu\'avoir un animal de compagnie est vraiment bénéfique. Un chien ou un chat, ça apporte de la joie, de l\'amour et ça aide à combattre la solitude. Des études montrent même que les personnes qui ont des animaux sont moins stressées !', couleur:'#e64a19'},
      {nom:'Noah', texte:'Je comprends que les animaux soient attachants, mais avoir un animal, c\'est une énorme responsabilité. Il faut les nourrir, les soigner, les promener. Quand on part en vacances, que fait-on de l\'animal ? Ça complique beaucoup la vie.', couleur:'#5c6bc0'},
      {nom:'Camille', texte:'C\'est vrai que c\'est une responsabilité, mais c\'est justement pour ça que c\'est bien ! Les enfants qui s\'occupent d\'un animal apprennent à être responsables, à respecter le vivant et à développer leur empathie.', couleur:'#e64a19'},
      {nom:'Noah', texte:'Peut-être, mais les animaux coûtent très cher. La nourriture, les visites chez le vétérinaire, les vaccins... tout ça représente beaucoup d\'argent. Et certaines personnes adoptent des animaux sans y avoir bien réfléchi, puis les abandonnent. C\'est cruel !', couleur:'#5c6bc0'},
      {nom:'Camille', texte:'Les abandons, c\'est effectivement un problème grave. Mais ce n\'est pas une raison pour dire qu\'il ne faut pas avoir d\'animaux. Il faut juste mieux informer les gens avant l\'adoption. Et pour les enfants malades ou isolés, un animal peut vraiment faire des miracles.', couleur:'#e64a19'},
      {nom:'Noah', texte:'Je préfèrerais qu\'on laisse les animaux vivre librement dans la nature plutôt que de les enfermer dans un appartement. Un chien qui reste seul toute la journée pendant que ses maîtres travaillent, est-ce vraiment une belle vie ?', couleur:'#5c6bc0'},
      {nom:'Animateur', texte:'Un débat plein de cœur ! Merci Camille et Noah !', anim:true},
    ],
    questions:[
      {q:"Quel est le sujet du débat ?", options:["Faut-il interdire les animaux dans les appartements ?","Faut-il avoir un animal de compagnie ?","Faut-il mieux protéger les animaux sauvages ?"], correct:1},
      {q:"Selon Camille, quel bénéfice les animaux apportent-ils aux personnes ?", options:["Ils aident à faire de l\'exercice physique tous les jours","Ils apportent de la joie et réduisent le stress","Ils permettent de faire des économies sur les sorties et loisirs"], correct:1},
      {q:"Quel problème Noah soulève-t-il concernant les animaux et les vacances ?", options:["Les animaux ont peur des voyages en voiture et en avion","Avoir un animal complique l\'organisation des vacances","Les hôtels et campings refusent souvent les animaux de compagnie"], correct:1},
      {q:"Quel argument Noah utilise-t-il à la fin du débat ?", options:["Les animaux sont dangereux pour les jeunes enfants en bas âge","Les animaux seraient mieux dans leur milieu naturel que dans un appartement","Les animaux causent des allergies chez de nombreuses personnes"], correct:1},
    ],
    attrib:{
      noms:['Camille','Noah'],
      items:[
        {arg:"S\'occuper d\'un animal aide les enfants à devenir plus responsables et plus attentionnés.", correct:0, type:'A'},
        {arg:"Les frais liés à un animal — nourriture, soins, vaccins — représentent une dépense importante.", correct:1, type:'A'},
        {arg:"Pour un enfant malade ou seul, la présence d\'un animal peut avoir un effet vraiment positif.", correct:0, type:'A'},
        {arg:"Un animal qui passe ses journées seul dans un petit appartement peut souffrir d\'ennui et d\'anxiété.", correct:1, type:'B'},
        {arg:"Adopter un animal dans un refuge plutôt que de l\'acheter, c\'est lui donner une seconde chance.", correct:0, type:'B'},
      ]
    },
    intentions:[
      {rep:"\"C\'est vrai que c\'est une responsabilité, mais c\'est justement pour ça que c\'est bien !\" (Camille)", options:["Admettre qu\'elle a tort et changer de position","Retourner l\'argument de Noah en sa faveur","Demander à l\'animateur de l\'aider à répondre"], correct:1},
      {rep:"\"Est-ce vraiment une belle vie ?\" (Noah, en parlant du chien seul)", options:["Poser une question rhétorique pour faire réfléchir","Demander l\'avis de Camille sur la question","Admettre qu\'il ne connaît pas la réponse"], correct:0},
      {rep:"\"Il faut juste mieux informer les gens avant l\'adoption.\" (Camille)", options:["Critiquer les personnes qui abandonnent leurs animaux","Proposer une solution au problème des abandons","Reconnaître que Noah a raison sur ce point"], correct:1},
      {rep:"\"Je comprends que les animaux soient attachants, mais...\" (Noah)", options:["Exprimer son accord total avec Camille","Reconnaître un point positif avant d\'introduire une objection","Changer de sujet pour éviter d\'admettre qu\'il a tort"], correct:1},
    ]
  }
};

window.TEXTES_ARG_DATA = {
  devoirs:{
    id:'devoirs', titre:'Faut-il supprimer les devoirs à la maison ?', emoji:'🎒',
    couleur:'linear-gradient(135deg,#1a237e,#3949ab)', bordure:'#3949ab',
    thèse:'Pour la suppression des devoirs',
    texte:`Chaque soir, des milliers d'élèves s'installent à leur bureau pour faire leurs devoirs. Mais est-ce vraiment utile ? Certains pensent que les devoirs devraient être supprimés, et leurs arguments méritent d'être entendus.<br><br>
Tout d'abord, les devoirs <strong>creusent les inégalités</strong> entre les élèves. Un enfant dont les parents peuvent l'aider n'est pas dans la même situation qu'un élève dont les parents travaillent tard ou ne parlent pas bien français. L'école devrait être le seul endroit où l'on apprend, pour que tous les élèves aient les mêmes chances.<br><br>
Ensuite, les devoirs <strong>empiètent sur le temps libre</strong> des enfants. Après une longue journée d'école, les élèves ont besoin de jouer, de se reposer et de faire du sport. Ces activités sont essentielles pour leur développement et leur bien-être.<br><br>
Enfin, des études montrent que les devoirs <strong>n'améliorent pas forcément les résultats scolaires</strong>, surtout au primaire. Ce qui compte, c'est la qualité du travail en classe, pas la quantité de travail à la maison.<br><br>
Pour toutes ces raisons, il serait judicieux de repenser la place des devoirs dans notre système scolaire.`,
    questions:[
      {q:"Quelle est la thèse défendue dans ce texte ?", options:["Les devoirs sont indispensables à la réussite scolaire","Les devoirs devraient être supprimés","Les devoirs devraient être réduits à 30 minutes par soir"], correct:1},
      {q:"Pourquoi les devoirs creusent-ils les inégalités selon l'auteur ?", options:["Parce que certains élèves ont plus de matières que d'autres","Parce que tous les élèves n'ont pas la même aide à la maison","Parce que les devoirs sont trop difficiles pour certains élèves"], correct:1},
      {q:"Quel argument l'auteur utilise-t-il concernant le temps libre ?", options:["Les enfants passent trop de temps sur les écrans au lieu de faire leurs devoirs","Les enfants ont besoin de jouer et se reposer après l'école","Les enfants préfèrent regarder la télévision plutôt que d'étudier"], correct:1},
      {q:"Selon l'auteur, les devoirs améliorent toujours les résultats scolaires.", options:["Vrai","Faux"], correct:1}
    ],
    classif:{
      labels:["Pour la suppression des devoirs","Contre la suppression des devoirs","Pas dans le texte"],
      items:[
        {arg:"Les devoirs creusent les inégalités entre élèves.", correct:0},
        {arg:"Les enfants ont besoin de temps libre pour se développer.", correct:0},
        {arg:"Les devoirs aident à consolider les apprentissages de la journée.", correct:1},
        {arg:"Les devoirs permettent aux parents de suivre les progrès de leurs enfants.", correct:2},
        {arg:"Les études montrent que les devoirs n'améliorent pas forcément les résultats au primaire.", correct:0}
      ]
    }
  },
  ecrans:{
    id:'ecrans', titre:'Les écrans sont-ils dangereux pour les enfants ?', emoji:'📱',
    couleur:'linear-gradient(135deg,#1b5e20,#388e3c)', bordure:'#388e3c',
    thèse:'Les écrans présentent de réels dangers',
    texte:`Tablettes, smartphones, télévisions, consoles de jeux... Les écrans font partie du quotidien des enfants d'aujourd'hui. Mais leur utilisation excessive présente de réels dangers qu'il ne faut pas ignorer.<br><br>
Premièrement, les écrans <strong>nuisent au sommeil</strong>. La lumière bleue émise par les écrans perturbe la production de mélatonine, l'hormone du sommeil. Un enfant qui regarde un écran avant de se coucher dormira moins bien.<br><br>
Deuxièmement, passer trop de temps devant un écran <strong>réduit les activités physiques</strong>. Un enfant sédentaire risque davantage de souffrir d'obésité, de problèmes de dos ou de vue.<br><br>
Troisièmement, les réseaux sociaux et certains jeux vidéo peuvent <strong>créer une dépendance</strong>. Des enfants passent des heures à scroller ou jouer, au détriment de leurs devoirs et de leurs relations familiales.<br><br>
Cela ne signifie pas qu'il faut interdire totalement les écrans. Mais il est indispensable d'en <strong>réguler l'usage</strong>, en fixant des limites claires et en encourageant des activités variées.`,
    questions:[
      {q:"Quelle est la position de l'auteur sur les écrans ?", options:["Il pense qu'il faut interdire totalement les écrans aux enfants","Il pense que les écrans sont dangereux mais qu'il faut en réguler l'usage","Il pense que les écrans sont bénéfiques pour l'apprentissage des enfants"], correct:1},
      {q:"Pourquoi les écrans nuisent-ils au sommeil selon l'auteur ?", options:["Parce que les enfants jouent trop tard le soir","Parce que la lumière bleue perturbe la production de mélatonine","Parce que les contenus des écrans donnent des cauchemars"], correct:1},
      {q:"Quel risque physique l'auteur associe-t-il aux écrans ?", options:["Des maux de tête causés par la lumière trop intense","Des problèmes d'obésité, de dos et de vue liés à la sédentarité","Des troubles auditifs causés par le volume trop élevé"], correct:1},
      {q:"L'auteur pense qu'il faut supprimer complètement les écrans.", options:["Vrai","Faux"], correct:1}
    ],
    classif:{
      labels:["Les écrans sont dangereux","Les écrans ne sont pas dangereux","Pas dans le texte"],
      items:[
        {arg:"La lumière bleue perturbe le sommeil des enfants.", correct:0},
        {arg:"Les écrans peuvent créer une dépendance chez les jeunes.", correct:0},
        {arg:"Les écrans permettent d'apprendre et de découvrir le monde.", correct:1},
        {arg:"Les jeux vidéo améliorent les réflexes et la coordination.", correct:2},
        {arg:"La sédentarité liée aux écrans cause des problèmes de santé.", correct:0}
      ]
    }
  },
  vegetarien:{
    id:'vegetarien', titre:'Doit-on devenir végétarien pour sauver la planète ?', emoji:'🌿',
    couleur:'linear-gradient(135deg,#33691e,#7cb342)', bordure:'#7cb342',
    thèse:'Réduire sa consommation de viande',
    texte:`Face à la crise climatique, de plus en plus de personnes se tournent vers le végétarisme. Manger moins de viande serait l'un des gestes les plus efficaces pour réduire notre impact sur l'environnement.<br><br>
D'abord, l'élevage est l'une des <strong>principales causes du réchauffement climatique</strong>. Les vaches et les moutons produisent du méthane, un gaz à effet de serre très puissant. De plus, l'élevage intensif nécessite d'immenses surfaces agricoles, souvent obtenues en détruisant des forêts.<br><br>
Ensuite, produire de la viande <strong>consomme énormément d'eau et de céréales</strong>. Pour produire 1 kg de bœuf, il faut environ 15 000 litres d'eau et 7 kg de céréales. Ces ressources pourraient nourrir directement bien plus de personnes.<br><br>
Cependant, devenir totalement végétarien <strong>n'est pas forcément réaliste</strong> pour tout le monde. Certaines populations vivent dans des régions où les légumes frais sont rares ou trop chers. L'objectif n'est pas d'éliminer totalement la viande, mais de réduire sa consommation, en particulier la viande rouge.`,
    questions:[
      {q:"Quel gaz à effet de serre est produit par les vaches et les moutons ?", options:["Le dioxyde de carbone rejeté lors de leur digestion","Le méthane, un gaz à effet de serre très puissant","L'oxyde d'azote rejeté dans leurs déjections"], correct:1},
      {q:"Combien d'eau faut-il pour produire 1 kg de bœuf selon le texte ?", options:["Environ 5 000 litres d'eau","Environ 15 000 litres d'eau","Environ 30 000 litres d'eau"], correct:1},
      {q:"Quelle nuance l'auteur apporte-t-il à la fin du texte ?", options:["Il pense que manger de la viande est indispensable pour être en bonne santé","Il reconnaît que devenir totalement végétarien n'est pas réaliste pour tout le monde","Il suggère de remplacer la viande rouge par du poulet uniquement"], correct:1},
      {q:"L'auteur demande à tout le monde de devenir totalement végétarien.", options:["Vrai","Faux"], correct:1}
    ],
    classif:{
      labels:["Pour la diminution de viande","Contre le végétarisme total","Pas dans le texte"],
      items:[
        {arg:"L'élevage produit des gaz à effet de serre.", correct:0},
        {arg:"Produire de la viande consomme énormément d'eau.", correct:0},
        {arg:"Certaines populations ont peu accès aux légumes frais.", correct:1},
        {arg:"Le végétarisme améliore la santé des enfants.", correct:2},
        {arg:"L'élevage détruit des forêts pour créer des surfaces agricoles.", correct:0}
      ]
    }
  },
  uniforme:{
    id:'uniforme', titre:"Faut-il porter un uniforme à l'école ?", emoji:'🏫',
    couleur:'linear-gradient(135deg,#4a148c,#7b1fa2)', bordure:'#7b1fa2',
    thèse:"Pour l'uniforme scolaire",
    texte:`Dans certains pays comme l'Angleterre ou le Japon, tous les élèves portent un uniforme à l'école. En Belgique, cette pratique est rare. Pourtant, l'uniforme scolaire présente de nombreux avantages.<br><br>
Premièrement, l'uniforme <strong>réduit les inégalités visibles</strong>. Quand tout le monde porte les mêmes vêtements, les différences de richesse entre les familles sont moins apparentes. Un élève qui ne peut pas se payer des vêtements à la mode ne se sentira plus jugé.<br><br>
Deuxièmement, l'uniforme <strong>simplifie le quotidien des familles</strong>. Plus besoin de se demander chaque matin quoi mettre ! Cela évite également les dépenses excessives en vêtements tendance, souvent coûteux.<br><br>
Troisièmement, certaines études montrent que le port de l'uniforme <strong>améliore la concentration</strong> des élèves et renforce le sentiment d'appartenance à l'école.<br><br>
Bien sûr, certains élèves regrettent de ne pas pouvoir exprimer leur personnalité à travers leurs vêtements. Mais l'école est avant tout un lieu d'apprentissage, pas un défilé de mode.`,
    questions:[
      {q:"Dans quels pays l'uniforme scolaire est-il mentionné dans le texte ?", options:["En France et en Allemagne","En Angleterre et au Japon","Aux États-Unis et en Chine"], correct:1},
      {q:"Comment l'uniforme réduit-il les inégalités selon l'auteur ?", options:["En empêchant les élèves riches d'apporter des objets de luxe","En rendant les différences de richesse moins visibles entre élèves","En obligeant toutes les familles à acheter les mêmes fournitures"], correct:1},
      {q:"Quel argument l'auteur utilise-t-il concernant les familles ?", options:["L'uniforme évite les dépenses excessives en vêtements tendance","L'uniforme permet aux parents de retrouver facilement leur enfant","L'uniforme évite que les élèves abîment leurs beaux vêtements"], correct:0},
      {q:"L'auteur pense que l'école est avant tout un lieu pour s'exprimer à travers les vêtements.", options:["Vrai","Faux"], correct:1}
    ],
    classif:{
      labels:["Pour l'uniforme","Contre l'uniforme","Pas dans le texte"],
      items:[
        {arg:"L'uniforme réduit les inégalités visibles entre élèves.", correct:0},
        {arg:"Les élèves ne peuvent plus exprimer leur personnalité.", correct:1},
        {arg:"L'uniforme simplifie le quotidien et réduit les dépenses.", correct:0},
        {arg:"L'uniforme améliore les relations entre enseignants et élèves.", correct:2},
        {arg:"L'uniforme renforce le sentiment d'appartenance à l'école.", correct:0}
      ]
    }
  },
  lecture:{
    id:'lecture', titre:"L'importance de lire", emoji:'📚',
    couleur:'linear-gradient(135deg,#bf360c,#e64a19)', bordure:'#e64a19',
    thèse:'Pour la lecture',
    texte:`À l'heure des écrans et des réseaux sociaux, certains jeunes lisent de moins en moins. C'est dommage, car la lecture est l'une des activités les plus bénéfiques pour le développement d'un enfant.<br><br>
Tout d'abord, lire <strong>enrichit le vocabulaire et améliore l'expression écrite</strong>. Un élève qui lit régulièrement dispose d'un bagage de mots beaucoup plus riche, ce qui lui permet de mieux s'exprimer, aussi bien à l'oral qu'à l'écrit.<br><br>
Ensuite, la lecture <strong>développe l'imagination et la créativité</strong>. En lisant un roman, l'élève visualise les personnages, les lieux, les situations. Il construit dans sa tête des images que personne d'autre ne verra exactement de la même façon.<br><br>
De plus, lire permet de <strong>mieux comprendre le monde et les autres</strong>. Les livres nous font voyager dans d'autres pays, d'autres époques, d'autres cultures. Ils nous aident à développer notre empathie en nous mettant à la place de personnages très différents de nous.<br><br>
Alors, la prochaine fois que tu t'ennuies, pose ton téléphone et ouvre un livre. Tu ne le regretteras pas !`,
    questions:[
      {q:"Selon l'auteur, quel est l'un des premiers bénéfices de la lecture ?", options:["Elle permet d'apprendre des langues étrangères sans effort","Elle enrichit le vocabulaire et améliore l'expression écrite","Elle aide à mémoriser les leçons apprises à l'école"], correct:1},
      {q:"Comment la lecture développe-t-elle l'imagination selon le texte ?", options:["En proposant des exercices créatifs après chaque chapitre","En obligeant le lecteur à visualiser mentalement ce qu'il lit","En racontant des histoires impossibles qui font rêver"], correct:1},
      {q:"Comment la lecture aide-t-elle à comprendre les autres ?", options:["Elle nous apprend à reconnaitre les différentes cultures","Elle nous met à la place de personnages différents de nous","Elle nous explique comment résoudre les conflits"], correct:1},
      {q:"L'auteur pense que les écrans sont plus bénéfiques que la lecture.", options:["Vrai","Faux"], correct:1}
    ],
    classif:{
      labels:["Pour la lecture","Contre la lecture","Pas dans le texte"],
      items:[
        {arg:"La lecture enrichit le vocabulaire et améliore l'expression écrite.", correct:0},
        {arg:"La lecture développe l'empathie envers les autres.", correct:0},
        {arg:"Lire est ennuyeux et démotive les enfants à apprendre.", correct:1},
        {arg:"La lecture améliore les résultats en mathématiques.", correct:2},
        {arg:"La lecture développe l'imagination et la créativité.", correct:0}
      ]
    }
  },
  alimentation:{
    id:'alimentation', titre:'Bien manger pour bien grandir', emoji:'🥦',
    couleur:'linear-gradient(135deg,#006064,#00897b)', bordure:'#00897b',
    thèse:'Pour une alimentation saine',
    texte:`Tu as sûrement déjà entendu l'expression : "On est ce qu'on mange." Et c'est vrai ! Une alimentation saine et équilibrée est indispensable pour grandir en bonne santé et bien apprendre à l'école.<br><br>
Premièrement, une bonne alimentation <strong>donne de l'énergie</strong>. Le cerveau a besoin de glucides, de protéines et de bonnes graisses pour fonctionner correctement. Un élève qui mange sainement sera plus concentré en classe.<br><br>
Deuxièmement, manger des fruits et légumes <strong>renforce le système immunitaire</strong>. Les vitamines et minéraux qu'ils contiennent aident le corps à se défendre contre les maladies. Un enfant qui mange varié tombe moins souvent malade.<br><br>
Troisièmement, les <strong>bonnes habitudes alimentaires prises dans l'enfance durent toute la vie</strong>. Un enfant qui apprend à apprécier les légumes et les céréales complètes aura beaucoup plus de chances d'avoir une alimentation équilibrée à l'âge adulte.<br><br>
Bien manger ne veut pas dire ne jamais manger de gâteaux ou de chips. Cela signifie trouver un équilibre et faire de bonnes habitudes une priorité.`,
    questions:[
      {q:"Selon l'auteur, pourquoi le cerveau a-t-il besoin d'une bonne alimentation ?", options:["Pour produire des hormones qui régulent les émotions","Pour fonctionner correctement et être concentré en classe","Pour mémoriser plus facilement les leçons"], correct:1},
      {q:"Quel effet les fruits et légumes ont-ils sur la santé selon le texte ?", options:["Ils renforcent les muscles et permettent de faire plus de sport","Ils aident le corps à se défendre contre les maladies","Ils améliorent la vue et réduisent la fatigue oculaire"], correct:1},
      {q:"Que signifie bien manger selon l'auteur ?", options:["Ne jamais manger de sucreries ni de produits industriels","Trouver un équilibre et adopter de bonnes habitudes alimentaires","Manger uniquement des fruits, légumes et céréales complètes"], correct:1},
      {q:"Selon l'auteur, les bonnes habitudes alimentaires prises dans l'enfance disparaissent à l'âge adulte.", options:["Vrai","Faux"], correct:1}
    ],
    classif:{
      labels:["Pour une alimentation saine","Contre une alimentation saine","Pas dans le texte"],
      items:[
        {arg:"Une bonne alimentation améliore la concentration à l'école.", correct:0},
        {arg:"Manger des légumes renforce le système immunitaire.", correct:0},
        {arg:"Les bonnes habitudes alimentaires coûtent trop cher pour certaines familles.", correct:1},
        {arg:"Une mauvaise alimentation provoque des difficultés de lecture.", correct:2},
        {arg:"Les bonnes habitudes alimentaires prises enfant durent toute la vie.", correct:0}
      ]
    }
  },
  reseaux:{
    id:'reseaux', titre:'Les réseaux sociaux : un monde à double tranchant', emoji:'📲',
    couleur:'linear-gradient(135deg,#880e4f,#c2185b)', bordure:'#c2185b',
    thèse:'Les réseaux sociaux ont des avantages et des inconvénients',
    texte:`Instagram, TikTok, Snapchat, YouTube... Les réseaux sociaux font partie de la vie de millions de jeunes. Mais sont-ils vraiment une bonne chose ? La réponse n'est pas simple, car les réseaux sociaux ont à la fois des avantages et des inconvénients.<br><br>
D'un côté, les réseaux sociaux permettent de <strong>rester en contact avec ses amis et sa famille</strong>, même à distance. Ils offrent aussi un espace pour s'exprimer, partager ses créations et découvrir des contenus éducatifs ou inspirants.<br><br>
Mais d'un autre côté, les réseaux sociaux peuvent être <strong>dangereux</strong>. Certains jeunes passent des heures à faire défiler des images sans s'en rendre compte. Cette utilisation excessive peut provoquer de l'anxiété, une baisse de l'estime de soi ou des troubles du sommeil.<br><br>
De plus, les réseaux sociaux exposent les jeunes à des <strong>contenus inappropriés, à la désinformation et au cyberharcèlement</strong>. Des études montrent que les adolescents qui passent plus de trois heures par jour sur les réseaux sociaux sont plus susceptibles de souffrir de problèmes de santé mentale.<br><br>
Il est donc essentiel d'apprendre aux jeunes à utiliser les réseaux sociaux de façon <strong>responsable</strong> : en limitant le temps d'écran, en vérifiant les informations et en ne partageant jamais d'informations personnelles.`,
    questions:[
      {q:"Quelle est la position de l'auteur sur les réseaux sociaux ?", options:["Il pense que les réseaux sociaux sont uniquement dangereux","Il pense que les réseaux sociaux ont à la fois des avantages et des inconvénients","Il pense que les réseaux sociaux sont indispensables à la vie sociale"], correct:1},
      {q:"Quel avantage des réseaux sociaux est mentionné dans le texte ?", options:["Ils permettent d'apprendre des langues étrangères facilement","Ils permettent de rester en contact avec ses proches et de partager ses créations","Ils offrent des jeux éducatifs gratuits pour tous les âges"], correct:1},
      {q:"Combien d'heures par jour sur les réseaux sociaux est considéré comme risqué ?", options:["Plus d'une heure par jour","Plus de deux heures par jour","Plus de trois heures par jour"], correct:2},
      {q:"L'auteur conseille d'interdire complètement les réseaux sociaux aux jeunes.", options:["Vrai","Faux"], correct:1}
    ],
    classif:{
      labels:["Avantage des réseaux sociaux","Inconvénient des réseaux sociaux","Pas dans le texte"],
      items:[
        {arg:"Les réseaux sociaux permettent de rester en contact avec ses amis.", correct:0},
        {arg:"Les réseaux sociaux peuvent provoquer de l'anxiété.", correct:1},
        {arg:"Les réseaux sociaux exposent les jeunes à la désinformation.", correct:1},
        {arg:"Les réseaux sociaux aident les jeunes à trouver du travail.", correct:2},
        {arg:"Les réseaux sociaux offrent un espace pour partager ses créations.", correct:0}
      ]
    }
  }
};

window.CONNECTEURS_POOL = [
  // TEMPS / ORDRE
  {cat:'⏱️ Temps', avant:'Lucas se leva tôt le matin.', trou:true, apres:'il prit son petit-déjeuner tranquillement avant de partir à l\'école.', options:['Pourtant','Ensuite','Car','Donc'], correct:1, explication:'"Ensuite" indique ce qui se passe après dans le temps.'},
  {cat:'⏱️ Temps', avant:'', trou:false, apres:'les nuages s\'amoncelèrent dans le ciel et la pluie commença à tomber.', options:['Car','De plus','Soudain','Pourtant'], correct:2, explication:'"Soudain" indique un changement brusque et inattendu.'},
  {cat:'⏱️ Temps', avant:'Emma prépara ses affaires,', trou:true, apres:'elle mit son manteau et quitta la maison.', options:['pourtant','car','puis','donc'], correct:2, explication:'"Puis" indique ce qui vient juste après dans le temps.'},
  {cat:'⏱️ Temps', avant:'Les élèves travaillèrent dur toute la semaine.', trou:true, apres:'ils purent profiter de leur week-end sans stress.', options:['Pourtant','Car','Soudain','Finalement'], correct:3, explication:'"Finalement" indique ce qui se passe en dernier, au terme d\'un processus.'},
  {cat:'⏱️ Temps', avant:'', trou:false, apres:'les enfants ramassèrent leurs jouets, puis ils allèrent se laver les mains avant le repas.', options:['Pourtant','D\'abord','Donc','En effet'], correct:1, explication:'"D\'abord" indique la première étape d\'une série d\'actions.'},
  {cat:'⏱️ Temps', avant:'Le héros traversa la forêt, affronta le dragon et', trou:true, apres:'rentra chez lui, épuisé mais victorieux.', options:['pourtant','car','enfin','de plus'], correct:2, explication:'"Enfin" indique la dernière étape d\'une série d\'actions.'},
  {cat:'⏱️ Temps', avant:'', trou:false, apres:'un bruit étrange brisa le silence de la nuit et réveilla tout le monde.', options:['Soudain','Donc','Car','En revanche'], correct:0, explication:'"Soudain" marque un événement inattendu et brusque.'},
  {cat:'⏱️ Temps', avant:'La famille passa d\'abord la journée à la mer,', trou:true, apres:'elle rentra à la maison en fin d\'après-midi.', options:['pourtant','car','puis','en revanche'], correct:2, explication:'"Puis" indique ce qui vient après dans le temps.'},
  // ADDITION
  {cat:'➕ Addition', avant:'Ce livre est passionnant.', trou:true, apres:'il est très bien illustré.', options:['Pourtant','Car','De plus','Donc'], correct:2, explication:'"De plus" ajoute une information supplémentaire à ce qui précède.'},
  {cat:'➕ Addition', avant:'Le chat est doux et affectueux. Il est', trou:true, apres:'très facile à entretenir.', options:['pourtant','également','car','soudain'], correct:1, explication:'"Également" signifie "aussi" et ajoute une qualité supplémentaire.'},
  {cat:'➕ Addition', avant:'Léa adore le sport. Elle aime', trou:true, apres:'lire et dessiner pendant son temps libre.', options:['pourtant','car','aussi','donc'], correct:2, explication:'"Aussi" ajoute une information complémentaire.'},
  {cat:'➕ Addition', avant:'Ce pays est magnifique.', trou:true, apres:'ses habitants sont chaleureux et accueillants.', options:['Pourtant','Car','Soudain','De plus'], correct:3, explication:'"De plus" permet d\'ajouter un nouvel argument ou une nouvelle information.'},
  {cat:'➕ Addition', avant:'Le chien de Tom est très intelligent.', trou:true, apres:'il a appris à ouvrir les portes tout seul.', options:['Pourtant','En effet','Donc','Ensuite'], correct:1, explication:'"En effet" introduit une précision ou une preuve qui confirme ce qui précède.'},
  {cat:'➕ Addition', avant:'La météo était mauvaise.', trou:true, apres:'le match de football a été annulé.', options:['De plus','Pourtant','Soudain','Car'], correct:0, explication:'"De plus" ajoute une conséquence ou une information supplémentaire.'},
  // OPPOSITION
  {cat:'↔️ Opposition', avant:'Tom voulait aller jouer dehors,', trou:true, apres:'il pleuvait des cordes.', options:['donc','car','mais','ensuite'], correct:2, explication:'"Mais" introduit une opposition ou un obstacle.'},
  {cat:'↔️ Opposition', avant:'Sarah avait beaucoup travaillé.', trou:true, apres:'ses résultats n\'étaient pas très bons.', options:['Donc','Car','Pourtant','Ensuite'], correct:2, explication:'"Pourtant" marque une opposition surprenante entre deux faits.'},
  {cat:'↔️ Opposition', avant:'Paul aime le chocolat.', trou:true, apres:'il n\'en mange presque jamais pour rester en bonne santé.', options:['Car','Donc','Ensuite','Cependant'], correct:3, explication:'"Cependant" introduit une restriction ou une nuance par rapport à ce qui précède.'},
  {cat:'↔️ Opposition', avant:'Le film était long.', trou:true, apres:'il était tellement captivant que personne ne vit le temps passer.', options:['Car','Donc','Pourtant','Ensuite'], correct:2, explication:'"Pourtant" exprime une opposition inattendue entre deux idées.'},
  {cat:'↔️ Opposition', avant:'Julie préfère la ville.', trou:true, apres:'son frère rêve de vivre à la campagne.', options:['Car','Donc','Ensuite','En revanche'], correct:3, explication:'"En revanche" oppose deux idées ou deux personnes qui pensent différemment.'},
  {cat:'↔️ Opposition', avant:'Max est très bavard en classe.', trou:true, apres:'il devient très timide dès qu\'il rencontre de nouvelles personnes.', options:['Car','Donc','Ensuite','En revanche'], correct:3, explication:'"En revanche" marque un contraste fort entre deux comportements.'},
  {cat:'↔️ Opposition', avant:'Le lion est féroce et imposant.', trou:true, apres:'le chat est doux et familier.', options:['Car','Donc','En revanche','Ensuite'], correct:2, explication:'"En revanche" oppose deux réalités contrastées.'},
  {cat:'↔️ Opposition', avant:'Malgré la fatigue,', trou:true, apres:'les joueurs continuèrent à courir jusqu\'au coup de sifflet final.', options:['car','donc','pourtant','ensuite'], correct:2, explication:'"Pourtant" exprime que quelque chose se passe malgré un obstacle.'},
  // CAUSE
  {cat:'🔍 Cause', avant:'Léo était épuisé', trou:true, apres:'il avait couru pendant deux heures sans s\'arrêter.', options:['donc','pourtant','ensuite','car'], correct:3, explication:'"Car" explique la raison — il était fatigué pour cette raison.'},
  {cat:'🔍 Cause', avant:'La route était fermée', trou:true, apres:'des travaux avaient commencé la nuit précédente.', options:['donc','pourtant','parce que','ensuite'], correct:2, explication:'"Parce que" introduit la cause directe d\'un fait.'},
  {cat:'🔍 Cause', avant:'', trou:false, apres:'il avait oublié son parapluie, Tom fut trempé jusqu\'aux os.', options:['Donc','Pourtant','Puisque','Ensuite'], correct:2, explication:'"Puisque" introduit une cause présentée comme évidente ou connue.'},
  {cat:'🔍 Cause', avant:'Emma ne put pas participer au spectacle', trou:true, apres:'elle était malade ce jour-là.', options:['donc','pourtant','car','ensuite'], correct:2, explication:'"Car" introduit l\'explication d\'une situation.'},
  {cat:'🔍 Cause', avant:'Les élèves étaient contents', trou:true, apres:'la maîtresse avait annulé le contrôle.', options:['donc','pourtant','ensuite','parce que'], correct:3, explication:'"Parce que" explique pourquoi les élèves étaient contents.'},
  {cat:'🔍 Cause', avant:'', trou:false, apres:'il fait très chaud en été, il est important de bien s\'hydrater.', options:['Pourtant','Ensuite','Puisque','Donc'], correct:2, explication:'"Puisque" présente la chaleur comme une cause évidente.'},
  {cat:'🔍 Cause', avant:'', trou:false, apres:'les hivers sont très froids dans cette région, les habitants portent des vêtements très chauds.', options:['Donc','Pourtant','Ensuite','Comme'], correct:3, explication:'"Comme" peut introduire une cause en début de phrase.'},
  // CONSEQUENCE
  {cat:'🎯 Conséquence', avant:'Il avait neigé toute la nuit.', trou:true, apres:'les routes étaient dangereuses le lendemain matin.', options:['Pourtant','Car','Donc','Ensuite'], correct:2, explication:'"Donc" introduit la conséquence logique de ce qui précède.'},
  {cat:'🎯 Conséquence', avant:'Nina avait étudié très sérieusement.', trou:true, apres:'elle réussit son examen avec une très bonne note.', options:['Pourtant','Car','Ensuite','C\'est pourquoi'], correct:3, explication:'"C\'est pourquoi" introduit le résultat logique d\'une situation.'},
  {cat:'🎯 Conséquence', avant:'La tempête avait été très violente.', trou:true, apres:'plusieurs arbres s\'étaient effondrés sur la route.', options:['Pourtant','Car','Ainsi','Ensuite'], correct:2, explication:'"Ainsi" introduit une conséquence ou un résultat.'},
  {cat:'🎯 Conséquence', avant:'Le petit garçon avait mangé trop de bonbons. Il avait', trou:true, apres:'très mal au ventre.', options:['pourtant','car','donc','ensuite'], correct:2, explication:'"Donc" introduit la conséquence directe d\'une action.'},
  {cat:'🎯 Conséquence', avant:'Les pompiers étaient arrivés très vite.', trou:true, apres:'l\'incendie fut rapidement maîtrisé.', options:['Pourtant','Car','Ensuite','C\'est pourquoi'], correct:3, explication:'"C\'est pourquoi" relie la cause à son effet.'},
  {cat:'🎯 Conséquence', avant:'La fillette avait oublié son manteau. Elle avait', trou:true, apres:'très froid en rentrant de l\'école.', options:['pourtant','donc','car','ensuite'], correct:1, explication:'"Donc" exprime la conséquence logique d\'un oubli.'},
  {cat:'🎯 Conséquence', avant:'Le soleil brillait fort.', trou:true, apres:'les enfants décidèrent de passer la journée à la piscine.', options:['Pourtant','Car','Alors','Ensuite'], correct:2, explication:'"Alors" introduit une décision prise en réponse à une situation.'},
  // ILLUSTRATION
  {cat:'🔁 Exemple', avant:'Les animaux de la ferme sont très utiles.', trou:true, apres:'les poules nous donnent des œufs chaque jour.', options:['Pourtant','Donc','Par exemple','Car'], correct:2, explication:'"Par exemple" introduit un exemple concret pour illustrer une idée.'},
  {cat:'🔁 Exemple', avant:'Il existe de nombreuses façons de protéger la planète,', trou:true, apres:'éteindre les lumières ou trier ses déchets.', options:['pourtant','car','comme','donc'], correct:2, explication:'"Comme" introduit des exemples pour illustrer une idée générale.'},
  {cat:'🔁 Exemple', avant:'Les sports d\'hiver sont très variés.', trou:true, apres:'on peut faire du ski, du patin à glace ou du snowboard.', options:['Pourtant','Car','Donc','Par exemple'], correct:3, explication:'"Par exemple" introduit des exemples concrets.'},
  {cat:'🔁 Exemple', avant:'Certains métiers demandent beaucoup de courage,', trou:true, apres:'pompier, médecin urgentiste ou sauveteur.', options:['pourtant','comme','donc','car'], correct:1, explication:'"Comme" introduit des exemples pour illustrer l\'idée générale.'},
];

window.POEMES_DATA = {
  cancre:{
    id:'cancre', titre:'Le Cancre', auteur:'Jacques Prévert', annee:'1946',
    emoji:'😄', couleur:'linear-gradient(135deg,#e65100,#ff6d00)', borderColor:'#e65100',
    texte:"Il dit non avec la tête\nmais il dit oui avec le coeur\nil dit oui à ce qu'il aime\nil dit non au professeur\nil est debout\non le questionne\net tous les problèmes sont posés\nsoudain le fou rire le prend\net il efface tout\nles chiffres et les mots\nles dates et les noms\nles phrases et les pièges\net malgré les menaces du maître\nsous les huées des enfants prodiges\navec des craies de toutes les couleurs\nsur le tableau noir du malheur\nil dessine le visage du bonheur.",
    questions:[
      {q:"Que fait le cancre quand on lui pose des questions ?", options:["Il répond correctement à toutes les questions du professeur","Il est pris d'un fou rire et efface tout au tableau","Il sort de la classe sans demander la permission"], correct:1},
      {q:"Que signifie il dit non avec la tête mais il dit oui avec le coeur ?", options:["Il est d'accord avec le professeur mais fait semblant de refuser","Il refuse ce qu'on lui impose mais suit ce qu'il aime vraiment","Il est trop timide pour répondre à voix haute en classe"], correct:1},
      {q:"Que dessine le cancre à la fin du poème ?", options:["Le portrait du professeur pour se moquer de lui","Des figures géométriques pour résoudre les problèmes","Le visage du bonheur sur le tableau noir du malheur"], correct:2},
    ],
    vf:[
      {q:"Les autres élèves encouragent le cancre quand il efface tout.", correct:1},
      {q:"Le cancre utilise des craies de toutes les couleurs pour dessiner.", correct:0},
    ],
    figureStyle:{q:"Dans le poème, Prévert parle du tableau noir du malheur. Que veut-il dire ?", options:["Le tableau est sale et mal entretenu par le professeur","L'école représente la contrainte et la tristesse opposée au bonheur du cancre","Le tableau représente l'école que le cancre n'aime vraiment pas."], correct:2},
    message:{q:"Quel est le message principal de ce poème ?", options:["Les bons élèves sont toujours plus heureux que les mauvais","Il vaut mieux écouter son professeur que suivre ses envies","Suivre ce qu'on aime vraiment est plus important que de réussir à l'école"], correct:2},
  },
  ecriture:{
    id:'ecriture', titre:"Page d'écriture", auteur:'Jacques Prévert', annee:'1946',
    emoji:'🐦', couleur:'linear-gradient(135deg,#1565c0,#1976d2)', borderColor:'#1565c0',
    texte:"Deux et deux quatre\nquatre et quatre huit\nhuit et huit font seize...\nRépétez ! dit le maître\nDeux et deux quatre\nquatre et quatre huit\nhuit et huit font seize.\nMais voilà l'oiseau-lyre\nqui passe dans le ciel\nl'enfant le voit\nl'enfant l'entend\nl'enfant l'appelle :\nSauve-moi\njoue avec moi\noiseau !\nAlors l'oiseau descend\net joue avec l'enfant\nDeux et deux quatre...\nRépétez ! dit le maître\net l'enfant joue\nl'oiseau joue avec lui...\nQuatre et quatre huit\nhuit et huit font seize\net seize et seize qu'est-ce qu'ils font ?\nIls ne font rien seize et seize\net surtout pas trente-deux\nde toute façon\net ils s'en vont.\nL'enfant a caché l'oiseau dans son pupitre\net tous les enfants\nentendent sa chanson\net tous les enfants\nentendent la musique\net huit et huit à leur tour s'en vont\net quatre et quatre et deux et deux\nà leur tour fichent le camp\net un et un ne font ni une ni deux\nun à un s'en vont également.\nEt l'oiseau-lyre joue\net l'enfant chante\net le professeur crie :\nQuand vous aurez fini de faire le pitre !\nMais tous les autres enfants\nécoutent la musique\net les murs de la classe\ns'écroulent tranquillement.\nEt les vitres redeviennent sable\nl'encre redevient eau\nles pupitres redeviennent arbres\nla craie redevient falaise\nle porte-plume redevient oiseau.",
    questions:[
      {q:"Que fait l'enfant quand l'oiseau-lyre arrive dans la classe ?", options:["Il continue à répéter ses tables de multiplication sagement","Il cache l'oiseau dans son pupitre et joue avec lui","Il attrape l'oiseau et le montre au professeur"], correct:1},
      {q:"Que se passe-t-il avec les chiffres quand l'oiseau chante ?", options:["Les chiffres deviennent de plus en plus grands et compliqués","Les chiffres s'envolent et disparaissent un à un","Les chiffres se transforment en lettres sur le tableau"], correct:1},
      {q:"Que devient la craie à la fin du poème ?", options:["Elle tombe par terre et se brise en mille morceaux","Elle redevient un oiseau","Elle redevient de la falaise blanche au bord de la mer"], correct:1},
    ],
    vf:[
      {q:"Seul l'enfant entend la chanson de l'oiseau, les autres élèves continuent à travailler.", correct:1},
      {q:"À la fin du poème, les murs de la classe s'écroulent.", correct:0},
    ],
    figureStyle:{q:"À la fin du poème, l'encre redevient eau, les pupitres redeviennent arbres, la craie redevient oiseau. Que veut dire Prévert ?", options:["La classe prend feu et tout brûle à cause de l'oiseau","La nature reprend ses droits et libère les enfants de l'école","L'oiseau est en réalité un magicien qui transforme les objets"], correct:1},
    message:{q:"Quel message Prévert veut-il faire passer dans ce poème ?", options:["Il faut toujours bien écouter son professeur et apprendre ses leçons","La liberté et la nature sont plus importantes que les règles imposées à l'école","Les oiseaux sont dangereux car ils perturbent le travail en classe"], correct:1},
  },
  dormeur:{
    id:'dormeur', titre:'Le Dormeur du val', auteur:'Arthur Rimbaud', annee:'1870',
    emoji:'🌿', couleur:'linear-gradient(135deg,#2e7d32,#388e3c)', borderColor:'#2e7d32',
    texte:"C'est un trou de verdure où chante une rivière\nAccrochant follement aux herbes des haillons\nD'argent ; où le soleil, de la montagne fière,\nLuit : c'est un petit val qui mousse de rayons.\n\nUn soldat jeune, bouche ouverte, tête nue,\nEt la nuque baignant dans le frais cresson bleu,\nDort ; il est étendu dans l'herbe, sous la nue,\nPâle dans son lit vert où la lumière pleut.\n\nLes pieds dans les glaïeuls, il dort. Souriant comme\nSourirait un enfant malade, il fait un somme :\nNature, berce-le chaudement : il a froid.\n\nLes parfums ne font pas frissonner sa narine ;\nIl dort dans le soleil, la main sur sa poitrine,\nTransquille. Il a deux trous rouges au côté droit.",
    questions:[
      {q:"Où se passe la scène décrite dans ce poème ?", options:["Dans une tranchée boueuse au milieu d'un champ de bataille","Dans un val verdoyant traversé par une rivière ensoleillée","Dans une forêt sombre et froide au bord d'un lac"], correct:1},
      {q:"Comment le soldat est-il décrit au début du poème ?", options:["Il court dans la prairie en tenant son fusil","Il est allongé dans l'herbe, la bouche ouverte, la tête nue","Il est assis contre un arbre, les yeux grands ouverts"], correct:1},
      {q:"Que découvre-t-on à la toute dernière ligne du poème ?", options:["Que le soldat rêve d'une belle journée d'été dans la nature","Que le soldat s'est endormi après une longue marche épuisante","Que le soldat est en réalité mort, blessé au côté droit"], correct:2},
    ],
    vf:[
      {q:"Rimbaud décrit la nature de façon triste et sombre pour annoncer la mort du soldat.", correct:1},
      {q:"Le soldat a les pieds dans les glaïeuls.", correct:0},
    ],
    figureStyle:{q:"Rimbaud compare l'herbe à un lit vert. Qu'est-ce que cette image exprime ?", options:["L'herbe est si haute qu'elle cache complètement le soldat endormi","La nature accueille tendrement le soldat comme dans un vrai lit","Le soldat a fabriqué un lit de camp avec des herbes coupées"], correct:1},
    message:{q:"Quel est l'effet produit par la révélation finale du poème ?", options:["Le lecteur est soulagé car il pensait que le soldat était malade","Le lecteur est surpris et choqué car toute la beauté décrite cachait la mort","Le lecteur est triste mais s'y attendait car le poème donnait des indices clairs"], correct:1},
  },
  sorciere:{
    id:'sorciere', titre:'Drôle de bonne femme', auteur:'Maurice Carême', annee:'',
    emoji:'🧙', couleur:'linear-gradient(135deg,#6a1b9a,#8e24aa)', borderColor:'#6a1b9a',
    texte:"Chapeau pointu et gros derrière,\nLongs doigts crochus et sales manières,\nCheveux grisâtres longs jusqu'à terre,\nElle est comme ça Marie-Mémère !\n\nBave de crapaud et ver de terre,\nAraignée noire et feuille de lierre,\nAjouter un pot de poussière,\nVoilà la recette qu'elle préfère.\n\nEt son balai qui fend les airs,\nQui marche avant, qui marche arrière,\nC'est pour aller voir ses commères\nOu jeter des sorts sur la terre.\n\nChapeau pointu et gros derrière,\nMarie-Mémère est une sorcière,\nQui habite loin d'ici, j'espère !",
    questions:[
      {q:"Comment s'appelle la sorcière décrite dans ce poème ?", options:["Marie-Madeleine","Marie-Mémère","Marie-Mystère"], correct:1},
      {q:"À quoi sert le balai de la sorcière selon le poème ?", options:["À nettoyer sa maison et à préparer ses potions magiques","À voler dans les airs pour voir ses amies ou jeter des sorts","À effrayer les enfants qui passent devant sa maison"], correct:1},
      {q:"Quels ingrédients la sorcière utilise-t-elle dans sa recette préférée ?", options:["Des herbes fraîches, des fleurs séchées et de la poudre d'étoile","De la bave de crapaud, des vers de terre, une araignée et de la poussière","Du sang de dragon, des ailes de chauve-souris et des plumes de hibou"], correct:1},
    ],
    vf:[
      {q:"La sorcière a les cheveux courts et soignés.", correct:1},
      {q:"Le poète dit qu'il espère que Marie-Mémère habite loin de chez lui.", correct:0},
    ],
    figureStyle:{q:"Dans le poème, presque tous les vers se terminent par le son ère. Comment appelle-t-on ce procédé poétique ?", options:["Une métaphore","Une rime","Une comparaison"], correct:1},
    message:{q:"Quel est le ton de ce poème ?", options:["Effrayant et mystérieux — le poète veut faire peur au lecteur","Triste et mélancolique — le poète plaint la pauvre sorcière","Amusant et humoristique — le poète décrit la sorcière de façon comique"], correct:2},
  },
};

window.CONTES_DATA = {
  chatbotte:{
    id:'chatbotte', titre:'Le Chat Botté', auteur:'Charles Perrault',
    emoji:'🐱', couleur:'linear-gradient(135deg,#8b3a00,#e07b00)', borderColor:'#e07b00',
    sections:[
      {label:'Situation initiale', icon:'🟡', color:'#f0a000', texte:"Il était une fois un meunier qui, en mourant, ne laissa à ses trois fils que son moulin, son âne et son chat. L'aîné reçut le moulin, le second eut l'âne, et le benjamin n'hérita que du chat. Le jeune homme était bien triste : comment allait-il survivre avec un simple animal ? Mais le chat, qui était fort malin, lui dit : « Ne vous inquiétez pas, maître. Donnez-moi un sac et faites-moi faire une paire de bottes, et vous verrez que vous n'êtes pas si mal loti que vous le croyez. »"},
      {label:'Élément perturbateur', icon:'🔴', color:'#e74c3c', texte:"Le jeune homme fit confiance à son chat. Celui-ci chaussa ses bottes, prit son sac, y mit des herbes et attendit que des lapins viennent s'y prendre. Il porta ensuite sa prise au roi en disant : « Sire, voici un présent de la part de mon maître, le marquis de Carabas. » Le roi, flatté, accepta le cadeau avec plaisir. Le chat répéta cette ruse plusieurs fois, apportant toujours des cadeaux au roi au nom de ce mystérieux marquis."},
      {label:'Péripéties', icon:'🟠', color:'#e67e22', texte:"Un jour, le chat apprit que le roi allait se promener en carrosse avec sa fille. Il dit à son maître : « Baignez-vous dans la rivière ! » Pendant que le jeune homme se baignait, le carrosse passa. Le chat cria : « Au secours ! Mon maître, le marquis de Carabas, se noie ! » Le roi fit sauver le jeune homme et l'habilla de beaux vêtements. La princesse en tomba amoureuse. Le chat courut en avant et ordonna aux paysans de dire que ces terres appartenaient au marquis. Enfin, il arriva au château d'un terrible ogre qui pouvait se transformer en n'importe quel animal. « Pouvez-vous vous changer en souris ? » demanda-t-il. L'ogre, fier de ses pouvoirs, se transforma en souris. Le chat l'attrapa et le dévora aussitôt."},
      {label:'Résolution', icon:'🟢', color:'#27ae60', texte:"Quand le carrosse royal arriva au château, le chat accueillit le roi en disant : « Bienvenue dans le château de mon maître, le marquis de Carabas ! » Le roi, impressionné par le château et les terres, proposa sa fille en mariage au jeune homme. Celui-ci accepta avec joie."},
      {label:'Situation finale', icon:'🔵', color:'#2980b9', texte:"Le marquis de Carabas épousa la princesse et devint grand seigneur. Quant au chat, il ne courut plus jamais après les souris — sauf pour s'amuser."},
    ],
    questions:[
      {q:"Que reçoit le fils cadet en héritage de son père ?", options:["Le moulin et l'âne","Uniquement le chat","Les bottes et le sac"], correct:1},
      {q:"Comment le chat convainc-il le roi que son maître est un grand seigneur ?", options:["Il lui montre les terres et le château dès le début","Il lui apporte régulièrement des cadeaux au nom du marquis de Carabas","Il organise un grand banquet dans le château de l'ogre"], correct:1},
      {q:"Comment le chat se débarrasse-t-il de l'ogre ?", options:["Il le pousse par la fenêtre du château pendant son sommeil","Il le défie en duel avec son épée","Il le convainc de se transformer en souris et le dévore"], correct:2},
      {q:"Pourquoi la princesse tombe-t-elle amoureuse du jeune homme ?", options:["Parce qu'elle l'admirait depuis longtemps de loin","Parce qu'il la sauva d'un danger lors de sa promenade","Parce qu'elle le trouva beau après qu'il fut habillé par le roi"], correct:2},
    ],
    vf:[
      {q:"Le chat révèle au roi que son maître est en réalité le fils d'un simple meunier.", correct:1},
      {q:"L'ogre peut se transformer en différents animaux.", correct:0},
      {q:"Le fils cadet reçoit le moulin en héritage de son père.", correct:1},
    ],
    resumes:[
      {texte:"Un jeune homme reçoit un chat en héritage. Grâce à la ruse et à l'intelligence de l'animal, il épouse la fille du roi et devient grand seigneur.", correct:true},
      {texte:"Un jeune homme reçoit un chat en héritage. Il part à l'aventure avec lui et, après avoir vaincu lui-même un terrible ogre, il épouse la fille du roi.", correct:false},
      {texte:"Un jeune homme reçoit un chat en héritage. Le chat vole les richesses d'un ogre pour les offrir au roi, ce qui permet à son maître d'épouser la princesse.", correct:false},
    ],
    ordre:[
      "Le chat convainc l'ogre de se transformer en souris et le dévore.",
      "Le fils cadet reçoit uniquement un chat en héritage de son père.",
      "Le roi propose sa fille en mariage au marquis de Carabas.",
      "Le chat apporte des cadeaux au roi au nom du marquis de Carabas.",
      "Le jeune homme fait semblant de se noyer et est sauvé par le roi.",
      "Le chat demande à son maître des bottes et un sac.",
    ],
    ordreCorrect:[5,1,6,2,3,4],
  },
  breme:{
    id:'breme', titre:'Les Musiciens de Brême', auteur:'Frères Grimm',
    emoji:'🎵', couleur:'linear-gradient(135deg,#1a3a5c,#2980b9)', borderColor:'#2980b9',
    sections:[
      {label:'Situation initiale', icon:'🟡', color:'#f0a000', texte:"Il était une fois un âne qui avait travaillé toute sa vie pour son maître. Devenu vieux et trop faible pour porter des charges, il entendit son maître parler de s'en débarrasser. Sans attendre, l'âne prit la route en direction de Brême, où il espérait devenir musicien. En chemin, il rencontra un chien de chasse, lui aussi chassé par son maître parce qu'il était trop vieux pour courir. « Viens avec moi à Brême, dit l'âne, nous ferons de la musique ensemble ! » Le chien accepta."},
      {label:'Élément perturbateur', icon:'🔴', color:'#e74c3c', texte:"Plus loin, ils trouvèrent un chat assis au bord du chemin, l'air bien malheureux. Sa maîtresse voulait le noyer car il ne chassait plus les souris. « Viens avec nous ! » dirent l'âne et le chien. Le chat les rejoignit. Enfin, ils aperçurent un coq perché sur un portail, chantant à tue-tête. Son maître voulait le cuisiner pour le repas du lendemain. « Tu as une belle voix ! Joins-toi à nous ! » Et le coq sauta sur le chemin avec eux. Les quatre compagnons marchèrent longtemps vers Brême."},
      {label:'Péripéties', icon:'🟠', color:'#e67e22', texte:"Comme la nuit tombait, le coq aperçut au loin une lumière. Ils découvrirent une maison bien éclairée, avec une table couverte de bonnes choses — et autour, des brigands qui festoyaient. Ils décidèrent de les chasser. L'âne posa ses pattes sur le rebord de la fenêtre, le chien sauta sur le dos de l'âne, le chat grimpa sur le chien, et le coq se percha tout en haut. Puis, au signal, ils firent le plus grand vacarme possible. Épouvantés, les brigands s'enfuirent. Plus tard dans la nuit, un brigand revint vérifier. Dans l'obscurité, le chat lui griffa le visage, le chien le mordit à la jambe, l'âne lui donna un coup de sabot et le coq se mit à chanter. Le brigand s'enfuit terrorisé et raconta qu'une horrible sorcière, un géant et un juge crieur l'avaient attaqué. Les brigands ne revinrent jamais."},
      {label:'Résolution', icon:'🟢', color:'#27ae60', texte:"Les quatre animaux s'installèrent définitivement dans la maison. Ils avaient trouvé un foyer confortable et chaleureux où ils pouvaient vivre en paix, ensemble."},
      {label:'Situation finale', icon:'🔵', color:'#2980b9', texte:"Ils n'allèrent finalement jamais à Brême — ils n'en avaient plus besoin. Mais on dit que si tu passes par là une nuit, tu peux encore entendre au loin le braillement d'un âne, l'aboiement d'un chien, le miaulement d'un chat et le chant d'un coq."},
    ],
    questions:[
      {q:"Pourquoi l'âne quitte-t-il son maître ?", options:["Parce qu'il rêve depuis toujours de devenir musicien à Brême","Parce que son maître veut s'en débarrasser car il est trop vieux","Parce qu'il se dispute avec son maître après une longue journée de travail"], correct:1},
      {q:"Combien d'animaux composent le groupe qui marche vers Brême ?", options:["Trois","Cinq","Quatre"], correct:2},
      {q:"Comment les animaux parviennent-ils à faire fuir les brigands ?", options:["En mettant le feu à la maison pour les obliger à sortir","En se superposant et en faisant un vacarme terrible à la fenêtre","En attaquant les brigands un par un pendant leur sommeil"], correct:1},
      {q:"Pourquoi le brigand envoyé vérifier la maison repart-il terrorisé ?", options:["Il voit les quatre animaux danser autour d'un feu","Il entend une voix mystérieuse lui ordonner de partir","Il est griffé, mordu, frappé et surpris par le chant du coq dans le noir"], correct:2},
    ],
    vf:[
      {q:"Les quatre animaux arrivent finalement à Brême et y deviennent musiciens célèbres.", correct:1},
      {q:"C'est le coq qui aperçoit la lumière de la maison des brigands depuis son perchoir.", correct:0},
      {q:"Les brigands reviennent le lendemain matin pour reprendre leur maison.", correct:1},
    ],
    resumes:[
      {texte:"Quatre vieux animaux, chassés par leurs maîtres, s'associent pour aller à Brême. En chemin, ils chassent des brigands de leur maison grâce à leur ruse et s'y installent pour toujours.", correct:true},
      {texte:"Quatre animaux musiciens partent pour Brême, chassent des brigands grâce à leur musique et deviennent célèbres dans toute la région.", correct:false},
      {texte:"Quatre vieux animaux, chassés par leurs maîtres, partent pour Brême. Ils volent la maison de brigands endormis et partagent leur butin avec les habitants du village.", correct:false},
    ],
    ordre:[
      "Les animaux se superposent et font fuir les brigands par leur vacarme.",
      "L'âne quitte son maître qui veut s'en débarrasser et part vers Brême.",
      "Un brigand revient vérifier la maison mais repart terrorisé.",
      "Le chat, le chien et le coq rejoignent l'âne sur la route.",
      "Les quatre animaux s'installent définitivement dans la maison.",
      "Le coq aperçoit une lumière et ils découvrent la maison des brigands.",
    ],
    ordreCorrect:[4,1,5,2,6,3],
  }
};

window.TEXTES_DESCRIPTIFS_DATA = {
  libraire: {
    id:'libraire',
    titre:'Le vieux libraire',
    type:'🧑 Personnage',
    emoji:'📚',
    couleur:'linear-gradient(135deg,#6b2737,#c0392b)',
    bordure:'#c0392b',
    texte:`Derrière son comptoir encombré de livres empilés jusqu'au plafond, Monsieur Anselme semblait faire partie du décor, comme un meuble oublié là depuis des siècles. C'était un vieil homme voûté aux épaules étroites, dont le dos courbé lui donnait l'allure d'un <strong>point d'interrogation vivant</strong>. Ses cheveux blancs, fins comme de la soie, formaient une couronne clairsemée autour de son crâne rose et luisant. Son visage, creusé de rides profondes, ressemblait à une <strong>vieille carte géographique</strong>. Deux petits yeux noisette, vifs et malicieux, brillaient derrière des lunettes rondes perchées au bout d'un nez en forme de bec de canard. Ses mains, noueuses et tachées d'encre, caressaient les couvertures des livres avec une tendresse infinie, comme s'il s'agissait d'êtres vivants. Toujours vêtu d'un gilet de laine bordeaux élimé aux coudes, il dégageait une douce odeur de <strong>papier ancien et de café froid</strong>.`,
    questions:[
      {q:"Comment est décrit le dos de Monsieur Anselme ?", options:["Droit et élégant comme celui d'un militaire","Courbé comme un point d'interrogation","Penché sur le côté à cause d'une blessure ancienne"], correct:1},
      {q:"À quoi le visage de Monsieur Anselme est-il comparé ?", options:["À une vieille carte géographique","À un parchemin jauni par le temps","À une pomme ridée séchée au soleil"], correct:0},
      {q:"Quelle odeur se dégage de Monsieur Anselme ?", options:["Une odeur de tabac froid et de cire à parquet","Une odeur de lavande et de vieux bois vernis","Une odeur de papier ancien et de café froid"], correct:2},
      {q:"Comment Monsieur Anselme traite-t-il les livres ?", options:["Il les empile n'importe comment sans y faire attention","Il les caresse avec tendresse comme s'ils étaient vivants","Il les range méthodiquement par ordre alphabétique"], correct:1},
      {q:"Les yeux de Monsieur Anselme sont ternes et fatigués.", options:["Vrai","Faux"], correct:1}
    ]
  },
  foret: {
    id:'foret',
    titre:'La forêt en hiver',
    type:'🌲 Lieu',
    emoji:'🌨️',
    couleur:'linear-gradient(135deg,#1a3a2a,#2d7a4a)',
    bordure:'#2d7a4a',
    texte:`Au cœur de la forêt ardennaise, l'hiver avait tout recouvert de son grand manteau blanc. Les sapins, ployant sous le poids de la neige fraîche, formaient de hautes silhouettes immobiles, pareilles à des <strong>géants endormis</strong>. Entre leurs troncs sombres et rugueux, la lumière filtrait à peine, teintant la neige de <strong>reflets bleutés et argentés</strong>. Pas un bruit. Pas un souffle. Seul le craquement sourd des branches sous le gel brisait parfois ce silence absolu. Le sol, recouvert d'une épaisse couche blanche et poudreuse, gardait les traces de quelques pas d'animaux — une ligne de petites empreintes rondes qui disparaissait entre les arbres. Une odeur fraîche et piquante de <strong>résine et de froid</strong> flottait dans l'air. Au loin, un ruisseau encore libre de glace murmurait doucement, comme pour rappeler que la vie n'avait pas tout à fait disparu sous la neige.`,
    questions:[
      {q:"À quoi les sapins couverts de neige sont-ils comparés ?", options:["À des fantômes blancs flottant dans la brume","À des géants endormis","À des soldats alignés au garde-à-vous"], correct:1},
      {q:"Quelle couleur prend la neige à cause de la lumière filtrée ?", options:["Des reflets dorés et orangés comme au coucher du soleil","Des reflets roses et mauves comme à l'aube","Des reflets bleutés et argentés"], correct:2},
      {q:"Quel est le seul bruit décrit dans la forêt ?", options:["Le vent qui siffle entre les branches des sapins","Le craquement des branches sous le gel","Le chant lointain d'un oiseau dans les hauteurs"], correct:1},
      {q:"Que rappelle le ruisseau au fond de la forêt ?", options:["Que le printemps est tout proche et que la neige va fondre","Que la vie n'a pas tout à fait disparu sous la neige","Que des animaux sont venus s'y désaltérer récemment"], correct:1},
      {q:"La forêt décrite se trouve dans les Ardennes.", options:["Vrai","Faux"], correct:0}
    ]
  },
  renard: {
    id:'renard',
    titre:'Le renard',
    type:'🦊 Animal',
    emoji:'🦊',
    couleur:'linear-gradient(135deg,#8b3a00,#e07b00)',
    bordure:'#e07b00',
    texte:`Tapi au bord du champ enneigé, le renard attendait, immobile comme une <strong>statue de roux et de feu</strong>. Son pelage épais, d'un beau <strong>roux flamboyant mêlé de blanc</strong> sur le ventre et le bout des pattes, luisait doucement sous le soleil d'hiver. Sa longue queue touffue, presque aussi grande que son corps, était enroulée autour de ses pattes comme une <strong>écharpe de fourrure</strong>. Son museau fin et pointu, frémissant légèrement, capturait les moindres odeurs portées par le vent. Ses oreilles triangulaires, dressées bien droites sur sa tête, pivotaient comme de petits <strong>radars</strong> à l'affût du moindre son. Ses yeux en amande, d'un <strong>jaune ambré</strong> presque lumineux, fixaient un point invisible dans la neige. Soudain, sans crier gare, il bondit en arc de cercle et plongea le museau dans la neige pour en ressortir avec une souris dans les mâchoires, les oreilles fièrement dressées, l'air satisfait.`,
    questions:[
      {q:"De quelle couleur est le pelage du renard ?", options:["Brun foncé sur le dos et beige clair sur le ventre","Gris argenté avec des reflets blancs sous la lumière","Roux flamboyant mêlé de blanc sur le ventre et les pattes"], correct:2},
      {q:"À quoi la queue du renard est-elle comparée ?", options:["À un plumet de cavalier planté sur son arrière-train","À une écharpe de fourrure enroulée autour de ses pattes","À un balai retourné traînant sur la neige"], correct:1},
      {q:"Comment sont décrites les oreilles du renard ?", options:["Rondes et poilues, légèrement tombantes sur les côtés","Triangulaires et dressées, pivotant comme des radars","Plates et collées contre la tête pour résister au froid"], correct:1},
      {q:"Comment le renard attrape-t-il sa proie ?", options:["Il la pourchasse en courant très vite dans la neige","Il bondit en arc de cercle et plonge le museau dans la neige","Il creuse dans la neige avec ses pattes avant"], correct:1},
      {q:"Les yeux du renard sont décrits comme noirs et brillants.", options:["Vrai","Faux"], correct:1}
    ]
  }
};

window.SYNONYMES_POOL = [
  {phrase:"La salle de classe était ___ ce matin-là.", mot:"silencieuse", options:["vide","calme","sombre","froide"], correct:1, explication:'"Silencieuse" signifie sans bruit — "calme" est le synonyme le plus proche.'},
  {phrase:"Le chemin de montagne était ___.", mot:"périlleux", options:["long","escarpé","dangereux","étroit"], correct:2, explication:'"Périlleux" signifie qui présente des dangers.'},
  {phrase:"L\'explorateur était ___ après sa longue marche.", mot:"épuisé", options:["blessé","affamé","découragé","éreinté"], correct:3, explication:'"Épuisé" et "éreinté" signifient tous les deux extrêmement fatigué.'},
  {phrase:"Le vieillard avait un regard ___.", mot:"bienveillant", options:["doux","triste","sévère","vif"], correct:0, explication:'"Bienveillant" signifie qui veut du bien aux autres — proche de "doux".'},
  {phrase:"La rivière était ___ après les pluies.", mot:"limpide", options:["froide","profonde","transparente","agitée"], correct:2, explication:'"Limpide" signifie parfaitement clair et transparent.'},
  {phrase:"L\'enfant était ___ face au chien.", mot:"intrépide", options:["méfiant","courageux","curieux","surpris"], correct:1, explication:'"Intrépide" signifie qui n\'a peur de rien.'},
  {phrase:"Le discours du maire était ___.", mot:"ennuyeux", options:["long","confus","monotone","incompréhensible"], correct:2, explication:'"Monotone" désigne quelque chose d\'ennuyeux car toujours pareil.'},
  {phrase:"La forêt semblait ___ à la tombée de la nuit.", mot:"mystérieuse", options:["inquiétante","silencieuse","dense","sombre"], correct:0, explication:'"Mystérieuse" et "inquiétante" évoquent tous les deux quelque chose d\'étrange.'},
  {phrase:"Le repas préparé par grand-mère était ___.", mot:"savoureux", options:["copieux","chaud","délicieux","original"], correct:2, explication:'"Savoureux" et "délicieux" signifient tous les deux qui a très bon goût.'},
  {phrase:"Le scientifique était ___ dans son travail.", mot:"méthodique", options:["rigoureux","rapide","passionné","expérimenté"], correct:0, explication:'"Méthodique" et "rigoureux" désignent quelqu\'un qui travaille avec ordre et précision.'},
  {phrase:"Le chat ___ les oiseaux depuis la fenêtre.", mot:"observait", options:["guettait","épiait","cherchait","attendait"], correct:1, explication:'"Épier" signifie observer attentivement et discrètement.'},
  {phrase:"Le vent ___ les feuilles des arbres.", mot:"agitait", options:["secouait","arrachait","balayait","courbait"], correct:0, explication:'"Agiter" et "secouer" signifient tous les deux faire bouger dans tous les sens.'},
  {phrase:"Le voleur ___ le collier dans la vitrine.", mot:"déroba", options:["cassa","subtilisa","remarqua","prit"], correct:1, explication:'"Dérober" et "subtiliser" signifient voler habilement.'},
  {phrase:"Le professeur ___ les élèves sur la leçon.", mot:"interrogea", options:["questionna","félicita","rassembla","nota"], correct:0, explication:'"Interroger" et "questionner" signifient poser des questions.'},
  {phrase:"L\'enfant ___ pour ne pas réveiller son frère.", mot:"chuchotait", options:["criait","parlait","murmurait","appelait"], correct:2, explication:'"Chuchoter" et "murmurer" signifient parler très doucement.'},
  {phrase:"Le cheval ___ à travers la prairie.", mot:"galopait", options:["trottait","avançait","fonçait","courait"], correct:2, explication:'"Galoper" signifie courir très vite — "fonçait" est le synonyme le plus proche.'},
  {phrase:"La mère ___ doucement son bébé.", mot:"berçait", options:["portait","balançait","câlinait","apaisait"], correct:1, explication:'"Bercer" et "balancer" désignent le même mouvement doux et régulier.'},
  {phrase:"Le détective ___ les indices avec soin.", mot:"examina", options:["nota","chercha","analysa","découvrit"], correct:2, explication:'"Examiner" et "analyser" signifient tous les deux étudier attentivement.'},
  {phrase:"Le chevalier fit preuve d\'une grande ___.", mot:"bravoure", options:["force","vaillance","loyauté","adresse"], correct:1, explication:'"Bravoure" et "vaillance" désignent tous les deux le courage au combat.'},
  {phrase:"La ___ du comte était immense.", mot:"demeure", options:["résidence","forteresse","propriété","construction"], correct:0, explication:'"Demeure" et "résidence" désignent tous les deux le lieu où l\'on habite.'},
  {phrase:"L\'enfant observait la scène avec ___.", mot:"étonnement", options:["joie","intérêt","stupéfaction","plaisir"], correct:2, explication:'"Étonnement" et "stupéfaction" expriment la surprise, mais "stupéfaction" est plus fort.'},
  {phrase:"La ___ de la forêt rendait la marche difficile.", mot:"pénombre", options:["demi-obscurité","humidité","densité","froideur"], correct:0, explication:'"Pénombre" désigne une lumière faible, une demi-obscurité.'},
  {phrase:"Le rescapé avait ___ toute la nuit dans la forêt.", mot:"erré", options:["dormi","couru","vagabondé","cherché"], correct:2, explication:'"Errer" et "vagabonder" signifient se déplacer sans but précis.'},
  {phrase:"La vieille dame avait un sourire ___.", mot:"malicieux", options:["espiègle","triste","timide","chaleureux"], correct:0, explication:'"Malicieux" et "espiègle" désignent quelqu\'un de légèrement moqueur et joueur.'},
  {phrase:"Le torrent ___ la montagne avec fracas.", mot:"dévalait", options:["traversait","dégringolait","descendait","coulait"], correct:1, explication:'"Dévaler" et "dégringoler" signifient descendre très rapidement.'},
  {phrase:"L\'enseignant était ___ avec ses élèves.", mot:"exigeant", options:["sévère","strict","injuste","impatient"], correct:1, explication:'"Exigeant" et "strict" désignent quelqu\'un qui demande beaucoup d\'efforts.'},
  {phrase:"Le blessé ressentait une ___ douleur dans le bras.", mot:"vive", options:["longue","terrible","intense","profonde"], correct:2, explication:'"Vive" et "intense" qualifient tous les deux une douleur forte et immédiate.'},
  {phrase:"Le paysage était ___ sous le soleil brûlant.", mot:"aride", options:["desséché","plat","rocheux","brûlant"], correct:0, explication:'"Aride" et "desséché" décrivent un terrain privé d\'eau et de végétation.'},
  {phrase:"L\'aventurier ___ la falaise sans difficulté.", mot:"gravit", options:["escalada","traversa","contourna","atteignit"], correct:0, explication:'"Gravir" et "escalader" signifient tous les deux monter en s\'aidant des mains.'},
  {phrase:"La nouvelle se ___ rapidement dans le village.", mot:"répandit", options:["arriva","circula","se propagea","surprit"], correct:2, explication:'"Se répandre" et "se propager" signifient se diffuser dans toutes les directions.'},
  {phrase:"Le roi était réputé pour sa grande ___.", mot:"clémence", options:["sagesse","puissance","indulgence","générosité"], correct:2, explication:'"Clémence" et "indulgence" désignent la disposition à pardonner.'},
  {phrase:"La fillette ___ dans le froid de la nuit.", mot:"frissonnait", options:["grelottait","tremblait","soufflait","pleurait"], correct:1, explication:'"Frissonner" et "trembler" désignent tous les deux un mouvement involontaire causé par le froid.'},
  {phrase:"Emma ___ le coucher de soleil.", mot:"contemplait", options:["photographiait","admirait","regardait longuement","observait"], correct:2, explication:'"Contempler" signifie regarder longuement et avec admiration.'},
  {phrase:"Le soleil ___ derrière les nuages.", mot:"disparaissait", options:["se cachait","brillait","descendait","s\'éteignait"], correct:0, explication:'"Disparaître" et "se cacher" expriment ici la même idée.'},
  {phrase:"Le discours fut accueilli avec ___.", mot:"enthousiasme", options:["attention","respect","applaudissements","ferveur"], correct:3, explication:'"Enthousiasme" et "ferveur" expriment tous les deux une passion intense.'},
];

window.ANTONYMES_POOL = [
  {phrase:"Le chemin était ___ entre les deux maisons.", mot:"étroit", options:["court","sombre","large","courbe"], correct:2, explication:'L\'antonyme d\'"étroit" est "large" — qui a beaucoup d\'espace.'},
  {phrase:"La réponse de l\'élève était ___.", mot:"pertinente", options:["courte","hors sujet","incorrecte","confuse"], correct:1, explication:'L\'antonyme de "pertinente" est "hors sujet" — qui ne convient pas.'},
  {phrase:"Le vieux chêne était ___.", mot:"robuste", options:["vieux","immense","seul","fragile"], correct:3, explication:'L\'antonyme de "robuste" est "fragile" — qui manque de solidité.'},
  {phrase:"La décision du juge était ___.", mot:"sévère", options:["rapide","injuste","indulgente","incomprise"], correct:2, explication:'L\'antonyme de "sévère" est "indulgente" — qui pardonne facilement.'},
  {phrase:"L\'appartement était ___.", mot:"exigu", options:["spacieux","lumineux","agréable","moderne"], correct:0, explication:'L\'antonyme d\'"exigu" (très petit) est "spacieux" (très grand).'},
  {phrase:"Le discours du président était ___.", mot:"ambigu", options:["long","ennuyeux","clair","important"], correct:2, explication:'L\'antonyme d\'"ambigu" (que l\'on peut interpréter de plusieurs façons) est "clair".'},
  {phrase:"La soupe servie était ___.", mot:"brûlante", options:["salée","mauvaise","légère","froide"], correct:3, explication:'L\'antonyme de "brûlante" est "froide".'},
  {phrase:"La petite fille était ___ en présence des adultes.", mot:"timide", options:["gentille","audacieuse","curieuse","souriante"], correct:1, explication:'L\'antonyme de "timide" est "audacieuse" — qui ose facilement.'},
  {phrase:"Le sportif était ___ sur le terrain.", mot:"agile", options:["rapide","fort","maladroit","lent"], correct:2, explication:'L\'antonyme d\'"agile" (souple et rapide) est "maladroit".'},
  {phrase:"La forêt était ___ dans cette région.", mot:"dense", options:["clairsemée","humide","sombre","silencieuse"], correct:0, explication:'L\'antonyme de "dense" (très serré) est "clairsemée" (peu fournie).'},
  {phrase:"Le général ___ à ses soldats d\'avancer.", mot:"ordonna", options:["interdit","supplia","demanda","conseilla"], correct:0, explication:'L\'antonyme d\'"ordonner" est "interdire" — l\'un impose une action, l\'autre la refuse.'},
  {phrase:"Le soleil ___ la terre au printemps.", mot:"réchauffait", options:["séchait","refroidissait","éclairait","brûlait"], correct:1, explication:'L\'antonyme de "réchauffer" est "refroidir".'},
  {phrase:"Le chat ___ sur la souris.", mot:"bondit", options:["marcha","s\'immobilisa","tomba","recula"], correct:1, explication:'L\'antonyme de "bondir" (s\'élancer) est "s\'immobiliser" (s\'arrêter complètement).'},
  {phrase:"La rivière ___ à mesure qu\'elle descendait.", mot:"s\'élargissait", options:["accélérait","débordait","se rétrécissait","s\'assèchait"], correct:2, explication:'L\'antonyme de "s\'élargir" est "se rétrécir".'},
  {phrase:"L\'enfant ___ toujours à ses parents.", mot:"obéissait", options:["écoutait","désobéissait","répondait","résistait"], correct:1, explication:'L\'antonyme d\'"obéir" est "désobéir".'},
  {phrase:"Le vieux mur ___ sous la pluie.", mot:"s'effritait", options:["noircissait","se consolidait","s\'humidifiait","se fissurait"], correct:1, explication:'L\'antonyme de "s\'effriter" (se désagréger) est "se consolider" (se renforcer).'},
  {phrase:"Le commerçant ___ ses erreurs ce jour-là.", mot:"multiplia", options:["corrigea","réduisit","remarqua","cacha"], correct:1, explication:'L\'antonyme de "multiplier" (augmenter) est "réduire" (diminuer).'},
  {phrase:"Les deux amis ___ après leur dispute.", mot:"se réconcilièrent", options:["se parlèrent","s\'expliquèrent","se brouillèrent","se retrouvèrent"], correct:2, explication:'L\'antonyme de "se réconcilier" est "se brouiller" — rompre une amitié.'},
  {phrase:"Le coureur ___ dans la dernière ligne droite.", mot:"accélérait", options:["courait","avançait","soufflait","ralentissait"], correct:3, explication:'L\'antonyme d\'"accélérer" est "ralentir".'},
  {phrase:"Le chirurgien ___ les deux parties de la plaie.", mot:"réunit", options:["ferma","écarta","examina","nettoya"], correct:1, explication:'L\'antonyme de "réunir" (rapprocher) est "écarter" (éloigner).'},
  {phrase:"La ___ de l\'équipe fut célébrée dans toute la ville.", mot:"victoire", options:["performance","défaite","absence","surprise"], correct:1, explication:'L\'antonyme de "victoire" est "défaite".'},
  {phrase:"Le roi était connu pour son ___.", mot:"avarice", options:["cruauté","orgueil","générosité","faiblesse"], correct:2, explication:'L\'antonyme d\'"avarice" (refus de dépenser) est "générosité".'},
  {phrase:"Le savant avait une grande ___ du sujet.", mot:"ignorance", options:["connaissance","expérience","curiosité","passion"], correct:0, explication:'L\'antonyme d\'"ignorance" est "connaissance".'},
  {phrase:"La ___ de son explication impressionna tout le monde.", mot:"clarté", options:["longueur","qualité","obscurité","simplicité"], correct:2, explication:'L\'antonyme de "clarté" est "obscurité" — ce qui est difficile à comprendre.'},
  {phrase:"La ___ régnait dans le village depuis des années.", mot:"paix", options:["calme","joie","guerre","silence"], correct:2, explication:'L\'antonyme de "paix" est "guerre".'},
  {phrase:"Le blessé marchait avec ___ malgré sa cheville tordue.", mot:"aisance", options:["lenteur","douleur","difficulté","prudence"], correct:2, explication:'L\'antonyme d\'"aisance" (facilité naturelle) est "difficulté".'},
  {phrase:"L\'eau de la source était ___.", mot:"pure", options:["froide","rare","polluée","abondante"], correct:2, explication:'L\'antonyme de "pure" (sans impureté) est "polluée".'},
  {phrase:"La décision fut prise de façon ___.", mot:"réfléchie", options:["rapide","collective","impulsive","discrète"], correct:2, explication:'L\'antonyme de "réfléchie" (mûrement pensée) est "impulsive" (prise sans réfléchir).'},
  {phrase:"L\'attitude de l\'élève était ___ envers son professeur.", mot:"respectueuse", options:["froide","insolente","indifférente","réservée"], correct:1, explication:'L\'antonyme de "respectueuse" est "insolente" — qui manque de respect.'},
  {phrase:"La nuit était ___ grâce à la pleine lune.", mot:"lumineuse", options:["froide","longue","silencieuse","sombre"], correct:3, explication:'L\'antonyme de "lumineuse" est "sombre".'},
  {phrase:"Le soldat avança d\'un pas ___.", mot:"assuré", options:["lent","lourd","hésitant","discret"], correct:2, explication:'L\'antonyme d\'"assuré" (confiant) est "hésitant" (qui doute).'},
  {phrase:"Le témoignage de l\'enfant était ___.", mot:"crédible", options:["court","flou","douteux","surprenant"], correct:2, explication:'L\'antonyme de "crédible" (que l\'on peut croire) est "douteux".'},
  {phrase:"La relation entre les deux pays était ___.", mot:"tendue", options:["longue","complexe","apaisée","fragile"], correct:2, explication:'L\'antonyme de "tendue" (conflictuelle) est "apaisée" (calme et sereine).'},
  {phrase:"La récolte de cette année était ___.", mot:"abondante", options:["tardive","belle","maigre","variée"], correct:2, explication:'L\'antonyme d\'"abondante" (en grande quantité) est "maigre" (en faible quantité).'},
  {phrase:"Le voyageur avait l\'air ___ malgré les difficultés.", mot:"serein", options:["fatigué","courageux","anxieux","pensif"], correct:2, explication:'L\'antonyme de "serein" (calme et sans inquiétude) est "anxieux" (inquiet).'},
];

window.DIAL_MARCHE_DATA = {
  id: 'marche',
  titre: 'Une affaire en or !',
  sousTitre: '🎭 Scène de théâtre — Le marché au Moyen Âge',
  contexte: 'Sur la place du marché de Beaumont, un matin d\'automne au XIIe siècle. Les marchands ont installé leurs étals. Renaud arrive avec une pièce d\'argent gagnée après une longue semaine de travail.',
  intervenants: ['Renaud','Margot','Théodore','Hugues'],
  couleur: '#6d4c41',
  repliques: [
    {qui:'didascalie', texte:'Renaud arrive en courant sur la place du marché, tenant fièrement une pièce d\'argent.'},
    {qui:'Renaud', texte:'Enfin ! Une semaine à labourer les champs de monseigneur le comte, et voilà ma récompense : une belle pièce d\'argent ! Aujourd\'hui, je vais m\'acheter un remède pour ma vache Blanchette qui tousse depuis trois jours.', didascalie:'fièrement'},
    {qui:'Margot', texte:'Eh bien, beau paysan ! Tu as l\'air d\'un homme prospère ce matin ! Qu\'est-ce qui t\'amène sur mon marché ?', didascalie:'s\'approchant avec un grand sourire'},
    {qui:'Renaud', texte:'Je cherche un remède pour ma vache. Elle tousse et refuse de manger depuis trois jours.'},
    {qui:'Margot', texte:'Tu tombes à pic ! J\'ai exactement ce qu\'il te faut ! Regarde cette poudre magique venue d\'Orient ! Une pincée dans l\'eau de ta vache, et demain matin elle gambade comme un agneau de printemps !', didascalie:'avec enthousiasme'},
    {qui:'Renaud', texte:'Et ça coûte combien, cette poudre magique ?', didascalie:'suspicieux'},
    {qui:'Margot', texte:'Pour toi, mon ami, prix d\'ami : une pièce d\'argent !'},
    {qui:'Renaud', texte:'Une pièce d\'argent ?! C\'est tout ce que j\'ai !'},
    {qui:'Théodore', texte:'N\'écoutez pas cette femme, brave homme ! Je suis Théodore, médecin renommé dans tout le royaume ! Cette poudre n\'est que de la farine de moulin teintée en jaune ! J\'ai moi-même le remède qu\'il vous faut : une décoction de plantes rares récoltées sous la pleine lune !', didascalie:'s\'interposant avec autorité'},
    {qui:'Margot', texte:'Charlatan ! Va-t\'en de mon étal ! Ton décoction fait plus de mal que de bien !', didascalie:'furieuse'},
    {qui:'Théodore', texte:'Charlatan, moi ?! J\'ai soigné les chevaliers du roi, madame !', didascalie:'offusqué'},
    {qui:'Renaud', texte:'Mais... lequel de vous deux dit la vérité ?', didascalie:'perdu'},
    {qui:'Hugues', texte:'Qu\'est-ce que ce tapage ? On vous entend depuis la fontaine ! *(regardant Margot et Théodore)* Encore vous deux !', didascalie:'arrivant avec son bâton de bailli'},
    {qui:'Margot', texte:'Monsieur le bailli ! Ce faux médecin cherche à voler mes clients !', didascalie:'indignée'},
    {qui:'Théodore', texte:'C\'est elle qui vend des poudres sans valeur à des paysans ignorants !'},
    {qui:'Hugues', texte:'Silence ! *(se tournant vers Renaud)* Et toi, brave homme, qu\'est-ce qui t\'arrive exactement ?', didascalie:'levant la main'},
    {qui:'Renaud', texte:'Ma vache est malade. J\'ai une pièce d\'argent. Et ces deux-là se disputent pour me la prendre.'},
    {qui:'Hugues', texte:'Voilà une honnêteté qui fait plaisir. *(à Margot et Théodore)* Vous allez chacun me montrer votre remède. S\'il fonctionne vraiment, Renaud paiera. Sinon, c\'est vous qui lui rembourserez sa journée de travail.', didascalie:'souriant'},
    {qui:'Margot', texte:'Eh bien… c\'est que… ma poudre, elle n\'est efficace que sur les vaches de moins de trois ans…', didascalie:'hésitant soudainement'},
    {qui:'Théodore', texte:'Et ma décoction… il me faudrait d\'abord examiner l\'animal…', didascalie:'toussotant'},
    {qui:'Renaud', texte:'Voilà ! Ils ne savent rien ni l\'un ni l\'autre !', didascalie:'avec un grand sourire'},
    {qui:'Hugues', texte:'Margot, Théodore, vous avez jusqu\'à ce soir pour trouver un vrai remède gratuit pour la vache de cet homme, ou demain vous n\'aurez plus le droit de tenir un étal sur ce marché. *(à Renaud)* Et toi, brave Renaud, garde bien ta pièce d\'argent — et méfie-toi des marchands trop souriants !', didascalie:'sévèrement'},
    {qui:'didascalie', texte:'Margot et Théodore baissent la tête, penauds. Renaud rit et repart en sifflotant.'},
  ],
  qcm:[
    {q:'Pourquoi Renaud vient-il au marché ce matin-là ?',
     opts:['Pour vendre ses légumes','Pour acheter un nouveau cheval','Pour trouver un remède pour sa vache malade','Pour payer ses impôts au comte'],
     correct:2, explication:'Renaud dit lui-même : "je vais m\'acheter un remède pour ma vache Blanchette qui tousse depuis trois jours."'},
    {q:'Que reproche Théodore à Margot ?',
     opts:['De vendre ses remèdes trop cher','De ne pas avoir de licence de médecin','De vendre de la farine teintée en jaune comme remède magique','De lui voler ses clients depuis des années'],
     correct:2, explication:'Théodore dit : "Cette poudre n\'est que de la farine de moulin teintée en jaune !"'},
    {q:'Comment Hugues règle-t-il le conflit ?',
     opts:['Il les met en prison tous les deux','Il donne raison à Margot','Il demande à Renaud de choisir','Il les oblige à trouver un vrai remède gratuit sous peine d\'être chassés du marché'],
     correct:3, explication:'Hugues leur donne jusqu\'au soir pour trouver un vrai remède, sinon ils perdent leur étal.'},
    {q:'Que comprend-on à la fin quand Margot et Théodore hésitent ?',
     opts:['Qu\'ils ont peur de Hugues','Qu\'ils veulent aider Renaud gratuitement','Que ni l\'un ni l\'autre ne possède de vrai remède','Qu\'ils connaissent un meilleur médecin'],
     correct:2, explication:'Leurs hésitations révèlent qu\'ils n\'avaient pas de vrais remèdes — ils voulaient juste prendre l\'argent de Renaud.'},
  ],
  attribution:[
    {texte:'"Tu tombes à pic ! J\'ai exactement ce qu\'il te faut !"', correct:1},
    {texte:'"On vous entend depuis la fontaine !"', correct:3},
    {texte:'"J\'ai soigné les chevaliers du roi, madame !"', correct:2},
    {texte:'"Garde bien ta pièce d\'argent — et méfie-toi des marchands trop souriants !"', correct:3},
    {texte:'"Ils ne savent rien ni l\'un ni l\'autre !"', correct:0},
  ],
  intentions:[
    {replique:'"Tu as l\'air d\'un homme prospère ce matin !"',
     opts:['Flatter Renaud pour mieux lui vendre quelque chose','Lui souhaiter la bienvenue sincèrement','Se moquer de ses habits de paysan','L\'interroger sur sa semaine de travail'],
     correct:0, explication:'Margot flatte Renaud pour l\'amadouer et lui vendre sa poudre. C\'est une technique de marchande rusée.'},
    {replique:'"N\'écoutez pas cette femme, brave homme !"',
     opts:['Protéger Renaud d\'une arnaque','Évincer un concurrent pour vendre son propre produit','Défendre l\'honneur de Margot','Demander l\'aide du bailli'],
     correct:1, explication:'Théodore ne défend pas vraiment Renaud — il veut juste prendre la place de Margot pour vendre son propre remède.'},
    {replique:'"Et toi, brave homme, qu\'est-ce qui t\'arrive exactement ?"',
     opts:['Se moquer de Renaud','Chercher à lui vendre quelque chose','Entendre le point de vue de la victime avant de juger','L\'accuser d\'avoir provoqué la dispute'],
     correct:2, explication:'Hugues, en tant que bailli, veut comprendre la situation de façon juste avant de prendre une décision.'},
    {replique:'"Voilà une honnêteté qui fait plaisir."',
     opts:['Se moquer de la naïveté de Renaud','Féliciter Renaud d\'avoir de l\'argent','Critiquer les marchands du marché','Valoriser la franchise de Renaud face aux mensonges des deux autres'],
     correct:3, explication:'Hugues apprécie que Renaud résume la situation honnêtement, contrairement aux deux marchands qui mentaient.'},
  ],
};

window.SAVOIR_ECOUTER_DATA = [
  {
    id: 'savoir_ecouter_1',
    titre: 'Le secret de la forêt de Soignes',
    emoji: '🎧',
    desc: 'Écoute le texte et réponds aux 10 questions.',
    audioUrl: 'audio/soignes_audio.m4a',
    screen: 'screen-savoir-ecouter',
    questions: [
      {
        num: 1,
        type: 'qcm',
        q: 'Comment appelle-t-on la forêt de Soignes en raison de ses grands hêtres ?',
        options: [
          'La forêt enchantée',
          'La cathédrale verte',
          'Le jardin secret',
          'La forêt mystérieuse'
        ],
        correct: 1
      },
      {
        num: 2,
        type: 'qcm',
        q: "Combien d'entrées un terrier de blaireau peut-il posséder ?",
        options: [
          'Une seule',
          'Deux ou trois',
          'Plusieurs dizaines',
          'Plus de mille'
        ],
        correct: 2
      },
      {
        num: 3,
        type: 'qcm',
        q: 'Que mange principalement le blaireau ?',
        options: [
          'De la viande uniquement',
          'Des vers de terre, fruits, racines et insectes',
          'Seulement des champignons',
          'Des poissons'
        ],
        correct: 1
      },
      {
        num: 4,
        type: 'qcm',
        q: 'Quelle couleur de lumière utilise-t-on pour observer les blaireaux la nuit ?',
        options: [
          'Lumière blanche',
          'Lumière bleue',
          'Lumière rouge',
          'Lumière verte'
        ],
        correct: 2
      },
      {
        num: 5,
        type: 'qcm',
        q: 'Pourquoi les promeneurs doivent-ils rester silencieux pour observer les blaireaux ?',
        options: [
          "Parce que c'est interdit de parler dans la forêt",
          "Parce que les blaireaux ont une excellente ouïe et pourraient s'enfuir",
          "Parce qu'il y a un règlement de la commune",
          "Parce que le silence est obligatoire la nuit"
        ],
        correct: 1
      },
      {
        num: 6,
        type: 'qcm',
        q: 'Pourquoi le statut du blaireau est-il passé de "nuisible" à "protégé" ?',
        options: [
          "Parce qu'il n'y en a presque plus",
          "Parce que les scientifiques ont découvert son rôle bénéfique pour la nature",
          "Parce qu'il ne mange plus les cultures",
          "Parce que c'est un animal très rare en Europe"
        ],
        correct: 1
      },
      {
        num: 7,
        type: 'qcm',
        q: 'Que peut-on déduire du fait que des terriers sont utilisés depuis plus de cent ans ?',
        options: [
          "Les blaireaux vivent très vieux, jusqu'à cent ans",
          "Les terriers sont transmis et réutilisés par différentes générations de blaireaux",
          "Les blaireaux construisent un nouveau terrier chaque siècle",
          "Les terriers sont protégés par une loi spéciale depuis cent ans"
        ],
        correct: 1
      },
      {
        num: 8,
        type: 'vf',
        q: 'Le blaireau européen a un pelage gris avec deux bandes noires sur le visage.',
        options: ['Vrai', 'Faux'],
        correct: 0
      },
      {
        num: 9,
        type: 'vf',
        q: 'Le blaireau est actif principalement pendant la journée.',
        options: ['Vrai', 'Faux'],
        correct: 1
      },
      {
        num: 10,
        type: 'vf',
        q: 'En creusant le sol, le blaireau aide les plantes à mieux pousser.',
        options: ['Vrai', 'Faux'],
        correct: 0
      }
    ]
  },
  {
    id: 'savoir_ecouter_2',
    titre: 'Le mystère du carillon de Bruges',
    emoji: '🔔',
    desc: 'Écoute le texte et réponds aux 10 questions.',
    audioUrl: 'audio/bruges_audio.m4a',
    screen: 'screen-savoir-ecouter',
    questions: [
      {
        num: 1,
        type: 'qcm',
        q: 'Combien de marches faut-il grimper pour atteindre le sommet du Beffroi ?',
        options: [
          '83',
          '47',
          '366',
          '700'
        ],
        correct: 2
      },
      {
        num: 2,
        type: 'qcm',
        q: 'Combien de cloches compose le carillon ?',
        options: [
          '7',
          '47',
          '83',
          '366'
        ],
        correct: 1
      },
      {
        num: 3,
        type: 'qcm',
        q: 'Comment appelle-t-on le musicien qui joue du carillon ?',
        options: [
          'Le sonneur',
          'Le carillonneur',
          'Le clocheur',
          'Le musicien royal'
        ],
        correct: 1
      },
      {
        num: 4,
        type: 'qcm',
        q: 'Que faut-il faire pour faire sonner les grosses cloches ?',
        options: [
          'Tirer une corde très fort',
          'Enfoncer certaines touches avec un coup de poing',
          'Souffler dans un tube',
          'Appuyer doucement sur un bouton'
        ],
        correct: 1
      },
      {
        num: 5,
        type: 'qcm',
        q: "Pourquoi les habitants apprenaient-ils à reconnaître les différentes mélodies du carillon ?",
        options: [
          "Parce que c'était un jeu pour les enfants",
          "Parce que chaque mélodie transmettait un message important, comme une alerte",
          "Parce que le carillonneur les obligeait à les apprendre à l'école",
          "Parce que c'était la seule musique qu'ils connaissaient"
        ],
        correct: 1
      },
      {
        num: 6,
        type: 'qcm',
        q: "Pourquoi le carillon est-il inscrit au patrimoine de l'UNESCO ?",
        options: [
          "Parce qu'il est le plus grand du monde",
          "Parce que cette tradition musicale est considérée comme un trésor culturel à préserver",
          "Parce qu'il a coûté très cher à construire",
          "Parce qu'il est interdit de le faire sonner"
        ],
        correct: 1
      },
      {
        num: 7,
        type: 'qcm',
        q: "Que peut-on déduire du fait que des terriers sont utilisés depuis plus de cent ans ?",
        options: [
          "La tour a été mal construite",
          "La forme de la tour se rétrécit vers le sommet",
          "Les marches ont été abîmées par le temps",
          "Il y a eu une erreur dans les plans de construction"
        ],
        correct: 1
      },
      {
        num: 8,
        type: 'vf',
        q: 'La plus grande cloche du carillon pèse plus de six tonnes.',
        options: ['Vrai', 'Faux'],
        correct: 0
      },
      {
        num: 9,
        type: 'vf',
        q: "Avant les téléphones, les carillons servaient uniquement à indiquer l'heure.",
        options: ['Vrai', 'Faux'],
        correct: 1
      },
      {
        num: 10,
        type: 'vf',
        q: "Les concerts d'été sur le carillon sont payants.",
        options: ['Vrai', 'Faux'],
        correct: 1
      }
    ]
  },
  {
    id: 'savoir_ecouter_3',
    titre: 'La fourmi superstar',
    emoji: '🐜',
    desc: 'Écoute le texte et réponds aux 10 questions.',
    audioUrl: 'audio/fourmi_audio.m4a',
    screen: 'screen-savoir-ecouter',
    questions: [
      {
        num: 1,
        type: 'qcm',
        q: 'Combien de fois son propre poids une fourmi peut-elle transporter ?',
        options: [
          '10 fois',
          '25 fois',
          '50 fois',
          '100 fois'
        ],
        correct: 2
      },
      {
        num: 2,
        type: 'qcm',
        q: "Comment s'appelle la carapace rigide qui recouvre le corps de la fourmi ?",
        options: [
          "L'endosquelette",
          "L'exosquelette",
          "La cuticule",
          "Le squelette externe"
        ],
        correct: 1
      },
      {
        num: 3,
        type: 'qcm',
        q: 'Comment les fourmis communiquent-elles entre elles pour se coordonner ?',
        options: [
          'En faisant du bruit',
          'Grâce à des substances chimiques appelées phéromones',
          'En se touchant les antennes uniquement',
          'Elles ne communiquent pas'
        ],
        correct: 1
      },
      {
        num: 4,
        type: 'qcm',
        q: 'Quel est le rôle de la reine dans la colonie ?',
        options: [
          'Elle cherche la nourriture',
          'Elle construit la fourmilière',
          'Elle pond les œufs',
          'Elle surveille les autres fourmis'
        ],
        correct: 2
      },
      {
        num: 5,
        type: 'qcm',
        q: 'Pourquoi un humain de quarante kilos ne pourrait-il pas réellement porter deux tonnes ?',
        options: [
          'Parce que les humains sont plus faibles que les fourmis dans l'absolu',
          'Parce que la proportion de force par rapport à la taille diminue chez les grands êtres vivants',
          'Parce que les humains n'ont pas d'exosquelette',
          'Parce que personne n'a jamais essayé'
        ],
        correct: 1
      },
      {
        num: 6,
        type: 'qcm',
        q: "Pourquoi les scientifiques étudient-ils l'organisation des fourmis ?",
        options: [
          'Pour savoir comment les éliminer plus facilement',
          'Parce que leur travail en équipe peut inspirer des solutions pour les humains',
          'Parce que les fourmis sont en voie de disparition',
          'Pour comprendre pourquoi elles sont si lentes'
        ],
        correct: 1
      },
      {
        num: 7,
        type: 'qcm',
        q: 'Que peut-on déduire du fait que plusieurs fourmis se rassemblent pour porter une charge trop lourde ?',
        options: [
          'Les fourmis se disputent souvent entre elles',
          'La coopération permet d'accomplir des tâches impossibles pour un individu seul',
          'Une seule fourmi est toujours plus forte que plusieurs réunies',
          'Les fourmis abandonnent la charge si elle est trop lourde'
        ],
        correct: 1
      },
      {
        num: 8,
        type: 'vf',
        q: 'Plus un être vivant est petit, plus ses muscles peuvent développer une force importante par rapport à sa taille.',
        options: ['Vrai', 'Faux'],
        correct: 0
      },
      {
        num: 9,
        type: 'vf',
        q: 'Une colonie de fourmis ne compte généralement que quelques dizaines d'individus.',
        options: ['Vrai', 'Faux'],
        correct: 1
      },
      {
        num: 10,
        type: 'vf',
        q: 'Les fourmis peuvent transporter des morceaux de feuilles et des graines.',
        options: ['Vrai', 'Faux'],
        correct: 0
      }
    ]
  },
  {
    id: 'savoir_ecouter_4',
    titre: 'La recette du pain perdu',
    emoji: '🍳',
    desc: 'Écoute le texte et réponds aux 10 questions.',
    audioUrl: 'audio/pain_perdu_audio.m4a',
    screen: 'screen-savoir-ecouter',
    questions: [
      {
        num: 1,
        type: 'qcm',
        q: 'Pourquoi appelle-t-on cette recette "pain perdu" ?',
        options: [
          "Parce qu'on perd le pain en le préparant",
          "Parce qu'elle utilise du pain rassis qu'on allait jeter",
          "Parce que la recette a été perdue puis retrouvée",
          "Parce qu'on doit chercher le pain dans le jardin"
        ],
        correct: 1
      },
      {
        num: 2,
        type: 'qcm',
        q: 'Quels ingrédients composent le mélange dans lequel on trempe le pain ?',
        options: [
          'Du lait, des œufs, du sucre et de la cannelle',
          "De l'eau, du sel et de la farine",
          "Du beurre, du sucre et de la confiture",
          "Des œufs, de l'huile et du fromage"
        ],
        correct: 0
      },
      {
        num: 3,
        type: 'qcm',
        q: 'Combien de temps faut-il laisser tremper chaque côté du pain dans le mélange ?',
        options: [
          '10 secondes',
          '30 secondes',
          '2 minutes',
          '5 minutes'
        ],
        correct: 1
      },
      {
        num: 4,
        type: 'qcm',
        q: "Quel est le signal indiquant qu'il faut poser le pain dans la poêle ?",
        options: [
          'Quand la poêle fume beaucoup',
          'Quand le beurre commence à mousser légèrement',
          "Quand l'huile devient noire",
          "Quand on entend un sifflement"
        ],
        correct: 1
      },
      {
        num: 5,
        type: 'qcm',
        q: 'Pourquoi le texte présente-t-il le pain perdu comme une lutte contre le gaspillage alimentaire ?',
        options: [
          "S'il faut acheter beaucoup d'ingrédients",
          "Parce qu'il permet de réutiliser du pain qu'on aurait sinon jeté",
          "Parce que cette recette coûte très cher",
          "Parce qu'elle nécessite beaucoup de temps de préparation"
        ],
        correct: 1
      },
      {
        num: 6,
        type: 'qcm',
        q: 'Pourquoi faut-il surveiller attentivement la cuisson du pain perdu ?',
        options: [
          "Parce que le pain peut s'envoler de la poêle",
          "Parce que le sucre du mélange peut faire brûler le pain rapidement",
          "Parce que la poêle peut casser",
          "Parce qu'il faut compter le nombre de tranches"
        ],
        correct: 1
      },
      {
        num: 7,
        type: 'qcm',
        q: 'Que peut-on déduire du fait que le pain ne doit pas tremper trop longtemps dans le mélange ?',
        options: [
          "Le pain doit rester sec à l'intérieur",
          "Un trempage trop long rendrait le pain trop mou et il pourrait se déchirer",
          "Le mélange devient mauvais après 30 secondes",
          "Il faut absolument utiliser du pain frais"
        ],
        correct: 1
      },
      {
        num: 8,
        type: 'vf',
        q: 'Le pain perdu se prépare avec du pain frais du jour.',
        options: ['Vrai', 'Faux'],
        correct: 1
      },
      {
        num: 9,
        type: 'vf',
        q: 'Chaque tranche de pain doit cuire environ deux à trois minutes de chaque côté.',
        options: ['Vrai', 'Faux'],
        correct: 0
      },
      {
        num: 10,
        type: 'vf',
        q: 'Le pain perdu peut être accompagné de fruits frais, de sirop ou de confiture.',
        options: ['Vrai', 'Faux'],
        correct: 0
      }
    ]
  },
  {
    id: 'savoir_ecouter_5',
    titre: 'Les Hautes Fagnes',
    emoji: '🏔️',
    desc: 'Écoute le texte et réponds aux 10 questions.',
    audioUrl: 'audio/fagnes_audio.m4a',
    screen: 'screen-savoir-ecouter',
    questions: [
      {
        num: 1,
        type: 'qcm',
        q: 'Où se situent les Hautes Fagnes en Belgique ?',
        options: [
          'Au centre du pays',
          'Près de la mer du Nord',
          "À la frontière avec l'Allemagne",
          'Près de Bruxelles'
        ],
        correct: 2
      },
      {
        num: 2,
        type: 'qcm',
        q: "Qu'est-ce que la tourbe ?",
        options: [
          'Une roche très dure',
          'Une terre spongieuse formée par des mousses et plantes mortes',
          'Un type d'arbre',
          'Un animal du plateau'
        ],
        correct: 1
      },
      {
        num: 3,
        type: 'qcm',
        q: 'À quoi servent les caillebotis installés sur les sentiers ?',
        options: [
          'À éclairer le chemin la nuit',
          'À empêcher les visiteurs de se perdre',
          "À protéger la tourbe en permettant de traverser sans l'abîmer",
          'À nourrir les animaux'
        ],
        correct: 2
      },
      {
        num: 4,
        type: 'qcm',
        q: 'Quand peut-on observer le brame des cerfs ?',
        options: [
          'En hiver',
          'Au printemps',
          'En été',
          'En automne'
        ],
        correct: 3
      },
      {
        num: 5,
        type: 'qcm',
        q: 'Pourquoi compare-t-on la tourbe à une "éponge géante" ?',
        options: [
          "Parce qu'elle a la même couleur qu'une éponge",
          "Parce qu'elle absorbe et retient l'eau de pluie comme une éponge",
          "Parce qu'on peut la presser pour en faire sortir de l'eau potable",
          "Parce qu'elle flotte sur l'eau"
        ],
        correct: 1
      },
      {
        num: 6,
        type: 'qcm',
        q: 'Pourquoi les caillebotis sont-ils importants pour préserver le paysage ?',
        options: [
          "Parce que la tourbe met très longtemps à se reformer si elle est endommagée",
          "Parce que sans eux, les visiteurs se perdraient dans le brouillard",
          "Parce qu'ils empêchent les animaux de traverser les sentiers",
          "Parce qu'ils servent à mesurer la neige"
        ],
        correct: 0
      },
      {
        num: 7,
        type: 'qcm',
        q: 'Que peut-on déduire du fait que des oiseaux comme la pie-grièche grise nichent dans la végétation basse des Hautes Fagnes ?',
        options: [
          'Ces oiseaux préfèrent toujours les grands arbres',
          "L'absence de grands prédateurs rend ce milieu sûr pour nicher au sol",
          'Ces oiseaux ne savent pas voler',
          'La végétation basse est dangereuse pour les oiseaux'
        ],
        correct: 1
      },
      {
        num: 8,
        type: 'vf',
        q: 'Les Hautes Fagnes se trouvent au point le plus élevé de Belgique.',
        options: ['Vrai', 'Faux'],
        correct: 0
      },
      {
        num: 9,
        type: 'vf',
        q: 'En été, le plateau est couvert de bruyères violettes.',
        options: ['Vrai', 'Faux'],
        correct: 0
      },
      {
        num: 10,
        type: 'vf',
        q: 'En hiver, la neige fond plus vite sur les Hautes Fagnes que dans le reste de la Belgique.',
        options: ['Vrai', 'Faux'],
        correct: 1
      }
    ]
  },
  {
    id: 'savoir_ecouter_6',
    titre: "Dans l'atelier de Sandy",
    emoji: '🎨',
    desc: 'Écoute le dialogue et réponds aux 10 questions.',
    audioUrl: 'audio/atelier_audio.m4a',
    screen: 'screen-savoir-ecouter',
    questions: [
      {
        num: 1,
        type: 'qcm',
        q: 'Sur quoi travaille Sandy en ce moment ?',
        options: [
          "Le premier tome d'une nouvelle série",
          "Le quatrième tome d'une bande dessinée pour la jeunesse",
          'Une bande dessinée pour adultes',
          'Un roman illustré'
        ],
        correct: 1
      },
      {
        num: 2,
        type: 'qcm',
        q: "Quelle est la toute première étape de création d'une bande dessinée selon Sandy ?",
        options: [
          "Le dessin définitif à l'encre",
          'La couleur',
          "L'écriture du scénario",
          "L'impression de l'album"
        ],
        correct: 2
      },
      {
        num: 3,
        type: 'qcm',
        q: 'Combien de temps faut-il à Sandy pour dessiner et encrer une seule page ?',
        options: [
          'Un jour',
          'Une semaine complète',
          'Un mois',
          'Quarante-huit heures'
        ],
        correct: 1
      },
      {
        num: 4,
        type: 'qcm',
        q: 'Comment Sandy ajoute-t-elle les couleurs à ses dessins ?',
        options: [
          'Avec de la peinture à l'eau',
          'Avec des crayons de couleur',
          'Sur une tablette graphique, numériquement',
          "Elle n'ajoute jamais de couleur"
        ],
        correct: 2
      },
      {
        num: 5,
        type: 'qcm',
        q: 'Pourquoi Sandy dessine-t-elle le crayonné "presque comme des gribouillages" ?',
        options: [
          "Parce qu'elle ne sait pas bien dessiner",
          "Parce que cette étape sert seulement à vérifier que l'histoire fonctionne, pas à produire un beau dessin",
          "Parce qu'elle est pressée par le temps",
          "Parce que son éditeur lui demande de dessiner vite"
        ],
        correct: 1
      },
      {
        num: 6,
        type: 'qcm',
        q: 'Pourquoi Sandy compare-t-elle le crayonné au "squelette avant d'habiller le corps" ?',
        options: [
          "Parce qu'elle dessine des squelettes dans son histoire",
          "Parce que le crayonné est la base sur laquelle viendra ensuite le dessin détaillé",
          "Parce que les personnages de son histoire sont des squelettes",
          "Parce que c'est une expression sans rapport avec son travail"
        ],
        correct: 1
      },
      {
        num: 7,
        type: 'qcm',
        q: 'Que peut-on déduire du fait que Sandy met environ un an pour dessiner un album, en plus du scénario ?',
        options: [
          'Créer une bande dessinée demande beaucoup de temps et de patience',
          'Sandy travaille très lentement par rapport aux autres dessinateurs',
          'Un album de BD est facile à réaliser rapidement',
          "Sandy n'aime pas dessiner"
        ],
        correct: 0
      },
      {
        num: 8,
        type: 'vf',
        q: "La première étape de création d'une BD est le dessin à l'encre.",
        options: ['Vrai', 'Faux'],
        correct: 1
      },
      {
        num: 9,
        type: 'vf',
        q: 'Chaque tome de la série de Sandy compte quarante-huit pages.',
        options: ['Vrai', 'Faux'],
        correct: 0
      },
      {
        num: 10,
        type: 'vf',
        q: 'Le moment préféré de Sandy est de recevoir les premiers exemplaires imprimés de l'album.',
        options: ['Vrai', 'Faux'],
        correct: 0
      }
    ]
  }
];

