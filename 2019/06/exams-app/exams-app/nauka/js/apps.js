// Menu icon
function myIcons(x) {
    x.classList.toggle("change");
}

/* Дивы вместо радиокнопок */
$('.radio-group .radio').click(function(){
    $(this).parent().find('.radio').removeClass('selected');
    $(this).addClass('selected');
    var val = $(this).attr('data-value');
    //alert(val);
    $(this).parent().find('input').val(val);
});
