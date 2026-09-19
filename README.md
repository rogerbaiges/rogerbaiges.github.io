# Roger Baiges Trilla — Portfolio

Production portfolio for Roger Baiges Trilla, an AI researcher and engineer working across
research, industry, language models, multimodal systems, private AI, and agentic workflows.

## Local development

Requires Node.js 22.12 or newer.

```bash
npm ci
npm run dev
```

Open `http://localhost:4321/`.

## Validation

```bash
npm test
npm run check
npm run build
npm run preview
```

The build is static and deploys to GitHub Pages through
`.github/workflows/deploy.yml`.

## Content and assets

- Portfolio content is centralized in `src/data/portfolio.ts`.
- The final downloadable CV is `public/files/RogerBaigesCV.pdf`.
- Organization asset provenance and restrictions are documented in
  `docs/ASSET_SOURCES.md`.
- Self-hosted font provenance and licenses are documented in `public/fonts/README.md`.

The EPFL mark is included at Roger’s explicit request. EPFL identifies it as a registered
trademark, so the portfolio keeps the supplied red artwork unchanged and records the remaining
authorization caveat in `docs/ASSET_SOURCES.md`.
