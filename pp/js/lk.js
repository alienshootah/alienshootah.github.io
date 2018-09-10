/* validator */
function validatorLk(){

	$.validator.setDefaults({ 
	  ignore: [],
	  // any other default options and/or rules
	})
	//$.validator.setDefaults({ ignore: '' });
	// js-lk-info-form
	if ( $('.js-lk-info-form').length ) {
		var feedback_form1 = $('.js-lk-info-form');
		feedback_form1.validate({
			rules: {
				lk_info_name: {
					required: true
				},
				lk_info_last_name: {
					required: true
				},
				lk_info_email: {
					required: true,
					email: true
				},
				lk_info_phone1: {
					required: true,
				},
				lk_info_phone2: {
					required: true,
				},
				lk_info_phone3: {
					required: true,
				},
				lk_info_phone4: {
					required: true,
				},
				lk_info_phone5: {
					required: true,
				},
				lk_info_phone6: {
					required: true,
				}
			},
			errorClass: 'error',
			validClass: 'valid',
			focusInvalid: false,
			highlight: function(element, errorClass, validClass) { 
				$(element).removeClass(validClass).addClass(errorClass);
				console.log(element);
			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).removeClass(errorClass).addClass(validClass);
				console.log(element);
			},
			errorPlacement: function(error, element) {}
		});
	}

	// js-lk-change-pass-form
	if ( $('.js-lk-change-pass-form').length ) {
		var feedback_form2 = $('.js-lk-change-pass-form');
		feedback_form2.validate({
			rules: {
				lk_old_pass: {
					required: true
				},
				lk_new_pass: {
					required: true
				},
				lk_new_new_pass: {
					required: true,
				}
			},
			messages: {
				lk_old_pass: "1Пароль не изменён, так как прежний пароль введён не правильно. Если Вы забыли его, то воспользуйтесь <a href='#'>системой восстановления пароля</a>",
				lk_new_pass: "2Пароль не изменён, так как прежний пароль введён не правильно. Если Вы забыли его, то воспользуйтесь <a href='#'>системой восстановления пароля</a>",
				lk_new_new_pass: "3Пароль не изменён, так как прежний пароль введён не правильно. Если Вы забыли его, то воспользуйтесь <a href='#'>системой восстановления пароля</a>"
			},
			groups: {
        DateofBirth: "lk_old_pass lk_new_pass lk_new_new_pass"
    	},
			errorClass: 'error',
			validClass: 'valid',
			focusInvalid: false,
			errorElement: 'span',
			highlight: function(element, errorClass, validClass) { 
				$(element).removeClass(validClass).addClass(errorClass);
			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).removeClass(errorClass).addClass(validClass);
			},
			errorPlacement: function(error, element) {
				var cur = element;
				
				error.insertAfter("#lk-input22");
			}
		});
	}

	// js-lk-recommendation-form
	if ( $('.js-lk-recommendation-form').length ) {
		var feedback_form3 = $('.js-lk-recommendation-form');
		feedback_form3.validate({
			rules: {
				emails_values: {
					required: true
				}
			},
			errorClass: 'error',
			focusInvalid: false,
			validClass: 'valid',
			highlight: function(element, errorClass, validClass) { 
				$(element).removeClass(validClass).addClass(errorClass);
			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).removeClass(errorClass).addClass(validClass);
			},
			errorPlacement: function(error, element) {}
		});
	}

	// js-lk-recommendation-popup-form
	if ( $('.js-lk-recommendation-popup-form').length ) {
		var feedback_form4 = $('.js-lk-recommendation-popup-form');
		feedback_form4.validate({
			rules: {
				emails_values: {
					required: true
				}
			},
			errorClass: 'error',
			focusInvalid: false,
			validClass: 'valid',
			highlight: function(element, errorClass, validClass) { 
				$(element).removeClass(validClass).addClass(errorClass);
			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).removeClass(errorClass).addClass(validClass);
			},
			errorPlacement: function(error, element) {}
		});
	}

	// js-lk-help-form
	if ( $('.js-lk-help-form').length ) {
		var feedback_form4 = $('.js-lk-help-form');
		feedback_form4.validate({
			rules: {
				text_name: {
					required: true
				}
			},
			errorClass: 'error',
			focusInvalid: false,
			validClass: 'valid',
			highlight: function(element, errorClass, validClass) { 
				$(element).removeClass(validClass).addClass(errorClass);
			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).removeClass(errorClass).addClass(validClass);
			},
			submitHandler: function(form) {
		    $.ajax({
					type: "GET",
					url: $(form).attr('action'),
					data: $(form).serialize(), // serializes the form's elements.
					success: function(data) {
					  $(form).find('textarea').val('');
					  openPopup( form );
					}
				});
		  },
			errorPlacement: function(error, element) {}
		});
	}

	// js-popup-comment-form
	if ( $('.js-popup-comment-form').length ) {
		var popup_comment_form = $('.js-popup-comment-form');
		popup_comment_form.validate({
			rules: {
				popup_comment_form_plus: {
					required: true
				},
				popup_comment_form_minus: {
					required: true
				},
				popup_comment_form_star1: {
					required: true
				},
				popup_comment_form_star2: {
					required: true
				},
				popup_comment_form_star3: {
					required: true
				},
				popup_comment_form_star4: {
					required: true
				}
			},
			errorClass: 'error',
			focusInvalid: false,
			validClass: 'valid',
			highlight: function(element, errorClass, validClass) {
				var cur = $(element).context; 
				console.log(element);
				$(element).removeClass(validClass).addClass(errorClass);
				if ( $(cur).hasClass('popup-comment-vote__input') ) {
					$(cur).parent().find('.popup-comment-vote__item').addClass('error').on('mouseover.error', function() {
						$(cur).parent().find('.popup-comment-vote__item').removeClass('error').off('mouseover.error')
					})
				}
			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).removeClass(errorClass).addClass(validClass);
			},
			errorPlacement: function(error, element) {}
		});
	}

	// js-popup-comment-false-form
	if ( $('.js-popup-comment-false-form').length ) {
		var popup_comment_false_form = $('.js-popup-comment-false-form');
		popup_comment_false_form.validate({
			rules: {
				popup_comment_false_form_text: {
					required: true
				}
			},
			errorClass: 'error',
			focusInvalid: false,
			validClass: 'valid',
			highlight: function(element, errorClass, validClass) { 
				$(element).removeClass(validClass).addClass(errorClass);
			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).removeClass(errorClass).addClass(validClass);
			},
			errorPlacement: function(error, element) {}
		});
	}

	// js-bonus-form1
	if ( $('.js-bonus-form1').length ) {
		var bonus_form1 = $('.js-bonus-form1');
		bonus_form1.validate({
			rules: {
				name: {
					required: true,
					email: true
				}
			},
			errorClass: 'error',
			focusInvalid: false,
			validClass: 'valid',
			highlight: function(element, errorClass, validClass) { 
				$(element).removeClass(validClass).addClass(errorClass);
			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).removeClass(errorClass).addClass(validClass);
			},
			errorPlacement: function(error, element) {}
		});
	}

	// js-chat-form
	if ( $('.js-chat-form').length ) {
		var chat_form = $('.js-chat-form');
		chat_form.validate({
			rules: {
				name: {
					required: true,
				}
			},
			errorClass: 'error',
			focusInvalid: false,
			validClass: 'valid',
			highlight: function(element, errorClass, validClass) { 
				$(element).removeClass(validClass).addClass(errorClass);
			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).removeClass(errorClass).addClass(validClass);
			},
			errorPlacement: function(error, element) {}
		});
	}
	
}
/* validator end */

