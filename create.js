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
    var thisRemove = event.target;
    var thisRemoveParent = thisRemove.parentElement; // get the parent of the clicked element
    var sectionToRemove = thisRemoveParent.parentElement.parentElement; // gets the top section (to remove) of the clicked element
    var items = document.querySelector('.wrapper').children.length; // how many items inside 'wrapper'

    if (items > 5) { // if there are less than 6 items in wrapper, we do'nt want to delete anymore
        if (!sectionToRemove.className.includes("dont-delete")) {
            if (thisRemoveParent.className == "remove") { // If the class is 'remove' then go ahead with removal
                sectionToRemove.remove('section');
            }
        }
    }
});




// Add a section
wrapper.addEventListener('click', function() {
    var thisAdd = event.target;
    var thisAddParent = thisAdd.parentElement; // get the parent of the clicked element
    var sectionToAdd = thisAddParent.parentElement.parentElement; // gets the top section (to add) of the clicked element
    // var sectionToAdd = document.querySelector('.duplicatable');

    if (thisAddParent.className == "add") { // If the class is 'add' then go ahead with adding
        const node = sectionToAdd;
        const clone = node.cloneNode(true);
        sectionToAdd.className = "section";
        sectionToAdd.before(clone);
        sectionToAdd.querySelector('.song-part').value = "";
    }

});




var moveUp = document.querySelector('.move-up');
var moveDown = document.querySelector('.move-down');

wrapper.addEventListener('click', function() {
    var thisMoveUp = event.target;
    var thisMoveUpParent = thisMoveUp.parentElement.parentElement;   
    var thisMoveDown = event.target;
    var thisMoveDownParent = thisMoveDown.parentElement.parentElement;

    console.log(thisMoveUpParent);
    console.log(Array.prototype.indexOf.call(thisMoveUpParent.parentNode.childNodes, thisMoveUpParent));


    if (event.target.className.includes("move-up")) {
        if (thisMoveUpParent.previousElementSibling) {
            thisMoveUpParent.parentNode.insertBefore(thisMoveUpParent, thisMoveUpParent.previousElementSibling);
        }
    }
    if (event.target.className.includes("move-down")) {
        if (thisMoveDownParent.nextElementSibling) {
            thisMoveDownParent.parentNode.insertBefore(thisMoveDownParent.nextElementSibling, thisMoveDownParent);
        }
    }
});

