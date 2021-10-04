<?php echo $header; ?><?php echo $column_right; ?>
<div class="wrapper">
    <div class="banner">
        <div class="banner__carousel">
            <div class="banner__img">
                <a href="/shariko-vintovye-peredachi-shvp"><img src="catalog/view/theme/seonix/image/banners/tnk-01.jpg" alt=""></a>
            </div>
            <div class="banner__img">
                <a href="/sistemy-lineynogo-peremeshcheniya"><img src="catalog/view/theme/seonix/image/banners/tnk-02.png" alt=""></a>
            </div> 
            <div class="banner__img">
                <a href="/obgonnye-mufty"><img src="catalog/view/theme/seonix/image/banners/tnk-03.jpg" alt=""></a>
            </div>
            <div class="banner__img">
                <a href="/podshipniki-ringspann"><img src="catalog/view/theme/seonix/image/banners/tnk-04.jpg" alt=""></a>
            </div>
            <div class="banner__img">
                <a href="/reduktory-chiaravalli"><img src="catalog/view/theme/seonix/image/banners/tnk-05.jpg" alt=""></a>
            </div>
            <div class="banner__img">
                <a href="/podshipniki"><img src="catalog/view/theme/seonix/image/banners/tnk-06.jpg" alt=""></a>
            </div>
        </div>
    </div>
    <div class="tabs" id="tab-01">
        <ul>
            <li><a class="" id="tab1">Распродажа</a></li>
            <li><a class="" id="tab2">Хиты продаж</a></li>
        </ul>
        <div>
      <?php if ($products_sell_out) { ?>
      <div class="main-other-content-list">
         <?php foreach ($products_sell_out as $product) { ?>
        <div class="main-other-content-item">
            <div class="clearance-sale__label">Распродажа</div>
            <a class="main-other-content-item__img" href="<?php echo $product['href']; ?>"><img src="<?php echo $product['thumb']; ?>"></a>
            <div class="main-other-content-item-header main-other-content-item__title">
                <a href="<?php echo $product['href']; ?>"><?php echo $product['name']; ?></a>
            </div>
            <a class="main-other-content-item__price" href="<?php echo $product['href']; ?>">
                <?php if ((int)$product['price'] == 0) {?>
                    <div class="not-available">Нет в наличии</div>
                <?php } else { ?>
                <?php if ($product['price_vip'] == 0) { ?>
                    <div class="roz_price">Цена <?php echo $product['price']; ?></div>
                <?php } ?>
                <?php if ($product['price_vip'] > 0) { $percent = 100 - (int)(($product['price_new']/$product['price_old'])*100);?>
                    <div class="vip_price">
                        <!--<div class="vip_price__sale">sale</div>-->
                        <? if ($percent > 0) {?><strike><?php echo number_format($product['price_old'], 0, '.', ' ').'<span class="ruble-times" style="display: inline;">R</span>'; ?></strike><br><?}?>
                        <?php echo $product['price_vip']; ?><br>
                        <i>Скидка <? if ($percent > 0) {?> <span class="dp">-<?echo $percent;?>%</span>  <?}?></i>
                    </div>
                <?php } else {?>
                    <!--<div class="vip_price">
                        <div class="vip_price__sale">Распродажа</div>
                    </div>-->
                <?php } ?>
                <?php if ($product['price_card'] > 0) { ?>
                    <!--<div class="opt_price"> <?php echo $product['price_card']; ?> от 5 шт</div>-->
                <?php } ?>
                <?php } ?>
            </a>
            <a href="<?php echo $product['href']; ?>" class="button main-other-content-item__btn">Оформить заказ</a>
        </div>
         <?php } ?>
      </div>
      <?php } ?>
        </div>
        <div>
      <?php if ($products_bestsellers) { ?>
      <div class="main-other-content-list">
         <?php foreach ($products_bestsellers as $product) { ?>
        <div class="main-other-content-item">
            <div class="top__label">Топ</div>
            <a class="main-other-content-item__img" href="<?php echo $product['href']; ?>"><img src="<?php echo $product['thumb']; ?>"></a>
            <div class="main-other-content-item-header main-other-content-item__title">
                <a href="<?php echo $product['href']; ?>"><?php echo $product['name']; ?></a>
            </div>
            <a class="main-other-content-item__price" href="<?php echo $product['href']; ?>">
                <?php if ((int)$product['price'] == 0) {?>
                    <div class="not-available">Нет в наличии</div>
                <?php } else { ?>
                <?php if ($product['price_vip'] == 0) { ?>
                    <div class="roz_price">Цена <?php echo $product['price']; ?></div>
                <?php } ?>
                <?php if ($product['price_vip'] > 0) { $percent = 100 - (int)(($product['price_new']/$product['price_old'])*100);?>
                    <div class="vip_price">
                        <!--<div class="vip_price__sale">sale</div>-->
                        <? if ($percent > 0) {?><strike><?php echo number_format($product['price_old'], 0, '.', ' ').'<span class="ruble-times" style="display: inline;">R</span>'; ?></strike><br><?}?>
                        <?php echo $product['price_vip']; ?><br>
                        <i>Скидка <? if ($percent > 0) {?> <span class="dp">-<?echo $percent;?>%</span>  <?}?></i>
                    </div>
                <?php } ?>
                <?php if ($product['price_card'] > 0) { ?>
                    <div class="opt_price"> <?php echo $product['price_card']; ?> от 5 шт</div>
                <?php } ?>
                <?php } ?>
            </a>
            <a href="<?php echo $product['href']; ?>" class="button main-other-content-item__btn">Оформить заказ</a>
        </div>
         <?php } ?>
      </div>
      <?php } ?>
        </div>
    </div>
