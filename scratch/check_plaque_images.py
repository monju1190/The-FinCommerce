from PIL import Image

im1 = Image.open('public/magazine/oct-dec/media/OK_Beyonnd_the_Plaque/image1.jpg')
im2 = Image.open('public/magazine/oct-dec/media/OK_Beyonnd_the_Plaque/image2.jpg')
im3 = Image.open('public/magazine/oct-dec/media/OK_Beyonnd_the_Plaque/image3.png')

print("im1:", im1.size, im1.mode)
print("im2:", im2.size, im2.mode)
print("im3:", im3.size, im3.mode)

