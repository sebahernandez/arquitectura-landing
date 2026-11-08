# Northline Atelier (demo site by Kreadium)

One-page demo website for a **fictional** architecture and interiors studio. Part of Kreadium's commercial demo catalog. Nothing here is a real business; the form sends nothing, the chat and testimonials are simulated.

Stack: Astro 7, Tailwind CSS v4 (`@tailwindcss/vite`), TypeScript (strict), GSAP (reveal only), Lucide icons, self-hosted fonts (Newsreader + Jost via `@fontsource`).

## Run

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve dist/
npm run check     # astro check (types)
```

## Structure

- `src/data/` typed content (nav, projects, services, stats, faq, process, team, testimonials, contact)
- `src/components/{layout,ui,sections}` reusable pieces
- `src/assets/images/` Unsplash photos (processed by `astro:assets`)
- `public/` favicon, robots.txt, og.jpg

Site URL for sitemap/canonical is set in `astro.config.mjs` and `src/data/contact.ts`.
