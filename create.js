var createContainer = document.querySelector('.create-container');
var addBelow = document.querySelector('.add-below');
var confirmRemoveBox = document.querySelector('.confirm-remove');
var confirmRemoveYes = document.querySelector('#confirm-remove-yes');
var confirmRemoveNo  = document.querySelector('#confirm-remove-no');



createContainer.addEventListener('click', function() {
    var thisSelection = event.target;
    
    if(thisSelection.classList.contains('clicker')) {
        var motherSection = getMotherSection(thisSelection, 'mother-section').className;
        console.log('ID: ' + thisSelection.id + '\nClass List: ' + thisSelection.className);
        console.log('Mother Section: ' + motherSection);
        console.log('');
    }


    // Adds section above or below current one - or removes section
    if (thisSelection.className.includes('actionbutton')) {
        var targetParentSection = getMotherSection((event.target), "song-part-mother-section"); 
            if (thisSelection.className.includes('add-below') || thisSelection.className.includes('add-above')) {
            const clone = targetParentSection.cloneNode(true);
            if(thisSelection.className.includes('add-below')) {
                targetParentSection.after(clone);
            } else if (thisSelection.className.includes('add-above')) {
                targetParentSection.before(clone);
            }
            clone.id = Math.random().toString().slice(2,20);
            clone.querySelector('.song-info-textarea').value = '';
        } else if (thisSelection.className.includes('remove')) {
            confirmRemove(targetParentSection.id);
            var currentRemove = targetParentSection.id;
        }
    }





    function confirmRemove(id) {
        confirmRemoveBox.style.display = 'flex';
        confirmRemoveBox.setAttribute("name", id);
    }
    
    confirmRemoveYes.addEventListener('click', function() {
        confirmRemoveBox.style.display = 'none';
        try {
            document.getElementById(currentRemove).remove();
        } catch(err) {
            console.log(err);
        }
    });
    confirmRemoveNo.addEventListener('click', function() {
        confirmRemoveBox.style.display = 'none';
    });





    function getMotherSection(targetElement, classNameToFind) {
        const sect = classNameToFind;
        var parentSection = targetElement;

        try {
            while (!parentSection.className.includes(sect)) {
                parentSection = parentSection.parentElement;
            }
        } catch (err) {
            console.log('ERROR: ' + err);
            return targetElement;
        }
        return parentSection;
    }
});