$('.dropdown-btn').click(function(e) {
  e.preventDefault()
  var menu = $(this).next()
  if(menu.is(":hidden")){
    $(this).addClass('active')
    menu.slideDown(250)
  }
  else{
    $(this).removeClass('active')
    menu.slideUp(250)
  }
});

function addOrder(){
	$.ajax({
		url:'/ajax/addOrder.php',
		type:'POST',
		data:$('#bx-soa-order-form').serialize(),	
		success: function(data) {
			result=JSON.parse(data);
			if(result.order_id){
				location.search='?ORDER_ID='+result.order_id+'&not_user=Y';
			}
          },
		})
}
function addSubscribe(){
	if ($('#bx-soa-order-form').length>0){
		str=$('#bx-soa-order-form').serialize();
	}else{
		str={'email':'thisUser'};
	}
	$.ajax({
		url:'/ajax/addSubscribe.php',
		type:'POST',
		data:str,	
		success: function(data) {
			
          },
		})
}

$(document).ready(function(){
	$('.fav-link, .btn-favorite').on('click',function(){
		if($(this).find('.fa').length==0){
			var link=$(this);
		}else{
			var link=$(this).find('.fa');
		}
		console.log($(link));
		$.ajax({
		url:'/ajax/fav.php',
		type:'POST',
		data:{'id':$(this).data('item')},	
		success: function(data) {
			res=JSON.parse(data);
			if(res.status=='ok'){
				$(link).removeClass('fa-heart-o');
				$(link).addClass('fa-heart');
				$('.header-wrapp').find('#total_fav_link_count').html(res.count);
				// $(link).removeClass('fav-link');
			}else if(res.status=='delete'){
				$(link).removeClass('fa-heart');
				$(link).addClass('fa-heart-o');
				$('.header-wrapp').find('#total_fav_link_count').html(res.count);
				// $(link).removeClass('fav-link');
			}else{
				$(link).css('color','red');
			}
		  
     },
		})
	});

  // $('.fa-heart').on('click',function(){
    // var link=$(this);
    // $.ajax({
    // url:'/ajax/favdel.php',
    // type:'POST',
    // data:{'id':$(this).data('item')}, 
    // success: function(data) {
      // res=JSON.parse(data);
      // if(res.status=='ok'){
        // $(link).removeClass('fa-heart');
        // $(link).addClass('fa-heart-o');
		// $(link).addClass('fav-link');
      // }else{
        // $(link).css('color','red');
      // }
     // },
    // })
  // });

  // if(window.matchMedia('(min-width: 768px)').matches){
  //   if($('.main').length){
  //     $(".main").onepage_scroll({
  //       sectionContainer: ".section",
  //       animationTime: 600,
  //       responsiveFallback: 600,
  //       loop: true
  //     });
  //   }
  // }
});

$('.burger').click(function(e) {
  var menu = $('#mobile-menu');
  if(!menu.hasClass('active')){
    $(this).addClass('active')
    menu.addClass('active')
  }
  else{
    $(this).removeClass('active')
    menu.removeClass('active')
  }
});

$('.login-btn').click(function(e) {
  e.preventDefault();
  $('.login-dropdown').show()
});

$(document).mouseup(function (e) {
  var container = $('.login-dropdown');
  if (container.has(e.target).length === 0){
    container.hide();
  }
});

$('.profile__btn--search').click(function(e) {
  e.preventDefault();
  $(this).addClass('hidden-item')
  $('.search-form').fadeIn(350)
});

$('.search-form__btn').click(function(e) {
  e.preventDefault()
  $('.search-form').fadeOut(350)
  $('.profile__btn--search').removeClass('hidden-item')
});

if($('.banner__carousel').length){
  var owlMain = $('.banner__carousel').owlCarousel({
    loop:true,
    margin: 0,
    nav:false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive:{
      0:{
          items:1
      }
    }
  })
  //  owlMain.on('changed.owl.carousel',function(property){
  //   var current = property.item.index;
  //   var bagColor = $(property.target).find(".owl-item").eq(current).find('.item').attr('data-color');
  //   $(property.target).closest('div.section').attr('data-color', bagColor);
  //   $('.wrapper').css('background', bagColor);
  //   $('.fixed-panel').css('background', bagColor);
  //   $('.search-form').css('background', bagColor);
  // });
}

if(window.matchMedia('(min-width: 768px)').matches){
  $(document).ready(function() {
    $('div.section').each(function() {
      var winPosMain, itemPos, itemColor, sectionColor;

      itemPos = $(this).offset().top - 200;
      itemColor = $(this).find('.item').attr('data-color');
      $(this).attr('data-color', itemColor);
      sectionColor = $(this).attr('data-color');

      $(window).scroll(function() {
        winPosMain = $(window).scrollTop();
        
        if (winPosMain >= itemPos) {
          
          $('.wrapper').css('background', sectionColor);
          $('.fixed-panel').css('background', sectionColor);
          $('.search-form').css('background', sectionColor);
        } 
      });
    });
  });
}


