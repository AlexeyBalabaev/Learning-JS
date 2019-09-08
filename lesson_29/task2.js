"use sctrict";

function getWeekDate(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

let date = new Date(2014, 0, 3);  // 3 Jan 2014
alert( getWeekDate(date) );   // Fri