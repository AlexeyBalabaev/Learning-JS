"use sctrict";

function min(a, b) {
  let result = (a >= b) ? b : a;
  alert( result );
};

min(2, 5);
min(3, -1);
min(1, 1);