from PIL import Image

img = Image.open('public/magazine/oct-dec/photos/esg-rating-wheel.png')
# check top 100 rows
# see if non-white pixels touch row 0
box = img.getbbox()
print("Bounding box:", box)
print("Image size:", img.size)

