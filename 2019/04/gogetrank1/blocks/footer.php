		<footer>
			<div class="container">
				<div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <ul class="footer-nav">
                            <li><a href="#">Решения</a></li>
                            <li><a href="#">Прайс</a></li>
                            <li><a href="#">О нас</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="address-block">
                            <p>Украина, Киев, Тополевая 4, офис 7.<br class="visible-sm visible-xs"> Телефон: <a href="tel:+38-066-166-77-22">+38-066-166-77-22</a></p>
                            <p>Техподдержка <a href="mailto:support@gogetrank.com">support@gogetrank.com</a></p>
                        </div>
                    </div>
                </div>
                <ul class="under">
                    <li><a href="#">Политика конфиденциальности</a></li>
                    <li><a href="#">Отказ от ответственности</a></li>
                    <li><a href="#">Согласие с рассылкой</a></li>
                </ul>
			</div>
		</footer>
    <!-- Modal -->
    <div class="modal fade modal-login" id="reg" tabindex="-1" role="dialog" aria-labelledby="regModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true"><img src="img/exit-button.png"></span>
            </button>
          </div>
          <div class="modal-body">
            <style type="text/css">
              .modal-login .modal-dialog {
                max-width: 412px;
                width: 100%;
              }

              .modal-login .modal-header {
                border-bottom: 0;
              }

              .modal-login .modal-header .close {
                opacity: 1;
                transition: 0.1s;
              }
              .modal-login .modal-header .close:hover {
                opacity: 0.9
              }

              .buttons-login {
                padding: 0 16px 0 24px;
              }
              .buttons-login button {
                width: 50%;
                height: 39px;
                color: #3a4156;
                text-align: center;
                font-weight: bold;
                overflow: hidden;
                border: 1px solid #e9e9e9;
                outline: none;
                background: #fff;
              }

              .buttons-login button.active {
                background-color: #01cca3;
                color: #fff;
                font-size: 14px;
                text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.15);
              }

              .buttons-login button:first-child {
                margin-right: -4px;
                -webkit-border-top-left-radius: 20px;
                -webkit-border-bottom-left-radius: 20px;
                -moz-border-radius-topleft: 20px;
                -moz-border-radius-bottomleft: 20px;
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;

              }
              .buttons-login button:last-child {
                margin-left: -4px;
                -webkit-border-top-right-radius: 20px;
                -webkit-border-bottom-right-radius: 20px;
                -moz-border-radius-topright: 20px;
                -moz-border-radius-bottomright: 20px;
                border-top-right-radius: 20px;
                border-bottom-right-radius: 20px;
              }
              .form-login {
                padding: 0 10px;
                margin-top: 20px;
              }

              .form-login label {
                display: block;
                font-weight: 300;
                margin-bottom: 20px;
                color: #3a4156;

              }
              .form-login label:last-child {
                margin-bottom: 0;
              }
              .form-login label span {
                display: block;
                font-weight: 300;
                font-size: 16px;
                margin-bottom: 6px;
              }
              .form-login label input {
                width: 100%;
                height: 40px;
                color: #3a4156;
                outline: none;
                background: #f7f7f7;
                border-radius: 50px;
                border: none;
                padding: 0 25px;
                font-size: 14px;
                font-weight: 300;

              }

              .form-login label input.error {
                background: #f8eeee
              }

              .form-login label .error-text {
                color: #ad4b4b;
                font-size: 12px;
                margin-top: 6px;
                display: none;
                position: relative;
                top: 6px;
              }
              
              .form-login label.save input {
                display: none;
              }
              .form-login label.save input + span {
                float: left;
                width: 16px;
                height: 16px;
                margin: -1px 10px 20px 0 ;
                padding: 0 0px 0 0;
                border-radius: 3px;
                display: block;
                border: 1px solid #e9e9e9;
                background: none;
                position: relative;
              }
              .form-login label.save:hover {
                cursor: pointer;
              }
              .form-login label.save input:checked + span:after {
                position: absolute;
                width: 10px;
                display: block;
                height: 10px;
                top: 2px;
                border-radius: 2px;
                left: 2px;
                background: #01cca3;
                content: ' ';
              }

              .form-login .sub {
                margin-top: 20px;
              }
              .form-login .sub {
                font-size: 12px;
              }
              .form-login .sub a {
                font-size: 12px;
                text-decoration: underline;
              }


              .form-login input[type='submit'] {
                  font-size: 16px;
                  color: #fefefe;
                  text-align: center;
                  display: block;
                  text-decoration: none;
                  height: 40px;
                  box-sizing: border-box;
                  padding: 7px 45px;
                  transition: 0.1s;
                  border-radius: 22px;
                  border:0;
                  font-weight: 500;
                  background-color: #01cca3;
                  /* box-shadow: inset  1px 0px 0px rgba(255, 255, 255, 0.45);
                  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.15); */
                  box-shadow: inset 1px 1px 0px rgba(255, 255, 255, 0.45);
                  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.15);
                  margin-left: 10px;
                  margin: 20px auto;
                  background-position: -4px -60px ;
              }

              .form-login input[type='submit']:hover {

                    background: url("img/hovera.png") no-repeat top center #01cca3;
                   background-position: -55px -24px;

                }
              .form-login input[type='submit']:active {
                  background: #05b08d;
              }

              .box {
                display: none;
              }
              .box.active {
                display: block;
              }
              .modal-content {
                border-radius: 26px;
              }



            </style>
            <div class="buttons-login">
              <div class="row">
                <button class="login active" data-box="1">Войти</button>
                <button class="reg" data-box="2">Регистрация</button>
              </div>
            </div>
            <div class="box box-1 active form-login">
              <form action="/" method="post">
                <div class="row">
                  <div class="col-md-12">
                    <label>
                      <span>E-mail</span>
                      <input type="text" name="email" class="test-email">
                      <span class="error-text">Вы ввели неверные данные</span>
                    </label>
                    <label>
                      <span>Пароль</span>
                      <input type="text" name="password">
                    </label>
                  </div>
                </div>
                <div class="row sub">
                  <div class="col-md-6">
                    <label class="save">
                      <input type="checkbox" name=""><span></span>Запомнить меня
                      
                    </label>
                  </div>
                  <div class="col-md-6">
                    <a class="pull-right" href="#lostpassword">Забыли пароль?</a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <input type="submit" name="" value="Войти">
                  </div>
                </div> 
              </form>
            </div>
            <div class="box box-2 form-login">
              <form action="/" method="post">
                <div class="row">
                  <div class="col-md-12">
                    <label>
                      <span>E-mail</span>
                      <input type="text" name="email" class="test-email">
                      <span class="error-text">Вы ввели неверные данные</span>
                    </label>
                    <label>
                      <span>Пароль</span>
                      <input type="text" name="password">
                    </label>
                    <label>
                      <span>Повторите пароль</span>
                      <input type="text" name="repassword">
                    </label>
                  </div>
                </div>
                <div class="row sub">
                  <div class="col-md-12">
                    <label class="save">
                      <input type="checkbox" style="margin-bottom: 20px;" name=""><span></span>Я согласен с условиями<br><a href="#police">Политики конфиденциальности</a>
                    </label>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <input type="submit" name="" value="Войти">
                  </div>
                </div> 
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.fancybox.min.js"></script>
    <script src="js/jquery.flagstrap.js"></script>
    <script src="slick/slick.min.js"></script>
    <script src="js/main.js"></script>
	</body>
</html>