"use strict";

/* string transformation */
let value = true;
alert( typeof value );   // boolean

value = String(value);
alert( typeof value );   // string

/* number transformation */
alert( "6" / "2" );   // 3

let str = "123";
alert( typeof str );   // string
let num = Number(str);
alert( typeof num );   // number

let example = Number("Anyone string");
alert( age );   // NaN

alert( Number("  123  ") );  // 123
alert( Number("123z") );     // NaN
alert( Number(true) );       // 1
alert( Number(false) );      // 0

alert( 1 + '2' );   // '12'

/* boolean transformation */
alert( Boolean(1) );          // true
alert( Boolean(0) );          // false
alert( Boolean("Hello!") );   // true
alert( Boolean("0") );        // true
alert( Boolean("") );         // false