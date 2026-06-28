import os

template_path = "gabarit-questionnaire-LCML.html"
output_path_root = "questionnaire-soleil-terre-lune-correctif-LCML.html"
output_path_fiches = "fiches/questionnaire-soleil-terre-lune-correctif.html"

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
    '<h1 class="lesson-title" style="color: #dc2626;">Soleil, Terre, Lune</h1>'
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
  <div class="xh" style="background: #dc2626;"><h2>1. Les astres du système Soleil-Terre-Lune</h2></div>
  <div class="body">
    <p class="consigne" style="color: #991b1b;">a. Relie chaque élément à sa description correspondante :</p>
    <div class="relier" style="display: grid; grid-template-columns: 130px 450px; gap: 12px 80px; align-items: center; margin-left: 10px; margin-bottom: 4px;">
      <div class="it" style="width: 100%; margin: 0; text-align: center; border-color: #dc2626; color: #991b1b; background: #fdf2f2;">Le Soleil <span style="color: #dc2626; font-weight: bold; margin-left: 8px;">[C]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Planète rocheuse opaque qui ne produit pas de lumière et abrite la vie. <span style="color: #dc2626; font-weight: bold;">[A]</span></div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; border-color: #dc2626; color: #991b1b; background: #fdf2f2;">La Terre <span style="color: #dc2626; font-weight: bold; margin-left: 8px;">[A]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Ligne imaginaire inclinée à 23,5° reliant les deux pôles de la Terre. <span style="color: #dc2626; font-weight: bold;">[B]</span></div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; border-color: #dc2626; color: #991b1b; background: #fdf2f2;">La Lune <span style="color: #dc2626; font-weight: bold; margin-left: 8px;">[D]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Étoile géante lumineuse faite de gaz brûlant qui produit sa propre lumière. <span style="color: #dc2626; font-weight: bold;">[C]</span></div>

      <div class="it" style="width: 100%; margin: 0; text-align: center; border-color: #dc2626; color: #991b1b; background: #fdf2f2;">L'Axe terrestre <span style="color: #dc2626; font-weight: bold; margin-left: 8px;">[B]</span></div>
      <div class="it" style="width: 100%; margin: 0; text-align: left;">Satellite naturel rocheux qui tourne autour de la Terre et réfléchit sa lumière. <span style="color: #dc2626; font-weight: bold;">[D]</span></div>
    </div>
  </div>
</div>

<!-- EXERCICE 2 -->
<div class="exo" style="border-color: #dc2626;">
  <div class="xh" style="background: #dc2626;"><h2>2. Mouvements, révolution et temps</h2></div>
  <div class="body">
    <p class="consigne" style="color: #991b1b;">a. Écris V (Vrai) ou F (Faux) dans la case correspondante pour chaque affirmation :</p>
    <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 4px;">
      <div class="vrai-faux-row" style="border-color: #dc2626;">
        <span>La Terre met précisément 365 jours et 6 heures pour effectuer un tour complet autour du Soleil.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; color: #dc2626; font-size: 14pt; background: #fee2e2;">V</span>
      </div>
      <div class="vrai-faux-row" style="border-color: #dc2626;">
        <span>La lumière émise par le Soleil met un peu plus de 8 minutes pour traverser l'espace et arriver sur la Terre.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; color: #dc2626; font-size: 14pt; background: #fee2e2;">V</span>
      </div>
      <div class="vrai-faux-row" style="border-color: #dc2626;">
        <span>Si le Soleil cessait brusquement de briller, la Terre serait plongée instantanément dans l'obscurité.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; color: #dc2626; font-size: 14pt; background: #fee2e2;">F</span>
      </div>
      <div class="vrai-faux-row" style="border-color: #dc2626;">
        <span>La Lune produit sa propre lumière visible durant la nuit, ce qui nous permet de voir ses différentes phases.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; color: #dc2626; font-size: 14pt; background: #fee2e2;">F</span>
      </div>
      <div class="vrai-faux-row" style="border-color: #dc2626; border-bottom: none; padding-bottom: 4px;">
        <span>La rotation de la Terre sur elle-même se fait d'Ouest en Est, créant l'illusion que le Soleil se déplace d'Est en Ouest dans notre ciel.</span>
        <span class="fillbox" style="width: 26px; height: 26px; border: 1.5px solid #dc2626; border-radius: 6px; flex-shrink: 0; margin: 0; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; color: #dc2626; font-size: 14pt; background: #fee2e2;">V</span>
      </div>
    </div>
  </div>
