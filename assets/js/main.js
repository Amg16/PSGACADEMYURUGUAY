/* ═══════════════════════════════════════════════════════════════════
   PSG ACADEMY URUGUAY · MAIN JS
   ───────────────────────────────────────────────────────────────────
   Stack:  GSAP 3.12 + ScrollTrigger + Lenis (smooth scroll)
   Maneja:  preloader, smooth scroll, cursor, scroll progress, header,
            mobile menu, reveal animations, parallax, counters,
            magnetic buttons, form handler.
   ═══════════════════════════════════════════════════════════════════ */

(() => {
  'use strict';

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ─── PRELOADER ─────────────────────────────────────────────── */
  const initPreloader = () => {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    requestAnimationFrame(() => preloader.classList.add('loading'));

    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('hidden');
        animateHeroEntrance();
      }, 1600);
    });

    setTimeout(() => {
      if (!preloader.classList.contains('hidden')) {
        preloader.classList.add('hidden');
        animateHeroEntrance();
      }
    }, 3500);
  };

  /* ─── SMOOTH SCROLL (Lenis) ─────────────────────────────────── */
  let lenis = null;
  const initSmoothScroll = () => {
    if (REDUCED_MOTION || typeof Lenis === 'undefined') return;

    lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId.length > 1) {
          const target = document.querySelector(targetId);
          if (target) {
            e.preventDefault();
            lenis.scrollTo(target, { offset: -60, duration: 1.6 });
            document.getElementById('mobile-menu')?.classList.remove('open');
          }
        }
      });
    });
  };

  /* ─── CUSTOM CURSOR ─────────────────────────────────────────── */
  const initCustomCursor = () => {
    const dot  = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    if (!dot || !ring || window.matchMedia('(hover: none)').matches) return;

    let mx = 0, my = 0;
    let dx = 0, dy = 0;
    let rx = 0, ry = 0;

    window.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });

    const render = () => {
      dx += (mx - dx) * 0.6;
      dy += (my - dy) * 0.6;
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      dot.style.transform  = `translate(${dx - 3}px, ${dy - 3}px)`;
      ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      requestAnimationFrame(render);
    };
    render();

    /* Delegated hover detector (incluye tarjetas inyectadas por la API) */
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, .venue-card, .program-card, .fixture-card')) {
        ring.classList.add('cursor-hover');
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('a, button, .venue-card, .program-card, .fixture-card')) {
        ring.classList.remove('cursor-hover');
      }
    });
  };

  /* ─── SCROLL PROGRESS ──────────────────────────────────────── */
  const initScrollProgress = () => {
    const bar = document.querySelector('.scroll-progress');
    if (!bar) return;
    const update = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
      bar.style.width = (scrolled * 100) + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  };

  /* ─── HEADER SCROLL ────────────────────────────────────────── */
  const initHeaderScroll = () => {
    const header = document.getElementById('main-header');
    if (!header) return;
    const handler = () => {
      if (window.scrollY > 80) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
  };

  /* ─── MOBILE MENU ──────────────────────────────────────────── */
  const initMobileMenu = () => {
    const toggle = document.getElementById('mobile-toggle');
    const menu   = document.getElementById('mobile-menu');
    const close  = document.getElementById('mobile-close');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', () => menu.classList.add('open'));
    close?.addEventListener('click', () => menu.classList.remove('open'));
  };

  /* ─── HERO ENTRANCE ────────────────────────────────────────── */
  const animateHeroEntrance = () => {
    if (REDUCED_MOTION) return;
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

    tl.to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.8, delay: 0.2 })
      .to('.hero-line .inline-block', { y: 0, duration: 1.2, stagger: 0.12 }, '-=0.5')
      .to('.hero-sub',   { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
      .to('.hero-ctas',  { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      .to('.hero-scroll',{ opacity: 1, duration: 0.6 }, '-=0.3');

    /* Parallax suave del video del hero */
    gsap.to('.hero-video', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.8,
      },
    });
  };

  /* ─── SCROLL REVEALS ───────────────────────────────────────── */
  const initScrollReveals = () => {
    if (REDUCED_MOTION) {
      gsap.set('.reveal-up, .reveal-line .inline-block', { opacity: 1, y: 0, clearProps: 'all' });
      return;
    }

    document.querySelectorAll('.reveal-headline').forEach(heading => {
      const lines = heading.querySelectorAll('.reveal-line .inline-block');
      if (!lines.length) return;

      gsap.to(lines, {
        y: 0,
        duration: 1.1,
        ease: 'expo.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: heading,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });

    document.querySelectorAll('.reveal-up').forEach(el => {
      const delay = parseFloat(el.dataset.delay) || 0;
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });
  };

  /* ─── PARALLAX ─────────────────────────────────────────────── */
  const initParallax = () => {
    if (REDUCED_MOTION) return;

    document.querySelectorAll('.parallax-img').forEach(img => {
      const speed = parseFloat(img.dataset.speed) || 0.3;
      gsap.fromTo(img,
        { yPercent: -speed * 30 },
        {
          yPercent: speed * 30,
          ease: 'none',
          scrollTrigger: {
            trigger: img.closest('.parallax-frame') || img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    });
  };

  /* ─── COUNTERS ─────────────────────────────────────────────── */
  const initCounters = () => {
    document.querySelectorAll('.counter').forEach(el => {
      const target = parseInt(el.dataset.target, 10) || 0;

      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => {
          if (REDUCED_MOTION) { el.textContent = target.toLocaleString('es-UY'); return; }
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: 'power3.out',
            onUpdate: () => {
              el.textContent = Math.round(obj.val).toLocaleString('es-UY');
            },
          });
        },
        once: true,
      });
    });
  };

  /* ─── MAGNETIC BUTTONS ─────────────────────────────────────── */
  const initMagneticButtons = () => {
    if (REDUCED_MOTION || window.matchMedia('(hover: none)').matches) return;

    document.querySelectorAll('.btn-magnetic').forEach(btn => {
      const strength = 0.35;

      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width  / 2;
        const y = e.clientY - rect.top  - rect.height / 2;

        gsap.to(btn, {
          x: x * strength,
          y: y * strength,
          duration: 0.6,
          ease: 'power3.out',
        });
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: 'elastic.out(1, 0.4)',
        });
      });
    });
  };

  /* ─── FORM HANDLER ─────────────────────────────────────────── */
  const initForm = () => {
    const form = document.getElementById('signup-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        gsap.fromTo(form, { x: -8 }, { x: 0, duration: 0.4, ease: 'elastic.out(1, 0.3)' });
        return;
      }

      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<span>Enviando…</span>';
      btn.disabled = true;

      /* TODO: integrar con backend / Formspree / Netlify Forms */
      setTimeout(() => {
        btn.innerHTML = '<span>¡Inscripción enviada!</span>';
        btn.style.background = '#16a34a';
        form.reset();
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.background = '';
          btn.disabled = false;
        }, 3500);
      }, 1200);
    });
  };

  /* ─── INIT ─────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initSmoothScroll();
    initCustomCursor();
    initScrollProgress();
    initHeaderScroll();
    initMobileMenu();
    initScrollReveals();
    initParallax();
    initCounters();
    initMagneticButtons();
    initForm();
  });

  window.addEventListener('load', () => {
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  });
})();
