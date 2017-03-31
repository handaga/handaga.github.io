<?php 

	//connecto to DB Server

	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "mydb";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname );
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}

	//ambil parameter yang dikirim oleh ajax client

	$lat = $_REQUEST['lat'];
	$lng = $_REQUEST['lng']; 	

	//simpan data ke se tabel

	$sql = "INSERT INTO geocoding (lat, lng, tanggal) VALUES ($lat, $lng, now())";
	$result = $conn->query($sql);




	

?>