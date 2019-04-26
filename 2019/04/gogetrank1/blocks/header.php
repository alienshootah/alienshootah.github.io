<html>
<head>
	<title>Gogetrank</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/jquery.fancybox.min.css" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css" />
	<link rel="stylesheet" type="text/css" href="slick/slick.css">
    <link rel="stylesheet" type="text/css" href="slick/slick-theme.css">
	<link rel="stylesheet" href="css/flags.css">
	<link rel="stylesheet" href="css/main.css">
</head>
<body>
	<nav class="main">
		<div class="container">
			<div class="row">
				<div class="col-lg-3 col-md-3 col-sm-12">
					<div class="logo-block">
						<a href="#" class="mobile-btn">
							<span></span>
							<span></span>
							<span></span>
						</a>
						<a href="#">
							<img src="img/logo.png" style="max-width: 211px;" alt=""> <!--  logo.svg main-logo.png -->
						</a>
					</div>
				</div>
				<div class="col-lg-9 col-md-9 col-sm-12">
					<div class="mobile-block">
						<div class="nav-block">
							<ul class="menu">
								<li>
									<a href="#">Решения</a>
								</li>
								<li>
									<a href="#">Прайс</a>
								</li>
								<li>
									<a href="#">О нас</a>
								</li>
							</ul>
							<ul class="lk">
								<li class="enter">
									<a href="#login" class="loginsbutton" data-box="1" data-toggle="modal" data-target="#reg">Войти</a>
								</li>
								<li class="registration">
									<a href="#reg" class="loginsbutton" data-box="2" data-toggle="modal" data-target="#reg">Регистрация</a>
								</li>
							</ul>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</nav>
	<header>
		<div class="top-block">
			<div class="position-middle">
				<div class="container">
					<div class="row">
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
							<div class="title-block">
								<style type="text/css">
									.select-flag {
										background: #fff;
										border-radius: 25px;
										width: 220px;
										height: 293px;
									}
									.select-flag .buttons-flag {
										padding: 20px 
									}
									.select-flag .buttons-flag button {
										background: none;
										border:none;
										border-bottom: 2px solid #f1ecec;
										color: #3a4156;
										font-weight: bold;
										padding-bottom: 8px;
										width: 50%;
										float: left;
										font-size: 16px;
										transition: 0.1s;
									}

									.select-flag .buttons-flag button.active,
									.select-flag .buttons-flag button:hover {
										border-bottom: 2px solid #3057bf; 
										color: #3057bf;
									}

									.select-flag  ul {
										border: none;
										box-shadow: none !important;
										display: block !important;

									}
									.select-flag  ul {
										width: 100% !important; 
									}
									.select-flag  ul li:first-child {
										display: none !important;
									}
									.select-flag  ul li a {
										cursor: pointer;
									}
									.select-flag button {
										display: none !important;
									}
									.select-flag .no-result {
										text-align: center;
										font-size: 12px;
									}

									.select-flag .buttons-flag button {
										display: block !important;
									}

									.select-flag input[type="text"] {
										background: #f7f7f7;
										border-radius: 40px;
										height: 30px;
										width: 180px;
										margin: 30px auto 20px;
										border: none;
										position: relative;
										display: block;
										padding: 0 10px 0 40px;
										font-size: 12px;
										background: url("img/search-flag.png") no-repeat top center #f7f7f7;
										background-position: 12px 8px;
									}
									.select-flag {
										overflow: hidden;
										position: absolute;
										-webkit-box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.1);
										-moz-box-shadow:    0px 5px 6px 0px rgba(0, 0, 0, 0.1);
										box-shadow:         0px 5px 6px 0px rgba(0, 0, 0, 0.1);
									}
									.select-flag:after {
									    content: ' ';
									    width: 100%;
									    position: absolute;
									    pointer-events: none;
									    z-index: 1999;
									    left: 0;
									    bottom: -45px;
									    height: 145px;
									    background: url(img/hide-block-reviews.png) repeat-x top center;
									}

									.select-block p {
										cursor: pointer;
										display: block;
										height: 43px;
										line-height: 43px;
									}

									.select-block {
										position: relative;
									}
									.flag-input {
										position: relative;
									}
									.select-flag {
										position: absolute;
										top: 60px;
										left: 0;
									}
									.flag-input {
										width: 10px;
										float: left;
									}

									.select-flag .Google-block, 
									.select-flag .Yandex-block {
										display: none;

									}
									.select-flag .active {
										display: block;
									}
								</style>
								
								<h1><span>Точная проверка</span>позиций сайта<br>и прогноз SEO трафика</h1>
								<form action="#" method="post" class="check-site">
									<p class="title">Проверяй позиции и получай кэшбек <span>до 30%</span></p>
									<div class="domen-block">
										<div class="form-block">
											<div class="input-block">
												<input type="text" name="domen" placeholder="Введите домен">
											</div>
											<div class="select-block">
												<p><i class="flagstrap-icon flagstrap-ru"></i><span>RU</span></p>
													
													<div class="select-flag" style="display: none;">
														<div class="buttons-flag">
															<button class="active" data-box="Google-block">Google</button>
															<button data-box="Yandex-block">Yandex</button>
														</div>
														<div class="Google-block active">
															<input type="text" name="search-block" placeholder="Найти">
															<div id="countrySelect"></div>
														</div>
														<div class="Yandex-block">
															<input type="text" name="search-block" placeholder="Найти">
															<div id="citySelect"></div>
														</div>
													
													</div>
												
												<!--
												<div id="country"
										        	data-button-size="country"
										            data-input-name="country"
										            data-selected-country="UA"
										            data-scrollable="true"
										            data-scrollable-height="250px"
										            data-countries='{"UA": "Украина","RU": "RU"}'>
										        </div>
										    	-->

												<!-- <select name="region">
													<option style="background-image:url(img/ua.png);" value="UA">
														UA
													</option>
													<option value="UA">
														<img src="img/ua.png" alt="">RU
													</option>
													<option value="UA">
														<img src="img/ua.png" alt="">EN
													</option>
												</select>-->
											</div> 

										</div>
										<input type="submit" value="Начать">
									</div>
								</form>
								
							</div>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 hidden-xs">
							<div class="img-block">
								<img src="img/top.png" alt="">
							</div>
						</div>
					</div>


				</div>
			</div>
		</div>
		
	</header>