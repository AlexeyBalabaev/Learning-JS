"use strict";

let age = 12;

// Variant One
if (!(age >= 14 && age <= 90)) {
	alert( 'Out. :)' );
} else {
	alert( 'In. :(' );
};

// Variant Two
if (age <= 14 || age >= 90) {
	alert( 'Out. :)' );
} else {
	alert( 'In. :(' );
};