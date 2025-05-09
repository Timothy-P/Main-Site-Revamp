var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Perminent stuff.
function dragElementSnap(elmnt) {
    for (let i = 0; i < elmnt.children[0].children.length; i++) {
        elmnt.children[0].children[i].setAttribute("draggable","false");
    }
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let elmnX = 0, elmnY = 0, xdiff = 0, ydiff = 0;
    elmnt.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        if (elmnt.dataset.left === undefined && elmnt.dataset.top === undefined) {
            elmnt.dataset.left = "0";
            elmnt.dataset.top = "0";
        }
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
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
        let newRow = Math.round((parseInt(elmnt.style.top.slice(0, -2)) + parseInt(elmnt.dataset.top)) / 100) + 1;
        let newColumn = Math.round((parseInt(elmnt.style.left.slice(0, -2)) + parseInt(elmnt.dataset.left)) / 100) + 1;
        if (newRow - (parseInt(elmnt.dataset.left) / 100) > 0.8 || newColumn - (parseInt(elmnt.dataset.top) / 100) > 0.8) {
            elmnt.style.gridRow = newRow.toString();
            elmnt.style.gridColumn = newColumn.toString();
            elmnt.dataset.left = (parseInt(elmnt.style.left.slice(0, -2)) + parseInt(elmnt.dataset.left)).toString();
            elmnt.dataset.top = (parseInt(elmnt.style.top.slice(0, -2)) + parseInt(elmnt.dataset.top)).toString();
        }
        elmnt.style.top = "0px";
        elmnt.style.left = "0px";
    }
}
;
function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let elmnX = 0, elmnY = 0, xdiff = 0, ydiff = 0;
    elmnt.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        if (elmnt.dataset.left === undefined && elmnt.dataset.top === undefined) {
            elmnt.dataset.left = "0";
            elmnt.dataset.top = "0";
        }
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
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
;
function dragMenu(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let elmnX = 0, elmnY = 0, xdiff = 0, ydiff = 0;
    elmnt.onmousedown = dragMouseDown;
    let parent = elmnt.parentElement;
    function dragMouseDown(e) {
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        if (parent.dataset.left === undefined && parent.dataset.top === undefined) {
            parent.dataset.left = "0";
            parent.dataset.top = "0";
        }
        if (parent.style.left.length === 0 && parent.style.top.length === 0) {
            elmnX = parent.clientLeft;
            elmnY = parent.clientTop;
        }
        else {
            elmnX = parseInt(parent.style.left.slice(0, -2));
            elmnY = parseInt(parent.style.top.slice(0, -2));
        }
        ;
        // Do difference???
        xdiff = (e.clientX - elmnX);
        ydiff = (e.clientY - elmnY);
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        // calculate the new cursor position:
        let elementX = e.clientX - xdiff;
        let elementY = e.clientY - ydiff;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = "0px";
        elmnt.style.left = "0px";
        parent.style.top = (e.clientY - ydiff) + "px";
        parent.style.left = (e.clientX - xdiff) + "px";
    }
    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
;
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
;
function menu(bodyContent, id, target, bodyText, e) {
    // Base
    let wrapper = create("", "div", target, `min-height: 150px; top: ${e.clientY}px; left: ${e.clientX}px; position: absolute; background: #ffffffff; min-width: 350px;`, id);
    let header = create("", "header", wrapper, "height: 25px;border-bottom: #818182ff solid 3px;display: flex;background-color: #c2c2c2ff;justify-content: end;top: 0px;left: 0px;", id + "-header");
    let body = create(bodyContent, "div", wrapper, "min-height: 94px; min-width: -webkit-fill-available; overflow: scroll; padding: 5px; resize: both; scrollbar-width: thin;", id + "-body");
    let footer = create("", "div", wrapper, "width: -webkit-fill-available;min-height: 25px;background: #c2c2c2ff;border-top: #818182ff solid 3px;", id + "-footer");

    //Menu buttons
    let headerText = create("","p",header,"display: flex; justify-content: left; width: -webkit-fill-available; height: -webkit-fill-available; align-items: center; padding: 0px 0px 0px 5px; ","title");
    let Close = create("", "div", header, "justify-content:end;height: -webkit-fill-available;", id + "close");
    let closebutton = create("", "img", Close, "height: -webkit-fill-available; padding: 5px;", "closebutton");

    // Body content
    body.innerHTML = bodyText;
    
    dragMenu(header);
    closebutton.setAttribute("src", "./Icons/WindowCross.png");
    Close.onclick = function () {
        wrapper.remove();
        locationA = "";
    };
    return true;
}
;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
window.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < this.document.getElementById("mainGrid").childElementCount; i++) {
        dragElementSnap(this.document.getElementById("mainGrid").children[i]);
    }
    //dragElement(this.document.getElementById("temp")!);
    //dragElement(this.document.getElementById("Help")!);
    fetchJSONData();
    this.setInterval(Clock, 100);
});
function errorhandle(e) {
    // 
    create(`${e}`, "div", document.getElementById("main"), `background:`, "errormenu");
}
;
let locationA = "";
function createIcon(name, iconImage, target, id) {
    if (target) {
        const iconDiv = create("","div",target,"height: fit-content; max-height: 100px; width: fit-content; max-width: 100px; display: inline-block; padding: 10px;",id+"-main");
        const iconDivImage = create("","img",iconDiv,"height: 60px;",id+"-icon");
        iconDivImage.setAttribute("src",iconImage);
        iconDivImage.setAttribute("draggable","false");
        const iconDivName = create(name,"p",iconDiv,"position: relative; width: -webkit-fill-available; justify-content: center; display: flex; top: -18px; height: fit-content; padding: 0px;",id+"-text");
        iconDiv.addEventListener("dblclick", function (e) {
            const parent = e.target.parentElement.parentElement;
            
            let spot = jsondata;
            if (parent.getAttribute("dataset-location")) {
                for (item in parent.getAttribute("dataset-location").split("/")) {
                    if (parent.getAttribute("dataset-location").split("/")[item].length > 0) {
                        spot = spot[parent.getAttribute("dataset-location").split("/")[item]];
                    };
                };
            }
            else {
            	parent.setAttribute("dataset-location", "");
            };
            spot = spot[iconDiv.id.split("-")[0]];
            locationA += `${iconDiv.id.split("-")[0]}/`;
            target.innerHTML = "";
            if (typeof spot === "object") {
                for (key in spot) {
                    if (typeof spot[key] === "object") {
                	    createIcon(key,"./Icons/Documents Folder.ico",parent,key);
                        console.log(key);
                        console.log(typeof spot[key]);
                        console.log(typeof key);
                    }
                    else {
                        createIcon(key,"./Icons/WordPad sheet.ico",parent,key);
                    }
                };
                /*
                for (key in jsondata) {
                    console.log(typeof jsondata[key]);
                    console.log(key)
                };
                */
            }
            else {
                /*let mainDiv = parent.parentElement;
                
                let event = new MouseEvent('dblclick', {
                    'view': window,
                    'bubbles': true,
                    'cancelable': true
                  });
                document.getElementById('help').dispatchEvent(event);
                let Helpmenu = document.getElementById("HelpMenu");

                Helpmenu.setAttribute("data-left",mainDiv.getAttribute("data-left"));
                Helpmenu.setAttribute("data-top",mainDiv.getAttribute("data-top"));
                Helpmenu.style.left = mainDiv.style.left;
                Helpmenu.style.top = mainDiv.style.top;
                mainDiv.remove();*/
                parent.innerHTML = `<p>${spot}</p>`;
            };
            parent.setAttribute("dataset-location",locationA);
            parent.parentElement.children[0].children[0].innerText = parent.getAttribute("dataset-location");
        });
        
        return iconDiv;
    };
};

