"use strict"

// з головної
const portfolioSwiper = document.querySelector('.page__portfolio')
if (portfolioSwiper) {
    new Swiper('.photowork__box', {
        navigation: {
            nextEl: '#nextPortfolio',
            prevEl: '#backPortfolio'
        },
        grabCursor: true,
        keyboard: {
            enabled: true,
            onlyInVieport: true,
            pageDown: true,
        },
        mousewheel: {
            sensitivity: 1,
            eventsTarget: ".portfolio__container"
        },
        slidesPerView: '3',
        watchOverFlow: true,
        spaceBetween: 30,
        centeredSlides: true,
        initialSlide: 3,

        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            670: {
                slidesPerView: 2,
            },
            1020: {
                slidesPerView: 3,
            }
        }
    })
}
const servicesSwiper = document.querySelector('.page__services')
if (servicesSwiper) {
    new Swiper('.services__box', {
        navigation: {
            nextEl: '#nextServices',
            prevEl: '#backServices'
        },
        grabCursor: true,
        keyboard: {
            enabled: true,
            onlyInVieport: true,
            pageDown: true,
        },
        mousewheel: {
            sensitivity: 1,
            eventsTarget: ".services__container"
        },
        slidesPerView: '1',
        watchOverFlow: true,
        spaceBetween: 30,

        centeredSlides: true,
        initialSlide: 3,
    })
}




const clientsSliderAboutPage = document.querySelector('.clients')
console.log(clientsSliderAboutPage)
if (clientsSliderAboutPage) {
    new Swiper('.comment__box', {
        navigation: {
            nextEl: '#nextComment',
            prevEl: '#backComment'
        },
        grabCursor: true,
        keyboard: {
            enabled: true,
            onlyInVieport: true,
            pageDown: true,
        },
        mousewheel: {
            sensitivity: 1,
            eventsTarget: ".clients__container"
        },
        slidesPerView: '3',
        watchOverFlow: true,
        spaceBetween: 30,
        centeredSlides: true,
        initialSlide: 3,
        effect: "coverflow",
        coverFlowEffect: {
            rotate: 20,
            stretch: 50,
            slideShadows: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            670: {
                slidesPerView: 2,
            },
            1020: {
                slidesPerView: 3,
            }
        }
    })
}




const carouselPortraitSwiper = document.querySelector("#carousel-portrait")
if (carouselPortraitSwiper) {
    new Swiper('.portrait__box', {
        navigation: {
            nextEl: '.portrait-next',
            prevEl: '.portrait-prev'
        },
        grabCursor: true,
        keyboard: {
            enabled: true,
            onlyInVieport: true,
            pageDown: true,
        },
        mousewheel: {
            sensitivity: 1,
            eventsTarget: ".portrait__box"
        },
        slidesPerView: '3',
        watchOverFlow: true,
        spaceBetween: 30,
        centeredSlides: true,
        initialSlide: 1,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            670: {
                slidesPerView: 2,
            },
            1020: {
                slidesPerView: 3,
            }
        }
    })
}

const eventPortraitSwiper = document.querySelector("#carousel-event")
if (eventPortraitSwiper) {
    new Swiper('.event__box', {
        navigation: {
            nextEl: '.event-next',
            prevEl: '.event-prev'
        },
        grabCursor: true,
        keyboard: {
            enabled: true,
            onlyInVieport: true,
            pageDown: true,
        },
        mousewheel: {
            sensitivity: 1,
            eventsTarget: ".event__box"
        },
        slidesPerView: '3',
        watchOverFlow: true,
        spaceBetween: 30,
        centeredSlides: true,
        initialSlide: 1,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            670: {
                slidesPerView: 2,
            },
            1020: {
                slidesPerView: 3,
            }
        }
    })
}

const commercialPortraitSwiper = document.querySelector("#carousel-commercial")
if (commercialPortraitSwiper) {
    new Swiper('.commercial__box', {
        navigation: {
            nextEl: '.commercial-next',
            prevEl: '.commercial-prev'
        },
        grabCursor: true,
        keyboard: {
            enabled: true,
            onlyInVieport: true,
            pageDown: true,
        },
        mousewheel: {
            sensitivity: 1,
            eventsTarget: ".commercial__box"
        },
        slidesPerView: '3',
        watchOverFlow: true,
        spaceBetween: 30,
        centeredSlides: true,
        initialSlide: 1,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            670: {
                slidesPerView: 2,
            },
            1020: {
                slidesPerView: 3,
            }
        }
    })
}


