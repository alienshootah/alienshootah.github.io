
/* Слайдеры */

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
});


/* Дропдауны */
function dopDroprown() {
    document.getElementById("dropdown-dop").classList.toggle("and");
    document.getElementById("dropdown-dop2").classList.remove("and");
    document.getElementById("dropdown-dop3").classList.remove("and");
    document.getElementById("dropdown-dop4").classList.remove("and");
}
function dopDroprown2() {
    document.getElementById("dropdown-dop2").classList.toggle("and");
    document.getElementById("dropdown-dop3").classList.remove("and");
    document.getElementById("dropdown-dop4").classList.remove("and");
}
function dopDroprown3() {
    document.getElementById("dropdown-dop3").classList.toggle("and");
    document.getElementById("dropdown-dop4").classList.remove("and");
}
function dopDroprown4() {
    document.getElementById("dropdown-dop4").classList.toggle("and");
}

/* Видео на главной */
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