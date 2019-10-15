"use strict";

{
  class Validation extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }

  function test() {
    throw new ValidationError("Oops!");
  }

  try {
    test();
  } catch(err) {
    alert(err.message);   // Oops!
    alert(err.name);      // ValidationError
    alert(err.stack);
  }
}

/* ----- */
{
  class ValidationError extends Error {
    constructir(message) {
      super(message);
      this.name = "ValidationError";
    }
  }

  // Using
  function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
      throw new ValidationError("No field: age");
    }
    if (!user.name) {
      throw new ValidationError("No field: name");
    }

    return user;
  }

  // Working example with try..catch
  try {
    let user = readUser('{ "age": 25 }');
  } catch(err) {

    if (err instanceof ValidationError) {
      alert("Incorrect data: " + err.message);   // Incorrect data: No field: name
    } else if (err instanceof SyntaxError) {
      alert("JSON Error of Syntax: " + err.message);
    } else {
      throw err;   // unknown error
    }
  }
}