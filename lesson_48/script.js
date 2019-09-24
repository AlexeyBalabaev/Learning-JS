"use strict";

{
  class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }

    run(speed) {
      this.speed += speed;
      alert(`${this.name} run with speed ${this.speed}.`);
    }

    stop() {
      this.speed = 0;
      alert(`${this.name} stay.`);
    }
  }

  let animal = new Animal("My pet");
}

// and
{
  class Rabbit {
    constructor(name) {
      this.name = name;
    }

    hide() {
      alert(`${this.name} hide!`);
    }
  }

  let rabbit = new Rabbit("My rabbit");
}

/* ----- */
{
  class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }

    run(speed) {
      this.speed += speed;
      alert(`${this.name} run with speed ${this.speed}.`);
    }

    stop() {
      this.speed = 0;
      alert(`${this.name} stay.`);
    }
  }

  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hide!`);
    }
  }

  let rabbit = new Rabbit("White rabbit");

  rabbit.run(5);   // White rabbit run with speed 5.
  rabbit.hide();   // white rabbit hide!
}

/* ----- */
{
  function f(phrase) {
    return class {
      sayHi() { alert(phrase); }
    }
  }

  class User extends f("Hello") {}

  new User().sayHi();   // Hello
}

/* ----- */
{
  class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }

    run(speed) {
      this.speed += speed;
      alert(`${this.name} run with speed ${this.speed}.`);
    }

    stop() {
      this.speed = 0;
      alert(`${this.name} stay.`);
    }
  }

  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hide!`);
    }

    stop() {
      super.stop();
      this.hide();
    }
  }

  let rabbit = new Rabbit("White rabbit");

  rabbit.run(5);   // White rabbit run with speed 5.
  rabbit.stop();   // White rabbit saty. White rabbit hide!
}

/* ----- */
{
  class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }

    run(speed) {
      this.speed += speed;
      alert(`${this.name} run with speed ${this.speed}.`);
    }

    stop() {
      this.speed = 0;
      alert(`${this.name} stay.`);
    }
  }

  class Rabbit extends Animal {
    constructor(name, earLength) {
      super(name);
      this.earLength = earLength;
    }

    hide() {
      alert(`${this.name} hide!`);
    }

    stop() {
      super.stop();
      this.hide();
    }
  }

  let rabbit = new Rabbit("White rabbit", 10);
  alert(rabbit.name);       // White rabbit
  alert(rabbit.earLength);  // 10
}

/* ----- */
{
  let animal = {
    name: "Animal",
    eat() {   // animal.eat.[[HomeObject]] == animal
      alert(`${this.name} eat.`);
    }
  };

  let rabbit = {
    __proto__: animal,
    name: "Rabbit",
    eat() {   //  rabbit.eat.[[HomeObject]] == rabbit
      super.eat();
    }
  };

  let longEar = {
    __proto__: rabbit,
    name: "Long Ear",
    eat() {   // longEar.eat.[[HomeObject]] == longEar
      super.eat();
    }
  };

  longEar.eat();   // Long Ear eat.
}

/* ----- */
{
  let animal = {
    sayHi() {
      alert("I'm animal.");
    }
  };

  let rabbit = {
    __proto__: animal,
    sayHi() {
      super.sayHi();
    }
  };

  let plant = {
    sayHi() {
      alert("I'm plant.");
    }
  };

  let tree = {
    __proto__: plant,
    sayHi: rabbit.sayHi
  };

  tree.sayHi();   // I'm animal (?)
}