"use strict"

const mySlider = document.querySelector("#slider")
const sliderValue = document.querySelector("#slider-value")
const trafficPageviews = document.querySelector("#trafficPageviews")

let isDiscount = false
function slider() {
   let valPercect = (mySlider.value / mySlider.max) * 100

   mySlider.style.background = `linear-gradient(to right, #10d5c2 ${valPercect}%, #858fad ${valPercect}% 100%, transparent 0)`

   let outValueOfSum = 0

   let pageviews = 0
   switch (valPercect) {
      case 0:
         outValueOfSum = "$8"
         pageviews = "10K pageviews"
         break
      case 25:
         outValueOfSum = "$12"
         pageviews = "50K pageviews "
         break
      case 50:
         outValueOfSum = "$16"
         pageviews = "100K pageviews"
         break
      case 75:
         outValueOfSum = "$24"
         pageviews = "500k pageviews"
         break
      case 100:
         outValueOfSum = "$36"
         pageviews = "1M pageviews"
         break
   }

   if (isDiscount) {
      outValueOfSum = parseInt(outValueOfSum.replace("$", ""))
      let diff = (outValueOfSum * 25) / 100
      outValueOfSum = outValueOfSum - diff
      sliderValue.textContent = "$" + outValueOfSum
   } else sliderValue.textContent = outValueOfSum

   trafficPageviews.textContent = pageviews
}

mySlider.addEventListener("input", slider)

const button = document.querySelector(".traffic__button")
button.addEventListener("click", (e) => {
   button.classList.toggle("active")
   if (button.classList.contains("active")) {
      isDiscount = true

      let valueOfSlider = sliderValue.textContent
      valueOfSlider = parseInt(valueOfSlider.replace("$", ""))
      let percentValue = (valueOfSlider * 25) / 100

      let resultSumWithPercent = valueOfSlider - percentValue
      console.log(valueOfSlider)

      sliderValue.textContent = "$" + resultSumWithPercent
   } else {
      isDiscount = false

      let valueOfSlider = sliderValue.textContent
      valueOfSlider = parseInt(valueOfSlider.replace("$", ""))
      let resultSumWithPercent = valueOfSlider / 0.75

      sliderValue.textContent = "$" + resultSumWithPercent
   }
})

// - 10K pageviews / $8 per month   0

// - 50K pageviews / $12 per month  25

// - 100K pageviews / $16 per month 50

// - 500k pageviews / $24 per month 75

// - 1M pageviews / $36 per month 100
