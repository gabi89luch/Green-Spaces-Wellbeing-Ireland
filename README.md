# Green Spaces & Wellbeing in Ireland

A multi-page website exploring how green spaces across Ireland affect our health and communities. Built as a group project for **H6WD Web Design & Development CA2** at National College of Ireland.

**Topic 8** | **UN SDGs 3 & 11** | **Group H**

---

## Group Members

| Name | Student ID | Email |
|------|-----------|-------|
| Valentin Gabriel Luchian | x24318230 | x24318230@student.ncirl.ie |
| Jamie Stackpoole | x25130340 | x25130340@student.ncirl.ie |

---

## Pages & Division of Work

Each student built 3 pages. Both share one CSS file, one JS calculator, and a consistent navigation bar.

| Page | File | Built by | What's on it |
|------|------|----------|--------------|
| Home | `index.html` | Valentin | Hero, intro, stats, feature cards, quote |
| Benefits | `benefits.html` | Jamie | Mental/physical/social/environmental benefits, who benefits most |
| Green Spaces | `greenspaces.html` | Jamie | Featured parks, types of green spaces, stats |
| Data & Statistics | `data.html` | Valentin | Two data tables, environmental impact, stats bar |
| Wellbeing Calculator | `calculator.html` | Valentin | Interactive JS calculator with input validation |
| Get Involved | `getinvolved.html` | Jamie | YouTube embed, Google Form, action checklist, image credits |

### CSS sections

The shared `styles.css` file contains comments marking who wrote each section:

- **Valentin**: variables, reset, base styles, utilities, navigation, hero, page banner, two-column layout, data table, calculator, stats bar, footer, callout, base responsive breakpoints
- **Jamie**: info card grid, benefit items, spotlight grid, embedded content wrappers, CTA banner, mobile refinements for cards and benefits

### JavaScript

`calculator.js` was written by Valentin. It handles:
- Reading four form inputs via the DOM
- Validating each input (empty, negative, over max)
- Calculating a weighted score out of 100
- Writing the result to the page without reloading
- Showing tailored tips based on the score

---

## File Structure

```
Green-Spaces-Wellbeing-Ireland/
├── index.html              Home page
├── benefits.html           Health benefits (SDG 3)
├── greenspaces.html        Green spaces in Ireland (SDG 11)
├── data.html               Data & statistics
├── calculator.html         Wellbeing calculator
├── getinvolved.html        Get involved (YouTube + Google Form)
├── styles.css              Shared stylesheet (single file)
├── calculator.js           Calculator logic (DOM-based)
├── README.md               This file
└── images/
    ├── logo.svg            Custom leaf logo
    ├── hero-park.jpg       Killarney National Park (hero)
    ├── park-1.jpg          Phoenix Park woodland
    ├── park-2.jpg          Merrion Square Park
    ├── park-3.jpg          St Stephen's Green pond
    ├── park-4.jpg          Iveagh Gardens
    ├── park-5.jpg          Grattan Crescent allotments
    ├── park-6.jpg          Deer in Phoenix Park
    ├── forest.jpg          Glendalough forest trail
    ├── walk.jpg            Killarney walking trail
    ├── biodiversity.jpg    Honey bee on wildflower
    ├── sports.jpg          Croke Park
    ├── benefits-hero.jpg   St Stephen's Green bench
    ├── benefit-mental.svg  Custom icon
    ├── benefit-physical.svg Custom icon
    ├── benefit-social.svg  Custom icon
    └── benefit-air.svg    Custom icon
```

---

## Features

- **6 HTML5 pages** with valid document structure, headings, paragraphs, lists and tables
- **2 data tables** with real statistics on green space access and wellbeing
- **Responsive design** using Flexbox and CSS Grid, with a hamburger menu on mobile
- **JavaScript calculator** using DOM manipulation with input validation and no page reload
- **YouTube video** embedded via iframe on the Get Involved page
- **Google Form** embedded via iframe on the Get Involved page
- **Images** with descriptive alt text on every image
- **Working navigation** across all 6 pages with active page highlighting
- **Google Fonts** (Poppins for headings, Inter for body text)
- **Source links** inline throughout the content, plus full reference lists in the footers

---

## How to View the Site

### Option 1: Open directly
Open `index.html` in any web browser. All pages link to each other through the navigation bar.

### Option 2: Local server
If you want to run a local server (recommended for testing):
```bash
python3 -m http.server 8000
```
Then go to `http://localhost:8000` in your browser.

### Option 3: GitHub Pages
The site is deployed via GitHub Pages. The live URL will be added here once deployed:
```
https://YOUR_USERNAME.github.io/green-spaces-wellbeing-ireland/
```

---

## Before Submission - TODO

