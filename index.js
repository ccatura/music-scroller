var play = document.getElementById("play");
var pause = document.getElementById("pause");
var speedUp = document.getElementById("speed-up");
var speedDown = document.getElementById("speed-down");

var startScroll;
var paused = true;
var speed = 20;
var speedChangeAmount = 5;

play.onclick = function() {
    if (paused) {
        startScroll = setInterval(myTimer, speed);
        paused = false;
    }
    console.log("Playing: " + paused);
    console.log("Speed: " + speed);
}

pause.onclick = function() {
    paused = true;
    clearInterval(startScroll);
    console.log("Playing: " + paused);
}

function myTimer() {
        window.scrollBy(0, 1);
}

speedUp.onclick = function() {
    speed -= speedChangeAmount;
    console.log("Speed: " + speed);
    if (!paused) {
        clearInterval(startScroll);
        startScroll = setInterval(myTimer, speed);
    }
}

speedDown.onclick = function() {
    speed += speedChangeAmount;
    console.log("Speed: " + speed);
    if (!paused) {
        clearInterval(startScroll);
        startScroll = setInterval(myTimer, speed);
    }
}





