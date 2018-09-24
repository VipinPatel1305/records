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
$id = $decoded["id"];

$tablename = "bill_records";
$sql = "delete from  $tablename where $tablename.id = '$id'";

if ($conn->query($sql) === TRUE) {
    $server_response->status = "success";
	$server_response->msg = "Record deleted successfully";
	http_response_code(200);
   	echo json_encode($server_response);
} else {
    $server_response->status = "404";
	$server_response->msg = "Failed to delete record";
	http_response_code(404);
    echo json_encode($server_response);
}

$conn->close();
?>
