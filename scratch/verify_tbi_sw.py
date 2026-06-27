import os
import re

project_root = "/Users/jeremy/antigravity/Tableau interactif"
sw_path = os.path.join(project_root, "sw.js")

def main():
    if not os.path.exists(sw_path):
        print(f"Error: {sw_path} not found.")
        return
        
    with open(sw_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Match the ASSETS_TO_CACHE array contents
    match = re.search(r'const ASSETS_TO_CACHE = \[(.*?)\];', content, re.DOTALL)
    if not match:
        print("Error: Could not find ASSETS_TO_CACHE array in sw.js.")
        return
        
    assets_str = match.group(1)
    # Extract string literals like './', 'index.html', etc.
    assets = re.findall(r'[\'"]([^\'"]+)[\'"]', assets_str)
    
    missing_assets = []
    for asset in assets:
        if asset == "./" or asset.startswith("http"):
            continue
            
        # Clean path from leading "./"
        clean_asset = asset
        if clean_asset.startswith("./"):
            clean_asset = clean_asset[2:]
            
        # Resolve normalized path
        # Note: the filename might contain specific characters like "Où_va_l_argent_de_ton_salaire.m4a"
        # which can have different unicode decompositions (NFC/NFD).
        # Let's check both direct check and name comparison.
        abs_path = os.path.normpath(os.path.join(project_root, clean_asset))
        
        # Fallback to case-insensitive and unicode-normalization checks
        exists = os.path.exists(abs_path)
        if not exists:
            # Let's search if a file with similar name exists
            parent_dir = os.path.dirname(abs_path)
            if os.path.exists(parent_dir):
                target_name = os.path.basename(abs_path)
                # Normalize both to NFD and NFC to compare
                import unicodedata
                target_nfc = unicodedata.normalize('NFC', target_name)
                target_nfd = unicodedata.normalize('NFD', target_name)
                
                for f_item in os.listdir(parent_dir):
                    f_nfc = unicodedata.normalize('NFC', f_item)
                    f_nfd = unicodedata.normalize('NFD', f_item)
                    if f_nfc == target_nfc or f_nfd == target_nfd or f_nfc.lower() == target_nfc.lower():
                        exists = True
                        break
                        
        if not exists:
            missing_assets.append(asset)
            
    if missing_assets:
        print(f"❌ Found {len(missing_assets)} missing files listed in TBI sw.js:")
        for asset in missing_assets:
            print(f"  - {asset}")
    else:
        print("✅ All TBI Service Worker assets exist on disk!")

if __name__ == "__main__":
    main()
