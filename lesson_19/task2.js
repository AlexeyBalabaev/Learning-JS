"use sctrict";

function Calculator() {
  let a;
  let b;

  this.read = function() {
    this.a = +prompt("Enter a:", 0);
    this.b = +prompt("Enter b:", 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calc = new Calculator();
calc.read();

alert( "Sum = " + calc.sum() );
alert( "Mul = " + calc.mul() );