"use strict";

{
  function promisify(f) {
    return function(...args) {
      return new Promise((resolve, reject) => {
        function callback(err, result) {
          if (err) {
            return reject(err);
          } else {
            resolve(result);
          }
        }

        args.push(callback);

        f.call(this, ...args);
      });
    };
  };

  // using
  // let loadScritPromise = promisify(loadScript);
  // loadScritPromise(...).then(...);
}

/* ----- */
{
  // promisify(f, true)
  function promisify(f, manyArgs = false) {
    return function(...args) {
      return new Promise((resolve, reject) => {
        function callback(err, ...results) {
          if (err) {
            return reject(err);
          } else {
            resolve(manyArgs ? results : results[0]);
          }
        }

        args.push(callback);

        f.call(this, ...args);
      });
    };
  };

  // using
  // f = promisify(f, true);
  // f(...).then(arrayOfResults => ..., err => ...)
}