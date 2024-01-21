<?php
$to = 'example.ru@gmail.com';
$subject = "Обратный звонок";
$message = "Имя: {$_REQUEST['callback_username']}\r\n";
$message .= "Телефон: {$_REQUEST['callback_phone']}\r\n";
$headers = "From: sender@example.com\r\n";
$headers .= "Reply-To: sender@example.com\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
if (mail($to, $subject, $message, $headers)) {
    echo 'Письмо успешно отправлено';
} else {
    echo 'Ошибка при отправке письма';
}

