    <?php include("header.php"); ?>
        <main>
            <div class="content">
                <div class="main-body">
                    <div class="row">
                        <div class="col-6">
                            <h1 class="main-title">Egzamin</h1>
                            <p class="main-descr">
                                <span class="main-descr_text">Specjalizacja</span>
                                Instalacyjna w zakresie sieci, instalacji i urządzeń elektrycznych
                            </p>
                            <p class="main-descr">
                                <span class="main-descr_text">Typ uprawnień</span>
                                Projektowanie ograniczone
                            </p>
                        </div>
                        <div class="col-6">
                            <ul class="line">
                                <li class="line-item">
                                    <span class="main-descr_text">Poster</span>
                                    <div class="line-body">
                                        <div class="line-visual line-visual-red">78%</div>
                                    </div>
                                </li>
                                <li class="line-item">
                                    <span class="main-descr_text">Czas</span>
                                    <div class="line-body">
                                        <div class="line-visual line-visual-blue">35 min.</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul class="half">
                        <li class="half-item">
                            <span class="main-descr_text">Ilość pytań</span>
                            <span class="half-number half-number-blue">12 / 24</span>
                        </li>
                    </ul>
                    <p class="text-center main-question">13. Dlaczego nie można budować piwnic na podmokłym terenie?</p>
                    <form method="post" action="send.php">
                        <div class="radio-group question">
                            <div class='question-item radio selected' data-value="One">
                                <input type="hidden">
                                <span class="question-lett">A</span>
                                Bo nie można i tyle<br>
                                w temacie proszę<br>
                                waści pana godnego
                            </div>
                            <div class='question-item radio' data-value="Two">
                                <input type="hidden">
                                <span class="question-lett">B</span>
                                Panie, bo się to przeca<br>
                                zapadnie i co wtedy<br>
                                będzie, tragedia panie
                            </div>
                            <div class='question-item radio' data-value="Three">
                                <input type="hidden">
                                <span class="question-lett">C</span>
                                Przecież to nie ma <br>
                                sensu aby budować <br>
                                na wodzie typie
                            </div>
                        </div>
                    </form>
                    <div class="end">
                        <div class="row end-body">
                            <div class="col-2">
                                <button class="end-btn"> <span class="end-arrow end-arrow-left"></span> Wróć</button>
                            </div>
                            <div class="col-8">
                                <div class="egzamin-drop dropdown">
                                    <button type="button" class="end-title egzamin-button" data-toggle="dropdown">
                                        Wybierz pytanie do którego chcesz wrócić <span class="egzamin-dropdown"></span>
                                    </button>
                                    <div class="dropdown-menu">
                                        <ol class="egzamin-sublist">
                                            <li class="egzamin-tag"><a href="#" class="egzamin-link">Lorem ipsum dolorem semit emt dolorem semit dolorem valoremsemit dolorem</a></li>
                                            <li class="egzamin-tag"><a href="#" class="egzamin-link">Lorem ipsum dolorem semit emt dolorem semit dolorem valoremsemit dolorem</a></li>
                                            <li class="egzamin-tag"><a href="#" class="egzamin-link">Lorem ipsum dolorem semit emt dolorem semit dolorem valoremsemit dolorem</a></li>
                                            <li class="egzamin-tag"><a href="#" class="egzamin-link">Lorem ipsum dolorem semit emt dolorem semit dolorem valoremsemit dolorem</a></li>
                                            <li class="egzamin-tag"><a href="#" class="egzamin-link">Lorem ipsum dolorem semit emt dolorem semit dolorem valoremsemit dolorem</a></li>
                                            <li class="egzamin-tag"><a href="#" class="egzamin-link">Lorem ipsum dolorem semit emt dolorem semit dolorem valoremsemit dolorem</a></li>
                                            <li class="egzamin-tag"><a href="#" class="egzamin-link">Lorem ipsum dolorem semit emt dolorem semit dolorem valoremsemit dolorem</a></li>
                                            <li class="egzamin-tag"><a href="#" class="egzamin-link">Lorem ipsum dolorem semit emt dolorem semit dolorem valoremsemit dolorem</a></li>
                                            <li class="egzamin-tag"><a href="#" class="egzamin-link">Lorem ipsum dolorem semit emt dolorem semit dolorem valoremsemit dolorem</a></li>
                                            <li class="egzamin-tag"><a href="#" class="egzamin-link">Lorem ipsum dolorem semit emt dolorem semit dolorem valoremsemit dolorem</a></li>
                                            <li class="egzamin-tag"><a href="#" class="egzamin-link">Lorem ipsum dolorem semit emt dolorem semit dolorem valoremsemit dolorem</a></li>
                                            <li class="egzamin-tag"><a href="#" class="egzamin-link">Lorem ipsum dolorem semit emt dolorem semit dolorem valoremsemit dolorem</a></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div class="col-2 text-right">
                                <button class="end-btn end-btn-reverse">
                                    Dalej <span class="end-arrow end-arrow-right"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="bootstrap-4/js/bootstrap.min.js"></script>
    <script src="js/less.min.js"></script>
    <script src="js/apps.js"></script>
</body>
</html>