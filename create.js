var wrapper = document.querySelector('.wrapper');
var customField = document.querySelector('.custom-field');

wrapper.addEventListener('change', function() {
    var thisSelection = event.target; // this is the selection dropdown list with the choices: verse, chorus, etc.
    var customField = event.target.parentElement.querySelector('.custom-field'); // this gets the input field with the class name custom-field

    if (thisSelection.value == 'custom') {
        customField.style.display = "block";
    } else {
        customField.style.display = "none";
    }
});










// wrapper.addEventListener('change', function() {
//     var thisSelection = event.target; // this is the selection dropdown list with the choices: verse, chorus, etc.
//     var parentId = thisSelection.parentElement.id; // this gets the ID of the parent element
//     var parent = document.querySelector('#' + parentId); // this gets the parent element of the selection dropdown list
//     var firstChild = parent.querySelector('.custom-field');

//     console.log(thisSelection);

//     if (thisSelection.value == 'custom') {
//         firstChild.style.display = "block";
//     } else {
//         firstChild.style.display = "none";
//     }
// });












// var wrapper = document.querySelector('.wrapper');
// var customField = document.querySelector('.custom-field');

// wrapper.addEventListener('change', function() {
//     var wrapperClass = this.className;
//     var thisSelection = event.target;
//     var thisSelectionId = thisSelection.id;
//     var thisSelectionPartName = thisSelection.value;
//     var parentId = thisSelection.parentElement.id;
//     var parent = document.querySelector('#' + parentId);
//     var firstChild = parent.querySelector('.custom-field');
    
//     console.log("Parent Id: " + parentId);
//     console.log("Child: " + firstChild);
//     console.log("ID: " + thisSelectionId);
//     console.log("Part Name: " + thisSelectionPartName);
//     console.log("");

//     if (thisSelectionPartName == 'custom') {
//         firstChild.style.display = "block";
//     } else {
//         firstChild.style.display = "none";
//     }
// });