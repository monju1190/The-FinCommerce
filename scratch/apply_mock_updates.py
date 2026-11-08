import re

# Read mockData.ts
with open('src/data/mockData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Buriganga updates
old_buri_img = '"imageUrl": "/magazine/oct-dec/media/OK_Bangladesh_River_Without_Oxygen_Sustainability_/image5.jpg"'
new_buri_img = '"imageUrl": "/magazine/oct-dec/pdf-images/p25_img2_2370x1550.jpeg"'
text = text.replace(old_buri_img, new_buri_img)

# 2. Kingfishers updates
old_king_img = '"slug": "the-kingfishers-of-bangladesh-twelve-species",\n        "title": "The Kingfishers of Bangladesh: Jewels of the Delta\'s Waterways",\n        "subtitle": "A visual field guide to all twelve species of kingfishers recorded across Bangladesh\'s rivers, haors, mangrove forests, and hill streams.",\n        "author": "Rehana Begum & Shahariar Shabab",\n        "authorRole": "Wildlife Photography Feature (with Golam Kibria)",\n        "date": "October–December 2026",\n        "category": "Wildlife",\n        "imageUrl": "/magazine/oct-dec/pdf-images/p130_img3_560x370.jpeg"'

new_king_img = '"slug": "the-kingfishers-of-bangladesh-twelve-species",\n        "title": "The Kingfishers of Bangladesh: Jewels of the Delta\'s Waterways",\n        "subtitle": "A visual field guide to all twelve species of kingfishers recorded across Bangladesh\'s rivers, haors, mangrove forests, and hill streams.",\n        "author": "Rehana Begum & Shahariar Shabab",\n        "authorRole": "Wildlife Photography Feature (with Golam Kibria)",\n        "date": "October–December 2026",\n        "category": "Wildlife",\n        "imageUrl": "/magazine/oct-dec/pdf-images/p128_img1_963x1035.jpeg"'
text = text.replace(old_king_img, new_king_img)

# 3. Beyond the Plaque updates
old_plaque_img = '"slug": "beyond-the-plaque-green-certification-to-green-operations",\n        "title": "Beyond the Plaque: From Green Certification to Green Operations in the Bangladeshi Textile and Garments Industry",\n        "subtitle": "Bangladesh houses 349 LEED-certified factories—the highest concentration in the world. Now the industry must move beyond the plaque on the wall to embed lean management and sustainability into daily operations.",\n        "author": "Kabir Ahmad",\n        "authorRole": "Management & Corporate Sustainability Advisor",\n        "authorImage": "/magazine/oct-dec/pdf-images/p59_img1_369x431.jpeg",\n        "date": "October–December 2026",\n        "category": "Industry Practices",\n        "imageUrl": "/magazine/oct-dec/pdf-images/p98_img1_2084x1018.jpeg"'

new_plaque_img = '"slug": "beyond-the-plaque-green-certification-to-green-operations",\n        "title": "Beyond the Plaque: From Green Certification to Green Operations in the Bangladeshi Textile and Garments Industry",\n        "subtitle": "Bangladesh houses 349 LEED-certified factories—the highest concentration in the world. Now the industry must move beyond the plaque on the wall to embed lean management and sustainability into daily operations.",\n        "author": "Kabir Ahmad",\n        "authorRole": "Management & Corporate Sustainability Advisor",\n        "authorImage": "/magazine/oct-dec/pdf-images/p59_img1_369x431.jpeg",\n        "date": "October–December 2026",\n        "category": "Industry Practices",\n        "imageUrl": "/magazine/oct-dec/pdf-images/p60_img1_1376x768.jpeg"'
text = text.replace(old_plaque_img, new_plaque_img)

# 4. Delta's Edge updates
old_delta_img = '"slug": "the-deltas-edge-ecological-balance-wildlife-human-survival",\n        "title": "The Delta’s Edge: Negotiating Ecological Balance, Wildlife, and Human Survival in Bangladesh",\n        "subtitle": "Squeezed onto a densely populated delta, conserving Bengal tigers, Asian elephant corridors, and freshwater dolphins requires community co-management rather than fences alone.",\n        "author": "Shamim Ahmed",\n        "authorRole": "Program Manager, Prokriti O Jibon Foundation",\n        "authorImage": "/magazine/oct-dec/media/OK_Delta_s_Edge_Shamim_Ahmed/image1.jpg",\n        "date": "October–December 2026",\n        "category": "Wildlife",\n        "imageUrl": "/magazine/oct-dec/pdf-images/p127_img1_2475x1277.jpeg"'

new_delta_img = '"slug": "the-deltas-edge-ecological-balance-wildlife-human-survival",\n        "title": "The Delta’s Edge: Negotiating Ecological Balance, Wildlife, and Human Survival in Bangladesh",\n        "subtitle": "Squeezed onto a densely populated delta, conserving Bengal tigers, Asian elephant corridors, and freshwater dolphins requires community co-management rather than fences alone.",\n        "author": "Shamim Ahmed",\n        "authorRole": "Program Manager, Prokriti O Jibon Foundation",\n        "authorImage": "/magazine/oct-dec/pdf-images/p127_img2_428x518.jpeg",\n        "date": "October–December 2026",\n        "category": "Wildlife",\n        "imageUrl": "/magazine/oct-dec/pdf-images/p126_img1_2100x1172.jpeg"'
text = text.replace(old_delta_img, new_delta_img)

# 5. CapEx vs Operations infographic inside Beyond the Plaque
text = text.replace(
    '/magazine/oct-dec/media/OK_Beyonnd_the_Plaque/image1.jpg',
    '/magazine/oct-dec/media/OK_Beyonnd_the_Plaque/image3.png'
)

# 6. Buriganga figures in content
old_buri_figs = """<figure class=\\"my-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50\\">\\n                  <img src=\\"/magazine/oct-dec/media/OK_Bangladesh_River_Without_Oxygen_Sustainability_/image1.png\\" alt=\\"Article visual\\" class=\\"w-full max-h-[550px] object-contain mx-auto\\" />\\n                </figure>"""
new_buri_figs = """<figure class=\\"my-8 rounded-2xl overflow-hidden shadow-lg border border-[#dfcfc2] bg-white p-3\\">\\n                  <img src=\\"/magazine/oct-dec/pdf-images/p23_img1_1440x780.png\\" alt=\\"Dissolved Oxygen Level Across Dhaka Rivers\\" class=\\"w-full max-h-[550px] object-contain mx-auto\\" />\\n                </figure>"""
text = text.replace(old_buri_figs, new_buri_figs)

old_buri_figs2 = """<figure class=\\"my-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50\\">\\n                  <img src=\\"/magazine/oct-dec/media/OK_Bangladesh_River_Without_Oxygen_Sustainability_/image2.png\\" alt=\\"Article visual\\" class=\\"w-full max-h-[550px] object-contain mx-auto\\" />\\n                </figure>"""
new_buri_figs2 = """<figure class=\\"my-8 rounded-2xl overflow-hidden shadow-lg border border-[#dfcfc2] bg-white p-3\\">\\n                  <img src=\\"/magazine/oct-dec/pdf-images/p24_img2_1440x780.png\\" alt=\\"Dasherkandi Sewage Treatment Capacity vs Discharges\\" class=\\"w-full max-h-[550px] object-contain mx-auto\\" />\\n                </figure>"""
text = text.replace(old_buri_figs2, new_buri_figs2)

old_buri_figs4 = """<figure class=\\"my-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50\\">\\n                  <img src=\\"/magazine/oct-dec/media/OK_Bangladesh_River_Without_Oxygen_Sustainability_/image4.png\\" alt=\\"Article visual\\" class=\\"w-full max-h-[550px] object-contain mx-auto\\" />\\n                </figure>"""
new_buri_figs4 = """<figure class=\\"my-8 rounded-2xl overflow-hidden shadow-lg border border-[#dfcfc2] bg-white p-3\\">\\n                  <img src=\\"/magazine/oct-dec/pdf-images/p25_img1_1440x780.png\\" alt=\\"Groundwater Level Depletion in Dhaka Aquifer\\" class=\\"w-full max-h-[550px] object-contain mx-auto\\" />\\n                </figure>\\n\\n                <figure class=\\"my-8 rounded-2xl overflow-hidden shadow-lg border border-[#dfcfc2] bg-[#0b101e]\\">\\n                  <img src=\\"/magazine/oct-dec/pdf-images/p26_img1_2542x1499.jpeg\\" alt=\\"Buriganga Navy Action Plan and Restoration Roadmap\\" class=\\"w-full max-h-[580px] object-contain mx-auto\\" />\\n                </figure>"""
text = text.replace(old_buri_figs4, new_buri_figs4)

# 7. Delta's Edge figures in content
old_delta_fig = """<img src=\\"/magazine/oct-dec/media/OK_Delta_s_Edge_Shamim_Ahmed/image2.jpg\\" alt=\\"Wildlife Conservation Approaches in Bangladesh\\" class=\\"w-full max-h-[600px] object-contain mx-auto\\" />"""
new_delta_fig = """<img src=\\"/magazine/oct-dec/pdf-images/p124_img1_2520x1680.png\\" alt=\\"Wildlife Conservation Approaches in Bangladesh (Elephant Response Teams, Camera Trapping, Habitat Restoration, Vulture Safe Zones)\\" class=\\"w-full max-h-[600px] object-contain mx-auto\\" />"""
text = text.replace(old_delta_fig, new_delta_fig)

with open('src/data/mockData.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated mockData.ts successfully!")

