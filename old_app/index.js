var play = document.getElementById("play");
var pause = document.getElementById("pause");
var speedUp = document.getElementById("speed-up");
var speedDown = document.getElementById("speed-down");
var sizeUp = document.getElementById("size-up");
var sizeDown = document.getElementById("size-down");
var fullscreenButton = document.getElementById("fullscreen");

var startScroll;
var paused = true;
var newFontSize = computedFontSize = parseInt(window.getComputedStyle(document.body).fontSize); //get base font size in body
var playState = paused;
var smallestSize = 10;
var largestSize = 136;
var sizeBy = 4;

fullscreenButton.addEventListener('click', function() {
    document.head.requestFullscreen();
});

// These are my personal pre-schosen speeds based on experienced teleprompt needs
var speedPresets = {
    10: 8,
    9:  12,
    8:  15,
    7:  20,
    6:  30,
    5:  40,
    4:  60,
    3:  80,
    2:  100,
    1:  150
};
var speedIndex = 4; // Starting speed

displaySpeed();
displaySize();
displayState();


// START PLAY PAUSE
play.onclick = function() {
    if (paused) {
        startScroll = setInterval(myTimer, speedPresets[speedIndex]);
        paused = false;
        document.getElementById('play').style.display = "none";
        document.getElementById('pause').style.display = "flex";
    }
    displayState();
    // console.log("Playing: " + paused);
    // console.log("Speed: " + speed);
}

pause.onclick = function pauseIt() {
    stopScrolling();
    displayState();
}
// END PLAY PAUSE





// START SPEED
speedDown.onclick = function() {
    if (speedIndex > 1) {
        speedIndex--;
        // console.log(speedIndex);
        resetInterval()
    }
}

speedUp.onclick = function() {
    if (speedIndex < 10) {
        speedIndex++;
        // console.log(speedIndex);
        resetInterval()
    }
}
// END SPEED



// START SIZE
sizeUp.onclick = function() {
    if (newFontSize < largestSize) {
        newFontSize += sizeBy;
        document.body.style.fontSize = parseInt(newFontSize) + "px";
        // console.log(newFontSize);
        displaySize();
    }
}

sizeDown.onclick = function() {
    if (newFontSize > smallestSize) {
        newFontSize -= sizeBy;
        document.body.style.fontSize = parseInt(newFontSize) + "px";
        // console.log(newFontSize);
        displaySize();
    }
}
// END SIZE






// FUNCTIONS
function myTimer() {
        window.scrollBy(0, 1);
}

function displaySpeed() {
    document.getElementById('speed').textContent = speedIndex;
}

function displayState() {
    if (paused) {
        playState = "Start";
    } else {
        playState = "Stop";
    }
    document.getElementById('state').textContent = playState;
    // console.log("It is: " + playState);
}

function displaySize() {
    document.getElementById('size').textContent = newFontSize;
}

function stopScrolling() {
    paused = true;
    clearInterval(startScroll);
    // console.log("Playing: " + paused);
    document.getElementById('play').style.display = "flex";
    document.getElementById('pause').style.display = "none";
}

function resetInterval() {
    // console.log("Speed: " + speed);
    if (!paused) {
        clearInterval(startScroll);
        startScroll = setInterval(myTimer, speedPresets[speedIndex]);
    }
    displaySpeed();
}

// Stop scrolling when page hits the bottom
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        stopScrolling()
        }
};

