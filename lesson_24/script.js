"use strict";


// iterable

{
  let range = {
    from: 1,
    to: 5
  };

  range[Symbol.iterator] = function() {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };

  for (let num of range) {
    alert(num);    // 1, 2, 3, 4, 5
  }
}

/* ----- */
{
  for (let char of "test") {
    alert( char );   // t, e, s, t
  }
}

/* ----- */
{
  let str = "Hello";
  
  // do the same: for (let char of str) alert(char);
  let iterator = str[Symbol.iterator]();

  while (true) {
    let result = iterator.next();
    if (result.done) break;
    alert(result.value);
  }
}

/* ----- */
{
  let arrayLike ={
    0: "Hello",
    1: "World",
    length: 2
  };

  let arr = Array.from(arrayLike);
  alert(arr.pop());   // World
}

/* ----- */
{
  let range = {
    from: 1,
    to: 5
  };

  range[Symbol.iterator] = function() {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };

  let arr = Array.from(range);
  alert(arr);      // 1,2,3,4,5

  let arrSqrt = Array.from(range, num => num * num);
  alert(arrSqrt);  // 1,4,9,16,25
}

/* ----- */
{
  let str = "𝒳😂";

  let chars = Array.form(str);

  alert(chars[0]);      // 𝒳
  alert(chars[1]);      // 😂
  alert(chars.length);  // 2
}