"use strict";

// Simple iterator
{
  let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
      return {
        current: this.from,
        last: this.to,

        next() {
          if(this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
        
      };
    }
  };

  for(let value of range) {
    alert(value);   // 1, then 2, then 3, then 4, then 5
  }
}

/* ----- */
// Async iterator
{
  let range = {
    from: 1,
    to: 5,

    [Symbol.asyncIterator]() {
      return {
        current: this.from,
        last:this.to,

        async next() {
          await new Promise (resolve => setTimeout(resolve, 1000));

          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }

      };
    }
  };

  (async () => {

    for await (let value of range) {
      alert(value);   // 1, 2, 3, 4, 5
    }

  })();
}

/* ----- */
// Simple generator
{
  function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }

  for(let value of generateSequence(1, 5)) {
    alert(value);   // 1, then 2, then 3, then 4, then 5
  }
}

/* ----- */
{
  async function* generateSequence(start, end) {

    for (let i = start; i <= end; i++) {

      // we can use await!
      await new Promise(resolve => setTimeout(resolve, 1000));

      yield i;
    }

  }

  (async () => {

    let generator = generateSequence(1, 5);
    for await (let value of generator) {
      alert(value);   // 1, then 2, then 3, then 4, then 5
    }

  })();
}