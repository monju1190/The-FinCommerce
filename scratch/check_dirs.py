import os

print("Cover exists?", os.path.exists('public/magazine/oct-dec/cover.jpg'))
print("pdf-images count:", len(os.listdir('public/magazine/oct-dec/pdf-images')) if os.path.exists('public/magazine/oct-dec/pdf-images') else 'None')
print("photos count:", len(os.listdir('public/magazine/oct-dec/photos')) if os.path.exists('public/magazine/oct-dec/photos') else 'None')
print("media count:", len(os.listdir('public/magazine/oct-dec/media')) if os.path.exists('public/magazine/oct-dec/media') else 'None')

