import os

template_path = "gabarit-questionnaire-LCML.html"
output_path_root = "correctif-digestif-LCML.html"
output_path_fiches = "fiches/correctif-digestif-LCML.html"

# Read template
with open(template_path, 'r', encoding='utf-8') as f:
    template_lines = f.readlines()

# Extract lines 1 to 202 (0-indexed indices 0 to 201)
header_html = "".join(template_lines[:202])

# Extract Éveil theme header: lines 517 to 563 (0-indexed indices 516 to 562)
ehead_html = "".join(template_lines[516:563])

# Replace values in the ehead block to specify it is the Correctif
ehead_html = ehead_html.replace(
    '<span class="subject-title">Cours d\'éveil</span>',
    '<span class="subject-title" style="color: #dc2626;">CORRECTIF&nbsp;: ÉVEIL SCIENTIFIQUE</span>'
)
ehead_html = ehead_html.replace(
    '<h1 class="lesson-title">Titre de la leçon</h1>',
    '<h1 class="lesson-title" style="color: #dc2626;">L\'appareil digestif</h1>'
)
ehead_html = ehead_html.replace(
    '<div class="tot">XXX</div>',
    '<div class="tot" style="color: #dc2626; border-color: #dc2626; display: inline-flex; align-items: center; justify-content: center; font-weight: bold;">SC</div>'
)
ehead_html = ehead_html.replace(
    '<div class="prenom-line"></div>',
    '<div class="prenom-line" style="border: none; color: #dc2626; font-family: \'Comic Neue\', sans-serif; font-weight: bold; font-size: 11pt; text-align: center; margin-top: 4px;">Correcteur</div>'
)

