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
$date_issue = $decoded["date_issue"];
$purpose = $decoded["purpose"];
$cheque_no = $decoded["cheque_no"];
$amount = $decoded["amount"];
$settled = $decoded["settled"];

echo "inserting data invoice";
$sql = "INSERT INTO cheque_records (date_issue, purpose, cheque_no, amount, settled)
VALUES ('$date_issue', '$purpose' , '$cheque_no', $amount, '$settled')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
