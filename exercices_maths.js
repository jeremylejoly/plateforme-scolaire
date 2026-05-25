// ===================================================
// EXERCICES DE MATHÉMATIQUES
// Structure : EXERCICES_MATHS[matiere][section][exercice]
// ===================================================

window.EXERCICES_MATHS = {

  solides_figures: {

    quadrilateres: {

      // Banque de 24 questions QCM avec formes SVG
      qcm_bank: [
  {id:"q1",svg:"<rect x=\"55\" y=\"30\" width=\"90\" height=\"90\" fill=\"#E8F4FF\" stroke=\"#2B6CB0\" stroke-width=\"2.5\"/>",options:["losange", "carré", "rectangle"],answer:1},
  {id:"q2",svg:"<polygon points=\"100,20 175,95 100,140 25,95\" fill=\"#E8F4FF\" stroke=\"#2B6CB0\" stroke-width=\"2.5\"/>",options:["carré", "losange", "rectangle"],answer:0},
  {id:"q3",svg:"<rect x=\"40\" y=\"25\" width=\"110\" height=\"110\" fill=\"#E8F4FF\" stroke=\"#2B6CB0\" stroke-width=\"2.5\"/>",options:["parallélogramme", "rectangle", "carré"],answer:2},
  {id:"q4",svg:"<polygon points=\"100,15 170,80 100,145 30,80\" fill=\"#F0FFF4\" stroke=\"#276749\" stroke-width=\"2.5\"/>",options:["carré", "parallélogramme", "losange"],answer:2},
  {id:"q5",svg:"<polygon points=\"35,45 155,45 165,115 25,115\" fill=\"#F0FFF4\" stroke=\"#276749\" stroke-width=\"2.5\"/>",options:["parallélogramme", "losange", "trapèze quelconque"],answer:1},
  {id:"q6",svg:"<polygon points=\"100,30 175,80 100,130 25,80\" fill=\"#F0FFF4\" stroke=\"#276749\" stroke-width=\"2.5\"/>",options:["trapèze isocèle", "losange", "carré"],answer:1},
  {id:"q7",svg:"<rect x=\"25\" y=\"55\" width=\"150\" height=\"60\" fill=\"#FFFBEB\" stroke=\"#92400E\" stroke-width=\"2.5\"/>",options:["parallélogramme", "trapèze isocèle", "rectangle"],answer:2},
  {id:"q8",svg:"<rect x=\"65\" y=\"20\" width=\"70\" height=\"120\" fill=\"#FFFBEB\" stroke=\"#92400E\" stroke-width=\"2.5\"/>",options:["carré", "rectangle", "trapèze rectangle"],answer:1},
  {id:"q9",svg:"<rect x=\"15\" y=\"65\" width=\"170\" height=\"40\" fill=\"#FFFBEB\" stroke=\"#92400E\" stroke-width=\"2.5\"/>",options:["carré", "rectangle", "parallélogramme"],answer:1},
  {id:"q10",svg:"<polygon points=\"60,30 170,30 140,130 30,130\" fill=\"#FFF5F5\" stroke=\"#9B2335\" stroke-width=\"2.5\"/>",options:["trapèze quelconque", "rectangle", "parallélogramme"],answer:2},
  {id:"q11",svg:"<polygon points=\"30,30 140,30 170,130 60,130\" fill=\"#FFF5F5\" stroke=\"#9B2335\" stroke-width=\"2.5\"/>",options:["parallélogramme", "losange", "trapèze quelconque"],answer:0},
  {id:"q12",svg:"<polygon points=\"100,15 160,70 100,145 40,70\" fill=\"#FFF5F5\" stroke=\"#9B2335\" stroke-width=\"2.5\"/>",options:["carré", "parallélogramme", "losange"],answer:1},
  {id:"q13",svg:"<polygon points=\"55,35 145,35 170,125 30,125\" fill=\"#F5F0FF\" stroke=\"#553C9A\" stroke-width=\"2.5\"/>",options:["trapèze quelconque", "trapèze rectangle", "trapèze isocèle"],answer:2},
  {id:"q14",svg:"<polygon points=\"20,35 180,35 145,125 55,125\" fill=\"#F5F0FF\" stroke=\"#553C9A\" stroke-width=\"2.5\"/>",options:["trapèze isocèle", "trapèze rectangle", "trapèze quelconque"],answer:0},
  {id:"q15",svg:"<polygon points=\"45,55 155,55 175,105 25,105\" fill=\"#F5F0FF\" stroke=\"#553C9A\" stroke-width=\"2.5\"/>",options:["rectangle", "trapèze isocèle", "trapèze quelconque"],answer:1},
  {id:"q16",svg:"<polygon points=\"40,30 150,30 150,130 40,130\" fill=\"#ECFDF5\" stroke=\"#065F46\" stroke-width=\"2.5\"/><rect x=\"40\" y=\"30\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#065F46\" stroke-width=\"1.5\"/>",options:["trapèze rectangle", "trapèze isocèle", "trapèze quelconque"],answer:0},
  {id:"q17",svg:"<polygon points=\"50,30 160,30 160,130 90,130\" fill=\"#ECFDF5\" stroke=\"#065F46\" stroke-width=\"2.5\"/><rect x=\"148\" y=\"30\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#065F46\" stroke-width=\"1.5\"/>",options:["trapèze quelconque", "trapèze isocèle", "trapèze rectangle"],answer:2},
  {id:"q18",svg:"<polygon points=\"40,30 130,30 160,130 40,130\" fill=\"#ECFDF5\" stroke=\"#065F46\" stroke-width=\"2.5\"/><rect x=\"40\" y=\"118\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#065F46\" stroke-width=\"1.5\"/>",options:["trapèze rectangle", "trapèze quelconque", "parallélogramme"],answer:0},
  {id:"q19",svg:"<polygon points=\"30,40 130,40 160,120 50,120\" fill=\"#FFF7ED\" stroke=\"#9A3412\" stroke-width=\"2.5\"/>",options:["trapèze isocèle", "trapèze rectangle", "trapèze quelconque"],answer:2},
  {id:"q20",svg:"<polygon points=\"20,40 170,40 130,120 60,120\" fill=\"#FFF7ED\" stroke=\"#9A3412\" stroke-width=\"2.5\"/>",options:["trapèze quelconque", "trapèze rectangle", "quadrilatère quelconque"],answer:0},
  {id:"q21",svg:"<polygon points=\"25,50 155,35 170,120 45,120\" fill=\"#FFF7ED\" stroke=\"#9A3412\" stroke-width=\"2.5\"/>",options:["quadrilatère quelconque", "trapèze quelconque", "trapèze isocèle"],answer:1},
  {id:"q22",svg:"<polygon points=\"40,40 160,30 175,110 25,130\" fill=\"#F0F4FF\" stroke=\"#3730A3\" stroke-width=\"2.5\"/>",options:["quadrilatère quelconque", "trapèze quelconque", "parallélogramme"],answer:0},
  {id:"q23",svg:"<polygon points=\"30,30 170,30 170,130 100,80 30,130\" fill=\"#F0F4FF\" stroke=\"#3730A3\" stroke-width=\"2.5\"/>",options:["quadrilatère quelconque", "trapèze quelconque", "losange"],answer:0},
  {id:"q24",svg:"<polygon points=\"50,25 160,55 140,135 20,110\" fill=\"#F0F4FF\" stroke=\"#3730A3\" stroke-width=\"2.5\"/>",options:["trapèze isocèle", "parallélogramme", "quadrilatère quelconque"],answer:2}
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
