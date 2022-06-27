"use strict";

import {sayHi} from './sayHi.js';

alert(sayHi);   // function...
sayHi('John');  // Hello, John!

document.body.innerHTML = sayHi('John');