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
