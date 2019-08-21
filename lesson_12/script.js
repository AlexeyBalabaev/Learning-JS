"use strict";

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Less' );
    break;
  case 4:
    alert( 'Good!' );
    break;
  case 5:
    alert( 'More' );
    break;
  default:
    alert( 'No have value' );
};

/* ----- */
let arg = prompt("Enter a number.", '');

switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never work' );
    break;
  default:
    alert('Unknown value');
};