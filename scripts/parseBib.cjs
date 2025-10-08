const fs = require("fs");
const bibtexParse = require("bibtex-parse-js");

// Path to your BibTeX file
const bibFile = "../src/data/citations.bib";
const jsonFile = "../src/data/publications.json";

const bibtexContent = fs.readFileSync(bibFile, "utf8");
const parsed = bibtexParse.toJSON(bibtexContent);
const doiBase = "https://doi.org/";

// Convert to a simpler JSON structure for the frontend
const publications = parsed.map(entry => ({
  title: entry.entryTags.title || "",
  author: entry.entryTags.author || "",
  year: entry.entryTags.year || "",
  journal: entry.entryTags.journal || entry.entryTags.booktitle ||  "",
  link: doiBase + entry.entryTags.doi || "",
}));

fs.writeFileSync(jsonFile, JSON.stringify(publications, null, 2));
console.log("✅ Publications JSON generated:", jsonFile);
