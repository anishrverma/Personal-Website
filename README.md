# Anish R. Verma — Personal Website

Live website: [https://anishrverma.github.io/](https://anishrverma.github.io/)

Anish R. Verma's personal website presents his work across product management, quantum computing and research, project management, artificial intelligence, and scientific software.

## Technology stack

- React 16.14
- Vite 8
- React Router
- styled-components
- Sass
- Vitest
- ESLint
- Prettier, Husky, and lint-staged
- GitHub Pages deployment

## Setup and local development

Install the version of Node.js and npm appropriate for the dependencies in `package-lock.json`, then clone the source repository and install its locked dependencies:

```bash
npm ci
```

Start the Vite development server:

```bash
npm run dev
```

Vite prints the local URL in the terminal. Open that URL in a browser.

Run the project checks and production workflow as needed:

```bash
npm run lint
npm test
npm run build
npm run preview
```

- `npm run lint` checks the JavaScript and JSX source with ESLint.
- `npm test` runs the Vitest test suite once.
- `npm run build` runs linting and creates a production build in `build/`.
- `npm run preview` serves the production build locally for inspection after it has been built.

Prettier provides formatting, while Husky and lint-staged support repository hooks and formatting of staged files.

## Content and assets

- Maintain the portfolio's primary text, links, and structured content in `src/portfolio.js`.
- Store site images in `src/assests/images`. The existing `assests` spelling is intentional and must be preserved.
- Record externally sourced asset origins and licensing information in `ASSET_SOURCES.md`.

## Deployment architecture

Deployment uses two GitHub repositories:

- [`anishrverma/Personal-Website`](https://github.com/anishrverma/Personal-Website) contains the source code.
- [`anishrverma/anishrverma.github.io`](https://github.com/anishrverma/anishrverma.github.io) contains the generated production files served by GitHub Pages.

> [!WARNING]
> Do not edit the production repository manually. Run deployment only from a clean, current `master` branch in the source repository, and only after linting, tests, and a production build have passed.

From the validated source repository, deploy with:

```bash
npm run deploy
```

This command builds the source and publishes `build/` to the `master` branch of `anishrverma/anishrverma.github.io`.

## Attribution

This website was adapted from Saad Pasta's [developerFolio](https://github.com/saadpasta/developerFolio) project.

## License

This project is licensed under the [MIT License](./LICENSE).
