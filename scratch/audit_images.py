import json
import os
import re

# Read mockData.ts to find all articles
with open('src/data/mockData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Find all articles
article_pattern = re.compile(r'\{\s*"slug":\s*"([^"]+)",\s*"title":\s*"([^"]+)",(?:.*?"imageUrl":\s*"([^"]+)",)?(?:.*?"authorImage":\s*"([^"]+)",)?', re.DOTALL)

# Let's inspect all image references in mockData.ts
all_img_refs = re.findall(r'"(/magazine/[^"]+)"', text)
print(f"Total image references found in mockData.ts: {len(all_img_refs)}")

missing_images = []
for ref in set(all_img_refs):
    # remove leading slash to check local public path
    local_path = os.path.join('public', ref.lstrip('/'))
    if not os.path.exists(local_path):
        missing_images.append((ref, local_path))

print(f"Missing images count: {len(missing_images)}")
for ref, path in missing_images:
    print(f"MISSING: {ref}")

