"use sctrict";

let arr = [5, 2, 1, -10, 8];

arr
  .sort((a, b) => a - b)
  .reverse();

alert( arr );   // 8, 5, 2, 1, -10

// or
let arr1 = [5, 2, 1, -10, 8];

arr1.sort((a, b) => b - a);
alert( arr1 );   // 8, 5, 2, 1, -10