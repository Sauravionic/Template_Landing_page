const hamBurgerIcon = document.getElementById("hamburger_icon");
hamBurgerIcon.addEventListener("click", function() {
    const hamBurgerTriangle = document.getElementById("hamburger_menu_triangle");
    const hamBurgerMenu = document.getElementById("hamburger_menu");

    if(hamBurgerTriangle.style.visibility == "visible" && hamBurgerMenu.style.visibility == "visible") {
    hamBurgerTriangle.style.visibility = "hidden";
    hamBurgerMenu.style.visibility = "hidden";
    }
    else {
        hamBurgerTriangle.style.visibility = "visible";
        hamBurgerMenu.style.visibility = "visible";
    }
})