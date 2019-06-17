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

/* Чекбоксы */
$(function(){
    var checkboxs = $('input[type=checkbox]');
    
    checkboxs.each(function(){
      $(this).wrap('<div class="customCheckbox"></div>');
      $(this).before('<span>&#10004;</span>');
    });
    
    checkboxs.change(function(){
      if($(this).is(':checked')){
       $(this).parent().addClass('customCheckboxChecked');
      } else {
       $(this).parent().removeClass('customCheckboxChecked');
      }
    });
  })