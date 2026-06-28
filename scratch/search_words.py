from pypdf import PdfReader

pdf_path = "/Users/jeremy/Library/CloudStorage/Dropbox/03 - Mathématiques/02 - Opérations/OP - Vocabulaire des opérations.pdf"
reader = PdfReader(pdf_path)
found = False
for idx, page in enumerate(reader.pages):
    text = page.extract_text()
    for word in ["multiplicande", "multiplicateur"]:
        if word in text.lower():
            print(f"Found '{word}' on page {idx+1}!")
            found = True

if not found:
    print("Neither 'multiplicande' nor 'multiplicateur' was found in the PDF.")
