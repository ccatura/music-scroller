<?php
$servername = "sql647.main-hosting.eu";
$username = "u682819236_ccatura_music";
include("pword.php");
$dbname = "u682819236_music_scroller";




// if(count($_POST)>0) {
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	$result = mysqli_query($conn,"SELECT * FROM `users` JOIN `songs` ON users.username = songs.username WHERE songs.username = 'ccatura';");

    while ($row = mysqli_fetch_assoc($result)) {
        echo "<li>".
        "<a href='./users/ccatura/songs/php/the_other_side_of_life.php'>".$row['song_title']."</a> <br>".
        "<a href='./php_scripts/display_song.php?song=".$row['song_title']."'>".$row['artist']."</a> <br/>";
    }
?>
