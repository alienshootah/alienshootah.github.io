jQuery(document).ready(function($) {
	$('.header__btn').click(function(){
		$('.header__nav').addClass('active');
		$('body').addClass('no-scroll');
	});

	$('.header__exit').click(function(){
		$('.header__nav').removeClass('active');
		$('body').removeClass('no-scroll');
	});
});

/* Tabs */
function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabs-btn");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();