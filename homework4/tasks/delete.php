<?php

require '../db.php';

if(isset($_GET['id'])) {
    $sql = $db->prepare(
        "DELETE FROM `tasks` WHERE `id` = (?)"
    );
    $sql->bind_param('d', $_GET['id']);
    $sql->execute();

    if($sql) {
        header('Location: ../index.php');
    } else {
        echo 'Database Error!';
    }
}