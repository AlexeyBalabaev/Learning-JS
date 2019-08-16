"use strict";

/* Logical */
alert( true || true );    // true
alert( false || true );   // true
alert( true || false );   // true
alert( false || false );  // false

/* ----- */
if( 1 || 0 ) {            // work like if(true || false)
  alert( 'Truthy!' );
};

/* ----- */
let hour = 12;
let isWeekend = true;

if(hour < 10 || hour > 18 || isWeekend) {
  alert( 'Ofice closed.' );    // Weekend
};