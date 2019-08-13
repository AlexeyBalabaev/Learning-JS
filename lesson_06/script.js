"use strict";

/* Operators */

let str = "My" + "string!";
alert( str );   // Mystring!


let one = -2;
alert( +one );    // -2
alert( +true );   // 1
alert( +"" );     // 0

let apples = '2';
let oranges = '3';
alert( apples + oranges );   // 23
alert( +apples + +oranges ); // 5

/* ----- */
let a, b, c;
a = b = c = 2 + 2;
alert( a );   // 4
alert( b );   // 4
alert( c );   // 4

/* ----- */
alert( 5 % 2 );   // 1
alert( 8 % 3 );   // 2
alert( 6 % 3 );   // 0

/* ----- */
alert( 2 ** 2 );  // 4   (2 * 2)
alert( 2 ** 3 );  // 8   (2 * 2 * 2)
alert( 2 ** 4 );  // 16  (2 * 2 * 2 * 2)

alert( 4 ** (1/2) );   // 2
alert( 8 ** (1/3) );   // 2

/* ----- */
let counter1 = 2;
counter1++
alert( counter1 );   // 3

let counter2 = 5;
counter2--;
alert( counter2 );   // 4

let counter3 = 1;
let count1 = ++counter3;
alert( count1 );          // 2

let counter4 = 1;
let count2 = counter4++;
alert( count2 );          // 1