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

$fname = "../reports/"."$month_v"."-"."$year_v".".csv";
echo "file name: $fname";
$report = fopen($fname, "w");

$sql = "select * from bill_records where formonth=$month_v and foryear=$year_v ";
$result = $conn->query($sql);
$rows = array();
$indx = 1;

if($result->num_rows > 0)
{
	while($row = $result->fetch_assoc())
	{
		// $rowdata = "$indx,".$row['trans_date']", ".$row['description'].", ".$row['recipt_num']", ".$row['amount']."\n";
		$rowdata = $indx.", ".$row['trans_date'].", ".$row['description'].", ".$row['recipt_num'].", ".$row['amount']."\n";
		$indx = $indx + 1;
		fwrite($report, $rowdata);
	}
}
else
{
	echo "empty result";
}

fclose($fname);
$conn->close();
echo json_encode(["status"=>"success", "msg" => "Report Generated"]);
?>
