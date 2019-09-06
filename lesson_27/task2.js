"use sctrict";

function count(obj) {
  return Object.keys(obj).length;
}

let user = {
	name: "Jhon",
	age: 30
};

alert( count(user) );   // 2