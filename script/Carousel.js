let carousel = document.querySelector(".slider")
let carouselImages = carousel.getElementsByTagName("img")
let autoState = true

let selector = document.querySelector(".carousel-selector")
let buttons = document.getElementsByClassName("banner-button")

for (button of buttons) {
    button.style.width = button.clientWidth
}

for (i = 2; i < carouselImages.length; i++) {
    selectorCln = selector.cloneNode(false)
    selector.parentElement.appendChild(selectorCln)
}

let selectors = document.getElementsByClassName("carousel-selector")
let currentSelector = selectors[0]

let imageDisplayCounter = 0
setTimeout(autoAnimateCarousel, 5000)
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
    width = getCurrentOf(buttons).clientWidth
    buttons[0].style.width = width
}

function SelectBanner(selectedSelector) {
    autoState = false
    makeTransparentSelectors()
    selectedSelector.style.backgroundColor = "white"
    slideCarousel(getIndexof(selectedSelector))
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
