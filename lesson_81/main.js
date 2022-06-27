"use strict";

alert( window.innerWidth );
alert( document.documentElement.clientWidth );

/* ----- */
let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.scrollHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

alert('Full height of document with scrolling part: ' + scrollHeight);

/* ----- */
alert('Current scroll from top: ' + window.pageYOffset);
alert('Current scroll from left: ' + window.pageXOffset);