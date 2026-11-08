import fitz

doc = fitz.open(r'C:\Users\monju\Downloads\TSV v9_Oct_Dec_Inner-print.pdf')
for p in range(48, 53):
    t = doc[p-1].get_text()
    if 'esg rating' in t.lower() or 'tax transparency' in t.lower() or 'human rights' in t.lower():
        print(f"Page {p} matches text!")
        for line in t.splitlines()[:10]:
            print("  ", line)

