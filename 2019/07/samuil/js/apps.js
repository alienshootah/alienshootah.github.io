
// Dropdowns
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myDrop1() {
    document.getElementById("myDrop1").classList.toggle("show");
}
function myDrop2() {
    document.getElementById("myDrop2").classList.toggle("show");
}
function myDrop3() {
    document.getElementById("myDrop3").classList.toggle("show");
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

// Sliders
$('.pre-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
});
$('.feature-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
});
$('.hot-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: false,
    arrows: true
});
$('.brands-list').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    dots: false,
    arrows: true
});