/* Анимация иконки меню */

function myMenu(x) {
    x.classList.toggle("change");
}

/* Меню адаптив */

function myMobile() {
    var x = document.getElementById("myTopnav");
    if (x.className === "header-list") {
      x.className += " responsive";
    } else {
      x.className = "header-list";
      document.getElementById("drop").classList.remove("and");
      document.getElementById("drop2").classList.remove("and");
      document.getElementById("drop3").classList.remove("and");
      document.getElementById("drop4").classList.remove("and");
    }
}

/* Слайдеры */

$('.fact-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 5000,
});

$('.one-time').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 5000,
});

// slick carousel
$('.sl-slider').slick({
    dots: false,
    vertical: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    verticalSwiping: true,
    responsive: [
        {
          breakpoint: 993,
          settings: {
            arrows: false
          }
        }
      ]
});


/* Дропдауны */
function dopDroprown() {
    document.getElementById("drop").classList.toggle("and");
    document.getElementById("drop2").classList.remove("and");
    document.getElementById("drop3").classList.remove("and");
    document.getElementById("drop4").classList.remove("and");
}
function dopDroprown2() {
    document.getElementById("drop2").classList.toggle("and");
    document.getElementById("drop3").classList.remove("and");
}
function dopDroprown3() {
    document.getElementById("drop3").classList.toggle("and");
    document.getElementById("drop4").classList.remove("and");
}
function dopDroprown4() {
    document.getElementById("drop4").classList.toggle("and");
}
function dopDroprown4() {
    document.getElementById("drop4").classList.toggle("and");
}

// Видео на главной 
// Изображение в видео запуск ролика
$(".vedpar-self").each(function () {
    var video = $(this).find("video");
    var plainVideo = video.get(0);/*DOM video object, unwrapped from jQuery*/
    var playBtn = $(this).find("div");

    playBtn.click(function () {
        video.get(0).addEventListener('ended',myHandler,false);
        plainVideo.play();
        playBtn.css("visibility", "hidden");

        function myHandler(e) {
            playBtn.css("visibility", "visible");
        }
    });
});
// В видео убирает прозрачность при запуске
function myVedpar() {
    document.getElementById("main-video").classList.toggle("show");
    document.getElementById("main-video2").classList.toggle("hide");
}