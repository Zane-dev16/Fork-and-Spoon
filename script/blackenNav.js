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
    bannerSelectorCln = bannerSelector.cloneNode(true)
    bannerSelectors.appendChild(bannerSelectorCln)
}

counter = 0

function log() {
    counter++
    banner.style.transition = "transform 2s"
    banner.style.transform = "translateX(" + (-100*counter) + "vw)"
    setTimeout(log, 5000)
}

log()


banner.addEventListener("transitionend", () => {
    if (counter == bannerImages.length-1) {
        banner.style.transition = "none"
        banner.style.transform = "translateX(0)"
        counter = 0
    }
})

