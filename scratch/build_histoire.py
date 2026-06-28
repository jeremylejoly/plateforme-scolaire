import os

template_path = "/Users/jeremy/antigravity/LCML/gabarit-questionnaire-LCML.html"
output_path = "/Users/jeremy/antigravity/LCML/questionnaire-histoire-LCML.html"
output_path_fiches = "/Users/jeremy/antigravity/LCML/fiches/questionnaire-histoire-LCML.html"

output_path_corr = "/Users/jeremy/antigravity/LCML/correctif-histoire-LCML.html"
output_path_corr_fiches = "/Users/jeremy/antigravity/LCML/fiches/correctif-histoire-LCML.html"

# Read template
with open(template_path, 'r', encoding='utf-8') as f:
    template_content = f.read()

# Split at '</style></head><body>' to isolate the head and fonts
head_part, _ = template_content.split('</style></head><body>', 1)
head_part += '</style></head><body>\n'

# Set Eveil green color scheme as default in :root
head_part = head_part.replace(
    '/* Theme par defaut : Francais (Ocre) */\n  --matiere: #b16a09;\n  --matiere-fond: #f7efe2;\n  --matiere-f: #8a5003;',
    '/* Theme par defaut : Eveil (Vert forêt) */\n  --matiere: #2f8457;\n  --matiere-fond: #eef6f0;\n  --matiere-f: #1e5637;'
)

# Extract SVG logo from the template (between '<svg class="lg"' and '</svg>')
svg_start = template_content.find('<svg class="lg"')
svg_end = template_content.find('</svg>', svg_start) + len('</svg>')
svg_logo_html = template_content[svg_start:svg_end]

