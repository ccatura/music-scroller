<?php
    // $readJson = file_get_contents('./users/ccatura/songs/song_list.json');

    $readJson = {
        "songs"=>[
        {   "title"=>"The Other Side of Life",
            "artist"=>"Charlie Katt",
            "file"=>"the_other_side_of_life",
            "setlist"=>"Christmas Show 2022"},
    
        {   "title"=>"1904",
            "artist"=>"The Tallest Man on Earth",
            "file"=>"file_name",
            "setlist"=>"Christmas Show 2022"},
    
        {   "title"=>"#40",
            "artist"=>"Dave Matthews",
            "file"=>"file_name",
            "setlist"=>"Summer Concert"},
    
        {   "title"=>"40oz to Freedom",
            "artist"=>"Sublime",
            "file"=>"file_name",
            "setlist"=>"Summer Concert"}




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