<?php

$config = require 'config/config.php';

$db = new Mysqli;
$db->connect(
    $config['database']['connection'],
    $config['database']['username'],
    $config['database']['password'],
    $config['database']['name']
);

if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}