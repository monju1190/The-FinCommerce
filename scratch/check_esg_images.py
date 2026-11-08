with open('src/data/mockData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'"slug":\s*"how-corporates-are-rated-and-why-that-matters".*?"imageUrl":\s*"([^"]+)"', text, re.DOTALL)
if m:
    print("imageUrl:", m.group(1))
m2 = re.search(r'"slug":\s*"how-corporates-are-rated-and-why-that-matters".*?"authorImage":\s*"([^"]+)"', text, re.DOTALL)
if m2:
    print("authorImage:", m2.group(1))

