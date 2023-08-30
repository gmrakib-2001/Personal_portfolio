/* --------------------------- Toggler style switcher --------------------------- */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
//Hide style switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})
/* --------------------------- Theme colors --------------------------- */

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    console.log("Setting style for color:", color);

    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            console.log("Enabling style:", style.getAttribute("title"));
            style.removeAttribute("disabled");
        } else {
            console.log("Disabling style:", style.getAttribute("title"));
            style.setAttribute("disabled", "true");
        }
    })
}
/* --------------------------- Theme light and dark mode --------------------------- */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})