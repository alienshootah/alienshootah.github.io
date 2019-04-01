// Sliders
$('.one-time').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 770,
      settings: {
        arrows: false
      }
    }
  ]
});
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 428,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});

// Responsive menu
function myNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}