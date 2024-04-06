let adivices = [
   "Pursue what truly excites and fulfills you",
   "Always seek to learn and explore new things",
   "Focus on the positive aspects of your life and express appreciation",
   "Treat others with empathy, compassion, and understanding",
   "See setbacks as opportunities to learn and grow",
   "Practice mindfulness and live in the moment",
   "See setbacks as opportunities to learn and grow",
   "Practice mindfulness and live in the moment",
   "Prioritize physical, mental, and emotional well-being",
   "Define what you want to achieve and work towards it consistently",
   "Cultivate meaningful connections with friends, family, and community",
   "Stay true to yourself and your values",
   "Prioritize tasks effectively and make time for what matters most",
   "Adapt to new circumstances and see change as a chance for growth",
   "Pay attention to others and seek to understand before being understood",
]

const generateButton = document.querySelector(".advice__generate")
const adviceNum = document.querySelector("#advice-num")

let orderNum = 1

let adviceText = document.querySelector("#advice")
generateButton.addEventListener("click", (e) => {
   let randomNumber = Math.floor(Math.random() * adivices.length)

   // if you need to specify the tip number
   // adviceNum.textContent = randomNumber + 1

   // but if you just need to increment the values in order
   orderNum++
   adviceNum.textContent = orderNum

   // other code

   adviceText.textContent = '"' + adivices[randomNumber] + '"'
})
