window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("header-fixed");
    if (document.body.contains) {

    }
    navbar.style.marginTop = '10px';
  } else {
    navbar.classList.remove("header-fixed");
    navbar.style.marginTop = '0';
  }
  
}