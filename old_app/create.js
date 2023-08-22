var container               = document.querySelector('.container');
var addBelow                = document.querySelector('.add-below');
var confirmRemoveBox        = document.querySelector('.confirm-remove-background-block');
var previewBackgroundBox    = document.querySelector('.preview-song-background-block');
var removeButton            = document.querySelector('#remove');
var songSections            = document.querySelector('.song-sections');
var preview                 = document.querySelector('#preview');
var confirmYes              = document.querySelector('#confirm-yes');
var previewSongContainer    = document.querySelector('#preview-song-container');
var previewSongBox          = document.querySelector('#preview-song');
var previewSongClose        = document.querySelector('#preview-song-close');
var songInfoMotherSection   = document.querySelector('.song-info-mother-section');

var submitSongArtist        = document.getElementsByName('song-artist')[0];
var submitSongTitle         = document.getElementsByName('song-title')[0];
var submitSongLyrics        = document.getElementsByName('song-lyrics')[0];
var submitSongID            = document.getElementsByName('song-id')[0];

var currentRemoveID;

// insert comment markers or something like that, and things to incluse "repeat chorus" etc




for (var x=0; x < songSections.childElementCount; x++) {
    if (songSections.children[x].getAttribute('label') != 'part-comment') {
        setDivColor(songSections.children[x], 'Verse');
    }
}

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 10) {
        songInfoMotherSection.style.boxShadow = '0 10px 20px rgba(0, 0, 0, .5)';
    } else {
        songInfoMotherSection.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0)';
    }
});

preview.addEventListener('click', function() {
    event.preventDefault();
    previewSong();
});

previewSongClose.addEventListener('click', function() {
    previewBackgroundBox.style.display = 'none';
});

// When container is clicked, this detects where it is clicked and performs the appropriate actions
container.addEventListener('click', function() {
    var thisSelection           = event.target;
    var targetParentSection     = getMotherSection(thisSelection, "song-part-mother-section");
    if (thisSelection.id != 'save') {
        event.preventDefault();
    }
    // console.log(thisSelection.id);

    if (thisSelection.className.includes('remove')) {
        if (songSections.childElementCount > 1) {
            confirmRemove(targetParentSection.id);
            currentRemoveID = targetParentSection.id;
        }
    }
    else if (thisSelection.className.includes('add-above')) {
        targetParentSection.before(makeClone(targetParentSection));
    }
    else if (thisSelection.className.includes('add-below')) {
        targetParentSection.after(makeClone(targetParentSection));
    }
    else if (thisSelection.className.includes('add-comment-above')) {
        targetParentSection.before(clone); // ************************************ NOT RIGHT YET
    }
    else if (thisSelection.className.includes('add-comment-below')) {
        targetParentSection.after(clone); // ************************************ NOT RIGHT YET
    }
    else if (thisSelection.className.includes('move-up')) {
        targetParentSection.parentNode.insertBefore(targetParentSection, targetParentSection.previousElementSibling);
    }
    else if (thisSelection.className.includes('move-down')) {
        targetParentSection.parentNode.insertBefore(targetParentSection.nextElementSibling, targetParentSection);
    }
    else if (thisSelection.className.includes('part-selection')) {
        thisSelection.addEventListener('change', function() { // ******************** This might not be correct, but it seems to work
            nameThePart(getMotherSection(thisSelection, "song-part-mother-section"), thisSelection);
        });
    }
    else if (thisSelection.className.includes('confirm-yes') || thisSelection.className.includes('confirm-no')) {
        confirmRemoveBox.style.display = 'none';
        var sectionToRemove = document.getElementById(currentRemoveID);
        sectionToRemove.classList.remove('part-warning');

        if (thisSelection.className.includes('confirm-yes')) {
            sectionToRemove.remove();
        }
    }



    /*
    /*
    /* Local funtions
    /*
    /*
    */
    function nameThePart(thisSelectionMother, thisSelectionX) {
        //get the part name: verse, chorus, etc
        //change it to be: verse 1 or verse 2, chorus 1, chorus 2, etc
        //if there's only 1, don't put a number: verse, chorus, pre-chorus

        
        var partsCount                  = document.querySelectorAll('.part-lyrics');
        var part                        = thisSelectionX.options[thisSelectionX.selectedIndex].text;
        var songInfoTextAreaToChange    = thisSelectionMother.id;
        var songInfoTextAreas           = thisSelectionMother.childNodes;

        // future task: all xpart- classes need to be removed from the select box before adding the new class
        // make it a function similar to setDivColor()
        for (let i = 0; i < songInfoTextAreas.length; i++) {
            if(songInfoTextAreas[i].nodeName == 'TEXTAREA' && songInfoTextAreas[i].className.includes('part-lyrics')) {
                songInfoTextAreas[i].setAttribute("part", part);
                if (part == 'Chorus') {
                    thisSelectionX.classList.add('xpart-chorus');
                } else if (part == 'Verse') {
                    thisSelectionX.classList.add('xpart-verse');
                } else if (part == 'Bridge') {
                    thisSelectionX.classList.add('xpart-bridge');
                } else if (part == 'Pre-Chorus') {
                    thisSelectionX.classList.add('xpart-pre-chorus');
                } else if (part == 'Custom') {
                    thisSelectionX.classList.add('xpart-custom');
                }
            }
        }


        setDivColor(thisSelectionMother, part);
        setDivColor(thisSelectionX, part);

        for (var j = 0; j < partsCount.length; j++) {
            var x = partsCount[j].getAttribute('part');
            // if part = verse, number the verses
            // if part = chorus, number them, etc
        }
    }







    function makeClone(toClone) {
        var clone = toClone.cloneNode(true);
        clone.id = Math.random().toString().slice(2,20);
        clone.querySelector('.song-info-textarea').value = '';
        return clone;
    }


 








    function confirmRemove(id) {
        confirmRemoveBox.style.display = 'flex';
        document.getElementById(id).classList.add('part-warning');
        confirmYes.focus();
    }


    function getMotherSection(targetElement, classNameToFind) {
        const sect = classNameToFind;
        var parentSection = targetElement.parentElement;
        try {
            while (!parentSection.className.includes(sect)) {
                parentSection = parentSection.parentElement;
            }
        } catch(err) {

        }
        return parentSection;
    }
});


