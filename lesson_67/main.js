"use strict";


/* Import* */
import {sayHi, sayBye} from './say.js';

sayHi('John');   // Hello, John!
sayBye('John');  // Bye, John!

/* ----- */
// and we can so:
import * as say from '.say.js';

say.sayHi('John');
say.sayBye('John');

/* ----- */
// we can so (import "as")
import {sayHi as hi, sayBye as bye} from './say.js';

hi('John');   // Hello, John!
bye('John');  // Bye, John!

/* ----- */
// import "as"
import * as say from '.say.js';

say.hi('John');   // Hello, John!
say.bye('John');  // Bye, John!

/* ----- */
// export default
import User from './user.js';    // not {User}, just User

new User('John');