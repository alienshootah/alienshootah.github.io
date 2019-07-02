// Слайдер
$('.middle-center').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    dots: true,
    /*
    prevArrow: $('.awards-pagination_arrow-left'),
    nextArrow: $('.awards-pagination_arrow-right'),
    */
    arrows: false
});

/* В карте открывающееся меню */
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myDrop1() {
    document.getElementById("myDrop1").classList.toggle("show");
}
function myDrop2() {
    document.getElementById("myDrop2").classList.toggle("show");
}
function myDrop3() {
    document.getElementById("myDrop3").classList.toggle("show");
}
function myDrop4() {
    document.getElementById("myDrop4").classList.toggle("show");
}
function myDrop5() {
    document.getElementById("myDrop5").classList.toggle("show");
}
function myDrop6() {
    document.getElementById("myDrop6").classList.toggle("show");
}
function myDrop7() {
    document.getElementById("myDrop7").classList.toggle("show");
}
function myDrop8() {
    document.getElementById("myDrop8").classList.toggle("show");
}
function myDrop9() {
  document.getElementById("myDrop9").classList.toggle("show");
}

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.mapa-btn')) {
      var dropdowns = document.getElementsByClassName("mapa-hidden");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }