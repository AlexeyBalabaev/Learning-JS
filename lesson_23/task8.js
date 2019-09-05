"use sctrict";

let jhon = { name: "Jhon", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Williams", id: 2 };
let mary = { name: "Mary", surname: "Jhons", id: 3 };

let users = [ jhon, pete, mary ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

alert( usersMapped[0].id );         //1
alert( usersMapped[0].fullName );   // Jhon Smith