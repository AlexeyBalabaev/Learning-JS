"use strict";

let table = document.body.children(2)

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.background = 'red';
}