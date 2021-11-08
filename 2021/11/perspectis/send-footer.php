<?php
$fio2 = $_POST['fio2'];
$phone2 = $_POST['phone2'];
$message2 = $_POST['message2'];

$fio2 = htmlspecialchars($fio2);
$phone2 = htmlspecialchars($phone2);
$message2 = htmlspecialchars($message2);

$fio2 = urldecode($fio2);
$phone2 = urldecode($phone2);
$message2 = urldecode($message2);

$fio2 = trim($fio2);
$phone2 = trim($phone2);
$message2 = trim($message2);

// echo $fio2;
// echo "<br>";
// echo $phone2;

if (mail("kk@2242000.ru", "Заявка с сайта", 
"ФИО:".$fio2.". Телефон: ".$phone2.". Сообщение: ".$message2,
"From: kk@2242000.ru \r\n"))
 {     echo "Congratulations! We have received your message and will contact you shortly.";
} else {
    echo "Errors occurred while sending the message. Try again";
}?>