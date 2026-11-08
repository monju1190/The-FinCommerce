import fitz
from PIL import Image

doc = fitz.open(r'C:\Users\monju\Downloads\TSV v9_Oct_Dec_Inner-print.pdf')
# Page 61 (0-indexed 60)
p61 = doc[60]
print("Page 61 rect:", p61.rect)
pix = p61.get_pixmap(dpi=200)
pix.save('scratch/p61_high.png')
print("Saved p61_high.png size:", pix.width, pix.height)

