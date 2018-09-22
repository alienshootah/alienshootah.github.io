$('.one-time').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1185,
      settings: {
        infinite: true,
        dots: false,
		arrows: false
      }
    }
  ]
});
$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  arrows: true,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1060,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
		arrows: false
      }
    },
    {
      breakpoint: 840,
      settings: {
		dots: true,
		arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 540,
      settings: {
		dots: false,
		arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.multiple-items').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 3,
  centerPadding: '0',
  arrows: false,
  responsive: [
    {
      breakpoint: 1060,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
		arrows: false
      }
    },
    {
      breakpoint: 767,
      settings: {
		dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});