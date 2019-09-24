'use strict';

class Rabbit extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

let rabbit = new Rabbit("Rabbit");

alert( rabbit.hasOwnProperty('name') );   // true