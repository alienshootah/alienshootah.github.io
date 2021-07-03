/* Slider */
$('.single-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          arrows: false,
          autoplay: true,
            autoplaySpeed: 3000,
        }
      }
    ]
  });