const burger = document.querySelector(".openMenu");
const nav = document.querySelector(".navAnimation");
const links = document.querySelectorAll(".link");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
  links.forEach((element) => {
    element.addEventListener("click", () => {
      if (nav.classList.contains("open")) {
        nav.classList.remove("open");
      }
    });
  });
});
