"use strict"

let a = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let b = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let c = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let path = [18, 22, 1, 21, 10, 20, 23, 9, 25, 13, 11, 4, 17, 12, 6, 16, 8, 15, 24, 19, 3, 7, 0, 5, 14, 2]
let path2 = [12, 3, 17, 8, 24, 1, 15, 19, 6, 22, 0, 13, 9, 4, 11, 20, 7, 10, 14, 5, 23, 2, 18, 21, 16, 25]

function changeWheel(str, value) {
   for (let i = 0; i < value; i++) {
      let part = str.pop()
      str.unshift(part)
   }
}

const generate = document.querySelector("#generate")
generate.addEventListener("click", generateCode)
function generateCode(e) {
   const wheel1 = document.querySelector("#wheel1")
   const wheel2 = document.querySelector("#wheel2")
   const wheel3 = document.querySelector("#wheel3")

   if (validateInputs(wheel1) === false || validateInputs(wheel2) === false || validateInputs(wheel3) === false) {
      throw new Error("Invalid data")
   } else {
      clearInput(wheel1)
      clearInput(wheel2)
      clearInput(wheel3)

      const wheel1Value = parseInt(wheel1.value)
      const wheel2Value = parseInt(wheel2.value)
      const wheel3Value = parseInt(wheel3.value)

      let aArr = [...a]
      let bArr = [...b]
      let cArr = [...c]

      let path = [...path2]
      let path1 = [...path]

      // changeWheel(aArr, wheel1Value)
      // changeWheel(bArr, wheel2Value)
      // changeWheel(cArr, wheel3Value)

      const inputText = document.querySelector("#inputText")

      document.getElementById("generateOutput").textContent = ecr(
         inputText.value,
         wheel1Value,
         wheel2Value,
         wheel3Value,
         aArr,
         bArr,
         cArr,
         path,
         path1
      )
   }
}

const generate2 = document.querySelector("#generate2")
generate2.addEventListener("click", decryptCode)
function decryptCode(e) {
   const wheel4 = document.querySelector("#wheel4")
   const wheel5 = document.querySelector("#wheel5")
   const wheel6 = document.querySelector("#wheel6")

   if (validateInputs(wheel4) === false || validateInputs(wheel5) === false || validateInputs(wheel6) === false) {
      throw new Error("Invalid data")
   } else {
      clearInput(wheel4)
      clearInput(wheel5)
      clearInput(wheel6)
      const wheel4Value = parseInt(wheel4.value)
      const wheel5Value = parseInt(wheel5.value)
      const wheel6Value = parseInt(wheel6.value)

      let aArr = [...a]
      let bArr = [...b]
      let cArr = [...c]

      let path = [...path2]
      let path1 = [...path]

      // changeWheel(aArr, wheel4Value)
      // changeWheel(bArr, wheel5Value)
      // changeWheel(cArr, wheel6Value)

      const inputText = document.querySelector("#inputText2")

      document.getElementById("generateOutput2").textContent = decr(
         inputText.value,
         wheel4Value,
         wheel5Value,
         wheel6Value,
         aArr,
         bArr,
         cArr,
         path,
         path1
      )
   } // console.log(wheel4Value, wheel5Value, wheel6Value)
}

// let word = "hello my mom"

function ecr(word, wheel1, wheel2, wheel3, a, b, c, pathTwo, path) {
   let encryptMes = ""
   let wheelCountA = wheel1 - 1
   let wheelCountB = wheel2 - 1
   let wheelCountC = wheel3 - 1

   for (let i = 0; i < word.length; i++) {
      if (word[i] === " ") {
         encryptMes += " "
         continue
      }

      let index = a.indexOf(word[i].toUpperCase())
      let newIndex = path[index]
      let newChar = b[newIndex]
      let thirdIndex = b.indexOf(newChar.toUpperCase())
      let lastIndex = pathTwo[thirdIndex]
      let finalChar = c[lastIndex]
      encryptMes += finalChar

      wheelCountC++

      if (wheelCountC > 25) {
         wheelCountC = 0
         wheelCountB++
         if (wheelCountB > 25) {
            wheelCountB = 0
            wheelCountA++
            if (wheelCountA > 25) {
               wheelCountA = 0
            }
            let letter = a.pop()
            a.unshift(letter)
         }
         let letter = b.pop()
         b.unshift(letter)
      }

      changeWheel(a, wheelCountA)
      changeWheel(b, wheelCountB)
      changeWheel(c, wheelCountC)

      changeWheel(pathTwo, wheelCountB)
   }
   return encryptMes
}

