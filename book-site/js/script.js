"use strict"
// import {mainBookSwiper} from "../js/swipers"
// document.addEventListener("DOMContentLoaded", function () {
//    let preloader = document.getElementById("preloader")
//    preloader.style.display = "none"
// })

window.addEventListener("scroll", function () {
   const header = document.querySelector("header")
   if (window.scrollY > 250) {
      header.classList.add("scrolled")
   } else {
      header.classList.remove("scrolled")
   }
})

const quotesArray = [
   '"Reading a book is like having a conversation with the best men of the past centuries" Descartes',
   'Books are your best friends. You can turn to them in all the difficult moments of life. They will never betray you." A. Dode',
   '"The mind was not created by books, but books were created by the mind" G. Skovoroda',
]
const mainQuote = document.querySelector(".hero__text-decoration")
let randomQuotesIndex = Math.floor(Math.random() * quotesArray.length)
if (mainQuote) mainQuote.innerText = quotesArray[randomQuotesIndex]

document.addEventListener("click", documentActions)

function documentActions(e) {
   const targetElement = e.target

   if (targetElement.closest(".choose-buttons__button")) {
      const chooseButton = targetElement.closest(".choose-buttons__button")
      const chooseElements = document.querySelectorAll(".choose-buttons__button")
      chooseElements.forEach((item) => {
         item.classList.remove("active")
      })
      chooseButton.classList.toggle("active")

      // інші дії...
      // Наприклад додати нову сторінку.
   }
   if (targetElement.closest(".header__burger-block")) {
      document.body.classList.toggle("menu-open")
   }

   if (targetElement.closest(".frequently__item")) {
      const frequentlyItem = targetElement.closest(".frequently__item")
      //! chanhe the error
      const frequentlyElements = document.querySelectorAll(".cfrequently__item")
      frequentlyElements.forEach((item) => {
         item.classList.remove("open")
      })
      frequentlyItem.classList.toggle("open")
   }

   // tabs
   if (targetElement.closest(".tablinks")) {
      const tabElement = targetElement.closest(".tablinks")
      const allTabs = document.querySelectorAll(".tabcontent")

      allTabs.forEach((item) => {
         item.style.display = "none"
      })

      const tabLink = tabElement.dataset.tab
      const currentTabLink = document.getElementById(tabLink)
      currentTabLink.style.display = "block"

      const allTablinks = document.querySelectorAll(".book-section__tablinks")
      allTablinks.forEach((item) => {
         item.classList.remove("active")
      })
      tabElement.classList.add("active")
   }
}
// ==========================
// для одного із табів ми додаємо дата-атрибут, щоб він по замовчанню був відкритим
const mainTab = document.querySelector("[data-main]")
if (mainTab) mainTab.style.display = "block"

// ==========================

// обов'язково перевірку зробити чи є елемент потім
// const categoriesSwiper = document.querySelector(".categories__slider")
// if (categoriesSwiper) {
//     new Swiper('.categories__slider', {
//         // Optional parameters

//         // effect: 'cards',
//         // cardsEffect: {
//         //     // ...
//         // },

//         pagination: {
//             el: '.swiper-navigation__lines',
//             clickable: true
//         },

//         navigation: {
//             nextEl: '#next',
//             prevEl: '#prev',
//         },
//         slidesPerView: 5,
//         spaceBetween: 30,

//         breakpoints: {
//             320: {
//                 slidesPerView: 1.5,
//                 spaceBetween: 5
//             },
//             500: {
//                 slidesPerView: 2,
//                 spaceBetween: 10
//             },
//             600: {
//                 slidesPerView: 3,
//                 spaceBetween: 15
//             },
//             830: {
//                 slidesPerView: 4,
//                 spaceBetween: 20
//             },
//             1208: {
//                 slidesPerView: 5,
//                 spaceBetween: 30
//             },

//         }
//     })
// }

