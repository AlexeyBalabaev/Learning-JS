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

// Simple iterable object
/* ----- */
{
  let range = {
    from: 1,
    to: 5,

    *[Symbol.iterator]() {
      for(let value = this.from; value <= this.to; value++) {
        yield value;
      }
    }
  };

  for(let value of range) {
    alert(value);   // 1, then 2, then 3, then 4, then 5
  }
}

// Async iterable object
{
  let range = {
    from: 1,
    to: 5,

    async *[Symbol.asyncIterator]() {
      for(let value = this.from; value <= this.to; value++) {

        await new Promise(resolve => setTimeout(resolve, 1000));

        yield value;
      }
    }
  };

  (async () => {
    for await (let value of range) {
      alert(value);   // 1, then 2, then 3, then 4, then 5
    }
  })
}

/* ----- */
{
  async function* fetchCommits(repo) {
    let url = `https://api.github.com/repos/${repo}/commits`;

    while (url) {
      const response = await fetch(url, {
        headers: {'User-Agent': 'Our script'},
      });

      const body = await response.json();

      let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
      nextPage = nextPage && nextPage[1];

      url = nextPage;

      for(let commit of body) {
        yield commit;
      }
    }
  }

  (async () => {

    let count = 0;

    for await (const commit of fetchCommits('AlexeyBalabaev/Learning-JS-only-for-me')) {

      console.log(commit.author.login);

      if (++count == 100) {
        break;
      }
    }

  })();
}