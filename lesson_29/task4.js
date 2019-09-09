"use sctrict";

function getDateAgo(date, days) {
  let past = new Date(date);

  past.setDate(date.getDate() - days);
  return past.getDate();
}

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) );    // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) );    // 1, (31 Dec 2014)
alert( getDateAgo(date, 365) );  // 2, (2 Jan 2015)