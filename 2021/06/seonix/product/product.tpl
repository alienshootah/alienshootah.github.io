<?php echo $header; ?><?php echo $column_left; ?>
  <div class="seonix-breadcrumb">
      <?php foreach ($breadcrumbs as $breadcrumb) { ?>
          <?php echo $breadcrumb['separator']; ?><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
      <?php } ?>
  </div>
  <?php
  $night_sale = false;
  $percent = 0;
  /*$now_time = time();
  $now_hour = (int) date("H", $now_time);
  $price_nal_night = $price_nal;
  if ($now_hour >= 0 && $now_hour <= 6) {
    $night_sale = true;
    $price_nal_tmp = str_replace(" ", "", $price_nal);
    $price_nal_night = (int) ($price_nal_tmp*100/95);
    $price_nal_night = number_format($price_nal_night, 2, ".", " ")." р";
  }*/
  ?>
  <?php if ($night_sale) {?>
  <br>
 <!--  <img src="catalog/view/theme/seonix/image/night-sale2.png" alt="" style="max-width: 100%"> -->
  <?php } ?>
  
<? if(!isset($_GET['path'])) $_GET['path']=0;?>
<? if($_GET['path'] !='639'){?>
    <input type="hidden" name="pcategory_id" id="pcategory_id" value="<?php echo $pcategory_id; ?>">
    <input type="hidden" name="pbrand_id" id="pbrand_id" value="<?php echo $brand; ?>">
    <input type="hidden" name="price_order" id="price_order" value="<?php echo $price_order; ?>">

    <input type="hidden" name="term_delivery" id="term_delivery" value="<?php echo $term_delivery; ?>">
    <input type="hidden" name="delivery_express_price" id="delivery_express_price" value="<?php echo $delivery_express_price; ?>">
    <input type="hidden" name="delivery_courier_price" id="delivery_courier_price" value="<?php echo $delivery_courier_price; ?>">
    <input type="hidden" name="delivery_pvz_price" id="delivery_pvz_price" value="<?php echo $delivery_pvz_price; ?>">
    <input type="hidden" name="delivery_pek_price" id="delivery_pek_price" value="<?php echo $delivery_pek_price; ?>">
    <input type="hidden" name="delivery_not_size_price" id="delivery_not_size_price" value="<?php echo $delivery_not_size_price; ?>">
    <div class="cart-item">
        <div class="cart-item__title">
            <h1><?php echo $heading_title; ?></h1>
            <div class="brand">
                <?php if ((int)$brand > 0) { ?><img src="catalog/view/theme/seonix/image/brands/<?php echo $brand ?>.jpg" alt=""><?php } ?>
            </div>
            <?php if (!empty($articul)) echo "<div class='article'>Артикул: $articul</div>";?>
            <div class="anchor">
                <?php $actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";?>
                <a href="<?php echo $actual_link;?>#first" class="btn-link"><strong>Посмотреть описание товара</strong></a>
            </div>
        </div>
        <div class="cart-item__left">
          <?php if ((int)$price_out != 1) { ?>
            <div class="cart-item__status">
                <div class="availability">
                    <?php if ((int)$price_order == 1) echo "На заказ"; elseif ((int)$price_sale > 0) echo "В наличии"; elseif ((int)$price > 0) echo "В наличии на складе"; else echo "Нет в наличии"; ?>
                </div>
            </div>
          <?php } ?>
            <div class="cart-item__carousel">
              <?php if ((int)$price_out != 1) { ?>
                <?php if ((int)$price_stock > 0) { ?>
                <div class="action__label">Акция</div>
                <?php } else if ((int)$price_sale > 0) {?>
                <div class="clearance-sale__label">Распродажа</div>
                <?php } else if ((int)$price_nov > 0) { ?>
                <div class="new__label">Новинка</div>
                <?php } else if ((int)$price_hit > 0) { ?>
                <div class="top__label">Топ</div>
                <?php } else if ((int)$price_pr5 > 0) { ?>
                <div class="clearance-sale__label" style="background: red;">Акция 1+1-5%</div>
                <?php } ?>
                <?php if ($night_sale) {?>
                <!--     <div class="sale night-sale">
                        <strong>Скидка: <br><strike style="color:#ccc; font-size: 12px;"><?php echo $price_nal_night; ?></strike><br><b><?php echo $price_nal; ?></b></strong>
                    </div> -->
                <?php } else {?>
                <?php if($price_vip > 0) {
                $percent = 100 - (int)(($price_new/$price_old)*100);
                ?>
                <?php if ((int)$price_sale == 0 && (int)$price_stock == 0 && (int)$price_hit == 0 && (int)$price_nov == 0 && (int)$price_pr5 == 0) { ?>
                <div class="sale">
                    <strong>SALE <br> <b><?php echo $price_vip; ?></b></strong>
                </div>
                <?php } ?>
                <?php }?>
                <?php }?>
              <?php } ?>
                <div class="slider cart-item-slider-for">
                    <div class="cart-item__img">
                        <a href="<?php echo $popup; ?>" title="<?php echo $heading_title; ?>" class="colorbox">
                            <img src="<?php echo $thumb; ?>" title="<?php echo $heading_title; ?>" alt="<?php echo $heading_title; ?>" id="image" />
                        </a>
                    </div>
                    <!--<div class="cart-item__img">
                        <a href="<?php echo $popup; ?>" title="<?php echo $heading_title; ?>" class="colorbox">
                            <img src="https://evrobonus.ru/image/cache/data/CS-C4127X-228x228.jpg" title="<?php echo $heading_title; ?>" alt="<?php echo $heading_title; ?>" id="image" />
                        </a>
                    </div>
                    <div class="cart-item__img">
                        <a href="<?php echo $popup; ?>" title="<?php echo $heading_title; ?>" class="colorbox">
                            <img src="https://evrobonus.ru/image/cache/data/CS-C4127X-228x228.jpg" title="<?php echo $heading_title; ?>" alt="<?php echo $heading_title; ?>" id="image" />
                        </a>
                    </div>
                    <div class="cart-item__img">
                        <a href="<?php echo $popup; ?>" title="<?php echo $heading_title; ?>" class="colorbox">
                            <img src="https://evrobonus.ru/image/cache/data/CS-C4127X-228x228.jpg" title="<?php echo $heading_title; ?>" alt="<?php echo $heading_title; ?>" id="image" />
                        </a>
                    </div>
                    <div class="cart-item__img">
                        <a href="<?php echo $popup; ?>" title="<?php echo $heading_title; ?>" class="colorbox">
                            <img src="https://evrobonus.ru/image/cache/data/CS-C4127X-228x228.jpg" title="<?php echo $heading_title; ?>" alt="<?php echo $heading_title; ?>" id="image" />
                        </a>
                    </div>
                    <div class="cart-item__img">
                        <a href="<?php echo $popup; ?>" title="<?php echo $heading_title; ?>" class="colorbox">
                            <img src="https://evrobonus.ru/image/cache/data/CS-C4127X-228x228.jpg" title="<?php echo $heading_title; ?>" alt="<?php echo $heading_title; ?>" id="image" />
                        </a>
                    </div>-->
                </div>
                <!--<div class="slider cart-item-slider-nav">
                    <div class="cart-item__nav">
                        <img src="https://evrobonus.ru/image/cache/data/CS-C4127X-228x228.jpg" title="<?php echo $heading_title; ?>" alt="<?php echo $heading_title; ?>" id="image" />
                    </div>
                    <div class="cart-item__nav">
                        <img src="https://evrobonus.ru/image/cache/data/CS-C4127X-228x228.jpg" title="<?php echo $heading_title; ?>" alt="<?php echo $heading_title; ?>" id="image" />
                    </div>
                    <div class="cart-item__nav">
                        <img src="https://evrobonus.ru/image/cache/data/CS-C4127X-228x228.jpg" title="<?php echo $heading_title; ?>" alt="<?php echo $heading_title; ?>" id="image" />
                    </div>
                    <div class="cart-item__nav">
                        <img src="https://evrobonus.ru/image/cache/data/CS-C4127X-228x228.jpg" title="<?php echo $heading_title; ?>" alt="<?php echo $heading_title; ?>" id="image" />
                    </div>
                    <div class="cart-item__nav">
                        <img src="https://evrobonus.ru/image/cache/data/CS-C4127X-228x228.jpg" title="<?php echo $heading_title; ?>" alt="<?php echo $heading_title; ?>" id="image" />
                    </div>
                    <div class="cart-item__nav">
                        <img src="https://evrobonus.ru/image/cache/data/CS-C4127X-228x228.jpg" title="<?php echo $heading_title; ?>" alt="<?php echo $heading_title; ?>" id="image" />
                    </div>
                </div>-->
            </div>
        </div>
        <div class="cart-item__right">
            <div class="cart-item__price">
                <div class="attantion">
                    <?php if ((int)$price_out == 1) echo "Внимание! Данный товар снят с производства"; elseif ((int)$price_order1 == 1) echo "Внимание! Товара нет в наличии, под заказ"; elseif((int)$price_min_order > 0 && (int)$price < (int)$price_min_order) echo "Внимание! Минимальная сумма заказа ".(int)$price_min_order." руб"; else echo "Внимание! Указана стоимость при заказе на сайте"; ?>
                </div>
                <?php if ((int)$price_pre > 0 && (int)$price_out != 1) { ?>
                 <div class="prepayment">
                    <img src="catalog/view/theme/seonix/image/wallet.png" alt=""> Требуется предоплата
                </div>
                <?php } ?>
                <?php if ((int)$price_out != 1) { ?>
                <div class="price">
                    <?php if ((int)$price > 0) { ?>
                    <div class="price__item">
                        <span class="word-price">Цена с НДС:</span>
                        <span class="color-price"><?php if ($price_old > 0) {?><strike><?php echo number_format($price_old, 0, '.', ' ').'<span class="ruble-times" style="display: inline;">R</span>'; ?></strike><?php } ?><?php echo $price; ?><? if ($percent > 0) {?><i>Скидка <span class="dp">-<?echo $percent;?>%</span> </i><?}?></span>
                    </div>
                    <?php } ?>
                    <?php if ((int)$price_pr5 > 0 && !$sakura_products && (int)$price_sale == 0) { ?>
                    <div class="price__item">
                        <span class="word-price">Цена от 2 шт.:</span>
                        <span class="color-price action"><?php $price5 = (int)$price_int*5/100; $price_pr5 = (int)((int)$price_int - $price5); echo number_format($price_pr5, 0, '.', ' ').'<span class="ruble-times" style="display: inline;">R</span>'; ?></span>
                    </div>
                    <?php } elseif ((int)$price_card > 0 && !$sakura_products && (int)$price_sale == 0) { ?>
                    <div class="price__item">
                        <span class="word-price">Цена от 5 шт.:</span>
                        <span class="color-price action"><?php echo $price_card; ?></span>
                    </div>
                    <?php } ?>
                </div>
                <div style="text-align: right;"><a class="ask__question" href="javascript:void(0);" style="font-weight: 500; font-size: 16px; line-height: 19px; color: #000;">Задать вопрос по товару</a></div>
                <div class="wholesale">
                    <a href="javascript:void(0);">Узнать условия для юр. и физ. лиц</a>
                    <div class="wholesale-popup">
                        <div class="question-popup__exit">
                            <div class="exit-left"></div>
                            <div class="exit-right"></div>
                        </div>
                    <?php if ((int)$price_min_order > 0 && (int)$price < (int)$price_min_order) { ?>
                        <p>Минимальная сумма заказа для юр. лиц - <strong><?php echo (int)$price_min_order; ?> руб.</strong></p>
                        <p>
                            Нажмите на "Купить" выберете статус "Юридическое лицо", нажмите на "Оформить заказ", заполните форму заказа, на указанный e-mail вам придет счет. 
                        </p>
                        <p>Минимальная сумма заказа для физ. лиц - <strong><?php echo (int)$price_min_order; ?> руб.</strong></p>
                        <p>Оптовая цена доступна при сумме заказа от - <strong><?php if ((int)$price_min_order > 3000) echo (int)$price_min_order; else echo '3000';?> руб.</strong> и <strong>5шт.</strong>товара одного артикула</p>
                    <?php } elseif ($sakura_products) { ?>
                        <p>Минимальная сумма заказа товаров SAKURA для юр. лиц - <strong>2000 руб.</strong></p>
                        <p>
                            Нажмите на "Купить" выберете статус "Юридическое лицо", нажмите на "Оформить заказ", заполните форму заказа, на указанный e-mail вам придет счет. 
                        </p>
                        <p>Минимальная сумма заказа товаров SAKURA для физ. лиц - <strong>2000 руб.</strong></p>
                    <?php } else { ?>
                        <p>Минимальная сумма заказа для юр. лиц - <strong>1000 руб.</strong></p>
                        <p>
                            Нажмите на "Купить" выберете статус "Юридическое лицо", нажмите на "Оформить заказ", заполните форму заказа, на указанный e-mail вам придет счет. 
                        </p>
                        <p>Минимальная сумма заказа для физ. лиц - <strong>500 руб.</strong></p>
                        <p>Оптовая цена доступна при сумме заказа от - <strong>3000 руб.</strong> и <strong>5шт.</strong>товара одного артикула</p>
                    <?php } ?>
                    </div>
                </div>
                <div class="buy">
                    <div class="buy__quantity">
                        <span><i class="fa fa-minus" aria-hidden="true" onclick="if (parseInt($('#quantity').val()) > 1) $('#quantity').val(parseInt($('#quantity').val()) - 1);"></i></span>
                        <input type="text" value="1" size="1" onkeyup="PriceChange(this.value, <?php echo $product_id; ?>)" id="quantity">
                        <span><i class="fa fa-plus" aria-hidden="true" onclick="$('#quantity').val(parseInt($('#quantity').val()) + 1);"></i></span>
                    </div>
                    <div class="buy__btn">
                        <a href="javascript:void(0);" class="btn-blue" onclick="addToCart_product();">
                            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.776884 1.48571H3.00394L6.17623 12.4552C6.26685 12.7771 6.57761 13 6.9272 13H16.6771C16.9879 13 17.2598 12.8267 17.3892 12.5543L20.937 4.75429C21.0406 4.51906 21.0147 4.25906 20.8722 4.04857C20.7298 3.83808 20.4838 3.71429 20.2248 3.71429H9.45208C9.02479 3.71429 8.67519 4.04857 8.67519 4.45714C8.67519 4.86571 9.02479 5.2 9.45208 5.2H19.0337L16.1592 11.5143H7.50987L4.33762 0.544776C4.247 0.222857 3.93625 0 3.58665 0H0.776884C0.349598 0 0 0.334286 0 0.742857C0 1.15143 0.349598 1.48571 0.776884 1.48571Z" fill="white"></path>
                                <path d="M6 19C7.10295 19 8 18.103 8 17C8 15.8971 7.10295 15 6 15C4.89705 15 4 15.897 4 16.9999C4 18.1029 4.89705 19 6 19Z" fill="white"></path>
                                <path d="M16.9932 19C17.0374 19 17.0963 19 17.1405 19C17.6708 18.9559 18.1569 18.7209 18.5105 18.3096C18.864 17.913 19.0261 17.3988 18.9966 16.8553C18.9229 15.7683 17.9655 14.931 16.8607 15.0045C15.7558 15.078 14.9309 16.0474 15.0046 17.1344C15.0782 18.1774 15.9473 19 16.9932 19Z" fill="white"></path>
                            </svg>
                            Купить
                        </a>
                        <a href="javascript:void(0);" class="btn-blue on-hover" onclick="addToCart_product();">
                            Выставить счет
                        </a>
                    </div>
                </div>
                <?php } ?>
            </div>
<script>
    delivery_city($('#view_city').html());
</script>
            <?php if ((int)$price_out != 1) { ?>
            <div class="cart-item__info">
                <div class="cart-item__border">
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
<!--                     <div class="payment">
                        <ul>
                            <li><img src="catalog/view/theme/seonix/image/sber.svg" alt=""></li>
                            <li><img src="catalog/view/theme/seonix/image/visa-pay-logo.svg" alt=""></li>
                            <li><img src="catalog/view/theme/seonix/image/webmoney-paying-logo.svg" alt=""></li>
                        </ul>
                    </div> -->
                    <div class="choice-address__box" id="choice_address" style="display: none;">
                        <a href="javascript:void(0);" class="choice-address">Посмотреть все варианты</a>
                    </div>
                  <?php if ((int)$price_order == 1) { ?>
                    <div class="question-box__btn">
                        <a href="javascript:void(0);" class="special-delivery">Запрос срока доставки</a>
                    </div>
                  <?php } else {?>
                    <div class="question-box__btn">
                        <a href="javascript:void(0);" class="delivary_city">Изменить город доставки</a>
                    </div>
                  <?php } ?>
                    <div class="question-box__btn">
                        <a href="javascript:void(0);" class="special-price">Запрос специальной цены</a>
                    </div>
                    <div class="cards-box" style="text-align: center;">
                        <img src="catalog/view/theme/seonix/image/pays.png" alt="">
                        <img src="catalog/view/theme/seonix/image/halvacard.png" alt="">
                    </div>
                </div>
            </div>
            <?php } ?>
        </div>
    </div>
    <div class="choice-address-popup">
        <div class="choice-address-popup__exit">
            <div class="exit-left"></div>
            <div class="exit-right"></div>
        </div>
        <div class="choice-delivery__row">
            <div class="choice-delivery__list" style="min-width: 100%;">
                <div class="choice-delivery__item choice-delivery__head">
                    <div class="choice-delivery__logo">
                       
                    </div>
                    <div class="choice-delivery__name">
                       
                    </div>
                    <div class="choice-delivery__address">
                        Адрес доставки
                    </div>
                    <div class="choice-delivery__days">
                        Количество дней
                    </div>
                    <div class="choice-delivery__cost">
                        Стоимость
                    </div>
                </div>
                <a class="choice-delivery__item">
                    <div class="choice-delivery__logo">
                        <img src="catalog/view/theme/seonix/image/Scdek.png" alt="">
                    </div>
                    <div class="choice-delivery__name">
                        CDEK
                    </div>
                    <div class="choice-delivery__address">
                        <span>Терминал:</span><i>ул. Пластунская, 92</i>
                    </div>
                    <div class="choice-delivery__days">
                        5 дней
                    </div>
                    <div class="choice-delivery__cost">
                        420<span class="ruble-times" style="display: inline;">R</span>
                    </div>
                </a>
                <a class="choice-delivery__item">
                    <div class="choice-delivery__logo">
                        <img src="catalog/view/theme/seonix/image/Scdek.png" alt="">
                    </div>
                    <div class="choice-delivery__name">
                        CDEK
                    </div>
                    <div class="choice-delivery__address">
                        <span>Терминал:</span><i>ул. Пластунская, 92</i>,<i>ул. Пластунская, 92</i>
                    </div>
                    <div class="choice-delivery__days">
                        365 дней
                    </div>
                    <div class="choice-delivery__cost">
                        10 420<span class="ruble-times" style="display: inline;">R</span>
                    </div>
                </a>
            </div>
            <!--<div class="choice-delivery__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511627.435513278!2d29.53027654624453!3d59.93969737048817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINCg0L7RgdGB0LjRjw!5e0!3m2!1sru!2sua!4v1575227263488!5m2!1sru!2sua" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
            </div>-->
        </div>
    </div>
    <?php if ($products_similar) { ?>
    <div class="heading">
        <h2>Похожие товары</h2>
    </div>
    <div class="items__carousel">
         <?php foreach ($products_similar as $product) { ?>
        <div class="main-other-content-item">
          <?php if ((int)$product['price_out'] != 1) {?>
            <?php if ((int)$product['price_stock'] > 0) {?>
            <div class="action__label">Акция</div>
            <?php } else if ((int)$product['price_sale'] > 0) {?>
            <div class="clearance-sale__label">Распродажа</div>
            <?php } else if ((int)$product['price_nov'] > 0) { ?>
            <div class="new__label">Новинка</div>
            <?php } else if ((int)$product['price_hit'] > 0) { ?>
            <div class="top__label">Топ</div>
            <?php } else if ((int)$product['price_pr5'] > 0) { ?>
            <div class="clearance-sale__label" style="background: red;">1+1-5%</div>
            <?php } ?>
          <?php } ?>
            <a class="main-other-content-item__img" href="<?php echo $product['href']; ?>"><img src="<?php echo $product['thumb']; ?>"></a>
            <div class="main-other-content-item-header main-other-content-item__title">
                <a href="<?php echo $product['href']; ?>"><?php echo $product['name']; ?></a>
            </div>
            <a class="main-other-content-item__price" href="<?php echo $product['href']; ?>">
              <?php if ((int)$product['price_out'] == 1) { ?>
                    <div class="not-available">Снят с производства</div>
              <?php } else { ?>
                <?php if ((int)$product['price'] == 0) {?>
                    <div class="not-available">Нет в наличии</div>
                <?php } else { ?>
                <?php if ($product['price_vip'] == 0) { ?>
                    <div class="roz_price">Цена <?php echo $product['price']; ?></div>
                <?php } ?>
                <?php if ($product['price_vip'] > 0) { $percent = 100 - (int)(($product['price_new']/$product['price_old'])*100);?>
                    <div class="vip_price">
                        <?php if ((int)$product['price_sale'] == 0 && (int)$product['price_stock'] == 0 && (int)$product['price_hit'] == 0 && (int)$product['price_nov'] == 0 && (int)$product['price_pr5'] == 0){ ?>
                        <div class="vip_price__sale">sale</div>
                        <?php } ?>
                        <? if ($percent > 0) {?><strike><?php echo number_format($product['price_old'], 0, '.', ' ').'<span class="ruble-times" style="display: inline;">R</span>'; ?></strike><br><?}?>
                        <?php echo $product['price_vip']; ?><br>
                        <i>Скидка <? if ($percent > 0) {?> <span class="dp">-<?echo $percent;?>%</span>  <?}?></i>
                    </div>
                <?php } ?>
                <?php if ($product['price_pr5'] > 0) { $price5 = (int)$product['price_int']*5/100; $price_pr55 = (int)((int)$product['price_int'] - $price5); ?>
                    <div class="opt_price"> <?php echo number_format($price_pr55, 0, '.', ' ').'<span class="ruble-times" style="display: inline;">R</span>';; ?> от 2 шт</div>
                <?php } elseif ($product['price_card'] > 0) { ?>
                    <div class="opt_price"> <?php echo $product['price_card']; ?> от 5 шт</div>
                <?php } ?>
                <?php } ?>
              <?php } ?>
            </a>
            <a href="<?php echo $product['href']; ?>" class="button main-other-content-item__btn"><?php if ((int)$product['price_out'] != 1) echo "Оформить заказ"; else echo "Смотреть товар";?></a>
        </div>
         <?php } ?>
    </div>
    <?php } ?>
</div>
<div class="description__bg">
    <div class="wrapper">
        <div class="description">
           <div class="tabs2">
               <ul class="tabNavigation">
                   <li><a class="" href="#first">Описание</a></li>
                   <li><a class="" href="#third">Правила оплаты</a></li>
                   <li><a class="" href="#fifth">Как сделать заказ</a></li>
               </ul>
               <div id="first">
                   <?php echo $description; ?>
               </div>
               <div id="second">
                        Доставка курьерской компанией - 500 руб. 
                       <div class="universal-tooltip normal">?
                         <span>
                             1- 3 рабочих дня
                         </span>
                       </div>
                       <br><br>
                        Экспресс доставка - 650 руб. 
                       <div class="universal-tooltip normal">?
                         <span>
                             В течении 3 часов, объемный вес до 5кг, исходя из технической возможности
                         </span>
                       </div>
                       <br><br>
                       Доставка курьерской компанией СДЭК по Росcии.
                       <div class="universal-tooltip normal">?
                         <span>
                             1- 5 рабочих дня
                         </span>
                       </div>
               </div>
               <div id="third">
                        <h2 style="text-align:center">
                            Товары нашего магазина Вы можете оплатить по безналичному расчету для юридических лиц и банковской картой следующих платежных систем:</h2>
                        <p style="text-align:center">
                            <span><img alt="Оплата Braun" src="https://braun-russia.ru/catalog/view/theme/default/image/information/pays.png" style="box-sizing: border-box; border: 0px; vertical-align: middle;"><img src="https://braun-russia.ru/image/catalog/halvacard.png" style="box-sizing: border-box; border: 0px; vertical-align: middle; width: 66px;"></span></p>
                        <div class="about-page__attention" style="max-width: 600px; margin:0 auto 20px">
                            <p>
                                <span>К оплате принимаются карты, выпущенные банками, которые находятся на территории РФ. Обработка платежей проводится процессинговым центром Банка.</span></p>
                        </div>
                        <h2 style="text-align:center">
                            Банковский перевод для Юридических лиц <br>
                    Описание процесса оплаты по счету</h2><br>
                    <p>Выберете статус "Юридическое лицо", заполните необходимые поля в форме, выберете способ доставки, после отправки счета с вами свяжется менеджер и согласует детали.</p>
                    <p>Срок действия счета и резерва 3 (три) рабочих дня. Счет на оплату содержит необходимые для оплаты реквизиты. В счете выделен налог на добавленную стоимость (НДС). В день поступления денежных средств на наш расчётный счёт, мы подготовим оплаченный заказ к отгрузке. На следующий рабочий день происходит доставка или самовывоз купленного товара. Срок поставки заранее обговаривается менеджером, ведущим ваш заказ. Вместе с товаром вы получите полный пакет необходимых документов (оригинал счёта, акт приёма-сдачи работ, товарно-транспортную накладную, счёт-фактуру). Для получения товара, оплаченного по безналичному расчету компанией, в обязательном порядке необходима доверенность на получение материальных ценностей или печать организации.</p>
                        <h2 style="text-align:center">
                            Описание процессa оплаты картой на сайте</h2>
                            <br>
                        <p>
                            <span>При оформлении заказа в нашем магазине, для выбора способа оплаты с помощью карты Вам необходимо нажать кнопку «Картой на сайте» в Корзине, при этом система перенаправит Вас на защищенную страницу Банка для ввода реквизитов карты.</span></p>
                        <p>
                            <span>После того, как Вы полностью ввели данные и нажали кнопку «Продолжить», система уведомит Вас о результатах проведения транзакции. В случае отказа в авторизации карты Вы сможете повторить процедуру оплаты.</span></p>
                        <h2 style="text-align:center">
                            Описание процесса передачи данных</h2>
                            <br>
                        Наш Магазин не собирает и не хранит данных о банковских картах клиента. При оплате заказа с помощью пластиковой карты все данные вводятся на защищенной странице сайта банка. Для осуществления платежа Вам потребуется сообщить данные Вашей пластиковой карты. Передача этих сведений производится с соблюдением всех необходимых мер безопасности по защищенному каналу (протокол SSL 128).

                        <p>
                            <span>Безопасность электронных платежей обеспечивается на уровне мировых стандартов, сертифицированных международными платежными системами с использованием технологий 3D-Secure: Verified by Visa и SecureCode от MasterCard. 3-D Secure используется как дополнительный уровень безопасности для онлайн-кредитных и дебетовых карт. Это достигается за счет того, что при оплате покупки по технологии 3-D Secure аутентификация владельца карты осуществляется на специальном сервере банка, выпустившего карту. Для аутентификации клиента требуется ввести пароль, известный только владельцу карты. Технология 3-D Secure поддерживается не всеми картами, что бы выяснить поддерживает ли ваша карта эти технологии защиты обратитесь в службу поддержки вашего банка.</span></p>
               </div>
               <div id="fourth">
                   Товар находится в наличии на основном складе, срок доставки на адрес указанный при формировании заказа или в пункт выдачи от 1 до 5 рабочих дней. <br>
                   Внимание!!! После совершения заказа с вами свяжется менеджер и согласует детали.
               </div>
               <div id="fifth">
                   <strong>Как сделать заказ</strong><br><br>
                   Для того, чтобы оформить заказ, Вам необходимо совершить несколько простых действий: <br><br>
                    
                   <b>1. Выбираем товары</b><br><br>
                   В поле "Поиск по сайту" вводим название товара, артикул, номер картриджа или модель техники. Для Вас откроется страница, где представлены товары с указанием цены, а также небольшой фотографией и несколькими наиболее важными характеристиками.  <br><br>
                   <b>2. Кладем товары в корзину</b><br><br>
                   Выбрав понравившуюся модель, нажмите кнопку «Купить». Товар автоматически отправится в Вашу корзину. Вы можете положить в свою корзину любое количество товаров. <br><br>
           
                   <b>3. Ваша корзина</b><br><br>
                   Для оформления заказа перейдите в раздел «Корзина». Просмотрите ее содержимое. Вы можете изменить количество товара в корзине или удалить то, что Вам не нужно. <br><br>
           
                   <b>4. Оформляем заказ</b><br><br>
                   Для завершения оформления заказа Вам необходимо нажать на кнопку «Оформить заказ», ввести свои контактные данные. После нажатия кнопки "Отправить заказ", он будет передан для оформления нашему консультанту, после чего он сам Вам перезвонит и уточнит все детали заказа. <br><br>
               </div>
           </div>
           </div>
    </div>
</div>
<div class="wrapper">
    <?php if ($products_related) { ?>
    <div class="heading">
        <h2>Вместе с этим товаром покупают</h2>
    </div>
    <div class="items__carousel">
         <?php foreach ($products_related as $product) { ?>
        <div class="main-other-content-item">
          <?php if ((int)$product['price_out'] != 1) {?>
            <?php if ((int)$product['price_stock'] > 0) {?>
            <div class="action__label">Акция</div>
            <?php } else if ((int)$product['price_sale'] > 0) {?>
            <div class="clearance-sale__label">Распродажа</div>
            <?php } else if ((int)$product['price_nov'] > 0) { ?>
            <div class="new__label">Новинка</div>
            <?php } else if ((int)$product['price_hit'] > 0) { ?>
            <div class="top__label">Топ</div>
            <?php } else if ((int)$product['price_pr5'] > 0) { ?>
            <div class="clearance-sale__label" style="background: red;">1+1-5%</div>
            <?php } ?>
          <?php } ?>
            <a class="main-other-content-item__img" href="<?php echo $product['href']; ?>"><img src="<?php echo $product['thumb']; ?>"></a>
            <div class="main-other-content-item-header main-other-content-item__title">
                <a href="<?php echo $product['href']; ?>"><?php echo $product['name']; ?></a>
            </div>
            <a class="main-other-content-item__price" href="<?php echo $product['href']; ?>">
              <?php if ((int)$product['price_out'] == 1) { ?>
                    <div class="not-available">Снят с производства</div>
              <?php } else { ?>
                <?php if ((int)$product['price'] == 0) {?>
                    <div class="not-available">Нет в наличии</div>
                <?php } else { ?>
                <?php if ($product['price_vip'] == 0) { ?>
                    <div class="roz_price">Цена <?php echo $product['price']; ?></div>
                <?php } ?>
                <?php if ($product['price_vip'] > 0) { $percent = 100 - (int)(($product['price_new']/$product['price_old'])*100);?>
                    <div class="vip_price">
                        <?php if ((int)$product['price_sale'] == 0 && (int)$product['price_stock'] == 0 && (int)$product['price_hit'] == 0 && (int)$product['price_nov'] == 0 && (int)$product['price_pr5'] == 0){ ?>
                        <div class="vip_price__sale">sale</div>
                        <?php } ?>
                        <? if ($percent > 0) {?><strike><?php echo number_format($product['price_old'], 0, '.', ' ').'<span class="ruble-times" style="display: inline;">R</span>'; ?></strike><br><?}?>
                        <?php echo $product['price_vip']; ?><br>
                        <i>Скидка <? if ($percent > 0) {?> <span class="dp">-<?echo $percent;?>%</span>  <?}?></i>
                    </div>
                <?php } ?>
                <?php if ($product['price_pr5'] > 0) { $price5 = (int)$product['price_int']*5/100; $price_pr55 = (int)((int)$product['price_int'] - $price5); ?>
                    <div class="opt_price"> <?php echo number_format($price_pr55, 0, '.', ' ').'<span class="ruble-times" style="display: inline;">R</span>';; ?> от 2 шт</div>
                <?php } elseif ($product['price_card'] > 0) { ?>
                    <div class="opt_price"> <?php echo $product['price_card']; ?> от 5 шт</div>
                <?php } ?>
                <?php } ?>
              <?php } ?>
            </a>
            <a href="<?php echo $product['href']; ?>" class="button main-other-content-item__btn"><?php if ((int)$product['price_out'] != 1) echo "Оформить заказ"; else echo "Смотреть товар";?></a>
        </div>
         <?php } ?>
    </div>
    <?php } ?>
    <?php if ($products_views) { ?>
    <div class="heading">
        <h2>Вы просматривали</h2>
    </div>
    <div class="items__carousel">
         <?php foreach ($products_views as $product) { ?>
        <div class="main-other-content-item">
          <?php if ((int)$product['price_out'] != 1) {?>
            <?php if ((int)$product['price_stock'] > 0) {?>
            <div class="action__label">Акция</div>
            <?php } else if ((int)$product['price_sale'] > 0) {?>
            <div class="clearance-sale__label">Распродажа</div>
            <?php } else if ((int)$product['price_nov'] > 0) { ?>
            <div class="new__label">Новинка</div>
            <?php } else if ((int)$product['price_hit'] > 0) { ?>
            <div class="top__label">Топ</div>
            <?php } else if ((int)$product['price_pr5'] > 0) { ?>
            <div class="clearance-sale__label" style="background: red;">1+1-5%</div>
            <?php } ?>
          <?php } ?>
            <a class="main-other-content-item__img" href="<?php echo $product['href']; ?>"><img src="<?php echo $product['thumb']; ?>"></a>
            <div class="main-other-content-item-header main-other-content-item__title">
                <a href="<?php echo $product['href']; ?>"><?php echo $product['name']; ?></a>
            </div>
            <a class="main-other-content-item__price" href="<?php echo $product['href']; ?>">
              <?php if ((int)$product['price_out'] == 1) { ?>
                    <div class="not-available">Снят с производства</div>
              <?php } else { ?>
                <?php if ((int)$product['price'] == 0) {?>
                    <div class="not-available">Нет в наличии</div>
                <?php } else { ?>
                <?php if ($product['price_vip'] == 0) { ?>
                    <div class="roz_price">Цена <?php echo $product['price']; ?></div>
                <?php } ?>
                <?php if ($product['price_vip'] > 0) { $percent = 100 - (int)(($product['price_new']/$product['price_old'])*100);?>
                    <div class="vip_price">
                        <?php if ((int)$product['price_sale'] == 0 && (int)$product['price_stock'] == 0 && (int)$product['price_hit'] == 0 && (int)$product['price_nov'] == 0 && (int)$product['price_pr5'] == 0){ ?>
                        <div class="vip_price__sale">sale</div>
                        <?php } ?>
                        <? if ($percent > 0) {?><strike><?php echo number_format($product['price_old'], 0, '.', ' ').'<span class="ruble-times" style="display: inline;">R</span>'; ?></strike><br><?}?>
                        <?php echo $product['price_vip']; ?><br>
                        <i>Скидка <? if ($percent > 0) {?> <span class="dp">-<?echo $percent;?>%</span>  <?}?></i>
                    </div>
                <?php } ?>
                <?php if ($product['price_pr5'] > 0) { $price5 = (int)$product['price_int']*5/100; $price_pr55 = (int)((int)$product['price_int'] - $price5); ?>
                    <div class="opt_price"> <?php echo number_format($price_pr55, 0, '.', ' ').'<span class="ruble-times" style="display: inline;">R</span>';; ?> от 2 шт</div>
                <?php } elseif ($product['price_card'] > 0) { ?>
                    <div class="opt_price"> <?php echo $product['price_card']; ?> от 5 шт</div>
                <?php } ?>
                <?php } ?>
              <?php } ?>
            </a>
            <a href="<?php echo $product['href']; ?>" class="button main-other-content-item__btn"><?php if ((int)$product['price_out'] != 1) echo "Оформить заказ"; else echo "Смотреть товар";?></a>
        </div>
         <?php } ?>
    </div>
    <?php } ?>
<!-- 
    <div class="popular">
        <h2>Популярные категории и услуги от CityCard.guru</h2>
        <div>
            <a href="https://evrobonus.ru/remont_ofisnoy_tehniki/solutions-mfu">
                <div class="img">
                    <img src="https://evrobonus.ru/catalog/view/theme/seonix/image/mfu.jpg" alt="">
                    <img src="catalog/view/theme/seonix/image/setting.png" alt="" class="setting">
                </div>
                <div class="text">
                    Ремонт МФУ
                </div>
            </a>
        </div>
        <div>
            <a href="https://evrobonus.ru/videonablyudenie">
                <div class="img">
                    <img src="catalog/view/theme/seonix/image/ystanovka_vide_03.png" alt="">
                    <img src="catalog/view/theme/seonix/image/setting.png" alt="" class="setting">
                </div>
                <div class="text">
                    Установка видеонаблюдения
                </div>
            </a>
        </div>
        <div>
            <a href="https://evrobonus.ru/remont_ofisnoy_tehniki/remont-plotterov">
                <div class="img">
                    <img src="https://evrobonus.ru/catalog/view/theme/seonix/image/pl.jpg" alt="">
                    <img src="catalog/view/theme/seonix/image/setting.png" alt="" class="setting">
                </div>
                <div class="text">
                   Ремонт плоттеров
                </div>
            </a>
        </div>
        <div>
            <a href="https://evrobonus.ru/remont_ofisnoy_tehniki/solutions-printer">
                <div class="img">
                    <img src="https://evrobonus.ru/catalog/view/theme/seonix/image/pic_printer.png" alt="">
                    <img src="catalog/view/theme/seonix/image/setting.png" alt="" class="setting">
                </div>
                <div class="text">
                    Ремонт принтера
                </div>
            </a>
        </div>
    </div> -->
</div>
<?}?>


