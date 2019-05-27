

// Responsive menu
function myMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Dropdown
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
function myDrop5() {
  document.getElementById("myDropdown5").classList.toggle("show");
}
function myDrop6() {
  document.getElementById("myDropdown6").classList.toggle("show");
}
function myDrop7() {
  document.getElementById("myDropdown7").classList.toggle("show");
}
function myDrop8() {
  document.getElementById("myDropdown8").classList.toggle("show");
}
function myDrop9() {
  document.getElementById("myDropdown9").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.menu-btn')) {
    var dropdowns = document.getElementsByClassName("dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


