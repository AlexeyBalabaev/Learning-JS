"use strict";

let elem = document.querySelector('.elem');

let event = new Event("click");
elem.dispatchEvent(event);

/* ----- */
let hOne = document.querySelector('.h1');

document.addEventListener("hello", function(event) {
  alert("Hello from the " + event.target.tagName);
});

let event2 = new Event("hello", {bubbles: true});
hOne.dispatchEvent(event2);