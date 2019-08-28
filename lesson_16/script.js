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
  let id1 = Symbol("id");
  let id2 = Symbol("id");

  alert( id1 == id2 );     // false
}

/* ----- */
{
  let user = { name: "Jhon" };
  let id = Symbol("id");

  user[id] = 1;

  alert( user[id] );    // 1
}

/* ----- */
{
  let id = Symbol("id");

  let user = {
    name: "Jhon",
    [id]: 123,    // just "id: 123" not to work, id will be string
  };
}

/* ----- */
{
  let id = Symbol("id");
  let user = {
    name: "Jhon",
    age: 30,
    [id]: 123,
  };

  for (let key in user) {
    alert( key );     // name, age
  }

  alert( "Directly: " + user[id] );
}

/* ----- */
{
  let id = Symbol("id");
  let user = {
    [id]: 123,
  };

  let clone = Object.assign({}, user);

  alert( clone[id] );    // 123
}

/* ----- */
{
  let obj = { 0: "test" };

  alert( obj["0"] );    // test
  alert( obj[0] );      // test
}

/* ----- */
// Global symbols
{
  let id = Symbol.for("id");
  let idAgain = Symbol.for("id");

  alert( id === idAgain );     // true
}

/* ----- */
{
  let sym = Symbol.for("name");
  let sym2 = Symbol.for("id");

  alert( Symbol.keyFor(sym) );     // name
  alert( Symbol.keyFor(sym2) );    // id
}

/* ----- */
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) );     // name
alert( Symbol.keyFor(localSymbol) );      // undefined

alert( localSymbol.description );         // name