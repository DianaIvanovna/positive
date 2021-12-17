<?php
$rawRequest = file_get_contents('php://input');
$arRequest = json_decode($rawRequest, true);
// выкинем exception если не удалось получить валидный  json
if ($arRequest === false ) {
    throw new ErrorException('Не удалось распарсить входящий json (' . $rawRequest . ')', 0);
}

//= получим тип запроса, запрос от букзы или ответы от сбера
$action = $_GET['action'];

require __DIR__ . '/functions.php';


switch($action) {
    case 'bukza': 
        //= сформировать и отправить запрос в сбер
        $arSberPay = SberSend_CreatePay([
            'number'        => $arRequest['orderNumber'],
            'amount'        => intval($arRequest['amount']) * 100,
            'description'   => 'телефон: ' . $arRequest['phone'],
        ]);

        //= сохранить данные о заказе в файлике
        if ($arSberPay['errorCode'] == 0) {
            $arStore = GetFromStore();
            $arStore[$arSberPay['orderId']] = [
                'bankID' => $arSberPay['orderId'],
                'bukzaID' => $arRequest['orderNumber'],
                'amount' => $arRequest['amount'],
                'date'  => date('d.m.Y H:i'),
            ];
            SaveInStore($arStore);
        }
        
        //= отправить букзе адрес платежной формы
        SendJSON([
            'url' => $arSberPay['formUrl'],
            'redirect' => false,
        ]);

        break;

    case 'success':
        $bankID = $_GET['orderId'];

        $arStore = GetFromStore();
        if (!count($arStore)) {
            throw new ErrorException('Не найден заказ № ' . $bankID . ' в хранилище', 0);
        }

        //= отправить букзе информацию о платеже
        $res = BukzaSend([
            'orderNumber'   => $arStore[$bankID]['bukzaID'],
            'command'       => 'AuthorizeCallback',
            'data'          => '',
            'amount'        => $arStore[$bankID]['amount'],
            'timestamp'     => time(),
            'hash'          => '................',
            'comment'       => '..................'
        ]);

        break;
        
    case 'fail':
        $bankID = $_GET['orderId'];

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

// Вот так ответит сбер если платеж создан
// {
// 	"errorCode":"0",
// 	"orderId":"70906e55-7114-41d6-8332-4609dc6590f4",
// 	"formUrl":"https://3dsec.sberbank.ru/payment/merchants/test/payment_ru.html?mdOrder=70906e55-7114-41d6-8332-4609dc6590f4"
// }