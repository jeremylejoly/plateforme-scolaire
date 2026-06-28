import os

template_path = "/Users/jeremy/antigravity/LCML/gabarit-questionnaire-LCML.html"
output_path = "/Users/jeremy/antigravity/LCML/questionnaire-planisphere-LCML.html"
output_path_correctif = "/Users/jeremy/antigravity/LCML/questionnaire-planisphere-correctif-LCML.html"
output_path_fiches = "/Users/jeremy/antigravity/LCML/fiches/questionnaire-planisphere-LCML.html"
output_path_fiches_correctif = "/Users/jeremy/antigravity/LCML/fiches/questionnaire-planisphere-correctif-LCML.html"

# Read template
with open(template_path, 'r', encoding='utf-8') as f:
    template_content = f.read()

# Split at '</style></head><body>' to isolate the head and fonts
head_part, _ = template_content.split('</style></head><body>', 1)

# Correctif styles to append for the correctif HTML only
correctif_styles = """
  /* Zone hors-impression (Bannière écran) */
  .no-print-zone {
    margin: 15px auto;
    width: 210mm;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    padding: 12px 20px;
    border: 3px solid #dc2626;
    border-radius: 12px;
    box-shadow: 4px 4px 0 #dc2626;
    box-sizing: border-box;
  }
  .no-print-zone h2 {
    margin: 0 0 4px 0;
    font-family: 'Fredoka', sans-serif;
    font-size: 1.15rem;
    color: #dc2626;
  }
  .no-print-zone p {
    margin: 0;
    font-size: 0.9rem;
    font-weight: bold;
    color: #555;
  }
  .print-btn {
    background: #dc2626;
    color: #fff;
    border: 3px solid #000000;
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 3px 3px 0 #000000;
    transition: all 0.1s ease;
    font-family: 'Comic Neue', sans-serif;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  @media print {
    .no-print-zone {
      display: none;
    }
  }
"""

# Base Head parts
# Default color scheme is Français in the template, we replace it with Éveil
def get_head(is_correctif=False):
    h = head_part
    if is_correctif:
        h = h.replace('</style>', correctif_styles + '</style>')
        h = h.replace('<title>Évaluation — gabarit LCML</title>', '<title>Correctif — Le planisphère</title>')
    else:
        h = h.replace('<title>Évaluation — gabarit LCML</title>', '<title>Questionnaire — Le planisphère</title>')
    
    h = h.replace(
        '  /* Theme par defaut : Francais (Ocre) */\n  --matiere: #b16a09;\n  --matiere-fond: #f7efe2;\n  --matiere-f: #8a5003;',
        '  /* Theme par defaut : Eveil (Vert forêt) */\n  --matiere: #2f8457;\n  --matiere-fond: #eef6f0;\n  --matiere-f: #1e5637;'
    )
    return h + '</style></head><body>\n'

# Extract SVG logo
svg_start = template_content.find('<svg class="lg"')
svg_end = template_content.find('</svg>', svg_start) + len('</svg>')
svg_logo_html = template_content[svg_start:svg_end]

