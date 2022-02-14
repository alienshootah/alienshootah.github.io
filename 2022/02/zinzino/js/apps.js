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

/* Sliders */

const promoSlider = new Swiper('.promo-slider', {
  autoHeight: true,
  slidesPerView: 2,
  loop: true,
  spaceBetween: 16,
  navigation: {
    nextEl: '.promo-arrow-right',
    prevEl: '.promo-arrow-left',
  },
  pagination: {
      el: ".promo-pagination",
      clickable: true,
  },
});

const helpSlider = new Swiper('.help-slider', {
  autoHeight: true,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.help-arrow-right',
    prevEl: '.help-arrow-left',
  },
  pagination: {
      el: ".help-pagination",
      clickable: true,
  },
});

const askSlider = new Swiper('.ask-slider', {
  autoHeight: true,
  slidesPerView: 4,
  loop: true,
  navigation: {
    nextEl: '.ask-arrow-right',
    prevEl: '.ask-arrow-left',
  },
  pagination: {
      el: ".ask-pagination",
      clickable: true,
  },
});