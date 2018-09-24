<?php

	$servername = "localhost";
	$port = 3306;

	if($DEPLOY_ENV === "DEV")
	{
		$username = "root";
		$password = "root";
		$dbname = "vip_inventory";
	}
	else if($DEPLOY_ENV === "PROD")
	{
		//update me
       $username = "u864826821_vipin";
       $password = "Y0viGIMBzt0s";
       $dbname = "u864826821_vipin";
	}
	
?>