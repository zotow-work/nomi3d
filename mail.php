<?php

$recepient = "zotow.work@gmail.com";
$sitename = "Nomi3D";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$company = trim($_POST["company"]);
$message = "Name: $name \nEmail: $email \nCompany: $company";

$pagetitle = "New message from the \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");


$token = ""; 
$chat_id = "";
    $arr = array(
        'Name:' => $name,
        'Mail:' => $email,
        'Company:' => $company
        
    );

    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

