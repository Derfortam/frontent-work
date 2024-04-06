"use strict"

const billInput = document.querySelector("#bill")
const peopleInput = document.querySelector("#people")
const selectTip = document.querySelectorAll(".inputs__tip")

const button = document.querySelector(".outputs__reset")

// get value
function getValueFromInput(input) {
   let result = input.value
   result = parseFloat(result)
   return result
}
function getValueFromTip(buttons) {
   let result = input.value
   result = parseFloat(result)
   return result
}
// crear inputs
function clearInputs(input) {
   input.value = ""
}
function clearButtons(buttons) {
   buttons.forEach((item) => {
      item.classList.remove("active")
   })
}
function clearCustomField(input) {
   input.value = ""
   input.type = "text"
}
// validate error
function validateInfo(input) {
   let value = input.value.trim()
   value = parseFloat(value)
   if (value === "" || isNaN(value)) {
      // return false
      return "NaN"
   } else if (value === 0) return "Zero"
   else if (value < 0) return "Less"
   return true
}
function getError(elem, place, text = "Error", id) {
   elem.style.border = "1px solid red"
   let errorSpan = document.createElement("span")
   errorSpan.id = id
   errorSpan.className = "inputs__error"
   errorSpan.textContent = text
   place.appendChild(errorSpan)
}
function clearError(elem, error) {
   elem.style.border = "none"
   if (error) error.remove()
}

// console.log(getValueFromInput(billInput))

document.addEventListener("click", documentAction)
// get sum
function getSum(val, percent, num) {
   let tipSum = (val * percent) / 100
   let sum = tipSum / num
   return sum
}
function validAndCheckErrors(validateState, input, labelID, errorID, func) {
   if (validateState !== "NaN" && validateState !== "Zero" && validateState !== "Less") {
      func()
   } else {
      const label = document.querySelector(`#${labelID}`)
      if (validateState === "NaN") getError(input, label, "Enter valid data", errorID)
      else if (validateState === "Less") getError(input, label, "Can't be less than 1", errorID)
      else getError(input, label, "Can't be zero", errorID)
   }
}

let mainPercent = 10

let flag = 0

function documentAction(e) {
   const targetElement = e.target
   if (targetElement.closest(".inputs__tip")) {
      selectTip.forEach((item) => {
         item.classList.remove("active")
      })
      const inputTip = targetElement.closest(".inputs__tip")
      inputTip.classList.add("active")
      let percent
      if (inputTip.classList.contains("inputs__tip--custom")) {
         console.log("Cool")
         inputTip.type = "number"

         flag = 1
      } else {
         percent = inputTip.textContent
         flag = 0
      }
      percent = parseFloat(percent)
      console.log(percent)
      mainPercent = percent
      console.log(mainPercent)
   }
   if (targetElement.closest(".outputs__reset")) {
      function calc() {
         const tipAmount = document.querySelector("#tipAmount")
         const total = document.querySelector("#total")
         let firstField = getValueFromInput(billInput)
         let secondField = getValueFromInput(peopleInput)

         const selectCustomTip = document.querySelector(".inputs__tip--custom")
         if (flag === 1) {
            let percent = getValueFromInput(selectCustomTip)
            mainPercent = percent
         }
         let result = getSum(firstField, mainPercent, secondField)
         result = result.toFixed(2)
         tipAmount.textContent = result

         let totalSum = result * secondField
         totalSum = totalSum.toFixed(2)
         total.textContent = totalSum
         console.log(`The biil is ${result}`)

         button.textContent = "Reset"
      }

      const errorPeople = document.querySelector("#peopleError")
      if (errorPeople) clearError(peopleInput, errorPeople)

      const billError = document.querySelector("#bill-error")
      if (billError) clearError(billInput, billError)

      let validatePeopleState = validateInfo(peopleInput)
      validAndCheckErrors(validatePeopleState, peopleInput, "people-label", "peopleError", calc)

      let validateBillState = validateInfo(billInput)
      validAndCheckErrors(validateBillState, billInput, "bill-label", "bill-error", calc)
   }
}

button.addEventListener("dblclick", (e) => {
   // button

   const selectCustomTip = document.querySelector(".inputs__tip--custom")
   clearInputs(billInput)
   clearInputs(peopleInput)
   clearButtons(selectTip)
   clearCustomField(selectCustomTip)
   button.textContent = "Sum"

   const errorPeople = document.querySelector("#peopleError")
   if (errorPeople) clearError(peopleInput, errorPeople)

   const billError = document.querySelector("#bill-error")
   if (billError) clearError(billInput, billError)
})

// if (validatePeopleState !== "NaN" && validatePeopleState !== "Zero" && validatePeopleState !== "Less") {
//    calc()
// } else {
//    // console.log(validatePeopleState)
//    const peopleLabel = document.querySelector("#people-label")
//    if (validatePeopleState === "NaN") getError(peopleInput, peopleLabel, "Enter valid data", "peopleError")
//    else if (validatePeopleState === "Less") getError(peopleInput, peopleLabel, "Can't be less than 1", "peopleError")
//    else getError(peopleInput, peopleLabel, "Can't be zero", "peopleError")

//    // getError(peopleInput, peopleLabel, "Error", "peopleError")
// }
