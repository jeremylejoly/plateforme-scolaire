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
    "/Users/jeremy/.gemini/antigravity/brain/6bcf5aa8-36e3-4743-bf02-1c935bb74813/gram_nom_1783360631060.jpg": [
        "/Users/jeremy/antigravity/LCML/assets/logos/gram_nom.png",
        "/Users/jeremy/antigravity/LCML/public/assets/logos/gram_nom.png"
    ],
    "/Users/jeremy/.gemini/antigravity/brain/6bcf5aa8-36e3-4743-bf02-1c935bb74813/gram_determinant_1783360643918.jpg": [
        "/Users/jeremy/antigravity/LCML/assets/logos/gram_determinant.png",
        "/Users/jeremy/antigravity/LCML/public/assets/logos/gram_determinant.png"
    ],
    "/Users/jeremy/.gemini/antigravity/brain/6bcf5aa8-36e3-4743-bf02-1c935bb74813/gram_adjectif_1783360657070.jpg": [
        "/Users/jeremy/antigravity/LCML/assets/logos/gram_adjectif.png",
        "/Users/jeremy/antigravity/LCML/public/assets/logos/gram_adjectif.png"
    ],
    "/Users/jeremy/.gemini/antigravity/brain/6bcf5aa8-36e3-4743-bf02-1c935bb74813/gram_verbe_1783360672133.jpg": [
        "/Users/jeremy/antigravity/LCML/assets/logos/gram_verbe.png",
        "/Users/jeremy/antigravity/LCML/public/assets/logos/gram_verbe.png"
    ],
    "/Users/jeremy/.gemini/antigravity/brain/6bcf5aa8-36e3-4743-bf02-1c935bb74813/gram_pronom_1783360685447.jpg": [
        "/Users/jeremy/antigravity/LCML/assets/logos/gram_pronom.png",
        "/Users/jeremy/antigravity/LCML/public/assets/logos/gram_pronom.png"
    ],
    "/Users/jeremy/.gemini/antigravity/brain/6bcf5aa8-36e3-4743-bf02-1c935bb74813/gram_adverbe_1783360698852.jpg": [
        "/Users/jeremy/antigravity/LCML/assets/logos/gram_adverbe.png",
        "/Users/jeremy/antigravity/LCML/public/assets/logos/gram_adverbe.png"
    ],
    "/Users/jeremy/.gemini/antigravity/brain/6bcf5aa8-36e3-4743-bf02-1c935bb74813/gram_complement_nom_1783360710930.jpg": [
        "/Users/jeremy/antigravity/LCML/assets/logos/gram_complement_nom.png",
        "/Users/jeremy/antigravity/LCML/public/assets/logos/gram_complement_nom.png"
    ],
    "/Users/jeremy/.gemini/antigravity/brain/6bcf5aa8-36e3-4743-bf02-1c935bb74813/gram_tri_mots_1783360725109.jpg": [
        "/Users/jeremy/antigravity/LCML/assets/logos/gram_tri_mots.png",
        "/Users/jeremy/antigravity/LCML/public/assets/logos/gram_tri_mots.png"
    ]
}

success_count = 0
for src, dests in mappings.items():
    if process_image(src, dests):
        success_count += 1

print(f"Successfully processed {success_count}/{len(mappings)} images.")
