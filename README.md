# IEEE InnovateX 2026

**IEEE IAS × IEEE RAS | MITS Gwalior**  
*Where Ideas Become Innovation.*

A production-quality responsive single-page website for **IEEE INNOVATEX 2026**, organized jointly by the **IEEE Industry Applications Society (IAS)** and **IEEE Robotics and Automation Society (RAS)** chapters at **Madhav Institute of Technology & Science (MITS), Gwalior**.

Built with a **"Dark Technical Future"** visual identity, combining IEEE academic prestige with modern developer conference aesthetics (deep dark backgrounds, subtle tech grid overlays, soft cyan/blue/purple accent glows, glassmorphism, and responsive typography).

---

## Features

- **Responsive Design**: Flawless layout across mobile (`375px`, `390px`), tablet (`768px`, `1024px`), laptop (`1280px`), and desktop (`1440px+`).
- **IEEE Chapter Branding**: Authentic IEEE, IEEE IAS, and IEEE RAS logos integrated into navigation and footer.
- **Hero Section**: Abstract futuristic technology visual using pure CSS and SVG (orbiting nodes, concentric radar telemetry, and floating geometric telemetry cards).
- **About Track Cards**: 3 interactive feature cards exploring *Artificial Intelligence*, *Robotics*, and *Automation*.
- **Event Experience**: Asymmetric bento grid layout presenting the 4 core pillars: *LEARN*, *BUILD*, *CONNECT*, and *INNOVATE*.
- **Event Schedule**: Professional data-driven timeline highlighting 4 key sessions from *Opening Ceremony* to *Closing & Networking*.
- **Keynote Speakers**: 2 clearly structured, editable placeholder speaker profile cards with abstract futuristic avatar art and social links.
- **Featured Visual Section**: Bold "ENGINEER THE FUTURE" section with futuristic CSS backdrop and direct registration CTA.
- **Interactive Registration Flow**: Working delegate registration modal and in-page anchor with pass tier preview, input validation, and confirmation state.
- **Professional Footer**: High-resolution footer showcase integrating the provided footer asset, chapter information, navigation links, and social placeholders.
- **Accessible & Motion-Aware**: Full support for `prefers-reduced-motion` and semantic HTML markup.

---

## Tech Stack

- **React 19** — Component-driven reactive UI
- **Vite 8** — Ultra-fast next-generation frontend tooling
- **Tailwind CSS v4** — Modern utility-first styling with `@tailwindcss/vite`
- **Lucide React** — Lightweight, crisp vector iconography
- **Space Grotesk & Inter** — Modern geometric heading and clean body typography

---

## Project Structure

```
├── public/                     # Static public assets & favicon
├── src/
│   ├── assets/                 # Official IEEE and chapter assets
│   │   ├── ieee-logo.jpg       # IEEE Official Logo
│   │   ├── ieee-ias-logo.png   # IEEE IAS Official Chapter Logo
│   │   ├── ieee-ras-logo.jpg   # IEEE RAS Official Chapter Logo
│   │   ├── footer-asset.jpg    # Provided Official Footer Artwork
│   │   └── index.js            # Asset exports & metadata links
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky responsive header with mobile drawer
│   │   ├── Hero.jsx            # High-impact Hero with CSS tech visual & CTAs
│   │   ├── About.jsx           # 3 Feature Track Cards (AI, Robotics, Automation)
│   │   ├── Experience.jsx      # Asymmetric Bento Grid (Learn, Build, Connect, Innovate)
│   │   ├── Schedule.jsx        # Data-driven interactive 4-session timeline
│   │   ├── Speakers.jsx        # Exactly 2 Keynote Speaker cards (editable)
│   │   ├── FeaturedBanner.jsx  # "ENGINEER THE FUTURE" visual banner
│   │   ├── CTA.jsx             # Final CTA section & Registration Modal
│   │   ├── BrandIcons.jsx      # Clean vector icons (LinkedIn, Twitter, Instagram, GitHub)
│   │   └── Footer.jsx          # Comprehensive footer with provided asset
│   ├── data/
│   │   └── eventData.js        # Centralized editable configuration for schedule, dates & speakers
│   ├── App.jsx                 # Main application layout
│   ├── main.jsx                # Application root
│   └── index.css               # Design tokens, grid patterns, ambient glows & animations
├── index.html                  # SEO meta tags, Google Fonts, and viewport settings
├── vite.config.js              # Vite + React + Tailwind CSS v4 configuration
└── package.json                # Project dependencies and npm scripts
```

---

## Provided Assets

All 4 official assets from the technical recruitment task are bundled locally inside `src/assets/` to ensure offline stability, zero CORS issues, and instant loading:

| Asset | Provided Page Link | Bundled File |
|---|---|---|
| **IEEE Logo** | [https://kommodo.ai/i/EtJRryiEBiWtEZ0P6uI5](https://kommodo.ai/i/EtJRryiEBiWtEZ0P6uI5) | `src/assets/ieee-logo.jpg` |
| **IEEE IAS Logo** | [https://kommodo.ai/i/fZX7Oap2QzKzLWLJFr96](https://kommodo.ai/i/fZX7Oap2QzKzLWLJFr96) | `src/assets/ieee-ias-logo.png` |
| **IEEE RAS Logo** | [https://kommodo.ai/i/HMDQxvrIYT1iYhYlSRr5](https://kommodo.ai/i/HMDQxvrIYT1iYhYlSRr5) | `src/assets/ieee-ras-logo.jpg` |
| **Footer Asset** | [https://kommodo.ai/i/MrRh7jqDYuucqnLeiKzM](https://kommodo.ai/i/MrRh7jqDYuucqnLeiKzM) | `src/assets/footer-asset.jpg` |

---

## How to Edit Event Data

All event dates, speaker profiles, and timeline items are decoupled from JSX and stored in `src/data/eventData.js`.

- **Event Date**: Modify `EVENT_INFO.datePlaceholder` (currently set to `"12 OCT 2026"`).
- **Speakers**: Modify `KEYNOTE_SPEAKERS` array to update names, roles, affiliations, and bios.
- **Schedule**: Modify `SCHEDULE_TIMELINE` array to alter session times, titles, locations, and descriptions.

---

## Run Locally

### Prerequisites
- Node.js (v18+ or v20+)
- npm (v9+)

### Installation
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Production Build

To create an optimized production bundle:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## Deployment

The application is completely static (no backend required) and ready for one-click deployment:

### Deploying to Vercel
1. Push this repository to GitHub.
2. Import the repository into your [Vercel Dashboard](https://vercel.com).
3. Framework Preset: **Vite**.
4. Click **Deploy**.

### Deploying to GitHub Pages
1. In `vite.config.js`, set `base: './'` or `base: '/<repo-name>/'`.
2. Build the project using `npm run build`.
3. Deploy the resulting `dist/` directory to GitHub Pages using the `gh-pages` package or a GitHub Actions workflow.

---

## License & Credits

- Organized by: **IEEE IAS & IEEE RAS Chapters, MITS Gwalior**
- Created as an **IEEE Technical Recruitment Task**
- © 2026 IEEE IAS × RAS | MITS Gwalior
