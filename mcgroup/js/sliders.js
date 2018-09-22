$('.center').slick({
  centerMode: true,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 3000,
  centerPadding: '0',
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [
	{
	  breakpoint: 1380,
	  settings: {
		arrows: true,
		centerMode: true,
		centerPadding: '0',
		slidesToShow: 1,
		slidesToScroll: 1
	  }
	},
	{
	  breakpoint: 1180,
	  settings: {
		arrows: true,
		centerMode: true,
		centerPadding: '0',
		slidesToShow: 1,
		slidesToScroll: 1
	  }
	},
	{
	  breakpoint: 600,
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
  slidesToShow: 7,
  autoplay: true,
  slidesToScroll: 1,
  responsive: [
	{
	  breakpoint: 1380,
	  settings: {
		arrows: true,
		centerMode: true,
		centerPadding: '0',
		slidesToShow: 5,
		slidesToScroll: 1
	  }
	},
	{
	  breakpoint: 1120,
	  settings: {
		arrows: true,
		centerMode: true,
		centerPadding: '0',
		slidesToShow: 3,
		slidesToScroll: 1
	  }
	},
	{
	  breakpoint: 600,
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