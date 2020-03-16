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

/* ----- */
let event1 = new MouseEvent("click", {
  bubbles: true,
  cancelable: true,
  clientX: 100,
  clientY: 100
});

alert(event.clientX);   // 100

/* ----- */
let event2 = new Event("click", {
  bubbles: true,
  cancelable: true,
  clientX: 100,
  clientY: 100
});

alert(event.clientX);   // undefined