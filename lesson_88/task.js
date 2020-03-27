"use strict";

let task = document.querySelector('.task');
let taskElem = task.querySelector('.task__list-item');

taskElem.onmosuedown = function() {
  return false;
}

taskElem.dblclick = function() {
  this.addClass('selected');
}