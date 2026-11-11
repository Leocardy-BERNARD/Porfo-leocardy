document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  const setActiveLink = () => {
    if (navLinks.length === 0) return;

    let currentId = sections[0]?.id;
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
    });
  };

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();

  const header = document.getElementById("header");
  const onScrollHeader = () => {
    if (!header) return;
    header.style.boxShadow = window.scrollY > 10 ? "0 8px 24px rgba(0,0,0,0.25)" : "none";
  };
  window.addEventListener("scroll", onScrollHeader);
  onScrollHeader();

  const revealTargets = document.querySelectorAll(
    ".section, .skill-card, .project-card, .about-grid, .contact-grid, .veille-card, .veille-method-card"
  );
  revealTargets.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: "0px 0px -12% 0px" }
  );
  revealTargets.forEach((el) => observer.observe(el));

  const backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const form = document.getElementById("contact-form");
  const formNote = document.getElementById("form-note");

  if (form && formNote) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      formNote.textContent = "Merci ! Ton message a bien été préparé (branche le formulaire à un service d'envoi pour qu'il parte réellement — voir le README).";
      form.reset();
    });
  }
});
