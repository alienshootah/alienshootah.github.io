/* Dropdown */
const menuBtn = document.querySelector(".nav-drop-btn");
menuBtn.addEventListener("click", function() {
  document.querySelector(".drop-body").classList.toggle("show");
});

/* Current year */
year = document.querySelector('.footer-date');
year.innerHTML = new Date().getFullYear();

/* Sliders */
$('.promo-list').slick({
  dots: false,
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
$('.diplom-list').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
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
      breakpoint: 425,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

/* Tabs */
function openTab(evt, tabName) {
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
document.getElementById("defaultOpen").click();

// Filters: Range
var slider = document.getElementById("online-range");
var sliderBig = document.getElementById("online-range-big");
var output = document.getElementById("online-value");
output.innerHTML = "0";

slider.oninput = function() {
    output.innerHTML = this.value;
}

slider.addEventListener("touchmove", function() {
    var x = slider.value;
    var color = 'linear-gradient(90deg, rgb(0, 168, 236)' + x +'%, rgb(223, 226, 233)' + x + '%)';
    slider.style.background = color;
})
sliderBig.addEventListener("touchmove", function() {
  var x = sliderBig.value;
  var color = 'linear-gradient(90deg, rgb(0, 168, 236)' + x +'%, rgb(223, 226, 233)' + x + '%)';
  sliderBig.style.background = color;
})

slider.addEventListener("mousemove", function() {
  var x = slider.value;
  var color = 'linear-gradient(90deg, rgb(0, 168, 236)' + x +'%, rgb(223, 226, 233)' + x + '%)';
  slider.style.background = color;
})
sliderBig.addEventListener("mousemove", function() {
var x = sliderBig.value;
var color = 'linear-gradient(90deg, rgb(0, 168, 236)' + x +'%, rgb(223, 226, 233)' + x + '%)';
sliderBig.style.background = color;
})
