import os
import re

with open('src/data/mockData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Match /magazine/... or /editorial board/...
refs = re.findall(r'(/magazine/[a-zA-Z0-9_\-\./]+|/editorial board/[a-zA-Z0-9_\-\./]+)', text)
refs = [r.rstrip('\\').rstrip('"').rstrip("'") for r in refs]

missing = []
found = []
for r in set(refs):
    p = os.path.join('public', r.lstrip('/'))
    if os.path.exists(p):
        found.append(r)
    else:
        missing.append((r, p))

print(f"Total unique refs: {len(set(refs))}")
print(f"Found: {len(found)}")
print(f"Missing: {len(missing)}")
for r, p in missing:
    print(f"MISSING: {r}")

