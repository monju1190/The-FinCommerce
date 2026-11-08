import os
from PIL import Image

p = 'public/magazine/oct-dec/media/OK_ESG_Ratings-How_Corporates_Are_Rated_and_Why_Th'
print("Files in ESG media:", os.listdir(p))

for f in os.listdir(p):
    path = os.path.join(p, f)
    img = Image.open(path)
    print(f"{f}: size={img.size}, mode={img.mode}")

