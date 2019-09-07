"use strict";

// Date
{
  // new Date()
  let now = new Date();
  alert(now);
}

{
  // new Date(milliseconds)
  let Jan01_1970 = new Date(0);
  alert( Jan01_1970 );   // 01.01.1970

  let Jan02_1970 = new Date(24 * 3600 * 1000);
  alert( Jan02_1970 );   // 02.01.1970
}

{
  // new Date(datestring)
  let date = new Date("2017-01-26");
  alert(date);
}

{
  // new Date(year, month, date, hours, minutes, seconds, ms)
  new Date(2011, 0, 1, 0, 0, 0, 0);  // 1 Jan 2011, 00:00:00
  new Date(2011, 0, 1);   // the same

  let date = new Date(2011, 0, 1, 2, 3, 4, 567);
  alert( date );   // 1.01.2011, 02:03:04.567
}

/* ----- */
{
  let date = new Date();

  alert( date.getHours() );   // hour in current time zone

  alert( date.getUTCHours() );   // hour in time zone UTC+0 (London time without daylight saving)

  alert( new Date().getTimezoneOffset() );  // UTC+3 is displayed -180
}

/* ----- */
{
  // set components of date:
  /*
  setFullYear(year, [month], [date])
  setMonth(month, [date])
  setDate(date)
  setHours(hour, [min], [sec], [ms])
  setMinutes(min, [sec], [ms])
  setSeconds(sec, [ms])
  setMilliseconds(ms)
  setTime(milliseconds)
  */

  let today = new Date();

  today.setHours(0);
  alert(today);  // nowadays and hour 0

  today.setHours(0, 0, 0, 0);
  alert(today);  // nowadays, but time will be exactly 00:00:00.
}

/* ----- */
{
  let date = new Date(2013, 0, 32);  // 32 Jan 2013 ?!?
  alert(date);   // 1st Feb 2013
}

/* ----- */
{
  let date = new Date(2016, 1, 28);
  date.setDate(date.getDate() + 2);

  alert( date );   // 1 Mar 2016
}