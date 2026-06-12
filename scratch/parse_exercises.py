import re
import json

def parse_qcm(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the QUESTIONS array
    match = re.search(r'const QUESTIONS\s*=\s*\[(.*?)\];', content, re.DOTALL)
    if not match:
        print(f"Could not find QUESTIONS in {filepath}")
        return []
    
    array_content = match.group(1)
    
    # Parse individual objects: { p:"...", opts:[...], correct:... }
    # Let's find all curly brace blocks
    blocks = re.findall(r'\{\s*p:"(.*?)",\s*opts:\[(.*?)\],\s*correct:(\d+)\s*\}', array_content)
    
    questions = []
    for p, opts_str, correct in blocks:
        opts = [o.strip().strip('"').strip("'") for o in opts_str.split(',')]
        questions.append({
            'text': p.replace('<em>...', '___').replace('...</em>', '').replace('<em>..', '___').replace('..</em>', ''),
            'options': opts,
            'answer': int(correct)
        })
    return questions

def parse_ecriture(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'const QUESTIONS\s*=\s*\[(.*?)\];', content, re.DOTALL)
    if not match:
        print(f"Could not find QUESTIONS in {filepath}")
        return []
    
    array_content = match.group(1)
    
    # Parse individual objects: { p:"...", verbe:"...", rep:"..." }
    blocks = re.findall(r'\{\s*p:"(.*?)",\s*verbe:"(.*?)",\s*rep:"(.*?)"\s*\}', array_content)
    
    questions = []
    for p, verbe, rep in blocks:
        # Split p by <em>...</em>
        parts = re.split(r'<em>\.\.\.<\/em>|<em>\.\.<\/em>', p)
        before = parts[0] if len(parts) > 0 else ""
        after = parts[1] if len(parts) > 1 else ""
        questions.append({
            'before': before,
            'after': after,
            'verb': verbe,
            'answer': rep
        })
    return questions

if __name__ == "__main__":
    present_qcm = parse_qcm('/Users/jeremy/Downloads/conjugaison_present_QCM.html')
    present_ecriture = parse_ecriture('/Users/jeremy/Downloads/conjugaison_present_ecriture.html')
    imparfait_qcm = parse_qcm('/Users/jeremy/Downloads/conjugaison_imparfait_QCM.html')
    imparfait_ecriture = parse_ecriture('/Users/jeremy/Downloads/conjugaison_imparfait_ecriture.html')
    
    print(f"Present QCM count: {len(present_qcm)}")
    print(f"Present Ecriture count: {len(present_ecriture)}")
    print(f"Imparfait QCM count: {len(imparfait_qcm)}")
    print(f"Imparfait Ecriture count: {len(imparfait_ecriture)}")
    
    # Let's save them as JSON for verification or easy copy
    with open('/Users/jeremy/antigravity/Classe-de-Mr-Lejoly/scratch/extracted_questions.json', 'w', encoding='utf-8') as out:
        json.dump({
            'present_qcm': present_qcm,
            'present_ecriture': present_ecriture,
            'imparfait_qcm': imparfait_qcm,
            'imparfait_ecriture': imparfait_ecriture
        }, out, indent=2, ensure_ascii=False)
