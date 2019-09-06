"use sctrict";

function sumSalaries(salaries) {
  let sum = 0;

  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) );   // 650

// or, we can:
/*
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0);
}
*/