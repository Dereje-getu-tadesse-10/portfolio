<?php

$regEx = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/";

if((isset($_POST['mail']) && (preg_match($regEx, $_POST['mail'])))){
    $email = $_POST['mail'];

}
if((isset($_POST['sujet']))){
    $sujet = $_POST['sujet'];

}
if((isset($_POST['message']))){
    $message = $_POST['message'];

}

if(($email)&&($sujet)&&($message)){
    $ok = array('bravo' => "c'est bon 🥳");
    echo json_encode($ok);
}else{
    $ok = array('pas bon' => "C'EST PAS BON!!");
    echo json_encode($ok);
}
