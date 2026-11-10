# User & Agents

Community website for [User & Agents](https://www.userandagents.org), built with Next.js, TypeScript, and Tailwind CSS.

## Development

Use the Node.js version in `.nvmrc` and npm. With [nvm](https://github.com/nvm-sh/nvm) installed:

```sh
nvm install
nvm use
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Build and preview

```sh
npm run build
npm start
```

The build exports static files to `out/`. Preview them at [127.0.0.1:3000](http://127.0.0.1:3000).

## Deployment

Pushes to `main` automatically deploy to GitHub Pages through [GitHub Actions](.github/workflows/pages.yml). Pull requests run the build check.
