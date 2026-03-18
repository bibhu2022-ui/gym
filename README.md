# APEX Elite Fitness — React + Tailwind CSS

A production-ready gym website built with **React 18**, **Vite**, and **Tailwind CSS v3**.

---

## Project Structure

```
apex-gym/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx          ← App entry point
    ├── App.jsx           ← Root component
    ├── index.css         ← Tailwind + global styles
    ├── data/
    │   └── siteData.js   ← All content (classes, trainers, pricing, etc.)
    ├── hooks/
    │   └── useScrollReveal.js  ← Scroll reveal, nav scroll, active section
    └── components/
        ├── UI.jsx         ← Shared UI primitives (buttons, headings, monogram)
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Classes.jsx
        ├── ScheduleStrip.jsx
        ├── Trainers.jsx
        ├── Pricing.jsx
        ├── Testimonials.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start dev server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

---

## Customising Content

All site content lives in **`src/data/siteData.js`** — edit the exported arrays:

| Export | What it controls |
|---|---|
| `NAV_LINKS` | Navigation items |
| `STATS` | Hero stats strip (members, locations, etc.) |
| `CLASSES` | Class cards (title, desc, duration, level) |
| `TRAINERS` | Trainer cards (name, role, bio, tags) |
| `PLANS` | Pricing tiers (price, features, badge) |
| `TESTIMONIALS` | Member quotes |
| `CONTACT_DETAILS` | Address, hours, email/phone |
| `FOOTER_COLS` | Footer link columns |

---

## Customising Design

**Colours & fonts** — edit `tailwind.config.js`:
```js
colors: {
  gold: { DEFAULT: '#b8975a', light: '#d4b07a', dark: '#8a6d38' },
  ivory: { DEFAULT: '#f5f0e8', dim: '#c8c0b0', muted: '#8a8070' },
  obsidian: { DEFAULT: '#0a0a0a', 2: '#111111', 3: '#1a1a1a' },
}
```

**Global styles** — edit `src/index.css`

**Animations** — `scrollPulse`, `fadeUp`, `shimmer` are defined in `tailwind.config.js` keyframes.

---

## Replacing Trainer Images

Each trainer card currently shows an SVG monogram placeholder. To swap in real photos:

In `src/components/UI.jsx`, replace `<TrainerMonogram />` with a standard `<img>` tag:

```jsx
// Before
<TrainerMonogram initials={trainer.initials} />

// After
<img src={trainer.image} alt={trainer.name} className="w-full object-cover aspect-[4/5]" />
```

Then add an `image` field to each trainer in `siteData.js`:
```js
{ name: 'James Reeves', image: '/images/james.jpg', ... }
```

---

## Deployment

Deploy the `dist/` folder to any static host:

- **Vercel**: `vercel --prod`
- **Netlify**: drag & drop `dist/` folder
- **GitHub Pages**: push `dist/` to `gh-pages` branch
- **Cloudflare Pages**: connect repo, build command `npm run build`, output dir `dist`

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| Vite | 5 | Build tool & dev server |
| Tailwind CSS | 3 | Utility-first styling |
| PostCSS | 8 | CSS processing |
| Autoprefixer | 10 | CSS vendor prefixes |