/* aside scroll menu */
function asideScroll() {
	function navScroll() {
		var sections = $('.js-section'),
		nav = $('.lk-aside');

		function checkAndSetPos($this) {
		  
		  sections.each(function() {
		    var top = $(this).offset().top - 60,
		        bottom = top + $(this).outerHeight();
		    if ( top < window.pageYOffset + 10  && $(this).offset().top + $(this).height() > window.pageYOffset + 10 ) {
					nav.find('.anchor').removeClass('lk-aside-drop__list-link--active');
		      nav.find('.anchor[href="#'+$(this).attr('id')+'"]').addClass('lk-aside-drop__list-link--active');
		      var hash = $(this).attr('id');
					// history.pushState(null, null, hash ? '#' + hash : '#' );
		    }
		  });

		}
		function checkNav($this) {
			nav.find('.anchor').removeClass('lk-aside-drop__list-link--active');
      $this.addClass('lk-aside-drop__list-link--active');
		}
		checkAndSetPos( $(window) );
		var timer;
		$('.lk-content').on('scroll.anchor', function () {
			// checkAndSetPos($(this));
			var $this = $(this);
			clearTimeout(timer);
			timer = setTimeout(function() {
				checkAndSetPos($this);
			}, 200);
			
		});
		

		nav.find('.anchor').on('click', function (e) {
		  var $el = $(this)
		    , id = $el.attr('href');
		  $('.lk-content').off('scroll.anchor');
		  $('.lk-content').animate({
		    scrollTop: $(id).position().top
		  }, 1000, function() {

				$('.lk-content').on('scroll.anchor', function () {
					var $this = $(this);
					clearTimeout(timer);
					timer = setTimeout(function() {
						checkAndSetPos($this);
					}, 200);
				});
				checkNav($el);
				
		  });
		  var hash = $(this).attr('href');
			// history.pushState(null, null, hash );
		  
		  e.preventDefault();
		});
	}
	navScroll();

	function mobFix() {
		var $aside = $('.lk-aside'),
				$header = $('.header');
		function checkPos() {
			var asideT = $aside.offset().top,
					headerH = $header.outerHeight(),
					cur_pos = $(window).scrollTop();
			if ( cur_pos > headerH ) {
				$aside.css({
					'marginTop': cur_pos - headerH,
					'height': "100vh"
				})
			}else {
				$aside.css({
					'marginTop': '',
					'height': ''
				})
			}
		}
		
		checkPos()
		$(window).on('scroll', checkPos);
		
		
	}

	if ( device.tablet() || device.mobile() ) {
		//mobFix();
	}
	
}
/* aside scroll menu end */

