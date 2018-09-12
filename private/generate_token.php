<?php 
	require('mdb.php');
	require_once '../vendor/autoload.php';
	use \Firebase\JWT\JWT;

	function createtok($user_id, $secret, $scope)
	{

		global $username;
		global $servername;
		global $password;
		global $dbname;
		$conn = new mysqli("$servername", $username, $password, $dbname);
		// Check connection
		if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		} 

		$sql = "select priavte_key from magic_key";
		$result = $conn->query($sql);
		$row = $result->fetch_assoc();
		$privateKey = $row['priavte_key'];
		$exp_time = time() + 3600 * 10;//current time + 10 hours
		$payload_arr = array('user_id' => $user_id, 'scope' => $scope, 'exp_time' => $exp_time, 'iss' => "rocker", 'sub' => "ado");
		$jwt = JWT::encode($payload_arr, $privateKey, 'RS256');	
		 $conn->close();
		return $jwt;
	}

	function hashpass($wrodly)
	{
		return $hash_secret = password_hash($wrodly, PASSWORD_DEFAULT);
	}

	function verfiypass($uname, $wrodly)
	{
		// Create connection
		global $username;
		global $servername;
		global $password;
		global $dbname;
		$conn = new mysqli("$servername", $username, $password, $dbname);
		// Check connection
		if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		} 

		$sql = "select hashcode, scope from magic_world where userid='$uname'";
		$result = $conn->query($sql);
	
		if ($result->num_rows == 1) {
			$row = $result->fetch_assoc();
			$pass_hash = $row['hashcode'];
			$scope = $row['scope'];

			if(password_verify($wrodly, $pass_hash))
			{
				$cookie_name = "vip-angular-cookie";
				$jwt_token = createtok($uname, $pass_hash, $scope);
				//save jwt into table
				$table_name = "$scope"."_jwt";
				$sql = "insert into $table_name (jwt) values ('$jwt_token')";
				$result = $conn->query($sql);
				echo json_encode(["status" => "successful", "msg"=>"$jwt_token"]);
				setcookie($cookie_name, $jwt_token, time() + (86400 * 30), "/");
			}
			else
			{
				//header('HTTP/1.0 401 Unauthorized');
	    		die(json_encode(["status"=>"failure", "msg" => "Failed to authenticate"]));
			}
		}
		else
		{
			//header('HTTP/1.0 401 Unauthorized');
    		die( json_encode(["status"=>"failure", "msg" => "Failed to authenticate"]));
	    }

	    $conn->close();

	}
	//$a = hashpass('aDoMoBalu78@');
	//echo "$a"."\n";
?>