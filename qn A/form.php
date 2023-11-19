<?php
$servername = "localhost";
$user = "root";
$pasword = "12345";
$dbname = "form"

$conn = new mysql($servername, $user, $pasword, $dbname);

if($conn->connect_error){
    die("Connection failed"$conn->connect_error);
}
$name = $_POST['username'];
$pass  = $_POST['password'];

$validateLoginQuery = "SELECT * FROM credentials WHERE usrname = '$name' AND passwrd = '$pass'";
$result = $conn->query($validateLoginQuery);
if ($result->num_rows > 0) {
    echo "login seccesfull";
} else{
    echo "invalid login";
}
$conn->close();