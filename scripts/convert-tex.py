import re
import json

# -----------------------------
# Helper: Recursively clean LaTeX
# -----------------------------
def clean_latex(text: str) -> str:
    if not text:
        return ""
    
    # Remove LaTeX comments
    text = re.sub(r'%.*', '', text)

    # Recursively remove \command{...} patterns
    pattern = re.compile(r'\\[a-zA-Z]+\*?\{([^{}]*)\}')
    while pattern.search(text):
        text = pattern.sub(r'\1', text)

    # Remove remaining LaTeX commands like \\ \hfill \vspace etc.
    text = re.sub(r'\\[a-zA-Z*]+\s*', '', text)

    # Remove leftover braces
    text = text.replace("{", "").replace("}", "")

    # Normalize whitespace
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# -----------------------------
# Load LaTeX file
# -----------------------------
tex_file = "../src/assets/pdf/resume.tex"
with open(tex_file, "r", encoding="utf-8") as f:
    tex = f.read()

resume_json = {}

# -----------------------------
# Skills
# -----------------------------
skills_match = re.search(r"\\section\{Skills\}(.+?)\\section", tex, re.DOTALL)
skills_text = skills_match.group(1).strip() if skills_match else ""

skills = []
for line in skills_text.splitlines():
    line = line.strip()
    if "&" in line:
        parts = line.split("&")
        if len(parts) == 2:
            category = clean_latex(parts[0])
            items = clean_latex(parts[1]).split(",")
            items = [i.strip() for i in items if i.strip()]
            skills.append({"category": category, "items": items})

resume_json["skills"] = skills

# -----------------------------
# Education
# -----------------------------
edu_match = re.search(r"\\section\{Education\}(.+?)\\section", tex, re.DOTALL)
edu_text = edu_match.group(1).strip() if edu_match else ""

education = []
edu_entries = re.findall(r"(\d{4} - \d{4}) & (.+?) \\\\", edu_text)
for period, inst_text in edu_entries:
    gpa_match = re.search(r"GPA[: ]?([0-9./]+)", inst_text)
    wgpa_match = re.search(r"WGPA[: ]?([0-9./]+)", inst_text)
    education.append({
        "institution": clean_latex(inst_text),
        "period": clean_latex(period),
        "gpa": clean_latex(gpa_match.group(1)) if gpa_match else (clean_latex(wgpa_match.group(1)) if wgpa_match else None)
    })

resume_json["education"] = education

# -----------------------------
# Work Experience
# -----------------------------
exp_match = re.search(r"\\section\{Work Experience\}(.+?)\\section", tex, re.DOTALL)
exp_text = exp_match.group(1).strip() if exp_match else ""

experiences = []

# Parse jobshort
jobshorts = re.findall(r"\\begin\{jobshort\}\{(.+?)\}\{(.+?)\}\{(.+?)\}(.+?)\\end\{jobshort\}", exp_text, re.DOTALL)
for company, period, role, desc in jobshorts:
    experiences.append({
        "company": clean_latex(company),
        "period": clean_latex(period),
        "role": clean_latex(role),
        "description": clean_latex(desc)
    })

# Parse joblong
joblongs = re.findall(r"\\begin\{joblong\}\{(.+?)\}\{(.+?)\}\{(.+?)\}(.+?)\\end\{joblong\}", exp_text, re.DOTALL)
for company, period, role, bullets in joblongs:
    bullet_list = re.findall(r"\\item\s+(.+?)(?=\\item|$)", bullets, re.DOTALL)
    bullet_list = [clean_latex(b) for b in bullet_list]
    experiences.append({
        "company": clean_latex(company),
        "period": clean_latex(period),
        "role": clean_latex(role),
        "description": bullet_list
    })

resume_json["experience"] = experiences

# -----------------------------
# Publications
# -----------------------------
pub_match = re.search(r"\\section\{Publications\}(.+?)\\vfill", tex, re.DOTALL)
pub_text = pub_match.group(1).strip() if pub_match else ""
publications = []

if pub_text:
    pub_entries = re.findall(r"\\nocite\{(.+?)\}", pub_text)
    for pub in pub_entries:
        publications.append(clean_latex(pub))

resume_json["publications"] = publications

# -----------------------------
# Output JSON
# -----------------------------
with open("../src/data/resume.json", "w", encoding="utf-8") as f:
    json.dump(resume_json, f, indent=2, ensure_ascii=False)

print("✅ JSON generated in resume.json")

