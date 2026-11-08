from PIL import Image

for p in [50, 51]:
    img = Image.open(f'scratch/esg_p{p}_300dpi.png')
    w, h = img.size
    min_x, min_y, max_x, max_y = w, h, 0, 0
    for x in range(0, w, 5):
        for y in range(0, h, 5):
            r, g, b = img.getpixel((x, y))[:3]
            if max(r, g, b) - min(r, g, b) > 50:
                if x < min_x: min_x = x
                if x > max_x: max_x = x
                if y < min_y: min_y = y
                if y > max_y: max_y = y
    print(f"Page {p} colorful bounding box: ({min_x}, {min_y}, {max_x}, {max_y})")

