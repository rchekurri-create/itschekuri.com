# Update Guide

This site is intentionally simple to maintain: core content is centralized, pages are modular, and Vercel can redeploy whenever you push updates.

## Quick Content Updates

Open:

```text
data/site.ts
```

That is the main editing file for day-to-day updates.

### Add A Project

In `data/site.ts`, add a new object to `projects`:

```ts
{
  title: "Project Name",
  description: "Short description of what it does.",
  stack: ["Next.js", "TypeScript"],
  status: "Building",
  category: "AI",
  tags: ["AI", "Product"],
  github: "https://github.com/itschekuri/project",
  demo: "https://example.com",
}
```

### Add A Blog Preview

Add a new object to `posts`:

```ts
{
  title: "Article title",
  excerpt: "One or two sentence summary.",
  category: "Engineering",
  readTime: "5 min read",
  date: "Coming soon",
  featured: false,
}
```

### Update Social Links

Edit `site.socials` in `data/site.ts`.

### Update Current Focus

Edit `experiments` in `data/site.ts`.

## Bigger Website Updates

- Homepage: `app/page.tsx`
- About page: `app/about/page.tsx`
- Projects page: `app/projects/page.tsx`
- Blog page: `app/blog/page.tsx`
- Contact page: `app/contact/page.tsx`
- Shared components: `components/`
- Global styling: `app/globals.css`

## Deployment Workflow

Once connected to Vercel through GitHub:

1. Edit files locally.
2. Run `npm run build`.
3. Commit changes.
4. Push to GitHub.
5. Vercel automatically deploys the update.

## Domain Setup

In Vercel:

1. Open the project.
2. Go to **Settings -> Domains**.
3. Add `itschekuri.com`.
4. Add `www.itschekuri.com` too.
5. Copy the DNS records Vercel gives you into your domain registrar.

Vercel will issue HTTPS automatically after DNS is correct.
