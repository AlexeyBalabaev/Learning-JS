"use strict";

let tableBox1 = document.querySelector('.table-box1');
let tableBox2 = document.querySelector('.table-box2');
let tableBox3 = document.querySelector('.table-box3');
let tableBox4 = document.querySelector('.table-box4');
let tableBox5 = document.querySelector('.table-box5');

function createCalendar(elem, year, month) {

  let mon = month - 1;
  let d = new Date(year, mon);

  let table = '<table class="calendar"><tr><th>mon</th><th>tue</th><th>wed</th><th>thu</th><th>fri</th><th>sat</th><th>sun</th></tr><tr>';

  for (let i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  }

  while (d.getMonth() == mon) {
    table += '<td>' + d.getDate() + '</td>';

    if (getDay(d) % 7 == 6) {
      table += '<tr></tr>';
    }

    d.setDate(d.getDate() + 1);
  }

  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
  }

  table += '</tr></table>';

  elem.innerHTML = table;
}

function getDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

createCalendar(tableBox1, 2012, 9);
createCalendar(tableBox2, 2013, 8);
createCalendar(tableBox3, 1994, 4);
createCalendar(tableBox4, 2020, 2);
createCalendar(tableBox5, 1000, 1);