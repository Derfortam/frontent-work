"use strict"

async function changeSliderPlace(element, width, oldPlace, newPlace, oldPosition, newPosition) {
    if (element && oldPlace && newPlace) {
        if (window.innerWidth <= width) {
            newPlace.insertAdjacentElement(newPosition, element);
        } else {
            oldPlace.insertAdjacentElement(oldPosition, element);
        }
    }
}
// async function changeSliderPlace(element, width, oldPlace, newPlace, oldPosition, newPosition) {
//     if (element) {
//         if (window.innerWidth <= width) {
//             newPlace.insertAdjacentElement(newPosition, element)
//         } else {
//             oldPlace.insertAdjacentElement(oldPosition, element)
//         }
//     }
// }

const servicesSliderIcon = document.querySelector('.titling__slider')
const servicesSliderPlace = document.querySelector('.titling__slider-area')
const servicesSliderNewPlace = document.querySelector('.services__container')

if (servicesSliderIcon) {
    window.addEventListener('load', changeSliderPlace(servicesSliderIcon, 1086, servicesSliderPlace, servicesSliderNewPlace, "afterbegin", "beforeend"))
    window.addEventListener('resize', changeSliderPlace(servicesSliderIcon, 1086, servicesSliderPlace, servicesSliderNewPlace, "afterbegin", "beforeend"))
    window.addEventListener('resize', function () {
        changeSliderPlace(servicesSliderIcon, 1086, servicesSliderPlace, servicesSliderNewPlace, "afterbegin", "beforeend")
    })
    changeSliderPlace(servicesSliderIcon, 1086, servicesSliderPlace, servicesSliderNewPlace, "afterbegin", "beforeend")

}

const portfolioSlider = document.querySelector('#portfolioSlider')
const portfolioNewPlace = document.querySelector('.portfolio__container')
const portfolioOldPlace = document.querySelector('#portfolioSliderOldPlace')
if (portfolioSlider) {
    window.addEventListener('load', changeSliderPlace(portfolioSlider, 1086, portfolioOldPlace, portfolioNewPlace, "afterbegin", "beforeend"))
    window.addEventListener('resize', function () {
        changeSliderPlace(portfolioSlider, 1086, portfolioOldPlace, portfolioNewPlace, "afterbegin", "beforeend")
    })
    changeSliderPlace(portfolioSlider, 1086, portfolioOldPlace, portfolioNewPlace, "afterbegin", "beforeend")
}

const clientsSlider = document.querySelector('#clientsSlider')
const clientsNewPlace = document.querySelector('.clients__container')
const clientsOldPlace = document.querySelector('#commentsOldPlace')
if (clientsSlider) {
    window.addEventListener('load', changeSliderPlace(clientsSlider, 797, clientsOldPlace, clientsNewPlace, "afterbegin", "beforeend"))
    window.addEventListener('resize', function () {
        changeSliderPlace(clientsSlider, 797, clientsOldPlace, clientsNewPlace, "afterbegin", "beforeend")
    })
    changeSliderPlace(clientsSlider, 797, clientsOldPlace, clientsNewPlace, "afterbegin", "beforeend")

}




// portfolio
const portraitSlider = document.querySelector('#portrait-slider')
const portraitNewPlace = document.querySelector('#portrait-new-place')
const portraitOldPlace = document.querySelector('#portrait-old-place')

if (portraitSlider) {
    window.addEventListener('load', changeSliderPlace(portraitSlider, 600, portraitOldPlace, portraitNewPlace, "beforeend", "beforeend"))
    window.addEventListener('resize', function () {
        changeSliderPlace(portraitSlider, 600, portraitOldPlace, portraitNewPlace, "beforeend", "beforeend")
    })
    changeSliderPlace(portraitSlider, 600, portraitOldPlace, portraitNewPlace, "beforeend", "beforeend")
}


const eventSlider = document.querySelector('#event-slider')
const eventNewPlace = document.querySelector('#event-new-place')
const eventOldPlace = document.querySelector('#event-old-place')

if (eventSlider) {
    window.addEventListener('load', changeSliderPlace(eventSlider, 600, eventOldPlace, eventNewPlace, "beforeend", "beforeend"))
    window.addEventListener('resize', function () {
        changeSliderPlace(eventSlider, 600, eventOldPlace, eventNewPlace, "beforeend", "beforeend")
    })
    changeSliderPlace(eventSlider, 600, eventOldPlace, eventNewPlace, "beforeend", "beforeend")
}

const commercialSlider = document.querySelector('#commercial-slider')
const commercialNewPlace = document.querySelector('#commercial-new-place')
const commercialOldPlace = document.querySelector('#commercial-old-place')

if (commercialSlider) {
    window.addEventListener('load', changeSliderPlace(commercialSlider, 600, commercialOldPlace, commercialNewPlace, "beforeend", "beforeend"))
    window.addEventListener('resize', function () {
        changeSliderPlace(commercialSlider, 600, commercialOldPlace, commercialNewPlace, "beforeend", "beforeend")
    })
    changeSliderPlace(commercialSlider, 600, commercialOldPlace, commercialNewPlace, "beforeend", "beforeend")
}

// const clientsSlider = document.querySelector('#clientsSlider')
// const clientsNewPlace = document.querySelector('.clients__container')
// const clientsOldPlace = document.querySelector('#commentsOldPlace')

// if (clientsSlider) {
//     window.addEventListener('load', changeSliderPlace(clientsSlider, 797, clientsOldPlace, clientsNewPlace, "afterbegin", "beforeend"))
//     window.addEventListener('resize', function () {
//         changeSliderPlace(clientsSlider, 797, clientsOldPlace, clientsNewPlace, "afterbegin", "beforeend")
//     })
//     changeSliderPlace(clientsSlider, 797, clientsOldPlace, clientsNewPlace, "afterbegin", "beforeend")
// }