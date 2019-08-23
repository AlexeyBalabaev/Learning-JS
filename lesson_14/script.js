"use strict";

{
  // Function Declaration
  function sayHi1() {
    alert( 'Hi!' );
  }
  
  // Function Expression
  let sayHi2 = function() {
    alert( 'Hi!' );
  };

  alert( sayHi1 );
  alert( sayHi2 );

  let func = sayHi1;

  sayHi1();   // 'Hi!'
  func();     // 'Hi!'
}

/* ----- */
{
  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

  function showOk() {
    alert( 'You agree.' );
  }

  function showCancel() {
    alert( 'You canceled the execution.' );
  }

  ask('Do you agree?', showOk, showCancel);
}

/* ----- */
{
  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

  ask(
    "Do you aggre?",
    function() { alert( 'You agree.' ); },
    function() { alert( 'You canceled the execution.' ); }
  );
}

/* ----- */
{
  sayHi("Jhon");    // Hello, Jhon!

  function sayHi(name) {
    alert( `Hello, ${name}!` );
  }
}

/* error
{
  sayHi("Jhon");

  let sayHi = function(name) {
    alert( `Hello, ${name}!` );
  };
}
*/

// Arrow functions
let sum = (a, b) => a + b;

alert( sum(1, 2) );     // 3

/* ----- */
let double = n = n * 2;

alert( double(3) );     // 6