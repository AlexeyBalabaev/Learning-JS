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

alert(elem.firstChild.nodeType);   // 3 -> text or 8 -> comment

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

/* ----- */
let elem3 = document.querySelector('.elem3');

elem3.outerHTML = '<p>New element</p>';   // change it

alert(elem3.outerHTML);   // <div class="elem3">Hello World!</div>

/* ----- */
// let text = elem3.nextSibling;
// alert(text.data);   // Hello

// let comment = text.nextSibling;
// alert(comment.data);   // comment

/* ----- */
let news = document.querySelector('.news');
alert(news.textContent);

/* ----- */
let name1 = document.querySelector('.name1');
let name2 = document.querySelector('.name2');
let name = prompt("Enter your name?", "<b>Vinni-Puh!</b>");

name1.innerHTML = name;
name2.textContent = name;

/* ----- */
let hiddenIt = document.querySelector('.hiddenIt');
hiddenIt.hidden = true;

/* ----- */
let blinkedElem = document.querySelector('.blinked');
setInterval(() => blinkedElem.hidden = !blinkedElem.hidden, 1000);

/* ----- */
let input = document.querySelector('.input');

alert(input.type);   // text
alert(input.id);     // elem-input
alert(input.value);  // value