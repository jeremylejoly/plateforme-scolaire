import re
import json

def parse_qcm(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'const QUESTIONS\s*=\s*\[(.*?)\];', content, re.DOTALL)
    if not match:
        raise ValueError(f"Could not find QUESTIONS in {filepath}")
    
    array_content = match.group(1)
    
    # Parse: { p:"...", opts:[...], correct:... }
    blocks = re.findall(r'\{\s*p:"(.*?)",\s*opts:\[(.*?)\],\s*correct:(\d+)\s*\}', array_content)
    
    questions = []
    for p, opts_str, correct in blocks:
        opts = [o.strip().strip('"').strip("'") for o in opts_str.split(',')]
        # Clean <em>...</em> tags into ___
        text_clean = re.sub(r'<em>.*?</em>', '___', p)
        questions.append({
            'text': text_clean,
            'options': opts,
            'answer': int(correct)
        })
    return questions

def parse_ecriture(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'const QUESTIONS\s*=\s*\[(.*?)\];', content, re.DOTALL)
    if not match:
        raise ValueError(f"Could not find QUESTIONS in {filepath}")
    
    array_content = match.group(1)
    
    # Parse: { p:"...", verbe:"...", rep:"..." }
    blocks = re.findall(r'\{\s*p:"(.*?)",\s*verbe:"(.*?)",\s*rep:"(.*?)"\s*\}', array_content)
    
    questions = []
    for p, verbe, rep in blocks:
        # Split by <em>...</em> tags
        parts = re.split(r'<em>.*?</em>', p)
        before = parts[0] if len(parts) > 0 else ""
        after = parts[1] if len(parts) > 1 else ""
        questions.append({
            'before': before,
            'after': after,
            'verb': verbe,
            'answer': rep
        })
    return questions

def generate_js_block(tense, qcm_bank, trous_bank, eval_qcm, eval_trous):
    def to_js_str(val):
        return json.dumps(val, ensure_ascii=False)

    # Build QCM block
    qcm_lines = []
    for q in qcm_bank:
        line = "        {text:" + to_js_str(q['text']) + ", options:" + to_js_str(q['options']) + ", answer:" + str(q['answer']) + "},"
        qcm_lines.append(line)
    qcm_str = "\n".join(qcm_lines)

    # Build Trous block
    trous_lines = []
    for q in trous_bank:
        line = "        {before:" + to_js_str(q['before']) + ", after:" + to_js_str(q['after']) + ", verb:" + to_js_str(q['verb']) + ", answer:" + to_js_str(q['answer']) + "},"
        trous_lines.append(line)
    trous_str = "\n".join(trous_lines)

    # Build Eval QCM block
    eval_qcm_lines = []
    for q in eval_qcm:
        line = "          {text:" + to_js_str(q['text']) + ", options:" + to_js_str(q['options']) + ", answer:" + str(q['answer']) + "},"
        eval_qcm_lines.append(line)
    eval_qcm_str = "\n".join(eval_qcm_lines)

    # Build Eval Trous block
    eval_trous_lines = []
    for q in eval_trous:
        line = "          {before:" + to_js_str(q['before']) + ", after:" + to_js_str(q['after']) + ", verb:" + to_js_str(q['verb']) + ", answer:" + to_js_str(q['answer']) + "},"
        eval_trous_lines.append(line)
    eval_trous_str = "\n".join(eval_trous_lines)

    block = f"""    ,{tense}: {{
      // Banque de {len(qcm_bank)} questions QCM
      qcm_bank: [
{qcm_str}
      ],

      // Banque de {len(trous_bank)} phrases à trous
      trous_bank: [
{trous_str}
      ],

      // Évaluation
      evaluation: {{
        qcm: [
{eval_qcm_str}
        ],
        trous: [
{eval_trous_str}
        ]
      }}
    }}"""
    return block

def main():
    present_qcm = parse_qcm('/Users/jeremy/Downloads/conjugaison_present_QCM.html')
    present_ecriture = parse_ecriture('/Users/jeremy/Downloads/conjugaison_present_ecriture.html')
    imparfait_qcm = parse_qcm('/Users/jeremy/Downloads/conjugaison_imparfait_QCM.html')
    imparfait_ecriture = parse_ecriture('/Users/jeremy/Downloads/conjugaison_imparfait_ecriture.html')

    # Selected evaluations
    present_eval_qcm = [
        next(q for q in present_qcm if "balle" in q['text']),
        next(q for q in present_qcm if "grand frère" in q['text']),
        next(q for q in present_qcm if "très vite" in q['text']),
        next(q for q in present_qcm if "leçon depuis" in q['text']),
        next(q for q in present_qcm if "colis ce matin" in q['text']),
    ]
    present_eval_trous = [
        next(q for q in present_ecriture if "Ma sœur" in q['before']),
        next(q for q in present_ecriture if "notre voyage" in q['after']),
        next(q for q in present_ecriture if "marché" in q['after']),
        next(q for q in present_ecriture if "visite" in q['after']),
        next(q for q in present_ecriture if "bus devant" in q['after']),
    ]

    imparfait_eval_qcm = [
        next(q for q in imparfait_qcm if "affaires sur la table" in q['text']),
        next(q for q in imparfait_qcm if "sur la piste" in q['text']),
        next(q for q in imparfait_qcm if "grand jardin" in q['text']),
        next(q for q in imparfait_qcm if "peur du noir" in q['text']),
        next(q for q in imparfait_qcm if "amis après" in q['text']),
    ]
    imparfait_eval_trous = [
        next(q for q in imparfait_ecriture if "crêpes le dimanche" in q['after']),
        next(q for q in imparfait_ecriture if "les vitres chaque" in q['after']),
        next(q for q in imparfait_ecriture if "arrivais" in q['after']),
        next(q for q in imparfait_ecriture if "très timide" in q['after']),
        next(q for q in imparfait_ecriture if "nos cousins chaque" in q['after']),
    ]

    present_js = generate_js_block('present', present_qcm, present_ecriture, present_eval_qcm, present_eval_trous)
    imparfait_js = generate_js_block('imparfait', imparfait_qcm, imparfait_ecriture, imparfait_eval_qcm, imparfait_eval_trous)

    # Read original file
    with open('/Users/jeremy/antigravity/Classe-de-Mr-Lejoly/public/exercices_francais.js', 'r', encoding='utf-8') as f:
        js_content = f.read()

    # We need to replace `,present: { ... }` and `,imparfait: { ... }`
    # Let's write a parser that splits by key names: `,present:` and `,imparfait:` and `,passe_compose:`
    # We find where `,present:` starts, and where `,imparfait:` starts, and where `,passe_compose:` starts.
    idx_present = js_content.find(',present:')
    idx_imparfait = js_content.find(',imparfait:')
    idx_passe_compose = js_content.find(',passe_compose:')

    if idx_present == -1 or idx_imparfait == -1 or idx_passe_compose == -1:
        raise ValueError("Could not locate tense block index boundaries in exercices_francais.js")

    # Replace blocks
    new_content = (
        js_content[:idx_present] + 
        present_js + "\n\n" + 
        imparfait_js + "\n\n    " + 
        js_content[idx_passe_compose:]
    )

    with open('/Users/jeremy/antigravity/Classe-de-Mr-Lejoly/public/exercices_francais.js', 'w', encoding='utf-8') as f:
        f.write(new_content)

    print("Successfully updated public/exercices_francais.js")

if __name__ == "__main__":
    main()
