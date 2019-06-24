<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Myprofile - Nauka</title>
    <link rel="stylesheet" href="bootstrap-4/css/bootstrap.min.css">
    <link rel="stylesheet/less" href="css/style.less">
    <link rel="stylesheet/less" href="css/media.less">
</head>
<body>
    <div class="container-fluid">
        <div class="alert custom-alert alert-dismissible">
            Aby zacząć korzystać w pełni z naszej aplikacji, należy opłacić subskrypcję, którą znajdziesz w zakładce Mój Profil.
            <button type="button" class="custom-close" data-dismiss="alert">&times;</button>
        </div>
        <?php include("header.php"); ?>
        <section class="profile">
            <div class="content">
                <h2 class="hidden">My profile</h2>
                <ul class="profile-list">
                    <li class="text-center profile-item">
                        <span class="profile-name">Witaj, Janusz Nowak</span>
                        <span class="profile-name_descr">Zostań budowlańcem już dziś!</span>
                        <div class="profile-picture">
                            <img src="img/worker.png" alt="" class="profile-img">
                        </div>
                    </li>
                    <li class="profile-item">
                        <h4 class="profile-dane">Dane Osobove</h4>
                        <form class="profile-form">
                            <label for="mail">Email
                                <input type="email" class="profile-field" id="mail" placeholder="Janusznowak@gmail.com" required>
                            </label>
                            <label for="name">Imię i Nazwisko
                                <input type="text" class="profile-field" id="name" placeholder="Janusz Nowak" required>
                            </label>
                            <label for="pass">Hasło
                                <input type="password" class="profile-field" id="pass" placeholder="***********" required>
                            </label>
                            <div class="text-center">
                                <button class="profile-button">Edytuj dane</button>
                            </div>
                        </form>
                    </li>
                    <li class="profile-item">
                        <h4 class="profile-dane">Subskrypcja</h4>
                        <span class="profile-brak">Brak</span>
                        <p class="profile-brak_descr">Subskrypcja nieaktywna</p>
                        <p class="profile-zapla">Zapłać za pośrednictwem konta PayU</p>
                        <form action="/" class="profile-form">
                            <label class="container">Buy subscription on 12 months - 199 zł
                                <input type="radio" checked="checked" name="radio">
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">Buy “dożywotnio” - 299 zł
                                <input type="radio" name="radio">
                                <span class="checkmark"></span>
                            </label>
                            <div class="text-center profile-button-end">
                                <button class="profile-button">Zapłać</button>
                            </div>
                        </form>
                    </li>
                </ul>
            </div>
        </section>
        <?php include("footer.php"); ?>
    </div>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="bootstrap-4/js/bootstrap.min.js"></script>
    <script src="js/less.min.js"></script>
    <script src="js/apps.js"></script>
</body>
</html>