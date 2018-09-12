<?php
$month_v = $_GET['month'];
$year_v = $_GET['year'];

$filename = "../reports/$month_v-$year_v.csv"; // of course find the exact filename....        
header('Pragma: public');
header('Expires: 0');
header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
header('Cache-Control: private', false); // required for certain browsers 
header('Content-Type: text/csv');

header('Content-Disposition: attachment; filename="'. basename($filename) . '";');
header('Content-Transfer-Encoding: binary');
header('Content-Length: ' . filesize($filename));

readfile($filename);
//echo json_encode(["status"=>"sucess", "msg" => "Generated report for $month_v-$year_v"]);
?>