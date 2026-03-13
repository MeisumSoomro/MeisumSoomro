const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const navLinks = document.querySelector('.nav-links');
const menuToggle = document.querySelector('.menu-toggle');
const navUnderline = document.querySelector('.nav-underline');

const setTheme = (theme) => {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

const initTheme = () => {
  const saved = localStorage.getItem('theme');
  if (saved) setTheme(saved);
};

const updateUnderline = (el) => {
  if (!navUnderline || !el) return;
  const rect = el.getBoundingClientRect();
  const parentRect = navLinks.getBoundingClientRect();
  navUnderline.style.width = `${rect.width}px`;
  navUnderline.style.transform = `translateX(${rect.left - parentRect.left}px)`;
};

const initNavUnderline = () => {
  const links = navLinks ? navLinks.querySelectorAll('.nav-link') : [];
  links.forEach(link => {
    link.addEventListener('mouseenter', () => updateUnderline(link));
  });
  const first = links[0];
  if (first) updateUnderline(first);
  window.addEventListener('resize', () => updateUnderline(first));
};

const initMobileMenu = () => {
  if (!menuToggle || !navLinks) return;
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
};

const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
};

const initReveal = () => {
  const targets = document.querySelectorAll('.section, .card, .hero-content, .footer');
  targets.forEach(t => t.classList.add('fade-up'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(t => observer.observe(t));
};

const initParallax = () => {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;
  window.addEventListener('scroll', () => {
    const offset = window.scrollY * 0.15;
    heroBg.style.transform = `translate3d(0, ${offset * -0.4}px, 0)`;
  });
};

const initCounters = () => {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const animate = (el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const tick = () => {
      current += step;
      if (current >= target) {
        el.textContent = target;
        return;
      }
      el.textContent = current;
      requestAnimationFrame(tick);
    };
    tick();
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  counters.forEach(counter => observer.observe(counter));
};

initTheme();
document.querySelector('.page')?.classList.add('loaded');
initNavUnderline();
initMobileMenu();
initSmoothScroll();
initReveal();
initParallax();
initCounters();

themeToggle?.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  setTheme(next);
});
