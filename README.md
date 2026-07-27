# Portfolio — Agung Tri Mahmudi

Source for [agungtrimahmudi.site](https://agungtrimahmudi.site): a single static
HTML page (Tailwind CDN + vanilla JS, no build step) showcasing automation and
AI projects, bilingual in Indonesian and English.

## Structure

- `index.html` — the entire site: markup, styling, and JS in one file.
- `profile.jpg`, `favicon.svg` — site branding.
- `rekap-rs-workflow.png` — a real n8n workflow screenshot from the
  [Rekap-Data-Dokter](https://github.com/Agungtrimahmudi-automation/Rekap-Data-Dokter)
  project.
- `placeholder-*.svg` — stand-in images for projects that don't have a real
  screenshot yet. Each is labeled with which project it belongs to and what
  kind of screenshot should replace it.
- `robots.txt`, `sitemap.xml` — basic SEO plumbing.

The "Proyek" section on the page is written by hand (Problem → Solution →
Result for each project) because it needs judgment about what's worth telling,
not just a repo description. The "Repositori" section below it is pulled live
from the GitHub REST API on page load, so new repos show up automatically
even before they get a written case study.

## Running locally

Open `index.html` directly in a browser — no server or build step needed.

## Deploying

The site is static, so it can be hosted anywhere that serves plain files
(GitHub Pages, Netlify, a VPS with any web server). Point the custom domain's
DNS at whichever host is in use, and if using GitHub Pages, add a `CNAME` file
containing the domain.

## License

MIT, see [LICENSE](LICENSE).
