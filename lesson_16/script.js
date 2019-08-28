"use strict";

// Symbol

// This is error
/*{
  let id = Symbol("id");
  alert( id );     // TypeError: CAnnot convert a Symbol value to a string
}*/
/* ----- */
{
  let id = Symbol("id");
  alert( id.toString() );
  
  // or
  alert( id.description );     // id -- only description
}

/* ----- */
{
  let user = { name: "Jhon" };
  let id = Symbol("id");

  user[id] = 1;

  alert( user[id] );    // 1
}