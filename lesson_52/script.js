"use strict";

{
  class Rabbit {};
  let rabbit = new Rabbit();

  alert( rabbit instanceof Rabbit );   // true
}

/* ----- */
{
  function Rabbit() {};

  alert( new Rabbit() instanceof Rabbit );   // true
}

/* ----- */
{
  let arr = [1, 2, 3];
  alert( arr instanceof Array );   // true
  alert( arr instanceof Object );  // true
}

/* ----- */
{
  class Animal {
    static [Symbol.hasInstance](obj) {
      if (obj.canEat) return true;
    }
  }

  let obj = { canEat: true };
  alert(obj instanceof Animal);   // true
  // caused by Animal[Symbol.hasInstance](obj)
}

/* ----- */
{
  class Animal {};
  class Rabbit extends Animal {};

  let rabbit = new Rabbit();
  alert( rabbit instanceof Animal );   // true
}

/* ----- */
{
  function Rabbit() {};
  let rabbit = new Rabbit();

  Rabbit.prototype = {};

  alert( rabbit instanceof Rabbit );   // false
}

/* ----- */
{
  let obj = {};

  alert(obj);   // [object Object]
  alert(obj.toString()); // the same
}

/* ----- */
{
  let objectToString = Object.prototype.toString;

  let arr = [];

  alert( objectToString.call(arr) );   // [object Array]
}

/* ----- */
{
  let o = Object.prototype.toString;

  alert( o.call(123) );   // [object Number]
  alert( o.call(null) );  // [object Null]
  alert( o.call(alert) ); // [object Function]
}

/* ----- */
{
  let user = {
    [Symbol.toStringTag]: "User"
  };

  alert( {}. toString.call(user) );   // [object User]
}

/* ----- */
{
  alert( window[Symbol.toStringTag] );   // Window
  alert( XMLHttpRequest.prototype[Symbol.toStringTag] ); // XMLHttpRequest

  alert( {}.toString.call(window) );   // [object Window]
  alert( {}.toString.call(new XMLHttpRequest()) ); // [object XMLHttpRequest]
}