import { gsap } from "./gsap/src/all.js";
import { Power0, Power1, Power2, Power3, Power4 } from "./gsap/src/all.js";

const btn =  document.querySelector('.openMenu');

const tl = gsap.timeline();
function animationNavbar() {
    tl.to('nav',{
        y:0,
        duration:1,
        autoAlpha:1,
        ease: Power4,
    }).to('a',{
        autoAlpha:1,
        stagger: 0.7,
        ease:Power2
    })
    .reverse();
}

(function open(){
    animationNavbar()
    btn.addEventListener('click', ()=>{
        tl.reversed(!tl.reversed())
     })
}());

// open modale
const openModale = document.querySelectorAll('.openModale');
const Modale =  document.querySelector('#modale');
const closeModale = document.querySelector('#close-btn');

const tiltel = document.querySelector("#title")


openModale.forEach(el=>{
    el.addEventListener('click', ()=>{
        if(el.dataset.id === "Porject1"){
            Modale.style.display="block"
            tiltel.firstChild.data = project["project1 "].nom
        }

        if(el.dataset.id === "Porject2"){
            Modale.style.display="block"
            tiltel.firstChild.data = project["project2 "].nom
        }
    })
})

closeModale.addEventListener('click', ()=>{
    Modale.style.display="none"
})


let project = {
    "project1 " : {
        "nom" : "App git",
        "Details" : "You can easily create sticky or fixed header and footer using the CSS fixed positioning.",
        "technos" : "HTML,",
        "technos2": "Css",
        "technos3": "js",
    },
    "project2 " : {
        "nom" : "Dereje",
        "Details" : "You can easily create sticky or fixed header and footer using the CSS fixed positioning.",
        "technos" : "HTML,",
        "technos2": "Css",
        "technos3": "js",
    }
}


