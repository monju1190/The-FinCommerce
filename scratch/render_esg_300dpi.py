import fitz
from PIL import Image

doc = fitz.open(r'C:\Users\monju\Downloads\TSV v9_Oct_Dec_Inner-print.pdf')

# Check which page has the wheel diagram by inspecting pixmaps
for p in [48, 49, 50, 51, 52]:
    page = doc[p-1]
    pix = page.get_pixmap(dpi=200)
    # Check if there is a big circular graphic
    # Let's save a 300dpi version
    pix.save(f'scratch/esg_p{p}_300dpi.png')
    print(f"Rendered page {p} at 200dpi: {pix.width}x{pix.height}")

