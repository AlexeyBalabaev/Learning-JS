"use strict";

{
  function showMessage() {
    alert( "Hello everyone!" );
  }

  showMessage();
  showMessage();
};

/* ----- */
{
  let userName = 'Jhon';

  function showMessage() {
    userName = 'Ben';

    let message = 'Hi, ' + userName;
    alert( message );
  };

  alert( userName );    // Jhon

  showMessage();

  alert( userName );    // Ben
};

/* ----- */