<div class="shadow"></div>
<div id="wannacheaper">
    <div class="title" style="text-align: center;">Заявка на получение скидки</div>
      <div style="margin:0;padding:0;display:inline"><input name="utf8" value="✓" type="hidden">
        <input name="authenticity_token"  type="hidden">
      </div>
      <div class="catalogue-photo">
          <input name="items[]" value="27962" type="hidden">
          <input name="count[]" value="1" type="hidden">
          <div class="catalogue-photo-item" style="text-align: center;">
            <div class="catalogue-photo-item-right" style="float: none; display: inline-block;">
                <div class="catalogue-photo-item-prop">
                    <label style="font-size: 18px; font-weight: bold; padding: 5px;">Желаемая цена</label>
                    <input id="customer_price" name="customer_price" style="font-size: 18px; margin: 5px 5px 0; width: 95px;" value="" type="text">
                </div>
            </div>
            </div>
        </div>
        <div class="inp-wrap" style="margin-top: 10px;">
            <span class="inp-name"><label for="order_customer_name">Ваше имя *</label></span>
            <input id="customer_name" name="customer_name" type="text">
        </div>
         <div class="inp-wrap" >
            <span class="inp-name"><label for="company">ИНН организации: *</label></span>
            <input id="customer_company" name="customer_company" type="text">
        </div>
        <div class="inp-wrap">
            <span class="inp-name"><label>Email для связи: *</label></span>
            <input class="mask-input email-input" id="customer_email" name="customer_email" onblur="$(this).removeClass(&quot;error&quot;);" plholder="Ваш e-mail" type="text">
        </div>
        <div class="inp-wrap">
            <span class="inp-name"><label>Телефон для свзяи: *</label></span>
            <input class="mask-input cell-input" id="customer_phone" name="customer_phone" plholder="Телефон для связи" style="color: rgb(0, 0, 0);" type="text">
        </div>
        <div class="inp-wrap">
            <span class="inp-name"><label for="order_customer_comments">Комментарий:</label></span>
            <input id="customer_comments" name="customer_comments" value="" type="text">
        </div>
        <div class="inp-wrap" style="text-align: center">
       <button name="button" type="submit"  id="customer_button-citycard-application">Отправить</button>
       <button id="reset" name="button"  type="reset">Закрыть</button>
       </div>
