# Nicola Guglielmi — Personal Portfolio

Premium tennis-mindset portfolio. Built to stand out.

**Live:** https://nicoguglielmii.github.io/personal-portfolio/

## Features
- Dual court theming (Wimbledon / Roland Garros)
- Tennis storytelling in projects
- Premium minimal design
- Bilingual (IT/EN)
- Zero dependencies

Replace files and deploy.

---

## Struttura del progetto

```
personal-portfolio/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/
│   │   ├── avatar-placeholder.svg
│   │   ├── wimbledon.jpg
│   │   └── roland-garros.jpg
│   └── icons/
│       └── favicon.svg
└── Nicola-Guglielmi-CV.pdf
```

---

## Dual Court System

Il sito ha due temi selezionabili dal bottone in navbar:

| | Wimbledon | Roland Garros |
|---|---|---|
| **Palette** | Crema / Verde scuro | Blu notte / Rosso terra |
| **Font body** | Inter (sans-serif) | EB Garamond (serif) |
| **Font display** | Fraunces (serif) | Space Mono (monospace) |
| **Stile card** | Bordi sottili, angoli netti | Bordi pesanti, angoli arrotondati, ombra offset |
| **Testi hero** | Precisione, velocità, erba | Resistenza, costruzione, terra rossa |
| **Testi about** | Forma conta quanto risultato | Commit dopo commit, nessuna scorciatoia |
| **Testi filosofia** | Federer / Sinner | Nadal / Alcaraz |

Il tema è salvato in `localStorage` e persiste tra sessioni.

---

## Sistema di lingua

Ogni elemento con attributi `data-it` / `data-en` viene aggiornato al cambio lingua.  
I testi dinamici (hero, chi sono, filosofia) vengono scritti direttamente da JS tramite `COURTS[court].heroH1_it` ecc.

La lingua è salvata in `localStorage` e persiste tra sessioni.

---

## Sezioni

| Ancora | Label (IT) | Descrizione |
|---|---|---|
| `#hero` | — | H1 + ruolo + player card |
| `#about` | Profilo | Bio + statistiche |
| `#experience` | Ranking | Campo interattivo con tappe |
| `#education` | Tabellone | Timeline accademica |
| `#skills` | Scoreboard | Barre competenze |
| `#certifications` | Trofei | Certificazioni Cisco |
| `#projects` | Match | Progetti personali |
| `#philosophy` | Filosofia | Testo + citazioni |
| `#contact` | Match Point | Email + GitHub + CV |

---

## Font caricati

```
Fraunces       — display Wimbledon (serif ottico variabile)
EB Garamond    — body Roland Garros (serif classico)
Inter          — body Wimbledon (sans-serif)
Space Mono     — display RG + elementi monospace (score strip, chip, meta)
```

---

## Deploy

```bash
git add .
git commit -m "update"
git push
```

Nessun build step. HTML + CSS + JS vanilla.
