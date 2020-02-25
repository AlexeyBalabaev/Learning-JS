"use strict";

let ulCreate = document.createElement('ul');
document.body.append(ulCreate);

while (true) {
  let data = prompt('Enter the text for element of list', '');

  if(!data) {
    break;
  }

  let liCreate = document.createElement('li');
  liCreate.textContent = data;
  ulCreate.append(liCreate);
}