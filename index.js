var play = document.getElementById("play");
var pause = document.getElementById("pause");
var speedUp = document.getElementById("speed-up");
var speedDown = document.getElementById("speed-down");

var startScroll;
var paused = true;
var speed = 20;
var speedChangeAmount = 1.5;

displaySpeed();

play.onclick = function() {
    if (paused) {
        startScroll = setInterval(myTimer, speed);
        paused = false;
        document.getElementById('play').style.display = "none";
        document.getElementById('pause').style.display = "flex";
    }
    console.log("Playing: " + paused);
    console.log("Speed: " + speed);
}

pause.onclick = function pauseIt() {
    stopScrolling()
}

function myTimer() {
        window.scrollBy(0, 1);
}

speedUp.onclick = function() {
    speed /= speedChangeAmount;
    resetInterval()
}

speedDown.onclick = function() {
    speed *= speedChangeAmount;
    resetInterval()
}

function displaySpeed() {
    document.getElementById('speed').textContent = speed.toFixed(2);
}

// Stop scrolling when page hits the bottom
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        stopScrolling()
        }
};

function stopScrolling() {
    paused = true;
    clearInterval(startScroll);
    console.log("Playing: " + paused);
    document.getElementById('play').style.display = "flex";
    document.getElementById('pause').style.display = "none";
}

function resetInterval() {
    console.log("Speed: " + speed);
    if (!paused) {
        clearInterval(startScroll);
        startScroll = setInterval(myTimer, speed);
    }
    displaySpeed();
}