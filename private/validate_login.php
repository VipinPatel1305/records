<?php
	require('mdb.php');
	require_once '../vendor/autoload.php';
	use \Firebase\JWT\JWT;

	function validate_login()
	{
		global $username;
		global $servername;
		global $password;
		global $dbname;
     	$cookie_name = "vip-angular-cookie";
		$scope = "###";
		if(!isset($_COOKIE[$cookie_name])) {
			header('HTTP/1.0 401 Unauthorized');
	     	die(json_encode(["status" => "failed", "msg"=>"invalid token please login"]));
		 }
		 else
		 {

			$conn = new mysqli("$servername", $username, $password, $dbname);
			// Check connection
			if ($conn->connect_error) {
			   die(json_encode(["status" => "failed", "msg"=>"failed to connect db"]));
			} 

			$jwt_token = $_COOKIE[$cookie_name];
			//extract scope:
			$sql = "select public_key from magic_key";
			$result = $conn->query($sql);
			$row = $result->fetch_assoc();
			$publicKey = $row['public_key'];
			$decoded = JWT::decode($jwt_token, $publicKey, array('RS256'));
			$decoded_array = (array) $decoded;

			$scope = $decoded_array['scope'];
			$table_name = "$scope"."_jwt";
			$sql = "select jwt from $table_name where jwt='$jwt_token'";
			$result = $conn->query($sql);
		
			if ($result->num_rows == 1) {
				return $scope;
		    }
		    else
		    {
		    	die(json_encode(["status" => "failed", "msg"=>"invalid token please login"]));
		    }
		}
		return "###";
	}
?>