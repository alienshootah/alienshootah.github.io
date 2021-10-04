<?php
    if ($company_type != 'individual') {
        $client_type = 'card';
    } else {
        $client_type = 'undefined';
    }
?>

<?php echo $header; ?><?php echo $column_left; ?><?php echo $column_right; ?>
<div id="content" class="u-anchor"><?php echo $content_top; ?>
    <div class="breadcrumb">
        <a href="https://promsnabshop.ru/">Главная</a>
         &raquo; <a href="https://promsnabshop.ru/basket">Корзина покупок</a>
         &raquo; <a href="https://promsnabshop.ru/order">Оформление заказа</a>
    <?php /*foreach ($breadcrumbs as $breadcrumb) { ?>
    <?php echo $breadcrumb['separator']; ?><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
    <?php }*/ ?>
    </div>

<div class="citycard-checkout-wrap">
<div class="citycard-checkout-step-1" style="width: 100% !important;">
<div class="ordering">
    <!--<h1 id="anch">Пожалуйста, заполните форму заказа</h1><div>&nbsp;</div>-->
    <input type="hidden" name="d1200" id="d1200" value="<?php echo $d1200; ?>">
    <input type="hidden" name="brand_id" id="brand_id" value="<?php echo $brand_id; ?>">
    <div id="stepsButtons" class="orderHeadMenu">
        <input type="hidden" name="order_step" value="1">
        <div class="item__wrapper">
            <span id="personalButton" class="orderHeadMenu__item active">Личные данные</span>
            <span class="arrow"></span>
        </div>
        <div class="item__wrapper">
            <span id="deliveryButton" class="orderHeadMenu__item">Способ получения</span>
            <span class="arrow"></span>
        </div>
        <div class="item__wrapper">
            <span id="paymentButton" class="orderHeadMenu__item">Форма оплаты</span>
            <span class="arrow"></span>
        </div>
        <div class="item__wrapper">
            <span id="confirmButton" class="orderHeadMenu__item">Подтверждение и оплата</span>
        </div>
    </div>

    <div class="ordering__1rst-box" id="div_firstname">
        <div class="ordering__1rst-box__left">
          <label for="fio">Фамилия и имя*:</label>
          <span class="red-warn" style="font-size: 10px; display: block;">ВНИМАНИЕ! Во избежание трудностей при получении заказа вводите ФАМИЛИЮ и ИМЯ полностью</span>
        </div>
        <div class="ordering__1rst-box__right">
          <input type="text" name="firstname" value="" placeholder="Например: Абрамович Роман" />
          <span class="name-warn red-warn">Необходимо заполнить поле фамилия и имя!</span>
        </div>
    </div>
    <div class="ordering__1rst-box" id="div_email">
        <div class="ordering__1rst-box__left">
          <label for="fio">Ваш e-mail*:</label>
        </div>
        <div class="ordering__1rst-box__right">
          <input type="email" name="email" value="" placeholder="Например: primer@mail.ru" />
          <span class="email-warn red-warn">Необходимо заполнить поле e-mail!</span>
        </div>
    </div>
    <div class="ordering__1rst-box" id="div_phone">
        <div class="ordering__1rst-box__left">
          <label for="mobile">Телефон*:</label>
        </div>
        <div class="ordering__1rst-box__right">
          <input type="text" name="phone" value="" placeholder="Формат: 7 (777) 777 - 77 - 77" id="phoneNumber" />
          <span class="phone-warn red-warn">Необходимо заполнить поле телефон!</span>
        </div>
    </div>

  <?php if ($client_type == 'undefined') { ?>
    <style>#props{ display: none;}</style>
  <?php } else { ?>
    <style>#props{ visibility: visible;}</style>
  <?php } ?>
    <div id="props">
      <div class="ordering__1rst-box">
        <div class="ordering__1rst-box__left">
          <label for="name">Наименование*:</label>
        </div>
        <div class="ordering__1rst-box__right">
          <input type="text" name="props_company_name" value="" placeholder='ПАО "Газпром"' />
          <span class="company-name-warn red-warn">Необходимо заполнить поле!</span>
        </div>
      </div>
      <div class="ordering__1rst-box">
        <div class="ordering__1rst-box__left">
          <label for="inn">ИНН*:</label>
        </div>
        <div class="ordering__1rst-box__right">
          <input type="text" name="props_inn" value="" />
          <span class="inn-warn red-warn">Необходимо заполнить поле!</span>
        </div>
      </div>
      <div class="ordering__1rst-box">
        <div class="ordering__1rst-box__left">
          <label for="bik">БИК*:</label>
        </div>
        <div class="ordering__1rst-box__right">
          <input type="text" name="checking_account_bik" value=""/>
          <span class="bik-warn red-warn">Необходимо заполнить поле!</span>
        </div>
      </div>
      <div class="ordering__1rst-box">
        <div class="ordering__1rst-box__left">
          <label for="rc">Р/С*:</label>
        </div>
        <div class="ordering__1rst-box__right">
          <input type="text" name="checking_account" value=""/>
          <span class="account-warn red-warn">Необходимо заполнить поле!</span>
        </div>
      </div>
    </div>

    <div class="ordering__5th-box" id="div_do_1">
        <div class="">
          <button type="submit" id="do_1" name="do_1">Далее</button>
        </div>
    </div>

    <div id="div_shipping" style="display: none;"><div class="ordering__1rst-box" id="div_city">
        <div class="ordering__1rst-box__left">
          <label for="mobile">ВВЕДИТЕ ГОРОД (БОЛЕЕ 5000 НАПРАВЛЕНИЙ)*:</label>
        </div>
        <div class="ordering__1rst-box__right">
          <input type="text" name="city" id="checkout_city" value="<?php echo $delivery_city; ?>" placeholder="Санкт-Петербург" onkeyup="checkout_city(this.value);"/>
          <span class="city-warn red-warn">Необходимо заполнить поле города!</span>
        </div>
    </div>

