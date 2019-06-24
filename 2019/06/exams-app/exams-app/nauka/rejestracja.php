<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Rejestracja - Nauka</title>
    <link rel="stylesheet" href="bootstrap-4/css/bootstrap.min.css">
    <link rel="stylesheet/less" href="css/style.less">
    <link rel="stylesheet/less" href="css/media.less">
</head>
<body>
    <div class="container-fluid">
        <section class="rej">
            <div class="content">
                <div class="row rej-body">
                    <div class="col-12">
                        <a href="#" class="header-logo rej-logo"></a>
                        <h2 class="rej-title">Rejestracja</h2>
                        <form action="/" class="rej-form">
                            <input type="text" class="rej-field" placeholder="Imię">
                            <input type="text" class="rej-field" placeholder="Nazwisko">
                            <input type="email" class="rej-field" placeholder="E-mail" value="Janusznowak@gmail.com" required>
                            <input type="password" class="rej-field" placeholder="Haslo">
                            <input type="password" class="rej-field" placeholder="Powtórz hasło">
                            
                            <label class="rej-accept">
                                <input type="checkbox" class="rej-check">
                                <a href="../polityka_prywatności.php" class="rej-accept_link">Zapoznałem się i akceptuje warunki rejestracji</a>
                            </label>
                            <button class="rej-button">
                                Zarejestruj się
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="bootstrap-4/js/bootstrap.min.js"></script>
    <script src="js/less.min.js"></script>
    <script src="js/apps.js"></script>
</body>
</html>