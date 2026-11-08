with open('src/data/mockData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

import re
slugs = re.findall(r'"slug":\s*"([^"]+)"', text)
print(f"Total slugs: {len(slugs)}")
for s in slugs:
    # find title
    m = re.search(r'"slug":\s*"' + s + r'".*?"title":\s*"([^"]+)"', text, re.DOTALL)
    title = m.group(1) if m else "No title"
    m_img = re.search(r'"slug":\s*"' + s + r'".*?"imageUrl":\s*"([^"]+)"', text, re.DOTALL)
    img = m_img.group(1) if m_img else "No img"
    print(f"{s} -> {img}")

