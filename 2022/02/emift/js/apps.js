
/* Mobile btn */
const mobileBtn = document.querySelector(".header-mobile");
mobileBtn.addEventListener("click", function() {
  document.querySelector(".header-nav").classList.toggle("show");
  document.querySelector(".swop").classList.toggle("show");
});

/* Dropdowns */
function myDrop1() {
    document.getElementById("myDrop1").classList.toggle("show");
}
function myDrop2() {
  document.getElementById("myDrop2").classList.toggle("show");
}
function myDrop3() {
  document.getElementById("myDrop3").classList.toggle("show");
}
function myDrop4() {
  document.getElementById("myDrop4").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.drop-btn')) {
    var dropdowns = document.getElementsByClassName("drop-body");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var singleSlider = new Swiper(".single-slider", {
  slidesPerView: 1,
  loop: true,
});

var singleNav = new Swiper(".single-nav", {
  slideToClickedSlide: true,
  spaceBetween: 0,
  loop: true,
  thumbs: {
    swiper: singleSlider,
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
    460: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
  navigation: {
    nextEl: '.single-arrow-right',
    prevEl: '.single-arrow-left',
  },
});

var resosSlider = new Swiper(".resors-slider", {
  slideToClickedSlide: true,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    460: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: '.resors-arrow-right',
    prevEl: '.resors-arrow-left',
  },
});