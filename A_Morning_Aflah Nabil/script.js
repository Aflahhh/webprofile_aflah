/open & close the menu on hamburger menu/;
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
// swiper
const swiper = new Swiper(".myswiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifer: 1,
    slideShadow: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
// SCROLL ANIMASI
const sr = ScrollReveal({
  distance: "50px",
  duration: 1500,
  easing: "cubic-bezier(0.68, -0.55, 0.26s, 1.55)",
});

sr.reveal(".text-box, .hero-btn, h1, p, .section-metadata, .swiper-slide", {
  origin: "top",
  interval: 250,
});
sr.reveal(".wrapper, .box, .front-face", {
  origin: "left",
});
