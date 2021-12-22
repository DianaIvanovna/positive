<?php
/**
 * ## Букза
 * https://bukza.ru/questions/payments/api/

 * Пример входящего запроса от Bukza
 * {
 *     userId:11223,
 *     orderNumber:"574285869",
 *     command: "GetPaymentData",
 *     data: "",
 *     amount: 99.75,
 *     timestamp: 1596706182,
 *     hash: "p2t1xcpBiXLPPDdB129vUctRAgGbzQgRcnX4IiZ0bNE="
 *     email: "ivanov@example.com",
 *     phone: "+79111111111",
 * }
 * 
 * Вот так нужно ответить букзе по завершении платежа
 * {
 *     userId:11223,
 *     orderNumber:"574285869",
 *     command: "CaptureCallback",
 *     data: "18493853499",
 *     amount: 99.75,
 *     timestamp: 1596706182,
 *     hash: "eUKOwld1sEK3axhF9ZAy0WugXMJW+9nrs4BRlvnCeb0=",
 *     comment: "Любой комментарий к платежу. Он будет виден в интерфейсе управляющего. Он не участвует в подписи запроса."
 * }
 * 
 * 
 * ## Документация сбера
 * https://www.sberbank.ru/ru/legal/finapi
 * https://snipp.ru/php/sberbank-pay
 *
 * Вот так ответит сбер если платеж создан
 * {
 * 	"errorCode":"0",
 * 	"orderId":"70906e55-7114-41d6-8332-4609dc6590f4",
 * 	"formUrl":"https://3dsec.sberbank.ru/payment/merchants/test/payment_ru.html?mdOrder=70906e55-7114-41d6-8332-4609dc6590f4"
 * }
 * 
 * https://securepayments.sberbank.ru/wiki/doku.php/integration:api:start
 * https://securepayments.sberbank.ru/wiki/doku.php/integration:cms:start
 * https://securepayments.sberbank.ru/wiki/doku.php/integration:simple
 * https://securepayments.sberbank.ru/wiki/doku.php/mportal3:auth
 * https://securepayments.sberbank.ru/wiki/doku.php/merchant_website_guidelines
 * https://securepayments.sberbank.ru/wiki/doku.php/test_cards
 * 
 */

define('BUKZA_API_KEY', 'nUpKT4$kxxWK');
define('SBER_LOGIN', 'T741208548498-api');
define('SBER_PASS', 'T741208548498');
define('FILE_DEBUG_LOG', getenv('DOCUMENT_ROOT') . '/assets/php/paymentsGateway/debug.log');

$arRequest = json_decode(file_get_contents('php://input'), true);

// выкинем exception если не удалось получить валидный  json
if ($arRequest === false ) {
    throw new ErrorException('Не удалось распарсить входящий json (' . $rawRequest . ')', 0);
}

//= получим тип запроса, запрос от букзы или ответы от сбера
$action = $_GET['action'];

require __DIR__ . '/functions.php';

// TODO DEBUG
file_put_contents(FILE_DEBUG_LOG, date('d.m.Y H:i') . ' Запрошено действие (action): ' . $action . "\n", FILE_APPEND);
// TODO DEBUG
file_put_contents(FILE_DEBUG_LOG, date('d.m.Y H:i') . " Тело запроса:\n" . print_r($arRequest, true) . "\n\n", FILE_APPEND);

switch($action) {
    case 'bukza': 

        //= сформировать и отправить запрос в сбер
        $arSberPay = SberSend_CreatePay([
            'number'        => $arRequest['OrderNumber'],
            'amount'        => intval($arRequest['Amount']) * 100,
            'description'   => 'телефон: ' . $arRequest['Phone'],
            'userID'        => $arRequest['UserId'],
        ], SBER_LOGIN, SBER_PASS);

        // TODO DEBUG
        file_put_contents(FILE_DEBUG_LOG, date('d.m.Y H:i') . " Ответ от Сбера при создании платежа:\n" . print_r($arSberPay, true) . "\n\n", FILE_APPEND);

        //= сохранить данные о заказе в файлике
        if (isset($arSberPay['orderId'])) {
            $arStore = GetFromStore();
            $arStore[$arSberPay['orderId']] = [
                'bukzaUserID' => $arRequest['UserId'],
                'bukzaData' => $arRequest['Data'],
                'bukzaOrderID' => $arRequest['OrderNumber'],
                'sberOrderID' => $arSberPay['orderId'],
                'amount' => $arRequest['Amount'],
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
        $bankOrderID = $_GET['orderId'];

        $arStore = GetFromStore();

        if (!count($arStore)) {
            throw new ErrorException('Не найден заказ № ' . $bankOrderID . ' в хранилище', 0);
        }

        $timeStamp = time();

        $queryHash = hash_hmac(
            'sha256',
            $arStore[$bankOrderID]['bukzaUserID'] . $arStore[$bankOrderID]['bukzaOrderID'] . 'CaptureCallback' . $bankOrderID . $arStore[$bankOrderID]['amount'] . $timeStamp,
            BUKZA_API_KEY,
            true
        );

        //= отправить букзе информацию о платеже
        $res = BukzaSend([
            'userId'        => $arStore[$bankOrderID]['bukzaUserID'],
            'orderNumber'   => $arStore[$bankOrderID]['bukzaOrderID'],
            'command'       => 'CaptureCallback',
            'data'          => $bankOrderID,
            'amount'        => $arStore[$bankOrderID]['amount'],
            'timestamp'     => $timeStamp,
            'hash'          => base64_encode($queryHash)
        ]);
        break;
}