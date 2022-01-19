/* Dropdowns */

if(document.querySelector(".faq-btn")) {
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
}

/* Modals */

let buttons = document.querySelectorAll('.curr-modal');
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
  var btn = document.querySelectorAll(".nav-link-drop");
  
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

/* Current year */
year = document.querySelector('.footer-date');
year.innerHTML = new Date().getFullYear();