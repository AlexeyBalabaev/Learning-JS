"use strict";

{
  try {

    alert('Start of try block');
    // code witout errors
    alert('End of try block');

  } catch(err) {

    alert('Catch ignore, no have errors');

  }
}

/* ----- */
{
  try {

    alert('Start of try block');
    lalala;   // error
    alert('End of try block (never fulfilled)');

  } catch(err) {

    alert('An error has occured!');

  }
}

/* ----- */
{
  try {
    lalala;   // error
  } catch(err) {

    alert(err.name);   // ReferenceError
    alert(err.message);   // lalala is not defined
    alert(err.stack);   // ReferenceError: lalala is not defined at...

    alert(err);   // ReferenceError: lalala is not defined

  }
}

/* ----- */
{
  let json = "{ incorrect JSON }";

  try{

    let user = JSON.parse(json);   // error
    alert( user.name );

  } catch(err) {

    alert( "Sorry, error in the data, we'll try to get them again" );
    alert( err.name );
    alert( err.message );
  }
}

/* ----- */
{
  let json = '{ "age": 30 }';

  try {

    let user = JSON.parse(json);
    alert( user.name );   // undefined -- we have not property "name"

  } catch(e) {
    alert( "not be fulfilled" );
  }
}

/* ----- */
{
  let error = new Error("Wow, error!");

  alert(error.name);    // Error
  alert(error.message); // Wow, error!

  try {
    JSON.parse("{ bad json }");
  } catch(e) {
    alert(e.name);   // SyntaxError
    alert(e.message);   // Unexpected token o in JSON at position 2
  }
}

/* ----- */
{
  let json = '{ "age": 30 }';

  try {

    let user = JSON.parse(json);

    if (!user.name) {
      throw new SyntaxError("Data is incomplete: no name");
    }

    alert(user.name);
  } catch(e) {
    alert("JSON Error: " + e.message);   // JSON Error: Data is incomplete: no name
  }
}

/* ----- */
{
  let json = '{ "age": 30 }';   // data is incomplete

  try {
    user = JSON.parse(json);   // forgot to add "let" ahead user

    // ...
  } catch(err) {
    alert("JSON Error: " + err);   // JSON Error: ReferenceError: user is not defined
    // no JSON error
  }
}

/* ----- */
{
  let json = '{ "age": 30 }';   // data is incomplete

  try {

    let user = JSON.parse(json);

    if (!user.name) {
      throw new SyntaxError("Data is incomplete: no name");
    }

    blabla();   // unexpected error

    alert( user.name );

  } catch(e) {

    if (e.name == "SyntaxError") {
      alert( "JSON Error: " + e.message );
    } else {
      throw e;
    }
    
  }
}