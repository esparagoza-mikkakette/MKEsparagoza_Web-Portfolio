const qs = (sel, parent = document) => parent.querySelector(sel);

const nav = qs('.nav');
const navToggle = qs('#navToggle');

if (nav && navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.addEventListener('click', (e) => {
    const t = e.target;
    if (t instanceof HTMLAnchorElement) {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof Node)) return;
    const inside = nav.contains(target) || navToggle.contains(target);
    if (!inside) {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const year = qs('#year');
if (year) year.textContent = String(new Date().getFullYear());

const resumeTip = qs('#resumeTip');
const resumeHint = qs('#resumeHint');
if (resumeTip && resumeHint) {
  resumeTip.addEventListener('click', () => {
    resumeHint.hidden = !resumeHint.hidden;
  });
}

const form = qs('#contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fd = new FormData(form);
    const name = String(fd.get('name') ?? '').trim();
    const email = String(fd.get('email') ?? '').trim();
    const message = String(fd.get('message') ?? '').trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'Someone'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    const to = 'youremail@example.com';
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}
