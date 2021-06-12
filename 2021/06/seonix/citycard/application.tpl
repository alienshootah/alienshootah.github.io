<?php echo $header; ?><?php echo $column_left; ?><?php echo $column_right; ?>
<div id="content" class="main-right"><?php echo $content_top; ?>
    <div class="breadcrumb">
    <?php foreach ($breadcrumbs as $breadcrumb) { ?>
    <?php echo $breadcrumb['separator']; ?><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
    <?php } ?>
    </div>

    <div id="content-order">
        <h1 class="btn-main"><a href="/">EVROBONUS.RU</a></h1>
        <h1>Онлайн-обращение</h1>
            <div class="radio-btn" id="company_type-warn">
              <div>
                <input type="radio" id="online-radio" name="company_type" value="legal" checked>
                <label for="online-radio">Юридическое лицо*</label>
              </div>
              <div>
                  <input type="radio" id="online-radio2" name="company_type" value="individual">
                  <label for="online-radio2">Физическое лицо*</label>
              </div>
              <div>
                  <input type="radio" id="online-radio3" name="company_type" value="entrepreneur">
                  <label for="online-radio3">ИП*</label>
                  
              </div>
              <center><span class="company_type-warn red-warn">Необходимо заполнить поле!</span></center>
            </div>
        <div class="order">
            <div class="text-left">
                <img src="catalog/view/theme/seonix/image/evrobon-logo-n.png" alt="" style="width: 50%; display: block; margin: 0 auto 10px;">
                <p>Сломался гибридный лазер? Не работает аппарат для коррекции фигуры? Нужно заправить картридж или заменить расходные материалы? По этим и другим вопросам, связанным с работой косметологического и медицинского оборудования, обращайтесь в ЕВРОБОНУС!</p>
                <p>Чтобы вызвать инженера, заполните простую форму, расположенную на этой странице.</p>
                <p>Постарайтесь предоставить как можно больше информации по вашему вопросу. Подробно опишите неисправность, укажите производителя и модель устройства. Чем больше информации вы предоставите, тем быстрее инженер сможет решить вашу проблему. </p>
                <p>Наш online-сервис осуществляет круглосуточный прием онлайн-заявок. Заявки, оставленные до 16 часов, обслуживаются уже на следующий день. Однако если проблема требует незамедлительного решения, возможна скорая помощь для офиса в день обращения с доплатой за срочность.</p>
                <p>Мы предлагаем широчайший спектр услуг по ремонту и обслуживанию медицинской техники. Теперь вы знаете, куда обратиться, если нужно починить косметологическое оборудование, заменить картриджи, заказать сервисное обслуживание медицинских аппаратов. Ведь своевременная замена изношенных деталей позволит избежать внезапных поломок и обеспечит оптимизацию расходов до 30%.</p>
                <div class="serv-center">
                    <a href="tel:+88123132346">Телефон сервисного центра: <br> 8 (812) 313-23-46</a>
                </div>
            </div>
            <div class="form-right">
                    Поля обязательные для заполнения* <br><br>
                    <span id="name-warn"></span>
                    <input type="hidden" name="form_type" id="form_type" value="1">
                    <label for="name"><span class="name-warn red-warn">Необходимо заполнить поле!</span></label>
                    <input type="text" name="name" id="name" placeholder="Ваше имя*">
                    <span id="inn" style="display: none;"><label for="company">ИНН организации:</label>
                    <input type="text" name="company" id="company"></span>
                    <span id="email-warn"></span>
                    <label for="email"><span class="email-warn red-warn">Необходимо заполнить поле!</span></label>
                    <input type="text" name="email" id="email" placeholder="Ваш e-mail*">
                    <span id="tel-warn"></span>
                    <label for="tel"><span class="tel-warn red-warn">Необходимо заполнить поле!</span></label>
                    <input type="text" name="tel" id="tel" placeholder="Телефон для связи*">
                    <!-- <label for="manufacturer">Производитель техники:</label>
                    <input type="text" name="manufacturer" id="manufacturer" value="<?php if($m_name != '') echo $m_name;?>"> -->
                    <input type="text" name="model" id="model" placeholder="Модель техники:">
                    <div class="tooltip-input">
                      <div class="tooltip">?
                        <span>
                            Укажите в этом поле номер картриджа, если вам необходимо его заправить.
                        </span>
                      </div>
                      <input type="text" name="number" id="number" placeholder="Номер картриджа">
                    </div>
                    <input type="hidden" name="address" id="address">
                    <input type="text" name="postcode" id="postcode" placeholder="Адрес для выезда мастера. Индекс">
                    <input type="text" name="city" id="city" placeholder="Город">
                    <input type="text" name="street" id="street" placeholder="Улица">
                    <input type="text" name="house" id="house" placeholder="Дом">
                    <input type="text" name="flat" id="flat" placeholder="Квартира">
                    <textarea name="description" id="description" placeholder="Опишите в этом поле характер неисправности и другую значимую с вашей точки зрения для диагностики информацию."></textarea>
                    <div class="upload-file">
                      <input type="hidden" name="FIELDS[myFile][FILE_FID4]">
                      <input name="file" type="file" id="uploadfile" class="afbf_file_input_add" size="98">
                      <div class="afbf_input_group">
                          <input type="text" size="40" id="FILE_FID41" name="FIELDS[myFile][FILE_FID4]" placeholder="Скан отпечатка или файл конфигурации" value="" class="afbf_inputtext">
                          <span class="afbf_group_btn">
                              <button type="button" class="afbf_file_button"></button>
                          </span>
                      </div>
                  </div>
                    <input name="resetButton" value="Сброс" type="reset" id="button-citycard-application-reset">
                    <input name="submitButton" value="Отправить заявку" class="submit" type="submit" id="button-citycard-application">
            </div>
        </div>
