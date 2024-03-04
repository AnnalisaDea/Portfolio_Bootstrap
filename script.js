let prevScrollpos = window.scrollY;
const topnav = document.getElementById("topnav");
const hamburgerButton = document.querySelector("#topnav button");
const navLinks = document.querySelectorAll(".nav-link");
const containerLinks = document.getElementById("navbarNav");

function anim() {
    let sections = gsap.utils.toArray(".panel");
    
    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#works",
            start: "top top",
            pin: true,
            scrub: true,
            snap: {
                snapTo: [0, 0.5, 1],
                directional: false
            },
            end: () => "+=" + document.querySelector("#works").offsetWidth
        }
    });
}


function hiddenNavlink() {
    //quando clicca su un link si chiude la navbar
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
           containerLinks.classList.remove("show");
        })
    });
}

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById("loading");
    setTimeout(function () {
        loadingScreen.style.display = 'none';
    }, 2000); // Ritardo di 2000 millisecondi 
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


document.addEventListener("DOMContentLoaded", ()=>{
    //richiama l'animazione per work    
    anim();

    //evento click hamburgerButton
    hamburgerButton.addEventListener("click", hiddenNavlink);
})
