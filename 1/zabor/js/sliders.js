// Иконка меню анимация на 768 пикселей
function myFun(x) {
  x.classList.toggle("change");
}

// Слайдеры
$('.one-time').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    adaptiveHeight: true,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1340,
        settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
   
  });