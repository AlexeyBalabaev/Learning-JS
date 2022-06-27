let userName = 'Alex';
// let userName = 'Oleg';
userName = 'Oleg';
console.log(userName);

const userLastName = 'Cippa';
// userLastName = 'Kappa';
// const userLastName = 'Kappa';
console.log(userLastName);

const uni = {
  "maths" : 5,
  "english" : 4,
  "russian" : 2
}

uni['physics'] = 5;
uni.chemistry = 5;
console.log(uni);

const uniResult = [3, 4, 5];
// uniResult = [4, 4, 5];
uniResult[0] = 4;
console.log(uniResult);

// Import-Export
import answer from "./js/answer.js";
import answerENG from "./js/answer.js";
import bussiness from "./js/answer.js";

console.log(answer('уборка'));
console.log(answerENG('english'));
console.log(bussiness('торги на бирже'));

import {checkLS, showMessage} from './js/cookies.js';
if(!checkLS()) console.log(showMessage('Problems'));

// arrow functions

// document.querySelector('.btn').onclick = function () {
//   console.log('show click');
// };

document.querySelector('.btn').onclick = () => console.log('show click');

const a1 = () => 4;
console.log(a1());

const a2 = () => 2*4;
console.log(a2());

const a3 = b => b*4;
console.log(a3(3));

const a4 = (b,c) => b*4*c;
console.log(a4(3,2));

// spread and rest
// ...

//spread
const commonWork = ["engineer", "lawyer", "manager"];
console.log(commonWork);
const work = [...commonWork, "blogger", "insta model"]
console.log(work);

const worker = {
  "name" : "Alex",
  "job" : "programmer"
}
console.log(worker);

const company = {
  ...worker,
  "position" : "clean manager"
}
console.log(company);

//rest
const num = (...args) => args;

console.log(num(1,2));
console.log(num(1,2,5));
console.log(num(1,2,77));
console.log(num(1,2,789,120));

// destructuring
const arr = [33,44,55,66,77];
console.log(arr);

const [d1,,d2] = arr;
console.log(d1,d2);
const [d3,,,d4] = arr;
console.log(d3,d4);

const {name, position} = company;
console.log(name,position);
const {job} = company;
console.log(name,position,job);

