"use strict";

{
  let promise = Promise.resolve();

  promise.then(() => alert("The promise is complited."));

  alert("The code is completed.");   // This alert will show the first
}

/* ----- */
{
  let promise = Promise.reject(new Error("Error in the promise!"));
  promise.catch(err => alert('caught!'));   // caught!

  // not to start, error is proccessed
  window.addEventListener('unhandledrejection', event => {
    alert(event.reason);
  });
}

/* ----- */
{
  let promise = Promise.reject(new Error("Error in the promise!"));

  // Error in the promise
  window.addEventListener('inhandledrejection', event => alert(event.reason));
}

/* ----- */
{
  let promise = Promise.reject(new Error("Error in the promise!"));

  setTimeout(() => promise.catch(err => alert('caught')), 1000);

  //Error in the promise!
  window.addEventListener('enhendledrejection', event => alert(event.reason));
}