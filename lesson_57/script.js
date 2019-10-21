"use strict";

// Promise example (successfully completed promise)
{
  let promise  = new Promise(function(resolve, reject) {
    // this function will be executed automatically when new Promise is called

    // after 1 second to signal that the task is completed with result "done"
    setTimeout(() => resolve("done"), 1000);
  });
}

// Promise example (rejected promise)
{
  let promise = new Promise(function(resolve, reject) {
    // after 1 second it'll be reported that the task completed with an error
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });
}

/* ----- */
{
  let promise = new Promise(function(resolve, reject) {
    resolve("done");   // will be completed

    reject(new Error("..."));   // ignore
    setTimeout(() => resolve("..."));   // ignore
  });
}

/* ----- */
{
  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
  });

  // resolve will start the first function transferred to .then
  promise.then(
    result => alert(result), // will display "done!" after 1 second
    error => alert(error)    // won't start
  );
}

/* ----- */
{
  let promise = new Promise(function(resolve, reject) {
    setTTimeout(() => reject(new Error("Whoops!")), 1000);
  });

  // reject will start the second function transferred to .then
  promise.then(
    result => alert(result),  // won't start
    error => alert(error)     // will display "Error: Whoops!" after 1 second 
  )
}

/* ----- */
{
  let promise = new Promise(resolve => {
    setTimeout(() => resolve("done!"), 1000);
  });

  promise.then(alert);   // will display "done!" after 1 second
}

/* ----- */
{
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Error!")), 1000);
  });

  // .catch(f) it's the same that promise.then(null, f)
  promise.catch(alert);   // will display "Errpr: Error!" after 1 second
}

/* ----- */
{
  new Promise ((resolve, reject) => {
    // do something that takes time, and then call resolve/reject
  })
    .finally(() => alert('stop loading indicator'))
    .then(result => 'show result', err => 'show error' )
}