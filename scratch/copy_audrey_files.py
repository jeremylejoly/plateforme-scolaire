import os
import re
import shutil
from html.parser import HTMLParser

# Target HTML files to process
HTML_FILES = [
    "cycle-eau.html",
    "mots-caches.html",
    "mots-croises.html",
    "sudoku.html",
    "relief-hydrographie.html"
]

SOURCE_DIR = "/Users/jeremy/antigravity/LCML"
DEST_DIR = "/Users/jeremy/Desktop/Echanges Audrey/A partager"

# Supported image and resource extensions
RESOURCE_EXTENSIONS = ('.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.css', '.js')

class ResourceParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.resources = set()

    def handle_starttag(self, tag, attrs):
        for attr, value in attrs:
            if attr in ('src', 'href', 'data-img', 'data-image'):
                # Ignore absolute/network URLs
                if value and not value.startswith(('http://', 'https://', '//', 'data:')):
                    self.resources.add(value)

def extract_resources_from_html(file_path):
    parser = ResourceParser()
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        parser.feed(content)
        
        # Also search for paths within JavaScript or inline styles using regex
        # Find strings containing photos/ or assets/ followed by valid image extensions
        matches = re.findall(r'["\'](photos/[^"\']+\.(?:png|jpg|jpeg|gif|svg|webp))["\']', content, re.IGNORECASE)
        for match in matches:
            parser.resources.add(match)
            
        matches_assets = re.findall(r'["\'](assets/[^"\']+\.(?:png|jpg|jpeg|gif|svg|webp|css|js))["\']', content, re.IGNORECASE)
        for match in matches_assets:
            parser.resources.add(match)

    return parser.resources

def main():
    print(f"Starting copy process...")
    print(f"Source directory: {SOURCE_DIR}")
    print(f"Destination directory: {DEST_DIR}")
    
    # Ensure destination exists
    if not os.path.exists(DEST_DIR):
        print(f"Creating destination directory: {DEST_DIR}")
        os.makedirs(DEST_DIR, exist_ok=True)

    all_resources = set()

    # Process each HTML file
    for html_file in HTML_FILES:
        src_html_path = os.path.join(SOURCE_DIR, html_file)
        dest_html_path = os.path.join(DEST_DIR, html_file)
        
        if not os.path.exists(src_html_path):
            print(f"WARNING: Source HTML file does not exist: {src_html_path}")
            continue
            
        print(f"\nProcessing: {html_file}")
        
        # Copy HTML file
        print(f"Copying {html_file} to destination...")
        shutil.copy2(src_html_path, dest_html_path)
        
        # Extract referenced resources
        resources = extract_resources_from_html(src_html_path)
        print(f"Found {len(resources)} local resource references.")
        for res in resources:
            all_resources.add(res)

    print(f"\nTotal unique resources identified: {len(all_resources)}")
    
    # Copy resources
    copied_count = 0
    missing_count = 0
    for res in sorted(all_resources):
        # Normalize path
        res_clean = res.strip().lstrip('/')
        src_res_path = os.path.join(SOURCE_DIR, res_clean)
        dest_res_path = os.path.join(DEST_DIR, res_clean)
        
        if os.path.exists(src_res_path):
            # Create subdirectories if needed
            os.makedirs(os.path.dirname(dest_res_path), exist_ok=True)
            print(f"Copying resource: {res_clean} -> {dest_res_path}")
            shutil.copy2(src_res_path, dest_res_path)
            copied_count += 1
        else:
            # Let's check if the file is just missing or is an external URL/placeholder
            if res_clean:
                print(f"WARNING: Referenced file does not exist: {src_res_path}")
                missing_count += 1

    print(f"\nSummary:")
    print(f"- HTML files copied: {len(HTML_FILES)}")
    print(f"- Resources copied: {copied_count}")
    if missing_count > 0:
        print(f"- Missing resources: {missing_count}")
    print("Done!")

if __name__ == "__main__":
    main()
