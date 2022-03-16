<?php
$servername = "sql647.main-hosting.eu";
$username = "u682819236_ccatura_music";

include("pword.php");

$dbname = "u682819236_music_scroller";



$message=""; //will hold message to display when authenticated

//checks if username and password match what is in the database
// if(count($_POST)>0) {
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	$result = mysqli_query($conn,"SELECT * FROM `users` JOIN `songs` ON users.username = songs.username WHERE songs.username = 'ccatura';");

    while ($row = mysqli_fetch_assoc($result)) {
        echo "<li>".$row['song_title']." <br>".$row['artist']."<br/>".$row['song_lyrics'];
    }
?>

<!-- 
<?php
    $readJson = file_get_contents('./users/ccatura/songs/song_list.json');
    $songs = json_decode($readJson, true);
    // $sortAs = $_GET['sort'];

    // if (!$sortAs) {
        // $sortAs = 'setlist';
    // }

    if(isset($_GET['sort']))
    {
       $sortAs = $_GET['sort'];
    } else {
        $sortAs = 'setlist';
    }

    foreach($songs as $item) {
        $songsnew = array_column($item, $sortAs); // sort by setlist
        array_multisort($songsnew, SORT_ASC, $item); // sort in ascending order

        foreach ($item as $prop) {
            echo "<li><a href=\"./users/ccatura/songs/php/".$prop['file'].".php\">".$prop['title']." <br>Artist: ".$prop['artist']."<br/>\nSetlist: ".$prop['setlist']."\n";
        }
    }

?> -->
