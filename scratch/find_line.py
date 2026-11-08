with open('src/data/mockData.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'how-corporates' in l.lower() or 'alusch' in l.lower():
        print(f"Line {i+1}: {l.strip()}")

