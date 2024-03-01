let prevScrollpos = window.scrollY;
const topnav = document.getElementById("topnav");

function anim() {
    let sections = gsap.utils.toArray(".panel");


    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#works",
            start: "top top",
            pin: true,
            scrub: 1,
            snap: {
                snapTo: [0, 0.5, 1],
                directional: false
            },
            end: () => "+=" + document.querySelector("#works").offsetWidth
        }
    });
}


window.addEventListener('load', () => {
    const loadingScreen = document.getElementById("loading");
    setTimeout(function () {
        loadingScreen.style.display = 'none';
    }, 2000); // Ritardo di 2000 millisecondi (2 second1)
})

window.addEventListener('scroll', () => {
    let currentScrollPos = window.scrollY;


    if (prevScrollpos < currentScrollPos) {
        // Scroll down
        topnav.classList.add("hidden");
    } else {
        // Scroll up
        topnav.classList.remove("hidden");

    }
    prevScrollpos = currentScrollPos;
});

document.addEventListener("DOMContentLoaded", anim)
