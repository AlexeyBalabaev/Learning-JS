"use strict";

{
  let user = {
    name: "John",
    age: 30
  };

  for (let value of Object.values(user)) {
    alert(value);    // ["John", "30"]
  }

  for (let keys of Object.keys(user)) {
    alert(keys);     // ["name", "age"]
  }

  for (let entry of Object.entries(user)) {
    alert(entry);    // [["name","John"], ["age","30"]]
  }
}

/* ----- */
{
  let prices = {
    banana: 1,
    orange: 2,
    meat: 4
  };

  let doublePrices = Object.fromEntries(
    Object.entries(prices).map(([key, value]) => [key, value * 2])
  );

  alert(doublePrices.meat);   // 8
}