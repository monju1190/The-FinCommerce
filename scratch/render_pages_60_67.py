import fitz

doc = fitz.open(r'C:\Users\monju\Downloads\TSV v9_Oct_Dec_Inner-print.pdf')
page = doc[59] # page 60 (0-indexed)
pix = page.get_pixmap(dpi=150)
pix.save('scratch/page_60.png')
print("Saved scratch/page_60.png with size", pix.width, pix.height)

# Also let's check page 61, 62, 63, 64
for p in [61, 62, 63, 64, 65, 66, 67]:
    doc[p-1].get_pixmap(dpi=150).save(f'scratch/page_{p}.png')
print("Saved pages 60-67")

