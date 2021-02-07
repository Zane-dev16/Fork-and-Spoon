let linkList = document.getElementById("linkList")
let links = linkList.getElementsByTagName("a")
let logoImage = document.getElementById("logo-image")
let logoDescription = document.getElementById("logo-description")

function setClassBlack(element) {
    let black = document.createAttribute("class")
    black.value = "black"
    element.setAttributeNode(black)
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

function log() {
    for (link of links) {
        console.log("🚀 ~ file: blackenNav.js ~ line 17 ~ link", link)
    }
}