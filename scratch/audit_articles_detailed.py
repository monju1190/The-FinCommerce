import json
import os
import re

with open('src/data/mockData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Parse sections and articles
# Find all articles with their slug, title, author, authorImage, imageUrl
art_blocks = re.findall(r'\{\s*"slug":\s*"([^"]+)",\s*"title":\s*"([^"]+)",\s*"subtitle":\s*"([^"]+)",\s*"author":\s*"([^"]+)",(?:.*?"authorRole":\s*"([^"]*)",)?(?:.*?"authorImage":\s*"([^"]*)",)?.*?category":\s*"([^"]+)",\s*"imageUrl":\s*"([^"]+)",\s*"content":\s*"(.*?)"\s*\}', text, re.DOTALL)

print(f"Parsed {len(art_blocks)} articles from mockData.ts:")

for idx, (slug, title, subtitle, author, authorRole, authorImage, category, imageUrl, content) in enumerate(art_blocks, 1):
    # Check if files exist
    img_ok = os.path.exists(os.path.join('public', imageUrl.lstrip('/')))
    auth_ok = True if not authorImage else os.path.exists(os.path.join('public', authorImage.lstrip('/')))
    
    # Check embedded images in content
    embedded = re.findall(r'src=\\"([^"]+)\\"', content)
    embedded_missing = [e for e in embedded if not os.path.exists(os.path.join('public', e.lstrip('/')))]
    
    status = "OK" if img_ok and auth_ok and len(embedded_missing) == 0 else "ISSUE"
    print(f"[{idx:02d}] {slug[:30]} | {category[:15]} | img:{img_ok} auth:{auth_ok} embed_cnt:{len(embedded)} miss:{len(embedded_missing)}")
    if not img_ok:
        print(f"    Missing imageUrl: {imageUrl}")
    if not auth_ok:
        print(f"    Missing authorImage: {authorImage}")
    if embedded_missing:
        print(f"    Missing embedded: {embedded_missing}")

