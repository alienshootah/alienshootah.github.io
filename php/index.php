<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Пример PHP-сценария</title>
	<style>
		h2:hover {
			transform: rotate(-999deg);
			transition: 120s;
		}
	</style>
</head>
<body>
	<h1>Информация о пользователе</h1>
	<h2><?php print('Привет, мир!'); ?></h2>
	<?php $browser = get_browser(null, true); ?>
	
	<div><strong>Ваш IP адрес:</strong></div>
	<div><?php print($_SERVER['REMOTE_ADDR']); ?></div>
	<div><strong>Операционная система:</strong></div>
	<div><?php print($browser['platform']); ?></div>
	<div><strong>Браузер:</strong></div>
	<div><?php print($browser['browser']); ?></div>
</body>
</html>