<?php if ($shipping_methods) { ?>
      <div id="div_methods_shipping" style="display: block;"><div class="ordering__2nd-box">
        <div class="ordering__2nd-box__left">
          <label for="">Способ доставки*:</label>
        </div>
        <div class="ordering__2nd-box__right">
  <?php foreach($shipping_methods as $shipping_method) { ?>
  <?php if (!$shipping_method['error']) { ?>
  <?php foreach($shipping_method['quote'] as $quote) { ?>
          <div style="width: 100%; padding-bottom: 5px;" id="del_<?php echo str_replace('.', '_', $quote['code']); ?>">
            <label style="text-align: left; padding-left: 3px;" for="<?php echo $quote['code']; ?>">
      <?php if ($quote['code'] == $code || !$code) { ?>
      <?php $code = $quote['code']; ?>
      <input type="radio" name="shipping_method" value="<?php echo $quote['code']; ?>" id="<?php echo $quote['code']; ?>" data-title="<?php echo $quote['title']; ?>"   style="outline: none; vertical-align: middle; margin-top: 0px;"/> <!--checked="checked"-->
      <?php } else { ?>
      <input type="radio" name="shipping_method" value="<?php echo $quote['code']; ?>" id="<?php echo $quote['code']; ?>" data-title="<?php echo $quote['title']; ?>" style="outline: none; vertical-align: middle; margin-top: 0px;" /><!--<?php if ($quote['code'] == 'flat.flat' && $client_type == 'undefined') echo 'checked="checked"';?>-->
      <?php } ?>
              &nbsp;&nbsp;<?php echo $quote['title']; //if ($total < 2000 && $quote['code'] == 'pickup.pickup') echo " 100 руб.";?>
            </label>
            <?php if ($quote['code'] == 'pickup.pickup') { echo '<span id="pickup_cost">'. $pickup_cost .'</span>'; ?>
              <!--<div class="tooltip">?
                  <span>
                      Вывеска - "Контакт- курьерская служба"
                  </span>
              </div>-->
            <?php } elseif ($quote['code'] == 'flat.flat') { echo '<span id="flat_cost">'. $flat_cost .'</span>'; } ?>
          </div>
            <?php if ($quote['code'] == 'pickup.pickup') echo '<span id="pickup_pvz" style="padding-bottom: 5px;">'. $pickup_pvz .'</span>'; ?>
  <?php } ?>
  <?php } else { ?>
          <div style="width: 100%">
            <label style="text-align: left; padding-left: 3px;">
  &nbsp;&nbsp;<font class="error"><?php echo $shipping_method['error']; ?></font>
            </label>
          </div>
  <?php } ?>
  <?php } ?>

          <div style="width: 100%; padding-bottom: 5px;" id="del_express">
            <label style="text-align: left; padding-left: 3px;" for="express">
              <input type="radio" name="shipping_method" value="express" id="express" data-title="Экспресс доставка по Санкт-Петербургу 650 руб" style="outline: none; vertical-align: middle; margin-top: 0px;" />
              &nbsp;&nbsp;<?php if ((int)$brand_id == 104) echo "Экспресс доставка <span id=\"express_cost\">800 руб."; else echo "Экспресс доставка <span id=\"express_cost\">600 руб.";?></span>
              <div class="tooltip">?
                  <span>
                      В течении 3 часов, объемный вес до 5кг, исходя из технической возможности
                  </span>
              </div>
            </label>
          </div>

          <!--<div style="width: 100%" id="del_piter1">
            <label style="text-align: left; padding-left: 3px;" for="piter">
              <input type="radio" name="shipping_method" value="piter" id="piter" data-title="Доставка по региону Санкт-Петербурга 600 руб" style="outline: none; vertical-align: middle; margin-top: 0px;" />
              &nbsp;&nbsp;Доставка по региону Санкт-Петербурга 600 руб.
              <div class="tooltip">?
                  <span>
                      Вес до 5кг, исходя из технической возможности
                  </span>
              </div>
            </label>
          </div>
          <div style="width: 100%; padding-left: 35px; padding-top: 5px;" id="del_piter2">
            <select name="piter_city" id="piter_city">
                <option value="Санкт-Петербург, Белоостров">г. Белоостров</option>
                <option value="Санкт-Петербург, Зеленогорск">г. Зеленогорск</option>
                <option value="Санкт-Петербург, Пушкин">г. Пушкин</option>
                <option value="Санкт-Петербург, Сестрорецк">г. Сестрорецк</option>
                <option value="Санкт-Петербург, Колпино">г. Колпино</option>
                <option value="Санкт-Петербург, Комарово">г. Комарово</option>
                <option value="Санкт-Петербург, Кронштадт">г. Кронштадт</option>
                <option value="Санкт-Петербург, Красное село">г. Красное село</option>
                <option value="Санкт-Петербург, Левашово">г. Левашово</option>
                <option value="Санкт-Петербург, Лисий Нос">г. Лисий Нос</option>
                <option value="Санкт-Петербург, Ломоносов">г. Ломоносов</option>
                <option value="Санкт-Петербург, Металлострой">г. Металлострой</option>
                <option value="Санкт-Петербург, Молодежное, Выборгский р-н">г. Молодежное, Выборгский р-н</option>
            </select>
          </div>-->

  <?php
  $cdek = false;
  //$cdek = true;
  foreach($payment_methods as $payment_method) { 
    //if ($payment_method['code'] == 'robokassa') $cdek = true;
  }
  //if ($client_type != 'undefined') $cdek = true;
  ?>
  <input type="hidden" name="client_type" value="<?php echo $client_type;?>" id="client_type">
  <input type="hidden" name="company_type" value="<?php echo $company_type;?>" id="company_type">
  <?php if ($cdek) {?>
          <div style="width: 100%">
            <label style="text-align: left; padding-left: 3px; <?php if ($client_type == 'undefined') echo "cursor: default;"?>" for="cdek" id="cdek_label">
              <input type="radio" name="shipping_method" value="cdek" id="cdek" data-title="Доставка СДЭК" style="outline: none; vertical-align: middle; margin-top: 0px;" 
<?php /*if ($client_type == 'undefined') echo "disabled" */?> 
<?php if ($client_type != 'undefined') echo 'checked="checked"';?> checked />
              &nbsp;&nbsp;Курьерская доставка СДЭК по России

<!--
              <?php if ($client_type == 'undefined') {?>
              <div class="tooltip">?
                  <span>
                      Доступно при оплате на сайте
                  </span>
              </div>
              <?php }?>
-->
            </label><span class="cdek-warn red-warn"><br>Доставка СДЭК доступна только при онлайн-оплате!</span>
          </div>

  <?php } ?>
        <div style="padding-left: 35px; padding-top: 8px;"><span class="sh-warn red-warn">Необходимо выбрать способ доставки!</span></div>
        </div>
      </div>
      <!--<div class="ordering__4th-box" id="cdek_form" <?php /*if ($client_type == 'undefined') echo 'style="display: none;"'; */?>>
        <div class="">
          <div class="sdek">
            <img src="https://promsnabshop.ru/catalog/view/theme/seonix/image/sdek.png" class="sdek_logo">
            <div class="ui-widget" style="display: block;">
              <input id="city" name="cdek_city" type="text" placeholder="начните ввод города здесь..." />
            </div>
            <div id="cdek_res">
              для расчета стоимости доставки выберите, пожалуйста, город или регион доставки
            </div>
            <font class="cdek2-warn red-warn">Введите город доставки!</font>
          </div>
        </div>
      </div>-->
    </div>
<?php } ?>

    <div id="delivery_address" style="display: none;">
      <div class="ordering__1rst-box">
        <div class="ordering__1rst-box__left">
          <label for="address">Адрес доставки:</label>
        </div>
        <div class="ordering__1rst-box__right">
        <div class="ordering__1rst-box__left">
          <label for="mobile" style="color: #4d4d33;">Индекс:</label>
        </div>
        <div class="ordering__1rst-box__right">
          <input type="text" name="postcode" value="" placeholder="191040" />
        </div>
        <div class="ordering__1rst-box__left">
          <label for="mobile" style="color: #4d4d33;">Улица:</label>
        </div>
        <div class="ordering__1rst-box__right">
          <input type="text" name="ulica" value="" placeholder="пр. Лиговский" />
        </div>
        <div class="ordering__1rst-box__left">
          <label for="mobile" style="color: #4d4d33;">Дом:</label>
        </div>
        <div class="ordering__1rst-box__right">
          <input type="text" name="dom" value="" placeholder="50" size="5"/>
        </div>
        <div class="ordering__1rst-box__left">
          <label for="mobile" style="color: #4d4d33;">Квартира:</label>
        </div>
        <div class="ordering__1rst-box__right">
          <input type="text" name="kv" value="" placeholder='Вывеска "Контакт- курьерская служба"' size="5"/>
        </div>
        <span class="address-warn red-warn">Необходимо заполнить поля!</span>
        </div>
      </div>
    </div>

    <div class="ordering__1rst-box" id="div_comment" style="display: block;">
        <div class="ordering__1rst-box__left">
          <label for="comment">Комментарий:</label>
        </div>
        <div class="ordering__1rst-box__right">
          <textarea id="comment" name="comment" placeholder="Ваш комментарий..."></textarea>
        </div>
    </div>

    <div class="ordering__5th-box" id="div_do_1">
        <div class="">
          <button type="submit" id="do_2" name="do_2">Далее</button>
        </div>
    </div></div>

