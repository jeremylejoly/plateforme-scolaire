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
        // indices des questions de la banque à utiliser pour l'évaluation
        0, 4, 7, 11, 15
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
