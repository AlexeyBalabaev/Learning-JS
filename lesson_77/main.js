"use strict";

document.body.myData = {
  name: 'Caesar',
  title: 'Imperator'
};

alert(document.body.myData.title);   // Imperator

/* ----- */
document.body.sayTagName = function() {
  alert(this.tagName);
};

document.body.sayTagName();   // BODY (the value of "this" in this method will be "document.body")

/* ----- */
Element.prototype.sayHi = function() {
  alert(`Hello, I'm ${this.tagName}`);
};

document.documentElement.sayHi();   // Hello, I'm HTML
document.body.sayHi();   // Hello, I'm BODY

/* ----- */
alert(document.body.id);   // test
alert(document.body.something);   // undefined

/* ----- */
let input = document.querySelector('input');
let body = document.querySelector('body');
alert(input.type);   // text
alert(body.type);    // undefined

/* ----- */
alert(document.body.getAttribute('something'));   // non-standard

/* ----- */
alert( elem1.getAttribute('About') );   // 'Elephaunt', reading

elem1.setAttribute('Test', 123);   // writing
alert( elem1.outerHTML );   // checking attribute (yes)

for (let attr of elem1.attributes) {
  alert( `${attr.name} = ${attr.value}` );
}

/* ----- */
let inputChange1 = document.querySelector('.input1');

// attribute => property
inputChange1.setAttribute('id', 'id');
alert(inputChange1.id);   // id

// property => attribute
inputChange1.id = 'newId';
alert(inputChange1.getAttribute('id'));   // newId

/* ----- */
// exception
// attribute => property
inputChange1.setAttribute('value', 'text');
alert(inputChange1.value);   // text

// property => attribute
inputChange1.value = 'newValue';
alert(inputChange1.getAttribute('value'));   // text

/* ----- */
let checkBox = document.querySelector('.check');

alert(checkBox.getAttribute('checked'));   // value of attribute: empty string
alert(checkBox.checked);   // value of attribute: true

/* ----- */
let div = document.querySelector('.div');

// string
alert(div.getAttribute('style'));   // colore:red; font-size:120%

// object
alert(div.style);   // [object CSSStyleDeclaration]
alert(div.style.color);   // red

/* ----- */
// attribute
let link = document.querySelector('.link');

alert(link.getAttribute('href'));   // #hello
alert(link.href);   // full URL: http://...

/* ----- */
let user = {
  name: "Pete",
  age: 25
};

for (let div of document.querySelectorAll('[show-info]')) {
  let field =  div.getAttribute('show-info');
  div.innerHTML = user[field];   // at first 'Pete' to 'name', then '25' to 'age'
}

/* ----- */
let elemData = document.querySelector('.elem-data');

alert( elemData.dataset.about );   // Elephants

/* ----- */
let order = document.querySelector('.order');

// reading
alert( order.dataset.orderState );   // new

// changing
order.dataset.orderState = "pending";