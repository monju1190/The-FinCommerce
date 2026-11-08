import os

for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith('.tsx'):
            print(os.path.join(root, f))

