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
  {id:"q4",svg:"<rect x=\"15\" y=\"55\" width=\"170\" height=\"60\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2.5\"/>",options:["parallélogramme","trapèze isocèle","rectangle"],answer:2},
  {id:"q5",svg:"<rect x=\"75\" y=\"20\" width=\"50\" height=\"120\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2.5\"/>",options:["carré","rectangle","trapèze rectangle"],answer:1},
  {id:"q6",svg:"<rect x=\"10\" y=\"68\" width=\"180\" height=\"30\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"2.5\"/>",options:["carré","rectangle","parallélogramme"],answer:1},
  {id:"q7",svg:"<polygon points=\"100,15 155,70 100,125 45,70\" fill=\"#D1FAE5\" stroke=\"#059669\" stroke-width=\"2.5\"/>",options:["carré","parallélogramme","losange"],answer:0},
  {id:"q8",svg:"<polygon points=\"35,80 95,40 165,80 105,120\" fill=\"#D1FAE5\" stroke=\"#059669\" stroke-width=\"2.5\"/>",options:["parallélogramme","losange","trapèze quelconque"],answer:0},
  {id:"q9",svg:"<polygon points=\"100,30 165,80 100,130 35,80\" fill=\"#D1FAE5\" stroke=\"#059669\" stroke-width=\"2.5\"/>",options:["trapèze isocèle","losange","carré"],answer:1},
  {id:"q10",svg:"<polygon points=\"50,30 160,30 130,130 20,130\" fill=\"#FCE7F3\" stroke=\"#9D174D\" stroke-width=\"2.5\"/>",options:["trapèze quelconque","rectangle","parallélogramme"],answer:2},
  {id:"q11",svg:"<polygon points=\"20,30 130,30 160,130 50,130\" fill=\"#FCE7F3\" stroke=\"#9D174D\" stroke-width=\"2.5\"/>",options:["parallélogramme","losange","trapèze quelconque"],answer:0},
  {id:"q12",svg:"<polygon points=\"120,15 170,105 90,125 40,35\" fill=\"#FCE7F3\" stroke=\"#9D174D\" stroke-width=\"2.5\"/>",options:["carré","parallélogramme","losange"],answer:1},
  {id:"q13",svg:"<polygon points=\"45,120 155,120 140,30 60,30\" fill=\"#EDE9FE\" stroke=\"#6D28D9\" stroke-width=\"2.5\"/>",options:["trapèze quelconque","trapèze rectangle","trapèze isocèle"],answer:2},
  {id:"q14",svg:"<polygon points=\"10,30 190,30 165,120 35,120\" fill=\"#EDE9FE\" stroke=\"#6D28D9\" stroke-width=\"2.5\"/>",options:["trapèze isocèle","trapèze rectangle","trapèze quelconque"],answer:0},
  {id:"q15",svg:"<polygon points=\"10,95 190,95 175,45 25,45\" fill=\"#EDE9FE\" stroke=\"#6D28D9\" stroke-width=\"2.5\"/>",options:["rectangle","trapèze isocèle","trapèze quelconque"],answer:1},
  {id:"q16",svg:"<polygon points=\"20,130 170,130 110,30 20,30\" fill=\"#D1FAE5\" stroke=\"#065F46\" stroke-width=\"2.5\"/><rect x=\"20\" y=\"118\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#065F46\" stroke-width=\"1.5\"/><rect x=\"20\" y=\"30\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#065F46\" stroke-width=\"1.5\"/>",options:["trapèze rectangle","trapèze isocèle","trapèze quelconque"],answer:0},
  {id:"q17",svg:"<polygon points=\"20,130 175,130 175,30 95,30\" fill=\"#D1FAE5\" stroke=\"#065F46\" stroke-width=\"2.5\"/><rect x=\"163\" y=\"118\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#065F46\" stroke-width=\"1.5\"/><rect x=\"163\" y=\"30\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#065F46\" stroke-width=\"1.5\"/>",options:["trapèze quelconque","trapèze isocèle","trapèze rectangle"],answer:2},
  {id:"q18",svg:"<polygon points=\"20,130 180,130 180,40 80,40\" fill=\"#D1FAE5\" stroke=\"#065F46\" stroke-width=\"2.5\"/><rect x=\"168\" y=\"118\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#065F46\" stroke-width=\"1.5\"/><rect x=\"168\" y=\"40\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#065F46\" stroke-width=\"1.5\"/>",options:["trapèze rectangle","trapèze quelconque","parallélogramme"],answer:0},
  {id:"q19",svg:"<polygon points=\"10,130 175,130 155,30 75,30\" fill=\"#FEF3C7\" stroke=\"#B45309\" stroke-width=\"2.5\"/>",options:["trapèze isocèle","trapèze rectangle","trapèze quelconque"],answer:2},
  {id:"q20",svg:"<polygon points=\"10,130 185,130 175,40 90,40\" fill=\"#FEF3C7\" stroke=\"#B45309\" stroke-width=\"2.5\"/>",options:["trapèze quelconque","trapèze rectangle","quadrilatère quelconque"],answer:0},
  {id:"q21",svg:"<polygon points=\"5,130 185,130 165,40 80,40\" fill=\"#FEF3C7\" stroke=\"#B45309\" stroke-width=\"2.5\"/>",options:["quadrilatère quelconque","trapèze quelconque","trapèze isocèle"],answer:1},
  {id:"q22",svg:"<polygon points=\"20,18 175,38 158,138 38,108\" fill=\"#E0E7FF\" stroke=\"#3730A3\" stroke-width=\"2.5\"/>",options:["quadrilatère quelconque","trapèze quelconque","parallélogramme"],answer:0},
  {id:"q23",svg:"<polygon points=\"15,35 175,12 162,138 28,122\" fill=\"#E0E7FF\" stroke=\"#3730A3\" stroke-width=\"2.5\"/>",options:["quadrilatère quelconque","trapèze quelconque","losange"],answer:0},
  {id:"q24",svg:"<polygon points=\"10,18 185,36 165,128 45,140\" fill=\"#E0E7FF\" stroke=\"#3730A3\" stroke-width=\"2.5\"/>",options:["trapèze isocèle","parallélogramme","quadrilatère quelconque"],answer:2}
      ],

      // Évaluation fixe (une seule tentative) - 5 questions
      evaluation: [
        0, 4, 7, 11, 15
      ],

      // Banque de 30 questions Vrai/Faux
      vf_bank: [
  {text:"Un carré a 4 côtés égaux.",answer:true},
  {text:"Un carré est un losange.",answer:true},
  {text:"Un carré est un rectangle.",answer:true},
  {text:"Les diagonales d'un carré sont perpendiculaires.",answer:true},
  {text:"Un carré est un parallélogramme.",answer:true},
  {text:"Un rectangle a ses 4 côtés égaux.",answer:false},
  {text:"Un rectangle est un parallélogramme.",answer:true},
  {text:"Les diagonales d'un rectangle sont perpendiculaires.",answer:false},
  {text:"Un rectangle a 4 angles droits.",answer:true},
  {text:"Un rectangle est un losange.",answer:false},
  {text:"Un losange a 4 côtés égaux.",answer:true},
  {text:"Un losange a forcément 4 angles droits.",answer:false},
  {text:"Un losange est un parallélogramme.",answer:true},
  {text:"Les diagonales d'un losange sont perpendiculaires.",answer:true},
  {text:"Un losange est un rectangle.",answer:false},
  {text:"Un parallélogramme a ses côtés opposés parallèles.",answer:true},
  {text:"Un parallélogramme a forcément 4 angles droits.",answer:false},
  {text:"Un parallélogramme a ses côtés opposés égaux.",answer:true},
  {text:"Un carré est un parallélogramme.",answer:true},
  {text:"Un parallélogramme est toujours un losange.",answer:false},
  {text:"Un trapèze a exactement une paire de côtés parallèles.",answer:true},
  {text:"Un trapèze isocèle a ses côtés non-parallèles égaux.",answer:true},
  {text:"Un trapèze rectangle a deux angles droits.",answer:true},
  {text:"Un parallélogramme est un trapèze.",answer:true},
  {text:"Un trapèze quelconque peut avoir 2 côtés isométriques.",answer:false},
  {text:"La somme des angles d'un quadrilatère est toujours 360°.",answer:true},
  {text:"Un quadrilatère quelconque a forcément des côtés parallèles.",answer:false},
  {text:"Un carré est à la fois un rectangle et un losange.",answer:true},
  {text:"Tout losange est un carré.",answer:false},
  {text:"Tout rectangle est un parallélogramme.",answer:true}
      ],

      // Évaluation Vrai/Faux fixe - 5 questions
      evaluation_vf: [0, 5, 10, 15, 20],

      // Banque de 24 questions caractéristiques à cocher
      chars_bank: [
  {shape:"carré",svg:"<rect x=\"55\" y=\"30\" width=\"90\" height=\"90\" fill=\"#E8F4FF\" stroke=\"#2B6CB0\" stroke-width=\"2.5\"/>",chars:["Tous les côtés opposés sont isométriques", "1 seule paire de côtés parallèles", "2 paires de côtés parallèles", "2 angles aigus et 2 angles obtus", "4 angles droits"],answers:[0, 2, 4]},
  {shape:"carré",svg:"<polygon points=\"100,20 175,95 100,140 25,95\" fill=\"#E8F4FF\" stroke=\"#2B6CB0\" stroke-width=\"2.5\"/>",chars:["Diagonales perpendiculaires", "2 paires de côtés parallèles", "2 angles aigus et 2 angles obtus", "Tous les côtés opposés sont isométriques", "4 côtés isométriques"],answers:[0, 1, 3, 4]},
  {shape:"carré",svg:"<rect x=\"40\" y=\"25\" width=\"110\" height=\"110\" fill=\"#E8F4FF\" stroke=\"#2B6CB0\" stroke-width=\"2.5\"/>",chars:["Médianes perpendiculaires", "4 côtés de longueurs différentes", "2 angles aigus et 2 angles obtus", "2 paires de côtés parallèles", "1 seule paire de côtés parallèles"],answers:[0, 3]},
  {shape:"rectangle",svg:"<rect x=\"25\" y=\"55\" width=\"150\" height=\"60\" fill=\"#FFFBEB\" stroke=\"#92400E\" stroke-width=\"2.5\"/>",chars:["4 côtés isométriques", "4 côtés de longueurs différentes", "1 seule paire de côtés parallèles", "2 angles aigus et 2 angles obtus", "Médianes perpendiculaires"],answers:[4]},
  {shape:"rectangle",svg:"<rect x=\"65\" y=\"20\" width=\"70\" height=\"120\" fill=\"#FFFBEB\" stroke=\"#92400E\" stroke-width=\"2.5\"/>",chars:["Au moins 2 angles droits", "4 côtés isométriques", "Tous les côtés opposés sont isométriques", "2 paires de côtés parallèles", "2 angles aigus et 2 angles obtus"],answers:[0, 2, 3]},
  {shape:"rectangle",svg:"<rect x=\"15\" y=\"65\" width=\"170\" height=\"40\" fill=\"#FFFBEB\" stroke=\"#92400E\" stroke-width=\"2.5\"/>",chars:["4 côtés isométriques", "2 paires de côtés parallèles", "Diagonales perpendiculaires", "1 seule paire de côtés parallèles", "4 côtés de longueurs différentes"],answers:[1]},
  {shape:"losange",svg:"<polygon points=\"100,15 170,80 100,145 30,80\" fill=\"#F0FFF4\" stroke=\"#276749\" stroke-width=\"2.5\"/>",chars:["4 angles droits", "1 seule paire de côtés parallèles", "Au moins 2 angles droits", "4 côtés de longueurs différentes", "4 côtés isométriques"],answers:[4]},
  {shape:"losange",svg:"<polygon points=\"35,45 155,45 165,115 25,115\" fill=\"#F0FFF4\" stroke=\"#276749\" stroke-width=\"2.5\"/>",chars:["4 côtés isométriques", "4 côtés de longueurs différentes", "Tous les côtés opposés sont isométriques", "1 seule paire de côtés parallèles", "4 angles droits"],answers:[0, 2]},
  {shape:"losange",svg:"<polygon points=\"100,30 175,80 100,130 25,80\" fill=\"#F0FFF4\" stroke=\"#276749\" stroke-width=\"2.5\"/>",chars:["2 angles aigus et 2 angles obtus", "Au moins 2 angles droits", "2 paires de côtés parallèles", "Tous les côtés opposés sont isométriques", "Diagonales perpendiculaires"],answers:[0, 2, 3, 4]},
  {shape:"parallélogramme",svg:"<polygon points=\"60,30 170,30 140,130 30,130\" fill=\"#FFF5F5\" stroke=\"#9B2335\" stroke-width=\"2.5\"/>",chars:["Tous les côtés opposés sont isométriques", "Médianes perpendiculaires", "4 côtés isométriques", "2 paires de côtés parallèles", "2 angles aigus et 2 angles obtus"],answers:[0, 3, 4]},
  {shape:"parallélogramme",svg:"<polygon points=\"30,30 140,30 170,130 60,130\" fill=\"#FFF5F5\" stroke=\"#9B2335\" stroke-width=\"2.5\"/>",chars:["4 angles droits", "Tous les côtés opposés sont isométriques", "Au moins 2 angles droits", "2 paires de côtés parallèles", "4 côtés de longueurs différentes"],answers:[1, 3]},
  {shape:"parallélogramme",svg:"<polygon points=\"100,15 160,70 100,145 40,70\" fill=\"#FFF5F5\" stroke=\"#9B2335\" stroke-width=\"2.5\"/>",chars:["4 côtés de longueurs différentes", "Au moins 2 angles droits", "2 angles aigus et 2 angles obtus", "2 paires de côtés parallèles", "4 côtés isométriques"],answers:[2, 3]},
  {shape:"trapèze isocèle",svg:"<polygon points=\"55,35 145,35 170,125 30,125\" fill=\"#F5F0FF\" stroke=\"#553C9A\" stroke-width=\"2.5\"/>",chars:["2 angles aigus et 2 angles obtus", "Diagonales perpendiculaires", "2 paires de côtés parallèles", "1 seule paire de côtés parallèles", "Médianes perpendiculaires"],answers:[0, 3, 4]},
  {shape:"trapèze isocèle",svg:"<polygon points=\"20,35 180,35 145,125 55,125\" fill=\"#F5F0FF\" stroke=\"#553C9A\" stroke-width=\"2.5\"/>",chars:["2 angles aigus et 2 angles obtus", "2 paires de côtés parallèles", "4 angles droits", "1 seule paire de côtés parallèles", "Diagonales perpendiculaires"],answers:[0, 3]},
  {shape:"trapèze isocèle",svg:"<polygon points=\"45,55 155,55 175,105 25,105\" fill=\"#F5F0FF\" stroke=\"#553C9A\" stroke-width=\"2.5\"/>",chars:["Tous les côtés opposés sont isométriques", "2 angles aigus et 2 angles obtus", "4 côtés de longueurs différentes", "Au moins 2 angles droits", "4 angles droits"],answers:[1]},
  {shape:"trapèze rectangle",svg:"<polygon points=\"40,30 150,30 150,130 40,130\" fill=\"#ECFDF5\" stroke=\"#065F46\" stroke-width=\"2.5\"/>",chars:["Au moins 2 angles droits", "1 seule paire de côtés parallèles", "2 paires de côtés parallèles", "4 côtés de longueurs différentes", "4 angles droits"],answers:[0, 1]},
  {shape:"trapèze rectangle",svg:"<polygon points=\"40,30 130,30 160,130 40,130\" fill=\"#ECFDF5\" stroke=\"#065F46\" stroke-width=\"2.5\"/>",chars:["1 seule paire de côtés parallèles", "2 angles aigus et 2 angles obtus", "4 côtés de longueurs différentes", "Diagonales perpendiculaires", "Au moins 2 angles droits"],answers:[0, 4]},
  {shape:"trapèze rectangle",svg:"<polygon points=\"50,30 160,30 160,130 90,130\" fill=\"#ECFDF5\" stroke=\"#065F46\" stroke-width=\"2.5\"/>",chars:["Au moins 2 angles droits", "2 paires de côtés parallèles", "1 seule paire de côtés parallèles", "4 côtés isométriques", "Tous les côtés opposés sont isométriques"],answers:[0, 2]},
  {shape:"trapèze quelconque",svg:"<polygon points=\"30,40 130,40 160,120 50,120\" fill=\"#FFF7ED\" stroke=\"#9A3412\" stroke-width=\"2.5\"/>",chars:["1 seule paire de côtés parallèles", "2 paires de côtés parallèles", "Au moins 2 angles droits", "4 côtés de longueurs différentes", "Médianes perpendiculaires"],answers:[0, 3]},
  {shape:"trapèze quelconque",svg:"<polygon points=\"25,50 155,35 170,120 45,120\" fill=\"#FFF7ED\" stroke=\"#9A3412\" stroke-width=\"2.5\"/>",chars:["4 côtés de longueurs différentes", "4 angles droits", "Au moins 2 angles droits", "2 paires de côtés parallèles", "Tous les côtés opposés sont isométriques"],answers:[0]},
  {shape:"trapèze quelconque",svg:"<polygon points=\"20,40 170,40 130,120 60,120\" fill=\"#FFF7ED\" stroke=\"#9A3412\" stroke-width=\"2.5\"/>",chars:["4 côtés isométriques", "Tous les côtés opposés sont isométriques", "4 côtés de longueurs différentes", "Médianes perpendiculaires", "1 seule paire de côtés parallèles"],answers:[2, 4]},
  {shape:"quadrilatère quelconque",svg:"<polygon points=\"40,40 160,30 175,110 25,130\" fill=\"#F0F4FF\" stroke=\"#3730A3\" stroke-width=\"2.5\"/>",chars:["2 paires de côtés parallèles", "Médianes perpendiculaires", "4 côtés de longueurs différentes", "4 côtés isométriques", "4 angles droits"],answers:[2]},
  {shape:"quadrilatère quelconque",svg:"<polygon points=\"50,25 160,55 140,135 20,110\" fill=\"#F0F4FF\" stroke=\"#3730A3\" stroke-width=\"2.5\"/>",chars:["Tous les côtés opposés sont isométriques", "4 côtés de longueurs différentes", "Au moins 2 angles droits", "1 seule paire de côtés parallèles", "4 angles droits"],answers:[1]},
  {shape:"quadrilatère quelconque",svg:"<polygon points=\"30,30 170,30 170,130 100,80 30,130\" fill=\"#F0F4FF\" stroke=\"#3730A3\" stroke-width=\"2.5\"/>",chars:["1 seule paire de côtés parallèles", "2 paires de côtés parallèles", "4 côtés de longueurs différentes", "Au moins 2 angles droits", "Diagonales perpendiculaires"],answers:[2]}
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
  {n:'506 040 070', opts:['5 centaines de millions + 6 millions + 4 centaines + 7 dizaines','5 centaines de millions + 6 millions + 4 dizaines de mille + 7 dizaines','5 centaines de millions + 6 millions + 4 mille + 7 dizaines','5 dizaines de millions + 6 millions + 4 dizaines de mille + 7 dizaines'], correct:1},
  {n:'230 005 800', opts:['5 centaines de millions + 3 dizaines de millions + 5 dizaines de mille + 8 centaines','2 centaines de millions + 3 millions + 5 mille + 8 centaines','2 centaines de millions + 3 dizaines de millions + 5 mille + 8 centaines','2 dizaines de millions + 3 millions + 5 mille + 8 centaines'], correct:2},
  {n:'74 300 062', opts:['7 dizaines de millions + 4 millions + 3 centaines de mille + 6 dizaines + 2 unités','7 dizaines de millions + 4 millions + 3 dizaines de mille + 6 dizaines + 2 unités','7 millions + 4 centaines de mille + 3 dizaines de mille + 6 dizaines + 2 unités','7 dizaines de millions + 4 millions + 3 centaines de mille + 6 unités + 2 dizaines'], correct:0},
  {n:'805 070 009', opts:['8 centaines de millions + 5 millions + 7 dizaines de mille + 9 unités','8 centaines de millions + 5 millions + 7 mille + 9 unités','8 centaines de millions + 5 dizaines de millions + 7 dizaines de mille + 9 unités','8 centaines de millions + 5 millions + 7 centaines de mille + 9 unités'], correct:0},
  {n:'12 400 500', opts:['1 dizaine de millions + 2 millions + 4 centaines de mille + 5 dizaines','1 dizaine de millions + 2 millions + 4 centaines de mille + 5 centaines','1 dizaine de millions + 2 millions + 4 dizaines de mille + 5 centaines','1 million + 2 centaines de mille + 4 dizaines de mille + 5 centaines'], correct:1},
  {n:'390 000 030', opts:['3 centaines de millions + 9 millions + 3 dizaines','3 centaines de millions + 9 dizaines de millions + 3 centaines','3 centaines de millions + 9 dizaines de millions + 3 dizaines','3 dizaines de millions + 9 millions + 3 dizaines'], correct:2},
  {n:'60 808 060', opts:['6 dizaines de millions + 8 centaines de mille + 8 mille + 6 dizaines','6 millions + 8 centaines de mille + 8 mille + 6 dizaines','6 dizaines de millions + 8 dizaines de mille + 8 mille + 6 dizaines','6 dizaines de millions + 8 centaines de mille + 8 centaines + 6 dizaines'], correct:0},
  {n:'451 000 451', opts:['4 centaines de millions + 5 dizaines de millions + 1 million + 4 centaines + 5 dizaines','4 centaines de millions + 5 dizaines de millions + 1 million + 4 centaines + 5 dizaines + 1 unité','4 centaines de millions + 5 millions + 1 dizaine de millions + 4 centaines + 5 dizaines + 1 unité','4 centaines de millions + 5 dizaines de millions + 1 million + 4 mille + 5 dizaines + 1 unité'], correct:1},
  {n:'900 090 900', opts:['9 centaines de millions + 9 dizaines de mille + 9 centaines','9 centaines de millions + 9 mille + 9 centaines','9 centaines de millions + 9 centaines de mille + 9 dizaines','9 dizaines de millions + 9 dizaines de mille + 9 centaines'], correct:0},
  {n:'37 060 004', opts:['3 dizaines de millions + 7 millions + 6 mille + 4 unités','3 dizaines de millions + 7 millions + 6 dizaines de mille + 4 unités','3 dizaines de millions + 7 millions + 6 centaines de mille + 4 unités','3 millions + 7 dizaines de millions + 6 dizaines de mille + 4 unités'], correct:1},
  {n:'520 300 020', opts:['5 centaines de millions + 2 dizaines de millions + 3 centaines de mille + 2 dizaines','5 centaines de millions + 2 millions + 3 centaines de mille + 2 dizaines','5 centaines de millions + 2 dizaines de millions + 3 dizaines de mille + 2 dizaines','5 dizaines de millions + 2 millions + 3 centaines de mille + 2 dizaines'], correct:0},
  {n:'108 050 008', opts:['1 centaine de millions + 8 millions + 5 mille + 8 unités','1 centaine de millions + 8 millions + 5 dizaines de mille + 8 dizaines','1 centaine de millions + 8 millions + 5 dizaines de mille + 8 unités','1 centaine de millions + 8 dizaines de millions + 5 dizaines de mille + 8 unités'], correct:2},
  {n:'750 007 500', opts:['7 centaines de millions + 5 dizaines de millions + 7 mille + 5 centaines','7 centaines de millions + 5 millions + 7 mille + 5 centaines','7 centaines de millions + 5 dizaines de millions + 7 centaines de mille + 5 centaines','7 centaines de millions + 5 dizaines de millions + 7 mille + 5 dizaines'], correct:0},
  {n:'83 400 083', opts:['8 dizaines de millions + 3 millions + 4 dizaines de mille + 8 dizaines + 3 unités','8 dizaines de millions + 3 millions + 4 centaines de mille + 8 dizaines + 3 unités','8 millions + 3 dizaines de millions + 4 centaines de mille + 8 dizaines + 3 unités','8 dizaines de millions + 3 millions + 4 centaines de mille + 8 unités + 3 dizaines'], correct:1},
  {n:'600 060 600', opts:['6 centaines de millions + 6 dizaines de mille + 6 centaines','6 centaines de millions + 6 mille + 6 centaines','6 centaines de millions + 6 centaines de mille + 6 dizaines','6 dizaines de millions + 6 dizaines de mille + 6 centaines'], correct:0},
  {n:'29 000 290', opts:['2 dizaines de millions + 9 millions + 2 centaines + 9 dizaines','2 dizaines de millions + 9 millions + 2 mille + 9 dizaines','2 dizaines de millions + 9 millions + 2 centaines + 9 unités','2 millions + 9 dizaines de millions + 2 centaines + 9 dizaines'], correct:0},
  {n:'480 006 048', opts:['4 centaines de millions + 8 dizaines de millions + 6 mille + 4 dizaines + 8 unités','4 centaines de millions + 8 millions + 6 mille + 4 dizaines + 8 unités','4 centaines de millions + 8 dizaines de millions + 6 dizaines de mille + 4 dizaines + 8 unités','4 centaines de millions + 8 dizaines de millions + 6 mille + 4 unités + 8 dizaines'], correct:0},
  {n:'55 505 055', opts:['5 dizaines de millions + 5 millions + 5 centaines de mille + 5 dizaines + 5 unités','5 dizaines de millions + 5 millions + 5 dizaines de mille + 5 dizaines + 5 unités','5 dizaines de millions + 5 millions + 5 centaines de mille + 5 unités','5 millions + 5 dizaines de millions + 5 centaines de mille + 5 dizaines + 5 unités'], correct:0},
  {n:'317 080 317', opts:['3 centaines de millions + 1 dizaine de millions + 7 millions + 8 mille + 3 centaines + 1 dizaine + 7 unités','3 centaines de millions + 1 dizaine de millions + 7 millions + 8 dizaines de mille + 3 centaines + 1 dizaine + 7 unités','3 centaines de millions + 1 million + 7 dizaines de millions + 8 mille + 3 centaines + 1 dizaine + 7 unités','3 centaines de millions + 1 dizaine de millions + 7 millions + 8 mille + 3 dizaines + 1 centaine + 7 unités'], correct:0},
  {n:'40 400 040', opts:['4 dizaines de millions + 4 dizaines de mille + 4 dizaines','4 dizaines de millions + 4 centaines de mille + 4 dizaines','4 millions + 4 centaines de mille + 4 dizaines','4 dizaines de millions + 4 dizaines de mille + 4 unités'], correct:1},
  {n:'614 903 070', opts:['6 centaines de millions + 1 dizaine de millions + 4 millions + 9 centaines de mille + 3 mille + 7 dizaines','6 centaines de millions + 1 dizaine de millions + 4 millions + 9 dizaines de mille + 3 mille + 7 dizaines','6 centaines de millions + 1 million + 4 dizaines de millions + 9 centaines de mille + 3 mille + 7 dizaines','6 centaines de millions + 1 dizaine de millions + 4 millions + 9 centaines de mille + 3 mille + 7 unités'], correct:0},
  {n:'3 070 300', opts:['3 millions + 7 dizaines de mille + 3 centaines','3 millions + 7 mille + 3 centaines','3 millions + 7 centaines de mille + 3 dizaines','3 dizaines de millions + 7 dizaines de mille + 3 centaines'], correct:0},
  {n:'920 000 092', opts:['9 centaines de millions + 2 dizaines de millions + 9 dizaines + 2 unités','9 centaines de millions + 2 millions + 9 dizaines + 2 unités','9 centaines de millions + 2 dizaines de millions + 9 unités + 2 dizaines','9 dizaines de millions + 2 centaines de millions + 9 dizaines + 2 unités'], correct:0},
  {n:'178 050 178', opts:['1 centaine de millions + 7 dizaines de millions + 8 millions + 5 dizaines de mille + 1 centaine + 7 dizaines + 8 unités','1 centaine de millions + 7 dizaines de millions + 8 millions + 5 mille + 1 centaine + 7 dizaines + 8 unités','1 centaine de millions + 7 millions + 8 dizaines de millions + 5 dizaines de mille + 1 centaine + 7 dizaines + 8 unités','1 centaine de millions + 7 dizaines de millions + 8 millions + 5 dizaines de mille + 1 dizaine + 7 centaines + 8 unités'], correct:0},
  {n:'500 500 500', opts:['5 centaines de millions + 5 centaines de mille + 5 dizaines','5 centaines de millions + 5 dizaines de mille + 5 dizaines','5 centaines de millions + 5 centaines de mille + 5 centaines','5 dizaines de millions + 5 centaines de mille + 5 centaines'], correct:2},
  {n:'47 007 047', opts:['4 dizaines de millions + 7 millions + 7 mille + 4 dizaines + 7 unités','4 dizaines de millions + 7 millions + 7 dizaines de mille + 4 dizaines + 7 unités','4 millions + 7 dizaines de millions + 7 mille + 4 dizaines + 7 unités','4 dizaines de millions + 7 millions + 7 mille + 4 unités + 7 dizaines'], correct:0},
  {n:'863 420 006', opts:['8 centaines de millions + 6 dizaines de millions + 3 millions + 4 centaines de mille + 2 dizaines de mille + 6 unités','8 centaines de millions + 6 millions + 3 dizaines de millions + 4 centaines de mille + 2 dizaines de mille + 6 unités','8 centaines de millions + 6 dizaines de millions + 3 millions + 4 dizaines de mille + 2 mille + 6 unités','8 centaines de millions + 6 dizaines de millions + 3 millions + 4 centaines de mille + 2 dizaines de mille + 6 dizaines'], correct:0},
  {n:'15 000 015', opts:['1 dizaine de millions + 5 millions + 1 dizaine + 5 unités','1 dizaine de millions + 5 millions + 1 centaine + 5 unités','1 dizaine de millions + 5 millions + 1 mille + 5 unités','1 million + 5 dizaines de millions + 1 dizaine + 5 unités'], correct:0},
  {n:'290 060 290', opts:['2 centaines de millions + 9 dizaines de millions + 6 dizaines de mille + 2 centaines + 9 dizaines','2 centaines de millions + 9 millions + 6 dizaines de mille + 2 centaines + 9 dizaines','2 centaines de millions + 9 dizaines de millions + 6 mille + 2 centaines + 9 dizaines','2 centaines de millions + 9 dizaines de millions + 6 dizaines de mille + 2 dizaines + 9 centaines'], correct:0},
  {n:'730 800 073', opts:['7 centaines de millions + 3 dizaines de millions + 8 centaines de mille + 7 dizaines + 3 unités','7 centaines de millions + 3 millions + 8 centaines de mille + 7 dizaines + 3 unités','7 centaines de millions + 3 dizaines de millions + 8 dizaines de mille + 7 dizaines + 3 unités','7 centaines de millions + 3 dizaines de millions + 8 centaines de mille + 7 unités + 3 dizaines'], correct:0},
];

