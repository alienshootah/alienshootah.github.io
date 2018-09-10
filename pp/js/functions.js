
/* placeholder */
function placeholder(objInputs){
	if (objInputs.length) objInputs.placeholder();
}
/* placeholder end */

/* autoFooter */
function autoFooter() {
	var footer_spacer = $('.footer-spacer');
	var footer = $('.footer');
	var footer_height = footer.outerHeight();
	footer.css('margin-top',-footer_height);
	footer_spacer.css('height',footer_height);
}
/* autoFooter end */

/* filterAccordeon */
function filterAccordeon() {
	var $title = $('.js-questions-title'),
		$inner = $('.js-questions-inner');
	if ($inner.length) {
		$title.on('click', function(){
			if (!$(this).hasClass('active')) {
				$(this).addClass('active').parent().find($inner).slideDown(200);
			} else {
				$(this).removeClass('active').parent().find($inner).slideUp(200);
			}
		});
	}
}
/* filterAccordeon end */

// addPositionClass
function addPositionClass(position, feedback, obj){
	removePositionClass(obj);
	obj.css(position).addClass(feedback.vertical).addClass(feedback.horizontal);
}

// removePositionClass
function removePositionClass(obj){
	obj.removeClass('top bottom center left right');
}

/* UI MULTISELECT */
/* selectDefaultConfig */
selectDefaultConfig = {	
	header: false,
	height: 'auto',
	minWidth:  'auto',	
	classes: 'multiselect-default',
	noneSelectedText: 'Выберите пункт',
	selectedList: 1,
	multiple: false,
	position: {
		my: 'left top-1',
		at: 'left bottom-1',
		collision: 'flip flip',
		using: function(position, feedback) {
			addPositionClass(position, feedback, $(this));
		}
	},
	arrow: true,
	divider: false,
	corner: false,
	icon: false,
	jscrollpane: true,
	filter: false,
	filterOptions: {},
	dataImg: false	/*<option value="1" data-img="pic/lang/ua.png">value 1</option>*/		
}
/* selectDefaultConfig end */

/* selectDropConfig */
selectDropConfig = {	
	header: false,
	height: 'auto',
	minWidth:  'auto',	
	classes: 'multiselect-drop',
	noneSelectedText: 'Выберите пункт',
	selectedList: 1,
	multiple: false,
	position: {
		my: 'left top',
		at: 'left bottom',
		collision: 'flip flip',
		using: function(position, feedback) {
			addPositionClass(position, feedback, $(this));
		}
	},
	arrow: true,
	divider: false,
	corner: false,
	icon: false,
	jscrollpane: false,
	filter: false,
	filterOptions: {},
	dataImg: false	/*<option value="1" data-img="pic/lang/ua.png">value 1</option>*/		
}
/* selectDropConfig end */

/* customSelect */
function customSelect(objSelName, arrConfig){
	if (objSelName.length){
		if ( device.mobile() || device.tablet() ) {
			
			objSelName.each(function() {

				// placeholder
				$(this).on('change', function() {
					var cur_option_selected = $(this).find('option[selected]');
					var placeholder = cur_option_selected.attr('data-placeholder');
					if ( !$(this).val() ) {
						$(this).addClass('mob-placeholder');
					}else {
						$(this).removeClass('mob-placeholder');
					}
				});
				$(this).trigger('change');
			})
		}else {
			objSelName.each(function(){
				var self = $(this);
				var curClass = '';
				
				// adding class
				if (self.is('[class]'))
					curClass = self.attr('class');
				var placeholderFlag, noneSelectedText, cur_option_placeholder_index;
				
				// placeholder
				if( self.find('option[selected]').length ){
					var cur_option_selected = self.find('option[selected]');
					if ( cur_option_selected.attr('data-placeholder') ){
						placeholderFlag = true;
						var cur_option_placeholder_index = cur_option_selected.index();
					} else
						placeholderFlag = false;
				} else
					placeholderFlag = false;
				
				// init
				self.multiselect({
					header: arrConfig.header,
					height: arrConfig.height,
					minWidth: arrConfig.minWidth,
					classes: arrConfig.classes + ' ' + curClass,
					checkAllText: arrConfig.checkAllText,
					uncheckAllText: arrConfig.uncheckAllText,
					noneSelectedText: arrConfig.noneSelectedText,
					selectedText: arrConfig.selectedText,
					selectedList: arrConfig.selectedList,
					show: arrConfig.show,
					hide: arrConfig.hide,
					autoOpen: arrConfig.autoOpen,
					multiple: arrConfig.multiple,
					position: arrConfig.position,
					appendTo: arrConfig.appendTo,
					create: function(event, ui){
						var 
							btn = $(this).multiselect('getButton'),
							btnIcon = btn.find('.ui-icon'),
							widg = $(this).multiselect('widget');
						if (placeholderFlag){
							btn.addClass('ui-state-placeholder');
						}
						btn.find('span').not('[class]').addClass('ui-multiselect-value');
						
						// button divider
						if (arrConfig.divider === true)
							btn.append('<span class="ui-multiselect-divider"></span>');
						
						// button arrow
						if (arrConfig.arrow === true)
							btn.append('<span class="ui-multiselect-arrow"></span>');
						
						// button icon
						if (arrConfig.icon !== true)
							btnIcon.remove();
						else
							btnIcon.removeClass('ui-icon ui-icon-triangle-2-n-s').addClass('ui-multiselect-icon');
						btn.children().wrapAll('<span class="ui-multiselect-inner"></span>');
						widg.children().wrapAll('<div class="ui-multiselect-menu-inner"></div>');
						
						// widget scrollpane
						if (arrConfig.jscrollpane === true)
							widg.find('.ui-multiselect-checkboxes').wrap('<div class="ui-multiselect-wrap-scrollpane"><div class="ui-multiselect-scrollpane"></div></div>');

						// widget corner
						if (arrConfig.corner === true)
							widg.append('<div class="ui-multiselect-corner"></div>');
						
						// button image
						if (arrConfig.dataImg === true){
							var 
								listOptions = $(this).find('option'),
								list = widg.find('.ui-multiselect-checkboxes li span');
							list.each(function(i){
								$(this).html('<img src="'+listOptions.eq(i).attr('data-img')+'" />');
								if(listOptions.eq(i).is(':selected')){
									btn.find('.ui-multiselect-value').html('<img src="'+listOptions.eq(i).attr('data-img')+'" />');
								}
							});
							/*ie7-8 image click bug*/
							list.on('click', function(){
								$(this).parents('li').find('input').trigger('click');
							});		
						}					
								
						// check all
						widg.on('click', '.ui-multiselect-all', function(){
							btn.removeClass('ui-state-placeholder');
						});
						
						// uncheck all
						widg.on('click', '.ui-multiselect-none', function(){
							btn.addClass('ui-state-placeholder');
						});
						
						// SELECT WITH PLACE ICON
						if ( $(this).hasClass('select--place') ){
							btn.addClass('multiselect-default--place').find('.ui-multiselect-inner').prepend('<div class="ui-multiselect-place"></div>');
						}

					},
					open: function(event, ui){
						var btn = $(this).multiselect('getButton');
						var widg = $(this).multiselect('widget');
						widg.find('.ui-multiselect-checkboxes li:eq('+cur_option_placeholder_index+')').addClass('ui-multiselect-placeholder');
						
						// fix scroll drop list
						var list = widg.find('.ui-multiselect-checkboxes');
						var maxH = parseInt(list.css('max-height'));
						if(maxH > parseInt(list.height()))
							list.removeClass('list-fix-scroll');
						else
							list.addClass('list-fix-scroll');

						// jscrollpane run handler
						
						if (arrConfig.jscrollpane === true){
							
							scrollbarVertical(widg.find('.ui-multiselect-scrollpane'));
							
							
						}

						// close drops
						$('.js-drop-parent').removeClass('active');
						$('.js-drop-content').fadeOut(0);
						$('.js-drop-parent').removeClass('top');
						$(document).unbind('click.drop');
					},
					click: function(event, ui){
						var 
							btn = $(this).multiselect('getButton'),
							widg = $(this).multiselect('widget'),
							flagCheck = false;
						
						// placeholder
						if ( widg.find('.ui-multiselect-checkboxes :checked').parents('.ui-multiselect-placeholder').length ){
							btn.addClass('ui-state-placeholder');
						} else {
							btn.removeClass('ui-state-placeholder');
						}
						
						// SELECT WITH CURRENCY
						if ( btn.hasClass('select-currency') ){
							var cur_option_index = widg.find('.ui-multiselect-checkboxes :checked').parents('li:eq(0)').index();
							var cur_option = $(this).find('option:eq('+cur_option_index+')');
							btn.find('.ui-multiselect-currency-label').html('');
							
							// data-currency-symbol
							if ( cur_option.attr('data-currency-symbol') ){
								cur_option_symbol = cur_option.attr('data-currency-symbol');
								btn.find('.ui-multiselect-currency-label').append('<span class="valuta-blue-round">'+cur_option_symbol+'</span>');
							}
							
							// data-currency-sum
							if ( cur_option.attr('data-currency-sum') ){
								cur_option_sum = cur_option.attr('data-currency-sum');
								btn.find('.ui-multiselect-currency-label').append('<span class="valuta-sum">'+cur_option_sum+'</span>');
							}
							
							// data-currency-text
							if ( cur_option.attr('data-currency-text') ){
								cur_option_text = cur_option.attr('data-currency-text');
								btn.find('.ui-multiselect-currency-label').append('<span class="valuta-text">'+cur_option_text+'</span>');
							}

							
						}

						// time select
						if ( $(widg.context).data('time') == 'first' ) {
							var $thisSelect = $(widg.context);
							var $lastSelect = $thisSelect.parents('form, .js-time-parent').find('[data-time="second"].select');
							$lastSelect.multiselect('open');
						}

						// wrine in default select
						
						console.log(ui.value)
						
					},
					beforeclose: function(event, ui){
						var widg = $(this).multiselect('widget');
						removePositionClass(widg);
						/* jscrollpane destroy handler */
						if (arrConfig.jscrollpane === true){
							var jscrollpane = widg.find('.ui-multiselect-scrollpane').data('jsp');
							if (jscrollpane){
								jscrollpane.destroy();
							}
							$(document).unbind('mousewheel.false');
						}
					}
				});	

				/* filter options */
				if (arrConfig.filter === true){
					self.multiselectfilter(arrConfig.filterOptions);
				}
				/* filter options end */
			});
			$('body').on('mouseenter','.ui-multiselect-menu',function(){
				var cur = $(this);
				cur.find('.ui-state-active').removeClass('ui-state-active');
			});
		}

		
	}	
}
/* customSelect end */

