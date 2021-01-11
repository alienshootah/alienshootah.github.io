// Filters: accordion

var acc = document.getElementsByClassName("filters-accordion");
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

// Filters: Range
var slider = document.getElementById("myRange");
var output = document.getElementById("value");

output.innerHTML = " (выбрать)";

slider.oninput = function() {
    output.innerHTML = this.value;
}

slider.addEventListener("mousemove", function() {
    var x = slider.value;
    var color = 'linear-gradient(90deg, rgb(117,252,117)' + x +'%, rgb(214,214,214)' + x + '%)';
    slider.style.background = color;
})