"use strict";

/* Logical. OR ( || ) */
alert( true || true );    // true
alert( false || true );   // true
alert( true || false );   // true
alert( false || false );  // false

/* ----- */
if (1 || 0) {            // work like if(true || false)
  alert( 'Truthy!' );
};

/* ----- */
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'Office closed.' );    // Weekend
};

/* ----- */
alert( null || 0 || 1 );          // 1
alert( undefined || null || 0 );  // 0

/* ----- */
let currentUser = null;
let defaulUser = "Jhon";

let name = currentUser || defaulUser || "unnamed";

alert( name );   // "Jhon"

/* AND ( && ) */
alert( true || true );    // true
alert( false || true );   // false
alert( true || false );   // false
alert( false || false );  // false

/* ----- */
let hourToday = 12;
let minuteToday = 30;

if (hourToday == 12 && minuteToday == 30) {
	alert( 'THe time is 12:30' );
};

/* ----- */
alert( 1 && 0 );                // 0
alert( 1 && 5 );                // 5
alert( null && 5 );             // null
alert( 0 && 'no matter what' ); // 0
alert( 1 && 2 && null && 3 );   // null
alert( 1 && 2 && 3 );           // 3