</div>
<div class="formforcard">
  <div class="exit">X</div>
  <h3>Быстрый заказ</h3>
  <div class="radio-btn">
      <div>
        <label for="#radio1">Юридическое лицо</label>
        <input name="company_type" type="radio" value="legal">
      </div>
      <div>
          <label for="#radio2">Физическое лицо</label>
          <input name="company_type" type="radio" value="individual">
      </div>
      <div>
          <label for="#radio3">Индивидуальный предприниматель*</label>
          <input name="company_type" type="radio" value="entrepreneur">
      </div>
  </div>
  <label for="name">Ваше имя*</label>
  <input  type="text" name="name" id="name">
  <label for="company">ИНН <small>(для юр. лиц и частных предпринемателей)</small></label>
  <input id="company" name="company" type="text">
  <label for="tel">Ваш номер телефона <span>*</span></label>
  <input type="text" name="tel" id="tel">
  <label for="email">Ваш E-Mail <span>*</span></label>
  <input type="text" name="email" id="email">
  <input name="file" type="file" id="uploadfile" class="inputbox" style="margin-top:18px;">
  <label for="description">Комментарий</label>
  <textarea name="description" id="description" class="inputbox"></textarea>
  <input name="submitButton" value="Отправить заявку" class="button" type="submit" id="button-citycard-application">
  <input type="hidden" name="form_type" id="form_type" value="">
  <input type="hidden" name="product_id" id="product_id" value="<?php echo $product_id; ?>">
  <input type="hidden" name="product_name" id="product_name" value="<?php echo $heading_title; ?>">
