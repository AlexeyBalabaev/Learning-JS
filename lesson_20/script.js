"use strict";

// Numbers
{
  let billion1 = 1000000000;
  let billion2 = 1e9;

  alert( billion1 == billion2 );   // true
  alert( 7.3e9 );     // 7300000000

  let ms1 = 0.000001;
  let ms2 = 1e-6;

  alert( ms1 == ms2 );    // true
  alert( 1.23e-6 );    // 0.00000123
}

/* ----- */
{
  alert( 0xff );   // 255
  alert( 0xFF );   // 255

  let a = 0b11111111;    // 255
  let b = 0o377;         // 255

  alert( a == b );       // true
}

/* ----- */
{
  let num = 255;

  alert( num.toString(16) );     // ff
  alert( num.toString(2) );      // 11111111

  alert( 123456..toString(36) ); // 2n9c
}

/* ----- */
{
  let num = 1.23456;

  alert( Math.floor(num * 100) / 100 );    // 1.23
}

/* ----- */
{
  let num1 = 12.34;
  alert( num1.toFixed(1) );   // 12.3

  let num2 = 12.36;
  alert( num2.toFixed(1) );   // 12.4

  let num3 = 12.34;
  alert( num3.toFixed(5) );   // 12.34000
}

/* ----- */
{
  alert( 1e500 );              // Infinity

  alert( 0.1 + 0.2 == 0.3 );   // false

  alert( 0.1 + 0.2 );         // 0.30000000000000004

  alert( 0.1.toFixed(20) );   // 0.10000000000000000555

  let sum = 0.1 + 0.2;
  alert( sum.toFixed(2) );    // 0.30   <-- this is string. If need numder, use '+'
  alert( +sum.toFixed(2) );   // 0.3
}

/* ----- */
{
  alert( isNaN(NaN) );      // true
  alert( isNaN("str") );    // true

  alert( NaN === NaN );     // false

  // ---
  alert( isFinite("15") );      // true
  alert( isFinite("str") );     // false -- because special value: NaN
  alert( isFinite(Infinity) );  // false -- because special value: Infinity

  let num = +prompt("Enter a number", '');
  alert( isFinite(num) );
}

/* ----- */
{
  alert( +"100px" );   // NaN

  alert( parseInt('100px') );     // 100
  alert( parseFloat('12.5em') );  // 12.5

  alert( parseInt('12.3') );      // 12
  alert( parseFloat('12.3.4') );  // 12.3

  alert( parseInt('a123') );      // NaN

  // parseInt(str, radix)
  alert( parseInt('0xff', 16) );  // 255
  alert( parseInt('ff', 16) );    // 255

  alert( parseInt('2n9c', 36) );  // 123456
}

/* ----- */
{
  alert( Math.random() );   // from 0 to 1
  alert( Math.random() );   // from 0 to 1

  alert( Math.max(3, 5, -10, 0, 1) );   // 5
  alert( Math.min(1, 2) );  // 1

  alert( Math.pow(2, 10) ); // 1024 -- 2 with degree 10
}