// customSelectClose
function customSelectClose(objSelect){
	if (objSelect.length){
		if ( device.mobile() || device.tablet() ) {}else {
			objSelect.each(function(){
				var self = $(this);
				if (self.next('button.ui-multiselect').length)	
				self.multiselect('close');
			});
		}
	}
}

// customSelectRefresh
function customSelectRefresh(objSelect){
	if (objSelect.length){	
		if ( device.mobile() || device.tablet() ) {}else {
			objSelect.each(function(){
				var self = $(this);
				if (self.next('button.ui-multiselect').length)
				self.multiselect('refresh');
			});
		}
	}
}
/* UI MULTISELECT END */

/* SCROLLPANE */
/* scrollbarVertical */
function scrollbarVertical(objScroll){
	if (objScroll.length) {	
		objScroll.each(function(){
			$(this).jScrollPane({
				mouseWheelSpeed: 50,
				verticalDragMinHeight: 98,
				verticalDragMaxHeight: 98,
				horizontalDragMinWidth: 0,
				horizontalDragMaxWidth: 0,
				autoReinitialise: true,
				verticalGutter: 20
			});
		});
	}	
}
/* scrollbarVertical end */

/* scrollpanes */
function scrollpanes(){
	// towns__scrollpane
	if ( $('.towns__scrollpane').length ) {	
		$('.towns__scrollpane').jScrollPane({
			mouseWheelSpeed: 50,
			verticalDragMinHeight: 98,
			verticalDragMaxHeight: 98,
			horizontalDragMinWidth: 0,
			horizontalDragMaxWidth: 0,
			autoReinitialise: true,
			verticalGutter: 6
		});
	}
	
	// scrollfix
	$('body').on('mouseenter','.jspScrollable',function(){
		$(document).bind('mousewheel.false', function(){return false;});
	});
	$('body').on('mouseleave','.jspScrollable',function(){
		$(document).unbind('mousewheel.false');
	});
}
/* scrollpanes end */
/* SCROLLPANE END */

/* sliders */
function sliders(){
	// js-announcement-images-slider
	if ( $('.js-announcement-images-slider').length ) {
		$('.js-announcement-images-slider').each(function(){
			$(this).slick({
				dots: false,
				arrows: true,
	  			prevArrow: '<div class="icon-arrow-left-white-small announcement-images-slider__control announcement-images-slider__control--left"></div>',
	  			nextArrow: '<div class="icon-arrow-right-white-small announcement-images-slider__control announcement-images-slider__control--right"></div>'
			});
		})
	}

	// js-profile-images-slider
	if ( $('.js-profile-images-slider').length ) {
		$('.js-profile-images-slider').slick({
			dots: false,
			arrows: true,
  			prevArrow: '<div class="icon-arrow-left-white-small profile-images-slider__control profile-images-slider__control--left"></div>',
  			nextArrow: '<div class="icon-arrow-right-white-small profile-images-slider__control profile-images-slider__control--right"></div>'
		});

		// On before slide change
		$('.js-profile-images-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.profile-images-pager-list__item:eq('+nextSlide+')').addClass('current').siblings('.current').removeClass('current');
		});

		if ( $('.js-profile-images-slider-pager-link').length ) {
			$('.js-profile-images-slider-pager-link').on('click',function(e){
				if ( !$(this).hasClass('js-profile-images-slider-pager-link-disable') ) {
					var cur = $(this);
					var cur_li = cur.parents('li:eq(0)');
					var index = cur_li.index();
					cur_li.addClass('current').siblings('.current').removeClass('current');
					$('.js-profile-images-slider')[0].slick.slickGoTo(index);
				}
				
				e.preventDefault();
			});
		}
	}

	// js-recommendations-slider
	if ( $('.js-recommendations-slider').length ) {
		$('.js-recommendations-slider').slick({
			dots: false,
			slidesToShow: 4,
  		slidesToScroll: 1,
			arrows: true,
  			prevArrow: '<div class="icon-arrow-left-gray-small recommendations-slider__control recommendations-slider__control--left"></div>',
  			nextArrow: '<div class="icon-arrow-right-gray-small recommendations-slider__control recommendations-slider__control--right"></div>'
		});
	}
}
/* sliders end */

/* yandexMap */
function yandexMap(){
	// contacts-map
	if ( $('#contacts-map').length ) {
		var markArray = new Array();
		markArray = [
			{
				left: 51.15295313764891,
				right: 71.48300799999997
			}
		]
		ymaps.ready(function () {
			// Create map
			var myMap = new ymaps.Map("contacts-map", {
				center: [51.15295313764891, 71.48300799999997],
				zoom: 12
			});
			// Add buttons and placemarks
			myMap.controls.add('zoomControl', {top: '10px', left:'10px', height: '50px'});
			$.each(markArray, function(index, element){
				var left = element.left;
				var right = element.right;
				var hintContent = element.hintContent;
				var help_hint = element.help_hint;
				var balloonContent = element.balloonContent;
				var myPlacemark = new ymaps.Placemark([left, right], {
					hintContent: '',
					help_hint: '',
					balloonContent: ''
				},{
					iconImageHref: './img/placemark.png',
					iconImageSize: [79, 71],
					iconImageOffset: [-6, -93],
					hideIconOnBalloonOpen: false,
					zIndexActive: 0,
					zIndex: 1,
					balloonCloseButton: false
				});
				myMap.geoObjects.add(myPlacemark);
			});
		});
	}

	// search-page-map
	if ( $('#search-page-map').length ) {
		if ( !$('#search-page-map').hasClass('js-map-agencies') ){
			var placemarksArray = [
				{
					left: 55.72504493415047,
					right: 37.64696099999997,
					price: 3000,
					image: 'pic/map-announcement/map-announcement-01.jpg',
					name: 'Анастасия',
					rating_percent: '100',
					rating_count: '4',
				},
				{
					left: 55.769777875224634,
					right: 37.63803460839839,
					price: 2800,
					image: 'pic/map-announcement/map-announcement-01.jpg',
					name: 'Вася',
					rating_percent: '71',
					rating_count: '9',
				}
			];
		} else {
			var placemarksArray = [
				{
					left: 55.72504493415047,
					right: 37.64696099999997,
					desc: 'Сиделково',
					image: 'pic/map-agency/map-agency-01.jpg',
					name: '“Усатый Нянь”',
					rating_percent: '100',
					rating_count: '6',
				},
				{
					left: 55.769777875224634,
					right: 37.63803460839839,
					desc: 'Няня на час',
					image: 'pic/map-agency/map-agency-01.jpg',
					name: '“Усатый Нянь”',
					rating_percent: '80',
					rating_count: '9',
				}
			];
		}

		ymaps.ready(function () {
			// Create map
			var myMap = new ymaps.Map("search-page-map", {
				center: [55.74034900832207,37.66309716943355],
				zoom: 12
			});

			// Add buttons and placemarks
			myMap.controls.add('zoomControl', {top: '10px', left:'10px', height: '50px'});

			// layout
			var myBalloonContentLayout = ymaps.templateLayoutFactory.createClass('<div>$[[options.contentBodyLayout]]</div>');

			// Создание макета основного содержимого контента балуна.
			if ( !$('#search-page-map').hasClass('js-map-agencies') ){
		    myBalloonContentBodyLayout = ymaps.templateLayoutFactory.createClass(
		    '<div class="map-announcement">\
					<a href="#" class="map-announcement__top">\
						<span class="map-announcement__image">\
							<img src="$[properties.image]" alt="" class="map-announcement__image-img">\
						</span>\
						<span class="map-announcement__top-caption">\
							<span class="map-announcement__top-caption-name">$[properties.name]</span>\
							<span class="map-announcement__top-caption-price">$[properties.price] <span class="rub">o</span></span>\
						</span>\
					</a>\
					<div class="map-announcement__reviews-count">\
						<div class="stars map-announcement__reviews-count-stars">\
							<div class="stars__inner" style="width:$[properties.rating_percent]%;"></div>\
						</div>\
						<div class="map-announcement__reviews-count-text"><a href="#">$[properties.rating_count] отзывов</a></div>\
					</div>\
				</div>',{
					build: function () {
			            myBalloonContentBodyLayout.superclass.build.call(this);
			            
			        },
								 clear: function () {
			            
			            myBalloonContentBodyLayout.superclass.clear.call(this);
			        },
				});
		   	} else {
		   		myBalloonContentBodyLayout = ymaps.templateLayoutFactory.createClass(
			    '<div class="map-agency">\
					<div class="map-agency__title">$[properties.name]</div>\
					<div class="map-agency__image">\
						<img src="$[properties.image]" alt="" class="map-agency__image-img">\
					</div>\
					<div class="map-agency__reviews-count">\
						<div class="stars map-agency__reviews-count-stars">\
							<div class="stars__inner" style="width:$[properties.rating_percent]%;"></div>\
						</div>\
						<div class="map-agency__reviews-count-text">$[properties.rating_count] отзывов</div>\
					</div>\
				</div>',{
						build: function () {
				            myBalloonContentBodyLayout.superclass.build.call(this);
				            
				        },
									 clear: function () {
				            
				            myBalloonContentBodyLayout.superclass.clear.call(this);
				        },
					});
		   	}

			// Создание макета для контента метки.
			if ( !$('#search-page-map').hasClass('js-map-agencies') ){
				var myIconContentLayout = ymaps.templateLayoutFactory.createClass(
				    '<div class="map-price" data-map-price="$[properties.index]"><span class="rub">o</span> $[properties.price]</div>');
			} else {
				var myIconContentLayout = ymaps.templateLayoutFactory.createClass(
				    '<div class="map-price" data-map-price="$[properties.index]">$[properties.desc]</div>');
			}

			// Создание меток
			if ( !$('#search-page-map').hasClass('js-map-agencies') ){
				$.each(placemarksArray, function(index, element){
					var left = element.left;
					var right = element.right;
					var price = element.price;
					var image = element.image;
					var name = element.name;
					var rating_percent = element.rating_percent;
					var rating_count = element.rating_count;

					var myGeoObject = new ymaps.GeoObject({
				         geometry: {
				             type: "Point",
				             coordinates: [left, right]
				         },
				         properties: {
				         	price: price,
				         	image: image,
				         	name: name,
				         	rating_percent: rating_percent,
				         	rating_count: rating_count,
				         	index: index
				         }
				     }, {
				         iconContentLayout: myIconContentLayout,
				         balloonContentBodyLayout: myBalloonContentBodyLayout,

				         balloonContentLayout: myBalloonContentLayout,
				         balloonCloseButton: false,
				         hideIconOnBalloonOpen: true,

				         
				         // Выставляем тянущийся макет иконки, чтобы вместился вложенный макет myIconContentLayout.
				         preset: 'twirl#nightStretchyIcon'
				     });

					// Добавление метки на карту
					myMap.geoObjects.add(myGeoObject);
				});
			} else {
				$.each(placemarksArray, function(index, element){
					var left = element.left;
					var right = element.right;
					var desc = element.desc;
					var image = element.image;
					var name = element.name;
					var rating_percent = element.rating_percent;
					var rating_count = element.rating_count;

					var myGeoObject = new ymaps.GeoObject({
				         geometry: {
				             type: "Point",
				             coordinates: [left, right]
				         },
				         properties: {
				         	desc: desc,
				         	image: image,
				         	name: name,
				         	rating_percent: rating_percent,
				         	rating_count: rating_count,
				         	index: index
				         }
				     }, {
				         iconContentLayout: myIconContentLayout,
				         balloonContentBodyLayout: myBalloonContentBodyLayout,

				         balloonContentLayout: myBalloonContentLayout,
				         balloonCloseButton: false,
				         hideIconOnBalloonOpen: true,

				         
				         // Выставляем тянущийся макет иконки, чтобы вместился вложенный макет myIconContentLayout.
				         preset: 'twirl#nightStretchyIcon'
				     });

					// Добавление метки на карту
					myMap.geoObjects.add(myGeoObject);

				});
			}
			
        

			// закрытие балуна
			myMap.events.add('click', function (e) {  
				myMap.balloon.close();
			});

		});
		
		


		$('.js-search-item').hover(
			function(){
				var cur = $(this);
				var index = cur.index();
				$('.map-price.hovered').removeClass('hovered');
				$('.map-price[data-map-price="'+index+'"]').addClass('hovered');
			},
			function(){
				$('.map-price.hovered').removeClass('hovered');
			}
		);
	}
}
/* yandexMap end */

