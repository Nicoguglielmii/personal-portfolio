/* ==========================================================================
   Nicola Guglielmi — Personal Portfolio
   Dual Court System: Wimbledon ↔ Roland Garros
   Vanilla JS — zero dependencies
   ========================================================================== */

(function () {
  'use strict';

  /* ─── Constants ───────────────────────────────────────────────── */
  var THEME_KEY = 'ng-theme';
  var LANG_KEY  = 'ng-lang';
  var COURT_KEY = 'ng-court';

  var COURTS = {
    wimbledon: {
      name: 'Wimbledon',
      courtTitle_it: 'Centre Court',
      courtTitle_en: 'Centre Court',
      courtFieldName: 'Centre Court',
      switchLabel_it: 'Roland Garros',
      switchLabel_en: 'Roland Garros',
      quoteText_it: '\u201cSe sai affrontare Trionfo e Disastro e trattare quei due impostori nello stesso modo.\u201d',
      quoteText_en: '\u201cIf you can meet with Triumph and Disaster and treat those two impostors just the same.\u201d',
      quoteCite_it: 'Rudyard Kipling \u2014 Iscrizione sopra l\u2019ingresso dei giocatori a Wimbledon',
      quoteCite_en: 'Rudyard Kipling \u2014 Inscription above the players\u2019 entrance at Wimbledon',
      aboutQuote: '\u201cIf you can meet with Triumph and Disaster and treat those two impostors just the same\u201d',
      aboutCite_it: 'Iscrizione nell\u2019ingresso degli spogliatoi, Wimbledon',
      aboutCite_en: 'Inscription above the players\u2019 entrance, Wimbledon',
      footerImg: 'assets/images/wimbledon.jpg',
      philoQuote1: '\u201cThe work never stops.\u201d',
      philoCite1: '\u2014 Jannik Sinner',
      philoQuote2: '\u201cYou have to believe in the long term plan you have but you need the short term goals to motivate and inspire you.\u201d',
      philoCite2: '\u2014 Roger Federer',

      // ── Hero: erba veloce, eleganza britannica, un colpo netto
      heroH1_it: 'Un punto<br><span class="accent">alla volta.</span>',
      heroH1_en: 'One point<br><span class="accent">at a time.</span>',
      heroRole_it: 'Nicola Guglielmi \u2014 sull\u2019erba vinci con <span class="accent">precisione e velocit\u00e0 di reazione</span>, non con la forza bruta. Costruisco software allo stesso modo: soluzioni pulite, eseguite bene al primo tentativo utile.',
      heroRole_en: 'Nicola Guglielmi \u2014 on grass you win with <span class="accent">precision and quick reactions</span>, not brute force. I build software the same way: clean solutions, executed well on the first useful attempt.',
      heroLead_it: 'Ho 17 anni, vengo da Andria, Puglia. Wimbledon insegna che la forma conta quanto il risultato: codice leggibile, architettura ordinata, nessuna soluzione che regge solo in allenamento.',
      heroLead_en: 'I\u2019m 17, from Andria, Puglia. Wimbledon teaches that form matters as much as the result: readable code, clean architecture, no solutions that only hold up in practice.',

      // ── About
      aboutEyebrow_it: 'Chi sono',
      aboutEyebrow_en: 'About',
      aboutTitle_it: 'Precisione, velocit\u00e0 e un piano a lungo termine',
      aboutTitle_en: 'Precision, speed and a long-term plan',
      aboutP1_it: 'Sono uno <strong>studente di 17 anni</strong> di Andria, in Puglia, e sto completando il <strong>Diploma in Informatica e Telecomunicazioni</strong> presso l\u2019ITT Sen. O. Jannuzzi. Il percorso copre Python, Java, sviluppo web, architettura dei computer e reti \u2014 le fondamenta su cui costruire tutto il resto.',
      aboutP1_en: 'I\u2019m a <strong>17-year-old student</strong> from Andria, Puglia, completing a <strong>Diploma in IT &amp; Telecommunications</strong> at ITT Sen. O. Jannuzzi. The programme covers Python, Java, web development, computer architecture and networking \u2014 the foundation everything else is built on.',
      aboutP2_it: "Sull'erba devi leggere il rimbalzo prima che arrivi e rispondere in anticipo. \u00c8 la stessa competenza che alleno nel debugging e nel design di sistema: non aspettare che il problema esploda, anticiparlo con struttura chiara e codice che si spiega da solo. Il tennis di Wimbledon mi ha insegnato che la reattivit\u00e0 senza disciplina \u00e8 solo caos.",
      aboutP2_en: "On grass you have to read the bounce before it comes and respond ahead of time. That's the same skill I train in debugging and system design: don't wait for the problem to explode, anticipate it with clear structure and self-documenting code. Wimbledon tennis taught me that reactivity without discipline is just chaos.",

      // ── Philosophy text
      philoTextP1_it: "L'erba \u00e8 la superficie pi\u00f9 rapida. Un rimbalzo basso, una finestra di risposta minima, zero margine di errore sui fondamentali. Chi vince a Wimbledon non \u00e8 necessariamente il pi\u00f9 potente: \u00e8 chi mantiene la testa fredda mentre tutto accelera intorno a lui. In un progetto software sotto scadenza funziona esattamente cos\u00ec.",
      philoTextP1_en: "Grass is the fastest surface. A low bounce, a minimal response window, zero margin for error on fundamentals. Whoever wins at Wimbledon isn\u2019t necessarily the most powerful: it\u2019s whoever keeps a clear head while everything accelerates around them. In a software project under deadline, it works exactly the same way.",
      philoTextP2_it: "Federer non inventava colpi a caso: ogni risposta era il prodotto di migliaia di ore di pratica deliberata, compresse in una frazione di secondo. Quella stessa logica guida il modo in cui mi avvicino a un nuovo linguaggio o a un sistema che non conosco \u2014 costruire i pattern corretti fin dall'inizio, prima che le cattive abitudini diventino automatiche.",
      philoTextP2_en: "Federer didn\u2019t invent shots randomly: every response was the product of thousands of hours of deliberate practice, compressed into a fraction of a second. That same logic guides how I approach a new language or an unfamiliar system \u2014 build the right patterns from the start, before bad habits become automatic.",
      philoTextP3_it: "La regola di Wimbledon che tengo in testa: trattare Trionfo e Disastro allo stesso modo. Una feature che funziona non \u00e8 un motivo per smettere di migliorare; un bug critico non \u00e8 una catastrofe ma un punto da giocare. Stessa energia, stessa concentrazione, qualunque sia il punteggio.",
      philoTextP3_en: "The Wimbledon rule I keep in mind: treat Triumph and Disaster the same. A feature that works isn\u2019t a reason to stop improving; a critical bug isn\u2019t a catastrophe but a point to play. Same energy, same focus, whatever the score.",
      skillsSub_it: "Competenze autovalutate \u2014 come le statistiche di un giocatore sul Centre Court. Ogni barra \u00e8 un dato, non una promessa.",
      skillsSub_en: "Self-assessed skills \u2014 like a player\u2019s stats on Centre Court. Each bar is data, not a promise.",
    },
    rg: {
      name: 'Roland Garros',
      courtTitle_it: 'Court Philippe-Chatrier',
      courtTitle_en: 'Court Philippe-Chatrier',
      courtFieldName: 'Court Philippe-Chatrier',
      switchLabel_it: 'Wimbledon',
      switchLabel_en: 'Wimbledon',
      quoteText_it: '\u00abLa pressione non cambia la prestazione. La rivela.\u00bb',
      quoteText_en: '\u00abPressure doesn\u2019t change performance. It reveals it.\u00bb',
      quoteCite_it: 'Filosofia del Court Philippe-Chatrier, Roland Garros',
      quoteCite_en: 'Philosophy of Court Philippe-Chatrier, Roland Garros',
      aboutQuote: '\u00abIl campo di terra ti insegna una cosa sola: la perseveranza batte il talento ogni volta che il talento non persevera.\u00bb',
      aboutCite_it: 'Filosofia del Court Philippe-Chatrier',
      aboutCite_en: 'Philosophy of Court Philippe-Chatrier',
      footerImg: 'assets/images/roland-garros.jpg',
      philoQuote1: '\u201cRafa always said: every point matters. I learned that from him and I carry it with me every single day.\u201d',
      philoCite1: '\u2014 Carlos Alcaraz',
      philoQuote2: '\u201cThe day you stop running is the day you lose. There is no secret \u2014 just clay, sweat, and passion.\u201d',
      philoCite2: '\u2014 Rafael Nadal',

      // ── Hero: terra lenta, resistenza, costruire il punto
      heroH1_it: 'Costruire<br><span class="accent">lo scambio lungo.</span>',
      heroH1_en: 'Build<br><span class="accent">the long rally.</span>',
      heroRole_it: 'Nicola Guglielmi \u2014 sulla terra non esistono colpi facili: ogni punto si <span class="accent">costruisce scambio dopo scambio</span>, con pazienza e resistenza. Scrivo codice con la stessa mentalit\u00e0.',
      heroRole_en: 'Nicola Guglielmi \u2014 on clay there are no easy points: every one is <span class="accent">built rally by rally</span>, with patience and endurance. I write code with the same mindset.',
      heroLead_it: 'Ho 17 anni, vengo da Andria, Puglia. Roland Garros insegna che la velocit\u00e0 non basta: serve resistenza, pattern recognition e la capacit\u00e0 di rimanere nel punto quando sarebbe pi\u00f9 comodo uscirne.',
      heroLead_en: 'I\u2019m 17, from Andria, Puglia. Roland Garros teaches that speed isn\u2019t enough: you need endurance, pattern recognition, and the ability to stay in the rally when leaving would be easier.',

      // ── About
      aboutEyebrow_it: 'Chi sono',
      aboutEyebrow_en: 'About',
      aboutTitle_it: 'Resistenza, pattern e un piano a lungo termine',
      aboutTitle_en: 'Endurance, patterns and a long-term plan',
      aboutP1_it: 'Sono uno <strong>studente di 17 anni</strong> di Andria, in Puglia, e sto completando il <strong>Diploma in Informatica e Telecomunicazioni</strong> all\u2019ITT Sen. O. Jannuzzi. Python, Java, reti, sistemi: ogni materia \u00e8 un set da vincere prima di passare al prossimo.',
      aboutP1_en: 'I\u2019m a <strong>17-year-old student</strong> from Andria, Puglia, completing a <strong>Diploma in IT &amp; Telecommunications</strong> at ITT Sen. O. Jannuzzi. Python, Java, networking, systems: every subject is a set to win before moving to the next.',
      aboutP2_it: "Sulla terra rossa non si pu\u00f2 vincere con un ace: bisogna costruire la pressione, punto per punto, finch\u00e9 l'avversario non commette l'errore. Nel codice vale lo stesso: non esiste la soluzione brillante arrivata in un lampo. Esiste la soluzione costruita commit dopo commit, refactor dopo refactor, finch\u00e9 il sistema regge davvero sotto carico.",
      aboutP2_en: "On clay you can\u2019t win with an ace: you have to build the pressure, point by point, until the opponent makes the error. In code it\u2019s the same: there is no brilliant solution that arrives in a flash. There is the solution built commit by commit, refactor by refactor, until the system actually holds under load.",

      // ── Philosophy text
      philoTextP1_it: "Roland Garros \u00e8 il torneo pi\u00f9 lento e pi\u00f9 impietoso del circuito. La terra assorbe la potenza, rallenta i colpi, e premia chi ha la testa dura abbastanza da restare nello scambio quando sarebbe pi\u00f9 facile venire a rete. I bug pi\u00f9 ostici in un progetto complesso funzionano esattamente cos\u00ec: emergono lentamente, dopo ore di lavoro apparentemente inutile.",
      philoTextP1_en: "Roland Garros is the slowest and most unforgiving tournament on the circuit. Clay absorbs power, slows shots down, and rewards whoever is stubborn enough to stay in the rally when going to the net would be easier. The toughest bugs in a complex project work exactly the same way: they surface slowly, after hours of seemingly wasted work.",
      philoTextP2_it: "Nadal non vinceva lo scambio con un colpo solo: costruiva l\u2019angolo con cinque, sei, sette dritti in fila, spostando l\u2019avversario millimetro dopo millimetro finch\u00e9 lo spazio aperto diventava inevitabile. Una codebase solida si costruisce allo stesso modo: nessun singolo commit la risolve, ma ogni piccolo miglioramento sposta l\u2019equilibrio nella direzione giusta.",
      philoTextP2_en: "Nadal didn\u2019t win the rally with a single shot: he built the angle with five, six, seven forehands in a row, moving the opponent millimetre by millimetre until the open space became inevitable. A solid codebase is built the same way: no single commit fixes it, but every small improvement shifts the balance in the right direction.",
      philoTextP3_it: "Lo standard che tengo: non cercare la soluzione brillante, cercare la soluzione che regge. Scaldarsi bene, coprire i fondamentali, trattare ogni bug come un punto da giocare \u2014 non come un fallimento da nascondere. La terra rossa punisce chi si ferma; il codice fa lo stesso.",
      philoTextP3_en: "The standard I hold: don\u2019t look for the brilliant solution, look for the solution that holds. Warm up properly, cover the fundamentals, treat every bug as a point to play \u2014 not a failure to hide. Clay punishes whoever stops; code does the same.",
      skillsSub_it: "Competenze costruite rally dopo rally \u2014 nessuna scorciatoia, solo ripetizione. Il punteggio riflette il lavoro fatto, non l\u2019obiettivo futuro.",
      skillsSub_en: "Skills built rally by rally \u2014 no shortcuts, only repetition. The score reflects the work done, not the future goal.",
    }
  };

  /* ─── DOM refs ────────────────────────────────────────────────── */
  var root        = document.documentElement;
  var navbar      = document.getElementById('navbar');
  var menuToggle  = document.getElementById('menuToggle');
  var navLinks    = document.getElementById('navLinks');
  var courtSwitch = document.getElementById('courtSwitch');
  var courtSwitchLabel = document.getElementById('courtSwitchLabel');
  var courtLabel  = document.getElementById('courtLabel');
  var courtOverlay= document.getElementById('courtOverlay');
  var ccCourtTitle     = document.getElementById('ccCourtTitle');
  var ccCourtFieldName = document.getElementById('ccCourtFieldName');
  var langITBtn   = document.getElementById('langIT');
  var langENBtn   = document.getElementById('langEN');
  var backToTop   = document.getElementById('backToTop');
  var scoreStrip  = document.getElementById('scoreStrip');
  var scorePanel  = document.getElementById('scorePanel');
  var ccBall      = document.getElementById('ccBall');
  var ccCall      = document.getElementById('ccCall');
  var ccEntries   = document.querySelectorAll('.cc-entry');
  var yearEl      = document.getElementById('year');

  // About quote elements
  var aboutQuoteText = document.getElementById('aboutQuoteText');
  var aboutQuoteCite = document.getElementById('aboutQuoteCite');

  // Philosophy quote elements
  var philoQuote1 = document.getElementById('philoQuote1');
  var philoCite1  = document.getElementById('philoCite1');
  var philoQuote2 = document.getElementById('philoQuote2');
  var philoCite2  = document.getElementById('philoCite2');

  // Footer elements
  var footerQuoteText = document.getElementById('footerQuoteText');
  var footerQuoteCite = document.getElementById('footerQuoteCite');
  var footerImg       = document.getElementById('footerImg');

  // Hero dynamic elements
  var heroH1   = document.getElementById('heroH1');
  var heroRole = document.getElementById('heroRole');
  var heroLead = document.getElementById('heroLead');

  // About section dynamic elements
  var aboutEyebrow = document.getElementById('aboutEyebrow');
  var aboutTitle   = document.getElementById('aboutTitle');
  var aboutP1      = document.getElementById('aboutP1');
  var aboutP2      = document.getElementById('aboutP2');

  // Philosophy text paragraphs
  var philoTextP1  = document.getElementById('philoTextP1');
  var philoTextP2  = document.getElementById('philoTextP2');
  var philoTextP3  = document.getElementById('philoTextP3');

  // Skills subtitle
  var skillsSub    = document.getElementById('skillsSub');

  /* ─── Helpers ─────────────────────────────────────────────────── */
  function store(key, val) { try { localStorage.setItem(key, val); } catch(e) {} }
  function recall(key)      { try { return localStorage.getItem(key); } catch(e) { return null; } }

  /* ─── Footer year ─────────────────────────────────────────────── */
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ─── Navbar scroll ───────────────────────────────────────────── */
  function onNavScroll() {
    if (!navbar) return;
    navbar.classList.toggle('is-scrolled', window.scrollY > 12);
  }
  onNavScroll();
  window.addEventListener('scroll', onNavScroll, { passive: true });

  /* ─── Mobile menu ─────────────────────────────────────────────── */
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        document.body.classList.remove('nav-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ─── Court (Wimbledon / Roland Garros) ───────────────────────── */
  var currentCourt = recall(COURT_KEY) || 'wimbledon';
  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // currentLang initialized early so applyCourt can read it without depending on localStorage timing
  var currentLang = (function() { var s = recall(LANG_KEY); return (s === 'it' || s === 'en') ? s : 'it'; }());

  function applyCourt(court, animate) {
    var data = COURTS[court];
    if (!data) return;

    var lang = currentLang;

    // CSS data-court attribute
    if (court === 'rg') root.setAttribute('data-court', 'rg');
    else root.removeAttribute('data-court');

    // Court switch label
    if (courtSwitchLabel) {
      courtSwitchLabel.textContent = lang === 'en' ? data.switchLabel_en : data.switchLabel_it;
    }

    // Player card court badge
    if (courtLabel) courtLabel.textContent = data.name;

    // Section title (Centre Court / Court Philippe-Chatrier)
    if (ccCourtTitle) {
      ccCourtTitle.setAttribute('data-it', data.courtTitle_it);
      ccCourtTitle.setAttribute('data-en', data.courtTitle_en);
      ccCourtTitle.textContent = lang === 'en' ? data.courtTitle_en : data.courtTitle_it;
    }

    // Court field name label
    if (ccCourtFieldName) ccCourtFieldName.textContent = data.courtFieldName;

    // About quote
    if (aboutQuoteText) aboutQuoteText.innerHTML = data.aboutQuote;
    if (aboutQuoteCite) {
      aboutQuoteCite.setAttribute('data-it', data.aboutCite_it);
      aboutQuoteCite.setAttribute('data-en', data.aboutCite_en);
      aboutQuoteCite.textContent = lang === 'en' ? data.aboutCite_en : data.aboutCite_it;
    }

    // Philosophy quotes
    if (philoQuote1) philoQuote1.textContent = data.philoQuote1;
    if (philoCite1)  philoCite1.textContent  = data.philoCite1;
    if (philoQuote2) philoQuote2.textContent = data.philoQuote2;
    if (philoCite2)  philoCite2.textContent  = data.philoCite2;

    // Footer quote
    if (footerQuoteText) {
      footerQuoteText.setAttribute('data-it', data.quoteText_it);
      footerQuoteText.setAttribute('data-en', data.quoteText_en);
      footerQuoteText.innerHTML = lang === 'en' ? data.quoteText_en : data.quoteText_it;
    }
    if (footerQuoteCite) {
      footerQuoteCite.setAttribute('data-it', data.quoteCite_it);
      footerQuoteCite.setAttribute('data-en', data.quoteCite_en);
      footerQuoteCite.textContent = lang === 'en' ? data.quoteCite_en : data.quoteCite_it;
    }

    // Footer image
    if (footerImg) footerImg.src = data.footerImg;

    // Hero dynamic text
    if (heroH1)   heroH1.innerHTML   = lang === 'en' ? data.heroH1_en   : data.heroH1_it;
    if (heroRole) heroRole.innerHTML  = lang === 'en' ? data.heroRole_en : data.heroRole_it;
    if (heroLead) heroLead.innerHTML  = lang === 'en' ? data.heroLead_en : data.heroLead_it;

    // About section dynamic text
    if (aboutEyebrow) aboutEyebrow.textContent = lang === 'en' ? data.aboutEyebrow_en : data.aboutEyebrow_it;
    if (aboutTitle)   aboutTitle.textContent   = lang === 'en' ? data.aboutTitle_en   : data.aboutTitle_it;
    if (aboutP1)      aboutP1.innerHTML        = lang === 'en' ? data.aboutP1_en      : data.aboutP1_it;
    if (aboutP2)      aboutP2.innerHTML        = lang === 'en' ? data.aboutP2_en      : data.aboutP2_it;

    // Philosophy text paragraphs
    if (philoTextP1) philoTextP1.innerHTML = lang === 'en' ? data.philoTextP1_en : data.philoTextP1_it;
    if (philoTextP2) philoTextP2.innerHTML = lang === 'en' ? data.philoTextP2_en : data.philoTextP2_it;
    if (philoTextP3) philoTextP3.innerHTML = lang === 'en' ? data.philoTextP3_en : data.philoTextP3_it;

    // Skills subtitle (different per court)
    if (skillsSub && data.skillsSub_it) {
      skillsSub.setAttribute('data-it', data.skillsSub_it);
      skillsSub.setAttribute('data-en', data.skillsSub_en);
      skillsSub.textContent = lang === 'en' ? data.skillsSub_en : data.skillsSub_it;
    }

    store(COURT_KEY, court);
    currentCourt = court;

    // Broadcast flash animation
    if (animate && !prefersReducedMotion && courtOverlay) {
      courtOverlay.classList.remove('flash');
      void courtOverlay.offsetWidth; // reflow
      courtOverlay.classList.add('flash');
      courtOverlay.addEventListener('animationend', function () {
        courtOverlay.classList.remove('flash');
      }, { once: true });
    }
  }

  applyCourt(currentCourt, false);

  if (courtSwitch) {
    courtSwitch.addEventListener('click', function () {
      var next = currentCourt === 'wimbledon' ? 'rg' : 'wimbledon';
      applyCourt(next, true);

      if (!prefersReducedMotion) {
        courtSwitch.classList.remove('is-swinging');
        void courtSwitch.offsetWidth; // reflow
        courtSwitch.classList.add('is-swinging');
        courtSwitch.addEventListener('animationend', function handler() {
          courtSwitch.classList.remove('is-swinging');
          courtSwitch.removeEventListener('animationend', handler);
        }, { once: true });
      }
    });
  }

  /* ─── Language ────────────────────────────────────────────────── */
  var PAGE_TITLES = {
    it: 'Nicola Guglielmi — Sviluppatore Web Junior · Portfolio',
    en: 'Nicola Guglielmi — Junior Web Developer · Portfolio'
  };

  var SKILL_TIERS = [
    { min: 90, it: 'Avanzato',    en: 'Advanced' },
    { min: 75, it: 'Solido',      en: 'Solid' },
    { min: 55, it: 'Buono',       en: 'Good' },
    { min: 0,  it: 'In crescita', en: 'Growing' }
  ];

  function tierLabel(score, lang) {
    var t = SKILL_TIERS.find(function (x) { return score >= x.min; });
    return t ? t[lang] : '';
  }

  function getLang() {
    return currentLang;
  }

  function applyLang(lang) {
    currentLang = lang;
    store(LANG_KEY, lang);

    document.querySelectorAll('[data-it][data-en]').forEach(function (el) {
      var text = el.getAttribute('data-' + lang);
      if (text !== null) el.innerHTML = text;
    });

    // Skill tier labels
    document.querySelectorAll('.skill-row[data-score]').forEach(function (row) {
      var score = parseInt(row.getAttribute('data-score'), 10);
      var label = row.querySelector('.skill-score');
      if (!label || isNaN(score)) return;
      label.textContent = tierLabel(score, lang);
      label.title = score + '% (' + (lang === 'en' ? 'self-assessed' : 'autovalutato') + ')';
    });

    document.title = PAGE_TITLES[lang] || PAGE_TITLES.it;
    root.setAttribute('lang', lang);
    if (langITBtn) { langITBtn.classList.toggle('is-active', lang === 'it'); langITBtn.setAttribute('aria-pressed', String(lang === 'it')); }
    if (langENBtn) { langENBtn.classList.toggle('is-active', lang === 'en'); langENBtn.setAttribute('aria-pressed', String(lang === 'en')); }

    // Re-apply court strings in the new language (now currentLang is already updated)
    applyCourt(currentCourt, false);
  }

  applyLang(getLang());

  if (langITBtn) langITBtn.addEventListener('click', function () { applyLang('it'); });
  if (langENBtn) langENBtn.addEventListener('click', function () { applyLang('en'); });

  /* ─── Scroll reveal ───────────────────────────────────────────── */
  if ('IntersectionObserver' in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .reveal-stagger').forEach(function (el) {
      revealObs.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ─── Skill bars ──────────────────────────────────────────────── */
  function fillBar(container, fillSel) {
    var score = container.getAttribute('data-score');
    var fill  = container.querySelector(fillSel);
    if (fill && score) fill.style.width = score + '%';
  }

  if ('IntersectionObserver' in window) {
    var barObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        if (entry.target.classList.contains('skill-row'))  fillBar(entry.target, '.skill-bar-fill');
        if (entry.target.classList.contains('lang-skill')) fillBar(entry.target, '.mini-bar-fill');
        barObs.unobserve(entry.target);
      });
    }, { threshold: 0.4 });

    document.querySelectorAll('.skill-row[data-score]').forEach(function (el) { barObs.observe(el); });
    document.querySelectorAll('.lang-skill[data-score]').forEach(function (el) { barObs.observe(el); });
  } else {
    document.querySelectorAll('.skill-row[data-score]').forEach(function (el)  { fillBar(el, '.skill-bar-fill'); });
    document.querySelectorAll('.lang-skill[data-score]').forEach(function (el) { fillBar(el, '.mini-bar-fill'); });
  }

  /* ─── Stat count-up ───────────────────────────────────────────── */
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    var statObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var full = el.textContent.trim();
        var m = full.match(/^(\d+)(.*)/);
        if (!m) return;
        var target = parseInt(m[1], 10);
        var suffix = m[2] || '';
        var start = null;
        var dur = 900;
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = target + suffix;
        }
        requestAnimationFrame(step);
        statObs.unobserve(el);
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number').forEach(function (el) { statObs.observe(el); });
  }

  /* ─── Back to top ─────────────────────────────────────────────── */
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ─── Centre Court + Score Animation ─────────────────────────── */
  var CC_SCORES_WIMBLEDON = ['15 – 0', '30 – 0', '40 – 0', 'Game · Set · Match'];
  var CC_SCORES_RG        = ['15 – 0', '30 – 0', '40 – 0', 'Jeu-set-match'];

  function getCcScores() {
    return currentCourt === 'rg' ? CC_SCORES_RG : CC_SCORES_WIMBLEDON;
  }

  function showCcCall(idx) {
    if (!ccCall) return;
    var scores = getCcScores();
    var text = scores[idx] !== undefined ? scores[idx] : scores[scores.length - 1];
    ccCall.classList.remove('is-visible');
    void ccCall.offsetWidth; // reflow, so the fade-in retriggers every click
    ccCall.textContent = text;
    ccCall.classList.add('is-visible');
  }

  if (ccBall && ccEntries.length) {
    ccEntries.forEach(function (entry, idx) {
      entry.addEventListener('click', function () {
        // Deactivate all
        ccEntries.forEach(function (e) { e.classList.remove('is-active'); });
        entry.classList.add('is-active');

        // Move ball
        var x = entry.getAttribute('data-pos-x');
        var y = entry.getAttribute('data-pos-y');
        if (x && y) { ccBall.style.left = x + '%'; ccBall.style.top = y + '%'; }

        // Score call: 1st card → 15-0, 2nd → 30-0, 3rd → 40-0, 4th → Game · Set · Match / Jeu-set-match
        showCcCall(idx);
      });
    });

    // Show the score for whichever card starts active (defaults to the 1st)
    var initialActiveIdx = 0;
    ccEntries.forEach(function (entry, idx) {
      if (entry.classList.contains('is-active')) initialActiveIdx = idx;
    });
    showCcCall(initialActiveIdx);
  }

  /* ─── Stat cards flip ─────────────────────────────────────────── */
  document.querySelectorAll('.stat-card').forEach(function(card) {
    function toggle() {
      card.classList.toggle('is-flipped');
    }
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });

  /* ─── Stat back text update on court switch ───────────────────── */
  var STAT_BACK_TEXTS = {
    wimbledon: {
      it: [
        'Python, Java, C, reti — dal 2022 ad oggi',
        'Cisco, Cambridge, Python, SQL, AI e altro',
        'Cambridge B2 First — lettura, scrittura, orale',
        'Livello Avanzato in 4 aree su 5 — DigComp 2.1'
      ],
      en: [
        'Python, Java, C, networking — since 2022',
        'Cisco, Cambridge, Python, SQL, AI and more',
        'Cambridge B2 First — reading, writing, spoken',
        'Advanced level in 4 out of 5 areas — DigComp 2.1'
      ],
      icons: ['📚', '🏆', '🎓', '⚡']
    },
    rg: {
      it: [
        'Quattro anni di scambio lungo — commit dopo commit',
        'Otto trofei guadagnati con costanza, non con il talento',
        'B2: la lingua che permette di restare nello scambio',
        'Competenza digitale massima — costruita punto per punto'
      ],
      en: [
        'Four years of long rallies — commit by commit',
        'Eight trophies earned through consistency, not talent',
        'B2: the language that keeps you in the rally',
        'Max digital competence — built point by point'
      ],
      icons: ['🎯', '🏺', '💬', '🔥']
    }
  };

  function updateStatBackTexts(court, lang) {
    var data = STAT_BACK_TEXTS[court] || STAT_BACK_TEXTS.wimbledon;
    document.querySelectorAll('.stat-card').forEach(function(card, idx) {
      var iconEl = card.querySelector('.stat-back-icon');
      var textEl = card.querySelector('.stat-back-text');
      if (iconEl && data.icons[idx]) iconEl.textContent = data.icons[idx];
      if (textEl) {
        textEl.textContent = lang === 'en' ? data.en[idx] : data.it[idx];
        textEl.setAttribute('data-it', data.it[idx]);
        textEl.setAttribute('data-en', data.en[idx]);
      }
      // Reset flip on court switch
      card.classList.remove('is-flipped');
    });
  }

  /* ─── About quote badge interactive reveal ────────────────────── */
  var aboutQuoteBadge = document.getElementById('aboutQuoteBadge');
  var aboutQuoteHint  = document.getElementById('aboutQuoteHint');
  if (aboutQuoteBadge) {
    function revealQuoteBadge() {
      aboutQuoteBadge.classList.toggle('is-revealed');
    }
    aboutQuoteBadge.addEventListener('click', revealQuoteBadge);
    aboutQuoteBadge.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); revealQuoteBadge(); }
    });
  }

  /* ─── Patch applyCourt to also update stat backs and reset quote ─ */
  // updateStatBackTexts is called by the patched courtSwitch handler below
  // and on initial load — we hook into the existing applyCourt via the
  // courtSwitch click and lang change handlers.

  // Initial stat back texts
  updateStatBackTexts(currentCourt, currentLang);

  // Re-run on court switch (after applyCourt updates currentCourt)
  if (courtSwitch) {
    courtSwitch.addEventListener('click', function () {
      setTimeout(function() {
        updateStatBackTexts(currentCourt, currentLang);
        if (aboutQuoteBadge) aboutQuoteBadge.classList.remove('is-revealed');
        if (aboutQuoteHint) {
          aboutQuoteHint.textContent = currentLang === 'en' ? '— tap to reveal —' : '— tappa per svelare —';
        }
        // Refresh score call for current active card
        var activeIdx = 0;
        ccEntries.forEach(function(e, i) { if (e.classList.contains('is-active')) activeIdx = i; });
        showCcCall(activeIdx);
      }, 0);
    });
  }

  /* ─── Score Strip scrollspy ───────────────────────────────────── */
  if (scoreStrip && 'IntersectionObserver' in window) {
    var ssItems = Array.prototype.slice.call(scoreStrip.querySelectorAll('.score-strip-item'))
      .map(function (item) {
        var sec = document.getElementById(item.getAttribute('data-target'));
        return sec ? { item: item, section: sec } : null;
      })
      .filter(Boolean);

    function ssSetActive(id) {
      var activeIdx = -1;
      ssItems.forEach(function (e, i) { if (e.section.id === id) activeIdx = i; });
      if (activeIdx < 0) return;
      ssItems.forEach(function (e, i) {
        e.item.classList.remove('is-active', 'is-done');
        if (i < activeIdx) e.item.classList.add('is-done');
        else if (i === activeIdx) e.item.classList.add('is-active');
      });
      ssItems[activeIdx].item.scrollIntoView({ block: 'nearest', inline: 'center' });
    }

    var ssObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) ssSetActive(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

    ssItems.forEach(function (e) {
      ssObs.observe(e.section);
      e.item.addEventListener('click', function () { e.section.scrollIntoView(); });
    });
  }

  /* ─── Score Panel 3D tilt ─────────────────────────────────────── */
  var canHover = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (scorePanel && canHover && !prefersReducedMotion) {
    scorePanel.addEventListener('mousemove', function (e) {
      var r = scorePanel.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width  - 0.5;
      var py = (e.clientY - r.top)  / r.height - 0.5;
      scorePanel.style.transform = 'perspective(900px) rotateX(' + (py * -14).toFixed(2) + 'deg) rotateY(' + (px * 14).toFixed(2) + 'deg) scale(1.02)';
    });
    scorePanel.addEventListener('mouseleave', function () { scorePanel.style.transform = ''; });
  }

  /* ─── Click ripple ────────────────────────────────────────────── */
  if (!prefersReducedMotion) {
    document.querySelectorAll('.btn, .icon-btn, .back-to-top').forEach(function (el) {
      el.addEventListener('click', function (e) {
        var rect = el.getBoundingClientRect();
        var size = Math.max(rect.width, rect.height) * 1.4;
        var x = (e.clientX !== undefined ? e.clientX - rect.left : rect.width / 2) - size / 2;
        var y = (e.clientY !== undefined ? e.clientY - rect.top  : rect.height / 2) - size / 2;
        var r = document.createElement('span');
        r.className = 'ripple';
        r.style.cssText = 'width:' + size + 'px;height:' + size + 'px;left:' + x + 'px;top:' + y + 'px;';
        el.appendChild(r);
        r.addEventListener('animationend', function () { r.remove(); });
      });
    });
  }

})();