const categoriesHomePageSwiper = document.querySelector("#homePageCategoriesSwiper")
if (categoriesHomePageSwiper) {
   new Swiper("#homePageCategoriesSwiper", {
      loop: true,
      pagination: {
         el: "#homePageCategoriesLines",
         clickable: true,
      },
      navigation: {
         nextEl: "#homePageNext",
         prevEl: "#homePagePrev",
      },
      slidesPerView: 5,
      spaceBetween: 30,
      speed: 600,
      keyboard: {
         enabled: true,
         onlyInViewport: false,
      },
      breakpoints: {
         320: {
            slidesPerView: 1.5,
            spaceBetween: 5,
         },
         500: {
            slidesPerView: 2,
            spaceBetween: 10,
         },
         600: {
            slidesPerView: 3,
            spaceBetween: 15,
         },
         830: {
            slidesPerView: 4,
            spaceBetween: 20,
         },
         1208: {
            slidesPerView: 5,
            spaceBetween: 30,
         },
      },
   })
}
// ========================================
// raiting
const raitingStar = document.querySelectorAll(".raiting__star")
const jacobStar = document.querySelectorAll(".jacob-star")
const ruslanStar = document.querySelectorAll(".ruslan-star")

const googleStar = document.querySelectorAll(".google-star")
const googleStarRate = document.querySelector("#googleStarRate")

const ourStar = document.querySelectorAll(".our-raiting-star")
const ourStarRate = document.querySelector("#ourRating")

function getRatingStar(star) {
   let ratingValue = star
   return ratingValue
}
function setRaitingStar(element, star) {
   if (element) {
      const fullPart = parseInt(getRatingStar(star))
      const emptyPart = getRatingStar(star) - fullPart
      for (let i = 0; i < fullPart; ++i) {
         element[i].style.background = `url('../icon/full-star.svg') 0 0 / cover no-repeat`
      }
      if (emptyPart > 0) {
         const currentPercent = emptyPart * 100
         element[fullPart].innerHTML = `<span style="width: ${currentPercent + "%"}"></span>`
      }
   }
}
if (raitingStar.length > 0) {
   setRaitingStar(raitingStar, 4.5)
}
if (jacobStar.length > 0) {
   setRaitingStar(jacobStar, 5)
}
if (ruslanStar.length > 0) {
   setRaitingStar(ruslanStar, 3)
}
if (googleStar.length > 0) {
   setRaitingStar(googleStar, getRate(googleStarRate))
}
if (ourStar.length > 0) {
   setRaitingStar(ourStar, getRate(ourStarRate))
}

function getRate(item) {
   if (item) {
      let result = item.textContent
      result = parseFloat(result)
      return result
   }
}
// ========================================
// const body = document.body;
// window.addEventListener('resize', function () {
//     if (window.innerWidth < 768) {
//         body.style.backgroundColor = "red"
//     } else {
//         body.style.backgroundColor = "black"
//     }
// })

// function changeObjectPlace(element, size, oldPlace, newPlace, oldPosition, newPosition) {
//     if (element) {
//         if (window.innerWidth <= size) {

//             newPlace.insertAdjacentElement(newPosition, element)
//         } else {
//             oldPlace.insertAdjacentElement(oldPosition, element)
//         }
//     }
// }
// const headerAction = document.querySelector(".header__action")
// const headerActionOldPlace = document.querySelector(".header__container")
// const headerActionNewPlace = document.querySelector(".header__navigation")

// window.addEventListener('resize', function () {
//     changeObjectPlace(headerAction, 820, headerActionOldPlace, headerActionNewPlace, "beforeend", "beforeend")
// })
// changeObjectPlace(headerAction, 820, headerActionOldPlace, headerActionNewPlace, "beforeend", "beforeend")

// Функція зміни місця об'єкта
function changeObjectPlace(element, size, oldPlace, newPlace, oldPosition, newPosition) {
   if (element) {
      const mediaQuery = window.matchMedia(`(max-width: ${size}px)`)

      // Перевіряємо, чи виконується умовний медіа-запит
      if (mediaQuery.matches) {
         newPlace.insertAdjacentElement(newPosition, element)
      } else {
         oldPlace.insertAdjacentElement(oldPosition, element)
      }
   }
}

