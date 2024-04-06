"use strict"

const dayInput = document.querySelector("#day")
const monthInput = document.querySelector("#month")
const yearInput = document.querySelector("#year")

const dayData = document.querySelector("#day-data")
const monthData = document.querySelector("#month-data")
const yearData = document.querySelector("#year-data")

const dayLabel = document.querySelector("#day-label")
const monthLabel = document.querySelector("#month-label")
const yearLabel = document.querySelector("#year-label")

// ============
function getItemValue(item) {
   if (item.value === "") return false
   return item.value
}

function pasteFor(item, value) {
   item.textContent = value
}
// =================

function setDataError(input, label, text, nameError) {
   input.style.border = "1px solid red"
   label.style.color = "red"
   label.insertAdjacentHTML("beforeend", `<span id="${nameError}" class="error-data">${text}</span>`)
}
function removeDataError(input, label, error) {
   input.style.border = "1px solid black"
   label.style.color = "black"
   error.remove()
}

// ================
function checkData(day, month, year) {
   const specifiedDate = new Date(year, month - 1, day)
   const selectedMonth = specifiedDate.getMonth()
   if ([1, 3, 5, 7, 8, 10, 12].includes(selectedMonth)) {
      if (day < 1 || day > 31) {
         console.log("Некоректна дата. У вибраному місяці має бути від 1 до 31 дня.")
         setDataError(dayInput, dayLabel, "Must be a valid day", "day-error")
      } else {
         console.log("Коректна дата.")
         const dayError = document.querySelector("#day-error")
         if (dayError) {
            removeDataError(dayInput, dayLabel, dayError)
         }
      }
   } else if (selectedMonth === 2) {
      const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

      if (isLeapYear && (day < 1 || day > 29)) {
         console.log("Некоректна дата. У високосному році лютого має бути від 1 до 29 днів.")
         setDataError(dayInput, dayLabel, "Некоректна дата", "day-error")
      } else if (!isLeapYear && (day < 1 || day > 28)) {
         console.log("Некоректна дата. У звичайному році лютого має бути від 1 до 28 днів.")
         setDataError(dayInput, dayLabel, "Must be a valid day", "day-error")
      } else {
         console.log("Коректна дата.")
         const dayError = document.querySelector("#day-error")
         if (dayError) {
            removeDataError(dayInput, dayLabel, dayError)
         }
      }
   } else {
      if (day < 1 || day > 30) {
         console.log("Некоректна дата. У вибраному місяці має бути від 1 до 30 днів.")
         setDataError(dayInput, dayLabel, "Must be a valid day", "day-error")
      } else {
         console.log("Коректна дата.")
         const dayError = document.querySelector("#day-error")
         if (dayError) {
            removeDataError(dayInput, dayLabel, dayError)
         }
      }
   }
}

function checkMonth(month) {
   month = parseInt(month)

   if (month > 12 || month < 1) {
      console.log("Введіть правильний місяць")
      setDataError(monthInput, monthLabel, "Must be a valid month", "month-error")
   } else {
      console.log("Коректно")
      const monthError = document.querySelector("#month-error")
      if (monthError) {
         removeDataError(monthInput, monthLabel, monthError)
      }
   }
}

function checkYear(year) {
   const currentDate = new Date()
   let currentYear = currentDate.getFullYear()
   year = parseInt(year)

   if (year > currentYear || year < 0) {
      console.log("Введіть правильний рік")
      setDataError(yearInput, yearLabel, "Must be a valid year", "year-error")
   } else {
      console.log("Коректно")
      const yearError = document.querySelector("#year-error")
      if (yearError) {
         removeDataError(yearInput, yearLabel, yearError)
      }
   }
}

// ===============
const calculateButton = document.querySelector(".age-calculator__button")
calculateButton.addEventListener("click", (e) => {
   let day = getItemValue(dayInput)
   let month = getItemValue(monthInput)
   let year = getItemValue(yearInput)
   // errors
   // --------
   const dayError = document.querySelector("#day-empty")
   if (dayError) {
      removeDataError(dayInput, dayLabel, dayError)
   }
   const monthError = document.querySelector("#month-empty")
   if (monthError) {
      removeDataError(monthInput, monthLabel, monthError)
   }
   const yearError = document.querySelector("#year-empty")
   if (yearError) {
      removeDataError(yearInput, yearLabel, yearError)
   }
   // --------

   if (getItemValue(dayInput) && getItemValue(monthInput) && getItemValue(yearInput)) {
      const specifiedDate = new Date(year, month - 1, day)

      const currentDate = new Date()

      checkData(day, month, year)
      checkMonth(month)
      checkYear(year)

      // let yearsDiff = currentDate.getFullYear() - specifiedDate.getFullYear()
      let yearsDiff = currentDate.getFullYear() - parseInt(year)

      let monthsDiff = currentDate.getMonth() - specifiedDate.getMonth()

      if (monthsDiff < 0 || (monthsDiff === 0 && currentDate.getDate() < specifiedDate.getDate())) {
         yearsDiff--
      }

      monthsDiff = (monthsDiff + 12) % 12

      console.log(`Різниця між датами: ${yearsDiff} роки,
      ${monthsDiff} місяці, ${currentDate.getDate() - specifiedDate.getDate()} дні`)

      let daysDiff = currentDate.getDate() - specifiedDate.getDate()
      daysDiff = Math.abs(daysDiff)
      pasteFor(yearData, yearsDiff)
      pasteFor(monthData, monthsDiff)
      pasteFor(dayData, daysDiff)
   } else {
      if (day === false) {
         setDataError(dayInput, dayLabel, "This field is required", "day-empty")
      } else {
         const dayError = document.querySelector("#day-empty")
         if (dayError) {
            removeDataError(dayInput, dayLabel, dayError)
         }
      }
      if (month === false) {
         setDataError(monthInput, monthLabel, "This field is required", "month-empty")
      } else {
         const monthError = document.querySelector("#month-empty")
         if (monthError) {
            removeDataError(monthInput, monthLabel, monthError)
         }
      }
      if (year === false) {
         setDataError(yearInput, yearLabel, "This field is required", "year-empty")
      } else {
         const yearError = document.querySelector("#year-empty")
         if (yearError) {
            removeDataError(yearInput, yearLabel, yearError)
         }
      }
   }
})
// ===============
