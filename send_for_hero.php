<?php
$customerName = $_POST['customer_name2'];
$customerNumber = $_POST['customer_number2'];
$customerAge = $_POST['customer_age2'];
$customerKid = $_POST['customer_kid2'];

$message = '
Детали заявки
ФИО заказчика: ' . $customerName . '
Номер телефона: ' . $customerNumber . '
Возраст: ' . $customerAge . '
Имя ребенка: ' . $customerKid . ' '."\n" . '';


$from = 'noreply@kolbaboom.store';
$to = '5krippi@mail.ru';
if (mail($to, 'Новая заявка!', $message, $from)){
    echo 'Ваша заявка отправлена!';  
  } else {
      echo 'Произошла ошибка';}
  
?>