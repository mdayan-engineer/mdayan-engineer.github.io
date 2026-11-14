(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reducedMotion) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  const roles = ['Web Development', 'WordPress Solutions', 'SEO & Digital Growth', 'Digital Skills Training'];
  const roleTarget = document.querySelector('#role-rotator');
  if (roleTarget && !reducedMotion) {
    let index = 0;
    window.setInterval(() => {
      index = (index + 1) % roles.length;
      roleTarget.animate([{ opacity: 0, transform: 'translateY(5px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 320, easing: 'ease-out' });
      roleTarget.textContent = roles[index];
    }, 2600);
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  const dialog = document.querySelector('#booking-dialog');
  const bookingButtons = document.querySelectorAll('.js-book');
  const closeButton = document.querySelector('.dialog-close');
  const calendlyContainer = document.querySelector('.calendly-container');
  let calendlyLoaded = false;
  const loadCalendly = () => {
    if (!calendlyContainer || calendlyLoaded) return;
    calendlyLoaded = true;
    calendlyContainer.classList.add('is-loaded');
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: calendlyContainer.dataset.calendlyUrl,
          parentElement: calendlyContainer
        });
      }
    };
    document.head.appendChild(script);
  };
  bookingButtons.forEach(button => button.addEventListener('click', () => {
    if (dialog && typeof dialog.showModal === 'function') {
      dialog.showModal();
      loadCalendly();
    } else {
      window.open('https://calendly.com/md-ayan/book-appointment', '_blank', 'noopener');
    }
  }));
  if (closeButton && dialog) closeButton.addEventListener('click', () => dialog.close());
  if (dialog) dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });

  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', event => {
      if (!form.reportValidity()) {
        event.preventDefault();
        return;
      }
      const submit = form.querySelector('[type="submit"]');
      if (submit) {
        submit.disabled = true;
        submit.textContent = 'Sending…';
      }
    });
  }
})();