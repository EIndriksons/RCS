<?php

require 'db.php';

$tasks = $db->query('select * from tasks');

require 'views/index.view.php';