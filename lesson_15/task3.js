"use sctrict";

let sum = 0;

let salaries = {
  Jhon: 100,
  Ann: 160,
  Pete: 130,
};

for (let key in salaries) {
  sum += salaries[key];
}

alert( sum );