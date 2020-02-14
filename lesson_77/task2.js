"use strict";

let task2 = document.querySelector('.task2');

// first version
let links1 = task2.querySelectorAll('a');

for (let linkElem of links1) {
  let href = linkElem.getAttribute('href');
  if (!href) continue;   // no have an attribute

  if (!href.includes('://')) continue;   // no have a protocol

  if (href.startsWith('http://internal.com')) continue;   // inner

  link.style.color = 'orange';
}

// second version
let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
let links2 = task2.querySelectorAll(selector);

links2.forEach(linkElem2 => linkElem2.style.color = 'orange');