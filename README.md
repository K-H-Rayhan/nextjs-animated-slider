# Nextjs Animated Slider 🚀

Stunning animated slider website built using Next.js, Framer Motion, and Tailwind CSS.

<img alt="Nextjs Animated Slider"  src="https://github.com/K-H-Rayhan/nextjs-animated-slider/assets/83538046/676e87e0-0988-4431-9c3d-354635faca93" width="100%" />

This project started as a fork of [K-H-Rayhan/nextjs-animated-slider](https://github.com/K-H-Rayhan/nextjs-animated-slider) (original slider template, all credit to the original author). This fork keeps the slider and adds a Postgres-backed feedback feature on top — see [Features](#-features) below.

## 🖥 Demo

Not currently deployed.

## ✨ Features

- The original animated slider UI (Next.js + Framer Motion + Tailwind CSS)
- **Feedback form and viewer** (added in this fork):
  - `pages/feedback.tsx` — a form to submit name/email/message
  - `pages/view-feedback.js` — lists submitted feedback
  - `pages/api/feedback.js`, `pages/api/get-feedback.js`, `pages/api/update-feedback.js`, `pages/api/delete-feedback.js` — CRUD API routes backed by Postgres
  - `lib/database.js` — a `pg` connection pool
  - A committed `feedback.db` (SQLite) file also exists in the repo from earlier experimentation; the active feedback feature uses Postgres via `pg`, not SQLite

### Environment variables

The feedback feature needs a Postgres connection string:

```bash
DATABASE_URL=postgres://user:password@host:port/database
```

Set this in a local `.env.local` file for development, or in your hosting provider's environment variables (e.g. Vercel project settings) for deployment. The database needs a `feedback` table with `name`, `email`, and `message` columns.

## 📦 Installation

```bash
git clone https://github.com/taufikhamid2000/nextjs-animated-slider.git
cd nextjs-animated-slider
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Run the production server:

```bash
npm run build && npm run start
# or
yarn build && yarn start
# or
pnpm build && yarn start
```

## 🤝 Contributing

Let's create great products together! We encourage and welcome collaboration and any type of contribution.

---

Built by [Muhammad Taufik](https://taufik.vercel.app), based on the original slider template by [K-H-Rayhan](https://github.com/K-H-Rayhan/nextjs-animated-slider)
