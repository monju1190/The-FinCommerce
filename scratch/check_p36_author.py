import fitz

doc = fitz.open(r'C:\Users\monju\Downloads\TSV v9_Oct_Dec_Inner-print.pdf')
# Page 36 (0-indexed 35)
p36 = doc[35]
print("Page 36 images:", len(p36.get_images()))
for i, img in enumerate(p36.get_images()):
    xref = img[0]
    base = doc.extract_image(xref)
    print(f"p36 Img {i}: xref={xref}, ext={base['ext']}, size=({base['width']}, {base['height']})")

