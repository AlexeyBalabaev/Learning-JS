"use strict";

{
  class User {
    constructor(name) {
      this.name = name;
    }

    sayHi() {
      alert(this.name);
    }
  }

  let user = new User("John");
  user.sayHi();
}

/* ----- */
{
  class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
  }

  alert(typeof User);   // function

  alert(User === User.prototype.constructor);   // true

  alert(User.prototype.sayHi);   // sayHi {alert(this.name)}

  alert(Object.getOwnPropertyNames(User.prototype));   // constructor,sayHi
}

/* ----- */
{
  let User = class {
    sayHi() {
      alert("Hello!");
    }
  };
}

/* ----- */
{
  let User = class MyClass {
    sayHi() {
      alert(MyClass);
    }
  };

  new User().sayHi();   // MyClass

  // alert(MyClass);   -- error
}

/* ----- */
{
  function makeClass(phrase) {
    return class {
      sayHi() {
        alert(phrase);
      };
    };
  }

  let User = makeClass("Hello");

  new User().sayHi();   // Hello
}

/* ----- */
{
  class User {

    constructor(name) {
      this.name = name;
    }

    get name() {
      return this._name;
    }

    set name(value) {
      if (value.length < 4) {
        alert("Name is very short.");
        return;
      }
      this._name = value;
    }

  }

  let user = new User("John");
  alert(user.name);     // John

  user = new User("");  // Name is very short.
}

/* ----- */
{
  class User {

    ['say' + 'Hi']() {
      alert("Hello!");
    }

  }

  new User().sayHi();   // Hello!
}

/* ----- */
{
  class User {
    name = "Anonym";

    sayHi() {
      alert(`Hello, ${this.name}`);
    }
  }

  new User().sayHi();
}