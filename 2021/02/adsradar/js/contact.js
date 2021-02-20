/* Reviews button */
revButton = document.querySelector(".reviews-write-btn");
revButton.addEventListener("click", function() {
    document.querySelector(".contact").classList.toggle("show");
});

/* Close button */
closeButton = document.querySelector(".contact-close");
closeButton.addEventListener("click", function() {
    document.querySelector(".contact").classList.remove("show");
});