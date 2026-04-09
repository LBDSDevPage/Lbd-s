// ── SLIDER ──────────────────────────────────────────────────────────────────
const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".hero-dot");
let cur = 0;

if (slides.length && dots.length) {
  function goTo(i) {
    slides[cur].classList.remove("active");
    dots[cur].classList.remove("active");
    cur = (i + slides.length) % slides.length;
    slides[cur].classList.add("active");
    dots[cur].classList.add("active");
  }

  document
    .getElementById("next")
    ?.addEventListener("click", () => goTo(cur + 1));
  document
    .getElementById("prev")
    ?.addEventListener("click", () => goTo(cur - 1));
  dots.forEach((d) => d.addEventListener("click", () => goTo(+d.dataset.i)));

  setInterval(() => goTo(cur + 1), 15000);
}
