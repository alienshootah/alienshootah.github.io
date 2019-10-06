/* Слайдер */

$('.main-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false
});

/* Меню */

function myMenu() {
    const x = document.getElementById("myTopnav");
    if (x.className === "header-menu") {
      x.className += " responsive";
    } else {
      x.className = "header-menu";
    }
}