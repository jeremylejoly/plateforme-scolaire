// ===================================================
// EXERCICES DE MATHÉMATIQUES
// Structure : EXERCICES_MATHS[matiere][section][exercice]
// ===================================================

window.EXERCICES_MATHS = {

  solides_figures: {

    quadrilateres: {

      // Banque de 24 questions QCM avec formes SVG
      qcm_bank: [
  {id:"q1",svg:"<rect x=\"55\" y=\"30\" width=\"90\" height=\"90\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",options:["losange","carré","rectangle"],answer:1},
  {id:"q2",svg:"<polygon points=\"100,20 150,70 100,120 50,70\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",options:["carré","losange","rectangle"],answer:0},
  {id:"q3",svg:"<rect x=\"45\" y=\"25\" width=\"110\" height=\"110\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",options:["parallélogramme","rectangle","carré"],answer:2},
  {id:"q4",svg:"<rect x=\"15\" y=\"55\" width=\"170\" height=\"60\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",options:["parallélogramme","trapèze isocèle","rectangle"],answer:2},
  {id:"q5",svg:"<rect x=\"75\" y=\"20\" width=\"50\" height=\"120\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",options:["carré","rectangle","trapèze rectangle"],answer:1},
  {id:"q6",svg:"<rect x=\"10\" y=\"68\" width=\"180\" height=\"30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",options:["carré","rectangle","parallélogramme"],answer:1},
  {id:"q7",svg:"<polygon points=\"100,15 155,70 100,125 45,70\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",options:["carré","parallélogramme","losange"],answer:0},
  {id:"q8",svg:"<polygon points=\"20,110 70,40 180,40 130,110\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",options:["parallélogramme","losange","trapèze quelconque"],answer:0},
  {id:"q9",svg:"<polygon points=\"100,30 165,80 100,130 35,80\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",options:["trapèze isocèle","losange","carré"],answer:1},
  {id:"q10",svg:"<polygon points=\"60,45 180,45 140,115 20,115\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",options:["trapèze quelconque","rectangle","parallélogramme"],answer:2},
  {id:"q11",svg:"<polygon points=\"20,45 140,45 180,115 60,115\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",options:["parallélogramme","losange","trapèze quelconque"],answer:0},
  {id:"q12",svg:"<polygon points=\"120,15 170,105 90,125 40,35\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",options:["carré","parallélogramme","losange"],answer:1},
  {id:"q13",svg:"<polygon points=\"45,120 155,120 140,30 60,30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",options:["trapèze quelconque","trapèze rectangle","trapèze isocèle"],answer:2},
  {id:"q14",svg:"<polygon points=\"10,30 190,30 165,120 35,120\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",options:["trapèze isocèle","trapèze rectangle","trapèze quelconque"],answer:0},
  {id:"q15",svg:"<polygon points=\"10,95 190,95 175,45 25,45\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",options:["rectangle","trapèze isocèle","trapèze quelconque"],answer:1},
  {id:"q16",svg:"<polygon points=\"20,130 170,130 110,30 20,30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/><rect x=\"20\" y=\"118\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"1.5\"/><rect x=\"20\" y=\"30\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"1.5\"/>",options:["trapèze rectangle","trapèze isocèle","trapèze quelconque"],answer:0},
  {id:"q17",svg:"<polygon points=\"20,130 175,130 175,30 95,30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/><rect x=\"163\" y=\"118\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"1.5\"/><rect x=\"163\" y=\"30\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"1.5\"/>",options:["trapèze quelconque","trapèze isocèle","trapèze rectangle"],answer:2},
  {id:"q18",svg:"<polygon points=\"20,130 180,130 180,40 80,40\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/><rect x=\"168\" y=\"118\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"1.5\"/><rect x=\"168\" y=\"40\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"1.5\"/>",options:["trapèze rectangle","trapèze quelconque","parallélogramme"],answer:0},
  {id:"q19",svg:"<polygon points=\"10,130 175,130 155,30 75,30\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",options:["trapèze isocèle","trapèze rectangle","trapèze quelconque"],answer:2},
  {id:"q20",svg:"<polygon points=\"10,130 185,130 175,40 90,40\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",options:["trapèze quelconque","trapèze rectangle","quadrilatère quelconque"],answer:0},
  {id:"q21",svg:"<polygon points=\"5,130 185,130 165,40 80,40\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",options:["quadrilatère quelconque","trapèze quelconque","trapèze isocèle"],answer:1},
  {id:"q22",svg:"<polygon points=\"48,34 135,47 177,112 58,143\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",options:["quadrilatère quelconque","trapèze quelconque","parallélogramme"],answer:0},
  {id:"q23",svg:"<polygon points=\"53,35 146,21 145,129 16,105\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",options:["quadrilatère quelconque","trapèze quelconque","losange"],answer:0},
  {id:"q24",svg:"<polygon points=\"31,47 185,19 152,119 62,110\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",options:["trapèze isocèle","parallélogramme","quadrilatère quelconque"],answer:2}
      ],

      // Évaluation fixe (une seule tentative) - 5 questions
      evaluation: [
        0, 4, 7, 11, 15
      ],

      // Banque de 30 questions Vrai/Faux
      // Définition du trapèze utilisée en classe : au moins une paire de côtés parallèles
      // (le parallélogramme est un trapèze particulier). k = notions : deux affirmations
      // qui partagent une notion ne sont jamais dans la même série.
      vf_bank: [
  {k:["carre-cotes"],text:"Un carré a 4 côtés égaux.",answer:true},
  {k:["carre-losange"],text:"Un carré est un losange.",answer:true},
  {k:["carre-rect"],text:"Un carré est un rectangle.",answer:true},
  {k:["diag-carre"],text:"Les diagonales d'un carré sont perpendiculaires.",answer:true},
  {k:["rect-para"],text:"Un rectangle est un parallélogramme.",answer:true},
  {k:["rect-angles"],text:"Un rectangle a 4 angles droits.",answer:true},
  {k:["losange-cotes"],text:"Un losange a 4 côtés égaux.",answer:true},
  {k:["losange-para"],text:"Un losange est un parallélogramme.",answer:true},
  {k:["diag-losange"],text:"Les diagonales d'un losange sont perpendiculaires.",answer:true},
  {k:["para-def"],text:"Un parallélogramme a ses côtés opposés parallèles.",answer:true},
  {k:["trap-def"],text:"Un trapèze a au moins une paire de côtés parallèles.",answer:true},
  {k:["trap-iso"],text:"Un trapèze isocèle a ses deux côtés non parallèles de même longueur.",answer:true},
  {k:["trap-rect"],text:"Un trapèze rectangle a deux angles droits.",answer:true},
  {k:["trap-def","para-trap"],text:"Un parallélogramme est un trapèze particulier.",answer:true},
  {k:["somme"],text:"La somme des angles d'un quadrilatère est toujours 360°.",answer:true},
  {k:["rect-cotes"],text:"Un rectangle a toujours ses 4 côtés égaux.",answer:false},
  {k:["diag-rect"],text:"Les diagonales d'un rectangle sont toujours perpendiculaires.",answer:false},
  {k:["rect-losange"],text:"Un rectangle est toujours un losange.",answer:false},
  {k:["losange-angles"],text:"Un losange a forcément 4 angles droits.",answer:false},
  {k:["rect-losange"],text:"Un losange est toujours un rectangle.",answer:false},
  {k:["rect-para"],text:"Un parallélogramme a forcément 4 angles droits.",answer:false},
  {k:["losange-para"],text:"Un parallélogramme est toujours un losange.",answer:false},
  {k:["trap-quel"],text:"Un trapèze quelconque a ses deux côtés non parallèles de même longueur.",answer:false},
  {k:["quel"],text:"Un quadrilatère quelconque a forcément des côtés parallèles.",answer:false},
  {k:["carre-losange"],text:"Tout losange est un carré.",answer:false},
  {k:["trap-def"],text:"Un trapèze a toujours deux paires de côtés parallèles.",answer:false},
  {k:["trap-rect"],text:"Un trapèze a forcément un angle droit.",answer:false},
  {k:["somme"],text:"La somme des angles d'un quadrilatère est 180°.",answer:false},
  {k:["diag-para"],text:"Les diagonales d'un parallélogramme sont toujours de même longueur.",answer:false},
  {k:["carre-rect"],text:"Un carré n'est pas un rectangle.",answer:false}
      ],

      // Évaluation Vrai/Faux fixe - 5 questions
      evaluation_vf: [0, 5, 10, 15, 20],

      // Banque de 24 questions caractéristiques à cocher
      chars_bank: [
  {shape:"carré",svg:"<rect x=\"55\" y=\"30\" width=\"90\" height=\"90\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["Tous les côtés opposés sont isométriques", "1 seule paire de côtés parallèles", "2 paires de côtés parallèles", "2 angles aigus et 2 angles obtus", "4 angles droits"],answers:[0, 2, 4]},
  {shape:"carré",svg:"<polygon points=\"100,20 160,80 100,140 40,80\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["Diagonales perpendiculaires", "2 paires de côtés parallèles", "2 angles aigus et 2 angles obtus", "Tous les côtés opposés sont isométriques", "4 côtés isométriques"],answers:[0, 1, 3, 4]},
  {shape:"carré",svg:"<rect x=\"40\" y=\"25\" width=\"110\" height=\"110\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["Médianes perpendiculaires", "4 côtés de longueurs différentes", "2 angles aigus et 2 angles obtus", "2 paires de côtés parallèles", "1 seule paire de côtés parallèles"],answers:[0, 3]},
  {shape:"rectangle",svg:"<rect x=\"25\" y=\"55\" width=\"150\" height=\"60\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["4 côtés isométriques", "4 côtés de longueurs différentes", "1 seule paire de côtés parallèles", "2 angles aigus et 2 angles obtus", "Médianes perpendiculaires"],answers:[4]},
  {shape:"rectangle",svg:"<rect x=\"65\" y=\"20\" width=\"70\" height=\"120\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["Au moins 2 angles droits", "4 côtés isométriques", "Tous les côtés opposés sont isométriques", "2 paires de côtés parallèles", "2 angles aigus et 2 angles obtus"],answers:[0, 2, 3]},
  {shape:"rectangle",svg:"<rect x=\"15\" y=\"65\" width=\"170\" height=\"40\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["4 côtés isométriques", "2 paires de côtés parallèles", "Diagonales perpendiculaires", "1 seule paire de côtés parallèles", "4 côtés de longueurs différentes"],answers:[1]},
  {shape:"losange",svg:"<polygon points=\"100,15 170,80 100,145 30,80\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["4 angles droits", "1 seule paire de côtés parallèles", "Au moins 2 angles droits", "4 côtés de longueurs différentes", "4 côtés isométriques"],answers:[4]},
  {shape:"losange",svg:"<polygon points=\"25,120 125,120 185,40 85,40\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["4 côtés isométriques", "4 côtés de longueurs différentes", "Tous les côtés opposés sont isométriques", "1 seule paire de côtés parallèles", "4 angles droits"],answers:[0, 2]},
  {shape:"losange",svg:"<polygon points=\"100,30 175,80 100,130 25,80\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["2 angles aigus et 2 angles obtus", "Au moins 2 angles droits", "2 paires de côtés parallèles", "Tous les côtés opposés sont isométriques", "Diagonales perpendiculaires"],answers:[0, 2, 3, 4]},
  {shape:"parallélogramme",svg:"<polygon points=\"50,45 170,45 140,120 20,120\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["Tous les côtés opposés sont isométriques", "Médianes perpendiculaires", "4 côtés isométriques", "2 paires de côtés parallèles", "2 angles aigus et 2 angles obtus"],answers:[0, 3, 4]},
  {shape:"parallélogramme",svg:"<polygon points=\"20,45 140,45 170,120 50,120\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["4 angles droits", "Tous les côtés opposés sont isométriques", "Au moins 2 angles droits", "2 paires de côtés parallèles", "4 côtés de longueurs différentes"],answers:[1, 3]},
  {shape:"parallélogramme",svg:"<polygon points=\"95,15 165,55 135,145 65,105\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["4 côtés de longueurs différentes", "Au moins 2 angles droits", "2 angles aigus et 2 angles obtus", "2 paires de côtés parallèles", "4 côtés isométriques"],answers:[2, 3]},
  {shape:"trapèze isocèle",svg:"<polygon points=\"70,35 130,35 170,125 30,125\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["2 angles aigus et 2 angles obtus", "Diagonales perpendiculaires", "2 paires de côtés parallèles", "1 seule paire de côtés parallèles", "Médianes perpendiculaires"],answers:[0, 3, 4]},
  {shape:"trapèze isocèle",svg:"<polygon points=\"20,35 180,35 135,115 65,115\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["2 angles aigus et 2 angles obtus", "2 paires de côtés parallèles", "4 angles droits", "1 seule paire de côtés parallèles", "Diagonales perpendiculaires"],answers:[0, 3]},
  {shape:"trapèze isocèle",svg:"<polygon points=\"45,55 155,55 175,105 25,105\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["Tous les côtés opposés sont isométriques", "2 angles aigus et 2 angles obtus", "4 côtés de longueurs différentes", "Au moins 2 angles droits", "4 angles droits"],answers:[1]},
  {shape:"trapèze rectangle",svg:"<polygon points=\"30,50 90,50 170,130 30,130\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["Au moins 2 angles droits", "1 seule paire de côtés parallèles", "2 paires de côtés parallèles", "4 côtés de longueurs différentes", "4 angles droits"],answers:[0, 1, 3]},
  {shape:"trapèze rectangle",svg:"<polygon points=\"40,40 110,40 160,130 40,130\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["1 seule paire de côtés parallèles", "2 angles aigus et 2 angles obtus", "4 côtés de longueurs différentes", "Diagonales perpendiculaires", "Au moins 2 angles droits"],answers:[0, 2, 3, 4]},
  {shape:"trapèze rectangle",svg:"<polygon points=\"40,40 165,40 165,125 100,125\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["Au moins 2 angles droits", "2 paires de côtés parallèles", "1 seule paire de côtés parallèles", "4 côtés isométriques", "Tous les côtés opposés sont isométriques"],answers:[0, 2]},
  {shape:"trapèze quelconque",svg:"<polygon points=\"50,35 115,35 185,125 20,125\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["1 seule paire de côtés parallèles", "2 paires de côtés parallèles", "Au moins 2 angles droits", "4 côtés de longueurs différentes", "Médianes perpendiculaires"],answers:[0, 3]},
  {shape:"trapèze quelconque",svg:"<polygon points=\"40,40 110,40 180,120 25,120\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["4 côtés de longueurs différentes", "4 angles droits", "Au moins 2 angles droits", "2 paires de côtés parallèles", "Tous les côtés opposés sont isométriques"],answers:[0]},
  {shape:"trapèze quelconque",svg:"<polygon points=\"30,40 160,40 145,120 80,120\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["4 côtés isométriques", "Tous les côtés opposés sont isométriques", "4 côtés de longueurs différentes", "Médianes perpendiculaires", "1 seule paire de côtés parallèles"],answers:[2, 4]},
  {shape:"quadrilatère quelconque",svg:"<polygon points=\"40,40 160,30 175,110 25,130\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["2 paires de côtés parallèles", "Médianes perpendiculaires", "4 côtés de longueurs différentes", "4 côtés isométriques", "4 angles droits"],answers:[2]},
  {shape:"quadrilatère quelconque",svg:"<polygon points=\"37,37 183,39 140,101 18,135\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["Tous les côtés opposés sont isométriques", "4 côtés de longueurs différentes", "Au moins 2 angles droits", "1 seule paire de côtés parallèles", "4 angles droits"],answers:[1]},
  {shape:"quadrilatère quelconque",svg:"<polygon points=\"30,30 170,40 150,130 40,110\" fill=\"#DBEAFE\" stroke=\"#2563EB\" stroke-width=\"2.5\"/>",chars:["1 seule paire de côtés parallèles", "2 paires de côtés parallèles", "4 côtés de longueurs différentes", "Au moins 2 angles droits", "Diagonales perpendiculaires"],answers:[2]}
      ]

    }

    // Ajouter ici les autres sections
    // ,points_lignes: { ... }
    // ,polygones: { ... }
    // ,triangles: { ... }
    // ,polyedres: { ... }
  }

  // Ajouter ici les autres matières
  // ,grandeurs: { ... }
  // ,numeration: { ... }
};

// ===================================================
// BANQUES DE DONNÉES MATHÉMATIQUES EXTRAITES D'INDEX.HTML
// ===================================================

window.NUM_DECOMPOSER_BANQUE = [
  {n:'506 040 070', opts:["5 dizaines de millions + 6 millions + 4 dizaines de mille + 7 dizaines", "5 centaines de millions + 6 millions + 4 dizaines de mille + 7 dizaines", "5 centaines de millions + 6 millions + 4 centaines + 7 dizaines", "5 centaines de millions + 6 millions + 4 mille + 7 dizaines"], correct:1},
  {n:'230 005 800', opts:["2 centaines de millions + 3 dizaines de millions + 5 mille + 8 centaines", "2 centaines de millions + 3 millions + 5 mille + 8 centaines", "5 centaines de millions + 3 dizaines de millions + 5 dizaines de mille + 8 centaines", "2 dizaines de millions + 3 millions + 5 mille + 8 centaines"], correct:0},
  {n:'74 300 062', opts:["7 dizaines de millions + 4 millions + 3 centaines de mille + 6 unités + 2 dizaines", "7 dizaines de millions + 4 millions + 3 dizaines de mille + 6 dizaines + 2 unités", "7 millions + 4 centaines de mille + 3 dizaines de mille + 6 dizaines + 2 unités", "7 dizaines de millions + 4 millions + 3 centaines de mille + 6 dizaines + 2 unités"], correct:3},
  {n:'805 070 009', opts:["8 centaines de millions + 5 millions + 7 centaines de mille + 9 unités", "8 centaines de millions + 5 millions + 7 dizaines de mille + 9 unités", "8 centaines de millions + 5 dizaines de millions + 7 dizaines de mille + 9 unités", "8 centaines de millions + 5 millions + 7 mille + 9 unités"], correct:1},
  {n:'12 400 500', opts:["1 dizaine de millions + 2 millions + 4 centaines de mille + 5 centaines", "1 dizaine de millions + 2 millions + 4 centaines de mille + 5 dizaines", "1 million + 2 centaines de mille + 4 dizaines de mille + 5 centaines", "1 dizaine de millions + 2 millions + 4 dizaines de mille + 5 centaines"], correct:0},
  {n:'390 000 030', opts:["3 centaines de millions + 9 dizaines de millions + 3 dizaines", "3 centaines de millions + 9 millions + 3 dizaines", "3 dizaines de millions + 9 millions + 3 dizaines", "3 centaines de millions + 9 dizaines de millions + 3 centaines"], correct:0},
  {n:'60 808 060', opts:["6 dizaines de millions + 8 centaines de mille + 8 centaines + 6 dizaines", "6 millions + 8 centaines de mille + 8 mille + 6 dizaines", "6 dizaines de millions + 8 dizaines de mille + 8 mille + 6 dizaines", "6 dizaines de millions + 8 centaines de mille + 8 mille + 6 dizaines"], correct:3},
  {n:'451 000 451', opts:["4 centaines de millions + 5 dizaines de millions + 1 million + 4 centaines + 5 dizaines + 1 unité", "4 centaines de millions + 5 millions + 1 dizaine de millions + 4 centaines + 5 dizaines + 1 unité", "4 centaines de millions + 5 dizaines de millions + 1 million + 4 centaines + 5 dizaines", "4 centaines de millions + 5 dizaines de millions + 1 million + 4 mille + 5 dizaines + 1 unité"], correct:0},
  {n:'900 090 900', opts:["9 dizaines de millions + 9 dizaines de mille + 9 centaines", "9 centaines de millions + 9 dizaines de mille + 9 centaines", "9 centaines de millions + 9 mille + 9 centaines", "9 centaines de millions + 9 centaines de mille + 9 dizaines"], correct:1},
  {n:'37 060 004', opts:["3 dizaines de millions + 7 millions + 6 dizaines de mille + 4 unités", "3 dizaines de millions + 7 millions + 6 centaines de mille + 4 unités", "3 millions + 7 dizaines de millions + 6 dizaines de mille + 4 unités", "3 dizaines de millions + 7 millions + 6 mille + 4 unités"], correct:0},
  {n:'520 300 020', opts:["5 dizaines de millions + 2 millions + 3 centaines de mille + 2 dizaines", "5 centaines de millions + 2 millions + 3 centaines de mille + 2 dizaines", "5 centaines de millions + 2 dizaines de millions + 3 dizaines de mille + 2 dizaines", "5 centaines de millions + 2 dizaines de millions + 3 centaines de mille + 2 dizaines"], correct:3},
  {n:'108 050 008', opts:["1 centaine de millions + 8 millions + 5 dizaines de mille + 8 dizaines", "1 centaine de millions + 8 dizaines de millions + 5 dizaines de mille + 8 unités", "1 centaine de millions + 8 millions + 5 dizaines de mille + 8 unités", "1 centaine de millions + 8 millions + 5 mille + 8 unités"], correct:2},
  {n:'750 007 500', opts:["7 centaines de millions + 5 dizaines de millions + 7 mille + 5 centaines", "7 centaines de millions + 5 dizaines de millions + 7 mille + 5 dizaines", "7 centaines de millions + 5 dizaines de millions + 7 centaines de mille + 5 centaines", "7 centaines de millions + 5 millions + 7 mille + 5 centaines"], correct:0},
  {n:'83 400 083', opts:["8 dizaines de millions + 3 millions + 4 dizaines de mille + 8 dizaines + 3 unités", "8 millions + 3 dizaines de millions + 4 centaines de mille + 8 dizaines + 3 unités", "8 dizaines de millions + 3 millions + 4 centaines de mille + 8 unités + 3 dizaines", "8 dizaines de millions + 3 millions + 4 centaines de mille + 8 dizaines + 3 unités"], correct:3},
  {n:'600 060 600', opts:["6 dizaines de millions + 6 dizaines de mille + 6 centaines", "6 centaines de millions + 6 dizaines de mille + 6 centaines", "6 centaines de millions + 6 centaines de mille + 6 dizaines", "6 centaines de millions + 6 mille + 6 centaines"], correct:1},
  {n:'29 000 290', opts:["2 dizaines de millions + 9 millions + 2 centaines + 9 dizaines", "2 millions + 9 dizaines de millions + 2 centaines + 9 dizaines", "2 dizaines de millions + 9 millions + 2 mille + 9 dizaines", "2 dizaines de millions + 9 millions + 2 centaines + 9 unités"], correct:0},
  {n:'480 006 048', opts:["4 centaines de millions + 8 dizaines de millions + 6 mille + 4 dizaines + 8 unités", "4 centaines de millions + 8 millions + 6 mille + 4 dizaines + 8 unités", "4 centaines de millions + 8 dizaines de millions + 6 dizaines de mille + 4 dizaines + 8 unités", "4 centaines de millions + 8 dizaines de millions + 6 mille + 4 unités + 8 dizaines"], correct:0},
  {n:'55 505 055', opts:["5 dizaines de millions + 5 millions + 5 dizaines de mille + 5 mille + 5 dizaines + 5 unités", "5 dizaines de millions + 5 millions + 5 centaines de mille + 5 mille + 5 unités", "5 centaines de millions + 5 millions + 5 centaines de mille + 5 mille + 5 dizaines + 5 unités", "5 dizaines de millions + 5 millions + 5 centaines de mille + 5 mille + 5 dizaines + 5 unités"], correct:3},
  {n:'317 080 317', opts:["3 centaines de millions + 1 million + 7 dizaines de millions + 8 mille + 3 centaines + 1 dizaine + 7 unités", "3 centaines de millions + 1 dizaine de millions + 7 millions + 8 mille + 3 dizaines + 1 centaine + 7 unités", "3 centaines de millions + 1 dizaine de millions + 7 millions + 8 dizaines de mille + 3 centaines + 1 dizaine + 7 unités", "3 centaines de millions + 1 dizaine de millions + 7 millions + 8 mille + 3 centaines + 1 dizaine + 7 unités"], correct:2},
  {n:'40 400 040', opts:["4 dizaines de millions + 4 dizaines de mille + 4 unités", "4 dizaines de millions + 4 dizaines de mille + 4 dizaines", "4 millions + 4 centaines de mille + 4 dizaines", "4 dizaines de millions + 4 centaines de mille + 4 dizaines"], correct:3},
  {n:'614 903 070', opts:["6 centaines de millions + 1 dizaine de millions + 4 millions + 9 dizaines de mille + 3 mille + 7 dizaines", "6 centaines de millions + 1 million + 4 dizaines de millions + 9 centaines de mille + 3 mille + 7 dizaines", "6 centaines de millions + 1 dizaine de millions + 4 millions + 9 centaines de mille + 3 mille + 7 unités", "6 centaines de millions + 1 dizaine de millions + 4 millions + 9 centaines de mille + 3 mille + 7 dizaines"], correct:3},
  {n:'3 070 300', opts:["3 dizaines de millions + 7 dizaines de mille + 3 centaines", "3 millions + 7 centaines de mille + 3 dizaines", "3 millions + 7 dizaines de mille + 3 centaines", "3 millions + 7 mille + 3 centaines"], correct:2},
  {n:'920 000 092', opts:["9 centaines de millions + 2 millions + 9 dizaines + 2 unités", "9 dizaines de millions + 2 centaines de millions + 9 dizaines + 2 unités", "9 centaines de millions + 2 dizaines de millions + 9 dizaines + 2 unités", "9 centaines de millions + 2 dizaines de millions + 9 unités + 2 dizaines"], correct:2},
  {n:'178 050 178', opts:["1 centaine de millions + 7 dizaines de millions + 8 millions + 5 dizaines de mille + 1 centaine + 7 dizaines + 8 unités", "1 centaine de millions + 7 dizaines de millions + 8 millions + 5 mille + 1 centaine + 7 dizaines + 8 unités", "1 centaine de millions + 7 dizaines de millions + 8 millions + 5 dizaines de mille + 1 dizaine + 7 centaines + 8 unités", "1 centaine de millions + 7 millions + 8 dizaines de millions + 5 dizaines de mille + 1 centaine + 7 dizaines + 8 unités"], correct:0},
  {n:'500 500 500', opts:["5 dizaines de millions + 5 centaines de mille + 5 centaines", "5 centaines de millions + 5 centaines de mille + 5 dizaines", "5 centaines de millions + 5 centaines de mille + 5 centaines", "5 centaines de millions + 5 dizaines de mille + 5 dizaines"], correct:2},
  {n:'47 007 047', opts:["4 millions + 7 dizaines de millions + 7 mille + 4 dizaines + 7 unités", "4 dizaines de millions + 7 millions + 7 dizaines de mille + 4 dizaines + 7 unités", "4 dizaines de millions + 7 millions + 7 mille + 4 dizaines + 7 unités", "4 dizaines de millions + 7 millions + 7 mille + 4 unités + 7 dizaines"], correct:2},
  {n:'863 420 006', opts:["8 centaines de millions + 6 millions + 3 dizaines de millions + 4 centaines de mille + 2 dizaines de mille + 6 unités", "8 centaines de millions + 6 dizaines de millions + 3 millions + 4 dizaines de mille + 2 mille + 6 unités", "8 centaines de millions + 6 dizaines de millions + 3 millions + 4 centaines de mille + 2 dizaines de mille + 6 unités", "8 centaines de millions + 6 dizaines de millions + 3 millions + 4 centaines de mille + 2 dizaines de mille + 6 dizaines"], correct:2},
  {n:'15 000 015', opts:["1 million + 5 dizaines de millions + 1 dizaine + 5 unités", "1 dizaine de millions + 5 millions + 1 centaine + 5 unités", "1 dizaine de millions + 5 millions + 1 mille + 5 unités", "1 dizaine de millions + 5 millions + 1 dizaine + 5 unités"], correct:3},
  {n:'290 060 290', opts:["2 centaines de millions + 9 dizaines de millions + 6 dizaines de mille + 2 centaines + 9 dizaines", "2 centaines de millions + 9 dizaines de millions + 6 dizaines de mille + 2 dizaines + 9 centaines", "2 centaines de millions + 9 millions + 6 dizaines de mille + 2 centaines + 9 dizaines", "2 centaines de millions + 9 dizaines de millions + 6 mille + 2 centaines + 9 dizaines"], correct:0},
  {n:'730 800 073', opts:["7 centaines de millions + 3 millions + 8 centaines de mille + 7 dizaines + 3 unités", "7 centaines de millions + 3 dizaines de millions + 8 centaines de mille + 7 dizaines + 3 unités", "7 centaines de millions + 3 dizaines de millions + 8 dizaines de mille + 7 dizaines + 3 unités", "7 centaines de millions + 3 dizaines de millions + 8 centaines de mille + 7 unités + 3 dizaines"], correct:1},
];

window.NUM_LIRE_BANQUE = [
  {n:'43 000 500', opts:["Quarante-trois-mille-cinq-cents", "Quarante-trois millions cinq-cents", "Quatre-cent-trois millions cinq-cents", "Quarante-trois millions cinq-cent-mille"], correct:1},
  {n:'125 436 000', opts:["Cent-vingt-cinq millions quatre-mille-trente-six", "Cent-vingt-cinq millions quatre-cent-trente-six-mille", "Cent-vingt-cinq-mille-quatre-cent-trente-six", "Cent-vingt-cinq millions quatre-cent-trente-six"], correct:1},
  {n:'87 654 321', opts:["Quatre-vingt-sept millions six-cent-cinquante-mille-trois-cent-vingt-et-un", "Quatre-vingt-sept millions six-cent-quarante-cinq-mille-trois-cent-vingt-et-un", "Quatre-vingt-sept millions six-cent-cinquante-quatre-mille-trois-cent-vingt-et-un", "Huit-cent-soixante-sept millions six-cent-cinquante-quatre-mille-trois-cent-vingt-et-un"], correct:2},
  {n:'300 045 012', opts:["Trois-cent millions quarante-mille-douze", "Trois millions quarante-cinq-mille-douze", "Trois-cents millions quatre-cent-cinq-mille-douze", "Trois-cents millions quarante-cinq-mille-douze"], correct:3},
  {n:'56 789 100', opts:["Cinquante-six millions sept-cent-quatre-vingt-neuf-mille-cent", "Cinquante-six millions sept-cent-nonante-mille-cent", "Cinquante-six millions sept-cent-quatre-vingt-neuf-cents", "Cinq-cent-soixante-sept millions quatre-vingt-neuf-mille-cent"], correct:0},
  {n:'412 008 070', opts:["Quatre-cent-douze millions quatre-vingt-mille-septante", "Quatre-cent-douze millions huit-mille-septante", "Quatre-cent-vingt-et-un millions huit-mille-septante", "Quatre-cent-douze millions huit-cent-septante"], correct:1},
  {n:'9 876 543', opts:["Neuf millions huit-cent-soixante-six-mille-cinq-cent-quarante-trois", "Neuf millions huit-cent-septante-six-mille-cinq-cent-trente-quatre", "Nonante-huit millions septante-six-mille-cinq-cent-quarante-trois", "Neuf millions huit-cent-septante-six-mille-cinq-cent-quarante-trois"], correct:3},
  {n:'640 320 008', opts:["Six-cent-quarante millions trente-deux-mille-huit", "Six-cent-quarante millions trois-cent-deux-mille-huit", "Six-cent-quarante millions trois-cent-vingt-mille-huit", "Six-cent-quatre millions trois-cent-vingt-mille-huit"], correct:2},
  {n:'23 456 789', opts:["Vingt-trois millions quatre-cent-cinquante-six-mille-huit-cent-quatre-vingt-neuf", "Deux-cent-trente millions quatre-cent-cinquante-six-mille-sept-cent-quatre-vingt-neuf", "Vingt-trois millions quatre-cent-soixante-cinq-mille-sept-cent-quatre-vingt-neuf", "Vingt-trois millions quatre-cent-cinquante-six-mille-sept-cent-quatre-vingt-neuf"], correct:3},
  {n:'701 050 340', opts:["Sept-cent-un millions cinquante-mille-trois-cent-quarante", "Sept-cent-dix millions cinquante-mille-trois-cent-quarante", "Sept-cent-un millions cinq-cent-mille-trois-cent-quarante", "Sept-cent-un millions cinquante-mille-quatre-cent-trente"], correct:0},
  {n:'18 273 645', opts:["Dix-huit millions deux-cent-septante-trois-mille-six-cent-quarante-cinq", "Cent-quatre-vingt-deux millions septante-trois-mille-six-cent-quarante-cinq", "Dix-huit millions deux-cent-septante-trois-mille-six-cent-cinquante-quatre", "Dix-huit millions deux-cent-trente-sept-mille-six-cent-quarante-cinq"], correct:0},
  {n:'500 612 030', opts:["Cinq-cents millions six-cent-douze-mille-trente", "Cinquante millions six-cent-douze-mille-trente", "Cinq-cents millions six-mille-cent-trente", "Cinq-cents millions six-cent-vingt-et-un-mille-trente"], correct:0},
  {n:'34 507 216', opts:["Trente-quatre millions cinq-cent-septante-mille-deux-cent-seize", "Trente-quatre millions cinq-cent-sept-mille-deux-cent-soixante", "Trois-cent-quarante-cinq millions sept-mille-deux-cent-seize", "Trente-quatre millions cinq-cent-sept-mille-deux-cent-seize"], correct:3},
  {n:'876 543 210', opts:["Huit-cent-soixante-sept millions cinq-cent-quarante-trois-mille-deux-cent-dix", "Huit-cent-septante-six millions cinq-cent-quarante-trois-mille-deux-cent-un", "Huit-cent-septante-six millions cinq-cent-quarante-trois-mille-deux-cent-dix", "Huit-cent-septante-six millions cinq-cent-quarante-trois-mille-vingt-et-un"], correct:2},
  {n:'45 009 872', opts:["Quatre-cent-cinquante millions neuf-mille-huit-cent-septante-deux", "Quarante-cinq millions neuf-mille-huit-cent-septante-deux", "Quarante-cinq millions nonante-mille-huit-cent-septante-deux", "Quarante-cinq millions neuf-cents-huit-cent-septante-deux"], correct:1},
  {n:'263 748 591', opts:["Deux-cent-trente-six millions sept-cent-quarante-huit-mille-cinq-cent-nonante-et-un", "Deux-cent-soixante-trois millions sept-cent-quarante-huit-mille-cinq-cent-nonante-six", "Deux-cent-soixante-trois millions sept-cent-quarante-huit-mille-cinq-cent-nonante-et-un", "Deux-cent-soixante-trois millions sept-cent-quatre-vingt-quatre-mille-cinq-cent-nonante-et-un"], correct:2},
  {n:'70 030 405', opts:["Septante millions trente-mille-cinq-cent-quatre", "Sept-cent millions trente-mille-quatre-cent-cinq", "Septante millions trois-mille-quatre-cent-cinq", "Septante millions trente-mille-quatre-cent-cinq"], correct:3},
  {n:'912 345 678', opts:["Neuf-cent-vingt-et-un millions trois-cent-quarante-cinq-mille-six-cent-septante-huit", "Neuf-cent-douze millions trois-cent-cinquante-quatre-mille-six-cent-septante-huit", "Neuf-cent-douze millions trois-cent-quarante-cinq-mille-six-cent-soixante-huit", "Neuf-cent-douze millions trois-cent-quarante-cinq-mille-six-cent-septante-huit"], correct:3},
  {n:'58 406 193', opts:["Cinquante-huit millions quatre-cent-six-mille-trois-cent-nonante-neuf", "Cinquante-huit millions quatre-cent-soixante-mille-cent-nonante-trois", "Cinquante-huit millions quatre-cent-six-mille-cent-nonante-trois", "Cinq-cent-quatre-vingts millions quatre-cent-six-mille-cent-nonante-trois"], correct:2},
  {n:'147 852 369', opts:["Cent-quarante-sept millions huit-cent-cinquante-deux-mille-trois-cent-soixante-neuf", "Cent-quarante-sept millions huit-cent-vingt-cinq-mille-trois-cent-soixante-neuf", "Cent-septante-quatre millions huit-cent-cinquante-deux-mille-trois-cent-soixante-neuf", "Cent-quarante-sept millions huit-cent-cinquante-deux-mille-six-cent-trente-neuf"], correct:0},
  {n:'6 050 408', opts:["Soixante millions cinquante-mille-quatre-cent-huit", "Six millions cinquante-mille-quatre-cent-huit", "Six millions cinquante-mille-quarante-huit", "Six millions cinq-cents-mille-quatre-cent-huit"], correct:1},
  {n:'830 007 654', opts:["Huit-cent-trente millions sept-mille-six-cent-cinquante-quatre", "Huit-cent-trente millions sept-mille-cinq-cent-soixante-quatre", "Huit-cent-trois millions sept-mille-six-cent-cinquante-quatre", "Huit-cent-trente millions septante-mille-six-cent-cinquante-quatre"], correct:0},
  {n:'29 384 756', opts:["Vingt-neuf millions trois-cent-quatre-vingt-quatre-mille-sept-cent-cinquante-six", "Vingt-neuf millions trois-cent-quarante-huit-mille-sept-cent-cinquante-six", "Deux-cent-nonante-trois millions quatre-vingt-quatre-mille-sept-cent-cinquante-six", "Vingt-neuf millions trois-cent-quatre-vingt-quatre-mille-six-cent-cinquante-sept"], correct:0},
  {n:'405 030 702', opts:["Quatre-cent-cinq millions trois-mille-sept-cent-deux", "Quatre-cent-cinq millions trente-mille-septante-deux", "Quatre-cent-cinq millions trente-mille-sept-cent-deux", "Quarante-cinq millions trente-mille-sept-cent-deux"], correct:2},
  {n:'71 628 394', opts:["Septante-et-un millions six-cent-quatre-vingt-deux-mille-trois-cent-nonante-quatre", "Sept-cent-seize millions vingt-huit-mille-trois-cent-nonante-quatre", "Septante-et-un millions six-cent-vingt-huit-mille-trois-cent-nonante-quatre", "Septante-et-un millions six-cent-vingt-huit-mille-trois-cent-quarante-neuf"], correct:2},
  {n:'593 817 246', opts:["Cinq-cent-trente-neuf millions huit-cent-dix-sept-mille-deux-cent-quarante-six", "Cinq-cent-nonante-trois millions huit-cent-septante-sept-mille-deux-cent-quarante-six", "Cinq-cent-nonante-trois millions huit-cent-dix-sept-mille-deux-cent-soixante-quatre", "Cinq-cent-nonante-trois millions huit-cent-dix-sept-mille-deux-cent-quarante-six"], correct:3},
  {n:'38 204 915', opts:["Trente-huit millions vingt-mille-quatre-cent-quinze", "Trente-huit millions deux-cent-quatre-mille-neuf-cent-quinze", "Trois-cent-quatre-vingt-deux millions quatre-mille-neuf-cent-quinze", "Trente-huit millions deux-cent-quarante-mille-neuf-cent-quinze"], correct:1},
  {n:'760 481 035', opts:["Sept-cent-soixante millions quatre-cent-quatre-vingt-un-mille-trente-cinq", "Sept-cent-soixante millions quatre-cent-huit-mille-trente-cinq", "Sept-cent-six millions quatre-cent-quatre-vingt-un-mille-trente-cinq", "Sept-cent-soixante millions quatre-cent-quatre-vingt-un-mille-cinquante-trois"], correct:0},
  {n:'15 730 864', opts:["Cinquante-et-un millions sept-cent-trente-mille-huit-cent-soixante-quatre", "Quinze millions sept-cent-trente-mille-huit-cent-soixante-quatre", "Quinze millions sept-cent-trente-mille-six-cent-quarante-huit", "Quinze millions sept-cent-trois-mille-huit-cent-soixante-quatre"], correct:1},
  {n:'482 096 537', opts:["Quatre-cent-quatre-vingt-deux millions nonante-six-mille-cinq-cent-septante-trois", "Quatre-cent-vingt-huit millions nonante-six-mille-cinq-cent-trente-sept", "Quatre-cent-quatre-vingt-deux millions neuf-cent-six-mille-cinq-cent-trente-sept", "Quatre-cent-quatre-vingt-deux millions nonante-six-mille-cinq-cent-trente-sept"], correct:3},
];

window.NUM_ECRIRE_BANQUE = [
  {lettres:'Quarante-cinq millions deux-cent-trente-six-mille-sept-cent-quatre-vingt-neuf', opts:['45 236 789','45 263 789','452 367 890','45 236 798'], correct:0},
  {lettres:'Deux-cent-sept millions quarante-mille-cinq-cent-douze', opts:['270 040 512','207 400 512','207 040 512','207 040 521'], correct:2},
  {lettres:'Neuf-cent-douze millions trois-cent-quarante-cinq-mille-six-cent-septante-huit', opts:['912 345 678','912 354 678','921 345 678','912 345 687'], correct:0},
  {lettres:'Soixante-trois millions huit-cent-mille-quatre', opts:['63 800 400','63 080 004','63 800 004','630 800 004'], correct:2},
  {lettres:'Cinq-cents millions vingt-mille-neuf', opts:['500 200 009','500 020 009','500 020 090','500 200 090'], correct:1},
  {lettres:'Trente-huit millions cinq-cent-quatre-vingt-sept-mille-deux-cent-quarante-et-un', opts:['38 587 241','38 578 241','380 587 241','38 587 214'], correct:0},
  {lettres:'Cent-vingt-et-un millions trois-mille-six', opts:['121 030 006','121 300 006','121 003 006','121 003 060'], correct:2},
  {lettres:'Quatre-cent-septante-deux millions neuf-cent-mille-huit-cent-trente', opts:['472 900 830','472 090 830','472 900 803','427 900 830'], correct:0},
  {lettres:'Dix-neuf millions quatre-vingt-mille-sept-cents', opts:['19 800 700','19 080 700','190 080 700','19 080 007'], correct:1},
  {lettres:'Six-cent-cinquante millions quarante-quatre-mille-soixante-six', opts:['650 044 066','650 440 066','650 044 660','605 044 066'], correct:0},
  {lettres:'Quatre millions six-cent-mille-cinquante-deux', opts:['4 600 052','4 060 052','4 600 520','40 600 052'], correct:0},
  {lettres:'Trois-cent-quatre-vingts millions deux-cent-soixante-mille-sept-cent-quinze', opts:['380 206 715','308 260 715','380 260 715','380 260 751'], correct:2},
  {lettres:'Vingt-six millions sept-cent-nonante-et-un-mille-quatre-cents', opts:['26 791 040','26 791 400','267 914 000','26 719 400'], correct:1},
  {lettres:'Huit-cent-quatre millions cinquante-mille-cent-onze', opts:['840 050 111','804 500 111','804 050 111','804 050 011'], correct:2},
  {lettres:'Septante-et-un millions neuf-cent-mille-deux', opts:['71 090 002','71 900 200','71 900 002','710 900 002'], correct:2},
  {lettres:'Deux-cent-cinquante-trois millions six-cent-quarante-huit-mille-neuf-cent-septante-neuf', opts:['253 648 997','253 684 979','253 648 979','253 648 969'], correct:2},
  {lettres:'Quarante millions cinq-cent-mille-six-cent-deux', opts:['40 500 620','40 050 602','40 500 062','40 500 602'], correct:3},
  {lettres:'Sept-cent-quatre-vingt-neuf millions cent-vingt-trois-mille-quatre-cent-cinquante-six', opts:['789 132 456','789 123 456','798 123 456','789 123 465'], correct:1},
  {lettres:'Cinquante-deux millions sept-cents', opts:['52 000 700','52 007 000','52 700 000','520 000 700'], correct:0},
  {lettres:'Cent-quatre-vingt-six millions quatre-vingt-mille-quarante', opts:['186 080 040','186 800 040','186 080 400','168 080 040'], correct:0},
  {lettres:'Neuf millions trente-mille-cinq-cent-septante-trois', opts:['9 300 573','9 030 573','9 030 537','90 030 573'], correct:1},
  {lettres:'Quatre-cent-vingt millions huit-cent-mille', opts:['420 080 000','420 800 000','402 800 000','420 008 000'], correct:1},
  {lettres:'Treize millions deux-cent-quarante-cinq-mille-huit-cent-septante-deux', opts:['13 254 872','13 245 872','130 245 872','13 245 827'], correct:1},
  {lettres:'Cinq-cent-septante millions neuf-mille-nonante-neuf', opts:['570 090 099','570 009 099','570 900 099','507 009 099'], correct:1},
  {lettres:'Nonante-deux millions quatre-cent-mille-trente-et-un', opts:['92 040 031','92 400 031','92 400 013','920 400 031'], correct:1},
  {lettres:'Trois-cent-dix-neuf millions huit-cent-septante-sept-mille-deux-cent-soixante-cinq', opts:['319 877 265','319 870 265','391 877 265','319 877 256'], correct:0},
  {lettres:'Deux millions trois-cent-mille-quatre-vingts', opts:['2 300 800','2 300 080','2 030 080','23 000 080'], correct:1},
  {lettres:'Six-cent-quarante-huit millions septante-neuf-mille-trois-cent-quarante-deux', opts:['648 079 342','648 790 342','648 079 324','684 079 342'], correct:0},
  {lettres:'Vingt-sept millions six-cent-cinq-mille-nonante-six', opts:['27 650 096','27 605 096','27 605 069','270 605 096'], correct:1},
  {lettres:'Cent millions cent-mille-cent', opts:['100 100 001','100 010 100','100 001 100','100 100 100'], correct:3},
];

window.DEVINETTES_DECIMAUX_BANQUE = [
  {
    texte: "Je suis un nombre décimal. Ma partie décimale comprend 3 chiffres. Mon chiffre des centièmes est le double de mon chiffre des dixièmes. Qui suis-je ?",
    opts:["9,24", "12,326", "156,428", "45,248"],
    correct:3,
    expl: "Dans 45,248, le chiffre des dixièmes est 2 et celui des centièmes est 4 (le double de 2). La partie décimale a bien 3 chiffres."
  },
  {
    texte: "Je suis un nombre décimal ayant 2 chiffres après la virgule. La somme des chiffres de ma partie entière est égale à 10 et mon chiffre des centièmes est 7. Qui suis-je ?",
    opts:["19,777", "73,52", "64,57", "38,27"],
    correct:2,
    expl: "Dans 64,57, la partie entière est 64 (6 + 4 = 10), il y a 2 chiffres après la virgule, et le chiffre des centièmes est 7."
  },
  {
    texte: "Je suis un nombre à 5 chiffres. Ma partie entière contient 2 chiffres. Mon chiffre des dixièmes est égal à la somme des chiffres de ma partie entière. Qui suis-je ?",
    opts:["23,456", "45,91", "12,678", "14,528"],
    correct:3,
    expl: "Dans 14,528, il y a 5 chiffres en tout, 2 chiffres dans la partie entière (14) dont la somme vaut 1 + 4 = 5. Le chiffre des dixièmes est bien 5."
  },
  {
    texte: "Je suis un nombre décimal. Mon chiffre des dixièmes est la moitié de mon chiffre des unités. Mon chiffre des centièmes est supérieur à 6. Qui suis-je ?",
    opts:["46,32", "14,25", "28,47", "37,38"],
    correct:2,
    expl: "Dans 28,47, le chiffre des unités est 8. Le chiffre des dixièmes (4) est la moitié de 8. Le chiffre des centièmes (7) est bien supérieur à 6."
  },
  {
    texte: "Je suis un nombre à 6 chiffres. Le nombre de chiffres de ma partie entière est égal au nombre de chiffres de ma partie décimale. La somme de tous mes chiffres est égale à 18. Qui suis-je ?",
    opts:["205,361", "12,3456", "901,402", "123,453"],
    correct:3,
    expl: "Dans 123,453, il y a 6 chiffres (3 entiers et 3 décimaux). La somme de tous les chiffres est 1 + 2 + 3 + 4 + 5 + 3 = 18."
  },
  {
    texte: "Je suis un nombre décimal avec deux chiffres après la virgule. Le nombre formé par ces deux chiffres est la moitié de ma partie entière. Mon chiffre des dixièmes est 3. Qui suis-je ?",
    opts:["30,15", "80,4", "60,03", "70,35"],
    correct:3,
    expl: "Dans 70,35, il y a deux chiffres après la virgule : ils forment 35, qui est la moitié de 70 (la partie entière). Le chiffre des dixièmes est bien 3. (30,15 respecte aussi la moitié, mais son chiffre des dixièmes est 1.)"
  },
  {
    texte: "Je suis un nombre décimal. Mon chiffre des millièmes est 7. Mon chiffre des dixièmes est égal à la différence entre mon chiffre des millièmes et celui des centièmes. Qui suis-je ?",
    opts:["4,287", "12,627", "9,347", "8,417"],
    correct:2,
    expl: "Dans 9,347, le chiffre des millièmes est 7, celui des centièmes est 4, et celui des dixièmes est 3 (7 - 4 = 3)."
  },
  {
    texte: "Je suis un nombre décimal. Mon chiffre des dizaines est 2. Mon chiffre des dixièmes est le triple de mon chiffre des dizaines. Mon chiffre des centièmes est la moitié de mon chiffre des dixièmes. Qui suis-je ?",
    opts:["2,63", "27,62", "24,63", "124,93"],
    correct:2,
    expl: "Dans 24,63, le chiffre des dizaines est 2. Le chiffre des dixièmes (6) est le triple de 2. Le chiffre des centièmes (3) est la moitié de 6."
  },
  {
    texte: "Je suis un nombre à 5 chiffres. Ma partie décimale comprend 3 chiffres. Mon chiffre des dizaines est 9 et mon chiffre des millièmes est le tiers de mon chiffre des dizaines. Qui suis-je ?",
    opts:["95,123", "90,905", "9,5123", "95,300"],
    correct:0,
    expl: "Dans 95,123, il y a 5 chiffres dont 3 après la virgule. Le chiffre des dizaines est 9 et celui des millièmes (3) est le tiers de 9."
  },
  {
    texte: "Je suis un nombre décimal. Mon chiffre des centièmes est égal au produit de mon chiffre des unités par mon chiffre des dixièmes. Ce produit est égal à 8. Qui suis-je ?",
    opts:["81,18", "42,49", "14,248", "23,18"],
    correct:2,
    expl: "Dans 14,248, le chiffre des unités est 4 et celui des dixièmes est 2. Leur produit vaut 4 * 2 = 8, ce qui correspond bien au chiffre des centièmes (8)."
  }
];

window.PERIMETRE_GENERATEURS = [

  // Carré
  () => {
    const c = rndM(2, 12, true);
    const p = addM(c,c,c,c);
    const svg = `<svg viewBox="0 0 200 220" width="200" height="220">
      <rect x="40" y="50" width="120" height="120" fill="#e8e4f7" stroke="var(--purple)" stroke-width="2.5"/>
      <text x="100" y="38" text-anchor="middle" font-size="14" fill="var(--text)" font-weight="700">${fmtM(c)} m</text>
    </svg>`;
    return {nom:'Carré', svg, perimetre:p};
  },

  // Rectangle
  () => {
    let l = rndM(4, 14, true), w = rndM(2, 8, true);
    while(w === l) w = rndM(2, 8, true);
    const p = addM(l,w,l,w);
    const svg = `<svg viewBox="-10 0 280 200" width="270" height="200">
      <rect x="30" y="40" width="170" height="110" fill="#e8e4f7" stroke="var(--purple)" stroke-width="2.5"/>
      <text x="115" y="28" text-anchor="middle" font-size="14" fill="var(--text)" font-weight="700">${fmtM(l)} m</text>
      <text x="208" y="100" text-anchor="start" font-size="14" fill="var(--text)" font-weight="700">${fmtM(w)} m</text>
    </svg>`;
    return {nom:'Rectangle', svg, perimetre:p};
  },

  // Triangle équilatéral
  () => {
    const c = rndM(3, 12, true);
    const p = addM(c,c,c);
    const svg = `<svg viewBox="0 0 200 200" width="200" height="200">
      <polygon points="100,20 185,160 15,160" fill="#e8e4f7" stroke="var(--purple)" stroke-width="2.5"/>
      <text x="100" y="185" text-anchor="middle" font-size="13" fill="var(--text)" font-weight="700">${fmtM(c)} m</text>
    </svg>`;
    return {nom:'Triangle équilatéral', svg, perimetre:p};
  },

  // Triangle isocèle
  () => {
    const b = rndM(4, 12, true);
    let c = rndM(3, 10, true);
    // Les deux côtés égaux doivent être plus longs que la moitié de la base (sinon le triangle n'existe pas)
    while(c === b || 2 * c <= b) c = rndM(3, 10, true);
    const p = addM(b,c,c);
    const svg = `<svg viewBox="0 0 250 215" width="250" height="215">
      <polygon points="110,20 190,165 30,165" fill="#e8e4f7" stroke="var(--purple)" stroke-width="2.5"/>
      <text x="110" y="200" text-anchor="middle" font-size="13" fill="var(--text)" font-weight="700">${fmtM(b)} m</text>
      <text x="198" y="108" text-anchor="start" font-size="13" fill="var(--text)" font-weight="700">${fmtM(c)} m</text>
    </svg>`;
    return {nom:'Triangle isocèle', svg, perimetre:p};
  },

  // Triangle quelconque
  () => {
    let a, b, c;
    // Inégalité triangulaire : chaque côté plus court que la somme des deux autres (sinon le triangle n'existe pas)
    do { a = rndM(3, 10, true); b = rndM(3, 10, true); c = rndM(3, 10, true); }
    while(a >= b + c || b >= a + c || c >= a + b);
    const p = addM(a,b,c);
    const svg = `<svg viewBox="-10 0 280 215" width="270" height="215">
      <polygon points="40,165 195,165 140,25" fill="#e8e4f7" stroke="var(--purple)" stroke-width="2.5"/>
      <text x="118" y="200" text-anchor="middle" font-size="13" fill="var(--text)" font-weight="700">${fmtM(a)} m</text>
      <text x="202" y="105" text-anchor="start" font-size="13" fill="var(--text)" font-weight="700">${fmtM(b)} m</text>
      <text x="55" y="90" text-anchor="end" font-size="13" fill="var(--text)" font-weight="700">${fmtM(c)} m</text>
    </svg>`;
    return {nom:'Triangle', svg, perimetre:p};
  },

  // Losange
  () => {
    const c = rndM(3, 11, true);
    const p = addM(c,c,c,c);
    const svg = `<svg viewBox="0 0 260 200" width="260" height="200">
      <polygon points="110,20 185,100 110,180 35,100" fill="#e8e4f7" stroke="var(--purple)" stroke-width="2.5"/>
      <text x="193" y="65" text-anchor="start" font-size="13" fill="var(--text)" font-weight="700">${fmtM(c)} m</text>
    </svg>`;
    return {nom:'Losange', svg, perimetre:p};
  },

  // Trapèze
  () => {
    let b1, b2, c1, c2;
    // Grande base en bas (comme sur le dessin) et trapèze constructible :
    // |c1 − c2| < b1 − b2 < c1 + c2
    do { b1 = rndM(5, 12, true); b2 = rndM(3, 8, true); c1 = rndM(3, 8, true); c2 = rndM(3, 8, true); }
    while(!(b1 > b2 && Math.abs(c1 - c2) < b1 - b2 && b1 - b2 < c1 + c2));
    const p = addM(b1,b2,c1,c2);
    const offset = 25;
    const svg = `<svg viewBox="-15 0 300 205" width="285" height="205">
      <polygon points="${offset},160 ${250-offset},160 ${250-offset-25},45 ${offset+25},45" fill="#e8e4f7" stroke="var(--purple)" stroke-width="2.5"/>
      <text x="125" y="192" text-anchor="middle" font-size="13" fill="var(--text)" font-weight="700">${fmtM(b1)} m</text>
      <text x="125" y="28" text-anchor="middle" font-size="13" fill="var(--text)" font-weight="700">${fmtM(b2)} m</text>
      <text x="232" y="108" text-anchor="start" font-size="13" fill="var(--text)" font-weight="700">${fmtM(c1)} m</text>
      <text x="10" y="108" text-anchor="end" font-size="13" fill="var(--text)" font-weight="700">${fmtM(c2)} m</text>
    </svg>`;
    return {nom:'Trapèze', svg, perimetre:p};
  },

  // Pentagone régulier
  () => {
    const c = rndM(3, 9, true);
    const p = addM(c,c,c,c,c);
    const pts = [];
    for(let i=0;i<5;i++){
      const a = (i*72 - 90) * Math.PI/180;
      pts.push(`${Math.round(100+80*Math.cos(a))},${Math.round(100+80*Math.sin(a))}`);
    }
    const svg = `<svg viewBox="0 0 200 210" width="200" height="210">
      <polygon points="${pts.join(' ')}" fill="#e8e4f7" stroke="var(--purple)" stroke-width="2.5"/>
      <text x="100" y="205" text-anchor="middle" font-size="13" fill="var(--text)" font-weight="700">${fmtM(c)} m</text>
    </svg>`;
    return {nom:'Pentagone régulier', svg, perimetre:p};
  },

  // Hexagone régulier
  () => {
    const c = rndM(2, 8, true);
    const p = addM(c,c,c,c,c,c);
    const pts = [];
    for(let i=0;i<6;i++){
      const a = (i*60) * Math.PI/180;
      pts.push(`${Math.round(100+85*Math.cos(a))},${Math.round(100+85*Math.sin(a))}`);
    }
    const svg = `<svg viewBox="0 0 200 210" width="200" height="210">
      <polygon points="${pts.join(' ')}" fill="#e8e4f7" stroke="var(--purple)" stroke-width="2.5"/>
      <text x="100" y="206" text-anchor="middle" font-size="13" fill="var(--text)" font-weight="700">${fmtM(c)} m</text>
    </svg>`;
    return {nom:'Hexagone régulier', svg, perimetre:p};
  },

  // Parallélogramme
  () => {
    const b = rndM(5, 13, true), c = rndM(3, 8, true);
    const p = addM(b,c,b,c);
    const svg = `<svg viewBox="0 0 280 195" width="280" height="195">
      <polygon points="40,155 210,155 190,35 20,35" fill="#e8e4f7" stroke="var(--purple)" stroke-width="2.5"/>
      <text x="125" y="185" text-anchor="middle" font-size="13" fill="var(--text)" font-weight="700">${fmtM(b)} m</text>
      <text x="218" y="100" text-anchor="start" font-size="13" fill="var(--text)" font-weight="700">${fmtM(c)} m</text>
    </svg>`;
    return {nom:'Parallélogramme', svg, perimetre:p};
  },
];

window.MASSES_QCM_BANQUE = [
  { nombre:"3 kg",      texte:"c'est la même chose que",  opts:["300 g","3000 g","3 dag"],         correct:1 },
  { nombre:"500 g",     texte:"c'est la même chose que",  opts:["5 kg","5 dag","0,5 kg"],          correct:2 },
  { nombre:"2,5 kg",    texte:"c'est la même chose que",  opts:["250 g","2500 g","25 dag"],         correct:1 },
  { nombre:"¼ kg",      texte:"c'est la même chose que",  opts:["25 g","250 g","2500 g"],           correct:1 },
  { nombre:"½ kg",      texte:"c'est la même chose que",  opts:["50 g","5000 g","500 g"],           correct:2 },
  { nombre:"4000 g",    texte:"c'est la même chose que",  opts:["40 kg","400 kg","4 kg"],           correct:2 },
  { nombre:"750 g",     texte:"c'est la même chose que",  opts:["¾ kg","½ kg","¼ kg"],              correct:0 },
  { nombre:"3,5 kg",    texte:"c'est la même chose que",  opts:["35 g","350 g","3500 g"],           correct:2 },
  { nombre:"1 t",       texte:"c'est la même chose que",  opts:["100 kg","1000 kg","10000 kg"],     correct:1 },
  { nombre:"2500 kg",   texte:"c'est la même chose que",  opts:["25 t","2,5 t","250 t"],            correct:1 },
  { nombre:"½ t",       texte:"c'est la même chose que",  opts:["50 kg","5000 kg","500 kg"],        correct:2 },
  { nombre:"1 dag",     texte:"c'est la même chose que",  opts:["1 g","100 g","10 g"],              correct:2 },
  { nombre:"50 hg",     texte:"c'est la même chose que",  opts:["500 g","5 kg","50 kg"],            correct:1 },
  { nombre:"¼ t",       texte:"c'est la même chose que",  opts:["25 kg","2500 kg","250 kg"],        correct:2 },
  { nombre:"0,1 kg",    texte:"c'est la même chose que",  opts:["1 g","10 g","100 g"],              correct:2 },
  { nombre:"1 g",       texte:"c'est la même chose que",  opts:["10 mg","1000 mg","100 mg"],        correct:1 },
  { nombre:"500 mg",    texte:"c'est la même chose que",  opts:["5 g","0,5 g","50 g"],              correct:1 },
  { nombre:"1 cg",      texte:"c'est la même chose que",  opts:["1 mg","10 mg","100 mg"],           correct:1 },
  { nombre:"250 mg",    texte:"c'est la même chose que",  opts:["0,25 g","2,5 g","25 g"],           correct:0 },
  { nombre:"0,1 g",     texte:"c'est la même chose que",  opts:["1 mg","100 mg","10 mg"],           correct:1 },
  { nombre:"1 q",       texte:"c'est la même chose que",  opts:["10 kg","100 kg","1000 kg"],        correct:1 },
  { nombre:"5 q",       texte:"c'est la même chose que",  opts:["50 kg","500 kg","5000 kg"],        correct:1 },
  { nombre:"734 kg",    texte:"c'est la même chose que",  opts:["0,734 t","7,34 t","73,4 q"],       correct:0 },
  { nombre:"½ q",       texte:"c'est la même chose que",  opts:["5 kg","500 kg","50 kg"],           correct:2 },
  { nombre:"¼ q",       texte:"c'est la même chose que",  opts:["250 kg","2,5 kg","25 kg"],         correct:2 },
  { nombre:"10 q",      texte:"c'est la même chose que",  opts:["100 kg","10000 kg","1 t"],         correct:2 },
  { nombre:"2,5 q",     texte:"c'est la même chose que",  opts:["25 kg","2500 kg","250 kg"],        correct:2 },
  { nombre:"3500 g",    texte:"c'est la même chose que",  opts:["35 kg","3,5 kg","35 dag"],         correct:1 },
  { nombre:"0,25 kg",   texte:"c'est la même chose que",  opts:["250 g","25 g","2500 g"],           correct:0 },
  { nombre:"1,5 t",     texte:"c'est la même chose que",  opts:["150 kg","15000 kg","1500 kg"],     correct:2 },
  { nombre:"6 kg",      texte:"c'est la même chose que",  opts:["600 g","6000 g","60 dag"],         correct:1 },
  { nombre:"200 dag",   texte:"c'est la même chose que",  opts:["20 g","20000 g","2 kg"],           correct:2 },
  { nombre:"¾ kg",      texte:"c'est la même chose que",  opts:["75 g","7500 g","750 g"],           correct:2 },
  { nombre:"4,5 t",     texte:"c'est la même chose que",  opts:["450 kg","45000 kg","4500 kg"],     correct:2 },
  { nombre:"125 g",     texte:"c'est la même chose que",  opts:["⅛ kg","¼ kg","½ kg"],              correct:0 },
  { nombre:"1 hg",      texte:"c'est la même chose que",  opts:["10 g","1000 g","100 g"],           correct:2 },
  { nombre:"5 hg",      texte:"c'est la même chose que",  opts:["50 g","5000 g","500 g"],           correct:2 },
  { nombre:"0,5 t",     texte:"c'est la même chose que",  opts:["50 kg","5000 kg","500 kg"],        correct:2 },
  { nombre:"300 hg",    texte:"c'est la même chose que",  opts:["3 kg","300 kg","30 kg"],           correct:2 },
  { nombre:"2 dag",     texte:"c'est la même chose que",  opts:["2 g","200 g","20 g"],              correct:2 },
  { nombre:"¼ g",       texte:"c'est la même chose que",  opts:["25 mg","2500 mg","250 mg"],        correct:2 },
  { nombre:"0,001 t",   texte:"c'est la même chose que",  opts:["10 kg","100 kg","1 kg"],           correct:2 },
  { nombre:"7500 g",    texte:"c'est la même chose que",  opts:["75 kg","7,5 kg","75 dag"],         correct:1 },
  { nombre:"0,75 kg",   texte:"c'est la même chose que",  opts:["75 g","7500 g","750 g"],           correct:2 },
  { nombre:"1250 g",    texte:"c'est la même chose que",  opts:["1,25 kg","12,5 kg","12,5 dag"],    correct:0 },
  { nombre:"3 t",       texte:"c'est la même chose que",  opts:["300 kg","3000 q","30 q"],          correct:2 },
  { nombre:"0,5 dag",   texte:"c'est la même chose que",  opts:["50 mg","500 mg","5 g"],            correct:2 },
  { nombre:"600 kg",    texte:"c'est la même chose que",  opts:["60 q","6 q","0,6 q"],              correct:1 },
  { nombre:"2 cg",      texte:"c'est la même chose que",  opts:["2 mg","200 mg","20 mg"],           correct:2 },
  { nombre:"0,3 g",     texte:"c'est la même chose que",  opts:["3 mg","3000 mg","300 mg"],         correct:2 },
];

window.CAPACITES_QCM_BANQUE = [
  { nombre:"3 l",       opts:["300 ml","3000 ml","3 dal"],          correct:1 },
  { nombre:"500 ml",    opts:["5 l","5 cl","0,5 l"],                correct:2 },
  { nombre:"2,5 l",     opts:["250 ml","2500 ml","25 cl"],          correct:1 },
  { nombre:"¼ l",       opts:["25 ml","250 ml","2500 ml"],          correct:1 },
  { nombre:"½ l",       opts:["50 ml","5000 ml","500 ml"],          correct:2 },
  { nombre:"4000 ml",   opts:["40 l","400 l","4 l"],                correct:2 },
  { nombre:"750 ml",    opts:["¾ l","½ l","¼ l"],                   correct:0 },
  { nombre:"3,5 l",     opts:["35 ml","350 ml","3500 ml"],          correct:2 },
  { nombre:"1 m³",      opts:["100 l","1000 l","10000 l"],          correct:1 },
  { nombre:"2500 l",    opts:["25 m³","2,5 m³","250 m³"],           correct:1 },
  { nombre:"½ m³",      opts:["50 l","5000 l","500 l"],             correct:2 },
  { nombre:"1 dal",     opts:["1 l","100 l","10 l"],                correct:2 },
  { nombre:"50 hl",     opts:["500 l","5000 l","50000 l"],          correct:1 },
  { nombre:"¼ m³",      opts:["25 l","2500 l","250 l"],             correct:2 },
  { nombre:"0,1 l",     opts:["1 ml","10 ml","100 ml"],             correct:2 },
  { nombre:"1 cl",      opts:["1 ml","10 ml","100 ml"],             correct:1 },
  { nombre:"500 cl",    opts:["50 l","5 l","500 l"],                correct:1 },
  { nombre:"250 ml",    opts:["0,25 l","2,5 l","25 l"],             correct:0 },
  { nombre:"0,1 cl",    opts:["1 ml","10 ml","100 ml"],             correct:0 },
  { nombre:"1 dl",      opts:["1 ml","10 ml","10 cl"],              correct:2 }, // Option B corrigée
  { nombre:"1 hl",      opts:["10 l","100 l","1000 l"],             correct:1 },
  { nombre:"5 hl",      opts:["50 l","500 l","5000 l"],             correct:1 },
  { nombre:"734 l",     opts:["0,734 m³","7,34 m³","73,4 hl"],      correct:0 },
  { nombre:"½ hl",      opts:["5 l","500 l","50 l"],                correct:2 },
  { nombre:"¼ hl",      opts:["250 l","2,5 l","25 l"],              correct:2 },
  { nombre:"10 hl",     opts:["100 l","10000 l","1 m³"],            correct:2 },
  { nombre:"2,5 hl",    opts:["25 l","2500 l","250 l"],             correct:2 },
  { nombre:"3500 ml",   opts:["35 l","3,5 l","350 dl"],             correct:1 },
  { nombre:"0,25 l",    opts:["250 ml","25 ml","2500 ml"],          correct:0 },
  { nombre:"1,5 m³",    opts:["150 l","15000 l","1500 l"],          correct:2 },
  { nombre:"6 l",       opts:["600 ml","6000 ml","60 cl"],          correct:1 },
  { nombre:"200 dal",   opts:["20 l","20000 l","2000 l"],           correct:2 },
  { nombre:"¾ l",       opts:["75 ml","7500 ml","750 ml"],          correct:2 },
  { nombre:"4,5 m³",    opts:["450 l","45000 l","4500 l"],          correct:2 },
  { nombre:"125 ml",    opts:["⅛ l","¼ l","½ l"],                   correct:0 },
  { nombre:"5 cl",      opts:["5 ml","500 ml","50 ml"],             correct:2 },
  { nombre:"0,5 m³",    opts:["50 l","5000 l","500 l"],             correct:2 },
  { nombre:"300 dl",    opts:["3 l","300 l","30 l"],                correct:2 },
  { nombre:"2 dal",     opts:["2 l","200 l","20 l"],                correct:2 },
  { nombre:"¼ dl",      opts:["25 ml","2500 ml","2,5 ml"],          correct:0 },
  { nombre:"0,001 m³",  opts:["10 l","100 l","1 l"],                correct:2 },
  { nombre:"7500 ml",   opts:["75 l","7,5 l","750 dl"],             correct:1 },
  { nombre:"0,75 l",    opts:["75 ml","7500 ml","750 ml"],          correct:2 },
  { nombre:"1250 ml",   opts:["1,25 l","12,5 l","125 dl"],          correct:0 },
  { nombre:"3 m³",      opts:["300 l","3000 hl","3000 l"],          correct:2 },
  { nombre:"0,5 dal",   opts:["50 ml","500 ml","5 l"],              correct:2 },
  { nombre:"600 l",     opts:["60 hl","6 hl","0,6 hl"],             correct:1 },
  { nombre:"2 cl",      opts:["2 ml","200 ml","20 ml"],             correct:2 },
  { nombre:"0,3 l",     opts:["3 ml","3000 ml","300 ml"],           correct:2 },
  { nombre:"¾ hl",      opts:["7,5 l","750 l","75 l"],              correct:2 },
];

window.LONGUEURS_QCM_BANQUE = [
  { nombre:"3 m",       opts:["30 cm","300 cm","3 dam"],            correct:1 },
  { nombre:"500 mm",    opts:["5 m","50 m","0,5 m"],                correct:2 },
  { nombre:"2,5 km",    opts:["250 m","2500 m","25 m"],             correct:1 },
  { nombre:"¼ m",       opts:["25 mm","25 cm","250 cm"],            correct:1 },
  { nombre:"½ km",      opts:["50 m","5000 m","500 m"],             correct:2 },
  { nombre:"4000 m",    opts:["40 km","400 km","4 km"],             correct:2 },
  { nombre:"750 m",     opts:["¼ km","½ km","¾ km"],                correct:2 },
  { nombre:"3,5 m",     opts:["35 mm","350 mm","3500 mm"],          correct:2 },
  { nombre:"1 km",      opts:["100 m","1000 m","10000 m"],          correct:1 },
  { nombre:"2500 m",    opts:["25 km","2,5 km","250 km"],           correct:1 },
  { nombre:"½ m",       opts:["5 cm","50 cm","500 cm"],             correct:1 },
  { nombre:"1 dam",     opts:["1 m","100 m","10 m"],                correct:2 },
  { nombre:"50 hm",     opts:["500 m","5000 m","50000 m"],          correct:1 },
  { nombre:"¼ km",      opts:["25 m","2500 m","250 m"],             correct:2 },
  { nombre:"0,1 m",     opts:["1 cm","10 cm","100 cm"],             correct:1 },
  { nombre:"1 cm",      opts:["1 mm","10 mm","100 mm"],             correct:1 },
  { nombre:"500 cm",    opts:["50 m","5 m","0,5 m"],                correct:1 },
  { nombre:"250 mm",    opts:["0,25 m","2,5 m","25 m"],             correct:0 },
  { nombre:"0,1 cm",    opts:["1 mm","10 mm","100 mm"],             correct:0 },
  { nombre:"1 dm",      opts:["1 cm","10 cm","100 cm"],             correct:1 },
  { nombre:"1 hm",      opts:["10 m","100 m","1000 m"],             correct:1 },
  { nombre:"5 hm",      opts:["50 m","500 m","5000 m"],             correct:1 },
  { nombre:"734 m",     opts:["0,734 km","7,34 km","7,34 dam"],     correct:0 },
  { nombre:"½ hm",      opts:["5 m","500 m","50 m"],                correct:2 },
  { nombre:"¼ hm",      opts:["250 m","2,5 m","25 m"],              correct:2 },
  { nombre:"10 hm",     opts:["100 m","10000 m","1 km"],            correct:2 },
  { nombre:"2,5 hm",    opts:["25 m","2500 m","250 m"],             correct:2 },
  { nombre:"3500 mm",   opts:["35 m","3,5 m","350 dm"],             correct:1 },
  { nombre:"0,25 m",    opts:["250 mm","25 mm","2500 mm"],          correct:0 },
  { nombre:"1,5 km",    opts:["150 m","15000 m","1500 m"],          correct:2 },
  { nombre:"6 m",       opts:["60 mm","600 cm","6000 cm"],          correct:1 },
  { nombre:"200 dam",   opts:["20 m","20000 m","2000 m"],           correct:2 },
  { nombre:"¾ m",       opts:["75 cm","750 dm","75 dm"],            correct:0 }, // Option C corrigée
  { nombre:"4,5 km",    opts:["450 m","45000 m","4500 m"],          correct:2 },
  { nombre:"125 mm",    opts:["¼ m","½ m","⅛ m"],                   correct:2 },
  { nombre:"5 cm",      opts:["5 mm","500 mm","50 mm"],             correct:2 },
  { nombre:"0,5 km",    opts:["50 m","5000 m","500 m"],             correct:2 },
  { nombre:"300 dm",    opts:["3 m","300 m","30 m"],                correct:2 },
  { nombre:"2 dam",     opts:["2 m","200 m","20 m"],                correct:2 },
  { nombre:"¼ dm",      opts:["2,5 mm","25 mm","250 mm"],           correct:1 },
  { nombre:"0,001 km",  opts:["10 m","100 m","1 m"],                correct:2 },
  { nombre:"7500 mm",   opts:["75 m","7,5 m","750 dm"],             correct:1 },
  { nombre:"0,75 m",    opts:["75 cm","750 cm","7,5 cm"],           correct:0 },
  { nombre:"1250 mm",   opts:["1,25 m","12,5 m","125 dm"],          correct:0 },
  { nombre:"3 km",      opts:["300 m","30000 m","3000 m"],          correct:2 },
  { nombre:"5 dam",     opts:["5 m","500 m","50 m"],                correct:2 },
  { nombre:"600 m",     opts:["60 hm","6 hm","0,6 hm"],             correct:1 },
  { nombre:"2 cm",      opts:["2 mm","200 mm","20 mm"],             correct:2 },
  { nombre:"0,3 m",     opts:["3 mm","3000 mm","300 mm"],           correct:2 },
  { nombre:"¾ km",      opts:["7,5 m","75 m","750 m"],              correct:2 },
];

// ===== Lire un tableau : tableaux générés (nouvelles données à chaque fois) =====
// genTDTableau() renvoie { titre, type:'simple'|'double', colonnes, lignes, questions:[{q, options, correct, explication}] }
(function(){
  const melanger = a => { const r = [...a]; for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
  const entier = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const sp = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  // valeurs toutes différentes
  function valeursDistinctes(n, a, b){ const s = new Set(); while (s.size < n) s.add(entier(a, b)); return melanger([...s]); }
  // QCM : bonne réponse + 3 distracteurs différents, mélangés (Fisher–Yates)
  function qcm(q, bonne, distr, explication){
    const vus = new Set([bonne]), d = [];
    for (const x of melanger(distr)) { if (x !== undefined && x !== null && !vus.has(x) && d.length < 3) { vus.add(x); d.push(x); } }
    const options = melanger([bonne, ...d]);
    return { q, options, correct: options.indexOf(bonne), explication };
  }
  const numDistr = (v, u, extra) => [...(extra || []), v + 1, v - 1, v + 2, v - 2, v + 5, v - 5, v + 10, v - 10].filter(x => x > 0).map(x => `${sp(x)}${u}`);

  const SIMPLES = [
    { titre: "Animaux préférés des élèves de 6e", col: ["Animal", "Nombre d'élèves"], cats: ["Chien", "Chat", "Lapin", "Hamster", "Poisson", "Cheval", "Perruche"], min: 2, max: 15, u: " élèves", additif: true,
      plus: "Quel animal est préféré par le plus d'élèves ?", moins: "Quel animal est choisi par le moins d'élèves ?",
      seuil: s => `Combien d'animaux sont choisis par au moins ${s} élèves ?`, mot: ["animal", "animaux"], total: "Combien d'élèves ont été interrogés en tout ?" },
    { titre: "Températures maximales (°C) un jour de juillet", col: ["Ville", "Température (°C)"], cats: ["Bruxelles", "Liège", "Namur", "Mons", "Arlon", "Waimes", "Ostende", "Charleroi"], min: 17, max: 31, u: " °C", additif: false,
      plus: "Dans quelle ville a-t-il fait le plus chaud ?", moins: "Dans quelle ville a-t-il fait le moins chaud ?",
      seuil: s => `Dans combien de villes a-t-il fait au moins ${s} °C ?`, mot: ["ville", "villes"] },
    { titre: "Fruits vendus au marché (en kg)", col: ["Fruit", "Masse vendue (kg)"], cats: ["Pommes", "Poires", "Fraises", "Cerises", "Bananes", "Prunes", "Kiwis"], min: 12, max: 60, u: " kg", additif: true,
      plus: "Quel fruit s'est le plus vendu ?", moins: "Quel fruit s'est le moins vendu ?",
      seuil: s => `De combien de fruits a-t-on vendu au moins ${s} kg ?`, mot: ["fruit", "fruits"], total: "Combien de kilos de fruits ont été vendus en tout ?" },
    { titre: "Kilomètres parcourus à vélo en une semaine", col: ["Élève", "Distance (km)"], cats: ["Léa", "Tom", "Inès", "Noah", "Zoé", "Hugo", "Lina", "Sami"], min: 5, max: 40, u: " km", additif: true,
      plus: "Qui a roulé le plus ?", moins: "Qui a roulé le moins ?",
      seuil: s => `Combien d'élèves ont roulé au moins ${s} km ?`, mot: ["élève", "élèves"], total: "Combien de kilomètres ces élèves ont-ils roulé en tout ?" },
    { titre: "Points marqués au grand quiz de l'école", col: ["Équipe", "Points"], cats: ["Les Renards", "Les Hiboux", "Les Lynx", "Les Castors", "Les Aigles", "Les Loups"], min: 10, max: 50, u: " points", additif: true,
      plus: "Quelle équipe a marqué le plus de points ?", moins: "Quelle équipe a marqué le moins de points ?",
      seuil: s => `Combien d'équipes ont marqué au moins ${s} points ?`, mot: ["équipe", "équipes"], total: "Combien de points ont été marqués en tout ?" },
    { titre: "Visiteurs de la piscine", col: ["Jour", "Visiteurs"], cats: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"], min: 40, max: 210, u: " visiteurs", additif: true, ordre: true,
      plus: "Quel jour la piscine a-t-elle eu le plus de visiteurs ?", moins: "Quel jour la piscine a-t-elle eu le moins de visiteurs ?",
      seuil: s => `Combien de jours la piscine a-t-elle eu au moins ${s} visiteurs ?`, mot: ["jour", "jours"], total: "Combien de visiteurs la piscine a-t-elle eus en tout sur ces 5 jours ?" }
  ];

  function genSimple(){
    const t = SIMPLES[entier(0, SIMPLES.length - 1)];
    let cats = melanger(t.cats).slice(0, 5);
    if (t.ordre) { const i0 = entier(0, t.cats.length - 5); cats = t.cats.slice(i0, i0 + 5); }
    const v = valeursDistinctes(5, t.min, t.max);
    const L = cats.map((c, i) => [c, v[i]]);
    const tri = [...L].sort((a, b) => b[1] - a[1]);
    const [cMax, vMax] = tri[0], [cMin, vMin] = tri[4];
    const u = t.u;
    const qs = [];
    qs.push(qcm(t.plus, cMax, [tri[1][0], tri[2][0], cMin, tri[3][0]],
      `${cMax} : ${sp(vMax)}${u}, c'est la plus grande valeur du tableau.`));
    qs.push(qcm(t.moins, cMin, [tri[3][0], tri[2][0], cMax, tri[1][0]],
      `${cMin} : ${sp(vMin)}${u}, c'est la plus petite valeur du tableau.`));
    // une question de calcul parmi plusieurs sortes
    const autres = [];
    const [a, b] = melanger(L).slice(0, 2), grand = a[1] > b[1] ? a : b, petit = a[1] > b[1] ? b : a;
    autres.push(() => qcm(`Quel est l'écart entre « ${grand[0]} » et « ${petit[0]} » ?`, `${sp(grand[1] - petit[1])}${u}`,
      numDistr(grand[1] - petit[1], u, [`${sp(grand[1] + petit[1])}${u}`]),
      `${sp(grand[1])} − ${sp(petit[1])} = ${sp(grand[1] - petit[1])}${u}.`));
    const seuil = tri[entier(1, 3)][1], nb = L.filter(x => x[1] >= seuil).length;
    autres.push(() => qcm(t.seuil(sp(seuil)), `${nb}`, ['1', '2', '3', '4', '5'].filter(x => +x !== nb),
      `${L.filter(x => x[1] >= seuil).map(x => `${x[0]} (${sp(x[1])})`).join(', ')} : ${nb} ${nb > 1 ? t.mot[1] : t.mot[0]}.`));
    if (t.additif) {
      const tot = v.reduce((s, x) => s + x, 0);
      autres.push(() => qcm(t.total, `${sp(tot)}${u}`, numDistr(tot, u, [`${sp(tot - vMin)}${u}`, `${sp(tot + vMax)}${u}`]),
        `${v.map(sp).join(' + ')} = ${sp(tot)}${u}.`));
      const [c, d] = melanger(L.filter(x => x !== a && x !== b)).slice(0, 2);
      autres.push(() => qcm(`« ${c[0]} » et « ${d[0]} » ensemble, cela fait combien ?`, `${sp(c[1] + d[1])}${u}`, numDistr(c[1] + d[1], u, [`${sp(Math.abs(c[1] - d[1]))}${u}`]),
        `${sp(c[1])} + ${sp(d[1])} = ${sp(c[1] + d[1])}${u}.`));
    } else {
      autres.push(() => qcm(`Quel est l'écart entre la température la plus haute et la plus basse du tableau ?`, `${vMax - vMin}${u}`, numDistr(vMax - vMin, u, [`${vMax + vMin}${u}`]),
        `${vMax} − ${vMin} = ${vMax - vMin}${u} (entre ${cMax} et ${cMin}).`));
      const [c] = melanger(L.filter(x => x[0] !== cMax && x[0] !== cMin));
      autres.push(() => qcm(`Quelle température faisait-il à ${c[0]} ?`, `${c[1]}${u}`, L.filter(x => x !== c).map(x => `${x[1]}${u}`),
        `On lit la ligne ${c[0]} : ${c[1]}${u}.`));
    }
    melanger(autres).slice(0, 3).forEach(f => qs.push(f()));
    return { titre: t.titre, type: 'simple', colonnes: t.col, lignes: L.map(x => [x[0], sp(x[1])]), questions: melanger(qs) };
  }

  const DOUBLES = [
    { titre: "Livres lus pendant les vacances", coin: "Type de livre", lig: ["Romans", "BD", "Documentaires", "Mangas"], col: ["Garçons", "Filles"], min: 3, max: 20,
      plusL: "Au total, quel type de livre a été le plus lu ?", moinsC: "Au total, qui a lu le moins de livres ?" },
    { titre: "Sport pratiqué par les élèves de 6e", coin: "", lig: ["Garçons", "Filles"], col: ["Basket", "Foot", "Natation", "Danse"], min: 2, max: 15,
      plusL: "Au total, qui est le plus nombreux à pratiquer ces sports ?", moinsC: "Au total, quel sport est le moins pratiqué ?" },
    { titre: "Comment les élèves viennent-ils à l'école ?", coin: "Classe", lig: ["5e A", "5e B", "6e A", "6e B"], col: ["À pied", "À vélo", "En voiture", "En bus"], min: 1, max: 12,
      plusL: "Au total, quelle classe compte le plus d'élèves ?", moinsC: "Au total, quel moyen de transport est le moins utilisé ?" },
    { titre: "Collation préférée des élèves", coin: "Collation", lig: ["Fruit", "Biscuit", "Yaourt", "Tartine"], col: ["5e", "6e"], min: 3, max: 16,
      plusL: "Au total, quelle collation est la plus choisie ?", moinsC: "Au total, dans quelle année y a-t-il le moins d'élèves interrogés ?" }
  ];

  function genDouble(){
    const t = DOUBLES[entier(0, DOUBLES.length - 1)];
    const nl = Math.min(t.lig.length, t.col.length === 2 ? 3 : (t.lig.length === 2 ? 2 : 3));
    const lig = t.lig.length === 2 ? t.lig : melanger(t.lig).slice(0, nl).sort((x, y) => t.lig.indexOf(x) - t.lig.indexOf(y));
    const col = t.col.length === 2 ? t.col : melanger(t.col).slice(0, 3).sort((x, y) => t.col.indexOf(x) - t.col.indexOf(y));
    let M, totL, totC;
    for (let k = 0; k < 200; k++) {   // totaux de lignes tous différents (une seule réponse au « plus » / « moins »)
      M = lig.map(() => col.map(() => entier(t.min, t.max)));
      totL = M.map(r => r.reduce((s, x) => s + x, 0));
      totC = col.map((_, j) => M.reduce((s, r) => s + r[j], 0));
      if (new Set(totL).size === totL.length && new Set(totC).size === totC.length) break;
    }
    const tot = totL.reduce((s, x) => s + x, 0);
    const lignes = lig.map((l, i) => [l, ...M[i].map(sp), sp(totL[i])]);
    lignes.push(['Total', ...totC.map(sp), sp(tot)]);
    const toutes = M.flat();
    const qs = [];
    // 2 lectures de cases différentes (lignes et colonnes différentes)
    const i1 = entier(0, lig.length - 1), j1 = entier(0, col.length - 1);
    let i2 = (i1 + 1) % lig.length, j2 = (j1 + 1) % col.length;
    [[i1, j1], [i2, j2]].forEach(([i, j]) => {
      qs.push(qcm(`Quel nombre lit-on dans la ligne « ${lig[i]} » et la colonne « ${col[j]} » ?`, `${sp(M[i][j])}`,
        [...toutes.filter(x => x !== M[i][j]).map(sp), sp(M[i][j] + 1), sp(M[i][j] - 1)],
        `Ligne « ${lig[i]} », colonne « ${col[j]} » : on lit ${sp(M[i][j])}.`));
    });
    // le plus / le moins au total (colonne ou ligne Total)
    if (Math.random() < 0.5) {
      const iMax = totL.indexOf(Math.max(...totL));
      qs.push(qcm(t.plusL, lig[iMax], [...lig.filter((_, i) => i !== iMax), 'Impossible à savoir'],
        `On regarde la colonne « Total » : ${lig.map((l, i) => `${l} ${sp(totL[i])}`).join(', ')}. Le plus grand est ${lig[iMax]}.`));
    } else {
      const jMin = totC.indexOf(Math.min(...totC));
      qs.push(qcm(t.moinsC, col[jMin], [...col.filter((_, j) => j !== jMin), 'Impossible à savoir'],
        `On regarde la ligne « Total » : ${col.map((c, j) => `${c} ${sp(totC[j])}`).join(', ')}. Le plus petit est ${col[jMin]}.`));
    }
    // total général
    qs.push(qcm(`Quel est le total général du tableau ?`, `${sp(tot)}`, [sp(tot + 1), sp(tot - 1), sp(tot + 10), sp(tot - 10), ...totL.map(sp), ...totC.map(sp)],
      `Le total général est dans la case en bas à droite : ${sp(tot)}.`));
    // calcul : différence dans une même ligne
    const i3 = entier(0, lig.length - 1), [ja, jb] = melanger(col.map((_, j) => j)).slice(0, 2);
    if (M[i3][ja] !== M[i3][jb]) {
      const g = M[i3][ja] > M[i3][jb] ? ja : jb, p = g === ja ? jb : ja, d = M[i3][g] - M[i3][p];
      qs.push(qcm(`Dans la ligne « ${lig[i3]} », combien de plus y a-t-il dans « ${col[g]} » que dans « ${col[p]} » ?`, `${d}`, [d + 1, d - 1, d + 2, d - 2, M[i3][g] + M[i3][p]].filter(x => x > 0).map(String),
        `${sp(M[i3][g])} − ${sp(M[i3][p])} = ${d}.`));
    } else {
      qs.push(qcm(`Combien y a-t-il en tout dans la ligne « ${lig[i3]} » ?`, sp(totL[i3]), [...totL.filter((_, i) => i !== i3).map(sp), sp(totL[i3] + 1), sp(totL[i3] - 1)],
        `On lit la case « Total » de la ligne « ${lig[i3]} » : ${sp(totL[i3])}.`));
    }
    return { titre: t.titre, type: 'double', colonnes: [t.coin, ...col, 'Total'], lignes, questions: melanger(qs) };
  }

  let dernierType = null;
  window.genTDTableau = function(){
    // alterne au hasard tableaux simples et à double entrée, sans répéter deux fois le même type de suite
    const type = dernierType === 'simple' ? 'double' : dernierType === 'double' ? 'simple' : (Math.random() < 0.5 ? 'simple' : 'double');
    dernierType = type;
    return type === 'simple' ? genSimple() : genDouble();
  };
})();

window.TD_MOYENNES = [
  {
    contexte:"Les températures (en °C) relevées à Waimes pendant une semaine :",
    donnees:[14,18,12,20,16,15,19],
    labels:['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'],
    questions:[
      {q:"Quelle est la température la plus élevée de la semaine ?", options:["18°C","19°C","20°C","21°C"], correct:2, explication:"La valeur maximale dans la série est 20°C (jeudi)."},
      {q:"Quelle est la température la plus basse de la semaine ?", options:["12°C","14°C","15°C","16°C"], correct:0, explication:"La valeur minimale dans la série est 12°C (mercredi)."},
      {q:"Quelle est l'étendue des températures ?", options:["6°C","7°C","8°C","9°C"], correct:2, explication:"Étendue = max - min = 20 - 12 = 8°C."},
      {q:"Quelle est la moyenne des températures de la semaine ?", options:["15°C","16°C","17°C","18°C"], correct:1, explication:"Moyenne = (14+18+12+20+16+15+19) ÷ 7 = 114 ÷ 7 = 16,3°C ≈ 16°C."},
      {q:"Combien de jours la température dépasse-t-elle 16°C ?", options:["2 jours","3 jours","4 jours","5 jours"], correct:1, explication:"18 (mardi), 20 (jeudi) et 19 (dimanche) dépassent 16°C — soit 3 jours."},
    ]
  },
  {
    contexte:"Les points marqués par Lucas lors de ses 8 derniers matchs de basket :",
    donnees:[12,8,15,6,18,10,14,9],
    labels:['Match 1','Match 2','Match 3','Match 4','Match 5','Match 6','Match 7','Match 8'],
    questions:[
      {q:"Quel est le score maximum de Lucas en un match ?", options:["14 points","15 points","16 points","18 points"], correct:3, explication:"Le maximum est 18 points (match 5)."},
      {q:"Quel est le score minimum de Lucas en un match ?", options:["6 points","8 points","9 points","10 points"], correct:0, explication:"Le minimum est 6 points (match 4)."},
      {q:"Quelle est l'étendue de ses scores ?", options:["10 points","11 points","12 points","13 points"], correct:2, explication:"Étendue = 18 - 6 = 12 points."},
      {q:"Quelle est sa moyenne de points par match ?", options:["10 points","11 points","12 points","13 points"], correct:1, explication:"Moyenne = (12+8+15+6+18+10+14+9) ÷ 8 = 92 ÷ 8 = 11,5 ≈ 11 points."},
      {q:"Combien de matchs Lucas a-t-il marqué plus que sa moyenne ?", options:["3 matchs","4 matchs","5 matchs","2 matchs"], correct:0, explication:"Sa moyenne est environ 11,5 pts. Il dépasse ce score en match 1 (12), 3 (15), 5 (18) et 7 (14) — soit 4 matchs. Attention : la moyenne exacte est 11,5 donc 12 > 11,5 aussi."},
    ]
  },
  {
    contexte:"Les résultats de 6 élèves à un test de mathématiques (sur 20) :",
    donnees:[14,16,12,18,11,15],
    labels:['Emma','Noah','Léa','Tom','Camille','Lucas'],
    questions:[
      {q:"Quelle est la note la plus élevée ?", options:["15","16","17","18"], correct:3, explication:"La note maximale est 18, obtenue par Tom."},
      {q:"Quelle est la note la plus basse ?", options:["11","12","13","14"], correct:0, explication:"La note minimale est 11, obtenue par Camille."},
      {q:"Quelle est l'étendue des notes ?", options:["5 points","6 points","7 points","8 points"], correct:2, explication:"Étendue = 18 - 11 = 7 points."},
      {q:"Quelle est la moyenne de la classe ?", options:["14 points","15 points","14,3 points","16 points"], correct:0, explication:"Moyenne = (14+16+12+18+11+15) ÷ 6 = 86 ÷ 6 ≈ 14,3 — on arrondit à 14."},
      {q:"Combien d'élèves ont une note supérieure à 14 ?", options:["2 élèves","3 élèves","4 élèves","5 élèves"], correct:1, explication:"Noah (16), Tom (18) et Lucas (15) ont une note supérieure à 14 — soit 3 élèves."},
    ]
  },
  {
    contexte:"Le nombre de visiteurs (en centaines) dans un musée pendant 5 jours :",
    donnees:[320,450,280,510,390],
    labels:['Lundi','Mardi','Mercredi','Jeudi','Vendredi'],
    questions:[
      {q:"Quel jour y a-t-il eu le plus de visiteurs ?", options:["Lundi","Mardi","Jeudi","Vendredi"], correct:2, explication:"Le jeudi avec 510 visiteurs, c'est le jour le plus fréquenté."},
      {q:"Quel jour y a-t-il eu le moins de visiteurs ?", options:["Lundi","Mercredi","Vendredi","Mardi"], correct:1, explication:"Le mercredi avec seulement 280 visiteurs, c'est le jour le moins fréquenté."},
      {q:"Quelle est l'étendue du nombre de visiteurs ?", options:["220","230","240","250"], correct:1, explication:"Étendue = 510 - 280 = 230 visiteurs."},
      {q:"Quelle est la moyenne journalière de visiteurs ?", options:["370","380","390","400"], correct:2, explication:"Moyenne = (320+450+280+510+390) ÷ 5 = 1950 ÷ 5 = 390 visiteurs."},
      {q:"Combien de jours le musée a-t-il accueilli plus de 400 visiteurs ?", options:["1 jour","2 jours","3 jours","4 jours"], correct:1, explication:"Mardi (450) et jeudi (510) dépassent 400 visiteurs — soit 2 jours."},
    ]
  },
];

// ===== Lire un graphique : graphiques générés (nouvelles données à chaque fois) =====
// genTDGraphique() renvoie { titre, type:'barres'|'lineaire', axeY, pas, max, donnees:[{label, valeur}], questions:[{q, options, correct, explication}] }
// Toutes les valeurs tombent pile sur une ligne du quadrillage : on les lit sur l'échelle (elles ne sont pas écrites).
(function(){
  const melanger = a => { const r = [...a]; for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
  const entier = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  function qcm(q, bonne, distr, explication){
    const vus = new Set([bonne]), d = [];
    for (const x of melanger(distr)) { if (x !== undefined && x !== null && !vus.has(x) && d.length < 3) { vus.add(x); d.push(x); } }
    const options = melanger([bonne, ...d]);
    return { q, options, correct: options.indexOf(bonne), explication };
  }
  // distracteurs sur le quadrillage (multiples du pas), strictement positifs
  const numD = (v, pas, u) => [v + pas, v - pas, v + 2 * pas, v - 2 * pas, v + 3 * pas].filter(x => x > 0).map(x => `${x}${u}`);
  // n multiples de pas, tous différents, entre a et b
  function distincts(n, a, b, pas){ const s = new Set(); while (s.size < n) s.add(pas * entier(Math.ceil(a / pas), Math.floor(b / pas))); return melanger([...s]); }

  const THEMES = [
    { type: 'barres', titre: "Livres lus par la classe chaque mois", axeY: "Nombre de livres", labels: ["Sept.", "Oct.", "Nov.", "Déc.", "Janv.", "Févr."], pas: 2, min: 2, max: 18, u: " livres", additif: true,
      plus: "Quel mois la classe a-t-elle lu le plus de livres ?", moins: "Quel mois la classe a-t-elle lu le moins de livres ?",
      lire: l => `Combien de livres la classe a-t-elle lus en ${l} ?`, total: "Combien de livres la classe a-t-elle lus en tout sur ces 6 mois ?", mot: ["mois", "mois"],
      seuil: s => `Pendant combien de mois la classe a-t-elle lu au moins ${s} livres ?` },
    { type: 'barres', titre: "Sport préféré des élèves de l'école", axeY: "Nombre d'élèves", labels: ["Foot", "Natation", "Basket", "Tennis", "Vélo", "Danse", "Judo"], n: 6, melange: true, pas: 5, min: 5, max: 45, u: " élèves", additif: true,
      plus: "Quel sport est préféré par le plus d'élèves ?", moins: "Quel sport est préféré par le moins d'élèves ?",
      lire: l => `Combien d'élèves préfèrent ${l === 'Natation' ? 'la natation' : l === 'Danse' ? 'la danse' : l === 'Foot' ? 'le foot' : l === 'Basket' ? 'le basket' : l === 'Tennis' ? 'le tennis' : l === 'Vélo' ? 'le vélo' : 'le judo'} ?`,
      total: "Combien d'élèves ont répondu en tout ?", mot: ["sport", "sports"], seuil: s => `Combien de sports sont préférés par au moins ${s} élèves ?` },
    { type: 'barres', titre: "Buts marqués par chaque équipe du tournoi", axeY: "Nombre de buts", labels: ["Les Lions", "Les Tigres", "Les Ours", "Les Loups", "Les Aigles"], n: 5, melange: true, pas: 1, min: 1, max: 10, u: " buts", additif: true,
      plus: "Quelle équipe a marqué le plus de buts ?", moins: "Quelle équipe a marqué le moins de buts ?",
      lire: l => `Combien de buts ${l.replace('Les', 'les')} ont-ils marqués ?`, total: "Combien de buts ont été marqués en tout ?", mot: ["équipe", "équipes"],
      seuil: s => `Combien d'équipes ont marqué au moins ${s} buts ?` },
    { type: 'lineaire', titre: "Température moyenne à Waimes", axeY: "Température (°C)", labels: ["Janv.", "Févr.", "Mars", "Avr.", "Mai", "Juin", "Juil.", "Août"], pas: 2, u: " °C",
      gen: () => { const b = [2, 4, 6, 10, 14, 16, 20, 18]; return b.map((x, i) => Math.max(0, x + 2 * entier(-1, 1) * (i % 2))); },
      plus: "Quel mois fait-il le plus chaud ?", moins: "Quel mois fait-il le plus froid ?",
      lire: l => `Quelle température moyenne fait-il en ${l.replace('.', '').replace('Janv', 'janvier').replace('Févr', 'février').replace('Avr', 'avril').replace('Juil', 'juillet').replace('Mars', 'mars').replace('Mai', 'mai').replace('Juin', 'juin').replace('Août', 'aout')} ?`,
      mot: ["mois", "mois"], seuil: s => `Pendant combien de mois fait-il au moins ${s} °C ?` },
    { type: 'lineaire', titre: "Taille d'un plant de tomate", axeY: "Taille (cm)", labels: ["Sem. 1", "Sem. 2", "Sem. 3", "Sem. 4", "Sem. 5", "Sem. 6", "Sem. 7"], pas: 5, u: " cm",
      gen: () => { let v = 5 * entier(1, 2), r = [v]; for (let i = 1; i < 7; i++) { v += 5 * entier(i === 3 ? 0 : 1, 2); r.push(v); } return r; },
      lire: l => `Combien mesure le plant pendant la ${l.replace('Sem. ', '').replace(/^1$/, '1re').replace(/^(\d)$/, '$1e')} semaine ?`,
      mot: ["semaine", "semaines"], seuil: s => `Pendant combien de semaines le plant mesure-t-il au moins ${s} cm ?`, croissant: true },
    { type: 'lineaire', titre: "Visiteurs de la bibliothèque", axeY: "Nombre de visiteurs", labels: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"], pas: 10, min: 20, max: 120, u: " visiteurs",
      plus: "Quel jour la bibliothèque a-t-elle eu le plus de visiteurs ?", moins: "Quel jour la bibliothèque a-t-elle eu le moins de visiteurs ?",
      lire: l => `Combien de visiteurs la bibliothèque a-t-elle eus le ${l.toLowerCase()} ?`, mot: ["jour", "jours"],
      seuil: s => `Combien de jours la bibliothèque a-t-elle eu au moins ${s} visiteurs ?`, additif: true, total: "Combien de visiteurs la bibliothèque a-t-elle eus en tout sur ces 6 jours ?" }
  ];

  function genereValeurs(t){
    for (let k = 0; k < 500; k++) {
      let v = t.gen ? t.gen() : distincts(t.n || t.labels.length, t.min, t.max, t.pas);
      const mx = Math.max(...v), mn = Math.min(...v);
      // max et min uniques (une seule bonne réponse), sauf pour une croissance (plant) où on ne demande pas le min
      if (v.filter(x => x === mx).length === 1 && (t.croissant || v.filter(x => x === mn).length === 1)) return v;
    }
  }

  let dernier = -1;
  window.genTDGraphique = function(){
    let k; do { k = entier(0, THEMES.length - 1); } while (k === dernier); dernier = k;
    const t = THEMES[k];
    const labels = t.melange ? melanger(t.labels).slice(0, t.n) : t.labels;
    const v = genereValeurs(t);
    const D = labels.map((l, i) => ({ label: l, valeur: v[i] }));
    const u = t.u, mx = Math.max(...v), mn = Math.min(...v);
    const iMx = v.indexOf(mx), iMn = v.indexOf(mn);
    const qs = [];
    const autresLabels = i => labels.filter((_, j) => j !== i);
    if (t.croissant) {
      qs.push(qcm("Pendant quelle semaine le plant a-t-il le plus grandi ?", (() => { let b = 1; for (let i = 2; i < v.length; i++) if (v[i] - v[i - 1] > v[b] - v[b - 1]) b = i; return labels[b]; })(),
        labels.slice(1), 'On compare la hauteur gagnée chaque semaine (la pente la plus forte).'));
      // vérifie qu'il n'y a qu'une seule plus forte pousse ; sinon remplace par une lecture
      const gains = v.slice(1).map((x, i) => x - v[i]); const gmax = Math.max(...gains);
      if (gains.filter(g => g === gmax).length > 1) qs.pop();
      else { const b = gains.indexOf(gmax) + 1; qs[qs.length - 1].explication = `Entre ${labels[b - 1]} et ${labels[b]}, le plant passe de ${v[b - 1]} à ${v[b]} cm : +${gmax} cm, c'est la plus forte pousse.`; }
      qs.push(qcm(`Combien mesure le plant à la fin (${labels[v.length - 1]}) ?`, `${mx}${u}`, numD(mx, t.pas, u), `On lit le dernier point : ${mx}${u}.`));
    } else {
      qs.push(qcm(t.plus, labels[iMx], autresLabels(iMx), `${labels[iMx]} : ${mx}${u}, c'est la valeur la plus haute du graphique.`));
      qs.push(qcm(t.moins, labels[iMn], autresLabels(iMn), `${labels[iMn]} : ${mn}${u}, c'est la valeur la plus basse du graphique.`));
    }
    // lecture d'une valeur (ni le max ni le min)
    const iL = melanger(labels.map((_, i) => i).filter(i => i !== iMx && i !== iMn))[0];
    qs.push(qcm(t.lire(labels[iL]), `${v[iL]}${u}`, numD(v[iL], t.pas, u), `On suit le haut ${t.type === 'barres' ? 'de la barre' : 'du point'} « ${labels[iL]} » jusqu'à l'échelle : ${v[iL]}${u}.`));
    const autres = [];
    // écart entre deux valeurs
    const [a, b] = melanger(labels.map((_, i) => i).filter(i => v[i] !== undefined)).slice(0, 2);
    if (v[a] !== v[b]) {
      const g = v[a] > v[b] ? a : b, p = g === a ? b : a;
      autres.push(() => qcm(`Quel est l'écart entre « ${labels[g]} » et « ${labels[p]} » ?`, `${v[g] - v[p]}${u}`, [...numD(v[g] - v[p], t.pas, u), `${v[g] + v[p]}${u}`],
        `${v[g]} − ${v[p]} = ${v[g] - v[p]}${u}.`));
    }
    // seuil
    const seuils = [...new Set(v)].sort((x, y) => x - y).slice(1, -1);
    if (seuils.length) {
      const s = seuils[entier(0, seuils.length - 1)], nb = v.filter(x => x >= s).length;
      autres.push(() => qcm(t.seuil(s), `${nb}`, ['1', '2', '3', '4', '5', '6'].filter(x => +x !== nb && +x <= v.length),
        `${D.filter(d => d.valeur >= s).map(d => `${d.label} (${d.valeur})`).join(', ')} : ${nb} ${nb > 1 ? t.mot[1] : t.mot[0]}.`));
    }
    if (t.additif) {
      const tot = v.reduce((x, y) => x + y, 0);
      autres.push(() => qcm(t.total, `${tot}${u}`, [`${tot + t.pas}${u}`, `${tot - t.pas}${u}`, `${tot + 2 * t.pas}${u}`, `${tot - 2 * t.pas}${u}`, `${tot + 3 * t.pas}${u}`],
        `${v.join(' + ')} = ${tot}${u}.`));
    }
    if (t.type === 'lineaire') {
      // évolution entre deux moments
      let i1, i2, ess = 0; do { i1 = entier(0, v.length - 2); i2 = entier(i1 + 1, v.length - 1); ess++; } while (v[i1] === v[i2] && ess < 50);
      if (v[i1] !== v[i2]) autres.push(() => qcm(`Entre « ${labels[i1]} » et « ${labels[i2]} », la valeur a-t-elle augmenté ou diminué ?`, v[i2] > v[i1] ? 'Elle a augmenté' : 'Elle a diminué',
        ['Elle a augmenté', 'Elle a diminué', 'Elle est restée la même'], `${labels[i1]} : ${v[i1]}${u} ; ${labels[i2]} : ${v[i2]}${u}. Elle a ${v[i2] > v[i1] ? 'augmenté' : 'diminué'} de ${Math.abs(v[i2] - v[i1])}${u}.`));
    }
    melanger(autres).slice(0, 5 - qs.length).forEach(f => qs.push(f()));
    const maxAxe = t.pas * (Math.floor(mx / t.pas) + 1);
    return { titre: t.titre, type: t.type, axeY: t.axeY, pas: t.pas, max: maxAxe, donnees: D, questions: melanger(qs) };
  };
})();


window.RH_PUZZLES=[
  {name:'Puzzle 1',level:0,pieces:[
    {id:'p',x:1,y:2,len:2,dir:'h',isPlayer:true},
    {id:'G',x:0,y:0,len:2,dir:'h'},{id:'V',x:0,y:1,len:3,dir:'v'},
    {id:'B',x:3,y:1,len:3,dir:'v'},{id:'O',x:5,y:1,len:3,dir:'v'},
    {id:'N',x:0,y:4,len:2,dir:'v'},{id:'C',x:4,y:4,len:2,dir:'h'},
    {id:'T',x:2,y:5,len:3,dir:'h'}
  ]},
  {name:'Puzzle 2',level:0,pieces:[
    {id:'p',x:0,y:2,len:2,dir:'h',isPlayer:true},
    {id:'G',x:0,y:0,len:2,dir:'v'},{id:'O',x:3,y:0,len:3,dir:'h'},
    {id:'N',x:3,y:1,len:2,dir:'v'},{id:'V',x:5,y:1,len:3,dir:'v'},
    {id:'B',x:4,y:2,len:2,dir:'v'},{id:'T',x:0,y:4,len:2,dir:'h'},
    {id:'R',x:3,y:3,len:2,dir:'v'},{id:'J',x:4,y:5,len:2,dir:'h'}
  ]},
  {name:'Puzzle 3',level:0,pieces:[
    {id:'p',x:0,y:2,len:2,dir:'h',isPlayer:true},
    {id:'O1',x:3,y:1,len:3,dir:'v'},{id:'V',x:1,y:3,len:2,dir:'h'},
    {id:'B',x:2,y:4,len:2,dir:'h'},{id:'N',x:4,y:3,len:3,dir:'v'},
    {id:'M',x:5,y:1,len:3,dir:'v'},{id:'O2',x:1,y:0,len:2,dir:'v'}
  ]},
  {name:'Puzzle 4',level:0,pieces:[
    {id:'p',x:1,y:2,len:2,dir:'h',isPlayer:true},
    {id:'O1',x:0,y:0,len:3,dir:'v'},{id:'M',x:3,y:0,len:3,dir:'v'},
    {id:'V1',x:2,y:3,len:2,dir:'v'},{id:'B',x:3,y:3,len:3,dir:'h'},
    {id:'O2',x:5,y:4,len:2,dir:'v'},{id:'V2',x:2,y:5,len:3,dir:'h'}
  ]},
  {name:'Puzzle 5',level:0,pieces:[
    {id:'p',x:1,y:2,len:2,dir:'h',isPlayer:true},
    {id:'V1',x:0,y:0,len:2,dir:'h'},{id:'O1',x:3,y:0,len:3,dir:'v'},
    {id:'O2',x:5,y:0,len:2,dir:'v'},{id:'M',x:0,y:1,len:3,dir:'v'},
    {id:'B',x:4,y:1,len:3,dir:'v'},{id:'N',x:5,y:2,len:2,dir:'v'},
    {id:'V2',x:1,y:3,len:3,dir:'h'},{id:'R2',x:0,y:4,len:2,dir:'v'},
    {id:'M2',x:4,y:4,len:2,dir:'h'},{id:'V3',x:4,y:5,len:2,dir:'h'}
  ]},
  {name:'Puzzle 6',level:0,pieces:[
    {id:'p',x:1,y:2,len:2,dir:'h',isPlayer:true},
    {id:'V1',x:0,y:0,len:2,dir:'h'},{id:'O1',x:3,y:0,len:2,dir:'v'},
    {id:'B1',x:0,y:1,len:2,dir:'h'},{id:'O2',x:4,y:1,len:3,dir:'v'},
    {id:'M',x:5,y:1,len:3,dir:'v'},{id:'B2',x:3,y:2,len:3,dir:'v'},
    {id:'R2',x:0,y:3,len:2,dir:'h'},{id:'M2',x:2,y:3,len:2,dir:'v'},
    {id:'V2',x:0,y:4,len:2,dir:'v'},{id:'V3',x:3,y:5,len:3,dir:'h'}
  ]},
  {name:'Puzzle 7',level:0,pieces:[
    {id:'p',x:1,y:2,len:2,dir:'h',isPlayer:true},
    {id:'V1',x:1,y:0,len:2,dir:'v'},{id:'O',x:2,y:0,len:2,dir:'h'},
    {id:'B',x:4,y:0,len:2,dir:'v'},{id:'R2',x:5,y:0,len:2,dir:'v'},
    {id:'M',x:3,y:1,len:2,dir:'v'},{id:'V2',x:5,y:2,len:2,dir:'v'},
    {id:'J',x:2,y:3,len:2,dir:'h'},{id:'N',x:3,y:4,len:2,dir:'v'}
  ]},
  {name:'Puzzle 8',level:0,pieces:[
    {id:'p',x:0,y:2,len:2,dir:'h',isPlayer:true},
    {id:'V1',x:3,y:0,len:2,dir:'h'},{id:'O1',x:5,y:0,len:3,dir:'v'},
    {id:'O2',x:2,y:1,len:2,dir:'h'},{id:'B1',x:4,y:1,len:2,dir:'v'},
    {id:'R2',x:2,y:2,len:2,dir:'v'},{id:'M1',x:3,y:2,len:2,dir:'v'},
    {id:'V2',x:0,y:3,len:2,dir:'h'},{id:'N',x:4,y:3,len:2,dir:'h'},
    {id:'BE',x:0,y:4,len:2,dir:'h'},{id:'J',x:2,y:4,len:2,dir:'v'},
    {id:'M2',x:3,y:4,len:3,dir:'h'},{id:'VF',x:0,y:5,len:2,dir:'h'},
    {id:'B2',x:3,y:5,len:3,dir:'h'}
  ]},
  {name:'Puzzle 9',level:0,pieces:[
    {id:'p',x:0,y:2,len:2,dir:'h',isPlayer:true},
    {id:'V1',x:1,y:0,len:2,dir:'v'},{id:'O1',x:2,y:0,len:2,dir:'h'},
    {id:'B1',x:4,y:0,len:2,dir:'h'},{id:'R2',x:3,y:1,len:2,dir:'v'},
    {id:'M1',x:4,y:1,len:2,dir:'h'},{id:'O2',x:4,y:2,len:3,dir:'v'},
    {id:'V2',x:5,y:2,len:2,dir:'v'},{id:'M2',x:0,y:3,len:3,dir:'v'},
    {id:'B2',x:1,y:3,len:3,dir:'h'},{id:'N',x:2,y:4,len:2,dir:'v'},
    {id:'BE',x:5,y:4,len:2,dir:'v'}
  ]},
  {name:'Puzzle 10',level:0,pieces:[
    {id:'p',x:1,y:2,len:2,dir:'h',isPlayer:true},
    {id:'V1',x:0,y:0,len:2,dir:'h'},{id:'O1',x:2,y:0,len:2,dir:'v'},
    {id:'B1',x:4,y:0,len:2,dir:'h'},{id:'R2',x:0,y:1,len:2,dir:'h'},
    {id:'O2',x:5,y:1,len:3,dir:'v'},{id:'M',x:0,y:2,len:3,dir:'v'},
    {id:'B2',x:1,y:3,len:3,dir:'h'},{id:'M2',x:3,y:4,len:2,dir:'v'},
    {id:'VF',x:4,y:4,len:2,dir:'h'},{id:'N',x:0,y:5,len:2,dir:'h'},
    {id:'BE',x:4,y:5,len:2,dir:'h'}
  ]},
  {name:'Puzzle 11',level:1,pieces:[
    {id:'p',x:1,y:2,len:2,dir:'h',isPlayer:true},
    {id:'O',x:0,y:0,len:2,dir:'v'},{id:'V',x:1,y:0,len:2,dir:'h'},
    {id:'M',x:3,y:0,len:3,dir:'v'},{id:'O2',x:2,y:3,len:2,dir:'v'},
    {id:'B',x:3,y:3,len:3,dir:'h'},{id:'N',x:5,y:4,len:2,dir:'v'},
    {id:'V2',x:2,y:5,len:3,dir:'h'}
  ]},
  {name:'Puzzle 12',level:1,pieces:[
    {id:'p',x:0,y:2,len:2,dir:'h',isPlayer:true},
    {id:'N',x:0,y:0,len:2,dir:'v'},{id:'O',x:1,y:0,len:2,dir:'h'},
    {id:'O2',x:5,y:0,len:3,dir:'v'},{id:'M',x:2,y:1,len:3,dir:'v'},
    {id:'B',x:3,y:3,len:3,dir:'h'},{id:'BC',x:4,y:4,len:2,dir:'v'},
    {id:'VF',x:0,y:5,len:3,dir:'h'}
  ]},
  {name:'Puzzle 13',level:1,pieces:[
    {id:'p',x:3,y:2,len:2,dir:'h',isPlayer:true},
    {id:'BR',x:0,y:0,len:2,dir:'h'},{id:'O',x:2,y:0,len:2,dir:'h'},
    {id:'B',x:4,y:0,len:2,dir:'v'},{id:'R2',x:2,y:1,len:2,dir:'v'},
    {id:'O2',x:5,y:1,len:3,dir:'v'},{id:'M',x:1,y:2,len:2,dir:'v'},
    {id:'M2',x:0,y:3,len:3,dir:'v'},{id:'VF',x:3,y:3,len:2,dir:'h'},
    {id:'N',x:3,y:4,len:2,dir:'v'},{id:'BE',x:4,y:4,len:2,dir:'h'},
    {id:'J',x:1,y:5,len:2,dir:'h'},{id:'BF',x:4,y:5,len:2,dir:'h'}
  ]},
  {name:'Puzzle 14',level:1,pieces:[
    {id:'p',x:2,y:2,len:2,dir:'h',isPlayer:true},
    {id:'VC',x:0,y:0,len:2,dir:'h'},{id:'O',x:2,y:0,len:2,dir:'v'},
    {id:'BC',x:4,y:1,len:2,dir:'h'},{id:'R2',x:0,y:2,len:2,dir:'v'},
    {id:'M',x:1,y:2,len:2,dir:'v'},{id:'VF',x:4,y:2,len:2,dir:'v'},
    {id:'N',x:5,y:2,len:2,dir:'v'},{id:'BE',x:2,y:3,len:2,dir:'h'},
    {id:'J',x:2,y:4,len:2,dir:'v'},{id:'BR',x:4,y:4,len:2,dir:'h'},
    {id:'N2',x:0,y:5,len:2,dir:'h'}
  ]},
  {name:'Puzzle 15',level:1,pieces:[
    {id:'p',x:2,y:2,len:2,dir:'h',isPlayer:true},
    {id:'V',x:1,y:0,len:2,dir:'h'},{id:'O',x:3,y:0,len:2,dir:'h'},
    {id:'BC',x:0,y:1,len:2,dir:'h'},{id:'R2',x:2,y:1,len:2,dir:'h'},
    {id:'O2',x:4,y:1,len:3,dir:'v'},{id:'M',x:5,y:1,len:3,dir:'v'},
    {id:'BF',x:0,y:2,len:3,dir:'v'},{id:'VF',x:1,y:2,len:3,dir:'v'},
    {id:'M2',x:2,y:3,len:2,dir:'v'},{id:'BR',x:3,y:3,len:2,dir:'v'},
    {id:'N',x:4,y:4,len:2,dir:'h'},{id:'BE',x:1,y:5,len:2,dir:'h'},
    {id:'J',x:3,y:5,len:2,dir:'h'}
  ]},
  {name:'Puzzle 16',level:1,pieces:[
    {id:'p',x:3,y:2,len:2,dir:'h',isPlayer:true},
    {id:'VC',x:0,y:0,len:2,dir:'h'},{id:'O',x:2,y:0,len:2,dir:'h'},
    {id:'BC',x:4,y:0,len:2,dir:'v'},{id:'O2',x:5,y:0,len:3,dir:'v'},
    {id:'R2',x:0,y:1,len:2,dir:'v'},{id:'M',x:2,y:1,len:2,dir:'h'},
    {id:'VF',x:1,y:2,len:2,dir:'v'},{id:'M2',x:2,y:2,len:3,dir:'v'},
    {id:'BF',x:3,y:3,len:3,dir:'h'},{id:'N',x:0,y:5,len:2,dir:'h'}
  ]},
  {name:'Puzzle 17',level:1,pieces:[
    {id:'p',x:0,y:2,len:2,dir:'h',isPlayer:true},
    {id:'VC',x:0,y:0,len:2,dir:'v'},{id:'O',x:1,y:0,len:3,dir:'h'},
    {id:'O2',x:2,y:1,len:2,dir:'h'},{id:'BC',x:4,y:1,len:2,dir:'h'},
    {id:'R2',x:2,y:2,len:2,dir:'v'},{id:'M',x:0,y:3,len:2,dir:'h'},
    {id:'M2',x:3,y:3,len:3,dir:'v'},{id:'BF',x:0,y:4,len:3,dir:'h'},
    {id:'VF',x:4,y:4,len:2,dir:'v'},{id:'N',x:5,y:4,len:2,dir:'v'},
    {id:'BR',x:0,y:5,len:3,dir:'h'}
  ]},
  {name:'Puzzle 18',level:1,pieces:[
    {id:'p',x:1,y:2,len:2,dir:'h',isPlayer:true},
    {id:'VC',x:0,y:0,len:2,dir:'h'},{id:'O',x:2,y:0,len:2,dir:'v'},
    {id:'BR',x:3,y:0,len:3,dir:'v'},{id:'BC',x:0,y:1,len:2,dir:'h'},
    {id:'M',x:0,y:2,len:3,dir:'v'},{id:'BF',x:1,y:3,len:3,dir:'h'},
    {id:'R2',x:1,y:4,len:2,dir:'h'},{id:'VF',x:0,y:5,len:3,dir:'h'}
  ]},
  {name:'Puzzle 19',level:1,pieces:[
    {id:'p',x:2,y:2,len:2,dir:'h',isPlayer:true},
    {id:'VC',x:2,y:0,len:2,dir:'v'},{id:'O',x:3,y:0,len:2,dir:'h'},
    {id:'BR',x:4,y:1,len:2,dir:'v'},{id:'R2',x:1,y:2,len:2,dir:'v'},
    {id:'M',x:2,y:3,len:2,dir:'h'},{id:'BF',x:4,y:3,len:2,dir:'v'},
    {id:'N',x:1,y:4,len:3,dir:'h'}
  ]},
  {name:'Puzzle 20',level:1,pieces:[
    {id:'p',x:0,y:2,len:2,dir:'h',isPlayer:true},
    {id:'VC',x:0,y:0,len:2,dir:'v'},{id:'O',x:3,y:0,len:3,dir:'h'},
    {id:'N',x:1,y:1,len:2,dir:'h'},{id:'BC',x:3,y:1,len:2,dir:'v'},
    {id:'R2',x:2,y:2,len:2,dir:'v'},{id:'M',x:5,y:2,len:3,dir:'v'},
    {id:'M2',x:2,y:4,len:2,dir:'v'},{id:'VF',x:3,y:4,len:2,dir:'h'},
    {id:'BF',x:3,y:5,len:3,dir:'h'}
  ]},
  {name:'Puzzle 21',level:2,pieces:[
    {id:'p',x:1,y:2,len:2,dir:'h',isPlayer:true},
    {id:'VC',x:0,y:0,len:2,dir:'h'},{id:'O',x:2,y:0,len:2,dir:'v'},
    {id:'J',x:3,y:0,len:3,dir:'v'},{id:'M',x:0,y:1,len:3,dir:'v'},
    {id:'BF',x:1,y:3,len:3,dir:'h'},{id:'BR',x:3,y:5,len:3,dir:'h'}
  ]},
  {name:'Puzzle 22',level:2,pieces:[
    {id:'p',x:1,y:2,len:2,dir:'h',isPlayer:true},
    {id:'VC',x:2,y:0,len:2,dir:'v'},{id:'J',x:3,y:0,len:3,dir:'h'},
    {id:'O',x:0,y:1,len:2,dir:'v'},{id:'M',x:3,y:1,len:3,dir:'v'},
    {id:'BC',x:4,y:1,len:2,dir:'h'},{id:'R2',x:1,y:3,len:2,dir:'v'},
    {id:'BR',x:4,y:3,len:2,dir:'h'},{id:'VF',x:0,y:4,len:2,dir:'v'},
    {id:'N',x:2,y:4,len:2,dir:'h'},{id:'BE',x:5,y:4,len:2,dir:'v'},
    {id:'BF',x:1,y:5,len:3,dir:'h'}
  ]},
  {name:'Puzzle 23',level:2,pieces:[
    {id:'p',x:3,y:2,len:2,dir:'h',isPlayer:true},
    {id:'J',x:2,y:0,len:3,dir:'h'},{id:'M',x:5,y:0,len:3,dir:'v'},
    {id:'VC',x:2,y:1,len:2,dir:'v'},{id:'O',x:3,y:1,len:2,dir:'h'},
    {id:'BC',x:2,y:3,len:2,dir:'v'},{id:'R2',x:3,y:3,len:2,dir:'v'},
    {id:'N',x:4,y:3,len:2,dir:'h'},{id:'VF',x:4,y:4,len:2,dir:'h'},
    {id:'BF',x:2,y:5,len:3,dir:'h'}
  ]},
  {name:'Puzzle 24',level:2,pieces:[
    {id:'p',x:2,y:2,len:2,dir:'h',isPlayer:true},
    {id:'VC',x:2,y:0,len:2,dir:'v'},{id:'O',x:3,y:0,len:2,dir:'h'},
    {id:'BC',x:1,y:1,len:2,dir:'v'},{id:'R2',x:0,y:2,len:2,dir:'v'},
    {id:'M',x:4,y:2,len:2,dir:'v'},{id:'VF',x:1,y:3,len:2,dir:'h'},
    {id:'J',x:0,y:4,len:3,dir:'h'},{id:'N',x:4,y:4,len:2,dir:'v'},
    {id:'BR',x:0,y:5,len:2,dir:'h'}
  ]},
  {name:'Puzzle 25',level:2,pieces:[
    {id:'p',x:1,y:2,len:2,dir:'h',isPlayer:true},
    {id:'VC',x:0,y:0,len:2,dir:'h'},{id:'O',x:2,y:0,len:2,dir:'v'},
    {id:'BC',x:4,y:0,len:2,dir:'h'},{id:'R2',x:0,y:1,len:2,dir:'h'},
    {id:'J',x:5,y:1,len:3,dir:'v'},{id:'M',x:0,y:2,len:3,dir:'v'},
    {id:'BR',x:4,y:2,len:2,dir:'v'},{id:'BF',x:1,y:3,len:3,dir:'h'},
    {id:'VF',x:1,y:4,len:2,dir:'v'},{id:'N',x:3,y:4,len:2,dir:'v'},
    {id:'BE',x:4,y:4,len:2,dir:'h'},{id:'J2',x:4,y:5,len:2,dir:'h'}
  ]}
];

// Banque de 100 exercices × et ÷ par 0,1 — 10 — 100 — 1000
window.OP_X10_BANQUE = [
  // --- 40% NOMBRES ENTIERS (40 questions) ---
  // Multiplications d'entiers
  { a: 13, b: 1000, op: '×', answer: 13000 },
  { a: 85, b: 10, op: '×', answer: 850 },
  { a: 9, b: 100, op: '×', answer: 900 },
  { a: 150, b: 10, op: '×', answer: 1500 },
  { a: 62, b: 100, op: '×', answer: 6200 },
  { a: 7, b: 1000, op: '×', answer: 7000 },
  { a: 340, b: 100, op: '×', answer: 34000 },
  { a: 12, b: 10, op: '×', answer: 120 },
  { a: 95, b: 1000, op: '×', answer: 95000 },
  { a: 400, b: 10, op: '×', answer: 4000 },
  { a: 28, b: 100, op: '×', answer: 2800 },
  { a: 3, b: 1000, op: '×', answer: 3000 },
  { a: 56, b: 10, op: '×', answer: 560 },
  { a: 125, b: 100, op: '×', answer: 12500 },
  { a: 18, b: 1000, op: '×', answer: 18000 },
  { a: 75, b: 10, op: '×', answer: 750 },
  { a: 4, b: 100, op: '×', answer: 400 },
  { a: 820, b: 10, op: '×', answer: 8200 },
  { a: 90, b: 100, op: '×', answer: 9000 },
  { a: 45, b: 1000, op: '×', answer: 45000 },
  // Divisions d'entiers
  { a: 130000, b: 100, op: '÷', answer: 1300 },
  { a: 450, b: 10, op: '÷', answer: 45 },
  { a: 8000, b: 1000, op: '÷', answer: 8 },
  { a: 3600, b: 100, op: '÷', answer: 36 },
  { a: 950, b: 10, op: '÷', answer: 95 },
  { a: 12000, b: 1000, op: '÷', answer: 12 },
  { a: 700, b: 100, op: '÷', answer: 7 },
  { a: 35000, b: 1000, op: '÷', answer: 35 },
  { a: 840, b: 10, op: '÷', answer: 84 },
  { a: 150000, b: 100, op: '÷', answer: 1500 },
  { a: 90, b: 10, op: '÷', answer: 9 },
  { a: 6500, b: 100, op: '÷', answer: 65 },
  { a: 24000, b: 1000, op: '÷', answer: 24 },
  { a: 30, b: 10, op: '÷', answer: 3 },
  { a: 1800, b: 100, op: '÷', answer: 18 },
  { a: 75000, b: 1000, op: '÷', answer: 75 },
  { a: 920, b: 10, op: '÷', answer: 92 },
  { a: 40000, b: 100, op: '÷', answer: 400 },
  { a: 600000, b: 1000, op: '÷', answer: 600 },
  { a: 50, b: 10, op: '÷', answer: 5 },

  // --- 60% NOMBRES DÉCIMAUX (60 questions) ---
  // Multiplications × 10, 100, 1000
  { a: 4.5, b: 10, op: '×', answer: 45 },
  { a: 0.8, b: 10, op: '×', answer: 8 },
  { a: 3.25, b: 10, op: '×', answer: 32.5 },
  { a: 0.07, b: 10, op: '×', answer: 0.7 },
  { a: 84.9, b: 10, op: '×', answer: 849 },
  { a: 1.02, b: 10, op: '×', answer: 10.2 },
  { a: 2.5, b: 100, op: '×', answer: 250 },
  { a: 0.3, b: 100, op: '×', answer: 30 },
  { a: 0.04, b: 100, op: '×', answer: 4 },
  { a: 8.12, b: 100, op: '×', answer: 812 },
  { a: 0.345, b: 100, op: '×', answer: 34.5 },
  { a: 1.8, b: 100, op: '×', answer: 180 },
  { a: 1.2, b: 1000, op: '×', answer: 1200 },
  { a: 0.06, b: 1000, op: '×', answer: 60 },
  { a: 3.45, b: 1000, op: '×', answer: 3450 },
  // Divisions ÷ 10, 100, 1000
  { a: 75, b: 10, op: '÷', answer: 7.5 },
  { a: 8, b: 10, op: '÷', answer: 0.8 },
  { a: 142, b: 10, op: '÷', answer: 14.2 },
  { a: 3.5, b: 10, op: '÷', answer: 0.35 },
  { a: 0.9, b: 10, op: '÷', answer: 0.09 },
  { a: 450, b: 100, op: '÷', answer: 4.5 },
  { a: 82, b: 100, op: '÷', answer: 0.82 },
  { a: 6, b: 100, op: '÷', answer: 0.06 },
  { a: 123.5, b: 100, op: '÷', answer: 1.235 },
  { a: 0.7, b: 100, op: '÷', answer: 0.007 },
  { a: 3600, b: 1000, op: '÷', answer: 3.6 },
  { a: 450, b: 1000, op: '÷', answer: 0.45 },
  { a: 75, b: 1000, op: '÷', answer: 0.075 },
  { a: 8, b: 1000, op: '÷', answer: 0.008 },
  { a: 12.5, b: 1000, op: '÷', answer: 0.0125 },
  // Multiplications × 0.1
  { a: 8, b: 0.1, op: '×', answer: 0.8 },
  { a: 42, b: 0.1, op: '×', answer: 4.2 },
  { a: 150, b: 0.1, op: '×', answer: 15 },
  { a: 6.5, b: 0.1, op: '×', answer: 0.65 },
  { a: 0.9, b: 0.1, op: '×', answer: 0.09 },
  { a: 123, b: 0.1, op: '×', answer: 12.3 },
  { a: 54.1, b: 0.1, op: '×', answer: 5.41 },
  { a: 2.8, b: 0.1, op: '×', answer: 0.28 },
  { a: 300, b: 0.1, op: '×', answer: 30 },
  { a: 9.5, b: 0.1, op: '×', answer: 0.95 },
  { a: 780, b: 0.1, op: '×', answer: 78 },
  { a: 16, b: 0.1, op: '×', answer: 1.6 },
  { a: 982, b: 0.1, op: '×', answer: 98.2 },
  { a: 72, b: 0.1, op: '×', answer: 7.2 },
  { a: 14.8, b: 0.1, op: '×', answer: 1.48 },
  // Divisions ÷ 0.1
  { a: 8, b: 0.1, op: '÷', answer: 80 },
  { a: 4.2, b: 0.1, op: '÷', answer: 42 },
  { a: 15, b: 0.1, op: '÷', answer: 150 },
  { a: 0.65, b: 0.1, op: '÷', answer: 6.5 },
  { a: 0.09, b: 0.1, op: '÷', answer: 0.9 },
  { a: 12.3, b: 0.1, op: '÷', answer: 123 },
  { a: 5.41, b: 0.1, op: '÷', answer: 54.1 },
  { a: 0.28, b: 0.1, op: '÷', answer: 2.8 },
  { a: 30, b: 0.1, op: '÷', answer: 300 },
  { a: 0.95, b: 0.1, op: '÷', answer: 9.5 },
  { a: 78, b: 0.1, op: '÷', answer: 780 },
  { a: 1.6, b: 0.1, op: '÷', answer: 16 },
  { a: 98.2, b: 0.1, op: '÷', answer: 982 },
  { a: 7.2, b: 0.1, op: '÷', answer: 72 },
  { a: 1.48, b: 0.1, op: '÷', answer: 14.8 }
];

// Banque de 100 exercices × et ÷ par 0,5 — 5 — 50 — 500 (40 d’origine + 60 ajoutés le 05/10/2026)
window.OP_X5_BANQUE = [
  // --- 60% NOMBRES ENTIERS (24 questions) ---
  // Multiplications par 5
  { a: 24, b: 5, op: '×', answer: 120 },
  { a: 16, b: 5, op: '×', answer: 80 },
  { a: 480, b: 5, op: '×', answer: 2400 },
  { a: 18, b: 5, op: '×', answer: 90 },
  // Divisions par 5
  { a: 35, b: 5, op: '÷', answer: 7 },
  { a: 80, b: 5, op: '÷', answer: 16 },
  { a: 140, b: 5, op: '÷', answer: 28 },
  { a: 45, b: 5, op: '÷', answer: 9 },
  // Multiplications par 50
  { a: 12, b: 50, op: '×', answer: 600 },
  { a: 64, b: 50, op: '×', answer: 3200 },
  { a: 16, b: 50, op: '×', answer: 800 },
  // Divisions par 50
  { a: 250, b: 50, op: '÷', answer: 5 },
  { a: 450, b: 50, op: '÷', answer: 9 },
  { a: 800, b: 50, op: '÷', answer: 16 },
  // Multiplications par 500
  { a: 14, b: 500, op: '×', answer: 7000 },
  { a: 84, b: 500, op: '×', answer: 42000 },
  // Divisions par 500
  { a: 3500, b: 500, op: '÷', answer: 7 },
  { a: 4000, b: 500, op: '÷', answer: 8 },
  // Multiplications par 0,5
  { a: 18, b: 0.5, op: '×', answer: 9 },
  { a: 150, b: 0.5, op: '×', answer: 75 },
  { a: 46, b: 0.5, op: '×', answer: 23 },
  // Divisions par 0,5
  { a: 13, b: 0.5, op: '÷', answer: 26 },
  { a: 45, b: 0.5, op: '÷', answer: 90 },
  { a: 240, b: 0.5, op: '÷', answer: 480 },

  // --- 40% NOMBRES DÉCIMAUX (16 questions) ---
  // Multiplications par 5
  { a: 8.4, b: 5, op: '×', answer: 42 },
  { a: 3.6, b: 5, op: '×', answer: 18 },
  // Divisions par 5
  { a: 12, b: 5, op: '÷', answer: 2.4 },
  { a: 6.5, b: 5, op: '÷', answer: 1.3 },
  // Multiplications par 50
  { a: 8.2, b: 50, op: '×', answer: 410 },
  { a: 1.6, b: 50, op: '×', answer: 80 },
  // Divisions par 50
  { a: 45, b: 50, op: '÷', answer: 0.9 },
  { a: 3.5, b: 50, op: '÷', answer: 0.07 },
  // Multiplications par 500
  { a: 2.8, b: 500, op: '×', answer: 1400 },
  { a: 4.6, b: 500, op: '×', answer: 2300 },
  // Divisions par 500
  { a: 350, b: 500, op: '÷', answer: 0.7 },
  { a: 12.5, b: 500, op: '÷', answer: 0.025 },
  // Multiplications par 0,5
  { a: 6.4, b: 0.5, op: '×', answer: 3.2 },
  { a: 2.68, b: 0.5, op: '×', answer: 1.34 },
  // Divisions par 0,5
  { a: 4.5, b: 0.5, op: '÷', answer: 9 },
  { a: 3.2, b: 0.5, op: '÷', answer: 6.4 },
  // --- Ajout du 05/10/2026 : 60 calculs (banque portée à 100) ---
  // Multiplications par 5
  { a: 32, b: 5, op: '×', answer: 160 },
  { a: 64, b: 5, op: '×', answer: 320 },
  { a: 120, b: 5, op: '×', answer: 600 },
  { a: 250, b: 5, op: '×', answer: 1250 },
  { a: 86, b: 5, op: '×', answer: 430 },
  { a: 7.2, b: 5, op: '×', answer: 36 },
  { a: 1.8, b: 5, op: '×', answer: 9 },
  // Divisions par 5
  { a: 65, b: 5, op: '÷', answer: 13 },
  { a: 95, b: 5, op: '÷', answer: 19 },
  { a: 120, b: 5, op: '÷', answer: 24 },
  { a: 260, b: 5, op: '÷', answer: 52 },
  { a: 1500, b: 5, op: '÷', answer: 300 },
  { a: 9.5, b: 5, op: '÷', answer: 1.9 },
  { a: 2.5, b: 5, op: '÷', answer: 0.5 },
  // Multiplications par 50
  { a: 8, b: 50, op: '×', answer: 400 },
  { a: 24, b: 50, op: '×', answer: 1200 },
  { a: 36, b: 50, op: '×', answer: 1800 },
  { a: 120, b: 50, op: '×', answer: 6000 },
  { a: 15, b: 50, op: '×', answer: 750 },
  { a: 0.6, b: 50, op: '×', answer: 30 },
  { a: 2.4, b: 50, op: '×', answer: 120 },
  { a: 44, b: 50, op: '×', answer: 2200 },
  // Divisions par 50
  { a: 1500, b: 50, op: '÷', answer: 30 },
  { a: 600, b: 50, op: '÷', answer: 12 },
  { a: 2000, b: 50, op: '÷', answer: 40 },
  { a: 350, b: 50, op: '÷', answer: 7 },
  { a: 4500, b: 50, op: '÷', answer: 90 },
  { a: 5000, b: 50, op: '÷', answer: 100 },
  { a: 30, b: 50, op: '÷', answer: 0.6 },
  { a: 150, b: 50, op: '÷', answer: 3 },
  // Multiplications par 500
  { a: 6, b: 500, op: '×', answer: 3000 },
  { a: 12, b: 500, op: '×', answer: 6000 },
  { a: 18, b: 500, op: '×', answer: 9000 },
  { a: 30, b: 500, op: '×', answer: 15000 },
  { a: 7, b: 500, op: '×', answer: 3500 },
  { a: 0.4, b: 500, op: '×', answer: 200 },
  { a: 1.2, b: 500, op: '×', answer: 600 },
  { a: 22, b: 500, op: '×', answer: 11000 },
  // Divisions par 500
  { a: 2500, b: 500, op: '÷', answer: 5 },
  { a: 6000, b: 500, op: '÷', answer: 12 },
  { a: 10000, b: 500, op: '÷', answer: 20 },
  { a: 1500, b: 500, op: '÷', answer: 3 },
  { a: 25000, b: 500, op: '÷', answer: 50 },
  { a: 4500, b: 500, op: '÷', answer: 9 },
  { a: 200, b: 500, op: '÷', answer: 0.4 },
  { a: 12000, b: 500, op: '÷', answer: 24 },
  // Multiplications par 0,5
  { a: 30, b: 0.5, op: '×', answer: 15 },
  { a: 84, b: 0.5, op: '×', answer: 42 },
  { a: 500, b: 0.5, op: '×', answer: 250 },
  { a: 7, b: 0.5, op: '×', answer: 3.5 },
  { a: 13, b: 0.5, op: '×', answer: 6.5 },
  { a: 2.4, b: 0.5, op: '×', answer: 1.2 },
  { a: 0.8, b: 0.5, op: '×', answer: 0.4 },
  // Divisions par 0,5
  { a: 9, b: 0.5, op: '÷', answer: 18 },
  { a: 17, b: 0.5, op: '÷', answer: 34 },
  { a: 35, b: 0.5, op: '÷', answer: 70 },
  { a: 120, b: 0.5, op: '÷', answer: 240 },
  { a: 2.5, b: 0.5, op: '÷', answer: 5 },
  { a: 0.4, b: 0.5, op: '÷', answer: 0.8 },
  { a: 1.3, b: 0.5, op: '÷', answer: 2.6 },
];

// Banque de 100 exercices des tables étendues
window.OP_TABLES_BANQUE = [
  // --- 90% NOMBRES ENTIERS (90 questions) ---
  // Multiplications d'entiers
  { a: 500, b: 30, op: '×', answer: 15000 },
  { a: 40, b: 3000, op: '×', answer: 120000 },
  { a: 60, b: 80, op: '×', answer: 4800 },
  { a: 700, b: 5, op: '×', answer: 3500 },
  { a: 80, b: 900, op: '×', answer: 72000 },
  { a: 300, b: 400, op: '×', answer: 120000 },
  { a: 2000, b: 6, op: '×', answer: 12000 },
  { a: 900, b: 70, op: '×', answer: 63000 },
  { a: 40, b: 50, op: '×', answer: 2000 },
  { a: 800, b: 20, op: '×', answer: 16000 },
  { a: 6000, b: 30, op: '×', answer: 180000 },
  { a: 70, b: 800, op: '×', answer: 56000 },
  { a: 90, b: 90, op: '×', answer: 8100 },
  { a: 50, b: 600, op: '×', answer: 30000 },
  { a: 3000, b: 80, op: '×', answer: 240000 },
  { a: 400, b: 700, op: '×', answer: 280000 },
  { a: 20, b: 9000, op: '×', answer: 180000 },
  { a: 80, b: 80, op: '×', answer: 6400 },
  { a: 600, b: 50, op: '×', answer: 30000 },
  { a: 7000, b: 40, op: '×', answer: 280000 },
  { a: 30, b: 30, op: '×', answer: 900 },
  { a: 900, b: 8, op: '×', answer: 7200 },
  { a: 50, b: 50, op: '×', answer: 2500 },
  { a: 400, b: 60, op: '×', answer: 24000 },
  { a: 80, b: 700, op: '×', answer: 56000 },
  { a: 200, b: 3000, op: '×', answer: 600000 },
  { a: 6000, b: 70, op: '×', answer: 420000 },
  { a: 90, b: 400, op: '×', answer: 36000 },
  { a: 700, b: 90, op: '×', answer: 63000 },
  { a: 80, b: 30, op: '×', answer: 2400 },
  { a: 500, b: 80, op: '×', answer: 40000 },
  { a: 4000, b: 90, op: '×', answer: 360000 },
  { a: 60, b: 60, op: '×', answer: 3600 },
  { a: 300, b: 70, op: '×', answer: 21000 },
  { a: 20, b: 800, op: '×', answer: 16000 },
  { a: 9000, b: 50, op: '×', answer: 450000 },
  { a: 800, b: 600, op: '×', answer: 480000 },
  { a: 70, b: 70, op: '×', answer: 4900 },
  { a: 400, b: 8, op: '×', answer: 3200 },
  { a: 30, b: 900, op: '×', answer: 27000 },
  { a: 50, b: 7000, op: '×', answer: 350000 },
  { a: 600, b: 40, op: '×', answer: 24000 },
  { a: 20, b: 20, op: '×', answer: 400 },
  { a: 800, b: 90, op: '×', answer: 72000 },
  { a: 90, b: 6000, op: '×', answer: 540000 },
  // Divisions d'entiers
  { a: 24000, b: 6000, op: '÷', answer: 4 },
  { a: 35000, b: 70, op: '÷', answer: 500 },
  { a: 4800, b: 80, op: '÷', answer: 60 },
  { a: 3500, b: 5, op: '÷', answer: 700 },
  { a: 72000, b: 900, op: '÷', answer: 80 },
  { a: 120000, b: 400, op: '÷', answer: 300 },
  { a: 12000, b: 6, op: '÷', answer: 2000 },
  { a: 63000, b: 70, op: '÷', answer: 900 },
  { a: 2000, b: 50, op: '÷', answer: 40 },
  { a: 16000, b: 20, op: '÷', answer: 800 },
  { a: 180000, b: 30, op: '÷', answer: 6000 },
  { a: 56000, b: 800, op: '÷', answer: 70 },
  { a: 8100, b: 90, op: '÷', answer: 90 },
  { a: 30000, b: 600, op: '÷', answer: 50 },
  { a: 240000, b: 80, op: '÷', answer: 3000 },
  { a: 280000, b: 700, op: '÷', answer: 400 },
  { a: 180000, b: 9000, op: '÷', answer: 20 },
  { a: 6400, b: 80, op: '÷', answer: 80 },
  { a: 30000, b: 50, op: '÷', answer: 600 },
  { a: 280000, b: 40, op: '÷', answer: 7000 },
  { a: 900, b: 30, op: '÷', answer: 30 },
  { a: 7200, b: 8, op: '÷', answer: 900 },
  { a: 2500, b: 50, op: '÷', answer: 50 },
  { a: 24000, b: 60, op: '÷', answer: 400 },
  { a: 56000, b: 700, op: '÷', answer: 80 },
  { a: 600000, b: 3000, op: '÷', answer: 200 },
  { a: 420000, b: 70, op: '÷', answer: 6000 },
  { a: 36000, b: 400, op: '÷', answer: 90 },
  { a: 63000, b: 90, op: '÷', answer: 700 },
  { a: 2400, b: 30, op: '÷', answer: 80 },
  { a: 40000, b: 80, op: '÷', answer: 500 },
  { a: 360000, b: 90, op: '÷', answer: 4000 },
  { a: 3600, b: 60, op: '÷', answer: 60 },
  { a: 21000, b: 70, op: '÷', answer: 300 },
  { a: 16000, b: 800, op: '÷', answer: 20 },
  { a: 450000, b: 50, op: '÷', answer: 9000 },
  { a: 480000, b: 600, op: '÷', answer: 800 },
  { a: 4900, b: 70, op: '÷', answer: 70 },
  { a: 3200, b: 8, op: '÷', answer: 400 },
  { a: 27000, b: 900, op: '÷', answer: 30 },
  { a: 350000, b: 7000, op: '÷', answer: 50 },
  { a: 24000, b: 40, op: '÷', answer: 600 },
  { a: 400, b: 20, op: '÷', answer: 20 },
  { a: 72000, b: 90, op: '÷', answer: 800 },
  { a: 540000, b: 6000, op: '÷', answer: 90 },

  // --- 10% NOMBRES DÉCIMAUX (10 questions) ---
  // Multiplications
  { a: 0.4, b: 200, op: '×', answer: 80 },
  { a: 0.08, b: 3000, op: '×', answer: 240 },
  { a: 0.7, b: 500, op: '×', answer: 350 },
  { a: 0.06, b: 8000, op: '×', answer: 480 },
  { a: 0.9, b: 200, op: '×', answer: 180 },
  // Divisions
  { a: 420, b: 600, op: '÷', answer: 0.7 },
  { a: 180, b: 3000, op: '÷', answer: 0.06 },
  { a: 240, b: 800, op: '÷', answer: 0.3 },
  { a: 45, b: 900, op: '÷', answer: 0.05 },
  { a: 350, b: 500, op: '÷', answer: 0.7 }
];

// Banque de 100 exercices × par 9 — 90 — 99 — 9,9
window.OP_X9_BANQUE = [
  // --- × 9 (25 questions) ---
  { a: 8, b: 9, op: '×', answer: 72 },
  { a: 12, b: 9, op: '×', answer: 108 },
  { a: 15, b: 9, op: '×', answer: 135 },
  { a: 19, b: 9, op: '×', answer: 171 },
  { a: 24, b: 9, op: '×', answer: 216 },
  { a: 35, b: 9, op: '×', answer: 315 },
  { a: 45, b: 9, op: '×', answer: 405 },
  { a: 48, b: 9, op: '×', answer: 432 },
  { a: 55, b: 9, op: '×', answer: 495 },
  { a: 60, b: 9, op: '×', answer: 540 },
  { a: 63, b: 9, op: '×', answer: 567 },
  { a: 72, b: 9, op: '×', answer: 648 },
  { a: 80, b: 9, op: '×', answer: 720 },
  { a: 85, b: 9, op: '×', answer: 765 },
  { a: 95, b: 9, op: '×', answer: 855 },
  { a: 99, b: 9, op: '×', answer: 891 },
  { a: 110, b: 9, op: '×', answer: 990 },
  { a: 120, b: 9, op: '×', answer: 1080 },
  { a: 130, b: 9, op: '×', answer: 1170 },
  { a: 150, b: 9, op: '×', answer: 1350 },
  { a: 250, b: 9, op: '×', answer: 2250 },
  { a: 340, b: 9, op: '×', answer: 3060 },
  { a: 450, b: 9, op: '×', answer: 4050 },
  { a: 520, b: 9, op: '×', answer: 4680 },
  { a: 600, b: 9, op: '×', answer: 5400 },

  // --- × 90 (25 questions) ---
  { a: 8, b: 90, op: '×', answer: 720 },
  { a: 12, b: 90, op: '×', answer: 1080 },
  { a: 15, b: 90, op: '×', answer: 1350 },
  { a: 18, b: 90, op: '×', answer: 1620 },
  { a: 25, b: 90, op: '×', answer: 2250 },
  { a: 32, b: 90, op: '×', answer: 2880 },
  { a: 35, b: 90, op: '×', answer: 3150 },
  { a: 40, b: 90, op: '×', answer: 3600 },
  { a: 45, b: 90, op: '×', answer: 4050 },
  { a: 50, b: 90, op: '×', answer: 4500 },
  { a: 55, b: 90, op: '×', answer: 4950 },
  { a: 64, b: 90, op: '×', answer: 5760 },
  { a: 70, b: 90, op: '×', answer: 6300 },
  { a: 75, b: 90, op: '×', answer: 6750 },
  { a: 80, b: 90, op: '×', answer: 7200 },
  { a: 85, b: 90, op: '×', answer: 7650 },
  { a: 90, b: 90, op: '×', answer: 8100 },
  { a: 95, b: 90, op: '×', answer: 8550 },
  { a: 110, b: 90, op: '×', answer: 9900 },
  { a: 120, b: 90, op: '×', answer: 10800 },
  { a: 150, b: 90, op: '×', answer: 13500 },
  { a: 220, b: 90, op: '×', answer: 19800 },
  { a: 250, b: 90, op: '×', answer: 22500 },
  { a: 300, b: 90, op: '×', answer: 27000 },
  { a: 400, b: 90, op: '×', answer: 36000 },

  // --- × 99 (25 questions) ---
  { a: 8, b: 99, op: '×', answer: 792 },
  { a: 12, b: 99, op: '×', answer: 1188 },
  { a: 15, b: 99, op: '×', answer: 1485 },
  { a: 16, b: 99, op: '×', answer: 1584 },
  { a: 20, b: 99, op: '×', answer: 1980 },
  { a: 25, b: 99, op: '×', answer: 2475 },
  { a: 30, b: 99, op: '×', answer: 2970 },
  { a: 35, b: 99, op: '×', answer: 3465 },
  { a: 40, b: 99, op: '×', answer: 3960 },
  { a: 45, b: 99, op: '×', answer: 4455 },
  { a: 50, b: 99, op: '×', answer: 4950 },
  { a: 55, b: 99, op: '×', answer: 5445 },
  { a: 60, b: 99, op: '×', answer: 5940 },
  { a: 65, b: 99, op: '×', answer: 6435 },
  { a: 70, b: 99, op: '×', answer: 6930 },
  { a: 75, b: 99, op: '×', answer: 7425 },
  { a: 80, b: 99, op: '×', answer: 7920 },
  { a: 85, b: 99, op: '×', answer: 8415 },
  { a: 90, b: 99, op: '×', answer: 8910 },
  { a: 95, b: 99, op: '×', answer: 9405 },
  { a: 11, b: 99, op: '×', answer: 1089 },
  { a: 14, b: 99, op: '×', answer: 1386 },
  { a: 18, b: 99, op: '×', answer: 1782 },
  { a: 22, b: 99, op: '×', answer: 2178 },
  { a: 33, b: 99, op: '×', answer: 3267 },

  // --- × 9,9 (25 questions) ---
  { a: 2, b: 9.9, op: '×', answer: 19.8 },
  { a: 5, b: 9.9, op: '×', answer: 49.5 },
  { a: 8, b: 9.9, op: '×', answer: 79.2 },
  { a: 12, b: 9.9, op: '×', answer: 118.8 },
  { a: 15, b: 9.9, op: '×', answer: 148.5 },
  { a: 18, b: 9.9, op: '×', answer: 178.2 },
  { a: 24, b: 9.9, op: '×', answer: 237.6 },
  { a: 25, b: 9.9, op: '×', answer: 247.5 },
  { a: 32, b: 9.9, op: '×', answer: 316.8 },
  { a: 35, b: 9.9, op: '×', answer: 346.5 },
  { a: 45, b: 9.9, op: '×', answer: 445.5 },
  { a: 48, b: 9.9, op: '×', answer: 475.2 },
  { a: 50, b: 9.9, op: '×', answer: 495 },
  { a: 55, b: 9.9, op: '×', answer: 544.5 },
  { a: 64, b: 9.9, op: '×', answer: 633.6 },
  { a: 72, b: 9.9, op: '×', answer: 712.8 },
  { a: 75, b: 9.9, op: '×', answer: 742.5 },
  { a: 80, b: 9.9, op: '×', answer: 792 },
  { a: 85, b: 9.9, op: '×', answer: 841.5 },
  { a: 95, b: 9.9, op: '×', answer: 940.5 },
  { a: 120, b: 9.9, op: '×', answer: 1188 },
  { a: 150, b: 9.9, op: '×', answer: 1485 },
  { a: 250, b: 9.9, op: '×', answer: 2475 },
  { a: 450, b: 9.9, op: '×', answer: 4455 },
  { a: 600, b: 9.9, op: '×', answer: 5940 }
];

// Banque de 100 exercices × par 11 — 101 — 110 — 1,1
window.OP_X11_BANQUE = [
  // --- × 11 (25 questions) ---
  { a: 2, b: 11, op: '×', answer: 22 },
  { a: 5, b: 11, op: '×', answer: 55 },
  { a: 8, b: 11, op: '×', answer: 88 },
  { a: 12, b: 11, op: '×', answer: 132 },
  { a: 15, b: 11, op: '×', answer: 165 },
  { a: 19, b: 11, op: '×', answer: 209 },
  { a: 24, b: 11, op: '×', answer: 264 },
  { a: 25, b: 11, op: '×', answer: 275 },
  { a: 32, b: 11, op: '×', answer: 352 },
  { a: 35, b: 11, op: '×', answer: 385 },
  { a: 45, b: 11, op: '×', answer: 495 },
  { a: 48, b: 11, op: '×', answer: 528 },
  { a: 50, b: 11, op: '×', answer: 550 },
  { a: 55, b: 11, op: '×', answer: 605 },
  { a: 64, b: 11, op: '×', answer: 704 },
  { a: 72, b: 11, op: '×', answer: 792 },
  { a: 75, b: 11, op: '×', answer: 825 },
  { a: 80, b: 11, op: '×', answer: 880 },
  { a: 85, b: 11, op: '×', answer: 935 },
  { a: 95, b: 11, op: '×', answer: 1045 },
  { a: 120, b: 11, op: '×', answer: 1320 },
  { a: 150, b: 11, op: '×', answer: 1650 },
  { a: 250, b: 11, op: '×', answer: 2750 },
  { a: 450, b: 11, op: '×', answer: 4950 },
  { a: 600, b: 11, op: '×', answer: 6600 },

  // --- × 101 (25 questions) ---
  { a: 2, b: 101, op: '×', answer: 202 },
  { a: 5, b: 101, op: '×', answer: 505 },
  { a: 8, b: 101, op: '×', answer: 808 },
  { a: 12, b: 101, op: '×', answer: 1212 },
  { a: 15, b: 101, op: '×', answer: 1515 },
  { a: 18, b: 101, op: '×', answer: 1818 },
  { a: 24, b: 101, op: '×', answer: 2424 },
  { a: 25, b: 101, op: '×', answer: 2525 },
  { a: 32, b: 101, op: '×', answer: 3232 },
  { a: 35, b: 101, op: '×', answer: 3535 },
  { a: 45, b: 101, op: '×', answer: 4545 },
  { a: 48, b: 101, op: '×', answer: 4848 },
  { a: 50, b: 101, op: '×', answer: 5050 },
  { a: 55, b: 101, op: '×', answer: 5555 },
  { a: 64, b: 101, op: '×', answer: 6464 },
  { a: 72, b: 101, op: '×', answer: 7272 },
  { a: 75, b: 101, op: '×', answer: 7575 },
  { a: 80, b: 101, op: '×', answer: 8080 },
  { a: 85, b: 101, op: '×', answer: 8585 },
  { a: 95, b: 101, op: '×', answer: 9595 },
  { a: 120, b: 101, op: '×', answer: 12120 },
  { a: 150, b: 101, op: '×', answer: 15150 },
  { a: 250, b: 101, op: '×', answer: 25250 },
  { a: 450, b: 101, op: '×', answer: 45450 },
  { a: 600, b: 101, op: '×', answer: 60600 },

  // --- × 110 (25 questions) ---
  { a: 2, b: 110, op: '×', answer: 220 },
  { a: 5, b: 110, op: '×', answer: 550 },
  { a: 8, b: 110, op: '×', answer: 880 },
  { a: 12, b: 110, op: '×', answer: 1320 },
  { a: 15, b: 110, op: '×', answer: 1650 },
  { a: 18, b: 110, op: '×', answer: 1980 },
  { a: 24, b: 110, op: '×', answer: 2640 },
  { a: 25, b: 110, op: '×', answer: 2750 },
  { a: 32, b: 110, op: '×', answer: 3520 },
  { a: 35, b: 110, op: '×', answer: 3850 },
  { a: 45, b: 110, op: '×', answer: 4950 },
  { a: 48, b: 110, op: '×', answer: 5280 },
  { a: 50, b: 110, op: '×', answer: 5500 },
  { a: 55, b: 110, op: '×', answer: 6050 },
  { a: 64, b: 110, op: '×', answer: 7040 },
  { a: 72, b: 110, op: '×', answer: 7920 },
  { a: 75, b: 110, op: '×', answer: 8250 },
  { a: 80, b: 110, op: '×', answer: 8800 },
  { a: 85, b: 110, op: '×', answer: 9350 },
  { a: 95, b: 110, op: '×', answer: 10450 },
  { a: 120, b: 110, op: '×', answer: 13200 },
  { a: 150, b: 110, op: '×', answer: 16500 },
  { a: 250, b: 110, op: '×', answer: 27500 },
  { a: 450, b: 110, op: '×', answer: 49500 },
  { a: 600, b: 110, op: '×', answer: 66000 },

  // --- × 1,1 (25 questions) ---
  { a: 2, b: 1.1, op: '×', answer: 2.2 },
  { a: 5, b: 1.1, op: '×', answer: 5.5 },
  { a: 8, b: 1.1, op: '×', answer: 8.8 },
  { a: 12, b: 1.1, op: '×', answer: 13.2 },
  { a: 15, b: 1.1, op: '×', answer: 16.5 },
  { a: 18, b: 1.1, op: '×', answer: 19.8 },
  { a: 24, b: 1.1, op: '×', answer: 26.4 },
  { a: 25, b: 1.1, op: '×', answer: 27.5 },
  { a: 32, b: 1.1, op: '×', answer: 35.2 },
  { a: 35, b: 1.1, op: '×', answer: 38.5 },
  { a: 45, b: 1.1, op: '×', answer: 49.5 },
  { a: 48, b: 1.1, op: '×', answer: 52.8 },
  { a: 50, b: 1.1, op: '×', answer: 55 },
  { a: 55, b: 1.1, op: '×', answer: 60.5 },
  { a: 64, b: 1.1, op: '×', answer: 70.4 },
  { a: 72, b: 1.1, op: '×', answer: 79.2 },
  { a: 75, b: 1.1, op: '×', answer: 82.5 },
  { a: 80, b: 1.1, op: '×', answer: 88 },
  { a: 85, b: 1.1, op: '×', answer: 93.5 },
  { a: 95, b: 1.1, op: '×', answer: 104.5 },
  { a: 120, b: 1.1, op: '×', answer: 132 },
  { a: 150, b: 1.1, op: '×', answer: 165 },
  { a: 250, b: 1.1, op: '×', answer: 275 },
  { a: 450, b: 1.1, op: '×', answer: 495 },
  { a: 600, b: 1.1, op: '×', answer: 660 }
];