</div>

<!-- EXERCICE 3 -->
<div class="exo" style="margin-bottom: 0; border-color: #dc2626;">
  <div class="xh" style="background: #dc2626;"><h2>3. La rotation terrestre et le mouvement apparent</h2></div>
  <div class="body">
    <p class="consigne" style="color: #991b1b;">a. Réponds aux questions par des phrases complètes :</p>
    
    <p style="margin: 0 0 4px 10px; font-weight: bold;">1. Pourquoi avons-nous l'impression que le Soleil se lève à l'Est et se couche à l'Ouest au cours de la journée ? Explique ce phénomène.</p>
    <div class="lines" style="margin-left: 10px; margin-bottom: 12px;">
      <span style="height: 26px; color: #dc2626; font-family: 'Comic Neue', sans-serif !important; font-weight: bold; font-size: 11pt; padding-top: 6px; display: block;">Cela est dû à la rotation de la Terre sur elle-même d'Ouest en Est. C'est un mouvement</span>
      <span style="height: 38px; color: #dc2626; font-family: 'Comic Neue', sans-serif !important; font-weight: bold; font-size: 11pt; padding-top: 14px; display: block;">apparent : la Terre tourne et nous donne l'illusion que c'est le Soleil qui se déplace.</span>
    </div>

    <p style="margin: 0 0 4px 10px; font-weight: bold;">2. Qu'est-ce que l'axe terrestre et quelle est son inclinaison par rapport à la verticale ?</p>
    <div class="lines" style="margin-left: 10px; margin-bottom: 12px;">
      <span style="height: 26px; color: #dc2626; font-family: 'Comic Neue', sans-serif !important; font-weight: bold; font-size: 11pt; padding-top: 6px; display: block;">L'axe de rotation de la Terre est une ligne imaginaire qui traverse les pôles Nord et Sud.</span>
      <span style="height: 38px; color: #dc2626; font-family: 'Comic Neue', sans-serif !important; font-weight: bold; font-size: 11pt; padding-top: 14px; display: block;">Il est incliné de 23,5° par rapport à la verticale, ce qui explique les saisons.</span>
    </div>

    <p style="margin: 0 0 4px 10px; font-weight: bold;">3. Dans quel sens la Terre tourne-t-elle sur elle-même, et quel astre reste fixe au centre de notre système ?</p>
    <div class="lines" style="margin-left: 10px; margin-bottom: 4px;">
      <span style="height: 26px; color: #dc2626; font-family: 'Comic Neue', sans-serif !important; font-weight: bold; font-size: 11pt; padding-top: 6px; display: block;">La Terre tourne d'Ouest en Est sur elle-même.</span>
      <span style="height: 38px; color: #dc2626; font-family: 'Comic Neue', sans-serif !important; font-weight: bold; font-size: 11pt; padding-top: 14px; display: block;">L'astre qui reste fixe au centre de notre modèle (et du système) est le Soleil.</span>
    </div>
  </div>
</div>
</div>

