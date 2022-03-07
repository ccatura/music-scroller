<?php
    $readJson = file_get_contents('./users/ccatura/songs/song_list.json');
    $songs = json_decode($readJson, true);
    $sortAs = $_GET['sort'];

    if (!$sortAs) {
        $sortAs = 'setlist';
    }

    foreach($songs as $item) {
        $songsnew = array_column($item, $sortAs); // sort by setlist
        array_multisort($songsnew, SORT_ASC, $item); // sort in ascending order

        foreach ($item as $prop) {
            echo "<li><a href=\"./users/ccatura/songs/php/".$prop['file'].".php\">".$prop['title']." <br>Artist: ".$prop['artist']."<br/>\nSetlist: ".$prop['setlist']."\n";
        }
    }

?>
