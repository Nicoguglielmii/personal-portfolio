![Status](https://img.shields.io/badge/status-live-1f7a4d) ![Stack](https://img.shields.io/badge/stack-HTML%20%C2%B7%20CSS%20%C2%B7%20JS-b5602e) ![Lang](https://img.shields.io/badge/lang-IT%20%2F%20EN-b3923f) ![Deps](https://img.shields.io/badge/dependencies-zero-1a1d1a)

🇬🇧 **English** | 🇮🇹 **Italiano**

* [English](#-english)
* [Italiano](#-italiano)

# Nicola Guglielmi — Personal Portfolio 🎾

> Tennis isn't a theme here, it's the structure. Career is a ranking, skills are a scoreboard, certifications are a trophy cabinet, every project is a match with its own case study — and a slim scoreline tracks which "game" you're currently reading.
>
> Il tennis qui non è un tema, è la struttura. La carriera è un ranking, le competenze sono uno scoreboard, le certificazioni sono una bacheca trofei, ogni progetto è un match con un proprio case study — e una scoreline sottile segue in quale "game" ti trovi.

🔗 **Live:** https://nicoguglielmii.github.io/personal-portfolio/

---

# 🇬🇧 English

## About

I'm **Nicola Guglielmi**, an IT & Telecommunications student from **Andria, Italy**. I build software the same way I play a match: read the situation, execute, and when something doesn't work — try again. Better, not harder.

## Site map

The whole site reads as a single match told in scroll. Every nav label matches the language already used in each section's eyebrow — no gap between menu and content.

| # | Section | id | What it actually is |
|---|---|---|---|
| — | Hero | `#hero` | Player card — identity, current focus, languages |
| 01 | Profile | `#about` | Who I am, outside the resume |
| 02 | Ranking | `#experience` | Interactive **Centre Court** — career entries plotted as points on a court; tap one to send the ball there |
| 03 | Draw | `#education` | Academic path as a tournament draw — round in progress, rounds still to come |
| 04 | Scoreboard | `#skills` | Self-assessed skill bars, language proficiency, DigComp 2.1 self-assessment |
| 05 | Trophies | `#certifications` | Certifications earned, with downloadable proof |
| 06 | Matches | `#projects` | Each project as a 4-part case study: **context → technical decision → execution → result** |
| 07 | Philosophy | `#philosophy` | Why tennis and software share a mindset — with Federer and Sinner |
| 08 | Match Point | `#contact` | Get in touch |

## Features

🏟️ **Interactive Centre Court / Court Philippe-Chatrier** — career entries as points on a vertical tennis court (green for Wimbledon, clay for Roland Garros); clicking a card triggers a live score animation (15–0 → 30–0 → 40–0 → Game · Set · Match).

📊 **Score Strip** — a slim, sticky progress line under the navbar. Sections you've scrolled past go green (or orange at Roland Garros), the current one lights up and expands to show its name, the rest stay collapsed to a bare number. Built on the same `IntersectionObserver` already used for scroll reveals — no new dependency.

🎾 **Dual Court theme** — switch between **Wimbledon** (light green palette) and **Roland Garros** (dark brown / clay palette) with a single button. The court name in the Ranking section, the footer photo, and all accent colours update instantly.

🌍 **Bilingual IT/EN** — every string toggles live via `data-it` / `data-en` attributes, no reload.

🎾 **Tennis philosophy section** — where sport discipline and engineering discipline meet.

📱 **Fully responsive**, down to mobile — the Score Strip scrolls horizontally on small screens instead of duplicating markup.

✨ **Micro-interactions** — click ripple, mouse-following 3D tilt on the player card, animated count-up stats — all respecting `prefers-reduced-motion`.

♿ **Accessible by default** — skip-to-content link, visible focus states, semantic landmarks, `aria-label`s on icon-only controls.

## Screenshots

> Replace these placeholders with real captures before publishing — `assets/images/screenshots/`.

| Hero | Centre Court | Projects |
|---|---|---|
| ![Hero section](assets/images/screenshots/hero.png) | ![Interactive Centre Court](assets/images/screenshots/centre-court.png) | ![Project case studies](assets/images/screenshots/projects.png) |

| Light mode | Dark mode |
|---|---|
| ![Light theme](assets/images/screenshots/light.png) | ![Dark theme](assets/images/screenshots/dark.png) |

## Design system

| Token / pattern | Role |
|---|---|
| `--font-display` (Fraunces) | Section titles and hero only |
| `--font-body` (Inter) | Body copy |
| `--font-mono` (Space Mono) | Reserved for "match data": scores, percentages, dates, project indices, Score Strip |
| `--accent` green | Wimbledon theme — brand identity, primary CTAs |
| `--accent` clay | Roland Garros theme — active state, never decorative |
| `--color-gold` | Trophies / achievement context |
| `.score-panel` | Player-card component (hero) |
| `.cc-field` / `.cc-entry` | Centre Court career timeline — vertical SVG court, score animation |
| `.cc-score-badge` | Live score badge per card (15–0 → 30–0 → 40–0 → Game) |
| `.skills-board` / `.skill-row` | Scoreboard skill bars |
| `.project-card` / `.case-study` | Match case study |
| `.score-strip-item` | Scoreline step (Score Strip) |
| `.court-divider` | Recurring section divider (line + ball) |

## Technologies

Built from scratch, zero dependencies:

* **HTML5** — semantic structure, SEO metadata
* **CSS3** — custom design system, variables, Grid/Flexbox, animations
* **JavaScript (Vanilla)** — interactions, theming, language toggle, scroll-spy, scroll reveal

## Project structure

```text
personal-portfolio/
│
├── index.html        # Site structure
├── style.css         # Design system and styling
├── script.js         # Interactivity
│
├── assets/
│   ├── images/         # Images and visual assets
│   ├── certificates/   # Downloadable PDF certificates
│   └── icons/          # Site icons
│
└── README.md
```

## Run locally

```bash
git clone https://github.com/Nicoguglielmii/personal-portfolio.git
cd personal-portfolio
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

Deployed via **GitHub Pages**. Every push to `main` publishes automatically.

## Philosophy

> "The work never stops." — Jannik Sinner

> "You have to believe in the long term plan you have but you need the short term goals to motivate and inspire you." — Roger Federer

Build consistently. Improve every day. Trust the process.

## Author

**Nicola Guglielmi** — IT & Telecommunications Student, Andria, Italy
GitHub: https://github.com/Nicoguglielmii · Portfolio: https://nicoguglielmii.github.io/personal-portfolio/

## Contact

Open to internships, school-work placements, and small freelance collaborations.

* 📧 **Email:** [nicolaguglielmii09k@gmail.com](mailto:nicolaguglielmii09k@gmail.com)
* 💻 **GitHub:** [github.com/Nicoguglielmii](https://github.com/Nicoguglielmii)
* 🌐 **Live site:** [nicoguglielmii.github.io/personal-portfolio](https://nicoguglielmii.github.io/personal-portfolio/)
* 📍 **Based in:** Andria (BT), Apulia, Italy

---

*"Victory belongs to the most tenacious."*

---

# 🇮🇹 Italiano

## Chi sono

Sono **Nicola Guglielmi**, studente di Informatica e Telecomunicazioni di **Andria, Italia**. Costruisco software con lo stesso metodo con cui gioco un match: leggo la situazione, eseguo, e se qualcosa non funziona riprovo. Meglio, non più forte.

## Mappa del sito

L'intero sito si legge come un match raccontato in scroll. Ogni etichetta di navigazione coincide col linguaggio già usato negli eyebrow di sezione — nessun disallineamento tra menu e contenuto.

| # | Sezione | id | Cosa rappresenta davvero |
|---|---|---|---|
| — | Hero | `#hero` | Scheda giocatore — identità, focus attuale, lingue |
| 01 | Profilo | `#about` | Chi sono, oltre il curriculum |
| 02 | Ranking | `#experience` | **Centre Court** interattivo — le esperienze come punti su un campo; tocca una voce per mandare lì la pallina |
| 03 | Tabellone | `#education` | Il percorso accademico come tabellone di un torneo — turno in corso, turni ancora da disputare |
| 04 | Scoreboard | `#skills` | Competenze autovalutate, livello linguistico, autovalutazione DigComp 2.1 |
| 05 | Trofei | `#certifications` | Certificazioni conseguite, con attestati scaricabili |
| 06 | Match | `#projects` | Ogni progetto come case study in 4 parti: **contesto → decisione tecnica → esecuzione → risultato** |
| 07 | Filosofia | `#philosophy` | Dove disciplina sportiva e disciplina ingegneristica si incontrano, con Federer e Sinner |
| 08 | Match Point | `#contact` | Contattami |

## Caratteristiche

🏟️ **Centre Court / Court Philippe-Chatrier interattivo** — le esperienze come punti su un campo da tennis verticale (verde per Wimbledon, terra per Roland Garros); cliccando una card parte un'animazione del punteggio (15–0 → 30–0 → 40–0 → Game · Set · Match).

📊 **Score Strip** — una riga sottile e sticky sotto la navbar. Le sezioni già scrollate si colorano con il colore del campo, quella attuale si accende ed espande il proprio nome, le altre restano numeri compatti. Costruita sullo stesso `IntersectionObserver` già usato per le reveal in scroll — nessuna nuova dipendenza.

🎾 **Doppio tema campo** — passa da **Wimbledon** (palette verde chiaro) a **Roland Garros** (palette marrone scuro / terra) con un solo pulsante. Il nome del campo nella sezione Ranking, la foto nel footer e tutti i colori di accento si aggiornano in tempo reale.

🌍 **Bilingue IT/EN** — ogni stringa cambia live tramite attributi `data-it` / `data-en`, senza ricaricare.

🎾 **Sezione filosofia del tennis** — dove disciplina sportiva e disciplina ingegneristica si incontrano.

📱 **Completamente responsive**, fino al mobile — lo Score Strip scorre orizzontalmente sugli schermi piccoli invece di duplicare markup.

✨ **Micro-interazioni** — ripple al click, tilt 3D sulla scheda giocatore, numeri animati — tutto nel rispetto di `prefers-reduced-motion`.

♿ **Accessibile di default** — skip-link, stati di focus visibili, landmark semantici, `aria-label` sui controlli a sola icona.

## Screenshot

> Sostituisci questi placeholder con catture reali prima della pubblicazione — `assets/images/screenshots/`.

| Hero | Centre Court | Progetti |
|---|---|---|
| ![Sezione hero](assets/images/screenshots/hero.png) | ![Centre Court interattivo](assets/images/screenshots/centre-court.png) | ![Case study progetti](assets/images/screenshots/projects.png) |

| Tema chiaro | Tema scuro |
|---|---|
| ![Tema chiaro](assets/images/screenshots/light.png) | ![Tema scuro](assets/images/screenshots/dark.png) |

## Design system

| Token / pattern | Ruolo |
|---|---|
| `--font-display` (Fraunces) | Solo titoli di sezione e hero |
| `--font-body` (Inter) | Corpo del testo |
| `--font-mono` (Space Mono) | Riservato ai "dati di partita": punteggi, percentuali, date, indici progetto, Score Strip |
| `--color-green` | Identità di brand, CTA primarie |
| `--color-clay` | Stato attivo — Score Strip, voce attiva del Centre Court — mai decorativo |
| `--color-gold` | Contesto trofei / risultati |
| `.score-panel` | Componente scheda-giocatore (hero) |
| `.cc-field` / `.cc-entry` | Timeline carriera — Centre Court |
| `.skills-board` / `.skill-row` | Barre skill in stile scoreboard |
| `.project-card` / `.case-study` | Case study dei match |
| `.score-strip-item` | Step della scoreline (Score Strip) |
| `.court-divider` | Separatore di sezione ricorrente (linea + pallina) |

## Tecnologie

Realizzato da zero, zero dipendenze:

* **HTML5** — struttura semantica, metadati SEO
* **CSS3** — design system personalizzato, variabili, Grid/Flexbox, animazioni
* **JavaScript (Vanilla)** — interazioni, tema, cambio lingua, scroll-spy, scroll reveal

## Struttura del progetto

```text
personal-portfolio/
│
├── index.html        # Struttura del sito
├── style.css         # Design system e stile
├── script.js         # Interattività
│
├── assets/
│   ├── images/         # Immagini e risorse visive
│   ├── certificates/   # Attestati PDF scaricabili
│   └── icons/          # Icone del sito
│
└── README.md
```

## Esecuzione locale

```bash
git clone https://github.com/Nicoguglielmii/personal-portfolio.git
cd personal-portfolio
python -m http.server 8000
```

Poi apri `http://localhost:8000`.

## Deployment

Distribuito tramite **GitHub Pages**. Ogni push su `main` pubblica automaticamente.

## Filosofia

> "The work never stops." — Jannik Sinner

> "You have to believe in the long term plan you have but you need the short term goals to motivate and inspire you." — Roger Federer

Costruire con costanza. Migliorare ogni giorno. Fidarsi del processo.

## Autore

**Nicola Guglielmi** — Studente di Informatica e Telecomunicazioni, Andria, Italia
GitHub: https://github.com/Nicoguglielmii · Portfolio: https://nicoguglielmii.github.io/personal-portfolio/

## Contatti

Aperto a stage, tirocini scuola-lavoro e piccole collaborazioni freelance.

* 📧 **Email:** [nicolaguglielmii09k@gmail.com](mailto:nicolaguglielmii09k@gmail.com)
* 💻 **GitHub:** [github.com/Nicoguglielmii](https://github.com/Nicoguglielmii)
* 🌐 **Sito live:** [nicoguglielmii.github.io/personal-portfolio](https://nicoguglielmii.github.io/personal-portfolio/)
* 📍 **Sede:** Andria (BT), Puglia, Italia

---

*"La vittoria appartiene ai più tenaci."*