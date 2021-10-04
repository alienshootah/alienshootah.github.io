<!DOCTYPE html>
<html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>">
<head>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-84656749-28"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-84656749-28');
</script>
<meta charset="UTF-8" />
<meta name="google-site-verification" content="HC6kcEMB3rXR6fqxy4eoWJ2oVRUh4efFQJwS1YZ4kMM" />
<meta name="format-detection" content="telephone=no"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="yandex-verification" content="5d50a5664b6fa6eb" />
<title><?php echo $title; if (isset($_GET['page'])) { echo " - ". ((int) $_GET['page'])." ".$text_page;} ?></title>
<base href="<?php echo $base; ?>" />
<?php if ($description) { ?>
<meta name="description" content="<?php echo $description; if (isset($_GET['page'])) { echo " - ". ((int) $_GET['page'])." ".$text_page;} ?>" />
<?php } ?>
<?php if ($keywords) { ?>
<meta name="keywords" content="<?php echo $keywords; ?>" />
<?php } ?>
<meta property="og:title" content="<?php echo $title; if (isset($_GET['page'])) { echo " - ". ((int) $_GET['page'])." ".$text_page;} ?>" />
<meta property="og:type" content="website" />
<meta property="og:url" content="<?php echo $og_url; ?>" />
<?php if ($og_image) { ?>
<meta property="og:image" content="<?php echo $og_image; ?>" />
<?php } else { ?>
<meta property="og:image" content="<?php echo $logo; ?>" />
<?php } ?>
<meta property="og:site_name" content="<?php echo $name; ?>" />
<?php if ($icon) { ?>
<link href="<?php echo $icon; ?>" rel="icon" />
<?php } ?>
<?php foreach ($links as $link) { ?>
<link href="<?php echo $link['href']; ?>" rel="<?php echo $link['rel']; ?>" />
<?php } ?>
<link rel="stylesheet" type="text/css" href="catalog/view/theme/seonix/stylesheet/jquery.mCustomScrollbar.css" />
<link rel="stylesheet" type="text/css" href="catalog/view/theme/seonix/stylesheet/slick.css" />
<link rel="stylesheet" type="text/css" href="catalog/view/theme/seonix/stylesheet/stylesheet.css" />
<link rel="stylesheet" type="text/css" href="catalog/view/theme/seonix/stylesheet/pure-min.css" />
<link rel="stylesheet" type="text/css" href="catalog/view/theme/seonix/stylesheet/style.css" />
<link rel="stylesheet" type="text/css" href="catalog/view/theme/seonix/stylesheet/media.css" />
<?php foreach ($styles as $style) { ?>
<link rel="<?php echo $style['rel']; ?>" type="text/css" href="<?php echo $style['href']; ?>" media="<?php echo $style['media']; ?>" />
<?php } ?>

<script src="catalog/view/javascript/jquery/jquery-1.7.1.min.js"></script>
<script src="catalog/view/javascript/jquery/ui/jquery-ui-1.8.16.custom.min.js"></script>
<link rel="stylesheet" type="text/css" href="catalog/view/javascript/jquery/ui/themes/ui-lightness/jquery-ui-1.8.16.custom.css" />
<script src="catalog/view/javascript/common.js"></script>
<?php foreach ($scripts as $script) { ?>
<script src="<?php echo $script; ?>"></script>
<?php } ?>
<!--[if IE 7]> 
<link rel="stylesheet" type="text/css" href="catalog/view/theme/seonix/stylesheet/ie7.css" />
<![endif]-->
<!--[if lt IE 7]>
<link rel="stylesheet" type="text/css" href="catalog/view/theme/seonix/stylesheet/ie6.css" />
<script type="text/javascript" src="catalog/view/javascript/DD_belatedPNG_0.0.8a-min.js"></script>
<script type="text/javascript">
DD_belatedPNG.fix('#logo img');
</script>
<![endif]-->
<?php if ($stores) { ?>
<script type="text/javascript"><!--
$(document).ready(function() {
<?php foreach ($stores as $store) { ?>
$('body').prepend('<iframe src="<?php echo $store; ?>" style="display: none;"></iframe>');
<?php } ?>
});
//--></script>
<?php } ?>
<?php echo $google_analytics; ?>
<meta name='yandex-verification' content='43a194b204e8f13a' />
<meta name='yandex-verification' content='565bc0e8ee799884' />
<script id="ISDEKscript" src="https://promsnabshop.ru/pvzwidget/widget/widjet.js"></script>
<link rel="stylesheet" type="text/css" href="catalog/view/theme/default/starhome.css"/>
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese" rel="stylesheet">
<script src="catalog/view/theme/seonix/js/jquery.mCustomScrollbar.concat.min.js"></script>
<script src="catalog/view/theme/seonix/js/slick.min.js"></script>
<script src="catalog/view/theme/seonix/js/engineer.js"></script>
<script src="https://use.fontawesome.com/661e91f447.js"></script>
</head>
<body>
    <a href="javascript:void(0);" class="call__back">
        <div class="text-call">
            <i class="fa fa-phone"></i>
            <span>Заказать звонок</span>
        </div>
    </a>
    <header class="header">