window.NUM_LIRE_BANQUE = [
  {n:'43 000 500', opts:['Quarante-trois millions cinq cent mille','Quarante-trois millions cinq cents','Quarante-trois mille cinq cents','Quatre cent trois millions cinq cents'], correct:1},
  {n:'125 436 000', opts:['Cent vingt-cinq millions quatre cent trente-six','Cent vingt-cinq mille quatre cent trente-six','Cent vingt-cinq millions quatre cent trente-six mille','Cent vingt-cinq millions quatre mille trente-six'], correct:2},
  {n:'87 654 321', opts:['Quatre-vingt-sept millions six cent cinquante-quatre mille trois cent vingt et un','Quatre-vingt-sept millions six cent quarante-cinq mille trois cent vingt et un','Huit cent soixante-sept millions six cent cinquante-quatre mille trois cent vingt et un','Quatre-vingt-sept millions six cent cinquante mille trois cent vingt et un'], correct:0},
  {n:'300 045 012', opts:['Trois cents millions quarante-cinq mille douze','Trois cents millions quatre cent cinq mille douze','Trois cent millions quarante mille douze','Trois millions quarante-cinq mille douze'], correct:0},
  {n:'56 789 100', opts:['Cinquante-six millions sept cent quatre-vingt-neuf mille cent','Cinquante-six millions sept cent nonante mille cent','Cinq cent soixante-sept millions quatre-vingt-neuf mille cent','Cinquante-six millions sept cent quatre-vingt-neuf cents'], correct:0},
  {n:'412 008 070', opts:['Quatre cent douze millions huit mille septante','Quatre cent douze millions huit cent septante','Quatre cent vingt et un millions huit mille septante','Quatre cent douze millions quatre-vingt mille septante'], correct:0},
  {n:'9 876 543', opts:['Neuf millions huit cent septante-six mille cinq cent quarante-trois','Neuf millions huit cent soixante-six mille cinq cent quarante-trois','Nonante-huit millions septante-six mille cinq cent quarante-trois','Neuf millions huit cent septante-six mille cinq cent trente-quatre'], correct:0},
  {n:'640 320 008', opts:['Six cent quarante millions trois cent vingt mille huit','Six cent quarante millions trente-deux mille huit','Six cent quatre millions trois cent vingt mille huit','Six cent quarante millions trois cent deux mille huit'], correct:0},
  {n:'23 456 789', opts:['Vingt-trois millions quatre cent cinquante-six mille sept cent quatre-vingt-neuf','Vingt-trois millions quatre cent soixante-cinq mille sept cent quatre-vingt-neuf','Deux cent trente millions quatre cent cinquante-six mille sept cent quatre-vingt-neuf','Vingt-trois millions quatre cent cinquante-six mille huit cent quatre-vingt-neuf'], correct:0},
  {n:'701 050 340', opts:['Sept cent un millions cinquante mille trois cent quarante','Sept cent dix millions cinquante mille trois cent quarante','Sept cent un millions cinq cent mille trois cent quarante','Sept cent un millions cinquante mille quatre cent trente'], correct:0},
  {n:'18 273 645', opts:['Dix-huit millions deux cent septante-trois mille six cent quarante-cinq','Dix-huit millions deux cent trente-sept mille six cent quarante-cinq','Cent quatre-vingt-deux millions septante-trois mille six cent quarante-cinq','Dix-huit millions deux cent septante-trois mille six cent cinquante-quatre'], correct:0},
  {n:'500 612 030', opts:['Cinq cents millions six cent douze mille trente','Cinq cents millions six cent vingt et un mille trente','Cinq cents millions six mille cent trente','Cinquante millions six cent douze mille trente'], correct:0},
  {n:'34 507 216', opts:['Trente-quatre millions cinq cent sept mille deux cent seize','Trente-quatre millions cinq cent septante mille deux cent seize','Trois cent quarante-cinq millions sept mille deux cent seize','Trente-quatre millions cinq cent sept mille deux cent soixante'], correct:0},
  {n:'876 543 210', opts:['Huit cent septante-six millions cinq cent quarante-trois mille deux cent dix','Huit cent septante-six millions cinq cent quarante-trois mille vingt et un','Huit cent soixante-sept millions cinq cent quarante-trois mille deux cent dix','Huit cent septante-six millions cinq cent quarante-trois mille deux cent un'], correct:0},
  {n:'45 009 872', opts:['Quarante-cinq millions neuf mille huit cent septante-deux','Quarante-cinq millions nonante mille huit cent septante-deux','Quatre cent cinquante millions neuf mille huit cent septante-deux','Quarante-cinq millions neuf cents huit cent septante-deux'], correct:0},
  {n:'263 748 591', opts:['Deux cent soixante-trois millions sept cent quarante-huit mille cinq cent nonante et un','Deux cent trente-six millions sept cent quarante-huit mille cinq cent nonante et un','Deux cent soixante-trois millions sept cent quatre-vingt-quatre mille cinq cent nonante et un','Deux cent soixante-trois millions sept cent quarante-huit mille cinq cent nonante-six'], correct:0},
  {n:'70 030 405', opts:['Septante millions trente mille quatre cent cinq','Septante millions trois mille quatre cent cinq','Sept cent millions trente mille quatre cent cinq','Septante millions trente mille cinq cent quatre'], correct:0},
  {n:'912 345 678', opts:['Neuf cent douze millions trois cent quarante-cinq mille six cent soixante-huit','Neuf cent vingt et un millions trois cent quarante-cinq mille six cent septante-huit','Neuf cent douze millions trois cent quarante-cinq mille six cent septante-huit','Neuf cent douze millions trois cent cinquante-quatre mille six cent septante-huit'], correct:2},
  {n:'58 406 193', opts:['Cinquante-huit millions quatre cent six mille cent nonante-trois','Cinquante-huit millions quatre cent soixante mille cent nonante-trois','Cinq cent quatre-vingts millions quatre cent six mille cent nonante-trois','Cinquante-huit millions quatre cent six mille trois cent nonante-neuf'], correct:0},
  {n:'147 852 369', opts:['Cent quarante-sept millions huit cent cinquante-deux mille trois cent soixante-neuf','Cent quarante-sept millions huit cent vingt-cinq mille trois cent soixante-neuf','Cent septante-quatre millions huit cent cinquante-deux mille trois cent soixante-neuf','Cent quarante-sept millions huit cent cinquante-deux mille six cent trente-neuf'], correct:0},
  {n:'6 050 408', opts:['Six millions cinquante mille quatre cent huit','Six millions cinq cents mille quatre cent huit','Soixante millions cinquante mille quatre cent huit','Six millions cinquante mille quarante-huit'], correct:0},
  {n:'830 007 654', opts:['Huit cent trente millions sept mille six cent cinquante-quatre','Huit cent trente millions septante mille six cent cinquante-quatre','Huit cent trois millions sept mille six cent cinquante-quatre','Huit cent trente millions sept mille cinq cent soixante-quatre'], correct:0},
  {n:'29 384 756', opts:['Vingt-neuf millions trois cent quatre-vingt-quatre mille sept cent cinquante-six','Vingt-neuf millions trois cent quarante-huit mille sept cent cinquante-six','Deux cent nonante-trois millions quatre-vingt-quatre mille sept cent cinquante-six','Vingt-neuf millions trois cent quatre-vingt-quatre mille six cent cinquante-sept'], correct:0},
  {n:'405 030 702', opts:['Quatre cent cinq millions trente mille sept cent deux','Quatre cent cinq millions trois mille sept cent deux','Quarante-cinq millions trente mille sept cent deux','Quatre cent cinq millions trente mille septante-deux'], correct:0},
  {n:'71 628 394', opts:['Septante et un millions six cent vingt-huit mille trois cent nonante-quatre','Septante et un millions six cent quatre-vingt-deux mille trois cent nonante-quatre','Sept cent seize millions vingt-huit mille trois cent nonante-quatre','Septante et un millions six cent vingt-huit mille trois cent quarante-neuf'], correct:0},
  {n:'593 817 246', opts:['Cinq cent nonante-trois millions huit cent dix-sept mille deux cent quarante-six','Cinq cent trente-neuf millions huit cent dix-sept mille deux cent quarante-six','Cinq cent nonante-trois millions huit cent septante-sept mille deux cent quarante-six','Cinq cent nonante-trois millions huit cent dix-sept mille deux cent soixante-quatre'], correct:0},
  {n:'38 204 915', opts:['Trente-huit millions deux cent quatre mille neuf cent quinze','Trente-huit millions vingt mille quatre cent quinze','Trois cent quatre-vingt-deux millions quatre mille neuf cent quinze','Trente-huit millions deux cent quarante mille neuf cent quinze'], correct:0},
  {n:'760 481 035', opts:['Sept cent soixante millions quatre cent quatre-vingt-un mille trente-cinq','Sept cent six millions quatre cent quatre-vingt-un mille trente-cinq','Sept cent soixante millions quatre cent huit mille trente-cinq','Sept cent soixante millions quatre cent quatre-vingt-un mille cinquante-trois'], correct:0},
  {n:'15 730 864', opts:['Quinze millions sept cent trente mille huit cent soixante-quatre','Cinquante et un millions sept cent trente mille huit cent soixante-quatre','Quinze millions sept cent trois mille huit cent soixante-quatre','Quinze millions sept cent trente mille six cent quarante-huit'], correct:0},
  {n:'482 096 537', opts:['Quatre cent quatre-vingt-deux millions nonante-six mille cinq cent trente-sept','Quatre cent vingt-huit millions nonante-six mille cinq cent trente-sept','Quatre cent quatre-vingt-deux millions neuf cent six mille cinq cent trente-sept','Quatre cent quatre-vingt-deux millions nonante-six mille cinq cent septante-trois'], correct:0},
];

