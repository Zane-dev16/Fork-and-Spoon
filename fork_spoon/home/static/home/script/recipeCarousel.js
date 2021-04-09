recipeIndex = 0
slider = document.querySelector(".recipe-slider")
function slideRecipe(amount) {
    if (recipeIndex + amount + 3 < slider.childElementCount && recipeIndex + amount >= 0){
        recipeIndex += amount
        slider.style.transform = `translateX(${-300 * recipeIndex}px)`
    }
}