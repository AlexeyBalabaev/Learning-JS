"use strict";

let wild = document.querySelector('.wild');

for (let li of wild.querySelectorAll('li')) {
  let title = li.firstChild.data;

  title = title.trim();

  let count = li.getElementsByTagName('li').length;

  alert(title + ': ' + count);
}