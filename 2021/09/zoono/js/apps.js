/* Mobile button */
const menuBtn = document.querySelector(".header-mobile-btn");
menuBtn.addEventListener("click", function() {
  document.querySelector(".header-row").classList.toggle("show");
});

/* Mobile close */
const closeBtn = document.querySelector(".header-close-btn");
closeBtn.addEventListener("click", function() {
  document.querySelector(".header-row").classList.remove("show");
});

/* Dropdowns in header */

function fadeIn(el) {
    el.style.opacity = 0;
    el.style.display = "block";
  
    (function fade() {
      var val = parseFloat(el.style.opacity);
      if (!((val += 0.1) >= 1.1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    }());
  }
  
  function fadeOut(el) {
    (function fade() {
      var val = parseFloat(el.style.opacity);
      if ((val -= 0.1) == 0) {
        el.style.opacity = 0;
        el.style.display = "none";
      } else {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    }());
  }
  
  // Initialise all the required variables
  var btn = document.querySelectorAll(".drop-start");
  
  /*
   *	Button click event listeners
   *	Keeps track of the button click.
   */
  btn.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      e.preventDefault();
      var sibling = btn.nextElementSibling,
        firstVisible = document.querySelector('.visible'),
        dropDown;
  
      /*
       * Remove the visible class if an element is already in the DOM
       */
      if (firstVisible) {
        fadeOut(firstVisible);
        firstVisible.classList.remove("visible");
      }
  
      if (!sibling.classList.contains("visible")) {
        fadeIn(sibling);
        sibling.classList.add("visible");
      } else {
        fadeOut(sibling);
        sibling.classList.remove("visible");
      }
    });
  });
  
document.addEventListener("click", function() {
    var visible = document.querySelector(".visible");

    if (visible) {
        fadeOut(visible);
        visible.classList.remove("visible");
    }
});

/* Tabs */
window.addEventListener("load", function() {
    // store tabs variable
    var theTabs = document.querySelectorAll("ul.program-nav > li");

    function theTabClicks(tabClickEvent) {
        var clickedTab = tabClickEvent.currentTarget;
        var tabParent = tabClickEvent.currentTarget.parentNode.parentNode.parentNode;
        var theTabs = tabParent.querySelectorAll("ul.program-nav > li");
        for (var i = 0; i < theTabs.length; i++) {
            theTabs[i].classList.remove("active");
        }
        
        clickedTab.classList.add("active");
        tabClickEvent.preventDefault();
        var contentPanes = tabParent.querySelectorAll(".program-content");
        for (i = 0; i < contentPanes.length; i++) {
            contentPanes[i].classList.remove("active");
        }
        var anchorReference = tabClickEvent.target;
        var activePaneId = anchorReference.getAttribute("href");
        var activePane = tabParent.querySelector(activePaneId);
        activePane.classList.add("active");
    }
    for (i = 0; i < theTabs.length; i++) {
        theTabs[i].addEventListener("click", theTabClicks)
    }
});

/* Clients slider */

var clientsSlider = new Swiper(".clients-list", {
    slidesPerView: 6,
    loop: true,
    navigation: {
      nextEl: ".clients-arrow-right",
      prevEl: ".clients-arrow-left",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      520: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    },
});

/* Accordion */

var acc = document.getElementsByClassName("faq-btn");
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

/* Clients slider */

var cardSlider = new Swiper(".card-slider", {
  slidesPerView: 1,
  loop:true,
});

var cardNav = new Swiper(".card-nav", {
  slidesPerView: 5,
  slideToClickedSlide: true,
  spaceBetween: 0,
  loop:true,
  thumbs: {
    swiper: cardSlider,
  },
  
  breakpoints: {
    540: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
});