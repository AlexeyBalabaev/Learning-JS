"use sctrict";

function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);

  let result = tomorrow - now;

  return Math.round(result / 1000);
}

alert( getSecondsToTomorrow() );