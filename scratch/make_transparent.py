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
                # E.g. at 240, alpha is 255; at 255, alpha is 0.
                alpha = int((255 - min_val) * (255.0 / (255 - 240)))
                alpha = max(0, min(255, alpha))
                # Preserving color channels, updating alpha channel
                newData.append((r, g, b, alpha))
            else:
                newData.append((r, g, b, a))
                
        img.putdata(newData)
        
        for dest in dest_names:
            dest_dir = os.path.dirname(dest)
            if not os.path.exists(dest_dir):
                os.makedirs(dest_dir, exist_ok=True)
            img.save(dest, "PNG")
            print(f"Saved transparent image to: {dest}")
        return True
    except Exception as e:
        print(f"Error processing {src_path}: {e}")
        return False

# Mappings of the generated images to their final assets locations
mappings = {
    "/Users/jeremy/.gemini/antigravity/brain/6bcf5aa8-36e3-4743-bf02-1c935bb74813/subject_francais_1782671698938.png": [
        "/Users/jeremy/antigravity/LCML/assets/logos/subject_francais.png",
        "/Users/jeremy/antigravity/LCML/public/assets/logos/subject_francais.png"
    ],
    "/Users/jeremy/.gemini/antigravity/brain/6bcf5aa8-36e3-4743-bf02-1c935bb74813/subject_eveil_1782671711549.png": [
        "/Users/jeremy/antigravity/LCML/assets/logos/subject_eveil.png",
        "/Users/jeremy/antigravity/LCML/public/assets/logos/subject_eveil.png"
    ],
    "/Users/jeremy/.gemini/antigravity/brain/6bcf5aa8-36e3-4743-bf02-1c935bb74813/subject_jeux_1782671729180.png": [
        "/Users/jeremy/antigravity/LCML/assets/logos/subject_jeux.png",
        "/Users/jeremy/antigravity/LCML/public/assets/logos/subject_jeux.png"
    ],
    "/Users/jeremy/.gemini/antigravity/brain/6bcf5aa8-36e3-4743-bf02-1c935bb74813/subject_fiches_1782671745029.png": [
        "/Users/jeremy/antigravity/LCML/assets/logos/subject_fiches.png",
        "/Users/jeremy/antigravity/LCML/public/assets/logos/subject_fiches.png"
    ],
    "/Users/jeremy/.gemini/antigravity/brain/6bcf5aa8-36e3-4743-bf02-1c935bb74813/subject_gestion_1782671763902.png": [
        "/Users/jeremy/antigravity/LCML/assets/logos/subject_gestion.png",
        "/Users/jeremy/antigravity/LCML/public/assets/logos/subject_gestion.png"
    ],
    "/Users/jeremy/.gemini/antigravity/brain/6bcf5aa8-36e3-4743-bf02-1c935bb74813/subject_endirect_1782671784050.png": [
        "/Users/jeremy/antigravity/LCML/assets/logos/subject_endirect.png",
        "/Users/jeremy/antigravity/LCML/public/assets/logos/subject_endirect.png"
    ],
    "/Users/jeremy/.gemini/antigravity/brain/6bcf5aa8-36e3-4743-bf02-1c935bb74813/home_plan_travail_1782671798900.png": [
        "/Users/jeremy/antigravity/LCML/assets/logos/home_plan_travail.png",
        "/Users/jeremy/antigravity/LCML/public/assets/logos/home_plan_travail.png"
    ]
}

success_count = 0
for src, dests in mappings.items():
    if process_image(src, dests):
        success_count += 1

print(f"Successfully processed {success_count}/{len(mappings)} images.")
