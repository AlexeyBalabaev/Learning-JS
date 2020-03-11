"use strict";

let menu = document.querySelector('.menu');

menu.onclick = function(event) {
  if (event.target.nodeName != 'A') return;

  let href = event.target.getAttribute('href');
  alert( href );

  return false;
}

/* ----- */
let btnContext = document.querySelector('.btn');

btnContext.oncontextmenu = function(event) {
  event.preventDefault();
  alert("Context menu of button");
}