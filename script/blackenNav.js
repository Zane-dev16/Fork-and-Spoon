let linkList = document.getElementById("linkList")
let links = linkList.getElementsByTagName("a")
let logoImage = document.getElementById("logo-image")
let logoDescription = document.getElementById("logo-description")


function setClassBlack(element) {
    element.className = "black"
}

document.addEventListener("scroll", () => {
    if (window.scrollY > 750) {
        window.requestAnimationFrame(() => {
            for (link of links) {
                setClassBlack(link)
            }
            setClassBlack(logoImage)
            setClassBlack(logoDescription)
        })
    } else {
        window.requestAnimationFrame(() => {
            for (link of links) {
                link.removeAttribute("class")
            }
            logoImage.removeAttribute("class")
            logoDescription.removeAttribute("class")
        })
    }
})

let banner = document.querySelector(".slider")
let bannerImages = banner.getElementsByTagName("img")

let bannerSelectors = document.querySelector(".banner-selectors")
let bannerSelector = bannerSelectors.querySelector(".banner-selector")


for (i = 2; i < bannerImages.length; i++) {
    bannerSelectorCln = bannerSelector.cloneNode(false)
    bannerSelectors.appendChild(bannerSelectorCln)
}

let bannerSelectorList = bannerSelectors.getElementsByClassName("banner-selector")
let currentBannerSelector = bannerSelectorList[0]
let autoMoveBanner = true
imageDisplayCounter = 0
setTimeout(log, 5000)
function log() {
    if (autoMoveBanner) {
        imageDisplayCounter++
        autoChangeBannerSelection(imageDisplayCounter)
        slideBannerLeft()
        setTimeout(log, 5000)
    }
}

function autoChangeBannerSelection(imageDisplayCounter) {
    makeTransparentBannerSelectors()
    if (imageDisplayCounter == bannerImages.length - 1) {
        currentBannerSelector = bannerSelectorList[0]
    }
    else {
        currentBannerSelector = bannerSelectorList[imageDisplayCounter]
    }
    currentBannerSelector.style.backgroundColor = "white"
}

function slideBannerLeft() {
    banner.style.transition = "transform 2s"
    moveToBanner(imageDisplayCounter)
}

function SelectBanner(selectedBannerSelector) {
    autoMoveBanner = false
    makeTransparentBannerSelectors()
    selectedBannerSelector.style.backgroundColor = "white"
        moveToBanner(getIndexof(selectedBannerSelector))
}

function makeTransparentBannerSelectors() {
    for (bannerSelector of bannerSelectorList) {
        bannerSelector.style.backgroundColor = "transparent"
    }
}

function getIndexof(element) {
    for (var i = 0; element = element.previousElementSibling; i++);
    return i;
}

function moveToBanner(BannerIndex) {
    banner.style.transform = "translateX(" + (-100*BannerIndex) + "vw)"
}

banner.addEventListener("transitionend", () => {
    if (imageDisplayCounter == bannerImages.length-1 && autoMoveBanner) {
        banner.style.transition = "none"
        banner.style.transform = "translateX(0)"
        imageDisplayCounter = 0
    }
})

