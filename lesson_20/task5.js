"use sctrict";

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );