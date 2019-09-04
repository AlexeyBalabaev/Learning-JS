"use strict";

// Array's methods

/* ----- */
{
	let arr = ["I", "go", "home"];

	delete arr[1];        // delete "go"

	alert( arr[1] );      // undefined
	alert( arr.length );  // 3  -- ["I", , "home"]
}

/* ----- */
{
	let arr = ["I", "learn", "JavaScript"];

	arr.splice(1, 1);

	alert( arr );   // I,JavaScript
}

/* ----- */
{
	let arr = ["I", "learn", "JavaScript", "right", "now"];

	arr.splice(0, 3, "Let's", "dance")

	alert( arr );   // Let's,dance,right,now
}

/* ----- */
{
	let arr = ["I", "learn", "JavaScript", "right", "now"];

	let removed = arr.splice(0, 2);

	alert( removed );   // I,learn
}

/* ----- */
{
	let arr = ["I", "learn", "JavaScript"];

	arr.splice(2, 0, "difficult", "language");
	alert( arr );    // I,learn,difficult,language,JavaScript
}

/* ----- */
{
	let arr = [1, 2, 5];

	arr.splice(-1, 0, 3, 4);
	alert( arr );    // 1,2,3,4,5
}

/* ----- */
{
	let arr = ['t', 'e', 's', 't'];

	alert( arr.slice(1, 3) );   // e,s
	alert( arr.slice(-2) );     // s,t

	let copy = arr.slice();
	alert( copy );    // t,e,s,t
}

/* ----- */
{
	let arr = [1, 2];

	alert( arr.concat([3, 4]) );           // 1,2,3,4
	alert( arr.concat([3, 4], [5, 6]) );   // 1,2,3,4,5,6
	alert( arr.concat([3, 4], 5, 6) );     // 1,2,3,4,5,6
}

/* ----- */
{
	let arr = [1, 2];

	let arrayLike = {
		0: "something",
		length: 1
	};

	alert( arr.concat(arrayLike) );   // 1,2,[object Object]
	// [1, 2, arrayLike]
}

/* ----- */
{
	let arr = [1, 2];

	let arrayLike = {
		0: 'something',
		1: 'more',
		[Symbol.isConcatSpreadable]: true,
		length: 2
	};

	alert( arr.concat(arrayLike) );    // 1,2,something,more
}

/* ----- */
{
	["Bilbo", "Gandalf", "Nazgul"].forEach(alert);   // Bilbo,Gandalf,Nazgul
}

/* ----- */
{
	["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} has position ${index} in ${array}`);
	});
}

/* ----- */
{
	let arr = [1, 0, false];

	alert( arr.indexOf(0) );     // 1
	alert( arr.indexOf(false) ); // 2
	alert( arr.indexOf(null) );  // -1, doesn't exist

	alert( arr.includes(1) );    // true

	const arr1 = [NaN];
	alert( arr1.indexOf(NaN) );  // -1
	alert( arr1.includes(NaN) ); // true
}

/* ----- */
{
	let users = [
    {id:1, name: "Jhon"},
    {id:2, name: "Pete"},
    {id:3, name: "Mary"}
	];

	let user = users.find(item => item.id == 1);
	alert(user.name);   // Jhon

	let someUsers = users.filter(item => item.id < 3);
	alert(someUsers.length);   // 2
}

/* ----- */
{
	let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
	alert(lengths);   // 5,7,6
}

/* ----- */
{
	let arr = [1, 15, 2];

	arr.sort();
	alert( arr );   // 1,15,2
}

/* ----- */
{
	function compareNumeric(a, b) {
		if (a > b) return 1;
		if (a == b) return 0;
		if (a < b) return -1;
	}

	let arr = [1, 2, 15];

	arr.sort(compareNumeric);
	alert(arr);   // 1,2,15
}

/* ----- */
{
	[1, -2, 15, 2, 0, 8].sort(function(a, b) {
		alert( a + "<>" + b);
	});
}

/* ----- */
{
	let arr = [1, 2, 15];

	arr.sort(function(a, b) { return a - b; });
	alert(arr);   // 1,2,15

	//better
	arr.sort( (a, b) => a -b );   // this kind of functions to use much better
	alert(arr);   // 1,2,15
}

/* ----- */
{
	let arr = [1, 2, 3, 4, 5];
	arr.reverse();

	alert( arr );   // 5,4,3,2,1
}

/* ----- */
{
	let names = 'Jhon, Pete, Mary';

	let arr = names.split(', ');

	for (let name of arr) {
		alert( `The message will receive: ${name}.` )
	}
}

/* ----- */
{
	let arr = 'Jhon, Pete, Mary'.split(', ', 2);
	alert( arr );      // Jhon,Pete
}

/* ----- */
{
	let str = "test";

	alert( str.split('') );   // t,e,s,t
}

/* ----- */
{
	let arr = ['Jhon', 'Pete', 'Mary'];
	let str = arr.join(';');

	alert( str );    // Jhon;Pete;Mary
}

/* ----- */
{
	let arr = [1, 2, 3, 4, 5];

	let result = arr.reduce((sum, current) => sum + current, 0);
	alert( result );   // 15

	let res = arr.reduce((sum, current) => sum + current);
	alert( res );   // 15
}

/* ----- */
{
	alert(typeof {});   // object
	alert(typeof []);   // object

	alert(Array.isArray({}));   // false
	alert(Array.ifArray([]));   // true
}

/* ----- */
// arr.find(func, thisArg);
// arr.filter(func, thisArg);
// arr.map( func, thisArg);

/* ----- */
{
	let user = {
		age: 18,
		younger(otherUser) {
			return otherUser.age < this.age;
		}
	};

	let users = [
    {age: 12},
    {age: 16},
    {age: 32}
	];

	let youngerUsers = users.filter(user.younger, user);

	alert(youngerUsers.length);   // 2
}