/* dropdowns */
function dropdowns() {
	if ( $('.js-drop-link').length ) {
		var drop_delay = 400;
		$('.js-drop-link').on('click',function(e) {
			var cur = $(this);
			var parent = cur.parents('.js-drop-parent:eq(0)');

			$(document).unbind('click.drop');
			$('.js-drop-content').fadeOut(0);
			$('.js-drop-parent').not(parent).removeClass('active');
			$('.js-drop-parent').removeClass('top');
			if ( !parent.hasClass('active') ) {
				var yourClick = true;
				var drop = cur.parents('.js-drop-parent:eq(0)').find('.js-drop-content');
				drop.fadeIn(drop_delay);
				parent.addClass('active');

				var drop_top = drop.offset().top;
				var drop_h = drop.innerHeight();
				var drop_bottom = drop_top + drop_h;

				var win_scrolltop = $(window).scrollTop();
				var win_h = $(window).height();
				var win_bottom = win_scrolltop + win_h;

				if ( drop_bottom > win_bottom ) {
					parent.addClass('top');
				}
				
				$(document).bind('click.drop', function (e) {
					if (!yourClick  && !$(e.target).closest(drop).length && !$(e.target).is('.ui-datepicker-next,.ui-datepicker-prev') ) {
						drop.fadeOut(0);
						$('.js-drop-parent').removeClass('top');
						$('.js-drop-parent').removeClass('active');
						$(document).unbind('click.drop');
					}
					yourClick  = false;
				});
			} else {
				parent.removeClass('active');
				$('.js-drop-content').fadeOut(0);
				$('.js-drop-parent').removeClass('top');
			}
			e.preventDefault();
		});
		
		// ios fadeout drop
		$('*').on('click',function(e){
			if ( !$(e.target).is('.js-drop-content') && !$('.js-drop-parent').hasClass('active') ){
				$('.js-drop-parent').removeClass('active');
				$('.js-drop-content').fadeOut(0);
				$('.js-drop-parent').removeClass('top');
				$(document).unbind('click.drop');
			}
		});
		$('.js-close-drop').on('click', function(e) {
			var cur = $(this);
			var drop = cur.parents('.js-drop-parent:eq(0)').find('.js-drop-content');
			$('.js-drop-parent').removeClass('top');
			$('.js-drop-parent').removeClass('active');
			$(document).unbind('click.drop');
			e.preventDefault();
		})
	}

	// towns
	if ( $('.town-item :radio').length ) {
		$('.town-item :radio').on('click',function(){
			var cur = $(this);
			var parent = cur.parents('.drop:eq(0)');
			var cur_parent = cur.parents('.town-item:eq(0)');
			var text = cur_parent.find('.town-item__decor').html();
			parent.find('.drop-link').html(text);
		});
	}
}
/* dropdowns end */

/* headerFixed */
function headerFixed(){
	if ( $('.js-header-fixed').length ){
		function headerFixedCalc(){
			if ( $(window).scrollTop() > 0 ){
				$('.js-header-fixed').removeClass('header--transparent');
			} else {
				$('.js-header-fixed').addClass('header--transparent');
			}
		}
		
		if ( device.mobile() || device.tablet() ) {

		}else {
			headerFixedCalc();

			$(window).on('scroll', function() {
				headerFixedCalc();
			});
		}
	}
}
/* headerFixed end */

