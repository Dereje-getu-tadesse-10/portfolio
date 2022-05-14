<?php

$errs = [];
$regEx = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/";


$email = $_POST['mail'];
$sujetC = $_POST['sujet'];
$messageC = $_POST['message'];


if((isset($_POST['mail']) && (preg_match($regEx, $_POST['mail'])))){

}else{
    $err["mail"] = "email invalide";
}

if((empty($_POST['sujet']))){

    $err["sujet"] = "vide";
}

if((empty($_POST['message']))){
    $err["message"] = "vide";
}

$from = $email;
$to = "d.getutadesse@codeur.online";
$subject = $sujetC;
$message = $messageC;
$headers = "De :" . $from;

if(empty($err)){
    mail($to,$subject,$message, $headers);
    $good = array('validation' =>  "c'est bon 🥳");
    echo json_encode($good);
}else{
    $err["erreur"] = "c'est pas bon";
    echo json_encode($err);
}