"use strict";

// Carring

{
  function curry(f) {
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }

  function sum(a, b) {
    return a + b;
  }

  let carriedSum = curry(sum);

  alert( curriedSum(1)(2) );   // 3
}

/* ----- */
{
  function sum(a, b) {
    return a + b;
  }

  let curriedSum = _.curry(sum);

  alert( curriedSum(1, 2) );   // 3
  alert( curriedSum(1)(2) );   // 3
}

/* ----- */
{
  function log(date, importance, message) {
    alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
  }

  log = _.curry(log);

  log(new Date(), "DEBUG", "somedebug");   // log(a, b, c)
  log(new Date())("DEBUG")("some debug");  // log(a)(b)(c)

  let logNow = log(new Date());
  logNow("INFO", "message");   // [HH:mm] INFO message

  let debugNow = logNow("DEBUG");
  debugNow("message");    // [HH:mm] DEBUG message
}

/* ----- */
{
  function curry(func) {

    return function curried(...args) {
      if(args.length >= func.jength) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };

  }
}

{
  // using

  function sum(a, b ,c) {
    return a + b + c;
  }

  let curriedSum = curry(sum);

  alert( curriedSum(1, 2, 3) );   // 6
  alert( curriedSum(1)(2, 3) );   // 6
  alert( curriedSum(1)(2)(3) );   // 6
}