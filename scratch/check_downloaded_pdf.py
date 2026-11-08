import os

check_paths = [
    r'C:\Users\monju\Downloads',
    r'e:\magazine\public\magazine\oct-dec',
    r'C:\Users\monju\.gemini\antigravity\brain\fcc2eece-cc08-44ce-a34d-44763e9e2c79'
]

for p in check_paths:
    if os.path.exists(p):
        for root, dirs, files in os.walk(p):
            for f in files:
                if f.endswith('.pdf'):
                    print(os.path.join(root, f))

