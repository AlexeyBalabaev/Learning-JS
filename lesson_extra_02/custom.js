// Arrow functions

// part1
function f1() {
  console.log(1);
  console.log(2);
  console.log(3);
}

f1();

console.log(f1.name);

const f2 = () => {
  console.log(1);
  console.log(2);
  console.log(3);
}

f2();

// part2
let count = 0;

document.querySelector('#btn1').addEventListener('click', () => {
  setTimeout(() => {
    debugger;
    count++;
    console.log(count);
  }, 1000)
})

// part 3
const increment = () => {
  debugger;
  count++;
  console.log(count);
};

const timeFunction = () => {
  setTimeout(increment, 1000);
};

document.querySelector('#btn2').addEventListener('click', timeFunction);

// part 4
const a = [1,2,3,4];

let b = a.map( item => item*3);

console.log(b);

// part 5
function z1(n) {
  if( n >= 0) return n;
  else return 0;
}

console.log(z1(2));
console.log(z1(-7));

const z2 = n => n >= 0 ? n : 0;

console.log(z2(2));
console.log(z2(-7));

const z3 = n => (n >= 0 ? n : 0);

console.log(z3(2));
console.log(z3(-7));

const c = [2,3,5,7];
let d = c.map( item => ({'num' : item}));   // without () - there will be an error here
console.log(d);

// part 6
document.querySelector('#btn3').addEventListener('click', () => {
  fetch('file.json')
    .then( res => res.json())
    .then( file => file.forEach(item => {
      console.log(item.name)
    }))
})
// it's not so good, part 7 will show the best practices

// part 7
const readJson = file => {
  file.forEach(item => {
    console.log(item.name)
  });
}

const clickHandle = () => {
  fetch('file.json')
    .then( res => res.json())
    .then( readJson);
}

document.querySelector('#btn4').addEventListener('click', clickHandle);

