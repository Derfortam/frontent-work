"use strict"

// перехід на інші сторінки

function redirectHome(event) {
    event.preventDefault()
    window.location.href = "index.html"
}
function redirectAbout(event) {
    event.preventDefault()
    window.location.href = "about.html"
}
function redirectServices(event) {
    event.preventDefault()
    window.location.href = "services.html"
}
function redirectPortfolio(event) {
    event.preventDefault()
    window.location.href = "portfolio.html"
}


// ========================================================================================
// ========================================================================================

// переміщення кнопки у меню в інший контейнер

const navigationBlock = document.querySelector('.header__navigation')
const navigationButton = document.querySelector('.header__button')
const headerContainer = document.querySelector('.header__container')
function resize() {
    if (navigationButton) {
        // Перевіряємо ширину екрану
        if (window.innerWidth <= 704) {
            // Переміщаємо елемент в новий контейнер
            navigationBlock.appendChild(navigationButton)
        } else {
            headerContainer.appendChild(navigationButton)
        }
    }
}

window.addEventListener('load', resize)
window.addEventListener('resize', resize)

// ========================================================================================
// ========================================================================================

// використаня асинхронної функції для перевіщення елементів у HTML
const contentHero = document.querySelector('.hero__content')
async function changeContentHero() {
    if (contentHero) {
        const contentHeroDisplay = window.getComputedStyle(contentHero).getPropertyValue('display')
        const imageContainer = document.querySelector('.hero__background')
        const socialMedia = document.querySelector('.social-media')
        if (contentHeroDisplay === 'block') {
            console.log('Goood')
            imageContainer.insertAdjacentElement("beforeend", socialMedia)
        } else {
            console.log('Error')
            contentHero.insertAdjacentElement("afterbegin", socialMedia)
        }
    }
}
window.addEventListener('resize', changeContentHero)
changeContentHero()

// ========================================================================================
// ========================================================================================

// ще одна асинхронна функція

// async function changeSliderPlace(element, width, oldPlace, newPlace, oldPosition, newPosition) {
//     if (element) {
//         if (window.innerWidth <= width) {
//             newPlace.insertAdjacentElement(newPosition, element)
//         } else {
//             oldPlace.insertAdjacentElement(oldPosition, element)
//         }
//     }
// }

// const clientsSlider = document.querySelector('#clientsSlider')
// const clientsNewPlace = document.querySelector('.clients__container')
// const clientsOldPlace = document.querySelector('#commentsOldPlace')
// window.addEventListener('resize', function () {
//     changeSliderPlace(clientsSlider, 797, clientsOldPlace, clientsNewPlace, "afterbegin", "beforeend");
// })

// changeSliderPlace(clientsSlider, 797, clientsOldPlace, clientsNewPlace, "afterbegin", "beforeend")


// ========================================================================================
// ========================================================================================

// слайде для коментарів

// const commentBox = document.querySelector(".clients")
// if (commentBox) {
//     new Swiper('.comment__box', {
//         // стрілки виводяться через before, after ті, що за замовченням в html
//         // можна вказувати будь які стрілки

//         navigation: {
//             nextEl: '#nextComment',
//             prevEl: '#backComment'
//         },
//         grabCursor: true,
//         keyboard: {
//             enabled: true,
//             onlyInVieport: true,
//             pageDown: true,
//         },
//         mousewheel: {
//             sensitivity: 1,
//             eventsTarget: ".clients__container"
//         },
//         slidesPerView: '3',
//         watchOverFlow: true,
//         spaceBetween: 30,
//         //slidesPerGroup: 3,
//         centeredSlides: true,
//         initialSlide: 3,

//         // є різні ефекти  fade flip cube coverFlow
//         effect: "coverflow",
//         coverFlowEffect: {
//             rotate: 20,
//             stretch: 50,
//             slideShadows: true,
//         },
//         breakpoints: {
//             320: {
//                 slidesPerView: 1,
//             },
//             670: {
//                 slidesPerView: 2,
//             },
//             1020: {
//                 slidesPerView: 3,
//             }
//         }
//     })
// }

// ========================================================================================

// анімування рекламної лінії 

const animationLine = document.querySelectorAll('.animation-line')

function atributeToNumber(element) {
    return parseFloat(element)
}

let laptopSpeed
let tabletSpeed
let phoneSpeed

animationLine.forEach((item) => {
    laptopSpeed = item.dataset.speedLaptop
    tabletSpeed = item.dataset.speedTablet
    phoneSpeed = item.dataset.speedPhone
})

laptopSpeed = atributeToNumber(laptopSpeed)
tabletSpeed = atributeToNumber(tabletSpeed)
phoneSpeed = atributeToNumber(phoneSpeed)

let speedAnimationValue = laptopSpeed
if (window.innerWidth <= 797 && window.innerWidth >= 450) {
    speedAnimationValue = tabletSpeed
} else if (window.innerWidth < 450) {
    speedAnimationValue = phoneSpeed
} else {
    speedAnimationValue = laptopSpeed
}


function Marquee(selector, speed) {
    const parents = document.querySelectorAll(selector)

    parents.forEach((parent) => {
        const clone = parent.innerHTML
        let i = 0
        parent.innerHTML += clone

        setInterval(() => {
            i += speed
            if (i >= parent.children[0].clientWidth) i = 0
            parent.children[0].style.marginLeft = `-${i}px`
        }, 0)
    })
}

window.addEventListener('load', () => {
    Marquee('.animation-line', speedAnimationValue)
})




// ========================================================================================
// ========================================================================================

// Делегування та відстеження кліка

document.addEventListener("click", documentActions)

function documentActions(e) {
    const targetElement = e.target
    e.preventDefault()

    if (targetElement.closest('.header__burger')) {

        document.body.classList.toggle('menu-open')
    }

}