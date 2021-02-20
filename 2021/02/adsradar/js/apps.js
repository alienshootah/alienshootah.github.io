/* Mobile button */
mobButton = document.querySelector(".nav-mobile");
mobButton.addEventListener("click", function() {
    document.querySelector(".nav-list").classList.toggle("show");
})

/* Language button */
langButton = document.querySelector(".lang-btn");
langButton.addEventListener("click", function() {
    document.querySelector(".lang-drop").classList.toggle("show");
})

/* Reviews button */
revButton = document.querySelector(".reviews-write-btn");
revButton.addEventListener("click", function() {
    document.querySelector(".contact").classList.toggle("show");
})

/* Close button */
closeButton = document.querySelector(".contact-close");
closeButton.addEventListener("click", function() {
    document.querySelector(".contact").classList.remove("show");
})

/* Current year */
year = document.querySelector('.footer-date');
year.innerHTML = new Date().getFullYear();