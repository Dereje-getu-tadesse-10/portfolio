const burger = document.querySelector(".openMenu");
const nav = document.querySelector(".navAnimation");
const links = document.querySelectorAll(".link");

//anime home page gsap
const logoHeader = document.querySelector("#logo");
const buttonMenu = document.querySelector(".openMenu");
const titleHomePage = document.querySelector(".titleHome");
const spanHomepage = document.querySelector('.iam');
const miniPresentation = document.querySelector(".welcome");

window.addEventListener('load', ()=>{
  loadAnimation();
});

// function animation
function loadAnimation(){
  let tl;
  tl = gsap.timeline();
  tl.to(titleHomePage,{
    y:0,
    autoAlpha:1,
    delay:0.2
  })
  tl.to(logoHeader,{
    x:0,
    autoAlpha:1,
    delay:0.2
  })
  tl.to(buttonMenu,{
    x:0,
    autoAlpha:1,
    delay:0.2
  })
  tl.to(spanHomepage,{
    y:0,
    autoAlpha:1,
    delay:0.2
  })
  tl.to(miniPresentation,{
    y:0,
    autoAlpha:1,
    delay:0.2
  })
}


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

// get current year span html
const spanYear = document.querySelector(".currentYear");
let currentYear = new Date().getFullYear()
spanYear.textContent = currentYear;

// Cursor
let cursor = document.querySelector(".cursor");
let cursorinner = document.querySelector(".cursor2");
let a = document.querySelectorAll("a");

document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", () => {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", () => {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});

//end cursor

// home page

