/* Mobile menu */

const mobileBtn = document.querySelector(".mobile-btn");
if(mobileBtn) {
  mobileBtn.addEventListener("click", function() {
    document.querySelector(".header-right").classList.toggle("show");
  });
}

/* === SLIDER === */

const reviewSlider = new Swiper('.reviews-list', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.reviews-arrow-right',
      prevEl: '.reviews-arrow-left',
    },
    pagination: {
        el: ".reviews-pagination",
        clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
});

/* Accordeon */

if(document.querySelector(".steps-btn")) {
  var acc = document.getElementsByClassName("steps-btn");
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