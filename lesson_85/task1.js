"use strict";

let task1 = document.querySelector('.task1');

task1.onclick = function(event) {
  if (event.target.className != 'remove-button') return;

  let pane = event.target.closest('.pane');
  pane.remove();
}