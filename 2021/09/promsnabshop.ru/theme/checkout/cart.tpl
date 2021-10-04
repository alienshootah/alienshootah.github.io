<?php echo $header;

$quant_ch = true;
if ($client_type == 'card') {
    if ($price_min_order > 0) $price_min = $price_min_order;
    else $price_min = 3000;
} else {
    if ($company_type == 'individual') {
        if ($price_min_order > 0) $price_min = $price_min_order;
        else $price_min = 500;
    } else {
        if ($price_min_order > 0) $price_min = $price_min_order;
        else $price_min = 1000;
    }
}

if ($sakura_products) {
    if ($price_min_order > 0) $price_min = $price_min_order;
    else $price_min = 2000;
}

?>
<?php if ($attention) { ?>
<div class="attention"><?php echo $attention; ?><img src="catalog/view/theme/default/image/close.png" alt="" class="close" /></div>
<?php } ?>
<?php if ($success) { ?>
<div class="success"><?php echo $success; ?><img src="catalog/view/theme/default/image/close.png" alt="" class="close" /></div>
<?php } ?>
<?php if ($error_warning) { ?>
<div class="warning"><?php echo $error_warning; ?><img src="catalog/view/theme/default/image/close.png" alt="" class="close" /></div>
<?php } ?>
<?php echo $column_left; ?><?php echo $column_right; ?>
<div id="content" class="b-anchor"><?php echo $content_top; ?>
  <div class="breadcrumb">
        <a href="https://promsnabshop.ru/">Главная</a>
         &raquo; <a href="https://promsnabshop.ru/basket">Корзина покупок</a>
  </div>
  <h1><?php echo $heading_title; ?>
    <!--<?php if ($weight) { ?>
    &nbsp;(<?php echo $weight; ?>)
    <?php } ?>-->
  </h1>
  <div class="content" id="emty_cart" style="display: none;">Ваша корзина пуста!</div>
  <input type="hidden" name="pcategory_id" id="pcategory_id" value="<?php echo $pcategory_id; ?>">
  <input type="hidden" name="pbrand_id" id="pbrand_id" value="<?php echo $pbrand_id; ?>">
  <input type="hidden" name="price_order" id="price_order" value="<?php echo $price_order; ?>">
  <input type="hidden" name="price_min_order" id="price_min_order" value="<?php echo $price_min_order; ?>">

    <input type="hidden" name="term_delivery" id="term_delivery" value="<?php echo $term_delivery; ?>">
    <input type="hidden" name="delivery_express_price" id="delivery_express_price" value="<?php echo $delivery_express_price; ?>">
    <input type="hidden" name="delivery_courier_price" id="delivery_courier_price" value="<?php echo $delivery_courier_price; ?>">
    <input type="hidden" name="delivery_pvz_price" id="delivery_pvz_price" value="<?php echo $delivery_pvz_price; ?>">
    <input type="hidden" name="delivery_pek_price" id="delivery_pek_price" value="<?php echo $delivery_pek_price; ?>">
    <input type="hidden" name="delivery_not_size_price" id="delivery_not_size_price" value="<?php echo $delivery_not_size_price; ?>">