# ==============================================================================
# 1. STUDENT VERSION (QUESTIONNAIRE) BODY HTML
# ==============================================================================
student_body = f"""
<!-- PAGE 1 (IMPAIRE - AVEC EN-TÊTE) -->
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
    <span class="subject-title">Eveil historique</span>
    <h1 class="lesson-title">La frise chronologique</h1>
  </div>
  <div class="tot">HIST</div>
</div>

<div class="cons-g">Lis attentivement chaque consigne, puis réponds. Soigne ton écriture et relis-toi à la fin.</div>

<!-- EXERCICE 1 -->
<div class="exo" style="margin-bottom: 24px;">
  <div class="xh"><h2>1. Des millénaires de repères</h2></div>
  <div class="body">
    <p class="consigne">Écris V (Vrai) ou F (Faux) dans la case correspondante pour chaque affirmation&nbsp;:</p>
    <div style="display: flex; flex-direction: column; gap: 14px; margin-left: 10px; margin-bottom: 4px;">
      <div class="vrai-faux-row">
        <span>Lucy, un australopithèque marchant debout il y a ~3 000 000 d'années, marque l'apparition des premiers humains.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row">
        <span>L'écriture a été inventée à la même époque en Égypte et en Mésopotamie vers 3 000 av. J.-C., mettant fin à la Préhistoire.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row">
        <span>Au Moyen Âge, les attaques répétées des Vikings aux IXe et Xe siècles ont favorisé l'apparition du système de protection féodal.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row">
        <span>Durant les Temps Modernes, le roi Louis XIV (le Roi-Soleil) a mené des guerres de conquête qui ont touché des villes belges.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row">
        <span>Le premier pas de l'homme sur la Lune lors de la mission américaine Apollo 11 a eu lieu en 1969.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row" style="border-bottom: none; padding-bottom: 2px;">
        <span>L'indépendance de la Belgique a été proclamée en 1914 suite à l'invasion allemande lors de la Première Guerre mondiale.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
    </div>
  </div>
</div>

<!-- EXERCICE 2 -->
<div class="exo" style="margin-bottom: 24px;">
  <div class="xh"><h2>2. Les hommes et leurs grandes inventions</h2></div>
  <div class="body">
    <p class="consigne">Relie chaque grand progrès de l'humanité à son époque historique correspondante&nbsp;:</p>
    <div class="relier" style="display: grid; grid-template-columns: 200px 400px; gap: 20px 80px; align-items: center; margin-left: 10px; margin-bottom: 12px;">
      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px;">Les dolmens de Wéris</div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px;">Temps Modernes (1517)</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px;">La construction des pyramides</div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px;">Néolithique (~4 000 av. J.-C.)</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px;">La Réforme de Martin Luther</div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px;">Époque contemporaine (1760-1870)</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px;">La machine à vapeur</div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px;">Antiquité (~2 700 av. J.-C.)</div>
    </div>
  </div>
</div>

<!-- EXERCICE 3 -->
<div class="exo" style="margin-bottom: 0;">
  <div class="xh"><h2>3. Des vestiges mystérieux en Belgique</h2></div>
  <div class="body">
    <p class="consigne">Dans quelle commune de la province de Luxembourg peut-on observer le plus grand site mégalithique de dolmens de Belgique&nbsp;? Explique brièvement ce qu'est un dolmen.</p>
    <div class="lines" style="margin-left: 10px; margin-bottom: 4px;">
      <span style="height: 38px;"></span>
      <span style="height: 38px;"></span>
      <span style="height: 38px;"></span>
    </div>
  </div>
</div>
</div>


<!-- PAGE 2 (PAIRE - SANS EN-TÊTE) -->
<div class="sheet-container theme-eveil" style="padding-top: 20px; padding-bottom: 20px;">
<!-- EXERCICE 4 -->
<div class="exo" style="margin-bottom: 24px;">
  <div class="xh"><h2>4. Les grands tournants de l'Histoire</h2></div>
  <div class="body">
    <p class="consigne">Coche la seule bonne proposition pour chaque question&nbsp;:</p>
    
    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 16px;">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 1 : Quelle technique majeure a été maîtrisée par Homo erectus vers 300 000 av. J.-C. durant le Paléolithique&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> La fabrication du bronze</span>
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> La maîtrise du feu</span>
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'écriture sur argile</span>
      </div>
    </div>

    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 16px;">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 2 : Quelle armée a été battue à Courtrai le 11 juillet 1302 par les milices flamandes de tisserands et artisans&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'armée romaine</span>
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'armée anglaise</span>
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'armée française</span>
      </div>
    </div>

    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 16px;">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 3 : Qui a dirigé l'expédition maritime ayant réalisé le premier tour du monde complet entre 1519 et 1522&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Jules César</span>
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Ferdinand de Magellan</span>
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Christophe Colomb</span>
      </div>
    </div>

    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 4px;">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 4 : Quel pays a été envahi par l'Allemagne le 4 août 1914, brisant sa neutralité garantie par traité&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> La France</span>
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> La Belgique</span>
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'Espagne</span>
      </div>
    </div>
  </div>
</div>

<!-- EXERCICE 5 -->
<div class="exo" style="margin-bottom: 24px;">
  <div class="xh"><h2>5. La Gaule romaine et l'invention de l'écriture</h2></div>
  <div class="body">
    <p class="consigne">a. Complète le paragraphe avec les mots de la banque suivante&nbsp;:</p>
    <div class="bank" style="margin-left: 10px; margin-bottom: 8px;">
      <span class="w">Jules César</span>
      <span class="w">Gaule belgique</span>
      <span class="w">Ambiorix</span>
      <span class="w">latines</span>
    </div>
    <p style="font-size: 11pt !important; line-height: 2.2; margin: 4px 0 12px 10px; font-weight: bold; font-family: 'Comic Neue', sans-serif !important;">
      En 52 av. J.-C., les légions romaines commandées par <span class="fill" style="min-width: 150px;"></span> achèvent la conquête de la <span class="fill" style="min-width: 160px;"></span>. Malgré la résistance héroïque du chef des Éburons nommé <span class="fill" style="min-width: 150px;"></span>, le territoire est intégré à l'Empire romain, apportant des voies romaines et des influences <span class="fill" style="min-width: 120px;"></span>.
    </p>

    <p class="consigne" style="margin-top: 12px;">b. Explique pourquoi l'invention de l'écriture marque le passage de la Préhistoire à l'Histoire&nbsp;:</p>
    <div class="lines" style="margin-left: 10px; margin-bottom: 4px;">
      <span style="height: 38px;"></span>
      <span style="height: 38px;"></span>
      <span style="height: 38px;"></span>
    </div>
  </div>
</div>

<!-- EXERCICE 6 -->
<div class="exo" style="margin-bottom: 0;">
  <div class="xh"><h2>6. L'organisation de la société médiévale</h2></div>
  <div class="body">
    <p class="consigne">Associe chaque acteur de la société féodale du Moyen Âge à sa description&nbsp;:</p>
    <div class="relier" style="display: grid; grid-template-columns: 200px 400px; gap: 20px 80px; align-items: center; margin-left: 10px; margin-bottom: 4px;">
      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px;">Le Roi</div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px;">Prêtent serment de fidélité militaire en échange d'un domaine (fief).</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px;">Les Seigneurs</div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px;">Paysans pauvres attachés à la terre qu'ils cultivent pour le seigneur.</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px;">Les Chevaliers Vassaux</div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px;">Suzerain suprême placé au sommet de la pyramide féodale.</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px;">Les Serfs</div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px;">Possèdent de grandes terres et châteaux forts et protègent la population.</div>
    </div>
  </div>
</div>
</div>


<!-- PAGE 3 (IMPAIRE - AVEC EN-TÊTE) -->
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
    <span class="subject-title">Eveil historique</span>
    <h1 class="lesson-title">La frise chronologique</h1>
  </div>
  <div class="tot">HIST</div>
</div>

<!-- EXERCICE 7 -->
<div class="exo" style="margin-bottom: 24px;">
  <div class="xh"><h2>7. Les grandes figures du passé</h2></div>
  <div class="body">
    <p class="consigne">Relie chaque personnage historique marquant à son rôle&nbsp;:</p>
    <div class="relier" style="display: grid; grid-template-columns: 200px 400px; gap: 20px 80px; align-items: center; margin-left: 10px; margin-bottom: 12px;">
      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px;">Clovis</div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px;">Couronné Empereur d'Occident le 25 décembre 800 à Rome.</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px;">Charlemagne</div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px;">Industriel qui fonda une sidérurgie moderne à Seraing en 1817.</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px;">Jeanne d'Arc</div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px;">Premier roi des Francs à se convertir au christianisme vers 496.</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px;">William Cockerill</div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px;">Jeune paysanne qui lutta contre les Anglais et périt en 1431.</div>
    </div>
  </div>
</div>

<!-- EXERCICE 8 -->
<div class="exo" style="margin-bottom: 24px;">
  <div class="xh"><h2>8. Crises, guerres et épidémies</h2></div>
  <div class="body">
    <p class="consigne">Écris V (Vrai) ou F (Faux) dans la case correspondante pour chaque affirmation&nbsp;:</p>
    <div style="display: flex; flex-direction: column; gap: 14px; margin-left: 10px; margin-bottom: 4px;">
      <div class="vrai-faux-row">
        <span>La terrible Peste Noire (1347-1353) a été propagée par des puces de rats noirs, tuant plus d'un tiers de la population d'Europe.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row">
        <span>La Guerre de Trente Ans (1618-1648) a pris fin avec la signature des traités de paix de Westphalie.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row">
        <span>Pendant la Seconde Guerre mondiale, la Caserne Dossin à Malines a servi de lieu de déportation pour les Juifs belges.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row">
        <span>La chute de l'Empire romain d'Occident s'est produite en 1492, marquant la fin de l'Antiquité.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row" style="border-bottom: none; padding-bottom: 2px;">
        <span>La chute du Mur de Berlin en 1989 a mis fin à la période tendue de la Guerre Froide entre les États-Unis et l'URSS.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
    </div>
  </div>
</div>

<!-- EXERCICE 9 -->
<div class="exo" style="margin-bottom: 0;">
  <div class="xh"><h2>9. La Renaissance et la science</h2></div>
  <div class="body">
    <p class="consigne">Quel astronome a affirmé en 1543 que la Terre tournait autour du Soleil (héliocentrisme), révolutionnant les sciences à la Renaissance&nbsp;? Explique la différence avec la croyance de l'époque.</p>
    <div class="lines" style="margin-left: 10px; margin-bottom: 4px;">
      <span style="height: 38px;"></span>
      <span style="height: 38px;"></span>
      <span style="height: 38px;"></span>
    </div>
  </div>
</div>
</div>


<!-- PAGE 4 (PAIRE - SANS EN-TÊTE) -->
<div class="sheet-container theme-eveil" style="padding-top: 20px; padding-bottom: 20px;">
<!-- EXERCICE 10 -->
<div class="exo" style="margin-bottom: 24px;">
  <div class="xh"><h2>10. La Belgique et l'ancien Congo belge</h2></div>
  <div class="body">
    <p class="consigne">a. Complète le texte sur la colonisation et la décolonisation avec les mots de la banque&nbsp;:</p>
    <div class="bank" style="margin-left: 10px; margin-bottom: 8px;">
      <span class="w">Léopold II</span>
      <span class="w">colonie belge</span>
      <span class="w">indépendance</span>
      <span class="w">Patrice Lumumba</span>
    </div>
    <p style="font-size: 11pt !important; line-height: 2.2; margin: 4px 0 12px 10px; font-weight: bold; font-family: 'Comic Neue', sans-serif !important;">
      De 1885 à 1908, le Congo est d'abord la propriété personnelle du roi <span class="fill" style="min-width: 140px;"></span>, avant d'être cédé et de devenir une <span class="fill" style="min-width: 150px;"></span>. Le 30 juin 1960, le pays obtient enfin son <span class="fill" style="min-width: 140px;"></span>, et le leader politique <span class="fill" style="min-width: 160px;"></span> devient le premier Premier ministre du Congo libre.
    </p>

    <p class="consigne" style="margin-top: 12px;">b. Explique quel débat ou travail de mémoire existe-t-il aujourd'hui en Belgique concernant ce passé colonial&nbsp;:</p>
    <div class="lines" style="margin-left: 10px; margin-bottom: 4px;">
      <span style="height: 38px;"></span>
      <span style="height: 38px;"></span>
      <span style="height: 38px;"></span>
    </div>
  </div>
</div>

<!-- EXERCICE 11 -->
<div class="exo" style="margin-bottom: 24px;">
  <div class="xh"><h2>11. Institutions belges et européennes</h2></div>
  <div class="body">
    <p class="consigne">Coche la seule bonne proposition pour chaque question&nbsp;:</p>
    
    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 16px;">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 1 : Dans quelle ville ont été établies les principales institutions de l'Union européenne&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Tongres</span>
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Bruxelles</span>
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Namur</span>
      </div>
    </div>

    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 16px;">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 2 : Quel homme politique belge est considéré comme l'un des pères fondateurs de la construction européenne&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Ambiorix</span>
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Paul-Henri Spaak</span>
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Jules César</span>
      </div>
    </div>

    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 4px;">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 3 : En quelle année la Belgique est-elle officiellement devenue un État fédéral après plusieurs réformes&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> En 1830</span>
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> En 1993</span>
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> En 2015</span>
      </div>
    </div>
  </div>
</div>

<!-- EXERCICE 12 -->
<div class="exo" style="margin-bottom: 0;">
  <div class="xh"><h2>12. Classement chronologique de l'Histoire</h2></div>
  <div class="body">
    <p class="consigne">Classe ces événements historiques du plus ancien (écris 1) au plus récent (écris 6) dans la case correspondante&nbsp;:</p>
    <div style="display: flex; flex-direction: column; gap: 12px; margin-left: 10px; margin-bottom: 4px;">
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1.5px solid var(--ligne); padding-bottom: 6px;">
        <span>Couronnement de Charlemagne à Rome (Moyen Âge)</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1.5px solid var(--ligne); padding-bottom: 6px;">
        <span>La révolution néolithique (naissance de l'agriculture et sédentarisation, Préhistoire)</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1.5px solid var(--ligne); padding-bottom: 6px;">
        <span>Premier pas de l'homme sur la Lune (Époque contemporaine)</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1.5px solid var(--ligne); padding-bottom: 6px;">
        <span>Découverte de l'Amérique par Christophe Colomb (Temps Modernes)</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1.5px solid var(--ligne); padding-bottom: 6px;">
        <span>Invention de l'écriture en Mésopotamie et en Égypte (Antiquité)</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 2px;">
        <span>Chute du Mur de Berlin et fin de la Guerre Froide (Époque contemporaine)</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
    </div>
  </div>
</div>
</div>
"""
# Typographic replacements for French spacing
student_body = student_body.replace(' ?', '&nbsp;?').replace(' :', '&nbsp;:')

