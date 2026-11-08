with open('src/data/mockData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'"slug":\s*"beyond-the-plaque-green-certification-to-green-operations".*?"content":\s*"(.*?)"', text, re.DOTALL)
if m:
    content = m.group(1)
    imgs = re.findall(r'<img [^>]+>', content)
    for im in imgs:
        print("Embedded:", im)

