"use sctrict";

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let jhon = { name: "Jhon", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ jhon, pete, mary ];

alert( getAverageAge(arr) );   // 28