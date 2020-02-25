"use strict";

alert( document.body.className );   // main page

/* ----- */
document.body.classList.add('article');

alert(document.body.className);   // main page article

/* ----- */
for (let name of document.body.classList) {
  alert(name);   // 'main', then 'page', then 'article'
}

document.body.style.backgroundColor = prompt('background colot?', '#f0f0f0');

/* ----- */
let example = document.querySelector('.example');

example.style.display = "none";   // hide

setTimeout(() => example.style.display = "", 1000);

/* ----- */
let button = document.querySelector('.button');

button.style.cssText = `color: red;
  background-color: grey;
  width: 100px;
  text-align: center;
`;

alert(button.style.cssText);

/* ----- */
button.style.margin = 20;
alert( button.style.margin );   // '' (empty string)

button.style.margin = '20px';
alert( button.style.margin );   // 20px

alert( button.style.marginTop );   // 20px
alert( button.style.marginLeft );  // 20px


/* ----- */
let example2 = document.querySelector('.example2');

alert(example2.style.color);   // empty
alert(example2.style.marginTop);   // empty