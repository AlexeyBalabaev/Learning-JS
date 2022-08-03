const a1 = [3,4,5];

const a2 = [];
a2[0] = 5;
a2[4] = 6;

const a3 = [3,4,5,6,8,120,77];

const a4 = [3,4,5,6,8,120,0,77];

// map
let b1 = a1.map( item => {
  console.log(item);
  return item*3;
});
console.log(b1);

let b2 = a2.map( item => {
  console.log(item);
  return item*3;
});
console.log(b2);

let b4 = a1.map( (item, index) => {
  console.log(index);
  return index;
  return 1;
});
console.log(b4);

let b5 = a1.map( (item, index) => {
  return 1;
});
console.log(b5);

// filter
let c1 = a3.filter( item => {
  if (item > 7) {
    return item;
  }
});
console.log(c1);

let c2 = a3.filter( item => {
  if (item > 7) {
    return true;
  }
});
console.log(c2);  // the result is the same like in c1

let c3 = a3.filter( item => {
  if (item > 7) {
    return item*2;
  }
});
console.log(c3);  // the result is the same like in c1 and c2

let c4 = a3.filter( (item, index) => {
  if (item > 7) {
    return index;
  }
});
console.log(c4); // the result is the same like in c1, c2 and c3, but iy's an error, cause we need index

let c5 = a3.filter( item => {
  if (item % 2 === 0) {
    return true;
  }
});
console.log(c5);

let c6 = a4.filter( item => {
  if (item % 2 === 0) {
    return true;
  }
});
console.log(c6);  // The result is 0 inside array

let c7 = a4.filter( item => {
  if (item % 2 === 0) {
    return item;
  }
});
console.log(c7);  // The result is without 0 inside array, so it's an error
