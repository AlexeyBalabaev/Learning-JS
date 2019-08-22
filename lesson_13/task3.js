"use sctrict";

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n;  i++) {
    result *= x;
  };

  return result;
}

let x = +prompt('Enter number X:', '');
let n = +prompt('Enter number N:', '');

if (n < 1) {
  alert(`Degree ${n} not natural, use another please.`);
} else {
  alert( pow(x, n) );
}