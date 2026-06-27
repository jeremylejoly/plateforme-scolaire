import os
import re
from html.parser import HTMLParser

project_root = "/Users/jeremy/antigravity/Tableau interactif"

class CustomHTMLParser(HTMLParser):
    def __init__(self, filepath):
        super().__init__()
        self.filepath = filepath
        self.broken = []
        self.in_style = False
        self.in_script = False

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        
        # 1. Check <img> src
        if tag == "img":
            src = attrs_dict.get("src")
            if src and not check_path(src, self.filepath):
                self.broken.append(("img src", src))
                
        # 2. Check SVG <image> href
        if tag == "image":
            href = attrs_dict.get("href") or attrs_dict.get("xlink:href")
            if href:
                if "${" not in href and "window." not in href:
                    if not check_path(href, self.filepath):
                        self.broken.append(("svg image href", href))
                        
        # 3. Check <source> src
        if tag == "source":
            src = attrs_dict.get("src")
            if src and not check_path(src, self.filepath):
                self.broken.append(("source src", src))
                
        if tag == "style":
            self.in_style = True
        if tag == "script":
            self.in_script = True

    def handle_endtag(self, tag):
        if tag == "style":
            self.in_style = False
        if tag == "script":
            self.in_script = False

    def handle_data(self, data):
        # 4. Check CSS url() in style tags
        if self.in_style:
            urls = re.findall(r'url\([\'"]?([^\'")]+)[\'"]?\)', data)
            for url in urls:
                if not url.startswith("data:") and not url.startswith("http"):
                    if not check_path(url, self.filepath):
                        self.broken.append(("css url", url))
                        
        # 5. Check hardcoded paths in JS scripts or tags
        if self.in_script:
            # Find paths like 'photos/xxx.png', "photos/xxx.png", 'audio/xxx.m4a', 'xxx.png', 'xxx.m4a', etc.
            # In TBI, files are mostly served directly from root, so we look for paths ending in media extensions
            paths = re.findall(r'[\'"]((?:photos/|[a-zA-Z0-9_\-\%\/]+\/)?(?:[a-zA-Z0-9_\-\.\,\%\/]+)\.(?:png|jpg|jpeg|webp|gif|svg|m4a|mp3|ttf|pdf|js|html))[\'"]', data)
            for p in paths:
                # Skip external script links, dynamic expressions or very generic words
                if p.startswith("http://") or p.startswith("https://") or "${" in p or p.startswith("window."):
                    continue
                # Skip paths that don't look like file references (e.g. library names without extensions, but we have extension check above)
                if not check_path(p, self.filepath) and not check_path(os.path.basename(p), self.filepath):
                    self.broken.append(("js path", p))

def check_path(path, current_file):
    # Clean up hash or query params
    path = path.split('?')[0].split('#')[0]
    
    # Ignore absolute web urls or inline base64 data
    if path.startswith("http://") or path.startswith("https://") or path.startswith("data:"):
        return True
        
    current_dir = os.path.dirname(current_file)
    
    # 1. Resolve relative path
    abs_path = os.path.normpath(os.path.join(current_dir, path))
    if os.path.exists(abs_path):
        return True
        
    # 2. Check if it's served from TBI root
    test_path_root = os.path.normpath(os.path.join(project_root, path))
    if os.path.exists(test_path_root):
        return True
        
    # 3. Check inside photos/ folder in TBI (since some files might refer to them directly or via subfolders)
    test_path_photos = os.path.normpath(os.path.join(project_root, "photos", os.path.basename(path)))
    if os.path.exists(test_path_photos):
        return True
        
    return False

def verify_file(filepath):
    parser = CustomHTMLParser(filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    try:
        parser.feed(content)
    except Exception as e:
        print(f"Error parsing {filepath}: {e}")
    return parser.broken

def main():
    print(f"Starting verification of all TBI HTML pages in: {project_root}...")
    all_broken = {}
    
    # Find all HTML files
    for root, dirs, files in os.walk(project_root):
        if ".git" in root:
            continue
        for file in files:
            if file.endswith(".html"):
                filepath = os.path.join(root, file)
                broken = verify_file(filepath)
                # Filter out false positives from JS scripts (e.g. external files, dynamic scripts, etc.)
                # by doing a strict check on actual media/document file names.
                clean_broken = []
                for tag_type, path in broken:
                    # Filter out common library names or generic file targets
                    if path in ["whiteboard.js", "app.js", "Horloge.html", "whiteboard.html"]:
                        # Double check if these files exist at the root
                        if os.path.exists(os.path.join(project_root, path.lower())) or os.path.exists(os.path.join(project_root, path)):
                            continue
                    clean_broken.append((tag_type, path))
                if clean_broken:
                    all_broken[filepath] = clean_broken
                    
    if all_broken:
        print("\n❌ Found broken path references in TBI:")
        for filepath, items in all_broken.items():
            rel_file = os.path.relpath(filepath, project_root)
            print(f"\n📄 File: {rel_file}")
            for tag_type, path in items:
                print(f"  - [{tag_type}]: {path}")
    else:
        print("\n✅ All TBI file paths, media, and logos verified successfully!")

if __name__ == "__main__":
    main()
