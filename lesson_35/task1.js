"use sctrict";

function makeCounter() {
	let count = 0

  function counter() {
    return count++;
  };

  counter.set = value => count = value;

  counter.decrease = () => count--;

  return counter;
}

let counter = makeCounter();
alert( counter() );   // 0
alert( counter() );   // 1
alert( counter() );   // 2

counter.set(4);
alert( counter() );   // 4
alert( counter() );   // 5

counter.decrease();
counter.decrease();
counter.decrease();
alert( counter.decrease() );   // 3