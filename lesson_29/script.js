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

/* ----- */
{
  let date = new Date();
  date.setSeconds(date.getSeconds() + 70);

  alert( date );
}

/* ----- */
{
  let date = new Date(2016, 0, 2);   // 2 Jan 2016

  date.setDate(1);  // first date of month
  alert( date );    // 1 Jan 2016

  date.setDate(0);  // first day of month - is 1, so it displays last date of previous month
  alert( date );    // 31 Dec 2015
}

/* ----- */
{
  let date = new Date();
  alert(+date);   // milliseconds, the same, that date.getTime()
}

/* ----- */
{
  let start = new Date();

  for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
  }

  let end = new Date();

  alert( `The cycle worked for ${end - start} milliseconds.` );
}


/* ----- */
{
  function diffSubstract(date1, date2) {
    return date2 - date1;
  }

  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }

  function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
  }

  alert( 'Time diffSubstract: ' + bench(diffSubstract) + 'ms' );
  alert( 'Time diffGetTime: ' + bench(diffGetTime) + 'ms' );
}

/* ----- */
{
  function diffSubstract(date1, date2) {
    return date2 - date1;
  }

  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }

  function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
  }

  let time1 = 0;
  let time2 = 0;

  for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubstract);
    time2 += bench(diffGetTime);
  }

  alert( 'Summary time diffSubstract: ' + time1 );
  alert( 'Summary time diffGetTime: ' + time2 );
}

/* ----- */
{
  let ms = Fate.parse('2012-01-26T13:51:50.417-07:00');
  alert(ms);   // 1327611110417 (timestamp)

  let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
  alert(date);
}

/* ----- */
{
  alert( `Download began ${performance.now()}ms ago` );
}