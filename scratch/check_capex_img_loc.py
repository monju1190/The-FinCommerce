import fitz

doc = fitz.open(r'C:\Users\monju\Downloads\TSV v9_Oct_Dec_Inner-print.pdf')
for p in range(59, 64):
    txt = doc[p-1].get_text()
    if 'capex' in txt.lower() or 'lean' in txt.lower():
        print(f"Page {p} has capex/lean text")

