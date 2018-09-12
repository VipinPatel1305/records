<?php 
	require('mdb.php');
	
    $cookie_name = "vip-angular-cookie";
    //require('validate_login.php');
	$content = file_get_contents("php://input");
	$decoded = json_decode($content, true);
	$userid = $decoded["name"];
	$pass = $decoded["pass"];
	require('generate_token.php');
    verfiypass($userid, $pass);
?>