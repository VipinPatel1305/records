<?php

require 'mdb.php';

// Create connection
$conn = new mysqli("$servername", $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$content = file_get_contents("php://input");
$decoded = json_decode($content, true);
$trans_date = $decoded["trans_date"];
$description = $decoded["description"];
$recipt_num = $decoded["recipt_num"];
$amount = $decoded["amount"];
$formonth = $decoded["formonth"];
$id = $decoded["id"];
$foryear = $decoded["foryear"];


$tablename = "bill_records";

$sql = "update $tablename set trans_date = '$trans_date', recipt_num = '$recipt_num', amount = $amount, description='$description', formonth='$formonth', foryear='$foryear' where $tablename.id = '$id'";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
