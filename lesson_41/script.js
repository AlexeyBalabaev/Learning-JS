"use strict";

{
  let user = {
    name: "John"
  };

  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

  alert( JSON.stringify(descriptor, null, 2) );
  /* property of descriptor:
  {
    "value":"John",
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
  */
}

/* ----- */
{
  let user = {};

  Object.defineProperty(user, 'name', {
    value: "John"
  });

  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

  alert( JSON.stringify(descriptor, null, 2) );
  /* property of descriptor:
  {
    "value":"John",
    "writable": false,
    "enumerable": false,
    "configurable": false
  }
  */
}

// only for reading
{
  let user = {
    name: "John"
  };

  Object.defineProperty(user, 'name', {
    writable: false
  });

  // user.name = "Pete";    -- error
}

{
  let user = {};

  Object.defineProperty(user, "name", {
    value: "John",
    enumerable: true,
    configurable: true
  });

  alert(user.name);   // John
  // user.name = "Pete";    -- error
}

// unenumerated property
{
  let user = {
    name: "John",
    toString() {
      return this.name;
    }
  };

  for (let key in user) alert(key);   // name, toString
}

/* ----- */
{
  let user = {
    name: "John",
    toString() {
      return this.name;
    }
  };

  Object.defineProperty(user, "toString", {
    enumerable: false
  });

  for (let key in user) alert(key);   // name

  alert( Object.keys(user) );   // name
}

// unconfigurable property
{
  let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

  alert( JSON.stringify(descriptor, null, 2) );
  /* property of descriptor:
  {
    "value":3.141592653589793,
    "writable": false,
    "enumerable": false,
    "configurable": false
  }
  */

  // Math.PI = 3;   -- error
  // delete Math.PI not to work the same
}

{
  let user = {};

  Object.defineProperty(user, 'name', {
    value: "John",
    writable: false,
    configurable: false
  });

  // now impossible to change user.name and its flags
  // all this won't to work:
  //   user.name = "Pete"
  //   delete user.name
  //   defineProperty(user, "name", ...)
  // Object.defineProperty(user, "name", { writable: true});  -- error
}

/* ----- */
{
  let user = {};

  Object.defineProperties(user, {
    name: {value: "John", writable: false},
    surname: {value: "Smith", writable: false},
    // ...
  });
}