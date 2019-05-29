
/* Дропдауны */
function dopDroprown() {
    document.getElementById("dropdown-dop").classList.toggle("show");
}
function dopDroprown() {
    document.getElementById("dropdown-dop").classList.toggle("show");
}
function searchDrop() {
    document.getElementById("search-me").classList.toggle("show");
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