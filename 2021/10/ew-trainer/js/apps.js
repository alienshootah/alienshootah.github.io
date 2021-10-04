/* Menu */

const sidebar = document.querySelector(".sidebar");
var headerClose = document.getElementsByClassName("sidebar-close")[0];
const mobileBtn = document.querySelector(".header-menu");
if(mobileBtn) {
  mobileBtn.addEventListener("click", function() {
    document.querySelector(".sidebar").classList.toggle("show");
  });
  headerClose.onclick = function() {
    document.querySelector(".sidebar").classList.toggle("show");
  }
}
if(document.querySelector(".hello-slider")) {
  var helloSlider = new Swiper(".hello-slider", {
    pagination: {
      el: ".hello-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".hello-next",
    },
  });
  /* hide left arrow by deafult */
  var footerBtn = document.getElementsByClassName('footer-more-btn')[0];
  var footerLink = document.getElementsByClassName('footer-more-link')[0];

  /* Swiper API - if index = 1 hide left arrow / otherwise show */
  helloSlider.on('slideChange', function() {
    var realIndex = helloSlider.realIndex;
    if (realIndex == 2) {
      footerLink.style.display = "inline-block";
      footerBtn.style.display = "none";
    } else {
      footerLink.style.display = "none";
      footerBtn.style.display = "inline-block"; 
    }
  });
}

