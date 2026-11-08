import os
from PIL import Image

for f in sorted(os.listdir('public/magazine/oct-dec/pdf-images')):
    if f.startswith('p128_') or f.startswith('p129_') or f.startswith('p130_'):
        path = os.path.join('public/magazine/oct-dec/pdf-images', f)
        img = Image.open(path)
        print(f"{f}: mode={img.mode}, size={img.size}")

