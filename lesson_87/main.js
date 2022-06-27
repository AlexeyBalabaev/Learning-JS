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
let event3 = new MouseEvent("click", {
  bubbles: true,
  cancelable: true,
  clientX: 100,
  clientY: 100
});

alert(event3.clientX);   // 100

/* ----- */
let event4 = new Event("click", {
  bubbles: true,
  cancelable: true,
  clientX: 100,
  clientY: 100
});

alert(event4.clientX);   // undefined

/* ----- */
let elem2 = document.querySelector('.elem2');

elem2.addEventListener("hello", function(event) {
  alert(event.detail.name);
});

elem2.dispatchEvent(new CustomEvent("hello", {
  detail: { name: "John" }
}));

/* ----- */
let rabbit = document.querySelector('.rabbit');

function hide() {
  let event = new CustomEvent("hide", {
    cancelable: true
  });

  if (!rabbit.dispatchEvent(event)) {
    alert("Action is canceled of handler");
  } else {
    rabbit.hidden = true;
  }
}

rabbit.addEventListener('hide', function(event) {
  if (confirm("Call preventDefault?")) {
    event.preventDefault();
  }
});

/* ----- */
let menu1 = document.querySelector('.menu1');

menu1.onclick = function() {
  alert(1);

  menu1.dispatchEvent(new CustomEvent("menu-open1", {
    bubbles: true
  }));

  alert(2);
};

document.addEventListener('menu-open1', () => alert('nested event'));

/* ----- */
let menu2 = document.querySelector('.menu2');

menu2.onclick = function() {
  alert(1);

  setTimeout(() => menu2.dispatchEvent(new CustomEvent("menu-open2", {
    bubbles: true
  })));

  alert(2);
};

document.addEventListener('menu-open2', () => alert('nested event'));