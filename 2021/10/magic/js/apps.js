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
