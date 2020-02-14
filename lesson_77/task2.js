"use strict";

let task2 = document.querySelector('.task2');
let links = task2.querySelectorAll('a');

for (let linkElem of links) {
  let href = linkElem.getAttribute('href');
  if (!href) continue;   // no have an attribute

  if (!href.includes('://')) continue;   // no have a protocol

  if (href.startsWith('http://internal.com')) continue;   // inner
}