<?php

require 'mdb.php';

// Create connection
$conn = new mysqli("$servername", $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


$month_v = $_GET['month'];
$year_v = $_GET['year'];


$sql = "select amount from cum_bal where month=$month_v && year=$year_v ";
$result = $conn->query($sql);
echo ($result->fetch_object()->amount);


 //echo json_encode($result->fetch_assoc());
$conn->close();
?>
