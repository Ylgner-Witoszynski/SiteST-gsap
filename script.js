gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText)

ScrollSmoother.create({
    smooth:1,
    effects:true
})

function animarPagina(){
    gsap.from(".hero", {
        opacity: 0,
        duration: 1
    })

    gsap.from("picture:nth-child(2)", {
        y: 60,
        duration: 1
    })

    gsap.from("picture:nth-child(1)", {
        y: -60,
        duration: 1
    })

    gsap.from(".card", {
        opacity: 0,
        filter: "blur(20px)",
        stagger: .3,
        scrollTrigger: {
            trigger: ".card",
            start: "0% 80%",
            end: "100% 70%",
            scrub: true
        }
    })

    gsap.from(".secaoObrigado ul li", {
        opacity: 0,
        x: 40,
        filter: "blur(10px)",
        stagger: .03,
        scrollTrigger: {
            trigger: ".secaoObrigado ul",
            start: "0% 80%",
            end: "100% 50%",
            scrub: true
        }
    })


    gsap.from("footer", {
        y: "-30%",
        immediateRender: false,
        scrollTrigger: {
            trigger: "footer",
            start: "0% 80%",
            scrub: true,
            invalidateOnRefresh: true,
            end: "100% 100%"
        }
    })


    const grupoTextoSplit = document.querySelectorAll(".textoSplit");

    grupoTextoSplit.forEach(textoUnicoSplit => {
        const split = SplitText.create(textoUnicoSplit, {
            type: "lines, words,chars",
            mask: "lines"
        })

        gsap.from(split.chars, {
            y: 40,
            opacity: 0,
            duration: .3,
            stagger: .03,
            scrollTrigger: {
                trigger: textoUnicoSplit,
                start: "top 85%",
                end: "bottom 15%"
            }
        })
    })
}

const tl = gsap.timeline({
    onComplete(){
        animarPagina();
        gsap.to("#loading", {
            opacity: 0,
            display: "none"
        })
    }
});

tl.to("#loading path", {
    duration: 1,
    strokeDashoffset: 0,
})

tl.to("#loading path", {
    fill: "rgb(168,19,19)",
    duration: .5,
    strokeDashoffset: 0
})