window.NUM_ECRIRE_BANQUE = [
  {lettres:'Quarante-cinq millions deux cent trente-six mille sept cent quatre-vingt-neuf', opts:['45 236 789','45 263 789','452 367 890','45 236 798'], correct:0},
  {lettres:'Deux cent sept millions quarante mille cinq cent douze', opts:['270 040 512','207 400 512','207 040 512','207 040 521'], correct:2},
  {lettres:'Neuf cent douze millions trois cent quarante-cinq mille six cent septante-huit', opts:['912 345 678','912 354 678','921 345 678','912 345 687'], correct:0},
  {lettres:'Soixante-trois millions huit cent mille quatre', opts:['63 800 400','63 080 004','63 800 004','630 800 004'], correct:2},
  {lettres:'Cinq cents millions vingt mille neuf', opts:['500 200 009','500 020 009','500 020 090','500 200 090'], correct:1},
  {lettres:'Trente-huit millions cinq cent quatre-vingt-sept mille deux cent quarante et un', opts:['38 587 241','38 578 241','380 587 241','38 587 214'], correct:0},
  {lettres:'Cent vingt et un millions trois mille six', opts:['121 030 006','121 300 006','121 003 006','121 003 060'], correct:2},
  {lettres:'Quatre cent septante-deux millions neuf cent mille huit cent trente', opts:['472 900 830','472 090 830','472 900 803','472 900 830'], correct:0},
  {lettres:'Dix-neuf millions quatre-vingt mille sept cents', opts:['19 800 700','19 080 700','190 080 700','19 080 007'], correct:1},
  {lettres:'Six cent cinquante millions quarante-quatre mille soixante-six', opts:['650 044 066','650 440 066','650 044 660','605 044 066'], correct:0},
  {lettres:'Quatre millions six cent mille cinquante-deux', opts:['4 600 052','4 060 052','4 600 520','40 600 052'], correct:0},
  {lettres:'Trois cent quatre-vingts millions deux cent soixante mille sept cent quinze', opts:['380 206 715','308 260 715','380 260 715','380 260 751'], correct:2},
  {lettres:'Vingt-six millions sept cent nonante et un mille quatre cents', opts:['26 791 040','26 791 400','267 914 000','26 719 400'], correct:1},
  {lettres:'Huit cent quatre millions cinquante mille cent onze', opts:['840 050 111','804 500 111','804 050 111','804 050 011'], correct:2},
  {lettres:'Septante et un millions neuf cent mille deux', opts:['71 090 002','71 900 200','71 900 002','710 900 002'], correct:2},
  {lettres:'Deux cent cinquante-trois millions six cent quarante-huit mille neuf cent septante-neuf', opts:['253 648 997','253 684 979','253 648 979','253 648 969'], correct:2},
  {lettres:'Quarante millions cinq cent mille six cent deux', opts:['40 500 620','40 050 602','40 500 062','40 500 602'], correct:3},
  {lettres:'Sept cent quatre-vingt-neuf millions cent vingt-trois mille quatre cent cinquante-six', opts:['789 132 456','789 123 456','798 123 456','789 123 465'], correct:1},
  {lettres:'Cinquante-deux millions sept cents', opts:['52 000 700','52 007 000','52 700 000','520 000 700'], correct:0},
  {lettres:'Cent quatre-vingt-six millions quatre-vingt mille quarante', opts:['186 080 040','186 800 040','186 080 400','168 080 040'], correct:0},
  {lettres:'Neuf millions trente mille cinq cent septante-trois', opts:['9 300 573','9 030 573','9 030 537','90 030 573'], correct:1},
  {lettres:'Quatre cent vingt millions huit cent mille', opts:['420 080 000','420 800 000','402 800 000','420 008 000'], correct:1},
  {lettres:'Treize millions deux cent quarante-cinq mille huit cent septante-deux', opts:['13 254 872','13 245 872','130 245 872','13 245 827'], correct:1},
  {lettres:'Cinq cent septante millions neuf mille nonante-neuf', opts:['570 090 099','570 009 099','570 900 099','507 009 099'], correct:1},
  {lettres:'Nonante-deux millions quatre cent mille trente et un', opts:['92 040 031','92 400 031','92 400 013','920 400 031'], correct:1},
  {lettres:'Trois cent dix-neuf millions huit cent septante-sept mille deux cent soixante-cinq', opts:['319 877 265','319 870 265','391 877 265','319 877 265'], correct:0},
  {lettres:'Deux millions trois cent mille quatre-vingt', opts:['2 300 800','2 300 080','2 030 080','23 000 080'], correct:1},
  {lettres:'Six cent quarante-huit millions septante-neuf mille trois cent quarante-deux', opts:['648 079 342','648 790 342','648 079 324','684 079 342'], correct:0},
  {lettres:'Vingt-sept millions six cent cinq mille nonante-six', opts:['27 650 096','27 605 096','27 605 069','270 605 096'], correct:1},
  {lettres:'Cent millions cent mille cent', opts:['100 100 001','100 010 100','100 001 100','100 100 100'], correct:3},
];

