"use strict";

{
  new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  }).then(function(result) {
    alert(result);   // 1
    return result  * 2;
  }).then(function(result) {
    alert(result);   // 2
    return result * 2;
  }).then(function(result) {
    alert(result);   // 4
    return result * 2;
  });
}

/* ----- */
{
  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  });

  promise.then(function(result) {
    alert(result);   // 1
    return result * 2;
  });

  promise.then(function(result) {
    alert(result);   // 1
    return result * 2;
  });

  promise.then(function(result) {
    alert(result);   // 1
    return result * 2;
  });
}

/* ----- */
{
  new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  }).then(function(result) {
    alert(result);   // 1

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });

  }).then(function(result) {
    alert(result);   // 2

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });

  }).then(function(result) {
    alert(result);   // 4
  });
}

/* ----- */
{
  loadScript("/files/one.js")
    .then(function(script) {
      return loadScript("/files/two.js");
    })
    .then(function(script) {
      return loadScript("/files/three.js");
    })
    .then(function(script) {
      one();
      two();
      three();
    });
}

// the same
{
  loadScript("/files/one.js")
    .then(script => loadScript("/files/two.js"))
    .then(script => loadScript("/files/three.js"))
    .then(script => {
      one();
      two();
      three();
    })
}

/* ----- */
{
  fetch('/files/user.json')
    .then(function(response) {
      return response.text();
    })
    .then(funciton(text) {
      alert(text);
    });
}