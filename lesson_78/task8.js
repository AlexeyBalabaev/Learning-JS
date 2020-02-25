"use strict";

let tableSort = document.querySelector('.table-sort');
let sortedRows = Array.from(tableSort.rows)
  .slice(1)
  .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

tableSort.tBodies[0].append(...sortedRows);