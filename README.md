# Nicola Guglielmi — Personal Portfolio

A personal portfolio website for **Nicola Guglielmi**, an IT & Telecommunications student from Andria, Italy. The design is inspired by elegant, minimalist tennis aesthetics — Centre Court, Wimbledon, Roland Garros — translated into a professional portfolio rather than a fan site: court-line dividers, a Wimbledon-green and chalk-cream palette, and skills/stats presented as a tennis scoreboard.

🔗 **Live demo:** add your GitHub Pages URL here once deployed (e.g. `https://yourusername.github.io/nicola-portfolio/`)

---

## Description

This is a static, single-page portfolio covering:

- **Hero** — name, role, and a short intro
- **About** — background and quick stats
- **Experience** — example placeholder entries (replace with real ones)
- **Education** — real data from the CV (ITT Sen. O. Jannuzzi, Andria)
- **Skills** — programming languages, web tools, a DigComp 2.1 self-assessment, and languages, shown as animated scoreboard-style bars
- **Certifications** — empty "trophy cabinet" placeholder state, ready to be filled in
- **Projects** — two clearly-marked example projects plus the portfolio site itself
- **Tennis Philosophy** — the throughline connecting tennis discipline to software craft, with a short Roger Federer quote
- **Contact** — info list, social links, and a front-end-only contact form
- **Footer** — the Court Philippe-Chatrier motto, "Victory belongs to the most tenacious"

Every section that doesn't yet have real content (Experience, Certifications, two of the three Projects) is **clearly marked** with a "Placeholder" / "Example" tag so it's obvious what to replace before publishing for real.

---

## Technologies

- **HTML5** — semantic markup, SEO meta tags, Open Graph tags
- **CSS3** — custom properties (design tokens), Grid & Flexbox, no framework
- **Vanilla JavaScript** — no dependencies, no build step

No React, no Tailwind, no bundler. Everything runs directly in the browser.

---

## Installation (run locally)

You don't need Node.js or any build tools. Pick one:

**Option A — just open the file**
```bash
# from the project folder
open index.html        # macOS
start index.html        # Windows
xdg-open index.html      # Linux
```

**Option B — local server (recommended, avoids any path quirks)**
```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000

# or, with Node installed
npx serve .
```

---

## Deploy on GitHub Pages

1. **Create a repository** on GitHub (e.g. `nicola-portfolio`) and push this project's contents to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/nicola-portfolio.git
   git push -u origin main
   ```
2. On GitHub, open your repository → **Settings** → **Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Set **Branch** to `main` and the folder to `/ (root)`, then **Save**.
5. Wait a minute or two — GitHub will publish your site at:
   `https://yourusername.github.io/nicola-portfolio/`
6. (Optional) Add a custom domain under the same Pages settings if you have one.

Because this is a fully static site (no build step), GitHub Pages can serve it directly — no extra configuration needed.

---

## Customization

### 1. Replace placeholder content
Search `index.html` for the following markers and update them:
- `[Company Name]`, `[Client or Project]` — in the **Experience** section
- `your.email@example.com`, `github.com/yourusername`, `linkedin.com/in/yourusername` — in **Contact** and the **footer**
- The three `[ Add a certification ]` cards in **Certifications**
- The two "Example" project cards in **Projects** (`Campus Task Tracker`, `Match Logger`)

### 2. Swap the profile photo
Replace `assets/images/avatar-placeholder.svg` with a real photo (e.g. `profile.jpg`) and update the `src` on the `<img>` tag inside the `#about` section in `index.html`. A square image (at least 600×600px) works best, since it's cropped into a circle with `border-radius: 50%`.

### 3. Wire up the contact form
The form in `#contact` is front-end only — it shows a success message but doesn't send anything. To make it functional:
- The easiest option: point the form at a service like [Formspree](https://formspree.io/) (`<form action="https://formspree.io/f/yourFormId" method="POST">`)
- Or replace it with a simple `mailto:` link
- Or wire `script.js`'s submit handler up to your own backend with `fetch()`

### 4. Update colors, fonts, or spacing
All design tokens live at the top of `style.css` inside `:root` (light theme) and `[data-theme='dark']` (dark theme) — change a hex value once and it updates everywhere it's used.

### 5. Add or reorder sections
Each section in `index.html` is a self-contained `<section class="section ..." id="...">`. Duplicate one, give it a new `id`, and add a matching link in the `.nav-links` nav in the header.

### 6. SEO & social preview
Update the `<title>`, `<meta name="description">`, and Open Graph tags in `index.html`'s `<head>`. Add a real `assets/images/og-image.jpg` (1200×630px recommended) for link previews on social media.

---

## Project structure

```
.
├── index.html              # All page markup & content
├── style.css                # Design tokens + all styling (light & dark themes)
├── script.js                 # Navbar, dark mode, scroll reveals, skill bars, form demo
├── assets/
│   ├── images/
│   │   └── avatar-placeholder.svg   # Swap for a real photo
│   └── icons/
│       └── favicon.svg              # Site favicon (tennis-ball line art)
└── README.md
```

---

## Accessibility & performance notes

- Skip-to-content link, visible focus states, and semantic landmarks throughout
- Respects `prefers-reduced-motion` (animations are disabled for users who request it)
- Dark mode follows the OS preference by default and remembers manual choice via `localStorage`
- No external JS dependencies — fast to load, nothing to break

---

*"Victory belongs to the most tenacious."*
