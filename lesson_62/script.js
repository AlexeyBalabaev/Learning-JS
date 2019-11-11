"use strict";

{
  let promise = Promise.resolve();

  promise.then(() => alert("The promise is complited."));

  alert("The code is completed.");   // This alert will show the first
}