"use strict";

/* ----- */
for (let i = 0; i < document.body.childNodes.length; i++) {
  alert( document.body.childNodes[i] );   // Text, DIV, Text, Ul, ..., SCRIPT
}

/* ----- */
for (let node of document.body.childNodes) {
  alert(node);
}

/* ----- */
alert( document.body.childNodes.filter );   // undefined

/* ----- */
alert( Array.from(document.body.childNodes).filter );   // did the array

/* ----- */
alert( document.body.parentNode === document.documentElement );   // true

alert( document.head.nextSibling );   // HTMLBodyElement

alert( document.body.previousSibling );   // HTMLHeadElement

/* ----- */
alert( document.documentElement.parentNode );   // will display "document"

alert( document.documentElement.parentElement );   // will display "null"

/* ----- */
for (let elem of document.body.children) {
  alert(elem);   // DIV, UL, DIV, SCRIPT
}

/* ----- */
alert( table.rows[0].cells[1].innerHTML );   // "two"