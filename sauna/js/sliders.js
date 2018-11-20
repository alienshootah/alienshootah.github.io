
$('#mygallery').on('shown.bs.modal', function () {

  $('.one-time').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000
  });
});
$('.single-item').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
  });