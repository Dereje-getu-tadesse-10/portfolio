
const btn = document.querySelector(".openMenu");

const tl = gsap.timeline();
function animationNavbar() {
  tl.to(".navAnimation", {
    y: 0,
    autoAlpha: 1,
    ease: Power4,
  })
    .to("a", {
      autoAlpha: 1,
      stagger: 0.4,
      ease: Power2,
    })
    .reverse();
}

(function open() {
  animationNavbar();
  btn.addEventListener("click", () => {
    tl.reversed(!tl.reversed());
  });
})();

