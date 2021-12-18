/* Mobile menu */

const mobileBtn = document.querySelector(".header-btn");
if(mobileBtn) {
  mobileBtn.addEventListener("click", function() {
    document.querySelector(".header-bottom").classList.toggle("show");
  });
}

/* Catalog menu */

const catalogBtn = document.querySelector(".sidebar-open");
if(catalogBtn) {
  catalogBtn.addEventListener("click", function() {
    document.querySelector(".catalog-right").classList.toggle("show");
  });
}

/* Accordion */

if(document.querySelector(".sidebar-btn")) {
  var acc = document.getElementsByClassName("sidebar-btn");
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