"use strict";

{
  // export of array
  export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // export of constant
  export const MODULES_BECAME_STANDARD_YEAR = 2015;

  // export of class
  export class User {
    constructor(name) {
      this.name = name;
    }
  }
}

/* ----- */
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export {sayHi, SayBye};

/* ----- */
// export "as"
export {sayHi as hi, sayBye as bye};

/* ----- */
// export default
export default class User {
  constructor(name) {
    this.name = name;
  }
}