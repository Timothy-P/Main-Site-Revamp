function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let elmnX = 0, elmnY = 0, xdiff = 0, ydiff = 0;
    elmnt.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        if (elmnt.style.left.length === 0 && elmnt.style.top.length === 0) {
            elmnX = elmnt.clientLeft;
            elmnY = elmnt.clientTop;
        }
        else {
            elmnX = parseInt(elmnt.style.left.slice(0, -2));
            elmnY = parseInt(elmnt.style.top.slice(0, -2));
        }
        ;
        // Do difference???
        xdiff = (e.clientX - elmnX);
        ydiff = (e.clientY - elmnY);
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        let elementX = e.clientX - xdiff;
        let elementY = e.clientY - ydiff;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        //elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        //elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        elmnt.style.top = (e.clientY - ydiff) + "px";
        elmnt.style.left = (e.clientX - xdiff) + "px";
    }
    function closeDragElement() {
        console.log("Mouse up");
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
        /*let phantom = create("","div",document.getElementById("mainGrid")!, "display:hidden; grid-row: 1; grid-column: 1; top: 0px; left: 0px;", "phantom");
        console.log("Phantom created");
        while (parseInt(elmnt.style.left.slice(0,-2)) > phantom.clientLeft) {
            phantom.style.gridRow = (parseInt(phantom.style.gridRow)+1).toString()
            console.log("Phantom row changed");
        }
        while (parseInt(elmnt.style.top.slice(0,-2)) > phantom.clientTop) {
            phantom.style.gridColumn = (parseInt(phantom.style.gridColumn)+1).toString()
            console.log("Phantom column changed");
        }
        elmnt.style.gridRow = phantom.style.gridRow;
        console.log("Element row changed");
        elmnt.style.gridColumn = phantom.style.gridColumn;
        console.log("Element column changed")*/
        let newRow = Math.floor(parseInt(elmnt.style.top.slice(0, -2)) / 100) + 1;
        let newColumn = Math.floor(parseInt(elmnt.style.left.slice(0, -2)) / 100) + 1;
        console.log(newRow);
        console.log(newColumn);
        elmnt.style.gridRow = newColumn.toString();
        elmnt.style.gridColumn = newRow.toString();
    }
}
function create(content, elementType, target, styles, id) {
    if (content === void 0) {
        content = "";
    }
    if (target === void 0) {
        target = document.body;
    }
    if (styles === void 0) {
        styles = "";
    }
    if (id === void 0) {
        id = "";
    }
    var newDiv = document.createElement(elementType);
    var newContent = document.createTextNode(content);
    newDiv.setAttribute("style", styles);
    newDiv.setAttribute("id", id);
    newDiv.appendChild(newContent);
    target === null || target === void 0 ? void 0 : target.append(newDiv);
    return newDiv;
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
window.addEventListener("DOMContentLoaded", function () {
    dragElement(this.document.getElementById("temp"));
});
