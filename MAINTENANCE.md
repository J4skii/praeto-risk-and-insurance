# Praeto Website — Maintenance & Deployment Guide

## Quick Reference

| Action | Command |
|--------|---------|
| Start dev server | `npm run dev` |
| Build for production | `npm run build` |
| Deploy to live site | `firebase deploy --only hosting` |
| Push code to GitHub | `git add . && git commit -m "message" && git push origin main` |

---

## Live URLs

| URL | Purpose |
|-----|---------|
| https://praeto.co.za | Primary live site |
| https://www.praeto.co.za | www redirect |
| https://praeto-web.web.app | Firebase fallback URL |

---

## 1. Local Development

### First-time setup (only needed once)
```bash
# Install Node dependencies
npm install

# Install Firebase CLI globally (if not already installed)
npm install -g firebase-tools

# Log in to Firebase
firebase login

# Link to the correct Firebase project
firebase use praeto-web
```

### Starting the dev server
```bash
npm run dev
```
The site will be available at **http://localhost:3000** — changes are hot-reloaded automatically.

---

## 2. Making & Saving Changes

### Editing the site
- All page sections live in **`App.tsx`**
- Company details, products, stats and testimonials live in **`constants.ts`**
- Reusable components live in **`components/`**
- Static assets (logos, hero image) live in **`public/`**

### Saving changes to GitHub
Run these commands after making edits — replace the message with something descriptive:
```bash
git add .
git commit -m "describe what you changed"
git push origin main
```

---

## 3. Deploying to the Live Site

Every time you want new changes to appear on **praeto.co.za**, run these two commands in order:

### Step 1 — Build
```bash
npm run build
```
This compiles your source code into the `dist/` folder. You must do this before every deploy.

### Step 2 — Deploy
```bash
firebase deploy --only hosting
```
This uploads the `dist/` folder to Firebase Hosting. The live site updates within seconds.

### Combined one-liner
```bash
npm run build && firebase deploy --only hosting
```

---

## 4. Full Workflow (Code → GitHub → Live)

This is the recommended order when making updates:

```bash
# 1. Make your edits in the code

# 2. Test locally
npm run dev

# 3. Save to GitHub
git add .
git commit -m "your change description"
git push origin main

# 4. Build and deploy to live site
npm run build
firebase deploy --only hosting
```

---

## 5. Quote Form Endpoint

The quote form submits to the URL in `VITE_QUOTE_ENDPOINT`.

To change the endpoint, create or edit **`.env.local`** in the project root:
```env
VITE_QUOTE_ENDPOINT=https://your-form-endpoint.com/your-id
```

> Note: `.env.local` is not tracked by Git. You must recreate it if you set up on a new machine.

---

## 6. Replacing Assets

All static assets are in the `public/` folder. To update them, simply replace the file — no code changes needed.

| File | What it is |
|------|-----------|
| `public/praeto-logo.png` | Full logo (used in hero section) |
| `public/praeto-word.png` | Wordmark (used in header & footer) |
| `public/hero.png` | Hero background image |

After replacing any asset, rebuild and redeploy:
```bash
npm run build && firebase deploy --only hosting
```

---

## 7. Rolling Back a Deployment

If a deployment breaks the live site, you can roll back to a previous version instantly via the Firebase Console:

1. Go to https://console.firebase.google.com
2. Select project **praeto-web**
3. Click **Hosting** in the left menu
4. Under **Release History**, find a previous working deployment
5. Click the three-dot menu → **Rollback**

---

## 8. Firebase Project Details

| Detail | Value |
|--------|-------|
| Project ID | `praeto-web` |
| Hosting public folder | `dist/` |
| Firebase config file | `firebase.json` |
| Project alias | `default` → `praeto-web` |

---

## 9. Updating Dependencies

Periodically update npm packages to keep the site secure:
```bash
# Check for outdated packages
npm outdated

# Update all packages within allowed version ranges
npm update

# After updating, test locally before deploying
npm run dev
```

---

## 10. Troubleshooting

### "firebase: command not found"
```bash
npm install -g firebase-tools
```

### "Not logged in to Firebase"
```bash
firebase login
```

### "Wrong Firebase project"
```bash
firebase use praeto-web
```

### Build fails
Check that all files referenced in the code exist. Run `npm install` to ensure all dependencies are present.

### Changes not showing on live site
Make sure you ran `npm run build` **before** `firebase deploy`. The deploy only sends what's in `dist/` — if you didn't rebuild, the old build gets deployed.

### Local site not matching live site
Likely a missing `npm run build` step. Always build before deploying.
