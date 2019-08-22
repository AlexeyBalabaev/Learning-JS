"use sctrict";

/* (1) */
function checkAge1(age) {
  return (age > 18) ? true : confirm('Parents allowed?');
};

/* (2) */
function checkAge2(age) {
  return (age > 18) || confirm('Parents allowed?');
}