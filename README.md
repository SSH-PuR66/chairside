# Atom-Agexx

> **FlowForge** — done-for-you automation for dental practices.

![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare_Pages-f38020?style=for-the-badge)
![Vanilla JS](https://img.shields.io/badge/Frontend-Vanilla_JS-f7df1e?style=for-the-badge)
![Vitest](https://img.shields.io/badge/Tests-Vitest-6e9f18?style=for-the-badge)
![Prettier](https://img.shields.io/badge/Format-Prettier-1a2b34?style=for-the-badge)

![Project preview](assets/og.png)

## What this is

Atom-Agexx is a high-converting landing page for **FlowForge**, a service that automates repetitive dental office work like patient intake, appointment reminders, and invoice syncing.

The site is intentionally built as a fast static experience:

- persuasive hero section and pricing flow
- ROI calculator with live savings math
- workflow template previews
- FAQ and contact capture
- Cloudflare Pages-ready static deployment

## Highlights

- **Calculator-driven pitch** — turns manual admin hours into dollar savings
- **Template library** — ships with reusable dental workflow JSON templates
- **Polished motion** — reveal effects, animated counters, modal previews, and mobile nav
- **Lead capture** — Formspree-backed contact form
- **Safe hosting model** — deploys as a static site with Cloudflare Pages

## Repo structure

```txt
src/
  index.html
  css/styles.css
  js/main.js
  js/roi.js
templates/
  dental/
    new-patient-intake.json
    appointment-reminders.json
    invoice-sync.json
tests/
  roi.test.js
assets/
  og.png
```

## Tech stack

| Area | Stack |
|---|---|
| UI | HTML, CSS, JavaScript |
| Testing | Vitest |
| Formatting | Prettier |
| Dev server | `serve` |
| Hosting | Cloudflare Pages |

## Local development

```bash
npm install
npm run dev
```

The local preview serves the `src` directory.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Serve the site locally |
| `npm test` | Run the ROI unit tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run format` | Format source and test files |
| `npm run format:check` | Check formatting without writing |

## How it works

1. A visitor lands on the FlowForge page.
2. The ROI calculator shows the monthly cost of manual admin work.
3. Package buttons prefill the contact form.
4. Workflow cards open modal previews of the automations.
5. The form submits through Formspree.

## Deployment

This project is ready for **Cloudflare Pages**.

- **Build command:** not required for a static deploy
- **Build output directory:** `src`
- **Framework preset:** none / static

If you deploy with Cloudflare Pages Functions, the `functions/` directory can power the `/api/*` endpoints used by the demo.

## Notes

- The ROI logic is isolated in `src/js/roi.js` and covered by tests.
- `assets/og.png` is used for the social preview image.
- The site is designed to be edited quickly for other service businesses by swapping the copy, pricing, and templates.

