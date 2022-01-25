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