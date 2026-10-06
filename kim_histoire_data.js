/**
 * kim_histoire_data.js
 * Base de données pour le Jeu de Kim Historique (P5-P6 FWB)
 * Contient 5 périodes historiques, 10 scènes détaillées et 90 questions QCM documentées.
 */

window.KIM_HISTOIRE_DATA = {
  "periods": [
    {
      "id": "prehistoire",
      "name": "La Préhistoire",
      "dates": "Jusqu'à l'écriture (vers 3 300 av. J.-C.) ; chez nous, jusqu'à 52 av. J.-C.",
      "badge": "Ocre",
      "color": "#B5732E",
      "colorLight": "#FBF3EB",
      "colorBorder": "#8D4E12",
      "icon": "🦣",
      "description": "Des chasseurs-cueilleurs nomades du Paléolithique aux premiers agriculteurs sédentaires du Néolithique.",
      "scenes": [
        {
          "id": "prehistoire_paleo",
          "title": "Le campement nomade au Paléolithique",
          "subtitle": "Homo sapiens sous l'abri-sous-roche",
          "filename": "prehistoire_paleolithique.jpg",
          "altFilenames": [
            "prehistoire_paleolithique.webp",
            "prehistoire_paleolithique.jpg"
          ],
          "themeColor": "#B5732E",
          "intro": "Scrutez attentivement le campement nomade : les outils, les tentes, le feu, les activités des membres du clan et la steppe au loin.",
          "questions": [
            {
              "id": "q_pal_1",
              "question": "Combien de mammouths aperçoit-on au loin dans la steppe glaciaire ?",
              "options": [
                "Exactement 2 mammouths",
                "Un seul mammouth isolé",
                "Un troupeau de 4 mammouths",
                "3 mammouths"
              ],
              "correct": 0,
              "explanation": "À l'horizon, le long de la rivière, on distingue la silhouette de 2 mammouths marchant dans la steppe.",
              "category": "count"
            },
            {
              "id": "q_pal_2",
              "question": "Quel animal est en train d'être peint en ocre sur la paroi rocheuse au fond ?",
              "options": [
                "Un bison",
                "Un cheval sauvage",
                "Un renne",
                "Un ours des cavernes"
              ],
              "correct": 0,
              "explanation": "L'adolescent au fond applique de l'ocre rouge et du charbon pour tracer le profil imposant d'un bison.",
              "category": "detail"
            },
            {
              "id": "q_pal_3",
              "question": "De quelle couleur sont les baies dans le panier en osier près du chien ?",
              "options": [
                "Rouges",
                "Bleues foncées",
                "Jaunes",
                "Noires"
              ],
              "correct": 0,
              "explanation": "Le panier en osier est rempli de petites baies rouges cueillies dans la toundra.",
              "category": "color"
            },
            {
              "id": "q_pal_4",
              "question": "Quel gibier les deux chasseurs rapportent-ils au campement sur un brancard ?",
              "options": [
                "Un jeune cerf",
                "Un sanglier",
                "Un loup arctique",
                "Un bouquetin"
              ],
              "correct": 0,
              "explanation": "Les deux chasseurs rentrent de l'expédition avec un cerf fixé sur des perches de bois.",
              "category": "object"
            },
            {
              "id": "q_pal_5",
              "question": "Que fait la femme assise au premier plan, à gauche ?",
              "options": [
                "Elle coud une peau avec une aiguille",
                "Elle allume le feu avec deux silex",
                "Elle prépare des brochettes de viande",
                "Elle écrase des graines sauvages"
              ],
              "correct": 0,
              "explanation": "Elle utilise une fine aiguille en os percé d'un chas et du tendon d'animal pour assembler des peaux de bêtes.",
              "category": "action"
            },
            {
              "id": "q_pal_6",
              "question": "Combien de tentes coniques en peaux de bêtes sont dressées sur le campement ?",
              "options": [
                "2 tentes",
                "3 tentes",
                "1 seule tente",
                "4 tentes"
              ],
              "correct": 0,
              "explanation": "Le campement temporaire comporte 2 tentes coniques soutenues par des perches en bois.",
              "category": "count"
            },
            {
              "id": "q_pal_7",
              "question": "Quel outil l'artisan utilise-t-il pour tailler et façonner son silex ?",
              "options": [
                "Un percuteur en bois de renne",
                "Un marteau en fer forgé",
                "Une grosse pierre plate et ronde",
                "Un burin de bronze"
              ],
              "correct": 0,
              "explanation": "Au Paléolithique, les métaux n'existent pas encore : on utilise un percuteur dur (pierre) ou tendre (bois de renne).",
              "category": "object"
            },
            {
              "id": "q_pal_8",
              "question": "Que fait-on griller au-dessus des braises du feu de camp ?",
              "options": [
                "Du poisson embroché",
                "Des cuisses de mammouth",
                "Des racines sauvages",
                "Des champignons"
              ],
              "correct": 0,
              "explanation": "Des poissons pêchés dans la rivière sont maintenus sur des branches de bois vert au-dessus des braises.",
              "category": "object"
            },
            {
              "id": "q_pal_9",
              "question": "Où le canidé apprivoisé (chien/loup) est-il couché ?",
              "options": [
                "Près du feu et du panier de baies",
                "Dans l'une des tentes",
                "Au bord de la rivière au fond",
                "Près de l'artisan tailleur de silex"
              ],
              "correct": 0,
              "explanation": "Il profite de la chaleur du feu central, étendu non loin du panier de baies.",
              "category": "detail"
            }
          ]
        },
        {
          "id": "prehistoire_neo",
          "title": "Le premier village au Néolithique",
          "subtitle": "La naissance de l'agriculture et de l'élevage",
          "filename": "prehistoire_neolithique.jpg",
          "altFilenames": [
            "prehistoire_neolithique.webp",
            "prehistoire_neolithique.jpg"
          ],
          "themeColor": "#B5732E",
          "intro": "Observez la vie du village sédentaire : les maisons, les champs, l'enclos, le lac et les nouvelles inventions du Néolithique.",
          "questions": [
            {
              "id": "q_neo_1",
              "question": "Combien de moutons à laine beige se trouvent dans l'enclos en branchages ?",
              "options": [
                "3 moutons",
                "5 moutons",
                "2 moutons",
                "4 moutons"
              ],
              "correct": 0,
              "explanation": "L'enclos abrite exactement 3 moutons à toison beige ainsi qu'une chèvre noire.",
              "category": "count"
            },
            {
              "id": "q_neo_2",
              "question": "De quelle couleur est la chèvre qui partage l'enclos avec les moutons ?",
              "options": [
                "Noire",
                "Blanche comme les moutons",
                "Rousse",
                "Tachetée marron"
              ],
              "correct": 0,
              "explanation": "Une chèvre au pelage noir se distingue nettement parmi les moutons beiges.",
              "category": "color"
            },
            {
              "id": "q_neo_3",
              "question": "Que fait la femme au premier plan sur une pierre plate (meule dormante) ?",
              "options": [
                "Elle moud des grains avec une molette",
                "Elle pétrit une pâte à pain",
                "Elle polit une hache en pierre verte",
                "Elle nettoie du poisson pour le repas"
              ],
              "correct": 0,
              "explanation": "Elle utilise une molette en pierre pour moudre les premiers grains de céréales cultivées (blé/orge).",
              "category": "action"
            },
            {
              "id": "q_neo_4",
              "question": "Comment est tiré l'araire de l'agriculteur dans le champ à droite ?",
              "options": [
                "Par deux bœufs",
                "Par un cheval de trait",
                "Par un âne robuste",
                "À la seule force des bras"
              ],
              "correct": 0,
              "explanation": "Au Néolithique, la traction animale débute grâce aux bœufs attelés à l'araire en bois.",
              "category": "action"
            },
            {
              "id": "q_neo_5",
              "question": "Quel type d'embarcation les pêcheurs utilisent-ils sur le lac ?",
              "options": [
                "Une pirogue (tronc creusé)",
                "Une barque à voile carrée",
                "Un radeau de troncs d'arbres",
                "Un canot en peaux tendues"
              ],
              "correct": 0,
              "explanation": "Il s'agit d'une pirogue monoxyle, taillée et évidée au feu dans un seul tronc d'arbre massif.",
              "category": "object"
            },
            {
              "id": "q_neo_6",
              "question": "Quels motifs géométriques le potier grave-t-il sur son pot en argile ?",
              "options": [
                "Des lignes brisées en zigzag",
                "Des spirales en escargot",
                "Des fleurs stylisées",
                "Des vagues horizontales"
              ],
              "correct": 0,
              "explanation": "Les céramiques néolithiques sont souvent incisées de motifs géométriques en zigzag (rubané/cardial).",
              "category": "detail"
            },
            {
              "id": "q_neo_7",
              "question": "Combien de maisons rectangulaires à toit de chaume composent ce village ?",
              "options": [
                "3 maisons",
                "5 maisons",
                "2 maisons",
                "4 maisons"
              ],
              "correct": 0,
              "explanation": "On observe 3 maisons solides et rectangulaires en bois, torchis et chaume.",
              "category": "count"
            },
            {
              "id": "q_neo_8",
              "question": "Qu'est-ce qui maintient tendus les fils verticaux du métier à tisser ?",
              "options": [
                "Des poids en pierre percée",
                "Des morceaux de bois lourd",
                "Des masses en fer",
                "Des galets collés à l'argile"
              ],
              "correct": 0,
              "explanation": "Les pesons de métier à tisser sont des pierres perforées suspendues au bas de la chaine.",
              "category": "object"
            },
            {
              "id": "q_neo_9",
              "question": "De quelle couleur est le chien qui surveille le champ ?",
              "options": [
                "Tacheté marron et blanc",
                "Tout noir",
                "Gris comme un loup",
                "Roux vif"
              ],
              "correct": 0,
              "explanation": "Le chien de garde du village est un animal tacheté de blanc et de marron.",
              "category": "color"
            }
          ]
        }
      ]
    },
    {
      "id": "antiquite",
      "name": "L'Antiquité",
      "dates": "De l'écriture (vers 3 300 av. J.-C. ; chez nous, 52 av. J.-C.) à 476",
      "badge": "Or",
      "color": "#D9A521",
      "colorLight": "#FCF9EC",
      "colorBorder": "#9E740B",
      "icon": "🏛️",
      "description": "L'Empire romain, les Gallo-Romains, les temples monumentaux, les voies pavées et les thermes.",
      "scenes": [
        {
          "id": "antiquite_forum",
          "title": "Le marché du forum gallo-romain",
          "subtitle": "Au cœur de la cité romaine",
          "filename": "antiquite_forum_marche.jpg",
          "altFilenames": [
            "antiquite_forum_marche.webp",
            "antiquite_forum_marche.jpg"
          ],
          "themeColor": "#D9A521",
          "intro": "Parcourez le forum de la cité gallo-romaine : légionnaires, étals, marchands, amphores, temple et fontaine publique.",
          "questions": [
            {
              "id": "q_for_1",
              "question": "Combien de grandes amphores en terre cuite sont alignées sur le banc présentoir au premier plan ?",
              "options": [
                "7 amphores",
                "5 amphores",
                "4 amphores",
                "9 amphores"
              ],
              "correct": 0,
              "explanation": "Le marchand présente 7 grandes amphores en terre cuite alignées derrière sa table.",
              "category": "count"
            },
            {
              "id": "q_for_2",
              "question": "De quelle couleur est la crête qui surmonte le casque du légionnaire romain ?",
              "options": [
                "Rouge vif",
                "Blanche",
                "Jaune or",
                "Noire"
              ],
              "correct": 0,
              "explanation": "Le casque du soldat en patrouille arbore une crête en crin de cheval teinté de rouge vif.",
              "category": "color"
            },
            {
              "id": "q_for_3",
              "question": "Quels motifs dorés ornent le grand bouclier rouge (scutum) du légionnaire ?",
              "options": [
                "Des ailes et des éclairs",
                "Un aigle entier aux ailes déployées",
                "Une tête de lion rugissant",
                "Une couronne de laurier"
              ],
              "correct": 0,
              "explanation": "Le scutum romain arbore les foudres ailées dorées de Jupiter, composées d'éclairs et d'ailes stylisées.",
              "category": "detail"
            },
            {
              "id": "q_for_4",
              "question": "De quelle couleur est le grand manteau drapé (palla) de la dame gallo-romaine ?",
              "options": [
                "Bleue",
                "Verte",
                "Rouge",
                "Jaune"
              ],
              "correct": 0,
              "explanation": "La dame porte une longue robe blanche (stola) et, par-dessus, un grand manteau drapé bleu (palla). Sa servante l'abrite sous une ombrelle.",
              "category": "color"
            },
            {
              "id": "q_for_5",
              "question": "Quelle est la forme sculptée de la fontaine publique en marbre ?",
              "options": [
                "Une tête de lion",
                "Une coquille Saint-Jacques",
                "Une statue de dauphin",
                "Une tête de cheval"
              ],
              "correct": 0,
              "explanation": "L'eau potable jaillit directement de la gueule ouverte d'un lion sculpté dans le marbre blanc.",
              "category": "object"
            },
            {
              "id": "q_for_6",
              "question": "Qui tient l'ombrelle au-dessus de la dame en bleu ?",
              "options": [
                "Une jeune servante en robe rayée",
                "Le légionnaire romain",
                "Le marchand en tunique jaune",
                "Personne : elle la tient elle-même"
              ],
              "correct": 0,
              "explanation": "Une jeune servante en robe à rayures marche derrière la dame et l'abrite du soleil avec une ombrelle.",
              "category": "detail"
            },
            {
              "id": "q_for_7",
              "question": "Que compte attentivement le marchand en tunique jaune à sa table ?",
              "options": [
                "Des pièces de monnaie",
                "Des grains d'olives",
                "Des petites perles de verre",
                "Des graines de cumin"
              ],
              "correct": 0,
              "explanation": "Le marchand manipule ses pièces de monnaie romaines (sesterces et deniers) sur sa table en bois.",
              "category": "action"
            },
            {
              "id": "q_for_8",
              "question": "Combien de pigeons picorent sur les dalles de pierre près de la fontaine ?",
              "options": [
                "2 pigeons",
                "4 pigeons",
                "1 seul pigeon",
                "3 pigeons"
              ],
              "correct": 0,
              "explanation": "Deux pigeons gris picorent les miettes sur les pavés devant le bassin de la fontaine.",
              "category": "count"
            },
            {
              "id": "q_for_9",
              "question": "Que voit-on tout en haut du fronton triangulaire du temple ?",
              "options": [
                "Un groupe de statues",
                "Un drapeau rouge",
                "Une cloche en bronze",
                "Rien du tout"
              ],
              "correct": 0,
              "explanation": "Le sommet du fronton est décoré d'un groupe de statues, comme sur de nombreux temples romains.",
              "category": "detail"
            }
          ]
        },
        {
          "id": "antiquite_villa",
          "title": "La villa gallo-romaine et ses thermes",
          "subtitle": "Le confort et le raffinement gallo-romain",
          "filename": "antiquite_villa_thermes.jpg",
          "altFilenames": [
            "antiquite_villa_thermes.webp",
            "antiquite_villa_thermes.jpg"
          ],
          "themeColor": "#D9A521",
          "intro": "Pénétrez dans la luxueuse demeure d'un grand propriétaire gallo-romain : péristyle, mosaïques, thermes et aqueduc.",
          "questions": [
            {
              "id": "q_vil_1",
              "question": "Quel animal marin figure sur la grande mosaïque au sol du péristyle ?",
              "options": [
                "Un dauphin",
                "Une pieuvre",
                "Une tortue de mer",
                "Un hippocampe"
              ],
              "correct": 0,
              "explanation": "La magnifique mosaïque de tesselles multicolores représente un dauphin ondulant dans les vagues.",
              "category": "detail"
            },
            {
              "id": "q_vil_2",
              "question": "De quelle couleur est la bordure décorant la toge du maitre de maison ?",
              "options": [
                "Pourpre",
                "Dorée",
                "Bleu turquoise",
                "Verte émeraude"
              ],
              "correct": 0,
              "explanation": "La toge prétexte bordée d'une bande de pourpre est le signe des citoyens de haut rang (notables).",
              "category": "color"
            },
            {
              "id": "q_vil_3",
              "question": "Que tient le maitre de maison dans sa main levée ?",
              "options": [
                "Une coupe dorée",
                "Un rouleau de papyrus",
                "Une grappe de raisin",
                "Une lampe à huile"
              ],
              "correct": 0,
              "explanation": "Le maitre de maison lève une coupe dorée ; le jeune serviteur lui apporte une autre coupe sur un plateau.",
              "category": "object"
            },
            {
              "id": "q_vil_4",
              "question": "Quel instrument métallique l'homme sortant du bain chaud utilise-t-il pour se racler la peau ?",
              "options": [
                "Un strigile",
                "Une spatule",
                "Un peigne d'os",
                "Une lame de rasoir"
              ],
              "correct": 0,
              "explanation": "Le strigile en fer incurvé sert à racler la sueur, l'huile et la poussière après les bains chauds (caldarium).",
              "category": "object"
            },
            {
              "id": "q_vil_5",
              "question": "Quelle construction monumentale aperçoit-on au loin à travers la baie ouverte ?",
              "options": [
                "Un aqueduc à arcades",
                "Les arènes d'un amphithéâtre",
                "Un phare maritime",
                "Une haute muraille crénelée"
              ],
              "correct": 0,
              "explanation": "Les arches d'un aqueduc enjambent la vallée pour acheminer l'eau courante depuis les sources jusqu'à la villa.",
              "category": "detail"
            },
            {
              "id": "q_vil_6",
              "question": "Quelle forme a la grande ouverture du mur du fond, par laquelle on voit l'aqueduc ?",
              "options": [
                "Une arcade arrondie",
                "Une fenêtre carrée",
                "Une porte pointue (ogive)",
                "Un hublot rond"
              ],
              "correct": 0,
              "explanation": "Une grande arcade arrondie, typique de l'architecture romaine, encadre la vue sur l'aqueduc.",
              "category": "detail"
            },
            {
              "id": "q_vil_7",
              "question": "Quel oiseau exotique est perché dans la cage en osier suspendue ?",
              "options": [
                "Un perroquet vert",
                "Un canari jaune",
                "Une colombe blanche",
                "Un geai bleu"
              ],
              "correct": 0,
              "explanation": "Les Romains fortunés aimaient posséder des perroquets parleurs ramenés des contrées lointaines.",
              "category": "detail"
            },
            {
              "id": "q_vil_8",
              "question": "Que trouve-t-on flottant dans le bassin central (impluvium) ?",
              "options": [
                "Des nénufars à fleurs blanches",
                "Des pétales de rose",
                "Des petits bateaux de bois",
                "Des branches d'olivier"
              ],
              "correct": 0,
              "explanation": "Le bassin de rétention d'eau de pluie est orné de nénufars flottants.",
              "category": "object"
            },
            {
              "id": "q_vil_9",
              "question": "Sur quel type de mobilier le maitre de maison est-il confortablement installé ?",
              "options": [
                "Un lit de banquet (triclinium)",
                "Un trône de marbre avec accoudoirs",
                "Un banc en bois sculpté",
                "Des coussins posés par terre"
              ],
              "correct": 0,
              "explanation": "Les Romains prenaient leurs repas et recevaient leurs hôtes allongés sur des lits de repos (lectus/triclinium).",
              "category": "object"
            }
          ]
        }
      ]
    },
    {
      "id": "moyen_age",
      "name": "Le Moyen Âge",
      "dates": "De 476 à 1492 (découverte de l'Amérique)",
      "badge": "Grenat",
      "color": "#9C2F3A",
      "colorLight": "#FBF1F2",
      "colorBorder": "#681D25",
      "icon": "🏰",
      "description": "Les châteaux forts, la chevalerie, les tournois, les moines copistes et les cathédrales.",
      "scenes": [
        {
          "id": "moyen_age_tournoi",
          "title": "Le tournoi au pied du château fort",
          "subtitle": "La fête chevaleresque et la cour seigneuriale",
          "filename": "moyen_age_tournoi_chateau.jpg",
          "altFilenames": [
            "moyen_age_tournoi_chateau.webp",
            "moyen_age_tournoi_chateau.jpg"
          ],
          "themeColor": "#9C2F3A",
          "intro": "Admirez le tournoi de chevalerie : les lices, les armures, les armoiries, la tribune d'honneur et la forge.",
          "questions": [
            {
              "id": "q_tou_1",
              "question": "Quel symbole héraldique orne le caparaçon du cheval noir à droite ?",
              "options": [
                "Un lion d'argent brodé",
                "Une fleur de lys dorée",
                "Un dragon rouge",
                "Un aigle bicéphale"
              ],
              "correct": 0,
              "explanation": "Le destrier noir porte une housse bleue brodée d'un lion argenté, emblème du seigneur en lice.",
              "category": "detail"
            },
            {
              "id": "q_tou_2",
              "question": "De quel instrument à cordes joue le ménestrel assis sur un tonneau ?",
              "options": [
                "Du luth",
                "De la harpe",
                "De la vielle à roue",
                "Du violon"
              ],
              "correct": 0,
              "explanation": "Le ménestrel pince les cordes de son luth en bois pour divertir la foule en musique.",
              "category": "object"
            },
            {
              "id": "q_tou_3",
              "question": "Quelle coiffe haute et conique porte la dame dans la tribune d'honneur ?",
              "options": [
                "Un hennin pointu avec un voile",
                "Une couronne royale d'or",
                "Un béret de velours",
                "Une guimpe blanche de religieuse"
              ],
              "correct": 0,
              "explanation": "Le hennin est cette haute coiffe conique médiévale féminine ornée d'un long voile de gaze blanche.",
              "category": "object"
            },
            {
              "id": "q_tou_4",
              "question": "Combien de bannières flottent au sommet des tours de la forteresse ?",
              "options": [
                "4 bannières",
                "2 bannières",
                "6 bannières",
                "3 bannières"
              ],
              "correct": 0,
              "explanation": "Quatre bannières héraldiques triangulaires (rouges et jaunes) flottent aux créneaux des tours.",
              "category": "count"
            },
            {
              "id": "q_tou_5",
              "question": "Quel rapace se tient sagement sur le gant de cuir épais du fauconnier ?",
              "options": [
                "Un faucon",
                "Un grand aigle royal",
                "Une chouette effraie",
                "Un vautour fauve"
              ],
              "correct": 0,
              "explanation": "Le fauconnier pratique la chasse au vol : le faucon, sans chaperon ici, se tient sur son gant de cuir épais.",
              "category": "detail"
            },
            {
              "id": "q_tou_6",
              "question": "Que martèle le forgeron sur son enclume au premier plan ?",
              "options": [
                "Une épée chauffée au rouge",
                "Un fer à cheval pour destrier",
                "Un casque de chevalier (heaume)",
                "Une pointe de lance"
              ],
              "correct": 0,
              "explanation": "Le forgeron tape sur une lame d'épée encore rougeoyante sortie du foyer attisé par le soufflet.",
              "category": "action"
            },
            {
              "id": "q_tou_7",
              "question": "De quelle couleur est le cheval du chevalier arborant les fleurs de lys dorées ?",
              "options": [
                "Blanc",
                "Noir comme l'ébène",
                "Alezan (marron)",
                "Gris pommelé"
              ],
              "correct": 0,
              "explanation": "Le chevalier de gauche monte un beau destrier blanc caparaçonné de rouge et d'or.",
              "category": "color"
            },
            {
              "id": "q_tou_8",
              "question": "Qu'est-ce qui se trouve sous le pont-levis abaissé du château fort ?",
              "options": [
                "Des douves remplies d'eau",
                "Un fossé sec rempli de pieux",
                "Un chemin de terre battue",
                "Une rivière rapide"
              ],
              "correct": 0,
              "explanation": "Les douves en eau protègent les remparts du château contre les assauts et les machines de siège.",
              "category": "detail"
            },
            {
              "id": "q_tou_9",
              "question": "Quelle arme de tournoi tient le chevalier de gauche dans sa main ?",
              "options": [
                "Une lance de joute",
                "Une masse d'armes à pointes",
                "Une arbalète chargée",
                "Une hache à double tranchant"
              ],
              "correct": 0,
              "explanation": "Pour la joute équestre en lice, les chevaliers s'élancent armés d'une lance de bois.",
              "category": "object"
            }
          ]
        },
        {
          "id": "moyen_age_scriptorium",
          "title": "Le scriptorium et les bâtisseurs",
          "subtitle": "L'art du livre et la construction des cathédrales",
          "filename": "moyen_age_scriptorium_artisans.jpg",
          "altFilenames": [
            "moyen_age_scriptorium_artisans.webp",
            "moyen_age_scriptorium_artisans.jpg"
          ],
          "themeColor": "#9C2F3A",
          "intro": "Pénétrez dans le calme du scriptorium d'un monastère donnant sur le grand chantier de la cathédrale.",
          "questions": [
            {
              "id": "q_scr_1",
              "question": "Quel instrument le moine copiste utilise-t-il pour tracer les lettres sur le parchemin ?",
              "options": [
                "Une plume d'oie taillée",
                "Un stylet de fer",
                "Un calame de roseau",
                "Un pinceau à encre"
              ],
              "correct": 0,
              "explanation": "Les moines copistes taillaient des rémiges de plumes d'oie avec leur canif pour calligraphier les textes.",
              "category": "object"
            },
            {
              "id": "q_scr_2",
              "question": "Quelle créature fantastique forme la grande lettrine enluminée sur le manuscrit ?",
              "options": [
                "Un dragon rouge et or",
                "Un griffon ailé",
                "Une licorne blanche",
                "Un lion à ailes d'aigle"
              ],
              "correct": 0,
              "explanation": "La grande lettrine marquant le début du texte prend la forme stylisée d'un dragon enluminé.",
              "category": "detail"
            },
            {
              "id": "q_scr_3",
              "question": "Combien de flacons de pigments en poudre sont alignés sur l'étagère du copiste ?",
              "options": [
                "3 flacons",
                "2 flacons",
                "5 flacons",
                "4 flacons"
              ],
              "correct": 0,
              "explanation": "Trois petits flacons en verre contiennent les pigments minéraux précieux pour les enluminures.",
              "category": "count"
            },
            {
              "id": "q_scr_4",
              "question": "Quel animal fait un somme sous le banc en bois du moine copiste ?",
              "options": [
                "Un chat roux en boule",
                "Un chien de berger",
                "Un furet apprivoisé",
                "Une chouette apprivoisée"
              ],
              "correct": 0,
              "explanation": "Le chat du monastère dort paisiblement à l'abri sous le banc de travail.",
              "category": "detail"
            },
            {
              "id": "q_scr_5",
              "question": "Quel engin en bois à traction humaine permet de hisser les blocs sur la cathédrale ?",
              "options": [
                "Une roue d'écureuil",
                "Un treuil à vapeur",
                "Une rampe de rondins",
                "Une poulie à bascule"
              ],
              "correct": 0,
              "explanation": "La cage ou roue d'écureuil démultiplie la force : un homme marche à l'intérieur pour enrouler la corde.",
              "category": "object"
            },
            {
              "id": "q_scr_6",
              "question": "Quels outils le tailleur de pierre utilise-t-il pour façonner le calcaire ?",
              "options": [
                "Un ciseau en fer et un maillet en bois",
                "Un marteau de forgeron et une tenaille",
                "Une scie égoïne et une lime",
                "Une hachette et des clous"
              ],
              "correct": 0,
              "explanation": "Le maitre tailleur de pierre frappe son ciseau avec un maillet en bois dur pour tailler le bloc.",
              "category": "object"
            },
            {
              "id": "q_scr_7",
              "question": "De quelles couleurs dominantes est la rosace en vitrail qui illumine la pièce ?",
              "options": [
                "Bleu et rouge",
                "Vert et orange",
                "Jaune et noir",
                "Violet et blanc"
              ],
              "correct": 0,
              "explanation": "Les vitraux gothiques médiévaux sont célèbres pour leur bleu profond (bleu de Chartres) et leur rouge vif.",
              "category": "color"
            },
            {
              "id": "q_scr_8",
              "question": "Quel instrument mesure l'écoulement du temps sur l'appui de la fenêtre ?",
              "options": [
                "Un sablier en laiton",
                "Une horloge mécanique à poids",
                "Un cadran solaire de poche",
                "Une bougie graduée"
              ],
              "correct": 0,
              "explanation": "Un sablier en verre monté sur un support en laiton mesure les heures de travail du copiste.",
              "category": "object"
            },
            {
              "id": "q_scr_9",
              "question": "Comment est disposé le support sur lequel le copiste pose son parchemin ?",
              "options": [
                "Un pupitre en chêne incliné",
                "Une table totalement horizontale",
                "Une planche posée sur ses genoux",
                "Un chevalet vertical"
              ],
              "correct": 0,
              "explanation": "Les copistes médiévaux travaillaient sur des pupitres fortement inclinés pour un meilleur écoulement de l'encre.",
              "category": "detail"
            }
          ]
        }
      ]
    },
    {
      "id": "temps_modernes",
      "name": "Les Temps modernes",
      "dates": "De 1492 à 1789 (Révolution française)",
      "badge": "Bleu",
      "color": "#2F6E8F",
      "colorLight": "#F0F6F9",
      "colorBorder": "#1B475E",
      "icon": "⛵",
      "description": "Les Grandes Découvertes maritimes, la Renaissance, l'imprimerie de Gutenberg et la révolution scientifique.",
      "scenes": [
        {
          "id": "temps_modernes_port",
          "title": "Le port des Grandes Découvertes",
          "subtitle": "Vers le Nouveau Monde et les routes des Indes",
          "filename": "temps_modernes_port_caravelle.jpg",
          "altFilenames": [
            "temps_modernes_port_caravelle.webp",
            "temps_modernes_port_caravelle.jpg"
          ],
          "themeColor": "#2F6E8F",
          "intro": "Scrutez le quai animé du port du XVIᵉ siècle : la caravelle, les instruments de navigation, les épices et les trésors exotiques.",
          "questions": [
            {
              "id": "q_por_1",
              "question": "Combien de mâts possède le grand navire (caravelle) amarré le long du quai ?",
              "options": [
                "3 mâts",
                "2 mâts",
                "4 mâts",
                "1 seul mât"
              ],
              "correct": 0,
              "explanation": "Les navires des grandes expéditions, comme les caravelles de Colomb (la Niña et la Pinta), avaient le plus souvent 3 mâts, avec des voiles carrées et latines.",
              "category": "count"
            },
            {
              "id": "q_por_2",
              "question": "Quel symbole peint en rouge apparait au centre des grandes voiles du navire ?",
              "options": [
                "Une grande croix",
                "Une étoile à six branches",
                "Un soleil rayonnant",
                "Une fleur de lys"
              ],
              "correct": 0,
              "explanation": "Les voiles des explorateurs portugais et espagnols portaient souvent la croix de l'Ordre du Christ.",
              "category": "detail"
            },
            {
              "id": "q_por_3",
              "question": "Quel animal exotique d'Amérique est enfermé dans la cage en bambou sur le quai ?",
              "options": [
                "Un toucan",
                "Un perroquet ara multicolore",
                "Un petit singe capucin",
                "Un caméléon vert"
              ],
              "correct": 0,
              "explanation": "Un toucan au bec spectaculaire témoigne des découvertes naturalistes rapportées des forêts tropicales.",
              "category": "detail"
            },
            {
              "id": "q_por_4",
              "question": "Quels instruments scientifiques les savants utilisent-ils pour étudier la carte marine (portulan) ?",
              "options": [
                "Un astrolabe et un compas",
                "Une boussole et un microscope",
                "Un baromètre et une loupe",
                "Une règle graduée et un chronomètre"
              ],
              "correct": 0,
              "explanation": "L'astrolabe et le compas à pointes sèches sont les instruments phares de la navigation astronomique à la Renaissance.",
              "category": "object"
            },
            {
              "id": "q_por_5",
              "question": "Combien de tonneaux sont empilés au sol, devant le navire, près des sacs ?",
              "options": [
                "6 tonneaux",
                "4 tonneaux",
                "5 tonneaux",
                "8 tonneaux"
              ],
              "correct": 0,
              "explanation": "On compte 6 tonneaux : 4 debout au sol et 2 couchés par-dessus. D'autres tonneaux sont soulevés par la grue ou rangés plus loin.",
              "category": "count"
            },
            {
              "id": "q_por_6",
              "question": "Que tient le capitaine debout sur la passerelle du navire pour observer l'horizon ?",
              "options": [
                "Une longue-vue en laiton",
                "Des jumelles modernes",
                "Un sablier de quart",
                "Un pavillon maritime"
              ],
              "correct": 0,
              "explanation": "Le capitaine scrute la mer et les bancs de sable à l'aide de sa longue-vue télescopique en laiton.",
              "category": "object"
            },
            {
              "id": "q_por_7",
              "question": "Qu'est-ce qui s'échappe des sacs de toile de jute posés près des tonneaux ?",
              "options": [
                "Des fèves de cacao",
                "Des épis de maïs",
                "Du sucre roux",
                "Des grains de riz"
              ],
              "correct": 0,
              "explanation": "Des fèves de cacao, rapportées d'Amérique, s'échappent d'un sac percé sur le pavé du port.",
              "category": "object"
            },
            {
              "id": "q_por_8",
              "question": "Combien d'oiseaux marins (mouettes) sont perchés sur la grue du quai ?",
              "options": [
                "2 mouettes",
                "3 mouettes",
                "1 seule mouette",
                "4 mouettes"
              ],
              "correct": 0,
              "explanation": "Deux mouettes blanches et grises observent l'animation portuaire perchées sur le mât de levage.",
              "category": "count"
            },
            {
              "id": "q_por_9",
              "question": "Quel objet lourd en fer rouillé repose contre la borne d'amarrage au tout premier plan ?",
              "options": [
                "Une ancre marine",
                "Un fut de canon",
                "Un treuil en fonte",
                "Une chaine brisée"
              ],
              "correct": 0,
              "explanation": "Une imposante ancre marine en fer forgé à deux pattes repose contre le quai de pierre.",
              "category": "object"
            }
          ]
        },
        {
          "id": "temps_modernes_imprimerie",
          "title": "L'atelier de l'imprimeur et du savant",
          "subtitle": "La diffusion des savoirs et la révolution scientifique",
          "filename": "temps_modernes_imprimerie_sciences.jpg",
          "altFilenames": [
            "temps_modernes_imprimerie_sciences.webp",
            "temps_modernes_imprimerie_sciences.jpg"
          ],
          "themeColor": "#2F6E8F",
          "intro": "Explorez cet atelier de la Renaissance : la presse de Gutenberg, les caractères en plomb, la lunette astronomique et le globe.",
          "questions": [
            {
              "id": "q_imp_1",
              "question": "En quel métal sont fabriqués les caractères mobiles assemblés par le typographe ?",
              "options": [
                "En plomb",
                "En or pur",
                "En fer forgé",
                "En cuivre rouge"
              ],
              "correct": 0,
              "explanation": "L'invention de Gutenberg repose sur un alliage précis à base de plomb, fondant facilement et résistant à la presse.",
              "category": "detail"
            },
            {
              "id": "q_imp_2",
              "question": "Comment sèchent les feuilles de papier fraichement sorties de la presse ?",
              "options": [
                "Suspendues à une corde",
                "Étendues devant un âtre de cheminée",
                "Posées à plat sur des nattes de paille",
                "Ventilées par un soufflet mécanique"
              ],
              "correct": 0,
              "explanation": "Les pages imprimées sont étendues sur des fils tendus dans l'atelier comme du linge, à l'aide de pinces de bois.",
              "category": "action"
            },
            {
              "id": "q_imp_3",
              "question": "Quel instrument d'observation le savant au béret utilise-t-il près de la fenêtre ?",
              "options": [
                "Une lunette astronomique",
                "Un microscope à deux lentilles",
                "Une grosse loupe à manche d'ivoire",
                "Un miroir parabolique"
              ],
              "correct": 0,
              "explanation": "Galilée a révolutionné la science au XVIIᵉ siècle en pointant une lunette astronomique vers le ciel.",
              "category": "object"
            },
            {
              "id": "q_imp_4",
              "question": "Quel objet posé sur la table du savant représente la Terre avec ses continents ?",
              "options": [
                "Un globe terrestre sphérique",
                "Une carte plate dessinée sur vélin",
                "Une maquette en relief",
                "Une boussole magnétique géante"
              ],
              "correct": 0,
              "explanation": "Un grand globe terrestre sur pied permet aux humanistes de visualiser la rotondité de la planète et les nouveaux mondes.",
              "category": "object"
            },
            {
              "id": "q_imp_5",
              "question": "Avec quoi l'artisan applique-t-il l'encre grasse sur la forme typographique ?",
              "options": [
                "Des balles d'encrage en cuir",
                "Un rouleau en caoutchouc moderne",
                "Un pinceau plat en poils de sanglier",
                "Une raclette en bois dur"
              ],
              "correct": 0,
              "explanation": "À cette époque, deux grosses balles en cuir remplies de crin de cheval servaient à tamponner l'encre sur les caractères.",
              "category": "object"
            },
            {
              "id": "q_imp_6",
              "question": "Combien de livres reliés en cuir aux tranches dorées sont empilés sur la table, à côté du globe ?",
              "options": [
                "5 livres",
                "3 livres",
                "2 livres",
                "7 livres"
              ],
              "correct": 0,
              "explanation": "Une pile de 5 beaux volumes in-folio reliés en cuir et dorés à la feuille d'or témoigne du succès de l'édition.",
              "category": "count"
            },
            {
              "id": "q_imp_7",
              "question": "Quel objet d'étude anatomique est exposé sur le meuble vitré de la pièce ?",
              "options": [
                "Un squelette humain articulé",
                "Un cœur conservé dans un bocal",
                "Un modèle d'œil en cire",
                "Un crâne de cheval fossilisé"
              ],
              "correct": 0,
              "explanation": "Avec Vésale (médecin bruxellois célèbre !), la Renaissance redécouvre l'anatomie humaine et la dissection scientifique.",
              "category": "detail"
            },
            {
              "id": "q_imp_8",
              "question": "De quelle matière est fait le tablier protecteur de l'imprimeur ?",
              "options": [
                "En cuir épais",
                "En toile de lin blanche",
                "En grosse laine rugueuse",
                "En soie noire"
              ],
              "correct": 0,
              "explanation": "Pour se protéger de l'encre noire et des frottements de la presse, l'ouvrier porte un robuste tablier de cuir.",
              "category": "detail"
            },
            {
              "id": "q_imp_9",
              "question": "Que contient la boite compartimentée (la casse) dans laquelle puise le typographe ?",
              "options": [
                "Des lettres en métal",
                "Des flacons d'encres de couleur",
                "Des plumes et des calames de rechange",
                "Des vis et des écrous pour la presse"
              ],
              "correct": 0,
              "explanation": "La casse d'imprimerie est un tiroir divisé en casiers : en haut les majuscules (haut-de-casse), en bas les minuscules (bas-de-casse).",
              "category": "object"
            }
          ]
        }
      ]
    },
    {
      "id": "contemporaine",
      "name": "L'Époque contemporaine",
      "dates": "De 1789 à nos jours",
      "badge": "Vert",
      "color": "#3F8C5C",
      "colorLight": "#F0F8F3",
      "colorBorder": "#235D39",
      "icon": "🚀",
      "description": "La Révolution industrielle, le chemin de fer, l'aviation, la conquête spatiale et l'ère numérique.",
      "scenes": [
        {
          "id": "contemporaine_gare",
          "title": "La gare et l'usine au XIXᵉ siècle",
          "subtitle": "La Révolution industrielle et l'essor de la vapeur",
          "filename": "contemporaine_revolution_industrielle.jpg",
          "altFilenames": [
            "contemporaine_revolution_industrielle.webp",
            "contemporaine_revolution_industrielle.jpg"
          ],
          "themeColor": "#3F8C5C",
          "intro": "Plongez dans le tumulte de la gare du XIXᵉ siècle : la locomotive à vapeur, les voyageurs en tenue d'époque, l'horloge et les cheminées.",
          "questions": [
            {
              "id": "q_gar_1",
              "question": "Quelle heure précise indique la grande horloge suspendue sous la verrière de la gare ?",
              "options": [
                "10h10",
                "10h15",
                "11h10",
                "12h00"
              ],
              "correct": 0,
              "explanation": "La grande pendule de gare indique précisément 10 heures et 10 minutes (la petite aiguille sur le 10, la grande sur le 2).",
              "category": "detail"
            },
            {
              "id": "q_gar_2",
              "question": "De quelle couleur est le foulard noué autour du cou du mécanicien de la locomotive ?",
              "options": [
                "Rouge vif",
                "Bleu marine",
                "Blanc",
                "Noir"
              ],
              "correct": 0,
              "explanation": "Le chauffeur/mécanicien, le visage noirci de suie, porte un foulard rouge protecteur contre les escarbilles.",
              "category": "color"
            },
            {
              "id": "q_gar_3",
              "question": "Que tient dans la main le chef de gare vêtu de son uniforme bleu marine ?",
              "options": [
                "Une montre à gousset dorée",
                "Un drapeau vert de départ",
                "Une lanterne à huile",
                "Une pince à billets"
              ],
              "correct": 0,
              "explanation": "Garant de l'exactitude des horaires, le chef de gare consulte sa montre à gousset dorée.",
              "category": "action"
            },
            {
              "id": "q_gar_4",
              "question": "Quelle est la couleur de la robe à crinoline portée par la dame bourgeoise sur le quai ?",
              "options": [
                "Mauve",
                "Jaune d'or",
                "Verte bouteille",
                "Rouge rubis"
              ],
              "correct": 0,
              "explanation": "La voyageuse élégante porte une robe volumineuse à crinoline d'un ton mauve délicat.",
              "category": "color"
            },
            {
              "id": "q_gar_5",
              "question": "Que vend à la criée le jeune garçon coiffé d'une casquette gavroche ?",
              "options": [
                "Des journaux quotidiens",
                "Des marrons chauds",
                "Des bouquets de violettes",
                "Des friandises"
              ],
              "correct": 0,
              "explanation": "Le petit vendeur de presse distribue les feuilles d'actualités aux voyageurs pressés.",
              "category": "action"
            },
            {
              "id": "q_gar_6",
              "question": "Combien de hautes cheminées d'usine en briques rouges crachent de la fumée en arrière-plan ?",
              "options": [
                "3 cheminées",
                "1 seule cheminée",
                "5 cheminées",
                "2 cheminées"
              ],
              "correct": 0,
              "explanation": "Trois grandes cheminées d'usines métallurgiques ou de filatures s'élèvent derrière la verrière de la gare.",
              "category": "count"
            },
            {
              "id": "q_gar_7",
              "question": "Quel chapeau porte le monsieur élégant qui accompagne la dame ?",
              "options": [
                "Un chapeau haut-de-forme noir",
                "Un béret basque",
                "Un chapeau melon marron",
                "Un canotier en paille"
              ],
              "correct": 0,
              "explanation": "Le haut-de-forme en soie noire est le couvre-chef masculin indispensable des bourgeois du XIXᵉ siècle.",
              "category": "object"
            },
            {
              "id": "q_gar_8",
              "question": "Quelles destinations européennes peut-on lire sur les étiquettes de la malle en cuir ?",
              "options": [
                "Bruxelles et Paris",
                "Londres et Berlin",
                "Liège et Namur",
                "Rome et Madrid"
              ],
              "correct": 0,
              "explanation": "La malle porte les étiquettes Bruxelles et Paris. En 1835, la ligne Bruxelles-Malines est la première ligne de chemin de fer à vapeur pour voyageurs du continent européen.",
              "category": "detail"
            },
            {
              "id": "q_gar_9",
              "question": "Quelle source d'énergie nouvelle fait avancer cette majestueuse locomotive ?",
              "options": [
                "La vapeur d'eau",
                "L'électricité des caténaires",
                "Le carburant diesel",
                "L'essence"
              ],
              "correct": 0,
              "explanation": "La machine à vapeur de James Watt, alimentée au charbon (houille), est le moteur central de la Révolution industrielle.",
              "category": "detail"
            }
          ]
        },
        {
          "id": "contemporaine_espace",
          "title": "La salle de contrôle spatiale (1969)",
          "subtitle": "La mission Apollo 11 et les premiers pas sur la Lune",
          "filename": "contemporaine_conquete_spatiale.jpg",
          "altFilenames": [
            "contemporaine_conquete_spatiale.webp",
            "contemporaine_conquete_spatiale.jpg"
          ],
          "themeColor": "#3F8C5C",
          "intro": "Observez la salle de contrôle de mission : les consoles, les bandes magnétiques, l'écran géant, les ordinateurs et les ingénieurs.",
          "questions": [
            {
              "id": "q_esp_1",
              "question": "Quel appareil de communication d'urgence rouge vif est posé sur la console centrale ?",
              "options": [
                "Un téléphone à cadran rotatif",
                "Un bouton d'alarme poussoir",
                "Un talkie-walkie portable",
                "Un mégaphone de secours"
              ],
              "correct": 0,
              "explanation": "Le fameux téléphone rouge de liaison directe d'urgence est muni d'un cadran téléphonique rotatif.",
              "category": "object"
            },
            {
              "id": "q_esp_2",
              "question": "De quelle couleur sont les caractères et chiffres qui s'affichent sur l'écran cathodique monochrome ?",
              "options": [
                "Vert phosphorescent",
                "Bleu turquoise",
                "Blanc éclatant",
                "Ambre orangé"
              ],
              "correct": 0,
              "explanation": "Les premiers écrans d'ordinateurs des années 60 et 70 affichaient le texte avec du phosphore vert vif.",
              "category": "color"
            },
            {
              "id": "q_esp_3",
              "question": "Quelle célèbre maquette de fusée blanche et noire est exposée sur le meuble de côté ?",
              "options": [
                "La fusée géante Saturn V",
                "La navette spatiale Challenger",
                "La station spatiale internationale (ISS)",
                "La capsule soviétique Vostok"
              ],
              "correct": 0,
              "explanation": "La fusée Saturn V, haute de 110 mètres, est le lanceur spatial qui a permis aux astronautes d'atteindre la Lune.",
              "category": "object"
            },
            {
              "id": "q_esp_4",
              "question": "Que porte le directeur de vol sur les oreilles pour communiquer avec l'équipage dans l'espace ?",
              "options": [
                "Un casque audio avec micro articulé",
                "De petites oreillettes sans fil",
                "Un cornet acoustique",
                "Rien, il utilise un haut-parleur mural"
              ],
              "correct": 0,
              "explanation": "Le contrôleur de vol porte un casque-micro arceau classique relié par câble à sa console radio.",
              "category": "object"
            },
            {
              "id": "q_esp_5",
              "question": "Que voit-on tracé sur l'écran géant panoramique fixé au mur du fond ?",
              "options": [
                "Le trajet de la Terre à la Lune",
                "Le bulletin météo de Floride",
                "Le plan détaillé du module lunaire",
                "Une vue en direct des étoiles"
              ],
              "correct": 0,
              "explanation": "Une trajectoire tracée sur le grand écran relie la Terre (bille bleue) à la Lune (cercle gris).",
              "category": "detail"
            },
            {
              "id": "q_esp_6",
              "question": "Quel support mécanique les armoires informatiques utilisent-elles pour enregistrer les données ?",
              "options": [
                "Des bobines de bandes magnétiques",
                "Des clés USB miniatures",
                "Des disques durs en silicium",
                "Des disquettes souples 3,5 pouces"
              ],
              "correct": 0,
              "explanation": "Dans les années 1960, les ordinateurs centraux (mainframes) stockaient leurs données sur de volumineuses bobines de bandes magnétiques.",
              "category": "object"
            },
            {
              "id": "q_esp_7",
              "question": "Quel instrument circulaire à quadrillage vert est incrusté au centre de la console du directeur ?",
              "options": [
                "Un écran radar rond",
                "Une boussole marine à cadran",
                "Un tachymètre de vitesse",
                "Une horloge analogique"
              ],
              "correct": 0,
              "explanation": "La console centrale comporte un écran radar/oscilloscope circulaire à balayage vert pour surveiller les signaux de télémesure.",
              "category": "detail"
            },
            {
              "id": "q_esp_8",
              "question": "Comment sont habillés la quasi-totalité des ingénieurs et techniciens de la salle ?",
              "options": [
                "En chemise blanche à manches courtes",
                "En combinaison de vol bleue",
                "En blouse blanche de chimiste",
                "En polo et casquette"
              ],
              "correct": 0,
              "explanation": "La tenue emblématique des équipes au sol de la NASA lors du programme Apollo était la chemise blanche et la fine cravate noire.",
              "category": "detail"
            },
            {
              "id": "q_esp_9",
              "question": "De quelle couleur sont les chiffres lumineux du décompte temporel affiché sur le mur ?",
              "options": [
                "Rouges",
                "Jaunes ambrés",
                "Verts",
                "Blancs"
              ],
              "correct": 0,
              "explanation": "L'horloge de compte à rebours de mission (T-minus) affiche ses secondes en gros chiffres numériques rouges.",
              "category": "color"
            }
          ]
        }
      ]
    }
  ]
};