- [ ] Replace the YouTube video ID in `getinvolved.html` (line 129) with a real video
- [ ] Replace the Google Form ID in `getinvolved.html` (line 184) with a real form
- [ ] Both students push at least 5 commits to GitHub
- [ ] Validate all 6 pages with the W3C HTML validator (https://validator.w3.org/)
- [ ] Validate CSS with the W3C CSS validator (https://jigsaw.w3.org/css-validator/)
- [ ] Test on mobile
- [ ] Run Google PageSpeed Insights (https://pagespeed.web.dev/)
- [ ] Optimise image file sizes if needed
- [ ] Deploy to GitHub Pages
- [ ] Write the project report (wireframes, validation screenshots, PageSpeed results, references)
- [ ] Record the 10-minute video demo
- [ ] Each student fills in the peer evaluation form
- [ ] Create the ZIP file named `Luchian_Stackpoole_H6WD_CA2_2026.zip`
- [ ] Submit on Moodle by 4 August 2026
- [ ] Attend the viva on 6 August 2026

---

## Image Credits

All photographs are from **Wikimedia Commons** and used under Creative Commons or Public Domain licenses. Full credits are listed on the Get Involved page and in the table below.

| Image | Photographer | License |
|-------|-------------|---------|
| Killarney National Park (hero) | Marco Ober (Lion-hearted85) | CC BY-SA 4.0 |
| Phoenix Park woodland | James Emmans (Geograph) | CC BY-SA 2.0 |
| Merrion Square Park | MaRiA-89 (Panoramio) | CC BY 3.0 |
| St Stephen's Green pond | "stalked" (Geograph) | CC BY-SA 2.0 |
| Iveagh Gardens | William Murphy | CC BY-SA 2.0 |
| Grattan Crescent allotments | Ridiculopathy | CC0 (Public Domain) |
| Deer in Phoenix Park | Barry (Flickr) | CC BY 2.0 |
| Glendalough forest trail | gotsing | CC BY-SA 4.0 |
| Killarney walk | ChocoElephant | CC BY-SA 4.0 |
| Honey bee on wildflower | Kirsten Strough, USDA | Public Domain |
| Croke Park | Metro Centric (Flickr) | CC BY 2.0 |
| St Stephen's Green bench | Mrdalton92 | CC BY-SA 4.0 |
| Logo & benefit icons | Original work (Group H) | N/A |

---

## Sources & References

Claims throughout the site link to their sources. Here's the full list:

1. WHO Europe (2017). *Urban green spaces: a brief for action.* https://www.who.int/europe/publications/i/item/9789289052498
2. WHO Europe (2021). *Green and blue spaces and mental health.* https://www.who.int/europe/publications/i/item/9789289055666
3. White, M.P. et al. (2019). *Spending at least 120 minutes a week in nature is associated with good health and wellbeing.* Scientific Reports. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6675864/
4. Hunter, M.R. et al. (2019). *Urban Nature Experiences Reduce Stress in the Context of Daily Life Based on Salivary Biomarkers.* Frontiers in Psychology. https://www.frontiersin.org/articles/10.3389/fpsyg.2019.00722/full
5. Ulrich, R.S. (1984). *View through a window may influence recovery from surgery.* Science. https://pubmed.ncbi.nlm.nih.gov/6143402/
6. Kuo, F.E. & Taylor, A.F. (2004). *A potential natural treatment for attention-deficit/hyperactivity disorder.* American Journal of Public Health. https://pubmed.ncbi.nlm.nih.gov/15333318/
7. US EPA. *Benefits of trees and vegetation.* https://www.epa.gov/heatislands/benefits-trees-and-vegetation
8. US EPA. *Using green roofs to reduce heat islands.* https://www.epa.gov/heatislands/using-green-roofs-reduce-heat-islands
9. Arbor Day Foundation. *Tree facts.* https://www.arborday.org/trees/treefacts/
10. UN Sustainable Development Goals. *SDG 3 - Good Health and Wellbeing.* https://sdgs.un.org/goals/goal3
11. UN Sustainable Development Goals. *SDG 11 - Sustainable Cities and Communities.* https://sdgs.un.org/goals/goal11
12. OPW. *Phoenix Park.* https://www.phoenixpark.ie/
13. NPWS. *National Parks of Ireland.* https://www.npws.ie/national-parks
14. Community Gardens Ireland. https://cgireland.org/
15. DAFM. *Forest statistics and mapping.* https://www.gov.ie/en/collection/15b56-forest-statistics-and-mapping/
16. Department of Transport. *Strategy for the future development of national and regional greenways.* https://www.gov.ie/en/department-of-transport/publications/strategy-for-the-future-development-of-national-and-regional-greenways/
17. World Bank. *Urban population (% of total) - Ireland.* https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=IE
18. CSO Ireland. https://www.cso.ie

---

## Tech Stack

- HTML5
- CSS3 (Flexbox, CSS Grid, custom properties, media queries)
- Vanilla JavaScript (DOM manipulation, form validation)
- Google Fonts (Poppins, Inter)
- No frameworks, no build tools, no dependencies

---

## Submission Info

| | |
|---|---|
| Module | H6WD Web Design & Development |
| Assessment | CA2 Group Project (50%) |
| Lecturer | Sobia Bano |
| Submission date | 4 August 2026 |
| Viva date | 6 August 2026 (in-person, NCI) |
| ZIP filename | `Luchian_Stackpoole_H6WD_CA2_2026.zip` |