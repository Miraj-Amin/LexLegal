# LexAmin Legal — project notes

## SEO requirement (persistent)
The build must be SEO friendly. When adding or editing pages, keep these in place:

- **Per-page `<head>` metadata** lives in a managed block marked `<!-- SEO:meta (managed) -->` … `<!-- /SEO:meta -->`: canonical URL, robots directive, Open Graph + Twitter cards, and JSON-LD. New public pages need their own block; new internal pages get `noindex, nofollow`.
- **JSON-LD structured data**: site-wide `LegalService`/`ProfessionalService` + `Person` (Nikhil Amin) + `WebSite` graph, plus a per-page `WebPage` + `BreadcrumbList`.
- **`<noscript>` fallback** in the body of every public page mirrors the visible H1, intro, contact details and nav links so crawlers/social bots get real content + internal links.
- **Semantic landmarks**: page content is wrapped in `<main id="main">`; nav/footer use `<nav>`/`<footer>`; one `<h1>` per page; images carry `alt`.
- **`sitemap.xml` + `robots.txt`** list only the 7 public pages. Internal pages (Dashboard, *-print, and the design-canvas files: Business Cards, Colour Palettes, Logo Concepts) are excluded and set to noindex.
- Canonical base URL assumed: `https://lexaminlegal.com` — update everywhere if the live domain differs (incl. www vs non-www).

## Important caveat — client-side rendering
These pages render with in-browser React + Babel, so the static HTML body is `<div id="root">` (plus the noscript fallback). In-browser Babel is a dev tool, not production. For real, reliable SEO the site should be rebuilt with server-side rendering or static generation (Next.js / Astro etc.) so the full content ships in the HTML. The metadata above is structured to carry straight into that handoff.

## Firm facts (for structured data — keep accurate)
- Lexamin Legal Ltd, registered in England & Wales. **Not** SRA-regulated — do not assert regulatory status. Nikhil Amin acts through regulated firms (Taylor Rose, Meadows Ryan).
- Nikhil Amin — Residential Property Solicitor.
- info@lexaminlegal.com · +44 (0) 7935 011 281 · Mon–Fri 09:00–18:00.
- Areas: London, South West London, Surrey, Croydon.
