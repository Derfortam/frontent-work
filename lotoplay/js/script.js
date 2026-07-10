"use strict"
window.addEventListener("load", () => {
  document.documentElement.classList.add("page-loaded")
})

// ==========================
document.addEventListener("click", (event) => {
  const target = event.target

  // const button = event.target.closest('.item-btn');

  // if (!button) return;

  // const menuBurger = document.getElementById("menu-burger")

  if (target.closest("#menu-burger")) {
    console.log(`Натиснули: ${target}`)
    document.body.classList.toggle("menu-active")
  }
  if (target.closest(".menu__link")) {
    document.body.classList.remove("menu-active")
  }
})

const media = window.matchMedia("(max-width: 600px)")

media.addEventListener("change", (event) => {
  if (event.matches) {
    console.log("Перейшли на мобільну версію")
    // document.body.classList.add("menu-active")
  } else {
    console.log("Перейшли на десктопну версію")
    document.body.classList.remove("menu-active")
  }
})

// =====================
function loaded(item) {
  item.classList.add("loaded")
}
const blurDivs = document.querySelectorAll(".members__blur-image")
if (blurDivs) {
  blurDivs.forEach((item) => {
    const img = item.querySelector("img")
    // function loaded() {
    //   item.classList.add("loaded")
    // }
    if (img.complete) {
      loaded(item)
    } else {
      img.addEventListener("load", loaded(item))
    }
  })
}

const blurStoryImg = document.querySelector(".story__blur-image")
if (blurStoryImg) {
  const img = blurStoryImg.querySelector("img")

  if (img.complete) {
    loaded(blurStoryImg)
  } else {
    img.addEventListener("load", loaded(blurStoryImg))
  }
}

const blurHeroImg = document.querySelector(".hero__blur-image")
if (blurHeroImg) {
  const img = blurHeroImg.querySelector("img")

  if (img.complete) {
    loaded(blurHeroImg)
  } else {
    img.addEventListener("load", loaded(blurHeroImg))
  }
}

// ===============================
// Observer
const options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  /*
  threshold: 0.3 — відсоток появи об'єкта у в'юпорті.
  0.3 = 30% від розміру елемента, який відслідковується.
  0 = будь-яка поява.
  1 = повна поява об'єкта у в'юпорті.
  */
  threshold: 0.3,
}

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    const targetElement = entry.target

    if (entry.isIntersecting) {
      targetElement.classList.add("show")
      console.log("елемент видно")
    } else {
      // targetElement.classList.remove("show")
      console.log("елемент не видно")
    }
  })
}

const observer = new IntersectionObserver(callback, options)

// Якщо один об'єкт
// const target = document.querySelector('.button');
// observer.observe(target);

// Якщо об'єктів багато
const someElements = document.querySelectorAll("[class*='observer-animate']")
someElements.forEach((someElement) => {
  observer.observe(someElement)
})
