/* Mobile button */
mobButton = document.querySelector(".header-mobile");
mobMenu = document.querySelector(".header-list");

mobButton.addEventListener("click", function() {
    document.querySelector(".header-resp").classList.toggle("show");
})

/* Current year */
year = document.querySelector('.footer-date');
year.innerHTML = new Date().getFullYear();