function decr(word, wheel1, wheel2, wheel3, a, b, c, pathTwo, path) {
   let dencryptMes = ""
   let wheelCountA = wheel1 - 1
   let wheelCountB = wheel2 - 1
   let wheelCountC = wheel3 - 1

   for (let i = 0; i < word.length; i++) {
      if (word[i] === " ") {
         dencryptMes += " "
         continue
      }

      wheelCountC++
      if (wheelCountC > 25) {
         wheelCountC = 0
         wheelCountB++
         if (wheelCountB > 25) {
            wheelCountB = 0
            wheelCountA++
            if (wheelCountA > 25) {
               wheelCountA = 0
            }
            let letter = a.pop()
            a.unshift(letter)
         }
         let letter = b.pop()
         b.unshift(letter)
      }

      let index = c.indexOf(word[i].toUpperCase())
      let newIndex = pathTwo.indexOf(index)
      let newChar = b[newIndex]
      let lastIndex = b.indexOf(newChar.toUpperCase())
      let finalIndex = path.indexOf(lastIndex)
      let finalChar = a[finalIndex]
      dencryptMes += finalChar

      changeWheel(a, wheelCountA)
      changeWheel(b, wheelCountB)
      changeWheel(c, wheelCountC)
      changeWheel(pathTwo, wheelCountB)
   }

   return dencryptMes
}

function validateInputs(input) {
   if (parseInt(input.value) > 26 || parseInt(input.value) < 0 || input.value === "") {
      input.classList.add("Error")
      return false
   }
}

function clearInput(input) {
   if (parseInt(input.value) < 26 && parseInt(input.value) > 0) {
      input.classList.remove("Error")
      return true
   }
}

const copyEncrypt = document.querySelector("#copyEncrypt")
copyEncrypt.addEventListener("click", copyEncryptMes)
function copyEncryptMes(e) {
   let copyText = document.getElementById("generateOutput").textContent

   // Use the Clipboard API to copy the text
   navigator.clipboard.writeText(copyText).then(
      function () {
         const message = document.querySelector("#message")
         message.classList.add("active")
         // message.style.animationPlayState = "running"
         setTimeout(() => {
            message.classList.remove("active")
         }, 1000)
      },
      function (err) {
         // Error callback
         console.error("Could not copy text: ", err)
      }
   )
}

const copyDecrypt = document.querySelector("#copyDecrypt")
copyDecrypt.addEventListener("click", copyDecryptMes)

function copyDecryptMes(e) {
   let copyText = document.getElementById("generateOutput2").textContent

   // Use the Clipboard API to copy the text
   navigator.clipboard.writeText(copyText).then(
      function () {
         const message = document.querySelector("#message")
         message.classList.add("active")
         // message.style.animationPlayState = "running"
         setTimeout(() => {
            message.classList.remove("active")
         }, 1000)
      },
      function (err) {
         // Error callback
         console.error("Could not copy text: ", err)
      }
   )
}

function copyText(url) {
   let copyText = document.getElementById(url).textContent

   // Use the Clipboard API to copy the text
   navigator.clipboard.writeText(copyText).then(
      function () {
         const message = document.querySelector("#message")
         message.classList.add("active")
         // message.style.animationPlayState = "running"
         setTimeout(() => {
            message.classList.remove("active")
         }, 1000)
      },
      function (err) {
         // Error callback
         console.error("Could not copy text: ", err)
      }
   )
}

/*
 I was made for lovin you baby you were made for lovin me And I cant get enough of you baby can you get enough of me
*/
