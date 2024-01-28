"use strict"

// swipper
// new Swiper('.swiper-container', {

// стрілки виводяться через before, after ті, що за замовченням в html
// можна вказувати будь які стрілки

//     navigation: {
//         nextEl: '#next',
//         prevEl: '#back'
//     },
//     grabCursor: true,
//     keyboard: {
//         enabled: true,
//         onlyInVieport: true,
//         pageDown: true,
//     },
//     mousewheel: {
//         sensitivity: 1,
//         eventsTarget: ".swiper-container"
//     },
//     slidesPerView: 'auto',
//     watchOverFlow: true,
//     spaceBetween: 30,
//     // slidesPerGroup: 3,
//     centeredSlides: true,
//     initialSlide: 3,

// є різні ефекти  fade flip cube coverFlow
// effect: "coverflow",
// coverFlowEffect: {
//     rotate: 20,
//     stretch: 50,
//     slideShadows: true,
// },
//     breakpoints: {
//         320: {
//             slidesPerView: 1,
//         },
//         890: {
//             slidesPerView: 2,
//         },
//         1020: {
//             slidesPerView: 3,
//         }
//     }
// })


// якщо свайпер знаходиться всередині флекс-елемента, то для цього елемента
// вказати min-width: 0;

// -------------------------------------------------------------------------

new Swiper('.photowork__box', {
    // стрілки виводяться через before, after ті, що за замовченням в html
    // можна вказувати будь які стрілки

    navigation: {
        nextEl: '#nextPortfolio',
        prevEl: '#backPortfolio'
    },
    grabCursor: true,
    keyboard: {
        enabled: true,
        onlyInVieport: true,
        pageDown: true,
    },
    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".portfolio__container"
    },
    slidesPerView: '3',
    watchOverFlow: true,
    spaceBetween: 30,
    //slidesPerGroup: 3,
    centeredSlides: true,
    initialSlide: 3,

    // є різні ефекти  fade flip cube coverFlow
    // effect: "coverflow",
    // coverFlowEffect: {
    //     rotate: 20,
    //     stretch: 50,
    //     slideShadows: true,
    // },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        670: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        }
    }
})




new Swiper('.services__box', {
    navigation: {
        nextEl: '#nextServices',
        prevEl: '#backServices'
    },
    grabCursor: true,
    keyboard: {
        enabled: true,
        onlyInVieport: true,
        pageDown: true,
    },
    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".services__container"
    },
    slidesPerView: '1',
    watchOverFlow: true,
    spaceBetween: 30,

    centeredSlides: true,
    initialSlide: 3,
})




new Swiper('.comment__box', {
    // стрілки виводяться через before, after ті, що за замовченням в html
    // можна вказувати будь які стрілки

    navigation: {
        nextEl: '#nextComment',
        prevEl: '#backComment'
    },
    grabCursor: true,
    keyboard: {
        enabled: true,
        onlyInVieport: true,
        pageDown: true,
    },
    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".clients__container"
    },
    slidesPerView: '3',
    watchOverFlow: true,
    spaceBetween: 30,
    //slidesPerGroup: 3,
    centeredSlides: true,
    initialSlide: 3,

    // є різні ефекти  fade flip cube coverFlow
    effect: "coverflow",
    coverFlowEffect: {
        rotate: 20,
        stretch: 50,
        slideShadows: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        670: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        }
    }
})
// ------------------------------------------------------------------------


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






// ---------------------------------------------------------------------------------

document.addEventListener("click", documentActions)

function documentActions(e) {
    const targetElement = e.target
    e.preventDefault()

    if (targetElement.closest('.header__burger')) {

        document.body.classList.toggle('menu-open')
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
}



// -----------------------------------------------------------------------


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


