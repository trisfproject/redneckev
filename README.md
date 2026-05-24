# Redneck EV

Production-ready Astro + TailwindCSS website for Redneck EV, configured for GitHub Pages at:

https://trisfproject.github.io/redneckev

## Tech Stack

- Astro static output
- TailwindCSS
- GitHub Pages deployment with `withastro/action`
- Sitemap and robots.txt support

## Install

```bash
npm install
```

## Local Development

```bash
npm run dev
```

Astro will print the local URL, usually `http://localhost:4321/redneckev/`.

## Build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## GitHub Pages Deployment

The site is configured for repository Pages:

```js
export default defineConfig({
  site: 'https://trisfproject.github.io',
  base: '/redneckev',
});
```

Deployment is handled by `.github/workflows/deploy.yml` using Astro's official GitHub Pages action. In GitHub repository settings, set Pages source to **GitHub Actions**.

## Custom Domain Setup

For a future custom domain:

1. Add the domain in GitHub Pages settings.
2. Update DNS records with your domain provider.
3. Change `site` in `astro.config.mjs` to the custom domain.
4. Remove `base` if the custom domain serves from the root path.
5. Add a `public/CNAME` file containing the domain name.

## Project Structure

```text
src/
├── assets/
├── components/
├── layouts/
├── pages/
└── styles/
```
