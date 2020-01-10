/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myDrop1() {
    document.getElementById("myDropdown1").classList.toggle("show");
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
    if (!event.target.matches('.manuals-btn')) {
        var dropdowns = document.getElementsByClassName("drop");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
}