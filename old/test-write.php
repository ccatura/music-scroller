<?php
$myfile = fopen("./users/ccatura/songs/txt/newfile.txt", "w") or die("Unable to open file!");
$txt =
"<div class=\"song-title\">The Other Side of Life</div>
<div class=\"song-sub-title\">© April 22, 2014 Charlie Katt • www.charliekatt.com</div>

<div class=\"song-section\">
<div class=\"song-section-name\">VERSE 1</div>
Never ending sky<br>
I feel so small when crowds go by<br>
I still wonder why<br>
Some belong to homes<br>
But, I am still alone<br>
I can feel this heart of paper<br>
Growing colder<br>
Wish each beat was<br>
</div>

<div class=\"song-section\">
<div class=\"song-section-name\">CHORUS</div>
Stronger, longer<br>
These wishes that I'm keeping<br>
I’m living while I’m sleeping<br>
I want more, but long for night time to arrive<br>
To live on the other side of life<br>
</div>

<div class=\"song-section\">
<div class=\"song-section-name\">VERSE 2</div>
Ever growing world<br>
A love-filled little boy or girl<br>
At least that’s what I’ve earned<br>
It’s easier to say<br>
That love will find a way<br>
But, I can feel this heart grow weaker<br>
Tired but eager<br>
Wish each beat was<br>
</div>

<div class=\"song-section\">
<div class=\"song-section-name\">BRIDGE</div>
Where children grow and know their lives flow by them like a stream<br>
I want to live the things that I can only dream<br>
</div>";
fwrite($myfile, $txt);
fclose($myfile);
?>