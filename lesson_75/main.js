"use strict";

{
  let elem = document.getElementById('elem');

  elem.style.background = 'grey';
}

/* ----- */
{
  let elements = document.querySelectorAll('ul > li:last-child');

  for (let elem of elements) {
    alert(elem.innerHTML);   // test, completed
  }
}

/* ----- */
{
  let firstElem = document.querySelector('ul > li');

  alert(firstElem.innerHTML);   // This
}

/* ----- */
{
  for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"')) {
      alert('LInk to archive: ' + elem.href);
    }
  }
}

/* ----- */
{
  let chapter = document.querySelector('.chapter');   // LI

  alert( chapter.closest('.book') );   // UL
  alert( chapter.closest('.contents') );   // DIV

  alert( chapter.closest('h1') );   // null (because 'h1' - isn't the parent)
}

/* ----- */
{
  let inputs = table.getElementsByTagName('input');

  for (let input of inputs) {
    alert( input.value + ': ' + input.checked );
  }
}