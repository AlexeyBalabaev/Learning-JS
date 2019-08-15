"use strict";

// example 1
let year1 = prompt( 'When did year appear speciffication ECMAScript-2015?', '' );

if( year1 == 2015 ) {
	alert( "You're right!" );
} else {
	alert( "Sorry! It's wrong." );
}

// example 2
let year2 = prompt( 'When did year appear speciffication ECMAScript-2015?', '' );

if( year2 < 2015 ) {
	alert( "Too early!" );
} else if( year2 > 2015 ) {
	alert( "Very late." );
} else {
	alert( "Right!" );
}

// example 3
let accessAllowed1;
let age = prompt( "How old are you?", '' );

if( age > 18 ) {
	accessAllowed1 = true;
} else {
	accessAllowed1 = false;
}

alert( accessAllowed1 );

// or
let accessAllowed2 = ( age > 18 ) ? true : false;
alert( accessAllowed2 );

// but we can not to use true/false, because this ompare already return true/false
let accessAllowed3 = age > 18;
alert( accessAllowed3 );

// example 4
let ageUser = prompt( 'Are your age?', '' );

let message = ( ageUser < 3 ) ? 'Hello, baby!' :
  ( ageUser < 18 ) ? 'Hi!' :
  ( ageUser < 100 ) ? 'Good evening!' :
  'Such an usual age!';

alert( message );