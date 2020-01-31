"use strict";

// Document. Brauser, environment, specifications

function sayHi() {
  alert("Hello");
}

window.sayHi();    // Hello

/* ----- */
{
  alert(window.innerHeight);
}

/* ----- */
{
  document.body.style.background = "grey";

  setTimeout(() => document.body.style.background = "", 1000);
}

/* ----- */
{
  alert(location.href);   // it show the current URL

  if (confirm("Go to Wikipedia?")) {
    location.href = "https://wikipedia.org";   // redirect breuser to another URL
  }
}