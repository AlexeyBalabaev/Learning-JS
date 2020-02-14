"use strict";

let div = document.createElement('div');

let textNode = document.createTextNode("I'm here!");

/* ----- */
let div1 = document.createElement('div');
div1.className = "alert";
div1.innerHTML = "<strong>Hello everything!</strong> You were reading the important message."

document.body.append(div1);

// can use, too
// document.body.prepend(div1);
// document.body.before(div1);
// document.body.after(div1);
// document.body.replaceWith(div1);

/* ----- */
let ol = document.querySelector('.ol');

ol.before('before');
ol.after('after');

let liFirst = document.createElement('li');
liFirst.innerHTML = 'prepend';
ol.prepend(liFirst);

let liLast = document.createElement('li');
liLast.innerHTML = 'append';
ol.append(liLast);

/* ----- */
let div11 = document.querySelector('.div11');
div11.before('<b>Hello</b>', document.createElement('hr'));

/* ----- */
let div22 = document.querySelector('.div22');
div22.insertAdjacentHTML('beforebegin', '<p>Hello</p>');
div22.insertAdjacentHTML('afterend', '<p>Bye!</p>');

/* ----- */
document.body.insertAdjacentHTML("afterbegin", `<div class="alert">
    <strong>Hello everything!</strong> You were reading the important message.
  </div>`);

/* ----- */
let div3 = document.createElement('div');
div3.className = "alert";
div3.innerHTML = "<strong>Hello everything!</strong> You were reading the important message.";

document.body.append(div);
setTimeout(() => div3.remove(), 1000);