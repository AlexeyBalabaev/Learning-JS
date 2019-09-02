"use strict";

// Strings
{
  let single = 'single-quoted';
  let double = "double-quoted";
  let backticks = `backticks`;

  function sum(a, b) {
    return a + b;
  }

  alert( `1 + 2 = ${sum(1, 2)}.` );   // 1 + 2 = 3

  let guestList = `Guests:
   * Jhon
   * Pete
   * Mary
  `;

  alert(guestList);
}

/* ----- */
{
  let guestList = "Guests:\n * Jhon\n * Peten\n * Mary";
  alert(guestList);

  let str1 = "Hello\nWorld";
  let str2 = `Hello
  World`;

  alert(str1 == str2);    // true

  alert( 'I\'m the Walrus!' );   // I'm the Walrus

  alert( `I'm the Walrus!` );    // I'm the Walrus

  alert( `The backslash: \\` );  // The backslash: \
}

/* ----- */
alert( `My\n`.length );    // 3