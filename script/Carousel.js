let carousel = document.querySelector(".slider")
let carouselImages = carousel.getElementsByTagName("img")
let autoState = true

let selection = document.querySelector(".carousel-selection")
let Selector = selection.querySelector(".carousel-selector")


for (i = 2; i < carouselImages.length; i++) {
    SelectorCln = Selector.cloneNode(false)
    selection.appendChild(SelectorCln)
}

let SelectorList = selection.getElementsByClassName("carousel-selector")
let currentSelector = SelectorList[0]

let imageDisplayCounter = 0
setTimeout(autoAnimateCarousel, 5000)
function autoAnimateCarousel() {
    if (autoState && imageDisplayCounter < carouselImages.length-1) {
        imageDisplayCounter++
        slideCarousel(imageDisplayCounter)
        autoChangeSelectors()
        setTimeout(autoAnimateCarousel, 5000)
    }
}

function slideCarousel(BannerIndex) {
    carousel.style.transition = "transform 1s ease-out"
    carousel.style.transform = "translateX(" + (-100*BannerIndex) + "vw)"
}

function autoChangeSelectors() {
    makeTransparentSelectors()
    getCurrentSelector().style.backgroundColor = "white"
}

function makeTransparentSelectors() {
    for (Selector of SelectorList) {
        Selector.style.backgroundColor = "transparent"
    }
}

function getCurrentSelector() {
    if (imageDisplayCounter == carouselImages.length - 1) {
        return SelectorList[0]
    }
    return SelectorList[imageDisplayCounter]
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