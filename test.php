<?php
    $readJson = file_get_contents('./users/ccatura/songs/song_list.json');

    $songs = json_decode($readJson, true);




    foreach($songs as $item) {

        ////////
        // Put if statement in here to sort either bhy artist or song
        // Parameters should come by URL and this needs to check
        // If no paramenters, should default to 'song' sort

        $songsnew = array_column($item, 'artist'); // sort by artist
        // $songsnew = array_column($level2, 'title'); // sort by title
        array_multisort($songsnew, SORT_ASC, $item); // sort in ascending order

        
        foreach($item as $prop) {
            echo $prop['title']."<br>".$prop['artist']."<br><br>";
        }
    }




?>