<div id="no_emty_cart">
<div class="basket" id="no_emty_cart">

    <div class="basket__content">
        <input type="hidden" name="company_type" id="company_type" value="<?php echo $company_type; ?>">
         <!--<center>
            <p class="choice-title" style="font-size: 16px;">Выберите свой статус:</p>
            <div class="radio-btn">
              <div>
                <input id="#radio1" type="radio" name="company_type" value="legal" <?php echo $company_type1; ?> onchange="Change_company_type(this)">
                <label for="#radio1" style="margin-bottom: 0px">Юридическое лицо</label>
              </div>
              <div>
                  <input id="#radio2" type="radio" name="company_type" value="individual" <?php echo $company_type2; ?> onchange="Change_company_type(this)">
                  <label for="#radio2" style="margin-bottom: 0px">Физическое лицо</label>
              </div>
              <div>
                  <input id="#radio3" type="radio" name="company_type" value="entrepreneur" <?php echo $company_type3; ?> onchange="Change_company_type(this)">
                  <label for="#radio3" style="margin-bottom: 0px">ИП</label>
              </div>
            </div>
        </center>-->
        <div class="basket__list">
          <?php $products_string = array(); $product_id = $product_quantity = $count_goods = 0 ;?>
          <?php foreach ($products as $product) {
            $product_id = $product['key'];
            $count_goods ++;
            $product_quantity = $product['quantity'];
            if ($client_type == 'card' && $product['quantity'] < 5) $quant_ch = false;
          ?>
            <div class="basket__item" id="product_<?php echo $product['key']; ?>">
                <div class="item__img">
                    <?php if ($product['thumb']) { ?><a href="<?php echo $product['href']; ?>"><img src="<?php echo $product['thumb']; ?>" alt="<?php echo $product['name']; ?>" title="<?php echo $product['name']; ?>" /></a><?php } ?>
                </div>
                <div class="item__descript">
                    <p>
                        <a href="<?php echo $product['href']; ?>"><?php echo $product['name']; ?></a>
                    </p>
                    <div class="article">
                        <?php if ($product['location']) { ?>Артикул: <?php echo $product['location']; ?><?php } ?>
                    </div>
                    <a href="javascript:void(0);" onclick="ProductRemove(<?php echo $product['key']; ?>);" class="delete">
                        <img src="catalog/view/theme/default/image/remove.png" alt="Удалить" title="Удалить"> Удалить
                    </a>
                </div>
                <div class="item__price" id="price_<?php echo $product['key']; ?>">
                    <?php echo $product['price']; ?>
                </div>
                <div class="item__quantity">
                     <span><i class="fa fa-minus" aria-hidden="true" onclick="if(client_type == 'card' && $('#quantity_<?php echo $product['key']; ?>').val() < 6) return; if (parseInt($('#quantity_<?php echo $product['key']; ?>').val()) > 1) { PriceChange(parseInt($('#quantity_<?php echo $product['key']; ?>').val()) - 1, <?php echo $product['key']; ?>); $('#quantity_<?php echo $product['key']; ?>').val(parseInt($('#quantity_<?php echo $product['key']; ?>').val()) - 1);}"></i></span>
                    <input type="text" value="<?php echo $product['quantity']; ?>" size="1" onkeyup="PriceChange(this.value, <?php echo $product['key']; ?>)" id="quantity_<?php echo $product['key']; ?>" name="quantity[<?php echo $product['key']; ?>]">
                    <span><i class="fa fa-plus" aria-hidden="true" onclick="PriceChange(parseInt($('#quantity_<?php echo $product['key']; ?>').val()) + 1, <?php echo $product['key']; ?>); $('#quantity_<?php echo $product['key']; ?>').val(parseInt($('#quantity_<?php echo $product['key']; ?>').val()) + 1);"></i></span>
                </div>
                <div class="item__price-total" id="total_<?php echo $product['key']; ?>">
                    <?php echo $product['total']; ?>
                </div>
            </div>
          <?php } ?>
        </div>
      <?php $total_pr = $total = 0; foreach ($totals as $total) {
          if ($total['title'] == 'Итого') {
            $total_pr = $total['text'];
            $total = $total['text'];
          }
          $total_pr = str_replace('.00', '', $total_pr);
          $total_pr = str_replace(' р.', '', $total_pr);
          $total_pr = str_replace(' ', '', $total_pr);
      }?>
        <div class="basket__content-btm">
          <p style="text-align: right; margin-bottom: 10px;<?php if ((int)$total_pr >= $price_min && $quant_ch) {?> display: none;<?php } else { ?> display: block; <?php } ?>" id="warning_cart"><strong style="color:red">Внимание !!</strong> Минимальная сумма заказа от <span id="price_min"><?php echo $price_min; ?></span> <span class="ruble-times" style="display: inline;">R</span><?php if ($price_min == '3000') echo "/5 шт.";?></p>
            <div class="basket__btns">
                <a href="" class="btn-white"><i class="fa fa-angle-double-left" aria-hidden="true"></i> Продолжить покупки</a>
                <div class="entity">
                    <div class="entity-box">
                        Я-юридическое лицо  
                    </div>
                </div>
                <span id="buttom_view" class="notwork">
               <?php if ((int)$total_pr >= $price_min && $quant_ch) {?>
                   <a href="javascript:void(0);" onclick="location.href='/order'" class="btn-blue"><span>Оформить заказ</span><span class="on-hover">Выставить счет</span></a>
                <?php } else { ?>
                   <a class="btn-blue" title="Внимание !! Минимальная сумма товара в заказе от <?php echo $price_min;?> р."><span>Оформить заказ</span><span class="on-hover">Выставить счет</span></a>
                <?php } ?>
                </span>
            </div>
        </div>
    </div>
    <div class="basket__sidebar">
        <div class="club-card">
            <p>Введите номер клубной карты:</p>
            <input type="text">
            <a href="" class="btn-blue">Пересчитать</a>
        </div>
        <div class="sum-price">
            <div class="name">
                Сумма:
            </div>
            <div class="result sum">
                <?php echo $total;?>
            </div>
        </div>
        <div class="delivery">
            <p>Доставка</p>
            <div class="delivery__list">
                <div class="delivery__item">
                    <div class="icon">
                        <i class="fa fa-paper-plane" aria-hidden="true"></i>
                    </div>
                    <div class="text">
                        Экспресс доставка: 650 р. за 3 часа (до двери) <br>
                        количество часов: 3
                    </div>
                </div>
                <div class="delivery__item">
                    <div class="icon">
                        <i class="fa fa-car" aria-hidden="true"></i>
                    </div>
                    <div class="text">
                        Доставка до подъезда: 500 р. <br>
                        количество рабочих дней: 1-3
                    </div>
                </div>
                <div class="delivery__item">
                    <div class="icon">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <div class="text">
                        Самовывоз: нет
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


  </div>
  </div>

  <div class="question-popup form-data-popup" style="display: none;">
      <div class="question-popup__exit">
            <div class="exit-left"></div>
            <div class="exit-right"></div>
        </div>
        <div class="question-popup__title">
            Введите ваш ИНН
        </div>
        <div class="question-popup__subtitle">
            <form action="">
                <div class="form-data__inn">
                    <input type="text">
                    <a href="" class="btn-blue">Проверить</a>
                </div>
            </form>
        </div>
        <div class="question-popup__hide">
            <div class="question-popup__title">
                Юридического лица с данным ИНН нет в нашей базе, просим Вас заполнить следующие поля для упрощения Вашей идентификации и выставления счёта.
            </div>
            <div class="question-popup__subtitle">
                <form action="">
                    <div class="form-data">
                        <input type="text" placeholder="Наименование компании*">
                        <div class="form-data__double">
                            <input type="text" placeholder="КПП">
                            <input type="text" placeholder="Код ОКПО">
                        </div>
                        <div class="form-data__double">
                            <input type="text" placeholder="БИК банка*">
                            <input type="text" placeholder="Расчётный счёт*">
                        </div>
                        <input type="text" placeholder="Юридический адрес*">
                        <input type="text" placeholder="Фактический адрес*">
                        <input type="text" placeholder="E-mail*">
                        <div class="form-data__save">
                            <a href="" class="btn-blue">Сохранить</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  </div>

