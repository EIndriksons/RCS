<?php

require '../db.php';

if(isset($_POST['addNewTask'])) {
    $sql = $db->prepare(
        "INSERT INTO `tasks` (`text`) VALUES ((?))"
    );
    $sql->bind_param('s', $_POST['text']);
    $sql->execute();

    if($sql) {
        header('Location: ../index.php');
    } else {
        echo 'Database Error!';
    }
}