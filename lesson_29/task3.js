"use sctrict";

function getLocalDay(date) {
  let day = date.getDay(date);
  let days = ['', "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  if (day == 0) {
    day = 7;
  }

  return days[day];
}

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) );   // Tue