# --- 1. BODY HTML FOR QUESTIONNAIRE (STUDENT) ---
body_html = f"""
<div class="sheet-container theme-eveil" style="padding-bottom: 20px;">
<div class="ehead">
  <div class="ehead-left">
    {svg_logo_html}
    <div class="prenom-box">
      <span class="prenom-label">Prénom</span>
      <div class="prenom-line"></div>
    </div>
  </div>
  <div class="ehead-center">
    <span class="subject-title">Éveil géographique</span>
    <h1 class="lesson-title">Le planisphère</h1>
  </div>
  <div class="tot">GEO</div>
</div>

<div class="cons-g">Lis attentivement chaque consigne, puis réponds. Soigne ton écriture et relis-toi à la fin.</div>

<!-- EXERCICE 1 -->
<div class="exo" style="margin-bottom: 25px;">
  <div class="xh"><h2>1. Les repères et lignes imaginaires du globe terrestre</h2></div>
  <div class="body">
    <p class="consigne">a. Complète le texte ci-dessous à l'aide des mots de la banque&nbsp;:</p>
    <div class="bank" style="margin-left: 10px; margin-bottom: 12px;">
      <span class="w">équateur</span>
      <span class="w">méridien de Greenwich</span>
      <span class="w">parallèles</span>
      <span class="w">latitude</span>
      <span class="w">longitude</span>
    </div>
    
    <ul style="margin-left: 10px; margin-top: 6px; line-height: 2.3; margin-bottom: 15px;">
      <li>Pour se repérer sur la Terre, les géographes ont tracé des lignes imaginaires. Les cercles horizontaux sont appelés les <span class="fill" style="min-width: 170px;"></span>.</li>
      <li>Le plus grand de ces cercles horizontaux, dessiné en rouge au milieu de la carte, s'appelle l'<span class="fill" style="min-width: 170px;"></span>. Il coupe le globe en deux hémisphères.</li>
      <li>Les demi-cercles verticaux qui relient le pôle Nord au pôle Sud s'appellent les méridiens. Le méridien de référence, dessiné en bleu sur la carte, s'appelle le <span class="fill" style="min-width: 230px;"></span>.</li>
      <li>Les coordonnées géographiques permettent de situer précisément un point&nbsp;: la distance par rapport à l'équateur est la <span class="fill" style="min-width: 170px;"></span>, tandis que la distance par rapport au méridien de Greenwich est la <span class="fill" style="min-width: 170px;"></span>.</li>
    </ul>
    
    <p class="consigne" style="margin-top: 12px;">b. Observe la carte pour répondre aux questions sur les tracés géographiques&nbsp;:</p>
    <div style="margin-left: 10px; margin-bottom: 8px;">
      <p style="margin: 0 0 6px; font-weight: bold;">• Sur le planisphère, quelle couleur est utilisée pour tracer l'équateur, et quelle couleur pour le méridien d'origine&nbsp;?</p>
      <div class="lines" style="margin-bottom: 12px;">
        <span style="height: 38px;">L'équateur est dessiné en <span class="fill" style="min-width: 150px;"></span>, et le méridien de Greenwich est dessiné en <span class="fill" style="min-width: 150px;"></span>.</span>
      </div>
      
      <p style="margin: 0 0 6px; font-weight: bold;">• Cite deux autres parallèles célèbres (tracés en pointillés horizontaux) visibles tout au nord et tout au sud de la carte&nbsp;:</p>
      <div class="lines">
        <span style="height: 38px;">1. <span class="fill" style="min-width: 450px;"></span></span>
        <span style="height: 38px;">2. <span class="fill" style="min-width: 450px;"></span></span>
      </div>
    </div>
  </div>
</div>

<!-- EXERCICE 2 -->
<div class="exo" style="margin-bottom: 25px;">
  <div class="xh"><h2>2. La répartition globale des terres émergées et de l'eau</h2></div>
  <div class="body">
    <p class="consigne">a. Relie chaque notion à sa définition et à sa proportion sur le globe terrestre&nbsp;:</p>
    
    <div class="relier" style="display: grid; grid-template-columns: 155px 425px; gap: 20px 50px; align-items: center; margin-left: 10px; margin-top: 8px; margin-bottom: 15px;">
      <div class="it">Les océans</div>
      <div class="it" style="text-align: left;">Les vastes étendues d'eau salée qui recouvrent environ <b>71 %</b> de la surface du globe terrestre.</div>
      
      <div class="it">Les continents</div>
      <div class="it" style="text-align: left;">Les grandes étendues de terre émergée qui recouvrent environ <b>29 %</b> de la surface du globe terrestre.</div>
      
      <div class="it">Le globe terrestre</div>
      <div class="it" style="text-align: left;">L'ensemble de la surface de la Terre (terres et eaux réunies) représentant <b>100 %</b> de la planète.</div>
    </div>
    
    <p class="consigne" style="margin-top: 12px;">b. Complète les affirmations suivantes d'après ton exploration de la carte&nbsp;:</p>
    <ul style="margin-left: 10px; line-height: 2.2;">
      <li>En comptant tous les territoires décrits sur ce planisphère, je trouve <span class="fill" style="min-width: 90px;"></span> continents et <span class="fill" style="min-width: 90px;"></span> océans.</li>
      <li>D'après sa taille sur le planisphère, le continent le plus vaste du monde est l'<span class="fill" style="min-width: 150px;"></span>.</li>
      <li>À l'inverse, le continent le plus petit de notre planète est l'<span class="fill" style="min-width: 150px;"></span>.</li>
    </ul>
  </div>
</div>

<!-- EXERCICE 3 -->
<div class="exo" style="margin-bottom: 25px;">
  <div class="xh"><h2>3. Le classement comparatif des grands continents</h2></div>
  <div class="body">
    <p class="consigne">En recherchant les fiches d'informations de la carte, complète ce tableau comparatif&nbsp;:</p>
    
    <table class="tbl" style="margin-left: 10px; margin-bottom: 20px; width: calc(100% - 10px); text-align: center;">
      <tr>
        <th style="width: 25%; text-align: left; padding: 10px 8px;">Continent</th>
        <th style="width: 25%; text-align: center; padding: 10px 8px;">Superficie (en km²)</th>
        <th style="width: 25%; text-align: center; padding: 10px 8px;">Population estimée</th>
        <th style="width: 25%; text-align: center; padding: 10px 8px;">Sommet le plus haut (altitude)</th>
      </tr>
      <tr>
        <td style="text-align: left; padding: 10px 8px;"><b>L'Asie</b></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px;"></span></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px;"></span></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px;"></span></td>
      </tr>
      <tr>
        <td style="text-align: left; padding: 10px 8px;"><b>L'Afrique</b></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px;"></span></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px;"></span></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px;"></span></td>
      </tr>
      <tr>
        <td style="text-align: left; padding: 10px 8px;"><b>L'Amérique</b></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px;"></span></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px;"></span></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px;"></span></td>
      </tr>
      <tr>
        <td style="text-align: left; padding: 10px 8px;"><b>L'Europe</b></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px;"></span></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px;"></span></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px;"></span></td>
      </tr>
      <tr>
        <td style="text-align: left; padding: 10px 8px;"><b>L'Océanie</b></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px;"></span></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px;"></span></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px;"></span></td>
      </tr>
    </table>
    
    <p class="consigne" style="margin-top: 15px;">Réponds aux questions suivantes par des phrases complètes d'après les chiffres du tableau&nbsp;:</p>
    <div style="margin-left: 10px; margin-bottom: 8px;">
      <p style="margin: 0 0 6px; font-weight: bold;">a. Quel continent regroupe la majorité de la population mondiale ? Indique sa proportion en %.</p>
      <div class="lines" style="margin-bottom: 15px;">
        <span style="height: 38px;">Le continent le plus peuplé est l'<span class="fill" style="min-width: 150px;"></span>. Il abrite environ <span class="fill" style="min-width: 100px;"></span> % de la population.</span>
      </div>
      
      <p style="margin: 0 0 6px; font-weight: bold;">b. Quel continent n'a aucun habitant permanent ? Explique pourquoi et cite les personnes qui y séjournent.</p>
      <div class="lines">
        <span style="height: 38px;">Le continent sans habitant permanent est l'<span class="fill" style="min-width: 150px;"></span> car <span class="fill" style="min-width: 250px;"></span>.</span>
        <span style="height: 38px;">Seuls des <span class="fill" style="min-width: 250px;"></span> y séjournent temporairement pour des raisons scientifiques.</span>
      </div>
    </div>
  </div>
</div>

<!-- EXERCICE 4 -->
<div class="exo" style="margin-bottom: 25px;">
  <div class="xh"><h2>4. Les secrets et mystères des continents du monde</h2></div>
  <div class="body">
    <p class="consigne">Écris V (Vrai) ou F (Faux) dans la case correspondante pour chaque affirmation&nbsp;:</p>
    
    <div style="display: flex; flex-direction: column; gap: 14px; margin-left: 10px; margin-bottom: 12px; padding: 5px 0;">
      <div class="vrai-faux-row" style="padding-top: 10px; padding-bottom: 10px;">
        <span>L'Europe est l'un des plus petits continents mais l'un des plus peuplés, avec des côtes très découpées en îles et péninsules.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row" style="padding-top: 10px; padding-bottom: 10px;">
        <span>L'Océanie est le plus grand des continents, composé majoritairement de terres glacées reliées au pôle Nord.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row" style="padding-top: 10px; padding-bottom: 10px;">
        <span>L'Antarctique est recouvert à 98 % d'une calotte de glace de la planète (inlandsis) et ne contient aucun pays.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row" style="padding-top: 10px; padding-bottom: 10px;">
        <span>L'Océanie est isolée géographiquement, ce qui a permis le développement d'animaux uniques au monde.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row" style="border-bottom: none; padding-top: 10px; padding-bottom: 10px;">
        <span>L'Amérique s'étend sur presque toute la hauteur du globe, du cercle polaire arctique jusqu'au cap Horn au sud.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
    </div>
  </div>
</div>

<!-- EXERCICE 5 -->
<div class="exo" style="margin-bottom: 30px;">
  <div class="xh"><h2>5. À la découverte des profondeurs marines (les océans)</h2></div>
  <div class="body">
    <p class="consigne">Coche la bonne proposition pour chaque question posée&nbsp;:</p>
    
    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 22px;">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 1 : Quel est l'océan le plus vaste de la Terre, couvrant à lui seul un tiers de sa surface globale&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'océan Atlantique</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'océan Pacifique</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'océan Indien</span>
      </div>
    </div>
    
    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 22px;">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 2 : Dans quel océan se situe la fosse des Mariannes, qui plonge à 10 994 m sous le niveau de la mer&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Dans l'océan Indien</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'océan Pacifique</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'océan Atlantique</span>
      </div>
    </div>
    
    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 22px;">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 3 : Quel océan, localisé autour du pôle Nord, est le plus petit et le moins profond de la planète&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'océan Arctique</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'océan Austral</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'océan Indien</span>
      </div>
    </div>
    
    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 5px;">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 4 : Quel océan entoure entièrement le continent Antarctique au sud de notre planète&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'océan Pacifique</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'océan Austral</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'océan Atlantique</span>
      </div>
    </div>
  </div>
</div>

<!-- EXERCICE 6 -->
<div class="exo" style="margin-bottom: 25px;">
  <div class="xh"><h2>6. Les secrets et particularités géographiques des océans</h2></div>
  <div class="body">
    <p class="consigne">Relie chaque océan à la particularité physique qui lui correspond&nbsp;:</p>
    
    <div class="relier" style="display: grid; grid-template-columns: 150px 430px; gap: 20px 50px; align-items: center; margin-left: 10px; margin-top: 8px; margin-bottom: 15px;">
      <div class="it">L'océan Indien</div>
      <div class="it" style="text-align: left;">Il sépare l'Ancien du Nouveau Monde. Une immense chaîne de montagnes volcaniques sous-marines le traverse : la dorsale médio-atlantique.</div>
      
      <div class="it">L'océan Pacifique</div>
      <div class="it" style="text-align: left;">Il entoure complètement l'Antarctique au sud. Ses courants marins froids et ses vents très violents régulent le climat de toute la Terre.</div>
      
      <div class="it">L'océan Atlantique</div>
      <div class="it" style="text-align: left;">C'est l'océan le plus chaud de la Terre, ce qui favorise le développement d'une incroyable variété de récifs de coraux et de poissons colorés.</div>
      
      <div class="it">L'océan Austral</div>
      <div class="it" style="text-align: left;">Il est bordé par la « Ceinture de feu », une zone circulaire sous-marine concentrant la majorité des volcans actifs et des séismes mondiaux.</div>
      
      <div class="it">L'océan Arctique</div>
      <div class="it" style="text-align: left;">Entièrement situé autour du pôle Nord, il est en grande partie recouvert par la banquise qui subit directement les effets du réchauffement.</div>
    </div>
  </div>
</div>

<!-- EXERCICE 7 -->
<div class="exo" style="margin-bottom: 25px;">
  <div class="xh"><h2>7. La biodiversité et les milieux naturels du monde</h2></div>
  <div class="body">
    <p class="consigne">Écris V (Vrai) ou F (Faux) dans la case correspondante pour chaque affirmation&nbsp;:</p>
    
    <div style="display: flex; flex-direction: column; gap: 14px; margin-left: 10px; margin-bottom: 12px; padding: 5px 0;">
      <div class="vrai-faux-row" style="padding-top: 10px; padding-bottom: 10px;">
        <span>Le grizzli, le lama, le jaguar, le toucan et le bison sont des espèces animales emblématiques d'Amérique.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row" style="padding-top: 10px; padding-bottom: 10px;">
        <span>Le requin-baleine de l'océan Indien est un redoutable prédateur carnivore très agressif et dangereux pour l'homme.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row" style="padding-top: 10px; padding-bottom: 10px;">
        <span>L'Afrique est célèbre pour son désert du Sahara, le plus grand désert chaud de la Terre, et son long fleuve du Nil.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row" style="padding-top: 10px; padding-bottom: 10px;">
        <span>L'Océanie possède le monolithe rouge d'Uluru (Outback) et le célèbre Opéra de Sydney en Australie.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row" style="padding-top: 10px; padding-bottom: 10px;">
        <span>Le narval (licorne de mer) et le morse vivent dans les eaux chaudes et coralliennes de l'océan Indien.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row" style="border-bottom: none; padding-top: 10px; padding-bottom: 10px;">
        <span>Le krill antarctique (petites crevettes) est essentiel à la survie des manchots et des orques dans l'océan Austral.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
    </div>
  </div>
</div>

<!-- EXERCICE 8 -->
<div class="exo" style="margin-bottom: 20px;">
  <div class="xh"><h2>8. Enquête sur la faune sauvage des milieux extrêmes</h2></div>
  <div class="body">
    <p class="consigne">Réponds aux questions suivantes par des phrases complètes&nbsp;:</p>
    
    <div style="margin-left: 10px; margin-bottom: 12px;">
      <p style="margin: 0 0 3px; font-weight: bold;">a. Pourquoi n'y a-t-il aucun grand mammifère terrestre (comme le loup ou l'ours) en Antarctique ? Explique en décrivant le climat et le sol de ce continent.</p>
      <div class="lines">
        <span style="height: 38px;"></span>
        <span style="height: 38px;"></span>
        <span style="height: 38px;"></span>
      </div>
    </div>
    
    <div style="margin-left: 10px; margin-bottom: 12px;">
      <p style="margin: 0 0 3px; font-weight: bold;">b. L'océan Arctique est recouvert d'une couche de glace appelée la banquise. Cite trois espèces animales typiques que l'on peut observer sur la banquise ou dans ses eaux glacées.</p>
      <div class="lines">
        <span style="height: 38px;"></span>
        <span style="height: 38px;"></span>
        <span style="height: 38px;"></span>
      </div>
    </div>
    
    <div style="margin-left: 10px; margin-bottom: 12px;">
      <p style="margin: 0 0 3px; font-weight: bold;">c. Explique ce qu'est la « Ceinture de feu du Pacifique » en citant deux phénomènes naturels très fréquents dans cette région du globe.</p>
      <div class="lines">
        <span style="height: 38px;"></span>
        <span style="height: 38px;"></span>
        <span style="height: 38px;"></span>
      </div>
    </div>
    
    <div style="margin-left: 10px; margin-bottom: 4px;">
      <p style="margin: 0 0 3px; font-weight: bold;">d. La fosse des Mariannes (océan Pacifique) descend à près de 11 000 m de profondeur. Cite deux conditions de vie extrêmes dans les abysses et explique brièvement comment les animaux s'y adaptent.</p>
      <div class="lines">
        <span style="height: 38px;"></span>
        <span style="height: 38px;"></span>
        <span style="height: 38px;"></span>
      </div>
    </div>
  </div>
</div>
</div>
</body></html>
"""

