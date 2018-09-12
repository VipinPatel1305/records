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
$foryear = $decoded["foryear"];
echo "inserting data invoice";
echo "formonth: $formonth";

$sql = "INSERT INTO bill_records (trans_date, description, recipt_num, amount, formonth, foryear)
VALUES ('$trans_date', '$description', '$recipt_num', $amount, $formonth, $foryear)";

if ($conn->query($sql) === TRUE) {
	 $response = '{"server_responce":"New record create successfully"}';
    echo json_encode($decoded);
} else {
    echo json_encode("Error: " . $sql . "<br>" . $conn->error);
}

$conn->close();
?>
