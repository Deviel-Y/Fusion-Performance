# Fusion Performance

A bilingual (English/Persian) marketing and lead-generation site for Fusion Performance, built with Next.js App Router.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [next-intl](https://next-intl.dev) for `[locale]`-based internationalization (`en`, `fa`)
- [Tailwind CSS 4](https://tailwindcss.com)
- [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) for form validation
- [TanStack Query](https://tanstack.com/query) for data fetching
- [Zustand](https://zustand-demo.pmnd.rs) for client state
- [Motion](https://motion.dev) for animations

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Locales are served under `/en` and `/fa`.

## Project Structure

```
src/
├── app/[locale]/       # Localized routes (layout, page, loading, error)
├── components/
│   ├── layout/         # Page sections (Navbar, Hero, Services, Footer, ...)
│   ├── feature/        # Feature components (e.g. LeadForm)
│   └── ui/             # Reusable UI primitives
├── i18n/               # next-intl routing/navigation/request config
├── hooks/              # Custom hooks
├── libs/               # Shared providers/utilities
├── constants/          # App-wide constants
├── types/              # Shared TypeScript types
└── utils/              # Utility functions
messages/
├── en.json             # English translations
└── fa.json             # Persian translations
```

## Available Scripts

- `npm run dev` — start the development server
- `npm run build` — build for production
- `npm run start` — run the production build
- `npm run lint` — run ESLint

## Deployment

This project is deployed on [Vercel](https://vercel.com): https://fusion-performance.vercel.app

To deploy a new version manually:

```bash
npx vercel --prod
```
