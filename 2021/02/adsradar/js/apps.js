

/* Mobile button */
mobButton = document.querySelector(".nav-mobile");
mobButton.addEventListener("click", function() {
    document.querySelector(".nav-list").classList.toggle("show");
});

/* Language button */
langButton = document.querySelector(".lang-btn");
langButton.addEventListener("click", function() {
    document.querySelector(".lang-drop").classList.toggle("show");
});

/* Current year */
year = document.querySelector('.footer-date');
year.innerHTML = new Date().getFullYear();



