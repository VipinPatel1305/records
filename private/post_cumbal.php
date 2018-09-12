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
$amount = $decoded["amount"];
$month = $decoded["month"];
$year = $decoded["year"];

echo "inserting data invoice";
$sql = "INSERT INTO cum_bal (amount, month, year)
VALUES ('$amount', '$month' , '$year')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
