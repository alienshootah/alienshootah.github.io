
// Responsive menu
function myFunction() {
    var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
// Menu icon
function myMenu(x) {
    x.classList.toggle("change");
  }