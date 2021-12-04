/* Modals */

let buttons = document.querySelectorAll('.open-modal');
let modals = document.querySelectorAll('.modal');

function showModal(id) {
  let m = document.getElementById(id);
  m.classList.add('visible');
}

function hideModals() {
  modals.forEach(m => {
    m.classList.remove('visible');
  });
}

buttons.forEach(b => {
  b.addEventListener('click', event => {
    hideModals();
    showModal(b.dataset.modal);
  });
});


/**/
modals.forEach(m => {
  let x = m.querySelector('button.close');
  if (x !== 'modal-body') {
    x.addEventListener('click', hideModals);
  }
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

/* Slider clients */

if(document.querySelector(".catalog-slider")) {
  var brandsSlider = new Swiper(".catalog-slider", {
      slidesPerView: 3,
      spaceBetween: 40,
      loop: true,
      navigation: {
          prevEl: ".catalog-arrow-left",
          nextEl: ".catalog-arrow-right",
      },
  });
}

/* Slider clients */

if(document.querySelector(".clients-slider")) {
  var brandsSlider = new Swiper(".clients-slider", {
      slidesPerView: 6,
      spaceBetween: 30,
      breakpoints: {
        317: {
          slidesPerView: 1,
        },
        400: {
          slidesPerView: 2,
        },
        507: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        970: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        1600: {
          slidesPerView: 6,
        },
      },
      loop: true,
      navigation: {
          prevEl: ".clients-arrow-left",
          nextEl: ".clients-arrow-right",
      },
  });
}