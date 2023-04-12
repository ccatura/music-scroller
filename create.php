<?php
include_once 'db.php';
if(isset($_POST['submit']))
{    
    $username = 'ccatura';
    $song_title = $_POST['song_title'];
    $song_artist = $_POST['song_artist'];
    $song_lyrics = $_POST['song_lyrics'];

    $sql = "INSERT INTO `songs` (`username`, `song_title`, `artist`, `song_lyrics`)
    VALUES ('$username', '$song_title', '$song_artist', '$song_lyrics')";

    if (mysqli_query($conn, $sql)) {
       echo "New record has been added successfully !";
    } else {
       echo "Error: " . $sql . ":-" . mysqli_error($conn);
    }
    mysqli_close($conn);
}

?>