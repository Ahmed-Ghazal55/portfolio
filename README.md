# Portfolio — Legacy Frontend Site

An earlier personal portfolio built with HTML, CSS, JavaScript, Bootstrap and Slick Carousel.

**Status: legacy/reference version.** This repository is preserved for learning history and design reference. A separate modern portfolio is planned; it has not been implemented in this repository.

## Run
Open `index.html` in a browser, or use a simple local static server:

```bash
python3 -m http.server 8000
```

Visit http://localhost:8000/. Some browser APIs and form behavior may require an actual backend; do not assume the contact form sends real messages without verification.

## What to verify
- Navigation, sections, responsive layout, image paths, carousel and contact form behavior.
- Accessibility: headings, labels, focus indicators, keyboard navigation, contrast and alternative text.
- Dependency and external asset provenance; remove unneeded duplicated libraries only after browser comparison.
- Audit `assets/Script/portfolio-3.8.zip` before downloading, running or redistributing it. Its provenance has not been verified.
- Add recent, verified screenshots and a clear feature list.
- Ensure no personal information, secrets or tracking endpoints are accidentally committed.

## Next-generation portfolio plan (separate project)
- **Frontend:** Next.js, TypeScript, Tailwind CSS, accessible components, metadata/SEO.
- **Backend, only where justified:** NestJS REST endpoints for managed portfolio content or admin features.
- **Data:** PostgreSQL and Prisma if dynamic CMS functions are genuinely required; otherwise prefer static content.
- **Product:** projects, case studies, skills, technical writing, contact, and honest descriptions of current work.
- **Quality:** responsive checks, security review, automated tests, CI, Lighthouse/performance checks, deployment guide.
- **Publication gate:** no unpublished client data, incomplete systems shown as production-ready, or unverified downloads.

Keep this older version intact until the replacement is documented, tested, and deliberately released.
