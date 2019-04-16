




// Переключение пунктов меню
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
}

// Поисковые системы
$('#flagstrap3').flagStrap({
  countries: {
    "UA": "<img src='img/google-sel.jpg'>",
    "GB": "<img src='img/google-sel.jpg'> 2",
    "US": "<img src='img/google-sel.jpg'> 3",

  },

  buttonSize: "btn-md",
  buttonType: "btn-default",
  labelMargin: "20px",
  selectedCountry: "UA",
  scrollable: false,
  scrollableHeight: "350px",
  onSelect: function(value, element) {
      //
  },
  placeholder: {
      value: "",
      text: "Search Engines"
  }
});

// Страны
$('.flagstrap').flagStrap({
  inputName: "country",
  buttonSize: "btn-md",
  buttonType: "btn-default",
  selectedCountry: "UA",
  scrollable: true
});

// Модальное окно при выходе
jQuery( document ).ready( function( $ ) {
  // set the cookie for 1 hour
  function setCookie(cname, cvalue, exhours) {
    var d = new Date();
    // add cookie expiry date to be one hour from the current time
    d.setTime(d.getTime() + (exhours * 1 * 10 * 1000));
    var expires = "expires=" + d.toGMTString();
    // Pass the name, cookie value and expiry time into the cookie
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca [i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }

  function checkCookie() {
    var popUp = getCookie("poppedUp");
    // if the cookie isn't empty, then don't show the modal, otherwise show the modal
    if (popUp != "") {} else {
        // show modal
        $('#exitModal').modal('show');
        // change the value of the cookie so that we know the visitor has seent the cookie
        var popUp = 1;
        setCookie("poppedUp", popUp, 1);
    }
  }


  $("html").mouseleave(function() {
    checkCookie();
  }); });