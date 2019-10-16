"use sctrict";

class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

let err = new FormatError("formatting error");
alert( err.message );  // formattin error
alert( err.name );     // FormatError
alert( err.stack );    //stack

alert( err instanceof FormatError );   // true
alert( err instanceof SyntaxError );   // true