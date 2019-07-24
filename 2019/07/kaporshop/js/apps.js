// Dropdown
function myDrop() {
    document.getElementById("myDrop").classList.toggle("show");
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.account-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
}

// Slider
$('.pre-slider').slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    arrows: false
});

// Mobile
function myMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu-mobile") {
      x.className += " responsive";
    } else {
      x.className = "menu-mobile";
    }
  }