let prevScrollpos = window.scrollY;
const topnav = document.getElementById("topnav");


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