<div class="sheet-container theme-eveil" style="padding-top: 15px;">
<!-- EXERCICE 4 -->
<div class="exo" style="border-color: #dc2626;">
  <div class="xh" style="background: #dc2626;"><h2>4. La démarche scientifique et l'utilisation de modèles</h2></div>
  <div class="body">
    <p class="consigne" style="color: #991b1b;">a. Coche la bonne proposition pour chaque question :</p>
    
    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 14px;">
      <p style="margin: 0 0 6px; font-weight: bold;">Question 1 : Pourquoi est-il indispensable d'utiliser un modèle du système Soleil-Terre-Lune ?</p>
      <div style="display: flex; flex-direction: column; gap: 8px; margin-left: 10px; margin-top: 6px;">
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Pour pouvoir dessiner le système céleste à l'échelle exacte en classe.</span>
        <span style="display: flex; align-items: center; gap: 8px; color: #dc2626; font-weight: bold;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #dc2626; border-radius: 4px; margin: 0; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; color: #dc2626; background: #fee2e2;">✔</span> Car les tailles et distances réelles dans l'espace sont trop gigantesques.</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Car la Lune ne bouge pas du tout autour de la Terre en réalité.</span>
      </div>
    </div>

    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 14px;">
      <p style="margin: 0 0 6px; font-weight: bold;">Question 2 : Dans le modèle simple construit en classe, quel objet remplace le Soleil ?</p>
      <div style="display: flex; flex-direction: column; gap: 8px; margin-left: 10px; margin-top: 6px;">
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Un globe terrestre bleu et vert opaque.</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Une petite bille grise en argile.</span>
        <span style="display: flex; align-items: center; gap: 8px; color: #dc2626; font-weight: bold;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #dc2626; border-radius: 4px; margin: 0; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; color: #dc2626; background: #fee2e2;">✔</span> Une ampoule électrique ou une lampe torche puissante.</span>
      </div>
    </div>

    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 14px;">
      <p style="margin: 0 0 6px; font-weight: bold;">Question 3 : Qu'est-ce que le terminateur sur un globe terrestre éclairé par une lampe ?</p>
      <div style="display: flex; flex-direction: column; gap: 8px; margin-left: 10px; margin-top: 6px;">
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> L'axe incliné traversant le globe de pôle en pôle.</span>
        <span style="display: flex; align-items: center; gap: 8px; color: #dc2626; font-weight: bold;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #dc2626; border-radius: 4px; margin: 0; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; color: #dc2626; background: #fee2e2;">✔</span> La ligne de frontière qui sépare la zone éclairée (jour) de la zone d'ombre (nuit).</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> La trajectoire orbitale de la Lune autour de la Terre.</span>
      </div>
    </div>

    <div class="qcm-item" style="margin-left: 10px; margin-bottom: 4px;">
      <p style="margin: 0 0 6px; font-weight: bold;">Question 4 : Dans le modèle de la classe, comment le globe terrestre doit-il être orienté ?</p>
      <div style="display: flex; flex-direction: column; gap: 8px; margin-left: 10px; margin-top: 6px;">
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Parfaitement vertical pour simuler le jour et la nuit.</span>
        <span style="display: flex; align-items: center; gap: 8px; color: #dc2626; font-weight: bold;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #dc2626; border-radius: 4px; margin: 0; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; color: #dc2626; background: #fee2e2;">✔</span> Avec son axe incliné à 23,5° pour expliquer les saisons.</span>
        <span style="display: flex; align-items: center; gap: 8px;"><span class="fillbox" style="width: 18px; height: 18px; border: 1.5px solid #000000; border-radius: 4px; margin: 0; flex-shrink: 0;"></span> Couché sur le côté pour représenter l'orbite de la Lune.</span>
      </div>
    </div>
  </div>
</div>

