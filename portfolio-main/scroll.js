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


