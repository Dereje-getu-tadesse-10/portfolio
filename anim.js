const btn = document.querySelector(".openMenu");

const tl = gsap.timeline();
// function animationNavbar() {
//   tl.to(".navAnimation", {
//     y: 0,
//     autoAlpha: 1,
//     ease: Power4,
//   })
//     .to("a", {
//       autoAlpha: 1,
//       stagger: 0.4,
//       ease: Power2,
//     })
//     .reverse();
// }

// (function open() {
//   animationNavbar();
//   btn.addEventListener("click", () => {
//     tl.reversed(!tl.reversed());
//   });
// })();

const burger = document.querySelector("#burger");

const tl = gsap.timeline();

tl.to(".menu-link", {
  translateY: "100%",
  duration: 0.5,
});

tl.to(".menu-overlay", {
  width: "0",
});

burger.addEventListener("click", () => {
  tl.reversed(!tl.reversed());
});