/* location ymap */
function locationYmap() {

	// //location-map
	// if ( $('#lk-location-map').length ) {

	// 	ymaps.ready(function () {
	// 		// Create map
	// 		var myMap = new ymaps.Map("lk-location-map", {
	// 			center: [55.43, 37.75],
	// 			zoom: 12
	// 		});
					
	// 		var myPlacemark = new ymaps.Placemark([55.43, 37.75], {
	// 			hintContent: '',
	// 			help_hint: '',
	// 			balloonContent: ''
	// 		},{
	// 			iconImageHref: './img/placemark.png',
	// 			iconImageSize: [79, 71],
	// 			iconImageOffset: [-50, -55],
	// 			hideIconOnBalloonOpen: false,
	// 			zIndexActive: 0,
	// 			zIndex: 1,
	// 			balloonCloseButton: false
	// 		});

	// 		var objects = ymaps.geoQuery(myPlacemark).addToMap(myMap);
 //        circle = new ymaps.Circle([[55.43, 37.75], 2000], null, { 
 //        		draggable: false,
 //        		fillColor: '9299f1',
 //        		fillOpacity: 0.42,
	//           strokeColor: '464da5',
	//           strokeOpacity: 0.75,
	//           strokeWidth: 4
 //        });
	// 	    circle.events.add('drag', function () {
	// 	        // Объекты, попадающие в круг, будут становиться красными.
	// 	        var objectsInsideCircle = objects.searchInside(circle);
	// 	        objectsInsideCircle.setOptions('preset', 'islands#redIcon');
	// 	        // Оставшиеся объекты - синими.
	// 	        objects.remove(objectsInsideCircle).setOptions('preset', 'islands#blueIcon');
	// 	    });
	// 	    myMap.geoObjects.add(circle);

			
	// 	});
	// }
	
	if ( $('#lk-location-map').length ) {
		ymaps.ready(function () {
	      var myMap = new ymaps.Map('lk-location-map', {
	              center: [55.753994, 37.622093],
	              zoom: 9,
	              behaviors: ['default', 'scrollZoom'],
	              controls: []
	          }),
	          // Создание кнопки определения местоположения
	          geolocationButton = new GeolocationButton({
	              data: {
	                  image: 'wifi.png',
	                  title: 'Определить местоположение'
	              },
	              geolocationOptions: {
	                  enableHighAccuracy: true // Режим получения наиболее точных данных
	              }
	          }, {
	              // Зададим опции для кнопки.
	              selectOnClick: false
	          });

	      myMap.controls
	          //.add('mapTools')
	          .add(new CrossControl)
	          //.add(geolocationButton, { top: 5, left: 100 })
	          .add('zoomControl')
	          //.add('typeSelector', { top: 5, right: 5 })
	          //.add(new ymaps.control.SearchControl({ noPlacemark: true }), { top: 5, left: 200 });
	      myMap.behaviors.disable('scrollZoom'); 
	      new LocationTool(myMap);

	      //example
	      // http://dimik.github.io/ymaps/examples/location-tool/

	  });
	}

}
/* location ymap end */

