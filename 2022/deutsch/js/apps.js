/* === SLIDER === */

const reviewSlider = new Swiper('.reviews-list', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoHeight: true,
    navigation: {
      nextEl: '.reviews-arrow-right',
      prevEl: '.reviews-arrow-left',
    },
    pagination: {
        el: ".reviews-pagination",
        clickable: true,
    },
});