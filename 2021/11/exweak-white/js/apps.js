
/* Menu */

const sidebar = document.querySelector(".sidebar");
var headerClose = document.getElementsByClassName("sidebar-close")[0];
const mobileBtn = document.querySelector(".header-menu");
mobileBtn.addEventListener("click", function() {
  document.querySelector(".sidebar").classList.toggle("show");
});
headerClose.onclick = function() {
  document.querySelector(".sidebar").classList.toggle("show");
}

/* Left Header */

const leftBtn = document.querySelector("#sb-left");
const checkBox = document.querySelector("#check-hand");
leftBtn.addEventListener("click", function() {
  if (checkBox.checked == true){
    document.querySelector(".header-list").classList.add("header-list-left");
    document.querySelector(".container-fluid").classList.add("leftmode");
  } else {
    document.querySelector(".header-list").classList.remove("header-list-left");
    document.querySelector(".container-fluid").classList.remove("leftmode");
  }
});


window.onclick = function(event) {
  /* Модальное окно */
  if (event.target == modal) {
      modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == sidebar) {
    sidebar.classList.toggle("show");
  }
}

/* Modal */

// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close")[0];
var span2 = document.getElementsByClassName("modal-close-thue")[0];
var span3 = document.getElementsByClassName("modal-close-three")[0];

// When the user clicks the button, open the modal 
if(btn) {
  btn.onclick = function() {
    modal.style.display = "block";
  }
}
if(btn2) {
  btn2.onclick = function() {
    modal2.style.display = "block";
  }
}
if(btn3) {
  btn3.onclick = function() {
    modal3.style.display = "block";
  }
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}


/* Dropdown */
if(document.querySelectorAll(".sidebar-button-color")) {
  var acc = document.querySelectorAll(".sidebar-button-color");
  var i;
  
  for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
      panel.style.display = "none";
      } else {
      panel.style.display = "block";
      }
  });
  }
}
