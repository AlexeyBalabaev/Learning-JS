"use strict";

/* === Data types === */

/* Number */
let num = 123;
num = 12.34;

alert( 1 / 0 );   // Infinity
alert( Infinity );   // Infinity

alert( "not number" / 3 + 5 );   //NaN

/* String */
let str = "Hi!";
let str2 = 'How are you?';
let phrase = `I'm fine! ${str}`;

alert( `Result: ${1 + 2}` );
alert( "Result: ${1 + 2}" );

/* Boolean (logical) */
let nameFieldChecked = true;
let ageFieldChecked = false;

let compete = 5 > 4;
alert( compete );   // true

/* null */
let age = null;

/* undefined */
let x;
alert( x );   // undefined

let y = 123;
y = undefined;
alert( y );   // undefined

/* Object and Symbol */

/* typeof */
alert( typeof undefined );       // "undefined"
alert( typeof 0 );               // "number"
alert( typeof true );            // "boolean"
alert( typeof "foo" );           // "string"
alert( typeof Symbol("id") );    // "synbol"
alert( typeof Math );            // "object"
alert( typeof null );            // "object"
alert( typeof alert );           // "function"