</div>
<div class="brands">
    <div class="wrapper">
        <div class="brands__carousel">
            <div class="brands__item">
                <img src="catalog/view/theme/seonix/image/brandes/brands-01.png" alt="" style="max-height: 38px;">
            </div>
            <div class="brands__item">
                <img src="catalog/view/theme/seonix/image/brandes/brands-02.png" alt="">
            </div>
            <div class="brands__item">
                <img src="catalog/view/theme/seonix/image/brandes/brands-03.png" alt="">
            </div>
            <div class="brands__item">
                <img src="catalog/view/theme/seonix/image/brandes/brands-04.png" alt="">
            </div>
            <div class="brands__item">
                <img src="catalog/view/theme/seonix/image/brandes/brands-05.png" alt="">
            </div>
            <div class="brands__item">
                <img src="catalog/view/theme/seonix/image/brandes/brands-06.png" alt="">
            </div>
            <div class="brands__item">
                <img src="catalog/view/theme/seonix/image/brandes/brands-07.png" alt="">
            </div>
        </div>
    </div>
</div>
<div class="wrapper">
    <div class="tabs" id="tab-02">
        <ul>
            <li><a class="" id="tab3">Акции</a></li>
            <li><a class="" id="tab4">Новинки</a></li>
        </ul>
        <div>
      <?php if ($products_promotions) { ?>
      <div class="main-other-content-list">
         <?php foreach ($products_promotions as $product) { ?>
        <div class="main-other-content-item">
            <div class="action__label">Акция</div>
            <a class="main-other-content-item__img" href="<?php echo $product['href']; ?>"><img src="<?php echo $product['thumb']; ?>"></a>
            <div class="main-other-content-item-header main-other-content-item__title">
                <a href="<?php echo $product['href']; ?>"><?php echo $product['name']; ?></a>
            </div>
            <a class="main-other-content-item__price" href="<?php echo $product['href']; ?>">
                <?php if ((int)$product['price'] == 0) {?>
                    <div class="not-available">Нет в наличии</div>
                <?php } else { ?>
                <?php if ($product['price_vip'] == 0) { ?>
                    <div class="roz_price">Цена <?php echo $product['price']; ?></div>
                <?php } ?>
                <?php if ($product['price_vip'] > 0) { $percent = 100 - (int)(($product['price_new']/$product['price_old'])*100);?>
                    <div class="vip_price">
                        <!--<div class="vip_price__sale">sale</div>-->
                        <? if ($percent > 0) {?><strike><?php echo number_format($product['price_old'], 0, '.', ' ').'<span class="ruble-times" style="display: inline;">R</span>'; ?></strike><br><?}?>
                        <?php echo $product['price_vip']; ?><br>
                        <i>Скидка <? if ($percent > 0) {?> <span class="dp">-<?echo $percent;?>%</span>  <?}?></i>
                    </div>
                <?php } ?>
                <?php if ($product['price_card'] > 0) { ?>
                    <div class="opt_price"> <?php echo $product['price_card']; ?> от 5 шт</div>
                <?php } ?>
                <?php } ?>
            </a>
            <a href="<?php echo $product['href']; ?>" class="button main-other-content-item__btn">Оформить заказ</a>
        </div>
         <?php } ?>
      </div>
      <?php } ?>
        </div>
        <div>
      <?php if ($products_new) { ?>
      <div class="main-other-content-list">
         <?php foreach ($products_new as $product) { ?>
        <div class="main-other-content-item">
            <div class="new__label">Новинка</div>
            <a class="main-other-content-item__img" href="<?php echo $product['href']; ?>"><img src="<?php echo $product['thumb']; ?>"></a>
            <div class="main-other-content-item-header main-other-content-item__title">
                <a href="<?php echo $product['href']; ?>"><?php echo $product['name']; ?></a>
            </div>
            <a class="main-other-content-item__price" href="<?php echo $product['href']; ?>">
                <?php if ((int)$product['price'] == 0) {?>
                    <div class="not-available">Нет в наличии</div>
                <?php } else { ?>
                <?php if ($product['price_vip'] == 0) { ?>
                    <div class="roz_price">Цена <?php echo $product['price']; ?></div>
                <?php } ?>
                <?php if ($product['price_vip'] > 0) { $percent = 100 - (int)(($product['price_new']/$product['price_old'])*100);?>
                    <div class="vip_price">
                        <!--<div class="vip_price__sale">sale</div>-->
                        <? if ($percent > 0) {?><strike><?php echo number_format($product['price_old'], 0, '.', ' ').'<span class="ruble-times" style="display: inline;">R</span>'; ?></strike><br><?}?>
                        <?php echo $product['price_vip']; ?><br>
                        <i>Скидка <? if ($percent > 0) {?> <span class="dp">-<?echo $percent;?>%</span>  <?}?></i>
                    </div>
                <?php } ?>
                <?php if ($product['price_card'] > 0) { ?>
                    <div class="opt_price"> <?php echo $product['price_card']; ?> от 5 шт</div>
                <?php } ?>
                <?php } ?>
            </a>
            <a href="<?php echo $product['href']; ?>" class="button main-other-content-item__btn">Оформить заказ</a>
        </div>
         <?php } ?>
      </div>
      <?php } ?>
        </div>
    </div>
