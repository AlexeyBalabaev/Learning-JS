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
{
  let userName = 'Jhon';

  function showMessage() {
     let userName = 'Ben';

    let message = 'Hi, ' + userName;
    alert( message );   // Ben
  };

  showMessage();

  alert( userName );    // Jhon
};

/* ----- */
{
  function showMessage(from, message) {
    from = '*' + from + '*';

    alert( from + ': ' + message );
  };

  let from = 'Ann';

  showMessage(from, 'Hello!');        // *Ann*: Hello!
  showMessage(from, 'How are you?');  // *Ann*: How are you?

  alert( from );     // Ann
};

/* ----- */
{
  function showMessage(from, message) {
    alert( from + ': ' + message );
  };

  showMessage('Ann');   // Ann: undefined
};

/* ----- */
{
  function showMessage(from, message = 'text - none') {
    alert( from + ': ' + message );
  };

  showMessage('Ann');   // Ann: text - none
};

/* ----- */
{
  function sum(a, b) {
    return a + b;
  };

  let result = sum(1, 2);
  alert( result );
};

/* ----- */
{
  function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Your parents allowed?');
    };
  };

  let age = prompt('How old are you?', '18');

  if ( checkAge(age) ) {
    alert( 'Accessed!' );
  } else {
    alert( 'Access closed!' );
  };
};

/* ----- */
{
  function doNothing() {};

  alert( doNothing() === undefined );   // true
};

{
  function doNothing() {
    return;
  };

  alert( doNothing() === undefined );   // true
};

/* ----- */
{
  function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;

      alert( i );
    };
  };

  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) return false;
    };
    return true;
  };
};