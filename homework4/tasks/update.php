<?php

require '../db.php';

if(isset($_POST['updateTask'])) {
    $sql = $db->prepare(
        "UPDATE `tasks` SET `text` = (?) WHERE `id` = (?)"
    );
    $sql->bind_param('sd', $_POST['text'], $_POST['updateTask']);
    $sql->execute();

    if($sql) {
        header('Location: ../index.php');
    } else {
        echo 'Database Error!';
    }
}