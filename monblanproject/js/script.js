"use strict"

window.addEventListener("load", () => {
   const preloader = document.getElementById("preloader")
   preloader.style.opacity = "0"
   setTimeout(() => {
      preloader.style.display = "none"
      document.querySelector(".wrapper").style.display = "block"
   }, 500)

   const pickerForFrom = new Pikaday({
      field: document.getElementById("date-from"),
      // bound: false,
      format: "DD/MM/YYYY",
      toString(date) {
         const day = String(date.getDate()).padStart(2, "0")
         const month = String(date.getMonth() + 1).padStart(2, "0")
         const year = date.getFullYear()
         return `${day}_${month}_${year}`
      },
   })

   const pickerForTo = new Pikaday({
      field: document.getElementById("date-to"),
      // bound: false,
      format: "DD/MM/YYYY",
      toString(date) {
         const day = String(date.getDate()).padStart(2, "0")
         const month = String(date.getMonth() + 1).padStart(2, "0")
         const year = date.getFullYear()
         return `${day}_${month}_${year}`
      },
   })

   document.getElementById("open-date-from").addEventListener("click", () => {
      pickerForFrom.show()
   })
   document.getElementById("open-date-to").addEventListener("click", () => {
      pickerForTo.show()
   })

   document.getElementById("close-date-from").addEventListener("click", () => {
      pickerForFrom.hide()
      document.getElementById("date-from").value = ""
   })
   document.getElementById("close-date-to").addEventListener("click", () => {
      pickerForTo.hide()
      document.getElementById("date-to").value = ""
   })

   if (document.querySelector(".header__burger"))
      document.querySelector(".header__burger").addEventListener("click", () => {
         document.body.classList.toggle("menu-open")
      })

   const element = document.querySelector(".header")
   const scrollThreshold = 50

   window.addEventListener("scroll", () => {
      if (window.scrollY > scrollThreshold) {
         element.classList.add("scrolled")
      } else {
         element.classList.remove("scrolled")
      }
   })
   // ===================================
   // page
   const entryPoint = document.getElementById("list-of-project")
   const arrayOfProjects = [
      {
         sourceImage: "img/content/img_1.jpg",
         mainImage: "img/content/img_1.webp",
         todayTitle: "Today",
         todayLikes: 128,
         todayComments: 31,
         todayTitle: "Today",
         todayLikes: 128,
         todayComments: 31,
         prevTime: "2016-08-09",
         prevLikes: 67,
         prevComments: 22,
         uploadTitle: "Image upload",
         timeUpload: "2016-04-11",
      },
      {
         sourceImage: "img/content/img_2.jpg",
         mainImage: "img/content/img_2.webp",
         todayTitle: "Today",
         todayLikes: 128,
         todayComments: 31,
         todayTitle: "Today",
         todayLikes: 128,
         todayComments: 31,
         prevTime: "2016-08-09",
         prevLikes: 67,
         prevComments: 22,
         uploadTitle: "Image upload",
         timeUpload: "2016-04-11",
      },
      {
         sourceImage: "img/content/img_3.jpg",
         mainImage: "img/content/img_3.webp",
         todayTitle: "Today",
         todayLikes: 128,
         todayComments: 31,
         todayTitle: "Today",
         todayLikes: 128,
         todayComments: 31,
         prevTime: "2016-08-09",
         prevLikes: 67,
         prevComments: 22,
         uploadTitle: "Image upload",
         timeUpload: "2016-04-11",
      },
      {
         sourceImage: "img/content/img_4.jpg",
         mainImage: "img/content/img_4.webp",
         todayTitle: "Today",
         todayLikes: 128,
         todayComments: 31,
         todayTitle: "Today",
         todayLikes: 128,
         todayComments: 31,
         prevTime: "2016-08-09",
         prevLikes: 67,
         prevComments: 22,
         uploadTitle: "Image upload",
         timeUpload: "2016-04-11",
      },
      {
         sourceImage: "img/content/img_5.jpg",
         mainImage: "img/content/img_5.webp",
         todayTitle: "Today",
         todayLikes: 128,
         todayComments: 31,
         todayTitle: "Today",
         todayLikes: 128,
         todayComments: 31,
         prevTime: "2016-08-09",
         prevLikes: 67,
         prevComments: 22,
         uploadTitle: "Image upload",
         timeUpload: "2016-04-11",
      },
      {
         sourceImage: "img/content/img_6.jpg",
         mainImage: "img/content/img_6.webp",
         todayTitle: "Today",
         todayLikes: 128,
         todayComments: 31,
         todayTitle: "Today",
         todayLikes: 128,
         todayComments: 31,
         prevTime: "2016-08-09",
         prevLikes: 67,
         prevComments: 22,
         uploadTitle: "Image upload",
         timeUpload: "2016-04-11",
      },
      {
         sourceImage: "img/content/img_7.jpg",
         mainImage: "img/content/img_7.webp",
         todayTitle: "Today",
         todayLikes: 128,
         todayComments: 31,
         todayTitle: "Today",
         todayLikes: 128,
         todayComments: 31,
         prevTime: "2016-08-09",
         prevLikes: 67,
         prevComments: 22,
         uploadTitle: "Image upload",
         timeUpload: "2016-04-11",
      },
      {
         sourceImage: "img/content/img_8.jpg",
         mainImage: "img/content/img_8.webp",
         todayTitle: "Today",
         todayLikes: 128,
         todayComments: 31,
         todayTitle: "Today",
         todayLikes: 128,
         todayComments: 31,
         prevTime: "2016-08-09",
         prevLikes: 67,
         prevComments: 22,
         uploadTitle: "Image upload",
         timeUpload: "2016-04-11",
      },
      {
         sourceImage: "img/content/img_9.jpg",
         mainImage: "img/content/img_9.webp",
         todayTitle: "Today",
         todayLikes: 128,
         todayComments: 31,
         todayTitle: "Today",
         todayLikes: 128,
         todayComments: 31,
         prevTime: "2016-08-09",
         prevLikes: 67,
         prevComments: 22,
         uploadTitle: "Image upload",
         timeUpload: "2016-04-11",
      },
   ]

   const panelButtons = document.querySelectorAll(".view-control-panel__button")
   if (panelButtons.length) document.querySelector(".view-control-panel").addEventListener("click", checkPanelButtons)
   document.body.classList.add("list-button")
   function checkPanelButtons(e) {
      const target = e.target
      if (target.classList.contains("view-control-panel__button")) {
         panelButtons.forEach(item => item.classList.remove("active"))
         target.classList.add("active")

         if (target.id === "grid-button") {
            document.body.classList.remove("list-button")
            document.body.classList.add("grid-button")
            uploadProgects(entryPoint, arrayOfProjects, 8)
         } else if (target.id === "list-button") {
            document.body.classList.remove("grid-button")
            document.body.classList.add("list-button")
            uploadProgects(entryPoint, arrayOfProjects)
         }
      }
   }

   uploadProgects(entryPoint, arrayOfProjects)

   function uploadProgects(pointToEnter, arrayObjects, count) {
      if (pointToEnter && arrayObjects.length) {
         if (document.body.classList.contains("list-button")) {
            pointToEnter.innerHTML = ""

            arrayObjects.forEach(item => {
               pointToEnter.innerHTML += `
                     <li class="list-project__item">
                        <picture class='list-project__picture-wrapper'>
                            <source srcset='${item.sourceImage}' type='image/jpg'>
                            <img class='list-project__image' alt='Image' src='${item.mainImage}'>
                        </picture>
                        <div class="list-project__content">
                            <div class="list-project__info-block">
                                <h5 class="list-project__title">${item.todayTitle}</h5>
                                <div class="list-project__data">
                                    <span class=" icon-heart">${item.todayLikes}</span>
                                    <span class=" icon-comment">${item.todayComments}</span>
                                </div>
                            </div>
                            <div class="list-project__info-block">
                                <h5 class="list-project__title"><time datetime="${item.prevTime}">${item.prevTime
                  .split("-")
                  .reverse()
                  .join("-")}</time></h5>
                                <div class="list-project__data">
                                    <span class=" icon-heart">${item.prevLikes}</span>
                                    <span class=" icon-comment">${item.prevComments}</span>
                                </div>
                            </div>
                            <div class="list-project__info-block">
                                <h5 class="list-project__title">${item.uploadTitle}</h5>
                                <p class="list-project__date"><time datetime="${item.timeUpload}">${item.timeUpload
                  .split("-")
                  .reverse()
                  .join("-")}</time></p>
                            </div>
                        </div>
                    </li>
`
            })
         } else if (document.body.classList.contains("grid-button")) {
            if (count > arrayObjects.length) count = arrayObjects.length
            pointToEnter.innerHTML = ""
            for (let i = 0; i < count; i++) {
               const item = arrayObjects[i]

               pointToEnter.innerHTML += `
                     <li class="list-project__item">
                        <picture class='list-project__picture-wrapper'>
                            <source srcset='${item.sourceImage}' type='image/jpg'>
                            <img class='list-project__image' alt='Image' src='${item.mainImage}'>
                        </picture>
                        <div class="list-project__content">
                            <div class="list-project__info-block">
                                <h5 class="list-project__title">${item.todayTitle}</h5>
                                <div class="list-project__data">
                                    <span class=" icon-heart">${item.todayLikes}</span>
                                    <span class=" icon-comment">${item.todayComments}</span>
                                </div>
                            </div>
                            <div class="list-project__info-block">
                                <h5 class="list-project__title"><time datetime="${item.prevTime}">${item.prevTime
                  .split("-")
                  .reverse()
                  .join("-")}</time></h5>
                                <div class="list-project__data">
                                    <span class=" icon-heart">${item.prevLikes}</span>
                                    <span class=" icon-comment">${item.prevComments}</span>
                                </div>
                            </div>
                            <div class="list-project__info-block">
                                <h5 class="list-project__title">${item.uploadTitle}</h5>
                                <p class="list-project__date"><time datetime="${item.timeUpload}">${item.timeUpload
                  .split("-")
                  .reverse()
                  .join("-")}</time></p>
                            </div>
                        </div>
                    </li>`
            }
         }
      }
   }

   let indexOfUploaded = 8
   const uploadButton = document.getElementById("upload-more")
   if (uploadButton)
      uploadButton.addEventListener("click", () => {
         indexOfUploaded += 8

         uploadProgects(entryPoint, arrayOfProjects, indexOfUploaded)
      })
})
