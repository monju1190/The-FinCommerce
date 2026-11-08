import os

for root, dirs, files in os.walk('public/magazine/oct-dec/media'):
    for f in files:
        if 'plaque' in root.lower() or 'plaque' in f.lower() or 'beyon' in root.lower():
            print(os.path.join(root, f))

