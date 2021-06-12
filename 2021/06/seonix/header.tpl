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
<script id="ISDEKscript" src="https://evrobonus.ru/pvzwidget/widget/widjet.js"></script>
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
                        <img src="catalog/view/theme/seonix/image/evrobon-logo-n.png" alt="logo">
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
                            <a href="tel:88123132346">8 (812) 313-23-46</a>
                  <p>Ремонт техники</p>
                        <!--     <small>Заказы по телефону не принимаются</small>
                            <p>Ремонт оргтехники<br>Интернет-магазин</p> -->
                            <small><a class="schedule-second" href="javascript:void(0);">График работы и приема звонков  </a></small>
                        </div>
                    </div>
                    <div class="contacts__wrap">
                        <div class="text">
                            <a href="tel:88123132346">8 (812) 313-23-46</a>
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
                                    <a href="https://evrobonus.ru/index.php?route=citycard/application">
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
                                <!-- <a href="https://evrobonus.ru/index.php?route=citycard/application"><img src="catalog/view/theme/seonix/image/ico-support.svg" alt="">Вызвать мастера</a> -->
                                <a href="javascript:void(0);">
                                    <img width="15" src="catalog/view/theme/seonix/image/gdpr.svg" alt="">
                                    Услуги
                                </a>
                                <ul class="dropdown">
                                    <li><a href="/remont-tehniki">Ремонт техники</a></li>
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
                        <a href="/apparaty-dlya-rf-liftinga-lica">
                            <div class="menu__icon">
                                <i class="fa fa-check-circle"></i>
                                <!--
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.2781 17.3039C26.4578 17.0343 26.4748 16.6875 26.3219 16.4017C26.1687 16.116 25.871 15.9375 25.5469 15.9375H22.4343C23.8284 14.2516 24.668 12.0859 24.668 9.72656C24.668 4.3634 20.3309 0 15 0C9.66911 0 5.33203 4.3634 5.33203 9.72656C5.33203 12.0859 6.17156 14.2516 7.56568 15.9375H4.45312C4.12902 15.9375 3.83102 16.116 3.67813 16.4017C3.52523 16.6875 3.54194 17.0343 3.72184 17.3039L7.08984 22.356V24.7266H6.21093C5.72547 24.7266 5.33203 25.12 5.33203 25.6055C5.33203 26.0909 5.72547 26.4844 6.21093 26.4844H7.08984V28.2422H6.21093C5.72547 28.2422 5.33203 28.6356 5.33203 29.1211C5.33203 29.6066 5.72547 30 6.21093 30H13.2422C13.7276 30 14.1211 29.6066 14.1211 29.1211C14.1211 28.6356 13.7276 28.2422 13.2422 28.2422H12.3633V26.4844H17.6367V28.2422H16.7578C16.2723 28.2422 15.8789 28.6356 15.8789 29.1211C15.8789 29.6066 16.2723 30 16.7578 30H23.7891C24.2745 30 24.668 29.6066 24.668 29.1211C24.668 28.6356 24.2745 28.2422 23.7891 28.2422H22.9102V26.4844H23.7891C24.2745 26.4844 24.668 26.0909 24.668 25.6055C24.668 25.12 24.2745 24.7266 23.7891 24.7266H22.9102V22.356L26.2781 17.3039ZM15 1.75781C19.3616 1.75781 22.9102 5.33249 22.9102 9.72656C22.9102 14.1206 19.3616 17.6953 15 17.6953C10.6384 17.6953 7.08984 14.1206 7.08984 9.72656C7.08984 5.33249 10.6384 1.75781 15 1.75781ZM9.46311 17.6953C11.0326 18.8024 12.9419 19.4531 15 19.4531C17.0579 19.4531 18.9674 18.8024 20.5369 17.6953H23.9046L21.5609 21.2109H8.4391L6.09535 17.6953H9.46311ZM8.84765 22.9688H10.6055V24.7266H8.84765V22.9688ZM10.6055 28.2422H8.84765V26.4844H10.6055V28.2422ZM12.3633 22.9688H14.1211V24.7266H12.3633V22.9688ZM15.8789 24.7266V22.9688H17.6367V24.7266H15.8789ZM21.1523 28.2422H19.3945V26.4844H21.1523V28.2422ZM19.3945 24.7266V22.9688H21.1523V24.7266H19.3945Z" fill="black"/>
                                    <path d="M15 14.1211C17.4232 14.1211 19.3945 12.1497 19.3945 9.72656C19.3945 7.29996 17.4268 5.27344 15 5.27344C12.5734 5.27344 10.6055 7.2995 10.6055 9.72656C10.6055 12.1497 12.5768 14.1211 15 14.1211ZM15 7.03125C16.4294 7.03125 17.6367 8.26561 17.6367 9.72656C17.6367 11.1804 16.4539 12.3633 15 12.3633C13.5461 12.3633 12.3633 11.1804 12.3633 9.72656C12.3633 8.26561 13.5706 7.03125 15 7.03125Z" fill="black"/>
                                    </svg>
                                -->
                            </div>
                            <div>
                                Аппараты для коррекции фигуры
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/apparaty-dlya-smas-liftinga-lica">
                            <div class="menu__icon">
                                <i class="fa fa-shower"></i>
                                <!--
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.0898 3.48877C21.2164 5.0248 21.4324 4.66469 21.0651 5.28262C19.996 7.08197 19.4531 8.11832 19.4531 8.78898C19.4531 10.2429 20.636 11.4257 22.0898 11.4257C23.5437 11.4257 24.7266 10.2429 24.7266 8.78898C24.7266 8.11832 24.1837 7.08197 23.1146 5.28262C22.7481 4.66604 22.9636 5.02527 22.0898 3.48877ZM22.0898 9.66789C21.612 9.66789 21.222 9.28457 21.2112 8.80926C21.2629 8.50299 21.7045 7.68555 22.0898 7.01195C22.4752 7.68555 22.9168 8.50299 22.9685 8.80926C22.9577 9.28457 22.5677 9.66789 22.0898 9.66789Z" fill="black"/>
                                <path d="M30 7.91016C30 3.5485 26.4515 0 22.0898 0C19.3029 0 16.8482 1.44885 15.4388 3.63281H7.03125V8.90625H3.51562V12.4219H0V24.7266H3.51562V30H22.8516V24.7266H26.3672V14.5612C28.5511 13.1519 30 10.6971 30 7.91016ZM14.5912 5.39062C14.3245 6.18234 14.1797 7.02967 14.1797 7.91016C14.1797 9.58594 14.7039 11.1413 15.5964 12.4219H8.78906V5.39062H14.5912ZM5.27344 10.6641H7.03125V12.4219H5.27344V10.6641ZM21.0938 28.2422H5.27344V21.2109H7.03125V26.4844H19.3359V21.2109H21.0938V28.2422ZM8.78906 21.2109H17.5781V24.7266H8.78906V21.2109ZM24.6094 22.9688H22.8516V19.4531H3.51562V22.9688H1.75781V14.1797H17.2726C18.6076 15.2078 20.2784 15.8203 22.0898 15.8203C22.9703 15.8203 23.8177 15.6755 24.6094 15.4088V22.9688ZM22.0898 14.0625C18.6974 14.0625 15.9375 11.3026 15.9375 7.91016C15.9375 4.51775 18.6974 1.75781 22.0898 1.75781C25.4822 1.75781 28.2422 4.51775 28.2422 7.91016C28.2422 11.3026 25.4822 14.0625 22.0898 14.0625Z" fill="black"/>
                                <path d="M14.0625 15.9375H15.8203V17.6953H14.0625V15.9375Z" fill="black"/>
                                <path d="M10.5469 15.9375H12.3047V17.6953H10.5469V15.9375Z" fill="black"/>
                                <path d="M3.51562 15.9375H8.78906V17.6953H3.51562V15.9375Z" fill="black"/>
                                </svg>
                                    -->
                            </div>
                            <div>
                                Аппараты для SMAS-лифтинга лица
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/apparaty-dlya-analiza-kozhi">
                            <div class="menu__icon">
                                <i class="fa fa-compass"></i>
                                <!--
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0685 5.91545C9.66751 5.40733 9.75426 4.67056 10.2621 4.26933C12.9744 2.12791 16.2334 0.996094 19.6875 0.996094C23.1416 0.996094 26.4006 2.12791 29.1129 4.26933C29.6207 4.67056 29.7075 5.40733 29.3065 5.91545C28.9075 6.42059 28.1712 6.51215 27.6604 6.10909C25.3661 4.29749 22.6092 3.33984 19.6875 3.33984C16.7658 3.33984 14.0089 4.29749 11.7146 6.10909C11.2065 6.51009 10.4697 6.42334 10.0685 5.91545ZM19.6875 5.68359C17.2961 5.68359 15.0396 6.46729 13.1618 7.94998C12.654 8.35098 12.5672 9.08798 12.9682 9.59587C13.3694 10.104 14.1062 10.1905 14.6141 9.78928C16.0741 8.63663 17.8285 8.02734 19.6875 8.02734C21.5465 8.02734 23.3009 8.63663 24.7607 9.78928C25.2704 10.1919 26.0069 10.1019 26.4068 9.59587C26.8078 9.08775 26.721 8.35098 26.2132 7.94998C24.3354 6.46729 22.0789 5.68359 19.6875 5.68359ZM30 16.2305V25.6055C30 26.2527 29.4754 26.7773 28.8281 26.7773H25.5469V27.832C25.5469 28.4793 25.0223 29.0039 24.375 29.0039C23.7277 29.0039 23.2031 28.4793 23.2031 27.832V26.7773H6.79688V27.832C6.79688 28.4793 6.27228 29.0039 5.625 29.0039C4.97772 29.0039 4.45312 28.4793 4.45312 27.832V26.7773H1.17188C0.524597 26.7773 0 26.2527 0 25.6055V16.2305C0 15.5832 0.524597 15.0586 1.17188 15.0586H13.946C14.4903 12.3873 16.8578 10.3711 19.6875 10.3711C22.5172 10.3711 24.8847 12.3873 25.429 15.0586H28.8281C29.4754 15.0586 30 15.5832 30 16.2305ZM16.1719 16.2305C16.1719 18.1691 17.7489 19.7461 19.6875 19.7461C21.6261 19.7461 23.2031 18.1691 23.2031 16.2305C23.2031 14.2918 21.6261 12.7148 19.6875 12.7148C17.7489 12.7148 16.1719 14.2918 16.1719 16.2305ZM27.6562 17.4023H25.429C24.8847 20.0736 22.5172 22.0898 19.6875 22.0898C16.8578 22.0898 14.4903 20.0736 13.946 17.4023H2.34375V24.4336H27.6562V17.4023ZM19.6875 17.4023C20.3348 17.4023 20.8594 16.8777 20.8594 16.2305C20.8594 15.5832 20.3348 15.0586 19.6875 15.0586C19.0402 15.0586 18.5156 15.5832 18.5156 16.2305C18.5156 16.8777 19.0402 17.4023 19.6875 17.4023Z" fill="black"/>
                                    </svg>
                                -->
                            </div>
                            <div>
                                Аппараты для анализа кожи
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/apparaty-dlya-rf-liftinga-lica">
                            <div class="menu__icon">
                                <i class="fa fa-magnet"></i>
                                <!--
                                    <i class="fa fa-print" aria-hidden="true"></i>
                                -->
                            </div>
                            <div>
                                Аппараты для RF-лифтинга лица
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/apparaty-dlya-udaleniya-sosudov">
                            <div class="menu__icon">
                                <i class="fa fa-eraser"></i>
                                <!--
                               <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.1211 10.5469H26.1328V7.08984C26.1328 6.60439 25.7394 6.21094 25.2539 6.21094H22.6172V0.878906C22.6172 0.393448 22.2237 0 21.7383 0H8.26172C7.77626 0 7.38281 0.393448 7.38281 0.878906V6.21094H4.74609C4.26064 6.21094 3.86719 6.60439 3.86719 7.08984V10.5469H0.878906C0.393448 10.5469 0 10.9403 0 11.4258V27.0705C0 27.5558 0.393448 27.9494 0.878906 27.9494H7.38281V29.1211C7.38281 29.6066 7.77626 30 8.26172 30H21.7383C22.2237 30 22.6172 29.6066 22.6172 29.1211V27.9494H29.1211C29.6066 27.9494 30 27.5558 30 27.0705V11.4258C30 10.9403 29.6066 10.5469 29.1211 10.5469ZM22.6172 7.96875H24.375V10.5469H22.6172V7.96875ZM9.14062 1.75781H20.8594V10.5469H9.14062V1.75781ZM5.625 7.96875H7.38281V10.5469H5.625V7.96875ZM7.38281 26.1916H5.68359V19.3359H7.38281V26.1916ZM20.8594 28.2422H9.14062V19.3359H20.8594V28.2422ZM24.3164 26.1916H22.6172V19.3359H24.3164V26.1916ZM28.2422 26.1916H26.0742V18.457C26.0742 17.9716 25.6808 17.5781 25.1953 17.5781H4.80469C4.31923 17.5781 3.92578 17.9716 3.92578 18.457V26.1916H1.75781V12.3047H28.2422V26.1916Z" fill="black"/>
                                <path d="M5.33203 14.0625H4.39453C3.90907 14.0625 3.51562 14.4562 3.51562 14.9414C3.51562 15.4269 3.90907 15.8203 4.39453 15.8203H5.33203C5.81749 15.8203 6.21094 15.4269 6.21094 14.9414C6.21094 14.4562 5.81749 14.0625 5.33203 14.0625Z" fill="black"/>
                                <path d="M9.08203 14.0625H8.14453C7.65907 14.0625 7.26562 14.4562 7.26562 14.9414C7.26562 15.4269 7.65907 15.8203 8.14453 15.8203H9.08203C9.56749 15.8203 9.96094 15.4269 9.96094 14.9414C9.96094 14.4562 9.56749 14.0625 9.08203 14.0625Z" fill="black"/>
                                <path d="M18.2227 7.03125H11.7773C11.2919 7.03125 10.8984 7.42493 10.8984 7.91016C10.8984 8.39561 11.2919 8.78906 11.7773 8.78906H18.2227C18.7081 8.78906 19.1016 8.39561 19.1016 7.91016C19.1016 7.42493 18.7081 7.03125 18.2227 7.03125Z" fill="black"/>
                                <path d="M18.2227 3.51562H11.7773C11.2919 3.51562 10.8984 3.9093 10.8984 4.39453C10.8984 4.87999 11.2919 5.27344 11.7773 5.27344H18.2227C18.7081 5.27344 19.1016 4.87999 19.1016 4.39453C19.1016 3.9093 18.7081 3.51562 18.2227 3.51562Z" fill="black"/>
                                </svg>
                                -->
                            </div>
                            <div>
                                Аппараты для удаления сосудов
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/apparaty-dlya-udaleniya-tatu">
                            <div class="menu__icon">
                                <i class="fa fa-ban"></i>
                                <!-- <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.2093 11.8842C18.057 11.8842 18.7442 11.197 18.7442 10.3493C18.7442 9.50164 18.057 8.81445 17.2093 8.81445C16.3616 8.81445 15.6744 9.50164 15.6744 10.3493C15.6744 11.197 16.3616 11.8842 17.2093 11.8842Z" fill="black"/>
                                <path d="M1.02326 28.2791C1.02326 28.2791 1.02326 28.3023 1.02326 28.2791C1.02326 28.3023 1.02326 28.3023 1.04651 28.3023C1.06977 28.3488 1.09302 28.4186 1.11628 28.4651C1.11628 28.4884 1.13953 28.4884 1.13953 28.5116C1.13953 28.5349 1.16279 28.5349 1.16279 28.5581L1.18605 28.5814C1.2093 28.6279 1.25581 28.6512 1.27907 28.6977L1.30233 28.7209C1.32558 28.7442 1.32558 28.7442 1.34884 28.7674C1.37209 28.7674 1.37209 28.7907 1.37209 28.7907C1.39535 28.814 1.4186 28.814 1.44186 28.8372L1.46512 28.8605C1.46512 28.8605 1.48837 28.8605 1.48837 28.8837C1.51163 28.907 1.55814 28.907 1.5814 28.9302C1.60465 28.9302 1.60465 28.9302 1.62791 28.9535C1.65116 28.9535 1.67442 28.9767 1.67442 28.9767C1.74419 29 1.81395 29 1.88372 29H27.0465C27.5814 29 28 28.5814 28 28.0465V21.7674V2.95349C28 2.4186 27.5814 2 27.0465 2H1.95349C1.4186 2 1 2.4186 1 2.95349V21.7209V28C1 28.0698 1.02326 28.1628 1.02326 28.2326C1.02326 28.2558 1.02326 28.2791 1.02326 28.2791ZM26.1628 27.0698H5.13953L20.6744 16.907L26.1628 22.1395V27.0698ZM2.90698 3.90698H26.1628V19.5116L21.4419 15C21.1163 14.6977 20.6279 14.6512 20.2558 14.8837L15.814 17.814L12.7209 14.6977C12.3953 14.3721 11.907 14.3256 11.5349 14.5581L2.90698 20V3.90698ZM2.90698 22.2558L11.907 16.5814L14.186 18.8837L2.90698 26.2558V22.2558Z" fill="black"/>
                                </svg> 
                                <i class="fa fa-tasks" aria-hidden="true"></i>
                                -->
                            </div>
                            <div>
                                Аппараты для удаления тату
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/apparaty-dlya-epilyacii">
                            <div class="menu__icon">
                            <i class="fa fa-reply"></i>
                                <!--
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.7266 6.21094H5.27344V20.2734H24.7266V6.21094ZM22.9688 18.5156H7.03125V7.96875H22.9688V18.5156Z" fill="black"/>
                                    <path d="M0 2.69531V15H1.75781V23.7891H10.6055V27.3047H22.9102V23.7891H28.2422V16.0864L30 12.5708V2.69531H0ZM12.3633 25.5469V23.7891H14.1211V25.5469H12.3633ZM15.8789 25.5469V23.7891H17.6367V25.5469H15.8789ZM28.2422 12.1558L26.4844 15.6714V22.0312H21.1523V25.5469H19.3945V22.0312H3.51562V13.2422H1.75781V4.45312H28.2422V12.1558Z" fill="black"/>
                                    <path d="M15 16.7577C16.4539 16.7577 17.6367 15.5748 17.6367 14.121C17.6367 13.4503 17.0938 12.4139 16.0246 10.6144C15.6572 9.9959 15.8707 10.3519 15 8.8208C14.1242 10.3609 14.3442 9.99367 13.9754 10.6144C12.9062 12.4139 12.3633 13.4503 12.3633 14.121C12.3633 15.5748 13.5461 16.7577 15 16.7577ZM15 12.3439C15.3854 13.0175 15.8271 13.835 15.8787 14.1412C15.8679 14.6165 15.4778 14.9999 15 14.9999C14.5222 14.9999 14.1321 14.6165 14.1213 14.1413C14.1729 13.835 14.6146 13.0175 15 12.3439Z" fill="black"/>
                                    </svg>
                                -->
                            </div>
                            <div>
                                Аппараты для эпиляции
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/apparaty-dlya-gazozhidkostnogo-pilinga">
                            <div class="menu__icon">
                                <i class="fa fa-plus-square"></i>
                                <!--
                                <i class="fa fa-wrench" aria-hidden="true"></i>
                                -->
                            </div>
                            <div>
                                Аппараты для газожидкостного пилинга
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/apparaty-dlya-terapii-lica">
                            <div class="menu__icon">
                                <i class="fa fa-battery-three-quarters"></i>
                                <!--
                                    <i class="fa fa-user-secret" aria-hidden="true"></i>
                                -->
                            </div>
                            <div>
                                Аппараты для терапии лица
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

