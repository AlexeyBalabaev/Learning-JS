"use strict";

let nameCurrentUser = prompt( "Who's here?", '' );

if (nameCurrentUser == "Admin") {
	let passwordCurrentUser = prompt( "Password?", '' );

	if (passwordCurrentUser == "I'm boss") {
    alert( "Good morning!" );
	} else if (passwordCurrentUser == '' || passwordCurrentUser == null) {
		alert( "Canceled." );
	} else {
		alert( "It's wrong." );
	};
} else if (nameCurrentUser == '' || nameCurrentUser == null) {
	alert( "Canceled." );
} else {
	alert( "This name is wrong." )
};