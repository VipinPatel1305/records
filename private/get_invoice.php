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


$sql = "select * from bill_records where formonth=$month_v and foryear=$year_v ";
$result = $conn->query($sql);
$rows = array();

if($result->num_rows > 0)
{
	while($r = $result->fetch_assoc())
	{
		$rows[] = $r; 
	}
}
else
{
	echo "empty result";
}


 echo json_encode($rows);
$conn->close();
?>
