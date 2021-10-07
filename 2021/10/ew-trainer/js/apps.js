

/* Menu */

const sidebar = document.querySelector(".sidebar");
var headerClose = document.getElementsByClassName("sidebar-close")[0];
const mobileBtn = document.querySelector(".header-menu");
if(mobileBtn) {
  mobileBtn.addEventListener("click", function() {
    document.querySelector(".sidebar").classList.toggle("show");
  });
  headerClose.onclick = function() {
    document.querySelector(".sidebar").classList.toggle("show");
  }
}
if(document.querySelector(".hello-slider")) {
  var helloSlider = new Swiper(".hello-slider", {
    pagination: {
      el: ".hello-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".hello-next",
    },
  });
  /* hide left arrow by deafult */
  var footerBtn = document.getElementsByClassName('footer-more-btn')[0];
  var footerLink = document.getElementsByClassName('footer-more-link')[0];

  /* Swiper API - if index = 1 hide left arrow / otherwise show */
  helloSlider.on('slideChange', function() {
    var realIndex = helloSlider.realIndex;
    if (realIndex == 2) {
      footerLink.style.display = "inline-block";
      footerBtn.style.display = "none";
    } else {
      footerLink.style.display = "none";
      footerBtn.style.display = "inline-block"; 
    }
  });
}

/* Tabs */
window.addEventListener("load", function() {
  // store tabs variable
  var theTabs = document.querySelectorAll("ul.workout-nav > li");

  function theTabClicks(tabClickEvent) {
      var clickedTab = tabClickEvent.currentTarget;
      var tabParent = tabClickEvent.currentTarget.parentNode.parentNode.parentNode;
      var theTabs = tabParent.querySelectorAll("ul.workout-nav > li");
      for (var i = 0; i < theTabs.length; i++) {
          theTabs[i].classList.remove("active");
      }
      
      clickedTab.classList.add("active");
      tabClickEvent.preventDefault();
      var contentPanes = tabParent.querySelectorAll(".workout-content");
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


/* Dropdowns */

// Transition
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

/* Accordion */

var acc = document.getElementsByClassName("accordion-btn");
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

/* Start btn */
if(document.querySelector(".start-row")) {
  const startBtn = document.querySelector(".start-row");
  startBtn.addEventListener("click", function() {
    document.querySelector(".start-action").classList.toggle("active");
  });
}


