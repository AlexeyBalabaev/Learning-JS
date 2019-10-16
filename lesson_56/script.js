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
    constructor(message) {
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

/* ----- */
{
  class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }

  class PropertyRequiredError extends ValidationError {
    constructor(property) {
      super("No property: " + property);
      this.name = "PropertyRequiredError";
      this.property = property;
    }
  }

  // Using
  function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
      throw new PropertyRequiredError("age");
    }
    if (!user.name) {
      throw new PropertyRequiredError("name");
    }

    return user;
  }

  // Working example with try..catch
  try {
    let user = readUser('{ "age": 30 }');
  } catch(err) {

    if (err instanceof ValidationError) {
      alert("Incorrect data: " + err.message);   // Incorrect data: No property: name
      alert(err.name);   // PropertyRequiredError
      alert(err.property);   // name
    } else if (err instanceof SyntaxError) {
      alert("Error of syntax JSON" + err.message);
    } else {
      throw err;  // unknown error
    }

  }
}

/* ----- */
{
  class MyError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
    }
  }

  class ValidationError extends MyError { }

  class PropertyRequiredError extends ValidationError {
    constructor(property) {
      super("No property: " + property);
      this.property = property;
    }
  }

  alert( new PropertyRequiredError("field").name );   // PropertyRequiredError
}

/* ----- */
{
  class ReadError extends Error {
    constructor(message, cause) {
      super(message);
      this.cause = cause;
      this.name = "ReadError";
    }
  }

  class ValidationError extends Error { /* ... */ }
  class PropertyRequiredError extends ValidationError { /* ... */ }

  function validateUser(user) {
    if (!user.age) {
      throw new PropertyRequiredError("age");
    }

    if (!user.name) {
      throw new PropertyRequiredError("name");
    }
  }

  function readUser(json) {
    let user;

    try {
      user = JSON.parse(json);
    } catch(err) {

      if (err instanceof SyntaxError) {
        throw new ReadError("SyntaxError", err);
      } else {
        throw err;
      }
    }

    try {
      validateUser(user);
    } catch(err) {

      if (err instanceof ValidationError) {
        throw new ReadError("Validation error", err);
      } else {
        throw err;
      }
    }

  }

  try {
    readUser('{ bad json }');
  } catch(e) {
    if (e instanceof ReadError) {
      alert(e);
      alert("Initial error: " + e.cause);
      // Initial error: SyntaxError:Unexpected token b in JSON at position 1
    } else {
      throw e;
    }
  }
}