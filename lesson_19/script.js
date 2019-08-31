"use strict";

{
  function User(name) {
    this.name = name;
    this.isAdmin = false;
  }

  let user = new User("Jhon");

  alert(user.name);     // Jhon
  alert(user.isAdmin);  // false
}

/* ----- */
{
  let user = new function() {
    this.name = "Jhon",
    this.usAdmin = false

    // other code, for create user
  };
}

/* ----- */
{
  function User() {
    alert(new.target);
  }

  User();      // undefined

  new User();  // function User { ... }
}

/* ----- */
{
  function User(name) {
    if (!new.target) {
      return new User(name);
    }

    this.name = name;
  }

  let jhon = User("Jhon");
  alert(jhon.name);        // Jhon
}

/* ----- */
{
  function BigUser() {
    this.name = "Jhon";

    return { name: "Godzilla" };    // <- return this object
  }

  alert( new BigUser().name );      // Godzilla
}

/* ----- */
{
  function SmallUser() {
    this.name = "Jhon";
    return;
    this.name = "Pete";
  }

  alert( new SmallUser().name );    // Jhon
}

/* ----- */
{
  function User(name) {
    this.name = name;
  }

  let user1 = new User;     // without (), but it's a bad practice
  // the same
  let user2 = new User();
}

/* ----- */
{
  function User(name) {
    this.name = name;

    this.sayHi = function() {
      alert( "My name is " + this.name );
    };
  }

  let jhon = new User("Jhon");

  jhon.sayHi();     // My name is Jhon

  /*
  jhon = {
    name: Jhon,
    sayHi: function() { ... }
  }
  */
}