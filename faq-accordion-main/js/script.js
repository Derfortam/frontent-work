"use strict"

document.addEventListener("click", documentAction)

// this was for animation, but something went wrong
function documentAction(e) {
   const targetElement = e.target
   if (targetElement.closest("[data-spoller]")) {
      const currentElement = targetElement.closest("[data-spoller]")
      const nextElement = currentElement.nextElementSibling
      nextElement.classList.toggle("open")
      currentElement.classList.toggle("active")
   }
}
