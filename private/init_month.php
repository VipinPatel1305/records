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

$table_name = "bill_records";
$description = array("Electricity Bill", "Plumber Salary", "Sreenu Salary", "Garbage Removal", 
"Maid 1 Salary", "Maid 2 Salary", "Supervisor Salary", "STP Salary", "Generator Diesel", "Cleaning Material",
"Security Salary", "Swimming Pool Maintenance");

date_default_timezone_set('UTC');
$datep = date('Y-m-d');

if ($result = $conn->query("select * from $table_name where foryear=$year_v and formonth=$month_v")) {
    if($result->num_rows == 0) {
		for($x = 0; $x < count($description); $x++) {
			$insertsql = "INSERT INTO $table_name (trans_date, description, recipt_num, amount, formonth, foryear)
			VALUES ('$datep', '$description[$x]', '', 0, $month_v, $year_v)";

			if ($conn->query($insertsql) === FALSE) {
				echo "Failed insert data";
			}
		}
        echo json_encode("DB intialized for month ".$table_name);
    }
    else
    {
    	echo json_encode("DB already intialized for this month");
    }
}
else {
    echo "Something went wrong";
}

$conn->close();
?>