/* range input */
function rangeInput() {
	var inputs = $('.js-range-input');
	inputs.on('input', function(e) {
		var min = $(this).attr('min');
		var max = $(this).attr('max');
		if ( $(this).val() < min && $(this).val() !== '' ) {
			$(this).val(min);
		}
		if ( $(this).val() > +max ) {
			$(this).val(max);
		}

	})
}
/* range input end */

/* modal open/close */
function modal_comment_false() {
	var link = $('.js-modal-comment-false-open'),
			parent = '.js-modal-comment-false-parent',
			close = $('.js-modal-comment-false-close'),
			dropBox = '.comment-false__drop',
			drop = $('.js-modal-comment-false-drop');

	var app = {
		show: function($this) {
			var cont = $this.parents(parent).find(dropBox);
			if ( !$this.hasClass('active') ) {
				link.removeClass('active');
				$this.addClass('active');
				cont.append(drop);
				$(dropBox).removeClass('open');
				cont.addClass('open');

				var drop_top = cont.parents('.comment').position().top;
				var drop_h = cont.innerHeight();
				var drop_bottom = drop_top + drop_h;

				var win_scrolltop = $('.lk-content').scrollTop();
				var win_h = $(window).height();
				var win_bottom = win_scrolltop + win_h;
				if ( drop_bottom > win_bottom ) {
					cont.addClass('top');
				}

			}else {
				cont.removeClass('open');
				$this.removeClass('active');
				setTimeout(function() {
					cont.removeClass('top');
				}, 300)
			}


			
			
		},
		close: function($this) {
			var _link = $this.parents(parent).find(link);
			var cont = $this.parents(parent).find(dropBox);
			_link.removeClass('active');
			cont.removeClass('open');
			setTimeout(function() {
				cont.removeClass('top');
			}, 300)
		},
		events: function() {
			link.on('click', function(e) {
				app.show( $(this) )
				e.preventDefault();
			});
			close.on('click', function(e) {
				app.close( $(this) );
				e.preventDefault();
			})
		}
	};
	app.events();
	
}
/* modal open/close end */

