// Adaptive menu
function myMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}

// Slider
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: false,
    responsive: [
      {
        breakpoint: 620,
        settings: {
          arrows: false,
          slidesToShow: 3,
        }
      }
    ]
});