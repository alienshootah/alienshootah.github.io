/* Sliders */

$('.place-list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 560,
      settings: {
        infinite: true,
        dots: false,
        centerMode: true,
        centerPadding: '30px',
      }
    }
  ]
});

function mobileOnlySlider() {
  $('.better-list').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows: false
  });
  $('.prefer-list').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false
  });
  $('.details-lister').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false
  });
}
if(window.innerWidth < 560) {
  mobileOnlySlider();
}

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
  let x = m.querySelector('button.modal-close');
  if (x !== 'modal-body') {
    x.addEventListener('click', hideModals);
  }
});



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

/* More-Less */

function myMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("moreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Показать еще";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Показать меньше";
    moreText.style.display = "flex";
  }
}

/* Lozad */

const el = document.querySelector('img');
const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
observer.observe();