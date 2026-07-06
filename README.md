# itschekuri.com

Personal website for Raja Vamsi Chekuri, built as the digital headquarters for itschekuri: technology consulting, business solution design, AI adoption, implementation guidance, and professional insights.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Vercel-ready deployment

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

The dev script uses polling so it works reliably on machines that hit file-watcher limits.

## Production Check

```bash
npm run build
npm run start
```

## Deploying To Vercel

Recommended workflow:

1. Create a GitHub repository for this folder.
2. Push the code to GitHub.
3. Go to Vercel and choose **Add New Project**.
4. Import the GitHub repository.
5. Keep the default Next.js settings:
   - Framework Preset: `Next.js`
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: leave blank
6. Add the custom domain `itschekuri.com` in Vercel project settings.
7. Update the DNS records wherever the domain is registered, using the records Vercel gives you.

After that, every push to the main branch deploys automatically.

## Updating The Website

Most personal content lives in:

```text
data/site.ts
```

Edit that file to update:

- Name, email, site description
- Navigation links
- Social links
- Interests
- Tech stack
- Projects
- Blog cards
- Timeline
- Current experiments

Page layouts live in:

```text
app/page.tsx
app/about/page.tsx
app/projects/page.tsx
app/blog/page.tsx
app/contact/page.tsx
app/resume/page.tsx
app/uses/page.tsx
app/labs/page.tsx
app/speaking/page.tsx
```

Reusable UI lives in:

```text
components/
```

Images and public assets live in:

```text
public/
```

## Safe Update Workflow

1. Make your edits.
2. Run:

```bash
npm run build
```

3. Commit and push to GitHub.
4. Vercel deploys the update automatically.

For quick content changes, start with `data/site.ts`. For bigger design or layout changes, edit the page files and components.

## Useful Commands

```bash
npm run dev
npm run build
npm run start
```
