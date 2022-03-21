<?php
$servername = "sql647.main-hosting.eu";
$username = "u682819236_ccatura_music";
include("./php_scripts/pword.php");
$dbname = "u682819236_music_scroller";

$uu = "<script>return 'chucky';<script>";

echo $uu;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Inserts data
$sql = "INSERT INTO `users` (`username`, `password`) VALUES ('baby2', 'abc123')";

// Tries to nsert data and returns whether or not the commit was successful
if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>