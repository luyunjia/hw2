/*
* Utility methods 
*/

/* Sets font size of element with given id */
function setFontSize(id, size) {
    document.getElementById(id).style.fontSize=size;
}

/* Sets the class (and style) of element id to newClass */
function setClass(id, newClass) {
    // changes the class of element identified by id to newClass
    document.getElementById(id).className = newClass;
}

/* Sets element with given id to be visible or not*/
function setVisibility(id, visible) {
    let attrValue = '';
    if (visible) {
        attrValue = 'inline';
    } else {
        attrValue = 'none';
    }

    document.getElementById(id).style.display = attrValue;
}

/* changes the text of element with given id to newText */
function changeText(id, newText) {
    document.getElementById(id).innerHTML = newText;
}