<!-- EXERCICE 5 -->
<div class="exo" style="margin-bottom: 0; border-color: #dc2626;">
  <div class="xh" style="background: #dc2626;"><h2>5. Rythmes de vie, saisons et santé</h2></div>
  <div class="body">
    <p class="consigne" style="color: #991b1b;">a. Complète le paragraphe ci-dessous avec les mots de la banque :</p>
    <div class="bank" style="margin-left: 10px; margin-bottom: 6px;"><span class="w">écrans</span><span class="w">rotation</span><span class="w">mélatonine</span><span class="w">bissextile</span></div>
    <p style="font-size: 11pt !important; line-height: 2.2; margin: 4px 0 0 10px; font-weight: bold; font-family: 'Comic Neue', sans-serif !important;">
      La nuit, notre cerveau fabrique naturellement de la <span class="fill" style="min-width: 140px; color: #dc2626; font-weight: bold; text-align: center; display: inline-block; vertical-align: bottom;">mélatonine</span> pour nous aider à nous endormir. Cependant, la lumière bleue émise par les <span class="fill" style="min-width: 140px; color: #dc2626; font-weight: bold; text-align: center; display: inline-block; vertical-align: bottom;">écrans</span> perturbe cette production. 
      Le cycle des saisons est provoqué par la révolution de la Terre et son axe incliné, tandis que la <span class="fill" style="min-width: 140px; color: #dc2626; font-weight: bold; text-align: center; display: inline-block; vertical-align: bottom;">rotation</span> terrestre définit la durée d'une journée. Tous les quatre ans, on ajoute un 29 février pour compenser les 6 heures supplémentaires annuelles : c'est l'année <span class="fill" style="min-width: 140px; color: #dc2626; font-weight: bold; text-align: center; display: inline-block; vertical-align: bottom;">bissextile</span>.
    </p>

    <p class="consigne" style="color: #991b1b; margin-top: 14px">b. Réponds aux questions par des phrases complètes :</p>
    <p style="margin: 0 0 4px 10px; font-weight: bold;">1. Pourquoi l'équinoxe est-il un moment particulier de l'année concernant la durée de la journée ?</p>
    <div class="lines" style="margin-left: 10px; margin-bottom: 10px;">
      <span style="height: 26px; color: #dc2626; font-family: 'Comic Neue', sans-serif !important; font-weight: bold; font-size: 11pt; padding-top: 6px; display: block;">Lors d'un équinoxe (en mars et en septembre), la durée de la nuit est exactement égale</span>
      <span style="height: 38px; color: #dc2626; font-family: 'Comic Neue', sans-serif !important; font-weight: bold; font-size: 11pt; padding-top: 14px; display: block;">à la durée du jour (12 heures chacun) partout sur la Terre.</span>
    </div>

    <p style="margin: 0 0 4px 10px; font-weight: bold;">2. Quels sont les dangers des rayons ultraviolets (UV) du Soleil pour la santé, et comment s'en protéger ?</p>
    <div class="lines" style="margin-left: 10px; margin-bottom: 10px;">
      <span style="height: 26px; color: #dc2626; font-family: 'Comic Neue', sans-serif !important; font-weight: bold; font-size: 11pt; padding-top: 6px; display: block;">Les UV peuvent provoquer des coups de soleil, vieillir la peau, endommager les yeux et causer des cancers.</span>
      <span style="height: 38px; color: #dc2626; font-family: 'Comic Neue', sans-serif !important; font-weight: bold; font-size: 11pt; padding-top: 14px; display: block;">Pour se protéger, il faut utiliser de la crème solaire, porter des lunettes de soleil, un chapeau et rester à l'ombre.</span>
    </div>

    <p style="margin: 0 0 4px 10px; font-weight: bold;">3. Pourquoi y a-t-il des années bissextiles avec un 29 février tous les 4 ans ? Explique le calcul scientifique.</p>
    <div class="lines" style="margin-left: 10px; margin-bottom: 4px;">
      <span style="height: 26px; color: #dc2626; font-family: 'Comic Neue', sans-serif !important; font-weight: bold; font-size: 11pt; padding-top: 6px; display: block;">La Terre prend environ 365 jours et 6 heures pour faire sa révolution autour du Soleil.</span>
      <span style="height: 38px; color: #dc2626; font-family: 'Comic Neue', sans-serif !important; font-weight: bold; font-size: 11pt; padding-top: 14px; display: block;">En 4 ans, ces 6 heures supplémentaires s'accumulent (6h x 4 = 24h), créant un jour entier de plus (le 29 février).</span>
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
