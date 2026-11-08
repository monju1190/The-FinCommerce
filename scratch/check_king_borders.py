import os
from PIL import Image

for root, dirs, files in os.walk('public'):
    for f in files:
        if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
            p = os.path.join(root, f)
            # check if kingfisher or related
            if any(k in f.lower() or k in root.lower() for k in ['king', 'bird', 'wild', '128', '129', '130']):
                try:
                    img = Image.open(p)
                    # Check top-left and top-right pixel
                    w, h = img.size
                    p1 = img.getpixel((0, h//2))
                    p2 = img.getpixel((w-1, h//2))
                    print(f"{p}: size={img.size}, mode={img.mode}, left={p1}, right={p2}")
                except Exception as e:
                    pass

