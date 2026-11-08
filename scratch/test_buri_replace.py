with open('src/data/mockData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Buriganga image
old_buri = '"slug": "a-suffocated-buriganga-existential-threat-for-dhaka",\n        "title": "A Suffocated Buriganga: An Existential Threat for Dhaka",\n        "subtitle": "The Buriganga carries 0.63 mg of oxygen per litre in winter—an eighth of what a river needs to keep fish alive. The government has mapped the 224 outlets; what it needs next is an enforceable deadline.",\n        "author": "Rifat Hossain",\n        "authorRole": "Director of Development, Health Policy Watch & Executive Director, Institute for Public Systems, Geneva",\n        "authorImage": "/magazine/oct-dec/pdf-images/p22_img1_380x429.jpeg",\n        "date": "October–December 2026",\n        "category": "Sustainable Cities",\n        "imageUrl": "/magazine/oct-dec/media/OK_Bangladesh_River_Without_Oxygen_Sustainability_/image5.jpg"'

new_buri = '"slug": "a-suffocated-buriganga-existential-threat-for-dhaka",\n        "title": "A Suffocated Buriganga: An Existential Threat for Dhaka",\n        "subtitle": "The Buriganga carries 0.63 mg of oxygen per litre in winter—an eighth of what a river needs to keep fish alive. The government has mapped the 224 outlets; what it needs next is an enforceable deadline.",\n        "author": "Rifat Hossain",\n        "authorRole": "Director of Development, Health Policy Watch & Executive Director, Institute for Public Systems, Geneva",\n        "authorImage": "/magazine/oct-dec/pdf-images/p22_img1_380x429.jpeg",\n        "date": "October–December 2026",\n        "category": "Sustainable Cities",\n        "imageUrl": "/magazine/oct-dec/pdf-images/p25_img2_2370x1550.jpeg"'

print("Can replace Buriganga?", old_buri in text)