const commentBoxSwiper = document.querySelector(".clients")
if (commentBoxSwiper) {
    new Swiper('.comment__box', {
        navigation: {
            nextEl: '#nextComment',
            prevEl: '#backComment'
        },
        grabCursor: true,
        keyboard: {
            enabled: true,
            onlyInVieport: true,
            pageDown: true,
        },
        mousewheel: {
            sensitivity: 1,
            eventsTarget: ".clients__container"
        },
        slidesPerView: '3',
        watchOverFlow: true,
        spaceBetween: 30,
        centeredSlides: true,
        initialSlide: 3,
        effect: "coverflow",
        coverFlowEffect: {
            rotate: 20,
            stretch: 50,
            slideShadows: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            670: {
                slidesPerView: 2,
            },
            1020: {
                slidesPerView: 3,
            }
        }
    })
}


// =======================


// свайпер для першого слайдера

const photographyContentSlider = document.querySelector('#photography-body')
if (photographyContentSlider) {
    new Swiper('#photography-body', {
        navigation: {
            nextEl: '.next-portrait',
            prevEl: '.back-portrait'
        },
        grabCursor: true,
        keyboard: {
            enabled: true,
            onlyInVieport: true,
            pageDown: true,
        },
        mousewheel: {
            sensitivity: 1,
            eventsTarget: "#photography-body"
        },
        slidesPerView: 1,
        watchOverFlow: true,
        spaceBetween: 30,
        centeredSlides: true,
        initialSlide: 3,
    })
}

// ========================================================================================

// свайпер для 2 слайдера

const photographyEventSlider = document.querySelector('#event-body')
if (photographyEventSlider) {
    new Swiper('#event-body', {
        navigation: {
            nextEl: '.event-next',
            prevEl: '.event-back'
        },
        grabCursor: true,
        keyboard: {
            enabled: true,
            onlyInVieport: true,
            pageDown: true,
        },
        mousewheel: {
            sensitivity: 1,
            eventsTarget: "#event-body"
        },
        slidesPerView: 1,
        watchOverFlow: true,
        spaceBetween: 30,
        centeredSlides: true,
        initialSlide: 3,
    })
}

// ========================================================================================

// свайпер для 3 слайдера

const photographyCommercialSlider = document.querySelector('#commercial-body')
if (photographyCommercialSlider) {
    new Swiper('#commercial-body', {
        navigation: {
            nextEl: '.commercial-next',
            prevEl: '.commercial-back'
        },
        grabCursor: true,
        keyboard: {
            enabled: true,
            onlyInVieport: true,
            pageDown: true,
        },
        mousewheel: {
            sensitivity: 1,
            eventsTarget: "#commercial-body"
        },
        slidesPerView: 1,
        watchOverFlow: true,
        spaceBetween: 30,
        centeredSlides: true,
        initialSlide: 3,
    })
}


const commentBox = document.querySelector(".clients")
if (commentBox) {
    new Swiper('.comment__box', {
        // стрілки виводяться через before, after ті, що за замовченням в html
        // можна вказувати будь які стрілки

        navigation: {
            nextEl: '#nextComment',
            prevEl: '#backComment'
        },
        grabCursor: true,
        keyboard: {
            enabled: true,
            onlyInVieport: true,
            pageDown: true,
        },
        mousewheel: {
            sensitivity: 1,
            eventsTarget: ".clients__container"
        },
        slidesPerView: '3',
        watchOverFlow: true,
        spaceBetween: 30,
        //slidesPerGroup: 3,
        centeredSlides: true,
        initialSlide: 3,

        // є різні ефекти  fade flip cube coverFlow
        effect: "coverflow",
        coverFlowEffect: {
            rotate: 20,
            stretch: 50,
            slideShadows: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            670: {
                slidesPerView: 2,
            },
            1020: {
                slidesPerView: 3,
            }
        }
    })
}
