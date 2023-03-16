var createContainer     =  document.querySelector('.create-container');
var addBelow            =  document.querySelector('.add-below');
var confirmRemoveBox    =  document.querySelector('.background-block');
var songSections        =  document.querySelector('.song-sections');
var currentRemove;
var previousColor;

createContainer.addEventListener('click', function() {
    var thisSelection = event.target;
    
    // Adds section above or below current one - or removes section
    if (thisSelection.className.includes('actionbutton')) {
        var targetParentSection = getMotherSection((event.target), "song-part-mother-section"); 
            if (thisSelection.className.includes('add-below') || thisSelection.className.includes('add-above')) {
            var clone = targetParentSection.cloneNode(true);
            if(thisSelection.className.includes('add-below')) {
                targetParentSection.after(clone);
            } else if (thisSelection.className.includes('add-above')) {
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




    

















    function confirmRemove(id) {
        confirmRemoveBox.style.display = 'flex';
        confirmRemoveBox.setAttribute("name", id);
        document.getElementById(id).style.backgroundColor = 'red';
    }
    
    function getMotherSection(targetElement, classNameToFind) {
        const sect = classNameToFind;
        var parentSection = targetElement.parentElement;
        while (!parentSection.className.includes(sect)) {
            parentSection = parentSection.parentElement;
        }
        return parentSection;
    }
});