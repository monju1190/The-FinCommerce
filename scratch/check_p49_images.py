import fitz

doc = fitz.open(r'C:\Users\monju\Downloads\TSV v9_Oct_Dec_Inner-print.pdf')
p49 = doc[48] # 0-indexed page 49
print("Images on page 49:", len(p49.get_images()))
for img in p49.get_images():
    xref = img[0]
    base = doc.extract_image(xref)
    print(f"xref={xref}, ext={base['ext']}, size=({base['width']}, {base['height']})")

