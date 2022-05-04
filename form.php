<?php



if(!empty($_POST) && isset($_POST)){
    $errors = array();

        if(empty($_POST['m'])){

            $errors["message"] = 'champ obligatoire';

        }else{
            $errors["mess"] = 'champ obligatopoluioire';
        }
        echo json_encode($errors);
    }