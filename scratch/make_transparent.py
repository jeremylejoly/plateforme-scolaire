import os
import sys

try:
    from PIL import Image
except ImportError:
    print("Pillow not found, installing...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def process_image(src_path, dest_names):
    if not os.path.exists(src_path):
        print(f"Source file not found: {src_path}")
        return False
    try:
        img = Image.open(src_path)
        img = img.convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            r, g, b, a = item
            # Calculate distance from white (255, 255, 255)
            min_val = min(r, g, b)
            if min_val > 240:
                # Smoothly transition transparency
                alpha = int((255 - min_val) * (255.0 / (255 - 240)))
                alpha = max(0, min(255, alpha))
                newData.append((r, g, b, alpha))
            else:
                newData.append((r, g, b, a))
                
        img.putdata(newData)
        
        for dest in dest_names:
            dest_dir = os.path.dirname(dest)
            if not os.path.exists(dest_dir):
                os.makedirs(dest_dir, exist_ok=True)
            img.save(dest, "PNG")
            print(f"Saved transparent PNG to: {dest}")
        return True
    except Exception as e:
        print(f"Error processing {src_path}: {e}")
        return False

# Mappings of the generated images to their final assets locations
mappings = {
    "/Users/jeremy/.gemini/antigravity/brain/6bcf5aa8-36e3-4743-bf02-1c935bb74813/gram_sujet_1783362327425.jpg": [
        "/Users/jeremy/antigravity/LCML/assets/logos/gram_sujet.png",
        "/Users/jeremy/antigravity/LCML/public/assets/logos/gram_sujet.png"
    ],
    "/Users/jeremy/.gemini/antigravity/brain/6bcf5aa8-36e3-4743-bf02-1c935bb74813/gram_verbe_fonc_1783362339596.jpg": [
        "/Users/jeremy/antigravity/LCML/assets/logos/gram_verbe_fonc.png",
        "/Users/jeremy/antigravity/LCML/public/assets/logos/gram_verbe_fonc.png"
    ],
    "/Users/jeremy/.gemini/antigravity/brain/6bcf5aa8-36e3-4743-bf02-1c935bb74813/gram_predicat_1783362355446.jpg": [
        "/Users/jeremy/antigravity/LCML/assets/logos/gram_predicat.png",
        "/Users/jeremy/antigravity/LCML/public/assets/logos/gram_predicat.png"
    ],
    "/Users/jeremy/.gemini/antigravity/brain/6bcf5aa8-36e3-4743-bf02-1c935bb74813/gram_cdv_civ_1783362369942.jpg": [
        "/Users/jeremy/antigravity/LCML/assets/logos/gram_cdv_civ.png",
        "/Users/jeremy/antigravity/LCML/public/assets/logos/gram_cdv_civ.png"
    ],
    "/Users/jeremy/.gemini/antigravity/brain/6bcf5aa8-36e3-4743-bf02-1c935bb74813/gram_cc_1783362384882.jpg": [
        "/Users/jeremy/antigravity/LCML/assets/logos/gram_cc.png",
        "/Users/jeremy/antigravity/LCML/public/assets/logos/gram_cc.png"
    ],
    "/Users/jeremy/.gemini/antigravity/brain/6bcf5aa8-36e3-4743-bf02-1c935bb74813/gram_attribut_1783362399959.jpg": [
        "/Users/jeremy/antigravity/LCML/assets/logos/gram_attribut.png",
        "/Users/jeremy/antigravity/LCML/public/assets/logos/gram_attribut.png"
    ],
    "/Users/jeremy/.gemini/antigravity/brain/6bcf5aa8-36e3-4743-bf02-1c935bb74813/gram_agent_1783362414183.jpg": [
        "/Users/jeremy/antigravity/LCML/assets/logos/gram_agent.png",
        "/Users/jeremy/antigravity/LCML/public/assets/logos/gram_agent.png"
    ],
    "/Users/jeremy/.gemini/antigravity/brain/6bcf5aa8-36e3-4743-bf02-1c935bb74813/gram_analyse_phrase_1783362438868.jpg": [
        "/Users/jeremy/antigravity/LCML/assets/logos/gram_analyse_phrase.png",
        "/Users/jeremy/antigravity/LCML/public/assets/logos/gram_analyse_phrase.png"
    ]
}

success_count = 0
for src, dests in mappings.items():
    if process_image(src, dests):
        success_count += 1

print(f"Successfully processed {success_count}/{len(mappings)} images.")
