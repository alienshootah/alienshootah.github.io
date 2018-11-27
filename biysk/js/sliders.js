

// Слайдеры
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    adaptiveHeight: true,
    dots: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
          dots: false
        }
        
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.single-item').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    dots: true,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });