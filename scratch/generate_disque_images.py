import os
import math
from PIL import Image, ImageDraw

def create_base_image():
    # Create a 1600x1600 image with transparent background (RGBA)
    img = Image.new('RGBA', (1600, 1600), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    return img, draw

def save_and_resize(img, path):
    # Resize to 400x400 with high-quality antialiasing
    resized = img.resize((400, 400), Image.Resampling.LANCZOS)
    resized.save(path, 'PNG')
    print(f"Saved: {path}")

# Output directory
output_dir = "/Users/jeremy/antigravity/LCML/assets/disque"
os.makedirs(output_dir, exist_ok=True)

# Geometrical Constants (for 1600x1600 canvas)
cx, cy = 800, 800
r = 600
thick_normal = 20
thick_highlight = 35
dot_normal = 25
dot_highlight = 45

# Colors (RGBA)
COLOR_SLATE = (100, 116, 139, 255)       # #64748b - neutral slate
COLOR_SLATE_LIGHT = (203, 213, 225, 255) # #cbd5e1 - light slate for inactive elements
COLOR_ORANGE = (234, 88, 12, 255)        # #ea580c - vibrant orange (warning-style color)
COLOR_ORANGE_BG = (234, 88, 12, 40)       # Semi-transparent orange for disk surface

# 1. CERCLE (The boundary / circumference highlighted)
img, draw = create_base_image()
draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=COLOR_ORANGE, width=thick_highlight)
draw.ellipse([cx - dot_normal, cy - dot_normal, cx + dot_normal, cy + dot_normal], fill=COLOR_SLATE)
save_and_resize(img, os.path.join(output_dir, "cercle.png"))

# 2. DISQUE (The filled surface)
img, draw = create_base_image()
draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=COLOR_ORANGE_BG, outline=COLOR_SLATE, width=thick_normal)
draw.ellipse([cx - dot_normal, cy - dot_normal, cx + dot_normal, cy + dot_normal], fill=COLOR_SLATE)
save_and_resize(img, os.path.join(output_dir, "disque.png"))

# 3. CENTRE (The center point highlighted)
img, draw = create_base_image()
draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=COLOR_SLATE_LIGHT, width=thick_normal)
draw.ellipse([cx - dot_highlight, cy - dot_highlight, cx + dot_highlight, cy + dot_highlight], fill=COLOR_ORANGE)
save_and_resize(img, os.path.join(output_dir, "centre.png"))

# 4. RAYON (Radius)
img, draw = create_base_image()
draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=COLOR_SLATE_LIGHT, width=thick_normal)
angle_rad = math.radians(45)
rx = cx + r * math.cos(angle_rad)
ry = cy - r * math.sin(angle_rad)
draw.line([cx, cy, rx, ry], fill=COLOR_ORANGE, width=thick_highlight)
draw.ellipse([cx - dot_normal, cy - dot_normal, cx + dot_normal, cy + dot_normal], fill=COLOR_SLATE)
save_and_resize(img, os.path.join(output_dir, "rayon.png"))

# 5. DIAMETRE (Diameter)
img, draw = create_base_image()
draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=COLOR_SLATE_LIGHT, width=thick_normal)
angle_rad = math.radians(30)
dx1 = cx - r * math.cos(angle_rad)
dy1 = cy + r * math.sin(angle_rad)
dx2 = cx + r * math.cos(angle_rad)
dy2 = cy - r * math.sin(angle_rad)
draw.line([dx1, dy1, dx2, dy2], fill=COLOR_ORANGE, width=thick_highlight)
draw.ellipse([cx - dot_normal, cy - dot_normal, cx + dot_normal, cy + dot_normal], fill=COLOR_SLATE)
save_and_resize(img, os.path.join(output_dir, "diametre.png"))

# 6. CORDE (Chord)
img, draw = create_base_image()
draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=COLOR_SLATE_LIGHT, width=thick_normal)
rad1 = math.radians(120)
rad2 = math.radians(240)
x1 = cx + r * math.cos(rad1)
y1 = cy - r * math.sin(rad1)
x2 = cx + r * math.cos(rad2)
y2 = cy - r * math.sin(rad2)
draw.line([x1, y1, x2, y2], fill=COLOR_ORANGE, width=thick_highlight)
draw.ellipse([cx - dot_normal, cy - dot_normal, cx + dot_normal, cy + dot_normal], fill=COLOR_SLATE)
save_and_resize(img, os.path.join(output_dir, "corde.png"))

# 7. ARC (Arc of Circle)
img, draw = create_base_image()
draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=COLOR_SLATE_LIGHT, width=thick_normal)
arc_points = []
for deg in range(-60, 61):
    rad = math.radians(deg)
    ax = cx + r * math.cos(rad)
    ay = cy + r * math.sin(rad)
    arc_points.append((ax, ay))

for i in range(len(arc_points) - 1):
    draw.line([arc_points[i], arc_points[i+1]], fill=COLOR_ORANGE, width=thick_highlight)

draw.ellipse([cx - dot_normal, cy - dot_normal, cx + dot_normal, cy + dot_normal], fill=COLOR_SLATE)
save_and_resize(img, os.path.join(output_dir, "arc.png"))

def generate_dashboard_logo():
    # Create 1024x1024 canvas and resize down to 512x512 for high-quality antialiasing
    img_large = Image.new('RGBA', (1024, 1024), (0, 0, 0, 0))
    draw_large = ImageDraw.Draw(img_large)
    
    cx_l, cy_l = 512, 512
    r_l = 380
    
    # Outer circle (Blue, slate)
    draw_large.ellipse([cx_l - r_l, cy_l - r_l, cx_l + r_l, cy_l + r_l], fill=(37, 99, 235, 25), outline=(37, 99, 235, 255), width=24)
    # Center dot (Blue)
    draw_large.ellipse([cx_l - 22, cy_l - 22, cx_l + 22, cy_l + 22], fill=(37, 99, 235, 255))
    # Radius line (Orange highlight)
    angle_rad = math.radians(45)
    rx = cx_l + r_l * math.cos(angle_rad)
    ry = cy_l - r_l * math.sin(angle_rad)
    draw_large.line([cx_l, cy_l, rx, ry], fill=(234, 88, 12, 255), width=28)
    
    logo_dir = "/Users/jeremy/antigravity/LCML/assets/logos"
    os.makedirs(logo_dir, exist_ok=True)
    logo_path = os.path.join(logo_dir, "solide_disque.png")
    
    resized = img_large.resize((512, 512), Image.Resampling.LANCZOS)
    resized.save(logo_path, 'PNG')
    print(f"Saved dashboard logo: {logo_path}")

generate_dashboard_logo()
print("All circle diagram images and dashboard logo generated successfully!")
