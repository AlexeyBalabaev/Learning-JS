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