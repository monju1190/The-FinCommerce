import fitz

doc = fitz.open(r'C:\Users\monju\Downloads\TSV v9_Oct_Dec_Inner-print.pdf')

for pno, page in enumerate(doc, 1):
    txt = page.get_text()
    if 'transformation paradox' in txt.lower() or 'capex' in txt.lower() or 'operations in bangladesh' in txt.lower():
        print(f"Match on page {pno}:")
        for line in txt.splitlines():
            if any(k in line.lower() for k in ['paradox', 'capex', 'transformation', 'operations']):
                print("  ", line.strip())

