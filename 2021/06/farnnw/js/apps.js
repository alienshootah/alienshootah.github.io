
/* Mobile btn */
const mobileBtn = document.querySelector(".header-mobile");
mobileBtn.addEventListener("click", function() {
  document.querySelector(".header-nav").classList.toggle("show");
});

/* Dropdowns */
function myDrop1() {
    document.getElementById("myDrop1").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.menu-link')) {
      var dropdowns = document.getElementsByClassName("drop");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}