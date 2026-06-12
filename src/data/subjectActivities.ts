import { QuizQuestion } from "../types";

export const FRANCAIS_QUESTIONS: QuizQuestion[] = [
  {
    id: "fr_1",
    question: "Quelle est l'orthographe correcte dans cette phrase : « Ils ont oublié ____ clés sur la table. »",
    options: ["ses", "ces", "leurs", "leur"],
    correctAnswer: "leurs",
    explanation: "« Leurs » s'accorde au pluriel avec le nom « clés ». C'est un déterminant possessif pluriel."
  },
  {
    id: "fr_2",
    question: "Accordez correctement le participe passé : « Les pommes que j'ai ____ sont délicieuses. » (manger)",
    options: ["mangé", "mangés", "mangée", "mangées"],
    correctAnswer: "mangées",
    explanation: "Le complément d'objet direct « que » (mis pour les pommes, féminin pluriel) est placé avant le verbe conjugué avec avoir. On l'accorde donc."
  },
  {
    id: "fr_3",
    question: "Quel homophone convient ici ? « Il ____ bien compris sa leçon d'éveil d'hier ____ Waimes. »",
    options: ["a / à", "à / a", "as / à", "a / a"],
    correctAnswer: "a / à",
    explanation: "« a » est le verbe avoir conjugué (on peut dire 'avait'). « à » est la préposition désignant le lieu (on ne peut pas dire 'avait Waimes')."
  },
  {
    id: "fr_4",
    question: "Trouvez le synonyme du mot « éphémère » :",
    options: ["Éternel", "Très rapide", "Qui dure peu de temps", "Brillant"],
    correctAnswer: "Qui dure peu de temps",
    explanation: "Quelque chose d'éphémère a une durée de vie très courte (comme le papillon éphémère)."
  },
  {
    id: "fr_5",
    question: "Quelle figure de style utilise une exagération ? « Je meurs de faim ! »",
    options: ["Une métaphore", "Une hyperbole", "Une comparaison", "Une personnification"],
    correctAnswer: "Une hyperbole",
    explanation: "L'hyperbole consiste à exagérer une expression pour frapper les esprits."
  }
];

export const EVEIL_QUESTIONS: QuizQuestion[] = [
  {
    id: "ev_1",
    question: "Dans quelle province belge se situe la commune de Waimes ?",
    options: ["Province de Liège", "Province de Luxembourg", "Province de Namur", "Province du Hainaut"],
    correctAnswer: "Province de Liège",
    explanation: "Waimes se trouve dans la province de Liège, dans la région des Cantons de l'Est."
  },
  {
    id: "ev_2",
    question: "Quelle est la capitale officielle de la Belgique ?",
    options: ["Anvers", "Namur", "Bruxelles", "Liège"],
    correctAnswer: "Bruxelles",
    explanation: "Bruxelles est la capitale nationale de la Belgique et le siège d'institutions européennes majeures."
  },
  {
    id: "ev_3",
    question: "À quel grand fleuve d'Europe se rattache l'Ourthe, qui coule en Wallonie ?",
    options: ["La Seine", "La Meuse", "Le Rhin", "L'Escaut"],
    correctAnswer: "La Meuse",
    explanation: "L'Ourthe est un affluent colatéral important de la Meuse, qu'elle rejoint à Liège."
  },
  {
    id: "ev_4",
    question: "Comment appelle-t-on le passage de l'eau liquide à l'état de vapeur sous l'effet de la chaleur ?",
    options: ["La condensation", "La fusion", "L'évaporation", "La solidification"],
    correctAnswer: "L'évaporation",
    explanation: "L'évaporation est le passage lent de l'état liquide à l'état gazeux, constitutif du cycle de l'eau."
  },
  {
    id: "ev_5",
    question: "Quelle est la durée moyenne de la révolution de la Terre autour de notre Soleil ?",
    options: ["24 heures", "28 jours", "365 jours et 6 heures", "12 mois pile"],
    correctAnswer: "365 jours et 6 heures",
    explanation: "La Terre met 365,25 jours à faire le tour du Soleil, ce qui explique l'ajout d'une journée bissextile tous les 4 ans."
  }
];

export const JEUX_WORDS = [
  { word: "FRACTION", hint: "Partie d'un tout, avec un numérateur et un dénominateur." },
  { word: "CONJUGAISON", hint: "La liste des formes variées que prend un verbe selon la personne." },
  { word: "GEOGRAPHIE", hint: "L'étude de la Terre, des pays, des rivières et des cartes." },
  { word: "HISTOIRE", hint: "Le récit des grands événements du passé humain." },
  { word: "ORTHOGRAPHE", hint: "L'art d'écrire correctement les mots de la langue française." },
  { word: "BELGIQUE", hint: "Notre beau pays divisé en Régions et Communautés !" },
  { word: "SCIENCES", hint: "La méthode pour observer, expérimenter et comprendre l'Univers." },
  { word: "PROVENCE", hint: "Oups, ce n'est pas français ! En Belgique on dit Province." }
];
