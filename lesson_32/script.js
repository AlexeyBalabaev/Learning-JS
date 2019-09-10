"use strict";

{
  function sum(a, b) {
    return a + b;
  }

  alert( sum(1, 2, 3, 4, 5) );   // 3
}

/* ----- */
{
  function sumAll(...args) {
    let sum = 0;

    for (let arg of args) sum += arg;
    return sum;
  }

  alert( sumAll(1) );   // 1
  alert( sumAll(1, 2) );   // 3
  alert( sumAll(1, 2, 3) );   // 6
}

/* ----- */
{
  function showName(firstName, lastName, ...titles) {
    alert( firstName + ' ' + lastName );   // Julius Cesar

    alert( titles[0] );     // Consul
    alert( titles[1] );     // Imperator
    alert( titles.length ); //2
  }

  showName("Julius", "Cesar", "Consul", "Imperator");
}

/* ----- */
{
  function showName() {
    alert( arguments.length );
    alert( arguments[0] );
    alert( arguments[1] );
  }

  showName("Julius", "Cesar");
  // 2, Julius, Cesar

  showName("Alex");
  // 1, Alex, undefined
}

/* ----- */
{
  let arr = [3, 5, 1];

  alert( Math.max(...arr) );   // 5
}

/* ----- */
{
  let arr1 = [1, -2, 3, 4];
  let arr2 = [8, 3, -8, 1];

  alert( Math.max(...arr1, ...arr2) );   // 8
}

/* ----- */
{
  let arr1 = [1, -2, 3, 4];
  let arr2 = [8, 3, -8, 1];

  alert( Math.max(1, ...arr1, 2, ...arr2, 25) );   // 25
}

/* ----- */
{
  let arr = [3, 5, 1];
  let arr2 = [8, 9, 12];

  let merged = [0, ...arr, 2, ...arr2];

  alert(merged);   // 0,3,5,1,2,8,9,15
}

/* ----- */
{
  let str = 'Hello';

  alert( [...str] );   // H,e,l,l,o
}