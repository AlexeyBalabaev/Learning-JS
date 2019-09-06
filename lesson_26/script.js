"use strict";


// WeakMap & WeakSet

/* ----- */
{
  let john = { name: "John" };
  john = null;   // the object deleted in memory
}
{
  let john = { name: "John" };
  let array = [ john ];
  john = null;
  alert( array[0].name );   // John
}
{
  let john = { name: "John" };

  let map = new Map();
  map.set(john, "...");

  john = null;
}

/* ----- */
{
  let weakMap = new WeakMap();

  let obj = {};   // it's work

  // don't use string
  // weakMap.set("test", "Whoops")  -- error, because "test" isn't an object
}
{
  let john = { name: "John" };

  let weakMap = new WeakMap();
  weakMap.set(john, "...");

  john = null;     // rewrite the link to object
  // the object deleted in memory
}

/* ----- */

{
  // visitsCount.js
  let visitsCountMap = new WeakMap();

  function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count +1);
  }

  //main.js
  let john = { name: "John" };

  countUser(john);
  countUser(john);

  john = null;   
}

/* ----- */
{
  // cache.js
  let cache = new Map();

  function process(obj) {
    if (!cache.has(obj)) {
      let result = obj;   // some kind of calculation for result of object

      cache.set(obj, result);
    }

    return cache.get(obj);
  }

  // main.js
  let obj = { /* some kind of object */ }

  let result1 = process(obj);   // calculated result

  // ...later, in another place of code...
  let result2 = process(obj);   // previously calculated result taken from cache

  // ...later, when object doesn't need...
  obj = null;

  alert(cache.size);   // 1 (Whoops! The object still in memory, use the memory.)
}
/* ----- */
{
  // cache.js
  let cache = new WeakMap();

  function process(obj) {
    if (!cache.has(obj)) {
      let result = obj;   // some kind of calculation for result of object

      cache.set(obj, result);
    }

    return cache.get(obj);
  }

  // main.js
  let obj = { /* some kind of object */ }

  let result1 = process(obj);   
  let result2 = process(obj);

  // ...later, when object doesn't need...
  obj = null;
  // we cannot get cache.size, it's WeakMap
  // but it's equal to 0
}

/* ----- */
{
  let visitedSet = new WeakSet();

  let john = { name: "John" };
  let pete = { name: "Pete" };
  let mary = { name: "Mary" };

  visitedSet.add(john);
  visitedSet.add(pete);
  visitedSet.add(john);

  alert(visitedSet.has(john));    // true
  alert(visitedSet.has(mary));    // false

  john = null;    // data structure will clear automatic
}