function setDivColor(div, part) {
    div.classList.remove('part-verse');
    div.classList.remove('part-pre-chorus');
    div.classList.remove('part-chorus');
    div.classList.remove('part-bridge');
    div.classList.remove('part-custom');
    if (part == 'Chorus') {
        div.classList.add('part-chorus');
    } else if (part == 'Verse') {
        div.classList.add('part-verse');
    } else if (part == 'Bridge') {
        div.classList.add('part-bridge');
    } else if (part == 'Pre-Chorus') {
        div.classList.add('part-pre-chorus');
    } else if (part == 'Custom') {
        div.classList.add('part-custom');
    }
}


function previewSong() {
    var songArtist              = document.getElementById('song-artist').value;
    var songTitle               = document.getElementById('song-title').value;
    submitSongArtist.value      = songArtist;
    submitSongTitle.value       = songTitle;

    previewBackgroundBox.style.display = 'block';
    var lyrics = document.querySelectorAll('.lyrics');
    previewSongBox.innerHTML = '';
    submitSongLyrics.value = '';
    for (var i = 0; i < lyrics.length; i++) {
        if (lyrics[i].getAttribute('part') != 'Comment') {
            var filteredLyrics = lyrics[i].value.replace(/\n/g, "<br>"); // Converts /n to <br>
            previewSongBox.innerHTML += '<strong>' + (lyrics[i].getAttribute('part') + '</strong><br>') + (filteredLyrics + '<br><br>');
            if (lyrics[i].getAttribute('part') != 'Title' && lyrics[i].getAttribute('part') != 'Artist') {
                submitSongLyrics.value += '<strong>' + (lyrics[i].getAttribute('part') + '</strong><br>') + (filteredLyrics + '<br><br>');
            }
        } else {
            var output = '<em>' + ('(' + lyrics[i].value + ')</em><br><br>');
            previewSongBox.innerHTML += output;
            submitSongLyrics.value += output;
        }
    }
    previewSongBox.innerHTML += ('<br><br>');
}
