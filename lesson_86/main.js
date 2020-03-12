"use strict";

let menu = document.querySelector('.menu');

menu.onclick = function(event) {
  if (event.target.nodeName != 'A') return;

  let href = event.target.getAttribute('href');
  alert( href );

  return false;
}

/* ----- */
let btnContext = document.querySelector('.btn-context');

btnContext.oncontextmenu = function(event) {
  event.preventDefault();
  alert("Context menu of button");
};

document.oncontextmenu = function(event) {
  event.preventDefault();
  alert("Context menu of document");
}

/* ----- */
let btnContext2 = document.querySelector('.btn-context2');

btnContext2.oncontextmenu = function(event) {
  event.preventDefault();
  event.stopPropagation();
  alert("Context menu of button");
};

document.oncontextmenu = function(event) {
  event.preventDefault();
  alert("Context menu of document");
};

/* ----- */
let btnContext3 = document.querySelector('.btn-context3');

btnContext3.oncontextmenu = function(event) {
  event.preventDefault();
  alert("Context menu of button");
};

document.oncontextmenu = function(event) {
  if (event.defaultPrevented) return;

  event.preventDefault();
  alert("Context menu of document");
};