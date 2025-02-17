const menuOpenbutton = document.querySelector("#menu-ope-button")

menuOpenbutton.addEventListener("click",() => {
    /*Toggle mobile menu visibility*/
    document.body.classList.toggle("show-mobile-menu");
})