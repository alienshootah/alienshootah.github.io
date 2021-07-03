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

