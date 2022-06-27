"use strict";

async function load() {
  let say = await import('./say.js');
  say.hi();   // Hello!
  say.bye();  // Bye!
  say.default();   // Module loaded (export default)!
}