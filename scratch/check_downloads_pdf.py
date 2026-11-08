import fitz
import os

pdf_path = r'C:\Users\monju\Downloads\TSV v9_Oct_Dec_Inner-print.pdf'
print("Exists:", os.path.exists(pdf_path))
doc = fitz.open(pdf_path)
print("Page count:", len(doc))

