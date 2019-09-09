"use sctrict";

function getLastDayOfMonth(year, month) {
  let lastDay = new Date(year, month + 1, 0);

  return lastDay.getDate();
}

alert( getLastDayOfMonth(2012, 1) );   // 31
alert( getLastDayOfMonth(2012, 0) );   // 29
alert( getLastDayOfMonth(2013, 1) );   // 28