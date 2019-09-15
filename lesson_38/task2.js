"use sctrict";

function f(x) {
  alert(x);
}

function delay(func, ms) {
  
  return function() {
  	setTimeout(() => func.apply(this, arguments), ms);
  };
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test");
f1500("test");