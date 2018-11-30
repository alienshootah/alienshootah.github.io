
// Скрипт крестика в меню (был)
function myFunction(x) {
    x.classList.toggle("change");
}

// Скрипт модального окна на главной
// A $( document ).ready() block.
$( document ).ready(function() {
    // load the overlay
    
    $('#myModal').modal({show:true});
   /* 
    
   if (document.cookie.indexOf('visited=true') == -1){
      здесь было тру
      
      var year = 1000*60*60*24*365;
      var expires = new Date((new Date()).valueOf() + year);
      document.cookie = "visited=true;expires=" + expires.toUTCString();
  
    } */
  }); 

  // Скрипт скрытия подсказки
  function myFunction(y) {
    var y = document.getElementById("myDIV");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}