import os

template_path = "/Users/jeremy/antigravity/LCML/gabarit-questionnaire-LCML.html"
output_path = "/Users/jeremy/antigravity/LCML/questionnaire-respiratoire-LCML.html"
output_path_fiches = "/Users/jeremy/antigravity/LCML/fiches/questionnaire-respiratoire-LCML.html"

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

# Replace 'Évaluation — gabarit LCML' with 'Questionnaire — L\'appareil respiratoire' in title tag
head_part = head_part.replace(
    '<title>Évaluation — gabarit LCML</title>',
    '<title>Questionnaire — L\'appareil respiratoire</title>'
)

# Extract SVG logo from the template (between '<svg class="lg"' and '</svg>')
svg_start = template_content.find('<svg class="lg"')
svg_end = template_content.find('</svg>', svg_start) + len('</svg>')
svg_logo_html = template_content[svg_start:svg_end]

# Define body HTML (2 pages A4, matching the exact styling of the template)
body_html = f"""
<div class="sheet-container theme-eveil">
<div class="ehead">
  <div class="ehead-left">
    {svg_logo_html}
    <div class="prenom-box">
      <span class="prenom-label">Prénom</span>
      <div class="prenom-line"></div>
    </div>
  </div>
  <div class="ehead-center">
    <span class="subject-title">Éveil scientifique</span>
    <h1 class="lesson-title">L'appareil respiratoire</h1>
  </div>
  <div class="tot">SC</div>
</div>

<div class="cons-g">Lis attentivement chaque consigne, puis réponds. Soigne ton écriture et relis-toi à la fin.</div>

<!-- EXERCICE 1 -->
<div class="exo">
  <div class="xh"><h2>1. L'anatomie de l'appareil respiratoire</h2></div>
  <div class="body">
    <p class="consigne">a. Relie chaque organe respiratoire à son rôle anatomique précis&nbsp;:</p>
    <div class="relier" style="display: grid; grid-template-columns: 140px 440px; gap: 12px 60px; align-items: center; margin-left: 10px; margin-bottom: 12px;">
      <div class="it">Fosses nasales</div>
      <div class="it" style="text-align: left;">Carrefour de la gorge équipé de l'épiglotte pour guider l'air et bloquer les aliments.</div>

      <div class="it">Pharynx</div>
      <div class="it" style="text-align: left;">Organe spongieux divisé en seulement deux lobes pour laisser de la place au cœur.</div>

      <div class="it">Trachée</div>
      <div class="it" style="text-align: left;">Filtrent, réchauffent et humidifient l'air grâce aux poils et au mucus.</div>

      <div class="it">Poumon gauche</div>
      <div class="it" style="text-align: left;">Conduit muni d'anneaux de cartilage rigides et de cils vibratiles pour filtrer la poussière.</div>
    </div>

    <p class="consigne" style="margin-top: 12px;">b. Complète le paragraphe sur le trajet de l'air avec les mots de la banque&nbsp;:</p>
    <div class="bank" style="margin-left: 10px; margin-bottom: 8px;">
      <span class="w">fosses nasales</span>
      <span class="w">pharynx</span>
      <span class="w">trachée</span>
      <span class="w">bronchioles</span>
    </div>
    <ul style="margin-left: 10px; margin-top: 4px; line-height: 2.2;">
      <li>Lors de l'inspiration, l'air entre par les <span class="fill" style="min-width: 170px;"></span> où il est filtré et réchauffé. Il passe ensuite par le <span class="fill" style="min-width: 125px;"></span>, traverse la <span class="fill" style="min-width: 125px;"></span>, puis circule dans les bronches et les <span class="fill" style="min-width: 155px;"></span> pour atteindre les alvéoles.</li>
    </ul>
  </div>
</div>

<!-- EXERCICE 2 -->
<div class="exo">
  <div class="xh"><h2>2. La mécanique de la ventilation</h2></div>
  <div class="body">
    <p class="consigne">a. Coche la case correspondant à chaque action mécanique&nbsp;:</p>
    <table class="tbl" style="margin-left: 10px; margin-bottom: 8px; width: calc(100% - 10px);">
      <tr>
        <th style="width: 60%; text-align: left;">Action mécanique lors du souffle</th>
        <th style="width: 20%; text-align: center;">Inspiration</th>
        <th style="width: 20%; text-align: center;">Expiration</th>
      </tr>
      <tr>
        <td>Le diaphragme se contracte et s'abaisse (s'aplatit).</td>
        <td style="text-align: center; vertical-align: middle;"><span class="fillbox" style="margin: 0;"></span></td>
        <td style="text-align: center; vertical-align: middle;"><span class="fillbox" style="margin: 0;"></span></td>
      </tr>
      <tr>
        <td>La cage thoracique se resserre et s'abaisse vers l'intérieur.</td>
        <td style="text-align: center; vertical-align: middle;"><span class="fillbox" style="margin: 0;"></span></td>
        <td style="text-align: center; vertical-align: middle;"><span class="fillbox" style="margin: 0;"></span></td>
      </tr>
      <tr>
        <td>Le volume des poumons augmente, ce qui aspire l'air.</td>
        <td style="text-align: center; vertical-align: middle;"><span class="fillbox" style="margin: 0;"></span></td>
        <td style="text-align: center; vertical-align: middle;"><span class="fillbox" style="margin: 0;"></span></td>
      </tr>
      <tr>
        <td>L'air riche en dioxyde de carbone est rejeté vers l'extérieur.</td>
        <td style="text-align: center; vertical-align: middle;"><span class="fillbox" style="margin: 0;"></span></td>
        <td style="text-align: center; vertical-align: middle;"><span class="fillbox" style="margin: 0;"></span></td>
      </tr>
    </table>
  </div>
</div>

<!-- EXERCICE 3 -->
<div class="exo">
  <div class="xh"><h2>3. L'observation de l'alvéole pulmonaire et les échanges gazeux</h2></div>
  <div class="body">
    <div style="display: grid; grid-template-columns: 240px 1fr; gap: 20px; align-items: flex-start; margin-left: 10px; margin-top: 4px; margin-bottom: 4px;">
      <div class="imgcard" style="margin: 0;">
        <img src="photos/echanges_gazeux.png" style="width:100%; height:130px; object-fit:contain; background:#fff; margin-bottom: 4px;">
        <figcaption>Zoom sur l'alvéole pulmonaire</figcaption>
      </div>
      <div style="display: flex; flex-direction: column; justify-content: flex-start;">
        <p class="consigne" style="margin: 0 0 8px 0;">a. Observe le schéma de l'alvéole. Explique comment change la couleur du sang lorsqu'il circule autour de l'alvéole, et quel gaz il a récupéré&nbsp;:</p>
        <div class="lines">
          <span style="height: 36px;"></span>
          <span style="height: 36px;"></span>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<div class="sheet-container theme-eveil" style="padding-top: 15px;">
<!-- EXERCICE 4 -->
<div class="exo">
  <div class="xh"><h2>4. La chimie de la respiration (respiration cellulaire)</h2></div>
  <div class="body">
    <p class="consigne">Coche la bonne proposition pour chaque question&nbsp;:</p>
    
    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 14px;">
      <p style="margin: 0 0 6px; font-weight: bold;">Question 1 : Comment appelle-t-on la réaction chimique microscopique qui produit de l'énergie dans nos cellules à partir du sucre et de l'oxygène&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> La ventilation mécanique</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> La respiration cellulaire</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> La digestion chimique</span>
      </div>
    </div>

    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 14px;">
      <p style="margin: 0 0 6px; font-weight: bold;">Question 2 : Quelle est l'équation chimique complète de cette réaction&nbsp;?</p>
      <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Sucre + Oxygène ➔ Énergie + CO2 + Eau</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Oxygène + CO2 ➔ Sucre + Énergie</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Sucre + Eau ➔ Oxygène + CO2</span>
      </div>
    </div>

    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 4px;">
      <p style="margin: 0 0 6px; font-weight: bold;">Question 3 : Dans une classe fermée, quel gaz s'accumule à cause de la respiration et provoque de la fatigue&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Le dioxygène (O2)</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Le dioxyde de carbone (CO2)</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'azote (N2)</span>
      </div>
    </div>
  </div>
</div>

<!-- EXERCICE 5 -->
<div class="exo">
  <div class="xh"><h2>5. Vrai ou Faux&nbsp;?</h2></div>
  <div class="body">
    <p class="consigne">Écris V (Vrai) ou F (Faux) dans la case correspondante pour chaque affirmation&nbsp;:</p>
    <div style="display: flex; flex-direction: column; gap: 12px; margin-left: 10px; margin-bottom: 4px;">
      <div class="vrai-faux-row">
        <span>Les goudrons de la cigarette détruisent la paroi des alvéoles et collent les cils de la trachée.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row">
        <span>Les poumons sont des muscles qui se contractent tout seuls pour aspirer l'air.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row">
        <span>Aérer régulièrement la classe permet de remplacer le CO2 accumulé par de l'oxygène frais.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row">
        <span>Le poumon gauche est légèrement plus petit que le poumon droit pour laisser de la place au cœur.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row" style="border-bottom: none; padding-bottom: 4px;">
        <span>L'asthme est une maladie qui élargit le diamètre des bronches pour faciliter le souffle.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
    </div>
  </div>
</div>

<!-- EXERCICE 6 -->
<div class="exo">
  <div class="xh"><h2>6. Les chiffres records et réactions réflexes</h2></div>
  <div class="body">
    <p class="consigne">a. Relie chaque chiffre incroyable du système respiratoire à sa signification&nbsp;:</p>
    <div class="relier" style="display: grid; grid-template-columns: 140px 440px; gap: 12px 60px; align-items: center; margin-left: 10px; margin-bottom: 12px;">
      <div class="it">12 000 Litres</div>
      <div class="it" style="text-align: left;">Surface totale occupée par les 600 millions d'alvéoles si on les étalait à plat.</div>

      <div class="it">2 400 Kilomètres</div>
      <div class="it" style="text-align: left;">Quantité moyenne d'eau rejetée par jour sous forme de vapeur d'eau en expirant.</div>

      <div class="it">Demi-terrain de tennis</div>
      <div class="it" style="text-align: left;">Volume total moyen d'air qui passe dans nos poumons chaque jour.</div>

      <div class="it">0,5 Litre</div>
      <div class="it" style="text-align: left;">Longueur cumulée de toutes les ramifications bronchiques mises bout à bout.</div>
    </div>

    <p class="consigne">b. Quelle réaction réflexe involontaire se produit pour nettoyer immédiatement ton nez lorsqu'une poussière l'irrite&nbsp;?</p>
    <div class="lines" style="margin-left: 10px; margin-bottom: 4px;">
      <span style="height: 32px;"></span>
    </div>
  </div>
</div>
</div>
</body></html>
"""

# Write to root path
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(head_part)
    f.write(body_html)

# Write to fiches path
with open(output_path_fiches, 'w', encoding='utf-8') as f:
    f.write(head_part)
    f.write(body_html)

print("HTML generated successfully in both locations!")
