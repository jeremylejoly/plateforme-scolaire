import os
import re

project_root = "/Users/jeremy/antigravity/LCML"
sw_path = os.path.join(project_root, "sw.js")

def main():
    if not os.path.exists(sw_path):
        print(f"Error: {sw_path} not found.")
        return
        
    with open(sw_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Match the CORE_ASSETS array contents
    match = re.search(r'const CORE_ASSETS = \[(.*?)\];', content, re.DOTALL)
    if not match:
        print("Error: Could not find CORE_ASSETS array in sw.js.")
        return
        
    assets_str = match.group(1)
    # Extract string literals like './', 'index.html', etc.
    assets = re.findall(r'[\'"]([^\'"]+)[\'"]', assets_str)
    
    missing_assets = []
    for asset in assets:
        if asset == "./":
            continue
            
        # Clean path from leading "./"
        clean_asset = asset
        if clean_asset.startswith("./"):
            clean_asset = clean_asset[2:]
            
        # Try both direct path and public/ path (since Vite serves public files from root,
        # but in source repository they might be in fiches/, photos/, public/, etc.)
        direct_path = os.path.join(project_root, clean_asset)
        public_path = os.path.join(project_root, "public", clean_asset)
        
        if not os.path.exists(direct_path) and not os.path.exists(public_path):
            missing_assets.append(asset)
            
    if missing_assets:
        print(f"❌ Found {len(missing_assets)} missing files listed in sw.js:")
        for asset in missing_assets:
            print(f"  - {asset}")
    else:
        print("✅ All Service Worker assets (sw.js CORE_ASSETS) exist on disk!")

if __name__ == "__main__":
    main()
