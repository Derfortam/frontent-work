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

function redirectPortfolio(event) {
    event.preventDefault()
    window.location.href = "portfolio.html"
}

function redirectContacts(event) {
    event.preventDefault()
    window.location.href = "contacts.html"
}

// ========================================================================================
// ========================================================================================

// переміщення кнопки в навігаційному списку


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


// // свайпер для першого слайдера

// const photographyContentSlider = document.querySelector('#photography-body')
// if (photographyContentSlider) {
//     new Swiper('#photography-body', {
//         navigation: {
//             nextEl: '.next-portrait',
//             prevEl: '.back-portrait'
//         },
//         grabCursor: true,
//         keyboard: {
//             enabled: true,
//             onlyInVieport: true,
//             pageDown: true,
//         },
//         mousewheel: {
//             sensitivity: 1,
//             eventsTarget: "#photography-body"
//         },
//         slidesPerView: 1,
//         watchOverFlow: true,
//         spaceBetween: 30,
//         centeredSlides: true,
//         initialSlide: 3,
//     })
// }

// // ========================================================================================

// // свайпер для 2 слайдера

// const photographyEventSlider = document.querySelector('#event-body')
// if (photographyEventSlider) {
//     new Swiper('#event-body', {
//         navigation: {
//             nextEl: '.event-next',
//             prevEl: '.event-back'
//         },
//         grabCursor: true,
//         keyboard: {
//             enabled: true,
//             onlyInVieport: true,
//             pageDown: true,
//         },
//         mousewheel: {
//             sensitivity: 1,
//             eventsTarget: "#event-body"
//         },
//         slidesPerView: 1,
//         watchOverFlow: true,
//         spaceBetween: 30,
//         centeredSlides: true,
//         initialSlide: 3,
//     })
// }

// // ========================================================================================

// // свайпер для 3 слайдера

// const photographyCommercialSlider = document.querySelector('#commercial-body')
// if (photographyCommercialSlider) {
//     new Swiper('#commercial-body', {
//         navigation: {
//             nextEl: '.commercial-next',
//             prevEl: '.commercial-back'
//         },
//         grabCursor: true,
//         keyboard: {
//             enabled: true,
//             onlyInVieport: true,
//             pageDown: true,
//         },
//         mousewheel: {
//             sensitivity: 1,
//             eventsTarget: "#commercial-body"
//         },
//         slidesPerView: 1,
//         watchOverFlow: true,
//         spaceBetween: 30,
//         centeredSlides: true,
//         initialSlide: 3,
//     })
// }

// ========================================================================================
// ========================================================================================


// Делегування

document.addEventListener("click", documentActions)

function documentActions(e) {
    const targetElement = e.target
    e.preventDefault()

    if (targetElement.closest('.header__burger')) {

        document.body.classList.toggle('menu-open')
    }
    else if (targetElement.closest('.ask__item')) {
        const parentAskItem = targetElement.closest('.ask__item');
        if (parentAskItem) {
            parentAskItem.classList.toggle('answer-open')
            // Знаходимо елемент відповіді в межах батьківського елемента
            const askAnswer = parentAskItem.querySelector('.ask__answer')

            if (askAnswer) {
                askAnswer.hidden = !parentAskItem.classList.contains('answer-open')

                setInterval(() => {
                    askAnswer.style.opacity = 1
                    askAnswer.style.transform = 'translateY(0)'
                }, 100)

                askAnswer.style.opacity = 0
                askAnswer.style.transform = 'translateY(-50%)'
            }
        }
    }
}




// ========================================================================================
// ========================================================================================

//  Анімування рекламної стрічки

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

// виклик анімація при завантажені сайту
window.addEventListener('load', () => {
    Marquee('.animation-line', speedAnimationValue)
})