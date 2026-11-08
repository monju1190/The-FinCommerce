import fitz

doc = fitz.open(r'C:\Users\monju\Downloads\TSV v9_Oct_Dec_Inner-print.pdf')
for i, page in enumerate(doc):
    t = page.get_text()
    if 'paradox' in t.lower() or 'capex vs' in t.lower() or 'green transformation' in t.lower():
        print(f"Page {i+1}:")
        for line in t.splitlines():
            if any(k in line.lower() for k in ['paradox', 'capex', 'green transformation']):
                print("  ", line.strip())

