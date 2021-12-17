<?php

function SberRequest () {
    $vars = array();
    $vars['userName'] = 'логин';
    $vars['password'] = 'пароль';

    /* ID заказа в магазине */
    $vars['orderNumber'] = '123';

    /* Корзина для чека (необязательно) */
    $cart = [
        [
            'positionId' => 1,
            'name' => 'Название товара',
            'quantity' => [
                'value' => 1,
                'measure' => 'шт'
            ],
            'itemAmount' => 1 * (1000 * 100),
            'itemCode' => '123456',
            'tax' => [
                'taxType' => 0,
                'taxSum' => 0
            ],
            'itemPrice' => 1000 * 100,
        ]
    ];

    $vars['orderBundle'] = json_encode(
        [
            'cartItems' => [
                'items' => $cart
            ]
        ],
        JSON_UNESCAPED_UNICODE
    );

    /* Сумма заказа в копейках */
    $vars['amount'] = 1000 * 100;

    /* URL куда клиент вернется в случае успешной оплаты */
    $vars['returnUrl'] = 'http://example.com/success/';

    /* URL куда клиент вернется в случае ошибки */
    $vars['failUrl'] = 'http://example.com/error/';

    /* Описание заказа, не более 24 символов, запрещены % + \r \n */
    $vars['description'] = 'Заказ №' . $order_id . ' на example.com';

    $ch = curl_init('https://3dsec.sberbank.ru/payment/rest/register.do?' . http_build_query($vars));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_HEADER, false);
    $res = curl_exec($ch);
    curl_close($ch);
}