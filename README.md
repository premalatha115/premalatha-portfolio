# Premalatha A — Developer Portfolio

A React + Vite portfolio built around your actual work: the COBOL-to-Java
modernization project at TCS is the visual centerpiece of the hero section
(an animated "migration diff" showing legacy COBOL turning into Java).

## Tech stack
- React 19 + Vite
- Framer Motion (animations, scroll reveals, scroll-progress bar)
- lucide-react (icons)
- Plain CSS with design tokens (no Tailwind) — see `src/index.css`

## Project structure
```
src/
├── components/       # one component + one CSS file per section
├── data/
│   └── portfolioData.js   # ALL editable content lives here
├── hooks/
│   └── useTheme.js        # dark/light mode, persisted to localStorage
├── App.jsx
├── main.jsx
└── index.css               # design tokens (colors, type, spacing)
```

## Run locally
```bash
npm install
npm run dev
```
Then open the printed local URL (usually http://localhost:5173).

## Build for production
```bash
npm run build
npm run preview   # optional: preview the production build locally
```
The output goes to `dist/`.

## Deploy to Vercel
1. Push this project to a GitHub repository.
2. Go to https://vercel.com/new and import the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output
   directory: `dist`. Vercel detects all of this automatically for a
   standard Vite app — you shouldn't need to change anything.
4. Deploy.

Alternatively, from the CLI: `npx vercel` from the project root.

## Already filled in

- **Resume:** your actual PDF is at `public/resume.pdf` — the navbar and hero "Download Resume" buttons already point there.
- **Photo:** your real headshot (`Prems.jpg`) is at `public/photo.jpg` and shown in the About section. It's used as-is — no filters or stylization.
- **Content:** everything in `src/data/portfolioData.js` was pulled from your uploaded resume (experience, projects, skills, certifications, education).

## Still to fill in before you publish

All of these live in **`src/data/portfolioData.js`** — you don't need to
touch any component to update your content.

| What | Where | Notes |
|---|---|---|
| GitHub profile link | `profile.github` | Currently empty, so the GitHub link in the hero is hidden. Add your URL to show it. |
| Project repo links | `projects[i].github` | Currently empty for both projects, so the "Code" buttons render disabled. Add real repo URLs to enable them. |
| Live demo links | `projects[i].demo` | Same as above — only enable a "Live" button once a real demo URL exists. |

## Notes
- The contact form validates on the frontend only (name, email format,
  message required). No email-sending backend is wired up — submitting
  a valid form shows a confirmation message pointing people to your
  email address directly. If you want real form submissions, the
  cleanest options are a service like Formspree/Resend, or a small
  serverless function.
- Dark/light theme preference is saved to `localStorage` under the key
  `portfolio-theme`.
- Animations respect `prefers-reduced-motion`.
- Nothing in the content claims professional React experience — the
  copy is explicit that React is being used to build the site itself,
  and "Currently Learning" items are labeled as such, not as
  professional experience.
