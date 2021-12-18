/* Mobile menu */

const mobileBtn = document.querySelector(".header-btn");
if(mobileBtn) {
  mobileBtn.addEventListener("click", function() {
    document.querySelector(".header-bottom").classList.toggle("show");
  });
}