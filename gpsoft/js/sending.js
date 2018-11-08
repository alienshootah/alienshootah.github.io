var handleMatchMedia = function (mediaQuery) {
    if (mediaQuery.matches) {
        // если более (max-width: 999px) и менее (min-width: 468px), то выполняется код между скобок 
        $('.slider-text_title, h1, h2, h3, h4').addClass('slider-text_title-green');
    } else {
        // обратное условие, т.е если более 999px и менее 468px
        $('.slider-text_title, h1, h2, h3, h4').toggleClass('slider-text_title-green');
    }
},
mql = window.matchMedia('(max-width: 999px) and (min-width: 468px)');
handleMatchMedia(mql);
mql.addListener(handleMatchMedia);

/* скрипт кнопки в шапке */
 function myFunction(x) {
    x.classList.toggle("change");
}

/* Скрипт отсылки сообщений с формы, рабочий */
window.onload = function() {
var inp_name = document.querySelector('input[name=name]');
var inp_phone = document.querySelector('input[name=phone]');

document.querySelector('#send').onclick = function() {
    var params = 'phone=' + inp_phone.value + '&' + 'name=' + inp_name.value;
        ajaxPost(params);
        }
}

function ajaxPost(params){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
    if(request.readyState == 4 && request.status == 200) {
        document.querySelector('#result').innerHTML = 'Спасибо! Ждите ответа!';
        document.querySelector('form').style.display = 'none';
    /* 
    document.location = 'http://localhost/java1/'; 
    - отправка человека по адресу, после успешного заполнения формы 
    */
}

else {
    document.querySelector('#result').innerHTML = request.responseText;
    }
}
 request.open('POST', 'app.php');
 request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
 request.send(params);
}