if($('.product-carousel').length){
  var owl = $('.product-carousel')
  owl.owlCarousel({
    loop:true,
    margin: 0,
    dots: false,
    loop: false,
    onInitialized: carouselInitialized,
    rewind: false,
    nav: true,
    navText: ['<i class="fa fa-chevron-up"></i><div class="prev-name middle"></div>',
              '<i class="fa fa-chevron-up"></i><div class="next-name middle"></div>'],
    responsive:{
      0:{
          items:1
      }
    }
  })
  function carouselInitialized(event){
    var prevNameStart = $('.product-carousel .owl-item.active').before().find('h2').text();
    var nextNameStart = $('.product-carousel .owl-item.active').next().find('h2').text();
    $('.product-carousel .prev-name').text(prevNameStart)
    $('.product-carousel .next-name').text(nextNameStart)
    var prevWidth = $('.prev-name').width() / 2
    var nextWidth = $('.next-name').width() / 2
    prevWidth = -prevWidth
    nextWidth = -nextWidth
    $('.owl-prev').css('left', prevWidth + 'px');
    $('.owl-next').css('right', nextWidth + 'px');
  }
  owl.on('changed.owl.carousel',function(property){
    var current = property.item.index;

    var bagColor = $(property.target).find(".owl-item").eq(current).find('.item').attr('data-color');
    $(property.target).closest('div.section').attr('data-color', bagColor);
    $('.wrapper').css('background', bagColor);
    $('.fixed-panel').css('background', bagColor);
    $('.search-form').css('background', bagColor);
    var prevName = $(property.target).find(".owl-item").eq(current -1).find("h2").text();
    var nextName = $(property.target).find(".owl-item").eq(current + 1).find("h2").text();
    $('.product-carousel .prev-name').text(prevName)
    $('.product-carousel .next-name').text(nextName)
    var prevWidth = $('.prev-name').width() / 2
    var nextWidth = $('.next-name').width() / 2
    prevWidth = -prevWidth
    nextWidth = -nextWidth
    $('.owl-prev').css('left', prevWidth + 'px');
    $('.owl-next').css('right', nextWidth + 'px');

    
  });
}
/*РІС‹РЅРµСЃ РІ РѕС‚РґРµР»СЊРЅС‹Рµ С„Р°Р№Р»С‹*/
/*$('.questions__header').click(function(e) {
  e.preventDefault();
  var qBody = $(this).next()
  var qText = $(this).find('.questions__btn__toggle')
  if(qBody.is(':hidden')){
    qText.text('РЎРІРµСЂРЅСѓС‚СЊ -')
    qBody.slideDown(250)
  }
  else{
    qBody.slideUp(250)
    qText.text('Р Р°Р·РІРµСЂРЅСѓС‚СЊ +')
  }
});

$('.delivery__header').click(function(e) {
  e.preventDefault();
  var qBody = $(this).next()
  if(qBody.is(':hidden')){
    $(this).find('.delivery__btn__link').text('РЎРІРµСЂРЅСѓС‚СЊ -')
    qBody.slideDown(250)
  }
  else{
    qBody.slideUp(250)
    $(this).find('.delivery__btn__link').text('Р Р°Р·РІРµСЂРЅСѓС‚СЊ +')
  }
});*/

function startAuth(rnd){
	$.ajax({
		url:$('form[name=system_auth_form'+rnd+']').attr('action'),
		type:'POST',
		data:$('form[name=system_auth_form'+rnd+']').serialize(),	
		success: function(data) {
			if($(data).find('.login-dropdown__form').length>0){
				$('form[name=system_auth_form'+rnd+']').prepend($(data).find('.login-dropdown__form > p > .errortext').parent())
			}else{
				document.location.reload(true);
			}
          },
		})
}

function checkForm(form){
	var flag=true;
	$(form).find('[data-requered=Y]').each(function(){
		if(!$(this).val()){
			flag=false;
			$(this).css('border-color','red');
		}else{
			$(this).css('border-color','');
		}
	});
	if(!flag){
		off=$('#bx-soa-order').offset();
		window.scrollTo(0, off.top-200); 
	}
	return flag;
}

function selectCity(input){
// if($(input).val().length>0){
	$.ajax({
		url:'/ajax/findCity.php',
		type:'POST',
		data:{'city':input},	
		success: function(data){
			var result = JSON.parse(data);
			if(result.code){
				$('input[name=RECENT_DELIVERY_VALUE]').attr('value',result.code);
				$('input[name=ORDER_PROP_5]').attr('value',result.code);
			} 
		  
          },
		})
// }
}

function SetCity(city){
	$.ajax({
		url:'/ajax/SetCity.php',
		type:'POST',
		data:{'city':city},	
		success: function(data) {
			$("#drop-city").html(city);
			$("#drop-city").parent().find('ul').html(data);
          },
		})
}

function number_format(number, decimals, dec_point, thousands_sep) {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + (Math.round(n * k) / k)
        .toFixed(prec);
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
    .split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '')
    .length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1)
      .join('0');
  }
  return s.join(dec);
}