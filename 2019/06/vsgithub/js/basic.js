/* Scroll sticky */
$(window).scroll(function() { 
	var the_top = $(document).scrollTop();
	if (the_top > 90) {$('body').addClass('sticky');}
	else {$('body').removeClass('sticky');}
});
$(document).ready(function () {
	new WOW().init();
	/*
	$('.screen-portfolio .info .inner h3').hover(function(){		
		if($(this).height()>60){
			$(this).addClass('big');
		} else{
			$(this).removeClass('big');
		}
	});
	*/
	
	$('.tabs li').click(function(){
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".page-portfolio .tabs-content").offset().top - 50
		}, 1000);		
	});
	
	$('.checkbox-330 input').prop('checked', true).parent().addClass('plus-active');
	$('.checkbox-330 input').change(function(){
		if($(this).is(':checked')){
			$(this).parent().addClass('plus-active');
		} else{
			$(this).parent().removeClass('plus-active');
		}
	});
	setTimeout(function(){
	  $('.main-head i:first-child').addClass('active');
	}, 1500);
	/* Header (sandwich) */
	$('.header-menu').click(function() {
		if($(this).hasClass('open')) {
			$('body').removeAttr('style');
			$('.header').removeClass('head-open');
			$(this).removeClass('open');
			$('.floating-menu').removeClass('menu-open');
		}
		else {
			$('body').css('overflow','hidden');
			$('.header').addClass('head-open');
			$(this).addClass('open');
			$('.floating-menu').addClass('menu-open');
		}
	});
	/* Banner (scroll) */
	$('.screen-banner .scroll-botoom').click(function() {
		$('html, body').animate({scrollTop: $('.screen-services').offset().top - 100},1000);
	});
	/* Testimonials (slider) */
	$('.screen-testimonials .slider').slick({
		infinite: true,
		centerMode: true,
		variableWidth: true
	});
	/* Location (slider) */
	$('.screen-location .slider').slick({
		infinite: true,
		arrows: false,
		fade: true,
        asNavFor: '.dots-images'
	});
    $('.screen-location .dots-images').slick({
		variableWidth: true,
        slidesToShow: 3,
        asNavFor: '.screen-location .slider',
        focusOnSelect: true
    });
	/* Process (slider) */
	$('.screen-process .slider').slick({
		dots: true,
        customPaging : function(slider, i) {
            var thumb = jQuery(slider.$slides[i]).data();
            return '<button type="button" role="tab">'+('0'+(i+1)).slice(-2)+'</button>';
        },
		infinite: true,
		centerMode: true,
		variableWidth: true
	});
	/* Portfolio (tabs) */
	$('.page-portfolio .tabs ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active').closest('.content').find('.tabs-content > div').removeClass('active').eq($(this).index()).addClass('active');
	});
	$('.pagination a.prev').hover(function() {
		$('.pagination a').removeClass('active');
	});
	/* Dev (block opacity) */
	$('.screen-dev .block').hover(function() {
		if($('.screen-dev .block').hasClass('active')) {
			$(this).removeClass('active');
			$('.screen-dev .block:not(.active)').removeClass('no-active');
		}
		else {
			$(this).addClass('active');
			$('.screen-dev .block:not(.active)').addClass('no-active');
		}
	});
	/* Up Top */
	$('.up-top').click(function() {
		$('html, body').animate({scrollTop:0},700);
	});
	/* Popup form (label active) */
	$('.popup-request form label').click(function() {
		if($('.popup-request form label').hasClass('active')) {$(this).addClass('active');}
		else {$(this).removeClass('active');}
	});
	/* Pagianation (btn) */
	$(window).scroll(function() {
		if($('div').hasClass('pagination')) {
			var target = $('.pagination');
			var targetPos = target.offset().top;
			var winHeight = $(window).height();
			var scrollToElem = targetPos - winHeight;
			var winScrollTop = $(this).scrollTop();
		}
		if(winScrollTop > scrollToElem) {
			$('.pagination .next').removeClass('no-active');
			$('.pagination .next').addClass('active');
		}
	});
	$('.pagination .prev a').hover(function() {
		$('.pagination div').removeClass('no-active');
		$('.pagination div').removeClass('active');
	});	
	$(".your-file").click(function(){
		$(this).find('input[type=file]').val("");		
	});											
	$(".your-file input[type=file]").change(function(){							
		if($(this).val()!=''){
			$(this).closest('.file-wr').find('.plus').addClass('plus-active');
		} else{
			$(this).closest('.file-wr').find('.plus').removeClass('plus-active');
		}
	});		
	if(localStorage.getItem('cookie')!='true'){
		$('.cookie').fadeIn(50);
	}
	$('.cookie .close').click(function(e){
		$('.cookie').fadeOut(250);
		localStorage.setItem('cookie', 'true');
	});
	var slickLength = (parseInt($('#screen-process .slick-slide').length) - 2)/2;
	console.log(slickLength);
	$('#screen-process .slick-slide').each(function(){
		var count = $(this).attr('data-slick-index');
		if(count == slickLength){			
			$(this).find('.ord-numb').html('<span>01</span>');
		} else if(count>=0){
			count = parseInt(count) + 1;
			$(this).find('.ord-numb').html('<span>0'+count+'</span>');
		} else{
			$(this).find('.ord-numb').html('<span>0'+slickLength+'</span>');
		}		
	});
});

if(window.matchMedia('(max-width: 768px)').matches) {
	/* Advantages home (slider) */
	var $statusAdvantages = $('.screen-advantages .pagingInfo');
	var $slickElementAdvantages = $('.screen-advantages .content');
	$slickElementAdvantages.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
		$statusAdvantages.html('<span class="count">'+ i +'</span>' + '<span class="divide">/</span>' + '<span class="count">'+ slick.slideCount +'</span>');
	});
	$slickElementAdvantages.slick();
	/* Brands home (slider) */
	var $statusBrands = $('.screen-brands .pagingInfo');
	var $slickElementBrands = $('.screen-brands .list');
	$slickElementBrands.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
		var i = (currentSlide ? currentSlide : 0) + 1;
		$statusBrands.html('<span class="count">'+ i +'</span>' + '<span class="divide">/</span>' + '<span class="count">'+ slick.slideCount +'</span>');
	});
	$slickElementBrands.slick();
}