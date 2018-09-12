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

//get total for current month
$sql = "select sum(amount) as total from  bill_records where foryear=$year_v and formonth=$month_v";
$result = $conn->query($sql);
$total_this_month = $result->fetch_object()->total;

//get cum_bal for previous month
$prev_cum_bal = 0;

if($month_v != 1)
{
    $prev_month = $month_v - 1;
    $sql = "select amount from cum_bal where month=$prev_month && year=$year_v ";
    $result = $conn->query($sql);
    $prev_cum_bal = $result->fetch_object()->amount;
}


$bal_this_month = 280000 - $total_this_month;
$cum_bal = $bal_this_month + $prev_cum_bal;

//delete if record already exists
$sql = "delete from cum_bal where month=$month_v && year=$year_v";
$result = $conn->query($sql);

//create record for current month
$insert_sql = "INSERT INTO cum_bal (year, month, amount)
VALUES ('$year_v', '$month_v', $cum_bal)";
$result = $conn->query($insert_sql);

echo json_encode("Cumulative balance:".$cum_bal);
$conn->close();
?>
