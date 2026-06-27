import os
import re
from html.parser import HTMLParser

project_root = "/Users/jeremy/antigravity/LCML"

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
                        
        # 5. Check hardcoded paths in JS scripts
        if self.in_script:
            paths = re.findall(r'[\'"]((?:photos|audio|assets/logos)/[a-zA-Z0-9_\-\.\,\%\/]+\.(?:png|jpg|jpeg|webp|gif|svg|m4a|mp3|ttf))[\'"]', data)
            for p in paths:
                # If path contains %20 or spaces, unquote it
                p_clean = p.replace("%20", " ")
                if not check_path(p_clean, self.filepath) and not check_path(os.path.join("..", p_clean), self.filepath):
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
        
    # 2. Check if it's served from public/ (e.g. assets/logos/xxx.png or photos/xxx.png or audio/xxx.m4a)
    # When serving, files under public/ are served at the root level.
    for prefix in ["public", ""]:
        test_path = os.path.normpath(os.path.join(project_root, prefix, path))
        if os.path.exists(test_path):
            return True
            
        # Try resolving relative path inside public
        test_path_rel = os.path.normpath(os.path.join(project_root, prefix, os.path.relpath(abs_path, project_root)))
        if os.path.exists(test_path_rel):
            return True
            
    # Try resolving path with parent dir fallback
    if "fiches" in current_dir:
        fallback_path = os.path.normpath(os.path.join(project_root, "public", path))
        if os.path.exists(fallback_path):
            return True
        fallback_path_root = os.path.normpath(os.path.join(project_root, path))
        if os.path.exists(fallback_path_root):
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
    print("Starting verification of all HTML pages using built-in HTMLParser...")
    all_broken = {}
    
    # Find all HTML files
    for root, dirs, files in os.walk(project_root):
        if "node_modules" in root or ".git" in root or "scratch" in root:
            continue
        for file in files:
            if file.endswith(".html"):
                filepath = os.path.join(root, file)
                broken = verify_file(filepath)
                if broken:
                    all_broken[filepath] = broken
                    
    if all_broken:
        print("\n❌ Found broken path references:")
        for filepath, items in all_broken.items():
            rel_file = os.path.relpath(filepath, project_root)
            print(f"\n📄 File: {rel_file}")
            for tag_type, path in items:
                print(f"  - [{tag_type}]: {path}")
    else:
        print("\n✅ All file paths, media, and logos verified successfully!")

if __name__ == "__main__":
    main()
