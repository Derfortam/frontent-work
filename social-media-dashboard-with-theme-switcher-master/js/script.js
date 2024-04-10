"use stcict"

const themeModeButton = document.querySelector(".dashboard__button-mode")
const labelForButton = document.querySelector("#mode-name")
themeModeButton.addEventListener("click", e => {
   document.body.classList.toggle("white")
   themeModeButton.classList.toggle("active")
   themeModeButton.classList.contains("active") ? (labelForButton.textContent = "Light Mode") : (labelForButton.textContent = "Dark Mode")
})
