"use strict";

{
  Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),   // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),   // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))    // 3
  ]).then(alert);   // when all promises will be fulfilled, result will be 1,2,3
  // each of promise give element of array
}

/* ----- */
{
  let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api,github.com/users/jeresig'
  ];

  let requests = urls.map(url => fetch(url));

  // Promise.all will be wait for fulfilled all promises
  Promise.all(requests)
    .then(response => response.forEach(
      response => alert(`${response.url}: ${response.status}`)
    ));
}

/* ----- */
{
  let names = ['iliakan', 'remy', 'jeresig'];

  let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

  Promise.all(requests)
    .then(responses => {
      for(let response of responses) {
        alert(`${response.url}: ${response.status}`);  // will show 200 for each of links
      }

      return responses;
    })
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(users => users.forEach(user => alert(user.name)));
}

/* ----- */
{
  Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).catch(alert);   // Error: Error!
}

/* ----- */
{
  Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(1), 1000)
    }),
    2,
    3
  ]).then(alert);   // 1,2,3
}

/* ----- */
{
  let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
  ];

  Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => {
      results.forEach((result, num) => {
        if (result.status == "fulfilled") {
          alert(`${urls[num]}: ${result.value.status}`);
        }
        if (result.status == "rejected") {
          alert(`${urls[num]}: ${result.reason}`);
        }
      });
    });

  /* the array results
    [
      {status: 'fulfilled', value: ...object of answer},
      {status: 'fulfilled', value: ...object of answer},
      {status: 'rejected', value: ...object of error},
    ]
  */
}

/* ----- */
// the polyphil
{
  if(!Promise.allSettled) {
    Promise.allSettled = function(promises) {
      return Promise.all(promises.map(p => Promise.resolve(p).then(value => ({
        state: 'fulfilled',
        value: value
      }), error => ({
        state: 'rejected',
        reason: error
      }))));
    };
  }
}

/* ----- */
{
  Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(alert);   // 1
}

/* ----- */
{
  // this is
  // let promise = new Promise(resolve => resolve(value));
  // the same

  let cache = new Map();

  function loadCached(url) {
    if (cache.has(url)) {
      return Promise.resolve(cache.get(url));
    }

    return fetch(url)
      .then(response => response.text())
      .then(text => {
        cache.set(url, text);
        return text;
      });
  }
}