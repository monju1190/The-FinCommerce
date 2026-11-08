import os
from PIL import Image

# In SS1, kingfisher sits on a wooden post.
# Let's search all images in public to find which image has the exact bird
found = []
for root, dirs, files in os.walk('public'):
    for f in files:
        if f.lower().endswith(('.jpg', '.jpeg', '.png')):
            p = os.path.join(root, f)
            if 'kingfisher' in f.lower() or 'p128' in f or 'p129' in f or 'p130' in f or 'media' in root:
                try:
                    img = Image.open(p)
                    # Check if width or height has white bars
                    w, h = img.size
                    # Check if x=5 is white (255,255,255)
                    pix = img.convert('RGB').getpixel((5, h//2))
                    if pix[0] > 250 and pix[1] > 250 and pix[2] > 250:
                        found.append((p, img.size, pix))
                except:
                    pass

print("Found images with white border on left:", found)

