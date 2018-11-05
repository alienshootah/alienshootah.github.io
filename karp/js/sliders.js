$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false
      }
    }
  ]
});
		