const headerAction = document.querySelector(".header__action")
const headerActionOldPlace = document.querySelector(".header__container")
const headerActionNewPlace = document.querySelector(".header__navigation")

// Виклик функції changeObjectPlace при відповідному стані медіа-запиту
const mediaQuery = window.matchMedia(`(max-width: ${820}px)`)
changeObjectPlace(headerAction, 820, headerActionOldPlace, headerActionNewPlace, "beforeend", "beforeend")
mediaQuery.addListener(() => {
   changeObjectPlace(headerAction, 820, headerActionOldPlace, headerActionNewPlace, "beforeend", "beforeend")
})

// ================================
const bookSectionOne = document.querySelector("#bookSectionOne")
const tabcontentForBookSectionOne = document.querySelector("#Tab1")
const oldPlaceForBookSectionOne = document.querySelector(".page__book-section")

// const mediaQueryForBookSectionOne = window.matchMedia(`(max-width: ${820}px)`)
// changeObjectPlace(bookSectionOne, 820, oldPlaceForBookSectionOne, tabcontentForBookSectionOne, "beforeend", "beforeend")
// mediaQueryForBookSectionOne.addListener(() => {
//    changeObjectPlace(bookSectionOne, 820, oldPlaceForBookSectionOne, tabcontentForBookSectionOne, "beforeend", "beforeend")
// })
if (bookSectionOne && tabcontentForBookSectionOne && oldPlaceForBookSectionOne) {
   const bookSectionBeak = `(max-width: 820px)`
   const bookSectionMatchMedia = window.matchMedia(bookSectionBeak)
   bookSectionMatchMedia.addEventListener("change", (e) => {
      const isTrueForBookSection = e.matches
      if (isTrueForBookSection) {
         // tabcontentForBookSectionOne.appendChild(bookSectionOne)
         tabcontentForBookSectionOne.insertAdjacentElement("beforeend", bookSectionOne)
      } else {
         // oldPlaceForBookSectionOne.appendChild(bookSectionOne)
         oldPlaceForBookSectionOne.insertAdjacentElement("beforeend", bookSectionOne)
      }
   })
}
if ((window, innerWidth <= 820)) {
   // tabcontentForBookSectionOne.insertAdjacentElement("beforeend", bookSectionOne)
   if (tabcontentForBookSectionOne) tabcontentForBookSectionOne.appendChild(bookSectionOne)
}
// ==============
const bookSectionTwo = document.querySelector("#bookSectionTwo")
const tabcontentForBookSectionTwo = document.querySelector("#Tab2")
const oldPlaceForBookSectionTwo = document.querySelector(".page__book-section")
if ((window, innerWidth <= 820)) {
   // tabcontentForBookSectionTwo.insertAdjacentElement("beforeend", bookSectionTwo)
  if(tabcontentForBookSectionTwo) tabcontentForBookSectionTwo.appendChild(bookSectionTwo)
}
if (bookSectionTwo && tabcontentForBookSectionTwo && oldPlaceForBookSectionTwo) {
   const bookSectionBeak = `(max-width: 820px)`
   const bookSectionMatchMedia = window.matchMedia(bookSectionBeak)
   bookSectionMatchMedia.addEventListener("change", (e) => {
      const isTrueForBookSection = e.matches
      if (isTrueForBookSection) {
         // tabcontentForBookSectionTwo.appendChild(bookSectionTwo)
         tabcontentForBookSectionTwo.insertAdjacentElement("beforeend", bookSectionTwo)
      } else {
         // oldPlaceForBookSectionTwo.appendChild(bookSectionTwo)
         oldPlaceForBookSectionTwo.insertAdjacentElement("beforeend", bookSectionTwo)
      }
   })
}

