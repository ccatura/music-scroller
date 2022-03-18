var wrapper = document.querySelector('.wrapper');

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


// Remove a section
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
    if (event.target.className.includes("move-up")) {
        if (targetParent.previousElementSibling) {
            targetParent.parentNode.insertBefore(targetParent, targetParent.previousElementSibling);
    
            console.log(targetParent);
            console.log(Array.prototype.indexOf.call(targetParent.parentNode.childNodes, targetParent));
        }
    }

    // Moves a section down one place
    if (event.target.className.includes("move-down")) {
        if (targetParent.nextElementSibling) {
            targetParent.parentNode.insertBefore(targetParent.nextElementSibling, targetParent);
    
            console.log(targetParent);
            console.log(Array.prototype.indexOf.call(targetParent.parentNode.childNodes, targetParent));
        }
    }
});

