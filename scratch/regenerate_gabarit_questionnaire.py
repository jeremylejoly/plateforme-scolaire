import os
import re

source_path = "/Users/jeremy/antigravity/LCML/gabarit-evaluation-LCML.html"
target_project_path = "/Users/jeremy/antigravity/LCML/gabarit-questionnaire-LCML.html"
target_downloads_path = "/Users/jeremy/Downloads/gabarit-questionnaire-LCML.html"

if not os.path.exists(source_path):
    print(f"Error: Source file {source_path} does not exist!")
    exit(1)

with open(source_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update variables and themes block
new_root = """:root {
  --ardoise: #000000;
  --ligne: #d1d5db;
  --encre: #000000;
  /* Theme par defaut : Francais (Ocre) */
  --matiere: #b16a09;
  --matiere-fond: #f7efe2;
  --matiere-f: #8a5003;
}

.theme-francais {
  --matiere: #b16a09;
  --matiere-fond: #f7efe2;
  --matiere-f: #8a5003;
}

.theme-maths {
  --matiere: #c8102e;
  --matiere-fond: #fbe7ea;
  --matiere-f: #7f0b1e;
}

.theme-eveil {
  --matiere: #2f8457;
  --matiere-fond: #eef6f0;
  --matiere-f: #1e5637;
}

/* Page break between sheets in print and display */
.sheet-container {
  page-break-after: always;
  break-after: page;
}
.sheet-container:last-child {
  page-break-after: avoid;
  break-after: avoid;
}"""

content = re.sub(r':root\s*\{.*?--vert:#2e7d32\}', new_root, content, flags=re.DOTALL)

# 2. Update .tot CSS styling
old_tot_css = ".tot{flex:none;background:#ffffff;border:2px solid #1E1F29;border-radius:12px;width:80px;height:38px;padding:0;min-width:unset}"
new_tot_css = ".tot{flex:none;background:#ffffff;border:2px solid #000000;border-radius:12px;width:90px;height:54px;padding:0;min-width:unset;display:flex;align-items:center;padding-left:10px;font-family:'Fredoka',sans-serif;font-size:12pt;font-weight:bold;color:#000000;box-sizing:border-box}"
content = content.replace(old_tot_css, new_tot_css)

# 3. Update CSS overrides block
old_overrides_pattern = r"/\* Règle globale pour la partie exercices.*\.cor h3\{font-size:11pt !important\}"
new_overrides = """/* Règle globale pour la partie exercices (Comic Neue et tailles réduites avec !important pour surclasser la cascade) */
body > *:not(.ehead), body > *:not(.ehead) * { font-family: 'Comic Neue', sans-serif !important; }
.cons-g{font-size:12pt !important}
.exo>.xh h2{font-size:14pt !important}
.exo>.xh .pts{font-size:12pt !important}
.consigne{font-size:12pt !important}
.consigne .sp{font-size:12pt !important}
.bank .w{font-size:12pt !important;color:#000000 !important}
.relier .it{font-size:12pt !important}
.note{font-size:12pt !important}
.corrhead h1{font-size:18pt !important}
.corrhead .meta{font-size:12pt !important}
.cor h3{font-size:12pt !important}
figcaption{font-size:12pt !important;color:#000000 !important}

/* Règles pour forcer le saut de page PROPRE (sans couper au milieu d'une question, case à cocher ou ligne) */
p, li, tr, figcaption, .qcm-item, .vrai-faux-row, .consigne, .cons-g, label, .relier .it, .bank .w, .lines > span, .fillbox {
  break-inside: avoid !important;
  page-break-inside: avoid !important;
}
.vrai-faux-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1.5px dashed #000000;
  padding-bottom: 8px;
}"""

content = re.sub(old_overrides_pattern, new_overrides, content, flags=re.DOTALL)

# 4. Insert XXX in the HTML tot box
content = content.replace('<div class="tot"></div>', '<div class="tot">XXX</div>')

# 5. Build QCM and Vrai/Faux sample exercises
qcm_html = """<!-- ============ MODÈLE : QCM (Questionnaire à Choix Multiples) ============ -->
<div class="exo">
  <div class="xh"><h2>4. Questionnaire à choix multiples (QCM)</h2></div>
  <div class="body">
    <p class="consigne">Coche la bonne proposition pour chaque question.</p>
    <div class="qcm-item" style="margin-bottom: 14px;">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 1 : Quelle est la capitale de la Belgique ?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Bruxelles</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Liège</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Namur</span>
      </div>
    </div>
    <div class="qcm-item">
      <p style="margin: 0 0 8px; font-weight: bold;">Question 2 : Combien font 7 x 8 ?</p>
      <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-left: 10px;">
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> 48</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> 54</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> 56</span>
      </div>
    </div>
  </div>
</div>"""

vrai_faux_html = """<!-- ============ MODÈLE : Vrai ou Faux ? ============ -->
<div class="exo">
  <div class="xh"><h2>5. Vrai ou Faux ?</h2></div>
  <div class="body">
    <p class="consigne">Écris V (Vrai) ou F (Faux) dans la case correspondante pour chaque affirmation.</p>
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div class="vrai-faux-row">
        <span>La Terre tourne autour du Soleil en 365 jours.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row">
        <span>Le chien est un animal herbivore.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
      <div class="vrai-faux-row" style="border-bottom: none; padding-bottom: 4px;">
        <span>L'eau bout à la température de 100°C.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
      </div>
    </div>
  </div>
</div>"""

# Insert exercises inside body content
body_match = re.search(r"<body>(.*?)</body>", content, re.DOTALL)
if not body_match:
    print("Error: <body> tag not found!")
    exit(1)

original_body = body_match.group(1).strip()
extended_body = original_body + "\n\n" + qcm_html + "\n\n" + vrai_faux_html

# 6. Duplicate and theme body content for French, Math, Éveil
normalized_body = re.sub(r'<div class="eyebrow">.*?</div>', '<div class="eyebrow">{EYEBROW_PLACEHOLDER}</div>', extended_body)

francais_body = '<div class="sheet-container theme-francais">\n' + normalized_body.replace("{EYEBROW_PLACEHOLDER}", "FRANÇAIS") + '\n</div>'
maths_body = '<div class="sheet-container theme-maths">\n' + normalized_body.replace("{EYEBROW_PLACEHOLDER}", "MATHÉMATIQUES") + '\n</div>'
eveil_body = '<div class="sheet-container theme-eveil">\n' + normalized_body.replace("{EYEBROW_PLACEHOLDER}", "ÉVEIL") + '\n</div>'

tripled_body = f"\n{francais_body}\n{maths_body}\n{eveil_body}\n"

# Replace original body content with tripled body
content = content.replace(original_body, tripled_body)

# Write to project
with open(target_project_path, 'w', encoding='utf-8') as f:
    f.write(content)
print(f"Successfully generated {target_project_path}")

# Write to Downloads
with open(target_downloads_path, 'w', encoding='utf-8') as f:
    f.write(content)
print(f"Successfully generated {target_downloads_path}")

print("Regeneration complete!")
