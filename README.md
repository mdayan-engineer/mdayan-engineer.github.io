# MD AYAN Portfolio — Redesign

Static, responsive portfolio for GitHub Pages.

## Files
- `index.html` — homepage and Person structured data
- `assets/css/portfolio.css` — responsive design system
- `assets/js/portfolio.js` — accessible navigation, reveal motion, role rotator and on-demand Calendly loading
- `thank-you.html` — Formspree redirect destination
- `404.html` — GitHub Pages not-found page
- `robots.txt` and `sitemap.xml` — crawl configuration
- `assets/images/` — existing original repository assets retained

## Before publishing
1. Confirm that `https://formspree.io/f/xyyqdowq` is the active form endpoint and that the Formspree account is configured to receive submissions. Submit a real test after publishing.
2. Confirm the Calendly URL `https://calendly.com/md-ayan/book-appointment` is active and available for booking.
3. Check every project destination and confirm that you have permission to display each brand/project and its identity. Remove or update any card that is not approved.
4. Confirm current degree status and current role descriptions before adding stronger claims.
5. If you want a downloadable CV, add a current PDF and link it after confirming the filename.
6. Verify the two existing Google Search Console verification tokens in the Search Console account before adding any verification meta tag. No placeholder verification codes are included.
7. After deployment, submit `https://mdayan-engineer.github.io/sitemap.xml` in Google Search Console and run PageSpeed Insights on mobile and desktop.

## Contact form
The form uses the existing Formspree endpoint found in the original repository. The form posts directly to Formspree; it does not use a custom backend. The thank-you page is configured as the post-submit redirect. Form delivery must be tested with the connected Formspree account.

## Deployment
Upload the contents of this folder to the repository's `main` branch (not the containing folder). Keep `assets/` at the repository root. GitHub Pages should publish from the root of `main`.

## Notes
- The original portrait (`assets/images/hero-man-dark.png`) and logo (`assets/images/logo-light.png`) are reused without editing.
- The redesign intentionally avoids invented testimonials, fabricated performance metrics and unverified credentials.
- This is a static HTML/CSS/JS implementation; no framework build step is required.


## FAQ and AI-search readiness
- The homepage contains six visible, crawlable FAQ answers in native HTML `<details>` elements.
- A matching `FAQPage` JSON-LD block is included. Structured data must always match visible page content.
- Important profile and service information is present as readable HTML, not hidden behind client-side rendering.
- The `Person` entity uses verified profile links in `sameAs` and relevant `knowsAbout` topics.
- No `llms.txt` file is added as an SEO ranking tactic. Google's current AI-search guidance says such files and special AI markup are not required and do not improve Google Search visibility. Focus instead on crawlability, useful original content, clear structure, accurate facts and strong page experience.
- FAQ structured data does not guarantee a Google FAQ rich result. Google limits FAQ rich results primarily to well-known authoritative government and health websites, so a personal portfolio should treat the FAQ as useful on-page content and semantic markup, not a promised SERP feature.

## Typography and sticky header update
- Body and supporting text sizes have been increased for readability.
- Desktop and mobile heading scales have been adjusted.
- The sticky header remains pinned to the top while scrolling. The outer shell uses `overflow: clip` so it does not create a scrolling ancestor that interferes with sticky positioning.