// const mediaQueryForBookSectionTwo = window.matchMedia(`(max-width: ${820}px)`)
// changeObjectPlace(bookSectionTwo, 820, oldPlaceForBookSectionTwo, tabcontentForBookSectionTwo, "beforeend", "beforeend")
// mediaQueryForBookSectionTwo.addListener(() => {
//    changeObjectPlace(bookSectionTwo, 820, oldPlaceForBookSectionTwo, tabcontentForBookSectionTwo, "beforeend", "beforeend")
// })

// ==============

//перенесення пагінації для слайдерів

const bookSectionLinesSwiperNavigation = document.querySelectorAll(".book-section__lines-swiper-navigation")
const bookSectionLinesSwiperNavigationOldPlace = document.querySelectorAll(".book-section__pagination")
const bookSectionLinesSwiperNavigationNewPlace = document.querySelectorAll(".book-section__block-slider")

if (window.innerWidth <= 1400) {
   for (let i = 0; i < bookSectionLinesSwiperNavigationNewPlace.length; i++) {
      bookSectionLinesSwiperNavigationNewPlace[i].appendChild(bookSectionLinesSwiperNavigation[i])
   }
}
if (bookSectionLinesSwiperNavigation && bookSectionLinesSwiperNavigationOldPlace && bookSectionLinesSwiperNavigationNewPlace) {
   const bookSliderBreaKPoint = `(max-width: 1400px)`
   const bookMatchMedia = window.matchMedia(bookSliderBreaKPoint)
   bookMatchMedia.addEventListener("change", (e) => {
      const isTrueForBook = e.matches
      if (isTrueForBook) {
         for (let i = 0; i < bookSectionLinesSwiperNavigationNewPlace.length; i++) {
            bookSectionLinesSwiperNavigationNewPlace[i].appendChild(bookSectionLinesSwiperNavigation[i])
         }
      } else {
         for (let i = 0; i < bookSectionLinesSwiperNavigationOldPlace.length; i++) {
            bookSectionLinesSwiperNavigationOldPlace[i].appendChild(bookSectionLinesSwiperNavigation[i])
         }
      }
   })
}

// ==================================

// const tabcontentForBookSectionTwo = document.querySelector("#Tab2")
// const oldPlaceForBookSectionTwo = document.querySelector(".page__book-section")

// const mediaQueryForBookSectionTwo = window.matchMedia(`(max-width: ${820}px)`)
// changeObjectPlace(bookSectionTwo, 820, oldPlaceForBookSectionTwo, tabcontentForBookSectionTwo, "beforeend", "beforeend")
// mediaQueryForBookSectionTwo.addListener(() => {
//    changeObjectPlace(bookSectionTwo, 820, oldPlaceForBookSectionTwo, tabcontentForBookSectionTwo, "beforeend", "beforeend")
// })

// ================================

// const spollers = document.querySelectorAll("[data-spoller]")

// console.log(spollers)

// if (spollers.length) {
//    spollers.forEach((spoller) => {
//       spoller.dataset.spoller !== "open" ? (spoller.nextElementSibling.hidden = true) : spoller.classList.add("active")
//    })
//    // Filter
//    // const filterTitle = document.querySelector(".spollers")
//    // if (filterTitle) {
//    //    //window.addEventListener('resize', someFunc);
//    //    const breakPointValue = filterTitle.dataset.spollerMedia
//    //    const breakPoint = breakPointValue ? `(${breakPointValue.split(",")[0]}-width:${breakPointValue.split(",")[1]}px)` : null
//    //    if (breakPoint) {
//    //       const matchMedia = window.matchMedia(breakPoint)
//    //       matchMedia.addEventListener("change", (e) => {
//    //          const isTrue = e.matches
//    //          if (isTrue) {
//    //             slideUp(filterTitle.nextElementSibling)
//    //             filterTitle.classList.remove("active")
//    //          } else {
//    //             slideDown(filterTitle.nextElementSibling)
//    //             filterTitle.classList.add("active")
//    //          }
//    //       })
//    //    }
//    // }
// }
// let slideDown = (target, duration = 500) => {
//    if (!target.classList.contains("--sliding")) {
//       target.classList.add("--sliding")
//       target.hidden = false
//       let height = target.offsetHeight

