"use sctrict";

function multiplyNumeric(obj) {
  for (let key in obj) {
    (typeof obj[key] === "number") ? obj[key] *= 2 : key;
  }
}

let menu = {
	width: 200,
	height: 300,
	title: "My menu",
};

multiplyNumeric(menu);

alert( menu.width );
alert( menu.height );
alert( menu.title );