"use strict";

{
  alert( 'Hello!' );
  // the saame
  window.alert( 'Hello!' );
}

/* ----- */
{
  var gVar = 5;
  alert(window.gVar);   //5

  let gLet = 5;
  alert(window.gLet);   // undefined
}

/* ----- */
{
  window.currentUser = {    // if we too need global variable, we can write it down instead of 'var'
    name: "John"
  };

  alert( currentUser.name );   // John

  alert( window.currentUser.name );   // John
}