# Green Spaces & Wellbeing in Ireland

> A student project exploring how green spaces across Ireland affect our health and communities.  
> Built for **Web Design & Development CA2** at National College of Ireland.  
> **Topic 8** | **UN SDGs 3 & 11** | **Group H**

[![Live Site](https://img.shields.io/badge/Live%20Site-gabi89luch.github.io-green?style=flat&logo=githubpages)](https://gabi89luch.github.io/green-spaces-ireland/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://validator.w3.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://jigsaw.w3.org/css-validator/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat)]()
[![W3C Validated](https://img.shields.io/badge/W3C-0%20Errors-brightgreen?style=flat)]()

---

## Table of Contents

- [About](#about)
- [Group Members](#group-members)
- [Features](#features)
- [File Structure](#file-structure)
- [How to View](#how-to-view)
- [Image Credits](#image-credits)
- [Tech Stack](#tech-stack)

---

## About

The project maps onto two **UN Sustainable Development Goals**:

- **SDG 3** — Good Health and Wellbeing
- **SDG 11** — Sustainable Cities and Communities

We picked this topic because it's something we both care about — both of us have spent time walking in parks and green spaces, and there's solid research on why that matters for health.

1.  **SDG 3** focuses on ensuring healthy lives and promoting wellbeing for all.
2.  **SDG 11** aims to make cities inclusive, safe, resilient, and sustainable — including access to green spaces.
3.  Ireland's urban population has grown to **63%**, making local parks and nature access more important than ever.

---

## Group Members

| Name | Student ID | Role |
|------|-----------|------|
| Valentin Gabriel Luchian | 24318230 | Home, Data & Statistics, Wellbeing Calculator |
| Jamie Stackpoole | 25130340 | Benefits, Green Spaces, Get Involved |

### Task Breakdown

- [x] **Valentin** — index.html, data.html, calculator.html, calculator.js, scroll-top.js, CSS variables/layout
- [x] **Jamie** — benefits.html, greenspaces.html, getinvolved.html, CSS cards/grids/embeds
- [x] **Both** — wireframes, testing, project report, video demo

---

## Features

### Pages (6 HTML5)

| Page | Description | Built by |
|------|------------|----------|
| `index.html` | Home / landing page with hero, stats, and page previews | Valentin |
| `benefits.html` | Health, mental, social benefits of green spaces | Jamie |
| `greenspaces.html` | Irish parks, gardens, and nature spots | Jamie |
| `data.html` | Real statistics on green space access and wellbeing | Valentin |
| `calculator.html` | Green Wellbeing Score Calculator with form validation | Valentin |
| `getinvolved.html` | Volunteer info, YouTube embed, Google Form survey | Jamie |

### Interactive Elements

- **Calculator** — DOM-based JavaScript with 4 inputs, validation, weighted scoring, and inline error messages
- **YouTube embed** — Video on the power of green spaces
- **Google Form** — User survey embedded via iframe
- **Scroll-to-top button** — Appears after 300px, smooth scroll back up

### Design Highlights

- Responsive layout using **Flexbox** and **CSS Grid**
- **Hamburger menu** on mobile (768px breakpoint)
- **WebP images** with lazy loading and explicit dimensions
- **Google Fonts** — Poppins (headings) + Inter (body)
- CSS custom properties for consistent theming
- WCAG-friendly colour contrast

---

## File Structure

```
green-spaces-ireland/
 ├── index.html             Home page
 ├── benefits.html          Health benefits (SDG 3)
 ├── greenspaces.html       Green spaces in Ireland (SDG 11)
 ├── data.html              Data & statistics
 ├── calculator.html        Wellbeing calculator
 ├── getinvolved.html       Get involved (YouTube + Google Form)
 ├── css/
 │   └── styles.css         Shared stylesheet (975 lines)
 ├── js/
 │   ├── calculator.js      Calculator logic (207 lines)
 │   └── scroll-top.js      Back-to-top button (37 lines)
 ├── images/                12 WebP photos + 5 custom SVGs
 └── README.md              This file
```

---

## How to View

### Option 1: Open Directly

```bash
open index.html
```

All pages link to each other through the navigation bar.

### Option 2: Local Server

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

### Option 3: GitHub Pages

Deployed live at:  
[https://gabi89luch.github.io/green-spaces-ireland/](https://gabi89luch.github.io/green-spaces-ireland/)

---

## Image Credits

All photographs are from **Wikimedia Commons** under Creative Commons or Public Domain licenses, served as WebP. The logo and SVG icons are original work by Group H.

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

> Full credits also appear on the **Get Involved** page of the live site.

---

## Tech Stack

- **HTML5** — Semantic document structure
- **CSS3** — Flexbox, Grid, custom properties, media queries
- **Vanilla JavaScript** — 2 files:
  - `calculator.js` — DOM manipulation, validation, score calculation
  - `scroll-top.js` — Back-to-top button behaviour
- **WebP images** — ~30% smaller than JPG equivalents
- **Google Fonts** — Poppins + Inter
- **No frameworks, no build tools, no dependencies**

---

*Group H — Valentin Gabriel Luchian & Jamie Stackpoole*  
*Web Design & Development CA2 — National College of Ireland — 2026*
