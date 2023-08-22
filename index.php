<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles.css">
    <title><?php echo $_GET['page']; ?></title>
</head>
<body>

<?php
    session_start();


    $page = strtolower($_GET['page']);

    echo "<div class='page-container'>";
        echo "<div class='header'>";
            include_once('./header.php');
        echo "</div>";

        echo "<div class='content'>";
            include_once("./{$page}.php");
        echo "</div>";

        echo "<div class='footer'>";
            include_once('./footer.php');
        echo "</div>";
    echo "</div>";
?>
</body>
</html>