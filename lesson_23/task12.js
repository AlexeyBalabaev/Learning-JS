"use sctrict";

function unique(arr) {
  let result = [];

  for (let str of arr) {
  	if (!result.includes(str)) {
  		result.push(str);
  	}
  }

  return result;
}

let strings = ["cat", "cat", "dog", "dog",
  "dog", "dog", "cat", "cat", "=)"
];

alert( unique(strings) );   // cat, dog, =)