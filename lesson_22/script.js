"use strict";

// Arrays
{
  let arr1 = new Array();
  let arr2 = [];
}

/* ----- */
{
  let fruits = ["Apple", "Orange", "Plum"];

  alert( fruits[0] );   // Apple
  alert( fruits[1] );   // Orange
  alert( fruits[2] );   // Plum

  fruits[2] = 'Pear';   // ["Apple", "Orange", "Pear"]
  fruits[3] = 'Lemon';  // ["Apple", "Orange", "Pear", "Lemon"]
}

/* ----- */
{
  let fruits = ["Apple", "Orange", "Plum"];

  alert( fruits.length );    // 3
  alert( fruits );    // Apple, Orange, Plum
}

/* ----- */
{
  let arr = [ 'Apple', { name: "Jhon" }, true, function() { alert("Hello!"); } ];

  alert( arr[1].name );    // Jhon
  arr[3]();     // Hello!
}

/* ----- */
{
  let fruits = ["Apple", "Orange", "Plum",];

  alert( fruits.pop() );    // delete "Plum"
  alert( fruits );   // Apple, Orange

  fruits.push("Pear");      // 'fruits.push(...)' it's the same 'fruits[fruits.length] = ...'
  alert( fruits );   // Apple, Orange, Pear  
}

/* ----- */
{
  let fruits = ["Apple", "Orange", "Pear"];

  alert( fruits.shift() );    // delete "Apple"
  alert( fruits );     // Orange, Pear

  fruits.unshift('Apple');
  alert( fruits );     // Apple, Orange, Pear
}

/* ----- */
{
  let fruits = ["Apple"];

  fruits.push("Orange", "Pear");
  fruits.unshift("Pineapple", "Lemon");

  alert( fruits );   // ["Pineapple", "Lemon", "Apple", "Orange", "Pear"]
}

/* ----- */
{
  let fruits = ["Banana"];

  let arr = fruits;   // copy
  alert( arr === fruits ); // true

  arr.push("Pear");
  alert( fruits );    // Banana, Pear
}

/* ----- */
{
  let arr = ["Apple", "Orange", "Pear"];

  for (let i = 0; i < arr.length; i++) {
    alert( arr[i] );
  }

  // for arrays - for..of
  for (let fruit of  arr) {
    alert(fruit);
  }
}

/* ----- */
{
  let arr = [1, 2, 3, 4, 5];

  arr.length = 2;
  alert( arr );     // [1, 2]

  arr.length = 5;
  alert( arr[3] );  // undefined
}

/* ----- */
{
  let fruits = new Array("Apple", "Pear", "etc");

  let arr = new Array(2);    // <-- it's a very bad situation for us
  alert( arr[0] );       // undefined
  alert( arr.length );   // 2
}

/* ----- */
{
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  alert( matrix[1][1] );   // 5
}

/* ----- */
{
  let arr = [1, 2, 3];

  alert( arr );   // 1,2,3
  alert( String(arr) === '1,2,3' );  // true

  alert( [] + 1 );     // "1"
  alert( [1] + 1 );    // "11"
  alert( [1,2] + 1 );  //"1,21"
}