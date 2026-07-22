# Green Spaces & Wellbeing in Ireland

A multi-page website exploring how green spaces across Ireland affect our health and communities. Six HTML pages, a shared CSS file, two JavaScript files (calculator + scroll-to-top), and WebP images. Built for **Web Design & Development CA2** at National College of Ireland.

**Topic 8** | **UN SDGs 3 & 11** | **Group H**

**Live site:** https://gabi89luch.github.io/green-spaces-ireland/

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
| Valentin Gabriel Luchian | 24318230 | Home, Data & Statistics, Wellbeing Calculator |
| Jamie Stackpoole | 25130340 | Benefits, Green Spaces, Get Involved |

---

## Features

- 6 HTML5 pages with valid document structure, headings, paragraphs, lists and tables
- 2 data tables with real statistics on Irish green space access and wellbeing
- Responsive design using Flexbox and CSS Grid, with a hamburger menu on mobile
- JavaScript calculator using DOM manipulation with input validation, no page reload
- YouTube video and Google Form embedded via iframes on the Get Involved page
- Scroll-to-top button on every page (fades in past 300px scroll)
- Working navigation across all 6 pages with active page highlighting
- Google Fonts (Poppins for headings, Inter for body text)
- WebP images with lazy loading and explicit dimensions
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
├── css/
│   └── styles.css          Shared stylesheet (single file)
├── js/
│   ├── calculator.js       Calculator logic (DOM-based)
│   └── scroll-top.js       Back-to-top button behaviour
├── images/                 12 Wikimedia Commons WebP photos + 5 custom SVGs
└── README.md               This file
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
Deployed and live at: https://gabi89luch.github.io/green-spaces-ireland/

---

## Image Credits

All photographs are from **Wikimedia Commons** under Creative Commons or Public Domain licenses, served as WebP. The logo and benefit icons are original work by Group H.

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

---

## Tech Stack

- HTML5
- CSS3 (Flexbox, CSS Grid, custom properties, media queries)
- Vanilla JavaScript - two separate files:
  - `calculator.js` - DOM manipulation, form validation, score calculation
  - `scroll-top.js` - back-to-top button show/hide + smooth scroll
- WebP images (smaller than JPG equivalents, ~30% size reduction)
- Google Fonts (Poppins, Inter)
- No frameworks, no build tools, no dependencies

---
