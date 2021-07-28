/* Mobile btn's */
const mobileBtn = document.querySelector(".header-mobile");
mobileBtn.addEventListener("click", function() {
  document.querySelector(".header").classList.toggle("show");
});

/* Current year in footer */
year = document.querySelector('.footer-date');
year.innerHTML = new Date().getFullYear();