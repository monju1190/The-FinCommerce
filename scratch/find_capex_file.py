import os
from PIL import Image

for root, dirs, files in os.walk('public'):
    for f in files:
        if f.lower().endswith(('.png', '.jpg', '.jpeg')):
            p = os.path.join(root, f)
            if any(k in f.lower() for k in ['capex', 'plaque', 'paradox', 'factory', 'lean', 'green', '98_img1', '60_img1', '63_img1']):
                print(p)

