import fitz
import os

pdf_path = r'C:\Users\monju\Downloads\TSV v9_Oct_Dec_Inner-print.pdf'
doc = fitz.open(pdf_path)

def inspect_page(pno):
    print(f"\n--- Page {pno} ---")
    page = doc[pno - 1]
    text = page.get_text()[:200].replace('\n', ' ')
    print(f"Text preview: {text}")
    img_list = page.get_images()
    print(f"Images count: {len(img_list)}")
    for i, img in enumerate(img_list):
        xref = img[0]
        base = doc.extract_image(xref)
        print(f"  Img {i+1}: xref={xref}, ext={base['ext']}, size=({base['width']}, {base['height']})")

for p in [22, 23, 24, 25, 48, 50, 51, 59, 60, 61, 62, 124, 125, 126, 127, 128, 129, 130]:
    inspect_page(p)

