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

/* Accordion */

if(document.querySelector(".revs-btn")) {
  var acc = document.getElementsByClassName("revs-btn");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.opacity = "0";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.opacity = "1";
      } 
    });
  }
}

/* Slider */

var curatorsSlider = new Swiper(".curators-slider", {
    slideToClickedSlide: true,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      460: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
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
    navigation: {
      nextEl: '.curators-arrow-right',
      prevEl: '.curators-arrow-left',
    },
});