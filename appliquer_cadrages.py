#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script pour appliquer les cadrages calibrés (issus de calibrage_couvertures.html / cadrage_couvertures.json)
et générer les images .webp en haute résolution (1200x1600) dans tous les dossiers d'assets du projet.
"""

import os
import json
import unicodedata
from PIL import Image

def norm(s):
    s = s.replace('œ', 'oe').replace('Œ', 'oe').replace('’', "'").replace('…', '...')
    return unicodedata.normalize('NFD', s).encode('ascii', 'ignore').decode('utf-8').lower()

def main():
    root_dir = os.path.dirname(os.path.abspath(__file__))
    
    # 1. Dossier source des photos brutes
    couv_dir = os.path.join(root_dir, 'Couvertures récits express')
    if not os.path.exists(couv_dir):
        couv_dir = os.path.join(root_dir, 'Couvertures récits express')
    
    # 2. Dossiers cibles
    target_dirs = [
        os.path.join(root_dir, 'assets', 'couvertures'),
        os.path.join(root_dir, 'fiches', 'assets', 'couvertures'),
        os.path.join(root_dir, 'public', 'assets', 'couvertures'),
        os.path.join(root_dir, 'public', 'fiches', 'assets', 'couvertures')
    ]
    for d in target_dirs:
        os.makedirs(d, exist_ok=True)
        
    # 3. Charger cadrage_couvertures.json si présent
    json_path = os.path.join(root_dir, 'cadrage_couvertures.json')
    json_in_couv = os.path.join(couv_dir, 'cadrage_couvertures.json')
    home_dl = os.path.expanduser('~/Downloads/cadrage_couvertures.json')
    
    crops_data = {}
    if os.path.exists(json_in_couv):
        with open(json_in_couv, 'r', encoding='utf-8') as f:
            crops_data = json.load(f)
        print(f"📖 Chargement des cadrages depuis: {json_in_couv}")
    elif os.path.exists(json_path):
        with open(json_path, 'r', encoding='utf-8') as f:
            crops_data = json.load(f)
        print(f"📖 Chargement des cadrages depuis: {json_path}")
    elif os.path.exists(home_dl):
        with open(home_dl, 'r', encoding='utf-8') as f:
            crops_data = json.load(f)
        print(f"📖 Chargement des cadrages depuis: {home_dl}")
    else:
        print("ℹ️ Aucun fichier 'cadrage_couvertures.json' trouvé. Application du cadrage centré par défaut.")

    # 4. Mapper les fichiers
    raw_files = os.listdir(couv_dir)
    
    import re
    with open(os.path.join(root_dir, 'livres.js'), 'r', encoding='utf-8') as f:
        matches = re.findall(r'"id":\s*"([^"]+)",\s*"title":\s*"([^"]+)"', f.read())
        
    processed_count = 0
    for bid, title in matches:
        matched_file = None
        for fn in raw_files:
            if not (fn.endswith('.jpeg') or fn.endswith('.jpg') or fn.endswith('.png')):
                continue
            fn_base = os.path.splitext(fn)[0]
            if norm(fn_base) == norm(title) or norm(title) in norm(fn_base) or norm(fn_base) in norm(title):
                matched_file = fn
                break
            if bid == 'menace_classe_rousse' and 'menace' in norm(fn):
                matched_file = fn
                break
            if bid == 'etoiles_filantes' and 'etoile' in norm(fn):
                matched_file = fn
                break
            if bid == 'trophee_gorumna' and 'trophe' in norm(fn):
                matched_file = fn
                break
            if bid == 'souvenirs_secret' and 'top secret' in norm(fn):
                matched_file = fn
                break
            if bid == 'livre_maudit' and 'livre maudit' in norm(fn):
                matched_file = fn
                break
                
        if not matched_file:
            continue
            
        src_path = os.path.join(couv_dir, matched_file)
        with Image.open(src_path) as img:
            img = img.convert('RGB')
            
            # Gestion de la rotation
            rot = 0
            if bid in crops_data and 'rotation' in crops_data[bid]:
                rot = crops_data[bid]['rotation']
            elif bid in ['princesse_moche', 'mouche_mai', 'quelle_histoire', 'vie_robot', 'nouveau_depart']:
                rot = 90
                
            if rot == 90:
                img = img.transpose(Image.Transpose.ROTATE_270)
            elif rot == 180:
                img = img.transpose(Image.Transpose.ROTATE_180)
            elif rot == 270:
                img = img.transpose(Image.Transpose.ROTATE_90)
                
            img_w, img_h = img.size
            
            # Gestion du rectangle de découpe
            if bid in crops_data and 'normBox' in crops_data[bid]:
                nb = crops_data[bid]['normBox']
                crop_x = int(nb['x'] * img_w)
                crop_y = int(nb['y'] * img_h)
                crop_w = int(nb['w'] * img_w)
                crop_h = int(nb['h'] * img_h)
            else:
                crop_w = int(img_w * 0.88)
                crop_h = int(crop_w * 1.42)
                crop_x = (img_w - crop_w) // 2
                crop_y = (img_h - crop_h) // 2
                if crop_y < 0:
                    crop_h = int(img_h * 0.94)
                    crop_w = int(crop_h / 1.42)
                    crop_x = (img_w - crop_w) // 2
                    crop_y = (img_h - crop_h) // 2
                    
            crop_x = max(0, min(img_w - crop_w, crop_x))
            crop_y = max(0, min(img_h - crop_h, crop_y))
            
            cropped = img.crop((crop_x, crop_y, crop_x + crop_w, crop_y + crop_h))
            final_img = cropped.resize((1200, 1600), Image.Resampling.LANCZOS)
            
            for d in target_dirs:
                out_path = os.path.join(d, f"{bid}.webp")
                final_img.save(out_path, 'WEBP', quality=88)
                
            print(f"✅ Couverture générée : {bid}.webp ({title})")
            processed_count += 1
            
    print(f"\n🎉 Terminé ! {processed_count} couvertures calibrées et enregistrées en .webp dans tous les dossiers.")

if __name__ == '__main__':
    main()
