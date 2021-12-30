/*

if(document.querySelector(".navi-slider")) {
    var naviSlider = new Swiper(".navi-slider", {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        loopedSlides: 1,
        watchSlidesProgress: true,
    });
}

if(document.querySelector(".first-slider")) {
    var brandsSlider = new Swiper(".first-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        loopedSlides: 1,
        navigation: {
            prevEl: ".first-arrow-left",
            nextEl: ".first-arrow-right",
        },
        thumbs: {
            swiper: naviSlider,
        },
    });
}

*/

const swiperOne= new Swiper(".navi-slider", {
    spaceBetween: 10,
    slidesPerView: 2,
    //freeMode: true,
    loop:false,
   
    
    /*
    renderCustom: function (swiper1, current, total) {
        return current + '/' + total;
    },
    */
  });
  const swiper2 = new Swiper(".first-slider", {
    slidesPerView: 1,
    loop:true,
    effect: "fade",
    
    navigation: {
      nextEl: ".next-slide",
      prevEl: ".prev-slide",
    },
    /*
    pagination: {
        el: ".slider-counter",
        type: 'custom',
        renderCustom: function (swiper1, current, total) {
            return ('0' + current).slice(-2) + '/' + ('0' + total).slice(-2);
          }
      },
      */
    thumbs: {
      swiper: swiperOne,
    },
  });