# ==============================================================================
# 2. TEACHER VERSION (CORRECTIF) BODY HTML
# ==============================================================================
correctif_body = f"""
<!-- ZONE HORS IMPRESSION POUR ÉCRAN -->
<div class="no-print-zone" style="margin: 20px auto 25px; width: 210mm; display: flex; justify-content: space-between; align-items: center; background: #ffffff; padding: 12px 20px; border: 3px solid #dc2626; border-radius: 12px; box-shadow: 4px 4px 0 #dc2626; box-sizing: border-box; font-family: 'Comic Neue', sans-serif;">
  <div>
    <h2 style="margin: 0 0 4px 0; font-family: 'Fredoka', sans-serif; font-size: 1.15rem; color: #dc2626; font-weight: bold;">CORRECTIF OFFICIEL — Eveil historique</h2>
    <p style="margin: 0; font-size: 0.9rem; font-weight: bold; color: #555;">Ce document contient les réponses correctes surlignées en rouge. Cliquez sur le bouton pour l'imprimer.</p>
  </div>
  <button onclick="window.print()" style="background: #dc2626; color: #fff; border: 2.5px solid #000; border-radius: 8px; padding: 8px 16px; font-size: 1rem; font-weight: bold; cursor: pointer; box-shadow: 3px 3px 0 #000; display: flex; align-items: center; gap: 6px; font-family: 'Comic Neue', sans-serif;">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 6 2 18 2 18 9"></polyline>
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
      <rect x="6" y="14" width="12" height="8"></rect>
    </svg>
    Imprimer le correctif
  </button>
</div>

<!-- PAGE 1 (IMPAIRE - AVEC EN-TÊTE) -->
<div class="sheet-container theme-eveil" style="padding-bottom: 20px;">
<div class="ehead" style="border-color: #dc2626; background: #fee2e2;">
  <div class="ehead-left">
    {svg_logo_html}
    <div class="prenom-box" style="border-color: #dc2626; background: #fff;">
      <span class="prenom-label" style="color: #dc2626;">Prénom</span>
      <div class="prenom-line" style="border-color: #dc2626; margin-top: 10px;"></div>
      <span style="color: #dc2626; font-weight: bold; font-size: 9pt; position: absolute; margin-top: 20px; margin-left: 2px;">Correcteur</span>
    </div>
  </div>
  <div class="ehead-center">
    <span class="subject-title" style="color: #dc2626;">CORRECTIF D'ÉVEIL HISTORIQUE</span>
    <h1 class="lesson-title" style="color: #991b1b;">La frise chronologique</h1>
  </div>
  <div class="tot" style="border-color: #dc2626; color: #dc2626;">HIST</div>
</div>

<div class="cons-g" style="border-left-color: #dc2626; background: #fdf2f2; color: #991b1b;">Rappel&nbsp;: Ce document sert de guide de correction avec les réponses attendues surlignées en rouge.</div>

<!-- EXERCICE 1 -->
<div class="exo" style="margin-bottom: 24px;">
  <div class="xh"><h2>1. Des millénaires de repères</h2></div>
  <div class="body">
    <p class="consigne">Écris V (Vrai) ou F (Faux) dans la case correspondante pour chaque affirmation&nbsp;:</p>
    <div style="display: flex; flex-direction: column; gap: 14px; margin-left: 10px; margin-bottom: 4px;">
      <div class="vrai-faux-row">
        <span>Lucy, un australopithèque marchant debout il y a ~3 000 000 d'années, marque l'apparition des premiers humains.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 14pt; background: #fee2e2;">V</span>
      </div>
      <div class="vrai-faux-row">
        <span>L'écriture a été inventée à la même époque en Égypte et en Mésopotamie vers 3 000 av. J.-C., mettant fin à la Préhistoire.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 14pt; background: #fee2e2;">V</span>
      </div>
      <div class="vrai-faux-row">
        <span>Au Moyen Âge, les attaques répétées des Vikings aux IXe et Xe siècles ont favorisé l'apparition du système de protection féodal.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 14pt; background: #fee2e2;">V</span>
      </div>
      <div class="vrai-faux-row">
        <span>Durant les Temps Modernes, le roi Louis XIV (le Roi-Soleil) a mené des guerres de conquête qui ont touché des villes belges.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 14pt; background: #fee2e2;">V</span>
      </div>
      <div class="vrai-faux-row">
        <span>Le premier pas de l'homme sur la Lune lors de la mission américaine Apollo 11 a eu lieu en 1969.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 14pt; background: #fee2e2;">V</span>
      </div>
      <div class="vrai-faux-row" style="border-bottom: none; padding-bottom: 2px;">
        <span>L'indépendance de la Belgique a été proclamée en 1914 suite à l'invasion allemande lors de la Première Guerre mondiale.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 14pt; background: #fee2e2;">F</span>
      </div>
    </div>
  </div>
</div>

<!-- EXERCICE 2 -->
<div class="exo" style="margin-bottom: 24px;">
  <div class="xh"><h2>2. Les hommes et leurs grandes inventions</h2></div>
  <div class="body">
    <p class="consigne">Relie chaque grand progrès de l'humanité à son époque historique correspondante&nbsp;:</p>
    <div class="relier" style="display: grid; grid-template-columns: 200px 400px; gap: 20px 80px; align-items: center; margin-left: 10px; margin-bottom: 12px;">
      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px; border-color: #22c55e; background: #dcfce7; color: #166534;">Les dolmens de Wéris <span style="color: #dc2626; font-weight: bold; margin-left: auto;">[B]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px; border-color: #a855f7; background: #f3e8ff; color: #6b21a8;"><b>[A]</b> Temps Modernes (1517)</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px; border-color: #ef4444; background: #fee2e2; color: #991b1b;">La construction des pyramides <span style="color: #dc2626; font-weight: bold; margin-left: auto;">[D]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px; border-color: #22c55e; background: #dcfce7; color: #166534;"><b>[B]</b> Néolithique (~4 000 av. J.-C.)</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px; border-color: #a855f7; background: #f3e8ff; color: #6b21a8;">La Réforme de Martin Luther <span style="color: #dc2626; font-weight: bold; margin-left: auto;">[A]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px; border-color: #3b82f6; background: #dbeafe; color: #1e40af;"><b>[C]</b> Époque contemporaine (1760-1870)</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px; border-color: #3b82f6; background: #dbeafe; color: #1e40af;">La machine à vapeur <span style="color: #dc2626; font-weight: bold; margin-left: auto;">[C]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px; border-color: #ef4444; background: #fee2e2; color: #991b1b;"><b>[D]</b> Antiquité (~2 700 av. J.-C.)</div>
    </div>
  </div>
</div>

<!-- EXERCICE 3 -->
<div class="exo" style="margin-bottom: 0;">
  <div class="xh"><h2>3. Des vestiges mystérieux en Belgique</h2></div>
  <div class="body">
    <p class="consigne">Dans quelle commune de la province de Luxembourg peut-on observer le plus grand site mégalithique de dolmens de Belgique&nbsp;? Explique brièvement ce qu'est un dolmen.</p>
    <div class="lines" style="margin-left: 10px; margin-bottom: 4px;">
      <span style="height: 38px; color: #dc2626; font-weight: bold; font-family: 'Comic Neue', sans-serif; padding-top: 10px; box-sizing: border-box;">Commune&nbsp;: Wéris.</span>
      <span style="height: 38px; color: #dc2626; font-weight: bold; font-family: 'Comic Neue', sans-serif; padding-top: 10px; box-sizing: border-box;">Un dolmen est un monument mégalithique fait de grandes dalles de pierre,</span>
      <span style="height: 38px; color: #dc2626; font-weight: bold; font-family: 'Comic Neue', sans-serif; padding-top: 10px; box-sizing: border-box;">qui servait principalement de sépulture collective (tombe) au Néolithique.</span>
    </div>
  </div>
</div>
</div>


<!-- PAGE 2 (PAIRE - SANS EN-TÊTE) -->
<div class="sheet-container theme-eveil" style="padding-top: 20px; padding-bottom: 20px;">
<!-- EXERCICE 4 -->
<div class="exo" style="margin-bottom: 24px;">
  <div class="xh"><h2>4. Les grands tournants de l'Histoire</h2></div>
  <div class="body">
    <p class="consigne">Coche la seule bonne proposition pour chaque question&nbsp;:</p>
    
    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 16px;">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 1 : Quelle technique majeure a été maîtrisée par Homo erectus vers 300 000 av. J.-C. durant le Paléolithique&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> La fabrication du bronze</span>
        <span style="display: inline-flex; align-items: center; gap: 8px; color: #dc2626; font-weight: bold;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #dc2626; border-radius: 4px; margin: 0; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; background: #fee2e2;">✔</span> La maîtrise du feu</span>
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'écriture sur argile</span>
      </div>
    </div>

    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 16px;">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 2 : Quelle armée a été battue à Courtrai le 11 juillet 1302 par les milices flamandes de tisserands et artisans&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'armée romaine</span>
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'armée anglaise</span>
        <span style="display: inline-flex; align-items: center; gap: 8px; color: #dc2626; font-weight: bold;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #dc2626; border-radius: 4px; margin: 0; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; background: #fee2e2;">✔</span> L'armée française</span>
      </div>
    </div>

    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 16px;">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 3 : Qui a dirigé l'expédition maritime ayant réalisé le premier tour du monde complet entre 1519 et 1522&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Jules César</span>
        <span style="display: inline-flex; align-items: center; gap: 8px; color: #dc2626; font-weight: bold;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #dc2626; border-radius: 4px; margin: 0; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; background: #fee2e2;">✔</span> Ferdinand de Magellan</span>
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Christophe Colomb</span>
      </div>
    </div>

    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 4px;">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 4 : Quel pays a été envahi par l'Allemagne le 4 août 1914, brisant sa neutralité garantie par traité&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> La France</span>
        <span style="display: inline-flex; align-items: center; gap: 8px; color: #dc2626; font-weight: bold;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #dc2626; border-radius: 4px; margin: 0; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; background: #fee2e2;">✔</span> La Belgique</span>
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'Espagne</span>
      </div>
    </div>
  </div>
</div>

<!-- EXERCICE 5 -->
<div class="exo" style="margin-bottom: 24px;">
  <div class="xh"><h2>5. La Gaule romaine et l'invention de l'écriture</h2></div>
  <div class="body">
    <p class="consigne">a. Complète le paragraphe avec les mots de la banque suivante&nbsp;:</p>
    <div class="bank" style="margin-left: 10px; margin-bottom: 8px;">
      <span class="w">Jules César</span>
      <span class="w">Gaule belgique</span>
      <span class="w">Ambiorix</span>
      <span class="w">latines</span>
    </div>
    <p style="font-size: 11pt !important; line-height: 2.2; margin: 4px 0 12px 10px; font-weight: bold; font-family: 'Comic Neue', sans-serif !important;">
      En 52 av. J.-C., les légions romaines commandées par <span class="fill" style="min-width: 150px; color: #dc2626; text-align: center; display: inline-block;">Jules César</span> achèvent la conquête de la <span class="fill" style="min-width: 160px; color: #dc2626; text-align: center; display: inline-block;">Gaule belgique</span>. Malgré la résistance héroïque du chef des Éburons nommé <span class="fill" style="min-width: 150px; color: #dc2626; text-align: center; display: inline-block;">Ambiorix</span>, le territoire est intégré à l'Empire romain, apportant des voies romaines et des influences <span class="fill" style="min-width: 120px; color: #dc2626; text-align: center; display: inline-block;">latines</span>.
    </p>

    <p class="consigne" style="margin-top: 12px;">b. Explique pourquoi l'invention de l'écriture marque le passage de la Préhistoire à l'Histoire&nbsp;:</p>
    <div class="lines" style="margin-left: 10px; margin-bottom: 4px;">
      <span style="height: 38px; color: #dc2626; font-weight: bold; font-family: 'Comic Neue', sans-serif; padding-top: 10px; box-sizing: border-box;">L'écriture permet de transmettre le savoir, les comptes et les récits de façon permanente</span>
      <span style="height: 38px; color: #dc2626; font-weight: bold; font-family: 'Comic Neue', sans-serif; padding-top: 10px; box-sizing: border-box;">à travers les générations sans dépendre de la mémoire humaine et de la parole,</span>
      <span style="height: 38px; color: #dc2626; font-weight: bold; font-family: 'Comic Neue', sans-serif; padding-top: 10px; box-sizing: border-box;">ce qui marque le début des archives écrites de l'Histoire.</span>
    </div>
  </div>
</div>

<!-- EXERCICE 6 -->
<div class="exo" style="margin-bottom: 0;">
  <div class="xh"><h2>6. L'organisation de la société médiévale</h2></div>
  <div class="body">
    <p class="consigne">Associe chaque acteur de la société féodale du Moyen Âge à sa description&nbsp;:</p>
    <div class="relier" style="display: grid; grid-template-columns: 200px 400px; gap: 20px 80px; align-items: center; margin-left: 10px; margin-bottom: 4px;">
      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px; border-color: #ef4444; background: #fee2e2; color: #991b1b;">Le Roi <span style="color: #dc2626; font-weight: bold; margin-left: auto;">[C]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px; border-color: #3b82f6; background: #dbeafe; color: #1e40af;"><b>[A]</b> Prêtent serment de fidélité militaire en échange d'un domaine (fief).</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px; border-color: #a855f7; background: #f3e8ff; color: #6b21a8;">Les Seigneurs <span style="color: #dc2626; font-weight: bold; margin-left: auto;">[D]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px; border-color: #22c55e; background: #dcfce7; color: #166534;"><b>[B]</b> Paysans pauvres attachés à la terre qu'ils cultivent pour le seigneur.</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px; border-color: #3b82f6; background: #dbeafe; color: #1e40af;">Les Chevaliers Vassaux <span style="color: #dc2626; font-weight: bold; margin-left: auto;">[A]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px; border-color: #ef4444; background: #fee2e2; color: #991b1b;"><b>[C]</b> Suzerain suprême placé au sommet de la pyramide féodale.</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px; border-color: #22c55e; background: #dcfce7; color: #166534;">Les Serfs <span style="color: #dc2626; font-weight: bold; margin-left: auto;">[B]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px; border-color: #a855f7; background: #f3e8ff; color: #6b21a8;"><b>[D]</b> Possèdent de grandes terres et châteaux forts et protègent la population.</div>
    </div>
  </div>
</div>
</div>


<!-- PAGE 3 (IMPAIRE - AVEC EN-TÊTE) -->
<div class="sheet-container theme-eveil" style="padding-bottom: 20px;">
<div class="ehead" style="border-color: #dc2626; background: #fee2e2;">
  <div class="ehead-left">
    {svg_logo_html}
    <div class="prenom-box" style="border-color: #dc2626; background: #fff;">
      <span class="prenom-label" style="color: #dc2626;">Prénom</span>
      <div class="prenom-line" style="border-color: #dc2626; margin-top: 10px;"></div>
      <span style="color: #dc2626; font-weight: bold; font-size: 9pt; position: absolute; margin-top: 20px; margin-left: 2px;">Correcteur</span>
    </div>
  </div>
  <div class="ehead-center">
    <span class="subject-title" style="color: #dc2626;">CORRECTIF D'ÉVEIL HISTORIQUE</span>
    <h1 class="lesson-title" style="color: #991b1b;">La frise chronologique</h1>
  </div>
  <div class="tot" style="border-color: #dc2626; color: #dc2626;">HIST</div>
</div>

<!-- EXERCICE 7 -->
<div class="exo" style="margin-bottom: 24px;">
  <div class="xh"><h2>7. Les grandes figures du passé</h2></div>
  <div class="body">
    <p class="consigne">Relie chaque personnage historique marquant à son rôle&nbsp;:</p>
    <div class="relier" style="display: grid; grid-template-columns: 200px 400px; gap: 20px 80px; align-items: center; margin-left: 10px; margin-bottom: 12px;">
      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px; border-color: #ef4444; background: #fee2e2; color: #991b1b;">Clovis <span style="color: #dc2626; font-weight: bold; margin-left: auto;">[C]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px; border-color: #3b82f6; background: #dbeafe; color: #1e40af;"><b>[A]</b> Couronné Empereur d'Occident le 25 décembre 800 à Rome.</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px; border-color: #3b82f6; background: #dbeafe; color: #1e40af;">Charlemagne <span style="color: #dc2626; font-weight: bold; margin-left: auto;">[A]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px; border-color: #22c55e; background: #dcfce7; color: #166534;"><b>[B]</b> Industriel qui fonda une sidérurgie moderne à Seraing en 1817.</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px; border-color: #a855f7; background: #f3e8ff; color: #6b21a8;">Jeanne d'Arc <span style="color: #dc2626; font-weight: bold; margin-left: auto;">[D]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px; border-color: #ef4444; background: #fee2e2; color: #991b1b;"><b>[C]</b> Premier roi des Francs à se convertir au christianisme vers 496.</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; padding: 6px 10px; border-color: #22c55e; background: #dcfce7; color: #166534;">William Cockerill <span style="color: #dc2626; font-weight: bold; margin-left: auto;">[B]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left; padding: 6px 10px; border-color: #a855f7; background: #f3e8ff; color: #6b21a8;"><b>[D]</b> Jeune paysanne qui lutta contre les Anglais et périt en 1431.</div>
    </div>
  </div>
</div>

<!-- EXERCICE 8 -->
<div class="exo" style="margin-bottom: 24px;">
  <div class="xh"><h2>8. Crises, guerres et épidémies</h2></div>
  <div class="body">
    <p class="consigne">Écris V (Vrai) ou F (Faux) dans la case correspondante pour chaque affirmation&nbsp;:</p>
    <div style="display: flex; flex-direction: column; gap: 14px; margin-left: 10px; margin-bottom: 4px;">
      <div class="vrai-faux-row">
        <span>La terrible Peste Noire (1347-1353) a été propagée par des puces de rats noirs, tuant plus d'un tiers de la population d'Europe.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 14pt; background: #fee2e2;">V</span>
      </div>
      <div class="vrai-faux-row">
        <span>La Guerre de Trente Ans (1618-1648) a pris fin avec la signature des traités de paix de Westphalie.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 14pt; background: #fee2e2;">V</span>
      </div>
      <div class="vrai-faux-row">
        <span>Pendant la Seconde Guerre mondiale, la Caserne Dossin à Malines a servi de lieu de déportation pour les Juifs belges.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 14pt; background: #fee2e2;">V</span>
      </div>
      <div class="vrai-faux-row">
        <span>La chute de l'Empire romain d'Occident s'est produite en 1492, marquant la fin de l'Antiquité.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 14pt; background: #fee2e2;">F</span>
      </div>
      <div class="vrai-faux-row" style="border-bottom: none; padding-bottom: 2px;">
        <span>La chute du Mur de Berlin en 1989 a mis fin à la période tendue de la Guerre Froide entre les États-Unis et l'URSS.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 14pt; background: #fee2e2;">V</span>
      </div>
    </div>
  </div>
</div>

<!-- EXERCICE 9 -->
<div class="exo" style="margin-bottom: 0;">
  <div class="xh"><h2>9. La Renaissance et la science</h2></div>
  <div class="body">
    <p class="consigne">Quel astronome a affirmé en 1543 que la Terre tournait autour du Soleil (héliocentrisme), révolutionnant les sciences à la Renaissance&nbsp;? Explique la différence avec la croyance de l'époque.</p>
    <div class="lines" style="margin-left: 10px; margin-bottom: 4px;">
      <span style="height: 38px; color: #dc2626; font-weight: bold; font-family: 'Comic Neue', sans-serif; padding-top: 10px; box-sizing: border-box;">Astronome&nbsp;: Nicolas Copernic.</span>
      <span style="height: 38px; color: #dc2626; font-weight: bold; font-family: 'Comic Neue', sans-serif; padding-top: 10px; box-sizing: border-box;">L'héliocentrisme place le Soleil au centre de l'Univers avec la Terre tournant autour.</span>
      <span style="height: 38px; color: #dc2626; font-weight: bold; font-family: 'Comic Neue', sans-serif; padding-top: 10px; box-sizing: border-box;">La croyance de l'époque (géocentrisme) plaçait à tort la Terre immobile au centre de l'Univers.</span>
    </div>
  </div>
</div>
</div>


<!-- PAGE 4 (PAIRE - SANS EN-TÊTE) -->
<div class="sheet-container theme-eveil" style="padding-top: 20px; padding-bottom: 20px;">
<!-- EXERCICE 10 -->
<div class="exo" style="margin-bottom: 24px;">
  <div class="xh"><h2>10. La Belgique et l'ancien Congo belge</h2></div>
  <div class="body">
    <p class="consigne">a. Complète le texte sur la colonisation et la décolonisation avec les mots de la banque&nbsp;:</p>
    <div class="bank" style="margin-left: 10px; margin-bottom: 8px;">
      <span class="w">Léopold II</span>
      <span class="w">colonie belge</span>
      <span class="w">indépendance</span>
      <span class="w">Patrice Lumumba</span>
    </div>
    <p style="font-size: 11pt !important; line-height: 2.2; margin: 4px 0 12px 10px; font-weight: bold; font-family: 'Comic Neue', sans-serif !important;">
      De 1885 à 1908, le Congo est d'abord la propriété personnelle du roi <span class="fill" style="min-width: 140px; color: #dc2626; text-align: center; display: inline-block;">Léopold II</span>, avant d'être cédé et de devenir une <span class="fill" style="min-width: 150px; color: #dc2626; text-align: center; display: inline-block;">colonie belge</span>. Le 30 juin 1960, le pays obtient enfin son <span class="fill" style="min-width: 140px; color: #dc2626; text-align: center; display: inline-block;">indépendance</span>, et le leader politique <span class="fill" style="min-width: 160px; color: #dc2626; text-align: center; display: inline-block;">Patrice Lumumba</span> devient le premier Premier ministre du Congo libre.
    </p>

    <p class="consigne" style="margin-top: 12px;">b. Explique quel débat ou travail de mémoire existe-t-il aujourd'hui en Belgique concernant ce passé colonial&nbsp;:</p>
    <div class="lines" style="margin-left: 10px; margin-bottom: 4px;">
      <span style="height: 38px; color: #dc2626; font-weight: bold; font-family: 'Comic Neue', sans-serif; padding-top: 10px; box-sizing: border-box;">Le débat concerne la reconnaissance des exactions commises sous Léopold II (travail forcé...),</span>
      <span style="height: 38px; color: #dc2626; font-weight: bold; font-family: 'Comic Neue', sans-serif; padding-top: 10px; box-sizing: border-box;">le sort des richesses pillées et la réécriture des manuels scolaires (travail de décolonisation de la</span>
      <span style="height: 38px; color: #dc2626; font-weight: bold; font-family: 'Comic Neue', sans-serif; padding-top: 10px; box-sizing: border-box;">mémoire et débats sur les statues et noms de rues de Léopold II).</span>
    </div>
  </div>
</div>

<!-- EXERCICE 11 -->
<div class="exo" style="margin-bottom: 24px;">
  <div class="xh"><h2>11. Institutions belges et européennes</h2></div>
  <div class="body">
    <p class="consigne">Coche la seule bonne proposition pour chaque question&nbsp;:</p>
    
    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 16px;">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 1 : Dans quelle ville ont été établies les principales institutions de l'Union européenne&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Tongres</span>
        <span style="display: inline-flex; align-items: center; gap: 8px; color: #dc2626; font-weight: bold;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #dc2626; border-radius: 4px; margin: 0; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; background: #fee2e2;">✔</span> Bruxelles</span>
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Namur</span>
      </div>
    </div>

    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 16px;">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 2 : Quel homme politique belge est considéré comme l'un des pères fondateurs de la construction européenne&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Ambiorix</span>
        <span style="display: inline-flex; align-items: center; gap: 8px; color: #dc2626; font-weight: bold;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #dc2626; border-radius: 4px; margin: 0; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; background: #fee2e2;">✔</span> Paul-Henri Spaak</span>
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Jules César</span>
      </div>
    </div>

    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 4px;">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 3 : En quelle année la Belgique est-elle officiellement devenue un État fédéral après plusieurs réformes&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> En 1830</span>
        <span style="display: inline-flex; align-items: center; gap: 8px; color: #dc2626; font-weight: bold;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #dc2626; border-radius: 4px; margin: 0; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; background: #fee2e2;">✔</span> En 1993</span>
        <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> En 2015</span>
      </div>
    </div>
  </div>
</div>

<!-- EXERCICE 12 -->
<div class="exo" style="margin-bottom: 0;">
  <div class="xh"><h2>12. Classement chronologique de l'Histoire</h2></div>
  <div class="body">
    <p class="consigne">Classe ces événements historiques du plus ancien (écris 1) au plus récent (écris 6) dans la case correspondante&nbsp;:</p>
    <div style="display: flex; flex-direction: column; gap: 12px; margin-left: 10px; margin-bottom: 4px;">
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1.5px solid var(--ligne); padding-bottom: 6px;">
        <span>Couronnement de Charlemagne à Rome (Moyen Âge)</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 14pt; background: #fee2e2;">4</span>
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1.5px solid var(--ligne); padding-bottom: 6px;">
        <span>La révolution néolithique (naissance de l'agriculture et sédentarisation, Préhistoire)</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 14pt; background: #fee2e2;">1</span>
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1.5px solid var(--ligne); padding-bottom: 6px;">
        <span>Premier pas de l'homme sur la Lune (Époque contemporaine)</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 14pt; background: #fee2e2;">5</span>
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1.5px solid var(--ligne); padding-bottom: 6px;">
        <span>Découverte de l'Amérique par Christophe Colomb (Temps Modernes)</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 14pt; background: #fee2e2;">3</span>
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1.5px solid var(--ligne); padding-bottom: 6px;">
        <span>Invention de l'écriture en Mésopotamie et en Égypte (Antiquité)</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 14pt; background: #fee2e2;">2</span>
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 2px;">
        <span>Chute du Mur de Berlin et fin de la Guerre Froide (Époque contemporaine)</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 14pt; background: #fee2e2;">6</span>
      </div>
    </div>
  </div>
</div>
</div>
"""
# Typographic replacements for French spacing
correctif_body = correctif_body.replace(' ?', '&nbsp;?').replace(' :', '&nbsp;:')

# ==============================================================================
# 3. GENERATION
# ==============================================================================

# A. Student version
print(f"Writing to {output_path}")
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(head_part)
    f.write(student_body)
    f.write("\n</body>\n</html>\n")

print(f"Writing to {output_path_fiches}")
os.makedirs(os.path.dirname(output_path_fiches), exist_ok=True)
with open(output_path_fiches, 'w', encoding='utf-8') as f:
    f.write(head_part)
    f.write(student_body)
    f.write("\n</body>\n</html>\n")

# B. Correctif version
print(f"Writing to {output_path_corr}")
with open(output_path_corr, 'w', encoding='utf-8') as f:
    f.write(head_part)
    f.write(correctif_body)
    f.write("\n</body>\n</html>\n")

print(f"Writing to {output_path_corr_fiches}")
os.makedirs(os.path.dirname(output_path_corr_fiches), exist_ok=True)
with open(output_path_corr_fiches, 'w', encoding='utf-8') as f:
    f.write(head_part)
    f.write(correctif_body)
    f.write("\n</body>\n</html>\n")

print("Build completed successfully for both student and correctif versions!")
