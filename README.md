# Green Spaces & Wellbeing in Ireland

A multi-page website exploring how green spaces across Ireland affect our health and communities. Six HTML pages, a shared CSS file, and a JavaScript wellbeing score calculator. Built for **Web Design & Development CA2** at National College of Ireland.

**Topic 8** | **UN SDGs 3 & 11** | **Group H**

**Live site:** https://gabi89luch.github.io/Green-Spaces-Wellbeing-Ireland/

---

## About

The project maps onto two UN Sustainable Development Goals:

- **SDG 3** - Good Health and Wellbeing
- **SDG 11** - Sustainable Cities and Communities

We picked this topic because it's something we both care about - both of us spend time in parks and green spaces, and there's solid research on why that matters for health.

---

## Group Members

| Name | Student ID | Role |
|------|-----------|------|
| Valentin Gabriel Luchian | x24318230 | Home, Data & Statistics, Wellbeing Calculator |
| Jamie Stackpoole | x25130340 | Benefits, Green Spaces, Get Involved |

---

## Features

- 6 HTML5 pages with valid document structure, headings, paragraphs, lists and tables
- 2 data tables with real statistics on Irish green space access and wellbeing
- Responsive design using Flexbox and CSS Grid, with a hamburger menu on mobile
- JavaScript calculator using DOM manipulation with input validation, no page reload
- YouTube video and Google Form embedded via iframes on the Get Involved page
- Working navigation across all 6 pages with active page highlighting
- Google Fonts (Poppins for headings, Inter for body text)
- Source links inline throughout, full reference list in the project report

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
└── images/                 12 Wikimedia Commons photos + 5 custom SVGs
```

---

## How to View

### Open directly
Open `index.html` in any web browser. All pages link to each other through the navigation bar.

### Local server (recommended)
```bash
python3 -m http.server 8000
```
Then go to http://localhost:8000 in your browser.

### GitHub Pages
Deployed and live at: https://gabi89luch.github.io/Green-Spaces-Wellbeing-Ireland/

---

## Image Credits

All photographs are from **Wikimedia Commons** under Creative Commons or Public Domain licenses. The logo and benefit icons are original work by Group H.

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

Full credits appear on the Get Involved page of the live site and in `project-report.md`.

---

## Tech Stack

- HTML5
- CSS3 (Flexbox, CSS Grid, custom properties, media queries)
- Vanilla JavaScript (DOM manipulation, form validation, event listeners)
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

---