function myMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "header-list") {
    x.className += " responsive";
  } else {
    x.className = "header-list";
  }
}

$('.one-time').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          arrows: false
        }
        
      }
    ]
});

/* Dropdown */
function myDrop() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function myDrop2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

/* Tabs */
function openGal(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("portfolio-menu_link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();