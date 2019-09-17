"use strict";

{
  let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };

  alert(user.fullName);   // John Smith
}

/* ----- */
{
  let user = {
    get fullName() {
      return `...`;
    }
  };

  // user.fullName = "Test";    -- Error, we have only get
}

/* ----- */
{
  let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
      return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };

  user.fullName = "Alice Cooper";

  alert(user.name);    // Alice
  alert(user.surname); // Cooper
}

/* ----- */
{
  let user = {
    name: "John",
    surname: "Smith",
  };

  Object.defineProperty(user, 'fullName', {
    get() {
      return `${this.name} ${this.surname}`;
    },

    set(value) {
      [this.name, this.surname] = value.split(" ");
    }
  });

  alert(user.fullName);   // John Smith

  for(let key in user) alert(key);   // name, surname
}

/* ----- */
{
  let user = {
    get name() {
      return this._name;
    },

    set name(value) {
      if (value.length < 4) {
        alert( "Name is too short, must be more than 4 chapters" );
        return;
      }
      this._name = value;
    }
  };

  user.name = "Pete";
  alert(user.name);    // Pete

  user.name = "Ben";   // Name is too short...
}

/* ----- */
{
  function User(name, age) {
    this.name = name;
    this.age = age;
  }

  let john = new User("John", 25);

  alert( john.age );   // 25
}

{
  function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  }

  let john = new User("John", new Date(1992, 6, 1));
}

{
  function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, "age", {
      get() {
        let todayYear = new Date().getFullYear();
        return todayYear - this.birthday.getFullYear();
      }
    });
  }

  let john = new User("John", new Date(1992, 6, 1));

  alert( john.birthday );
  alert( john.age );
}