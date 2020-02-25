"use strict";

let ulList = document.querySelector('.ul-list');
let itemOne = ulList.querySelector('.item-one');

itemOne.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');