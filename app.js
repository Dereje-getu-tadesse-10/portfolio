import { gsap } from "./gsap/src/all.js";
import { Power0, Power1, Power2, Power3, Power4 } from "./gsap/src/all.js";

const btn =  document.querySelector('.openMenu');

const tl = gsap.timeline();
function animationNavbar() {
    tl.to('nav',{
        y:0,
        duration:1,
        // autoAlpha:1,
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

// svg anime

