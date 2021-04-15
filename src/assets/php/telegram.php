<?php
$name = $_POST['name'];
$phone = $_POST['tel'];
$token = "1442293343:AAFpI8iKpWkYIT_lD3Rq36Nn5zUzN4JndFc";
$chat_id = "-580186145";
$arr = array(
  'Заявка на обратный звонок' => "",
  'Имя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram) {
//   header('Location: ./index.html#Footer');
// } else {
//   echo "Error";
// }
?>
