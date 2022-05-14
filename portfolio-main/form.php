<?php

$email = strip_tags($_POST['mail']);
$sujet = strip_tags($_POST['sujet']);
$message = strip_tags($_POST['message']);

// Mail

$from = $email;
$to = "d.getutadesse@codeur.online";
$sujetSend = "Le sujet . $sujet";
$message = "Le message . $message";

$errs = [];

$regEx = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/";

if((isset($_POST['mail']) && (preg_match($regEx, $_POST['mail'])))){
    $email = $_POST['mail'];
}else{
    $err["mail"] = "email invalide";
}

if((empty($_POST['sujet']))){
    $sujet = $_POST['sujet'];
    $err["sujet"] = "vide";
}

if((empty($_POST['message']))){
    $message = $_POST['message'];
    $err["message"] = "vide";
}


if(empty($err)){
    mail($from,$to,$email,$sujet,$message);
    $good = array('validation' =>  "c'est bon 🥳");
    echo json_encode($good);
}else{
    $err["erreur"] = "c'est pas bon";
    echo json_encode($err);
}