# --- 2. BODY HTML FOR CORRECTIF (ANSWERS IN RED) ---
body_html_correctif = f"""
<div class="no-print-zone">
  <div>
    <h2>CORRECTIF OFFICIEL – Le planisphère</h2>
    <p>Ce document contient les réponses correctes rédigées et surlignées en rouge. Cliquez sur le bouton pour l'imprimer.</p>
  </div>
  <button class="print-btn" onclick="window.print()">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 6 2 18 2 18 9"></polyline>
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
      <rect x="6" y="14" width="12" height="8"></rect>
    </svg>
    Imprimer le correctif
  </button>
</div>

<div class="sheet-container theme-eveil" style="padding-bottom: 20px;">
<div class="ehead">
  <div class="ehead-left">
    {svg_logo_html}
    <div class="prenom-box">
      <span class="prenom-label">Prénom</span>
      <div class="prenom-line" style="color: #dc2626; font-weight: bold; font-family: 'Comic Neue', sans-serif; font-size: 11pt; padding-left: 10px; line-height: 20px;">Correcteur</div>
    </div>
  </div>
  <div class="ehead-center">
    <span class="subject-title">Éveil géographique</span>
    <h1 class="lesson-title">Le planisphère (Correctif)</h1>
  </div>
  <div class="tot">GEO</div>
</div>

<div class="cons-g">Rappel&nbsp;: Ce document sert de guide de correction officiel pour évaluer les travaux des élèves.</div>

<!-- EXERCICE 1 -->
<div class="exo" style="margin-bottom: 25px;">
  <div class="xh"><h2>1. Les repères et lignes imaginaires du globe terrestre</h2></div>
  <div class="body">
    <p class="consigne">a. Complète le texte ci-dessous à l'aide des mots de la banque&nbsp;:</p>
    <div class="bank" style="margin-left: 10px; margin-bottom: 12px;">
      <span class="w">équateur</span>
      <span class="w">méridien de Greenwich</span>
      <span class="w">parallèles</span>
      <span class="w">latitude</span>
      <span class="w">longitude</span>
    </div>
    
    <ul style="margin-left: 10px; margin-top: 6px; line-height: 2.3; margin-bottom: 15px;">
      <li>Pour se repérer sur la Terre, les géographes ont tracé des lignes imaginaires. Les cercles horizontaux sont appelés les <span class="fill" style="min-width: 170px; text-align: center; color: #dc2626; font-weight: bold;">parallèles</span>.</li>
      <li>Le plus grand de ces cercles horizontaux, dessiné en rouge au milieu de la carte, s'appelle l'<span class="fill" style="min-width: 170px; text-align: center; color: #dc2626; font-weight: bold;">équateur</span>. Il coupe le globe en deux hémisphères.</li>
      <li>Les demi-cercles verticaux qui relient le pôle Nord au pôle Sud s'appellent les méridiens. Le méridien de référence, dessiné en bleu sur la carte, s'appelle le <span class="fill" style="min-width: 230px; text-align: center; color: #dc2626; font-weight: bold;">méridien de Greenwich</span>.</li>
      <li>Les coordonnées géographiques permettent de situer précisément un point&nbsp;: la distance par rapport à l'équateur est la <span class="fill" style="min-width: 170px; text-align: center; color: #dc2626; font-weight: bold;">latitude</span>, tandis que la distance par rapport au méridien de Greenwich est la <span class="fill" style="min-width: 170px; text-align: center; color: #dc2626; font-weight: bold;">longitude</span>.</li>
    </ul>
    
    <p class="consigne" style="margin-top: 12px;">b. Observe la carte pour répondre aux questions sur les tracés géographiques&nbsp;:</p>
    <div style="margin-left: 10px; margin-bottom: 8px;">
      <p style="margin: 0 0 6px; font-weight: bold;">• Sur le planisphère, quelle couleur est utilisée pour tracer l'équateur, et quelle couleur pour le méridien d'origine&nbsp;?</p>
      <div class="lines" style="margin-bottom: 12px;">
        <span style="height: 38px; color: #dc2626; font-weight: bold; padding-top: 8px; line-height: 28px; padding-left: 8px;">L'équateur est dessiné en <span class="fill" style="min-width: 150px; text-align: center; color: #dc2626; font-weight: bold;">rouge</span>, et le méridien de Greenwich est dessiné en <span class="fill" style="min-width: 150px; text-align: center; color: #dc2626; font-weight: bold;">bleu</span>.</span>
      </div>
      
      <p style="margin: 0 0 6px; font-weight: bold;">• Cite deux autres parallèles célèbres (tracés en pointillés horizontaux) visibles tout au nord et tout au sud de la carte&nbsp;:</p>
      <div class="lines">
        <span style="height: 38px; color: #dc2626; font-weight: bold; padding-top: 8px; line-height: 28px; padding-left: 8px;">1. <span class="fill" style="min-width: 450px; text-align: center; color: #dc2626; font-weight: bold;">Le cercle polaire arctique (au nord de la Terre)</span></span>
        <span style="height: 38px; color: #dc2626; font-weight: bold; padding-top: 8px; line-height: 28px; padding-left: 8px;">2. <span class="fill" style="min-width: 450px; text-align: center; color: #dc2626; font-weight: bold;">Le cercle polaire antarctique / la limite à 60°S (au sud de la Terre)</span></span>
      </div>
    </div>
  </div>
</div>

<!-- EXERCICE 2 -->
<div class="exo" style="margin-bottom: 10px;">
  <div class="xh"><h2>2. La répartition globale des terres émergées et de l'eau</h2></div>
  <div class="body">
    <p class="consigne">a. Relie chaque notion à sa définition et à sa proportion sur le globe terrestre&nbsp;:</p>
    
    <div class="relier" style="display: grid; grid-template-columns: 155px 425px; gap: 20px 50px; align-items: center; margin-left: 10px; margin-top: 8px; margin-bottom: 15px;">
      <div class="it">Les océans <strong style="color: #dc2626; float: right; margin-right: 4px;">[A]</strong></div>
      <div class="it" style="text-align: left;"><strong style="color: #dc2626; margin-right: 4px;">[A]</strong> Les vastes étendues d'eau salée qui recouvrent environ <b>71 %</b> de la surface du globe terrestre.</div>
      
      <div class="it">Les continents <strong style="color: #dc2626; float: right; margin-right: 4px;">[B]</strong></div>
      <div class="it" style="text-align: left;"><strong style="color: #dc2626; margin-right: 4px;">[B]</strong> Les grandes étendues de terre émergée qui recouvrent environ <b>29 %</b> de la surface du globe terrestre.</div>
      
      <div class="it">Le globe terrestre <strong style="color: #dc2626; float: right; margin-right: 4px;">[C]</strong></div>
      <div class="it" style="text-align: left;"><strong style="color: #dc2626; margin-right: 4px;">[C]</strong> L'ensemble de la surface de la Terre (terres et eaux réunies) représentant <b>100 %</b> de la planète.</div>
    </div>
    
    <p class="consigne" style="margin-top: 12px;">b. Complète les affirmations suivantes d'après ton exploration de la carte&nbsp;:</p>
    <ul style="margin-left: 10px; line-height: 2.2;">
      <li>En comptant tous les territoires décrits sur ce planisphère, je trouve <span class="fill" style="min-width: 90px; text-align: center; color: #dc2626; font-weight: bold;">6</span> continents et <span class="fill" style="min-width: 90px; text-align: center; color: #dc2626; font-weight: bold;">5</span> océans.</li>
      <li>D'après sa taille sur le planisphère, le continent le plus vaste du monde est l'<span class="fill" style="min-width: 150px; text-align: center; color: #dc2626; font-weight: bold;">Asie</span>.</li>
      <li>À l'inverse, le continent le plus petit de notre planète est l'<span class="fill" style="min-width: 150px; text-align: center; color: #dc2626; font-weight: bold;">Océanie</span>.</li>
    </ul>
  </div>
</div>

<!-- EXERCICE 3 -->
<div class="exo" style="margin-bottom: 30px;">
  <div class="xh"><h2>3. Le classement comparatif des grands continents</h2></div>
  <div class="body">
    <p class="consigne">En recherchant les fiches d'informations de la carte, complète ce tableau comparatif&nbsp;:</p>
    
    <table class="tbl" style="margin-left: 10px; margin-bottom: 20px; width: calc(100% - 10px); text-align: center;">
      <tr>
        <th style="width: 25%; text-align: left; padding: 10px 8px;">Continent</th>
        <th style="width: 25%; text-align: center; padding: 10px 8px;">Superficie (en km²)</th>
        <th style="width: 25%; text-align: center; padding: 10px 8px;">Population estimée</th>
        <th style="width: 25%; text-align: center; padding: 10px 8px;">Sommet le plus haut (altitude)</th>
      </tr>
      <tr>
        <td style="text-align: left; padding: 10px 8px;"><b>L'Asie</b></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px; text-align: center; color: #dc2626; font-weight: bold;">44 580 000 km²</span></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px; text-align: center; color: #dc2626; font-weight: bold;">~4,7 milliards (60 %)</span></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px; text-align: center; color: #dc2626; font-weight: bold;">M. Everest (8 848 m)</span></td>
      </tr>
      <tr>
        <td style="text-align: left; padding: 10px 8px;"><b>L'Afrique</b></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px; text-align: center; color: #dc2626; font-weight: bold;">30 370 000 km²</span></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px; text-align: center; color: #dc2626; font-weight: bold;">~1,4 milliard</span></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px; text-align: center; color: #dc2626; font-weight: bold;">Kilimandjaro (5895m)</span></td>
      </tr>
      <tr>
        <td style="text-align: left; padding: 10px 8px;"><b>L'Amérique</b></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px; text-align: center; color: #dc2626; font-weight: bold;">42 549 000 km²</span></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px; text-align: center; color: #dc2626; font-weight: bold;">~1,02 milliard</span></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px; text-align: center; color: #dc2626; font-weight: bold;">M. Aconcagua (6961m)</span></td>
      </tr>
      <tr>
        <td style="text-align: left; padding: 10px 8px;"><b>L'Europe</b></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px; text-align: center; color: #dc2626; font-weight: bold;">10 180 000 km²</span></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px; text-align: center; color: #dc2626; font-weight: bold;">~745 millions</span></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px; text-align: center; color: #dc2626; font-weight: bold;">Elbrouz (5 642 m)</span></td>
      </tr>
      <tr>
        <td style="text-align: left; padding: 10px 8px;"><b>L'Océanie</b></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px; text-align: center; color: #dc2626; font-weight: bold;">8 520 000 km²</span></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px; text-align: center; color: #dc2626; font-weight: bold;">~43 millions</span></td>
        <td style="padding: 10px 8px;"><span class="fill" style="min-width: 120px; text-align: center; color: #dc2626; font-weight: bold;">M. Wilhelm (4509m)</span></td>
      </tr>
    </table>
    
    <p class="consigne" style="margin-top: 15px;">Réponds aux questions suivantes par des phrases complètes d'après les chiffres du tableau&nbsp;:</p>
    <div style="margin-left: 10px; margin-bottom: 8px;">
      <p style="margin: 0 0 6px; font-weight: bold;">a. Quel continent regroupe la majorité de la population mondiale ? Indique sa proportion en %.</p>
      <div class="lines" style="margin-bottom: 15px;">
        <span style="height: 38px; color: #dc2626; font-weight: bold; padding-top: 8px; line-height: 28px; padding-left: 8px;">Le continent le plus peuplé est l'<span class="fill" style="min-width: 150px; text-align: center; color: #dc2626; font-weight: bold;">Asie</span>. Il abrite environ <span class="fill" style="min-width: 100px; text-align: center; color: #dc2626; font-weight: bold;">60</span> % de la population.</span>
      </div>
      
      <p style="margin: 0 0 6px; font-weight: bold;">b. Quel continent n'a aucun habitant permanent ? Explique pourquoi et cite les personnes qui y séjournent.</p>
      <div class="lines">
        <span style="height: 38px; color: #dc2626; font-weight: bold; padding-top: 8px; line-height: 28px; padding-left: 8px;">Le continent sans habitant permanent est l'<span class="fill" style="min-width: 150px; text-align: center; color: #dc2626; font-weight: bold;">Antarctique</span> car <span class="fill" style="min-width: 250px; text-align: center; color: #dc2626; font-weight: bold;">le climat y est polaire, extrêmement froid et sec</span>.</span>
        <span style="height: 38px; color: #dc2626; font-weight: bold; padding-top: 8px; line-height: 28px; padding-left: 8px;">Seuls des <span class="fill" style="min-width: 250px; text-align: center; color: #dc2626; font-weight: bold;">chercheurs scientifiques (entre 1000 et 5000)</span> y séjournent temporairement pour des raisons scientifiques.</span>
      </div>
    </div>
  </div>
</div>

<!-- EXERCICE 4 -->
<div class="exo" style="margin-bottom: 25px;">
  <div class="xh"><h2>4. Les secrets et mystères des continents du monde</h2></div>
  <div class="body">
    <p class="consigne">Écris V (Vrai) ou F (Faux) dans la case correspondante pour chaque affirmation&nbsp;:</p>
    
    <div style="display: flex; flex-direction: column; gap: 14px; margin-left: 10px; margin-bottom: 12px; padding: 5px 0;">
      <div class="vrai-faux-row" style="padding-top: 10px; padding-bottom: 10px;">
        <span>L'Europe est l'un des plus petits continents mais l'un des plus peuplés, avec des côtes très découpées en îles et péninsules.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 12pt; background: #fee2e2;">V</span>
      </div>
      <div class="vrai-faux-row" style="padding-top: 10px; padding-bottom: 10px;">
        <span>L'Océanie est le plus grand des continents, composé majoritairement de terres glacées reliées au pôle Nord.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 12pt; background: #fee2e2;">F</span>
      </div>
      <div class="vrai-faux-row" style="padding-top: 10px; padding-bottom: 10px;">
        <span>L'Antarctique est recouvert à 98 % d'une calotte de glace de la planète (inlandsis) et ne contient aucun pays.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 12pt; background: #fee2e2;">V</span>
      </div>
      <div class="vrai-faux-row" style="padding-top: 10px; padding-bottom: 10px;">
        <span>L'Océanie est isolée géographiquement, ce qui a permis le développement d'animaux uniques au monde.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 12pt; background: #fee2e2;">V</span>
      </div>
      <div class="vrai-faux-row" style="border-bottom: none; padding-top: 10px; padding-bottom: 10px;">
        <span>L'Amérique s'étend sur presque toute la hauteur du globe, du cercle polaire arctique jusqu'au cap Horn au sud.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 12pt; background: #fee2e2;">V</span>
      </div>
    </div>
  </div>
</div>

<!-- EXERCICE 5 -->
<div class="exo" style="margin-bottom: 30px;">
  <div class="xh"><h2>5. À la découverte des profondeurs marines (les océans)</h2></div>
  <div class="body">
    <p class="consigne">Coche la bonne proposition pour chaque question posée&nbsp;:</p>
    
    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 22px;">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 1 : Quel est l'océan le plus vaste de la Terre, couvrant à lui seul un tiers de sa surface globale&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'océan Atlantique</span>
        <span style="display: flex; align-items: center; gap: 8px; font-weight: bold; color: #dc2626;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #dc2626; border-radius: 4px; margin: 0; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; background: #fee2e2;">✔</span> L'océan Pacifique</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'océan Indien</span>
      </div>
    </div>
    
    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 22px;">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 2 : Dans quel océan se situe la fosse des Mariannes, qui plonge à 10 994 m sous le niveau de la mer&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Dans l'océan Indien</span>
        <span style="display: flex; align-items: center; gap: 8px; font-weight: bold; color: #dc2626;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #dc2626; border-radius: 4px; margin: 0; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; background: #fee2e2;">✔</span> Dans l'océan Pacifique</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Dans l'océan Atlantique</span>
      </div>
    </div>
    
    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 22px;">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 3 : Quel océan, localisé autour du pôle Nord, est le plus petit et le moins profond de la planète&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: flex; align-items: center; gap: 8px; font-weight: bold; color: #dc2626;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #dc2626; border-radius: 4px; margin: 0; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; background: #fee2e2;">✔</span> L'océan Arctique</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'océan Austral</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'océan Indien</span>
      </div>
    </div>
    
    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 5px;">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 4 : Quel océan entoure entièrement le continent Antarctique au sud de notre planète&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'océan Pacifique</span>
        <span style="display: flex; align-items: center; gap: 8px; font-weight: bold; color: #dc2626;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #dc2626; border-radius: 4px; margin: 0; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; background: #fee2e2;">✔</span> L'océan Austral</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'océan Atlantique</span>
      </div>
    </div>
  </div>
</div>

<!-- EXERCICE 6 -->
<div class="exo" style="margin-bottom: 25px;">
  <div class="xh"><h2>6. Les secrets et particularités géographiques des océans</h2></div>
  <div class="body">
    <p class="consigne">Relie chaque océan à la particularité physique qui lui correspond&nbsp;:</p>
    
    <div class="relier" style="display: grid; grid-template-columns: 150px 430px; gap: 20px 50px; align-items: center; margin-left: 10px; margin-top: 8px; margin-bottom: 15px;">
      <div class="it">L'océan Indien <strong style="color: #dc2626; float: right; margin-right: 4px;">[C]</strong></div>
      <div class="it" style="text-align: left;"><strong style="color: #dc2626; margin-right: 4px;">[A]</strong> Il sépare l'Ancien du Nouveau Monde. Une immense chaîne de montagnes volcaniques sous-marines le traverse : la dorsale médio-atlantique.</div>
      
      <div class="it">L'océan Pacifique <strong style="color: #dc2626; float: right; margin-right: 4px;">[D]</strong></div>
      <div class="it" style="text-align: left;"><strong style="color: #dc2626; margin-right: 4px;">[B]</strong> Il entoure complètement l'Antarctique au sud. Ses courants marins froids et ses vents très violents régulent le climat de toute la Terre.</div>
      
      <div class="it">L'océan Atlantique <strong style="color: #dc2626; float: right; margin-right: 4px;">[A]</strong></div>
      <div class="it" style="text-align: left;"><strong style="color: #dc2626; margin-right: 4px;">[C]</strong> C'est l'océan le plus chaud de la Terre, ce qui favorise le développement d'une incroyable variété de récifs de coraux et de poissons colorés.</div>
      
      <div class="it">L'océan Austral <strong style="color: #dc2626; float: right; margin-right: 4px;">[B]</strong></div>
      <div class="it" style="text-align: left;"><strong style="color: #dc2626; margin-right: 4px;">[D]</strong> Il est bordé par la « Ceinture de feu », une zone circulaire sous-marine concentrant la majorité des volcans actifs et des séismes mondiaux.</div>
      
      <div class="it">L'océan Arctique <strong style="color: #dc2626; float: right; margin-right: 4px;">[E]</strong></div>
      <div class="it" style="text-align: left;"><strong style="color: #dc2626; margin-right: 4px;">[E]</strong> Entièrement situé autour du pôle Nord, il est en grande partie recouvert par la banquise qui subit directement les effets du réchauffement.</div>
    </div>
  </div>
</div>

<!-- EXERCICE 7 -->
<div class="exo" style="margin-bottom: 25px;">
  <div class="xh"><h2>7. La biodiversité et les milieux naturels du monde</h2></div>
  <div class="body">
    <p class="consigne">Écris V (Vrai) ou F (Faux) dans la case correspondante pour chaque affirmation&nbsp;:</p>
    
    <div style="display: flex; flex-direction: column; gap: 14px; margin-left: 10px; margin-bottom: 12px; padding: 5px 0;">
      <div class="vrai-faux-row" style="padding-top: 10px; padding-bottom: 10px;">
        <span>Le grizzli, le lama, le jaguar, le toucan et le bison sont des espèces animales emblématiques d'Amérique.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 12pt; background: #fee2e2;">V</span>
      </div>
      <div class="vrai-faux-row">
        <span>Le requin-baleine de l'océan Indien est un redoutable prédateur carnivore très agressif et dangereux pour l'homme.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 12pt; background: #fee2e2;">F</span>
      </div>
      <div class="vrai-faux-row" style="padding-top: 10px; padding-bottom: 10px;">
        <span>L'Afrique est célèbre pour son désert du Sahara, le plus grand désert chaud de la Terre, et son long fleuve du Nil.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 12pt; background: #fee2e2;">V</span>
      </div>
      <div class="vrai-faux-row" style="padding-top: 10px; padding-bottom: 10px;">
        <span>L'Océanie possède le monolithe rouge d'Uluru (Outback) et le célèbre Opéra de Sydney en Australie.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 12pt; background: #fee2e2;">V</span>
      </div>
      <div class="vrai-faux-row" style="padding-top: 10px; padding-bottom: 10px;">
        <span>Le narval (licorne de mer) et le morse vivent dans les eaux chaudes et coralliennes de l'océan Indien.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 12pt; background: #fee2e2;">F</span>
      </div>
      <div class="vrai-faux-row" style="border-bottom: none; padding-top: 10px; padding-bottom: 10px;">
        <span>Le krill antarctique (petites crevettes) est essentiel à la survie des manchots et des orques dans l'océan Austral.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 12pt; background: #fee2e2;">V</span>
      </div>
    </div>
  </div>
</div>

<!-- EXERCICE 8 -->
<div class="exo" style="margin-bottom: 20px;">
  <div class="xh"><h2>8. Enquête sur la faune sauvage des milieux extrêmes</h2></div>
  <div class="body">
    <p class="consigne">Réponds aux questions suivantes par des phrases complètes&nbsp;:</p>
    
    <div style="margin-left: 10px; margin-bottom: 12px;">
      <p style="margin: 0 0 3px; font-weight: bold;">a. Pourquoi n'y a-t-il aucun grand mammifère terrestre (comme le loup ou l'ours) en Antarctique ? Explique en décrivant le climat et le sol de ce continent.</p>
      <div class="lines">
        <span style="height: 38px; color: #dc2626; font-weight: bold; padding-top: 8px; line-height: 28px; padding-left: 8px;">Il n'y a pas de grands mammifères terrestres en Antarctique car le sol est entièrement</span>
        <span style="height: 38px; color: #dc2626; font-weight: bold; padding-top: 8px; line-height: 28px; padding-left: 8px;">recouvert de glace (inlandsis) et le climat est extrêmement froid et sec.</span>
        <span style="height: 38px; color: #dc2626; font-weight: bold; padding-top: 8px; line-height: 28px; padding-left: 8px;">Il n'y a aucune végétation sur terre pour nourrir des proies ou des prédateurs.</span>
      </div>
    </div>
    
    <div style="margin-left: 10px; margin-bottom: 12px;">
      <p style="margin: 0 0 3px; font-weight: bold;">b. L'océan Arctique est recouvert d'une couche de glace appelée la banquise. Cite trois espèces animales typiques que l'on peut observer sur la banquise ou dans ses eaux glacées.</p>
      <div class="lines">
        <span style="height: 38px; color: #dc2626; font-weight: bold; padding-top: 8px; line-height: 28px; padding-left: 8px;">On peut observer l'ours polaire (sur la banquise), le morse, le narval</span>
        <span style="height: 38px; color: #dc2626; font-weight: bold; padding-top: 8px; line-height: 28px; padding-left: 8px;">(licorne de mer), le béluga ou le phoque du Groenland (trois au choix).</span>
        <span style="height: 38px; color: #dc2626; font-weight: bold; padding-top: 8px; line-height: 28px; padding-left: 8px;"></span>
      </div>
    </div>
    
    <div style="margin-left: 10px; margin-bottom: 12px;">
      <p style="margin: 0 0 3px; font-weight: bold;">c. Explique ce qu'est la « Ceinture de feu du Pacifique » en citant deux phénomènes naturels très fréquents dans cette région du globe.</p>
      <div class="lines">
        <span style="height: 38px; color: #dc2626; font-weight: bold; padding-top: 8px; line-height: 28px; padding-left: 8px;">C'est une zone circulaire entourant l'océan Pacifique qui concentre la majorité</span>
        <span style="height: 38px; color: #dc2626; font-weight: bold; padding-top: 8px; line-height: 28px; padding-left: 8px;">des volcans actifs du monde. Les séismes (tremblements de terre) y sont</span>
        <span style="height: 38px; color: #dc2626; font-weight: bold; padding-top: 8px; line-height: 28px; padding-left: 8px;">également extrêmement fréquents et violents.</span>
      </div>
    </div>
    
    <div style="margin-left: 10px; margin-bottom: 4px;">
      <p style="margin: 0 0 3px; font-weight: bold;">d. La fosse des Mariannes (océan Pacifique) descend à près de 11 000 m de profondeur. Cite deux conditions de vie extrêmes dans les abysses et explique brièvement comment les animaux s'y adaptent.</p>
      <div class="lines">
        <span style="height: 38px; color: #dc2626; font-weight: bold; padding-top: 8px; line-height: 28px; padding-left: 8px;">Dans les abysses, il y a une obscurité totale, un froid glacial et une pression</span>
        <span style="height: 38px; color: #dc2626; font-weight: bold; padding-top: 8px; line-height: 28px; padding-left: 8px;">extrêmement forte. Les poissons s'y adaptent en fabriquant leur propre lumière</span>
        <span style="height: 38px; color: #dc2626; font-weight: bold; padding-top: 8px; line-height: 28px; padding-left: 8px;">(bioluminescence) ou en ayant des corps mous sans os solides pour résister à la pression.</span>
      </div>
    </div>
  </div>
</div>
</div>
</body></html>
"""

# Compile and Write Questionnaire (élève)
q_head = get_head(is_correctif=False)
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(q_head)
    f.write(body_html)

with open(output_path_fiches, 'w', encoding='utf-8') as f:
    f.write(q_head)
    f.write(body_html)

# Compile and Write Correctif
c_head = get_head(is_correctif=True)
with open(output_path_correctif, 'w', encoding='utf-8') as f:
    f.write(c_head)
    f.write(body_html_correctif)

with open(output_path_fiches_correctif, 'w', encoding='utf-8') as f:
    f.write(c_head)
    f.write(body_html_correctif)

print("HTML Files generated successfully in all four locations!")
