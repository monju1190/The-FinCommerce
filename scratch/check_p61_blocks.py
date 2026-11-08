import fitz

doc = fitz.open(r'C:\Users\monju\Downloads\TSV v9_Oct_Dec_Inner-print.pdf')
p61 = doc[60]
for b in p61.get_text('blocks'):
    if 'green transformation paradox' in b[4].lower() or 'capex' in b[4].lower():
        print("Block:", b[:4], b[4][:100])

