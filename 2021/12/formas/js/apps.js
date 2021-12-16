/* Mobile menu */

const mobileBtn = document.querySelector(".formas-decor");
if(mobileBtn) {
  mobileBtn.addEventListener("click", function() {
    document.querySelector(".formas-form").classList.toggle("show");
  });
}