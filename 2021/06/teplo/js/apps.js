/* Mobile btn */
const mobileBtn = document.querySelector(".mobile-btn");
mobileBtn.addEventListener("click", function() {
  document.querySelector(".nav").classList.toggle("show");
});


/* Current year */
year = document.querySelector('.footer-date');
year.innerHTML = new Date().getFullYear();

/* Sliders */
$('.promo-list').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  responsive: [
      {
        breakpoint: 1720,
        settings: {
          dots: true
        }
      }
    ]
});
$(window).resize(function(){
  $('.insta-list')[0].slick.refresh();
});
$('.insta-list').slick({
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1430,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },
	  {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
	  {
        breakpoint: 824,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
	  
      {
        breakpoint: 540,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});
$('.diplom-list').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 300,
  autoplay:true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1430,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }
  ]
});
$('.diplom-list2').slick({
 dots: true,
  arrows: true,
  infinite: true,
  speed: 300,
  autoplay:true,
  slidesToShow: 1,
  adaptiveHeight: true,
  responsive: [
      {
        breakpoint: 1720,
        settings: {
          dots: true
        }
      }
    ]
});

/* Tabs */
/* function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("moreus-tab");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("moreus-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();*/

// Filters: Range
var slider = document.getElementById("online-range");
var output = document.getElementById("online-value");
var sliderBig = document.getElementById("online-range-big");
var output2 = document.getElementById("online-value2");


output.innerHTML = "0";
output2.innerHTML = "0";

slider.oninput = function() {
    output.innerHTML = this.value;
	var price = $('#online-value').text();
$('#sp_id_result7').text(price);


  
}
sliderBig.oninput = function() {
       output2.innerHTML = this.value;
	var price2 = $('#online-value2').text();
$('#sp_id_result9').text(price2);
}

// Filters: Range

slider.addEventListener("touchmove", function() {
    var x = slider.value;
    var color = 'linear-gradient(90deg, rgb(0, 168, 236)' + x +'%, rgb(223, 226, 233)' + x + '%)';
    slider.style.background = color;
})
sliderBig.addEventListener("touchmove", function() {
  var x = sliderBig.value;
  var color = 'linear-gradient(90deg, rgb(0, 168, 236)' + x/3 +'%, rgb(223, 226, 233)' + x/3 + '%)';
  sliderBig.style.background = color;
})

slider.addEventListener("mousemove", function() {
  var x = slider.value;
  var color = 'linear-gradient(90deg, rgb(0, 168, 236)' + x +'%, rgb(223, 226, 233)' + x + '%)';
  slider.style.background = color;
})
sliderBig.addEventListener("mousemove", function() {
var x = sliderBig.value;
var color = 'linear-gradient(90deg, rgb(0, 168, 236)' + x/3 +'%, rgb(223, 226, 233)' + x/3 + '%)';
sliderBig.style.background = color;
})


