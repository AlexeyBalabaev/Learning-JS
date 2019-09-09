"use sctrict";

function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);

  let result = now - today;

  return Math.round(result / 1000);
}

alert( getSecondsToday() );