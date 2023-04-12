<?php
include_once 'db.php';



	//$conn = mysqli_connect($servername, $username, $password, $dbname);
	$result = mysqli_query($conn,"SELECT * FROM `users` JOIN `songs` ON users.username = songs.username WHERE songs.username = 'ccatura';");


    while ($row = mysqli_fetch_assoc($result)) {
        $file_title = strtolower(str_replace(" ", "_", $row['song_title'])) . '.php';
        echo "<li>" .
        "<a href='./users/ccatura/songs/php/" . $file_title . "'>" . $row['song_title'] . "</a> <br>".
        "<a href='./php_scripts/display_song.php?song_title=" . $row['song_title'] . "&id=1'>" . $row['artist'] . "</a> <br/>";
    }
?>
