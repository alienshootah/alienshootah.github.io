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

/* Dropdowns */

/* Accordion */

if(document.querySelector(".drop-open")) {
    var acc = document.getElementsByClassName("drop-open");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
    }
}
if(document.querySelector(".days-list")) {
    var clientsSlider = new Swiper(".days-list", {
        slidesPerView: 1,
        loop: true,
        navigation: {
            prevEl: ".days-arrow-left",
            nextEl: ".days-arrow-right",
        },
    });
}