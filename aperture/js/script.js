"use strict"

document.addEventListener("click", documentActions)

function documentActions(e) {
    const targetElement = e.target

    if (targetElement.closest(".header__burger")) {
        document.documentElement.classList.toggle("menu-open")
    }
}


function scrollTo(element) {
    element.scrollIntoView({
        block: "end",
        inline: "nearest",
        behavior: "smooth"
    })
}

const heroBottomElement = document.querySelector(".hero__block-bottom-info")
scrollTo(heroBottomElement)