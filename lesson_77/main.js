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
alert(document.body,something);   // undefined

/* ----- */
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