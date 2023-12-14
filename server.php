<?php
// Get data
$string = file_get_contents("dischi.json");

// Stringa to Array
$list = json_decode($string, true);

// Operations



// Array to string
$json = json_encode($list);

// Send data
header("Content-Type: application/json");
echo $json;