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
    $server_response->status = "success";
	$server_response->msg = "Record update successful";
    echo json_encode($server_response);
} else {
   	$server_response->status = "404";
	$server_response->msg = "Failed to update record";
	http_response_code(404);
    echo json_encode($server_response);
}

$conn->close();
?>
