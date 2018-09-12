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

$sql = "delete from  $tablename where $tablename.id = '$id'";

if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
