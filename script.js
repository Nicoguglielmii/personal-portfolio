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

  function applyCourt(court, animate) {
    var data = COURTS[court];
    if (!data) return;

    var lang = getLang();

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
    var stored = recall(LANG_KEY);
    if (stored === 'it' || stored === 'en') return stored;
    return 'it';
  }

  function applyLang(lang) {
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

    // Re-apply court strings in new language
    applyCourt(currentCourt, false);
    store(LANG_KEY, lang);
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
  var CC_SCORES = ['15 – 0', '30 – 0', '40 – 0', 'Game · Set · Match'];

  function showCcCall(idx) {
    if (!ccCall) return;
    var text = CC_SCORES[idx] !== undefined ? CC_SCORES[idx] : CC_SCORES[CC_SCORES.length - 1];
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

        // Score call: 1st card → 15-0, 2nd → 30-0, 3rd → 40-0, 4th → Game · Set · Match
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