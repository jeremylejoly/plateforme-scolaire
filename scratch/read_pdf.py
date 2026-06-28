import os
import sys

def read_pdf(pdf_path):
    # Try importing pypdf
    try:
        from pypdf import PdfReader
        reader = PdfReader(pdf_path)
        print("--- PYPDF EXTRACTED TEXT ---")
        for i, page in enumerate(reader.pages):
            print(f"--- Page {i+1} ---")
            print(page.extract_text())
        return True
    except ImportError:
        pass

    # Try PyPDF2
    try:
        from PyPDF2 import PdfReader
        reader = PdfReader(pdf_path)
        print("--- PYPDF2 EXTRACTED TEXT ---")
        for i, page in enumerate(reader.pages):
            print(f"--- Page {i+1} ---")
            print(page.extract_text())
        return True
    except ImportError:
        pass

    # Try pdfplumber
    try:
        import pdfplumber
        print("--- PDFPLUMBER EXTRACTED TEXT ---")
        with pdfplumber.open(pdf_path) as pdf:
            for i, page in enumerate(pdf.pages):
                print(f"--- Page {i+1} ---")
                print(page.extract_text())
        return True
    except ImportError:
        pass

    print("Could not import any PDF reader library (pypdf, PyPDF2, pdfplumber).")
    return False

if __name__ == '__main__':
    pdf_path = "/Users/jeremy/Library/CloudStorage/Dropbox/03 - Mathématiques/02 - Opérations/OP - Vocabulaire des opérations.pdf"
    if os.path.exists(pdf_path):
        read_pdf(pdf_path)
    else:
        print(f"PDF not found at {pdf_path}")
