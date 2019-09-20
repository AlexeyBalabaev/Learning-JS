"use sctrict";

// 1
{
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true
  };

  let rabbit = new Rabbit();

  Rabbit.prototype = {};

  alert( rabbit.eats );   // true
}

// 2
{
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true
  };

  let rabbit = new Rabbit();

  Rabbit.prototype.eats = false;

  alert( rabbit.eats );   // false
}

// 3
{
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true
  };

  let rabbit = new Rabbit();

  delete rabbit.eats;

  alert( rabbit.eats );   // true
}

// 4
{
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true
  };

  let rabbit = new Rabbit();

 delete Rabbit.prototype.eats;

  alert( rabbit.eats );   // undefined
}