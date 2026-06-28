import os
from pypdf import PdfReader

pdf_path = "/Users/jeremy/Library/CloudStorage/Dropbox/03 - Mathématiques/02 - Opérations/OP - Vocabulaire des opérations.pdf"
reader = PdfReader(pdf_path)
print(f"Total pages: {len(reader.pages)}")
for idx in range(min(4, len(reader.pages))):
    print(f"--- Page {idx+1} ---")
    print(reader.pages[idx].extract_text())
