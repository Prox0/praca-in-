(() => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu after clicking a link (mobile)
    nav.addEventListener('click', (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.tagName.toLowerCase() !== 'a') return;

      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  }

  // Current year in UI
  const now = new Date();
  const year = String(now.getFullYear());

  const yearEl = document.querySelector('#year');
  if (yearEl) yearEl.textContent = year;

  const copyrightYear = document.querySelector('#copyright-year');
  if (copyrightYear) copyrightYear.textContent = year;

  // Demo form handler
  const form = document.querySelector('#contact-form');
  const hint = document.querySelector('#form-hint');

  if (form instanceof HTMLFormElement && hint) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      hint.textContent = 'Dzięki! To demo — nic nie zostało wysłane.';
      form.reset();
    });
  }
})();
