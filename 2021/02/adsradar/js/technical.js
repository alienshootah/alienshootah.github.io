/* Reviews button */
techButton = document.querySelector(".technical-btn");
techButton.addEventListener("click", function() {
    document.querySelector(".techcontact").classList.toggle("show");
});

/* Close button */
closeButton = document.querySelector(".contact-close");
closeButton.addEventListener("click", function() {
    document.querySelector(".techcontact").classList.remove("show");
});