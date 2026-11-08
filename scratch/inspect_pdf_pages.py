import fitz
import os

pdf_path = r'scratch\magazine.pdf'
doc = fitz.open(pdf_path)
print(f"Total pages: {len(doc)}")

# Check pages 48 to 67
for pno in [48, 49, 50, 51, 52, 59, 60, 61, 62, 63]:
    page = doc[pno - 1] # 0-indexed
    images = page.get_images()
    print(f"Page {pno}: {len(images)} images")

