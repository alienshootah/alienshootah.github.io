// Submenu
$(document).ready(function(){
    $('.dropdown-submenu a.submenus').on("click", function(e){
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });
});


// Show all tabs button
$("#show_all").on("click", function() {
    $(this).addClass("active").parent("li").siblings().find("a").removeClass("active");
    $(".tab-pane").removeClass("fade").addClass("active").addClass("show");
  });
  $(".nav-link").not("#show_all").on("click", function() {
    console.log(this.hash);
    $(".tab-pane").not(this.hash).removeClass("active").removeClass("show");
});

// Sticky navbar
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
// Get the navbar
var navbar = document.getElementById("navbar");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Dropdown for search mobile
dropButton = document.querySelector(".find-button");
dropBody = document.querySelector(".find-drop");

dropButton.addEventListener("click", function() {
    document.querySelector(".find-drop").classList.toggle("show");
});

// Close subDropdown
$("button.close").on('click', function(e) {
  $(this).closest('ul.subcat').css('display','none');
})