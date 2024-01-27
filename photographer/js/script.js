"use strict"


function changeSliderPlace(element, width, oldPlace, newPlace, oldPosition, newPosition) {
    if (element) {
        if (window.innerWidth <= width) {
            newPlace.insertAdjacentElement(newPosition, element)
        } else {
            oldPlace.insertAdjacentElement(oldPosition, element)
        }
    }
}




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

// ------------------------------------------------------------------------------------


const servicesSliderIcon = document.querySelector('.titling__slider')
const servicesSliderPlace = document.querySelector('.titling__slider-area')
const servicesSliderNewPlace = document.querySelector('.services__container')

window.addEventListener('load', changeSliderPlace(servicesSliderIcon, 1086, servicesSliderPlace, servicesSliderNewPlace, "afterbegin", "beforeend"))
window.addEventListener('resize', changeSliderPlace(servicesSliderIcon, 1086, servicesSliderPlace, servicesSliderNewPlace, "afterbegin", "beforeend"))


const portfolioSlider = document.querySelector('#portfolioSlider')
const portfolioNewPlace = document.querySelector('.portfolio__container')
const portfolioOldPlace = document.querySelector('#portfolioSliderOldPlace')

window.addEventListener('load', changeSliderPlace(portfolioSlider, 1086, portfolioOldPlace, portfolioNewPlace, "afterbegin", "beforeend"))
window.addEventListener('resize', changeSliderPlace(portfolioSlider, 1086, portfolioOldPlace, portfolioNewPlace, "afterbegin", "beforeend"))



const clientsSlider = document.querySelector('#clientsSlider')
const clientsNewPlace = document.querySelector('.clients__container')
const clientsOldPlace = document.querySelector('#commentsOldPlace')
window.addEventListener('load', changeSliderPlace(clientsSlider, 797, clientsOldPlace, clientsNewPlace, "afterbegin", "beforeend"))
window.addEventListener('resize', changeSliderPlace(clientsSlider, 797, clientsOldPlace, clientsNewPlace, "afterbegin", "beforeend"))

// -------------------------------------------------------------------------------------


// ! тут є проблема


const ServicesWrapper = document.querySelector(".services__container")
const ServicesCarousel = document.querySelector(".services__slide")
const ServicesFirstCardWidth = ServicesWrapper.querySelector(".services__information").offsetWidth

const styles = window.getComputedStyle(ServicesCarousel)
const ServicesGap = parseFloat(styles.gap)

console.log(ServicesGap)

const ServicesCarouselChildrens = [...ServicesCarousel.children]
let ServicesIsDragging = false,
    ServicesIsAutoPlay = true,
    ServicesStartX,
    ServicesStartScrollLeft,
    ServicesTimeoutId

let isTransitioning = false

// Враховуємо gap при розрахунку ServicesCardPerView
let ServicesCardPerView = Math.floor((ServicesCarousel.offsetWidth + ServicesGap) / (ServicesFirstCardWidth + ServicesGap))

ServicesCarouselChildrens.slice(-ServicesCardPerView).reverse().forEach(card => {
    ServicesCarousel.insertAdjacentHTML("afterbegin", card.outerHTML)
})

ServicesCarouselChildrens.slice(0, ServicesCardPerView).forEach(card => {
    ServicesCarousel.insertAdjacentHTML("beforeend", card.outerHTML)
})

ServicesCarousel.addEventListener("touchstart", startDragging)
ServicesCarousel.addEventListener("touchend", stopDragging)
ServicesCarousel.addEventListener("touchmove", handleDragging)

function startDragging(e) {
    ServicesIsDragging = true
    ServicesStartX = e.touches[0].clientX
    ServicesStartScrollLeft = ServicesCarousel.scrollLeft
    isTransitioning = true
    ServicesCarousel.style.transition = "none"
}

function stopDragging() {
    ServicesIsDragging = false

    // Визначте, на яку картку перетягнули і встановіть плавну прокрутку
    const draggedCardIndex = Math.round(ServicesCarousel.scrollLeft / (ServicesFirstCardWidth + ServicesGap))
    const targetScrollLeft = draggedCardIndex * (ServicesFirstCardWidth + ServicesGap)

    ServicesCarousel.style.transition = "scroll-snap-align 0.3s ease-in-out"
    ServicesCarousel.scrollLeft = targetScrollLeft;

    // Зачекайте завершення транзакції перед знову дозволяти транзакції
    setTimeout(() => {
        isTransitioning = false;
    }, 300)
}

function handleDragging(e) {
    if (!ServicesIsDragging) return;
    const offsetX = e.touches[0].clientX - ServicesStartX;
    ServicesCarousel.scrollLeft = ServicesStartScrollLeft - offsetX;
}

ServicesCarousel.addEventListener("scroll", () => {
    if (!isTransitioning) {
        ServicesCarousel.style.transition = "scroll-snap-align 0.3s ease-in-out"
    }
})


// ------------------------------------------------------------------------

const wrapper = document.querySelector(".wrapper-carousel")
const carousel = document.querySelector(".wrapper-carousel__carousel")
const firstCardWidth = carousel.querySelector(".wrapper-carousel__card").offsetWidth
// const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children]
let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId
// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth)
// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML)
});
// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML)
})