/* validator */
function validator(){
	// js-feedback-form
	if ( $('.js-feedback-form').length ) {
		var feedback_form = $('.js-feedback-form');
		feedback_form.validate({
			rules: {
				feedback_name: {
					required: true
				},
				feedback_phone: {
					required: true,
					number: true
				},
				feedback_email: {
					required: true,
					email: true
				},
				feedback__message: {
					required: true
				}
			},
			errorClass: 'error',
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

	// js-registration-agency-form
	if ( $('.js-registration-agency-form').length ) {
		var registration_agency_form = $('.js-registration-agency-form');
		registration_agency_form.validate({
			rules: {
				registration_agency_name: {
					required: true
				}
			},
			errorClass: 'error',
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

	// js-registration-nanny-form
	if ( $('.js-registration-nanny-form').length ) {
		// registrationNannyFormValidate
		function registrationNannyFormValidate(){
			var valid_flag = true;

			$('.js-registration-nanny-form-checkboxes').each(function(){
				var cur = $(this);

				if ( !cur.find(':checked').length ) {
					valid_flag = false;
					cur.addClass('checkboxes-group--error');

					if ( cur.hasClass('js-registration-nanny-form-checkboxes-count') )
						$('.js-error-message-count').addClass('active');
					if ( cur.hasClass('js-registration-nanny-form-checkboxes-age') )
						$('.js-error-message-age').addClass('active');
					if ( cur.hasClass('js-registration-nanny-form-checkboxes-where') )
						$('.js-error-message-where').addClass('active');

				} else {
					cur.removeClass('checkboxes-group--error');

					if ( cur.hasClass('js-registration-nanny-form-checkboxes-count') )
						$('.js-error-message-count').removeClass('active');
					if ( cur.hasClass('js-registration-nanny-form-checkboxes-age') )
						$('.js-error-message-age').removeClass('active');
					if ( cur.hasClass('js-registration-nanny-form-checkboxes-where') )
						$('.js-error-message-where').removeClass('active');
				}
			});

			if ( !valid_flag )
				$('.js-error-message').fadeIn(0);
			else {
				$('.js-error-message').fadeOut(0);
			}

			return valid_flag;
		}

		// submit
		$('.js-registration-nanny-form-submit').on('click',function(e){
			if ( !registrationNannyFormValidate() )
				e.preventDefault();
		});
	}

	// js-popup-registration2
	if ( $('.js-popup-registration2-form').length ) {
		var popup_registration2_form = $('.js-popup-registration2-form');
		popup_registration2_form.validate({
			rules: {
				popup_registration2_firstname: {
					required: true
				},
				popup_registration2_lastname: {
					required: true
				},
				popup_registration2_email: {
					required: true
				},
				popup_registration2_password: {
					required: true
				},
				popup_registration2_birth_month: {
					required: true	
				},
				popup_registration2_birth_day: {
					required: true	
				},
				popup_registration2_birth_year: {
					required: true	
				}
			},
			messages: {
				popup_registration2_firstname: {
					required: 'Имя обязательно',
				},
				popup_registration2_lastname: {
					required: 'Фамилия обязательна',
				},
				popup_registration2_email: {
					required: 'Некорректный формат адреса электронной почты. Проверьте правильность ввода',
				},
				popup_registration2_password: {
					required: 'Пароль не может содержать Ваше имя или вдрес электронной почты. Выберите другой пароль? ',
				}
			},
			errorClass: 'error',
			validClass: 'valid',
			errorElement: 'span',
			highlight: function(element, errorClass, validClass) { 
				$(element).removeClass(validClass).addClass(errorClass);
			},
			unhighlight: function(element, errorClass, validClass) {
				var cur = $(element);
				cur.removeClass('error');
				$(element).removeClass(errorClass).addClass(validClass);
			},
			invalidHandler: function(event, validator) {
				selectRule();
			},
			errorPlacement: function(error, element) {
				var cur = element;
				error.insertAfter(cur);
			},
			submitHandler: function(form,event) {
				selectRule();
				if ( selectRule() )
					popup_registration2_form.submit();
				event.preventDefault();
			}
		});

		function selectRule(){
			var flag = true;
			popup_registration2_form.find('select').each(function(){	
				var cur_item = $(this);
				if ( cur_item.next().hasClass('ui-state-placeholder') ) {
					cur_item.next().addClass('error');
					flag = false;
				} else {
					cur_item.next().removeClass('error');
				}
			});

			if ( flag == false ){
				popup_registration2_form.find('.js-popup-selects-error-message').addClass('active');
			} else {
				popup_registration2_form.find('.js-popup-selects-error-message').removeClass('active');
			}
				
			
			return flag;
		}
		
		popup_registration2_form.find('select').on('multiselectclick', function(event, ui) {
			setTimeout(function(){
				selectRule();	
			},100);
		});
	}

	// js-popup-registration2-confirm-form
	if ( $('.js-popup-registration2-confirm-form').length ) {
		var popup_registration2_confirm_form = $('.js-popup-registration2-confirm-form');
		popup_registration2_confirm_form.validate({
			rules: {
				popup_registration2_confirm_firstname: {
					required: true
				},
				popup_registration2_confirm_lastname: {
					required: true
				},
				popup_registration2_confirm_email: {
					required: true
				}
			},
			messages: {
				popup_registration2_confirm_firstname: {
					required: 'Имя обязательно',
				},
				popup_registration2_confirm_lastname: {
					required: 'Фамилия обязательна',
				},
				popup_registration2_confirm_email: {
					required: 'Некорректный формат адреса электронной почты. Проверьте правильность ввода'
				}
			},
			errorClass: 'error',
			validClass: 'valid',
			errorElement: 'span',
			highlight: function(element, errorClass, validClass) { 
				$(element).removeClass(validClass).addClass(errorClass);
			},
			unhighlight: function(element, errorClass, validClass) {
				var cur = $(element);
				cur.removeClass('error');
				$(element).removeClass(errorClass).addClass(validClass);
			},
			invalidHandler: function(event, validator) {
				selectRule2();
			},
			errorPlacement: function(error, element) {
				var cur = element;
				error.insertAfter(cur);
			},
			submitHandler: function(form,event) {
				selectRule2();
				if ( selectRule2() )
					popup_registration2_confirm_form.submit();
				event.preventDefault();
			}
		});

		function selectRule2(){
			var flag = true;
			popup_registration2_confirm_form.find('select').each(function(){	
				var cur_item = $(this);
				if ( cur_item.next().hasClass('ui-state-placeholder') ) {
					cur_item.next().addClass('error');
					flag = false;
				} else {
					cur_item.next().removeClass('error');
				}
			});

			if ( flag == false ){
				popup_registration2_confirm_form.find('.js-popup-selects-error-message').addClass('active');
			} else {
				popup_registration2_confirm_form.find('.js-popup-selects-error-message').removeClass('active');
			}
				
			
			return flag;
		}
		
		popup_registration2_confirm_form.find('select').on('multiselectclick', function(event, ui) {
			setTimeout(function(){
				selectRule2();	
			},100);
		});
	}

	// js-popup-login-form
	if ( $('.js-popup-login-form').length ) {
		var popup_login_form = $('.js-popup-login-form');
		popup_login_form.validate({
			rules: {
				popup_login_email: {
					required: true
				},
				popup_login_password: {
					required: true
				}
			},
			messages: {
				popup_login_email: {
					required: 'Email обязателен',
				},
				popup_login_password: {
					required: 'Пароль обязателен',
				}
			},
			errorClass: 'error',
			validClass: 'valid',
			errorElement: 'span',
			highlight: function(element, errorClass, validClass) { 
				$(element).removeClass(validClass).addClass(errorClass);
			},
			unhighlight: function(element, errorClass, validClass) {
				var cur = $(element);
				cur.removeClass('error');
				$(element).removeClass(errorClass).addClass(validClass);
			},
			invalidHandler: function(event, validator) {},
			errorPlacement: function(error, element) {
				var cur = element;
				error.insertAfter(cur);
			}
		});
	}

	// js-popup-restore-password-form
	if ( $('.js-popup-restore-password-form').length ) {
		var popup_restore_password_form = $('.js-popup-restore-password-form');
		popup_restore_password_form.validate({
			rules: {
				popup_restore_password_email: {
					required: true
				}
			},
			messages: {
				popup_restore_password_email: {
					required: 'Email обязателен',
				}
			},
			errorClass: 'error',
			validClass: 'valid',
			errorElement: 'span',
			highlight: function(element, errorClass, validClass) { 
				$(element).removeClass(validClass).addClass(errorClass);
			},
			unhighlight: function(element, errorClass, validClass) {
				var cur = $(element);
				cur.removeClass('error');
				$(element).removeClass(errorClass).addClass(validClass);
			},
			invalidHandler: function(event, validator) {},
			errorPlacement: function(error, element) {
				var cur = element;
				error.insertAfter(cur);
			}
		});
	}

	// js-popup-registration-success-form
	if ( $('.js-popup-registration-success-form').length ) {
		var popup_registration_success_form = $('.js-popup-registration-success-form');
		popup_registration_success_form.validate({
			rules: {
				popup_registration_success_tel: {
					required: true
				}
			},
			messages: {
				popup_registration_success_tel: {
					required: 'Телефон обязателен',
				}
			},
			errorClass: 'error',
			validClass: 'valid',
			errorElement: 'span',
			highlight: function(element, errorClass, validClass) { 
				$(element).removeClass(validClass).addClass(errorClass);
			},
			unhighlight: function(element, errorClass, validClass) {
				var cur = $(element);
				cur.removeClass('error');
				$(element).removeClass(errorClass).addClass(validClass);
			},
			invalidHandler: function(event, validator) {},
			errorPlacement: function(error, element) {
				var cur = element;
				error.insertAfter(cur);
			}
		});
	}

	// js-popup-registration-success2-form
	if ( $('.js-popup-registration-success2-form').length ) {
		var popup_registration_success2_form = $('.js-popup-registration-success2-form');
		popup_registration_success2_form.validate({
			rules: {
				popup_registration_success2_code: {
					required: true,
					minlength: 4
				}
			},
			messages: {
				popup_registration_success2_code: {
					required: 'Код обязателен',
					minlength: 'Не верный код подтверждения.<br> Проверьте правильность вводимых символов'
				}
			},
			errorClass: 'error',
			validClass: 'valid',
			errorElement: 'span',
			highlight: function(element, errorClass, validClass) { 
				$(element).removeClass(validClass).addClass(errorClass);
			},
			unhighlight: function(element, errorClass, validClass) {
				var cur = $(element);
				cur.removeClass('error');
				$(element).removeClass(errorClass).addClass(validClass);
			},
			invalidHandler: function(event, validator) {},
			errorPlacement: function(error, element) {
				var cur = element;
				error.insertAfter(cur);
			}
		});
	}

	// js-popup-vacancy-form
	if ( $('.js-popup-vacancy-form').length ) {
		var popup_vacancy_form = $('.js-popup-vacancy-form');
		popup_vacancy_form.validate({
			rules: {
				popup_nanny_message: {
					required: true
				}
			},
			messages: {
				popup_nanny_message: {
					required: 'Введите сообщение',
				}
			},
			errorClass: 'error',
			validClass: 'valid',
			errorElement: 'span',
			highlight: function(element, errorClass, validClass) { 
				$(element).removeClass(validClass).addClass(errorClass);
			},
			unhighlight: function(element, errorClass, validClass) {
				var cur = $(element);
				cur.removeClass('error');
				$(element).removeClass(errorClass).addClass(validClass);
			},
			submitHandler: function(form) {
		    $.ajax({
					type: "GET",
					url: $(form).attr('action'),
					data: $(form).serialize(), // serializes the form's elements.
					success: function(data) {
					  openPopup( form )
					}
				});
		  },
			invalidHandler: function(event, validator) {},
			errorPlacement: function(error, element) {
				var cur = element;
				error.insertAfter(cur);
			}
		});
	}

	// js-profile-filters-form
	if ( $('.js-profile-filters-form').length ) {
		var profile_filters_form = $('.js-profile-filters-form');
		profile_filters_form.validate({
			focusInvalid: false,
			rules: {
				profile_filters_date_from: {
					required: true
				},
				profile_filters_date_to: {
					required: true
				},
				profile_filters_time_from: {
					required: true
				},
				profile_filters_time_to: {
					required: true
				}
			},
			messages: {
				profile_filters_date_from: {
					required: ''
				},
				profile_filters_date_to: {
					required: ''
				},
				profile_filters_time_from: {
					required: ''
				},
				profile_filters_time_to: {
					required: ''
				}
			},
			errorClass: 'error',
			validClass: 'valid',
			highlight: function(element, errorClass, validClass) { 
				$(element).removeClass(validClass).addClass(errorClass);
			},
			unhighlight: function(element, errorClass, validClass) {
				var cur = $(element);
				cur.removeClass('error');
				if ( cur.hasClass('js-select') ) {
					var multi = cur.parent().find('.ui-multiselect');
					multi.removeClass('error');
				}
				
			},
			submitHandler: function(form) {
		    $.ajax({
					type: "GET",
					url: $(form).attr('action'),
					data: $(form).serialize(), // serializes the form's elements.
					success: function(data) {
					  openPopup( form )
					}
				});
		  },
			invalidHandler: function(event, validator) {

			},
			errorPlacement: function(error, element) {
				var cur = $(element);
				cur.addClass('error');
				if ( cur.hasClass('js-select') ) {
					var multi = cur.parent().find('.ui-multiselect');
					multi.addClass('error');
				}
			}
		});

	}

	// js-popup-nanny-form
	if ( $('.js-popup-nanny-form').length ) {
		var popup_nanny_form = $('.js-popup-nanny-form');
		popup_nanny_form.validate({
			focusInvalid: false,
			rules: {
				profile_filters_date_from: {
					required: true
				},
				profile_filters_date_to: {
					required: true
				},
				profile_filters_time_from: {
					required: true,
				},
				profile_filters_time_to: {
					required: true,
				},
				popup_nanny_select_name1: {
					required: true,
				},
				popup_nanny_select_name2: {
					required: true,
				},
				popup_nanny_select_name3: {
					required: true,
				},
				popup_nanny_select_name4: {
					required: true,
				},
				popup_nanny_select_name5: {
					required: true,
				},
				popup_nanny_message: {
					required: true
				}

			},
			messages: {
				profile_filters_date_from: {
					required: 'Заполните все поля. <br>'
				},
				profile_filters_date_to: {
					required: 'Заполните все поля. <br>'
				},
				profile_filters_time_from: {
					required: 'Выбраный интервал дат и времени не доступный. <br>'
				},
				profile_filters_time_to: {
					required: 'Выбраный интервал дат и времени не доступный. <br>'
				},
				popup_nanny_select_name1: {
					required: 'Заполните все поля. <br>'
				},
				popup_nanny_select_name2: {
					required: 'Заполните все поля. <br>'
				},
				popup_nanny_select_name3: {
					required: 'Заполните все поля. <br>'
				},
				popup_nanny_select_name4: {
					required: 'Заполните все поля. <br>'
				},
				popup_nanny_select_name5: {
					required: 'Заполните все поля. <br>'
				},
				popup_nanny_message: {
					required: 'Заполните все поля. <br>'
				}
			},
			errorElement: 'span',
			errorClass: 'error',
			validClass: 'valid',
			ignore: ':hidden:not(".js-select")',
			highlight: function(element, errorClass, validClass) { 
				$(element).removeClass(validClass).addClass(errorClass);
			},
			unhighlight: function(element, errorClass, validClass) {
				var cur = $(element);
				cur.removeClass('error');
				if ( cur.hasClass('js-select') ) {
					var multi = cur.parent().find('.ui-multiselect');
					multi.removeClass('error');
				}
				
			},

			submitHandler: function(form) {
				$('.popup-error-message').remove();
				$(form).find('.error').removeClass('error');
		    $.ajax({
					type: "GET",
					url: $(form).attr('action'),
					data: $(form).serialize(), // serializes the form's elements.
					success: function(data) {
					  openPopup( form )
					}
				});
		  },
			invalidHandler: function(event, validator) {
				var elemsError = validator.errorList;
				var arrDate = [];
				var arrAll = [];
				var arrMore = []
				var thisForm = validator.currentForm;
				var container = $(thisForm).parents('.popup-nanny__right-box');
				elemsError.forEach(function(el, i) {
					var texts = el.message;
					var elems = $(el.element);
					var dataV = elems.data('valid');
					if ( dataV == 'date' && arrDate.length == 0 ) {
						arrDate.push(texts)
					}else if ( dataV == 'all' && arrAll.length == 0 ) {
						arrAll.push(texts);
					}else if ( dataV != 'all' && dataV != 'date' ) {
						arrMore.push(texts);
					}
					
				});

				var strDate = arrDate.length ? arrDate.join() : '';
				var strAll = arrAll.length ? arrAll.join() : '';
				var strMore = arrMore.length ? arrMore.join() : '';
				var allText = strDate + strAll + strMore;
				$('.popup-error-message').remove();
				container.prepend( '<div class="popup-error-message">'+ allText +'</div>' )
			},
			errorPlacement: function(error, element) {
				var cur = $(element);
				if ( cur.hasClass('js-select') ) {
					var multi = cur.parent().find('.ui-multiselect');
					multi.addClass('error');
				}
				
			}
		});
		var nannyChange = popup_nanny_form.find('.js-popup-nanny-change-select');
		nannyChange.on('change', function() {
			var val = $(this).val();
			var selects = $(this).parent().parent().find('select[data-selected]');

			if ( val == 2 ) {
				selects.each(function() {
					var dataV = $(this).data('selected');
					var opt = $(this).find('option');
					var optV;
					opt.each(function(i, val) {
						optV = $(this).text();
						if ( i == 0 ) {
							$(this).removeAttr('selected');
						}
						if ( optV == dataV ) {
							$(this).attr('selected', true);
							$(this).attr('disabled', true);
						}
					});
					var self = $(this);
					if (self.next('button.ui-multiselect').length) {
						self.addClass('input-disabled-gray');
						self.multiselect('refresh');
						self.multiselect('disable');
					}
					
				})
			}else {
				selects.each(function() {
					var dataV = $(this).data('selected');
					var opt = $(this).find('option');
					var optV;
					opt.each(function(i, val) {
						optV = $(this).text();
						if ( i == 0 ) {
							$(this).attr('selected', true);
						}
						
						if ( optV == dataV ) {
							$(this).attr('selected', false);
							$(this).attr('disabled', false);
						}
					});
					var self = $(this);
					if (self.next('button.ui-multiselect').length) {
						self.removeClass('input-disabled-gray');
						self.multiselect('refresh');
						self.multiselect('enable');
					}
					
				})
			}
		})
	}

	function nannYCangeFn() {
		var nannyChange = $('.js-popup-nanny-change-select');
		if ( nannyChange.length ) {

			nannyChange.on('change', function() {
				var val = $(this).val();
				var selects = $(this).parent().parent().find('select[data-selected]');

				if ( val == 2 ) {
					selects.each(function() {
						var dataV = $(this).data('selected');
						var opt = $(this).find('option');
						var optV;
						opt.each(function(i, val) {
							optV = $(this).text();
							if ( i == 0 ) {
								$(this).removeAttr('selected');
							}
							if ( optV == dataV ) {
								$(this).attr('selected', true);
								$(this).attr('disabled', true);
							}
							
						});
						$(this).addClass('input-disabled-gray').attr('disabled', true);
					})
				}else {
					selects.each(function() {
						var dataV = $(this).data('selected');
						var opt = $(this).find('option');
						var optV;
						opt.each(function(i, val) {
							optV = $(this).text();
							if ( i == 0 ) {
								$(this).attr('selected', true);
							}
							
							if ( optV == dataV ) {
								$(this).attr('selected', false);
								$(this).attr('disabled', false);
							}
						});
						$(this).removeClass('input-disabled-gray').removeAttr('disabled');
						
						
					})
				}
			});

		}
	}
	if ( device.mobile() || device.tablet() ) {
		nannYCangeFn();
	}
	
}


/* validator end */

/* searchPageHeight */
function searchPageHeight(){
	if ( $('.search-page').length ){
		var header_h = $('.header').innerHeight();
		var footer_h = $('.footer').innerHeight();
		var win_h = $(window).height();
		$('.search-page').css('height',win_h - header_h - footer_h);
	}
}
/* searchPageHeight end */

/* scrollTo */
function scrollTo(){
	if ( $('.js-scrollto').length ) {
		$('.js-scrollto').on('click',function(e){
			var cur = $(this);
			var cur_href = cur.attr('href');
			if ( $('.header').length )
				var indent = $('.header').innerHeight();
			else
				var indent = 0;


			$('html,body').animate({'scrollTop':$(cur_href).offset().top-indent},500);
			e.preventDefault();
		});
	}
}
/* scrollTo end */

/* sliderRanges */
function sliderRanges(){
	// js-slider-range-price
	if ( $('.js-slider-range-price').length ){
		var slider_range_price = $('.js-slider-range-price');

		slider_range_price.slider({
			range: true,
			min: 1,
			max: slider_range_price.data('max'),
			values: (function() {	
				var min = slider_range_price.data('start');
				var max = slider_range_price.data('finish');
				var res = [min, max];
				return res;
			}()),
			slide: function( event, ui ) {
				var ui_from = ui.values[0];
				var ui_to = ui.values[1];

				$('.js-slider-range-price-field-from').html('<span class="rub">o</span> '+ ui_from);
				$('.js-slider-range-price-input-from').val(ui_from);

				$('.js-slider-range-price-field-to').html('<span class="rub">o</span> '+ ui_to);
				$('.js-slider-range-price-input-to').val(ui_to);
			},
			change: function( event, ui ) {
				var ui_from = ui.values[0];
				var ui_to = ui.values[1];

				$('.js-slider-range-price-field-from').html('<span class="rub">o</span> '+ ui_from);
				$('.js-slider-range-price-input-from').val(ui_from);

				$('.js-slider-range-price-field-to').html('<span class="rub">o</span> '+ ui_to);
				$('.js-slider-range-price-input-to').val(ui_to);
			}
		}).draggable();

		// from
		$('.js-slider-range-price-field-from').on('click',function(e){
			$(this).addClass('hidden');
			$('.js-slider-range-price-input-from').addClass('active').trigger('focus');
		});
		$('.js-slider-range-price-input-from').on('blur',function(){
			var cur = $(this);
			var cur_val = cur.val();
			
			cur.removeClass('active');
			$('.js-slider-range-price-field-from').html('<span class="rub">o</span> '+ cur_val);
			$('.js-slider-range-price-field-from').removeClass('hidden');

			var slider_range_price_cur_values = slider_range_price.slider('option','values');
			var slider_range_price_cur_from = slider_range_price_cur_values[0];
			var slider_range_price_cur_to = slider_range_price_cur_values[1];

			if ( cur_val > slider_range_price_cur_to )
				slider_range_price.slider('option','values',[cur_val,cur_val]);
			else
				slider_range_price.slider('option','values',[cur_val,slider_range_price_cur_to]);
		});

		// to
		$('.js-slider-range-price-field-to').on('click',function(e){
			$(this).addClass('hidden');
			$('.js-slider-range-price-input-to').addClass('active').trigger('focus');
		});
		$('.js-slider-range-price-input-to').on('blur',function(){
			var cur = $(this);
			var cur_val = cur.val();
			
			cur.removeClass('active');
			$('.js-slider-range-price-field-to').html('<span class="rub">o</span> '+ cur_val);
			$('.js-slider-range-price-field-to').removeClass('hidden');

			var slider_range_price_cur_values = slider_range_price.slider('option','values');
			var slider_range_price_cur_from = slider_range_price_cur_values[0];
			var slider_range_price_cur_to = slider_range_price_cur_values[1];

			if ( cur_val < slider_range_price_cur_from )
				slider_range_price.slider('option','values',[cur_val,cur_val]);
			else
				slider_range_price.slider('option','values',[slider_range_price_cur_from,cur_val]);
		});
	}

	// js-slider-range-time
	if ( $('.js-slider-range-time').length ){
		var slider_range_time = $('.js-slider-range-time');

		slider_range_time.slider({
			range: true,
			min: 6,
			max: 30,
			values: [ 8, 20 ],
			slide: function( event, ui ) {
				var ui_from = ui.values[0];
				var ui_to = ui.values[1];

				if ( ui_from > 23 ){
					ui_from = ui_from - 24;
				}
				if ( ui_from < 10 )
					ui_from = '0'+ui_from+':00';
				else
					ui_from = ui_from+':00';

				if ( ui_to > 23 ){
					ui_to = ui_to - 24;
				}
				if ( ui_to < 10 )
					ui_to = '0'+ui_to+':00';
				else
					ui_to = ui_to+':00';


				$('.js-slider-range-item-from').html(ui_from);
				$('.js-slider-range-item-to').html(ui_to);
			},
			change: function( event, ui ) {
				
			}
		}).draggable();
	}
}
/* sliderRanges end */

/* searchPageFn */
function searchPageFn(){
	// js-search-page-form-item-toggle
	if ( $('.js-search-page-form-item-toggle').length ){
		$('.js-search-page-form-item-toggle').on('click',function(e){
			var cur = $(this);
			var parent = cur.parents('.js-search-page-form-item-parent:eq(0)');
			parent.find('.js-search-page-form-item-hidden').slideToggle();
			parent.toggleClass('active');
			e.preventDefault();
		});
	}

	// js-search-page-filters-more
	if ( $('.search-page-form').length ) {
		$('.js-search-page-filters-more').on('click',function(e){
			var cur = $(this);
			$('.search-page-form__item.js-search-page-form-item-hidden').slideToggle();
			$('.search-page-form__buttons-actions-list').toggleClass('active');
			if ( cur.hasClass('active') ){
				$('.search-results, .leave-request').show();
			} else {
				customSelectRefresh($('.js-select,.js-select-drop'));
				$('.search-results, .leave-request').hide();
				$('.search-page-form__buttons-more').hide();
			}
			cur.toggleClass('active')
			e.preventDefault();
		});
		function refreshDrop() {
			$('.search-results, .leave-request').show();
			$('.search-page-form__buttons-actions-list').removeClass('active');
			$('.js-search-page-filters-more').removeClass('active');
			$('.search-page-form__buttons-more').show();
			$('.search-page-form__item.js-search-page-form-item-hidden').slideUp();
			// $(this).parents('form').find('.checkbox__check').removeAttr('checked');
			$('.search-page-form').find('.checkbox__check').prop('checked',false);
			$('.search-page-form').find('.checkbox__check').removeAttr('checked');
		}
		function closeDrop() {
			$('.search-results, .leave-request').show();
			$('.search-page-form__buttons-actions-list').removeClass('active');
			$('.js-search-page-filters-more').removeClass('active');
			$('.search-page-form__buttons-more').show();
			$('.search-page-form__item.js-search-page-form-item-hidden').slideUp();
		}
		$('.search-page-form__buttons-actions-btn-reset').on('click', function(e) {
			refreshDrop();
			customSelectRefresh($('.js-select,.js-select-drop'));
		});
		$('.search-page-form__buttons-actions-btn-accept').on('click', function() {
			closeDrop();
			$('.search-page-form__buttons-more-right').removeClass('hidden-search-desc');
		})
	}
	if ( $('.search-page').length ) {
		function filterboxTab() {
			var links = $('.filterbox-link');
			links.on('click', function(e) {
				$(this).parents('.filterbox-list').find(links).removeClass('filterbox-link--active');
				$(this).addClass('filterbox-link--active');
			})
		}
		filterboxTab();
	}
}
/* searchPageFn end */

/* addFav */
function addFav(){
	if ( $('.js-addfav').length ){
		$('.js-addfav').on('click',function(e){
			var cur = $(this);
			var activeText = cur.data('active');
			var disabledText = cur.data('disabled');
			cur.toggleClass('active');
			// cur.parents('.tooltip:eq(0)').toggleClass('tooltip--disabled');
			
			if ( cur.hasClass('active') ) {
				cur.next().text(activeText);
			}else {
				cur.next().text(disabledText);
			}
		});
	}
}
/* addFav end */

/* popupFn */
function openPopup(form) {
	var popup_wrap = $('.popup-wrap'),
			popup = $('.popup');
	var cur = $(form).find('button[data-href]');
	var cur_href = cur.attr('data-href');
	var block = $(cur_href);
	block.show().siblings('.popup').hide();

	popup_wrap.stop().fadeIn(500).addClass('active');

	// refresh selects
	if ( block.find('.js-select').length )
		customSelectRefresh(block.find('.js-select'));
	if ( block.find('.js-select-drop').length )
		customSelectRefresh(block.find('.js-select-drop'));
	
	$('body').addClass('scroll-overflow');

	// hidden blocks
	if ( block.hasClass('popup-restore-password-success') || block.hasClass('popup-email-confirm-message') ) {
		setTimeout(function(){
			popup_wrap.removeClass('active').fadeOut(1000,function(){
				popup.hide();
			});
			$('body').removeClass('scroll-overflow');
		},7000);
	}
}
function popupFn(){
	// hide All
	var popup_wrap = $('.popup-wrap'),
			popup = $('.popup');
	// open
	if ( $('.js-popup-link').length ) {
		$('.js-popup-link').on('click',function(e){
			var cur = $(this);
			var cur_href = cur.attr('data-href');
			var block = $(cur_href);
			block.show().siblings('.popup').hide();

			popup_wrap.stop().fadeIn().addClass('active');
			// refresh selects
			if ( block.find('.js-select').length )
				customSelectRefresh(block.find('.js-select'));
			if ( block.find('.js-select-drop').length )
				customSelectRefresh(block.find('.js-select-drop'));
			
			$('body').addClass('scroll-overflow');

			// hidden blocks
			if ( block.hasClass('popup-restore-password-success') || block.hasClass('popup-email-confirm-message') ) {
				setTimeout(function(){
					popup_wrap.removeClass('active').fadeOut(1000,function(){
						popup.hide();
					});
					$('body').removeClass('scroll-overflow');
				},7000);
			}
			e.stopPropagation();
			e.preventDefault();
		});
	}
	
	// close
	if ( $('.js-popup-close').length ) {
		$('.js-popup-close').on('click',function(e){
			popup_wrap.removeClass('active').fadeOut(function(){
				popup.hide();
			});
			$('body').removeClass('scroll-overflow');
			e.preventDefault();
		});
	}

	// popup-nanny add/remove
	if ( $('.js-popup-nanny-row-add').length ) {
		var selectCounter = 0;
		$('.js-popup-nanny-row-add').on('click',function(e){
			var cur = $(this);
			var parent = cur.parents('.popup-nanny-form__objects:eq(0)');
			var parent_rows = parent.find('.popup-nanny-form__objects-rows');
			var new_row = parent_rows.find('.popup-nanny-form__objects-rows-row:first-child').clone();
			var select = new_row.find('select.js-select');
			
			new_row.find('.ui-multiselect').remove();
			new_row.find('.error').removeClass('error');

			new_row.appendTo(parent_rows);
			select.each(function () {
				var selectName = $(this).attr('name') + selectCounter++;
				$(this).removeAttr('style').attr('name', selectName);
		    $(this).rules('add', {
						required: true
		    });
			});
			customSelect(select, selectDefaultConfig);

			e.preventDefault();
		});
	}

	$('body').on('click','.js-popup-nanny-row-close',function(e){
		var cur = $(this);
		
		cur.parents('.popup-nanny-form__objects-rows-row:eq(0)').remove();
		e.preventDefault();
	});

	// js-send-code-again
	$('.js-send-code-again').on('click',function(e){
		$('.popup-registration-success2__code-again').fadeIn();
		e.preventDefault();
	});
}
/* popupFn end */

/* phoneMask */
function phoneMask(){
	if ( $('.js-mask-tel').length ) {
		$('.js-mask-tel').mask('+7 (999) 999-99-99');
	}
}
/* phoneMask end */

/* datepicker */
function datepicker(){  
		$.datepicker.regional['ru'] = {
			closeText: 'Закрыть',
			prevText: 'Пред',
			nextText: 'След',
			currentText: 'Сегодня',
			monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
			'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
			monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
			'Июл','Авг','Сен','Окт','Ноя','Дек'],
			dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
			dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
			dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
			weekHeader: 'Нед',
			dateFormat: 'dd.mm.yy',
			firstDay: 1,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: ''};
		$.datepicker.setDefaults($.datepicker.regional['ru']);

		var disableddates = ["30-01-2017", "24-01-2017", "12-05-2014", "12-10-2014"];
		function DisableSpecificDates(date) {
	    if($.inArray($.datepicker.formatDate('dd-mm-yy', date ), disableddates) > -1)
	    {
	        return [false," ui-state-disabled--custom ",""];
	    }
	    else
	    {
	        return [true,'',""];
	    }
	  }

		function formatDate(date) {
		  var dd = date.getDate();
		  if (dd < 10) dd = '0' + dd;

		  var mm = date.getMonth() + 1;
		  if (mm < 10) mm = '0' + mm;

		  var yy = date.getFullYear() % 100;
		  if (yy < 10) yy = '0' + yy;

		  return dd + '.' + mm + '.' + yy;
		}

		function dateDiff( date1, date2 ) {
	    var years = date2.getFullYear() - date1.getFullYear();
	    var months = years * 12 + date2.getMonth() - date1.getMonth();
	    var days = date2.getDate() - date1.getDate(); 
	    years -= date2.getMonth() < date1.getMonth();
	    months -= date2.getDate() < date1.getDate();
	    days += days < 0 ? new Date( date2.getFullYear(), date2.getMonth() - 1, 0 ).getDate() + 1 : 0;
	    return [ years, months, days ];
		}


		// js-datepicker
		if($('.js-datepicker').length) {
		  $('.js-datepicker').datepicker({
				minDate:0,
				dateFormat: 'dd.mm.yy',
				onSelect: function(dateText, inst, extensionRange) {
					if ( $(inst.dpDiv).parents('.drop--date-single').length ){
						var date = $(this).datepicker('getDate');
						var drop_parent = $(inst.dpDiv).parents('.drop--date-single');
						var cur_datepicker = $(inst.dpDiv);
						drop_parent.find('.js-datepickers-text').val(dateText);
						var drop = cur_datepicker.parents('.js-drop-parent:eq(0)').find('.js-drop-content');
						$('.js-drop-parent').removeClass('top');
						$('.js-drop-parent').removeClass('active');
						drop.hide();
						var dataNumber = cur_datepicker.parent().data('number');

						if ( dataNumber == 'start' ) {
							var newPicker =  cur_datepicker.parents('.js-duble-date-parent').find('[data-number="finish"]');
							var nextPicker = newPicker.parents('.js-drop-parent').find('.js-drop-link');
							
							newPicker.datepicker( "refresh" );

							var new_disableddates = [];
							var newDat = new Date();
							var thisDate = newDat;
							var currentDate = date;

							function dtrange(){
						    var start = newDat
						    var end = currentDate
						    while(start <= end){
					        var mm = ((start.getMonth()+1)>=10)?(start.getMonth()+1):'0'+(start.getMonth()+1);
					        var dd = ((start.getDate())>=10)? (start.getDate()) : '0' + (start.getDate());
					        var yyyy = start.getFullYear();
					        var date = dd+"-"+mm+"-"+yyyy; //yyyy-mm-dd

					        new_disableddates.push(date);

					        start = new Date(start.setDate(start.getDate() + 1)); //увеличиваем дату на 1
						    }
							}
							dtrange();
							newPicker.datepicker('refresh');
							newPicker.datepicker( "option", "beforeShowDay", function(date) {
								if($.inArray($.datepicker.formatDate('dd-mm-yy', date ), new_disableddates) > -1)  {
						       return [false," ui-state-disabled--custom ",""];
						    }else {
						       return [true,'',""];
						    }
							});
							
							
							$(nextPicker).trigger('click');
							newPicker.find('.ui-state-default').removeClass('ui-state-active');
							newPicker.find('.ui-datepicker-current-day').removeClass('ui-datepicker-current-day');

						}


						
						

					}



				},


				
				
			  beforeShowDay: DisableSpecificDates,
			  
			}).unbind('focus');
			$('.js-datepicker').datepicker("setDate", '');
			$('.ui-datepicker-current-day').removeClass('ui-datepicker-current-day');
			
			if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
				$(document).on('menufocus hover mouseover', function(e) {
					if ( $(e.target).hasClass('ui-state-hover') ) {
						$(e.target).trigger('click');
					}
				})
			}
		}

		// js-datepicker-double
		if($('.js-datepicker-double').length) {
				var datepicker_double_flag = false;
		    $('.js-datepicker-double').datepicker({
					minDate:0,
					numberOfMonths: 2,
					dateFormat: 'dd.mm.yy',
					range: 'period', // возможные значения: period, multiple
					range_multiple_max: 2, // максимальное число выбранных дат в режиме "Несколько дат"
					onSelect: function(dateText, inst, extensionRange) {
						var date_start = extensionRange.startDateText;
						var date_end = extensionRange.endDateText;
						var cur_datepicker = $(inst.dpDiv);
						
						// save values
						if ( cur_datepicker.parents('.drop--dates').length ){
							var drop_parent = cur_datepicker.parents('.drop--dates');

							drop_parent.find('.js-datepickers-text').html(date_start + ' <span class="icon-arrow-toright-gray"></span> ' + date_end);
						}
						if ( datepicker_double_flag && $('.search-page').length ) {
							datepicker_double_flag = false;

							var drop = cur_datepicker.parents('.js-drop-parent:eq(0)').find('.js-drop-content');
							$('.js-drop-parent').removeClass('top');
							$('.js-drop-parent').removeClass('active');
							drop.hide();
						}else {
							datepicker_double_flag = true;
						}
						
						
					},
					onClose: function(dateText, inst, extensionRange) {
						datepicker_double_flag = false;
					},
					beforeShowDay: DisableSpecificDates,
			});
			$('.js-datepicker-double').datepicker("setDate", '');
			$('.ui-datepicker-current-day').removeClass('ui-datepicker-current-day');
			if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
				$(document).on('menufocus hover mouseover', function(e) {
					if ( $(e.target).hasClass('ui-state-hover') ) {
						$(e.target).trigger('click');
					}
				})
			}
		}

		function resetDates() {
			if ( $('.js-dates-remove').length ) {
				$('.js-dates-remove').on('click', function(e) {
					var date = $(this).parents('.drop__content').find('.hasDatepicker');
					var input = $(this).parents('.js-drop-parent').find('.js-datepickers-text');
					var placeholder = input.data('placeholder');

					var drop = date.parents('.js-drop-parent:eq(0)').find('.js-drop-content');

					date.datepicker( "refresh" );
					date.find('.ui-state-active').removeClass('ui-state-active');
					date.find('.ui-datepicker-current-day').removeClass('ui-datepicker-current-day');
					date.find('td').removeClass('selected selected-start selected-end');

					// refresh all
					
					var dateAll = $(this).parents('form').find('[data-number].hasDatepicker');
					dateAll.each(function() {
						var inputAll = $(this).parents('.js-drop-parent').find('.js-datepickers-text');
						var placeholderAll = inputAll.data('placeholder');

						$(this).datepicker( "refresh" );
						$(this).find('.ui-state-active').removeClass('ui-state-active');
						$(this).find('.ui-datepicker-current-day').removeClass('ui-datepicker-current-day');
						$(this).find('td').removeClass('selected selected-start selected-end');
						console.log(placeholderAll);
						if ( placeholderAll ) {
							inputAll.empty();
							inputAll.append(placeholderAll).val('');
						}
					
				})
					datepicker_double_flag = false;

					
					$('.js-drop-parent').removeClass('top');
					$('.js-drop-parent').removeClass('active');
					drop.hide();
					if ( placeholder ) {
						input.empty();
						input.append(placeholder).val('');
					}

					e.preventDefault();
				})
			}
		}
		resetDates();
	
}
/* datepicker end */

/* numbersMask */
function numbersMask(){
	$('body').on("change keyup input click",'.js-mask-numbers' ,function(event) {
	    if (this.value.match(/[^0-9]/g))
	        this.value = this.value.replace(/[^0-9]/g, '');
	});
}
/* numbersMask end */

/* townDropChange */
function townDropChange(){
	if ( $('.town-item').length ) {
		$('.town-item :radio').on('click',function(){
			var cur = $(this);
			var parent = cur.parents('.towns-list__item');
			var main_parent = cur.parents('.towns:eq(0)');

			main_parent.addClass('towns-hover-blocked');

			main_parent.find('.towns-list__item.active').removeClass('active');
			parent.addClass('active');
			

			$('.js-drop-parent').removeClass('active');
			$('.js-drop-content').fadeOut(0);
			setTimeout(function(){
				main_parent.removeClass('towns-hover-blocked');
			},1);
			$(document).unbind('click.drop');
		});

		$('.towns-list__item').hover(
			function(){
				var cur = $(this);
				var parent = cur.parents('.towns-list__item');
				var main_parent = cur.parents('.towns:eq(0)');

				if ( !main_parent.hasClass('towns-hover-blocked') ){
					main_parent.find('.towns-list__item.active').removeClass('active');
					parent.addClass('active');	
				}
			},
			function(){

			}
		);
	}
}
/* townDropChange end */

/* dropHover */
function dropHover(){
	if ( $('.js-drop-hover-parent').length ) {
		var fade_interval;
		if (device.mobile() || device.tablet()) {
			$('.js-drop-hover-parent').on('click touch', function(e) {
				var cur = $(this);
				if ( !cur.hasClass('active') ){
					$('.js-drop-hover-parent').removeClass('active');
					$('.js-drop-hover-content').stop().hide(0);

					cur.addClass('active');
					var block = cur.find('.js-drop-hover-content:eq(0)');
					block.slideDown('fast');
					e.preventDefault();
				}else if( cur.hasClass('active') ) {
					cur.removeClass('active');
					$('.js-drop-hover-content').stop().hide(0);
				}else {
					e.preventDefault();
				}
			});
			$(window).on('click touch', function(e) {
				$this = $(e.target);
				if ( !$this.closest('.js-drop-hover-parent').length ) {
					$('.js-drop-hover-parent').removeClass('active');
					$('.js-drop-hover-content').stop().hide(0);
				}
			}) 
		}else {
			$('.js-drop-hover-parent').hover(
				function(){
					clearInterval(fade_interval);
					var cur = $(this);
					if ( !cur.hasClass('active') ){
						$('.js-drop-hover-parent').removeClass('active');
						$('.js-drop-hover-content').stop().hide(0);

						cur.addClass('active');
						var block = cur.find('.js-drop-hover-content:eq(0)');
						block.slideDown('fast');
					}
				},
				function(){
					var cur = $(this);
					var block = cur.find('.js-drop-hover-content:eq(0)');

					fade_interval = setTimeout(function(){
						block.slideUp('fast');
						$('.js-drop-hover-parent').removeClass('active');
					},500);
				}
			);
		}
		
	}
}
/* dropHover end */


/* helpful ajax */
function helpfulAjax() {
	var link = $('.js-helpful-ajax');
	var container = '.js-helpful-container';
	var list = '.js-helpful-list';
	link.on('click', function(e) {
		var thet = $(this);
		$.ajax({
			url: $(this).data('path'),
			cache: false,
			beforeSend: function() { 

			},
      success: function(html) { 
      	thet.parents(container).find(list).append(html);
      	// var elem = container.find('.helpful__list-item').last();
      	// var headH = $('.header').outerHeight();
      	// var elemP = elem.offset().top;
      	// $('html, body').animate({
      	// 	scrollTop: elemP - headH
      	// }, 1000);
      }
		})
		e.preventDefault();
	})
}
/* helpful ajax end */

/* fix block */
function fixBlock() {
	var $cart = $('.js-fix-cont'),
		$aside = $('.js-fix-block'),
		$header = $('.header'),
		timer;

	if( $cart.length && $aside.length ) {
		var w = window.innerWidth,
				top = $cart.offset().top,
				asideH = $aside.outerHeight(),
				headerH = $header.outerHeight() + 20,
				asideW = $aside.width(),
				needFix = 	$aside.outerHeight() < $cart.outerHeight();
		
			function updateFixAside() {
				var fixNeeded = $cart.outerHeight() > $aside.outerHeight(),
					  bottom = top + $cart.outerHeight(),
						scroll = $(window).scrollTop() + headerH;
				
				if(scroll > top && (scroll + asideH) < bottom) {
					$aside
						.removeClass('to-bottom')
						.addClass('to-top')
						.css({
							'width': asideW + 'px',
							'top': headerH
						});
				} else if((scroll + asideH) > bottom ) {
					$aside
						.removeClass('to-top')
						.addClass('to-bottom')
						.css({
							'top': ''
						})
				} else {
					$aside.removeClass('to-top').removeClass('to-bottom').css({'top': ''});
				}
				
			}

			if ( device.mobile() || device.tablet() ) {
				
			}	else {
				if ( needFix ) {
					updateFixAside();
					$(window).unbind('scroll.my touchmove');
					$(window).on('scroll.my touchmove', function() {
						updateFixAside();
					});
				}else {
					$(window).unbind('scroll.my touchmove');
					$aside.removeClass('to-top')
					$aside.removeClass('to-bottom')
					$aside.css({'top': ''});
					console.log($aside);
				}
			}

		
	}
			
}
/* fix block end */

/* fix block */
function fixBlockPro() {
	var $cart = $('.js-fix-cont-pro'),
		$aside = $('.js-fix-block-pro'),
		$header = $('.header'),
		$max_top = $('.js-max-top-block-pro'),
		timer;

	if( $cart.length && $aside.length ) {
		var w = window.innerWidth,
				top = $cart.offset().top,
				asideH = $aside.outerHeight(),
				headerH = $header.outerHeight() + 20,
				asideW = $aside.width(),
				max_topT = $max_top.offset().top,
				max_topH = $max_top.outerHeight(true) + 20,
				needFix = 	(asideH * 2) + (max_topT * 2) < $cart.outerHeight();
			function updateFixAside() {
				var fixNeeded = $cart.outerHeight() > $aside.outerHeight(),
					  bottom = top + $cart.outerHeight(),
						scroll = $(window).scrollTop() + headerH;
				$aside.css('width', asideW);
				if(scroll > top + max_topH && (scroll + asideH) < bottom) {
					$aside
						.removeClass('to-bottom')
						.addClass('to-top')
						.css({
							'top': headerH
						});
				} else if((scroll + asideH) > bottom ) {
					$aside
						.removeClass('to-top')
						.addClass('to-bottom')
						.css({
							'top': ''
						})
				} else {
					$aside.removeClass('to-top').removeClass('to-bottom').css({'top': ''});
				}
				
			}

			if ( device.mobile() || device.tablet() ) {
				
			}	else {
				if ( needFix ) {
					updateFixAside();
					$(window).unbind('scroll.my touchmove');
					$(window).on('scroll.my touchmove', function() {
						updateFixAside();
					});
				}else {
					$(window).unbind('scroll.my touchmove');
					$aside.removeClass('to-top')
					$aside.removeClass('to-bottom')
					$aside.css({'top': ''});
				}
			}

		
	}
			
}
/* fix block end */

/* header remove fix */
function removeFixedHeader() {
	
	if ( $(window).outerWidth() < 1024 ) {
		console.log( $(window).outerWidth() )
		$('.header').addClass('header--no-fixed');
		$('.wrapper-main').addClass('wrapper--no-fixed');
	}else {
		console.log( $(window).outerWidth() );

		$('.header').removeClass('header--no-fixed');
		$('.wrapper-main').removeClass('wrapper--no-fixed');
		console.log( $('.header') );
	}
	if (device.mobile() || device.tablet()) {
		$('.header').addClass('header--no-fixed');
		$('.wrapper-main').addClass('wrapper--no-fixed');
	}
}
/* header remove fix end */

/* aside tabs */
function asideTabs() {
	var $link = $('.js-aside-tab-link'),
			$block = $('.js-aside-tab-block');

  // $block.hide().filter(':first').show();
  $link.click(function (e) {
    $block.hide();
    $block.filter(this.hash).fadeIn(500);
    $link.removeClass('side-menu__list-item-link--active');
    $(this).addClass('side-menu__list-item-link--active');

    e.preventDefault();
    fixBlock();
    return false;
  }).filter(':first').click();

}
/* aside tabs end */

/* search ident fix */
function searchIdent() {
	if ( $('.search-page').length ) {

		var $elem = $('.search-page-form__item-inner');
		function changeIdent() {
			var posLeft = $('.container').offset().left + 10;
			$elem.css('paddingLeft', posLeft);
		}
		changeIdent();
		$('.opacity-first-load').removeClass('opacity-first-load');
		$(window).on('resize', changeIdent);

	}
}
/* search ident fix end */

/* choose search town in map */
function chooseSearchTownInMap() {
	if ( $('.search-page').length ) {
		var links = $('.drop--search-page-title .drop__content .town-item__radio');
		var box = $('.drop--search-page-title .drop__head a span');
		links.on('change', function() {
			var text = $(this).parent().find('span').text();
			box.text(text);
		})
	}
}
/* choose search town in map end */

/* search input active */
function searchInputActive() {
	var container = $('.input-item--search');
	var input = container.find('.input');
	input.on('focus', function() {
		$(this).parent().addClass('focus');
	});
	input.on('blur', function() {
		$(this).parent().removeClass('focus');
	});
}
/* search input active end */

/* rating scroll */
function ratingScroll() {
	if ( $('.js-profile-rating-scroll').length ) {
		$('.js-profile-rating-scroll').on('click', function(e) {
			var pos = $('.ratings').offset().top;
			var headerH = $('.header').hasClass('header--no-fixed') ? 0 : $('.header').outerHeight();
			$('body, html').animate({
				scrollTop: pos - headerH - 10
			}, 1000)
			e.preventDefault();
		})
	}
}
/* rating scroll end */

/* place scroll */
function placeScroll() {
	if ( $('.js-profile-place-scroll').length ) {
		$('.js-profile-place-scroll').on('click', function(e) {
			var pos = $('.contacts-map').offset().top;
			var headerH = $('.header').hasClass('header--no-fixed') ? 0 : $('.header').outerHeight();
			$('body, html').animate({
				scrollTop: pos - headerH
			}, 1000)
			e.preventDefault();
		})
	}
}

/* place scroll end */

/* changeDataText */
function changeDataText() {
	var link = $('.js-change-data-text');
	link.on('click', function(e) {
		var disText = $(this).data('disable');
		var actText = $(this).data('active');
		console.log('1');
		if ( !$(this).hasClass('active') ) {
			$(this).addClass('active');
			$(this).find('.btn__text').text(actText);
		}else {
			$(this).removeClass('active');
			$(this).find('.btn__text').text(disText);
		}
		e.preventDefault();
	})
}
/* changeDataText end */

/* tooltip */
function tooltip() {
	var $elem = $('.tooltip');

	function checkWidth() {
		var windowW = $(window).outerWidth();
		$elem.each(function() {
			var drop = $(this).parent().find('.tooltip__content');
			var textL = drop.text().length;
			var dropL = drop.offset().left;
			var dropW = drop.outerWidth();
			
			drop.css({
				"width": "",
				"whiteSpace": ""
			});

			if ( dropW > 400) {
				drop.css({
					"width": "400px",
					"whiteSpace": "normal"
				});
				
			}
			dropW = drop.outerWidth();
			var dropR = windowW - (dropL + dropW);
			if ( dropW > 400) {
				drop.css({
					"width": "400px",
					"whiteSpace": "normal"
				});
				
			}
			
			if ( dropR < 15 && $(window).width() < 1200 ) {
				console.log(dropR);
				console.log(dropW);
				drop.css({
					"width": windowW - dropL - 30,
					"whiteSpace": "normal"
				});
			}

		})
	}
	checkWidth();
	var timer;
	$(window).on('resize', function() {
		clearTimeout(timer);
		timer = setTimeout(function() {
			checkWidth();
		}, 300)
	});
}
/* tooltip end */

/* input only number */
function inputOnlyNumber() {
	$('.js-input-number').on('keydown', function (e) {
      // Allow: backspace, delete, tab, escape, enter and .
      if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
           // Allow: Ctrl+A, Command+A
          (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
           // Allow: home, end, left, right, down, up
          (e.keyCode >= 35 && e.keyCode <= 40)) {
               // let it happen, don't do anything
               return;
      }
      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
          e.preventDefault();
      }
  });
}
/* input only number end */

/* input work focus */
function inputWorkFocus() {
	var $input = $('.js-input-work-focus');

	$input.on('focus', function() {
		if ( !$(this).attr('readonly') ) {
			$(this).parents('.work-input').addClass('work-input--focus');
		}
		
	});
	$input.on('blur', function() {
		if ( !$(this).attr('readonly') ) {
			$(this).parents('.work-input').removeClass('work-input--focus');
		}
	});
}
/* input work focus end */

$(document).on('ready', function() {
	jQuery('.js-textarea-height').autoResize({
		limit: 185
	});

	inputWorkFocus();
	inputOnlyNumber();
	customSelect($('.js-select'), selectDefaultConfig);
	customSelect($('.js-select-drop'), selectDropConfig);
	fixBlockPro();
	changeDataText();
	ratingScroll();
	placeScroll();
	searchIdent();
	searchInputActive();
	chooseSearchTownInMap();
	placeholder($('input[placeholder], textarea[placeholder]'));
	dropdowns();
	headerFixed();
	validator();
	scrollTo();
	filterAccordeon();
	searchPageFn();
	addFav();
	popupFn();
	phoneMask();
	numbersMask();
	datepicker();
	sliderRanges();

	yandexMap();
	townDropChange();
	dropHover();
	helpfulAjax();
	fixBlock();
	removeFixedHeader();
	tooltip();
	asideTabs();

	$('.js-fancy-gallery').fancybox();

	$('.popup-wrap').on('scroll', function() {
		customSelectClose($('.js-select,.js-select-drop'));
	});

	$(".js-duble-date-parent input[type=text], .js-duble-date-parent label").on({ 'touchstart click' : function() {
    zoomDisable();

	}});
	$(".js-duble-date-parent input[type=text], .js-duble-date-parent label").on({ 'touchend click' : function() {
	    setTimeout(zoomEnable, 500);
	}});

	function zoomDisable(){
	  $('head meta[name=viewport]').remove();
	  $('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />');
	}
	function zoomEnable(){
	  $('head meta[name=viewport]').remove();
	  $('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=1" />');
	}



});
$(window).load( function(){
	autoFooter();
	//searchPageHeight();
	sliders();
	scrollpanes();
	

});
var selectFlag = false;
$(window).resize(function(){
	autoFooter();
	//searchPageHeight();
	customSelectClose($('.js-select,.js-select-drop'));
	customSelectRefresh($('.js-select,.js-select-drop'));
	removeFixedHeader();
	// if ( $(window).width() < 1024 && !selectFlag ) {
	// 	customSelectRefresh($('.js-select,.js-select-drop'));
	// 	selectFlag = true;
	// 	console.log(selectFlag)
	// }else if( $(window).width() >= 1024 && selectFlag ) {
	// 	customSelectRefresh($('.js-select,.js-select-drop'));
	// 	selectFlag = false;
	// 	console.log(selectFlag)
	// }
});
