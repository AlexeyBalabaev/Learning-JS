"use strict";

// Dinamic imports

// import()
{
  let modulePath = prompt("Which module load?");

  import(modulePath)
    .then(obj => "object of module")
    .catch(err => "error of load")
}

/* ----- */
{
  // say.js
  export function hi() {
    alert(`Hello`);
  }

  export function bye() {
    alert(`Bye`);
  }
}

{
  //dinamic import can look so:
  let {hi, bye} = await import('./say.js');

  hi();
  bye();
}

/* ----- */
{
  // say.js
  // if default export
  export default function() {
    alert("Module loaded (export default)!");
  }
}

{
  let obj = await import('./say.js');
  let say = obj.default;
  // or 1 sthring: let {default: say} = await import('./say.js');

  say();
}