import os

for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.tsx', '.ts')):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8') as fl:
                c = fl.read()
                if 'beyond-the-plaque' in c:
                    print(p)

