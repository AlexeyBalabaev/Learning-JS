"use strict";

{
  let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };

  rabbit.__proto__ = animal;

  alert( rabbit.eats );   // true
  alert( rabbit.jumps );  // true
}

/* ----- */
{
  let animal = {
    eats: true,
    walk() {
      alert("Animal walk.");
    }
  };

  let rabbit = {
    jumps: true,
    __proto__: animal
  };

  rabbit.walk();   // Animal walk
}

/* ----- */
{
  let animal = {
    eats: true,
    walk() {
      alert("Animal walk.");
    }
  };

  let rabbit = {
    jumps: true,
    __proto__: animal
  };

  let longEar = {
    earLength: 10,
    __proto__: rabbit
  };

  longEar.walk();   // Animal walk
  alert( longEar.jumps );  // true
}

/* ----- */
{
  let animal = {
    eats: true,
    walk() {
      alert("Animal walk every day.");
    }
  };

  let rabbit = {
    __proto__: animal
  };

  rabbit.walk = function() {
    alert("Rabbit! Bounce-bounce!");
  };

  rabbit.walk();   // Rabbit! Bounce-bounce!
  animal.walk();   // Animal walk every day.
}

/* ----- */
{
  let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };

  let admin = {
    __proto__: user,
    isAdmin: true
  };

  alert( admin.fullName );   // John Smith

  admin.fullName = "Alice Cooper";
  alert( admin.fullName );   // Alice Cooper
  alert( user.fullName );    // John Smith
}

/* ----- */
{
  let animal = {
    walk() {
      if (!this.isSleeping) {
        alert(`I walk.`);
      }
    },
    sleep() {
      this.isSleeping = true;
    }
  };

  let rabbit = {
    name: "White Rabbit",
    __proto__: animal
  };

  rabbit.sleep();

  alert(rabbit.isSleeping);   // true
  alert(animal.isSleeping);   // undefined
}

/* ----- */
{
  let animal = {
    eats: true
  };

  let rabbit = {
    jumps: true,
    __proto__: animal
  };

  alert(Object.keys(rabbit));   // jumps

  for (let prop in rabbit) alert(prop);   // jumps, eats
}

/* ----- */
{
  let animal = {
    eats: true
  };

  let rabbit = {
    jumps: true,
    __proto__: animal
  };

  for (let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) {
      alert(`Our: ${prop}`);    // Our: jumps
    } else {
      alert(`Inherited: ${prop}`); // Inherited: eats
    }
  }
}