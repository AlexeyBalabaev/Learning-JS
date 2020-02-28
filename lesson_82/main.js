"use strict";

let elem = document.querySelector('.coords-show-mark');

function createMessageUnder(elem, html) {
  let message = document.createElement('div');
  message.style.cssText = "position:fixed; color: red;";

  let coords = elem.getBoundingClientRect();

  message.style.left = coords.left + "px";
  message.style.top = coords.bottom + "px";

  message.innerHTML = html;

  return message;
}

let message = createMessageUnder(elem, 'Hello, world!');
document.body.append(message);
setTimeout(() => message.remove(), 5000);

/* ----- */
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}