/* Gallery slider */

$('.gallery-list').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 1720,
        settings: {
          arrows: false,
        }
      }
    ]
});
$('.partners-list').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  focusOnSelect: false,
  responsive: [
    {
      breakpoint: 1720,
      settings: {
        arrows: false,
      }
    }
  ]
});