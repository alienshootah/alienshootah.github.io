/* Dropdown buttons */
const menuBtn = document.querySelector(".header-btn");
const searchBtn = document.querySelector(".search-btn");

menuBtn.addEventListener("click", function() {
    document.querySelector(".header-menu").classList.toggle("show");
});
searchBtn.addEventListener("click", function() {
    document.querySelector(".search-body").classList.toggle("show");
});

/* Current year */
year = document.querySelector('.date');
year.innerHTML = new Date().getFullYear();

/* Slider */
$('.bodyslider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: false
          }
        }
      ]
});
$('.minislider-list').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false
        }
      }
    ]
});
$('.recommended-list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  daptiveHeight: true,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

