$(document).ready(function () {
    $(".question-top-item span").click(function () {
       $(this).toggleClass('active');
    });
    var swiper = new Swiper('.first-slide', {
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 15000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.first-slide .swiper-pagination',
        },
    });
    var swiper2 = new Swiper('.comments-slider', {
        slidesPerView: 1,
        loop: true,
        autoHeight: true,
        spaceBetween: 50,
        autoplay: {
            delay: 15000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.comments-slider .swiper-pagination',
        },
        navigation: {
            nextEl: '.comments-slider .swiper-button-next',
            prevEl: '.comments-slider .swiper-button-prev',
        }
    });
    var swiper2 = new Swiper('.videos-slider', {
        loop: true,
        spaceBetween: 50,
        autoplay: {
            delay: 15000,
            disableOnInteraction: false,
        },
        breakpoints:{
            920: {
                slidesPerView: 1
            },
            2560: {
                slidesPerView: 3
            }
        },
        navigation: {
            nextEl: '.videos-slider .swiper-button-next',
            prevEl: '.videos-slider .swiper-button-prev',
        }
    });
    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 700){
            var tl = new TimelineMax();
            var bgd = $('#background rect');
            var table = $('#table_legs, #table');
            var lampLeg = $('#lamp > .lamp-leg');
            var lampbt = $('#lamp-bottom');
            var lampLight = $('#lamp > .light');
            var lampLine = $('#lamp-line');
            var lampLineB = $('#lamp-line-b');
            var lampLineT = $('#lamp-line-t');
            var lampCircle = $('#lamp-circle');
            var lampHead = $('#lamp-head');
            var lampHeader = $('#lamp-header');
            var lampBody = $('#lamp-body');
            var computer = $('#computer > *');
            var keyboard = $('#keyboard > *');
            var asset = $('#computer_mouse > * , #coffee_mug > *');

            tl.from(bgd, 0.2, {opacity:0, scale:0, transformOrigin: 'center center'})
                .staggerFrom(table, 0.2, {y:"-=200", opacity: 0, ease: Elastic.easeOut}, 0.1)
                .from(lampLeg, 0.2, {opacity:0, x: "-200", ease: Elastic.easeOut})
                .from(lampbt, 0.2, {opacity:0, scale:0, transformOrigin: 'center center'})
                .from(lampLineB, 0.3,{opacity:0, transformOrigin: '100% 100%', rotation: '-180deg'})
                .from(lampCircle,0.1,{opacity:0, x: '-=100', y: '-=100'})
                .from(lampLineT, 0.3,{opacity:0, transformOrigin: '0% 100%', rotation: '-180deg'})
                .from(lampHead, 0.2, {opacity:0, scale:0, ease: Elastic.easeOut})
                .from(lampHeader, 0.5, {transformOrigin: '60% 60%', rotation: '60deg'})
                .from(lampBody, 0.5, {transformOrigin: '70% 70%', rotation: '-25deg'})
                .staggerFrom(computer, 1, {opacity: 0, scale: 0, transformOrigin: 'center center', ease: Back .easeOut}, 0.2)
                .staggerFrom(keyboard, 0.5, {opacity: 0, y: '-=100', ease: Linear.easeInOut }, 0.05)
                .staggerFrom(asset, 0.5, {opacity: 0}, 0.05)
                .to(lampLight, 0.2, {opacity:0.8, ease: Elastic.easeOut, delay:0.5}, "a")
                .to(lampLight, 0.1, {opacity:0}, "b")
                .to(lampLight, 0.1, {opacity:0.2}, "c")
                .to(bgd, 0.2, {opacity: 0.1, delay:0.5}, "a-=0.05")
                .to(bgd, 0.1, {opacity: 1}, "b-=0.05")
                .to(bgd, 0.1, {opacity: 0.5}, "c-=0.05")
                .to(bgd, 0.2, {opacity: 1, fill: '#FDD10D'})
                .fromTo(lampLine, 0.2, {opacity: 0},{opacity: 0.2, delay:0.5}, "a-=0.05")
                .to(lampLine, 0.1, {opacity: 1}, "b-=0.05")
                .to(lampLine, 0.1, {opacity: 0.5}, "c-=0.05");
            $(window).off('scroll');
        }
    });
    var morphTimeline = new TimelineMax({
        repeat:-1,
        repeatDelay:2
    });

    morphTimeline
        .timeScale(1.5)
        .to($('#megaphone'),2,{morphSVG:{shape:"#links"}, fill:"none",opacity:1})
        .to($('#megaphone'),2,{morphSVG:{shape:"#computer"}, fill:"none"},"+=2")
        .to($('#megaphone'),2,{morphSVG:{shape:"#light"}, fill:"none"},"+=2")
        .to($('#megaphone'),2,{morphSVG:{shape:"#megaphone"}, fill:"none"},"+=2")
    ;

    /*TweenMax.to($('#megaphone'),3,{stroke:"hsl(+=360,+=0%,+=0%)",repeat:-1,yoyo:true});*/

    /*TweenMax.to($('#megaphone'),3,{stroke:"hsl(+=0,+=0%,-=50%)",repeat:-1,yoyo:true,repeatDelay:0});*/

    // $('.parallaxie, .parallaxie2, .parallaxie3').parallaxie();
    $('.money-partner').hover(function () {
       $(this).addClass('active');
    });
});

