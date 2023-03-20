var container           = document.querySelector('.container');
var addBelow            = document.querySelector('.add-below');
var confirmRemoveBox    = document.querySelector('.background-block');
var removeButton        = document.querySelector('#remove');
var songSections        = document.querySelector('.song-sections');
var preview             = document.querySelector('#preview');
var confirmRemoveYes    = document.querySelector('#confirm-remove-yes');
var currentRemove;
var previousColor;

// insert comment markers or something like that, and things to incluse "repeat chorus" etc



preview.addEventListener('click', function() {
    previewSong();
});

container.addEventListener('click', function() {
    var thisSelection = event.target;

    // Adds section above or below current one - or removes section
    if (thisSelection.className.includes('actionbutton')) {
        var targetParentSection = getMotherSection(thisSelection, "song-part-mother-section"); 
            if (thisSelection.className.includes('add-below') || thisSelection.className.includes('add-above')) {
                var clone = targetParentSection.cloneNode(true);
                
                if(thisSelection.className.includes('add-below')) {
                    targetParentSection.after(clone);
                } else if (thisSelection.className.includes('add-above')) {
                    targetParentSection.before(clone);
                } else if (thisSelection.className.includes('add-comment-below')) {
                    targetParentSection.after(clone);
                } else if (thisSelection.className.includes('add-comment-above')) {
                    targetParentSection.before(clone);
                }
            clone.id = Math.random().toString().slice(2,20);
            clone.querySelector('.song-info-textarea').value = '';
        } else if (thisSelection.className.includes('remove')) {
            if (songSections.childElementCount > 1) {
                previousColor = window.getComputedStyle(targetParentSection).getPropertyValue('background-color');
                confirmRemove(targetParentSection.id);
                currentRemove = targetParentSection.id;
            }
        } else if (thisSelection.className.includes('move-up')) {
            targetParentSection.parentNode.insertBefore(targetParentSection, targetParentSection.previousElementSibling);
        } else if (thisSelection.className.includes('move-down')) {
            targetParentSection.parentNode.insertBefore(targetParentSection.nextElementSibling, targetParentSection);
        } else if (thisSelection.className.includes('chicken')) {
            nameThePart(getMotherSection(thisSelection, "song-part-mother-section"), thisSelection);
        }
    } else if (thisSelection.className.includes('confirm-button')) {
        currentRemove = confirmRemoveBox.getAttribute('name');
        if (thisSelection.className.includes('confirm-remove-yes')) {
            confirmRemoveBox.style.display = 'none';
            document.getElementById(currentRemove).remove();
        } else if (thisSelection.className.includes('confirm-remove-no')) {
            confirmRemoveBox.style.display = 'none';
            document.getElementById(currentRemove).style.backgroundColor = previousColor;
        }
    }












    // this isnt right yet
    function nameThePart(thisSelectionMother, thisSelectionX) {
        //get the part name: verse, chorus, etc
        //change it to be: verse 1 or verse 2, chorus 1, chorus 2, etc
        //if there's only 1, don't put a number: verse, chorus, pre-chorus
        
        var partsCount                  = document.querySelectorAll('.part-lyrics');
        var part                        = thisSelectionX.options[thisSelectionX.selectedIndex].text;
        var songInfoTextAreaToChange    = thisSelectionMother.id;
        var songInfoTextAreas           = thisSelectionMother.childNodes;


        for (let i = 0; i < songInfoTextAreas.length; i++) {
            if(songInfoTextAreas[i].nodeName == 'TEXTAREA' && songInfoTextAreas[i].className.includes('part-lyrics')) {
                songInfoTextAreas[i].setAttribute("part", part);

            }
        }

        // console.log(part);
        // console.log('songInfoTextAreaToChange: ' + songInfoTextAreaToChange);


        for (var j = 0; j < partsCount.length; j++) {
            var x = partsCount[j].getAttribute('part');
            // if part = verse, number the verses
            // if part = chorus, number them, etc
        }
    }






    function confirmRemove(id) {
        confirmRemoveBox.style.display = 'flex';
        confirmRemoveBox.setAttribute("name", id);
        document.getElementById(id).style.backgroundColor = 'orange';
        confirmRemoveYes.focus();
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
