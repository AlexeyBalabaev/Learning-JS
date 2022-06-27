"use strict";

let dataTree = {
  "Fishes": {
    "trout": {},
    "salmon": {}
  },

  "Trees": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "Apple tree": {},
      "magnolia": {}
    }
  }
};

function createTree(container, obj) {
  container.innerHTML = createTreeText(obj);
}

function createTreeText(obj) {
  let li = '';
  let ul;
  for (let key in obj) {
    li += '<li>' + key + createTreeText(obj[key]) + '</li>';
  }
  
  if (li) {
    ul = '<ul>' + li + '</ul>'
  }

  return ul || '';
}

let container = document.querySelector('.container');
createTree(container, dataTree);

// variant 2

function createTree2(container, obj) {
  container.append(createTreeDom(obj));
}

function createTreeDom(obj) {
  if (!Object.keys(obj).length) return;

  let ul = document.createElement('ul');

  for (let key in obj) {
    let li = document.createElement('li');
    li.innerHTML = key;

    let childrenUl = createTreeDom(obj[key]);
    if (childrenUl) {
      li.append(childrenUl);
    }

    ul.append(li);
  }

  return ul;
}

let containerSecond = document.querySelector('.container-second');
createTree2(containerSecond, dataTree);