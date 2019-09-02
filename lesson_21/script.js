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
{
  alert( `My\n`.length );    // 3
}

/* ----- */
{
  let str = `Hello`;

  alert( str[0] );         // H
  alert( str.charAt(0) );  // H

  alert( str[str.length - 1] );  // o

  alert( str[1000] );         // undefined
  alert( str.charAt(1000) );  // ''

  for (let char of str) {
    alert(char);    // H, e, l, l, o
  }
}

/* ----- */
{
  let str = 'Hi';

  /*
  str[0] = 'h';      <-- error
  alert( str[0] );   <-- don't work
  */

  str = 'h' + str[1];
  alert( str );    // hi
}


/* ----- */
{
  alert( 'Interface'.toUpperCase() );   // INTERFACE
  alert( 'Interface'.toLowerCase() );   // unterface

  alert( 'Interface'[0].toLowerCase() );  // i
}

/* ----- */
{
  let str = 'Widget with id';

  alert( str.indexOf('Widget') );  // 0
  alert( str.indexOf('widget') );  // -1

  alert( str.indexOf('id') );      // 1

  alert( str.indexOf('id', 2) );   // 12
}

/* ----- */
{
  let str = 'number numb nu number numBer';
  let target = 'ber';
  let pos = 0;

  while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;

    alert( `Found here: ${foundPos}` );
    pos = foundPos + 1;
  }
}
// or... the same
{
  let str = 'number numb nu number numBer';
  let target = 'ber';
  let pos = -1;

  while ((pos = str.indexOf(target, pos + 1)) != -1) {
    alert( pos );
  }
}

/* ----- */
{
  let str = "Widget with id";

  if (str.indexOf("Widget") != -1) {    // if (str.indexOf("Widget")) { ... }   <-- don't work
    alert("There is a coincidence!");
  }

  if (~str.indexOf("Widget")) {
    alert("THere is a coincidence!");
  }
}

/* ----- */
{
  alert( ~2 );   // -3, the same -(2+1)
  alert( ~1 );   // -2, the same -(1+1)
  alert( ~0 );   // -1, the same -(0+1)
  alert( ~-1 );  //  0, the same -(-1+1)
}

/* ----- */
{
  alert( "Widget with id".includes("Widget") );   // true
  alert( "Hello".includes("Bye") );    // false

  alert( "Midget".includes("id") );    // true
  alert( "Midget".includes("id", 3) ); // false

  alert( "Widget".startsWith("Wid") );  // true
  alert( "Widget".endsWith("get") );    // true
}

/* ----- */
{
  let str = "stringify";

  alert( str.slice(0, 5) );   // strin
  alert( str.slice(0, 1) );   // s

  alert( str.slice(2) );      // ringify

  alert( str.slice(-4, -1))   // gif
}

/* ----- */
{
  let str = "stringify";

  alert( str.substring(2, 6) );   // ring
  alert( str.substring(6, 2) );   // ring
}

/* ----- */
{
  let str = "stringify";

  alert( str.substr(2, 4) );   // ring

  alert( str.substr(-4, 2) );  // gi
}

/* ----- */
{
  alert( 'a' > 'Z' );   // true
  alert( 'Österreich' > 'Zealand' );   // true

  alert( "z".codePointAt(0) );   // 122
  alert( "Z".codePointAt(0) );   // 90

  alert( String.fromCodePoint(90) );  // Z

  alert( 'u005a' );    // Z

  let str = '';

  for (let i = 65; i <= 220; i++) {
    str += String.fromCodePoint(i)
  }
  alert( str );

  // -----
  alert( 'Österreich'.localeCompare('Zealand') ); // -1
}