<div align="center">
<img width="1200" height="475" alt="Praeto Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

<div align="center">

# Praeto Risk & Insurance — Marketing Website

**React · Vite · TypeScript · Tailwind CSS · Firebase Hosting**

[![Live Site](https://img.shields.io/badge/Live-praeto.co.za-gold?style=flat-square&logo=firebase)](https://praeto.co.za)
[![FSCA Licensed](https://img.shields.io/badge/FSCA-Licensed-black?style=flat-square)](https://praeto.co.za)
[![B-BBEE Level 1](https://img.shields.io/badge/B--BBEE-Level%201-darkgreen?style=flat-square)](https://praeto.co.za)

</div>

---

## Overview

This repository contains the front-end marketing site for **Praeto Risk & Insurance Management Solutions** — a Level 1 B-BBEE, FSCA-licensed brokerage founded in 1998 and managing over R20bn AUM.

The site is a single-page application built with **React 19 + Vite** and styled with **Tailwind CSS**. It includes an interactive quote request form, animated statistics, a product solutions section (personal & business), client testimonials, and a POPIA-compliant consent flow.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 3 |
| Hosting | Firebase Hosting |
| Icons | Font Awesome 6 (CDN) |

---

## Project Structure

```
praeto-risk-and-insurance/
├── public/               # Static assets (logo, hero image)
├── components/           # Reusable UI components
│   ├── Header.tsx
│   ├── AnimatedStat.tsx
│   ├── FadeIn.tsx
│   ├── Cursor.tsx
│   └── Partners.tsx
├── App.tsx               # Main page composition
├── constants.ts          # Company details, products, testimonials
├── index.tsx             # App entry point
└── backend/              # Express/Node API (quote handling)
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

### Environment Variables

Create a `.env.local` file in the project root to override defaults:

```env
# Quote form submission endpoint (defaults to https://submit-form.com/your-form-id)
VITE_QUOTE_ENDPOINT=https://your-form-endpoint.com/form-id
```

---

## Deployment

The site is hosted on **Firebase Hosting** and served at:

| URL | Purpose |
|---|---|
| [praeto.co.za](https://praeto.co.za) | Primary custom domain |
| [www.praeto.co.za](https://www.praeto.co.za) | www redirect |
| [praeto-web.web.app](https://praeto-web.web.app) | Firebase default domain |

### Deploy Steps

```bash
# 1. Install the Firebase CLI (once)
npm install -g firebase-tools

# 2. Authenticate
npx firebase login

# 3. Select the project
npx firebase use praeto-web

# 4. Build and deploy
npm run build
firebase deploy --only hosting
```

---

## Quote Form

The quote form collects name, email, phone number, cover type, and an optional message. It includes a **POPIA consent checkbox** as required by South African data protection law.

Submissions are sent via `POST` to the endpoint defined in `VITE_QUOTE_ENDPOINT`. Replace the default placeholder URL in `.env.local` with your email provider or form backend endpoint before going live.

---

## Assets

Place the following files in the `public/` folder — Vite serves them at the root path with no configuration required:

| File | Usage |
|---|---|
| `public/praeto-logo.png` | Full logo displayed in the hero section |
| `public/praeto-word.png` | Wordmark used in the footer |
| `public/hero.png` | Background image for the hero section |

---

## License

Private — all rights reserved. © Praeto Risk & Insurance Management Solutions.
