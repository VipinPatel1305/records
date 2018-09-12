<?php

require 'mdb.php';
$cookie_name = "vip-angular-cookie";

if(isset($_COOKIE[$cookie_name])) {
	// Create connection
	$conn = new mysqli("$servername", $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 
	$scope = $_GET['scope'];
	$table_name = "$scope"."_jwt";
	$jwt_token = $_COOKIE[$cookie_name];
	$sql = "delete  from $table_name where jwt='$jwt_token' ";
	$result = $conn->query($sql);
	unset($_COOKIE[$cookie_name]);
	setcookie($cookie_name, "", time()-3600, "/");
	echo(json_encode(["status" => "success", "msg"=>"logged out"]));
	$conn->close();
}
?>
