/* ==========================================================================
   Nicola Guglielmi — Personal Portfolio
   Vanilla JS — no dependencies
   ========================================================================== */

(function () {
  'use strict';

  /* ---------------------------- Footer year ---------------------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------------------- Navbar scroll state ---------------------------- */
  var navbar = document.getElementById('navbar');
  function onScrollNav() {
    if (!navbar) return;
    if (window.scrollY > 12) navbar.classList.add('is-scrolled');
    else navbar.classList.remove('is-scrolled');
  }
  onScrollNav();
  window.addEventListener('scroll', onScrollNav, { passive: true });

  /* ---------------------------- Mobile menu ---------------------------- */
  var menuToggle = document.getElementById('menuToggle');
  var navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      var isOpen = document.body.classList.toggle('nav-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        document.body.classList.remove('nav-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------------------------- Dark mode toggle ---------------------------- */
  var THEME_KEY = 'ng-portfolio-theme';
  var themeToggle = document.getElementById('themeToggle');
  var root = document.documentElement;

  function applyTheme(theme) {
    if (theme === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
  }

  function getPreferredTheme() {
    try {
      var stored = localStorage.getItem(THEME_KEY);
      if (stored) return stored;
    } catch (e) { /* localStorage unavailable — fall back silently */ }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  applyTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var isDark = root.getAttribute('data-theme') === 'dark';
      var next = isDark ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* ignore */ }
    });
  }

  /* ---------------------------- Scroll reveal ---------------------------- */
  var revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if ('IntersectionObserver' in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------------------------- Animated skill bars ---------------------------- */
  var skillBars = document.querySelectorAll('.skill-row[data-score]');
  var langBars = document.querySelectorAll('.lang-skill[data-score]');

  function fillBar(container, fillSelector) {
    var score = container.getAttribute('data-score');
    var fill = container.querySelector(fillSelector);
    if (fill && score) fill.style.width = score + '%';
  }

  if ('IntersectionObserver' in window && (skillBars.length || langBars.length)) {
    var barObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        if (entry.target.classList.contains('skill-row')) fillBar(entry.target, '.skill-bar-fill');
        if (entry.target.classList.contains('lang-skill')) fillBar(entry.target, '.mini-bar-fill');
        barObserver.unobserve(entry.target);
      });
    }, { threshold: 0.4 });

    skillBars.forEach(function (el) { barObserver.observe(el); });
    langBars.forEach(function (el) { barObserver.observe(el); });
  } else {
    skillBars.forEach(function (el) { fillBar(el, '.skill-bar-fill'); });
    langBars.forEach(function (el) { fillBar(el, '.mini-bar-fill'); });
  }

  /* ---------------------------- Back to top ---------------------------- */
  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------------------------- Centre Court (Experience) ---------------------------- */
  var ccBall = document.getElementById('ccBall');
  var ccCall = document.getElementById('ccCall');
  var ccEntries = document.querySelectorAll('.cc-entry');

  if (ccBall && ccEntries.length) {
    ccEntries.forEach(function (entry) {
      entry.addEventListener('click', function () {
        if (entry.classList.contains('is-active')) return;

        ccEntries.forEach(function (e) { e.classList.remove('is-active'); });
        entry.classList.add('is-active');

        if (ccCall) ccCall.classList.remove('is-visible');

        var x = entry.getAttribute('data-pos-x');
        var y = entry.getAttribute('data-pos-y');
        if (x && y) {
          ccBall.style.left = x + '%';
          ccBall.style.top = y + '%';
        }
      });
    });

    // Reveal "Game · Set · Match" once the ball has finished travelling to its new spot
    ccBall.addEventListener('transitionend', function (e) {
      if (e.propertyName !== 'left') return;

      var activeEntry = document.querySelector('.cc-entry.is-active');

      if (activeEntry && activeEntry.classList.contains('is-match-point')) {
        if (ccCall) ccCall.classList.add('is-visible');
      } else {
        if (ccCall) ccCall.classList.remove('is-visible');
      }
    });
  }


  /* ---------------------------- Language toggle (IT / EN) ---------------------------- */
  var LANG_KEY = 'ng-portfolio-lang';
  var langITBtn = document.getElementById('langIT');
  var langENBtn = document.getElementById('langEN');
  var translatables = document.querySelectorAll('[data-it][data-en]');

  function applyLang(lang) {
    translatables.forEach(function (el) {
      var text = el.getAttribute('data-' + lang);
      if (text) el.innerHTML = text;
    });
    if (langITBtn) {
      langITBtn.classList.toggle('is-active', lang === 'it');
      langITBtn.setAttribute('aria-pressed', String(lang === 'it'));
    }
    if (langENBtn) {
      langENBtn.classList.toggle('is-active', lang === 'en');
      langENBtn.setAttribute('aria-pressed', String(lang === 'en'));
    }
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'it');
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
  }

  function getPreferredLang() {
    try {
      var stored = localStorage.getItem(LANG_KEY);
      if (stored === 'it' || stored === 'en') return stored;
    } catch (e) { /* ignore */ }
    var nav = navigator.language || '';
    return nav.toLowerCase().startsWith('it') ? 'it' : 'it'; // default IT
  }

  applyLang(getPreferredLang());

  if (langITBtn) langITBtn.addEventListener('click', function () { applyLang('it'); });
  if (langENBtn) langENBtn.addEventListener('click', function () { applyLang('en'); });

})();