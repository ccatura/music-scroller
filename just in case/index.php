<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="stylesheet" href="./index.css" class="">
    <script src="./index.js" defer></script>
    <link rel="icon" type="image/x-icon" href="./images/misc/favicon.ico">
    <title>Charlie's Music Scroller for Musicians</title>
</head>
<body>
    
<div class="wrapper">
    <div class="file-ops">
        <!-- <div class="header">
            <h6><input type="text"><button>Search</button></h6>
            <h6>Logged in as: <strong>ccatura</strong></h6>
        </div>
        <div class="create">
            <h5>Create Song</h5>
            <input type="text" placeholder="Title">
            <button class="big-button">Create</button>
        </div> -->
        <a href="./create.html"><h5>Create Song</h5></a>
        <div class="vert-space"></div>
        <h5>Load Song</h5>
        <ul class="file-list">
            <h6>Sort By: <a href="./index.php?sort=artist">Artist</a> | <a href="./index.php?sort=title">Title</a></h6>

        <?php
            include("./php_scripts/file_list.php");
        ?>


        </ul>
    </div>



    <div class="scroller">

    </div>


</div>
</body>
</html>