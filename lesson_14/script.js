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