# My Portfolio

Modern, responsive personal portfolio built with React.js (Vite). It showcases skills, projects, and contact information with a clean UI, smooth animations, and fast loading.

## Features

- Responsive, accessible design
- Dark/Light mode toggle
- Smooth scrolling between sections
- Sections: Hero, About, Skills, Projects, Contact
- Project cards with links to live demos and repositories
- Downloadable resume/CV
- Smooth page loader and motion transitions

## Tech Stack

- React (Vite + TypeScript)
- Tailwind CSS
- Framer Motion (animations)
- React Icons / Lucide Icons

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/chhatraraj/my_portfolio.git
   cd my_portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn
   ```

3. Run the development server
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser (Vite default).

## Scripts

- `dev`: Start local development server
- `build`: Create production build
- `preview`: Preview the production build locally

```bash
npm run dev
npm run build
npm run preview
```

## Project Structure

```
my_portfolio/
├─ index.html            # Vite entry
├─ src/
│  ├─ main.tsx          # React entry
│  ├─ root.tsx          # App composition
│  ├─ globals.css       # Global styles
│  └─ smoothScroll.ts   # Utility for smooth scrolling
├─ components/          # Reusable UI components
├─ providers/           # Context providers (e.g., ThemeProvider)
├─ lib/                 # Utilities/helpers
├─ public/              # Static assets (images, icons)
├─ tailwind.config.js   # Tailwind configuration
├─ vite.config.ts       # Vite configuration
└─ README.md
```

Your structure may vary slightly depending on how components and sections are organized.

## Configuration

- Tailwind: Ensure `tailwind.config.js` includes the correct `content` paths for `index.html`, `src`, and `components`.
- Environment variables (optional): Create `.env` or `.env.local` for any keys (e.g., analytics) and never commit it.

## Development Tips

- Keep images optimized in `public/` to improve load time.
- Prefer CSS transitions/Framer Motion variants that are performant (opacity/transform).
- Use lazy-loading for heavy images or sections when appropriate.
- Reuse components and leverage Tailwind utility classes for consistency.

## Deployment

You can deploy the Vite build output (`dist/`) to any static host:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Build and preview locally:

```bash
npm run build
npm run preview
```

## Roadmap

- Add more detailed project case studies
- Add blog/notes section
- Integrate analytics
- Improve Lighthouse scores further

## License

This project is licensed under the MIT License. See `LICENSE` for details.

## Contact

If you’d like to get in touch, feel free to open an issue or reach out via the contact section on the site.
