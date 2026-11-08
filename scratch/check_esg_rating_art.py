with open('src/data/mockData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'how-corporates-are-rated-and-why-that-matters.*?(?=\{[ \t]*"slug|\Z)', text, re.DOTALL)
if m:
    print(m.group(0)[:1200])

