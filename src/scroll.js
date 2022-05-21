const scroll = gsap.timeline();


scroll.to('#poulet', {
    scrollTrigger: {
        trigger: '#poulet',
        start: 'top 60%',
        onEnter: () => {
            scroll.to('#poulet', {
                x: 0,
                autoAlpha: 1
            }),
                scroll.to('.paragraphe', {
                    x: 0,
                    autoAlpha: 1
                })
        }
    }
})

function animationProject(){
    const scroll = gsap.timeline();
    scroll.to('.myProjectItems', {
        scrollTrigger: {
            trigger: '.projectItems',
            start: 'top 60%',
            onEnter: () => {
                scroll.to('.projectItems', {
                    autoAlpha: 1,
                    stagger:.3,
                    duration:.3,
                })
            }
        }
    })
}

function animationLabs(){
    const scroll = gsap.timeline();
    scroll.to('.labsItems', {
        scrollTrigger: {
            trigger: '.labosItems',
            start: 'top 50%',
            onEnter: () => {
                scroll.to('.labosItems', {
                    autoAlpha: 1,
                    stagger:.3,
                    duration:.2,
                })
            }
        }
    })
}

export { animationProject, animationLabs };


