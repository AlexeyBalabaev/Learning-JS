"use strict";

/* Cycles */
{
  let i = 3;
  while(i) {
    alert( i );
    i--;
  };
};

/* ----- */
{
  let i = 0;
  do {
  	alert( i );
  	i++;
  } while (i < 3);
};

/* ----- */
{
  for (let i = 0; i < 3; i++) {
  	alert( i );
  };
};

/* ----- */
{
  let sum = 0;

  while (true) {
    let value = +prompt("Enter the number.", '');

    if (!value) break;

    sum += value;
  };

  alert( "Sum: " + sum );
};

/* ----- */
{
  for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;

    alert( i );
  };
};

/* ----- */
{
  outer:for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
      let input = prompt(`Value are in coordinates ${i}, ${j}`, '');

      if(!input) break outer;
    };
  };

  alert( "Ready!" );
};