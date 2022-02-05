/* Mobile menu */

const mobileBtn = document.querySelector(".mobile-btn");
if(mobileBtn) {
  mobileBtn.addEventListener("click", function() {
    document.querySelector(".header").classList.toggle("show");
  });
}



/* Modals */

let buttons = document.querySelectorAll('.curr-modal');
let modals = document.querySelectorAll('.modal');

function showModal(id) {
  let m = document.getElementById(id);
  m.classList.add('show');
}

function hideModals() {
  modals.forEach(m => {
    m.classList.remove('show');
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
  let x = m.querySelector('button.modal-close');
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

/* Card slider's */

var cardSlider = new Swiper(".card-slider", {
  slidesPerView: 1,
  loop:true,
});

var cardNav = new Swiper(".card-nav", {
  slideToClickedSlide: true,
  spaceBetween: 0,
  loop:true,
  thumbs: {
    swiper: cardSlider,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    425: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    540: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});