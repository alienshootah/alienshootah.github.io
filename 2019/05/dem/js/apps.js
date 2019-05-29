
/* Дропдауны */
function dopDroprown() {
    document.getElementById("dropdown-dop").classList.toggle("shw");
}
function searchDrop() {
    document.getElementById("search-me").classList.toggle("shw");
}
function langDrop() {
    document.getElementById("lang-me").classList.toggle("show");
}

// Скрывает дропдаун когда клик происходит за пределами открытого окна
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("show");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
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