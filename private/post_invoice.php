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

$sql = "INSERT INTO bill_records (trans_date, description, recipt_num, amount, formonth, foryear)
VALUES ('$trans_date', '$description', '$recipt_num', $amount, $formonth, $foryear)";

if ($conn->query($sql)) {
	$server_response->status = "success";
	$server_response->msg = "New Record added successfully";
	http_response_code(200);
    echo json_encode($server_response);
} else {
	$server_response->status = "404";
	$server_response->msg = "Failed to add new record";
	http_response_code(404);
    echo json_encode($server_response);
}

$conn->close();
?>
