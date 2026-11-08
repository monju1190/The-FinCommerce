import json
import os
import re

with open('src/data/mockData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Match each article block
pattern = re.compile(
    r'\{\s*"slug":\s*"([^"]+)",\s*'
    r'"title":\s*"([^"]+)",\s*'
    r'"subtitle":\s*"([^"]+)",\s*'
    r'"author":\s*"([^"]+)",\s*'
    r'(?:"authorRole":\s*"([^"]*)",\s*)?'
    r'(?:"authorImage":\s*"([^"]*)",\s*)?'
    r'"date":\s*"([^"]+)",\s*'
    r'"category":\s*"([^"]+)",\s*'
    r'"imageUrl":\s*"([^"]+)",\s*'
    r'"content":\s*"(.*?)"\s*\}',
    re.DOTALL
)

matches = pattern.findall(text)
print(f"Total articles extracted: {len(matches)}")

results = []
for m in matches:
    slug, title, subtitle, author, authorRole, authorImage, date, category, imageUrl, content = m
    
    img_exists = os.path.exists(os.path.join('public', imageUrl.lstrip('/')))
    auth_exists = bool(authorImage and os.path.exists(os.path.join('public', authorImage.lstrip('/'))))
    
    # embedded figures
    emb_matches = re.findall(r'src=\\"([^"]+)\\"', content)
    emb_count = len(emb_matches)
    all_emb_exist = all(os.path.exists(os.path.join('public', e.lstrip('/'))) for e in emb_matches)
    
    results.append({
        "slug": slug,
        "title": title,
        "author": author,
        "category": category,
        "imageUrl": imageUrl,
        "img_exists": img_exists,
        "authorImage": authorImage if authorImage else "None",
        "auth_exists": auth_exists,
        "emb_count": emb_count,
        "all_emb_exist": all_emb_exist
    })

print(f"Results processed: {len(results)}")
with open('scratch/article_status.json', 'w', encoding='utf-8') as out:
    json.dump(results, out, indent=2)
print("Saved scratch/article_status.json")