</div>

<div id="notification_basket">
    <div class="success" style="display: none;">
        <div class="success__title">
            <img src="https://evrobonus.ru/catalog/view/theme/seonix/image/ico-check.png" alt=""> Товар добавлен в корзину!
        </div>
        <div class="success__product">
            <div class="product__img">
                <img src="<?php echo $thumb; ?>" title="<?php echo $heading_title; ?>" alt="<?php echo $heading_title; ?>" id="image" style="height: 50px; width: 50px;"/>
            </div>
            <div class="product__descr">
                <a href="/basket"><?php echo $heading_title; ?></a>
            </div>
        </div>
        <div class="success__price" id="price">
            <?php echo $price; ?>
        </div>
        <?php if ((int)$price_pr5 > 0) { ?>
            <div class="success__price">
                <span style="color: black; padding-top: 8px; padding-right: 5px;">Цена от 2 шт.:</span>
                <span class="color-price action" style="color: red; font-size: 30px"><?php $price5 = (int)$price_int*5/100; $price_pr5 = (int)((int)$price_int - $price5); echo number_format($price_pr5, 0, '.', ' ').'<span class="ruble-times" style="display: inline;">R</span>'; ?></span>
            </div>
        <?php } elseif ((int)$price_card > 0) { ?>
            <div class="success__price">
                <span style="color: black; padding-top: 8px; padding-right: 5px;">от 5 шт.:</span>
                <span class="color-price action" style="color: red; font-size: 30px"><?php echo $price_card; ?></span>
            </div>
        <?php } ?>
        <div class="success__info">
            В Вашей корзине <span id="count_basket">1</span> товар на сумму <span id="sum_basket"><?php echo $price; ?></span>
        </div>
        <div class="success__btns">
            <a class="btn-blue" href="/basket" style="font-size: 16px;">Оформить заказ</a>
            <a class="close btn-white" href="javascript:void(0);" onclick="$('.success').css('display', 'none');">Продолжить покупки <i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
        </div>
       
        <img src="catalog/view/theme/default/image/close.png" alt="" class="success__close close">
    </div>
