# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Single-page promotional website for **SkyClash: Arena of Legends**, a 2D platform fighting game (Brawlhalla-inspired). The site showcases the game using its poster and description. See `Skyclash_description.md` for full game details and `src/assets/POSTER(with names).png` for the design reference.

## Tech Stack

- **React 19** (JSX, no TypeScript)
- **Vite 7** for dev server and builds
- **Tailwind CSS 4** via `@tailwindcss/vite` plugin (import Tailwind in CSS, use utility classes)
- **ESLint** with react-hooks and react-refresh plugins

## Commands

- `npm run dev` — Start dev server with HMR
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

## Architecture

- `index.html` — Entry point, mounts React at `#root`
- `src/main.jsx` — React root render with StrictMode
- `src/App.jsx` — Main application component
- `src/index.css` — Global styles (import Tailwind here with `@import "tailwindcss"`)
- `src/assets/` — Game poster and other static assets
- `public/` — Static files served at root

## Key Conventions

- Tailwind CSS 4 uses CSS-first configuration (no `tailwind.config.js`). Configure via `@theme` in CSS files.
- ESLint allows unused variables starting with uppercase or underscore (`varsIgnorePattern: '^[A-Z_]'`).
- Components use `.jsx` extension.
