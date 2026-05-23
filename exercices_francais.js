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

    // Ajouter ici les autres temps
    // ,present: { qcm_bank: [...], trous_bank: [...], evaluation: {...} }
    // ,imparfait: { qcm_bank: [...], trous_bank: [...], evaluation: {...} }
    // ,passe_compose: { qcm_bank: [...], trous_bank: [...], evaluation: {...} }
  }

  // Ajouter ici les autres sections
  // ,grammaire: { ... }
  // ,orthographe: { ... }
};