</div>

<script>
  $(function () {
    var tabContainers = $('div.tabs2 > div');
    tabContainers.hide().filter(':first').show();
    $('div.tabs2 ul.tabNavigation a').click(function () {
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('div.tabs2 ul.tabNavigation a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    }).filter(':first').click();
  });
</script>

<script type="text/javascript">
  $(document).ready(function() {
    $('.colorbox').colorbox({
        overlayClose: true,
        opacity: 0.5,
        rel: "colorbox"
    });

  function goDownMouses($td, $div) {
     $($td).mouseenter(function(){
        $('#'+$div).css('display', 'block');
    });
    $($td).mouseleave(function(){
        $('#'+$div).css('display', 'none');
    });
  }

    goDownMouses('.vip', 'vip_block');
    goDownMouses('.nal', 'nal_block');
    goDownMouses('.bas', 'basket_bl');
    goDownMouses('#gowest', 'cont_dostavka');
  });

  $('.cheap,.cheap2').click(function(event) {
    $('#wannacheaper').addClass('active');
    $('.shadow').css('display','block');
    $('#form_type').val('2');
  });
  $('#reset').click(function(event) {
    $('#wannacheaper').removeClass('active');
    $('.shadow').css('display','none');
    $('#form_type').val('');
  });
  $('.exit').click(function(event) {
    $('.formforcard').removeClass('active');
    $('.shadow').css('display','none');
    $('#form_type').val('');
  });

</script>

<script>
    $('#delivery_CDEK>div.rtable .click_add_popup').click(function(event) {
      $(this).next('.address_popup').css('display', 'block');
    });
    $('.ex').click(function(event) {
      $('.address_popup').css('display', 'none');
    });
</script>

<script>
    $('.choice-btn').click(function(event) {
        $('.choice-table').slideToggle();
    });
</script>

<script>
    function addToCart_product() {
        var quantity = $('#quantity').val();
        var price_card = parseInt('<?php echo $price_card; ?>');
        if (quantity >= 5 && price_card > 0) addToCart(<?php echo $product_id; ?>, quantity, 'card');
        else addToCart(<?php echo $product_id; ?>, quantity);
    }
</script>

<?php echo $footer; ?>

