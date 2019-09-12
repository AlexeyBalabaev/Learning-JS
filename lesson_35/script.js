"use strict";

{
  function sayHi() {
    alert('Hi');
  }

  alert( sayHi.name );   // sayHi
}

/* ----- */
{
  let sayHi = function() {
    alert('Hi');
  };

  alert( sayHi.name );   // sayHi
}

/* ----- */
{
  function f(sayHi = function() {}) {
    alert(sayHi.name);    // sayHi
  }

  f();
}

/* ----- */
{
  let user = {

    sayHi() {
      // method of object
    },

    sayBye: function() {
      // method of onject
    }

  }

  alert( user.sayHi.name );   // sayHi
  alert( user.sayBye.name );  // sayBye
}

/* ----- */
{
  function f1(a) {}
  function f2(a, b) {}
  function many(a, b, ...more) {}

  alert(f1.length);   // 1
  alert(f2.length);   // 2
  alert(many.length); // 2
}

/* ----- */
{
  function ask(question, ...handlers) {
    let isYes = confirm(question);

    for (let handler of handlers) {
      if (handler.length == 0) {
        if (isYes) handler();
      } else {
        handler(isYes);
      }
    }

  }

  ask("Question?", () => alert('You answered yes'), result => alert(result));
}

/* ----- */
{
  function sayHi() {
    alert('Hi!');

    sayHi.counter++;
  }
  sayHi.counter = 0;

  sayHi();   // Hi!
  sayHi();   // Hi!

  alert( `Called ${sayHi.counter} times` );    // Called 2 times
}

/* ----- */
{
  function makeCounter() {

    function counter() {
      return counter.count++;
    };

    counter.count = 0;

    return counter;
  }

  let counter = makeCounter();
  alert( counter() );   // 0
  alert( counter() );   // 1

  let counter2 = makeCounter();
  counter2.count = 10;
  alert( counter2() );   // 10
}

/* ----- */
{
  let sayHi = function func(who) {
    alert( `Hello, ${who}` );
  };

  sayHi("John");   // Hello, John
}

/* ----- */
{
  let sayHi = function func(who) {
    if (who) {
      alert( `Hello, ${who}` );
    } else {
      func("Guest");   // use func to call yourself
    }
  };

  sayHi();   // Hello, Guest

  // func();   -- error
}

/* ----- */
{
  let sayHi = function func(who) {
    if (who) {
      alert(`Hello, ${who}`);
    } else {
      func("Guest");
    }
  };

  let welcome = sayHi;
  sayHi = null;

  welcome();   // Hello, Guest
}