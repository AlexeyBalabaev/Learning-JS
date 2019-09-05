"use sctrict";

let jhon = { name: "Jhon", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ jhon, pete, mary ];

let names = users.map(item => item.name );

alert( names );   // Jhon,Pete,Mary