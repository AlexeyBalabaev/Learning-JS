"use strict";

let n = prompt("Enter number.", '');

label:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue label;
  };
  
  alert( i );
};