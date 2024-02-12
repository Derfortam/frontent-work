"use strict"
const raitingBlock = document.querySelectorAll(".raiting__block")
const raitingMainBlock = document.querySelector(".review__raiting")

function getData(element) {
    if (element) {
        const currentMargin = element.getAttribute('data-margin')
        const result = parseFloat(currentMargin)
        return result
    } else {
        return 0
    }
}

function addMarginToElement() {
    if (raitingBlock) {
        if (window.innerWidth >= 1200) {
            let margin = getData(raitingMainBlock)
            let marginLeft = 0
            raitingBlock.forEach((item) => {
                marginLeft += margin
                item.style.marginLeft = `${marginLeft / 16}rem`
            })
        } else {
            raitingBlock.forEach((item) => {
                item.style.marginLeft = 0
            })
        }
    }
}

window.addEventListener('resize', () => {
    addMarginToElement()
})
addMarginToElement()








const commentBlock = document.querySelectorAll(".comments__block")
const commentContainer = document.querySelector(".comments")

function addMarginToElementComment() {
    if (commentBlock) {
        if (window.innerWidth >= 1200) {
            let margin = getData(commentContainer)
            let marginLeft = 0
            commentBlock.forEach((item) => {
                marginLeft += margin
                item.style.marginTop = `${marginLeft / 16}rem`
            })
        } else {
            commentBlock.forEach((item) => {
                item.style.marginTop = 0
            })
        }
    }
}

window.addEventListener('resize', () => {
    addMarginToElementComment()
})
addMarginToElementComment()