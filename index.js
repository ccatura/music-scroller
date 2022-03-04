var play = document.getElementById("play");
var pause = document.getElementById("pause");
var speedUp = document.getElementById("speed-up");
var speedDown = document.getElementById("speed-down");
var sizeUp = document.getElementById("size-up");
var sizeDown = document.getElementById("size-down");

var startScroll;
var paused = true;
var speed = 20;
var speedChangeAmount = 1.5;
var newFontSize = computedFontSize = parseInt(window.getComputedStyle(document.body).fontSize); //get base font size in body

displaySpeed();
displaySize();






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

speedUp.onclick = function() {
    speed /= speedChangeAmount;
    resetInterval()
}

speedDown.onclick = function() {
    speed *= speedChangeAmount;
    resetInterval()
}

sizeUp.onclick = function() {
    newFontSize += 2;
    document.body.style.fontSize = parseInt(newFontSize) + "px";
    console.log(newFontSize);
    displaySize();
}

sizeDown.onclick = function() {
    newFontSize -= 2;
    document.body.style.fontSize = parseInt(newFontSize) + "px";
    console.log(newFontSize);
    displaySize();
}






function myTimer() {
        window.scrollBy(0, 1);
}

function displaySpeed() {
    document.getElementById('speed').textContent = speed.toFixed(2);
}

function displaySize() {
    document.getElementById('size').textContent = newFontSize;
}

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

// Stop scrolling when page hits the bottom
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        stopScrolling()
        }
};

