<?php
    $readJson = file_get_contents('./users/ccatura/songs/song_list.json');

    $songs = json_decode($readJson, true);




    foreach($songs as $item) {
        $songsnew = array_column($item, 'artist'); // sort by artist
        // $songsnew = array_column($item, 'title'); // sort by title
        array_multisort($songsnew, SORT_ASC, $item); // sort in ascending order

        foreach ($item as $prop) {
            echo "<li><a href=\"./users/ccatura/songs/php/".$prop['file'].".php\">".$prop['title']." <hr>".$prop['artist']."<br/>\n";
        }
    }

?>