</div>
<!-- <div class="services">
    <div class="wrapper">
        <div class="services__list">
            <div class="services__item">
                <div class="services__icon">
                    <img src="catalog/view/theme/seonix/image/shipped.svg" alt="">
                </div>
                <div class="services__text">
                    <a href="/dostavka-i-oplata">Доставка в любую точку России</a>
                </div>
            </div>
            <div class="services__item">
                <div class="services__icon">
                    <img src="catalog/view/theme/seonix/image/mechanic.svg" alt="">
                </div>
                <div class="services__text">
                    <a href="https://promsnabshop.ru/index.php?route=citycard/application">Выезд мастера к заказчику</a>
                </div>
            </div>
            <div class="services__item">
                <div class="services__icon">
                    <img src="catalog/view/theme/seonix/image/calculator.svg" alt="">
                </div>
                <div class="services__text">
                    <a class="calc-cost" href="javascript:void(0);">Расчет стоимости по потенциалу</a>
                </div>
            </div>
        </div>
    </div>
</div> -->

<script>
$(document).ready(function() {
    var tab1 = 1;
    var tab2 = 3;
    list_tab();
    function list_tab() {
        //console.log('test ' + tab1);
        $("#tab" + tab1).trigger("click");
        tab1 = tab1 + 1;
        if (tab1 > 2) tab1 = 1;
        //console.log('test ' + tab2);
        $("#tab" + tab2).trigger("click");
        tab2 = tab2 + 1;
        if (tab2 > 4) tab2 = 3;
        setTimeout(list_tab, 30000);
    }
});
</script>

<?php echo $footer; ?>



