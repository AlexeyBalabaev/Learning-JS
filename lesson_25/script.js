"use strict";


// Map & Set
{
  let map = new Map();

  map.set("1", "str1");
  map.set(1, "num1");
  map.set(true, "bool1");

  alert(map.get(1));    // num1
  alert(map.get("1"));  // str1

  alert(map.size);      // 3
}

/* ----- */
{
  let john = { name: "Jhon" };

  let visitsCountMap = new Map();

  visitsCountMap.set(john, 123);

  alert( visitsCountMap.get(john) );   // 123

  // if just Object (not Map)
  let john1 = { name: "Jhon" };
  let visitsCountObj = {};
  visitsCountObj[john1] = 123;
  alert( visitsCountObj["[object Object]"] );   // 123
}

/* ----- */
{
  let map = new Map();

  //we'll be able to use so:
  map.set("1", "str1")
    .set(1, "num1")
    .set(true, "bool1");

  alert(map.size);   // 3
}

/* ----- */
{
  let recipeMap = new Map([
    ["cucumber", 500],
    ["tomato", 350],
    ["onion", 50]
  ]);

  for (let vegetable of recipeMap.keys()) {
    alert(vegetable);   // cucumber -> tomato -> onion
  }

  for (let amount of recipeMap.values()) {
    alert(amount);   // 500 -> 350 -> 50
  }

  for (let entry of recipeMap) {   // the same: recipeMap.entries()
    alert(entry);   // cucumber,500 -> tomato,350 -> onion,50
  }

  recipeMap.forEach((value, key, map) => {
    alert(`${key}: ${value}`);   // cucumber,500 -> ...
  });
}

/* ----- */
{
  let obj = {
    name: "Jhon",
    age: 30
  };

  let map = new Map(Object.entries(obj));

  alert(map.size);   // 2   -- [ ["name", "Jhon"], ["age", 30] ]
}

/* ----- */
{
  let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);

  alert(prices.orange);   // 2   -- now prices = { banana: 1, orange: 2, meat: 4 }
}

/* ----- */
{
  let map = new Map();
  map.set('banana', 1);
  map.set('orange', 2);
  map.set('meat', 4);

  let obj = Object.fromEntries(map.entries());
  // can write just: let obj = Object.fromEntries(map); -- it's the same

  //obj = { banana: 1, orange: 2, meat: 4 }
  alert(obj.orange);   // 2
}

/* ----- */
{
  let set = new Set();

  let john = { name: "John" };
  let pete = { name: "Pete" };
  let mary = { name: "Mary" };

  set.add(john);
  set.add(pete);
  set.add(mary);
  set.add(john);
  set.add(mary);

  alert(set.size);    // 3

  for (let user of set) {
    alert(user.name); // John, Pete, Mary
  }
}

/* ----- */
{
  let set = new Set(["orange", "apple", "banana"]);

  for (let value of set) alert(value);   // orange, apple, banana

  set.forEach((value, valueAgain, set) => {
    alert(value);   // orange, apple, banana
  });
}