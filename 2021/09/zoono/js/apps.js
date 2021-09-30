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