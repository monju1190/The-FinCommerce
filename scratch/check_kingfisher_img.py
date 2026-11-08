from PIL import Image

img = Image.open('public/magazine/oct-dec/pdf-images/p130_img3_560x370.jpeg')
print("Image size:", img.size)
# Sample pixel colors at corners and edges
w, h = img.size
print("Top-left pixel:", img.getpixel((0, 0)))
print("Top-middle pixel:", img.getpixel((w//2, 0)))
print("Left-middle pixel:", img.getpixel((0, h//2)))
print("Right-middle pixel:", img.getpixel((w-1, h//2)))
print("Center pixel:", img.getpixel((w//2, h//2)))

