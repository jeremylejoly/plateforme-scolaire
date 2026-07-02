import os
import math
from PIL import Image, ImageDraw, ImageFont

def create_base_image():
    return Image.new('RGBA', (1600, 1600), (0, 0, 0, 0))

def save_and_resize(img, path):
    resized = img.resize((400, 400), Image.Resampling.LANCZOS)
    resized.save(path, 'PNG')
    print(f"Saved: {path}")

output_dir = "/Users/jeremy/antigravity/LCML/assets/disque"
os.makedirs(output_dir, exist_ok=True)

# Geometrical Constants (for 1600x1600 canvas)
cx, cy = 800, 800
r = 500  # radius for position exercises
thick_normal = 20
thick_highlight = 36
dot_normal = 35
dot_highlight = 50

# Colors (RGBA)
COLOR_SLATE = (100, 116, 139, 255)       # #64748b - neutral slate
COLOR_SLATE_LIGHT = (203, 213, 225, 255) # #cbd5e1 - light slate for circle outline
COLOR_ORANGE = (234, 88, 12, 255)        # #ea580c - vibrant orange highlight
COLOR_BLUE = (37, 99, 235, 255)          # #2563eb - secondary blue
COLOR_TEXT = (15, 23, 42, 255)           # #0f172a - dark slate for text

# Font setup (using Arial on macOS)
try:
    font_large = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 120)
    font_medium = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 70)
except IOError:
    font_large = ImageFont.load_default()
    font_medium = ImageFont.load_default()

def draw_labeled_dot(draw, x, y, label, color=COLOR_SLATE, offset=(45, -90)):
    draw.ellipse([x - dot_normal, y - dot_normal, x + dot_normal, y + dot_normal], fill=color)
    draw.text((x + offset[0], y + offset[1]), label, fill=COLOR_TEXT, font=font_large)

# =========================================================================
# EXERCISE 3: POSITION OF POINTS (6 diagrams)
# =========================================================================

def draw_position_exercise(target_dist, label, filename, show_diameter=False):
    img = create_base_image()
    draw = ImageDraw.Draw(img)
    
    # 1. Draw circle outline
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=COLOR_SLATE_LIGHT, width=thick_normal)
    
    # 2. Draw reference label (e.g. "Rayon = 5 cm" or "Diamètre = 12 cm")
    if show_diameter:
        # Reference diameter line in light slate
        draw.line([cx - r, cy, cx + r, cy], fill=COLOR_SLATE_LIGHT, width=thick_normal)
        draw.text((cx - 300, cy + 120), "Diamètre = 12 cm", fill=COLOR_SLATE, font=font_medium)
    else:
        # Reference radius line in light slate (pointing down-left)
        ang_ref = math.radians(225)
        rx_ref = cx + r * math.cos(ang_ref)
        ry_ref = cy - r * math.sin(ang_ref)
        draw.line([cx, cy, rx_ref, ry_ref], fill=COLOR_SLATE_LIGHT, width=thick_normal)
        draw.text((cx - 450, cy + 300), "Rayon = 5 cm", fill=COLOR_SLATE, font=font_medium)
        
    # 3. Draw target point A/B/C at target_dist (relative to r)
    angle_rad = math.radians(45)
    
    if show_diameter:
        visual_dist = r * (target_dist / 6.0)
    else:
        visual_dist = r * (target_dist / 5.0)
        
    tx = cx + visual_dist * math.cos(angle_rad)
    ty = cy - visual_dist * math.sin(angle_rad)
    
    # Dotted line
    steps = 15
    for i in range(steps):
        t1 = i / steps
        t2 = (i + 0.5) / steps
        x1 = cx + (tx - cx) * t1
        y1 = cy + (ty - cy) * t1
        x2 = cx + (tx - cx) * t2
        y2 = cy + (ty - cy) * t2
        draw.line([x1, y1, x2, y2], fill=COLOR_ORANGE, width=12)
        
    # Draw label for distance (above the dotted line)
    mx = cx + (visual_dist * 0.5) * math.cos(angle_rad) - 80
    my = cy - (visual_dist * 0.5) * math.sin(angle_rad) - 100
    draw.text((mx, my), f"{target_dist} cm", fill=COLOR_ORANGE, font=font_large)
    
    # Draw center O and target point
    draw_labeled_dot(draw, cx, cy, "O", COLOR_SLATE, (-130, -90))
    draw_labeled_dot(draw, tx, ty, label, COLOR_ORANGE, (45, -90))
    
    save_and_resize(img, os.path.join(output_dir, filename))

# Generate Exercise 3 images
draw_position_exercise(3, "A", "pos_interieur_r5.png")
draw_position_exercise(5, "B", "pos_frontiere_r5.png")
draw_position_exercise(7, "C", "pos_exterieur_r5.png")
draw_position_exercise(4, "D", "pos_interieur_d12.png", show_diameter=True)
draw_position_exercise(6, "E", "pos_frontiere_d12.png", show_diameter=True)
draw_position_exercise(8, "F", "pos_exterieur_d12.png", show_diameter=True)


# =========================================================================
# EXERCISE 4: COMPASS INVESTIGATIONS (4 diagrams)
# =========================================================================

