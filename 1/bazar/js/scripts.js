
// User menu
function userNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

// Custom Dropdown
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myDrop() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function myDrop2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}
function myDrop3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}
function myDrop4() {
    document.getElementById("myDropdown4").classList.toggle("show");
}
  
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
}
}

// Tabs
function openCit(evt, citName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(citName).style.display = "block";
    evt.currentTarget.className += " active";
}
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen2").click();
  
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

// Sliders
$('.one-time').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
    }
  ]
});
$('.responsive').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});
$('.single-item').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});

// Timer
function updater(d, h, m, s) {
  // День сброса - 27 сентября 2015 года (и далее каждые три дня)
  var baseTime = new Date(2015, 8, 27);
  // Период сброса — 3 дня
  var period = 24*60*60*1000;

  function update() {
  var cur = new Date();
  // сколько осталось миллисекунд
  var diff = period - (cur - baseTime) % period;
  // сколько миллисекунд до конца секунды
  var millis = diff % 1000;
  diff = Math.floor(diff/1000);
  // сколько секунд до конца минуты
  var sec = diff % 60;
  if(sec < 10) sec = "0"+sec;
  diff = Math.floor(diff/60);
  // сколько минут до конца часа
  var min = diff % 60;
  if(min < 10) min = "0"+min;
  diff = Math.floor(diff/60);
  // сколько часов до конца дня
  var hours = diff % 24;
  if(hours < 10) hours = "0"+hours;
  // сколько часов до конца дня
  var days = diff % 30;
  if(days < 10) days = "0"+days;
  
  d.innerHTML = days;
  h.innerHTML = hours;
  m.innerHTML = min;
  s.innerHTML = sec;
  
  // следующий раз вызываем себя, когда закончится текущая секунда
  setTimeout(update, millis);
  }
  setTimeout(update, 0);
}

updater(document.getElementById("days"),
 document.getElementById("hours"), document.getElementById("minutes"),
 document.getElementById("seconds"));

// Modal Boxes
// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}