from PIL import Image

img = Image.open('public/magazine/oct-dec/pdf-images/p130_img3_560x370.jpeg')
# Check left column x=0, 5, 10, 20
w, h = img.size
print("x=0:", [img.getpixel((0, y)) for y in range(0, h, 50)])
print("x=30:", [img.getpixel((30, y)) for y in range(0, h, 50)])
print("x=w-1:", [img.getpixel((w-1, y)) for y in range(0, h, 50)])