/* comment rating */
function commentRating() {
	var section = $('.popup-comment-vote__star');
	
	section.each(function() {
		var links = $(this).find('.popup-comment-vote__item');

		links.hover(function(e) {
			var _this_index = $(this).index();

			links.each(function(i,e) {
				if ( _this_index >= i ) {
					$(this).addClass('hover');
				}
			})
		}, function() {
			var _this_index = $(this).index();
			links.each(function(i,e) {
				if ( _this_index >= i ) {
					$(this).removeClass('hover');
				}
			})
		});
		links.on('click', function(e) {
			var _this_index = $(this).index();
			links.each(function(i,e) {
				if ( _this_index >= i ) {
					$(this).addClass('active');
				}else {
					$(this).removeClass('active');
				}
			});
			$(this).parent().parent().find('.popup-comment-vote__input').val( _this_index+1 );
			e.preventDefault();
		});
	})

}
/* comment rating end */

/* modal comment form open/close */
function modal_comment_form() {
	var link = $('.js-modal-comment-form-open'),
			parent = '.js-modal-comment-form-parent',
			close = $('.js-modal-comment-form-close'),
			dropBox = '.js-modal-comment-form-cont',
			drop = $('.js-modal-comment-form-drop');

	var app = {
		show: function($this) {
			var cont = $this.parents(parent).find(dropBox);
			if ( !$this.hasClass('active') ) {
				link.removeClass('active');
				$this.addClass('active');
				cont.append(drop);
				$(dropBox).removeClass('open');
				cont.addClass('open');

				var drop_top = cont.parents('.announcement-status, .lk-reviews__list-item, .comment__right-top').position().top;
				var drop_h = cont.innerHeight();
				var drop_bottom = drop_top + drop_h;

				var win_scrolltop = $('.lk-content').scrollTop();
				var win_h = $(window).height();
				var win_bottom = win_scrolltop + win_h;
				if ( drop_bottom < win_bottom ) {
					cont.addClass('bottom');
				}

			}else {
				cont.removeClass('open');
				$this.removeClass('active');
				setTimeout(function() {
					cont.removeClass('bottom');
				}, 300)
			}	
			this.refreshForm();
		},
		refreshForm: function() {
			var form = $('.popup-comment__form');
			form.find('textarea').val('');
			form.find('.popup-comment-vote__item').removeClass('active');
			form.find('.popup-comment-vote__input').val('');
		},
		close: function($this) {
			var _link = $this.parents(parent).find(link);
			var cont = $this.parents(parent).find(dropBox);
			_link.removeClass('active');
			setTimeout(function() {
				cont.removeClass('bottom');
			}, 300)
			cont.removeClass('open');
			
			
		},
		events: function() {
			link.on('click', function(e) {
				app.show( $(this) )
				e.preventDefault();
			});
			close.on('click', function(e) {
				app.close( $(this) );
				e.preventDefault();
			})
		}
	};
	app.events();
	
}
/* modal comment form open/close end */

/* accordion */
function accordion() {
	var $links = $('.js-accordion-link'),
			parent = '.js-accordion-parent',
			drop = '.js-accordion-drop';

	var app = {
		toggleDrop: function($this) {
			var $parent = $this.parents(parent),
					$drop = $parent.find(drop);

			$drop.slideToggle();
			$this.toggleClass('active');

			if ($links.hasClass('active')) {
				$('.lk-payment-table').addClass('open')
			}else {
				$('.lk-payment-table').removeClass('open')
			}

		},
		events: function() {
			var _this = this;
			$links.on('click', function(e) {
				_this.toggleDrop( $(this) );
				e.preventDefault();
			})
		}
	}
	app.events();
}
/* accordion end */

