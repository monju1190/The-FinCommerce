from PIL import Image

# Search for the colorful wheel in pages 48 to 52
for p in [48, 49, 50, 51, 52]:
    img = Image.open(f'scratch/esg_p{p}_300dpi.png')
    w, h = img.size
    # Check if there are colorful pixels (e.g., magenta, cyan, yellow, green)
    colors = set()
    for x in range(0, w, 20):
        for y in range(0, h, 20):
            pix = img.getpixel((x, y))
            # If not white/black/gray
            if len(pix) >= 3:
                r, g, b = pix[:3]
                if max(r, g, b) - min(r, g, b) > 50:
                    colors.add((r, g, b))
    print(f"Page {p}: found {len(colors)} distinct vibrant colors")

