<?php
include_once 'db.php';
if(isset($_POST['submit']))
{    
    $user = $_POST['username'];
    $title = $_POST['song_title'];
    $artist = $_POST['artist'];
    $lyrics = $_POST['song_lyrics'];
    
    $sql = "INSERT INTO songs (user, song_title, artist, song_lyrics)
    VALUES ('$user', '$title', '$artist', '$lyrics')";

    if (mysqli_query($conn, $sql)) {
       echo "New record has been added successfully !";
    } else {
       echo "Error: " . $sql . ":-" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
?>