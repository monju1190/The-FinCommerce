import fitz

doc = fitz.open(r'C:\Users\monju\Downloads\TSV v9_Oct_Dec_Inner-print.pdf')
for p in [48, 49, 50, 51, 52]:
    page = doc[p-1]
    pix = page.get_pixmap(dpi=150)
    pix.save(f'scratch/esg_p{p}.png')
    print(f"Saved scratch/esg_p{p}.png")

