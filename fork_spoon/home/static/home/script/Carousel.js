let carousel = document.querySelector(".slider")
let carouselImages = carousel.getElementsByTagName("img")
let autoState = true

let selector = document.querySelector(".carousel-selector")
let buttons = document.getElementsByClassName("banner-button")
let buttonSizes = []

for (button of buttons) {
    buttonSize = button.clientWidth
    buttonSizes.push(buttonSize)
    button.style.width = buttonSizes[0]
}

for (i = 2; i < carouselImages.length; i++) {
    selectorCln = selector.cloneNode(false)
    selector.parentElement.appendChild(selectorCln)
}

let selectors = document.getElementsByClassName("carousel-selector")
let currentSelector = selectors[0]

let imageDisplayCounter = 0
setTimeout(autoAnimateCarousel, 3000)
function autoAnimateCarousel() {
    if (autoState && imageDisplayCounter < carouselImages.length-1) {
        imageDisplayCounter++
        slideCarousel(imageDisplayCounter)
        autoChangeSelectors()
        autoChangeButtons()
        setTimeout(autoAnimateCarousel, 5000)
    }
}

function slideCarousel(BannerIndex) {
    carousel.style.transition = "transform 1s ease-out"
    carousel.style.transform = "translateX(" + (-100*BannerIndex) + "vw)"
}

function autoChangeSelectors() {
    makeTransparentSelectors()
    getCurrentOf(selectors).style.backgroundColor = "white"
}

function makeTransparentSelectors() {
    for (selector of selectors) {
        selector.style.backgroundColor = "transparent"
    }
}

function getCurrentOf(element) {
    if (imageDisplayCounter == carouselImages.length - 1) {
        return element[0]
    }
    return element[imageDisplayCounter]
}

function autoChangeButtons() {
    currentButton = getCurrentOf(buttons)
    currentSize = getCurrentOf(buttonSizes)
    ChangeButtons(currentButton, currentSize)
}

function ChangeButtons(currentButton, currentSize) {
    for (button of buttons) {
        button.style.opacity = "0"
        button.style.zIndex = "0"
    }
    currentButton.style.opacity = "1"
    currentButton.style.zIndex = "3"
    for (button of buttons) {
        button.style.width = currentSize
    }
}

function SelectBanner(selectedSelector) {
    autoState = false
    makeTransparentSelectors()
    selectedSelector.style.backgroundColor = "white"
    bannerIndex = getIndexof(selectedSelector)
    slideCarousel(bannerIndex)
    ChangeButtons(buttons[bannerIndex], buttonSizes[bannerIndex])
}

function getIndexof(element) {
    for (var i = 0; element = element.previousElementSibling; i++);
    return i;
}

carousel.addEventListener("transitionend", () => {
    if (autoState && imageDisplayCounter == carouselImages.length-1) {
        carousel.style.transition = "none"
        carousel.style.transform = "translateX(0)"
        imageDisplayCounter = 0
    }
})
