$(document).ready(function(){
  $('.questions__header').click(function(e) {
    e.preventDefault();
    var qBody = $(this).next()
    var qText = $(this).find('.questions__btn__toggle')
    if(qBody.is(':hidden')){
      qText.text('РЎРІРµСЂРЅСѓС‚СЊ -')
      qBody.slideDown(250)
    }
    else{
      qBody.slideUp(250)
      qText.text('Р Р°Р·РІРµСЂРЅСѓС‚СЊ +')
    }
  });

  $('.delivery__header').click(function(e) {
    e.preventDefault();
    var qBody = $(this).next()
    if(qBody.is(':hidden')){
      $(this).find('.delivery__btn__link').text('РЎРІРµСЂРЅСѓС‚СЊ -')
      qBody.slideDown(250)
    }
    else{
      qBody.slideUp(250)
      $(this).find('.delivery__btn__link').text('Р Р°Р·РІРµСЂРЅСѓС‚СЊ +')
    }
  });
});