"use strict";

{
  let animal = {
    eats: true
  };

  let rabbit = Object.create(animal);

  alert( rabbit.eats );   // true

  alert( Object.getPrototypeOf(rabbit) === animal );  // true

  Object.setPrototypeOf(rabbit, {});
}

/* ----- */
{
  let animal = {
    eats: true
  };

  let rabbit = Object.create(animal, {
    jumps: {
      value: true
    }
  });

  alert(rabbit.jumps);   // true
}

/* ----- */
{
  let obj = {};

  let key = prompt("What's the key?", '__proto__');
  obj[key] = "some value";

  alert(obj[key]);   // [object Object], not the "some value"!
}

{
  let obj = Object.create(null);

  let key = prompt("What's the key?", "__proto__");
  obj[key] = "some value";

  alert(obj[key]);   // some value
}