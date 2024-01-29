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
    centeredSlides: true,
    initialSlide: 3,

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

if (servicesSliderIcon) {
    window.addEventListener('load', changeSliderPlace(servicesSliderIcon, 1086, servicesSliderPlace, servicesSliderNewPlace, "afterbegin", "beforeend"))
    window.addEventListener('resize', changeSliderPlace(servicesSliderIcon, 1086, servicesSliderPlace, servicesSliderNewPlace, "afterbegin", "beforeend"))
}

const portfolioSlider = document.querySelector('#portfolioSlider')
const portfolioNewPlace = document.querySelector('.portfolio__container')
const portfolioOldPlace = document.querySelector('#portfolioSliderOldPlace')
if (portfolioSlider) {
    window.addEventListener('load', changeSliderPlace(portfolioSlider, 1086, portfolioOldPlace, portfolioNewPlace, "afterbegin", "beforeend"))
    window.addEventListener('resize', changeSliderPlace(portfolioSlider, 1086, portfolioOldPlace, portfolioNewPlace, "afterbegin", "beforeend"))
}


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


// =======================================================================
function redirectHome(event) {
    event.preventDefault()
    window.location.href = "index.html"
}
function redirectAbout(event) {
    event.preventDefault()
    window.location.href = "about.html"
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





// ======================================================================

// IntersectionObserver

// let options = {
//     root: null,
//     rootMargin: "0px 0px 0px 0px",
//     /*
//     threshhold: 0.3 відсоток появи об'єкту у в'юпорті 0.3 це 30% від розміру елементу який відслідковується
//     0 це будь яка поява
//     1 це повна поява об'кта в в'юпорті
//     */
//     threshhold: 0.3,
// }

// let callback = (entries, observer) => {
//     entries.forEach((entry) => {
//         const targetElement = entry.target
//         if (entry.isIntersecting) {
//             targetElement.classList.add("show")
//             if (targetElement.closest('.hero__title')) {
//                 startInterval()
//                 // Зупиняємо спостереження, оскільки функція вже викликана
//                 // надибав такий варіант, працює, бо по іншому ніяк не міг це зробити
//                 observer.unobserve(entry.target)
//             }
//             //console.log("елемент видно")
//         } else {
//             // targetElement.classList.remove("show")
//             // console.log("елемент не видно")
//             if (!targetElement.closest('.hero__title')) {
//                 targetElement.classList.remove("show")
//             }
//         }
//     })
// }

// let observer = new IntersectionObserver(callback, options)

// якщо один об'єкт
// let target = document.querySelector(".hero__statistic")
// observer.observe(target)

// якщо об'єктів багато
// let someElements = document.querySelectorAll(".hero__statistic")
// someElements.forEach(someElement => {
//     observer.observe(someElement)
// })




// let options = {
//     root: null,
//     rootMargin: "0px 0px 0px 0px",
//     threshold: 0.3,
// }

// let callback = (entries, observer) => {
//     entries.forEach((entry) => {
//         const targetElement = entry.target
//         if (entry.isIntersecting) {
//             targetElement.classList.add("show")
//             if (targetElement.closest('.hero__title')) {
//                 startInterval(targetElement)
//                 observer.unobserve(entry.target)
//             }
//         } else {
//             if (!targetElement.closest('.hero__title')) {
//                 targetElement.classList.remove("show")
//             }
//         }
//     })
// }

// let observer = new IntersectionObserver(callback, options)

// let heroTitles = document.querySelectorAll(".hero__title")
// heroTitles.forEach(heroTitle => {
//     observer.observe(heroTitle)
// })



// function dataToNum(elem) {
//     return parseFloat(elem)
// }

// function startInterval(itemNum) {
//     let itemEnd = dataToNum(itemNum.dataset.end);
//     let itemDelay = dataToNum(itemNum.dataset.delay);
//     let itemSpeed = parseFloat(itemNum.dataset.speed) || 1;
//     let usePercent = itemNum.dataset.usePercent;
//     console.log(itemEnd)

//     if (itemNum.classList.contains('show')) {
//         let i = 0;
//         let step = usePercent ? 1 : Math.ceil(itemEnd / 100);
//         const intervalId = setInterval(() => {
//             i += step;

//             // Перевірка, чи usePercent не є пустим рядком
//             if (usePercent && i < 100) {
//                 i = itemEnd
//             } else if (!usePercent && i > itemEnd) {
//                 i = 100
//             }

//             // Використовуємо toLocaleString для форматування числа
//             let formattedValue = usePercent ? `${i.toLocaleString()} %` : `${i.toLocaleString()} +`;
//             itemNum.textContent = formattedValue;

//             if (usePercent && i === 100 || !usePercent && i === itemEnd) {
//                 clearInterval(intervalId);
//             }
//         }, itemDelay * itemSpeed);
//     }
// }