var slideonly = true;
function sliderC () {
    var rotate = 0;
    $(".slide-items .item").each(function (i){
        if (i <= 3){
            $(".slide-items .item").eq(i).css("transform", "rotate(" + rotate + "deg)").addClass("open").children(".block").css("transform", "rotate(-" + rotate + "deg)");
            rotate = rotate + 30;
        } else {
            $(".slide-items .item").eq(i).css({"transform": "rotate(90deg)", "opacity": "0"}).children(".block").css("transform", "rotate(-90deg)");
        }
    }).first().addClass('active');
}
//SLIDER
function up () {
    var colO = $(".slide-items .item.open");
    if (colO.length <= 4 && $(".slide-items .item").last().attr('class') === 'item open active') {
    } else if(colO.length <= 7 && $(".slide-items .item").last().attr('class') === 'item open'){
        colO.first().removeClass("open").css("opacity", "0");
        colO = $(".slide-items .item.open");
        colO.each(function (i){
            var transformR = colO.eq(i).css('transform'),
                values = transformR.split('(')[1].split(')')[0].split(','),
                a = values[0],
                b = values[1],
                angle = Math.round(Math.atan2(b, a) * (180/Math.PI)),
                bbb = angle - 30,
                bbb2 = bbb - bbb - bbb;
            colO.eq(i).css("transform", "rotate(" + bbb + "deg)").children(".block").css("transform", "rotate(" + bbb2 + "deg)");
        });
    } else if (colO.length === 7){
        colO.eq(0).removeClass("open").css("opacity", "0");
        colO.each(function (i){
            var transformR = colO.eq(i).css('transform'),
                values = transformR.split('(')[1].split(')')[0].split(','),
                a = values[0],
                b = values[1],
                angle = Math.round(Math.atan2(b, a) * (180/Math.PI)),
                bbb = angle - 30,
                bbb2 = bbb - bbb - bbb;
            colO.eq(i).css("transform", "rotate(" + bbb + "deg)").children(".block").css("transform", "rotate(" + bbb2 + "deg)");
        });
        colO.last().next().css({"transform": "rotate(90deg)", "opacity": "1"}).addClass("open").children(".block").css("transform", "rotate(-90deg)");
    } else {
        colO.each(function (i){
            var transformR = $(".slide-items .item.open").eq(i).css('transform'),
                values = transformR.split('(')[1].split(')')[0].split(','),
                a = values[0],
                b = values[1],
                angle = Math.round(Math.atan2(b, a) * (180/Math.PI)),
                bbb = angle - 30,
                bbb2 = bbb - bbb - bbb;
            colO.eq(i).css("transform", "rotate(" + bbb + "deg)").children(".block").css("transform", "rotate(" + bbb2 + "deg)");
        });
        colO.last().next().css({"transform": "rotate(90deg)", "opacity": "1"}).addClass("open").children(".block").css("transform", "rotate(-90deg)");
    }
    if($('.slide-items .item').last().attr('class') !== 'item open active'){
        $('.slide-items .item.active').removeClass('active').next().addClass('active');
    }
    setTimeout(function () {
        slideonly = true;
    }, 1000);
}
function down () {
    var colO = $(".slide-items .item.open");
    if (colO.length <= 4 && $(".slide-items .item").first().attr('class') === 'item open active') {
    } else if (colO.length <= 7){
        if ($(".slide-items .item").first().attr('class') === 'item open'){
            colO.last().removeClass("open").css("opacity", "0");
        }
        colO = $(".slide-items .item.open");
        colO.each(function (i){
            var transformR = colO.eq(i).css('transform'),
                values = transformR.split('(')[1].split(')')[0].split(','),
                a = values[0],
                b = values[1],
                angle = Math.round(Math.atan2(b, a) * (180/Math.PI)),
                bbb = angle + 30,
                bbb2 = bbb - bbb - bbb;
            colO.eq(i).css("transform", "rotate(" + bbb + "deg)").children(".block").css("transform", "rotate(" + bbb2 + "deg)");
        });
        if(colO.first().attr('class') !== 'item open active'){
            colO.first().prev().css("opacity", "1").addClass("open");
        }
    } else {
        colO.each(function (i){
            var transformR = $(".slide-items .item.open").eq(i).css('transform'),
                values = transformR.split('(')[1].split(')')[0].split(','),
                a = values[0],
                b = values[1],
                angle = Math.round(Math.atan2(b, a) * (180/Math.PI)),
                bbb = angle + 30,
                bbb2 = bbb - bbb - bbb;
            colO.eq(i).css("transform", "rotate(" + bbb + "deg)").children(".block").css("transform", "rotate(" + bbb2 + "deg)");
        });
        colO.first().prev().css("opacity", "1").addClass("open");
    }
    if($('.slide-items .item').first().attr('class') !== 'item open active'){
        $('.slide-items .item.active').removeClass('active').prev().addClass('active');
    }
    setTimeout(function () {
        slideonly = true;
    }, 1000);
}
$(document).ready(function () {
   sliderC();
   $(".slider-company-paginate .prev").on('click', function () {
       if(slideonly === true){
           slideonly = false;
           up();
           $('.item.open.active').prev().prev().prev().css('padding-left', '50%').prev().css('padding-left', 'calc(50% - 30px)');
       } else {
       }
   });
    $(".slider-company-paginate .next").on('click', function () {
        if(slideonly === true){
            slideonly = false;
            down();
            $('.item.open.active').prev().prev().css('padding-left', 'calc(50% - 30px)').prev().css('padding-left', '50%');
        } else {
        }
    });
    var bgR = '';
    function bbbb () {
        bgR = $('.investors-content-calc .button input:checked').attr('id');
        $('.investors-content-calc .right').removeClass('silver gold platinum').addClass(bgR);
    }
    bbbb();
    $('.investors-content-calc .button').on('click', function () {
        bbbb();
    });
    $('.main-button').on('click', function () {
        $(this).toggleClass('active');
        $('.nav, body').toggleClass('active');
    });

    Particles.init({
        selector: '.background',
        color: '#75A5B7',
        maxParticles: 130,
        connectParticles: true,
        responsive: [
            {
                breakpoint: 768,
                options: {
                    maxParticles: 80
                }
            }, {
                breakpoint: 375,
                options: {
                    maxParticles: 50
                }
            }
        ]
    });
});