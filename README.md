# Portfolio — Agung Tri Mahmudi

Source for [agungtrimahmudi.site](https://agungtrimahmudi.site): a static page
showcasing automation and AI projects, bilingual in Indonesian and English.
Hand-written CSS and vanilla JS, no framework and no build step.

## Structure

- `index.html` — markup only.
- `assets/styles.css` — the whole visual system: colour tokens for the light
  ("parchment") and dark ("midnight") themes, typography, the arcane-seal
  ornaments, and every component.
- `assets/app.js` — project data, the Indonesian/English dictionary, rendering,
  the project modal, and the theme, language, and scroll behaviour.
- `assets/img/` — `profile.jpg`, plus one screenshot per project: an n8n
  workflow diagram for
  [Rekap-Data-Dokter](https://github.com/agungtrimahmudi-dev/Rekap-Data-Dokter)
  (`rekap-rs-workflow.png`) and Telegram/UI screenshots for the rest
  (`jurnal-siaga.png`, `bot-umkm.png`, `recipe-rag.png`,
  `laporan-hp-mingguan.png`, `novel-harian.png`).
- `favicon.svg`, `robots.txt`, `sitemap.xml`, `CNAME` — branding, SEO plumbing,
  and the custom domain for GitHub Pages.

Two external resources are loaded from a CDN: Google Fonts (Cormorant Garamond,
Cinzel, Plus Jakarta Sans) and a pinned build of the Lucide icon set. The
technology tags on each project card are shields.io badges, matching the ones in
each repository's own README.

The Portfolio section is written by hand (Problem → Solution → Result for each
project) because it needs judgment about what's worth telling, not just a repo
description. The Repositories section below it is pulled live from the GitHub
REST API on page load, so new repos show up automatically even before they get a
written case study; if that request fails, the section degrades to a direct link
to GitHub rather than rendering empty.

## Running locally

Open `index.html` directly in a browser — no server or build step needed. A
local server (`python -m http.server`) is only useful for checking the GitHub
API call under a real origin.

## Deploying

The site is static, so it can be hosted anywhere that serves plain files
(GitHub Pages, Netlify, a VPS with any web server). Point the custom domain's
DNS at whichever host is in use, and if using GitHub Pages, keep the `CNAME`
file containing the domain.

## License

MIT, see [LICENSE](LICENSE).
