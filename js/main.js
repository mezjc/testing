document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

const nav = document.querySelector(".nav-main");

window.addEventListener("scroll", function () {
  nav.classList.toggle("active", window.scrollY > 0);
});

// ScrollReveal().reveal(".showcase");
// ScrollReveal().reveal(".showcase h2", { delay: 700 });
ScrollReveal().reveal(".showcase p", { delay: 500 });
ScrollReveal().reveal(".nav-menu", { delay: 500 });
ScrollReveal().reveal(".new-cards", { delay: 500 });
ScrollReveal().reveal(".cards-banner-one", { delay: 500 });
ScrollReveal().reveal(".trabajan-seguros", { delay: 500 });
ScrollReveal().reveal(".empresas", { delay: 500 });
ScrollReveal().reveal(".contacto", { delay: 500 });
ScrollReveal().reveal(".footer-links", { delay: 500 });
ScrollReveal().reveal(".social", { delay: 500 });
