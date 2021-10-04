var helloSlider = new Swiper(".hello-slider", {
    pagination: {
      el: ".hello-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".hello-next",
    },
});

/* hide left arrow by deafult */
var footerBtn = document.getElementsByClassName('footer-more-btn')[0];
var footerLink = document.getElementsByClassName('footer-more-link')[0];

/* Swiper API - if index = 1 hide left arrow / otherwise show */
helloSlider.on('slideChange', function() {
  var realIndex = helloSlider.realIndex;

  if (realIndex == 0) {
    console.log("test");
    
  }
  if (realIndex == 2) {
    footerLink.style.display = "inline-block";
    footerBtn.style.display = "none";
  } else {
    footerLink.style.display = "none";
    footerBtn.style.display = "inline-block"; 
  }

});

