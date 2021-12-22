<?php

function SberSend_CreatePay(array $order, $sberLogin, $sberPass) {

    $vars = array();
    $vars['userName'] = $sberLogin;
    $vars['password'] = $sberPass;

    /* ID заказа в магазине */
    $vars['orderNumber'] = $order['number'];

    /* Сумма заказа в копейках */
    $vars['amount'] = $order['amount'];

    /* ID клиента */
    $vars['clientId'] = $order['userID'];

    /* URL куда клиент вернется в случае успешной оплаты */
    $vars['returnUrl'] = 'https://pozitivtour74.ru/assets/php/paymentsGateway/?action=success';

    /* URL куда клиент вернется в случае ошибки */
    $vars['failUrl'] = 'https://pozitivtour74.ru/assets/php/paymentsGateway/?action=fail';

    /* Описание заказа, не более 24 символов, запрещены % + \r \n */
    $vars['description'] = $order['description'];

    // TODO DEBUG
    file_put_contents(FILE_DEBUG_LOG, date('d.m.Y H:i') . " Запрос в Сбер:\n" . print_r($vars, true) . "\n\n", FILE_APPEND);


    $ch = curl_init('https://3dsec.sberbank.ru/payment/rest/register.do?' . http_build_query($vars));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_HEADER, false);
    $res = curl_exec($ch);
    curl_close($ch);

    return json_decode($res, true);
}

function BukzaSend(array $order) {
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
    $ar = json_decode(file_get_contents(__DIR__ . '/payments.json'), true);
    if ($ar === false) {
        $ar = array();
    }
    return $ar;
}

function SendJSON(array $data) {
    header('Content-Type: application/json');
    echo json_encode($data);
    exit;
}