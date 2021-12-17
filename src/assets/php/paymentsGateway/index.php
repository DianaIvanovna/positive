<?php

//========================== Конфиг ==================
// Данные доступа к Букзе
define('BUKZA_LOGIB', );
define('BUKZA_PASS', );

// Данные доступа к сберу
define('SBERAPI_LOGIN', 'T741208548498-api');
define('SBERAPI_PASS', 'T741208548498');

// Путь к файлику с платежами
define('PATH_PAYMENTS_FILE', __DIR__ . '/payments.json');


//========================== Входящие параметры =============

$rawRequest = file_get_contents('php://input');
$arRequest = json_decode($rawRequest, true);
// выкинем exception если не удалось получить валидный  json
if ($arRequest === false ) {
    throw new ErrorException('Не удалось распарсить входящий json (' . $rawRequest . ')', 0);
}

//= получим тип запроса, запрос от букзы или ответ от сбера
$action = $_GET['action'];

require __DIR__ . '/functions.php';


switch($action) {
    case 'bukza': 
        //= сформировать и отправить запрос в сбер

        //= сохранить данные о заказе в файлике
        //= отправить букзе адрес платежной формы

        break;

    case 'sber':
        //= отправить букзе информацию о платеже
        break;
}




// $s = hash_hmac('sha256', 'Message', 'secret', true);
// echo base64_encode($s);


// Пример входящего запроса от Bukza
// {
//     userId:11223,
//     orderNumber:"574285869",
//     command: "GetPaymentData",
//     data: "",
//     amount: 99.75,
//     timestamp: 1596706182,
//     hash: "p2t1xcpBiXLPPDdB129vUctRAgGbzQgRcnX4IiZ0bNE="
//     email: "ivanov@example.com",
//     phone: "+79111111111",
// }


// Вот так нужно ответить букзе по завершении платежа
// {
//     userId:11223,
//     orderNumber:"574285869",
//     command: "CaptureCallback",
//     data: "18493853499",
//     amount: 99.75,
//     timestamp: 1596706182,
//     hash: "eUKOwld1sEK3axhF9ZAy0WugXMJW+9nrs4BRlvnCeb0=",
//     comment: "Любой комментарий к платежу. Он будет виден в интерфейсе управляющего. Он не участвует в подписи запроса."
// }

// Документация сбера
// https://www.sberbank.ru/ru/legal/finapi
// https://snipp.ru/php/sberbank-pay