import os
from PIL import Image

for f in sorted(os.listdir('public/magazine/oct-dec/pdf-images')):
    if any(f.startswith(f'p{i}_') for i in range(48, 53)):
        p = os.path.join('public/magazine/oct-dec/pdf-images', f)
        img = Image.open(p)
        print(f"{f}: size={img.size}, mode={img.mode}")

