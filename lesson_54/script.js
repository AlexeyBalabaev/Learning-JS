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

    alert( "Sorry, error in the data, we'll try to get them again" )
  }
}