<!--Юридический адрес: Россия, 191119, г. Санкт-Петербург, проспект Лиговский, д. 111-113-115, лит В, Помещение 24-Н <br> ОГРН 1167847159480 <br>Фактический адрес: Россия, г. Санкт-Петербург, пр. Луначарского д. 80 корп. 1 <br> Адрес сервисного центра: Россия Санкт-Петербург, ул. Краснопутиловская д. 50 <br><br>--><br><br>
                <div class="block_links">
                <div class="payment_link" style="margin-right: 0"><span>Принимаем к оплате:</span><br>
                    <img src="catalog/view/theme/seonix/image/icon_paysystems.png" alt="credit cards" style="margin-top:6px; display: inline-block" >
                </div>
                <div class="soc_link" style="float: right; margin-right: 10px">
                    <span>Поделиться:</span>
                    <ul>
                        <li class="vk"><a href="#">1</a></li>
                        <li class="fb"><a href="#">2</a></li>
                        <li class="tw"><a href="#">3</a></li>
                        <li class="g"><a href="#">4</a></li>
                    </ul>
                </div>
            </div>
    </div>
<?php echo $content_bottom; ?>
</div><!-- citycard-checkout-wraper -->
</div>
<script src="https://use.fontawesome.com/661e91f447.js"></script>
<script>
(function($){
  /*ДЛЯ ТРЕУГОЛЬНИКА/FOR TRIANGLE*/
  if ($('.new-menu .box-category> li').has('ul')) {
    $('.new-menu .box-category> li:has(ul)> a').addClass('triangle');
  }
  /*ДЛЯ ХОВЕРА МЕНЮ/FOR HOVER MENU*/
  $('.new-menu .box-category > li').hover(function() {
    $(this).addClass('active-menu');
  }, function() {
    $(this).removeClass('active-menu');
  });
})(jQuery);
/*ADAPTIVE MENU*/
  // var screen = $(window).outerWidth();
  // if (screen <= 820) {
  //     $('.triangle').attr('href', 'javascript:void(0);');
  //     $('.triangle').click(function(event) {
  //        $(this).next('ul').slideToggle();
  //     });
  // } else {
  //    $('.triangle').attr(attributeName);

   // }
  $('.box-heading').click(function(event) {
    $('.box-content').slideToggle(400); 
  });

  $('input[name="company_type"]').bind('change', function() {
    var company_type = $('.radio-btn input[name="company_type"]:checked').val();
    if(company_type == 'legal' || company_type == 'entrepreneur') $('#inn').show();
    else $('#inn').hide();
  });
</script>
