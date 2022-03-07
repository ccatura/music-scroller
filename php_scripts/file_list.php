<?php
    $readJson = file_get_contents('./users/ccatura/songs/song_list.json');

    $songs = json_decode($readJson, true);

    //Parse the songs into title, artist, filename




    foreach ($songs as $item) {
        foreach ($item as $prop) {
            echo "<li><a href=\"./users/ccatura/songs/php/".$prop['file'].".php\">".$prop['title']." <hr>".$prop['artist']."<br/>\n";
        }
    }