# Body HTML for Correctif with all answers filled in red
body_html = f"""
<div class="sheet-container theme-eveil">
{ehead_html}

<div class="cons-g" style="border-left-color: #dc2626; background: #fdf2f2; color: #991b1b;">Lis attentivement chaque consigne, puis réponds. Soigne ton écriture et relis-toi à la fin. (Correctif enseignant)</div>

<!-- EXERCICE 1 -->
<div class="exo" style="border-color: #dc2626;">
  <div class="xh" style="background: #dc2626;"><h2>1. Anatomie et organisation du système digestif</h2></div>
  <div class="body">
    <p class="consigne" style="color: #991b1b;">a. Lequel de ces organes ne fait PAS partie du tube digestif (le conduit continu où passent les aliments) mais est une glande annexe&nbsp;? Coche la bonne case.</p>
    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 12px; display: flex; gap: 24px; flex-wrap: wrap;">
      <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'œsophage</span>
      <span style="display: inline-flex; align-items: center; gap: 8px; color: #dc2626; font-weight: bold;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #dc2626; border-radius: 4px; margin: 0; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; color: #dc2626; background: #fee2e2;">✔</span> Le foie</span>
      <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'estomac</span>
    </div>

    <p class="consigne" style="color: #991b1b;">b. Écris V (Vrai) ou F (Faux) pour cette affirmation&nbsp;:</p>
    <div class="vrai-faux-row" style="margin-left: 10px; margin-bottom: 14px; border-color: #dc2626;">
      <span>L'épiglotte est une valve en cartilage située dans le pharynx qui s'abaisse pour empêcher les aliments d'entrer dans les voies respiratoires lorsqu'on avale.</span>
      <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; margin-right: 15px; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; color: #dc2626; font-size: 14pt; background: #fee2e2;">V</span>
    </div>

    <p class="consigne" style="color: #991b1b;">c. Explique précisément la différence entre le « tube digestif » et l'« appareil digestif » dans sa globalité.</p>
    <div class="lines" style="margin-left: 10px; margin-bottom: 14px;">
      <span style="height: 38px; color: #dc2626; font-family: 'Comic Neue', sans-serif !important; font-weight: bold; font-size: 11pt; padding-top: 14px; display: block;">Le tube digestif est le conduit continu par lequel transitent directement les aliments (bouche, œsophage, estomac, intestins).</span>
      <span style="height: 38px; color: #dc2626; font-family: 'Comic Neue', sans-serif !important; font-weight: bold; font-size: 11pt; padding-top: 14px; display: block;">L'appareil digestif comprend le tube digestif ET toutes les glandes annexes (foie, pancréas, glandes salivaires) qui produisent les sucs.</span>
    </div>

    <p class="consigne" style="color: #991b1b;">d. Dans quel organe du tube digestif commence la digestion des aliments&nbsp;? Coche la bonne case.</p>
    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 4px; display: flex; gap: 24px; flex-wrap: wrap;">
      <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Dans l'estomac</span>
      <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Dans l'intestin grêle</span>
      <span style="display: inline-flex; align-items: center; gap: 8px; color: #dc2626; font-weight: bold;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #dc2626; border-radius: 4px; margin: 0; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; color: #dc2626; background: #fee2e2;">✔</span> Dans la bouche</span>
    </div>
  </div>
</div>

<!-- EXERCICE 2 -->
<div class="exo" style="margin-bottom: 0; border-color: #dc2626;">
  <div class="xh" style="background: #dc2626;"><h2>2. La mécanique de la digestion</h2></div>
  <div class="body">
    <p class="consigne" style="color: #991b1b;">a. Relie chaque partie du tube digestif à son action mécanique principale&nbsp;:</p>
    <div class="relier" style="display: grid; grid-template-columns: 130px 450px; gap: 12px 80px; align-items: center; margin-left: 10px; margin-bottom: 12px;">
      <div class="it" style="width: 100%; margin: 0; text-align: center; border-color: #dc2626; color: #991b1b; background: #fdf2f2;">Bouche <span style="color: #dc2626; font-weight: bold; margin-left: 8px;">[C]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Propulse le bol alimentaire par des contractions involontaires (péristaltisme). <span style="color: #dc2626; font-weight: bold;">[A]</span></div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; border-color: #dc2626; color: #991b1b; background: #fdf2f2;">Œsophage <span style="color: #dc2626; font-weight: bold; margin-left: 8px;">[A]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Progression lente avec réabsorption de l'eau des matières non digérées. <span style="color: #dc2626; font-weight: bold;">[B]</span></div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; border-color: #dc2626; color: #991b1b; background: #fdf2f2;">Estomac <span style="color: #dc2626; font-weight: bold; margin-left: 8px;">[D]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Mastication, coupe et broie activement les aliments solides par les dents. <span style="color: #dc2626; font-weight: bold;">[C]</span></div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; border-color: #dc2626; color: #991b1b; background: #fdf2f2;">Gros intestin <span style="color: #dc2626; font-weight: bold; margin-left: 8px;">[B]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Brasse et malaxe vigoureusement pour former une bouillie liquide (le chyme). <span style="color: #dc2626; font-weight: bold;">[D]</span></div>
    </div>

    <p class="consigne" style="color: #991b1b;">b. Écris V (Vrai) ou F (Faux) pour cette affirmation&nbsp;:</p>
    <div class="vrai-faux-row" style="margin-left: 10px; margin-bottom: 14px; border-color: #dc2626;">
      <span>Les mouvements de contractions musculaires du péristaltisme qui poussent les aliments sont des mouvements volontaires que nous pouvons contrôler par la pensée.</span>
      <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; margin-right: 15px; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; color: #dc2626; font-size: 14pt; background: #fee2e2;">F</span>
    </div>

    <p class="consigne" style="color: #991b1b;">c. Explique pourquoi il est important de bien mastiquer ses aliments pour faciliter la suite du travail de l'estomac.</p>
    <div class="lines" style="margin-left: 10px; margin-bottom: 14px;">
      <span style="height: 38px; color: #dc2626; font-family: 'Comic Neue', sans-serif !important; font-weight: bold; font-size: 11pt; padding-top: 14px; display: block;">Bien mastiquer coupe les aliments en très petits morceaux, augmentant la surface de contact pour les sucs digestifs</span>
      <span style="height: 38px; color: #dc2626; font-family: 'Comic Neue', sans-serif !important; font-weight: bold; font-size: 11pt; padding-top: 14px; display: block;">et permettant à l'estomac de brasser et de réduire la nourriture en bouillie chyme liquide beaucoup plus facilement.</span>
    </div>

    <p class="consigne" style="color: #991b1b;">d. Combien de temps en moyenne les aliments restent-ils dans l'estomac pour y être malaxés et mélangés aux sucs digestifs&nbsp;? Coche la bonne case.</p>
    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 4px; display: flex; gap: 24px; flex-wrap: wrap;">
      <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Environ 10 minutes</span>
      <span style="display: inline-flex; align-items: center; gap: 8px; color: #dc2626; font-weight: bold;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #dc2626; border-radius: 4px; margin: 0; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; color: #dc2626; background: #fee2e2;">✔</span> Environ 4 heures</span>
      <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Environ 24 heures</span>
    </div>
  </div>
</div>
</div>

<div class="sheet-container theme-eveil" style="padding-top: 15px;">
<!-- EXERCICE 3 -->
<div class="exo" style="border-color: #dc2626;">
  <div class="xh" style="background: #dc2626;"><h2>3. La chimie de la digestion et l'absorption</h2></div>
  <div class="body">
    <p class="consigne" style="color: #991b1b;">a. Relie chaque suc digestif à son lieu d'action et son rôle chimique principal&nbsp;:</p>
    <div class="relier" style="display: grid; grid-template-columns: 130px 450px; gap: 12px 80px; align-items: center; margin-left: 10px; margin-bottom: 12px;">
      <div class="it" style="width: 100%; margin: 0; text-align: center; border-color: #dc2626; color: #991b1b; background: #fdf2f2;">La salive <span style="color: #dc2626; font-weight: bold; margin-left: 8px;">[C]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Déversée par le foie dans l'intestin pour diviser les graisses (sans enzyme). <span style="color: #dc2626; font-weight: bold;">[A]</span></div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; border-color: #dc2626; color: #991b1b; background: #fdf2f2;">Le suc gastrique <span style="color: #dc2626; font-weight: bold; margin-left: 8px;">[B]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Sécrété par l'estomac, très acide, il commence la digestion des protéines. <span style="color: #dc2626; font-weight: bold;">[B]</span></div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; border-color: #dc2626; color: #991b1b; background: #fdf2f2;">La bile <span style="color: #dc2626; font-weight: bold; margin-left: 8px;">[A]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Humidifie la bouche et contient de l'amylase pour couper l'amidon. <span style="color: #dc2626; font-weight: bold;">[C]</span></div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; border-color: #dc2626; color: #991b1b; background: #fdf2f2;">Le suc pancréatique <span style="color: #dc2626; font-weight: bold; margin-left: 8px;">[D]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Produit par le pancréas, il décompose protéines, lipides et glucides restants. <span style="color: #dc2626; font-weight: bold;">[D]</span></div>
    </div>

    <p class="consigne" style="color: #991b1b;">b. Complète le paragraphe ci-dessous avec les mots de la banque&nbsp;:</p>
    <div class="bank" style="margin-left: 10px; margin-bottom: 6px;"><span class="w">sang</span><span class="w">fine</span><span class="w">villosités</span><span class="w">nutriments</span></div>
    <p style="font-size: 11pt !important; line-height: 2.2; margin: 4px 0 0 10px; font-weight: bold; font-family: 'Comic Neue', sans-serif !important;">
      La paroi interne de l'intestin grêle possède des millions de replis microscopiques appelés les <span class="fill" style="min-width: 120px; color: #dc2626; font-weight: bold; text-align: center; display: inline-block; vertical-align: bottom;">villosités</span>. Cette paroi est extrêmement <span class="fill" style="min-width: 70px; color: #dc2626; font-weight: bold; text-align: center; display: inline-block; vertical-align: bottom;">fine</span> pour laisser passer facilement les <span class="fill" style="min-width: 120px; color: #dc2626; font-weight: bold; text-align: center; display: inline-block; vertical-align: bottom;">nutriments</span> digestifs directement dans le <span class="fill" style="min-width: 90px; color: #dc2626; font-weight: bold; text-align: center; display: inline-block; vertical-align: bottom;">sang</span> afin d'alimenter nos cellules.
    </p>
  </div>
</div>

<!-- EXERCICE 4 -->
<div class="exo" style="margin-bottom: 0; border-color: #dc2626;">
  <div class="xh" style="background: #dc2626;"><h2>4. Hygiène, santé et chiffres records</h2></div>
  <div class="body">
    <p class="consigne" style="color: #991b1b;">a. Quelle est la surface d'absorption totale de l'intestin grêle si on l'étalait complètement à plat&nbsp;? Coche la bonne case.</p>
    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 12px; display: flex; gap: 24px; flex-wrap: wrap;">
      <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> A. La taille d'une feuille A4</span>
      <span style="display: inline-flex; align-items: center; gap: 8px; color: #dc2626; font-weight: bold;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #dc2626; border-radius: 4px; margin: 0; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; color: #dc2626; background: #fee2e2;">✔</span> B. Un terrain de tennis (250 m²)</span>
      <span style="display: inline-flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> C. La superficie de la Belgique</span>
    </div>

    <p class="consigne" style="color: #991b1b;">b. Écris V (Vrai) ou F (Faux) dans la case correspondante pour cette affirmation&nbsp;:</p>
    <div class="vrai-faux-row" style="margin-left: 10px; margin-bottom: 14px; border-color: #dc2626; border-bottom: none; padding-bottom: 4px;">
      <span>Une consommation excessive de sucres rapides (bonbons, sodas) fatigue le foie et le pancréas, et produit des acides dentaires responsables des caries.</span>
      <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; color: #dc2626; font-size: 14pt; background: #fee2e2;">V</span>
    </div>

    <p class="consigne" style="color: #991b1b; margin-top: 12px">c. Explique pourquoi il est important de se laver les mains avec du savon avant de manger, et quelle maladie digestive cela permet d'éviter.</p>
    <div class="lines" style="margin-left: 10px; margin-bottom: 14px;">
      <span style="height: 38px; color: #dc2626; font-family: 'Comic Neue', sans-serif !important; font-weight: bold; font-size: 11pt; padding-top: 14px; display: block;">Se laver les mains élimine les microbes invisibles qui s'y installent, évitant de les avaler avec notre nourriture.</span>
      <span style="height: 38px; color: #dc2626; font-family: 'Comic Neue', sans-serif !important; font-weight: bold; font-size: 11pt; padding-top: 14px; display: block;">Cela permet d'éviter des infections intestinales très courantes comme la gastro-entérite.</span>
    </div>

    <p class="consigne" style="color: #991b1b; margin-top: 12px">d. Relie chaque mesure incroyable de notre tube digestif à sa signification correspondante&nbsp;:</p>
    <div class="relier" style="display: grid; grid-template-columns: 130px 450px; gap: 12px 80px; align-items: center; margin-left: 10px; margin-bottom: 4px;">
      <div class="it" style="width: 100%; margin: 0; text-align: center; border-color: #dc2626; color: #991b1b; background: #fdf2f2;">8 à 10 mètres <span style="color: #dc2626; font-weight: bold; margin-left: 8px;">[C]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Temps moyen passé par les aliments dans l'estomac pour y être malaxés. <span style="color: #dc2626; font-weight: bold;">[A]</span></div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; border-color: #dc2626; color: #991b1b; background: #fdf2f2;">4 Heures <span style="color: #dc2626; font-weight: bold; margin-left: 8px;">[A]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Durée moyenne du grand voyage complet des aliments, de la bouche à l'anus. <span style="color: #dc2626; font-weight: bold;">[B]</span></div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; border-color: #dc2626; color: #991b1b; background: #fdf2f2;">24 à 48 heures <span style="color: #dc2626; font-weight: bold; margin-left: 8px;">[B]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Longueur totale estimée de notre tube digestif si on l'étirait. <span style="color: #dc2626; font-weight: bold;">[C]</span></div>
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
