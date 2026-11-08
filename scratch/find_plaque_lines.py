with open('src/data/mockData.ts', 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if 'plaque' in line.lower():
            print(f"Line {i+1}: {line.strip()[:100]}")