/* multi clone */
var multiClone = (function() {
	var links = '.js-multi-add',
			clone = '.js-multi-clone',
			items = '.js-multi',
			parent = '.js-multi-parent',
			single = '.js-multi-clone--single',
			remove = '.js-multi-remove';

	var app = {
		deligateFn: function(e) {
			var $this = $(e.target);


			if ( $this.parents(links).length || $this.hasClass('js-multi-add') ) {

				$this.parents(parent).find(single).length ? app.disabled( $this ) : false;
				$this.hasClass('js-multi-add') ? app.addElement( $this ) : app.addElement( $this.parents(links) );

				e.preventDefault();
			}else	if( $this.parents(remove).length || $this.hasClass('js-multi-remove') ) {

				$this.parents(single).length ? app.enable( $this ) : false;
				$this.hasClass('js-multi-remove') ? app.deleteElement( $this ) : app.deleteElement( $this.parents(remove) );
				
				e.preventDefault();
			}

		},
		getString: function(array) {
			var result = {
				numbers: 120,
				strings: ''
			};
			for (var i = 0; i < array.length; i++) {
				if ( !+array[i] && + +array[i] !== 0 ) {
					console.log( +array[i] )
					result.strings += array[i]
				}else {
					console.log( +array[i] )
					result.numbers += +array[i]
				}
				
			}
			return result;
		},
		disabled: function(elem) {
			var $this = elem.parents(links).length ? elem.parents(links) : elem;
			$this.hide();
		},
		enable: function(elem) {
			var $link = elem.parents(parent).find(links);
			$link.show();
		},
		addElement: function($this) {
			var $parent = $this.parents(parent),
					$element = $parent.find(clone).clone(),
					lastId = $parent.find(items).last().find('input, select, textarea').attr('id'),
					lastName = $parent.find(items).last().find('input, select, textarea').attr('name'),
					newId = lastId ? this.getString( lastId.split('') ) : null,
					newName = lastName ? this.getString( lastName.split('') ) : null;

			$element.css('display', '').removeClass('js-multi-clone').addClass('js-multi');
			if ( newId ) {
				$element.find('input, select, textarea').removeClass('error').attr('id', newId.strings + ++newId.numbers).val('');
			}else if ( newName ) {
				$element.find('input, select, textarea').removeClass('error').attr('name', newName.strings + ++newName.numbers).val('');
			}

			$element.find('input, select, textarea').removeClass('error').val('');
			$element.insertAfter($parent.find(items).last());
			if ( $element.find('select').length ) {
				customSelect($element.find('select').addClass('js-select'), selectDefaultConfig);
			}
			validatorLk();
			phoneMask();
		},
		deleteElement: function($this) {
			$this.parents(items).remove();
		},
		events: function() {
			window.addEventListener('click', app.deligateFn);
		}
	}
	return {
		init: function() {
			app.events();
		}
	}
}())
/* multi clone end */

/* choose img */
var chooseImg = (function() {
	var $inputs =  $('.js-file-photo'),
			parent  =  '.js-file-photo-parent',
			img     =  '.js-file-photo-img';



	var app = {

		renderImg: function($this, _this, e) {
			var file = _this.files[0];

			var reader = new FileReader();

			reader.onload = function(e) {
				var _url = e.target.result;
				
			}
			reader.readAsDataURL(file);

			
		},

		events: function() {
			$inputs.on('change', function(e) {
				app.renderImg( $(this), this, e );
			})
		}

	}
	return {
		init: function() {
			app.events();
		}
	}

}())
/* choose img end */

/* lk-recommendations-slider */
function lkRecommendationsSlider() {
	if ( $('.js-lk-recommendations-slider').length ) {
		$('.js-lk-recommendations-slider').slick({
			dots: false,
			slidesToShow: 7,
  		slidesToScroll: 1,
  		draggable: false,
  		infinite: false,
  		swipe: true,
  		swipeToSlide: true,
			arrows: true,
  			prevArrow: '<div class="icon-arrow-left-gray-small recommendations-slider__control recommendations-slider__control--left"></div>',
  			nextArrow: '<div class="icon-arrow-right-gray-small recommendations-slider__control recommendations-slider__control--right"></div>',
  		responsive: [
  			{
  				breakpoint: 1600,
  				settings: {
  					slidesToShow: 6
  				}
  			},
  			{
  				breakpoint: 1450,
  				settings: {
  					slidesToShow: 5
  				}
  			},
  			{
  				breakpoint: 1200,
  				settings: {
  					slidesToShow: 4
  				}
  			}
  		]
		});
	}
}
/* lk-recommendations-slider */

