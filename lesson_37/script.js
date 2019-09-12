"use strict";

{
  function sayHi() {
    alert('Hello!');
  }

  setTimeout(sayHi, 1000);
}

/* ----- */
{
  function sayHi(phrase, who) {
    alert( phrase + ', ' + who );
  }

  setTimeout(sayHi, 1000, "Hello", "John");   // Hello, John
}

/* ----- */
{
  // we can use string:
  setTimeout("alert('Hello!')", 1000);   // Hello!
  // but it's better not to do it
}

/* ----- */
{
  // better use function-arrows instead of string:
  setTimeout(() => alert('Hello!'), 1000);   // Hello!
}

/* ----- */
{
  let timerId = setTimeout(() => alert("Nothing happens."), 1000);
  alert(timerId);   // identidier of timer

  clearTimeout(timerId);
  alert(timerId);   // the same identifier (not to use value null after cancel)
}

/* ----- */
{
  let timerId = setInterval(() => alert('tick'), 2000);

  setTimeout(() => { clearTimeout(timerId); alert('stop'); }, 5000);
}

/* ----- */
{
  let timerId = setTimeout(function tick() {
    alert('tick');
    timerId = setTimeout(tick, 2000);
  }, 2000);

  setTimeout(() => { clearTimeout(timerId); alert('stop'); }, 8000);
}

/* ----- 
{
  let delay = 5000;

  let timerId = setTimeout(function request() {
    // ...send request...

    if (...error of server...) {
      delay *= 2;
    }

    timerId = setTimeout(request. delay);

  }, delay);
}
*/

/* ----- */
{
  setTimeout(() => alert('World'));

  alert("Hello");

  // Hello -> World
}