// --------------------------------------------------------------------------------

const commentWrapper = document.querySelector(".comment")
const commentCarousel = document.querySelector(".comment__list")
const commentFirstCardWidth = commentCarousel.querySelector(".comment__block").offsetWidth
// const arrowBtns = document.querySelectorAll(".wrapper i");
const commentCarouselChildrens = [...commentCarousel.children]
let commentIsDragging = false, commentIsAutoPlay = true, commentStartX, commentStartScrollLeft, commentTimeoutId
// Get the number of cards that can fit in the carousel at once
let commentCardPerView = Math.round(commentCarousel.offsetWidth / commentFirstCardWidth)
// Insert copies of the last few cards to beginning of carousel for infinite scrolling
commentCarouselChildrens.slice(-commentCardPerView).reverse().forEach(card => {
    commentCarousel.insertAdjacentHTML("afterbegin", card.outerHTML)
});
// Insert copies of the first few cards to end of carousel for infinite scrolling
commentCarouselChildrens.slice(0, commentCardPerView).forEach(card => {
    commentCarousel.insertAdjacentHTML("beforeend", card.outerHTML)
})

// ---------------------------------------------------------------------------------

// відкриваємо та приховуємо спойлери

// const quetion = document.querySelectorAll('.ask__content')
// const askItem = document.querySelectorAll('.ask__item')
// const askAnswer = document.querySelectorAll('.ask__answer')
// console.log(quetion)
// console.log(askItem)





// ---------------------------------------------------------------------------------

document.addEventListener("click", documentActions)

function documentActions(e) {
    const targetElement = e.target
    e.preventDefault()

    if (targetElement.closest('.header__burger')) {

        document.body.classList.toggle('menu-open')
    }
    else if (targetElement.closest('#back')) {

        scrollContainer.scrollLeft -= 1627
        scrollContainer.style.scrollBehavior = "smooth"

    }
    else if (targetElement.closest('#next')) {

        scrollContainer.scrollLeft += 1627
        scrollContainer.style.scrollBehavior = "smooth"

    }
    else if (targetElement.closest('#nextPortfolio')) {

        const currentScrollLeft = carousel.scrollLeft
        // Змістити вправо на ширину одного елемента .card

        carousel.scrollLeft = currentScrollLeft + carousel.querySelector(".wrapper-carousel__card").offsetWidth
    }
    else if (targetElement.closest('#backPortfolio')) {

        const currentScrollLeft = carousel.scrollLeft
        carousel.scrollLeft = currentScrollLeft - carousel.querySelector(".wrapper-carousel__card").offsetWidth
    }
    else if (targetElement.closest('#nextServices')) {

        const currentScrollLeft = ServicesCarousel.scrollLeft;
        ServicesCarousel.scrollLeft = currentScrollLeft + (ServicesFirstCardWidth + ServicesGap);
    }
    else if (targetElement.closest('#backServices')) {
        const currentScrollLeft = ServicesCarousel.scrollLeft;
        ServicesCarousel.scrollLeft = currentScrollLeft - (ServicesFirstCardWidth + ServicesGap);
    }
    else if (targetElement.closest('.ask__item')) {
        // Знаходимо батьківський елемент .ask__item, який є ближчим до елемента, на який клікнули
        const parentAskItem = targetElement.closest('.ask__item');
        if (parentAskItem) {
            // Додаємо або видаляємо клас 'open' тільки для знайденого батьківського елемента
            parentAskItem.classList.toggle('answer-open');

            // Знаходимо елемент відповіді в межах батьківського елемента
            const askAnswer = parentAskItem.querySelector('.ask__answer');
            // setInterval(() => {
            //     askAnswer.style.opacity = 1
            // }, 2000)

            // askAnswer.style.opacity = 0
            // askAnswer.style.opacity = 1
            // // Показати або сховати елемент відповіді для обраного питання
            if (askAnswer) {
                askAnswer.hidden = !parentAskItem.classList.contains('answer-open')
                // if (askAnswer.hidden === false) {
                //     askAnswer.style.opacity = 1
                // }
                setInterval(() => {
                    askAnswer.style.opacity = 1
                    askAnswer.style.transform = 'translateY(0)'
                }, 100)

                askAnswer.style.opacity = 0
                askAnswer.style.transform = 'translateY(-50%)'
            }
        }
    }
    else if (targetElement.closest('#nextComment')) {
        const currentScrollLeft = commentCarousel.scrollLeft
        // Змістити вправо на ширину одного елемента .card
        commentCarousel.scrollLeft = currentScrollLeft + commentCarousel.querySelector(".comment__block").offsetWidth
    }
    else if (targetElement.closest('#backComment')) {
        const currentScrollLeft = commentCarousel.scrollLeft
        // Змістити вправо на ширину одного елемента .card
        commentCarousel.scrollLeft = currentScrollLeft - commentCarousel.querySelector(".comment__block").offsetWidth
    }
}




// const scrollContainer = document.querySelector('.galery-wrap__galery')
// const backBtn = document.getElementById('back')
// const nextBtn = document.getElementById('next')

// scrollContainer.addEventListener("wheel", (event) => {
//     event.preventDefault()
//     scrollContainer.scrollLeft += event.deltaY
// })








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


