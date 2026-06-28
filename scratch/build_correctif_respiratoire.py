import os

template_path = "/Users/jeremy/antigravity/LCML/gabarit-questionnaire-LCML.html"
output_path = "/Users/jeremy/antigravity/LCML/correctif-respiratoire-LCML.html"
output_path_fiches = "/Users/jeremy/antigravity/LCML/fiches/correctif-respiratoire-LCML.html"

# Read template
with open(template_path, 'r', encoding='utf-8') as f:
    template_content = f.read()

# Split at '</style></head><body>' to isolate the head and fonts
head_part, _ = template_content.split('</style></head><body>', 1)

# Append correctif-specific print styles to the CSS block before closing style tag
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
head_part = head_part.replace('</style>', correctif_styles + '</style>')
head_part += '</style></head><body>\n'

# Set Eveil green color scheme as default in :root
head_part = head_part.replace(
    '/* Theme par defaut : Francais (Ocre) */\n  --matiere: #b16a09;\n  --matiere-fond: #f7efe2;\n  --matiere-f: #8a5003;',
    '/* Theme par defaut : Eveil (Vert forêt) */\n  --matiere: #2f8457;\n  --matiere-fond: #eef6f0;\n  --matiere-f: #1e5637;'
)

# Replace title
head_part = head_part.replace(
    '<title>Évaluation — gabarit LCML</title>',
    '<title>Correctif — L\'appareil respiratoire</title>'
)

# Extract SVG logo
svg_start = template_content.find('<svg class="lg"')
svg_end = template_content.find('</svg>', svg_start) + len('</svg>')
svg_logo_html = template_content[svg_start:svg_end]

