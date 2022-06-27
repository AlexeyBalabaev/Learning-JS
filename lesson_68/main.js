"use strict";

{
  // export array
  export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // export contant
  export const MODULES_BECAME_STANDARD_YEAR = 2015;

  //export class
  export class User {
    constructor(name) {
      this.name = name;
    }
  }
}

/* ----- */
{
  // we can write "export" separately
  function sayHi(user) {
    alert(`Hello, ${user}!`);
  }

  function sayBye(user) {
    alert(`Bye, ${user}!`);
  }

  export {sayHi, sayBye};
}

/* ----- */
{
  import * as say from './main.js';

  say.sayHi('John');   // Hello, John!
  say.sayBye('John');  // Bye, John!
}

/* ----- */
{
  // and we can use 'as'
  import {sayHi as hi, sayBye as bye} from './main.js';

  hi('John');   // Hello, John!
  bye('John');  // Bye, John!
}

/* ----- */
{
  // there are by export the same
  ...
  export {sayHi as hi, sayBye as bye};
}

{
  // use it for import
  inport * as say from './main.js';

  say.hi('John');   // Hello, John!
  say.bye('John');  // Bye, John!
}

/* ----- */ 
{
  // default export
  export default class User {   // just add "default"
    constructor(name) {
      this.name = name;
    }
  }
}

/* ----- */
{
  // all these exports correct (without name), because they default
  export default class {
    contructor() { ... }
  }

  export default function(user) {
    alert(`Hello, ${user}!`);
  }

  export default ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
}

/* ----- */
{
  // export
  export default class User {
    constructor(name) {
      this.name = name;
    }
  }

  export function sayHi(user) {
    alert(`Hello, ${user}!`);
  }
}

{
  // import
  import {default as User, sayHi} from './main.js';

  new User('John');
}

// or
{
  import * as user from './main.js';

  let User = user.default;   // default export
  new User('John');
}

/* ----- */
{
  // reexport
  export {sayHi} from './say.js';

  export {default as User} from './user.js';
}

/* ----- */
{
  // auth/index.js

  // import 'login/logout' and export it
  import {login, logout} from './helpers.js';
  export {login, logout};

  // import 'default export' like User and export it
  import User from './user.js';
  export {User};
}

{
  // 'export ... from ...' - just more short variant

  // import 'login/logout' and export it
  export {login, logout} from './helpers.js';

  // import 'default export' like User and export it
  export {default as User} from './user.js';
}

/* ----- */
// reexport of defualt export
{
  // user.js
  export default class User {
    // ...
  }
}

{
  export * from './user.js';   // for reexport named exports
  export {default} from '.user.js';   // for reexport of default
}