"use strict";

{
  let obj = {};

  alert(obj.__proto__ === Object.prototype);   // true
  // obj.toString === obj.__proto__.toString == Object.prototype.toString

  alert(Object.prototype.__proto__);   // null
}

/* ----- */
{
  let arr = [1, 2, 3];

  alert( arr.__proto__ === Array.prototype );   // true
  alert( arr.__proto__.__proto__ === Object.prototype );   // true
  alert( arr.__proto__.__proto__.__proto__ );   // null
}

/* ----- */
{
  function f() {};

  alert(f.__proto__ === Function.prototype);   // true
  alert(f.__proto__.__proto__ === Object.prototype);   // true
}

/* ----- */
{
  String.prototype.show = function() {
    alert(this);
  };

  "BOOM!".show();   // BOOM!
}

/* ----- */
{
  // make polyfill
  if (!String.prototype.repeat) {
    String.prototype.repeat = function(n) {
      return new Array(n + 1).join(this);
    };
  }

  alert( "La".repeat(3) );   // LaLaLa
}

/* ----- */
{
  let obj = {
    0: "Hello",
    1: "world!",
    length: 2,
  };

  obj.join = Array.prototype.join;

  alert( obj.join(',') );   // Hello,world!
}