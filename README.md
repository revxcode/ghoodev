# Portfolio

![Portfolio banner](/image.webp)

A personal portfolio built with Svelte to showcase projects, skills, and contact information.

## Features
- Responsive, accessible layout
- Project gallery with links and descriptions
- About, Skills, and Contact sections
- Easy to customize and extend

## Tech stack
- Svelte
- Vite (or SvelteKit if used)
- HTML, CSS (Tailwind/PostCSS optional)
- Node.js (for dev/build)

## Prerequisites
- Node.js >= 16
- npm or yarn

## Setup
1. Clone the repo:
   git clone <repo-url>
2. Install dependencies:
   npm install
   # or
   yarn

## Development
Start the dev server:
npm run dev
# or
yarn dev

Open http://localhost:5173 (Vite default) or the port shown in the terminal.

## Build
Create a production build:
npm run build
# or
yarn build

Serve the build locally for testing:
npm run preview
# or
yarn preview

## Deployment
- Deploy the generated build folder to static hosts like Netlify, Vercel, GitHub Pages, or any static file server.
- If using SvelteKit, follow the adapter-specific deployment steps.

## Project structure (example)
- src/
  - routes/ or pages/ — page components
  - lib/ — reusable components
  - assets/ — images, icons
  - styles/ — global CSS or Tailwind config
- static/ — static files
- package.json
- vite.config.js or svelte.config.js

## Customization
- Update site metadata (title, description) in src or app root.
- Replace placeholder content and images in src/assets.
- Add projects to the projects data file or component.

## Contributing
- Fork, create a branch, make changes, open a PR.
- Keep commits small and focused.
- Run lint/tests (if any) before submitting.

## License
Specify a license in LICENSE file (e.g., MIT).