<?php if ($payment_methods) { ?>
    <div id="div_payment" style="display: none;"><div class="ordering__2nd-box">
        <div class="ordering__2nd-box__left">
          <label for="">Способ оплаты*:</label>
        </div>
        <div class="ordering__2nd-box__right">
  <?php foreach ($payment_methods as $payment_method) { ?>
      <?php if ($client_type == 'vip' || $client_type == 'nal' || $client_type == 'card') {
      $payment_method = array ( "code"=> "bank_transfer", "title" => "Оплата по счету", "sort_order" =>  "" );
      ?>
          <div style="width: 100%; padding-bottom: 5px;" id="del_<?php echo str_replace('.', '_', $payment_method['code']); ?>">
            <label style="text-align: left; padding-left: 3px;" for="<?php echo $payment_method['code']; ?>">
              <input id="<?php echo $payment_method['code']; ?>" type="radio" name="payment_method" value="<?php echo $payment_method['code']; ?>" style="vertical-align: middle; margin-top: 0px; outline: none;" data-title="<?php echo $payment_method['title']; ?>" /><!-- checked="checked"-->
              &nbsp;&nbsp;<?php echo $payment_method['title']; ?>
            </label>
          </div>
      <?php break; } else { ?>
      <?php if ($payment_method['code'] == $code || !$code) { 
          $code = $payment_method['code'];
       } else {
          if ($payment_method != array ( "code"=> "bank_transfer", "title" => "Оплата по счету", "sort_order" =>  "" )){
          if ($payment_method['code'] == 'cod') $payment_method['title'] = 'Оплата наличными';
          if ($payment_method['code'] == 'robokassa') $payment_method['title'] = 'Картой на сайте';
          if ($payment_method['code'] == 'oospm') $payment_method['title'] = 'БАНКОВСКОЙ КАРТОЙ ОНЛАЙН';
        ?>
          <div style="width: 100%; padding-bottom: 5px;" id="del_<?php echo str_replace('.', '_', $payment_method['code']); ?>">
            <label style="text-align: left; padding-left: 3px;" for="<?php echo $payment_method['code']; ?>">
      <input type="radio" name="payment_method" value="<?php echo $payment_method['code']; ?>" id="<?php echo $payment_method['code']; ?>" data-title="<?php echo $payment_method['title']; ?>" style="vertical-align: middle; margin-top: 0px; outline: none;" /><!-- <?php if ($payment_method['code'] == 'cod') echo 'checked="checked"';?>-->
      <?php  ?>
              &nbsp;&nbsp;<?php echo $payment_method['title']; ?>
        <?php
        if ($payment_method['code'] == 'robokassa') {
        ?>
              <div class="tooltip">?
                  <span>
                      если, при проверке заказа, продукции нет в наличии, мы вернем вам деньги в течении часа после оплаты
                  </span>
              </div> 
        <?php } ?>
            </label>
        <?php if ($payment_method['code'] == 'oospm') {?>
            <div style="color: #888; font-size: 12px; padding-left: 34px;">(Комиссия банка 2%, предоплата)</div>
        <?php }?>
          </div>
  <?php  } } } } ?>
        <div style="padding-left: 35px; padding-top: 8px;"><span class="pay-warn red-warn">Необходимо выбрать способ оплаты!</span></div>
        </div>
      </div>
<?php } ?>

    <div class="ordering__5th-box">
        <div class="">
          <button type="submit" id="do_checkout" name="do_checkout">оформить</button>
        </div>
    </div>
    <div class="ordering__6th-box">
        <div class="">
          <br/>
          Нажимая на кнопку "Оформить", я даю согласие на обработку персональных данных
        </div>
    </div></div>
