<?php
    // Read JSON file
    $readJson = file_get_contents('./users/ccatura/songs/song_list.json');

    //Decode JSON
    $songs = json_decode($readJson, true);

    //Parse the songs
    foreach ($songs as $item) {
        echo "<li><a href=\"./users/ccatura/songs/php/".$item['file'].".php\">".$item['title']." - ".$item['artist']."<br/>\n";
    }
?>