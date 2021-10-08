/* Mobile menu */

const mobileBtn = document.querySelector(".header-mobile-btn");
if(mobileBtn) {
  mobileBtn.addEventListener("click", function() {
    document.querySelector(".header").classList.toggle("show");
  });
}