<!--         <div class="header__holiday-banner">
            <div class="wrapper">
                <div class="holiday-banner__text">
                    Разрываем шаблоны - черная пятница длиною в жизнь
                </div>
            </div>
        </div>
        <div class="header__bg">
            <div class="wrapper">
                <div class="header__top">
                    <a href="/novinki-kartridzhi">Новинки <strong>картриджей</strong></a>
                    <a href="/sotrudnichestvo">Картриджи оптом</a>
                    <a href="/rasprodaja-kartridzhi">Распродажа <strong>картриджей</strong></a>
                </div>
            </div>
        </div>
         -->
        <div class="wrapper">
            <div class="header__middle">
                <div class="header__logo">
                    <a href="/">
                        <img src="catalog/view/theme/seonix/image/banners/logo-tnk.png" alt="logo">
                    </a>
                </div>
                <div class="header__contacts">
                    <div class="contacts__wrap">
                        <div class="ico">
                            <a href="javascript: void(0);" class="delivary_city"><img src="catalog/view/theme/seonix/image/ico-map.svg" alt=""></a>
                        </div>
                        <div class="text">
                            <a title="Выберите город доставки" href="javascript: void(0);" class="delivary_city" style="text-decoration: underline; color: #000;"><h4 id="view_city"><?php echo $view_city; ?></h4></a>
                            <p id="main_office"><?php echo $main_office; ?></p>
                            <input type="hidden" name="main_city" id="main_city" value="<?php echo $main_city; ?>">
                        </div>
                        <div class="choice-city" style="display: none">
                            <p>Ваш город - Санкт-Петербург, угадали?</p>
                            <div class="choice-city__btns">
                                <a href="javascript:void(0);" title="Да" onclick="delivery_city('Санкт-Петербург'); $('.choice-city').hide();">Да</a>
                                <a href="javascript:void(0);" title="Нет" onclick="$('.delivery-city-popup').addClass('active'); $('.choice-city').hide();">Нет</a>
                            </div>
                        </div>
                    </div>
                    <div class="contacts__wrap">
                        <div class="ico">
                            <img width="17" src="catalog/view/theme/seonix/image/old-handphone.svg" alt="">
                        </div>
                        <div class="text">
                            <a href="tel:+79217865209">+7-921-786-52-09</a>
                            <p>Оптовый отдел</p>
                            <small><a class="schedule-second" href="javascript:void(0);">График работы и приема звонков  </a></small>
                        </div>
                    </div>
                    <div class="contacts__wrap">
                        <div class="text">
                            <a href="tel:+79217865209">+7-921-786-52-09</a>
                            <p>Онлайн магазин</p>
                       <!--      <p>Оптовый отдел</p> -->
                            <small><a class="schedule" href="javascript:void(0);">График работы и приема звонков  </a></small>
                        </div>
                    </div>
                </div>
                <div class="header__basket">
                    <?php echo $cart; ?>
                </div>
            </div>
        </div>
        <div class="header__fixed">
            <div class="wrapper">
                <div class="header__bottom">
                    <div class="header__category">
                        <div class="box">
                          <div class="box-heading">Группы товаров <img src="catalog/view/theme/seonix/image/ico-burger.svg" alt=""></a></div>
                          <div class="box-content">
                            <ul class="box-category">
                              <?php foreach ($categories as $category) { ?>
                              <li>
                                <?php if ($category['category_id'] == $category_id) { ?>
                                <a href="<?php echo $category['href']; ?>" class="active"><?php echo $category['name']; ?></a>
                                <?php if (count($category['children']) > 0) {?><span class="arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></span><?php } ?>
                                <?php } else { ?>
                                <a href="<?php echo $category['href']; ?>"><?php echo $category['name']; ?></a>
                                <?php if (count($category['children']) > 0) {?><span class="arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></span><?php } ?>
                                <?php } ?>
                                <?php if (($category['children'])) { //&& ($category['category_id'] == $category_id)) { ?>
                                <ul class="sub-category mCustomScrollbar">
                                  <?php foreach ($category['children'] as $child) { ?>
                                  <li>
                                    <?php if ($child['category_id'] == $child_id) { ?>
                                    <a href="<?php echo $child['href']; ?>" class="active"> - <?php echo $child['name']; ?></a>
                                    <?php } else { ?>
                                    <a href="<?php echo $child['href']; ?>"> - <?php echo $child['name']; ?></a>
                                    <?php } ?>
                                  </li>
                                  <?php } ?>
                                </ul>
                                <?php } ?>
                              </li>
                              <?php } ?>
                            </ul>
                            <ul class="box-category__additional">
                                <li>
                                    <a href="https://promsnabshop.ru/index.php?route=citycard/application">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0)">
                                        <path d="M9.64462 10.2782V10.017C9.71843 9.95738 9.7894 9.89208 9.85754 9.82395C10.4031 9.22326 10.7466 8.46672 10.8398 7.66067C11.3301 7.58597 11.772 7.32323 12.0719 6.92822C12.4836 6.34624 12.5205 5.50875 12.177 4.45834C12.1568 4.39776 12.1168 4.34574 12.0634 4.31071L11.9073 4.20567C11.9303 3.25789 11.6027 2.33495 10.9874 1.61371C10.2238 0.753513 9.05128 0.319154 7.49837 0.313477C5.94831 0.313477 4.77299 0.753513 4.00931 1.60236C3.394 2.32359 3.06646 3.24653 3.08949 4.19432L2.93335 4.29936C2.87998 4.33438 2.83998 4.38641 2.81979 4.44698C2.47628 5.50307 2.51318 6.33488 2.92483 6.91687C3.2236 7.31464 3.66551 7.5804 4.15693 7.65783C4.25055 8.46516 4.59513 9.22276 5.14205 9.82395C5.20965 9.89194 5.2807 9.95638 5.35497 10.017V10.2782C4.26765 10.4883 -0.0730961 11.5074 0.000716531 14.4032C0.000716531 14.5599 0.12783 14.6871 0.284611 14.6871H14.715C14.8718 14.6871 14.9989 14.5599 14.9989 14.4032C15.0727 11.5074 10.7319 10.4883 9.64462 10.2782ZM3.9866 7.02475C3.74536 6.94373 3.5351 6.79004 3.38474 6.58471L3.39894 6.58755C3.11504 6.17306 3.08949 5.54566 3.34216 4.71668L3.5494 4.57757C3.63659 4.51938 3.6846 4.41788 3.67431 4.31355C3.62655 3.46506 3.90253 2.63002 4.44651 1.9771C5.08811 1.25033 6.11865 0.886944 7.49837 0.881266C8.8781 0.875588 9.90864 1.25033 10.5616 1.9771C11.1056 2.63002 11.3816 3.46506 11.3338 4.31355C11.3235 4.41788 11.3715 4.51938 11.4587 4.57757L11.6659 4.71668C11.9186 5.54282 11.9016 6.17306 11.6092 6.58755C11.4578 6.79305 11.2466 6.94675 11.0045 7.02759C11.3469 6.63794 11.5142 6.12473 11.4672 5.60811C11.414 5.29728 11.252 5.01555 11.0102 4.81321C10.8881 1.97426 8.89797 1.6563 8.04061 1.6563C7.85913 1.65577 7.67787 1.66907 7.49837 1.69604C7.31892 1.66904 7.13762 1.65577 6.95614 1.6563C6.10445 1.6563 4.11719 1.96858 3.9866 4.81321C3.74319 5.01392 3.57917 5.29469 3.52385 5.60527C3.47651 6.12193 3.64387 6.63528 3.9866 7.02475ZM10.4452 4.69681C9.25394 4.76565 8.07014 4.46845 7.05266 3.84513C6.93751 3.76425 6.78048 3.77997 6.6836 3.88203C6.11581 4.49241 5.07959 4.63435 4.57994 4.66558C4.73324 2.65845 5.94831 2.22125 6.97033 2.22125C7.133 2.22008 7.29546 2.23339 7.45579 2.26099C7.49326 2.26866 7.53187 2.26866 7.56935 2.26099C7.72968 2.23346 7.89214 2.22015 8.05481 2.22125C9.06831 2.22125 10.2891 2.6698 10.431 4.69397L10.4452 4.69681ZM4.6793 7.07869L4.69066 7.08153C4.69126 7.01155 4.66599 6.9438 4.61968 6.89132C4.23075 6.4456 4.05189 6.03963 4.10016 5.70464C4.12329 5.51805 4.21545 5.34689 4.3585 5.22485C4.73324 5.22485 6.06187 5.15388 6.91355 4.41859C7.87273 4.97002 8.95841 5.26346 10.0648 5.27028C10.255 5.27028 10.448 5.27028 10.6496 5.23905C10.7887 5.35786 10.8796 5.52344 10.9051 5.70464C10.9534 6.03395 10.7745 6.4456 10.3856 6.89132C10.3393 6.9438 10.314 7.01155 10.3146 7.08153C10.3146 7.08153 10.3146 7.1383 10.3146 7.22915L8.66234 8.1149C8.33444 7.80446 7.81694 7.81862 7.5065 8.14652C7.19606 8.47442 7.21022 8.99192 7.53812 9.30236C7.86602 9.6128 8.38352 9.59864 8.69396 9.27074C8.83782 9.11879 8.91795 8.91747 8.91785 8.70824C8.91913 8.68269 8.91913 8.65714 8.91785 8.63159L10.2209 7.93321C10.1091 8.49301 9.84593 9.01144 9.46009 9.43217C8.95681 9.91671 8.27557 10.1715 7.57787 10.1362H7.43592C6.7397 10.1708 6.05995 9.91721 5.55654 9.43501C4.65943 8.54074 4.6793 7.09288 4.6793 7.07869ZM8.35006 8.70824C8.35006 8.84778 8.23693 8.96091 8.09739 8.96091C7.95786 8.96091 7.84473 8.84778 7.84473 8.70824C7.84473 8.56871 7.95786 8.45557 8.09739 8.45557C8.23693 8.45557 8.35006 8.56871 8.35006 8.70824ZM7.21448 14.1022H0.577023C0.8013 11.9702 4.26765 11.0788 5.35213 10.8488V11.357C5.35213 12.0014 6.13568 12.4926 7.21448 12.5749V14.1022ZM5.91992 11.357V11.3485V10.3775C6.39182 10.5964 6.90731 10.7051 7.4274 10.6955H7.56935C8.08944 10.7051 8.60493 10.5964 9.07683 10.3775V11.357C9.07683 11.6267 8.46078 12.0156 7.49837 12.0156C6.53597 12.0156 5.91992 11.6267 5.91992 11.357ZM7.78227 14.1108V12.572C8.86107 12.4982 9.64462 12.0043 9.64462 11.3541V10.8573C10.7376 11.0844 14.1869 11.9759 14.4197 14.1108H7.78227Z" fill="#0089FF"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0">
                                        <rect width="15" height="15" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    Вызвать мастера</a>
                                </li>
                            </ul>
                          </div>
                        </div>
                    </div>
                    <div class="header__nav">
                        <ul>
                            <li>
                                <a href="/akciya"><img src="catalog/view/theme/seonix/image/ico-action.svg" alt="">Акции</a>
                            </li>
                            <li>
                                <!-- <a href="https://promsnabshop.ru/index.php?route=citycard/application"><img src="catalog/view/theme/seonix/image/ico-support.svg" alt="">Вызвать мастера</a> -->
                                <a href="javascript:void(0);">
                                    <img width="15" src="catalog/view/theme/seonix/image/gdpr.svg" alt="">
                                    Услуги ВЭД
                                </a>
                                <ul class="dropdown">
                                    <li><a href="/tamozhennoe-oformlenie">Таможенное оформление</a></li>
                                    <li><a href="/oplata-invoysov">Оплата инвойсов</a></li>
                                    <li><a href="/sertifikaciya-tovarov">Сертификация товаров</a></li>
                                    <li><a href="/logistika-import">Логистика импорт</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="/about">
                                    <img width="15" src="catalog/view/theme/seonix/image/about.svg" alt="">О магазине
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="header__search">
                        <div class="search">
                            <form method="get" action="index.php?route=product/search">
                            <input type="hidden" name="route" value="product/search">
                            <input name="search" type="text" placeholder="Поиск по сайту">
                            <button type="submit" class="button-search"><img src="catalog/view/theme/seonix/image/ico-search.svg" alt=""></button>
                            </form>
                        </div>
                    </div>
                    <div class="header__basket header__basket-fixed">
                        <?php echo $cart; ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="header__menu">
                <ul>
                    <li>
                        <a href="/shariko-vintovye-peredachi-shvp">
                            <div class="menu__icon">
                                <img src="catalog/view/theme/seonix/image/banners/tnk-icon-01.png" alt="" class="custom-icon">
                            </div>
                            <div>
                                Шарико-винтовые передачи ШВП
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/sistemy-lineynogo-peremeshcheniya">
                            <div class="menu__icon">
                                <img src="catalog/view/theme/seonix/image/banners/tnk-icon-02.png" alt="" class="custom-icon">
                            </div>
                            <div>
                                Системы линейного перемещения
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/obgonnye-mufty">
                            <div class="menu__icon">
                                <img src="catalog/view/theme/seonix/image/banners/tnk-icon-03.png" alt="" class="custom-icon">
                            </div>
                            <div>
                                Обгонные муфты
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/podshipniki-ringspann">
                            <div class="menu__icon">
                            <img src="catalog/view/theme/seonix/image/banners/tnk-icon-04.png" alt="" class="custom-icon">
                            </div>
                            <div>
                                Продукция RINGSPANN
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/reduktory-chiaravalli">
                            <div class="menu__icon">
                                <img src="catalog/view/theme/seonix/image/banners/tnk-icon-05.png" alt="" class="custom-icon">
                            </div>
                            <div>
                                Редукторы CHIARAVALL
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/podshipniki">
                            <div class="menu__icon">
                                <img src="catalog/view/theme/seonix/image/banners/tnk-icon-06.png" alt="" class="custom-icon">
                            </div>
                            <div>
                                Подшипники
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/napravlyayushchie-s-perekrestnymi-rolikami">
                            <div class="menu__icon">
                            <img src="catalog/view/theme/seonix/image/banners/tnk-icon-07.png" alt="" class="custom-icon">
                            </div>
                            <div>
                                Направляющие с перекрестными роликами
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/zubchatye-reyki-i-shesterni">
                            <div class="menu__icon">
                                <img src="catalog/view/theme/seonix/image/banners/tnk-icon-08.png" alt="" class="custom-icon">
                            </div>
                            <div> 
                                Зубчатые рейки и шестерни
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/ogranichiteli-krutyashchego-momenta">
                            <div class="menu__icon">
                                <img src="catalog/view/theme/seonix/image/banners/tnk-icon-09.png" alt="" class="custom-icon">
                            </div>
                            <div>
                                Ограничители крутящего момента
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    <div class="row-notification" >
        <div class="container pure-g white-back">
            <div class="pure-u-1-1">
                <div class="row-notification">
                    <div id="notification"></div>
                </div>
            </div>
        </div>
    </div>
    <?php
    if (isset($this->request->get['route']) && $this->request->get['route'] != 'common/home') {
    ?>
    <div class="wrapper">
    <?php } ?>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-81862902-1', 'auto');
  ga('send', 'pageview');
</script>

