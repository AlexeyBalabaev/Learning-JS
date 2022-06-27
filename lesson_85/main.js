"use strict";

let table = document.getElementById('bagua-table');

let selectedTd;

table.onclick = function(event) {
  let target = event.target;

  while (target != this) {
    if (target.tagName == 'TD') {
      highlight(target);
      return;
    }

    target = target.parentNode;
  }
}

function highlight(node) {
  if (selectedTd) {
    selectedTd.classList.remove('highlight');
  }
  selectedTd = node;
  selectedTd.classList.add('highlight');
}

/* ----- */
class Menu {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this);
  }

  save() {
    alert('saving');
  }

  load() {
    alert('loading');
  }

  search() {
    alert('searching');
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  };
}

let menu = document.querySelector('.menu');

new Menu(menu);

/* ----- */
let counterBox = document.querySelector('.counter-box');

counterBox.addEventListener('click', function(event) {

  if (event.target.dataset.counter != undefined) {
    event.target.value++;
  }

});

/* ----- */
let toggleBox = document.querySelector('.toggle-box');

toggleBox.addEventListener('click', function(event) {
  let id = event.target.dataset.toggleId;
  if (!id) return;

  let elem = document.getElementById(id);

  elem.hidden = !elem.hidden;
});