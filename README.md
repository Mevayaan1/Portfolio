# Ayaan Mev — Portfolio

Personal portfolio of **Ayaan Mev**, a Full-Stack Developer building production-grade web applications with React, Next.js, Node.js and NestJS.

**Live site:** [ayaanmev.vercel.app](https://ayaanmev.vercel.app)

<!-- Add a screenshot of the hero section here, e.g. ![Preview](.github/preview.png) -->

## Features

- Dark / light mode toggle
- Animated hero with a live IST clock and a rotating role headline
- Experience timeline with computed job durations and brand-colored tech pills
- Featured Projects with tag filtering, expand/collapse and card animations
- Skills grid grouped by category, each entry with its real brand-colored logo
- Downloadable resume, linked from both the navbar and the hero card
- Animated particle background and section-entrance transitions throughout

## Tech stack

**Core** — React 19, Vite 7, Tailwind CSS 4
**Animation** — Framer Motion, tsParticles
**UI** — Radix UI primitives, class-variance-authority, tailwind-merge
**Icons** — lucide-react, Tabler Icons, react-icons (Simple Icons)
**Tooling** — ESLint, `docx` (resume generation)

## Getting started

```bash
# clone the repo
git clone https://github.com/Mevayaan1/Portfolio.git
cd Portfolio

# install dependencies
npm install

# start the dev server
npm run dev
```

Other scripts:

```bash
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Project structure

```
src/
├── components/     # shared UI (Navbar, HeroSection, Footer, ui/ primitives)
├── sections/       # page sections (About, Experience, Skills, Projects, Contact)
├── data/           # content data (projects, skills)
├── pages/          # top-level page composition
└── lib/            # utilities
```

## Contact

- Email: [ayaanmev01@gmail.com](mailto:ayaanmev01@gmail.com)
- GitHub: [github.com/Mevayaan1](https://github.com/Mevayaan1)
- LinkedIn: [linkedin.com/in/ayaanmev01](https://linkedin.com/in/ayaanmev01)

## License

Licensed under the [MIT License](LICENSE).
