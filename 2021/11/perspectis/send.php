<?php
$fio = $_POST['fio'];
$phone = $_POST['phone'];
$fio = htmlspecialchars($fio);
$phone = htmlspecialchars($phone);
$fio = urldecode($fio);
$phone = urldecode($phone);
$fio = trim($fio);
$phone = trim($phone);
// echo $fio;
// echo "<br>";
// echo $phone;
if (mail("i-malisov@yandex.ru", "Заявка с сайта", "ФИО:".$fio.". Телефон: ".$phone ,"From: kk@2242000.ru \r\n"))
 {     echo "Congratulations! We have received your message and will contact you shortly.";
} else {
    echo "Errors occurred while sending the message. Try again";
}?>