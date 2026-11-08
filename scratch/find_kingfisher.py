import os

matches = []
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.tsx', '.ts', '.jsx', '.js')):
            p = os.path.join(root, file)
            with open(p, 'r', encoding='utf-8') as f:
                c = f.read()
                if 'kingfisher' in c.lower() or 'p130_img3' in c:
                    matches.append(p)

print("Matches:", matches)

