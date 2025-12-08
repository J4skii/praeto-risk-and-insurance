<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Praeto Risk & Insurance Site

React + Vite marketing site for Praeto Risk & Insurance, styled with Tailwind CSS.

## Run Locally

- Install dependencies: `npm install`
- Start the dev server: `npm run dev`
- Build for production: `npm run build`

## Firebase Hosting Deployment

- Ensure you are logged in: `npx firebase login`
- Create or select a Firebase project, then set the ID in `.firebaserc`
- Associate the project locally: `npx firebase use <project-id>`
- Build the site: `npm run build`
- Deploy to Hosting: `npm run deploy:firebase`

### Quote Form Endpoint

The quote form posts to `https://submit-form.com/your-form-id` by default. Replace this URL with your email/form provider’s endpoint or set `VITE_QUOTE_ENDPOINT` in `.env.local` if you use a different service.

The default hosting configuration serves files from the `dist` directory and rewrites all routes to `index.html` for SPA routing. The `deploy:firebase` script runs the build before publishing.
