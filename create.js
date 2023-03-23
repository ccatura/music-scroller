var container           = document.querySelector('.container');
var addBelow            = document.querySelector('.add-below');
var confirmRemoveBox    = document.querySelector('.background-block');
var removeButton        = document.querySelector('#remove');
var songSections        = document.querySelector('.song-sections');
var preview             = document.querySelector('#preview');
var confirmYes          = document.querySelector('#confirm-yes');
var currentRemoveID;

// insert comment markers or something like that, and things to incluse "repeat chorus" etc




preview.addEventListener('click', function() {
    previewSong();
});




container.addEventListener('click', function() {
    var thisSelection           = event.target;
    var targetParentSection     = getMotherSection(thisSelection, "song-part-mother-section");

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
    else if (thisSelection.className.includes('add-comment-below')) {
        targetParentSection.after(clone); // ************************************ NOT RIGHT YET
    }
    else if (thisSelection.className.includes('add-comment-above')) {
        targetParentSection.before(clone); // ************************************ NOT RIGHT YET
    }
    else if (thisSelection.className.includes('move-up')) {
        targetParentSection.parentNode.insertBefore(targetParentSection, targetParentSection.previousElementSibling);
    }
    else if (thisSelection.className.includes('move-down')) {
        targetParentSection.parentNode.insertBefore(targetParentSection.nextElementSibling, targetParentSection);
    }
    else if (thisSelection.className.includes('part-selection')) {
        nameThePart(getMotherSection(thisSelection, "song-part-mother-section"), thisSelection);
    }
    else if (thisSelection.className.includes('confirm-yes') || thisSelection.className.includes('confirm-no')) {
        confirmRemoveBox.style.display = 'none';
        var sectionToRemove = document.getElementById(currentRemoveID);
        sectionToRemove.classList.remove('part-warning');

        if (thisSelection.className.includes('confirm-yes')) {
            sectionToRemove.remove();
        }
    }






















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






function previewSong() {
    var lyrics = document.querySelectorAll('.lyrics');
    for (var i = 0; i < lyrics.length; i++) {
        if (lyrics[i].getAttribute('part') != 'Comment') {
            console.log(lyrics[i].getAttribute('part') + ':');
            console.log(lyrics[i].value + '\n\n');
        } else {
            console.log('(' + lyrics[i].value + ')\n\n');
        }
    }
    console.log('\n');
}
