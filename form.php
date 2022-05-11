<?php

$errs = [];

$regEx = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/";

if((isset($_POST['mail']) && (preg_match($regEx, $_POST['mail'])))){
    $email = $_POST['mail'];
}else{
    $err["mail"] = "email invalide";
}

if((isset($_POST['sujet']))){
    $sujet = $_POST['sujet'];
}else{
    $err["sujet"] = "vide";
}
if((isset($_POST['message']))){
    $message = $_POST['message'];
}else{
    $err["message"] = "vide";
}

if(empty($err)){
    $err["valide"] = "c'est bon 🥳";
    echo json_encode($err);
}else{
    $err["non"] = "c'est pas bon";
    echo json_encode($err);
}