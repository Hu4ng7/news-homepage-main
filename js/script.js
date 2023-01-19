const menu = document.querySelector(".mobile-nav");
const openMenu = document.getElementById("menu");
const closeMenu = document.getElementById("close");

openMenu.addEventListener("click", () => {
    menu.classList.remove("hidden");
})

closeMenu.addEventListener("click", () => {
    menu.classList.add("hidden");
})