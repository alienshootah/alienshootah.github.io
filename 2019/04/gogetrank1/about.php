
<?php 
	include "blocks/header.php";
?>	
<style>
header {
    display: none;
}
</style>

<section class="bread">
    <div class="container">
        <ul class="about-menu">
            <li class="about-menu_item"><a href="#" class="about-menu_link">Главная</a></li>
            <li class="about-menu_item">О Нас</li>
        </ul>
    </div>
</section>
<section class="about">
    <div class="container">
        <h2 class="hidden">Информация о нас</h2>
        <div class="row about-body">
            <div class="col-lg-6 col-md-6 col-sm-12 about-text">
                <h3 class="about-title">
                    <b class="about-title_big">Мы — команда разработчиков</b> <br>
                    в составе которой программисты из ведущих 
                    аутсорсинговых компаний Украины
                </h3>
                <p class="about-descr">
                    Дополнительно мы обладаем экспертизой в сфере 
                    поискового маркетинга и математики
                </p>
                <div class="about-more">
                    <a href="#" class="about-more_link">Приступить к работе</a>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 about-picture">
                <img src="img/about-image.jpg" alt="" class="about-image">
            </div>
        </div>
    </div>
</section>
<section class="who">
    <div class="container">
        <h2>Кто работает над развитием сервиса</h2>
        <p class="h2-desc">Приятные лица</p>
        <div class="row who-body">
            <div class="col-lg-6 col-md-6 col-sm-12 who-text">
                <p class="who-descr">
                    Мы мечтаем создать полезный сервис по проверке позиций, 
                    отслеживанию конкурентов и анализу причин их роста, 
                    а также прогнозу трафика. Мы надеемся, что у нас получиться 
                    не просто очередной SEO инструмент, а <b>систему</b>, которая 
                    <b>выведет процесс SEO продвижения на новый уровень</b>
                </p>
                <p class="who-answer">
                    <b>Хотите стать партнером или есть идеи для сервиса ?</b>
                </p>
                <div class="who-action">
                    <div class="who-action_item">
                        <a href="#" class="about-more_link">Стать партнером</a>
                    </div>
                    <div class="who-action_item">
                        <a href="#" class="about-more_link about-more_link-reverse">Внести предложение</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 who-picture">
            <ul class="slider-for who-slider">
                <li class="who-item" style="background-image: url(img/who-item.jpg);">
                    <div class="who-slider_text">
                        <div class="who-slider_name">Дмитрий<br> Ковшун</div>
                        <div class="who-slider_wac">Producer owner</div>
                    </div>
                </li>
                <li class="who-item" style="background-image: url(img/who-item.jpg);">
                    <div class="who-slider_text">
                        <div class="who-slider_name">Дмитрий<br> Ковшун</div>
                        <div class="who-slider_wac">Producer owner</div>
                    </div>
                </li>
                <li class="who-item" style="background-image: url(img/who-item.jpg);">
                    <div class="who-slider_text">
                        <div class="who-slider_name">Дмитрий<br> Ковшун</div>
                        <div class="who-slider_wac">Producer owner</div>
                    </div>
                </li>
            </ul>

            <ul class="slider-nav who-nav">
                <li class="who-nav_item" style="background-image: url(img/who-nav_image.jpg);"></li>
                <li class="who-nav_item" style="background-image: url(img/who-nav_image.jpg);"></li>
                <li class="who-nav_item" style="background-image: url(img/who-nav_image.jpg);"></li>
                <li class="who-nav_item" style="background-image: url(img/who-nav_image.jpg);"></li>
                <li class="who-nav_item" style="background-image: url(img/who-nav_image.jpg);"></li>
            </ul>

            </div>
        </div>
    </div>
</section>


<?php 
	include "blocks/footer.php";
?>	
