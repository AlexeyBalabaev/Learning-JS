"use strict";

let elemBox = document.querySelector('.clear-box');

function clear(elem) {
  while (elem.firstChild) {
    elem.firstChild.remove();
  }
}

// or
function clearAnother(elem) {
  elem.innerHTML = '';
}

clear(elemBox);