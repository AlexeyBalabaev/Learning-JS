"use strict";

{
  let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${firstName}!`);
    }
  };

  setTimeout(user.sayHi, 1000);   // Hello, undefined!
}

/* ----- */
{
  let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };

  setTimeout(function() {
    user.sayHi();    // Hello, John!
  }, 1000);
}

/* ----- */
{
  let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };

  setTimeout(() => user.sayHi(), 1000);    // Hello, John!
}

/* ----- */
// but:
{
  let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };

  setTimeout(() => user.sayHi(), 1000);   // Another user in 'setTimeout'!

  user = { sayHi() { alert("Ahother user in 'setTimeout'!"); } };
}

/* ----- */
{
  let user = {
    firstName: "John"
  };

  function func() {
    alert(this.firstName);
  }

  let funcUser = func.bind(user);
  funcUser();   // John
}

/* ----- */
{
  let user = {
    firstName: "John"
  };

  function func(phrase) {
    alert(phrase + ', ' + this.firstName);
  }

  let funcUser = func.bind(user);

  funcUser("Hello");   // Hello, John
}

/* ----- */
{
  let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };

  let sayHi = user.sayHi.bind(user);

  sayHi();   // Hello, John!

  setTimeout(sayHi, 1000);   // Hello, John!
}

/* ----- */
{
  let user = {
    firstName: "John",
    say(phrase) {
      alert(`${phrase}, ${this.firstName}!`);
    }
  };

  let say = user.say.bind(user);

  say("Hello");    // Hello, John
  say("Good bye"); // Goodbye, John
}

/* ----- */
{
  function mul(a, b) {
    return a * b;
  }

  let double = mul.bind(null, 2);

  alert( double(3) );   // 6 -- mul(2, 3)
  alert( double(4) );   // 8 -- mul(2, 4)
  alert( double(5) );   // 10 -- mul(2, 5)

  let triple = mul.bind(null, 3);

  alert( triple(3) );   // 9
  alert( triple(4) );   // 12
  alert( triple(5) );   // 15
}

/* ----- */
{
  function partial(func, ...argsBound) {
    return function(...args) {
      return func.call(this, ...argsBound, ...args);
    }
  }

  let user = {
    firstName: "John",
    say(time, phrase) {
      alert(`[${time}] ${this.firstName}: ${phrase}!`);
    }
  };

  user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

  user.sayNow("Hello");
  // [now time(10:00)] John: Hello!
}