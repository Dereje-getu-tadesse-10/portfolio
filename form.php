<?php

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
}else{

}
if((empty($_POST['message']))){
    $message = $_POST['message'];
    $err["message"] = "vide";
}else{

}


if(empty($err)){
    $err["validation"] = "c'est bon 🥳";
    echo json_encode($err);
}else{
    $err["validation"] = "c'est pas bon";
    echo json_encode($err);
}