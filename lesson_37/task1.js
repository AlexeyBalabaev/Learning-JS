"use sctrict";

// Variant 1
{
  function printNumbers(from, to) {
    let count = from;

    let timerId = setInterval(function() {
      alert(count);
      if (count == to) {
        clearInterval(timerId);
      }
      count++;
    }, 1000);
  }

  printNumbers(5, 10);
}

// Variant 2
{
  function printNumbers(from, to) {
    let count = from;

    setTimeout(function go() {
      alert(count);
      if (count < to) {
        setTimeout(go, 1000)
      }
      count++;
    }, 1000);

  }

  printNumbers(2, 7);
}

// Variant 3
{
  function printNumbers(from, to) {
    setTimeout(function showNumbers() {
    	alert(from);
    	if (from++ <= to) setTimeout(showNumbers, 1000);
    }, 1000);
  }

  printNumbers(11, 16);
}