<!--<br />
*- Если возникли сложности при оформлении заказа, просьба связаться со службой поддержки по телефону +7(812)640-17-12
    <div class="buttons">
        <div class="right">
            <input type="button" value="Выберите способ оплаты" id="button-citycard-order" class="button" disabled>
        </div>
    </div>-->
</div>
</div>
</div>
<div class="citycard-checkout-step-2">
    <div id="confirm">
        <div class="checkout-content" style="display:none">
        </div>
    </div>
</div>
<?php echo $content_bottom; ?>

</div><!-- citycard-checkout-wraper -->

</div>
<style>
  /*label[for="robokassa"] b {color: red;}
  label[for="robokassa"]:before { content: url(catalog/view/theme/seonix/image/icon_paysystems.png); position: relative; margin-right: 5px; }*/
</style>

<script type="text/javascript">
    /**
     * подтягиваем список городов ajax`ом, данные jsonp в зависмости от введённых символов
     */
    $(function() {

      $("#checkout_city").autocomplete({
        source: '/index.php?route=citycard/application/search_checkout_city',
        minLength: 2,
        select: function(event,ui) {
            if (ui.item.value != '') {
                $('#del_pickup_pickup').css('display', 'block');
                $('#pickup_pvz').css('display', 'block');
                $('#div_methods_shipping').css('display', 'block');
                $('#div_comment').css('display', 'block');
                $('.city-warn').hide();
                $('.sh-warn').hide();
            }
            /*if (ui.item.value == 'Москва') {
                $('#del_cod').css('display', 'block');
                $('#del_flat_flat').css('display', 'block');
                $('#del_express').css('display', 'block');
                $('#del_piter1').css('display', 'none');
                $('#del_piter2').css('display', 'none');
                $('#flat_cost').html('450 руб.');
            } else if (ui.item.value == 'Санкт-Петербург') {
                $('#del_cod').css('display', 'block');
                $('#del_flat_flat').css('display', 'block');
                $('#del_express').css('display', 'block');
                $('#del_piter1').css('display', 'block');
                $('#del_piter2').css('display', 'block');
                $('#flat_cost').html('450 руб.');
            } else {*/
                $('#del_cod').css('display', 'none');
                $('#del_flat_flat').css('display', 'block');
                $('#del_express').css('display', 'none');
                $('#del_piter1').css('display', 'none');
                $('#del_piter2').css('display', 'none');
            //}
            var formdata = new FormData();
            formdata.append("city", ui.item.value);
            var brand_id = parseInt($('#brand_id').val());
            formdata.append("brand_id", brand_id);
            $.ajax({
                url: '/index.php?route=citycard/application/checkout_city',
                data: formdata,
                processData: false,
                contentType: false,
                type: 'POST',
                dataType: "json",
                success: function (data) {
                    if(data['success']) {
                        if (data['success_pvz'] != '') $('#pickup_pvz').html(data['success_pvz']);
                        else $('#pickup_pvz').html('');
                        if (data['success_cost3'] != '') {
                            $('#express_cost').html(data['success_cost3']);
                            $('#del_express').css('display', 'block');
                        }
                        if (data['success_cost2'] != '') $('#pickup_cost').html(data['success_cost2']);
                        else $('#pickup_cost').html('');
                        if (data['success_cost1'] != '') $('#flat_cost').html(data['success_cost1']);
                        else $('#flat_cost').html('');
                    }else $('#pickup_pvz').html('');
                }
            });
            /*var d1200 = parseInt($('#d1200').val());
            if (d1200 > 0) {
                $('#pickup_pvz').css('display', 'none');
                $('#del_pickup_pickup').css('display', 'none');
                $('#del_express').css('display', 'none');
                if (ui.item.value == 'Москва' || ui.item.value == 'Санкт-Петербург') {
                    $('#flat_cost').html('1200 руб.');
                } else {
                    $('#flat_cost').html('1200 руб. (оплата через сайт)');
                }
            }
            var brand_id = parseInt($('#brand_id').val());
            if (brand_id == 11 || brand_id == 34 || brand_id == 13 || brand_id == 104) {
                $('#del_express').css('display', 'none');
            }
            if (brand_id == 13 && ui.item.value == 'Москва') {
                $('#del_express').css('display', 'block');
            }
            if (brand_id == 104 && ui.item.value == 'Москва') {
                $('#del_express').css('display', 'block');
            }*/
        }
      });

      $("#city").autocomplete({
        source: function(request,response) {
          $.ajax({
            url: "https://api.cdek.ru/city/getListByTerm/jsonp.php?callback=?",
            dataType: "jsonp",
            data: {
                q: function () { return $("#city").val() },
                name_startsWith: function () { return $("#city").val() }
            },
            success: function(data) {
              response($.map(data.geonames, function(item) {
                return {
                  label: item.name,
                  value: item.name,
                  id: item.id
                }
              }));
            }
          });
        },
        minLength: 1,
        select: function(event,ui) {
              $.ajax({
                url: "https://promsnabshop.ru/calc_deliv_cdek_php/action_form_cdek.php",
                data: {receiverCityId : ui.item.id},
                success: function(data) {
                    document.getElementById("cdek_res").innerHTML = data;
                }
              });
        }
      });
      
    });

    $('input[name="shipping_method"]').bind('change', function() {
            var shipping_method_code = $('.citycard-checkout-wrap input[name="shipping_method"]:checked').val();
            if(shipping_method_code == 'cdek') $('#cdek_form').show();
            else $('#cdek_form').hide();
            if(shipping_method_code == 'flat.flat' || shipping_method_code == 'express' || shipping_method_code == 'piter') $('#delivery_address').show();
            else $('#delivery_address').hide();
            if ($("#checkout_city").val() == 'Москва' && shipping_method_code == 'pickup.pickup') $('#del_cod').css('display', 'none');
            var company_type = '<?php echo $company_type;?>';
            if (company_type == 'individual' && shipping_method_code == 'pickup.pickup') {
                $('#del_cod').css('display', 'none');
            }
    });

    $('input[name="payment_method"]').bind('change', function() {
            var payment_method_code = $('.citycard-checkout-wrap input[name="payment_method"]:checked').val();
            if(payment_method_code == 'robokassa') {
                $('#cdek').attr('disabled', false);
                $('#cdek_label').css('color', '#000').css('cursor', 'pointer');
            }else{
                $('#cdek').attr('disabled', true);
                $('#cdek').attr('checked', false);
                $('#cdek_form').hide();
                $('#cdek_label').css('color', '#7a7a52').css('cursor', 'default');
            }
    });