# 1. compas_rosace_petale.png
img = create_base_image()
draw = ImageDraw.Draw(img)
draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=COLOR_SLATE_LIGHT, width=thick_normal)
# Points
draw_labeled_dot(draw, cx, cy, "O", COLOR_SLATE, (-130, 60))
draw_labeled_dot(draw, cx, cy - r, "A", COLOR_SLATE, (-40, -170))
draw_labeled_dot(draw, cx + r, cy, "B", COLOR_SLATE, (50, -90))
draw_labeled_dot(draw, cx, cy + r, "C", COLOR_SLATE, (-40, 50))
draw_labeled_dot(draw, cx - r, cy, "D", COLOR_SLATE, (-150, -90))

# Orange arc centered at A, radius r
ax_c, ay_c = cx, cy - r
arc_pts = []
for deg in range(30, 151):
    rad = math.radians(deg)
    arc_pts.append((ax_c + r * math.cos(rad), ay_c + r * math.sin(rad)))
for i in range(len(arc_pts) - 1):
    draw.line([arc_pts[i], arc_pts[i+1]], fill=COLOR_ORANGE, width=thick_highlight)
save_and_resize(img, os.path.join(output_dir, "compas_rosace_petale.png"))


# 2. compas_tangents.png
img = create_base_image()
draw = ImageDraw.Draw(img)
r_t = 250
ax = cx - r_t  # 550
bx = cx + r_t  # 1050
# Circle 1 (Blue) centered at A
draw.ellipse([ax - r_t, cy - r_t, ax + r_t, cy + r_t], outline=COLOR_BLUE, width=thick_normal)
# Circle 2 (Orange) centered at B
draw.ellipse([bx - r_t, cy - r_t, bx + r_t, cy + r_t], outline=COLOR_ORANGE, width=thick_highlight)
# Points A, T, B
draw_labeled_dot(draw, ax, cy, "A", COLOR_BLUE, (-40, -150))
draw_labeled_dot(draw, cx, cy, "T", COLOR_SLATE, (-40, -150))
draw_labeled_dot(draw, bx, cy, "B", COLOR_ORANGE, (-40, -150))
# Horizontal line connecting centers
draw.line([ax, cy, bx, cy], fill=COLOR_SLATE_LIGHT, width=6)
# Labeled lengths (shifted to cy + 50, centered on segments AT and TB)
draw.text((ax + r_t/2 - 80, cy + 50), "4 cm", fill=COLOR_BLUE, font=font_medium)
draw.text((bx - r_t/2 - 80, cy + 50), "4 cm", fill=COLOR_ORANGE, font=font_medium)
save_and_resize(img, os.path.join(output_dir, "compas_tangents.png"))


# 3. compas_intersection.png
img = create_base_image()
draw = ImageDraw.Draw(img)
r_i = 350
ax_pos = cx - r_i/2  # 625
bx_pos = cx + r_i/2  # 975
# Circle 1 (Slate) centered at A
draw.ellipse([ax_pos - r_i, cy - r_i, ax_pos + r_i, cy + r_i], outline=COLOR_SLATE_LIGHT, width=thick_normal)
# Circle 2 (Orange) centered at B
draw.ellipse([bx_pos - r_i, cy - r_i, bx_pos + r_i, cy + r_i], outline=COLOR_ORANGE, width=thick_highlight)
# Centers A and B
draw_labeled_dot(draw, ax_pos, cy, "A", COLOR_SLATE, (-40, -150))
draw_labeled_dot(draw, bx_pos, cy, "B", COLOR_ORANGE, (-40, -150))
# Segment AB
draw.line([ax_pos, cy, bx_pos, cy], fill=COLOR_SLATE, width=8)
# Label below the line
draw.text((cx - 80, cy + 50), "6 cm", fill=COLOR_TEXT, font=font_medium)
save_and_resize(img, os.path.join(output_dir, "compas_intersection.png"))


# 4. compas_yinyang.png
img = create_base_image()
draw = ImageDraw.Draw(img)
# Outer circle
draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=COLOR_SLATE_LIGHT, width=thick_normal)
# Diameter line
draw.line([cx - r, cy, cx + r, cy], fill=COLOR_SLATE_LIGHT, width=thick_normal)
# Points
draw_labeled_dot(draw, cx - r, cy, "A", COLOR_SLATE, (-40, -150))
draw_labeled_dot(draw, cx - r/2, cy, "B", COLOR_ORANGE, (-40, -150))
draw_labeled_dot(draw, cx, cy, "C", COLOR_SLATE, (-40, -150))
draw_labeled_dot(draw, cx + r/2, cy, "D", COLOR_SLATE, (-40, -150))
draw_labeled_dot(draw, cx + r, cy, "E", COLOR_SLATE, (-40, -150))

# Upper half-circle centered at B
bx_c, by_c = cx - r/2, cy
r_half = r/2
arc_pts = []
for deg in range(180, 361):
    rad = math.radians(deg)
    arc_pts.append((bx_c + r_half * math.cos(rad), by_c + r_half * math.sin(rad)))
for i in range(len(arc_pts) - 1):
    draw.line([arc_pts[i], arc_pts[i+1]], fill=COLOR_ORANGE, width=thick_highlight)

# Segment AB and BC
draw.text((cx - 3 * r/4 - 80, cy + 50), "3 cm", fill=COLOR_SLATE, font=font_medium)
draw.text((cx - r/4 - 80, cy + 50), "3 cm", fill=COLOR_SLATE, font=font_medium)
save_and_resize(img, os.path.join(output_dir, "compas_yinyang.png"))

print("All advanced circle geometry exercises images regenerated successfully with correct geometry and layouts!")