this.document.getElementById("files").addEventListener("dblclick", function (e) {
    let target = e.target, parent = target.parentElement.parentElement;
    menu("", "tempMenu", document.getElementById("main"), "", e);
    for (const key in jsondata) {
        createIcon(key,"./Icons/Documents Folder.ico",document.getElementById("tempMenu-body"),key);
    };
});
this.document.getElementById("help").addEventListener("dblclick", function (e) {
    let target = e.target, parent = target.parentElement.parentElement;
    menu("", "HelpMenu", document.getElementById("main"), jsondata.Help, e);
});
let jsondata;
// File system
async function fetchJSONData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('./json/filesystem.json');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            jsondata = yield response.json(); // Set the global variable to the retrieved data
        }
        catch (error) {
            errorhandle(error);
        }
    });
}
;
// Taskbar clock
function Clock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('clock').children[0].innerText = strTime;
};

// Context menu
/*var i = document.getElementById("menu").style;
if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
    var posX = e.clientX;
    var posY = e.clientY;
    menu(posX, posY);
    e.preventDefault();
  }, false);
  document.addEventListener('click', function(e) {
    i.opacity = "0";
    setTimeout(function() {
      i.visibility = "hidden";
    }, 501);
  }, false);
} else {
  document.attachEvent('oncontextmenu', function(e) {
    var posX = e.clientX;
    var posY = e.clientY;
    menu(posX, posY);
    e.preventDefault();
  });
  document.attachEvent('onclick', function(e) {
    i.opacity = "0";
    setTimeout(function() {
      i.visibility = "hidden";
    }, 501);
  });
}

function menu(x, y) {
  i.top = y + "px";
  i.left = x + "px";
  i.visibility = "visible";
  i.opacity = "1";
}*/
