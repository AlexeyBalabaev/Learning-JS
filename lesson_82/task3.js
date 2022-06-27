"use strict";

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

function showNote3(anchor, position, html) {

  let noteAbs = document.createElement('div');
  noteAbs.className = "note-absolute";
  noteAbs.innerHTML = html;
  document.body.append(noteAbs);

  positionAt3(anchor, position, noteAbs);
}

function positionAt3(anchor, position, elem) {

  let anchorCoords = getCoords(anchor);

  switch (position) {
    case "top-out":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
      break;

    case "right-out":
      elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "bottom-out":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + ancgor.offsetHeight + "px";
      break;

    case "top-in":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "right-in":
      elem.style.width = '150px';
      elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
      elem.style.top = anchorCoords.top + "px";

    case "bottom-in":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
      break;
  }

}

let taskThird = document.querySelector('.task3');
let blockquote3 = taskThird.querySelector('blockquote');

showNote3(blockquote3, "top-in", "note top-in");
showNote3(blockquote3, "top-out", "note top-out");
showNote3(blockquote3, "right-out", "note right-out");
showNote3(blockquote3, "bottom-in", "note bottom-in");