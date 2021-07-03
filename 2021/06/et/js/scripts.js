jQuery(document).ready(function($) {
	$('.header__btn').click(function(){
		$('.header__nav').addClass('active');
		$('body').addClass('no-scroll');
	});

	$('.header__exit').click(function(){
		$('.header__nav').removeClass('active');
		$('body').removeClass('no-scroll');
	});
});

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

