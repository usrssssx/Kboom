<?php
$customerName = $_POST['customer_name'];
$customerNumber = $_POST['customer_number'];
$customerAge = $_POST['customer_age'];
$customerKid = $_POST['customer_kid'];

$message = '
Детали заявки
ФИО заказчика: ' . $customerName . '
Номер телефона: ' . $customerNumber . '
Возраст: ' . $customerAge . '
Имя ребенка: ' . $customerKid . ' '."\n" . '';


$from = 'noreply@kolbaboom.store';
$to = '5krippi@mail.ru';
$subject = 'Данные о заявке с сайта';
if (mail($to, 'Новая заявка!', $message, $from)){
  echo 'Ваша заявка отправлена!';  
} else {
    echo 'Произошла ошибка';}

?>