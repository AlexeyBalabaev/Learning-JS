"use strict";

let example1 = document.querySelector('.example1');

example1.onclick = function(event) {
  if (event.altKey && event.shiftKey) {
    alert('Wow!');
  }
};