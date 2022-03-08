<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="stylesheet" href="./index.css" class="">
    <script src="./index.js" defer></script>
    <link rel="icon" type="image/x-icon" href="./images/misc/favicon.ico">
    <title>Charlie's Music Scroller for Musicians</title>
</head>
<body>



<?php
$servername = "sql647.main-hosting.eu";
$username = "u682819236_ccatura_music";
$password = "";
$dbname = "u682819236_music_scroller";

$message=""; //will hold message to display when authenticated

//checks if username and password match what is in the database
if(count($_POST)>0) {
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	$result = mysqli_query($conn,"SELECT * FROM users WHERE userName='" . $_POST["userName"] . "' and password = '". $_POST["password"]."'");
	$count  = mysqli_num_rows($result);
	if($count==0) {
		$message = "Invalid Username or Password!";
	} else {
		$message = "<span style='color: #0bb335;'>You are successfully authenticated!</span><br>";
	}
}

if($message!="") {
    echo "<br>" . $message;
}
?>



    
<div class="wrapper">
    <div class="file-ops">
        <div class="header">
            <h6><input type="text"><button>Search</button></h6>
            <h6>Logged in as: <strong>ccatura</strong></h6>
        </div>
        <div class="create">
            <h5>Create Song</h5>
            <input type="text" placeholder="Title">
            <button class="big-button">Create</button>
        </div>
        <div class="vert-space"></div>
        <h5>Load Song</h5>
        <ul class="file-list">
            <h6>Sort By: <a href="./index.php?sort=artist">Artist</a> | <a href="./index.php?sort=title">Title</a> | <a href="./index.php?sort=setlist">Setlist</a></h6>

        <?php
            include("./php_scripts/file_list.php");
        ?>


        </ul>
    </div>



    <div class="scroller">

    </div>


</div>
</body>
</html>