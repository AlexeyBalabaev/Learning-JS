"use strict";

alert( document.body.constructor.name );   // HTMLBodyElement

alert( document.body );   // [objectHMLBodyElement]

alert( document.body instanceof HTMLBodyElement );   // true
alert( document.body instanceof HTMLElement );   // true
alert( document.body instanceof Element );   // true
alert( document.body instanceof Node );   // true
alert( document.body instanceof EventTarget );   // true

/* ----- */
let elem = document.body;
alert(elem.nodeType);   // 1 -> element

alert(elem.firstChild.nodeType);   // 3 -> text

alert( document.nodeType );   // 9 -> object of document

alert( document.body.nodeName );   // BODY
alert( document.body.tagName );    // BODY

/* ----- */
// for comment
alert( document.body.firstChild.tagName );   // undefined (isn't element)
alert( document.body.firstChild.nodeName );  // #comment

// for document
alert( document.tagName );   // undefined (isn't element)
alert( document.nodeName );  // #document

/* ----- */
let wrap1 = document.querySelector('.wrap1');

alert( wrap1.innerHTML );   // reading current content
wrap1.innerHTML = 'New BODY!';   // changing content

/* ----- */
let wrap2 = document.querySelector('.wrap2');

wrap2.innerHTML = '<b>test';
alert( wrap2.innerHTML );   // <b>test</b> (corrected)

/* ----- */
let elem1 = document.querySelector('.elem1');

elem1.innerHTML += "<div>Hello!</div>";
elem1.innerHTML += "How are you?";

/* ----- */
let elem2 = document.querySelector('.elem2');
alert(elem2.outerHTML);   // <div class="elem2">Hello <b>World</b>!</div>