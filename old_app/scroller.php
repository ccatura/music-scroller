<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="stylesheet" href="index_OLD.css" class="">
    <script src="index.js" defer></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined">
    <title>Charlie's Music Scroller for Musicians</title>
</head>
<body>

    <div class="buttons-header">
        <!-- Action Section - Play/Pause Buttons -->
        <div class="button-section">
            <div id="state"></div>
            <div class="button-group">
                <div class="button" id="play"><div class="play"></div></div>
                <div class="button" id="pause"><div class="pause"></div></div>
            </div>
        </div>

        <!-- Hide -->
        <div class="button-section">
            <div id="page-number">Fullscreen</div>
            <div class="button-group">
                <div class="button" id="fullscreen">&#x26F6;</div>
            </div>
        </div>
        <!-- Next/Previous Button Section -->
        <div class="button-section">
            <div id="page-number">Song 1</div>
            <div class="button-group">
                <div class="button" id="prev">&larr;</div>
                <div class="button" id="next">&rarr;</div>
            </div>
        </div>
        <!-- Speed Section -->
        <div class="button-section">
            <div>Speed: </div>
            <div id="speed"></div>
            <div class="button-group">
                <div class="button" id="speed-down">-</div>
                <div class="button" id="speed-up">+</div>
            </div>
        </div>
        <!-- Size Section -->
        <div class="button-section">
            <div>Size: </div>
            <div id="size"></div>
            <div class="button-group">
                <div class="button" id="size-down">-</div>
                <div class="button" id="size-up">+</div>
            </div>
        </div>
        <div class="button-section">
            <div>Settings</div>
            <div id="settings"></div>
            <div class="button-group">
                <div class="button" id="settings">&#8943;</div>
                <ul class="menu">
                    <div style="align-self: flex-end; font-weight: bold; cursor: pointer;">&#10005;</div>
                    <li>Edit this song</li>
                    <div class="hr"></div>
                    <li>Save settings for desktop</li>
                    <li>Save settings for mobile</li>
                    <div class="hr"></div>
                    <li>Go to Create</li>
                    <li>Go to Song List</li>
                    <li>Logout</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="scroller">
        <div class="song">
            <?php
                $song_id = str_replace("_", " ", $_GET['song_id']);
                include_once 'db.php';

            	$result = mysqli_query($conn,"SELECT * FROM `users` JOIN `songs` ON users.username = songs.username WHERE songs.username = 'ccatura' AND songs.id = '" . $song_id . "'");

                while ($row = mysqli_fetch_assoc($result)) {
                    if ($row['id'] == $song_id) {
                        echo "<div class='song-title'>" . $row['song_title'] . "</div>";
                        echo "<div class='song-sub-title'>" . $row['song_artist'] . "</div>";
                        echo $row['song_lyrics'];
                    }
                }
            
            
            ?>
        </div>
    </div>

</body>
</html>