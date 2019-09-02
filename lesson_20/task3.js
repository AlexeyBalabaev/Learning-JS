"use sctrict";

function readNumber() {
  let number;

  do {
    number = prompt("Enter a number", 0);
  } while ( !isFinite(number) );

  if (number === null || number === '') return null;

  return +number;
}

alert( readNumber() );