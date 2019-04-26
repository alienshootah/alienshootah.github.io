$(document).ready(function() {


    $(".mobile-btn").click(function() {
        var mBlock = $(".mobile-block");
        if (mBlock.hasClass("active")) {
            mBlock.removeClass("active");
        }
        else {
            mBlock.addClass("active");
        }
        return false;
    });

   

    $("input[name='domen']").on("keydown", function(e){
        return e.which !== 32;
    });

    // $(document).on( 'scroll', function(){
    //       var p = $(".select-block p"); 
    //     var flag = $(".select-flag");


    //     p.removeClass("active");
    //     flag.fadeOut(100);
    // });

    $(document).on('click', function(e) {
       
        if(!$(e.target).parents(".select-block").length){
            if(!$(e.target).parents(".select-flag").length){


                var p = $(".select-block p"); 
                var flag = $(".select-flag");


                p.removeClass("active");
                flag.fadeOut(100);
            }
        }

    });

    $(".select-flag input").change( function () {

        $.expr[':'].Contains = function(a,i,m){
          return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
        };

        var filter = $(this).val();
        if(filter) {
            var list = $(this).parents(".active").find("ul");
            $matches = $(list).find('a:Contains(' + filter + ')').parent();
            
            $('li', list).not($matches).slideUp(0);
            $matches.slideDown(0);
            if(!$matches.length){

                list.append("<li class='no-result'>Нет результатов поиска</li>");
            }

        } else {
          $(list).find("li").slideDown(0);
        }
        return false;
     
        


    }).keyup(function(){ $(this).change(); });

        // var find = $(this).val();
        // var regex = /(?:..)/gi;
        // var dd=subject.match(regex);
        // console.log("123")




    $('#country').flagStrap({
        labelMargin: "20px",
        scrollable: false,
        scrollableHeight: "350px"
    });


    $('#countrySelect').flagStrap({
        countries: {"US":"США","UA":"Украина","RU":"Россия", "AU":"Австралия","AT":"Австрия","AZ":"Азербайджан","AX":"Аландские о-ва","AL":"Албания","DZ":"Алжир","AS":"Американское Самоа","AI":"Ангилья","AO":"Ангола","AD":"Андорра","AQ":"Антарктида","AG":"Антигуа и Барбуда","AR":"Аргентина","AM":"Армения","AW":"Аруба","AF":"Афганистан","BS":"Багамы","BD":"Бангладеш","BB":"Барбадос","BH":"Бахрейн","BY":"Беларусь","BZ":"Белиз","BE":"Бельгия","BJ":"Бенин","BM":"Бермуды","BG":"Болгария","BO":"Боливия","BQ":"Бонэйр, Синт-Эстатиус и Саба","BA":"Босния и Герцеговина","BW":"Ботсвана","BR":"Бразилия","IO":"Британская территория в Индийском океане","BN":"Бруней-Даруссалам","BF":"Буркина-Фасо","BI":"Бурунди","BT":"Бутан","VU":"Вануату","VA":"Ватикан","GB":"Великобритания","HU":"Венгрия","VE":"Венесуэла","VG":"Виргинские о-ва (Британские)","VI":"Виргинские о-ва (США)","UM":"Внешние малые о-ва (США)","TL":"Восточный Тимор","VN":"Вьетнам","GA":"Габон","HT":"Гаити","GY":"Гайана","GM":"Гамбия","GH":"Гана","GP":"Гваделупа","GT":"Гватемала","GN":"Гвинея","GW":"Гвинея-Бисау","DE":"Германия","GG":"Гернси","GI":"Гибралтар","HN":"Гондурас","HK":"Гонконг (специальный административный район)","GD":"Гренада","GL":"Гренландия","GR":"Греция","GE":"Грузия","GU":"Гуам","DK":"Дания","JE":"Джерси","DJ":"Джибути","DG":"Диего-Гарсия","DM":"Доминика","DO":"Доминиканская Республика","EG":"Египет","ZM":"Замбия","EH":"Западная Сахара","ZW":"Зимбабве","IL":"Израиль","IN":"Индия","ID":"Индонезия","JO":"Иордания","IQ":"Ирак","IR":"Иран","IE":"Ирландия","IS":"Исландия","ES":"Испания","IT":"Италия","YE":"Йемен","CV":"Кабо-Верде","KZ":"Казахстан","KY":"Каймановы о-ва","KH":"Камбоджа","CM":"Камерун","CA":"Канада","IC":"Канарские о-ва","QA":"Катар","KE":"Кения","CY":"Кипр","KG":"Киргизия","KI":"Кирибати","CN":"Китай","KP":"КНДР","CC":"Кокосовые о-ва","CO":"Колумбия","KM":"Коморы","CG":"Конго - Браззавиль","CD":"Конго - Киншаса","XK":"Косово","CR":"Коста-Рика","CI":"Кот-д’Ивуар","CU":"Куба","KW":"Кувейт","CW":"Кюрасао","LA":"Лаос","LV":"Латвия","LS":"Лесото","LR":"Либерия","LB":"Ливан","LY":"Ливия","LT":"Литва","LI":"Лихтенштейн","LU":"Люксембург","MU":"Маврикий","MR":"Мавритания","MG":"Мадагаскар","YT":"Майотта","MO":"Макао (специальный административный район)","MK":"Македония","MW":"Малави","MY":"Малайзия","ML":"Мали","MV":"Мальдивы","MT":"Мальта","MA":"Марокко","MQ":"Мартиника","MH":"Маршалловы Острова","MX":"Мексика","MZ":"Мозамбик","MD":"Молдова","MC":"Монако","MN":"Монголия","MS":"Монтсеррат","MM":"Мьянма (Бирма)","NA":"Намибия","NR":"Науру","NP":"Непал","NE":"Нигер","NG":"Нигерия","NL":"Нидерланды","NI":"Никарагуа","NU":"Ниуэ","NZ":"Новая Зеландия","NC":"Новая Каледония","NO":"Норвегия","AC":"о-в Вознесения","IM":"о-в Мэн","NF":"о-в Норфолк","CX":"о-в Рождества","SH":"о-в Св. Елены","TC":"о-ва Тёркс и Кайкос","AE":"ОАЭ","OM":"Оман","UN":"Организация Объединенных Наций","CK":"Острова Кука","PN":"острова Питкэрн","PK":"Пакистан","PW":"Палау","PS":"Палестинские территории","PA":"Панама","PG":"Папуа – Новая Гвинея","PY":"Парагвай","PE":"Перу","PL":"Польша","PT":"Португалия","PR":"Пуэрто-Рико","KR":"Республика Корея","RE":"Реюньон","RW":"Руанда","RO":"Румыния","SV":"Сальвадор","WS":"Самоа","SM":"Сан-Марино","ST":"Сан-Томе и Принсипи","SA":"Саудовская Аравия","SZ":"Свазиленд","MP":"Северные Марианские о-ва","SC":"Сейшельские Острова","BL":"Сен-Бартелеми","MF":"Сен-Мартен","PM":"Сен-Пьер и Микелон","SN":"Сенегал","VC":"Сент-Винсент и Гренадины","KN":"Сент-Китс и Невис","LC":"Сент-Люсия","RS":"Сербия","EA":"Сеута и Мелилья","SG":"Сингапур","SX":"Синт-Мартен","SY":"Сирия","SK":"Словакия","SI":"Словения","SB":"Соломоновы Острова","SO":"Сомали","SD":"Судан","SR":"Суринам","SL":"Сьерра-Леоне","TJ":"Таджикистан","TH":"Таиланд","TW":"Тайвань","TZ":"Танзания","TG":"Того","TK":"Токелау","TO":"Тонга","TT":"Тринидад и Тобаго","TA":"Тристан-да-Кунья","TV":"Тувалу","TN":"Тунис","TM":"Туркменистан","TR":"Турция","UG":"Уганда","UZ":"Узбекистан","WF":"Уоллис и Футуна","UY":"Уругвай","FO":"Фарерские о-ва","FM":"Федеративные Штаты Микронезии","FJ":"Фиджи","PH":"Филиппины","FI":"Финляндия","FK":"Фолклендские о-ва","FR":"Франция","GF":"Французская Гвиана","PF":"Французская Полинезия","TF":"Французские Южные территории","HR":"Хорватия","CF":"ЦАР","TD":"Чад","ME":"Черногория","CZ":"Чехия","CL":"Чили","CH":"Швейцария","SE":"Швеция","SJ":"Шпицберген и Ян-Майен","LK":"Шри-Ланка","EC":"Эквадор","GQ":"Экваториальная Гвинея","ER":"Эритрея","EE":"Эстония","ET":"Эфиопия","ZA":"ЮАР","GS":"Южная Георгия и Южные Сандвичевы о-ва","SS":"Южный Судан","JM":"Ямайка","JP":"Япония","EZ":"Eurozone"},        inputName: 'countrySelect',
        buttonSize: "",
        buttonType: "",
        labelMargin: "20px",
        scrollable: true,
        scrollableHeight: "160px",
        onSelect: function(value, element) {
            var p = $(".select-block p"); 
            var i = $(".select-block p i"); 
            var flag = $(".select-flag");
            
                p.removeClass("active");
                flag.fadeOut(100);

            i.removeClass();
            i.addClass("flagstrap-icon");
            i.addClass("flagstrap-"+value);
            p.find("span").text(value);
            
            console.log(value, element);
        }
    });

    $('#citySelect').flagStrap({
        countries: {  
            "RU" : "Санкт-питербург",
            "RU" : "Москва",
            "UA" : "Киев"
        },
        inputName: 'citySelect',
        buttonSize: "",
        buttonType: "",
        labelMargin: "20px",
        scrollable: true,
        scrollableHeight: "160px",
        onSelect: function(value, element) {
            var p = $(".select-block p"); 
            var i = $(".select-block p i"); 
            var flag = $(".select-flag");
            
                p.removeClass("active");
                flag.fadeOut(100);

            i.removeClass();
            i.addClass("flagstrap-icon");
            i.addClass("flagstrap-"+value);
            p.find("span").text(value);
            
            console.log(value, element);
        }
    });

    $(".select-block p").click(function (){
        var p = $(this); 
        var flag = $(".select-flag");
        if(!p.hasClass("active")) {
            p.addClass("active");
            flag.fadeIn(100, function(){});
        } else {
            p.removeClass("active");
            flag.fadeOut(100);
        }
    });

    $(".buttons-flag button").click(function(){

        var item = $(this);
        if(!item.hasClass("active")) {
          $(".buttons-flag button").removeClass("active");
          item.addClass("active");



          var dataBox = item.attr("data-box");
           console.log(dataBox);
          $(".select-flag div.active").fadeOut(0, function(){
            $(".select-flag div.active").removeClass("active");
            $(".select-flag div."+dataBox).fadeIn(0, function(){

                $(".select-flag div."+dataBox).addClass("active");
              });
          });
          
        }
        return false;
    })


    $('[data-fancybox]').fancybox();

    $('.reviews li').click(function(){
        var id = $(this).attr("data-item");
        $(".review-block").removeClass("active");
        $(".review-block[data-item='"+id+"']").addClass("active");
    });

    $('.buttons-reviews a').click(function(){


        var a = $(this);

        if(a.attr("data-action") == "next") {
            
            if($(".review-block.active").next().hasClass("review-block")){
                

                var i = $(".review-block.active");
                i.removeClass("active");
                console.log(i.next());
                i.next().addClass("active");
            }
        }
        if(a.attr("data-action") == "prev") {
            
            if($(".review-block.active").prev().hasClass("review-block")){
                

                var i = $(".review-block.active");
                i.removeClass("active");
              
                i.prev().addClass("active");
            }
        }

        return false
    });

    


    $(".check-site").submit(function(){
        $(this).find("input[type='submit']").val("Загружаем").attr("disabled", "disabled");

        return false;
    });

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) $('nav.main').addClass('active');
          else $('nav.main').removeClass('active');
    });

    $(".show-more").click(function(){
        if($(this).hasClass("active")) {
            $(".hidden-block").slideUp();
            $(this).removeClass("active").text("Подробнее");
        } else {
           $(".hidden-block").slideDown();
           $(this).addClass("active").text("Свернуть");
            
        }

        return false;

    })


    $(".buttons-login button").click(function(){
        var item = $(this);
        if(!item.hasClass("active")) {
          $(".buttons-login button").removeClass("active");
          item.addClass("active");
          var dataBox = item.attr("data-box");
          $(".box.active").fadeOut(0, function(){
            $(".box-"+dataBox).fadeIn(0, function(){
                $(".box-"+dataBox).addClass("active");
              });
          });
          
        }
    });

    function isEmail(email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    }

    function isEmailInput(item) {
       
        var val = item.val();
        if(!isEmail(val)){
            item.addClass("error");
            item.next(".error-text").fadeIn(100);
        } else {
            item.removeClass("error");
            item.next(".error-text").fadeOut(100);
        }
    }

    $(".test-email").change(function(){
        isEmailInput($(this));
    });

    $("form").submit(function(){
        var form = $(this);
        var isStopForm = 0;
        var inputs = form.find("input");
        for (var i = inputs.length - 1; i >= 0; i--) {
            if($(inputs[i]).hasClass("test-email")){
                isEmailInput($(inputs[i]));
            }
            if($(inputs[i]).hasClass("error")) {
                console.log("123");
                isStopForm = 1;
            }
        }
        if (isStopForm) return false;
    }); 

    $("a.loginsbutton, a.registration").click(function(){

        var dataBox = $(this).attr("data-box");
        if(!$(".buttons-login button[data-box='"+dataBox+"']").hasClass("active")){
            $(".buttons-login button").removeClass("active");
            $(".buttons-login button[data-box='"+dataBox+"']").addClass("active");

          
            $(".box.active").fadeOut(100, function(){
                $(".box-"+dataBox).fadeIn(100, function(){
                    $(".box-"+dataBox).addClass("active")
                });
            });
        }
    })

    $('.owl-carousel-partners').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            }
        }
    })
    $('.owl-carousel-reviews').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        autoplay: true,
        items:1
    })

});
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true
});