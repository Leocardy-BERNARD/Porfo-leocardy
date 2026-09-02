// Portfolio — Ekko — script principal (vanilla JS)


document.addEventListener("DOMContentLoaded", () => {
  /* Année dynamique dans le footer */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Menu burger (mobile) */
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(isOpen));
    });

    // Ferme le menu quand on clique sur un lien (mobile)
    nav.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }


  /*  Lien de navigation actif au scroll */
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const setActiveLink = () => {
    let currentId = sections[0]?.id;
    const scrollPos = window.scrollY + 120; // décalage pour le header fixe

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

  /*  Header : ombre légère au scroll */
  const header = document.getElementById("header");
  const onScrollHeader = () => {
    if (!header) return;
    header.style.boxShadow = window.scrollY > 10 ? "0 8px 24px rgba(0,0,0,0.25)" : "none";
  };
  window.addEventListener("scroll", onScrollHeader);
  onScrollHeader();

  /*  Animations d'apparition au scroll*/
  const revealTargets = document.querySelectorAll(
    ".section, .skill-card, .project-card, .about-grid, .contact-grid"
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
    { threshold: 0.15 }
  );
  revealTargets.forEach((el) => observer.observe(el));

  /*  Retour en haut */
  const backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /*  Formulaire de contact
     Pas de backend ici : ce formulaire affiche juste un message
     de confirmation côté client. Pour qu'il envoie réellement des
     emails une fois déployé, branche-le sur un service gratuit
     compatible sites statiques (ex : Cloudflare Pages Functions,
     Formspree, ou Web3Forms) — voir le README pour les instructions.*/
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
