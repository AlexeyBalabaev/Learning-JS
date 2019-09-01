"use sctrict";

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt("Enter number:", 0);
  };

}

let accum = new Accumulator(1);

accum.read();
accum.read();

alert(accum.value);