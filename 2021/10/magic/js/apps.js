/* Mobile menu */

const mobileBtn = document.querySelector(".mobile-icon");
if(mobileBtn) {
  mobileBtn.addEventListener("click", function() {
    document.querySelector(".header").classList.toggle("show");
  });
  window.onclick = function(event) {
    if (!event.target.matches('.mobile-icon')) {
      var dropdowns = document.getElementsByClassName("header");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}
}

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
var btn = document.querySelectorAll(".drop-custom");

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


/* Show/hide pass btn 

const mobileBtn = document.querySelector(".mobile-icon");
if(mobileBtn) {
  mobileBtn.addEventListener("click", function() {
    document.querySelector(".header").classList.toggle("show");
  });
  window.onclick = function(event) {
    if (!event.target.matches('.mobile-icon')) {
      var dropdowns = document.getElementsByClassName("header");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}
}

*/