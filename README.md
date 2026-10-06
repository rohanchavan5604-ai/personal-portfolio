# Rohan Arun Chavan | Portfolio

React + Vite + Framer Motion portfolio. Content comes from your resume and certificates.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build for production
```bash
npm run build      # output in dist/
npm run preview
```

## Deploy
**Vercel:** push to GitHub, import the repo on vercel.com. Framework: Vite, build `npm run build`, output `dist`.
**GitHub Pages:** `npm run build`, then publish `dist/` (for example with the `gh-pages` package: `npx gh-pages -d dist`). Asset paths are relative (`base: './'`), so a repo sub-path works.

## Where to edit
| What | File |
|---|---|
| Name, email, links, About, Experience, Education | `src/data/site.js` |
| Skills | `src/data/skills.js` |
| **Add a project** | `src/data/projects.js` (copy an object) |
| **Add a certificate** | `src/data/certificates.js` + image in `public/certs/` |
| Project screenshots | put files in `public/projects/`, list them in `screenshots` |
| Resume | replace `public/resume/Rohan_Arun_Chavan_Resume.pdf` |
| Colors / spacing | CSS variables at the top of `src/styles/global.css` |

## TODO placeholders
- Project GitHub links are set in `src/data/projects.js`.
- Project screenshots (none were provided).
- Contact form uses `mailto:` (no backend). Swap in EmailJS or Formspree to send directly.
