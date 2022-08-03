const a = [7, 8, 9];
const b = ['f', 'g', 'h'];

// merge
const c = [...a, ...b];
console.log(c);

// clone
const d = [...b];
console.log(d);

// string -> array
const e = [...'hello'];
console.log(e);

// set -> array
const f = [... new Set([1,1,2,3,4,2])];
console.log(f);

// with functions
function test1() {
  console.log(arguments);
}

test1(3,4,5,6,7);
// create array with arguments
function test2() {
  console.log([...arguments]);
}

test2(3,4,5,6,7);

// node list
// querySelectorAll()
let p = document.querySelectorAll('p');
console.log(p);
console.dir(p);

console.log([...p]);
