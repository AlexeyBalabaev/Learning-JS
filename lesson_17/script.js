"use strict";

// this
{
  let user = {
    name: "Jhon",
    age: 30,
  };

  user.sayHi = function() {
    alert( "Hello!" );
  }

  user.sayHi();     // Hello!
}
// alternative
{
  let user = {
    name: "Jhon",
    age: 30,
  };

  function sayHi() {
    alert( "Hello!" );
  }

  user.sayHi = sayHi;
  user.sayHi();      // Hello!
}
// shorter syntax for methods
{
  // (1)
  let user1 = {
    sayHi1: function() {
      alert( "Hello!" );
    }
  };

  // (2)
  let user2 = {
    sayHi2 () {
      alert( "Hello!" );
    }
  };
}

/* ----- */
{
  let user = {
    name: "Jhon",
    age: 30,

    sayHi() {
      alert( this.name );
    }
  };

  user.sayHi();    // Jhon
}
// the same
{
  let user = {
    name: "Jhon",
    age: 30,

    sayHi() {
      alert( user.name );     // but this code is unreliable
    }
  };

  user.sayHi();     // Jhon
}

/* ----- */
{
  let user = { name: "Pete" };
  let admin = { name: "Admin" };

  function sayHi() {
    alert( this.name );
  }

  user.f = sayHi;
  admin.f = sayHi;

  user.f();      // Pete
  admin.f();     // Admin

  admin['f']();    // Admin
}

/* ----- */
{
  function sayHi() {
    alert(this);
  }

  sayHi();       // undefined
}

/* ----- */
{
  let user = {
    name: "Jhon",
    hi() { alert(this.name); },
    bye() { alert("Good bye."); }
  };

  user.hi();    // Jhon

  // (user.name == "Jhon" ? user.hi : user.bye)();    -- error (here - this = undefned)

  /*
  let hi = user.hi;
  hi();     // error, this = undefined
  */
}

/* ----- */
{
  let user = {
    firstName: "Alex",
    sayHi() {
      let arrow = () => alert(this.firstName);
      arrow();
    }
  };

  user.sayHi();      // Alex
}