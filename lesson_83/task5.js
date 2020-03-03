"use strict";

let menuElem = document.querySelector('.menu');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function() {
  menuElem.classList.toggle('open');
};