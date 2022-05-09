var wrapper = document.querySelector('.wrapper');
// var createSong = document.querySelector('.create-song-button');


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


// This controls the add, remove, and movement of sections
wrapper.addEventListener('click', function() {
    var items = document.querySelector('.wrapper').children.length; // how many items inside 'wrapper
    var targetParentSection = getMotherSection((event.target), "section"); 

    console.log(items);

    // Removes current section
    // if (items > 5) { // if there are less than 6 items in wrapper, we do'nt want to delete anymore
        if (!targetParentSection.className.includes("dont-delete")) {
            if ((event.target).className == "remove-click") targetParentSection.remove('section');
        }
    // }

    // Adds a section below current one
    if ((event.target).className == "add-click") {
        const node = targetParentSection;
        const clone = node.cloneNode(true);
        targetParentSection.className = "section";
        targetParentSection.before(clone);
        targetParentSection.querySelector('.song-part').value = "";
    }

    // Moves a section up one place
    if (event.target.className.includes("move-up")) {
        if (targetParentSection.previousElementSibling) {
            targetParentSection.parentNode.insertBefore(targetParentSection, targetParentSection.previousElementSibling);
        }
    }

    // Moves a section down one place
    if (event.target.className.includes("move-down")) {
        if (targetParentSection.nextElementSibling) {
            targetParentSection.parentNode.insertBefore(targetParentSection.nextElementSibling, targetParentSection);
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


    function getMotherSection(targetElement, classNameToFind) {
        const sect = classNameToFind; // string to search for inside classname
        var parentSection = targetElement;
        var x = 0;

        while (!parentSection.className.includes(sect)) { // keeps looping while string is not found
            parentSection = parentSection.parentElement;
            x++;
            if (x > 15) { // just in case i missed something and end up in an endless loop
                break;
            }
        }
        return parentSection;
    }
});
