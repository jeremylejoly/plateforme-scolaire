import os

template_path = "gabarit-questionnaire-LCML.html"
output_path_root = "questionnaire-digestif-LCML.html"
output_path_fiches = "fiches/questionnaire-digestif-LCML.html"

# Read template
with open(template_path, 'r', encoding='utf-8') as f:
    template_lines = f.readlines()

# Extract lines 1 to 202 (0-indexed indices 0 to 201)
header_html = "".join(template_lines[:202])

# Extract Éveil theme header: lines 517 to 563 (0-indexed indices 516 to 562)
ehead_html = "".join(template_lines[516:563])

# Replace values in the ehead block
ehead_html = ehead_html.replace(
    '<span class="subject-title">Cours d\'éveil</span>',
    '<span class="subject-title">ÉVEIL SCIENTIFIQUE</span>'
)
ehead_html = ehead_html.replace(
    '<h1 class="lesson-title">Titre de la leçon</h1>',
    '<h1 class="lesson-title">L\'appareil digestif</h1>'
)
ehead_html = ehead_html.replace(
    '<div class="tot">XXX</div>',
    '<div class="tot">SC</div>'
)

# Body HTML with all questions optimized for 11pt font and spacious writing lines
body_html = f"""
<div class="sheet-container theme-eveil">
{ehead_html}

<div class="cons-g">Lis attentivement chaque consigne, puis réponds. Soigne ton écriture et relis-toi à la fin.</div>

<!-- EXERCICE 1 -->
<div class="exo">
  <div class="xh"><h2>1. Anatomie et organisation du système digestif</h2></div>
  <div class="body">
    <p class="consigne">a. Lequel de ces organes ne fait PAS partie du tube digestif (le conduit continu où passent les aliments) mais est une glande annexe&nbsp;? Coche la bonne case.</p>
    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 12px; display: flex; gap: 24px; flex-wrap: wrap;">
      <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'œsophage</span>
      <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Le foie</span>
      <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'estomac</span>
    </div>

    <p class="consigne">b. Écris V (Vrai) ou F (Faux) pour cette affirmation&nbsp;:</p>
    <div class="vrai-faux-row" style="margin-left: 10px; margin-bottom: 14px;">
      <span>L'épiglotte est une valve en cartilage située dans le pharynx qui s'abaisse pour empêcher les aliments d'entrer dans les voies respiratoires lorsqu'on avale.</span>
      <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; margin-right: 15px;"></span>
    </div>

    <p class="consigne">c. Explique précisément la différence entre le « tube digestif » et l'« appareil digestif » dans sa globalité.</p>
    <div class="lines" style="margin-left: 10px; margin-bottom: 14px;">
      <span style="height: 38px;"></span>
      <span style="height: 38px;"></span>
    </div>

    <p class="consigne">d. Dans quel organe du tube digestif commence la digestion des aliments&nbsp;? Coche la bonne case.</p>
    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 4px; display: flex; gap: 24px; flex-wrap: wrap;">
      <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Dans l'estomac</span>
      <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Dans l'intestin grêle</span>
      <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Dans la bouche</span>
    </div>
  </div>
</div>

<!-- EXERCICE 2 -->
<div class="exo" style="margin-bottom: 0;">
  <div class="xh"><h2>2. La mécanique de la digestion</h2></div>
  <div class="body">
    <p class="consigne">a. Relie chaque partie du tube digestif à son action mécanique principale&nbsp;:</p>
    <div class="relier" style="display: grid; grid-template-columns: 130px 450px; gap: 12px 80px; align-items: center; margin-left: 10px; margin-bottom: 12px;">
      <div class="it" style="width: 100%; margin: 0; text-align: center;">Bouche</div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Propulse le bol alimentaire par des contractions involontaires (péristaltisme).</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center;">Œsophage</div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Progression lente avec réabsorption de l'eau des matières non digérées.</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center;">Estomac</div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Mastication, coupe et broie activement les aliments solides par les dents.</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center;">Gros intestin</div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Brasse et malaxe vigoureusement pour former une bouillie liquide (le chyme).</div>
    </div>

    <p class="consigne">b. Écris V (Vrai) ou F (Faux) pour cette affirmation&nbsp;:</p>
    <div class="vrai-faux-row" style="margin-left: 10px; margin-bottom: 14px;">
      <span>Les mouvements de contractions musculaires du péristaltisme qui poussent les aliments sont des mouvements volontaires que nous pouvons contrôler par la pensée.</span>
      <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; margin-right: 15px;"></span>
    </div>

    <p class="consigne">c. Explique pourquoi il est important de bien mastiquer ses aliments pour faciliter la suite du travail de l'estomac.</p>
    <div class="lines" style="margin-left: 10px; margin-bottom: 14px;">
      <span style="height: 38px;"></span>
      <span style="height: 38px;"></span>
    </div>

    <p class="consigne">d. Combien de temps en moyenne les aliments restent-ils dans l'estomac pour y être malaxés et mélangés aux sucs digestifs&nbsp;? Coche la bonne case.</p>
    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 4px; display: flex; gap: 24px; flex-wrap: wrap;">
      <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Environ 10 minutes</span>
      <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Environ 4 heures</span>
      <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Environ 24 heures</span>
    </div>
  </div>
</div>
</div>

<div class="sheet-container theme-eveil" style="padding-top: 15px;">
<!-- EXERCICE 3 -->
<div class="exo">
  <div class="xh"><h2>3. La chimie de la digestion et l'absorption</h2></div>
  <div class="body">
    <p class="consigne">a. Relie chaque suc digestif à son lieu d'action et son rôle chimique principal&nbsp;:</p>
    <div class="relier" style="display: grid; grid-template-columns: 130px 450px; gap: 12px 80px; align-items: center; margin-left: 10px; margin-bottom: 12px;">
      <div class="it" style="width: 100%; margin: 0; text-align: center;">La salive</div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Déversée par le foie dans l'intestin pour diviser les graisses (sans enzyme).</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center;">Le suc gastrique</div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Sécrété par l'estomac, très acide, il commence la digestion des protéines.</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center;">La bile</div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Humidifie la bouche et contient de l'amylase pour couper l'amidon.</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center;">Le suc pancréatique</div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Produit par le pancréas, il décompose protéines, lipides et glucides restants.</div>
    </div>

    <p class="consigne">b. Complète le paragraphe ci-dessous avec les mots de la banque&nbsp;:</p>
    <div class="bank" style="margin-left: 10px; margin-bottom: 6px;"><span class="w">sang</span><span class="w">fine</span><span class="w">villosités</span><span class="w">nutriments</span></div>
    <p style="font-size: 11pt !important; line-height: 2.2; margin: 4px 0 0 10px; font-weight: bold; font-family: 'Comic Neue', sans-serif !important;">
      La paroi interne de l'intestin grêle possède des millions de replis microscopiques appelés les <span class="fill" style="min-width: 120px;"></span>. Cette paroi est extrêmement <span class="fill" style="min-width: 70px;"></span> pour laisser passer facilement les <span class="fill" style="min-width: 120px;"></span> digestifs directement dans le <span class="fill" style="min-width: 90px;"></span> afin d'alimenter nos cellules.
    </p>
  </div>
</div>

<!-- EXERCICE 4 -->
<div class="exo" style="margin-bottom: 0;">
  <div class="xh"><h2>4. Hygiène, santé et chiffres records</h2></div>
  <div class="body">
    <p class="consigne">a. Quelle est la surface d'absorption totale de l'intestin grêle si on l'étalait complètement à plat&nbsp;? Coche la bonne case.</p>
    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 12px; display: flex; gap: 24px; flex-wrap: wrap;">
      <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> A. La taille d'une feuille A4</span>
      <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> B. Un terrain de tennis (250 m²)</span>
      <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> C. La superficie de la Belgique</span>
    </div>

    <p class="consigne">b. Écris V (Vrai) ou F (Faux) dans la case correspondante pour cette affirmation&nbsp;:</p>
    <div class="vrai-faux-row" style="margin-left: 10px; margin-bottom: 14px; border-bottom: none; padding-bottom: 4px;">
      <span>Une consommation excessive de sucres rapides (bonbons, sodas) fatigue le foie et le pancréas, et produit des acides dentaires responsables des caries.</span>
      <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #000000; border-radius: 6px; flex-shrink: 0; margin: 0;"></span>
    </div>

    <p class="consigne" style="margin-top: 12px">c. Explique pourquoi il est important de se laver les mains avec du savon avant de manger, et quelle maladie digestive cela permet d'éviter.</p>
    <div class="lines" style="margin-left: 10px; margin-bottom: 14px;">
      <span style="height: 38px;"></span>
      <span style="height: 38px;"></span>
    </div>

    <p class="consigne" style="margin-top: 12px">d. Relie chaque mesure incroyable de notre tube digestif à sa signification correspondante&nbsp;:</p>
    <div class="relier" style="display: grid; grid-template-columns: 130px 450px; gap: 12px 80px; align-items: center; margin-left: 10px; margin-bottom: 4px;">
      <div class="it" style="width: 100%; margin: 0; text-align: center;">8 à 10 mètres</div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Temps moyen passé par les aliments dans l'estomac pour y être malaxés.</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center;">4 Heures</div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Durée moyenne du grand voyage complet des aliments, de la bouche à l'anus.</div>

      <div class="it" style="width: 100%; margin: 0; text-align: center;">24 à 48 heures</div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Longueur totale estimée de notre tube digestif si on l'étirait.</div>
    </div>
  </div>
</div>
</div>
</body></html>
"""

# Typographic replacements for French spacing
final_body_html = body_html.replace(' ?', '&nbsp;?').replace(' :', '&nbsp;:')

# Write to root path
print(f"Writing to {output_path_root}")
with open(output_path_root, 'w', encoding='utf-8') as f:
    f.write(header_html)
    f.write(final_body_html)

# Write to fiches path
print(f"Writing to {output_path_fiches}")
with open(output_path_fiches, 'w', encoding='utf-8') as f:
    f.write(header_html)
    f.write(final_body_html)

print("Build completed successfully!")
