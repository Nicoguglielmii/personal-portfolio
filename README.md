# Nicola Guglielmi — Personal Portfolio

> *"Un punto alla volta." / "One point at a time."*

**Live →** [nicoguglielmii.github.io/personal-portfolio](https://nicoguglielmii.github.io/personal-portfolio/)

---

## 🇮🇹 Italiano

### Panoramica

Portfolio personale di **Nicola Guglielmi**, studente di Informatica e Telecomunicazioni da Andria (BT), Puglia. Il sito è costruito interamente in HTML, CSS e JavaScript vanilla — zero dipendenze, zero build step — e si ispira alla filosofia del tennis agonistico: disciplina, ripetizione e nessuna scorciatoia.

### Caratteristiche principali

| Funzionalità | Descrizione |
|---|---|
| **Dual Court System** | Due temi selezionabili: Wimbledon (verde, erba, eleganza britannica) e Roland Garros (rosso terra, densità, tenacia). Il tema persiste tra sessioni via `localStorage`. |
| **Bilingue IT / EN** | Ogni testo del sito è disponibile in italiano e inglese. La lingua si cambia con un click e persiste via `localStorage`. |
| **Stat card interattive** | Le quattro statistiche nella sezione "Chi sono" si girano (flip 3D) al click, rivelando un dettaglio diverso per ogni tema di campo. |
| **Quote badge rivelabile** | La citazione nel profilo è nascosta e si svela al tap — ogni campo ha la propria citazione distintiva. |
| **Score call dinamica** | Nella sezione Ranking, l'ultima card mostra *"Game · Set · Match"* su Wimbledon e *"Jeu-set-match"* su Roland Garros. |
| **Campo tennis interattivo** | Selezionando una tappa del percorso, la pallina si sposta sul campo SVG e aggiorna il punteggio. |
| **Score Strip** | Barra di navigazione fissa che mostra l'avanzamento nella pagina come un set in corso. |
| **Scroll reveal** | Animazioni di entrata al scroll basate su `IntersectionObserver`. |
| **Ottimizzato per mobile** | Layout responsive su tutti i breakpoint. Navbar e campo tennis adattati per schermi piccoli (≥ 320px). |

### Struttura del progetto

```
personal-portfolio/
├── index.html          ← struttura e contenuto
├── style.css           ← sistema di design, temi, responsive
├── script.js           ← logica interattiva, dual court, lingua
├── assets/
│   ├── images/
│   │   ├── avatar-placeholder.svg
│   │   ├── wimbledon.jpg
│   │   └── roland-garros.jpg
│   └── icons/
│       └── favicon.svg
└── Nicola-Guglielmi-CV.pdf
```

### Sistema Dual Court

Il cambio tema è gestito dall'attributo `data-court="rg"` sull'elemento `<html>`. Tutti gli stili Roland Garros sono override in `[data-court='rg'] { ... }`.

| | Wimbledon | Roland Garros |
|---|---|---|
| **Palette** | Crema `#F6F4EC` / Verde `#0E5C2D` | Blu notte `#1C2A40` / Rosso terra `#C24E2B` |
| **Font display** | Fraunces (serif ottico) | Space Mono (monospace) |
| **Font body** | Inter (sans-serif) | EB Garamond (serif classico) |
| **Card style** | Bordi sottili, angoli netti, ombra silenziosa | Bordi 2px, angoli arrotondati, ombra offset 4–6px |
| **Velocità transizioni** | 150ms (erba = scatto) | 280ms (terra = costruzione) |
| **Score finale** | Game · Set · Match | Jeu-set-match |
| **Hero text** | Precisione, velocità, reattività | Resistenza, costruzione, perseveranza |

### Sistema di lingua

Ogni elemento con attributi `data-it` / `data-en` viene aggiornato automaticamente al cambio lingua da `applyLang()`. I testi dinamici (Hero, Chi sono, Filosofia, Stats, back delle stat card) vengono iniettati da `applyCourt()` tramite l'oggetto `COURTS` in `script.js`.

### Sezioni

| Ancora | Metafora | Contenuto |
|---|---|---|
| `#hero` | Ingresso in campo | H1 + ruolo + player card |
| `#about` | Profilo atleta | Bio + stat card interattive + quote badge |
| `#experience` | Ranking / Centre Court | Campo SVG con pallina + tappe del percorso |
| `#education` | Tabellone del torneo | Timeline accademica |
| `#skills` | Scoreboard | Skill bar + DigComp + lingue |
| `#certifications` | Bacheca trofei | 8 certificazioni Cisco/Cambridge/altro |
| `#projects` | Match | 3 progetti con case study |
| `#philosophy` | Filosofia | Testo + citazioni tennistiche |
| `#contact` | Match Point | Email + GitHub + CV |

### Font caricati

```
Fraunces     — display Wimbledon (serif ottico variabile, opsz 9–144)
EB Garamond  — body Roland Garros (serif classico, italic nativo)
Inter        — body Wimbledon (sans-serif di sistema)
Space Mono   — display Roland Garros + elementi mono (score, chip, meta)
```

### Deploy

```bash
git add .
git commit -m "update"
git push
```

GitHub Pages pubblica automaticamente dal branch `main`. Nessun build step richiesto.

---

## 🇬🇧 English

### Overview

Personal portfolio of **Nicola Guglielmi**, an IT & Telecommunications student from Andria (BT), Puglia, Italy. Built entirely in HTML, CSS and vanilla JavaScript — zero dependencies, zero build step — inspired by the philosophy of competitive tennis: discipline, repetition, no shortcuts.

### Key Features

| Feature | Description |
|---|---|
| **Dual Court System** | Two selectable themes: Wimbledon (green, grass, British elegance) and Roland Garros (clay red, density, tenacity). Theme persists between sessions via `localStorage`. |
| **Bilingual IT / EN** | Every text on the site is available in Italian and English. Language switches on click and persists via `localStorage`. |
| **Interactive stat cards** | The four statistics in the "About" section flip (3D) on click, revealing different detail text per court theme. |
| **Revealable quote badge** | The quote in the profile is hidden and reveals on tap — each court has its own distinctive quote. |
| **Dynamic score call** | In the Ranking section, the last card shows *"Game · Set · Match"* on Wimbledon and *"Jeu-set-match"* on Roland Garros. |
| **Interactive tennis court** | Selecting a milestone moves the ball on the SVG court and updates the score. |
| **Score Strip** | Fixed navigation bar showing page progress like a live set score. |
| **Scroll reveal** | `IntersectionObserver`-based entrance animations on scroll. |
| **Mobile optimised** | Responsive layout across all breakpoints. Navbar and tennis court adapted for small screens (≥ 320px). |

### Project Structure

```
personal-portfolio/
├── index.html          ← structure and content
├── style.css           ← design system, themes, responsive
├── script.js           ← interactive logic, dual court, language
├── assets/
│   ├── images/
│   │   ├── avatar-placeholder.svg
│   │   ├── wimbledon.jpg
│   │   └── roland-garros.jpg
│   └── icons/
│       └── favicon.svg
└── Nicola-Guglielmi-CV.pdf
```

### Dual Court System

Theme switching is managed by the `data-court="rg"` attribute on the `<html>` element. All Roland Garros styles are overrides in `[data-court='rg'] { ... }`.

| | Wimbledon | Roland Garros |
|---|---|---|
| **Palette** | Cream `#F6F4EC` / Green `#0E5C2D` | Midnight blue `#1C2A40` / Clay red `#C24E2B` |
| **Display font** | Fraunces (optical serif) | Space Mono (monospace) |
| **Body font** | Inter (sans-serif) | EB Garamond (classical serif) |
| **Card style** | Thin borders, sharp corners, quiet shadow | 2px borders, rounded corners, 4–6px offset shadow |
| **Transition speed** | 150ms (grass = snap) | 280ms (clay = build) |
| **Final score call** | Game · Set · Match | Jeu-set-match |
| **Hero text** | Precision, speed, reactivity | Endurance, construction, perseverance |

### Language System

Every element with `data-it` / `data-en` attributes is automatically updated on language change by `applyLang()`. Dynamic texts (Hero, About, Philosophy, Stats, stat card backs) are injected by `applyCourt()` through the `COURTS` object in `script.js`.

### Sections

| Anchor | Metaphor | Content |
|---|---|---|
| `#hero` | Walking onto court | H1 + role + player card |
| `#about` | Athlete profile | Bio + interactive stat cards + quote badge |
| `#experience` | Ranking / Centre Court | SVG court with ball + career milestones |
| `#education` | Tournament draw | Academic timeline |
| `#skills` | Scoreboard | Skill bars + DigComp + languages |
| `#certifications` | Trophy cabinet | 8 Cisco/Cambridge/other certifications |
| `#projects` | Matches | 3 projects with case studies |
| `#philosophy` | Philosophy | Text + tennis quotes |
| `#contact` | Match Point | Email + GitHub + CV |

### Fonts loaded

```
Fraunces     — Wimbledon display (variable optical serif, opsz 9–144)
EB Garamond  — Roland Garros body (classical serif, native italic)
Inter        — Wimbledon body (system sans-serif)
Space Mono   — Roland Garros display + mono elements (score, chips, meta)
```

### Deploy

```bash
git add .
git commit -m "update"
git push
```

GitHub Pages publishes automatically from the `main` branch. No build step required.

---

## Changelog

| Version | Changes |
|---|---|
| `v1.2` | Interactive stat cards (3D flip), revealable quote badge, *Jeu-set-match* on Roland Garros, court-specific Stats subtitle, mobile navbar and tennis court layout fixes |
| `v1.1` | Dual Court System, bilingual IT/EN, Score Strip scroll spy, philosophy section |
| `v1.0` | Initial release — hero, about, experience, skills, certifications, projects, contact |

---

<div align="center">
  <sub>Built with HTML, CSS &amp; vanilla JS · Zero dependencies · Zero build step</sub><br>
  <sub>Realizzato con HTML, CSS e JS vanilla · Zero dipendenze · Zero build step</sub>
</div>
