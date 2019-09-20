"use strict";

{
  let animal = {
    eats: true
  };

  function Rabbit(name) {
    this.name = name;
  }

  Rabbit.prototype = animal;

  let rabbit = new Rabbit("White Rabbit");  // rabbit.__proto__ = animal

  alert( rabbit.eats );   // true
}

/* ----- */
{
  function Rabbit() {}
  // default "prototype":
  // Rabbit.prototype = { constructor: Rabbit }

  alert( Rabbit.prototype.constructor == Rabbit );   // true

  let rabbit = new Rabbit();

  alert( rabbit.constructor == Rabbit );   // true
}

/* ----- */
{
  function Rabbit(name) {
    this.name = name;
    alert(name);
  }

  let rabbit = new Rabbit("White Rabbit");

  let rabbit2 = new rabbit.constructor("Black Rabbit");
}

/* ----- */
{
  function Rabbit() {};

  Rabbit.prototype = {
    jumps: true
  };

  let rabbit = new Rabbit();
  alert(rabbit.constructor === Rabbit);   // false
}

/* ----- */
{
  // we can save property "constructor":
  function Rabbit() {};

  Rabbit.prototype.jumps = true;
}

{
  // or so:
  function Rabbit() {};

  Rabbit.prototype = {
    jumps: true,
    constructor: Rabbit
  };
}

/* ----- */
{
  // in simple objects - the "prototype" is an usual property:
  let user = {
    name: "John",
    property: "Bla-bla"
  };
}