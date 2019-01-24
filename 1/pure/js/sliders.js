// Слайдеры
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 300,
    adaptiveHeight: true,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 770,
        settings: {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
   
});

// Таймер на появление всплывающего окна
var delay_popup = 5000;
setTimeout("document.getElementById('bg_popup').style.display='block'", delay_popup);

