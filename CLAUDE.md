# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint over the repo (no test suite exists yet)

## Architecture

A single-page 3D portfolio built with React 19, Vite, and `@react-three/fiber` / `@react-three/drei` (React wrappers over Three.js), styled with Tailwind. It is early-stage: routing, the 3D scaffolding, and the `Island` model exist, but most pages are stubs.

- **Routing** ([src/App.jsx](src/App.jsx)): `react-router-dom` `BrowserRouter` with routes `/`, `/about`, `/projects`, `/contact`. `Navbar` renders above the `Routes` on every page.
- **3D scenes**: rendered inside a `<Canvas>` from `@react-three/fiber` (see [src/pages/Home.jsx](src/pages/Home.jsx)). 3D content must be wrapped in `<Suspense fallback={<Loader />}>` because models load asynchronously. [src/components/Loader.jsx](src/components/Loader.jsx) uses drei's `<Html>` to render a DOM spinner inside the Canvas.
- **Models** ([src/models/](src/models/)): components auto-generated from `.glb` files via [gltfjsx](https://github.com/pmndrs/gltfjsx). They load geometry with `useGLTF(...)` and expose `props` so the parent controls position/rotation/scale. The `.glb` source files live in [src/assets/3d/](src/assets/3d/).
- **Pages** ([src/pages/](src/pages/)): re-exported through [src/pages/index.js](src/pages/index.js) for the barrel import in `App.jsx`. `About`, `Projects`, and `Contact` are currently placeholder stubs.

## Conventions

- **Asset imports**: icons and images are imported through barrel files ([src/assets/icons/index.js](src/assets/icons/index.js), [src/assets/images/index.js](src/assets/images/index.js)) rather than by direct path. `.glb`/`.mp3`/`.svg` are imported as module URLs and handled by Vite.
- **GLTF paths need attention**: `Island` calls `useGLTF('/island.glb')` (a `public/`-root path) while also importing the model from `src/assets/3d/island.glb`. There is no matching file in `public/`, so the `useGLTF` path is likely broken and should be reconciled with the imported URL when the model is wired up.
- **Styling**: Tailwind utility classes plus reusable component classes defined under `@layer utilities` in [src/index.css](src/index.css) (e.g. `max-container`, `head-text`, `blue-gradient_text`, `.header`). Custom theme tokens (colors, `worksans`/`poppins` fonts, `card` shadow) are in [tailwind.config.js](tailwind.config.js). Fonts load via a Google Fonts `@import` at the top of `index.css`.
- **Hover theming**: `index.css` uses `body:has(.card[data-color="..."]:hover)` to tint the page background based on the hovered project card's `data-color` attribute.