//       target.style.paddingTop = 0
//       target.style.paddingBottom = 0
//       target.style.marginTop = 0
//       target.style.marginBottom = 0

//       target.style.overflow = "hidden"
//       target.style.height = 0

//       target.offsetHeight

//       target.style.transitionProperty = `height, margin, padding`
//       target.style.transitionDuration = `${duration}ms`

//       target.style.height = `${height}px`

//       target.style.removeProperty("padding-top")
//       target.style.removeProperty("padding-bottom")
//       target.style.removeProperty("margin-bottom")
//       target.style.removeProperty("margin-top")

//       setTimeout(() => {
//          target.style.removeProperty("height")
//          target.style.removeProperty("overflow")
//          target.style.removeProperty("transition-duration")
//          target.style.removeProperty("transition-property")
//          target.classList.remove("--sliding")
//       }, duration)
//    }
// }
// let slideUp = (target, duration = 500) => {
//    if (!target.classList.contains("--sliding")) {
//       target.classList.add("--sliding")
//       let height = target.offsetHeight

//       target.style.transitionProperty = `height, margin, padding`
//       target.style.transitionDuration = `${duration}ms`
//       target.style.height = `${height}px`

//       target.offsetHeight

//       target.style.overflow = "hidden"
//       target.style.paddingTop = 0
//       target.style.paddingBottom = 0
//       target.style.marginTop = 0
//       target.style.marginBottom = 0

//       target.style.height = 0

//       setTimeout(() => {
//          target.style.removeProperty("padding-top")
//          target.style.removeProperty("padding-bottom")
//          target.style.removeProperty("margin-bottom")
//          target.style.removeProperty("margin-top")

//          target.style.removeProperty("height")
//          target.style.removeProperty("overflow")
//          target.style.removeProperty("transition-duration")
//          target.style.removeProperty("transition-property")
//          target.classList.remove("--sliding")

//          target.hidden = true
//       }, duration)
//    }
// }
// let slideToggle = (target, duration = 500) => {
//    target.hidden ? slideDown(target, duration) : slideUp(target, duration)
// }

// =======
// Home page Pagination
// =======
function changeObjectLocation(element, mod, oldPlace, newPlace) {
   if (element) {
      if (mod === 1) {
         newPlace.insertAdjacentElement("beforeend", element)
      } else if (mod === 0) {
         oldPlace.insertAdjacentElement("beforeend", element)
      }
   }
}

function handleScreenSizeChange(e) {
   const isTrue = e.matches
   if (isTrue) {
      changeObjectLocation(homePageNavigation, 1, homePageCategoriesOldPlace, homePageCategoriesNewPlace)
   } else {
      changeObjectLocation(homePageNavigation, 0, homePageCategoriesOldPlace, homePageCategoriesNewPlace)
   }
}

const homePageNavigation = document.querySelector("#homePageCategoryNavigation")
const homePageCategoriesOldPlace = document.querySelector("#homePageCategoriesOldPlace")
const homePageCategoriesNewPlace = document.querySelector("#homePageCategoriesNewPlace")

const breakPoint = "(max-width: 1440px)"
const matchMedia = window.matchMedia(breakPoint)

matchMedia.addEventListener("change", handleScreenSizeChange)

// Викликаємо обробник зміни розміру екрану при завантаженні сторінки
handleScreenSizeChange(matchMedia)

// =========================
// ========================
// спойлери

const spollers = document.querySelectorAll(".frequently__title")

if (spollers) {
   spollers.forEach((item) => {
      // Встановлюємо інтервал для кожного елемента
      setInterval(() => {
         // Отримуємо наступний елемент після заголовка
         const nextElement = item.nextElementSibling
         // Перевіряємо, чи існує наступний елемент та чи має батьківський елемент клас "open"
         if (nextElement) {
            nextElement.hidden = true
         }
         if (item.closest(".open")) {
            nextElement.hidden = false
         }
      }, 300) // 2000 мілісекунд (2 секунди) інтервалу
   })
}
// =======================================================================
