from PIL import Image

# Load the existing wheel image
img = Image.open('public/magazine/oct-dec/photos/esg-rating-wheel.png')
w, h = img.size
print(f"Original wheel size: {w}x{h}")

# In Screenshot 4, the top words ('Standard', 'Rights') are partially cut off because they touch y=0.
# Let's add 120px of top margin and 60px of side margin, and place it on a clean white/transparent canvas so it never touches the boundary!
pad_top = 120
pad_bottom = 60
pad_sides = 80
new_w = w + pad_sides * 2
new_h = h + pad_top + pad_bottom

new_img = Image.new("RGBA", (new_w, new_h), (255, 255, 255, 255))
# If original has alpha, paste with mask
if img.mode == 'RGBA':
    new_img.paste(img, (pad_sides, pad_top), img)
else:
    new_img.paste(img, (pad_sides, pad_top))

new_img.save('public/magazine/oct-dec/photos/esg-rating-wheel.png')
print(f"Saved padded esg-rating-wheel.png: {new_w}x{new_h}")

