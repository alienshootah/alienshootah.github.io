
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

 /* Скрипт адаптивного слайдера с плавным переходом за 1 секунду, бесконечный */
           
 var btn_prev = document.querySelector('#gallery .buttons .prev');
 var btn_next = document.querySelector('#gallery .buttons .next');

 var images = document.querySelectorAll('#gallery .photos img');
 var i = 0;

 btn_prev.onclick = function() {
 images[i].className = '';
 i = i - 1; /* i++ */
 
 if(i < 0) {
 i = images.length - 1;
 }
 
 images[i].className = 'showed';
 }

 btn_next.onclick = function() {
 images[i].className = '';
 i = i + 1; /* i++ */
 
 if(i >= images.length) {
 i = 0;
 }
 
 images[i].className = 'showed';
 }

 function close_window() {
      close();
  }