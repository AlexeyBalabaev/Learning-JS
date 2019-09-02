"use sctrict";

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

alert( truncate("I want to say about this topic:", 20) );
alert( truncate("Hello!", 20) );