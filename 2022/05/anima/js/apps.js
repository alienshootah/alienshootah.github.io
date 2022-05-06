/* Mobile btn */
const mobileBtn = document.querySelector(".header-btn");
mobileBtn.addEventListener("click", function() {
  document.querySelector(".header").classList.toggle("show");
});

/* Sticky header */

window.onscroll = function() {myFunc()};

var header = document.getElementById("head");
var sticky = header.offsetTop;

function myFunc() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}