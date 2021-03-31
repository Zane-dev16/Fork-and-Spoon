let linkList = document.getElementById("linkList")
let links = linkList.getElementsByTagName("a")
let logoImage = document.getElementById("logo-image")
let logoDescription = document.getElementById("logo-description")

document.addEventListener("scroll", () => {
    if (window.scrollY > 450 && window.scrollY < 1830) {
        window.requestAnimationFrame(() => {
            for (link of links) {
                link.className = "black"
            }
            logoImage.className = "black"
            logoDescription.className = "black"
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

function test() {
    console.log(document.querySelector("span"))
}
