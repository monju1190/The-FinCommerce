import json

with open('scratch/article_status.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"Total: {len(data)}")
broken_imgs = [d for d in data if not d['img_exists']]
broken_emb = [d for d in data if not d['all_emb_exist']]
with_auth = [d for d in data if d['auth_exists']]

print(f"Broken hero images: {len(broken_imgs)}")
print(f"Broken embedded figures: {len(broken_emb)}")
print(f"Articles with verified author images: {len(with_auth)} / {len(data)}")
for d in data:
    print(f"- [{d['category']}] {d['title'][:45]}... | Author: {d['author'][:20]} | AuthImg: {d['auth_exists']} | Hero: {d['img_exists']} | Figures: {d['emb_count']}")