</script>

<script>
var isMobile = false;
// проверка на размер экрана (размер я брал вроде с Bootstrap-а)
$(document).ready( function() {
    if ($('body').width() <= 600) {
        isMobile = true;
    }
    // и потом если нужен код только для телефона:
    if (isMobile) {
        $(function(){
            $('html, body').animate({scrollTop: $('#anch').offset().top}, 0);
        });
    } else {

    }
});
</script>
<script>
    $('.choice-btn').click(function(event) {
        $('.choice-table').slideToggle();
    });
</script>

<script>
$(document).ready(function() {

    $('#do_1').live('click', function() {
        $('.name-warn').hide();
        $('.phone-warn').hide();
        $('.email-warn').hide();
        var firstname = $('.citycard-checkout-wrap input[name="firstname"]').val();
        var email = $('.citycard-checkout-wrap input[name="email"]').val();
        var phone = $('.citycard-checkout-wrap input[name="phone"]').val().replace(/\D/g, '');
        var dalee = true;
        if (!firstname) {
            $('.name-warn').show();
            dalee = false;
        }
        if (!phone) {
            $('.phone-warn').show();
            dalee = false;
        }
        if (!email) {
            $('.email-warn').show();
            dalee = false;
        }

        var company_type = '<?php echo $company_type;?>';
        if (company_type == 'legal' || company_type == 'entrepreneur') {
            $('.company-name-warn').hide();
            $('.inn-warn').hide();
            $('.bik-warn').hide();
            $('.account-warn').hide();
            var props_company_name = $('.citycard-checkout-wrap input[name="props_company_name"]').val();
            var props_inn = $('.citycard-checkout-wrap input[name="props_inn"]').val();
            var checking_account_bik = $('.citycard-checkout-wrap input[name="checking_account_bik"]').val();
            var checking_account = $('.citycard-checkout-wrap input[name="checking_account"]').val();
            if (!props_company_name) {
                $('.company-name-warn').show();
                dalee = false;
            }
            if (!props_inn) {
                $('.inn-warn').show();
                dalee = false;
            }
            if (!checking_account_bik) {
                $('.bik-warn').show();
                dalee = false;
            }
            if (!checking_account) {
                $('.account-warn').show();
                dalee = false;
            }
        }

        if (dalee) {
            $('#personalButton').removeClass('active');
            $('#deliveryButton').addClass('active');
            $('#div_firstname').css('display', 'none');
            $('#div_email').css('display', 'none');
            $('#div_phone').css('display', 'none');
            $('#div_do_1').css('display', 'none');
            $('#props').css('display', 'none');
            $('#div_shipping').css('display', 'block');
            checkout_city($('#checkout_city').val());
        }
    });

    $('#do_2').live('click', function() {
        $('.city-warn').hide();
        $('.sh-warn').hide();
        var city = $('.citycard-checkout-wrap input[name="city"]').val();
        var shipping_method_code = $('.citycard-checkout-wrap input[name="shipping_method"]:checked').val();
        var dalee = true;
        if(!city) {
            $('.city-warn').show();
            dalee = false;
        }
        if(typeof(shipping_method_code) == 'undefined') {
            $('.sh-warn').show();
            dalee = false;
        }

        if (dalee) {
            $('#deliveryButton').removeClass('active');
            $('#paymentButton').addClass('active');
            $('#div_shipping').css('display', 'none');
            $('#div_payment').css('display', 'block');
        }
    });

    $('#checkout_city').live('blur', function() {
        if ($("#checkout_city").val() != '') {
            $('#div_methods_shipping').css('display', 'block');
            $('#div_comment').css('display', 'block');
        } else {
            $('#div_methods_shipping').css('display', 'none');
            $('#div_comment').css('display', 'none');
        }
    });
});
</script>
