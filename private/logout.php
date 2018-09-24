<?php

require 'mdb.php';
$cookie_name = "vip-angular-cookie";

if(isset($_COOKIE[$cookie_name])) {
	// Create connection
	$conn = new mysqli("$servername", $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	    $server_response->status = "404";
		$server_response->msg = "Failed to add new record";
		http_response_code(404);
    	echo json_encode($server_response);
	} 

	$scope = $_GET['scope'];
	$table_name = "$scope"."_jwt";
	$jwt_token = $_COOKIE[$cookie_name];
	$sql = "delete  from $table_name where jwt='$jwt_token' ";
	$result = $conn->query($sql);

	unset($_COOKIE[$cookie_name]);
	setcookie($cookie_name, "", time()-3600, "/");
	$server_response->status = "success";
	$server_response->msg = "logged out";
	http_response_code(200);
    echo json_encode($server_response);
	$conn->close();
}
else
{
	http_response_code(200);
	$server_response->status = "success";
	$server_response->msg = "logged out";
    echo json_encode($server_response);
}
?>
