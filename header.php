<?php
// if (isset($_GET['type'])) {
//     $type = $_GET['type'];
// } else {
//     $type = '';
// }

if ($page == 'scroller') {
    $html = "
        <div class='outer-el'>SCROLL</div>
        <div class='outer-el'>PREV</div>
        <div class='outer-el'>NEXT</div>
        <div class='outer-el'>LARGER</div>
        <div class='outer-el'>SMALLER</div>
        <div class='outer-el'>&#9776;</div>";
} else {
    $html = "
        <div class='outer-el'>ccatura</div>
        <div class='outer-el'>Header</div>
        <div class='outer-el'>&#9776;</div>
    ";
}






echo $html;