<script>

    delivery_city($('#view_city').html());
    Change_company_type($('#company_type').val());

    $(document).ready(function() {
        $('.entity-box').live('click', function() {
            var company_type = $('#company_type').val();
            if (company_type == 'individual') {
                $('#company_type').val('legal');
                $('.entity-box').addClass('active');
                $('#buttom_view').removeClass('notwork');
            } else {
                $('#company_type').val('individual');
                $('.entity-box').removeClass('active');
                $('#buttom_view').addClass('notwork');
            }
            Change_company_type($('#company_type').val());
        });
    });
    /* Проверка, на флажок "юридическое лицо" */
    $(document).ready(function() {
        if($('.entity-box').hasClass('active')){
            $('#buttom_view').removeClass('notwork');
        } else {
            $('#buttom_view').addClass('notwork');
        }
    });

    var price_min = <?php echo $price_min;?>;
    var product_quantity = <?php echo $product_quantity;?>;
    var count_goods = <?php echo $count_goods;?>;
    var client_type = '<?php echo $client_type;?>';
    function PriceChange(e, product_id) {
        //var price_min = <?php echo $price_min;?>;
        if (e != '') {
            if (client_type == 'card' && parseInt(e) < 5) {
                $('#quantity_<?php echo $product['key']; ?>').val('5');
                return;
            }
            product_quantity = e;
            var send_data = {
                'quantity'  : e,
                'product_id': product_id,
            }
            $.ajax({
                type: 'POST',
                url : 'index.php?route=checkout/cart/price_option_change',
                data: send_data,
                dataType: 'json',
                success: function(json) {
                    if (json.success) {
                        //console.log(json.new_price.price + ' --- ' + json.new_price.total);
                        $('#price_' + product_id).html(json.new_price.price);
                        $('#total_' + product_id).html(json.new_price.total);
                        $('.sum').html(json.new_price.sum);
                        if (json.new_price.sum_int >= price_min) {
                            $('#buttom_view').html('<a href="javascript:void(0);" onclick="location.href=\'/order\'" class="btn-blue">Оформить заказ</a>');
                            $('#warning_cart').css('display', 'none');
                        } else {
                            $('#buttom_view').html('<a class="btn-blue disabled" title="Внимание !! Минимальная сумма заказа от <?php echo $price_min;?> р.">Оформить заказ</a>');
                            $('#warning_cart').css('display', 'block');
                        }
                    }
                }
            });
        }
    }

    function ProductRemove(product_id) {
        var send_data = {
            'product_id': product_id,
        }
        $.ajax({
            type: 'POST',
            url : 'index.php?route=checkout/cart/product_remove',
            data: send_data,
            dataType: 'json',
            success: function(json) {
                if (json.success) {
                    $('#product_' + product_id).css('display', 'none');
                    $('.sum').html(json.new_price.sum);
                    if (json.new_price.sum_int >= price_min) {
                        $('#buttom_view').html('<a href="javascript:void(0);" onclick="location.href=\'/order\'" class="btn-blue">Оформить заказ</a>');
                    } else {
                        $('#buttom_view').html('<a class="btn-blue disabled" title="Внимание !! Минимальная сумма заказа от <?php echo $price_min;?> р.">Оформить заказ</a>');
                    }
                    count_goods = count_goods - 1;
                    if (count_goods == 0) {
                        $('#no_emty_cart').css('display', 'none');
                        $('#emty_cart').css('display', 'block');
                    }
                }
            }
        });
    }

    function Change_company_type(e){

        var company_type = $('#company_type').val();
        if (company_type == 'legal') {
            $('.entity-box').addClass('active');
        } else {
            $('.entity-box').removeClass('active');
        }

        var send_data = {
            'company_type': company_type,
        }
        $.ajax({
            type: 'POST',
            url : 'index.php?route=checkout/cart/company_type',
            data: send_data,
            dataType: 'json',
            success: function(json) {
                if (json.success) {
                    var price_min = <?php echo $price_min;?>;
                    $('#price_min').html(price_min);
                    <?php if ($sakura_products) { ?>$('#warning_cart').html('<strong style="color:red">Внимание !!</strong> Минимальный сумма заказа для товаров SAKURA доступна от <span id="price_min">'+price_min+'</span> <span class="ruble-times" style="display: inline;">R</span>');<?php } ?>
                    PriceChange(product_quantity, <?php echo $product_id;?>);
                    $('#quantity_' + <?php echo $product_id;?>).val(product_quantity);
                }
            }
        });
    }
</script>

<?php echo $footer; ?>

