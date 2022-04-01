
/* Calculator */

if(document.getElementById("myRange")) {
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;
  
  slider.oninput = function() {
    output.innerHTML = this.value;
  }
  var x = (slider.value) / 175;
  var y = ((slider.value) / 148);
  var color = 'linear-gradient(90deg, rgb(8,51,99)' + x +'%, rgb(255,255,255)' + y + '%)';
  slider.style.background = color;

  slider.addEventListener("mousemove", function() {
      var x = (slider.value) / 175;
      var y = ((slider.value) / 148);
      var color = 'linear-gradient(90deg, rgb(8,51,99)' + x +'%, rgb(255,255,255)' + y + '%)';
      slider.style.background = color;
  })
  // Проверка на тачскрин
  if(window.matchMedia("(pointer: coarse)").matches) {
    slider.addEventListener("touchmove", function() {
      var x = (slider.value) / 175;
      var y = ((slider.value) / 148);
      var color = 'linear-gradient(90deg, rgb(8,51,99)' + x +'%, rgb(255,255,255)' + y + '%)';
      slider.style.background = color;
    })
  }
}

/* === SLIDER === */

const reviewSlider = new Swiper('.reviews-slider', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.reviews-arrow-right',
      prevEl: '.reviews-arrow-left',
    },
    pagination: {
        el: ".reviews-pagination",
        clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
    },
});

/* Accordeon */

if(document.querySelector(".popular-btn")) {
    var acc = document.getElementsByClassName("popular-btn");
    var i;
  
    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
    }
}

/* Language btn */

const langBtn = document.querySelector(".lang-btn");
if(langBtn) {
  langBtn.addEventListener("click", function() {
    document.querySelector(".lang-drop").classList.toggle("active");
  });
}