/* Menu btn */
const menuBtn = document.querySelector(".header-mobile-btn");
menuBtn.addEventListener("click", function() {
  document.querySelector(".header-right").classList.toggle("show");
});

/* Promo slider */
const promoSlider = new Swiper('.promo-list', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
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

/* News slider */
const newsSlider = new Swiper('.news-list', {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.news-arrow-right',
    prevEl: '.news-arrow-left',
},
});

/* Telephone mask */

window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.tel'), function(input) {
  var keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});

});

/* Current year in footer */
year = document.querySelector('.footer-date');
year.innerHTML = new Date().getFullYear();