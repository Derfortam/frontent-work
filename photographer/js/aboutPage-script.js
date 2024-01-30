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
function redirectServices(event) {
    event.preventDefault()
    window.location.href = "services.html"
}
function redirectContacts(event) {
    event.preventDefault()
    window.location.href = "contacts.html"
}

// ========================================================================================
// ========================================================================================



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

// Анімація рекламної стрічки

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



// ==============================================================================
// ==============================================================================

// Делегування

document.addEventListener("click", documentActions)

function documentActions(e) {
    const targetElement = e.target
    e.preventDefault()
    if (targetElement.closest('.header__burger')) {
        document.body.classList.toggle('menu-open')
    }
}

// ==============================================================================
// ==============================================================================


let options = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.3,
}

let callback = (entries, observer) => {
    entries.forEach((entry) => {
        const targetElement = entry.target
        if (entry.isIntersecting) {
            targetElement.classList.add("show")
            if (targetElement.closest('.hero__title')) {
                startInterval(targetElement)
                observer.unobserve(entry.target)
            }
        } else {
            if (!targetElement.closest('.hero__title')) {
                targetElement.classList.remove("show")
            }
        }
    })
}

let observer = new IntersectionObserver(callback, options)

let heroTitles = document.querySelectorAll(".hero__title")
heroTitles.forEach(heroTitle => {
    observer.observe(heroTitle)
})


function dataToNum(elem) {
    return parseFloat(elem)
}

function startInterval(itemNum) {
    let itemEnd = dataToNum(itemNum.dataset.end);
    let itemDelay = dataToNum(itemNum.dataset.delay);
    let itemSpeed = parseFloat(itemNum.dataset.speed) || 1;
    let usePercent = itemNum.dataset.usePercent;
    console.log(itemEnd)

    if (itemNum.classList.contains('show')) {
        let i = 0;
        let step = usePercent ? 1 : Math.ceil(itemEnd / 100);
        const intervalId = setInterval(() => {
            i += step;

            // Перевірка, чи usePercent не є пустим рядком
            if (usePercent && i < 100) {
                i = itemEnd
            } else if (!usePercent && i > itemEnd) {
                i = 100
            }

            // Використовуємо toLocaleString для форматування числа
            let formattedValue = usePercent ? `${i.toLocaleString()} %` : `${i.toLocaleString()} +`;
            itemNum.textContent = formattedValue;

            if (usePercent && i === 100 || !usePercent && i === itemEnd) {
                clearInterval(intervalId);
            }
        }, itemDelay * itemSpeed);
    }
}