window.DEVINETTES_DECIMAUX_BANQUE = [
  {
    texte: "Je suis un nombre décimal. Ma partie décimale comprend 3 chiffres. Mon chiffre des centièmes est le double de mon chiffre des dixièmes. Qui suis-je ?",
    opts: ["45,248", "12,326", "9,24", "156,428"],
    correct: 0,
    expl: "Dans 45,248, le chiffre des dixièmes est 2 et celui des centièmes est 4 (le double de 2). La partie décimale a bien 3 chiffres."
  },
  {
    texte: "Je suis un nombre décimal ayant 2 chiffres après la virgule. La somme des chiffres de ma partie entière est égale à 10 et mon chiffre des centièmes est 7. Qui suis-je ?",
    opts: ["64,57", "38,27", "73,52", "19,777"],
    correct: 0,
    expl: "Dans 64,57, la partie entière est 64 (6 + 4 = 10), il y a 2 chiffres après la virgule, et le chiffre des centièmes est 7."
  },
  {
    texte: "Je suis un nombre à 5 chiffres. Ma partie entière contient 2 chiffres. Mon chiffre des dixièmes est égal à la somme des chiffres de ma partie entière. Qui suis-je ?",
    opts: ["14,528", "23,456", "12,678", "45,91"],
    correct: 0,
    expl: "Dans 14,528, il y a 5 chiffres en tout, 2 chiffres dans la partie entière (14) dont la somme vaut 1 + 4 = 5. Le chiffre des dixièmes est bien 5."
  },
  {
    texte: "Je suis un nombre décimal. Mon chiffre des dixièmes est la moitié de mon chiffre des unités. Mon chiffre des centièmes est supérieur à 6. Qui suis-je ?",
    opts: ["28,47", "46,32", "14,25", "37,38"],
    correct: 0,
    expl: "Dans 28,47, le chiffre des unités est 8. Le chiffre des dixièmes (4) est la moitié de 8. Le chiffre des centièmes (7) est bien supérieur à 6."
  },
  {
    texte: "Je suis un nombre à 6 chiffres. Le nombre de chiffres de ma partie entière est égal au nombre de chiffres de ma partie décimale. La somme de tous mes chiffres est égale à 18. Qui suis-je ?",
    opts: ["123,453", "205,361", "12,3456", "901,402"],
    correct: 0,
    expl: "Dans 123,453, il y a 6 chiffres (3 entiers et 3 décimaux). La somme de tous les chiffres est 1 + 2 + 3 + 4 + 5 + 3 = 18."
  },
  {
    texte: "Je suis un nombre décimal. Ma partie entière est égale au double de ma partie décimale. Mon chiffre des dixièmes est 3. Qui suis-je ?",
    opts: ["70,35", "30,15", "60,03", "80,4"],
    correct: 0,
    expl: "Dans 70,35, la partie entière (70) est le double de la partie décimale (35), et le chiffre des dixièmes est bien 3."
  },
  {
    texte: "Je suis un nombre décimal. Mon chiffre des millièmes est 7. Mon chiffre des dixièmes est égal à la différence entre mon chiffre des millièmes et celui des centièmes. Qui suis-je ?",
    opts: ["9,347", "12,627", "4,287", "8,417"],
    correct: 0,
    expl: "Dans 9,347, le chiffre des millièmes est 7, celui des centièmes est 4, et celui des dixièmes est 3 (7 - 4 = 3)."
  },
  {
    texte: "Je suis un nombre décimal. Mon chiffre des dizaines est 2. Mon chiffre des dixièmes est le triple de mon chiffre des dizaines. Mon chiffre des centièmes est la moitié de mon chiffre des dixièmes. Qui suis-je ?",
    opts: ["24,63", "2,63", "124,93", "27,62"],
    correct: 0,
    expl: "Dans 24,63, le chiffre des dizaines est 2. Le chiffre des dixièmes (6) est le triple de 2. Le chiffre des centièmes (3) est la moitié de 6."
  },
  {
    texte: "Je suis un nombre à 5 chiffres. Ma partie décimale comprend 3 chiffres. Mon chiffre des dizaines est 9 et mon chiffre des millièmes est le tiers de mon chiffre des dizaines. Qui suis-je ?",
    opts: ["95,123", "9,5123", "90,905", "95,300"],
    correct: 0,
    expl: "Dans 95,123, il y a 5 chiffres dont 3 après la virgule. Le chiffre des dizaines est 9 et celui des millièmes (3) est le tiers de 9."
  },
  {
    texte: "Je suis un nombre décimal. Mon chiffre des centièmes est égal au produit de mon chiffre des unités par mon chiffre des dixièmes. Ce produit est égal à 8. Qui suis-je ?",
    opts: ["14,248", "23,18", "81,18", "42,49"],
    correct: 0,
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
    while(c === b) c = rndM(3, 10, true);
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
    const a = rndM(3, 10, true), b = rndM(3, 10, true), c = rndM(3, 10, true);
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
    const b1 = rndM(5, 12, true), b2 = rndM(3, 8, true);
    const c1 = rndM(3, 8, true), c2 = rndM(3, 8, true);
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
  { nombre:"500 g",     texte:"c'est la même chose que",  opts:["5 kg","50 dag","0,5 kg"],          correct:2 },
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
  { nombre:"3500 g",    texte:"c'est la même chose que",  opts:["35 kg","3,5 kg","350 dag"],        correct:1 },
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
  { nombre:"7500 g",    texte:"c'est la même chose que",  opts:["75 kg","7,5 kg","750 dag"],        correct:1 },
  { nombre:"0,75 kg",   texte:"c'est la même chose que",  opts:["75 g","7500 g","750 g"],           correct:2 },
  { nombre:"1250 g",    texte:"c'est la même chose que",  opts:["1,25 kg","12,5 kg","125 dag"],     correct:0 },
  { nombre:"3 t",       texte:"c'est la même chose que",  opts:["300 kg","3000 q","30 q"],          correct:2 },
  { nombre:"0,5 dag",   texte:"c'est la même chose que",  opts:["50 mg","500 mg","5 g"],            correct:2 },
  { nombre:"600 kg",    texte:"c'est la même chose que",  opts:["60 q","6 q","0,6 q"],              correct:1 },
  { nombre:"2 cg",      texte:"c'est la même chose que",  opts:["2 mg","200 mg","20 mg"],           correct:2 },
  { nombre:"0,3 g",     texte:"c'est la même chose que",  opts:["3 mg","3000 mg","300 mg"],         correct:2 },
];

window.CAPACITES_QCM_BANQUE = [
  { nombre:"3 l",       opts:["300 ml","3000 ml","3 dal"],          correct:1 },
  { nombre:"500 ml",    opts:["5 l","50 cl","0,5 l"],               correct:2 },
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
  { nombre:"¼ dl",      opts:["25 ml","2500 ml","2,5 ml"],          correct:2 },
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
  { nombre:"734 m",     opts:["0,734 km","7,34 km","73,4 dam"],     correct:0 },
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

window.TD_TABLEAUX = [
  {
    titre:"Animaux préférés des élèves de 6e",
    type:'simple',
    colonnes:['Animal','Nombre d\'élèves'],
    lignes:[
      ['Chien','8'],['Chat','12'],['Lapin','5'],['Hamster','3'],['Poisson','2']
    ],
    questions:[
      {q:"Quel animal est préféré par le plus grand nombre d'élèves ?", options:["Chien","Chat","Lapin","Hamster"], correct:1, explication:"Le chat est choisi par 12 élèves, c'est le maximum."},
      {q:"Combien d'élèves ont été interrogés au total ?", options:["25 élèves","28 élèves","30 élèves","32 élèves"], correct:2, explication:"8 + 12 + 5 + 3 + 2 = 30 élèves au total."},
      {q:"Combien d'élèves de plus préfèrent le chat plutôt que le chien ?", options:["2 élèves","4 élèves","6 élèves","8 élèves"], correct:1, explication:"12 - 8 = 4 élèves de plus pour le chat."},
      {q:"Quel animal est choisi par le moins d'élèves ?", options:["Lapin","Hamster","Poisson","Chat"], correct:2, explication:"Le poisson n'est choisi que par 2 élèves, c'est le minimum."},
      {q:"Le chat et le chien ensemble représentent combien d'élèves ?", options:["18 élèves","20 élèves","22 élèves","16 élèves"], correct:1, explication:"12 + 8 = 20 élèves pour le chat et le chien réunis."},
    ]
  },
  {
    titre:"Températures maximales (°C) en juillet",
    type:'simple',
    colonnes:['Ville','Température'],
    lignes:[
      ['Bruxelles','24'],['Liège','26'],['Namur','25'],['Waimes','21'],['Arlon','23']
    ],
    questions:[
      {q:"Quelle ville a la température la plus élevée en juillet ?", options:["Bruxelles","Liège","Namur","Arlon"], correct:1, explication:"Liège atteint 26°C, c'est la température la plus élevée."},
      {q:"Quelle ville a la température la plus basse en juillet ?", options:["Arlon","Namur","Waimes","Bruxelles"], correct:2, explication:"Waimes n'atteint que 21°C, c'est la température la plus basse."},
      {q:"Quelle est l'étendue des températures (différence entre max et min) ?", options:["3°C","4°C","5°C","6°C"], correct:2, explication:"26 - 21 = 5°C d'étendue entre Liège et Waimes."},
      {q:"Combien de villes atteignent au moins 24°C ?", options:["2 villes","3 villes","4 villes","1 ville"], correct:1, explication:"Bruxelles (24), Liège (26) et Namur (25) atteignent au moins 24°C — soit 3 villes."},
      {q:"De combien de degrés la température de Liège dépasse-t-elle celle de Waimes ?", options:["3°C","4°C","5°C","6°C"], correct:2, explication:"26 - 21 = 5°C de différence entre Liège et Waimes."},
    ]
  },
  {
    titre:"Livres lus par des élèves durant les vacances",
    type:'double',
    colonnes:['','Garçons','Filles','Total'],
    lignes:[
      ['Romans','14','18','32'],
      ['BD','20','12','32'],
      ['Documentaires','6','10','16'],
      ['Total','40','40','80']
    ],
    questions:[
      {q:"Combien de filles ont lu des romans ?", options:["12 filles","14 filles","18 filles","20 filles"], correct:2, explication:"Dans la ligne 'Romans' et la colonne 'Filles', on lit 18."},
      {q:"Quel type de livre a été lu le moins souvent au total ?", options:["Romans","BD","Documentaires","Impossible à savoir"], correct:2, explication:"Les documentaires totalisent 16 lectures, c'est le moins lu."},
      {q:"Combien de garçons ont lu des BD ?", options:["12","14","18","20"], correct:3, explication:"Dans la ligne 'BD' et la colonne 'Garçons', on lit 20."},
      {q:"Romans et BD confondus, combien d'élèves ont lu ces livres ?", options:["48 élèves","54 élèves","60 élèves","64 élèves"], correct:3, explication:"32 (romans) + 32 (BD) = 64 élèves au total pour ces deux catégories."},
      {q:"Au total, combien d'élèves ont été interrogés ?", options:["60 élèves","70 élèves","80 élèves","90 élèves"], correct:2, explication:"Le total général est indiqué dans la case en bas à droite : 80 élèves."},
    ]
  },
  {
    titre:"Résultats sportifs de la classe",
    type:'double',
    colonnes:['','Basket','Foot','Natation','Total'],
    lignes:[
      ['Garçons','8','15','5','28'],
      ['Filles','12','6','10','28'],
      ['Total','20','21','15','56']
    ],
    questions:[
      {q:"Combien de garçons pratiquent le football ?", options:["6","8","15","21"], correct:2, explication:"Dans la ligne 'Garçons' et la colonne 'Foot', on lit 15."},
      {q:"Quel sport est pratiqué par le plus grand nombre d'élèves ?", options:["Basket","Foot","Natation","Impossible à savoir"], correct:1, explication:"Le football totalise 21 élèves, c'est le sport le plus pratiqué."},
      {q:"Combien de filles pratiquent la natation ?", options:["5","6","10","15"], correct:2, explication:"Dans la ligne 'Filles' et la colonne 'Natation', on lit 10."},
      {q:"Combien d'élèves pratiquent le basket au total ?", options:["8","12","20","21"], correct:2, explication:"Dans la ligne 'Total' et la colonne 'Basket', on lit 20."},
      {q:"Combien d'élèves ont été interrogés au total ?", options:["28","42","56","60"], correct:2, explication:"Le total général est 56 élèves (28 garçons + 28 filles)."},
    ]
  },
];

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

window.TD_GRAPHIQUES = [
  {
    titre:"Nombre de livres lus par mois",
    type:'barres',
    axeX:'Mois',
    axeY:'Nombre de livres',
    donnees:[
      {label:'Sept.',valeur:8},
      {label:'Oct.',valeur:12},
      {label:'Nov.',valeur:6},
      {label:'Déc.',valeur:4},
      {label:'Janv.',valeur:10},
      {label:'Févr.',valeur:9},
    ],
    questions:[
      {q:"Quel mois a-t-on lu le plus de livres ?", options:["Septembre","Octobre","Janvier","Février"], correct:1, explication:"En octobre, on a lu 12 livres, c'est le maximum."},
      {q:"Quel mois a-t-on lu le moins de livres ?", options:["Novembre","Décembre","Janvier","Février"], correct:1, explication:"En décembre, on n'a lu que 4 livres, c'est le minimum."},
      {q:"Combien de livres a-t-on lu en tout sur ces 6 mois ?", options:["45 livres","49 livres","52 livres","55 livres"], correct:1, explication:"8+12+6+4+10+9 = 49 livres au total."},
      {q:"Entre novembre et janvier, la lecture a-t-elle augmenté ou diminué ?", options:["Augmenté","Diminué","Elle est restée pareille","Impossible à savoir"], correct:0, explication:"En novembre : 6 livres, en janvier : 10 livres — la lecture a augmenté."},
      {q:"Quelle est l'étendue (différence entre le max et le min) ?", options:["6 livres","7 livres","8 livres","10 livres"], correct:2, explication:"12 (max en oct.) - 4 (min en déc.) = 8 livres d'étendue."},
    ]
  },
  {
    titre:"Températures moyennes à Waimes",
    type:'lineaire',
    axeX:'Mois',
    axeY:'Température (°C)',
    donnees:[
      {label:'Jan.',valeur:2},
      {label:'Fév.',valeur:3},
      {label:'Mars',valeur:7},
      {label:'Avr.',valeur:11},
      {label:'Mai',valeur:15},
      {label:'Juin',valeur:18},
      {label:'Juil.',valeur:20},
      {label:'Août',valeur:19},
    ],
    questions:[
      {q:"Quel mois fait-il le plus chaud en moyenne ?", options:["Juin","Juillet","Août","Mai"], correct:1, explication:"En juillet, la température moyenne atteint 20°C, c'est le maximum."},
      {q:"Quel mois fait-il le plus froid en moyenne ?", options:["Janvier","Février","Mars","Avril"], correct:0, explication:"En janvier, la température n'est que de 2°C, c'est le minimum."},
      {q:"Entre janvier et juillet, de combien de degrés la température a-t-elle augmenté ?", options:["15°C","16°C","17°C","18°C"], correct:3, explication:"20 - 2 = 18°C d'augmentation entre janvier et juillet."},
      {q:"Pendant combien de mois la température dépasse-t-elle 15°C ?", options:["2 mois","3 mois","4 mois","5 mois"], correct:1, explication:"Juin (18), Juillet (20) et Août (19) dépassent 15°C — soit 3 mois."},
      {q:"Entre avril et mai, quelle est l'augmentation de température ?", options:["3°C","4°C","5°C","6°C"], correct:1, explication:"15 - 11 = 4°C d'augmentation entre avril et mai."},
    ]
  },
  {
    titre:"Sports pratiqués par les élèves",
    type:'barres',
    axeX:'Sport',
    axeY:'Nombre d\'élèves',
    donnees:[
      {label:'Foot',valeur:15},
      {label:'Natation',valeur:9},
      {label:'Basket',valeur:7},
      {label:'Tennis',valeur:5},
      {label:'Vélo',valeur:11},
      {label:'Gym',valeur:8},
    ],
    questions:[
      {q:"Quel sport est pratiqué par le plus grand nombre d'élèves ?", options:["Foot","Natation","Vélo","Basket"], correct:0, explication:"Le football est pratiqué par 15 élèves, c'est le sport le plus populaire."},
      {q:"Combien d'élèves pratiquent le vélo ou la natation ?", options:["18 élèves","20 élèves","22 élèves","24 élèves"], correct:1, explication:"11 (vélo) + 9 (natation) = 20 élèves."},
      {q:"Quelle est l'étendue entre le sport le plus et le moins pratiqué ?", options:["8 élèves","9 élèves","10 élèves","11 élèves"], correct:2, explication:"15 (foot) - 5 (tennis) = 10 élèves d'étendue."},
      {q:"Combien d'élèves pratiquent un sport d'équipe (foot ou basket) ?", options:["20 élèves","22 élèves","24 élèves","18 élèves"], correct:1, explication:"15 (foot) + 7 (basket) = 22 élèves pratiquent un sport d'équipe."},
      {q:"Combien d'élèves pratiquent la gym ou le tennis ?", options:["11 élèves","12 élèves","13 élèves","14 élèves"], correct:2, explication:"8 (gym) + 5 (tennis) = 13 élèves."},
    ]
  },
];

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
