# Aman Rawat — Software Engineer Portfolio

My portfolio site: developer-style layout built with **React**, **TypeScript**, and **Vite**. Dark/light mode, typewriter hero, and responsive layout. Static site, deploy anywhere.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in `dist/`. Deploy to Vercel, Netlify, or any static host.

## Customize

- **Profile picture**: Put your photo at `public/profile.jpg` (or edit `PROFILE_IMAGE` in `src/components/Nav.tsx`). If the image is missing, a placeholder avatar is shown.
- **Dark / light mode**: Toggle in the nav (sun/moon icon). Preference is saved in `localStorage` and used on next visit.
- **Hero**: Edit `src/components/Hero.tsx` — name, bio, and role labels in the typewriter.
- **About**: `src/components/About.tsx` — your story and the code snippet.
- **Skills**: `src/components/Skills.tsx` — categories and tags.
- **Projects**: `src/components/Projects.tsx` — titles, descriptions, tech, links.
- **Contact**: `src/components/Contact.tsx` — intro text and social/email links.

Theme colors and fonts are in `src/index.css` (CSS variables).
