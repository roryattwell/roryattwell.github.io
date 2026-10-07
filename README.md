# Rory Attwell — Producer & Composer

One-page portfolio site: film & TV composition, record production and sound work.

## Run locally

```bash
cd frontend
yarn install
yarn start
```

## Build for hosting

```bash
cd frontend
yarn install
yarn build
```

This produces `frontend/build/` — a fully static site (no backend or database needed). Upload that folder to any static host: your own server (nginx/Apache), GitHub Pages, Netlify, Vercel, etc.

## GitHub Pages

A deploy workflow is included at `.github/workflows/deploy.yml`. To turn it on:

1. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. Push (or re-save) to `main` — the site builds and publishes automatically.

## Editing content

All text, credits and links live in `frontend/src/data/site.js`; page sections are components in `frontend/src/components/site/`.
