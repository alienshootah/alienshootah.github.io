$('.single-item').slick({
  dots: true,
  infinite: true,
  speed: 800,
  arrows: true,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
	{
	  breakpoint: 1520,
	  settings: {
		arrows: false
	  }
	}
  ]
});
$('.center').slick({
  centerMode: true,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 3000,
  centerPadding: '0',
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
	{
	  breakpoint: 1280,
	  settings: {
		arrows: true,
		centerMode: true,
		centerPadding: '0',
		slidesToShow: 1,
		slidesToScroll: 1
	  }
	},
	{
	  breakpoint: 820,
	  settings: {
		arrows: false,
		centerMode: true,
		centerPadding: '0',
		slidesToShow: 1,
		slidesToScroll: 1
	  }
	}
  ]
});
	$('.multiple-items').slick({
	  infinite: true,
	  slidesToShow: 5,
	  dots: false,
	  speed: 800,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  adaptiveHeight: true,
	  slidesToScroll: 5,
	  responsive: [
	  {
      breakpoint: 1370,
      settings: {
		 arrows: false
      }
    },
    {
      breakpoint: 868,
      settings: {
        centerPadding: '0',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 580,
      settings: {
        arrows: false,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
	});