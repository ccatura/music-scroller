var wrapper = document.querySelector('.wrapper');
var createSong = document.querySelector('.create-song-button');

// This controls the change of the selection part: verse, chorus, bridge, and custom
wrapper.addEventListener('change', function() {
    var thisSelection = event.target; // this is the selection dropdown list with the choices: verse, chorus, etc.
    var customField = event.target.parentElement.querySelector('.custom-field'); // this gets the input field with the class name custom-field

    if (thisSelection.tagName == "SELECT") {
        if (thisSelection.value == 'custom') {
            customField.style.display = "block";
        } else {
            customField.style.display = "none";
        }
    }
});

// This controls the add, remove, and movemoent of sections
wrapper.addEventListener('click', function() {
    var items = document.querySelector('.wrapper').children.length; // how many items inside 'wrapper'
    var thisTarget = event.target;
    var targetParent = thisTarget.parentElement; // get the parent of the clicked element
    var targetParentSection = targetParent.parentElement.parentElement; // gets the top section (to remove) of the clicked element

    // Removes current secrtion
    if (items > 5) { // if there are less than 6 items in wrapper, we do'nt want to delete anymore
        if (!targetParentSection.className.includes("dont-delete")) {
            if (targetParent.className == "remove") targetParentSection.remove('section');
        }
    }

    // Adds a section below current one
    if (targetParent.className == "add") {
        const node = targetParentSection;
        const clone = node.cloneNode(true);
        targetParentSection.className = "section";
        targetParentSection.before(clone);
        targetParentSection.querySelector('.song-part').value = "";
    }

    // Moves a section up one place
    var moverTargetParentSection = (targetParent.parentElement);
    if (event.target.className.includes("move-up")) {
        if (moverTargetParentSection.previousElementSibling) {
            moverTargetParentSection.parentNode.insertBefore(moverTargetParentSection, moverTargetParentSection.previousElementSibling);

            // console.log(moverTargetParentSection);

            // console.log(targetParentSection);
            // console.log(Array.prototype.indexOf.call(targetParent.parentNode.childNodes, targetParent));
        }
    }

    // Moves a section down one place
    if (event.target.className.includes("move-down")) {
        if (moverTargetParentSection.nextElementSibling) {
            moverTargetParentSection.parentNode.insertBefore(moverTargetParentSection.nextElementSibling, moverTargetParentSection);
    
            // console.log(moverTargetParentSection);
            // console.log(Array.prototype.indexOf.call(targetParent.parentNode.childNodes, targetParent));
        }
    }


    // This controls the output of all the fields to create the final song
    if (event.target.className == "create-song-button") {
        var fieldText = "";
        var divs = "";
        var songText = document.getElementsByClassName("song-text");
        for (var i = 0; i < songText.length; i++) {
            if (i == 0) divs = "<div class='title'>";
            if (i == 1) divs = "<div class='sub-title'>";
            if (i > 1 ) divs = "<div class='verse'>";
            fieldText += divs + "\n" + songText[i].value + "\n</div>\n\n";
        }
        console.log(fieldText);
    }




});
