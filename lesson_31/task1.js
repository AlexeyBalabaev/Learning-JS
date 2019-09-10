"use sctrict";

// Variant 1
{
  function sumTo(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
      sum += i;
    }

    return sum;
  }

  alert( sumTo(1) );   // 1
  alert( sumTo(2) );   // 3
  alert( sumTo(3) );   // 6
  alert( sumTo(4) );   //10
  alert( sumTo(100) ); // 5050
}

// Variant 2
{
  function sumTo(n) {
    if (n == 1) {
      return n;
    } else {
      return n + sumTo(n - 1);
    }
  }

  alert( sumTo(1) );   // 1
  alert( sumTo(2) );   // 3
  alert( sumTo(3) );   // 6
  alert( sumTo(4) );   //10
  alert( sumTo(100) ); // 5050
}

// Variant 2
{
  function sumTo(n) {
    return n * (n + 1) / 2;
  }

  alert( sumTo(1) );   // 1
  alert( sumTo(2) );   // 3
  alert( sumTo(3) );   // 6
  alert( sumTo(4) );   //10
  alert( sumTo(100) ); // 5050
}