/* ================= SCROLL REVEAL ANIMATION ================= */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

/* Observe sections */
document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section);
});

/* Observe cards & footer for smooth reveal */
document.querySelectorAll(".card, .service, footer, .premium-footer").forEach((el) => {
  el.classList.add("section");
  observer.observe(el);
});

/* ================= NAV ACTIVE LINK (OPTIONAL UX BOOST) ================= */

const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
