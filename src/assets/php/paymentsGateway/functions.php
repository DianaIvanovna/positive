<?php

function SberSend_CreatePay(array $order) {
    // Данные доступа к сберу
    define('SBERAPI_LOGIN', 'T741208548498-api');
    define('SBERAPI_PASS', 'T741208548498');

    $vars = array();
    $vars['userName'] = SBERAPI_LOGIN;
    $vars['password'] = SBERAPI_PASS;

    /* ID заказа в магазине */
    $vars['orderNumber'] = $order['number'];

    $vars['orderBundle'] = json_encode(
        [
            'cartItems' => [
                'items' => []
            ]
        ],
        JSON_UNESCAPED_UNICODE
    );

    /* Сумма заказа в копейках */
    $vars['amount'] = $order['amount'];

    /* URL куда клиент вернется в случае успешной оплаты */
    $vars['returnUrl'] = 'https://pozitivtour74.ru/assets/php/paymentsGateway/?action=success';

    /* URL куда клиент вернется в случае ошибки */
    $vars['failUrl'] = 'https://pozitivtour74.ru/assets/php/paymentsGateway/?action=fail';

    /* Описание заказа, не более 24 символов, запрещены % + \r \n */
    $vars['description'] = $order['description'];

    $ch = curl_init('https://3dsec.sberbank.ru/payment/rest/register.do?' . http_build_query($vars));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_HEADER, false);
    $res = curl_exec($ch);
    curl_close($ch);

    return json_decode($res, true);
}

function BukzaSend(array $order) {
    $order['userId'] = 'BUKZA_USER_ID';
    $options = [
        'http' => [
            'method'  => 'POST',
            'content' => json_encode( $order ),
            'header'=>  "Content-Type: application/json\r\n" .
                        "Accept: application/json\r\n"
        ]
    ];

    $context  = stream_context_create( $options );
    $result = file_get_contents( 'https://public.bukza.com/api/pay', false, $context );
    $res = json_decode( $result );

    return json_decode($res, true);
}

// Сохранит в хранилище переданный массив
function SaveInStore(array $data) {
    file_put_contents(__DIR__ . '/payments.json', json_encode($data));
}

// Вернет содержимое хранилища
function GetFromStore() {
    $ar = jsond_decode(file_get_contents(__DIR__ . '/payments.json'), true);
    if ($ar === false) {
        $ar = array();
    }
    return $ar;
}

function SendJSON(array $date) {
    header('HTTP/1.0 200');
    header('Cache-Control: no-cache, must-revalidate');
    header('Expires: '.date('r',time()-86400));
    header('Content-type: application/javascript; charset=utf-8');
    echo json_encode($json);
    exit;
}