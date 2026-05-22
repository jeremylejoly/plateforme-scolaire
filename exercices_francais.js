// ===================================================
// EXERCICES DE FRANÇAIS
// Structure : EXERCICES_FRANCAIS[matiere][temps][num]
// ===================================================

window.EXERCICES_FRANCAIS = {

  conjugaison: {

    futur: {
      1: {
        type: 'qcm',
        title: 'Exercice 1 — Futur simple (QCM)',
        questions: [
          {text:"Demain, nous ___ (partir) très tôt le matin.", options:["partirerons","partirons","partirrons"], answer:1},
          {text:"L'année prochaine, elle ___ (envoyer) ses vœux par mail.", options:["enverra","envoiera","envera"], answer:0},
          {text:"Dans dix ans, vous ___ (construire) votre maison.", options:["construirez","construisez","construirerez"], answer:0},
          {text:"Dès qu'il fera beau, tu ___ (sortir) jouer dans le jardin.", options:["sortiras","sortira","sortirras"], answer:0},
          {text:"La semaine prochaine, ils ___ (accueillir) leurs cousins.", options:["accueilliront","accueilleront","accueilleriront"], answer:1},
          {text:"Je ___ (courir) le marathon l'année prochaine.", options:["courirai","courrai","courrais"], answer:1},
          {text:"Nous ___ (mourir) de rire en regardant ce film !", options:["mourrions","mourirons","mourrons"], answer:2},
          {text:"Tu ___ (acquérir) de nouvelles compétences au collège.", options:["acquieras","acquerras","acquériras"], answer:1},
          {text:"Ils ___ (voir) enfin la mer pour la première fois.", options:["voiront","verront","voudront"], answer:1},
          {text:"Elle ___ (appeler) sa grand-mère dès qu'elle arrivera.", options:["appelera","appèlera","appellera"], answer:2},
        ]
      },
      2: {
        type: 'trous',
        title: 'Exercice 2 — Futur simple (Phrases à trous)',
        questions: [
          {before:"La semaine prochaine, mon père", after:"à Paris pour son travail.", verb:"aller", answer:"ira"},
          {before:"Dans deux ans, mes amis et moi", after:"nos études primaires.", verb:"finir", answer:"finirons"},
          {before:"Ce soir, tu", after:"sûrement regarder un film.", verb:"vouloir", answer:"voudras"},
          {before:"Quand il sera grand, il", after:"médecin.", verb:"devenir", answer:"deviendra"},
          {before:"Demain matin, vous", after:"le train de sept heures.", verb:"prendre", answer:"prendrez"},
          {before:"L'été prochain, nous", after:"en Espagne en famille.", verb:"voyager", answer:"voyagerons"},
          {before:"Dans quelques années, les robots", after:"effectuer de nombreuses tâches.", verb:"pouvoir", answer:"pourront"},
          {before:"Dès que tu seras prêt, tu", after:"le message à ton professeur.", verb:"envoyer", answer:"enverras"},
          {before:"Bientôt, j'", after:"à jouer de la guitare.", verb:"apprendre", answer:"apprendrai"},
          {before:"Le mois prochain, elle", after:"les résultats de son examen.", verb:"recevoir", answer:"recevra"},
        ]
      },
      3: {
        type: 'qcm',
        title: 'Exercice 3 — Futur simple (QCM)',
        questions: [
          {text:"Bientôt, je ___ (savoir) nager correctement.", options:["savoirai","savrai","saurai"], answer:2},
          {text:"L'an prochain, ils ___ (venir) nous rendre visite.", options:["viendront","veniront","viendraient"], answer:0},
          {text:"Nous ___ (tenir) notre promesse, c'est certain.", options:["tenirons","tiendrerons","tiendrons"], answer:2},
          {text:"Tu ___ (jeter) ces vieilles affaires avant de déménager.", options:["jetteras","jèteras","jeteras"], answer:0},
          {text:"Elle ___ (cueillir) des fleurs dans le jardin demain.", options:["cuillera","cueillera","cueillerat"], answer:1},
          {text:"Vous ___ (faire) du sport tous les jours en janvier.", options:["fairez","fairerez","ferez"], answer:2},
          {text:"Il ___ (pleuvoir) toute la semaine selon la météo.", options:["pleuvra","pleuvoira","pleurera"], answer:0},
          {text:"Nous ___ (se souvenir) toujours de cette journée.", options:["nous souviendrerons","nous souviendrons","nous souvenirons"], answer:1},
          {text:"Dans un mois, tu ___ (avoir) ton nouveau vélo.", options:["avoira","aureras","auras"], answer:2},
          {text:"Elles ___ (essuyer) la vaisselle après le repas.", options:["essuieront","essuyeront","essuiront"], answer:0},
        ]
      },
      4: {
        type: 'trous',
        title: 'Exercice 4 — Futur simple (Phrases à trous)',
        questions: [
          {before:"Quand les vacances arriveront, nous", after:"enfin.", verb:"se reposer", answer:"nous reposerons"},
          {before:"Dans trois jours, tu", after:"ton devoir de français.", verb:"rendre", answer:"rendras"},
          {before:"L'année prochaine, il", after:"travailler encore plus.", verb:"falloir", answer:"faudra"},
          {before:"Dès que possible, vous", after:"une lettre à votre correspondant.", verb:"écrire", answer:"écrirez"},
          {before:"Ce soir, les enfants", after:"des crêpes pour le goûter.", verb:"manger", answer:"mangeront"},
          {before:"Dans quelques instants, je", after:"prêt à partir.", verb:"être", answer:"serai"},
          {before:"La prochaine fois, tu", after:"de fermer la porte.", verb:"se souvenir", answer:"te souviendras"},
          {before:"Demain, nous", after:"toute la maison de fond en comble.", verb:"nettoyer", answer:"nettoierons"},
          {before:"Quand il aura faim, il", after:"pour chercher à manger.", verb:"se lever", answer:"se lèvera"},
          {before:"Dans dix ans, elle", after:"peut-être à l'étranger.", verb:"vivre", answer:"vivra"},
        ]
      }
    }

    // Ajouter ici les autres temps : present, imparfait, passe_compose
    // ,present: { 1: {...}, 2: {...} }
    // ,imparfait: { 1: {...}, 2: {...} }
    // ,passe_compose: { 1: {...}, 2: {...} }

  }

  // Ajouter ici les autres matières : grammaire, orthographe
  // ,grammaire: { ... }
  // ,orthographe: { ... }

};
