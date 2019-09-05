"use sctrict";

function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

let jhon = { name: "Jhon", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ jhon, pete, mary ];

sortByAge(users);

alert(users[0].name); // Jhon
alert(users[1].name); // Mary
alert(users[2].name); // Pete