/* chat drop */
function chatDrop() {
	var link = $('.js-lk-chat-link'),
			parent = '.js-lk-chat-parent',
			dropBox = '.js-lk-chat-cont',
			drop = $('.js-lk-chat-drop');

	drop.hide();
	var app = {
		show: function($this) {
			var $parent = $this.parents(parent),
					$container = $parent.find(dropBox);

			if ( !drop.is(':visible') ) {
				$container.append(drop);
				drop.show();
				$this.text('Свернуть диалог');
			}else if ( drop.is(':visible') && $container.find(drop).length ) {
				drop.hide();
				link.text('Раскрыть диалог');
			}else {
				$container.append(drop);
				link.text('Раскрыть диалог');
				drop.show();
				$this.text('Свернуть диалог');
			}

		},
		refreshForm: function() {
			
		},
		close: function($this) {
			
			
		},
		events: function() {
			link.on('click', function(e) {
				app.show( $(this) )
				e.preventDefault();
			});
		}
	};
	app.events();
	
}
/* chat drop end */

/* reviews tab */
function reviewsTab() {
	var $input = $('.js-reviews-tab-link');
	var $box = $('.js-reviews-tab-box');
	var parent = '.js-reviews-tab-parent';
	$box.hide();
	$input.on('change', function(e) {
		$box.hide();
		var $parent = $(this).parents(parent);
		var _box = $parent.find('.js-reviews-tab-box[data-tab="'+$(this).val()+'"]');
		_box.show();
		
	}).filter(':first').trigger('change');
	

}
/* reviews tab end */

/* select text in input */
function selectTextInput() {
	var $input = $('.js-select-text');
	$input.on('click', function() {
		$(this).select();
	})
}
/* select text in input end */

/* payCheck */
function payCheck() {
	var inputs = $('.lk-main-info--price .checkboxes-group-item__check:not(.disabled)');
	var parent = '.lk-main-info__block';
	inputs.on('change', function() {
		if ( $(this).is(':checked') ) {
			$(this).parents(parent).removeClass('active').find('.work-input__input').removeAttr('readonly').parent().removeClass('work-input--gray').removeClass('work-input--hidden');
		}else {
			$(this).parents(parent).addClass('active').find('.work-input__input').attr('readonly', true).parent().addClass('work-input--gray').addClass('work-input--hidden');
		}
	}).trigger('change')
}
/* payCheck end */

/* calendarChoose */
function calendarChoose() {
	var inputs = $('.lk-calendar-table .checkboxes-group-item__check');
	var parent = '.lk-calendar-table__list-item';

	inputs.on('change', function() {
		if ( $(this).is(':checked') ) {
			$(this).parents(parent).find('.lk-calendar-table__list-body').removeClass('disabled')
		}else {
			$(this).parents(parent).find('.lk-calendar-table__list-body').addClass('disabled')
		}
	}).trigger('change');
}
/* calendarChoose end */

/* autoheight */
function autoHeight() {
	var $blocks = $('.lk-main-info--price .lk-main-info__box');
	$blocks.each(function(index, el) {
		$(this).find('.lk-main-info__cell').css('height', '');
		$(this).find('.lk-main-info__cell').equalHeights();
	});
}
/* autoheight end */

$(document).on('ready', function() {
	calendarChoose();
	payCheck();
	selectTextInput();
	chatDrop();
	validatorLk();
	asideScroll();
	locationYmap();
	rangeInput();
	modal_comment_false();
	commentRating();
	modal_comment_form();
	accordion();
	multiClone.init();
	lkRecommendationsSlider();
	reviewsTab();
	autoHeight();
	// chooseImg.init();
});

$(window).load( function(){
	
})

$(window).on('resize', function(e) {
	autoHeight();
})
