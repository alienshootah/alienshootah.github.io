/* Promo slider */
const promoSlider = new Swiper('.promo-list', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoHeight: true,
  pagination: {
    el: ".pagination",
    clickable: true,
  },
});

/* Wedo slider */
const wedoSlider = new Swiper('.wedo-list', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.wedo-arrow-right',
    prevEl: '.wedo-arrow-left',
},
});

/* Half slider one */
const halfOneSlider = new Swiper('.half-list-one', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.half-one-right',
    prevEl: '.half-one-left',
},
});

/* Half slider thue */
const halfThueSlider = new Swiper('.half-list-thue', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.half-thue-right',
    prevEl: '.half-thue-left',
},
});

/* Half slider thue */
const newsSlider = new Swiper('.news-list', {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.news-arrow-right',
    prevEl: '.news-arrow-left',
},
});