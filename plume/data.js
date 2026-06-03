const CYCLE_DATA = {
  A: [
    {
      id: "A1",
      title: "La fiche d'identité d'une créature imaginaire",
      intention: "Informer",
      textType: "Descriptive",
      objective: "Décrire un animal fantastique avec précision en utilisant des adjectifs variés et des groupes nominaux expansés.",
      modelText: "Le Grissom des Neiges est une petite créature poilue qui vit sur les sommets glacés des Ardennes belges. Mesurant à peine trente centimètres, il possède une fourrure blanche comme le givre et de grands yeux turquoise qui brillent dans la nuit polaire. Ses oreilles pointues et mobiles lui permettent d'entendre le moindre craquement de branche sous la neige. Il est doté de quatre pattes agiles terminées par des griffes rétractiles en forme d'aiguilles de pin. Cet animal farouche se nourrit exclusivement de baies de genévrier sauvages et de lichen gelé qu'il gratte sous la glace épaisse.",
      vocabulary: ["Farouche", "Givre", "Cristallin", "Rétractile", "Agile", "Sommets glacés", "Épaisse", "turquoise", "Azur", "Touffu"],
      grammarRule: "Le Groupe Nominal (GN) expansé : Un nom peut être enrichi par un adjectif qualificatif épithète (ex: la *glace épaisse*) ou par un complément du nom (ex: le *Grissom des neiges*). Veille à bien accorder les adjectifs en genre et en nombre avec le nom qu'ils qualifient !",
      planningPrompt: "Dessine ta créature au brouillon et liste 3 caractéristiques physiques principales (taille/couleur, pelage/peau, yeux/oreilles) ainsi que son alimentation.",
      writingPrompt: "Rédige une fiche descriptive de ta créature (10 à 12 lignes). Présente sa taille, son apparence, ses membres, son habitat et sa nourriture. Pense à utiliser des adjectifs colorés !",
      successCriteria: [
        "J'ai décrit au moins 3 aspects physiques différents de ma créature.",
        "J'ai utilisé au moins 4 adjectifs qualificatifs précis.",
        "J'ai enrichi au moins 2 noms avec des compléments du nom (ex: de la forêt, en bois).",
        "J'ai vérifié les accords en genre et en nombre dans tous mes groupes nominaux."
      ]
    },
    {
      id: "A2",
      title: "Le compte-rendu d'une expérience scientifique",
      intention: "Informer",
      textType: "Explicative",
      objective: "Expliquer les étapes d'un phénomène scientifique en utilisant des connecteurs de cause et de conséquence.",
      modelText: "Pour fabriquer un volcan miniature en classe, nous avons d'abord versé deux cuillères de bicarbonate de soude au fond d'un gobelet en plastique. Ensuite, nous y avons ajouté quelques gouttes de colorant alimentaire rouge afin de simuler la couleur de la lave. Enfin, nous avons versé un demi-verre de vinaigre blanc sur le mélange. Immédiatement, une réaction chimique s'est produite. En effet, le vinaigre a réagi avec le bicarbonate, ce qui a provoqué une libération rapide de gaz carbonique. Par conséquent, une mousse rouge et pétillante a jailli hors du gobelet, imitant parfaitement une éruption volcanique.",
      vocabulary: ["Observer", "Réaction chimique", "Provoquer", "Jaillir", "Simuler", "Par conséquent", "En effet", "D'abord", "Ensuite", "Enfin"],
      grammarRule: "Les connecteurs logiques de cause et conséquence : Utilise 'car', 'en effet' ou 'parce que' pour donner la cause (la raison). Utilise 'par conséquent', 'donc' ou 'c'est pourquoi' pour exprimer la conséquence (le résultat).",
      planningPrompt: "Écris dans l'ordre les 3 actions principales faites durant l'expérience et le résultat observé.",
      writingPrompt: "Rédige le compte-rendu d'une expérience vécue ou imaginaire (ex: l'œuf qui flotte, l'encre invisible) en 10 lignes. Utilise obligatoirement des connecteurs chronologiques et logiques.",
      successCriteria: [
        "J'ai respecté l'ordre chronologique de l'expérience.",
        "J'ai utilisé au moins 2 connecteurs de cause (ex: car, parce que).",
        "J'ai utilisé au moins 2 connecteurs de conséquence (ex: donc, par conséquent).",
        "Toutes mes phrases commencent par une majuscule et se terminent par un point."
      ]
    },
    {
      id: "A3",
      title: "Le haïku et le cadavre exquis poétique",
      intention: "Donner du plaisir / Susciter des émotions",
      textType: "Poétique",
      objective: "Rédiger des poèmes très courts en respectant des contraintes de rythme, de rimes ou de syllabes.",
      modelText: "Un vent frais d'automne (5 syllabes)\nFait danser les feuilles d'or (7 syllabes)\nLe grand bois s'endort (5 syllabes)\n\n---\n\nLe chat argenté (Sujet + Adjectif)\nChante une douce mélodie (Verbe + COD)\nDans le jardin endormi (Complément de lieu)",
      vocabulary: ["Frémir", "Murmure", "S'envoler", "Lumière dorée", "Silencieux", "Brise", "Nostalgie", "Douceur", "Éphémère", "Crépuscule"],
      grammarRule: "Le Haïku : C'est un petit poème japonais de 3 lignes qui célèbre la nature. Il suit un rythme précis de 5, 7 et 5 syllabes. Attention à la coupe des syllabes, notamment les 'e' muets en fin de mot qui ne comptent pas s'ils sont suivis d'une voyelle !",
      planningPrompt: "Choisis une saison et liste 4 mots évoquant les couleurs, les bruits ou le vent associés à cette saison.",
      writingPrompt: "Écris deux haïkus sur le thème du temps qui passe ou de la nature (3 lignes chacun, 5-7-5 syllabes), puis crée un court poème absurde en suivant la structure : Qui ? Fait quoi ? Où ? Comment ?",
      successCriteria: [
        "J'ai écrit deux haïkus de 3 lignes respectant la structure de syllabes.",
        "Chaque poème évoque une image ou une émotion liée à la nature.",
        "J'ai vérifié que chaque ligne commence par une majuscule.",
        "J'ai soigné les accords grammaticaux dans mes vers poétiques."
      ]
    },
    {
      id: "A4",
      title: "La suite d'un récit (l'événement perturbateur)",
      intention: "Donner du plaisir / Susciter des émotions",
      textType: "Narrative",
      objective: "Écrire une suite d'histoire cohérente en utilisant correctement l'imparfait et le passé simple de l'indicatif.",
      modelText: "Lucas marchait tranquillement le long du sentier forestier. Les oiseaux chantaient doucement et le soleil filtrait à travers les branches des vieux chênes. Le garçon se sentait parfaitement heureux et serein. Soudain, un craquement sinistre retentit derrière un buisson. Lucas s'arrêta net, le cœur battant. Une ombre gigantesque surgit de la pénombre et lui barra le chemin. Le garçon poussa un cri de surprise, fit un pas de côté et glissa sur une racine moussue.",
      vocabulary: ["Soudain", "Tout à coup", "Brusquement", "Surgir", "S'arrêter net", "Effroi", "Retentir", "Inquiétant", "Pénombre", "Serein"],
      grammarRule: "Imparfait vs Passé Simple : Utilise l'imparfait pour le décor, les actions longues ou habituelles (ex: *marchait*, *chantaient*). Utilise le passé simple pour les actions soudaines, délimitées dans le temps, qui font avancer l'histoire (ex: *retentit*, *surgit*, *poussa*).",
      planningPrompt: "Qui est le héros ? Que faisait-il au début ? Quel élément inattendu arrive tout à coup ? Quelle est sa première réaction ?",
      writingPrompt: "Lis le début de l'histoire (texte modèle) et rédige la suite immédiate de la scène (10 lignes maximum). Ton texte doit raconter l'événement perturbateur en utilisant le passé simple pour les actions principales.",
      successCriteria: [
        "J'ai respecté l'univers et le personnage de départ (Lucas).",
        "J'ai utilisé l'imparfait pour décrire la situation de départ ou le décor.",
        "J'ai utilisé au moins 4 verbes au passé simple pour les actions soudaines.",
        "Mon texte ne dépasse pas 12 lignes."
      ]
    },
    {
      id: "A5",
      title: "La critique de livre ou de film pour la classe",
      intention: "Persuader",
      textType: "Argumentative",
      objective: "Donner un avis argumenté sur une œuvre lue ou vue en utilisant des verbes d'opinion et des adjectifs appréciatifs.",
      modelText: "Je vous conseille vivement de lire le roman 'Le Secret du Vieux Moulin'. À mon avis, c'est une histoire captivante car le suspense est présent à chaque page. De plus, je trouve que les personnages sont très attachants, en particulier la jeune Clara qui fait preuve d'un grand courage. Néanmoins, je regrette que la fin soit un peu trop rapide et prévisible. En conclusion, je donne à ce livre la note de quatre étoiles sur temps de repos car il m'a fait passer un excellent moment d'évasion.",
      vocabulary: ["À mon avis", "Selon moi", "Je trouve que", "Captivant", "Ennuyeux", "Attachant", "Néanmoins", "Recommander", "Conseiller", "En conclusion"],
      grammarRule: "Exprimer une opinion : Introduis tes arguments avec des verbes ou des expressions d'opinion (ex: *je pense que*, *selon moi*, *à mon sens*). Utilise des adjectifs mélioratifs (positifs: *palpitant, touchant*) ou péjoratifs (négatifs: *lent, décevant*) pour nuancer ton avis.",
      planningPrompt: "Choisis un livre ou un film récent. Trouve 2 aspects positifs et 1 aspect négatif à justifier.",
      writingPrompt: "Écris une courte critique (8 à 10 lignes) pour le journal de la classe. Donne ton avis général, propose deux arguments solides illustrés par des exemples et conclus en disant à qui ce livre s'adresse.",
      successCriteria: [
        "J'ai clairement exprimé mon opinion dès le début du texte.",
        "J'ai fourni au moins 2 arguments différents pour justifier mon avis.",
        "J'ai utilisé des connecteurs logiques pour lier mes arguments (ex: de plus, cependant).",
        "J'ai utilisé un vocabulaire appréciatif riche et varié."
      ]
    },
    {
      id: "A6",
      title: "Le slogan et le manifeste écologique de l'école",
      intention: "Persuader",
      textType: "Argumentative",
      objective: "Rédiger un appel à l'action court et percutant en utilisant des phrases déclaratives fortes et exclamatives.",
      modelText: "Notre planète Terre est en danger ! Chaque jour, des tonnes de déchets en plastique polluent nos magnifiques forêts et nos rivières sauvages. Ce désastre doit cesser immédiatement. Ensemble, nous avons le pouvoir de changer les choses. Trions nos déchets, économisons l'eau et plantons des arbres dans notre cour de récréation ! Il n'y a pas de petits gestes quand nous sommes des milliers à agir. Protégeons notre avenir dès aujourd'hui !",
      vocabulary: ["Protéger", "Polluer", "Avenir", "Préservation", "Désastre", "Gaspillage", "Ensemble", "Agir", "Urgence", "Mobilisation"],
      grammarRule: "Les types de phrases pour convaincre : Utilise des phrases déclaratives pour énoncer des faits réels et graves (ex: *la planète est en danger*). Utilise des phrases exclamatives pour transmettre de l'émotion et de l'énergie (ex: *ce désastre doit cesser !*). Utilise l'impératif pour inciter à l'action.",
      planningPrompt: "Quelle est la cause écologique choisie (les déchets, l'eau, les abeilles) ? Liste 3 actions simples que l'on peut faire à l'école.",
      writingPrompt: "Rédige un court manifeste écologique pour la cour d'école (8 lignes maximum). Il doit commencer par un constat fort et se terminer par un slogan mobilisateur.",
      successCriteria: [
        "Mon texte commence par un constat marquant sur l'environnement.",
        "J'ai utilisé au moins une phrase exclamative pour marquer l'émotion.",
        "J'ai inséré au moins 3 verbes d'action à l'impératif (ex: trions, réduisons).",
        "Mon slogan final est court, percutant et facile à retenir."
      ]
    },
    {
      id: "A7",
      title: "La recette de potion magique",
      intention: "Enjoindre",
      textType: "Prescriptive",
      objective: "Donner des instructions de manière claire et ordonnée en utilisant l'impératif présent ou l'infinitif.",
      modelText: "Pour préparer la potion de clairvoyance, suivez attentivement ces étapes. D'abord, versez deux tasses de rosée matinale dans un chaudron de cuivre bien propre. Ensuite, ajoutez trois pétales de rose séchés et remuez doucement pendant une minute. Puis, jetez une pincée de poudre de lune scintillante tout en prononçant la formule magique. Laissez mijoter à feu doux jusqu'à ce que le liquide devienne bleu turquoise. Enfin, filtrez le breuvage et versez-le dans une fiole de verre.",
      vocabulary: ["Verser", "Ajouter", "Remuer", "Laisser mijoter", "Filtrez", "Chaudron", "Fiole", "Une pincée", "Rosée matinale", "Scintillant"],
      grammarRule: "L'infinitif ou l'impératif pour donner des consignes : Une consigne s'écrit soit à l'infinitif (ex: *verser la poudre*), soit à l'impératif présent (ex: *versez la poudre*). Veille à ne pas mélanger ces deux formes dans un même texte ! Rappel impératif (2e personne du pluriel) : terminaison en *-ez*.",
      planningPrompt: "Quel effet a ta potion (voler, devenir invisible, réussir ses examens) ? Liste 3 ingrédients bizarres et 4 verbes d'action culinaire.",
      writingPrompt: "Écris la recette de ta potion fantastique en 10 lignes. Utilise des connecteurs temporels pour structurer les étapes et rédige toutes tes consignes à la deuxième personne du pluriel de l'impératif présent.",
      successCriteria: [
        "J'ai utilisé l'impératif présent à la 2e personne du pluriel pour toutes mes étapes.",
        "J'ai structuré mes étapes à l'aide de connecteurs temporels (d'abord, ensuite, puis, enfin).",
        "J'ai choisi un vocabulaire magique et imagé.",
        "Toutes mes formes de verbes à l'impératif se terminent par -ez."
      ]
    },
    {
      id: "A8",
      title: "La charte des droits et devoirs du récré-acteur",
      intention: "Enjoindre",
      textType: "Prescriptive",
      objective: "Rédiger des règles de vie claires en utilisant la négation et les verbes de devoir et pouvoir.",
      modelText: "Afin de garantir une récréation agréable pour tous, chaque élève doit respecter cette charte. Tout d'abord, vous pouvez utiliser les jeux en bois, mais vous devez les ranger après usage. De plus, il est strictement interdit de courir sous le préau pour éviter les collisions. Vous ne devez pas jeter vos papiers par terre : des poubelles sont à votre disposition. Enfin, chacun peut exprimer son désaccord, mais personne ne doit employer de mots blessants.",
      vocabulary: ["Respecter", "Garantir", "Usage", "Collision", "Désaccord", "Strictement interdit", "Être autorisé à", "Devoir", "Pouvoir", "Bienveillance"],
      grammarRule: "Devoir, Pouvoir et la négation : Pour exprimer une obligation, on utilise le verbe *devoir* (ex: *tu dois écouter*). Pour une autorisation, on utilise *pouvoir* (ex: *tu peux jouer*). Pour l'interdiction, on emploie la négation (*ne... pas*, *ne... jamais*, *ne... plus*). Attention à bien placer le 'ne' devant le verbe !",
      planningPrompt: "Pense à 2 droits importants dans la cour (ex: jouer à ce qu'on veut) et 2 devoirs (ex: ne pas exclure les autres).",
      writingPrompt: "Rédige une charte de 5 règles courtes pour la cour de récréation. Varie l'expression de l'obligation, de l'autorisation et de l'interdiction en faisant attention à l'orthographe des négations.",
      successCriteria: [
        "J'ai rédigé 5 règles claires et compréhensibles.",
        "J'ai utilisé au moins 2 fois le verbe 'devoir' et 2 fois le verbe 'pouvoir'.",
        "J'ai utilisé des structures de négation correctes (ne... pas, ne... plus).",
        "J'ai veillé à ce que mon ton reste positif et respectueux."
      ]
    }
  ],
  B: [
    {
      id: "B1",
      title: "L'article de dictionnaire insolite",
      intention: "Informer",
      textType: "Explicative",
      objective: "Rédiger une définition explicative humoristique d'un mot inventé en respectant la mise en page d'un dictionnaire.",
      modelText: "**CRAYONOPHAGE** n.m. (du latin *crayono*, outil d'écriture, et du grec *phagein*, manger). Petit monstre invisible et farceur qui habite exclusivement au fond des plumiers d'écoles primaires. \n**Famille de mots :** Crayonophagie (action de dévorer les gommes), crayonophager (verbe).\n**Explication :** La nuit, le crayonophage profite du silence de la classe pour grignoter les mines de crayons et mâchouiller les gommes des élèves. C'est pourquoi, le matin, les enfants retrouvent souvent leurs crayons cassés ou disparus. Pour s'en protéger, il suffit de glisser une petite feuille de menthe fraîche dans son plumier.",
      vocabulary: ["Plumier", "Farceur", "Grignoter", "Mâchouiller", "Mystérieux", "Étymologie", "Inoffensif", "Protection", "Invisible", "Alimentation"],
      grammarRule: "Dérivation et familles de mots (P6) : À partir d'un radical simple, on peut former de nouveaux mots en y ajoutant des préfixes (devant le mot: *im-possible, re-commencer*) ou des suffixes (après: *crayon-ophage, crayon-age*). Veille à garder l'orthographe du radical d'origine !",
      planningPrompt: "Invente un nom rigolo en combinant deux mots (ex: cartablosaure, bavardophone) et imagine ce qu'il signifie.",
      writingPrompt: "Rédige l'article de dictionnaire de ton mot inventé. Indique sa nature grammaticale (n.m., n.f., adj.), son étymologie imaginaire, sa définition précise et donne un conseil amusant pour s'en prémunir.",
      successCriteria: [
        "J'ai respecté la forme stricte d'un article de dictionnaire (nature, genre, définition).",
        "J'ai créé une famille de mots logique à partir de mon mot inventé (nom, verbe, adj).",
        "Mon explication utilise un ton neutre et scientifique, même si le sujet est drôle.",
        "J'ai soigné l'orthographe d'usage en vérifiant les mots compliqués."
      ]
    },
    {
      id: "B2",
      title: "Le fait divers journalistique",
      intention: "Informer",
      textType: "Narrative",
      objective: "Rédiger un court article de journal relatant un événement insolite en répondant aux 5 questions de référence (Qui ? Quoi ? Où ? Quand ? Pourquoi ?).",
      modelText: "Hier matin, vers huit heures, une scène insolite a paralysé le centre-ville de Namur. En effet, un lama rebelle s'est échappé d'un cirque voisin et s'est installé au beau milieu de la place de l'Ange, refusant obstinément de bouger. Les policiers, alertés par des passants surpris, ont dû intervenir. Après plusieurs tentatives infructueuses, c'est finalement un boulanger du quartier qui a réussi à amadouer l'animal en lui offrant un morceau de tarte au riz locale. Le lama a ensuite été raccompagné dans son enclos sain et sauf, sous les applaudissements des badauds amusés.",
      vocabulary: ["Insolite", "Paralyser", "Amadouer", "Badauds", "Intervenir", "Échapper", "Tentative", "Infructueux", "Obstinément", "Alerter"],
      grammarRule: "Le Passé Composé et l'Imparfait dans le récit : Utilise le passé composé pour raconter les actions précises et achevées du fait divers (ex: *un lama s'est échappé*, *les policiers ont dû intervenir*). Utilise l'imparfait pour donner des circonstances (ex: *le ciel était gris, le lama refusait d'avancer*).",
      planningPrompt: "Remplis les 5 questions : Qui ? Quoi (l'action) ? Quand (date/heure) ? Où (ville/lieu) ? Comment/Pourquoi ?",
      writingPrompt: "Écris un fait divers insolite de 10 à 12 lignes destiné à un journal local. Raconte l'événement en utilisant le passé composé et l'imparfait, et donne-lui un titre accrocheur.",
      successCriteria: [
        "J'ai trouvé un titre accrocheur en lettres capitales.",
        "Mon texte répond clairement aux questions : Qui, Quoi, Quand, Où, Pourquoi.",
        "J'ai correctement employé le passé composé pour les actions de l'histoire.",
        "J'ai vérifié les accords des participes passés avec l'auxiliaire être et avoir."
      ]
    },
    {
      id: "B3",
      title: "Le portrait express d'un personnage mystère",
      intention: "Donner du plaisir / Susciter des émotions",
      textType: "Descriptive",
      objective: "Rédiger le portrait d'un personnage mystérieux en utilisant des images poétiques (métaphores, comparaisons) et des adjectifs de caractère.",
      modelText: "L'inconnu qui venait d'entrer dans la taverne était un vieil homme singulier. Ses cheveux blancs, semblables à de la laine de mouton ébouriffée, couronnaient un visage sculpté par le vent marin. Ses yeux noirs, véritables éclats de charbon brillant dans l'ombre, fixaient l'assemblée avec une intensité dérangeante. Il portait un long manteau de velours sombre, usé jusqu'à la corde, qui flottait autour de lui comme les ailes d'un corbeau fatigué. Malgré sa silhouette voûtée, il se dégageait de cet homme une fierté sauvage et un mystère que personne n'osait percer.",
      vocabulary: ["Singulier", "Ébouriffé", "Silhouette", "Intensité", "Voûté", "Dérangeant", "Velours", "Scuplté", "Fierté", "Mystérieux"],
      grammarRule: "Les figures de style (Comparaisons et Métaphores) : La comparaison relie deux idées avec un mot de comparaison (ex: *ses cheveux blancs comme de la laine*). La métaphore fait le lien directement, sans mot de comparaison (ex: *ses yeux, véritables éclats de charbon*). Utilise-les pour rendre tes descriptions plus littéraires.",
      planningPrompt: "Imagine un personnage mystère (un détective fatigué, une sorcière moderne, un inventeur distrait). Trouve 2 comparaisons physiques et 2 traits de son caractère.",
      writingPrompt: "Écris le portrait physique et moral de ce personnage (10 lignes) sans révéler son identité exacte. Ton texte doit faire ressentir une atmosphère et intégrer au moins une comparaison et une métaphore.",
      successCriteria: [
        "J'ai décrit à la fois le physique et l'attitude (le moral) de mon personnage.",
        "J'ai intégré au moins 1 comparaison et 1 métaphore bien trouvées.",
        "J'ai utilisé un lexique riche et évocateur pour créer une ambiance.",
        "J'ai fait attention à l'accord des adjectifs de couleur et des adjectifs composés."
      ]
    },
    {
      id: "B4",
      title: "Le dialogue de sourds humoristique",
      intention: "Donner du plaisir / Susciter des émotions",
      textType: "Dialoguée",
      objective: "Écrire un dialogue de théâtre ou de récit drôle en appliquant rigoureusement les règles typographiques du dialogue.",
      modelText: "Le professeur Distrait entra dans la boutique de chapeaux de monsieur Bonnet. \n— Bonjour monsieur ! Je cherche un parapluie rouge pour ma tante, déclara le professeur. \n— Un chat de nuit ? répondit le chapelier, sourcils froncés. Mais nous ne vendons pas d'animaux ici, cher monsieur !\n— Pas des animaux, des parapluies ! s'époumona le visiteur en agitant ses bras. \n— Ah, des raviolis ! s'exclama le commerçant avec un grand sourire. C'est en face, chez le traiteur italien ! \nLe professeur soupira, comprenant que la conversation allait être difficile.",
      vocabulary: ["S'exclamer", "Chuchoter", "S'époumoner", "Grommeler", "Répliquer", "Dialogue de sourds", "Quiproquo", "Incompréhension", "Bredouiller", "Soupirer"],
      grammarRule: "La ponctuation du dialogue : Dans un récit, on ouvre le dialogue avec des guillemets (ou directement avec un tiret). Chaque changement de parole est indiqué par un tiret (—). On place des incises de dialogue (ex: *dit-il*, *s'exclama le commerçant*) pour préciser qui parle et comment. Les verbes de parole doivent être variés (*répliquer, chuchoter, grommeler* au lieu de *dire*).",
      planningPrompt: "Imagine deux personnages : l'un est très sourd ou comprend tout de travers, l'autre essaie d'acheter un objet simple (un pain, un livre, un ticket). Écris le quiproquo de départ.",
      writingPrompt: "Rédige un dialogue amusant (12 lignes maximum) entre tes deux personnages. Veille à bien structurer le texte avec la ponctuation adéquate et à utiliser des verbes de parole expressifs.",
      successCriteria: [
        "J'ai utilisé la typographie correcte du dialogue (tirets à chaque réplique).",
        "J'ai intégré au moins 4 verbes de parole différents (ex: grommeler, répliquer).",
        "Le dialogue crée un effet comique clair (quiproquo).",
        "Chaque phrase se termine par le signe de ponctuation qui convient (. ! ?)."
      ]
    },
    {
      id: "B5",
      title: "La lettre de négociation formelle (au directeur)",
      intention: "Persuader",
      textType: "Argumentative",
      objective: "Rédiger une lettre respectueuse et formelle pour demander une autorisation en utilisant des arguments polis et le conditionnel présent.",
      modelText: "Monsieur le Directeur,\n\nNous nous permettons de vous écrire afin de solliciter l'autorisation d'aménager un coin lecture dans la cour de récréation. \nEn effet, nous aimerions pouvoir lire au calme durant les temps de pause. De plus, ce projet permettrait de prendre soin des livres de la bibliothèque de l'école. Si vous acceptiez notre demande, nous nous engagerions à fabriquer nous-mêmes des caisses en bois de récupération et à ranger les livres chaque soir. \n\nDans l'attente de votre réponse, nous vous prions d'agréer, Monsieur le Directeur, nos salutations respectueuses. \n\nLes élèves de P6",
      vocabulary: ["Solliciter", "Autorisation", "Aménager", "Récupération", "Engagement", "Dans l'attente de", "Je vous prie d'agréer", "Salutations respectueuses", "Cordialement", "Permettre"],
      grammarRule: "Le Conditionnel Présent (P6) : Le conditionnel exprime un souhait, une demande polie ou une hypothèse. Il se forme à partir du radical du futur simple auquel on ajoute les terminaisons de l'imparfait (*-ais, -ais, -ait, -ions, -iez, -aient*). Ex : *nous aimerions, vous pourriez*. Ne pas confondre avec le futur simple (pas de 's' à la 1e personne du singulier: *je lirai* fut. vs *je lirais* cond.) !",
      planningPrompt: "Quel droit ou projet veux-tu négocier (ex: une journée en pyjama, un tournoi de football) ? Trouve 2 arguments bénéfiques pour toute l'école.",
      writingPrompt: "Écris une lettre formelle adressée au directeur ou à la directrice de ton école (12 lignes max). Rédige ta demande avec politesse en utilisant le conditionnel présent et les formules de politesse épistolaires usuelles.",
      successCriteria: [
        "J'ai structuré ma lettre correctement (destinataire, formule de politesse finale).",
        "J'ai utilisé au moins 3 verbes au conditionnel présent pour adoucir ma demande.",
        "J'ai formulé 2 arguments logiques qui profitent au collectif.",
        "J'ai évité le langage familier et soigné mon niveau de langue (soutenu)."
      ]
    },
    {
      id: "B6",
      title: "Le plaidoyer pour un métier imaginaire",
      intention: "Persuader",
      textType: "Argumentative",
      objective: "Rédiger un texte pour valoriser un métier inventé et convaincre l'auditoire de son importance vitale pour la société.",
      modelText: "Le métier de 'Chasseur de nuages sombres' est sans aucun doute le plus noble et le plus indispensable de notre époque. Sans ces professionnels courageux, notre région serait plongée dans une tristesse pluvieuse permanente. En effet, grâce à leur grand aspirateur à brume, ils nettoient le ciel chaque matin afin de laisser passer les rayons du soleil. De plus, ils transforment la pluie capturée en eau potable pour nos jardins. Il est donc évident que ce métier mérite d'être valorisé, car il apporte de la lumière et du bonheur à chacun d'entre nous.",
      vocabulary: ["Indispensable", "Valoriser", "Plaidoyer", "Capturer", "Il est évident que", "Sans aucun doute", "Noble", "Utilité publique", "Transformer", "Bienfait"],
      grammarRule: "La proposition subordonnée conjonctive de cause (P6) : Elle est introduite par des conjonctions comme *parce que, puisque, comme* ou *étant donné que*. Elle permet d'expliquer la cause avec précision (ex: *ce métier est important car il apporte du bonheur* ou *puisqu'il nettoie le ciel, il mérite d'être valorisé*).",
      planningPrompt: "Invente un métier loufoque (ex: rangeur d'étoiles, traducteur de miaulements). Pourquoi est-il indispensable au monde ? Liste 2 bienfaits.",
      writingPrompt: "Écris un plaidoyer (8 à 10 lignes) pour défendre ton métier imaginaire. Utilise des adjectifs valorisants et des structures de cause complexes pour convaincre que ce travail est de première nécessité.",
      successCriteria: [
        "J'ai clairement présenté le rôle de mon métier imaginaire.",
        "J'ai apporté au moins 2 arguments montrant son utilité pour la société.",
        "J'ai inséré au moins une proposition subordonnée introduite par 'puisque' ou 'étant donné que'.",
        "Mon vocabulaire est positif, dynamique et valorisant."
      ]
    },
    {
      id: "B7",
      title: "Le guide de survie du futur élève de P5 (pour les P4)",
      intention: "Enjoindre",
      textType: "Prescriptive",
      objective: "Rédiger une liste de conseils pratiques et d'encouragements destinés aux plus jeunes en variant les structures injonctives.",
      modelText: "Chers camarades de P4, l'année prochaine, vous entrerez en P5. Pour réussir cette transition sans stress, voici quelques règles d'or. Tout d'abord, veillez à préparer votre cartable la veille afin d'éviter les retards matinaux. De plus, n'hésitez jamais à poser des questions au professeur lorsque vous ne comprenez pas un exercice : il est là pour vous aider. Ne remettez pas votre travail au lendemain, car les leçons demandent plus de régularité. Enfin, restez soudés entre vous et respectez chacun. Bon travail à tous !",
      vocabulary: ["Réussir", "Transition", "Régularité", "Règle d'or", "N'hésitez pas", "Veiller à", "Poser des questions", "Soudés", "N'oubliez pas", "S'organiser"],
      grammarRule: "Varier l'injonction (P6) : Pour donner un conseil ou une consigne, tu peux utiliser l'impératif présent (ex: *veillez à*), l'infinitif (ex: *éviter les retards*), ou des structures verbales avec 'devoir' ou 'falloir' (ex: *il faut préparer son cartable*). Varie ces formes pour rendre ton texte plus fluide et moins répétitif.",
      planningPrompt: "Pense à ton entrée en P5. Quelles erreurs aurais-tu voulu éviter ? Donne 3 conseils d'organisation ou de comportement.",
      writingPrompt: "Rédige un guide de survie de 8 à 10 lignes à l'attention des P4. Adresse-toi directement à eux avec bienveillance en variant les formes injonctives.",
      successCriteria: [
        "Je me suis adressé directement aux élèves de P4 en utilisant la deuxième personne du pluriel (vous).",
        "J'ai varié mes consignes en utilisant de l'impératif, de l'infinitif et le verbe 'falloir' ou 'devoir'.",
        "Mes conseils sont concrets, rassurants et faciles à appliquer.",
        "J'ai vérifié l'orthographe des verbes à la deuxième personne du pluriel."
      ]
    },
    {
      id: "B8",
      title: "Le mode d'emploi d'une machine fantastique",
      intention: "Enjoindre",
      textType: "Prescriptive / Explicative",
      objective: "Rédiger les consignes d'utilisation d'un appareil technologique extraordinaire en utilisant un lexique technique inventé et précis.",
      modelText: "Pour démarrer votre téléporteur temporel portatif, veuillez suivre scrupuleusement la procédure suivante. Premièrement, insérez délicatement la pile à hydrogène dans le compartiment latéral métallique. Deuxièmement, réglez les cadrans numériques situés sur le boîtier afin de sélectionner l'année de destination. Troisièmement, pressez le bouton poussoir rouge et attendez le signal sonore aigu. Dès que la diode verte s'allume, saisissez fermement la poignée et fermez les yeux. Surtout, ne lâchez pas la poignée pendant le transfert sous peine de vous retrouver coincé dans l'espace.",
      vocabulary: ["Insérer", "Régler", "Presser", "Saisir", "Cadran", "Diode", "Bouton poussoir", "Scrupuleusement", "Délicatement", "Procédure"],
      grammarRule: "Les adverbes de manière en -ment (P6) : Ils servent à préciser comment réaliser une action (ex: *insérer délicatement*, *suivre scrupuleusement*). Rappel de formation : adjectif au féminin + le suffixe *-ment* (ex: *délicate -> délicatement*). Attention aux adjectifs en -ent qui donnent des adverbes en -emment (ex: *prudent -> prudemment*).",
      planningPrompt: "Quelle machine as-tu inventée ? Quels sont les 3 boutons ou écrans importants pour la faire marcher ?",
      writingPrompt: "Rédige le mode d'emploi de ta machine imaginaire (10 lignes). Utilise un vocabulaire technique imagé et intègre au moins 3 adverbes en -ment pour expliquer comment effectuer les gestes.",
      successCriteria: [
        "J'ai structuré mon mode d'emploi avec des étapes logiques et des numéros (premièrement, deuxièmement).",
        "J'ai utilisé au moins 3 adverbes de manière en -ment bien orthographiés (ex: délicatement).",
        "Mon vocabulaire technique (compartiment, cadran, diode...) donne un style scientifique.",
        "J'ai écrit mon texte sur un ton sérieux mais créatif."
      ]
    }
  ]
};
