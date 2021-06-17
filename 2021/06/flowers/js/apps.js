/* Mobile btn's */
const mobileBtn = document.querySelector(".header-menu");
mobileBtn.addEventListener("click", function() {
  document.querySelector(".nav-drop").classList.toggle("show");
});

const searchBtn = document.querySelector(".header-search");
searchBtn.addEventListener("click", function() {
  document.querySelector(".find").classList.toggle("show");
});

/* Sliders */
function mobileOnlySlider() {
    $('.special-list').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false
    });
}
if(window.innerWidth < 565) {
    mobileOnlySlider();
}

$('.card-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    asNavFor: '.card-slider',
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 3,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 2,
          arrows: false
        }
      }
    ]
  });
  $('.card-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.card-nav',
    dots: false,
    arrows: false,
    focusOnSelect: true,
   
    responsive: [
      {
        breakpoint: 560,
        settings: {
          dots: true,
        }
      }
    ]
});

/* Current year in footer */
year = document.querySelector('.footer-date');
year.innerHTML = new Date().getFullYear();

/* Mask for the telephone */

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