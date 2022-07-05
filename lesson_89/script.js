// DOM

alert( document.body.constructor.name );   //HTMLBodyElement

alert( document.body );   // [object HTMLBodyElement]

// instanceof
alert( document.body instanceof HTMLBodyElement );  // true
alert( document.body instanceof HTMLElement );  // true
alert( document.body instanceof Element );  // true
alert( document.body instanceof Node );  // true
alert( document.body instanceof EventTarget );  // true

// nodeType
let bodyElem = document.body;

alert( bodyElem.nodeType );  // 1 -- element
alert( bodyElem.firstChild.nodeType );  // 3 -- text
alert( document.nodeType );  // 9 -- document's object
// but we can use instanceof, it's more modern

alert( document.body.nodeName );  // BODY  -- for everything
alert( document.body.tagName );  // BODY  -- tagName is only for Elements

// for comment
alert( document.body.firstChild.tagName );   // undefined (not element)
alert( document.body.firstChild.nodeName );   // #comment

// for document
alert( document.tagName );   // undefined (not element)
alert( document.nodeName );   // #document

// innerHTML
let innEx1 = document.querySelector('.inn-ex1');
let innEx2 = document.querySelector('.inn-ex2');

alert( innEx1.innerHTML );   // read element
innEx1.innerHTML = "New BODY!";   // change inner information

alert( innEx2.innerHTML );
innEx2.innerHTML = "<b>new text";   // forget to close tag
alert( innEx2.innerHTML );    // <b>new text</b> (corrected)

// outerHTML
let outEx1 = document.querySelector('.out-ex1');
let outEx2 = document.querySelector('.out-ex2');

alert( outEx1.outerHTML );   // <div class="out-ex1">Hello, <b>World!</b></div>

outEx2.outerHTML = '<p>New element!</p>';

alert( outEx2.outerHTML );   // <div class="out-ex2">Hello, World!</div>

// nodeValue/data
let text = document.querySelector('.data-ex').firstChild;
alert( text.data );   // Hello, sir!

let comment = text.nextSibling;
alert( comment.data );   // typical comment

