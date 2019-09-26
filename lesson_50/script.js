"use strict";

{
  class CoffeeMachine {
    waterAmount = 0;

    constructor(power) {
      this.power = power;
      alert( `Created coffee machine, power: ${power}.` );
    }

  }

  let coffeeMachine = new CoffeeMachine(100);

  coffeeMachine.waterAmount = 200;
}

/* ----- */
{
  class CoffeeMachine {
    _waterAmount = 0;

    set waterAmount(value) {
      if (value < 0) throw new Error("Negative amount of water.");
      this._waterAmount = value;
    }

    get waterAmount() {
      return this._waterAmount;
    }

    constructor(power) {
      this._power = power;
    }

    get power() {
      return this._power;
    }

  }

  let coffeeMachine = new CoffeeMachine(100);

  // coffeeMachine.waterAmount(-10);   -- Error: Negative amount of water.

  alert( `Power: ${coffeeMachine.power}W` );   // Power: 100W

  // coffeMachine.power = -25;   -- Error (no setter)
}

/* ----- 
It's new in JavaScript - "Private property"
{
  class CoffeeMachine {
    #waterLimit = 200;

    #checkWater(value) {
      if (value < 0) throw new Error("Negative level of water.");
      if (vakue > this.#waterLimit) throw new Error("Too mush water");
    }
  }

  let coffeeMachine = new CoffeeMachine();

  coffeeMachine.#chackWater();   // Error
  coffeeMachine.#waterLimit = 1000;   // Error
}
*/

/* ----- */
{
  class CoffeMachine {
    #waterAmount = 0;

    get waterAmount() {
      return this.#waterAmount;
    }

    set waterAmount(value) {
      if (value < 0) throw new Error("Negative level of water.");
      this.#waterAmount = value;
    }
  }

  let machine = new CoffeMachine();

  machine.waterAmount = 100;
  // alert(machine.#waterAmount);   // Error
}