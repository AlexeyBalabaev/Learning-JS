"use strict";

{
  function slow(x) {
    alert(`Called with ${x}`);
    return x;
  }

  function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
      if (cache.has(x)) {
        return cache.get(x);
      }

      let resule = func(x);

      cache.set(x, result);
      return result;
    };
  }

  slow = cachingDecorator(slow);

  alert( slow(1) );   // slow(1)  cache
  alert( "Again: " + slow(1) );   // return cache

  alert( slow(2) );   // slow(2)  cache
  alert( "Again: " + slow(2) );   // return cache
}