# Define body HTML (prefilled with red answers)
body_html = f"""
<div class="no-print-zone">
  <div>
    <h2>CORRECTIF OFFICIEL – L'appareil respiratoire</h2>
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

<div class="sheet-container theme-eveil">
<div class="ehead">
  <div class="ehead-left">
    {svg_logo_html}
    <div class="prenom-box">
      <span class="prenom-label">Prénom</span>
      <div class="prenom-line" style="color: #dc2626; font-weight: bold; font-family: 'Comic Neue', sans-serif; font-size: 11pt; padding-left: 10px; line-height: 20px;">Correcteur</div>
    </div>
  </div>
  <div class="ehead-center">
    <span class="subject-title">Éveil scientifique</span>
    <h1 class="lesson-title">L'appareil respiratoire (Correctif)</h1>
  </div>
  <div class="tot">SC</div>
</div>

<div class="cons-g">Rappel&nbsp;: Ce document sert de guide de correction officiel pour évaluer les travaux des élèves.</div>

<!-- EXERCICE 1 -->
<div class="exo">
  <div class="xh"><h2>1. L'anatomie de l'appareil respiratoire</h2></div>
  <div class="body">
    <p class="consigne">a. Relie chaque organe respiratoire à son rôle anatomique précis&nbsp;:</p>
    <div class="relier" style="display: grid; grid-template-columns: 140px 440px; gap: 12px 60px; align-items: center; margin-left: 10px; margin-bottom: 12px;">
      <div class="it">Fosses nasales <strong style="color: #dc2626; float: right; margin-right: 4px;">[C]</strong></div>
      <div class="it" style="text-align: left;"><strong style="color: #dc2626; margin-right: 4px;">[A]</strong> Carrefour de la gorge équipé de l'épiglotte pour guider l'air et bloquer les aliments.</div>

      <div class="it">Pharynx <strong style="color: #dc2626; float: right; margin-right: 4px;">[A]</strong></div>
      <div class="it" style="text-align: left;"><strong style="color: #dc2626; margin-right: 4px;">[B]</strong> Organe spongieux divisé en seulement deux lobes pour laisser de la place au cœur.</div>

      <div class="it">Trachée <strong style="color: #dc2626; float: right; margin-right: 4px;">[D]</strong></div>
      <div class="it" style="text-align: left;"><strong style="color: #dc2626; margin-right: 4px;">[C]</strong> Filtrent, réchauffent et humidifient l'air grâce aux poils et au mucus.</div>

      <div class="it">Poumon gauche <strong style="color: #dc2626; float: right; margin-right: 4px;">[B]</strong></div>
      <div class="it" style="text-align: left;"><strong style="color: #dc2626; margin-right: 4px;">[D]</strong> Conduit muni d'anneaux de cartilage rigides et de cils vibratiles pour filtrer la poussière.</div>
    </div>

    <p class="consigne" style="margin-top: 12px;">b. Complète le paragraphe sur le trajet de l'air avec les mots de la banque&nbsp;:</p>
    <div class="bank" style="margin-left: 10px; margin-bottom: 8px;">
      <span class="w">fosses nasales</span>
      <span class="w">pharynx</span>
      <span class="w">trachée</span>
      <span class="w">bronchioles</span>
    </div>
    <ul style="margin-left: 10px; margin-top: 4px; line-height: 2.2;">
      <li>Lors de l'inspiration, l'air entre par les <span class="fill" style="min-width: 170px; text-align: center; color: #dc2626; font-weight: bold;">fosses nasales</span> où il est filtré et réchauffé. Il passe ensuite par le <span class="fill" style="min-width: 125px; text-align: center; color: #dc2626; font-weight: bold;">pharynx</span>, traverse la <span class="fill" style="min-width: 125px; text-align: center; color: #dc2626; font-weight: bold;">trachée</span>, puis circule dans les bronches et les <span class="fill" style="min-width: 155px; text-align: center; color: #dc2626; font-weight: bold;">bronchioles</span> pour atteindre les alvéoles.</li>
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
        <td style="text-align: center; vertical-align: middle;"><span class="fillbox" style="margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 12pt; background: #fee2e2; border-color: #dc2626;">✔</span></td>
        <td style="text-align: center; vertical-align: middle;"><span class="fillbox" style="margin: 0;"></span></td>
      </tr>
      <tr>
        <td>La cage thoracique se resserre et s'abaisse vers l'intérieur.</td>
        <td style="text-align: center; vertical-align: middle;"><span class="fillbox" style="margin: 0;"></span></td>
        <td style="text-align: center; vertical-align: middle;"><span class="fillbox" style="margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 12pt; background: #fee2e2; border-color: #dc2626;">✔</span></td>
      </tr>
      <tr>
        <td>Le volume des poumons augmente, ce qui aspire l'air.</td>
        <td style="text-align: center; vertical-align: middle;"><span class="fillbox" style="margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 12pt; background: #fee2e2; border-color: #dc2626;">✔</span></td>
        <td style="text-align: center; vertical-align: middle;"><span class="fillbox" style="margin: 0;"></span></td>
      </tr>
      <tr>
        <td>L'air riche en dioxyde de carbone est rejeté vers l'extérieur.</td>
        <td style="text-align: center; vertical-align: middle;"><span class="fillbox" style="margin: 0;"></span></td>
        <td style="text-align: center; vertical-align: middle;"><span class="fillbox" style="margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 12pt; background: #fee2e2; border-color: #dc2626;">✔</span></td>
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
          <span style="height: 36px; color: #dc2626; font-weight: bold; padding-top: 8px; line-height: 28px; padding-left: 8px;">Le sang pauvre en oxygène (bleu-violet) se recharge en dioxygène (O2)</span>
          <span style="height: 36px; color: #dc2626; font-weight: bold; padding-top: 8px; line-height: 28px; padding-left: 8px;">au niveau de l'alvéole et ressort de couleur rouge vif.</span>
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
        <span style="display: flex; align-items: center; gap: 8px; font-weight: bold; color: #dc2626;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #dc2626; border-radius: 4px; margin: 0; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; background: #fee2e2;">✔</span> La respiration cellulaire</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> La digestion chimique</span>
      </div>
    </div>

    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 14px;">
      <p style="margin: 0 0 6px; font-weight: bold;">Question 2 : Quelle est l'équation chimique complète de cette réaction&nbsp;?</p>
      <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: flex; align-items: center; gap: 8px; font-weight: bold; color: #dc2626;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #dc2626; border-radius: 4px; margin: 0; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; background: #fee2e2;">✔</span> Sucre + Oxygène ➔ Énergie + CO2 + Eau</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Oxygène + CO2 ➔ Sucre + Énergie</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Sucre + Eau ➔ Oxygène + CO2</span>
      </div>
    </div>

    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 4px;">
      <p style="margin: 0 0 6px; font-weight: bold;">Question 3 : Dans une classe fermée, quel gaz s'accumule à cause de la respiration et provoque de la fatigue&nbsp;?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Le dioxygène (O2)</span>
        <span style="display: flex; align-items: center; gap: 8px; font-weight: bold; color: #dc2626;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #dc2626; border-radius: 4px; margin: 0; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; background: #fee2e2;">✔</span> Le dioxyde de carbone (CO2)</span>
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
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 12pt; background: #fee2e2;">V</span>
      </div>
      <div class="vrai-faux-row">
        <span>Les poumons sont des muscles qui se contractent tout seuls pour aspirer l'air.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 12pt; background: #fee2e2;">F</span>
      </div>
      <div class="vrai-faux-row">
        <span>Aérer régulièrement la classe permet de remplacer le CO2 accumulé par de l'oxygène frais.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 12pt; background: #fee2e2;">V</span>
      </div>
      <div class="vrai-faux-row">
        <span>Le poumon gauche est légèrement plus petit que le poumon droit pour laisser de la place au cœur.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 12pt; background: #fee2e2;">V</span>
      </div>
      <div class="vrai-faux-row" style="border-bottom: none; padding-bottom: 4px;">
        <span>L'asthme est une maladie qui élargit le diamètre des bronches pour faciliter le souffle.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; color: #dc2626; font-weight: bold; font-size: 12pt; background: #fee2e2;">F</span>
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
      <div class="it">12 000 Litres <strong style="color: #dc2626; float: right; margin-right: 4px;">[C]</strong></div>
      <div class="it" style="text-align: left;"><strong style="color: #dc2626; margin-right: 4px;">[A]</strong> Surface totale occupée par les 600 millions d'alvéoles si on les étalait à plat.</div>

      <div class="it">2 400 Kilomètres <strong style="color: #dc2626; float: right; margin-right: 4px;">[D]</strong></div>
      <div class="it" style="text-align: left;"><strong style="color: #dc2626; margin-right: 4px;">[B]</strong> Quantité moyenne d'eau rejetée par jour sous forme de vapeur d'eau en expirant.</div>

      <div class="it">Demi-terrain de tennis <strong style="color: #dc2626; float: right; margin-right: 4px;">[A]</strong></div>
      <div class="it" style="text-align: left;"><strong style="color: #dc2626; margin-right: 4px;">[C]</strong> Volume total moyen d'air qui passe dans nos poumons chaque jour.</div>

      <div class="it">0,5 Litre <strong style="color: #dc2626; float: right; margin-right: 4px;">[B]</strong></div>
      <div class="it" style="text-align: left;"><strong style="color: #dc2626; margin-right: 4px;">[D]</strong> Longueur cumulée de toutes les ramifications bronchiques mises bout à bout.</div>
    </div>

    <p class="consigne">b. Quelle réaction réflexe involontaire se produit pour nettoyer immédiatement ton nez lorsqu'une poussière l'irrite&nbsp;?</p>
    <div class="lines" style="margin-left: 10px; margin-bottom: 4px;">
      <span style="height: 32px; color: #dc2626; font-weight: bold; padding-top: 6px; line-height: 24px; padding-left: 8px;">C'est un éternuement : l'air est expulsé très vite pour chasser les poussières.</span>
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
