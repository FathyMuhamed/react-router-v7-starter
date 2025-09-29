# React Router — Starter Template

This repository is a production-ready starter template for full-stack React apps using React Router. It's intended to be used as a GitHub template repository or cloned as a starting point for new projects.

If you're publishing this repository as a template, this README will help other developers get started quickly and customize the template for their own apps.

## Quick start

- Requirements: Node.js 20+ and npm (or an alternative package manager).

1. Install dependencies:

```bash
npm install
```

2. Start the dev server (HMR enabled):

```bash
npm run dev
```

3. Open the app in your browser at `http://localhost:5173`.

### Use as a GitHub template

- Click the **Use this template** button on GitHub to create a new repository with this code.
- Or clone it locally and start customizing:

```bash
git clone <your-repo-url> my-app
cd my-app
npm install
```

Tip: if you prefer a zero-dependency clone, use a tool like `degit`:

```bash
npx degit user/repo my-app
```

## What’s included

- React + React Router (server + client)
- TypeScript preconfigured
- Tailwind CSS for styling
- react-i18next with English (`en`) and Arabic (`ar`) locales
- Cypress configured for end-to-end tests

## Internationalization (i18n)

Translations are bundled statically for instant use in SPA mode.

- i18n initialization: `app/i18n.ts`
- Locale files: `app/locales/en.ts`, `app/locales/ar.ts`
- The app persists language choice in `localStorage` and supports `?lng=` query override.

Adding a language

1. Add a new locale file under `app/locales/` that exports the namespaces (follow the structure of `en.ts`).
2. Import and register the new resource in `app/i18n.ts`.
3. Add the language code to `supportedLngs`.
4. Update UI (language switcher) if you want to expose it in the welcome screen.

## Development and testing

- Start dev server: `npm run dev`
- Type generation and typecheck: `npm run typecheck`
- Cypress interactive: `npm run cy:open`
- Cypress headless: `npm run test:e2e` (this script starts the dev server, then runs Cypress)

If you're running Cypress locally and prefer to manage the server yourself, run `npm run dev` in one terminal and `npm run cy:run` in another.

## Build and deploy

Create a production build:

```bash
npm run build
```

Docker example

```bash
docker build -t my-app .
docker run -p 3000:3000 my-app
```

The build output is under `build/` with `client/` (static assets) and `server/` (server bundle).

## Recommended .gitignore

Add a `.gitignore` at the repository root with at least the following entries (you can extend it as needed):

```
node_modules/
.env
dist/
build/
.DS_Store
coverage/
cypress/videos/
cypress/screenshots/
```

If you want, I can add a `.gitignore` file for you — tell me and I’ll create it.

## Contributing / Template maintenance

If you're maintaining this repo as a template for others, consider adding:

- A short CONTRIBUTING.md with how to update the template
- A GitHub Action or script that validates the template (typecheck, build, tests)
- A release or changelog process when you update the template

### Suggested CI steps

- Install dependencies
- Run `npm run typecheck`
- Run `npm run build`
- Run `npm run test:e2e` (optional — requires a headless runner)

## Troubleshooting

- If translations don't update in the browser after switching languages, ensure `app/root.tsx` listens for i18n changes and updates `document.documentElement.lang` (this template already includes that logic).
- If Cypress times out on the language test, try running the app locally (`npm run dev`) and opening Cypress (`npm run cy:open`) to debug.
