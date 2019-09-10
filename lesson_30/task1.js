"use sctrict";

let user = {
  name: "John Smith",
  age: 35
};

user = JSON.stringify(user);
alert(user);

user = JSON.parse(user);
alert(user);
alert(user.name);